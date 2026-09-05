// scripts/watchdog.mjs
// Standalone health check for the deployed manifest.json — your "something broke" alert.
//
// It works on GitHub Actions today and, in the future, on any Node server via cron:
//   node scripts/watchdog.mjs [--manifest-url <url-or-file>] [--webhook <url>]
//                            [--ntfy-topic <topic-or-url>]
//                            [--notify-always]
//                            [--max-age-hours <n>] [--min-coverage <0..1>]
// Or via env: WATCHDOG_MANIFEST_URL, WATCHDOG_WEBHOOK_URL, WATCHDOG_NTFY_TOPIC,
//            WATCHDOG_NOTIFY_ALWAYS,
//            WATCHDOG_MAX_AGE_HOURS, WATCHDOG_MIN_COVERAGE
//
// It loads the manifest and FAILS (exit 1, optional webhook POST) when it detects:
//   - STALE      : generatedAt is older than max-age-hours  (the daily sync stopped / an API broke)
//   - WARNINGS   : the sync recorded an issue in manifest.warnings
//   - SOURCE_FAIL: any source in manifest.sources has ok === false
//   - CK_EMPTY   : cardkingdom.uniqueScryfallIds === 0      (CK schema/naked change)
//   - PRICES_EMPTY: pricesCards or pricesTotal === 0        (pricing pipeline broken)
//   - INDEX_EMPTY: lightIndexCards === 0                    (Scryfall/MTGJSON base broken)
//   - COVERAGE_LOW: pricesCards/lightIndexCards < minCoverage (unusual price-drop)
import fs from 'fs';

const DEFAULT_MANIFEST_URL = 'https://raw.githubusercontent.com/Sammyslamma/Crucible_Server_Data/data/manifest.json';
const DEFAULT_MAX_AGE_HOURS = 36;
const DEFAULT_MIN_COVERAGE = 0.5;

const args = process.argv.slice(2);
const get = (flag, envKey, def) => {
  const i = args.indexOf(flag);
  if (i >= 0 && args[i + 1]) return args[i + 1];
  const v = process.env[envKey];
  return (v && v.length > 0) ? v : def;
};

const manifestSource = get('--manifest-url', 'WATCHDOG_MANIFEST_URL', DEFAULT_MANIFEST_URL);
const webhookUrl = get('--webhook', 'WATCHDOG_WEBHOOK_URL', '');
const maxAgeHours = parseFloat(get('--max-age-hours', 'WATCHDOG_MAX_AGE_HOURS', String(DEFAULT_MAX_AGE_HOURS)));
const minCoverage = parseFloat(get('--min-coverage', 'WATCHDOG_MIN_COVERAGE', String(DEFAULT_MIN_COVERAGE)));
const ntfyTopic = get('--ntfy-topic', 'WATCHDOG_NTFY_TOPIC', '');
const notifyAlways = args.includes('--notify-always') || process.env.WATCHDOG_NOTIFY_ALWAYS === '1';

// Build the ntfy.sh URL (a bare topic name is assumed to be ntfy.sh).
function ntfyUrlFor(topic) {
  return /^https?:\/\//i.test(topic) ? topic : `https://ntfy.sh/${topic}`;
}

// POST to ntfy with one retry for transient failures (429 rate-limit / 5xx),
// so a single blip does not silently eat the daily notification.
// Returns true when delivered, false otherwise.
async function postNtfy(url, headers, body) {
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(url, { method: 'POST', headers, body });
      if (res.ok) return true;
      console.error(`ntfy FAILED ${res.status} (attempt ${attempt}): ${await res.text().catch(() => '')}`);
      if (!(res.status === 429 || res.status >= 500)) return false; // permanent — don't retry
    } catch (e) {
      console.error(`ntfy error (attempt ${attempt}): ${e.message}`);
    }
    if (attempt < 2) await new Promise(r => setTimeout(r, 3000)); // brief backoff before retry
  }
  return false;
}

async function loadManifest(src) {
  if (/^https?:/i.test(src)) {
    // Cache-bust: raw.githubusercontent.com (and most CDNs) key the cache on the
    // full URL and may serve a copy up to ~5 min old - long enough to report the
    // PREVIOUS manifest right after a fresh deploy. A unique query param forces
    // a fresh origin fetch.
    const bustUrl = `${src}${src.includes('?') ? '&' : '?'}_cb=${Date.now()}`;
    const res = await fetch(bustUrl, { headers: { 'User-Agent': 'CrucibleWatchdog/1.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }
  return JSON.parse(fs.readFileSync(src, 'utf8'));
}

function fmt(n) {
  if (n == null || Number.isNaN(n)) return '0';
  return n.toLocaleString();
}

function fmtAge(ageH) {
  if (Number.isNaN(ageH)) return 'unknown';
  if (ageH < 1) return `${(ageH * 60).toFixed(0)}m`;
  return `${ageH.toFixed(1)}h`;
}

const checks = [];

function addCheck(section, label, ok, detail) {
  checks.push({ section, label, ok, detail });
}

await (async () => {
  let m;
  try {
    m = await loadManifest(manifestSource);
  } catch (e) {
    // A watchdog that cannot load the manifest at all is the WORST state —
    // push a loud alert instead of failing silently with just a log line.
    console.error(`Cannot load manifest (${manifestSource}): ${e.message}`);
    if (ntfyTopic) {
      const sent = await postNtfy(ntfyUrlFor(ntfyTopic), {
        'Title': 'Crucible Watchdog: cannot load manifest',
        'Tags': 'rotating_light',
        'Priority': 'high',
      }, `Cannot load manifest (${manifestSource}): ${e.message}`);
      console.log(sent ? 'ntfy sent' : 'ntfy not sent');
    } else {
      console.error('ntfy skipped: WATCHDOG_NTFY_TOPIC not set');
    }
    process.exitCode = 2;
    return;
  }

  // --- Manifest freshness ---
  const generated = new Date(m.generatedAt);
  let ageH = NaN;
  if (!Number.isNaN(generated.getTime())) {
    ageH = (Date.now() - generated.getTime()) / 3.6e6;
  }
  addCheck('Manifest', 'Freshness', !Number.isNaN(generated.getTime()) && ageH <= maxAgeHours,
    Number.isNaN(generated.getTime())
      ? `generatedAt missing/unparseable ("${m.generatedAt}")`
      : `generated ${fmtAge(ageH)} ago (max ${maxAgeHours}h)`);

  // --- Source API checks (each source records ok + counts in the manifest) ---
  const sources = m.sources || {};

  const sf = sources.scryfall || {};
  addCheck('Data Sources', 'Scryfall API', sf.ok === true,
    sf.ok ? `downloaded ${fmt(sf.cards)} cards` : 'download failed');

  const mj = sources.mtgjson || {};
  addCheck('Data Sources', 'MTGJson API', mj.ok === true,
    mj.ok ? `downloaded ${fmt(mj.cards)} cards` : 'download failed');

  const mpr = sources.mtgjsonPrices || {};
  addCheck('Data Sources', 'MTGJson Prices API', mpr.ok === true,
    mpr.ok ? `downloaded ${fmt(mpr.entries)} price entries` : 'download failed');

  const mp = sources.manapool || {};
  addCheck('Data Sources', 'ManaPool API', mp.ok === true,
    mp.ok ? `${fmt(mp.inStock)} in-stock, ${fmt(mp.linked)} linked` : 'fetch failed');

  const ck = sources.cardkingdom || {};
  addCheck('Data Sources', 'Card Kingdom API', ck.ok === true,
    ck.ok ? `${fmt(ck.uniqueIds)} unique IDs, ${fmt(ck.products)} products, ${fmt(ck.priced)} priced, ${fmt(ck.linked || 0)} linked` : 'fetch failed');

  // --- Data processing checks ---
  addCheck('Data Processing', 'Light Index', (m.lightIndexCards || 0) > 0,
    `${fmt(m.lightIndexCards || 0)} cards extracted`);

  addCheck('Data Processing', 'Light Price Index', (m.pricesCards || 0) > 0,
    `${fmt(m.pricesCards || 0)} cards with prices`);

  if ((m.lightIndexCards || 0) > 0) {
    const coverage = (m.pricesCards || 0) / m.lightIndexCards;
    addCheck('Data Processing', 'Price coverage', coverage >= minCoverage,
      `${fmt(m.pricesCards || 0)}/${fmt(m.lightIndexCards)} cards (${(coverage * 100).toFixed(1)}%, min ${minCoverage * 100}%)`);
  }

  // --- Sync warnings ---
  if (Array.isArray(m.warnings) && m.warnings.length > 0) {
    addCheck('Sync Warnings', 'Warnings', false, m.warnings.join('; '));
  }

  // --- Per-vendor pricing health (from the new manifest.pricing block) ---
  // Fails loudly when any configured store ends up with 0 priced cards even
  // after Scryfall/MTGJSON fallbacks and last-known-good carry-over — i.e.
  // "we tried everything and one store is still empty this run."
  const priceVendors = m.pricing && m.pricing.vendors ? m.pricing.vendors : null;
  if (priceVendors) {
    for (const [v, d] of Object.entries(priceVendors)) {
      const priced = d && d.priced ? d.priced : 0;
      addCheck('Data Processing', `Priced: ${v}`, priced > 0,
        priced > 0 ? `${fmt(priced)} cards` : '0 priced cards (every fallback exhausted)');
    }
    const carried = m.pricing.carriedOver || [];
    if (carried.length > 0) {
      addCheck('Sync Warnings', 'Carried over', false,
        `last-known-good prices carried over for: ${carried.join(', ')}`);
    }
  }

  // --- Build output ---
  const problems = checks.filter(c => !c.ok);
  const allOk = problems.length === 0;

  // Group by section
  const sections = {};
  for (const c of checks) {
    if (!sections[c.section]) sections[c.section] = [];
    sections[c.section].push(c);
  }

  const lines = [];
  lines.push('Crucible Watchdog — Health Check Report');
  lines.push(`Manifest: ${m.version || 'unknown'} (generated ${fmtAge(ageH)})`);
  lines.push('');

  for (const [sectionName, sectionChecks] of Object.entries(sections)) {
    // Hide PASS Freshness line (age already shown in header); still shown on FAIL
    const visible = sectionChecks.filter(c => !(c.ok && c.label === 'Freshness'));
    if (visible.length === 0) continue;
    lines.push(`${sectionName}:`);
    for (const c of visible) {
      // Keep detail only on failures — passes stay as clean one-liners
      lines.push(`  [${c.ok ? 'PASS' : 'FAIL'}] ${c.label}${c.ok ? '' : ` — ${c.detail}`}`);
    }
    lines.push('');
  }

  lines.push(allOk
    ? 'Result: ALL CHECKS PASSED'
    : `Result: ${problems.length} PROBLEM(S) DETECTED`);

  const body = lines.join('\n');
  console.log(body);

  // --- Webhook ---
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: body }),
      });
      console.log(`webhook ${res.ok ? 'sent' : `failed ${res.status}`}`);
    } catch (e) {
      console.error(`webhook error: ${e.message}`);
    }
  }

  // --- ntfy push notification — fires on problems, or on success when notify-always is set ---
  let ntfyFailed = false;
  if (!ntfyTopic) {
    // Make a missing/blank secret diagnosable instead of silently quiet.
    console.error('ntfy skipped: WATCHDOG_NTFY_TOPIC not set');
  } else if (problems.length > 0 || notifyAlways) {
    const ntfyPriority = problems.length > 0 ? 'high' : 'low';
    const ntfyTags = problems.length > 0 ? 'rotating_light' : 'white_check_mark';
    const ntfyTitle = allOk
      ? 'Crucible Watchdog: All Checks Passed'
      : `Crucible Watchdog: ${problems.length} problem(s) detected`;

    ntfyFailed = !(await postNtfy(ntfyUrlFor(ntfyTopic), {
      'Title': ntfyTitle,
      'Tags': ntfyTags,
      'Priority': ntfyPriority,
    }, body));
    if (ntfyFailed) {
      // A silent notification failure is worse than a failed run — make it loud.
      console.error('ntfy not delivered after retries');
    } else {
      console.log('ntfy sent');
    }
  }

  // Exit 1 on data problems OR on a notification that failed to send — a green
  // run must mean "checked AND notified", not just "checked". (This line was
  // previously clobbering the ntfy failure code back to 0, hiding failed pushes.)
  process.exitCode = (problems.length > 0 || ntfyFailed) ? 1 : 0;
})();
