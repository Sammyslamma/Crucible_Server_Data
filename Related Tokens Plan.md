# Double-Faced Token Support — Full Implementation Plan (v4)

## Overview

This document is the single source of truth for implementing double-faced token
support across two separate projects:

- **Project 1 — Sync Script** (Node.js): `scripts/sync-scryfall.js`
- **Project 2 — Flutter App**: the MTG collection tracker

Both projects must be updated together. The sync script produces the data the
Flutter app consumes, so the sync script changes must be deployed first.

---

## Background: What Are Double-Faced Tokens?

In Magic: The Gathering, some token cards are physically printed with a different
token on each side of the card. For example, the Commander Legends: Battle for
Baldur's Gate (CLB) set includes a token card that has:

- **Front face**: Centaur (3/3 green, Protection from black)
- **Back face**: Horror (1/1 black)

This is ONE physical card that lives in ONE location in a collection. The player
flips it over depending on which token they need.

---

## The Problem

### How Scryfall Represents These Cards

Scryfall treats each face of a double-faced token as a **completely independent
card** with its own unique Scryfall ID, its own name, and no reference to the
other face. There is no field in Scryfall data that says "this token and that
token are two faces of the same physical card."

### How MTGJson Represents These Cards

MTGJson has a field called `tokenParts` on token objects. When a token is part
of a double-faced token card, its `tokenParts` array contains the MTGJson UUIDs
of **all faces** of that physical token card — including itself.

Example from MTGJson:

```
Centaur token:
  uuid: "1ab1d189-ff59-5430-a10d-6221a4842c9d"
  tokenParts: [
    "4960f41c-d50d-552c-a20e-79e7fe7e0566",  ← Horror's UUID
    "1ab1d189-ff59-5430-a10d-6221a4842c9d"   ← Centaur's own UUID
  ]

Horror token:
  uuid: "4960f41c-d50d-552c-a20e-79e7fe7e0566"
  tokenParts: [
    "4960f41c-d50d-552c-a20e-79e7fe7e0566",  ← Horror's own UUID
    "1ab1d189-ff59-5430-a10d-6221a4842c9d"   ← Centaur's UUID
  ]
```

Both faces list **each other** in their `tokenParts` arrays. This is the
authoritative link between them.

### The Current App Limitation

Because the app uses Scryfall data as its source of truth, it has no way of
knowing that Centaur and Horror are two faces of the same physical card. If a
user imports their Centaur/Horror token it gets stored as either a Centaur OR a
Horror — not both. If a deck needs Horror tokens and the user owns a
Centaur/Horror double-faced token, the app cannot recognise that this card
satisfies the Horror requirement.

---

## The Solution

### Core Approach

We use MTGJson's `tokenParts` field as the source of truth to detect which
tokens are faces of the same physical card. During the sync script pipeline
(which already builds a `cardTokenParts` map from `tokenParts`), we derive a
`relatedTokens` field and bake it into `light_index.json.gz`.

The Flutter app then uses this `relatedTokens` field to:

1. Treat double-faced tokens as a single card entry in the collection (one row,
   one location, two faces)
2. Display them as "Centaur // Horror" via a new `displayName` field
3. Recognise that owning this card satisfies a deck requirement for EITHER face

### Naming Convention

When a double-faced token is detected, the two face names are **sorted
alphabetically** and joined with ` // `. This ensures consistency regardless of
which face was imported first. "Centaur // Horror" always, never
"Horror // Centaur".

This alphabetical rule applies **only to double-faced tokens** identified via
`relatedTokens`. All other card types continue to use their existing logic.

### How the Combined Name Is Stored

The `Card` model has `name` declared as `final`. We do NOT change this.
Instead, we add a new nullable field `displayName` to the `Card` model.

- `name` continues to hold the original single-face name (e.g. "Centaur") and
  is used for CSV matching, scryfallId lookups, and all internal logic
- `displayName` holds the combined name (e.g. "Centaur // Horror") when the
  card is a double-faced token, and is `null` for all other cards
- All UI rendering uses `displayName ?? name` so regular cards are unaffected

### Scope of Changes

**We are NOT changing:**
- How any existing card type works
- The `name` field on `Card` (remains final)
- The transform/modal DFC/adventure/split card logic
- The token service ownership logic (name + P/T matching)
- The CSV import format
- `CardGroup.name` grouping logic — cards group by `name` not `displayName`,
  which is correct (a "Centaur" and a "Horror" from different physical cards
  should never be grouped together). Only the rendered label in the UI changes,
  not the internal grouping key

**We ARE adding:**
- A `relatedTokens` field in `light_index.json` for affected tokens
- A `displayName` nullable field on the `Card` model, database table, and mapper
- Detection of `relatedTokens` during detail sync to populate back-face fields
  and set `displayName`
- Token service awareness of `displayName` when matching

---

## Important Edge Cases

### The Same Token Face Can Appear on Multiple Products

The Horror token (1/1 black) appears in two different double-faced token
products:
- Product A: Horror / Centaur
- Product B: Horror / Eldrazi Horror (3/2 colorless)

These are two **different physical cards**. They are tracked separately in the
collection. The `relatedTokens` field correctly handles this because each
product's UUIDs form a distinct set.

### One Physical Card Satisfies Only One Requirement At A Time

If a deck needs both a Centaur token AND a Horror token simultaneously, the user
cannot use the same physical Centaur/Horror card for both at once. This is
handled naturally by the existing allocation logic — the card is one row with one
`rowId`, so it can only be allocated once.

### CSV Re-import After displayName Is Set

After detail sync, `card.displayName` is "Centaur // Horror" but `card.name`
remains "Centaur". If the user re-imports their CSV, the import creates cards
with `name = "Centaur"`. The merge logic matches by `scryfallId` first, so the
card is matched correctly and `displayName` will be re-populated at the next
detail sync. No data loss.

### `copyWithVersion()` and `displayName`

`copyWithVersion()` currently nulls all detail fields when the user switches a
card's version. `displayName` should be **preserved** through version changes —
the double-faced nature of a token card does not change between printings. Add
`displayName: displayName` to the `copyWithVersion()` return value (see
Change 1 below).

---

## Project 1: Sync Script Changes (`scripts/sync-scryfall.js`)

### Key Insight: No Extra Iteration Needed

`extractTokenParts()` already walks every MTGJson entry and builds
`cardTokenParts[scryfallId]` = array of Scryfall IDs from that token's
`tokenParts` field, including the token's own Scryfall ID.

So for the Centaur token:
```
cardTokenParts["centaur_scryfall_id"] = ["horror_scryfall_id", "centaur_scryfall_id"]
```

To derive `relatedTokens`, we filter out the current card's own Scryfall ID.
No separate function or extra iteration needed.

### The One Change: Update `mergeLightIndex()`

Replace the existing `mergeLightIndex()` function. The **function signature is
unchanged** — no new parameters. The call site in `sync()` does not change.

```javascript
/**
 * Merge Scryfall cards with MTGJson data and project to light index format.
 * Now also includes relatedTokens for double-faced token cards, derived
 * from the already-built cardTokenParts map.
 *
 * relatedTokens logic:
 * cardTokenParts[scryfallId] contains ALL faces of a double-faced token
 * (including the token itself). Filtering out the current scryfallId gives
 * the OTHER faces — these are the relatedTokens.
 * Single-faced tokens have no cardTokenParts entry, or their entry only
 * contains their own ID, so relatedTokens will be empty and not added.
 */
function mergeLightIndex(scryfallCards, cardTokenParts, scryfallToUuid = {}) {
  console.log('🔀 Merging light index with tokenParts, relatedTokens, and projecting fields...');
  const merged = {};

  for (const [scryfallId, card] of Object.entries(scryfallCards)) {
    const projected = projectLightCard(card);
    projected.mtgjsonUuid = scryfallToUuid[scryfallId] || null;

    if (cardTokenParts[scryfallId]) {
      projected.tokenParts = cardTokenParts[scryfallId];

      // Derive relatedTokens: other faces of this double-faced token.
      // cardTokenParts includes the token's own Scryfall ID, so filter it out.
      const relatedTokens = cardTokenParts[scryfallId].filter(id => id !== scryfallId);
      if (relatedTokens.length > 0) {
        projected.relatedTokens = relatedTokens;
      }
    }

    merged[scryfallId] = projected;
  }

  console.log(`✅ Merged and projected ${Object.keys(merged).length} cards`);

  const doubleFacedCount = Object.values(merged).filter(c => c.relatedTokens).length;
  console.log(`   Double-faced token faces detected: ${doubleFacedCount}`);

  return merged;
}
```

### Expected Output

```json
{
  "centaur_scryfall_id": {
    "name": "Centaur",
    "layout": "token",
    "power": "3",
    "toughness": "3",
    "tokenParts": ["horror_scryfall_id", "centaur_scryfall_id"],
    "relatedTokens": ["horror_scryfall_id"]
  },
  "horror_scryfall_id": {
    "name": "Horror",
    "layout": "token",
    "power": "1",
    "toughness": "1",
    "tokenParts": ["horror_scryfall_id", "centaur_scryfall_id"],
    "relatedTokens": ["centaur_scryfall_id"]
  }
}
```

---

## Project 2: Flutter App Changes

### Confirmed Existing Methods (do not need to be created)

- `getCardData(scryfallId)` — exists on `ScryfallService`, returns
  `_cardIndex[scryfallId] as Map<String, dynamic>?`
- `_extractFaceDetails(Map<String, dynamic>)` — exists on `ScryfallService`
  as a private helper, returns a map with keys: `manaCost`, `type`, `subtype`,
  `colors`, `powerToughness`, `keywords`, `cardText`, `flavorText`, `artist`

---

### Change 1: Add `displayName` to the `Card` model

**File**: `lib/models.dart`

Add a new nullable non-final field `displayName` to the `Card` class. This is
the ONLY change to the `Card` model's fields — `name` remains `final`.

**In the field declarations**, add:
```dart
String? displayName; // Combined name for double-faced tokens e.g. "Centaur // Horror"
```

**In the constructor**, add:
```dart
this.displayName,
```

**In `toJson()`**, add:
```dart
'displayName': displayName,
```

**In `fromJson()`**, add:
```dart
displayName: j['displayName'] as String?,
```

**In `copyWith()`**, add the parameter and assignment:
```dart
// Parameter:
String? displayName,
// In the returned Card:
displayName: displayName ?? this.displayName,
```

**In `copyWithVersion()`**, preserve `displayName` explicitly. The
double-faced nature of a token does not change between printings:
```dart
// Add to the Card(...) constructor call inside copyWithVersion():
displayName: displayName,
```

---

### Change 2: Add `displayName` to the Drift database layer

`displayName` must be persisted to the SQLite database, otherwise it is lost
on app restart after detail sync.

**File a: `lib/database/tables/cards_table.dart`**

Add a new nullable text column:
```dart
TextColumn get displayName => text().nullable()();
```

**File b: `lib/database/mappers/card_mapper.dart`**

In `fromRow()`, pass the new column value to the `Card` constructor:
```dart
displayName: row.displayName,
```

In `toCompanion()`, include the new field:
```dart
displayName: Value(card.displayName),
```

**File c: Regenerate Drift code**

After modifying `cards_table.dart`, the Drift-generated file
`lib/database/app_database.g.dart` must be regenerated. Run:

```
dart run build_runner build --delete-conflicting-outputs
```

This must be run before building or running the app. Do not manually edit
`app_database.g.dart` — it is fully auto-generated.

---

### Change 3: Update UI name rendering

**What**: Everywhere the UI displays a card's name to the user, replace
`card.name` with `card.displayName ?? card.name`. This means regular cards
(where `displayName` is null) render exactly as before, and double-faced tokens
render as "Centaur // Horror".

**Do NOT change** `card.name` in logic code — only in UI rendering.

**Files to update:**
- `lib/widgets/collection/collection_table_view.dart` — both the collapsed group
  row label AND the expanded individual card row cell
- `lib/utils/column_cell_builder.dart` — the card name text widget

**Collapsed group row (`collection_table_view.dart`)**: The collapsed row renders
`group.name`, which comes from `card.name` (the final field). Since `card.name`
is still "Centaur", the collapsed row would incorrectly show "Centaur" rather
than "Centaur // Horror". Fix this by rendering:

```dart
// Instead of:
Text(group.name, ...)

// Use:
Text(group.versions.first.displayName ?? group.name, ...)
```

This mirrors how regular double-faced cards (transform, modal DFC) display their
full name in the collapsed row. The `group.versions.first` card is always
available since a group always has at least one version.

**Expanded individual rows**: These render through `column_cell_builder.dart`.
Search for `card.name` rendered inside a `Text()` widget and replace with
`card.displayName ?? card.name`.

**Logic usages of `card.name` and `group.name`** (comparisons, keys, lookups,
sorting) must be left unchanged.

**Note on `tokens_modal.dart`**: This file displays token names in the required
tokens list. Check whether it renders `token.name` directly — if so, apply the
same pattern using the `TokenEntry.name` field (which is populated from the
light index's `name` field, i.e. the single-face name). Double-faced tokens in
the required tokens list show only the front face name by design, since the
`TokenEntry` is created per-face from `all_parts` data.

---

### Change 4: `ScryfallService.extractCardDetails()`

**File**: `lib/services/scryfall_service.dart`

**What**: When `extractCardDetails()` is called for a token that has
`relatedTokens` in the light index, populate the back-face fields from the
related token's data and build the combined `displayName`.

**Important notes:**
- The existing code already sets `isDoubleSided = true` for `double_faced_token`
  layout. Do NOT set it again in our new block — it is already handled.
- The existing code tries to populate back-face fields from `card_faces[1]`.
  For double-faced tokens as Scryfall represents them, `card_faces` is empty on
  each face (each face is a separate Scryfall card). So those fields are null
  after the existing block runs. Our new block then correctly populates them
  from the related token's light index entry. This overwrite is intentional.

**Where**: Add immediately before `return result`, after all other result-building
code:

```dart
// ── Double-faced token detection ──────────────────────────────────────────
// If this card has relatedTokens in the light index, it is one face of a
// double-faced token card (e.g. Centaur // Horror).
//
// Note: isDoubleSided is already set to true above for double_faced_token
// layout — we do not set it again here.
//
// The existing card_faces[1] back-face population above produces null values
// for these cards (Scryfall stores each face as an independent card with no
// card_faces array). Our block below correctly populates those fields from
// the related token's light index entry. This is intentional.
final relatedTokens = cardData['relatedTokens'] as List<dynamic>?;
if (relatedTokens != null && relatedTokens.isNotEmpty) {
  final relatedScryfallId = relatedTokens.first as String;
  final relatedData = getCardData(relatedScryfallId);

  if (relatedData != null) {
    // _extractFaceDetails() is an existing private method on ScryfallService.
    // It returns: manaCost, type, subtype, colors, powerToughness, keywords,
    // cardText, flavorText, artist.
    final backDetails = _extractFaceDetails(relatedData);

    result['backManaCost']       = backDetails['manaCost'];
    result['backType']           = backDetails['type'];
    result['backSubtype']        = backDetails['subtype'];
    result['backColors']         = backDetails['colors'];
    result['backPowerToughness'] = backDetails['powerToughness'];
    result['backKeywords']       = backDetails['keywords'];
    result['backCardText']       = backDetails['cardText'];
    result['backFlavorText']     = backDetails['flavorText'];
    result['backArtist']         = backDetails['artist'];

    // Build the combined display name sorted alphabetically.
    // "Centaur" + "Horror" → "Centaur // Horror" always.
    final thisName    = cardData['name'] as String? ?? '';
    final relatedName = relatedData['name'] as String? ?? '';
    final sortedNames = [thisName, relatedName]..sort();
    result['combinedName'] = '${sortedNames[0]} // ${sortedNames[1]}';
  }
}
```

---

### Change 5: `CollectionService.updateCardDetailsFromScryfall()`

**File**: `lib/services/collection_service.dart`

**What**: Map `combinedName` from `extractCardDetails()` onto `card.displayName`.

**Where**: Inside the `for (final card in collection)` loop, after the existing
field mapping block:

```dart
// Double-faced token: set displayName to the combined alphabetical name.
// card.name remains unchanged (it is final) and is used for all internal
// logic. Only UI rendering uses displayName.
if (details.containsKey('combinedName') && details['combinedName'] != null) {
  card.displayName = details['combinedName'] as String;
}
```

---

### Change 6: Image sync in `ScryfallService.downloadAndSaveImage()`

**File**: `lib/services/scryfall_service.dart`

**What**: Download the related token's image as the back image when a card has
`relatedTokens`. Uses the existing `<scryfallId>_back.jpg` convention so the
existing `collection_sync_mixin.dart` back image population works automatically.

**Important**: Check `relatedTokens` FIRST, before the existing `card_faces[1]`
back image block. Wrap the existing `card_faces` block in `else` so it only runs
for regular DFC cards. This avoids the `card_faces` block failing silently and
being overwritten.

**Where**: After the front image is saved, restructure the back image section:

```dart
// Back image: check for double-faced tokens first (relatedTokens),
// then fall back to the regular card_faces approach for transform/modal DFC.
final relatedTokenIds = cardData['relatedTokens'] as List<dynamic>?;
if (relatedTokenIds != null && relatedTokenIds.isNotEmpty) {
  // Double-faced token: download the related token's image as the back image.
  final relatedScryfallId = relatedTokenIds.first as String;
  final relatedData = getCardData(relatedScryfallId);

  if (relatedData != null) {
    final relatedImageUris =
        relatedData['image_uris'] as Map<String, dynamic>?;
    final relatedImageUrl = relatedImageUris?['normal'] as String?;

    if (relatedImageUrl != null) {
      try {
        final backResponse = await http
            .get(Uri.parse(relatedImageUrl))
            .timeout(const Duration(seconds: 15));

        if (backResponse.statusCode == 200) {
          final backImageFile =
              File('${_imageDir!.path}/${scryfallId}_back.jpg');
          await backImageFile.writeAsBytes(backResponse.bodyBytes);
        }
      } catch (e) {
        await _log(
            '⚠  Double-faced token back image download failed for $scryfallId: $e');
      }
    }
  }
} else {
  // Regular DFC (transform, modal_dfc, etc.): use the existing card_faces
  // approach. KEEP THE EXISTING card_faces BACK IMAGE DOWNLOAD CODE HERE.
  // Do not delete it — move it into this else block.
}
```

---

### Change 7: `TokenService.getRequiredTokens()`

**File**: `lib/services/token_service.dart`

Two sub-changes.

#### 7a: Prevent both faces appearing as separate token entries

Add `final processedTokenIds = <String>{};` immediately before the
`for (final dc in deckCards)` loop.

Inside the `for (final part in allParts)` loop, after the self-reference check
(`if (tokenId == dc.scryfallId) continue;`), add:

```dart
// Skip if already processed as the related face of a double-faced token.
if (processedTokenIds.contains(tokenId)) continue;

// Look up token data and mark this token and all its related faces as
// processed so we don't add a duplicate entry for the other face.
final tokenData = _scryfallService.getCardData(tokenId);
final relatedIds = (tokenData?['relatedTokens'] as List<dynamic>? ?? [])
    .map((id) => id as String)
    .toList();
processedTokenIds.add(tokenId);
processedTokenIds.addAll(relatedIds);
```

Remove the separate `final tokenData = _scryfallService.getCardData(tokenId);`
line that already exists below this point — it is now declared above.

#### 7b: Match ownership by checking both faces via `displayName`

Replace the existing `_countOwnedByNamePt()` with:

```dart
int _countOwnedByNamePt(String name, String? powerToughness) {
  return _collection.cards.where((c) {
    // Direct name match (all regular cards and tokens)
    final nameMatches = c.name == name ||
        // Double-faced token: displayName is "Centaur // Horror".
        // Match if either face name matches the searched name.
        (c.displayName != null &&
            c.displayName!.contains(' // ') &&
            c.displayName!.split(' // ').any((part) => part.trim() == name));

    if (!nameMatches) return false;

    if (powerToughness != null && c.powerToughness != powerToughness) {
      return false;
    }
    return true;
  }).length;
}
```

`_buildNameAllocationMap()` does **not** need to change. It builds keys from
the light index's individual face names via `scryfallId` lookups (e.g.
"Centaur"), which already match the keys used in `getRequiredTokens()` lookups.

---

## Summary of All File Changes

### Sync Script (Project 1)

| File | Change |
|------|--------|
| `scripts/sync-scryfall.js` | Update `mergeLightIndex()` to derive and add `relatedTokens` field |

One function updated. No new functions. No signature changes. No extra
iterations. Call site unchanged.

### Flutter App (Project 2)

| File | Change |
|------|--------|
| `lib/models.dart` | Add nullable `displayName` field; update constructor, `toJson`, `fromJson`, `copyWith`, `copyWithVersion` |
| `lib/database/tables/cards_table.dart` | Add nullable `displayName` text column |
| `lib/database/mappers/card_mapper.dart` | Map `displayName` in `fromRow()` and `toCompanion()` |
| `lib/database/app_database.g.dart` | **Auto-generated** — run `dart run build_runner build --delete-conflicting-outputs` after updating the table |
| `lib/services/scryfall_service.dart` | Add double-faced token block at end of `extractCardDetails()` |
| `lib/services/scryfall_service.dart` | Restructure back image download in `downloadAndSaveImage()` |
| `lib/services/collection_service.dart` | Map `combinedName` onto `card.displayName` in `updateCardDetailsFromScryfall()` |
| `lib/services/token_service.dart` | Add `processedTokenIds` tracking in `getRequiredTokens()` |
| `lib/services/token_service.dart` | Update `_countOwnedByNamePt()` to check `displayName` faces |
| `lib/widgets/collection/collection_table_view.dart` | Render `card.displayName ?? card.name` in name column |
| `lib/utils/column_cell_builder.dart` | Render `card.displayName ?? card.name` in name cell |

---

## Deployment Order

1. Update `scripts/sync-scryfall.js` and run it to regenerate
   `light_index.json.gz` with `relatedTokens` fields
2. Deploy the new `light_index.json.gz` to the server
3. In the Flutter project, make all code changes
4. Run `dart run build_runner build --delete-conflicting-outputs`
5. Build and release the updated Flutter app
6. Users sync their data — `updateCardDetailsFromScryfall()` will populate
   `displayName` and back-face fields on any existing double-faced token entries

---

## Testing Checklist

### Sync Script
- [ ] `light_index.json.gz` contains `relatedTokens: ["horror_scryfall_id"]`
      on the Centaur token entry
- [ ] `light_index.json.gz` contains `relatedTokens: ["centaur_scryfall_id"]`
      on the Horror token entry
- [ ] Single-faced tokens have NO `relatedTokens` field
- [ ] Non-token cards have NO `relatedTokens` field
- [ ] Console log reports the number of double-faced token faces detected

### Flutter App — Collection
- [ ] After detail sync, `card.displayName` is "Centaur // Horror"
- [ ] After detail sync, `card.name` is still "Centaur" (unchanged, final)
- [ ] Collection table renders "Centaur // Horror" for the card
- [ ] `isDoubleSided` is true and flip button appears in card detail dialog
- [ ] Back face shows Horror data (type, P/T, card text, artist)
- [ ] Back image is downloaded and `backImagePath` is populated
- [ ] Location tracking still works — one row, one location
- [ ] `displayName` persists after app restart (confirms database layer works)
- [ ] Re-importing CSV does not break anything — scryfallId match still works
- [ ] Changing card version via `copyWithVersion()` preserves `displayName`

### Flutter App — Token Service
- [ ] A deck needing a Centaur token finds the card and shows correct status
- [ ] A deck needing a Horror token finds the card and shows correct status
- [ ] Only ONE token entry appears per physical card in the required tokens list
- [ ] If user owns Horror/Eldrazi Horror AND Centaur/Horror, both appear as
      separate entries
- [ ] A deck needing both Centaur AND Horror tokens shows the card can only
      satisfy one requirement at a time (allocation logic handles this)

### Regression — must not be affected
- [ ] Regular transform cards still work normally
- [ ] Modal DFC cards (e.g. Pathway lands) still work normally
- [ ] Adventure cards still work normally
- [ ] Split cards still work normally
- [ ] Single-faced tokens still work normally
- [ ] CSV import still works normally
- [ ] All cards that are not double-faced tokens have `displayName == null`
      and render their `name` as before — no visual change for normal cards
- [ ] `CardGroup` grouping is unaffected — groups still use `card.name`