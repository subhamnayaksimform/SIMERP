/**
 * Requirement ↔ test case coverage report.
 *
 * Compares a requirement source (either the structured requirements-*.json produced by
 * Option 2, or a raw extracted requirement document .txt) against a generated cases-*.json
 * and renders a self-contained HTML report with per-requirement coverage status and charts.
 *
 * Usage:
 *   npm run report:coverage -- <requirementDocOrJson> <casesJson> [outHtmlPath]
 *
 * When a raw .txt requirement document is passed, the script looks for the structured
 * requirements-*.json (in reports/requirements/) whose taskId matches the cases file's
 * taskId — that structured breakdown is what requirementRef in each test case actually
 * points at, so it gives far more precise matching than re-deriving units from prose.
 * The raw .txt is still used for an appendix that flags document sections with no
 * corresponding requirement unit at all (a requirement-analysis extraction gap, distinct
 * from a test-coverage gap).
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..');
const REQ_DIR = path.join(ROOT, 'reports', 'requirements');
const OUT_DIR = path.join(ROOT, 'reports', 'coverage');

// ─── Types ────────────────────────────────────────────────────────────────────

type MatchKind = 'direct' | 'fuzzy' | null;

interface ReqUnit {
  id: string;
  type: string;
  text: string;
  matchedBy: MatchKind;
  testCaseIds: string[];
}

interface MinimalCase {
  id: string;
  title: string;
  expected: string;
  steps: string[];
  requirementRef: string;
  category?: string;
}

interface DocSection {
  id: string;
  title: string;
  linked: boolean;
}

// ─── Text helpers ────────────────────────────────────────────────────────────

const STOPWORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'of', 'to', 'in', 'on', 'for', 'is', 'are', 'be', 'with',
  'as', 'by', 'at', 'from', 'this', 'that', 'it', 'its', 'if', 'then', 'else', 'not', 'no',
  'yes', 'via', 'per', 'into', 'their', 'they', 'all', 'any', 'each', 'other', 'must', 'can',
]);

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}

function tokenize(s: string): Set<string> {
  return new Set(normalize(s).split(' ').filter(w => w.length > 2 && !STOPWORDS.has(w)));
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

// ─── Loading requirement units ───────────────────────────────────────────────

function unitsFromRequirementJson(reqRaw: unknown): ReqUnit[] {
  const req = (Array.isArray(reqRaw) ? reqRaw[0] : reqRaw) as Record<string, unknown>;
  const units: ReqUnit[] = [];
  const push = (type: string, idx: number, text: string | undefined) => {
    if (!text || !text.trim()) return;
    units.push({ id: `${type}[${idx}]`, type, text: text.trim(), matchedBy: null, testCaseIds: [] });
  };

  (req.acceptanceCriteria as string[] ?? []).forEach((t, i) => push('AC', i, t));
  (req.validationRules as Array<{ field: string; rule: string }> ?? [])
    .forEach((v, i) => push('validationRule', i, `${v.field}: ${v.rule}`));
  (req.businessRules as Array<{ rule: string }> ?? []).forEach((b, i) => push('businessRule', i, b.rule));
  (req.criticalPaths as string[] ?? []).forEach((t, i) => push('criticalPaths', i, t));
  (req.edgeCases as string[] ?? []).forEach((t, i) => push('edgeCase', i, t));
  (req.knownBugEdgeCases as Array<{ description: string }> ?? [])
    .forEach((k, i) => push('knownBugEdgeCase', i, k.description));
  (req.negativeScenarios as Array<string | Record<string, unknown>> ?? [])
    .forEach((n, i) => push('negativeScenario', i, typeof n === 'string' ? n : JSON.stringify(n)));
  (req.securityScenarios as Array<string | Record<string, unknown>> ?? [])
    .forEach((s, i) => push('securityScenario', i, typeof s === 'string' ? s : JSON.stringify(s)));
  (req.testScenarios as Array<{ name: string; summary?: string; assertions?: string[] }> ?? [])
    .forEach((t, i) => push('testScenario', i, [t.name, t.summary, ...(t.assertions ?? [])].filter(Boolean).join(' — ')));
  Object.entries(req.nfrRequirements as Record<string, unknown> ?? {}).forEach(([cat, arr]) => {
    (Array.isArray(arr) ? arr as string[] : []).forEach((t, i) => push(`nfr:${cat}`, i, t));
  });

  return units;
}

function unitsFromRawText(text: string): ReqUnit[] {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const units: ReqUnit[] = [];
  let idx = 0;
  for (const line of lines) {
    if (/^---\s*Page\s*\d+/i.test(line)) continue;
    if (/^SimERP\b/i.test(line) || /^Page\s*\d+$/i.test(line)) continue;
    if (/^\d+(\.\d+){0,3}\s+[A-Z][^\n]{2,90}$/.test(line)) continue; // headings → section skim, not a unit
    const isBullet = /^[•\-•]/.test(line);
    if (isBullet || line.length > 40) {
      units.push({
        id: `DOC-${idx}`, type: 'docLine',
        text: line.replace(/^[•\-•]\s*/, ''), matchedBy: null, testCaseIds: [],
      });
      idx++;
    }
  }
  return units;
}

function sectionsFromRawText(text: string): DocSection[] {
  const sections: DocSection[] = [];
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    const m = line.match(/^(\d+(?:\.\d+){0,3})\s+([A-Z][^\n]{2,90})$/);
    if (m) sections.push({ id: m[1], title: m[2].trim(), linked: false });
  }
  return sections;
}

// ─── Loading cases ────────────────────────────────────────────────────────────

function loadCases(casesPath: string): MinimalCase[] {
  const raw = JSON.parse(fs.readFileSync(casesPath, 'utf8')) as Array<Record<string, unknown>>;
  return raw.map(c => ({
    id: String(c.id ?? ''),
    title: String(c.title ?? ''),
    expected: String(c.expected ?? ''),
    steps: Array.isArray(c.steps) ? c.steps.map(String) : [],
    requirementRef: String(c.requirementRef ?? ''),
    category: c.category ? String(c.category) : undefined,
  }));
}

function findRequirementsJsonForTaskId(taskId: string | null): string | null {
  if (!fs.existsSync(REQ_DIR)) return null;
  const files = fs.readdirSync(REQ_DIR).filter(f => f.startsWith('requirements-') && f.endsWith('.json'));
  for (const f of files.sort().reverse()) {
    try {
      const raw = JSON.parse(fs.readFileSync(path.join(REQ_DIR, f), 'utf8'));
      const obj = (Array.isArray(raw) ? raw[0] : raw) as Record<string, unknown>;
      if (taskId && obj.taskId === taskId) return path.join(REQ_DIR, f);
    } catch { /* skip unreadable file */ }
  }
  return null;
}

// ─── Matching requirementRef → requirement unit ─────────────────────────────

const LABEL_TO_TYPE: Record<string, string> = {
  AC: 'AC',
  businessRule: 'businessRule', businessRules: 'businessRule',
  edgeCase: 'edgeCase', edgeCases: 'edgeCase',
  testScenario: 'testScenario', testScenarios: 'testScenario',
  criticalPaths: 'criticalPaths', criticalPath: 'criticalPaths',
  validationRule: 'validationRule', validationRules: 'validationRule',
  negativeScenario: 'negativeScenario', negativeScenarios: 'negativeScenario',
  securityScenario: 'securityScenario', securityScenarios: 'securityScenario',
  knownBugEdgeCase: 'knownBugEdgeCase',
};

function parseRequirementRef(ref: string): Array<{ label: string; index: number | null; text: string }> {
  if (!ref) return [];
  return ref.split(';').map(s => s.trim()).filter(Boolean).map(seg => {
    const arrIdx = seg.match(/^([A-Za-z]+)\[(\d+)\]$/);
    if (arrIdx) return { label: arrIdx[1], index: Number(arrIdx[2]), text: '' };
    const labeled = seg.match(/^([A-Za-z]+):\s*(.*)$/);
    if (labeled) return { label: labeled[1], index: null, text: labeled[2] };
    return { label: '', index: null, text: seg };
  });
}

function matchDirect(units: ReqUnit[], label: string, index: number | null, text: string): ReqUnit | null {
  const type = LABEL_TO_TYPE[label];
  if (!type) return null;
  const candidates = units.filter(u => u.type === type);
  if (index !== null) return candidates.find(u => u.id === `${type}[${index}]`) ?? null;
  if (!text) return null;

  const norm = normalize(text);
  const bySubstring = candidates.find(u => normalize(u.text).includes(norm) || norm.includes(normalize(u.text)));
  if (bySubstring) return bySubstring;

  let best: ReqUnit | null = null, bestScore = 0;
  const tks = tokenize(text);
  for (const u of candidates) {
    const score = jaccard(tks, tokenize(u.text));
    if (score > bestScore) { bestScore = score; best = u; }
  }
  return bestScore >= 0.2 ? best : null;
}

const FUZZY_FALLBACK_THRESHOLD = 0.16;

function computeCoverage(units: ReqUnit[], cases: MinimalCase[]): void {
  for (const c of cases) {
    for (const seg of parseRequirementRef(c.requirementRef)) {
      const u = matchDirect(units, seg.label, seg.index, seg.text);
      if (u) {
        u.matchedBy = 'direct';
        if (!u.testCaseIds.includes(c.id)) u.testCaseIds.push(c.id);
      }
    }
  }

  const caseFingerprints = cases.map(c => ({
    id: c.id,
    tks: tokenize([c.title, c.expected, c.steps.join(' ')].join(' ')),
  }));

  for (const u of units) {
    if (u.matchedBy) continue;
    const utks = tokenize(u.text);
    let best: { id: string; score: number } | null = null;
    for (const cf of caseFingerprints) {
      const score = jaccard(utks, cf.tks);
      if (!best || score > best.score) best = { id: cf.id, score };
    }
    if (best && best.score >= FUZZY_FALLBACK_THRESHOLD) {
      u.matchedBy = 'fuzzy';
      u.testCaseIds.push(best.id);
    }
  }
}

function linkDocSections(sections: DocSection[], units: ReqUnit[]): void {
  for (const s of sections) {
    const stks = tokenize(s.title);
    s.linked = units.some(u => jaccard(stks, tokenize(u.text)) >= 0.15);
  }
}

// ─── HTML rendering ───────────────────────────────────────────────────────────

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function donutSvg(coveredPct: number): string {
  const r = 70, c = 2 * Math.PI * r;
  const dash = c * (coveredPct / 100);
  return `
  <svg width="180" height="180" viewBox="0 0 180 180" role="img" aria-label="${coveredPct.toFixed(0)}% requirement coverage">
    <circle cx="90" cy="90" r="${r}" fill="none" stroke="var(--ring-bg)" stroke-width="20" />
    <circle cx="90" cy="90" r="${r}" fill="none" stroke="var(--ring-fg)" stroke-width="20"
      stroke-dasharray="${dash.toFixed(1)} ${c.toFixed(1)}" stroke-linecap="round"
      transform="rotate(-90 90 90)" />
    <text x="90" y="84" text-anchor="middle" class="donut-pct">${coveredPct.toFixed(0)}%</text>
    <text x="90" y="106" text-anchor="middle" class="donut-label">covered</text>
  </svg>`;
}

function barChart(rows: Array<{ label: string; covered: number; fuzzy: number; uncovered: number }>): string {
  return rows.map(r => {
    const total = r.covered + r.fuzzy + r.uncovered || 1;
    const pct = (n: number) => (n / total) * 100;
    return `
    <div class="bar-row">
      <div class="bar-label">${esc(r.label)}</div>
      <div class="bar-track">
        <div class="bar-seg bar-direct" style="width:${pct(r.covered)}%" title="${r.covered} direct match"></div>
        <div class="bar-seg bar-fuzzy" style="width:${pct(r.fuzzy)}%" title="${r.fuzzy} fuzzy match"></div>
        <div class="bar-seg bar-uncovered" style="width:${pct(r.uncovered)}%" title="${r.uncovered} uncovered"></div>
      </div>
      <div class="bar-count">${r.covered + r.fuzzy}/${total}</div>
    </div>`;
  }).join('\n');
}

function statusBadge(m: MatchKind): string {
  if (m === 'direct') return '<span class="badge badge-direct">covered</span>';
  if (m === 'fuzzy') return '<span class="badge badge-fuzzy">covered (heuristic)</span>';
  return '<span class="badge badge-uncovered">uncovered</span>';
}

function renderHtml(opts: {
  docLabel: string;
  casesLabel: string;
  units: ReqUnit[];
  sections: DocSection[];
  generatedAt: string;
}): string {
  const { docLabel, casesLabel, units, sections, generatedAt } = opts;
  const total = units.length;
  const direct = units.filter(u => u.matchedBy === 'direct').length;
  const fuzzy = units.filter(u => u.matchedBy === 'fuzzy').length;
  const uncovered = total - direct - fuzzy;
  const coveredPct = total ? ((direct + fuzzy) / total) * 100 : 0;

  const byType = new Map<string, ReqUnit[]>();
  for (const u of units) {
    if (!byType.has(u.type)) byType.set(u.type, []);
    byType.get(u.type)!.push(u);
  }
  const barRows = [...byType.entries()].map(([type, us]) => ({
    label: type,
    covered: us.filter(u => u.matchedBy === 'direct').length,
    fuzzy: us.filter(u => u.matchedBy === 'fuzzy').length,
    uncovered: us.filter(u => !u.matchedBy).length,
  }));

  const unlinkedSections = sections.filter(s => !s.linked);

  const rows = [...byType.entries()].flatMap(([type, us]) =>
    us
      .slice()
      .sort((a, b) => (a.matchedBy ? 1 : 0) - (b.matchedBy ? 1 : 0))
      .map(u => `
      <tr class="${u.matchedBy ? '' : 'row-uncovered'}">
        <td class="col-type">${esc(type)}</td>
        <td class="col-text">${esc(u.text)}</td>
        <td class="col-status">${statusBadge(u.matchedBy)}</td>
        <td class="col-tc">${u.testCaseIds.map(esc).join(', ') || '—'}</td>
      </tr>`),
  ).join('\n');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Requirement Coverage Report</title>
<style>
  :root {
    --bg: #ffffff; --fg: #1a1a1a; --muted: #6b7280; --card-bg: #f8fafc; --border: #e2e8f0;
    --ring-bg: #e5e7eb; --ring-fg: #16a34a;
    --direct: #16a34a; --fuzzy: #d97706; --uncovered: #dc2626;
  }
  @media (prefers-color-scheme: dark) {
    :root { --bg: #0f1115; --fg: #e5e7eb; --muted: #9ca3af; --card-bg: #1a1d24; --border: #2a2e37; --ring-bg: #2a2e37; }
  }
  * { box-sizing: border-box; }
  body { margin: 0; padding: 32px; background: var(--bg); color: var(--fg); font-family: -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
  h1 { font-size: 22px; margin: 0 0 4px; }
  .meta { color: var(--muted); font-size: 13px; margin-bottom: 24px; }
  .meta div { margin: 2px 0; }
  .summary { display: flex; gap: 24px; align-items: center; flex-wrap: wrap; margin-bottom: 32px; }
  .cards { display: flex; gap: 12px; flex-wrap: wrap; }
  .card { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; padding: 14px 18px; min-width: 120px; }
  .card .n { font-size: 24px; font-weight: 700; }
  .card .l { font-size: 12px; color: var(--muted); margin-top: 2px; }
  .card.direct .n { color: var(--direct); }
  .card.fuzzy .n { color: var(--fuzzy); }
  .card.uncovered .n { color: var(--uncovered); }
  .donut-pct { font-size: 26px; font-weight: 700; fill: var(--fg); }
  .donut-label { font-size: 12px; fill: var(--muted); }
  h2 { font-size: 16px; margin: 28px 0 12px; border-bottom: 1px solid var(--border); padding-bottom: 6px; }
  .bar-row { display: grid; grid-template-columns: 160px 1fr 60px; align-items: center; gap: 10px; margin-bottom: 8px; font-size: 13px; }
  .bar-label { color: var(--muted); }
  .bar-track { display: flex; height: 14px; border-radius: 4px; overflow: hidden; background: var(--ring-bg); }
  .bar-seg { height: 100%; }
  .bar-direct { background: var(--direct); }
  .bar-fuzzy { background: var(--fuzzy); }
  .bar-uncovered { background: var(--uncovered); }
  .bar-count { text-align: right; color: var(--muted); }
  table { width: 100%; border-collapse: collapse; font-size: 13px; margin-top: 8px; }
  th, td { text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--border); vertical-align: top; }
  th { color: var(--muted); font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.03em; }
  .col-type { white-space: nowrap; color: var(--muted); }
  .col-tc { white-space: nowrap; font-family: monospace; font-size: 12px; }
  .row-uncovered { background: color-mix(in srgb, var(--uncovered) 8%, transparent); }
  .badge { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; }
  .badge-direct { background: color-mix(in srgb, var(--direct) 18%, transparent); color: var(--direct); }
  .badge-fuzzy { background: color-mix(in srgb, var(--fuzzy) 18%, transparent); color: var(--fuzzy); }
  .badge-uncovered { background: color-mix(in srgb, var(--uncovered) 18%, transparent); color: var(--uncovered); }
  .note { font-size: 12px; color: var(--muted); margin-top: 6px; }
  .table-wrap { overflow-x: auto; }
  ul.gap-list { font-size: 13px; columns: 2; margin: 8px 0; }
  ul.gap-list li { margin-bottom: 4px; }
</style>
</head>
<body>
  <h1>Requirement Coverage Report</h1>
  <div class="meta">
    <div><strong>Requirement source:</strong> ${esc(docLabel)}</div>
    <div><strong>Test cases:</strong> ${esc(casesLabel)}</div>
    <div><strong>Generated:</strong> ${esc(generatedAt)}</div>
  </div>

  <div class="summary">
    ${donutSvg(coveredPct)}
    <div class="cards">
      <div class="card"><div class="n">${total}</div><div class="l">Requirement units</div></div>
      <div class="card direct"><div class="n">${direct}</div><div class="l">Direct match</div></div>
      <div class="card fuzzy"><div class="n">${fuzzy}</div><div class="l">Heuristic match</div></div>
      <div class="card uncovered"><div class="n">${uncovered}</div><div class="l">Uncovered</div></div>
    </div>
  </div>

  <h2>Coverage by requirement type</h2>
  ${barChart(barRows)}
  <div class="note">■ direct = requirementRef points straight at this unit · ■ heuristic = matched by keyword overlap only, verify manually · ■ uncovered = no test case references or overlaps with this unit</div>

  <h2>Requirement-by-requirement detail</h2>
  <div class="table-wrap">
  <table>
    <thead><tr><th>Type</th><th>Requirement</th><th>Status</th><th>Test case(s)</th></tr></thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
  </div>

  ${sections.length ? `
  <h2>Document section skim (extraction sanity check)</h2>
  <div class="note">Sections detected in the raw requirement document with no requirement unit whose text overlaps them — a possible requirement-analysis extraction gap, not a test-coverage gap. Approximate; verify manually.</div>
  ${unlinkedSections.length
      ? `<ul class="gap-list">${unlinkedSections.map(s => `<li>§${esc(s.id)} ${esc(s.title)}</li>`).join('')}</ul>`
      : '<p class="note">Every detected section overlaps with at least one requirement unit.</p>'}
  ` : ''}
</body>
</html>`;
}

// ─── CLI ──────────────────────────────────────────────────────────────────────

function main(): void {
  const [reqArg, casesArg, outArg] = process.argv.slice(2);
  if (!reqArg || !casesArg) {
    console.error('Usage: ts-node scripts/coverage-report.ts <requirementDocOrJson> <casesJson> [outHtmlPath]');
    process.exit(1);
  }

  const reqPath = path.resolve(ROOT, reqArg);
  const casesPath = path.resolve(ROOT, casesArg);
  if (!fs.existsSync(reqPath)) { console.error(`Requirement file not found: ${reqPath}`); process.exit(1); }
  if (!fs.existsSync(casesPath)) { console.error(`Cases file not found: ${casesPath}`); process.exit(1); }

  const cases = loadCases(casesPath);
  const isJson = reqPath.toLowerCase().endsWith('.json');

  let units: ReqUnit[];
  let sections: DocSection[] = [];
  let docLabel: string;

  if (isJson) {
    const reqRaw = JSON.parse(fs.readFileSync(reqPath, 'utf8'));
    units = unitsFromRequirementJson(reqRaw);
    docLabel = reqPath;
  } else {
    const rawText = fs.readFileSync(reqPath, 'utf8');
    const taskIdGuess = (() => {
      const rawCases = JSON.parse(fs.readFileSync(casesPath, 'utf8')) as Array<Record<string, unknown>>;
      return rawCases.find(c => c.taskId)?.taskId as string | undefined ?? null;
    })();
    const structuredMatch = findRequirementsJsonForTaskId(taskIdGuess);
    if (structuredMatch) {
      console.log(`Using structured requirements JSON for precise matching: ${structuredMatch}`);
      const reqRaw = JSON.parse(fs.readFileSync(structuredMatch, 'utf8'));
      units = unitsFromRequirementJson(reqRaw);
      docLabel = `${reqPath} (matched via ${path.basename(structuredMatch)})`;
    } else {
      console.log('No matching structured requirements JSON found — falling back to raw-text line extraction (lower precision).');
      units = unitsFromRawText(rawText);
      docLabel = reqPath;
    }
    sections = sectionsFromRawText(rawText);
  }

  computeCoverage(units, cases);
  if (sections.length) linkDocSections(sections, units);

  const html = renderHtml({
    docLabel,
    casesLabel: casesPath,
    units,
    sections,
    generatedAt: new Date().toISOString(),
  });

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const outPath = outArg ? path.resolve(ROOT, outArg) : path.join(OUT_DIR, `coverage-${Date.now()}.html`);
  fs.writeFileSync(outPath, html);

  const total = units.length;
  const covered = units.filter(u => u.matchedBy).length;
  console.log(`\n${covered}/${total} requirement units covered (${total ? ((covered / total) * 100).toFixed(1) : '0'}%)`);
  console.log(`Report → ${outPath}`);
}

main();
