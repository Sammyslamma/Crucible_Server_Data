# Double-Faced Token Pairing Fix - Complete Implementation Plan

## Problem Statement

Double-faced tokens can appear in multiple tokenProducts with different pairings. For example:
- Beast 18 // Beast 19 (one physical card)
- Beast 19 // Elephant 20 (another physical card)

The current system creates ambiguous `relatedTokens` that don't distinguish between these pairings, causing incorrect back face assignments and confusion during import.

## Solution Overview

Store all possible pairings for each token in an array, default to the first one during import, and flag tokens with alternatives so users are aware and can manually switch if needed.

---

## Implementation Details

### 1. Sync Script Changes (`sync-scryfall.js`)

**File:** `sync-scryfall.js`
**Function:** `extractTokenParts()`

**Current behavior:**
- Collects ALL tokens across ALL tokenProducts into a single flat array
- Loses the product-level grouping

**New behavior:**
- For each card, iterate through ALL tokenProducts
- For each tokenProduct, extract its tokenParts (exactly 2 tokens per product for double-faced tokens)
- Build an array where each entry is a related token from a different product
- Store as `relatedTokens: [uuid1, uuid2, ...]` representing all possible pairings

**Pseudocode:**
```javascript
function extractTokenParts(mtgjsonCards, uuidToScryfallId) {
  const cardTokenParts = {};

  for (const versions of Object.values(mtgjsonCards)) {
    if (!Array.isArray(versions)) continue;

    for (const card of versions) {
      if (!card.uuid || !card.tokenProducts || !Array.isArray(card.tokenProducts)) continue;

      const scryfallId = uuidToScryfallId[card.uuid];
      if (!scryfallId) continue;

      // NEW: Collect related tokens from each product
      const allRelatedTokens = [];

      for (const product of card.tokenProducts) {
        if (!product.tokenParts || !Array.isArray(product.tokenParts)) continue;

        // For each token in this product, find the OTHER token(s)
        for (const tokenPart of product.tokenParts) {
          const tokenUuid = tokenPart.uuid;
          if (!tokenUuid || tokenUuid === card.uuid) continue; // Skip self

          const tokenScryfallId = uuidToScryfallId[tokenUuid];
          if (tokenScryfallId && !allRelatedTokens.includes(tokenScryfallId)) {
            allRelatedTokens.push(tokenScryfallId);
          }
        }
      }

      if (allRelatedTokens.length > 0) {
        cardTokenParts[scryfallId] = allRelatedTokens;
      }
    }
  }

  return cardTokenParts;
}
```

**Result:**
- Beast 18: `relatedTokens: ["50d90039-6e75-4c76-893d-cd1686a36be9"]` (Beast 19)
- Beast 19: `relatedTokens: ["06d59ee8-446e-427f-ac88-53f5fa378384", "8c4d495a-b4b7-4119-ae2d-5b602a0b309f"]` (Beast 18, Elephant 20)

---

### 2. Database Schema Changes (`cards_table.dart`)

**File:** `lib/database/tables/cards_table.dart`

**Add new field:**
```dart
BoolColumn get hasAlternativePairings => boolean().nullable()();
```

This tracks whether a token has multiple possible back face options.

---

### 3. Scryfall Service Changes (`scryfall_service.dart`)

**File:** `lib/services/scryfall_service.dart`
**Function:** `extractCardDetails()`

**Current behavior:**
- Uses `relatedTokens.first` (assumes only one related token)

**New behavior:**
- Still use `relatedTokens.first` (default to first pairing)
- But return a flag indicating if alternatives exist

**Changes around line 465-503:**
```dart
// In the relatedTokens handling block
if (relatedTokens != null && relatedTokens.isNotEmpty) {
  final relatedScryfallId = relatedTokens.first as String; // Default to first
  final relatedData = getCardData(relatedScryfallId);
  
  // ... extract back face data from relatedData ...
  
  // NEW: Flag if alternatives exist
  details['hasAlternativePairings'] = (relatedTokens.length > 1);
  details['alternativePairingIds'] = relatedTokens; // Store all options
}
```

---

### 4. Collection Service Changes (`collection_service.dart`)

**File:** `lib/services/collection_service.dart`
**Function:** `updateCardDetailsFromScryfall()`

**Around line 334-335, after setting displayName:**
```dart
// Set the alternative pairings flag
if (details.containsKey('hasAlternativePairings') && details['hasAlternativePairings'] == true) {
  card.hasAlternativePairings = true;
}
```

This ensures the flag is persisted to the database.

---

### 5. Card Model Changes (`models.dart`)

**File:** `lib/models.dart` (or wherever the Card model is defined)

**Add field to Card class:**
```dart
bool? hasAlternativePairings;
```

---

### 6. Card Mapper Changes (`card_mapper.dart`)

**File:** `lib/database/mappers/card_mapper.dart`

**In `fromRow()` method:**
```dart
hasAlternativePairings: row.hasAlternativePairings,
```

**In `toCompanion()` method:**
```dart
hasAlternativePairings: Value(card.hasAlternativePairings),
```

---

### 7. UI Indicator (Optional - Card Details or List View)

**Display a visual indicator for cards with `hasAlternativePairings == true`:**
- Small icon/badge next to the card name
- Text: "Alternative pairing available"
- Button: "View alternatives" or "Change pairing"
- Could possibly add this in card dialog window or possibly in the collection UI in name section

**When clicked, show:**
- Current pairing (e.g., "Beast 19 // Beast 18")
- Alternative pairings (e.g., "Beast 19 // Elephant 20")
- Button to switch to alternative

**Switching logic:**
- Look up the alternative token's scryfallId from the light index
- Call `extractCardDetails()` with that token's ID to get the alternative back face data
- Update the card in the database
- Optionally set `hasAlternativePairings = false` if user confirms

---

## What Stays the Same

**The alphabetical swap logic** (`_ensureAlphabeticalFaceOrder()` in `collection_service.dart`):
- Works exactly as implemented
- Automatically handles the selected pairing correctly
- No changes needed

---

## Testing Checklist

- [ ] Beast 18 imported → shows Beast 19 as back face
- [ ] Beast 19 imported → defaults to Beast 18 as back face, shows "alternative pairing available" badge
- [ ] Beast 19 card with badge clicked → shows "Beast 19 // Elephant 20" as alternative
- [ ] User switches to alternative → card updates, back face shows Elephant 20
- [ ] Angel // Cat still works correctly (has 1 pairing, no badge)
- [ ] All double-faced tokens display in alphabetical order (front = alphabetically first)
- [ ] Multiple imports don't create duplicates (quantity increases instead)

---

## Notes

- This is a limitation caused by WotC not labeling tokens correctly
- The manual override feature allows users to fix cases where the default pairing was wrong
- Once a user confirms their choice, they won't see the alternative offer again (unless we add an "undo" feature)