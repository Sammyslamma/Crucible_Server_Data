import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { createReadStream, createWriteStream } from 'fs';
import JSONStream from 'JSONStream';

const MTGJSON_URL = 'https://mtgjson.com/api/v5/AllPrintings.json';
const MTGJSON_PRICES_URL = 'https://mtgjson.com/api/v5/AllPricesToday.json';

const OUTPUT_DIR = './docs';

// Price index configuration - adjust to reduce file size
const PRICE_CONFIG = {
  vendors: ['tcgplayer', 'cardkingdom', 'cardmarket', 'manapool'],  // All available vendors
  includeBuylist: false,                   // Set true to include buylist prices
  includeEmptyObjects: false               // Set true to keep empty buylist/retail objects
};

/**
 * Fetch the actual Scryfall download URL from metadata
 */
async function getScryfallDownloadUrl() {
  console.log('📋 Fetching Scryfall metadata...');
  const response = await fetch('https://api.scryfall.com/bulk-data');
  if (!response.ok) {
    throw new Error(`Failed to fetch Scryfall metadata: ${response.status}`);
  }
  const data = await response.json();
  const defaultCards = data.data.find(item => item.type === 'default_cards');
  if (!defaultCards) {
    throw new Error('default_cards bulk data not found in Scryfall metadata');
  }
  console.log(`✅ Got Scryfall download URL`);
  return defaultCards.download_uri;
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
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
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
 * Convert Scryfall JSON array to NDJSON
 * Scryfall bulk data is: [{card}, {card}, ...]
 * We need to convert to: card\ncard\ncard...
 */
async function convertScryfallToNdjson(inputPath, outputPath) {
  console.log(`🔄 Converting Scryfall to NDJSON (streaming JSON array)...`);
  
  return new Promise((resolve, reject) => {
    const input = createReadStream(inputPath);
    const output = createWriteStream(outputPath, { encoding: 'utf8' });
    
    // For a top-level JSON array, use [true] to emit each array element
    const pipeline = input.pipe(JSONStream.parse([true]));
    
    let cardCount = 0;

    pipeline.on('data', (card) => {
      try {
        if (card && typeof card === 'object') {
          const line = JSON.stringify(card);
          output.write(line + '\n');
          cardCount++;
          
          if (cardCount % 10000 === 0) {
            console.log(`  ✓ Converted ${cardCount} cards...`);
          }
        }
      } catch (err) {
        console.error(`Error writing card:`, err.message);
      }
    });

    pipeline.on('end', () => {
      output.end();
      console.log(`✅ Converted ${cardCount} Scryfall cards to NDJSON`);
      resolve();
    });

    pipeline.on('error', (err) => {
      output.destroy();
      console.error(`❌ Scryfall conversion error:`, err.message);
      reject(err);
    });

    output.on('error', reject);
  });
}

/**
 * Convert Prices to NDJSON using JSONStream
 * Structure: { meta: {...}, data: { uuid: { paper: {...}, mtgo: {...} }, ... } }
 */
async function convertPricesToNdjson(inputPath, outputPath) {
  console.log(`🔄 Converting Prices to NDJSON (streaming with JSONStream)...`);
  
  return new Promise((resolve, reject) => {
    const input = createReadStream(inputPath);
    const output = createWriteStream(outputPath, { encoding: 'utf8' });
    
    // Use $* to emit objects as { key: uuid, value: priceData }
    const pipeline = input.pipe(JSONStream.parse(['data', '$*']));
    
    let priceCount = 0;

    pipeline.on('data', ({ key, value }) => {
      // key = uuid, value = price data
      try {
        const line = JSON.stringify({
          uuid: key,
          ...value
        });
        output.write(line + '\n');
        priceCount++;
        
        if (priceCount % 10000 === 0) {
          console.log(`  ✓ Converted ${priceCount} price entries...`);
        }
      } catch (err) {
        console.error(`Error writing price for ${key}:`, err.message);
      }
    });

    pipeline.on('end', () => {
      output.end();
      console.log(`✅ Converted ${priceCount} price entries to NDJSON`);
      resolve();
    });

    pipeline.on('error', (err) => {
      output.destroy();
      reject(err);
    });

    output.on('error', reject);
  });
}

/**
 * Calculate SHA256 hash of a file
 */
function calculateHash(filePath) {
  return new Promise((resolve, reject) => {
    const hash = createHash('sha256');
    const stream = createReadStream(filePath);

    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', reject);
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
          // For Prices: key by scryfallId
          else if (obj.scryfallId) {
            data[obj.scryfallId] = obj;
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
          else if (obj.scryfallId) data[obj.scryfallId] = obj;
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
  
  const uuidToScryfallId = {};
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
  return uuidToScryfallId;
}

/**
 * Extract tokenParts from MTGJson and convert UUIDs to Scryfall IDs
 */
function extractTokenParts(mtgjsonCards, uuidToScryfallId) {
  console.log('🎴 Extracting tokenParts from MTGJson...');
  const cardTokenParts = {};

  for (const versions of Object.values(mtgjsonCards)) {
    if (!Array.isArray(versions)) continue;

    for (const card of versions) {
      if (!card.uuid || !card.tokenParts || !Array.isArray(card.tokenParts)) continue;

      const scryfallId = uuidToScryfallId[card.uuid];
      if (!scryfallId) continue;

      const tokenScryfallIds = card.tokenParts
        .map((tokenUuid) => uuidToScryfallId[tokenUuid])
        .filter((id) => id);

      if (tokenScryfallIds.length > 0) {
        cardTokenParts[scryfallId] = tokenScryfallIds;
      }
    }
  }

  console.log(`✅ Extracted ${Object.keys(cardTokenParts).length} cards with tokenParts`);
  return cardTokenParts;
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

  const copyPrices = (src) => {
    if (!src || typeof src !== 'object') return null;
    const out = {};
    for (const [k, v] of Object.entries(src)) {
      if (k !== 'tix') out[k] = v;
    }
    return Object.keys(out).length > 0 ? out : null;
  };

  const copyPurchaseUris = (src) => {
    if (!src || typeof src !== 'object') return null;
    const out = {};
    for (const [k, v] of Object.entries(src)) {
      if (k !== 'cardhoarder') out[k] = v;
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
    // Fields for name search and Card construction
    name: card.name || null,
    set: card.set || null,
    set_name: card.set_name || null,
    collector_number: card.collector_number || null,
    rarity: card.rarity || null,
  };
}

/**
 * Merge Scryfall cards with MTGJson tokenParts
 */
function mergeLightIndex(scryfallCards, cardTokenParts, scryfallToUuid = {}) {
  console.log('🔀 Merging light index with tokenParts and projecting fields...');
  const merged = {};

  for (const [scryfallId, card] of Object.entries(scryfallCards)) {
    const projected = projectLightCard(card);
    projected.mtgjsonUuid = scryfallToUuid[scryfallId] || null;
    
    if (cardTokenParts[scryfallId]) {
      projected.tokenParts = cardTokenParts[scryfallId];
    }
    
    merged[scryfallId] = projected;
  }

  console.log(`✅ Merged and projected ${Object.keys(merged).length} cards`);
  return merged;
}

/**
 * Extract prices and match against Scryfall
 */
function extractPrices(priceData, scryfallCards) {
  console.log('💰 Extracting prices...');
  const prices = {};

  for (const [scryfallId, card] of Object.entries(scryfallCards)) {
    if (!priceData[scryfallId]) continue;
//
    const priceEntry = priceData[scryfallId];
    prices[scryfallId] = {
      name: card.name,
      set: card.set,
      collectorNumber: card.collector_number,
      prices: priceEntry.prices || {},
      purchaseUris: priceEntry.purchaseUris || {},
    };
  }

  console.log(`✅ Extracted prices for ${Object.keys(prices).length} cards`);
  return prices;
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
 * Returns both combined and per-vendor price data
 */
function extractPricesFromMtgJson(priceDataByUuid, lightIndex, uuidToScryfallId) {
  console.log('   Extracting price data...');
  const prices = {};
  const pricesByVendor = {};  // { vendor: { scryfallId: { mtgjsonUuid, prices } } }
  
  // Initialize vendor maps
  for (const vendor of PRICE_CONFIG.vendors) {
    pricesByVendor[vendor] = {};
  }
  
  let matched = 0;
  let available = 0;

  for (const [uuid, priceEntry] of Object.entries(priceDataByUuid)) {
    if (!priceEntry || typeof priceEntry !== 'object') continue;
    available++;
    
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
    
    // Also store per-vendor for split files
    for (const [vendor, vendorPrices] of Object.entries(filteredPrices)) {
      pricesByVendor[vendor][scryfallId] = {
        mtgjsonUuid: uuid,
        prices: vendorPrices,
      };
    }
  }

  console.log(`✅ Extracted prices for ${matched} cards`);
  
  return { prices, pricesByVendor };
}

/**
 * Main sync function - PRICES ONLY MODE (Scryfall disabled, MTGJson enabled for UUID mapping)
 */
async function sync() {
  try {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('🚀 Starting full sync pipeline...\n');

    const scryfallTempPath = path.join(OUTPUT_DIR, 'scryfall_temp.json');
    const scryfallNdjsonPath = path.join(OUTPUT_DIR, 'scryfall.ndjson');
    const mtgjsonPath = path.join(OUTPUT_DIR, 'mtgjson_temp.json');
    const mtgjsonNdjsonPath = path.join(OUTPUT_DIR, 'mtgjson.ndjson');
    const pricesPath = path.join(OUTPUT_DIR, 'prices_temp.json');
    const lightIndexPath = path.join(OUTPUT_DIR, 'light_index.json');
    const lightPriceIndexPath = path.join(OUTPUT_DIR, 'light_price_index.json');

    // Download and convert Scryfall
    if (!fs.existsSync(scryfallTempPath)) {
      const downloadUrl = await getScryfallDownloadUrl();
      await downloadFile(downloadUrl, scryfallTempPath, 'Scryfall');
    } else {
      const stats = fs.statSync(scryfallTempPath);
      console.log(`✅ Scryfall source exists (${(stats.size / 1024 / 1024).toFixed(0)}MB)`);
    }

    if (!fs.existsSync(scryfallNdjsonPath)) {
      await convertScryfallToNdjson(scryfallTempPath, scryfallNdjsonPath);
    } else {
      console.log('✅ Scryfall NDJSON exists');
    }

    // Download and convert MTGJson
    if (!fs.existsSync(mtgjsonPath)) {
      await downloadFile(MTGJSON_URL, mtgjsonPath, 'MTGJson');
    } else {
      const stats = fs.statSync(mtgjsonPath);
      console.log(`✅ MTGJson source exists (${(stats.size / 1024 / 1024).toFixed(0)}MB)`);
    }

    if (!fs.existsSync(mtgjsonNdjsonPath)) {
      await convertMtgJsonToNdjson(mtgjsonPath, mtgjsonNdjsonPath);
    } else {
      console.log('✅ MTGJson NDJSON exists');
    }

    // Load converted card data
    const scryfallCards = await loadNdjson(scryfallNdjsonPath, 'Scryfall');
    const mtgjsonCards = await loadNdjson(mtgjsonNdjsonPath, 'MTGJson');

    // Build MTGJson UUID -> Scryfall ID mapping
    const uuidToScryfallId = createMtgJsonToScryfallMap(mtgjsonCards, scryfallCards);
    const scryfallToUuid = {};
    for (const [uuid, scryfallId] of Object.entries(uuidToScryfallId)) {
      if (!scryfallToUuid[scryfallId]) {
        scryfallToUuid[scryfallId] = uuid;
      }
    }

    // Build light index with token parts and UUID
    const cardTokenParts = extractTokenParts(mtgjsonCards, uuidToScryfallId);
    const lightIndex = mergeLightIndex(scryfallCards, cardTokenParts, scryfallToUuid);

    // Download prices
    if (!fs.existsSync(pricesPath)) {
      await downloadFile(MTGJSON_PRICES_URL, pricesPath, 'Prices');
    } else {
      const stats = fs.statSync(pricesPath);
      console.log(`✅ Prices source exists (${(stats.size / 1024 / 1024).toFixed(0)}MB)`);
    }

    console.log('\n💰 Processing prices...');
    const priceData = JSON.parse(fs.readFileSync(pricesPath, 'utf8')).data;
    console.log(`   Loaded ${Object.keys(priceData).length} price entries from MTGJson`);

    const { prices: extractedPrices, pricesByVendor } = extractPricesFromMtgJson(priceData, lightIndex, uuidToScryfallId);

    console.log('\n📝 Writing output files...');
    fs.writeFileSync(lightIndexPath, JSON.stringify(lightIndex, null, 2));
    fs.writeFileSync(lightPriceIndexPath, JSON.stringify(extractedPrices));  // Compact format to reduce file size

    // Write separate vendor files
    const vendorFiles = {};
    for (const [vendor, vendorPrices] of Object.entries(pricesByVendor)) {
      const vendorPath = path.join(OUTPUT_DIR, `light_price_index_${vendor}.json`);
      fs.writeFileSync(vendorPath, JSON.stringify(vendorPrices));
      vendorFiles[vendor] = {
        path: vendorPath,
        size: fs.statSync(vendorPath).size,
        cards: Object.keys(vendorPrices).length,
      };
      console.log(`✅ light_price_index_${vendor}.json written (${(vendorFiles[vendor].size / 1024 / 1024).toFixed(2)} MB)`);
    }

    const lightIndexSize = fs.statSync(lightIndexPath).size;
    const pricesSize = fs.statSync(lightPriceIndexPath).size;

    const timestamp = new Date().toISOString();
    const version = timestamp.split('T')[0];

    const manifest = {
      version,
      generatedAt: timestamp,
      lightIndexCards: Object.keys(lightIndex).length,
      pricesCards: Object.keys(extractedPrices).length,
      pricesTotal: Object.keys(priceData).length,
      vendorFiles: Object.fromEntries(
        Object.entries(vendorFiles).map(([v, f]) => [v, { size: f.size, cards: f.cards }])
      ),
    };

    fs.writeFileSync(path.join(OUTPUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));

    // Clean up temp files
    console.log(`\n🧹 Cleaning up temp files...`);
    fs.unlinkSync(scryfallTempPath);
    fs.unlinkSync(scryfallNdjsonPath);
    fs.unlinkSync(mtgjsonPath);
    fs.unlinkSync(mtgjsonNdjsonPath);
    fs.unlinkSync(pricesPath);
    console.log(`   - Removed scryfall_temp.json`);
    console.log(`   - Removed scryfall.ndjson`);
    console.log(`   - Removed mtgjson_temp.json`);
    console.log(`   - Removed mtgjson.ndjson`);
    console.log(`   - Removed prices_temp.json`);

    console.log(`\n✅ light_index.json written (${(lightIndexSize / 1024 / 1024).toFixed(2)} MB)`);
    console.log(`✅ light_price_index.json written (${(pricesSize / 1024 / 1024).toFixed(2)} MB)`);
    console.log(`✅ manifest.json written`);

    console.log('\n✨ Full sync complete!');
    console.log(`📦 Version: ${version}`);
    console.log(`📊 Stats:`);
    console.log(`   - Cards in light_index: ${Object.keys(lightIndex).length}`);
    console.log(`   - Cards in light_price_index: ${Object.keys(extractedPrices).length}`);
    console.log(`   - Total price entries available: ${Object.keys(priceData).length}`);
    console.log(`   - Vendor files: ${Object.keys(vendorFiles).map(v => `${v} (${vendorFiles[v].cards} cards)`).join(', ')}`);
  } catch (error) {
    console.error('❌ Error during sync:');
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);
    process.exit(1);
  }
}

sync();