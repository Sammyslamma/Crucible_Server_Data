import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { createReadStream, createWriteStream } from 'fs';

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
async function downloadFile(url, outputPath) {
  console.log(`⬇️  Downloading from ${url}...`);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }

  const fileSize = response.headers.get('content-length');
  let downloadedSize = 0;

  const file = createWriteStream(outputPath);

  for await (const chunk of response.body) {
    downloadedSize += chunk.length;
    const percent = fileSize ? ((downloadedSize / fileSize) * 100).toFixed(2) : '?';
    process.stdout.write(`\r  Progress: ${percent}%`);
    file.write(chunk);
  }

  return new Promise((resolve, reject) => {
    file.on('finish', () => {
      console.log(`\n✅ Downloaded to ${outputPath}`);
      resolve();
    });
    file.on('error', reject);
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
 * Load and parse a large JSON file
 */
async function loadJsonFile(filePath) {
  console.log(`📖 Loading ${filePath}...`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  console.log(`✅ Loaded ${filePath}`);
  return data;
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
  const cardTokenParts = {}; // scryfallId → [scryfallId, ...]

  for (const versions of Object.values(mtgjsonCards)) {
    if (!Array.isArray(versions)) continue;

    for (const card of versions) {
      if (!card.uuid || !card.tokenParts || !Array.isArray(card.tokenParts)) continue;

      const scryfallId = uuidToScryfallId[card.uuid];
      if (!scryfallId) continue;

      // Convert token UUIDs to Scryfall IDs
      const tokenScryfallIds = card.tokenParts
        .map((tokenUuid) => uuidToScryfallId[tokenUuid])
        .filter((id) => id); // Remove unmapped UUIDs

      if (tokenScryfallIds.length > 0) {
        cardTokenParts[scryfallId] = tokenScryfallIds;
      }
    }
  }

  console.log(`✅ Extracted ${Object.keys(cardTokenParts).length} cards with tokenParts`);
  return cardTokenParts;
}

/**
 * Merge Scryfall light index with MTGJson tokenParts
 */
function mergeLightIndex(scryfallCards, cardTokenParts) {
  console.log('🔀 Merging light index with tokenParts...');
  const merged = {};
  let mergedCount = 0;

  for (const [scryfallId, card] of Object.entries(scryfallCards)) {
    merged[scryfallId] = { ...card };

    // Add tokenParts if available
    if (cardTokenParts[scryfallId]) {
      merged[scryfallId].tokenParts = cardTokenParts[scryfallId];
    }

    mergedCount++;
  }

  console.log(`✅ Merged ${mergedCount} cards`);
  return merged;
}

/**
 * Extract prices from MTGJson and match against Scryfall
 */
function extractPrices(pricePoints, scryfallCards) {
  console.log('💰 Extracting prices from MTGJson...');
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
    // Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('🚀 Starting Scryfall + MTGJson sync...\n');

    // Get Scryfall download URL
    const SCRYFALL_URL = await getScryfallDownloadUrl();

    // Download files
    const scryfallPath = path.join(OUTPUT_DIR, 'scryfall_temp.json');
    const mtgjsonPath = path.join(OUTPUT_DIR, 'mtgjson_temp.json');
    const pricesPath = path.join(OUTPUT_DIR, 'prices_temp.json');

    console.log('\n⬇️ Step 1: Downloading Scryfall...');
    await downloadFile(SCRYFALL_URL, scryfallPath);
    console.log('✅ Scryfall download complete\n');

    console.log('⬇️ Step 2: Downloading MTGJson...');
    await downloadFile(MTGJSON_URL, mtgjsonPath);
    console.log('✅ MTGJson download complete\n');

    console.log('⬇️ Step 3: Downloading Prices...');
    await downloadFile(MTGJSON_PRICES_URL, pricesPath);
    console.log('✅ Prices download complete\n');

    // Load data
    const scryfallCards = await loadJsonFile(scryfallPath);
    const mtgjsonCards = await loadJsonFile(mtgjsonPath);
    const pricePoints = await loadJsonFile(pricesPath);

    // Create UUID → Scryfall ID mapping
    const uuidToScryfallId = createMtgJsonToScryfallMap(mtgjsonCards, scryfallCards);

    // Extract and convert tokenParts
    const cardTokenParts = extractTokenParts(mtgjsonCards, uuidToScryfallId);

    // Merge light index
    const mergedIndex = mergeLightIndex(scryfallCards, cardTokenParts);

    // Extract prices
    const extractedPrices = extractPrices(pricePoints, scryfallCards);

    // Write output files
    console.log('\n📝 Writing output files...');

    const lightIndexPath = path.join(OUTPUT_DIR, 'light_index.json');
    const pricesOutputPath = path.join(OUTPUT_DIR, 'prices.json');
    const manifestPath = path.join(OUTPUT_DIR, 'manifest.json');

    fs.writeFileSync(lightIndexPath, JSON.stringify(mergedIndex, null, 2));
    fs.writeFileSync(pricesOutputPath, JSON.stringify(extractedPrices, null, 2));

    // Calculate hashes
    const lightIndexHash = await calculateHash(lightIndexPath);
    const pricesHash = await calculateHash(pricesOutputPath);

    const lightIndexSize = fs.statSync(lightIndexPath).size;
    const pricesSize = fs.statSync(pricesOutputPath).size;

    // Create manifest
    const timestamp = new Date().toISOString();
    const version = timestamp.split('T')[0]; // YYYY-MM-DD

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
    console.error('❌ Error during sync:', error);
    process.exit(1);
  }
}

sync();