# Crucible Sync Pipeline — How It Works

This document explains how `scripts/sync-scryfall.js` (the server sync) works end to end, what each function does, how price/data failures are handled, and how the output is consumed. The goal: a single reference so the pipeline can be understood, maintained, and safely tidied up.

---

## 1. Overview

The sync runs daily (scheduled GitHub Actions workflow). It:

1. Downloads card data from **Scryfall** and **MTGJSON**.
2. Merges them into a *light card index* (`light_index.json.gz`) with exact purchase links.
3. Pulls prices for every configured store, walking a **per-store source chain** with automatic fallbacks and a **last-known-good carry-over** guard.
4. Writes `light_price_index.json.gz`, `manifest.json`, and pushes them to the `data` branch.

The app then downloads those two files. The pipeline is a *daily snapshot* — it keeps the latest prices per store, not historical series.

### Output files (on the `data` branch)

| File | Contents |
|---|---|
| `light_index.json.gz` | Per-card light data: faces, images, type, legalities, `purchaseUris` (exact links only) |
| `light_price_index.json.gz` | Per-card prices keyed by Scryfall ID: `{ retail: { normal/foil/etched: { date: price } }, currency }` per store |
| `manifest.json` | Sync metadata, source health, per-vendor pricing attribution, warnings (consumed by the watchdog) |

---

## 2. Data sources

| Source | What it provides | Used for |
|---|---|---|
| **Scryfall** bulk data | Card objects, faces, `purchase_uris`, and its own `prices` (usd/eur per finish) | Card index, **exact links** (primary for TCGplayer, secondary for Cardmarket), **secondary prices** for tcgplayer/cardmarket |
| **MTGJSON** `AllPrintings` | MTGJSON UUID → Scryfall ID mapping, `identifiers` (tcgplayerProductId, cardmarketId) | UUID mapping, vendor product IDs for exact URLs, token parts |
| **MTGJSON** `AllPricesToday` | Dated per-vendor, per-finish retail prices | **Primary prices** for tcgplayer/cardmarket + fallback for CK; manapool price source |
| **Card Kingdom live API** | Pricelist with `scryfall_id`, retail/buy prices, exact product URLs | **Primary price + link** for cardkingdom |
| **ManaPool live API** | In-stock listings with `scryfall_id` and exact product URLs | **Primary link** + in-stock prices for manapool |
| **Previous run (data branch)** | Prior `light_price_index.json.gz` + `manifest.json` | **Last-known-good carry-over** fallback |

---

## 3. Store source chains

Each store independently resolves its prices and its links. **The first source in a chain that yields data wins; later levels only fill gaps.** This is the core resilience guarantee — no single upstream outage can empty a store column.

### Prices

| Store | Chain |
|---|---|
| **cardkingdom** | CK live API → MTGJSON → carry-over |
| **manapool** | ManaPool live API (in-stock only) → MTGJSON → carry-over |
| **tcgplayer** | MTGJSON → Scryfall (`usd` / `usd_foil` / `usd_etched`) → carry-over |
| **cardmarket** | MTGJSON → Scryfall (`eur` / `eur_foil`) → carry-over |

> Note: ManaPool's live API supplies **links**; its prices come from MTGJSON (the API in-stock signal + MTGJSON price). Out-of-stock cards show a dash — ManaPool's value is "buyable now", not historical market value.

### Purchase links (all exact product pages only; search stubs are rejected)

| Store | Chain |
|---|---|
| **cardkingdom** | CK live API → dash (CK slugs can't be constructed) |
| **manapool** | ManaPool live API → dash |
| **tcgplayer** | Scryfall `purchase_uris` (affiliate-decoded, exact only) → MTGJSON product-ID URL → carry-over → dash |
| **cardmarket** | MTGJSON cardmarketId URL → Scryfall `purchase_uris` (exact only) → carry-over → dash |

### Fallback & carry-over

- **Scryfall secondary fill:** for any card where MTGJSON lacked a tcgplayer/cardmarket price, Scryfall's `prices` fill the gap, shaped identically to MTGJSON (dated `syncDate`), so downstream code can't tell sources apart.
- **Last-known-good carry-over:** at sync time the previous `manifest.json` is fetched from the data branch. If any store's priced-card count drops by **>50%** vs. the previous run, the previous run's prices for that store are republished (original date keys preserved) instead of an empty column. The store is recorded in `pricing.carriedOver` and a manifest warning is pushed.
- **Never publish a collapse:** because of the above, a store only ships with 0 priced cards if *every* source — primary, Scryfall, *and* previous run — is unavailable.

---
## 4. Functions (reference)

### Top-level
- **`sync()`** — orchestrates the whole run: downloads, loads, merges, prices (chains + carry-over), writes outputs, cleans up. Owns the `warnings` array and `sources` health tracker that land in `manifest.json`.

### Download / parse
- **`getScryfallDownloadUrl()`** — queries Scryfall's `/bulk-data` metadata to resolve the actual download URL.
- **`downloadFile(url, path, name)`** — HTTP download with progress logging. On failure, `sources.*.ok` is set false (doesn't abort the sync).
- **`decompressGzip(in, out, name)`** — gunzips an MTGJSON `.json.gz` to a temp JSON file.
- **`convertMtgJsonToNdjson()`** — converts the large `AllPrintings.json` into NDJSON for streaming.
- **`loadNdjson(path, name)`** — streams NDJSON into an in-memory map (Scryfall keyed by `id`; MTGJSON keyed by `name`/`uuid`).

### Card mapping & light index
- **`createMtgJsonToScryfallMap()`** — builds `uuidToScryfallId` (MTGJSON UUID → Scryfall ID) and `vendorIdsByScryfallId` (Scryfall ID → `{ tcgplayerProductId, cardmarketId }`).
- **`extractTokenParts()`** — per-product token pairs for `tokenPairings` / `relatedTokens`.
---

## 6. manifest.json — pricing & health schema

```jsonc
{
  "version": "2026-09-02",
  "generatedAt": "2026-09-02T...Z",
  "lightIndexCards": 117620,
  "pricesCards": 101257,
  "pricesTotal": 108590,
  "sources": {
    "scryfall": {"ok":true,"cards":117620},
    "mtgjson": {"ok":true,"cards":38185},
    "mtgjsonPrices": {"ok":true,"entries":108590},
    "manapool": {"ok":true,"inStock":99783,"linked":99783},
    "cardkingdom": {"ok":true,"uniqueIds":97615,"priced":97596,"linked":97596}
  },
  "pricing": {
    "vendors": {
      "tcgplayer":  { "primary": "mtgjson", "mtgjson": 96632, "scryfall": 0, "carriedOver": 0, "priced": 96632 },
      "cardmarket": { "primary": "mtgjson", "mtgjson": 101247, "scryfall": 0, "carriedOver": 0, "priced": 101247 },
      "cardkingdom":{ "primary": "cardkingdom-api", "carriedOver": 0, "priced": 97596 },
      "manapool":   { "primary": "manapool-api", "carriedOver": 0, "priced": 98622 }
    },
    "carriedOver": []
  },
  "warnings": ["..."]   // only present when non-empty
}
```

- **`sources.*.ok`** — a `false` means a download/fetch failed.
- **`pricing.vendors.*.primary`** — the intended primary chain level (`mtgjson` | `cardkingdom-api` | `manapool-api`).
- **`pricing.vendors.*` counts** — how many cards each layer filled (`scryfall`, `carriedOver`) and the final `priced` total.
- **`pricing.carriedOver`** — stores that shipped last-known-good prices this run (drives a staleness indicator in the app).
- **`warnings`** — informational issues; all non-empty warnings fail the watchdog.

---

## 7. Watchdog (`scripts/watchdog.mjs`)

A standalone health check on the deployed `manifest.json`. It `FAIL`s (exit 1, optional webhook/ntfy) when:

- `generatedAt` is older than `--max-age-hours` (**STALE**)
- any `sources.*.ok === false` (**SOURCE_FAIL**)
- `lightIndexCards`, `pricesCards`, or `pricesTotal` is 0; or price coverage < `--min-coverage`
- `manifest.warnings` is non-empty
- **(new)** `pricing.vendors.<store>.priced === 0` — "every fallback exhausted"
- **(new)** `pricing.carriedOver` is non-empty — flagged as a warning so you know data is stale

Run manually: `node scripts/watchdog.mjs [--manifest-url <url-or-file>]`.
When it runs: `watchdog.yml` fires via `workflow_run` the moment the sync completes, so the daily push reports a manifest age in minutes (the freshness ceiling is tightened to 4h on that trigger, so a sync that ran but failed to deploy still alerts). A daily cron remains as a safety net for a sync that stops running entirely - it stays quiet on success and only pushes when a check fails.

---

## 8. Failure-handling summary

| Upstream fails | Pipeline result |
|---|---|
| MTGJSON `AllPricesToday` missing a store (e.g. cardmarket) | Scryfall fills tcgplayer/cardmarket; carry-over protects anything still collapsing |
| Scryfall down | MTGJSON covers prices; links fall to MTGJSON IDs / vendor APIs |
| CK API down | MTGJSON prices; CK links → dash (structural) |
| ManaPool API down | MTGJSON prices; MP links → dash |
| Everything fails for a store | Previous run's prices republished (stale, labeled) + watchdog alert |
| Store changes URL format (regression) | Exactness check / stub-drop rate >25% → warning + watchdog fail |

**The design guarantee:** a store never ships empty unless *all* of its sources — primary, Scryfall, and last-run carry-over — are unavailable, and in that case the watchdog fails loudly instead of silently publishing zeros.
- **`projectLightCard(card)`** — projects a Scryfall card into the slim light shape. `copyPurchaseUris` drops non-paper vendors and **search stubs** (TCGplayer without `/product/` — after percent-decoding the affiliate redirect — and Cardmarket without `idProduct=`), counting them as stub drops.
- **`mergeLightIndex()`** — combines light cards, token parts, and ManaPool/CK/MTGJSON-derived exact URLs; overlays MTGJSON product-link URLs from `vendorIdsByScryfallId` (guarded to never downgrade an existing exact URL).

### Pricing
- **`filterPaperPrices(paper)`** — keeps only `PRICE_CONFIG.vendors`, drops empty/disabled buylist.
- **`extractPricesFromMtgJson()`** — maps MTGJSON prices (keyed by UUID) to Scryfall IDs via `uuidToScryfallId`, producing `extractedPrices`.
- **`buildCardKingdomData()`** — reduces the raw CK pricelist to one daily-price object per card in MTGJSON's shape (`retail.normal/foil/etched.<date>`), plus a representative purchase URL.
- **Chain assembly** (inline in `sync()`) — the Scryfall secondary fill for tcgplayer/cardmarket (`SCRYFALL_PRICE_MAP`) and the last-known-good carry-over guard.
- **`writeAndCompressJson()`** — writes JSON then gzips it to its final path.

### Store fetchers
- **`fetchManapoolSingles()`** — streams the ManaPool listings API into `manapoolByScryfallId` (scryfall_id → URL) for in-stock cards.
- **`fetchCardKingdomSingles()`** — downloads the CK pricelist and stream-parses it.
- **`parseCardKingdomFile()`** — the actual CK stream parser; split out so it can be driven against a local file offline.

---

## 5. Key constants (configuration)

| Constant | Purpose |
|---|---|
| `MTGJSON_URL`, `MTGJSON_PRICES_URL` | MTGJSON card + price-download URLs |
| `DATA_RAW_BASE` | Raw URLs for the *previous* run's deployed files, used by the carry-over guard |
| `PRICE_CONFIG` | `vendors: [tcgplayer, cardkingdom, cardmarket, manapool]`, `includeBuylist`, `includeEmptyObjects` |
| `PURCHASE_VENDORS` | Vendors surfaced in the light index (`tcgplayer, cardmarket, cardkingdom`) |
| `MANAPOOL_ENABLED`, `MANAPOOL_PRICES_URL` | ManaPool on/off + API endpoint |
| `CARDKINGDOM_ENABLED`, `CARDKINGDOM_SINGLES_URL` | Card Kingdom on/off + API endpoint |
| `CK_LIVEPRICES_PREFER_API` | Prefer live CK prices over MTGJSON's cardkingdom feed |
| `STORE_HOME_URLS` | Per-store homepage fallbacks written into `manifest.json` |
| `CLEANUP_*` | Per-file temp cleanup flags (1 = delete, 0 = keep) |