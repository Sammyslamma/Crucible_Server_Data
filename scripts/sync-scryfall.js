import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';
import JSONStream from 'JSONStream';

// MTGJSON serves pre-compressed .json.gz variants of every file. Downloading
// those instead of the raw JSON cuts the transfer size dramatically
// (AllPrintings: ~450 MB -> ~178 MB, AllPricesToday: ~50 MB -> ~5.5 MB).
// Both are decompressed locally before parsing.
const MTGJSON_URL = 'https://mtgjson.com/api/v5/AllPrintings.json.gz';
const MTGJSON_PRICES_URL = 'https://mtgjson.com/api/v5/AllPricesToday.json.gz';

const OUTPUT_DIR = './docs';

// Price index configuration - adjust to reduce file size
const PRICE_CONFIG = {
  vendors: ['tcgplayer', 'cardkingdom', 'cardmarket', 'manapool'],  // All available vendors
  includeBuylist: false,                   // Set true to include buylist prices
  includeEmptyObjects: false               // Set true to keep empty buylist/retail objects
};

// Marketplace purchase links we actually surface. CardHoarder (MTGO) and any
// other non-paper vendors are intentionally excluded from the light index.
const PURCHASE_VENDORS = ['tcgplayer', 'cardmarket', 'cardkingdom'];

// Per-vendor counts of Scryfall search-stub purchase URIs dropped while
// projecting the light index (see copyPurchaseUris in projectLightCard).
// Logged in the merge summary so each run is self-verifying.
const stubDropCounts = { tcgplayer: 0, cardmarket: 0 };

// Per-vendor counts of exact product URLs constructed from MTGJSON vendor
// identifiers during the merge (see mergeLightIndex).
const mtgjsonUrlAdded = { tcgplayer: 0, cardmarket: 0 };

// ManaPool purchase-link source (public API, verified no auth required).
// Supplies a direct buy URL only for cards currently in stock at ManaPool;
// prices remain MTGJson-sourced for conformity with the other stores.
const MANAPOOL_ENABLED = 1;                        // Set 0 to skip the ManaPool step
const MANAPOOL_PRICES_URL = 'https://manapool.com/api/v1/prices/singles';

// Card Kingdom live price-list source (public API, no auth required).
// The singles pricelist is large (~65 MB) so it is STREAM-PARSED below and
// never loaded into memory as a whole. Supplies the direct purchase URL for
// each listing plus the freshest daily retail/buylist prices for the
// cardkingdom vendor. If the fetch fails, prices fall back to the MTGJson
// cardkingdom feed.
const CARDKINGDOM_ENABLED = 1;                     // Set 0 to skip the Card Kingdom step
const CARDKINGDOM_SINGLES_URL = 'https://api.cardkingdom.com/api/v2/pricelist';

// Live CK prices replace the MTGJson-sourced cardkingdom vendor data whenever
// the live fetch succeeds. The app keeps only daily prices (no history), so the
// live "today" price is exactly what we want; MTGJson remains the fallback.
const CK_LIVEPRICES_PREFER_API = 1;                // Set 0 to keep MTGJson cardkingdom prices

// Per-vendor homepage fallbacks for the client, written into manifest.json.
// The app opens these when a direct purchase link is unavailable, so users
// never land on a 404 page.
const STORE_HOME_URLS = {
  tcgplayer: 'https://www.tcgplayer.com',
  cardmarket: 'https://www.cardmarket.com',
  cardkingdom: 'https://www.cardkingdom.com',
  manapool: 'https://manapool.com',
};

// Temp file cleanup: set to 1 to delete, 0 to keep (for data extraction)
const CLEANUP_SCRYFALL_GZ = 1;       // scryfall.jsonl.gz
const CLEANUP_SCRYFALL_NDJSON = 1;   // scryfall.ndjson
const CLEANUP_MTGJSON_GZ = 1;        // mtgjson_temp.json.gz
const CLEANUP_MTGJSON_TEMP = 1;      // mtgjson_temp.json
const CLEANUP_MTGJSON_NDJSON = 0;    // mtgjson.ndjson
const CLEANUP_PRICES_GZ = 1;         // prices_temp.json.gz
const CLEANUP_PRICES_TEMP = 1;       // prices_temp.json
const CLEANUP_MANAPOOL_TEMP = 1;     // manapool_temp.json
const CLEANUP_CARDKINGDOM_TEMP = 1;  // cardkingdom_temp.json

/**
 * Fetch the actual Scryfall download URL from metadata
 */
async function getScryfallDownloadUrl() {
  console.log('📋 Fetching Scryfall metadata...');
  const response = await fetch('https://api.scryfall.com/bulk-data', {
    headers: {
      'User-Agent': 'CrucibleMTG/1.0',
      'Accept': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch Scryfall metadata: ${response.status}`);
  }
  const data = await response.json();
  const defaultCards = data.data.find(item => item.type === 'default_cards');
  if (!defaultCards) {
    throw new Error('default_cards bulk data not found in Scryfall metadata');
  }
  // Scryfall now serves .jsonl.gz files (gzipped NDJSON).
  // Use jsonl_download_uri; fall back to download_uri if present.
  const downloadUrl = defaultCards.jsonl_download_uri || defaultCards.download_uri;
  if (!downloadUrl) {
    throw new Error('No download URL found in Scryfall metadata');
  }
  console.log(`✅ Got Scryfall download URL`);
  return downloadUrl;
}

/**
 * Download a file from URL with progress logging
 */
async function downloadFile(url, outputPath, name) {
  console.log(`⬇️  Downloading ${name}...`);
  
  try {
    const response = await fetch(url, {
      timeout: 600000,
      headers: {
        'User-Agent': 'CrucibleMTG/1.0',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const file = createWriteStream(outputPath);
    let downloadedSize = 0;
    let lastLog = 0;

    for await (const chunk of response.body) {
      downloadedSize += chunk.length;
      file.write(chunk);
      
      if (downloadedSize - lastLog > 50 * 1024 * 1024) {
        console.log(`  Downloaded ${(downloadedSize / 1024 / 1024).toFixed(0)}MB...`);
        lastLog = downloadedSize;
      }
    }

    file.end();
    
    return new Promise((resolve, reject) => {
      file.on('finish', () => {
        console.log(`✅ ${name} complete (${(downloadedSize / 1024 / 1024).toFixed(0)}MB)`);
        resolve();
      });
      file.on('error', (err) => {
        console.error(`Error writing ${name}:`, err);
        reject(err);
      });
    });
  } catch (error) {
    throw new Error(`Failed to download ${name}: ${error.message}`);
  }
}

/**
 * Decompress a .gz file to its uncompressed form (streamed, low memory).
 * Used for the MTGJSON .json.gz downloads before they are parsed.
 */
async function decompressGzip(inputPath, outputPath, name) {
  console.log(`🔄 Decompressing ${name}...`);
  return new Promise((resolve, reject) => {
    const input = createReadStream(inputPath);
    const output = createWriteStream(outputPath);
    input.pipe(zlib.createGunzip()).pipe(output)
      .on('finish', () => {
        const stats = fs.statSync(outputPath);
        console.log(`✅ Decompressed ${name} (${(stats.size / 1024 / 1024).toFixed(0)}MB)`);
        resolve();
      })
      .on('error', reject);
  });
}

/**
 * Fetch ManaPool singles catalog (public API, no key required) and build a
 * scryfall_id -> direct purchase URL map for cards currently in stock.
 * Prices stay MTGJson-sourced; this only supplies the missing ManaPool link.
 * The API payload is streamed and parsed in chunks to avoid loading it whole.
 */
async function fetchManapoolSingles(outputPath) {
  if (!MANAPOOL_ENABLED) {
    console.log('⏭️  ManaPool disabled — skipping');
    return {};
  }

  await downloadFile(MANAPOOL_PRICES_URL, outputPath, 'ManaPool');

  console.log('💠 Extracting ManaPool purchase URLs...');
  const manapoolByScryfallId = {};

  return new Promise((resolve, reject) => {
    const input = createReadStream(outputPath, { encoding: 'utf8' });
    // ManaPool's `data` is an ARRAY of listing objects; `true` emits each element.
    const pipeline = input.pipe(JSONStream.parse(['data', true]));
    let count = 0;

    pipeline.on('data', (listing) => {
      try {
        if (!listing || typeof listing !== 'object') return;
        const scryfallId = listing.scryfall_id;
        const url = listing.url;
        if (scryfallId && typeof url === 'string' && url) {
          manapoolByScryfallId[scryfallId] = url;
          count++;
        }
      } catch (err) {
        console.error(`Error parsing ManaPool listing: ${err.message}`);
      }
    });

    pipeline.on('end', () => {
      console.log(`✅ Mapped ${count} in-stock ManaPool cards to purchase URLs`);
      resolve(manapoolByScryfallId);
    });

    pipeline.on('error', reject);
  });
}

/**
 * Fetch the Card Kingdom singles price list and build:
 *   1. ckByScryfallId — one reduced entry per CK listing keyed by scryfall_id
 *      (URL, retail/buy prices, stock, foil + etched flags).
 *   2. updatedAt      — the price-list timestamp from the API meta block.
 * The full payload is ~65 MB and is STREAM-PARSED with JSONStream, so it is
 * never loaded into memory as a whole and never dumped to a large output file.
 * Note: Card Kingdom returns several numeric fields as strings and is_foil as
 * "true"/"false"; both are coerced here.
 */
async function fetchCardKingdomSingles(outputPath) {
  if (!CARDKINGDOM_ENABLED) {
    console.log('⏭️  Card Kingdom disabled — skipping');
    return { ckByScryfallId: {}, updatedAt: null };
  }

  await downloadFile(CARDKINGDOM_SINGLES_URL, outputPath, 'Card Kingdom');

  console.log('🃏 Extracting Card Kingdom listings (streaming)...');
  return parseCardKingdomFile(outputPath);
}

/**
 * Stream-parse a Card Kingdom price-list file into { ckByScryfallId, updatedAt }.
 * Split out from fetchCardKingdomSingles so tests/offline runs can drive the
 * same parser against a local file without re-downloading the ~65 MB list.
 */
function parseCardKingdomFile(outputPath) {
  const ckByScryfallId = {};
  let updatedAt = null;
  let baseUrl = '';
  let skippedNoScryfallId = 0;

  return new Promise((resolve, reject) => {
    const input = createReadStream(outputPath, { encoding: 'utf8' });
    // Two independent stream parsers on the same input:
    //   ['meta']       -> emits the small { created_at, base_url } header
    //   ['data', true] -> emits each product listing (streamed, not in memory)
    const metaStream = input.pipe(JSONStream.parse(['meta']));
    const pipeline = input.pipe(JSONStream.parse(['data', true]));

    metaStream.on('data', (meta) => {
      if (!meta || typeof meta !== 'object') return;
      if (typeof meta.created_at === 'string') {
        updatedAt = meta.created_at;
      }
      if (typeof meta.base_url === 'string') {
        baseUrl = meta.base_url;
      }
    });

    pipeline.on('data', (listing) => {
      try {
        if (!listing || typeof listing !== 'object') return;
        const scryfallId = listing.scryfall_id;
        if (!scryfallId) {
          // Sealed products and listings without a Scryfall ID can't join the
          // light index (keyed by scryfall_id); skip them.
          skippedNoScryfallId++;
          return;
        }

        const priceRetail = parseFloat(listing.price_retail) || 0;
        const priceBuy = parseFloat(listing.price_buy) || 0;
        const qtyRetail = parseInt(listing.qty_retail, 10) || 0;
        const qtyBuying = parseInt(listing.qty_buying, 10) || 0;
        const isFoil = String(listing.is_foil).toLowerCase() === 'true';
        // Card Kingdom tags etched foil printings with a "Foil Etched" / "Etched
        // Foil" variation while still reporting is_foil as "true" (etched products
        // land in the foil URL pool as "...-foil-etched"). Detect them here so the
        // caller can emit a distinct retail.etched price instead of silently
        // collapsing the finish into retail.foil. Only match explicit foil+etched
        // word combos (variation finish marker or a -foil-etched/-etched-foil URL)
        // rather than bare "etched", so normal cards whose names simply contain the
        // word (e.g. "Etched Oracle") are never misclassified.
        const isEtched = isFoil && (/etched/i.test(String(listing.variation || ''))
          || /foil[_-]?etched|etched[_-]?foil/i.test(String(listing.url || '')));

        // CK returns product URLs as relative paths (e.g. "mtg/4th-edition/x");
        // resolve them against the API's base_url so purchaseUris are absolute.
        let url = null;
        if (typeof listing.url === 'string' && listing.url) {
          try {
            url = new URL(listing.url, baseUrl).toString();
          } catch (err) {
            url = listing.url;
          }
        }

        // Keep only the fields the pipeline needs; one entry per CK listing.
        if (!ckByScryfallId[scryfallId]) {
          ckByScryfallId[scryfallId] = [];
        }
        ckByScryfallId[scryfallId].push({
          url,
          isFoil,
          isEtched,
          priceRetail,
          qtyRetail,
          priceBuy,
          qtyBuying,
        });
      } catch (err) {
        console.error(`Error parsing Card Kingdom listing: ${err.message}`);
      }
    });

    pipeline.on('end', () => {
      const unique = Object.keys(ckByScryfallId).length;
      const total = Object.values(ckByScryfallId).reduce((n, arr) => n + arr.length, 0);
      console.log(`✅ Parsed ${total} Card Kingdom listings across ${unique} Scryfall IDs` + (skippedNoScryfallId > 0 ? ` (${skippedNoScryfallId} without scryfall_id skipped)` : ''));
      resolve({ ckByScryfallId, updatedAt, skippedNoScryfallId });
    });

    pipeline.on('error', reject);
  });
}

/**
 * Convert MTGJson to NDJSON using JSONStream
 * Structure: { meta: {...}, data: { "10E": { "cards": [...], "tokens": [...] }, ... } }
 * We parse ['data'] to get the entire data object, then manually iterate sets, cards, and tokens
 */
async function convertMtgJsonToNdjson(inputPath, outputPath) {
  console.log(`🔄 Converting MTGJson to NDJSON (streaming with manual iteration)...`);
  
  return new Promise((resolve, reject) => {
    const input = createReadStream(inputPath);
    const output = createWriteStream(outputPath, { encoding: 'utf8' });
    
    // Parse just ['data'] to get the entire data object
    const pipeline = input.pipe(JSONStream.parse(['data']));
    
    let versionCount = 0;
    let setCount = 0;

    pipeline.on('data', (dataObj) => {
      // dataObj is the entire data object: { "10E": {...}, "2ED": {...}, ... }
      console.log(`  Processing data object with sets...`);
      
      if (typeof dataObj === 'object' && dataObj !== null) {
        // Iterate through each set
        for (const [setCode, setData] of Object.entries(dataObj)) {
          if (typeof setData !== 'object' || setData === null) continue;
          
          setCount++;
          
          // Get the cards array from this set
          const cards = setData.cards;
          if (Array.isArray(cards)) {
            for (const card of cards) {
              if (card && typeof card === 'object') {
                try {
                  const line = JSON.stringify(card);
                  output.write(line + '\r\n');
                  versionCount++;
                  
                  if (versionCount % 20000 === 0) {
                    console.log(`  ✓ Converted ${versionCount} cards...`);
                  }
                } catch (err) {
                  console.error(`Error writing card from ${setCode}:`, err.message);
                }
              }
            }
          }
          
          // Also process tokens array (contains tokens, emblems, art cards)
          const tokens = setData.tokens;
          if (Array.isArray(tokens)) {
            for (const token of tokens) {
              if (token && typeof token === 'object') {
                try {
                  const line = JSON.stringify(token);
                  output.write(line + '\r\n');
                  versionCount++;
                  
                  if (versionCount % 20000 === 0) {
                    console.log(`  ✓ Converted ${versionCount} cards/tokens...`);
                  }
                } catch (err) {
                  console.error(`Error writing token from ${setCode}:`, err.message);
                }
              }
            }
          }
        }
      }
    });

    pipeline.on('end', () => {
      output.end();
      console.log(`\n✅ Conversion complete!`);
      console.log(`   Sets processed: ${setCount}`);
      console.log(`   Total cards/tokens converted: ${versionCount}`);
      resolve();
    });

    pipeline.on('error', (err) => {
      output.destroy();
      console.error(`\n❌ JSONStream error:`, err.message);
      reject(err);
    });

    output.on('error', (err) => {
      console.error(`❌ Output write error:`, err.message);
      reject(err);
    });
  });
}

/**
 * Stream parse NDJSON file (one object per line)
 */
async function loadNdjson(filePath, name) {
  console.log(`📖 Loading ${name} from NDJSON...`);
  const data = {};
  
  return new Promise((resolve, reject) => {
    const stream = createReadStream(filePath, { encoding: 'utf8' });
    let buffer = '';
    let lineNumber = 0;

    stream.on('data', (chunk) => {
      buffer += chunk;
      const lines = buffer.split('\n');
      
      buffer = lines.pop() || '';
      
      for (const line of lines) {
        if (!line.trim()) continue;
        
        try {
          const obj = JSON.parse(line);
          
          // For Scryfall: key by id
          if (obj.id) {
            data[obj.id] = obj;
          }
          // For MTGJson cards/tokens: key by name and store as array
          // Tokens may have uuid and identifiers.scryfallId but might not have name
          else if (obj.uuid) {
            // Use a unique key for tokens without name: uuid or a combination
            const key = obj.name || `token_${obj.uuid}`;
            if (!data[key]) data[key] = [];
            data[key].push(obj);
          }
          
          lineNumber++;
          
          if (lineNumber % 50000 === 0) {
            console.log(`  Processed ${lineNumber} lines...`);
          }
        } catch (err) {
          // Skip parse errors
        }
      }
    });

    stream.on('end', () => {
      if (buffer.trim()) {
        try {
          const obj = JSON.parse(buffer);
          if (obj.id) data[obj.id] = obj;
          else if (obj.uuid) {
            const key = obj.name || `token_${obj.uuid}`;
            if (!data[key]) data[key] = [];
            data[key].push(obj);
          }
          } catch (err) {}
      }
      
      console.log(`✅ Loaded ${Object.keys(data).length} entries from ${name}`);
      resolve(data);
    });

    stream.on('error', reject);
  });
}

/**
 * Create a lookup map from MTGJson: UUID → Scryfall ID
 * Uses MTGJson's identifiers.scryfallId field directly (authoritative source)
 */
function createMtgJsonToScryfallMap(mtgjsonCards, scryfallCards) {
  console.log('🔗 Building MTGJson UUID → Scryfall ID mapping...');
  console.log(`   Scryfall cards: ${Object.keys(scryfallCards).length}`);
  console.log(`   MTGJson card names: ${Object.keys(mtgjsonCards).length}`);
  
  let uuidToScryfallId = {};
  // MTGJSON vendor product identifiers keyed by Scryfall ID. MTGJSON's
  // identifiers are authoritative for the same printing it prices, letting us
  // construct exact product URLs for tokens Scryfall only stubs.
  const vendorIdsByScryfallId = {};
  let matchCount = 0;
  let missingScryfallId = 0;
  let scryfallIdNotFound = 0;

  // Use MTGJson's identifiers.scryfallId directly - this is the authoritative mapping
  console.log('  Matching MTGJson cards using identifiers.scryfallId...');
  let processedCards = 0;
  
  for (const [cardName, cardVersions] of Object.entries(mtgjsonCards)) {
    if (!Array.isArray(cardVersions)) continue;

    for (const mtgCard of cardVersions) {
      const mtgJsonUuid = mtgCard.uuid;
      if (!mtgJsonUuid) continue;

      // Get the Scryfall ID directly from MTGJson's identifiers field
      const scryfallId = mtgCard.identifiers?.scryfallId;
      if (!scryfallId) {
        missingScryfallId++;
        processedCards++;
        continue;
      }

      // Verify the Scryfall ID exists in the loaded Scryfall data
      if (!scryfallCards[scryfallId]) {
        scryfallIdNotFound++;
        processedCards++;
        continue;
      }

      uuidToScryfallId[mtgJsonUuid] = scryfallId;
      matchCount++;

      // Capture vendor product IDs for the same printing.
      const ids = mtgCard.identifiers || {};
      const tcgplayerProductId = ids.tcgplayerProductId || null;
      const cardmarketId = ids.cardmarketId || null;
      // NOTE: cardKingdomId is deliberately NOT used to construct URLs — CK
      // product pages are slug-based (/mtg/{set}/{name}), so an ID cannot
      // produce an exact page. Guessing would reintroduce the bug this
      // pipeline fixes; CK stays "price without link → dash" instead.
      if (tcgplayerProductId || cardmarketId) {
        vendorIdsByScryfallId[scryfallId] = { tcgplayerProductId, cardmarketId };
      }

      processedCards++;
      if (processedCards % 50000 === 0) {
        console.log(`  ✓ Processed ${processedCards} MTGJson cards, ${matchCount} matched...`);
      }
    }
  }

  console.log(`✅ Mapped ${matchCount} MTGJson UUIDs to Scryfall IDs`);
  if (missingScryfallId > 0) {
    console.log(`   ⚠️ ${missingScryfallId} cards had no identifiers.scryfallId`);
  }
  if (scryfallIdNotFound > 0) {
    console.log(`   ⚠️ ${scryfallIdNotFound} Scryfall IDs not found in Scryfall data`);
  }
  return { uuidToScryfallId, vendorIdsByScryfallId };
}

/**
 * Extract tokenParts from MTGJson and convert UUIDs to Scryfall IDs.
 *
 * MTGJson v5 nests tokenParts inside tokenProducts[], and each entry is
 * an object like {"uuid": "..."} rather than a raw UUID string.
 *
 * A token can appear in multiple physical products (e.g. the same Horror
 * face is paired with Centaur in one product and Eldrazi Horror in another).
 * We collect ALL unique related Scryfall IDs across all products (cardTokenParts)
 * AND per-product pairings for manual double-faced token detection (cardTokenPairings).
 */
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

/**
 * Project a Scryfall card to light index format (matching Dart's _projectLightCard)
 * Keeps only fields needed by the app to reduce file size
 */
function projectLightCard(card) {
  const copyMap = (src, keys) => {
    if (!src || typeof src !== 'object') return null;
    const out = {};
    for (const k of keys) {
      if (k in src) out[k] = src[k];
    }
    return Object.keys(out).length > 0 ? out : null;
  };

  const copyPurchaseUris = (src) => {
    if (!src || typeof src !== 'object') return null;
    const out = {};
    for (const [k, v] of Object.entries(src)) {
      // Only surface the paper-marketplace links we actually use;
      // CardHoarder and any other vendor are dropped.
      if (!PURCHASE_VENDORS.includes(k) || typeof v !== 'string' || !v) continue;
      // Reject search-page stubs — only exact product/listing URLs qualify.
      // Scryfall injects these for tokens it has no vendor product for, and
      // clicking them lands users on unpredictable search results. Dropping
      // them here means the index only ever contains exact links.
      const isStub =
        (k === 'tcgplayer' && !v.includes('/product/')) ||
        (k === 'cardmarket' && !v.includes('idProduct='));
      if (isStub) {
        stubDropCounts[k] = (stubDropCounts[k] || 0) + 1;
        continue;
      }
      out[k] = v;
    }
    return Object.keys(out).length > 0 ? out : null;
  };

  const copyFaceList = (faces) => {
    if (!Array.isArray(faces)) return null;
    const out = [];
    for (const f of faces) {
      if (f && typeof f === 'object') {
        out.push({
          name: f.name || null,
          image_uris: copyMap(f.image_uris, ['normal']),
          mana_cost: f.mana_cost || null,
          type_line: f.type_line || null,
          colors: f.colors || null,
          power: f.power || null,
          toughness: f.toughness || null,
          keywords: f.keywords || null,
          oracle_text: f.oracle_text || null,
          flavor_text: f.flavor_text || null,
          artist: f.artist || null,
        });
      }
    }
    return out.length > 0 ? out : null;
  };

  // Copy legalities but drop "not_legal" entries to keep the index slim.
  // A format absent from the object (or the whole field being null) means
  // the card is simply not legal there — the app treats null as not legal.
  const copyLegalities = (src) => {
    if (!src || typeof src !== 'object') return null;
    const out = {};
    for (const [format, status] of Object.entries(src)) {
      if (status === 'not_legal') continue;
      out[format] = status;
    }
    return Object.keys(out).length > 0 ? out : null;
  };

  return {
    image_uris: copyMap(card.image_uris, ['normal']),
    card_faces: copyFaceList(card.card_faces),
    layout: card.layout || null,
    mana_cost: card.mana_cost || null,
    type_line: card.type_line || null,
    colors: card.colors || null,
    color_identity: card.color_identity || null,
    power: card.power || null,
    toughness: card.toughness || null,
    keywords: card.keywords || null,
    oracle_text: card.oracle_text || null,
    flavor_text: card.flavor_text || null,
    released_at: card.released_at || null,
    artist: card.artist || null,
    produced_mana: card.produced_mana || null,
    all_parts: card.all_parts || null,
    purchaseUris: copyPurchaseUris(card.purchase_uris),
    legalities: copyLegalities(card.legalities),
    // Fields for name search and Card construction
    name: card.name || null,
    set: card.set || null,
    set_name: card.set_name || null,
    collector_number: card.collector_number || null,
    rarity: card.rarity || null,
  };
}

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
function mergeLightIndex(scryfallCards, cardTokenParts, cardTokenPairings = {}, scryfallToUuid = {}, manapoolByScryfallId = {}, ckUrlByScryfallId = {}, ckFoilUrlByScryfallId = {}, vendorIdsByScryfallId = {}) {
  console.log('🔀 Merging light index with tokenParts, tokenPairings, relatedTokens, and projecting fields...');
  const merged = {};

  for (const [scryfallId, card] of Object.entries(scryfallCards)) {
    const projected = projectLightCard(card);
    projected.mtgjsonUuid = scryfallToUuid[scryfallId] || null;

    // ManaPool direct purchase URL — present only when the card is currently
    // in stock at ManaPool (public API). Otherwise no ManaPool link exists in
    // any source; the app constructs a best-effort card URL and falls back to
    // the store homepage via manifest storeHomeUrls.
    const manapoolUrl = manapoolByScryfallId[scryfallId];
    if (manapoolUrl) {
      projected.purchaseUris = projected.purchaseUris || {};
      projected.purchaseUris.manapool = manapoolUrl;
    }

    // Card Kingdom direct purchase URL — authoritative listing link from CK's
    // own API (representative listing chosen by buildCardKingdomData). Overrides
    // the Scryfall-sourced cardkingdom link when a live listing exists.
    const ckUrl = ckUrlByScryfallId[scryfallId];
    if (ckUrl) {
      projected.purchaseUris = projected.purchaseUris || {};
      projected.purchaseUris.cardkingdom = ckUrl;
    }

    // Card Kingdom foil purchase URL — separate key mirroring how prices use
    // retail.normal / retail.foil. Old app versions ignore the extra key; new
    // versions fall back to the normal URL when it is absent.
    const ckFoilUrl = ckFoilUrlByScryfallId[scryfallId];
    if (ckFoilUrl) {
      projected.purchaseUris = projected.purchaseUris || {};
      projected.purchaseUris.cardkingdom_foil = ckFoilUrl;
    }

    // MTGJson-derived exact product URLs. These override Scryfall's
    // purchase_uris because MTGJson's vendor identifiers are authoritative
    // for the same printing we price — closing the token coverage gap where
    // Scryfall only supplies search-page stubs (which were dropped in
    // projectLightCard). Guard each with an exactness check: only upgrade,
    // never downgrade an existing exact product URL.
    const vendorIds = vendorIdsByScryfallId[scryfallId];
    if (vendorIds) {
      if (vendorIds.tcgplayerProductId && !/\/product\//.test(projected.purchaseUris?.tcgplayer || '')) {
        projected.purchaseUris = projected.purchaseUris || {};
        projected.purchaseUris.tcgplayer =
          `https://www.tcgplayer.com/product/${vendorIds.tcgplayerProductId}`;
        mtgjsonUrlAdded.tcgplayer++;
      }
      if (vendorIds.cardmarketId && !/idProduct=/.test(projected.purchaseUris?.cardmarket || '')) {
        projected.purchaseUris = projected.purchaseUris || {};
        projected.purchaseUris.cardmarket =
          `https://www.cardmarket.com/en/Magic/Products?idProduct=${vendorIds.cardmarketId}`;
        mtgjsonUrlAdded.cardmarket++;
      }
      // No Card Kingdom fallback: CK product URLs are slug-based, and
      // cardKingdomId cannot build an exact page. CK simply stays
      // "price without link → dash" for unmatched tokens.
    }

    // EXISTING — unchanged
    if (cardTokenParts[scryfallId]) {
      projected.tokenParts = cardTokenParts[scryfallId];

      // Derive relatedTokens: other faces of this double-faced token.
      // cardTokenParts includes the token's own Scryfall ID, so filter it out.
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
  const manapoolLinked = Object.values(merged).filter(c => c.purchaseUris && c.purchaseUris.manapool).length;
  let ckLinked = 0;
  let ckFoilLinked = 0;
  for (const [id, card] of Object.entries(merged)) {
    if (card.purchaseUris && card.purchaseUris.cardkingdom && ckUrlByScryfallId[id] === card.purchaseUris.cardkingdom) {
      ckLinked++;
    }
    if (card.purchaseUris && card.purchaseUris.cardkingdom_foil && ckFoilUrlByScryfallId[id] === card.purchaseUris.cardkingdom_foil) {
      ckFoilLinked++;
    }
  }
  console.log(`   Double-faced token faces (Scryfall layout): ${doubleFacedCount}`);
  console.log(`   Manually paired token faces (MTGJson): ${manualPairingCount}`);
  if (manapoolLinked > 0) {
    console.log(`   ManaPool purchase URLs linked: ${manapoolLinked}`);
  }
  if (ckLinked > 0) {
    console.log(`   Card Kingdom purchase URLs linked: ${ckLinked}`);
  }
  if (ckFoilLinked > 0) {
    console.log(`   Card Kingdom foil purchase URLs linked: ${ckFoilLinked}`);
  }
  for (const vendor of ['tcgplayer', 'cardmarket']) {
    if (stubDropCounts[vendor] > 0) {
      console.log(`   ⚠️ Dropped ${stubDropCounts[vendor]} Scryfall search-stub URIs for ${vendor} (not exact product pages)`);
    }
    if (mtgjsonUrlAdded[vendor] > 0) {
      console.log(`   MTGJson-derived ${vendor} product URLs added: ${mtgjsonUrlAdded[vendor]}`);
    }
  }

  return merged;
}

/**
 * Filter paper prices to only include configured vendors and remove empty objects
 */
function filterPaperPrices(paper) {
  if (!paper || typeof paper !== 'object') return null;
  
  const filtered = {};
  
  for (const [vendor, vendorData] of Object.entries(paper)) {
    // Skip vendors not in the config
    if (!PRICE_CONFIG.vendors.includes(vendor)) continue;
    
    const vendorOut = {};
    
    // Handle buylist
    if (PRICE_CONFIG.includeBuylist && vendorData.buylist && Object.keys(vendorData.buylist).length > 0) {
      vendorOut.buylist = vendorData.buylist;
    } else if (!PRICE_CONFIG.includeBuylist) {
      // Skip buylist entirely
    } else if (PRICE_CONFIG.includeEmptyObjects) {
      vendorOut.buylist = vendorData.buylist;
    }
    
    // Handle retail
    if (vendorData.retail && Object.keys(vendorData.retail).length > 0) {
      vendorOut.retail = vendorData.retail;
    } else if (PRICE_CONFIG.includeEmptyObjects) {
      vendorOut.retail = vendorData.retail;
    }
    
    // Only include vendor if it has data
    if (Object.keys(vendorOut).length > 0) {
      vendorOut.currency = vendorData.currency;
      filtered[vendor] = vendorOut;
    }
  }
  
  return Object.keys(filtered).length > 0 ? filtered : null;
}

/**
 * Extract prices from MTGJson format (keyed by UUID, not Scryfall ID)
 * Uses the pre-built UUID->Scryfall ID mapping to match prices
 * Returns the combined (merged) price index keyed by Scryfall ID
 */
function extractPricesFromMtgJson(priceDataByUuid, lightIndex, uuidToScryfallId) {
  console.log('   Extracting price data...');
  const prices = {};
  
  let matched = 0;

  for (const [uuid, priceEntry] of Object.entries(priceDataByUuid)) {
    if (!priceEntry || typeof priceEntry !== 'object') continue;
    
    // Look up Scryfall ID for this UUID using the pre-built mapping
    const scryfallId = uuidToScryfallId[uuid];
    if (!scryfallId) continue;
    
    // Verify card exists in light_index
    const card = lightIndex[scryfallId];
    if (!card) continue;
    
    // Filter paper prices to only include configured vendors and remove empty objects
    const filteredPrices = filterPaperPrices(priceEntry.paper);
    if (!filteredPrices) continue;
    
    // Extract price data, keep both IDs
    matched++;
    prices[scryfallId] = {
      mtgjsonUuid: uuid,
      prices: filteredPrices,
    };
  }

  console.log(`✅ Extracted prices for ${matched} cards`);
  
  return { prices };
}

/**
 * Reduce the raw Card Kingdom listings to one daily-price object per Scryfall
 * card plus a representative purchase URL, in the same shape MTGJson produces
 * for the cardkingdom vendor so the app can consume it unchanged.
 *
 * For each card:
 *   - normal retail  = price of the cheapest in-stock non-foil listing (or the
 *     cheapest non-foil listing if none are in stock)
 *   - foil retail    = same, across foil listings
 *   - etched retail  = same, across etched-foil listings (also binned into the
 *     foil pool, so older app versions that only read normal/foil keep
 *     resolving the etched-only printings that are their only listing)
 *   - normal/foil buy = highest buylist price CK will pay (0 = not buying),
 *     only included when PRICE_CONFIG.includeBuylist is enabled
 *   - purchase URL   = the representative normal listing, else the foil listing
 *
 * Only daily prices are kept: a single date key (priceDate) holds the latest
 * snapshot; nothing historical accumulates.
 */
function buildCardKingdomData(ckByScryfallId, priceDate) {
  console.log('   Building live Card Kingdom data (URLs + daily prices)...');
  const ckUrlByScryfallId = {};
  const ckFoilUrlByScryfallId = {};
  const ckPriceMap = {};
  let mapped = 0;
  let etchedMapped = 0;

  const pickLowest = (group) => {
    const inStock = group.filter(l => l.qtyRetail > 0);
    const candidates = inStock.length > 0 ? inStock : group;
    return candidates.reduce((best, l) => (!best || l.priceRetail < best.priceRetail ? l : best), null);
  };

  for (const [scryfallId, listings] of Object.entries(ckByScryfallId)) {
    if (!Array.isArray(listings) || listings.length === 0) continue;

    const nonFoil = listings.filter(l => !l.isFoil);
    const foils = listings.filter(l => l.isFoil);
    const etched = listings.filter(l => l.isEtched); // subset of foils

    const normalListing = pickLowest(nonFoil);
    const foilListing = pickLowest(foils);
    const etchedListing = pickLowest(etched);

    const urlListing = normalListing || foilListing;
    // Only surface a purchase URL when the representative listing actually has
    // a price; 0-price (delisted) cards fall back to the Scryfall link / store
    // homepage instead.
    if (urlListing && urlListing.url && urlListing.priceRetail > 0) {
      ckUrlByScryfallId[scryfallId] = urlListing.url;
    }

    // Foil purchase URL — kept separately so foil-specific product links
    // survive instead of being collapsed into the non-foil representative.
    if (foilListing && foilListing.url && foilListing.priceRetail > 0) {
      ckFoilUrlByScryfallId[scryfallId] = foilListing.url;
    }

    const retail = {};
    if (normalListing && normalListing.priceRetail > 0) {
      retail.normal = { [priceDate]: normalListing.priceRetail };
    }
    if (foilListing && foilListing.priceRetail > 0) {
      retail.foil = { [priceDate]: foilListing.priceRetail };
    }
    if (etchedListing && etchedListing.priceRetail > 0) {
      retail.etched = { [priceDate]: etchedListing.priceRetail };
      etchedMapped++;
    }

    const buylist = {};
    if (PRICE_CONFIG.includeBuylist) {
      // Buylist: highest price CK will pay (0 means they are not buying).
      const normalBuy = nonFoil.reduce((best, l) => (l.priceBuy > best ? l.priceBuy : best), 0);
      const foilBuy = foils.reduce((best, l) => (l.priceBuy > best ? l.priceBuy : best), 0);
      if (normalBuy > 0) buylist.normal = { [priceDate]: normalBuy };
      if (foilBuy > 0) buylist.foil = { [priceDate]: foilBuy };
    }

    if (Object.keys(retail).length === 0 && Object.keys(buylist).length === 0) continue;

    ckPriceMap[scryfallId] = {
      currency: 'USD',
      ...(Object.keys(retail).length > 0 && { retail }),
      ...(Object.keys(buylist).length > 0 && { buylist }),
    };
    mapped++;
  }

  console.log(`   ✅ Live Card Kingdom data built for ${mapped} cards (${Object.keys(ckUrlByScryfallId).length} normal URLs, ${Object.keys(ckFoilUrlByScryfallId).length} foil URLs, ${etchedMapped} with a distinct etched price)`);
  return { ckUrlByScryfallId, ckFoilUrlByScryfallId, ckPriceMap };
}

/**
 * Write a JSON file and compress it to .gz
 */
async function writeAndCompressJson(data, outputPath, gzPath, name) {
  return new Promise((resolve, reject) => {
    const json = JSON.stringify(data);
    const tempPath = outputPath;
    
    fs.writeFileSync(tempPath, json);
    
    const input = fs.createReadStream(tempPath);
    const output = fs.createWriteStream(gzPath);
    const gzip = zlib.createGzip();
    
    input.pipe(gzip).pipe(output)
      .on('finish', () => {
        fs.unlinkSync(tempPath);
        console.log(`✅ ${name} written (${(fs.statSync(gzPath).size / 1024 / 1024).toFixed(2)} MB)`);
        resolve();
      })
      .on('error', reject);
  });
}

/**
 * Main sync function - orchestrates the full daily pipeline (Scryfall + MTGJson + store prices/links)
 */
async function sync() {
  try {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('🚀 Starting full sync pipeline...\n');

    // Self-audit: collect warnings so they land in manifest.json's "warnings"
    // array (consumed by the watchdog) instead of aborting the sync.
    const warnings = [];

    // Source tracking for watchdog health checks
    const sources = {
      scryfall:      { ok: false, cards: 0 },
      mtgjson:       { ok: false, cards: 0 },
      mtgjsonPrices: { ok: false, entries: 0 },
      manapool:      { ok: false, inStock: 0, linked: 0 },
      cardkingdom:   { ok: false, products: 0, uniqueIds: 0, priced: 0 },
    };

    // Scryfall now serves .jsonl.gz files (gzipped NDJSON)
    const scryfallGzPath = path.join(OUTPUT_DIR, 'scryfall.jsonl.gz');
    const scryfallNdjsonPath = path.join(OUTPUT_DIR, 'scryfall.ndjson');
    const mtgjsonGzPath = path.join(OUTPUT_DIR, 'mtgjson_temp.json.gz');
    const mtgjsonPath = path.join(OUTPUT_DIR, 'mtgjson_temp.json');
    const mtgjsonNdjsonPath = path.join(OUTPUT_DIR, 'mtgjson.ndjson');
    const pricesGzPath = path.join(OUTPUT_DIR, 'prices_temp.json.gz');
    const pricesPath = path.join(OUTPUT_DIR, 'prices_temp.json');
    const manapoolPath = path.join(OUTPUT_DIR, 'manapool_temp.json');
    const cardkingdomPath = path.join(OUTPUT_DIR, 'cardkingdom_temp.json');

    // Download Scryfall (.jsonl.gz - gzipped NDJSON)
    try {
      if (!fs.existsSync(scryfallGzPath)) {
        const downloadUrl = await getScryfallDownloadUrl();
        await downloadFile(downloadUrl, scryfallGzPath, 'Scryfall');
      } else {
        const stats = fs.statSync(scryfallGzPath);
        console.log(`✅ Scryfall source exists (${(stats.size / 1024 / 1024).toFixed(0)}MB)`);
      }
      sources.scryfall.ok = true;

      // Decompress .jsonl.gz to .ndjson (it's already NDJSON, just gzipped)
      if (!fs.existsSync(scryfallNdjsonPath)) {
        console.log(`🔄 Decompressing Scryfall NDJSON...`);
        await new Promise((resolve, reject) => {
          const input = createReadStream(scryfallGzPath);
          const output = createWriteStream(scryfallNdjsonPath);
          input.pipe(zlib.createGunzip()).pipe(output)
            .on('finish', () => {
              const stats = fs.statSync(scryfallNdjsonPath);
              console.log(`✅ Decompressed Scryfall NDJSON (${(stats.size / 1024 / 1024).toFixed(0)}MB)`);
              resolve();
            })
            .on('error', reject);
        });
      } else {
        console.log('✅ Scryfall NDJSON exists');
      }
    } catch (err) {
      console.error(`⚠️ Scryfall download/processing failed (${err.message})`);
      warnings.push(`Scryfall download failed: ${err.message}`);
      sources.scryfall.ok = false;
    }

    // Download and convert MTGJson (compressed .gz download, then decompress)
    try {
      if (!fs.existsSync(mtgjsonGzPath)) {
        await downloadFile(MTGJSON_URL, mtgjsonGzPath, 'MTGJson (.gz)');
      } else {
        const stats = fs.statSync(mtgjsonGzPath);
        console.log(`✅ MTGJson source exists (${(stats.size / 1024 / 1024).toFixed(0)}MB)`);
      }
      sources.mtgjson.ok = true;

      if (!fs.existsSync(mtgjsonPath)) {
        await decompressGzip(mtgjsonGzPath, mtgjsonPath, 'MTGJson');
      } else {
        console.log('✅ MTGJson decompressed file exists');
      }

      if (!fs.existsSync(mtgjsonNdjsonPath)) {
        await convertMtgJsonToNdjson(mtgjsonPath, mtgjsonNdjsonPath);
      } else {
        console.log('✅ MTGJson NDJSON exists');
      }
    } catch (err) {
      console.error(`⚠️ MTGJson download/processing failed (${err.message})`);
      warnings.push(`MTGJson download failed: ${err.message}`);
      sources.mtgjson.ok = false;
    }

    // Load converted card data (guard against missing files from failed downloads)
    let scryfallCards = {};
    let mtgjsonCards = {};
    if (fs.existsSync(scryfallNdjsonPath)) {
      scryfallCards = await loadNdjson(scryfallNdjsonPath, 'Scryfall');
      sources.scryfall.cards = Object.keys(scryfallCards).length;
    } else {
      console.error('⚠️ Scryfall NDJSON not found — skipping card load');
    }
    if (fs.existsSync(mtgjsonNdjsonPath)) {
      mtgjsonCards = await loadNdjson(mtgjsonNdjsonPath, 'MTGJson');
      sources.mtgjson.cards = Object.keys(mtgjsonCards).length;
    } else {
      console.error('⚠️ MTGJson NDJSON not found — skipping card load');
    }

    // Build MTGJson UUID -> Scryfall ID mapping
    let { uuidToScryfallId, vendorIdsByScryfallId } = createMtgJsonToScryfallMap(mtgjsonCards, scryfallCards);
    const scryfallToUuid = {};
    for (const [uuid, scryfallId] of Object.entries(uuidToScryfallId)) {
      if (!scryfallToUuid[scryfallId]) {
        scryfallToUuid[scryfallId] = uuid;
      }
    }

    // Fetch ManaPool purchase URLs (public API, no key). Direct links only for
    // cards currently in stock; failures here must not abort the whole sync.
    let manapoolByScryfallId = {};
    if (MANAPOOL_ENABLED) {
      try {
        manapoolByScryfallId = await fetchManapoolSingles(manapoolPath);
        sources.manapool.ok = true;
        sources.manapool.inStock = Object.keys(manapoolByScryfallId).length;
      } catch (err) {
        console.error(`⚠️ ManaPool fetch failed (${err.message}) — continuing without ManaPool purchase URLs`);
        warnings.push(`ManaPool fetch failed: ${err.message}`);
        manapoolByScryfallId = {};
      }
    } else {
      console.log('⏭️  ManaPool disabled — skipping');
    }
    if (MANAPOOL_ENABLED && Object.keys(manapoolByScryfallId).length === 0) {
      warnings.push('ManaPool returned no in-stock products — possible API/schema change');
    }

    // Fetch Card Kingdom purchase URLs + live prices (public API, no key).
    // The singles pricelist is large (~65 MB) and is stream-parsed inside
    // fetchCardKingdomSingles; failures here must not abort the whole sync,
    // so cardkingdom prices fall back to the MTGJson-sourced feed.
    let ckByScryfallId = {};
    let ckUpdatedAt = null;
    let ckSkipped = 0;
    let ckUniqueIds = 0;
    let ckProductsParsed = 0;
    let ckFetchFailed = false;
    if (CARDKINGDOM_ENABLED) {
      try {
        const ckResult = await fetchCardKingdomSingles(cardkingdomPath);
        ckByScryfallId = ckResult.ckByScryfallId;
        ckUpdatedAt = ckResult.updatedAt;
        ckSkipped = ckResult.skippedNoScryfallId || 0;
        ckUniqueIds = Object.keys(ckByScryfallId).length;
        ckProductsParsed = Object.values(ckByScryfallId).reduce((n, arr) => n + arr.length, 0);
        sources.cardkingdom.ok = true;
        sources.cardkingdom.products = ckProductsParsed;
        sources.cardkingdom.uniqueIds = ckUniqueIds;
      } catch (err) {
        ckFetchFailed = true;
        console.error(`⚠️ Card Kingdom fetch failed (${err.message}) — continuing with MTGJson cardkingdom data`);
        warnings.push(`Card Kingdom fetch failed: ${err.message}`);
        ckByScryfallId = {};
      }
    } else {
      console.log('⏭️  Card Kingdom disabled — skipping');
    }
    if (!ckFetchFailed && ckUniqueIds === 0 && CARDKINGDOM_ENABLED) {
      warnings.push('Card Kingdom returned 0 products — possible API/schema change');
    }

    // Reduce the raw CK listings into a representative purchase URL per card
    // plus the daily price object in MTGJson's cardkingdom shape. The price
    // date key comes from CK's own price-list timestamp (fallback: today).
    let ckUrlByScryfallId = {};
    let ckFoilUrlByScryfallId = {};
    let ckPriceMap = {};
    if (Object.keys(ckByScryfallId).length > 0) {
      let priceDate;
      if (ckUpdatedAt) {
        priceDate = ckUpdatedAt.slice(0, 10);
      } else {
        priceDate = new Date().toISOString().split('T')[0];
        console.warn('⚠️ Card Kingdom meta.created_at missing — using today as the price date key');
        warnings.push('Card Kingdom meta.created_at missing — used today as the daily price date');
      }
      const ckData = buildCardKingdomData(ckByScryfallId, priceDate);
      ckUrlByScryfallId = ckData.ckUrlByScryfallId;
      ckFoilUrlByScryfallId = ckData.ckFoilUrlByScryfallId;
      ckPriceMap = ckData.ckPriceMap;
    }
    // The raw CK listings are only needed for the reduction above; release them
    // (along with the other big intermediates further down) to lower peak memory.
    ckByScryfallId = null;

    if (ckUniqueIds > 0 && Object.keys(ckPriceMap).length === 0) {
      warnings.push('Card Kingdom parsed listings but produced 0 priced cards — price fields may have changed');
    }

    // Build light index with token parts and UUID
    const { cardTokenParts, cardTokenPairings } = extractTokenParts(mtgjsonCards, uuidToScryfallId);
    const lightIndex = mergeLightIndex(scryfallCards, cardTokenParts, cardTokenPairings, scryfallToUuid, manapoolByScryfallId, ckUrlByScryfallId, ckFoilUrlByScryfallId, vendorIdsByScryfallId);

    // Release the large raw card maps — lightIndex is built and downstream only
    // needs the UUID mappings and the merged price index.
    mtgjsonCards = null;
    scryfallCards = null;

    // Download prices
    let priceData = {};
    let pricesTotal = 0;
    try {
      if (!fs.existsSync(pricesGzPath)) {
        await downloadFile(MTGJSON_PRICES_URL, pricesGzPath, 'Prices (.gz)');
      } else {
        const stats = fs.statSync(pricesGzPath);
        console.log(`✅ Prices source exists (${(stats.size / 1024 / 1024).toFixed(0)}MB)`);
      }
      sources.mtgjsonPrices.ok = true;

      if (!fs.existsSync(pricesPath)) {
        await decompressGzip(pricesGzPath, pricesPath, 'Prices');
      } else {
        console.log('✅ Prices decompressed file exists');
      }

      console.log('\n💰 Processing prices...');
      priceData = JSON.parse(fs.readFileSync(pricesPath, 'utf8')).data;
      pricesTotal = Object.keys(priceData).length;
      sources.mtgjsonPrices.entries = pricesTotal;
      console.log(`   Loaded ${pricesTotal} price entries from MTGJson`);
      if (pricesTotal === 0) {
        warnings.push('MTGJSON prices returned empty — pricing pipeline may be broken');
      }
    } catch (err) {
      console.error(`⚠️ Prices download/processing failed (${err.message})`);
      warnings.push(`MTGJson prices download failed: ${err.message}`);
      sources.mtgjsonPrices.ok = false;
    }

    let { prices: extractedPrices } = extractPricesFromMtgJson(priceData, lightIndex, uuidToScryfallId);

    // Release the raw price blob and the UUID map — only the merged index is
    // needed from here on. This is the single largest memory win in the run.
    priceData = null;
    uuidToScryfallId = null;

    // Live Card Kingdom prices replace the MTGJson cardkingdom vendor when the
    // live fetch succeeded. The app keeps only the latest daily snapshot, so
    // the live "today" price (from CK's own pricelist) is exactly what we want.
    // light_price_index.json.gz is the single source of truth for prices, so
    // the override happens per card right here; MTGJson data remains the
    // fallback when the live API is down or disabled.
    let ckPricedCards = 0;
    if (CK_LIVEPRICES_PREFER_API && Object.keys(ckPriceMap).length > 0) {
      for (const [scryfallId, ckPrice] of Object.entries(ckPriceMap)) {
        if (!lightIndex[scryfallId]) continue;
        if (extractedPrices[scryfallId]) {
          extractedPrices[scryfallId].prices.cardkingdom = ckPrice;
        } else {
          extractedPrices[scryfallId] = {
            mtgjsonUuid: scryfallToUuid[scryfallId] || null,
            prices: { cardkingdom: ckPrice },
          };
        }
        ckPricedCards++;
      }
      console.log(`   💳 Live Card Kingdom prices applied to ${ckPricedCards} cards`);
    }
    sources.cardkingdom.priced = ckPricedCards;

    console.log('\n📝 Writing output files...');
    
    // Write and compress the light index
    const lightIndexGzPath = path.join(OUTPUT_DIR, 'light_index.json.gz');
    const lightIndexTempPath = path.join(OUTPUT_DIR, 'light_index_temp.json');
    await writeAndCompressJson(lightIndex, lightIndexTempPath, lightIndexGzPath, 'light_index.json.gz');
    
    // Write and compress the price index (single merged source of truth;
    // per-store price files are intentionally not produced)
    const lightPriceIndexGzPath = path.join(OUTPUT_DIR, 'light_price_index.json.gz');
    const lightPriceIndexTempPath = path.join(OUTPUT_DIR, 'light_price_index_temp.json');
    await writeAndCompressJson(extractedPrices, lightPriceIndexTempPath, lightPriceIndexGzPath, 'light_price_index.json.gz');

    const timestamp = new Date().toISOString();
    const version = timestamp.split('T')[0];

    const manapoolLinked = Object.values(lightIndex).filter(c => c.purchaseUris && c.purchaseUris.manapool).length;
    let ckLinked = 0;
    let ckFoilLinked = 0;
    for (const [id, card] of Object.entries(lightIndex)) {
      if (card.purchaseUris && card.purchaseUris.cardkingdom && ckUrlByScryfallId[id] === card.purchaseUris.cardkingdom) {
        ckLinked++;
      }
      if (card.purchaseUris && card.purchaseUris.cardkingdom_foil && ckFoilUrlByScryfallId[id] === card.purchaseUris.cardkingdom_foil) {
        ckFoilLinked++;
      }
    }
    sources.manapool.linked = manapoolLinked;
    sources.cardkingdom.linked = ckLinked;

    // Price ⟺ link alignment: for each vendor, count cards where a purchase
    // URL exists in the light index AND the price index carries that vendor's
    // price. Also count the inverse (priced but linkless) — those render as
    // inert dashes in the app by design.
    const priceLinkStats = {};
    for (const vendor of ['tcgplayer', 'cardmarket', 'cardkingdom', 'manapool']) {
      let priced = 0, linked = 0, aligned = 0, pricedNoLink = 0;
      const pricedIds = new Set(Object.keys(extractedPrices).filter(id => extractedPrices[id].prices && extractedPrices[id].prices[vendor] != null));
      for (const [id, card] of Object.entries(lightIndex)) {
        const hasPrice = pricedIds.has(id);
        const hasUrl = !!(card.purchaseUris && card.purchaseUris[vendor]);
        if (hasPrice) priced++;
        if (hasUrl) linked++;
        if (hasPrice && hasUrl) aligned++;
        if (hasPrice && !hasUrl) pricedNoLink++;
      }
      priceLinkStats[vendor] = { priced, linked, aligned, pricedNoLink };
    }
    for (const [vendor, s] of Object.entries(priceLinkStats)) {
      console.log(`   ${vendor}: ${s.aligned} price+link aligned, ${s.pricedNoLink} priced but linkless (dash), ${s.linked} linked total`);
    }
    if (Object.keys(lightIndex).length > 0 && (stubDropCounts.tcgplayer + stubDropCounts.cardmarket) > Object.keys(lightIndex).length * 0.1) {
      warnings.push(`Unusually high search-stub drop count (tcgplayer: ${stubDropCounts.tcgplayer}, cardmarket: ${stubDropCounts.cardmarket}) — Scryfall purchase_uris schema may have changed`);
    }

    const lightIndexCards = Object.keys(lightIndex).length;
    const pricesCards = Object.keys(extractedPrices).length;
    if (lightIndexCards === 0) warnings.push('Light index is empty — Scryfall/MTGJSON data problem');
    if (lightIndexCards > 0 && pricesCards / lightIndexCards < 0.5) {
      warnings.push(`Price coverage is unusually low (${pricesCards}/${lightIndexCards} cards)`);
    }

    const manifest = {
      version,
      generatedAt: timestamp,
      lightIndexCards,
      pricesCards,
      pricesTotal,
      sources,
      storeHomeUrls: STORE_HOME_URLS,
      manapool: {
        inStockFromApi: Object.keys(manapoolByScryfallId).length,
        linkedInLightIndex: manapoolLinked,
      },
      cardkingdom: {
        productsParsed: ckProductsParsed,
        uniqueScryfallIds: ckUniqueIds,
        linkedInLightIndex: ckLinked,
        foilLinkedInLightIndex: ckFoilLinked,
        pricedCards: ckPricedCards,
        sealedSkipped: ckSkipped,
        updatedAt: ckUpdatedAt,
      },
      ...(warnings.length > 0 ? { warnings } : {}),
    };

    fs.writeFileSync(path.join(OUTPUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));

    // Clean up temp files (with error handling for missing files)
    console.log(`\n🧹 Cleaning up temp files...`);
    const tempFiles = [
      { path: scryfallGzPath, name: 'scryfall.jsonl.gz', flag: CLEANUP_SCRYFALL_GZ },
      { path: scryfallNdjsonPath, name: 'scryfall.ndjson', flag: CLEANUP_SCRYFALL_NDJSON },
      { path: mtgjsonGzPath, name: 'mtgjson_temp.json.gz', flag: CLEANUP_MTGJSON_GZ },
      { path: mtgjsonPath, name: 'mtgjson_temp.json', flag: CLEANUP_MTGJSON_TEMP },
      { path: mtgjsonNdjsonPath, name: 'mtgjson.ndjson', flag: CLEANUP_MTGJSON_NDJSON },
      { path: pricesGzPath, name: 'prices_temp.json.gz', flag: CLEANUP_PRICES_GZ },
      { path: pricesPath, name: 'prices_temp.json', flag: CLEANUP_PRICES_TEMP },
      { path: manapoolPath, name: 'manapool_temp.json', flag: CLEANUP_MANAPOOL_TEMP },
      { path: cardkingdomPath, name: 'cardkingdom_temp.json', flag: CLEANUP_CARDKINGDOM_TEMP },
    ];
    for (const file of tempFiles) {
      if (!file.flag) {
        console.log(`   - Kept ${file.name} (cleanup disabled)`);
        continue;
      }
      try {
        if (fs.existsSync(file.path)) {
          fs.unlinkSync(file.path);
          console.log(`   - Removed ${file.name}`);
        } else {
          console.log(`   - Skipped ${file.name} (not found)`);
        }
      } catch (err) {
        console.log(`   - Warning: could not remove ${file.name}: ${err.message}`);
      }
    }

    console.log(`\n✅ manifest.json written`);

    console.log('\n✨ Full sync complete!');

    console.log(`📦 Version: ${version}`);
    console.log(`📊 Stats:`);
    console.log(`   - Cards in light_index: ${Object.keys(lightIndex).length}`);
    console.log(`   - Cards in light_price_index: ${Object.keys(extractedPrices).length}`);
    console.log(`   - Total price entries available: ${pricesTotal}`);
    console.log(`   - ManaPool purchase URLs: ${manapoolLinked} cards linked (${Object.keys(manapoolByScryfallId).length} in stock from API)`);
    console.log(`   - Card Kingdom: ${ckUniqueIds} scryfall IDs, ${ckPricedCards} priced, ${ckLinked} purchase URLs linked (${ckFoilLinked} foil), ${ckSkipped} non-card entries skipped`);
  } catch (error) {
    console.error('❌ Error during sync:');
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);
    process.exit(1);
  }
}

sync();