# Double-Faced Token Pairing — Master Implementation Plan

## Background
Tokens like Beast 18/19 from CMR are physically printed as double-faced token
cards but Scryfall does not assign them `layout: double_faced_token`. MTGJson's
`tokenProducts[].tokenParts[]` structure contains the per-product pairing data.

### Key Data
- Beast 18 (`scryfallId: 06d59ee8`, `uuid: 8903fa50`) — one product: [Beast18, Beast19]
- Beast 19 (`scryfallId: 50d90039`, `uuid: cf393d4e`) — two products: [Beast18, Beast19], [Beast19, Elephant20]
- Elephant 20 (`scryfallId: 8c4d495a`, `uuid: 17970de2`) — two products: [Elephant20, Soldier], [Beast19, Elephant20]

### Rules
- Existing `relatedTokens` logic for `layout: double_faced_token` cards is NOT touched
- `tokenPairings` is additive — only set when `layout !== 'double_faced_token'` (NOT guarded by `!relatedTokens` — Beast 18/19 have both relatedTokens from the flat set AND need tokenPairings)
- Default pairing = `tokenPairings[0]`, other face = the ID in the pair that is not this card
- Canonical face when deduplicating = alphabetically first card name; when names are equal (e.g. Beast vs Beast) the lower collector number wins — Beast #18 is front, Beast #19 is back
- Image assignment: canonical face (alphabetically first) always stored as front image; if the imported card is alphabetically second its image is renamed to `_back.jpg` and the other face's image becomes the front
- `combinedName` is set by `extractCardDetails` and consumed by `_ensureAlphabeticalFaceOrder` — no conflict, they run sequentially on different objects
- Existing collections are wiped — no migration needed
- Edit flow for swapping pairings is out of scope for this plan

---

## Part 1 — Node.js Sync Script (mtgjson_sync.js)

### Change 1 — Replace `extractTokenParts`

The current function flattens all tokenParts across all products into one Set.
Replace the entire function with a version that builds BOTH the existing flat
set (for relatedTokens) AND a new per-product pairs array (for tokenPairings).

```javascript
function extractTokenParts(mtgjsonCards, uuidToScryfallId) {
  console.log('🎴 Extracting tokenParts from MTGJson (per-product pairs)...');

  const cardTokenParts = {};     // unchanged — flat set for relatedTokens
  const cardTokenPairings = {};  // new — per-product pairs for tokenPairings

  for (const versions of Object.values(mtgjsonCards)) {
    if (!Array.isArray(versions)) continue;

    for (const card of versions) {
      if (!card.uuid || !card.tokenProducts || !Array.isArray(card.tokenProducts)) continue;

      const scryfallId = uuidToScryfallId[card.uuid];
      if (!scryfallId) continue;

      const allTokenScryfallIds = new Set();
      const pairings = [];

      for (const product of card.tokenProducts) {
        if (!product.tokenParts || !Array.isArray(product.tokenParts)) continue;

        const pair = [];
        for (const tokenPart of product.tokenParts) {
          const tokenUuid = tokenPart.uuid;
          if (!tokenUuid) continue;
          const tokenScryfallId = uuidToScryfallId[tokenUuid];
          if (tokenScryfallId) {
            pair.push(tokenScryfallId);
            allTokenScryfallIds.add(tokenScryfallId);
          }
        }

        // Only store pairs of exactly 2 (one physical double-faced token = 2 faces)
        if (pair.length === 2) {
          pairings.push(pair);
        }
      }

      // Existing flat set — unchanged, used downstream for relatedTokens
      if (allTokenScryfallIds.size > 0) {
        cardTokenParts[scryfallId] = [...allTokenScryfallIds];
      }

      // New per-product pairings — only store if this card pairs with another card
      if (pairings.length > 0) {
        const hasOtherFace = pairings.some(pair => pair.some(id => id !== scryfallId));
        if (hasOtherFace) {
          cardTokenPairings[scryfallId] = pairings;
        }
      }
    }
  }

  console.log(`✅ Extracted ${Object.keys(cardTokenParts).length} cards with tokenParts`);
  console.log(`✅ Extracted ${Object.keys(cardTokenPairings).length} cards with tokenPairings`);

  return { cardTokenParts, cardTokenPairings };
}
```

---

### Change 2 — Update `mergeLightIndex` signature and body

Add `cardTokenPairings = {}` as a new third parameter (before `scryfallToUuid`).
After the existing `relatedTokens` block, add the new `tokenPairings` block.
The existing `relatedTokens` logic is completely unchanged.

```javascript
function mergeLightIndex(scryfallCards, cardTokenParts, cardTokenPairings = {}, scryfallToUuid = {}) {
  console.log('🔀 Merging light index with tokenParts, tokenPairings, relatedTokens, and projecting fields...');
  const merged = {};

  for (const [scryfallId, card] of Object.entries(scryfallCards)) {
    const projected = projectLightCard(card);
    projected.mtgjsonUuid = scryfallToUuid[scryfallId] || null;

    // EXISTING — unchanged
    if (cardTokenParts[scryfallId]) {
      projected.tokenParts = cardTokenParts[scryfallId];
      const relatedTokens = cardTokenParts[scryfallId].filter(id => id !== scryfallId);
      if (relatedTokens.length > 0) {
        projected.relatedTokens = relatedTokens;
      }
    }

    // NEW — only set if Scryfall did not already mark this as double_faced_token.
    // We cannot use !projected.relatedTokens as the guard because Beast 18/19
    // also get relatedTokens from the flat set above (they have tokenProducts),
    // which would block tokenPairings from ever being set for them.
    // Checking layout === 'double_faced_token' correctly targets only the cards
    // Scryfall natively handles, leaving layout: 'token' cards like Beast 18/19
    // to receive tokenPairings regardless of whether relatedTokens is also set.
    if (cardTokenPairings[scryfallId] && projected.layout !== 'double_faced_token') {
      projected.tokenPairings = cardTokenPairings[scryfallId];
      projected.hasAlternativePairings = cardTokenPairings[scryfallId].length > 1;
    }

    merged[scryfallId] = projected;
  }

  console.log(`✅ Merged and projected ${Object.keys(merged).length} cards`);

  const doubleFacedCount = Object.values(merged).filter(c => c.relatedTokens).length;
  const manualPairingCount = Object.values(merged).filter(c => c.tokenPairings).length;
  console.log(`   Double-faced token faces (Scryfall layout): ${doubleFacedCount}`);
  console.log(`   Manually paired token faces (MTGJson): ${manualPairingCount}`);

  return merged;
}
```

---

### Change 3 — Update call site in `sync()`

Find these two lines in `sync()`:

```javascript
// BEFORE
const cardTokenParts = extractTokenParts(mtgjsonCards, uuidToScryfallId);
const lightIndex = mergeLightIndex(scryfallCards, cardTokenParts, scryfallToUuid);

// AFTER
const { cardTokenParts, cardTokenPairings } = extractTokenParts(mtgjsonCards, uuidToScryfallId);
const lightIndex = mergeLightIndex(scryfallCards, cardTokenParts, cardTokenPairings, scryfallToUuid);
```

---

### Change 4 — Add debug verification (temporary, remove after confirming output)

Add immediately after `lightIndex` is built in `sync()`:

```javascript
// DEBUG — verify Beast 18 and 19 are correctly paired
const beast18 = lightIndex['06d59ee8-446e-427f-ac88-53f5fa378384'];
const beast19 = lightIndex['50d90039-6e75-4c76-893d-cd1686a36be9'];
console.log('🔍 Beast 18:', JSON.stringify({
  relatedTokens: beast18?.relatedTokens,
  tokenPairings: beast18?.tokenPairings,
  hasAlternativePairings: beast18?.hasAlternativePairings
}));
console.log('🔍 Beast 19:', JSON.stringify({
  relatedTokens: beast19?.relatedTokens,
  tokenPairings: beast19?.tokenPairings,
  hasAlternativePairings: beast19?.hasAlternativePairings
}));
// END DEBUG
```

Expected output:
```
Beast 18: { tokenPairings: [["06d59ee8...","50d90039..."]], hasAlternativePairings: false }
Beast 19: { tokenPairings: [["06d59ee8...","50d90039..."],["50d90039...","8c4d495a..."]], hasAlternativePairings: true }
```

After confirming, remove the debug block and regenerate.

---

### Sync Script Summary
- `extractTokenParts` — replaced
- `mergeLightIndex` — signature updated, new block added after existing relatedTokens block
- `sync()` call site — two lines updated
- Everything else — unchanged

---

## Part 2 — Dart App

### Change 5 — Card model (models.dart)

Add two new fields to the `Card` class field declarations:

```dart
// Double-faced token manual pairing (MTGJson tokenPairings)
String? tokenPairingBackFaceId;
bool hasAlternativePairings;
```

Add to constructor parameters:

```dart
this.tokenPairingBackFaceId,
this.hasAlternativePairings = false,
```

Add to `toJson()`:

```dart
'tokenPairingBackFaceId': tokenPairingBackFaceId,
'hasAlternativePairings': hasAlternativePairings,
```

Add to `fromJson()`:

```dart
tokenPairingBackFaceId: j['tokenPairingBackFaceId'] as String?,
hasAlternativePairings: j['hasAlternativePairings'] as bool? ?? false,
```

Add to `copyWith()` parameters:

```dart
String? tokenPairingBackFaceId,
bool? hasAlternativePairings,
```

Add to `copyWith()` body:

```dart
tokenPairingBackFaceId: tokenPairingBackFaceId ?? this.tokenPairingBackFaceId,
hasAlternativePairings: hasAlternativePairings ?? this.hasAlternativePairings,
```

Add to `copyWithVersion()` returned Card:

```dart
tokenPairingBackFaceId: null,
hasAlternativePairings: false,
```

---

### Change 6 — Drift database schema

In the Drift cards table definition add two columns:

```dart
TextColumn get tokenPairingBackFaceId => text().nullable()();
BoolColumn get hasAlternativePairings => boolean().withDefault(const Constant(false))();
```

Increment `schemaVersion` by 1.

Add migration step:

```dart
from X to X+1: (m, schema) async {
  await m.addColumn(schema.cards, schema.cards.tokenPairingBackFaceId);
  await m.addColumn(schema.cards, schema.cards.hasAlternativePairings);
},
```

Update the DAO `toCompanion` and `fromRow` methods to map both new fields.

---

### Change 7 — ScryfallService.extractCardDetails (scryfall_service.dart)

After the existing `relatedTokens` block (the one that checks
`cardData['relatedTokens']`), add a new block:

```dart
// Manually-paired double-faced tokens via MTGJson tokenPairings
// Only runs if Scryfall did not already populate relatedTokens
final tokenPairings = cardData['tokenPairings'] as List<dynamic>?;
// Cannot guard on result['isDoubleSided'] because that may already be true
// for unrelated reasons. Guard on layout instead — same logic as the JS side.
if (tokenPairings != null &&
    tokenPairings.isNotEmpty &&
    cardData['layout'] != 'double_faced_token') {

  // Default to first pairing, find the other face ID
  final firstPairing = tokenPairings[0] as List<dynamic>;
  String? backFaceId;
  for (final id in firstPairing) {
    if ((id as String) != scryfallId) {
      backFaceId = id;
      break;
    }
  }

  if (backFaceId != null) {
    final backFaceData = getCardData(backFaceId);
    if (backFaceData != null) {
      final backDetails = _extractFaceDetails(backFaceData);

      result['isDoubleSided']          = true;
      result['tokenPairingBackFaceId'] = backFaceId;
      result['hasAlternativePairings'] = cardData['hasAlternativePairings'] as bool? ?? false;
      result['backManaCost']           = backDetails['manaCost'];
      result['backType']               = backDetails['type'];
      result['backSubtype']            = backDetails['subtype'];
      result['backColors']             = backDetails['colors'];
      result['backPowerToughness']     = backDetails['powerToughness'];
      result['backKeywords']           = backDetails['keywords'];
      result['backCardText']           = backDetails['cardText'];
      result['backFlavorText']         = backDetails['flavorText'];
      result['backArtist']             = backDetails['artist'];

      // Combined display name — alphabetically ordered
      final thisName    = (cardData['name'] as String?) ?? '';
      final backName    = (backFaceData['name'] as String?) ?? '';
      final sortedNames = [thisName, backName]..sort();
      result['combinedName'] = '${sortedNames[0]} // ${sortedNames[1]}';
    }
  }
}
```

---

### Change 8 — CollectionService.updateCardDetailsFromScryfall (collection_service.dart)

In the details population block, after the existing `combinedName` handling, add:

```dart
if (details.containsKey('tokenPairingBackFaceId')) {
  card.tokenPairingBackFaceId = details['tokenPairingBackFaceId'] as String?;
}
if (details.containsKey('hasAlternativePairings')) {
  card.hasAlternativePairings = details['hasAlternativePairings'] as bool? ?? false;
}
```

---

### Change 9 — Add deduplication method to CollectionService (collection_service.dart)

Add this new method to `CollectionService`:

```dart
/// After import and detail sync, find manually-paired double-faced tokens
/// where both faces were imported as separate cards and merge them.
/// Canonical face = alphabetically first name. The other face is removed.
/// Quantity stays the same — 1 physical card = 1 row regardless of faces.
List<Card> deduplicateManuallyPairedTokens(List<Card> collection) {
  final scryfallIndex = <String, Card>{
    for (final c in collection) c.scryfallId: c
  };

  final toRemove = <String>{};
  final result   = <Card>[];

  for (final card in collection) {
    if (toRemove.contains(card.scryfallId)) continue;

    final backFaceId = card.tokenPairingBackFaceId;
    if (backFaceId == null) {
      result.add(card);
      continue;
    }

    final backFaceCard = scryfallIndex[backFaceId];
    if (backFaceCard == null) {
      // Other face not in collection — keep as single-faced for now
      result.add(card);
      continue;
    }

    if (toRemove.contains(backFaceId)) {
      // Already handled as part of another pair
      result.add(card);
      continue;
    }

    // Both faces present — canonical = alphabetically first name.
    // When names are identical (e.g. Beast // Beast), use collector number
    // as tiebreaker — lower number = front face = canonical.
    final bool thisCardIsCanonical;
    if (card.name != backFaceCard.name) {
      thisCardIsCanonical = card.name.compareTo(backFaceCard.name) < 0;
    } else {
      final thisNumber = int.tryParse(card.collectorNumber) ?? 0;
      final backNumber = int.tryParse(backFaceCard.collectorNumber) ?? 0;
      thisCardIsCanonical = thisNumber < backNumber;
    }

    if (thisCardIsCanonical) {
      toRemove.add(backFaceId);
      result.add(card);
    } else {
      // Back face card is canonical — this card gets removed
      // The canonical card will be added when the loop reaches it
      toRemove.add(card.scryfallId);
    }
  }

  debugPrint('🔀 Deduplicated ${toRemove.length} manually-paired token faces');
  return result;
}
```

---

### Change 10 — Call deduplication after import and detail sync

Find wherever `updateCardDetailsFromScryfall` is called after a CSV import
and add the deduplication call immediately after, then persist:

```dart
await collectionService.updateCardDetailsFromScryfall(collection);

// Merge manually-paired double-faced token faces into single entries
collection = collectionService.deduplicateManuallyPairedTokens(collection);

await db.cardsDao.upsertCards(collection);
```

---

### Change 11 — ScryfallService.downloadAndSaveImage (scryfall_service.dart)

Find the back image download section. It currently has two blocks:
1. `relatedTokenIds` block (double_faced_token via Scryfall)
2. `card_faces` block (transform/modal_dfc)

Add a new block between them for manually-paired tokens:

```dart
// Manually-paired double-faced tokens (tokenPairingBackFaceId from MTGJson)
final tokenPairingBackFaceId =
    cardData['tokenPairingBackFaceId'] as String?;

// Guard on layout, not relatedTokenIds — Beast 18/19 have relatedTokens set
// from the flat tokenParts data so relatedTokenIds would be non-null for them,
// which would incorrectly skip this block. layout: 'double_faced_token' cards
// are already handled by the relatedTokenIds block above.
if (tokenPairingBackFaceId != null && cardData['layout'] != 'double_faced_token') {
  final backFaceData = getCardData(tokenPairingBackFaceId);

  if (backFaceData != null) {
    final backImageUris =
        backFaceData['image_uris'] as Map<String, dynamic>?;
    final backImageUrl = backImageUris?['normal'] as String?;

    if (backImageUrl != null) {
      try {
        final backResponse = await http
            .get(Uri.parse(backImageUrl))
            .timeout(const Duration(seconds: 15));

        if (backResponse.statusCode == 200) {
          final thisName = cardData['name'] as String? ?? '';
          final backName = backFaceData['name'] as String? ?? '';

          // Determine which face is canonical (alphabetically first name).
          // When names are identical (e.g. Beast // Beast), fall back to
          // collector number so the lower-numbered card is always the front.
          // This matches physical reality — Beast #18 is the front, Beast #19 is the back.
          final bool isAlphabeticallySecond;
          if (thisName != backName) {
            isAlphabeticallySecond = thisName.compareTo(backName) > 0;
          } else {
            final thisNumber = int.tryParse(cardData['collector_number'] as String? ?? '') ?? 0;
            final backNumber = int.tryParse(backFaceData['collector_number'] as String? ?? '') ?? 0;
            isAlphabeticallySecond = thisNumber > backNumber;
          }

          final backImageFile =
              File('${_imageDir!.path}/${scryfallId}_back.jpg');

          if (isAlphabeticallySecond) {
            // This card's image goes to back; back face image goes to front
            await imageFile.rename(backImageFile.path);
            await imageFile.writeAsBytes(backResponse.bodyBytes);
          } else {
            // This card is front; save back face as back image
            await backImageFile.writeAsBytes(backResponse.bodyBytes);
          }
        }
      } catch (e) {
        await _log(
            '⚠  tokenPairing back image download failed for $scryfallId: $e');
      }
    }
  }
}
```

---

### Change 12 — Verify CardFaceData (utils/card_face_data.dart)

Open `card_face_data.dart` and check `CardFaceData.fromCard`. If it has any
guards like:

```dart
if (card.layout == 'double_faced_token' || card.layout == 'transform' ...) {
```

Add `|| card.tokenPairingBackFaceId != null` to each such condition so manually-
paired tokens also get back face data populated. If there are no layout guards
and it reads directly from `card.isDoubleSided` and `card.backImagePath`, no
changes are needed.

---

### Change 13 — Verify _ensureAlphabeticalFaceOrder (collection_service.dart)

Open `_ensureAlphabeticalFaceOrder`. It checks `details.containsKey('combinedName')`.
Since Change 7 sets `combinedName` for manually-paired tokens too, this method
will correctly swap front/back data when the imported card is the alphabetically-
second face. No code changes needed — just verify the call is not skipped for
cards with `tokenPairingBackFaceId`.

---

## Execution Order

Execute in this exact order to avoid dependency issues:

1. **Sync script** — make Changes 1, 2, 3, 4
2. **Run sync script** — regenerate `light_index.json.gz`, confirm debug output
3. **Remove debug block** (Change 4), commit and push updated index to GitHub
4. **Dart: Card model** — Change 5
5. **Dart: DB schema** — Change 6
6. **Dart: extractCardDetails** — Change 7
7. **Dart: updateCardDetailsFromScryfall** — Change 8
8. **Dart: deduplicateManuallyPairedTokens** — Change 9
9. **Dart: call deduplication after import** — Change 10
10. **Dart: downloadAndSaveImage** — Change 11
11. **Dart: verify CardFaceData** — Change 12
12. **Dart: verify _ensureAlphabeticalFaceOrder** — Change 13
13. Wipe local app data and collection DB
14. Build and run app, force sync to pull updated light index
15. Import CSV containing Beast 18, Beast 19, Elephant 20 from CMR

---

## Success Criteria

| Test | Expected Result |
|------|----------------|
| Beast 18 + Beast 19 imported together | One entry, displayName "Beast // Beast", front = 3/3 Jesper Ejsing, back = 4/4 Steve Prescott |
| Beast 19 imported alone | Single entry, back face = Beast 18, `hasAlternativePairings = true` |
| Elephant 20 imported alone | Single entry, back face = Beast 19 (first pairing), `hasAlternativePairings = true` |
| Flip button in CardDetailsDialog | Appears and works for all above cases |
| Existing layout: double_faced_token cards | Completely unaffected |
| Regular single-faced tokens | Completely unaffected |