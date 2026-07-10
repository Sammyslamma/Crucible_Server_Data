import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { createReadStream, createWriteStream } from 'fs';
import pkg from 'stream-json';
const { parser } = pkg;
import StreamObject from 'stream-json/streamers/StreamObject.js';
const { streamObject } = StreamObject;

const MTGJSON_URL = 'https://mtgjson.com/api/v5/AllPrintings.json';
const MTGJSON_PRICES_URL = 'https://mtgjson.com/api/v5/AllPricesToday.json';

const OUTPUT_DIR = './output';

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
 * Convert MTGJson to NDJSON using streaming JSON parser
 */
async function convertMtgJsonToNdjson(inputPath, outputPath) {
  console.log(`🔄 Converting MTGJson to NDJSON (streaming)...`);
  
  return new Promise((resolve, reject) => {
    const input = createReadStream(inputPath);
    const output = createWriteStream(outputPath, { encoding: 'utf8' });
    const pipeline = input.pipe(parser()).pipe(streamObject());
    
    let cardCount = 0;
    let versionCount = 0;

    pipeline.on('data', ({ key, value }) => {
      // key = card name, value = array of printings
      if (Array.isArray(value)) {
        for (const printing of value) {
          try {
            const line = JSON.stringify({
              name: key,
              ...printing
            });
            output.write(line + '\n');
            versionCount++;
            
            if (versionCount % 10000 === 0) {
              console.log(`  Converted ${versionCount} card versions...`);
            }
          } catch (err) {
            console.error(`Error writing card ${key}:`, err.message);
          }
        }
        cardCount++;
      }
    });

    pipeline.on('end', () => {
      output.end();
      console.log(`✅ Converted ${cardCount} card names, ${versionCount} total versions to NDJSON`);
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
 * Convert Prices to NDJSON using streaming JSON parser
 */
async function convertPricesToNdjson(inputPath, outputPath) {
  console.log(`🔄 Converting Prices to NDJSON (streaming)...`);
  
  return new Promise((resolve, reject) => {
    const input = createReadStream(inputPath);
    const output = createWriteStream(outputPath, { encoding: 'utf8' });
    const pipeline = input.pipe(parser()).pipe(streamObject());
    
    let priceCount = 0;

    pipeline.on('data', ({ key, value }) => {
      // key = scryfallId, value = price data
      try {
        const line = JSON.stringify({
          scryfallId: key,
          ...value
        });
        output.write(line + '\n');
        priceCount++;
        
        if (priceCount % 10000 === 0) {
          console.log(`  Converted ${priceCount} price entries...`);
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
          // For MTGJson: key by name and store as array
          else if (obj.name && obj.uuid) {
            if (!data[obj.name]) data[obj.name] = [];
            data[obj.name].push(obj);
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
          else if (obj.name && obj.uuid) {
            if (!data[obj.name]) data[obj.name] = [];
            data[obj.name].push(obj);
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
 */
function createMtgJsonToScryfallMap(mtgjsonCards, scryfallCards) {
  console.log('🔗 Building MTGJson UUID → Scryfall ID mapping...');
  console.log(`   Scryfall cards: ${Object.keys(scryfallCards).length}`);
  console.log(`   MTGJson card names: ${Object.keys(mtgjsonCards).length}`);
  
  const uuidToScryfallId = {};
  let matchCount = 0;

  for (const [mtgJsonCardName, mtgJsonVersions] of Object.entries(mtgjsonCards)) {
    if (!Array.isArray(mtgJsonVersions)) continue;

    for (const mtgJsonCard of mtgJsonVersions) {
      const mtgJsonUuid = mtgJsonCard.uuid;
      if (!mtgJsonUuid) continue;

      const matchKey = `${mtgJsonCardName}|${mtgJsonCard.power || ''}|${mtgJsonCard.toughness || ''}|${mtgJsonCard.type || ''}`;

      for (const scryfallCard of Object.values(scryfallCards)) {
        if (!scryfallCard || typeof scryfallCard !== 'object') continue;

        const scryfallName = scryfallCard.name;
        const scryfallPower = scryfallCard.power || '';
        const scryfallToughness = scryfallCard.toughness || '';
        const scryfallType = scryfallCard.type_line || '';

        const scryfallMatchKey = `${scryfallName}|${scryfallPower}|${scryfallToughness}|${scryfallType}`;

        if (matchKey === scryfallMatchKey) {
          uuidToScryfallId[mtgJsonUuid] = scryfallCard.id;
          matchCount++;
          break;
        }
      }
    }
  }

  console.log(`✅ Mapped ${matchCount} MTGJson UUIDs to Scryfall IDs`);
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
 * Merge Scryfall cards with MTGJson tokenParts
 */
function mergeLightIndex(scryfallCards, cardTokenParts) {
  console.log('🔀 Merging light index with tokenParts...');
  const merged = {};

  for (const [scryfallId, card] of Object.entries(scryfallCards)) {
    merged[scryfallId] = { ...card };

    if (cardTokenParts[scryfallId]) {
      merged[scryfallId].tokenParts = cardTokenParts[scryfallId];
    }
  }

  console.log(`✅ Merged ${Object.keys(merged).length} cards`);
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
 * Main sync function
 */
async function sync() {
  try {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('🚀 Starting Scryfall + MTGJson sync...\n');

    const SCRYFALL_URL = await getScryfallDownloadUrl();

    const scryfallPath = path.join(OUTPUT_DIR, 'scryfall_temp.json');
    const mtgjsonPath = path.join(OUTPUT_DIR, 'mtgjson_temp.json');
    const pricesPath = path.join(OUTPUT_DIR, 'prices_temp.json');
    
    const scryfallNdjsonPath = path.join(OUTPUT_DIR, 'scryfall.ndjson');
    const mtgjsonNdjsonPath = path.join(OUTPUT_DIR, 'mtgjson.ndjson');
    const pricesNdjsonPath = path.join(OUTPUT_DIR, 'prices.ndjson');

    console.log('\n⬇️ Step 1: Downloading Scryfall...');
    await downloadFile(SCRYFALL_URL, scryfallPath, 'Scryfall');

    console.log('\n⬇️ Step 2: Downloading MTGJson...');
    await downloadFile(MTGJSON_URL, mtgjsonPath, 'MTGJson');

    console.log('\n⬇️ Step 3: Downloading Prices...');
    await downloadFile(MTGJSON_PRICES_URL, pricesPath, 'Prices');

    console.log('\n🔄 Step 4: Converting to NDJSON...');
    
    // Scryfall is already NDJSON, just rename it
    fs.renameSync(scryfallPath, scryfallNdjsonPath);
    console.log(`✅ Scryfall is NDJSON (no conversion needed)`);
    
    // Convert MTGJson to NDJSON
    await convertMtgJsonToNdjson(mtgjsonPath, mtgjsonNdjsonPath);
    
    // Convert Prices to NDJSON
    await convertPricesToNdjson(pricesPath, pricesNdjsonPath);

    console.log('\n📖 Step 5: Loading data from NDJSON...');
    const scryfallCards = await loadNdjson(scryfallNdjsonPath, 'Scryfall');
    const mtgjsonCards = await loadNdjson(mtgjsonNdjsonPath, 'MTGJson');
    const priceData = await loadNdjson(pricesNdjsonPath, 'Prices');

    const uuidToScryfallId = createMtgJsonToScryfallMap(mtgjsonCards, scryfallCards);
    const cardTokenParts = extractTokenParts(mtgjsonCards, uuidToScryfallId);
    const mergedIndex = mergeLightIndex(scryfallCards, cardTokenParts);
    const extractedPrices = extractPrices(priceData, scryfallCards);

    console.log('\n📝 Writing output files...');

    const lightIndexPath = path.join(OUTPUT_DIR, 'light_index.json');
    const pricesOutputPath = path.join(OUTPUT_DIR, 'prices.json');
    const manifestPath = path.join(OUTPUT_DIR, 'manifest.json');

    fs.writeFileSync(lightIndexPath, JSON.stringify(mergedIndex, null, 2));
    fs.writeFileSync(pricesOutputPath, JSON.stringify(extractedPrices, null, 2));

    const lightIndexHash = await calculateHash(lightIndexPath);
    const pricesHash = await calculateHash(pricesOutputPath);

    const lightIndexSize = fs.statSync(lightIndexPath).size;
    const pricesSize = fs.statSync(pricesOutputPath).size;

    const timestamp = new Date().toISOString();
    const version = timestamp.split('T')[0];

    const manifest = {
      version,
      generatedAt: timestamp,
      files: {
        'light_index.json': {
          sha256: lightIndexHash,
          size: lightIndexSize,
          url: `https://github.com/Sammyslamma/Crucible_Server_Data/releases/download/v${version}/light_index.json`,
        },
        'prices.json': {
          sha256: pricesHash,
          size: pricesSize,
          url: `https://github.com/Sammyslamma/Crucible_Server_Data/releases/download/v${version}/prices.json`,
        },
      },
    };

    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

    console.log(`✅ light_index.json written (${(lightIndexSize / 1024 / 1024).toFixed(2)} MB)`);
    console.log(`✅ prices.json written (${(pricesSize / 1024 / 1024).toFixed(2)} MB)`);
    console.log(`✅ manifest.json written`);

    // Cleanup temp files
    fs.unlinkSync(mtgjsonPath);
    fs.unlinkSync(pricesPath);
    fs.unlinkSync(scryfallNdjsonPath);
    fs.unlinkSync(mtgjsonNdjsonPath);
    fs.unlinkSync(pricesNdjsonPath);

    console.log('\n✨ Sync complete!');
    console.log(`📦 Version: ${version}`);
    console.log(`📊 Stats:`);
    console.log(`   - Light index cards: ${Object.keys(mergedIndex).length}`);
    console.log(`   - Cards with prices: ${Object.keys(extractedPrices).length}`);
    console.log(`   - Cards with tokenParts: ${Object.keys(cardTokenParts).length}`);
  } catch (error) {
    console.error('❌ Error during sync:');
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);
    process.exit(1);
  }
}

sync();