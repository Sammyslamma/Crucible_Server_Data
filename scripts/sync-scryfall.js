import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { createReadStream, createWriteStream } from 'fs';
import StreamValues from 'stream-json/streamers/StreamValues.js';

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
 * Stream parse Scryfall NDJSON file (one object per line)
 */
async function loadScryfallNdjson(filePath) {
  console.log(`📖 Loading Scryfall NDJSON...`);
  const cards = {};
  
  return new Promise((resolve, reject) => {
    const stream = createReadStream(filePath, { encoding: 'utf8' });
    let lineNumber = 0;

    stream.on('data', (chunk) => {
      const lines = chunk.toString().split('\n');
      
      for (const line of lines) {
        if (!line.trim()) continue;
        
        try {
          const card = JSON.parse(line);
          if (card.id) {
            cards[card.id] = card;
          }
          lineNumber++;
          
          if (lineNumber % 50000 === 0) {
            console.log(`  Processed ${lineNumber} cards...`);
          }
        } catch (err) {
          console.error(`Error parsing line ${lineNumber}:`, err.message);
        }
      }
    });

    stream.on('end', () => {
      console.log(`✅ Loaded ${Object.keys(cards).length} Scryfall cards`);
      resolve(cards);
    });

    stream.on('error', reject);
  });
}

/**
 * Stream parse MTGJson (large single JSON object)
 */
async function loadMtgJsonStream(filePath) {
  console.log(`📖 Loading MTGJson stream...`);
  const cards = {};
  
  return new Promise((resolve, reject) => {
    const pipeline = createReadStream(filePath)
      .pipe(StreamValues.withParser());

    let cardCount = 0;

    pipeline.on('data', ({ key, value }) => {
      cards[key] = value;
      cardCount++;
      
      if (cardCount % 10000 === 0) {
        console.log(`  Processed ${cardCount} card names...`);
      }
    });

    pipeline.on('end', () => {
      console.log(`✅ Loaded ${Object.keys(cards).length} MTGJson cards`);
      resolve(cards);
    });

    pipeline.on('error', reject);
  });
}

/**
 * Load prices JSON (small enough to load entirely)
 */
async function loadPricesJson(filePath) {
  console.log(`📖 Loading prices...`);
  
  return new Promise((resolve, reject) => {
    const chunks = [];
    const stream = createReadStream(filePath, { encoding: 'utf8' });

    stream.on('data', chunk => chunks.push(chunk));
    stream.on('end', () => {
      try {
        const data = JSON.parse(chunks.join(''));
        console.log(`✅ Loaded prices for ${Object.keys(data).length} cards`);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
    stream.on('error', reject);
  });
}

/**
 * Create a lookup map from MTGJson: UUID → Scryfall ID
 * Matches by: name + power/toughness + type
 */
function createMtgJsonToScryfallMap(mtgjsonCards, scryfallCards) {
  console.log('🔗 Building MTGJson UUID → Scryfall ID mapping...');
  const uuidToScryfallId = {};

  for (const [mtgJsonCardName, mtgJsonVersions] of Object.entries(mtgjsonCards)) {
    if (!Array.isArray(mtgJsonVersions)) continue;

    for (const mtgJsonCard of mtgJsonVersions) {
      const mtgJsonUuid = mtgJsonCard.uuid;
      if (!mtgJsonUuid) continue;

      // Match by: name + power/toughness + type
      const matchKey = `${mtgJsonCardName}|${mtgJsonCard.power || ''}|${mtgJsonCard.toughness || ''}|${mtgJsonCard.type || ''}`;

      // Find matching Scryfall card
      for (const scryfallCard of Object.values(scryfallCards)) {
        if (!scryfallCard || typeof scryfallCard !== 'object') continue;

        const scryfallName = scryfallCard.name;
        const scryfallPower = scryfallCard.power || '';
        const scryfallToughness = scryfallCard.toughness || '';
        const scryfallType = scryfallCard.type_line || '';

        const scryfallMatchKey = `${scryfallName}|${scryfallPower}|${scryfallToughness}|${scryfallType}`;

        if (matchKey === scryfallMatchKey) {
          uuidToScryfallId[mtgJsonUuid] = scryfallCard.id;
          break;
        }
      }
    }
  }

  console.log(`✅ Mapped ${Object.keys(uuidToScryfallId).length} MTGJson UUIDs to Scryfall IDs`);
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
function extractPrices(pricePoints, scryfallCards) {
  console.log('💰 Extracting prices...');
  const prices = {};

  for (const [scryfallId, card] of Object.entries(scryfallCards)) {
    if (!pricePoints[scryfallId]) continue;

    const priceData = pricePoints[scryfallId];
    prices[scryfallId] = {
      name: card.name,
      set: card.set,
      collectorNumber: card.collector_number,
      prices: priceData.prices || {},
      purchaseUris: priceData.purchaseUris || {},
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

    console.log('\n⬇️ Step 1: Downloading Scryfall...');
    await downloadFile(SCRYFALL_URL, scryfallPath, 'Scryfall');

    console.log('\n⬇️ Step 2: Downloading MTGJson...');
    await downloadFile(MTGJSON_URL, mtgjsonPath, 'MTGJson');

    console.log('\n⬇️ Step 3: Downloading Prices...');
    await downloadFile(MTGJSON_PRICES_URL, pricesPath, 'Prices');

    console.log('\n⬇️ Step 4: Loading and processing files...');
    const scryfallCards = await loadScryfallNdjson(scryfallPath);
    const mtgjsonCards = await loadMtgJsonStream(mtgjsonPath);
    const pricePoints = await loadPricesJson(pricesPath);

    const uuidToScryfallId = createMtgJsonToScryfallMap(mtgjsonCards, scryfallCards);
    const cardTokenParts = extractTokenParts(mtgjsonCards, uuidToScryfallId);
    const mergedIndex = mergeLightIndex(scryfallCards, cardTokenParts);
    const extractedPrices = extractPrices(pricePoints, scryfallCards);

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

    fs.unlinkSync(scryfallPath);
    fs.unlinkSync(mtgjsonPath);
    fs.unlinkSync(pricesPath);

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