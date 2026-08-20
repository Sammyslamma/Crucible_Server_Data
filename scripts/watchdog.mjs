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

async function loadManifest(src) {
  if (/^https?:/i.test(src)) {
    const res = await fetch(src, { headers: { 'User-Agent': 'CrucibleWatchdog/1.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }
  return JSON.parse(fs.readFileSync(src, 'utf8'));
}

const problems = [];
const ok = [];
function add(bad, label, msg) {
  if (bad) problems.push(`[${label}] ${msg}`);
  else ok.push(label.toLowerCase());
}

await (async () => {
  let m;
  try {
    m = await loadManifest(manifestSource);
  } catch (e) {
    console.error(`Cannot load manifest (${manifestSource}): ${e.message}`);
    process.exitCode = 2;
    return;
  }

  // Staleness
  const generated = new Date(m.generatedAt);
  if (Number.isNaN(generated.getTime())) {
    add(true, 'STALE', `generatedAt missing/unparseable ("${m.generatedAt}")`);
  } else {
    const ageH = (Date.now() - generated.getTime()) / 3.6e6;
    add(ageH > maxAgeHours, 'STALE', `manifest is ${ageH.toFixed(1)}h old (> ${maxAgeHours}h); last sync likely stopped`);
    if (ageH <= maxAgeHours) ok.push(`fresh (${ageH.toFixed(1)}h)`);
  }

  // Warnings recorded by the sync itself
  add(Array.isArray(m.warnings) && m.warnings.length > 0, 'WARNINGS', Array.isArray(m.warnings) && m.warnings.length > 0 ? m.warnings.join('; ') : '');

  // Data sanity
  const ck = m.cardkingdom || {};
  if (m.cardkingdom) {
    add(ck.uniqueScryfallIds === 0, 'CK_EMPTY', 'Card Kingdom returned 0 products — schema likely changed');
  }
  add((m.pricesCards ?? -1) === 0, 'PRICES_EMPTY', 'merged price index has 0 cards');
  add((m.pricesTotal ?? -1) === 0, 'PRICES_EMPTY', 'MTGJSON returned 0 price entries');
  add((m.lightIndexCards ?? 0) === 0, 'INDEX_EMPTY', 'light index has 0 cards');
  if ((m.lightIndexCards || 0) > 0 && (m.pricesCards || 0) / m.lightIndexCards < minCoverage) {
    add(true, 'COVERAGE_LOW', `price coverage ${m.pricesCards}/${m.lightIndexCards} is below ${minCoverage}`);
  }

  const header = `[watchdog] manifest ${m.version} — ${problems.length} problem(s)`;
  const body = problems.length > 0
    ? problems.map((p) => `  • ${p}`).join('\n')
    : `  • OK ${ok.join(', ')}`;
  console.log(header + '\n' + body);

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: `${header}\n${body}` }),
      });
      console.log(`webhook ${res.ok ? 'sent' : `failed ${res.status}`}`);
    } catch (e) {
      console.error(`webhook error: ${e.message}`);
    }
  }

  // ntfy push notification — fires on problems, or on success when notify-always is set
  if (ntfyTopic && (problems.length > 0 || notifyAlways)) {
    // STALE / PRICES_EMPTY / INDEX_EMPTY = high (bypasses Do Not Disturb)
    // CK_EMPTY / COVERAGE_LOW / WARNINGS = default (respects DND)
    // All-green = low (gentle morning status ping)
    const HIGH_PRIORITY_LABELS = new Set(['STALE', 'PRICES_EMPTY', 'INDEX_EMPTY']);
    let ntfyPriority = problems.length > 0 ? 'default' : 'low';
    let ntfyTags = problems.length > 0 ? 'warning' : 'white_check_mark';
    let ntfyTitle = problems.length > 0
      ? `Crucible Watchdog: ${problems.length} problem(s)`
      : 'Crucible Watchdog: All green [OK]';
    if (problems.length > 0) {
      for (const p of problems) {
        const label = p.match(/^\[([A-Z_]+)\]/)?.[1];
        if (label && HIGH_PRIORITY_LABELS.has(label)) {
          ntfyPriority = 'high';
          ntfyTags = 'rotating_light';
          break;
        }
      }
    }

    const ntfyUrl = /^https?:\/\//i.test(ntfyTopic)
      ? ntfyTopic
      : `https://ntfy.sh/${ntfyTopic}`;

    try {
      const res = await fetch(ntfyUrl, {
        method: 'POST',
        headers: {
          'Title': ntfyTitle,
          'Tags': ntfyTags,
          'Priority': ntfyPriority,
        },
        body: `${header}\n${body}`,
      });
      console.log(`ntfy ${res.ok ? 'sent' : `failed ${res.status}`}`);
    } catch (e) {
      console.error(`ntfy error: ${e.message}`);
    }
  }

  process.exitCode = problems.length > 0 ? 1 : 0;
})();