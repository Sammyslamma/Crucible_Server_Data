# Card Kingdom Integration & Pipeline Cleanup — Implementation Record

**Date:** 2026-08-19
**Scope:** `scripts/sync-scryfall.js` (the only file modified today; +327 / -47 at the time of writing)
**Status:** Implemented, validated against the live API, and cleaned up. Remaining recommendations at the bottom.

---

## 1. Why — background & goals

The MTG collection app ("Crucible") is served by a scheduled pipeline (`scripts/sync-scryfall.js`,
run daily via `.github/workflows/sync.yml`) that produces compressed JSON indexes in `docs/`:

- `light_index.json.gz` — the card catalog (Scryfall-projected fields + purchase links + token pairing).
- `light_price_index.json.gz` — current prices per card, per store.
- `manifest.json` — version, store-homepage fallbacks, and per-source stats.

Before today, **Card Kingdom data came from two second-hand sources**:
- Prices from **MTGJson** `AllPricesToday.json` (an aggregated daily snapshot), and
- Purchase links from **Scryfall's** `purchase_uris` (a generic CK product link).

**Goals of this work:**
1. Pull Card Kingdom's **own public pricelist** (first-party, freshest) for both **daily prices** and
   **exact product-page purchase URIs**.
2. Keep it **daily-only** — the app stores no price history; each sync overwrites with the latest
   snapshot. Stale prices simply persist until the user re-syncs.
3. **Never materialize the ~65 MB** singles payload (the known crash: writing/dumping the full card
   endpoint output created a 65 MB file and crashed).
4. **Graceful fallbacks** — if Card Kingdom is unreachable, MTGJson data and Scryfall links remain.
5. Keep the pipeline **clean**: single merged price index (no per-store file duplicates), and lower
   peak memory.

---

## 2. The API we integrated

`go-cardkingdom` (`github.com/mtgban/go-cardkingdom`, v0.1.0) documents two **public, keyless**
endpoints — the Go package was used as the API *spec*, not as the runtime:

| Endpoint | Contents | Size |
|---|---|---|
| `https://api.cardkingdom.com/api/v2/pricelist` | Singles (cards) | **~65 MB** |
| `https://api.cardkingdom.com/api/sealed_pricelist` | Sealed products | small |

Response envelope: `{ "meta": { created_at, base_url }, "data": [ Product, ... ] }`.

Relevant `Product` fields (verified live):

| Field | JSON type | Notes |
|---|---|---|
| `scryfall_id` | string | Join key into the light index; **empty for sealed** |
| `url` | string | **Relative path** (e.g. `mtg/4th-edition/abomination`) — must join with `base_url` |
| `name`, `edition`, `variation` | string | Listing identity (not stored — unused downstream) |
| `is_foil` | `"true"` / `"false"` | String boolean — must coerce |
| `price_retail`, `price_buy` | string (`"0.35"`) | Prices as strings — must coerce |
| `qty_retail`, `qty_buying` | number | Stock quantities |
| `condition_values` | object | Per-condition buylist (unused; buylist disabled) |

**Key facts:**
- One Scryfall card maps to **many listings** (normal/foil × Borderless/Extended Art/etc.) — must reduce to one price + one URL per card.
- Numeric fields arrive as **strings**; `is_foil` as a string.
- `meta.created_at` (`"2026-08-18 19:07:23"`) is the price-list timestamp — used as the daily date key.
- Sealed products have no `scryfall_id` and the app has no pack/box support → intentionally skipped (and counted).

---

## 3. Key design decisions & justifications

### 3.1 Implement in Node, not Go
The repo is Node/JSONStream, `sync.yml` only sets up Node, and there's no Go toolchain locally or in CI.
The endpoint is plain JSON over HTTP, so the Go library's value is its documentation, not its runtime.
Re-using the existing ManaPool streaming pattern kept the codebase consistent.

### 3.2 Stream everything; never load the 65 MB
The singles payload is parsed with two `JSONStream` parsers over one `createReadStream`:
`['meta']` (captures `created_at` + `base_url`) and `['data', true]` (emits each listing).
No `JSON.parse` / `JSON.stringify` of the full payload, no uncompressed dump, temp file deleted after
parsing. Only the reduced maps and compressed `.gz` outputs ever touch disk permanently.

### 3.3 Resolve relative URLs against `base_url`
The live API returns `url` as a **relative path** (the upstream fixture masked this). Each listing's
URL is joined with `meta.base_url` via `new URL(url, base_url)` so `purchaseUris` are absolute.
Verified against the real feed.

### 3.4 One representative listing per card
For each Scryfall card:
- `normal retail` = the **cheapest in-stock non-foil** listing (falling back to cheapest non-foil if none are in stock);
- `foil retail` = the same logic across foil listings;
- the **purchase URL** = the representative normal listing, else the foil listing — but only when that
  listing has `priceRetail > 0` (0-price/delisted cards keep their Scryfall link / store homepage instead);
- buylist (`normal`/`foil` buy) is only emitted when `PRICE_CONFIG.includeBuylist` is enabled (default off).

Rationale: the linked page is the exact listing whose price is shown, and delisted listings never
produce dead links.

### 3.5 Daily prices only (no history)
The price map uses a **single date key** from `meta.created_at` (e.g. `"2026-08-19"`), matching
MTGJson's date-keyed shape (`retail: { normal: { date: price }, foil: { date: price } }`) so the app
consumes it unchanged. Nothing historical accumulates; every sync replaces the files.

### 3.6 Live CK preferred, MTGJson fallback
`CK_LIVEPRICES_PREFER_API = 1` (config). When the live fetch succeeds, the `cardkingdom` prices in the
merged index are **overridden per card** with live data. If the fetch fails or is disabled, the
MTGJson-sourced `cardkingdom` data is used untouched. This gives fresher first-party prices by default
with a safety net.

### 3.7 Purchase URI override
`mergeLightIndex` now receives `ckUrlByScryfallId` and sets `purchaseUris.cardkingdom` to the live
listing URL whenever one exists, **overriding** the Scryfall link. Cards with no live listing keep
Scryfall's link, and the app falls back to `manifest.storeHomeUrls` when no direct link exists at all.

### 3.8 Single merged price index (per-store files removed)
The pipeline previously emitted **five** price artifacts: the merged `light_price_index.json.gz` plus
four `light_price_index_<store>.json.gz` splits (~19 MB of gzipped duplication). Today's cleanup removed
the per-store files, the `vendorFiles` manifest block, and the per-vendor write loop. The **merged file
is the single source of truth** — this also eliminated a real divergence (see §10.1).

### 3.9 Memory optimization
The largest allocations are released as soon as they're consumed:
- `priceData` (the full parsed `AllPricesToday.json`, ~1 GB+) → `null` immediately after price extraction (`pricesTotal` captured first);
- `uuidToScryfallId` → `null` after price extraction;
- `mtgjsonCards` / `scryfallCards` → `null` after the light index is built;
- `ckByScryfallId` (raw CK listings, ~180 MB) → `null` after reduction (counts captured first).

This lowers the memory ceiling at the price step and during the write phase without changing parsing.

### 3.10 Non-fatal store fetches with visible warnings
ManaPool and Card Kingdom failures log `⚠️` errors and continue (store data degrades, base data
survives). Missing `meta.created_at` logs a warning and falls back to today's date. A missing/empty
CK response surfaces via `manifest.json`'s `cardkingdom` block counts rather than silently.

---

## 4. What changed — code inventory (in `scripts/sync-scryfall.js`)

| Component | Location (approx.) | Purpose |
|---|---|---|
| `CARDKINGDOM_ENABLED`, `CARDKINGDOM_SINGLES_URL`, `CK_LIVEPRICES_PREFER_API` | constants ~line 30 | Config flags for the CK step |
| `CLEANUP_CARDKINGDOM_TEMP` | constants ~line 61 | Delete the ~65 MB temp after parsing |
| `fetchCardKingdomSingles(outputPath)` | ~line 198 | Download to temp → `parseCardKingdomFile` |
| `parseCardKingdomFile(outputPath)` | ~line 215 | Stream-parse into `{ ckByScryfallId, updatedAt, skippedNoScryfallId }`; coerces strings; resolves relative URLs |
| `buildCardKingdomData(ckByScryfallId, priceDate)` | ~line 965 | Reduce listings → `{ ckUrlByScryfallId, ckPriceMap }` (daily prices, MTGJson shape) |
| `mergeLightIndex(..., ckUrlByScryfallId)` | ~line 777 | Inject / override `purchaseUris.cardkingdom` |
| `sync()` | ~line 1038 | Wiring: fetch CK after ManaPool → reduce → merge URLs → override `extractedPrices[].prices.cardkingdom` → manifest stats |
| Manifest `cardkingdom` block | `sync()` | `productsParsed`, `uniqueScryfallIds`, `linkedInLightIndex`, `pricedCards`, `sealedSkipped`, `updatedAt` |

**Removed in the cleanup pass:**
- `pricesByVendor` construction (in `extractPricesFromMtgJson`) and the per-vendor write loop.
- `vendorFiles` manifest block and its stats line.
- `pricesByVendor.cardkingdom` live-replacement (replaced by per-card merged override).

---

## 5. How it works — the pipeline (in `sync()`)

1. **Scryfall** — resolve bulk URL, download `default_cards.jsonl.gz`, gunzip, stream-load into `scryfallCards` (keyed by Scryfall ID).
2. **MTGJson** — download `AllPrintings.json`, convert to NDJSON, stream-load into `mtgjsonCards` (used for uuid↔Scryfall mapping and token pairing).
3. **Mappings** — `createMtgJsonToScryfallMap` → `uuidToScryfallId`; reverse `scryfallToUuid`.
4. **Token pairing** — `extractTokenParts` → `cardTokenParts` (flat, `relatedTokens`) + `cardTokenPairings` (per-product double-faced pairs).
5. **ManaPool fetch** (non-fatal) — direct purchase URL per in-stock card.
6. **Card Kingdom fetch** (non-fatal) — `fetchCardKingdomSingles` (streams ~65 MB) → `buildCardKingdomData` → representative URL per card + daily price object.
7. **Merge** — `mergeLightIndex` projects the light index, attaches uuid + token links, injects ManaPool URLs and **overrides `purchaseUris.cardkingdom`** with live listing URLs → `light_index.json.gz`.
8. **Prices** — download `AllPricesToday.json`, parse, `extractPricesFromMtgJson` → merged `extractedPrices`; then the **live CK override** updates `extractedPrices[].prices.cardkingdom` per card → `light_price_index.json.gz` (the *only* price file).
9. **Manifest** — version, `storeHomeUrls`, ManaPool + Card Kingdom stats.
10. **Cleanup** — delete temp files per `CLEANUP_*` flags.

---

## 6. How stores are managed (prices & purchase links)

| Store | Purchase URI source | Price source | Fallback if source fails |
|---|---|---|---|
| **tcgplayer** | Scryfall `purchase_uris` | MTGJson | store homepage |
| **cardmarket** | Scryfall `purchase_uris` | MTGJson | store homepage |
| **cardkingdom** | **Live CK API** (overrides Scryfall) | **Live CK API** (overrides MTGJson) | Scryfall link + MTGJson price + homepage |
| **manapool** | **Live ManaPool API** (in-stock only) | MTGJson (real MTGJson vendor) | store homepage |

All price sources produce the same daily snapshot shape: `prices: { currency, retail: { normal: { date: price }, foil: { date: price } } }`, so the app treats every store identically.

---

## 7. Failure-handling matrix

| Failure | Behavior | Signal |
|---|---|---|
| CK API down / non-200 / malformed / empty | MTGJson `cardkingdom` data + Scryfall links remain | `⚠️ Card Kingdom fetch failed` + manifest counts |
| CK `meta.created_at` missing | Price date key falls back to today | `⚠️ ... using today as the price date key` |
| ManaPool API down | No ManaPool links (homepage fallback) | `⚠️ ManaPool fetch failed` |
| Scryfall / MTGJson / Prices download fails | **Whole sync aborts**; last good data stays deployed (all-or-nothing base data) | GitHub Actions run fails |
| No direct link at all | App opens store homepage from `manifest.storeHomeUrls` | by design |

---

## 8. Validation performed

1. **`node --check`** — syntax clean throughout.
2. **Fixture harness (23 assertions)** — CK parse (string coercion, sealed skipping, `base_url` join), reduce (normal/foil prices, representative URL, delisted-card URL gating, daily date key, buylist off), and `mergeLightIndex` injection (override vs keep).
3. **Live end-to-end run** against the real endpoint:
   - 64 MB downloaded and **stream-parsed** (never held whole),
   - **149,486 listings** across **97,553 unique Scryfall IDs**, **602** sealed/blank entries skipped,
   - `updatedAt = 2026-08-18 19:07:23` captured from `meta`,
   - relative URLs resolved to absolute (`https://www.cardkingdom.com/mtg/4th-edition/abomination`),
   - heap delta **178.6 MB** after trimming unused fields (was 213 MB holding `name`/`edition`/`variation`).
4. **Cleanup harness** — `extractPricesFromMtgJson` merged-only output (vendor filtering keeps tcgplayer/cardkingdom/cardmarket/manapool, drops e.g. cardhoarder; buylist omitted), CK parse/reduce/merge unchanged, and grep confirmed **zero** leftover references to `pricesByVendor` / `vendorFiles` / `liveCkPrices`.

---

## 9. Real-world findings that the docs/fixtures hid

1. **`url` is a relative path** (`mtg/4th-edition/abomination`), not absolute — fixed by joining with `meta.base_url`.
2. **`price_retail`, `price_buy`, `is_foil` arrive as strings** on the live feed — coercion is mandatory.
3. **One card → many listings** (foil/variants) — the representative-listing reduction is required.
4. **Delisted listings exist** (price `0.00`, qty `0`) — URL gating prevents dead links.
5. **~602 entries have no `scryfall_id`** (sealed/tokens) — skipped and counted, not dropped silently.

---

## 10. Decisions & trade-offs resolved

### 10.1 The "merged vs per-vendor divergence" (now eliminated)
The old pipeline kept **two copies** of price data: the merged index and per-store files. The live-CK
update changed them *differently* — the merged index was overridden **per card** (cards with only an
MTGJson CK price kept it), while the per-store file was **replaced wholesale** (those same cards lost
their CK price). That mismatch was the divergence. Removing the per-store files removed the second
copy, so the merged index is now the single, per-card source of truth.

### 10.2 Daily-only pricing accepted
No price history is retained anywhere. If a user doesn't sync for a while, they hold the last daily
snapshot until they update — this matches the app's design and keeps files small.

### 10.3 Assumption to verify in the client repo
The per-store price files were removed on the assumption the app consumes only `light_price_index.json.gz`.
Nothing in this repo references the per-store files; the Flutter client should be checked for any
`light_price_index_*` usage before relying on this.

---

## 11. Remaining recommended cleanup (not yet applied)

- Delete **dead** functions `convertScryfallToNdjson` and `convertPricesToNdjson` (no call sites).
- Remove the dead `else if (obj.scryfallId)` branches in `loadNdjson`.
- Remove the unused `available` counter in `extractPricesFromMtgJson`.
- Fix the stale `// PRICES ONLY MODE ...` comment above `sync()`.
- Add a **committed** test harness + `npm test` so these validations are repeatable.
- (Optional, larger) stream-parse `AllPricesToday.json` instead of `JSON.parse` — the last big memory item.

---

*Record written 2026-08-19. Line numbers above are approximate to the current revision of
`scripts/sync-scryfall.js` and will drift as the script evolves.*




