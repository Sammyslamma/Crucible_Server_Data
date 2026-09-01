# Purchase URI Integrity — Design & Implementation Spec

## Goal

**One rule: a displayed price must always have an exact, working purchase link for the correct card, and nothing else is clickable.**

- Displayed price ⟹ exact product-page URI exists for that face + store.
- No price ⟹ dash (inert, tooltip explains).
- No search-page stubs, no constructed-URL guesses presented as links, no fallback chains that can land on an unrelated card.

## Background / root cause recap

The two data pipelines have per-store coverage mismatches:

| Store | Price source | URI source | Mismatch mode |
|---|---|---|---|
| TCGplayer | MTGJSON (`AllPricesToday`) | Scryfall `purchase_uris` | Scryfall emits **search stubs** (`tcgplayer.com/search/...`) for tokens with no TCG product; MTGJSON prices tokens Scryfall doesn't link |
| Cardmarket | MTGJSON | Scryfall `purchase_uris` | Same — `Search?searchString=...` stubs |
| Card Kingdom | MTGJSON **and** CK's live pricelist | CK's live pricelist API (`listing.scryfall_id`) | MTGJSON prices a token but CK's pricelist may not contain a linkable listing with that `scryfall_id` |
| ManaPool | MTGJSON | ManaPool API (in-stock only) | Out-of-stock = no URL despite MTGJSON price |

Concrete proof: Poison Counter TONE (`40255bfa-0004-45f1-a31b-17d385f09a95`) has CK $0.69 / MP $0.77 in the price index but **no CK URI and only search stubs for TC/CM**. Clicking the TCGplayer stub landed the user on an unrelated TCGplayer search result.

## PART A — sync-scryfall.js (server, implemented 2026-09-01)

- **A1** `createMtgJsonToScryfallMap()` now also returns `vendorIdsByScryfallId` built from MTGJSON `identifiers` (`tcgplayerProductId`, `cardmarketId`). In `mergeLightIndex()`, exact product URLs are constructed from these and inserted after the ManaPool/CK URL merge, guarded so an existing exact URL is never downgraded. **No Card Kingdom ID fallback** — CK product pages are slug-based and an ID cannot build an exact page; CK stays "price without link → dash" where the live pricelist missed a card.
- **A2** `copyPurchaseUris()` in `projectLightCard()` rejects search stubs: a TCGplayer URL without `/product/` or a Cardmarket URL without `idProduct=` is dropped and counted in `stubDropCounts`.
- **A3** Summary logs report stubs dropped per vendor, MTGJSON-derived URLs added per vendor, and per-vendor price⟺link alignment (`aligned` / `pricedNoLink` / `linked`). A warning is pushed to the manifest when the stub-drop count exceeds 10% of cards.
- **A4** Untouched: ManaPool/CK API merging, `tokenPairings`/`relatedTokens`/`tokenParts` extraction, price index generation.

## PART B — the app (Flutter side, implemented by app maintainer)

### B1. Link-gated price display

`lib/services/collection_service.dart` — `_populatePurchaseUrls()` and `updatePricesFromPriceService()`:

1. Reorder `fullSync`: `_populatePurchaseUrls()` **before** `updatePricesFromPriceService()`.
2. `_populatePurchaseUrls` returns/records `hasExactUrl: Map<String scryfallId, Map<PriceSource, bool>>` — per vendor, derived from the `buildUrlRow` data it already fetches (post-A2, anything non-null is exact).
3. In `updatePricesFromPriceService`, when applying `applyPrices(back: …)` for vendor V on face F, **skip the write** unless `hasExactUrl[faceId][V] == true`. Front gates on `frontScryfallId ?? scryfallId`, back gates on `backScryfallId`.

### B2. Inert dashes, no fallback chain

`lib/utils/column_cell_builder.dart` (`priceCell`), `lib/utils/purchase_url_helper.dart` (`ClickablePriceText`, `openPurchaseUrl`), `lib/widgets/collection/card_details_dialog.dart`:

- `openPurchaseUrl`: remove the ManaPool fallback (`url == null → _openManapool(null, …)`). Missing URL = do nothing.
- `ClickablePriceText`: dash renders plain + tooltip, **no `GestureDetector`** — only non-dash text is tappable.
- Remove the ManaPool constructed-URL "floor" rows in `_populatePurchaseUrls`.

### B3. Details dialog

- Face-aware price/URI logic stays; B1 guarantees price implies link. Keep "Purchase link unavailable" popup as safety net.
- `_changeTokenPairing` must re-gate: after re-pairing, fetch the new back face's URL row; if no exact URL for the vendor, clear that face's back-price columns.

### B4. Header tooltips

Price column headers: "*{Store}* price — click a price to open its store listing. A dash means no listing is available for that face."

### B5. Tests

- `test/dfc_price_resolver_test.dart`: add link-gating cases.
- URL-helper tests: remove fallback-chain assumptions.
- `dart analyze` + `flutter test` clean; regenerate indexes → fresh DB → resync → verify Mite // Poison Counter and an Angel // X token.
