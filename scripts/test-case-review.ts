/**
 * Renders a cases-*.json file as a self-contained HTML review page: cards grouped by
 * category, checkbox per case (checked by default), search/filter, per-category
 * select-all, and a "Download selected" button that writes a filtered copy of the JSON
 * client-side — no server round-trip. The downloaded file is meant to replace the
 * original cases file as Option 4's input once reviewed (unwanted/duplicate/low-value
 * cases unchecked).
 *
 * Usage: npm run review:cases -- <casesJson> [outHtmlPath]
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'reports', 'test-cases-review');

interface Case {
  id: string;
  category: string;
  priority?: string;
  severity?: string;
  tags?: string[];
  title: string;
  preconditions?: string;
  testData?: unknown;
  steps?: string[];
  expected?: string;
  requirementRef?: string;
  provenance?: string;
  confidence?: string;
  [k: string]: unknown;
}

function esc(s: unknown): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const CATEGORY_ORDER = ['smoke', 'functional', 'negative', 'boundary', 'security', 'a11y', 'performance', 'regression'];

function renderCard(c: Case): string {
  const steps = (c.steps ?? []).map(s => `<li>${esc(s)}</li>`).join('');
  const tags = (c.tags ?? []).map(t => `<span class="tag">${esc(t)}</span>`).join('');
  return `
  <label class="card" data-id="${esc(c.id)}" data-search="${esc([c.id, c.title, c.category, ...(c.tags ?? [])].join(' ').toLowerCase())}">
    <div class="card-check"><input type="checkbox" class="case-checkbox" checked data-id="${esc(c.id)}" /></div>
    <div class="card-body">
      <div class="card-head">
        <span class="tc-id">${esc(c.id)}</span>
        <span class="badge prio-${esc(c.priority)}">${esc(c.priority)}</span>
        <span class="badge sev-${esc(c.severity)}">${esc(c.severity)}</span>
        ${c.confidence === 'speculative' ? '<span class="badge badge-warn">speculative</span>' : ''}
        ${tags}
      </div>
      <div class="tc-title">${esc(c.title)}</div>
      <div class="tc-field"><strong>Preconditions:</strong> ${esc(c.preconditions) || '—'}</div>
      <ol class="tc-steps">${steps}</ol>
      <div class="tc-field"><strong>Expected:</strong> ${esc(c.expected)}</div>
      <div class="tc-field tc-ref"><strong>Ref:</strong> ${esc(c.requirementRef) || '—'}</div>
    </div>
  </label>`;
}

function renderCategorySection(category: string, cases: Case[]): string {
  return `
  <section class="category" data-category="${esc(category)}">
    <div class="category-head">
      <h2>${esc(category)} <span class="count">(${cases.length})</span></h2>
      <div class="category-actions">
        <button type="button" class="link-btn" data-action="select-all" data-category="${esc(category)}">Select all</button>
        <button type="button" class="link-btn" data-action="select-none" data-category="${esc(category)}">Select none</button>
      </div>
    </div>
    <div class="cards">
      ${cases.map(renderCard).join('\n')}
    </div>
  </section>`;
}

function renderHtml(cases: Case[], sourceLabel: string, outFileBaseName: string): string {
  const byCat = new Map<string, Case[]>();
  for (const c of cases) {
    const cat = c.category || 'other';
    if (!byCat.has(cat)) byCat.set(cat, []);
    byCat.get(cat)!.push(c);
  }
  const orderedCats = [...CATEGORY_ORDER.filter(c => byCat.has(c)), ...[...byCat.keys()].filter(c => !CATEGORY_ORDER.includes(c))];
  const sections = orderedCats.map(cat => renderCategorySection(cat, byCat.get(cat)!)).join('\n');
  // Escape '<' so a case containing literal "</script>" (e.g. an XSS test payload in testData)
  // can't prematurely close this script tag and corrupt everything parsed after it.
  const embeddedJson = JSON.stringify(cases).replace(/</g, '\\u003c');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Test Case Review</title>
<style>
  :root {
    --bg: #ffffff; --fg: #1a1a1a; --muted: #6b7280; --card-bg: #f8fafc; --border: #e2e8f0;
    --accent: #2563eb; --warn: #d97706; --crit: #dc2626; --high: #ea580c; --med: #ca8a04; --low: #16a34a;
  }
  @media (prefers-color-scheme: dark) {
    :root { --bg: #0f1115; --fg: #e5e7eb; --muted: #9ca3af; --card-bg: #1a1d24; --border: #2a2e37; }
  }
  * { box-sizing: border-box; }
  body { margin: 0; padding: 0 0 80px; background: var(--bg); color: var(--fg); font-family: -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
  header { position: sticky; top: 0; z-index: 10; background: var(--bg); border-bottom: 1px solid var(--border); padding: 16px 24px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
  header h1 { font-size: 16px; margin: 0; }
  header .meta { font-size: 12px; color: var(--muted); }
  #search { flex: 1; min-width: 180px; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px; background: var(--card-bg); color: var(--fg); }
  .btn { padding: 8px 14px; border-radius: 6px; border: 1px solid var(--border); background: var(--card-bg); color: var(--fg); cursor: pointer; font-size: 13px; }
  .btn-primary { background: var(--accent); color: white; border: none; }
  #counter { font-size: 13px; font-weight: 600; }
  main { padding: 16px 24px; max-width: 1000px; margin: 0 auto; }
  .category { margin-bottom: 28px; }
  .category-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
  .category-head h2 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--muted); margin: 0; }
  .category-head .count { font-weight: 400; }
  .category-actions .link-btn { background: none; border: none; color: var(--accent); cursor: pointer; font-size: 12px; padding: 2px 6px; }
  .cards { display: flex; flex-direction: column; gap: 10px; }
  .card { display: flex; gap: 10px; border: 1px solid var(--border); border-radius: 10px; padding: 12px 14px; background: var(--card-bg); cursor: pointer; }
  .card:has(.case-checkbox:not(:checked)) { opacity: 0.45; }
  .card-check input { width: 18px; height: 18px; margin-top: 3px; }
  .card-body { flex: 1; }
  .card-head { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-bottom: 4px; }
  .tc-id { font-family: monospace; font-size: 12px; color: var(--muted); }
  .badge { font-size: 10px; padding: 2px 7px; border-radius: 999px; font-weight: 600; background: var(--border); }
  .prio-critical, .sev-critical { background: color-mix(in srgb, var(--crit) 20%, transparent); color: var(--crit); }
  .prio-high, .sev-high { background: color-mix(in srgb, var(--high) 20%, transparent); color: var(--high); }
  .prio-medium, .sev-medium { background: color-mix(in srgb, var(--med) 20%, transparent); color: var(--med); }
  .prio-low, .sev-low { background: color-mix(in srgb, var(--low) 20%, transparent); color: var(--low); }
  .badge-warn { background: color-mix(in srgb, var(--warn) 20%, transparent); color: var(--warn); }
  .tag { font-size: 10px; padding: 2px 7px; border-radius: 999px; border: 1px solid var(--border); color: var(--muted); }
  .tc-title { font-weight: 600; font-size: 14px; margin-bottom: 6px; }
  .tc-field { font-size: 12px; color: var(--muted); margin: 4px 0; }
  .tc-field strong { color: var(--fg); }
  .tc-steps { font-size: 12px; margin: 6px 0 6px 18px; padding: 0; }
  .tc-steps li { margin-bottom: 2px; }
  .tc-ref { font-style: italic; }
  .hidden { display: none !important; }
  footer.bar { position: fixed; bottom: 0; left: 0; right: 0; background: var(--bg); border-top: 1px solid var(--border); padding: 12px 24px; display: flex; justify-content: space-between; align-items: center; }
</style>
</head>
<body>
  <header>
    <h1>Test Case Review</h1>
    <div class="meta">${esc(sourceLabel)}</div>
    <input id="search" type="search" placeholder="Filter by id, title, tag, category…" />
    <button type="button" class="btn" id="selectAllBtn">Select all</button>
    <button type="button" class="btn" id="selectNoneBtn">Select none</button>
  </header>
  <main>
    ${sections}
  </main>
  <footer class="bar">
    <span id="counter"></span>
    <button type="button" class="btn btn-primary" id="downloadBtn">Download selected as JSON</button>
  </footer>

  <script type="application/json" id="all-cases">${embeddedJson}</script>
  <script>
    const allCases = JSON.parse(document.getElementById('all-cases').textContent);
    const checkboxes = () => Array.from(document.querySelectorAll('.case-checkbox'));
    const counter = document.getElementById('counter');

    function updateCounter() {
      const total = checkboxes().length;
      const selected = checkboxes().filter(cb => cb.checked).length;
      counter.textContent = selected + ' / ' + total + ' selected';
    }

    checkboxes().forEach(cb => cb.addEventListener('change', updateCounter));
    updateCounter();

    document.getElementById('selectAllBtn').addEventListener('click', () => {
      checkboxes().forEach(cb => { if (!cb.closest('.card').classList.contains('hidden')) cb.checked = true; });
      updateCounter();
    });
    document.getElementById('selectNoneBtn').addEventListener('click', () => {
      checkboxes().forEach(cb => { if (!cb.closest('.card').classList.contains('hidden')) cb.checked = false; });
      updateCounter();
    });

    document.querySelectorAll('[data-action="select-all"]').forEach(btn => btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      document.querySelectorAll('.category[data-category="' + cat + '"] .case-checkbox').forEach(cb => cb.checked = true);
      updateCounter();
    }));
    document.querySelectorAll('[data-action="select-none"]').forEach(btn => btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      document.querySelectorAll('.category[data-category="' + cat + '"] .case-checkbox').forEach(cb => cb.checked = false);
      updateCounter();
    }));

    document.getElementById('search').addEventListener('input', e => {
      const q = e.target.value.trim().toLowerCase();
      document.querySelectorAll('.card').forEach(card => {
        card.classList.toggle('hidden', q.length > 0 && !card.dataset.search.includes(q));
      });
    });

    document.getElementById('downloadBtn').addEventListener('click', () => {
      const selectedIds = new Set(checkboxes().filter(cb => cb.checked).map(cb => cb.dataset.id));
      const filtered = allCases.filter(c => selectedIds.has(c.id));
      const blob = new Blob([JSON.stringify(filtered, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = '${esc(outFileBaseName)}';
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  </script>
</body>
</html>`;
}

function main(): void {
  const [casesArg, outArg] = process.argv.slice(2);
  if (!casesArg) {
    console.error('Usage: ts-node scripts/test-case-review.ts <casesJson> [outHtmlPath]');
    process.exit(1);
  }

  const casesPath = path.resolve(ROOT, casesArg);
  if (!fs.existsSync(casesPath)) { console.error(`Cases file not found: ${casesPath}`); process.exit(1); }

  const cases = JSON.parse(fs.readFileSync(casesPath, 'utf8')) as Case[];
  const baseName = path.basename(casesPath, '.json');
  const html = renderHtml(cases, casesPath, `${baseName}-reviewed.json`);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const outPath = outArg ? path.resolve(ROOT, outArg) : path.join(OUT_DIR, `review-${Date.now()}.html`);
  fs.writeFileSync(outPath, html);

  console.log(`${cases.length} test cases loaded.`);
  console.log(`Review page → ${outPath}`);
  console.log('Open it in a browser, uncheck any cases you don\'t want, then click "Download selected as JSON".');
  console.log(`Save the downloaded file into reports/test-cases/ and point Option 4 at it.`);
}

main();
