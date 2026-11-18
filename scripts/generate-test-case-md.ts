/**
 * Markdown test-case reporter for the SIM ERP QA flow.
 *
 * Renders any test-case JSON (the output of the test-case-generator agent /
 * pipeline step) as a single self-contained, showcase-ready Markdown document.
 *
 * Nothing about the content is hardcoded: modules, categories, priorities,
 * severities, tags and even the per-case field list are all derived from the
 * input file, so a new category or a new field on a test case shows up in the
 * document without touching this script.
 *
 *   npm run report:md                                  # newest cases-*.json
 *   npm run report:md -- --input=<path-to-cases.json>  # a specific run
 *   npm run report:md -- --input=<path> --out=<dir> --label=<suffix>
 *   npm run report:md -- --all --index                 # whole library + README index
 *   npm run report:md -- --input=<path> --stamp        # timestamped filename
 *
 * Output: docs/test-cases/test-cases-<label>.md (add --stamp for
 * test-cases-<YYYY-MM-DD_HH-MM>-<label>.md). Stable names by default so a
 * re-run refreshes the document in place instead of piling up copies.
 */

import * as fs from 'fs';
import * as path from 'path';
import { withLifecycle } from './lib/case-lifecycle';

const ROOT = path.resolve(__dirname, '..');
const CASES_DIR = path.join(ROOT, 'reports', 'test-cases');
const DEFAULT_OUT_DIR = path.join(ROOT, 'docs', 'test-cases');

type TestCase = Record<string, unknown>;

// ── Arguments ─────────────────────────────────────────────────────────────────
interface Args { input?: string; out?: string; label?: string; all?: boolean; index?: boolean; stamp?: boolean }

function parseArgs(argv: string[]): Args {
  const out: Args = {};
  for (const a of argv.slice(2)) {
    const [k, ...rest] = a.replace(/^--/, '').split('=');
    const v = rest.join('=');
    if (k === 'input') out.input = v;
    else if (k === 'out') out.out = v;
    else if (k === 'label') out.label = v;
    else if (k === 'all') out.all = true;
    else if (k === 'index') out.index = true;
    else if (k === 'stamp') out.stamp = true;
  }
  return out;
}

function stamp(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}`;
}

function latestCasesFile(): string | null {
  if (!fs.existsSync(CASES_DIR)) return null;
  const files = fs.readdirSync(CASES_DIR)
    .filter(f => f.startsWith('cases-') && f.endsWith('.json'))
    .map(f => ({ f, mtime: fs.statSync(path.join(CASES_DIR, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime);
  return files.length ? path.join(CASES_DIR, files[0].f) : null;
}

function allCasesFiles(): string[] {
  if (!fs.existsSync(CASES_DIR)) return [];
  return fs.readdirSync(CASES_DIR)
    .filter(f => f.startsWith('cases-') && f.endsWith('.json'))
    .sort()
    .map(f => path.join(CASES_DIR, f));
}

// ── Input normalisation ───────────────────────────────────────────────────────
/** Accepts a bare array, or any wrapper object holding the array under a key. */
function extractCases(raw: unknown): TestCase[] {
  if (Array.isArray(raw)) return raw as TestCase[];
  if (raw && typeof raw === 'object') {
    for (const value of Object.values(raw as Record<string, unknown>)) {
      if (Array.isArray(value) && value.every(v => v && typeof v === 'object')) return value as TestCase[];
    }
  }
  throw new Error('No array of test cases found in the input JSON.');
}

// ── Value rendering ───────────────────────────────────────────────────────────
function isEmpty(v: unknown): boolean {
  if (v === null || v === undefined) return true;
  if (typeof v === 'string') return v.trim() === '';
  if (Array.isArray(v)) return v.length === 0;
  if (typeof v === 'object') return Object.keys(v as object).length === 0;
  return false;
}

/** Escape the characters that would break a Markdown table cell. */
function cell(v: unknown): string {
  return inline(v).replace(/\|/g, '\\|').replace(/\r?\n/g, '<br>');
}

/** Flatten any value to a single-line human-readable string. */
function inline(v: unknown): string {
  if (isEmpty(v)) return '';
  if (typeof v === 'boolean') return v ? 'Yes' : 'No';
  if (Array.isArray(v)) return v.map(inline).join(', ');
  if (typeof v === 'object') {
    return Object.entries(v as Record<string, unknown>)
      .filter(([, val]) => !isEmpty(val))
      .map(([k, val]) => `${k}: ${inline(val)}`)
      .join('; ');
  }
  return String(v);
}

function titleCase(key: string): string {
  return key
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

function slug(v: string): string {
  return v.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function str(c: TestCase, key: string): string {
  const v = c[key];
  return typeof v === 'string' ? v : isEmpty(v) ? '' : String(v);
}

// ── Grouping / counting ───────────────────────────────────────────────────────
/** Count occurrences of a field's values across all cases (arrays counted per item). */
function tally(cases: TestCase[], key: string): Map<string, number> {
  const counts = new Map<string, number>();
  for (const c of cases) {
    const v = c[key];
    if (isEmpty(v)) continue;
    const values = Array.isArray(v) ? v.map(inline) : [inline(v)];
    for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return new Map([...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
}

function groupBy(cases: TestCase[], key: string, fallback: string): Map<string, TestCase[]> {
  const groups = new Map<string, TestCase[]>();
  for (const c of cases) {
    const k = isEmpty(c[key]) ? fallback : inline(c[key]);
    (groups.get(k) ?? groups.set(k, []).get(k)!).push(c);
  }
  return new Map([...groups.entries()].sort((a, b) => a[0].localeCompare(b[0])));
}

/** Keys present on at least one case, ordered: preferred ones first, then the rest as found. */
function fieldOrder(cases: TestCase[], preferred: string[]): string[] {
  const present = new Set<string>();
  for (const c of cases) for (const k of Object.keys(c)) if (!isEmpty(c[k])) present.add(k);
  const ordered = preferred.filter(k => present.has(k));
  const extra = [...present].filter(k => !preferred.includes(k)).sort();
  return [...ordered, ...extra];
}

// ── Markdown building blocks ──────────────────────────────────────────────────
function countTable(label: string, counts: Map<string, number>, total: number): string[] {
  if (counts.size === 0) return [];
  const out = [`### By ${label.toLowerCase()}`, '', `| ${titleCase(label)} | Count | Share |`, '| --- | ---: | ---: |'];
  for (const [k, n] of counts) out.push(`| ${cell(k)} | ${n} | ${((n / total) * 100).toFixed(1)}% |`);
  out.push('');
  return out;
}

function stepsBlock(v: unknown): string[] {
  if (isEmpty(v)) return [];
  const steps = Array.isArray(v) ? v : String(v).split(/\r?\n/).filter(s => s.trim());
  return steps.map((s, i) => `${i + 1}. ${inline(s).replace(/^\s*\d+[.)]\s*/, '')}`);
}

function bulletBlock(v: unknown): string[] {
  const items = Array.isArray(v) ? v : String(v).split(/\r?\n/).filter(s => s.trim());
  return items.map(s => `- ${inline(s)}`);
}

// ── Document ──────────────────────────────────────────────────────────────────
// Ordering only — any field not listed here is still rendered, appended in the
// order it appears on the case, so new fields need no code change.
const SUMMARY_FIELDS = ['category', 'priority', 'severity', 'provenance', 'confidence', 'automatable'];
const DETAIL_FIELD_ORDER = [
  'preconditions', 'steps', 'expected', 'testData', 'tags', 'requirementRef',
  'automationHint', 'automatable', 'priority', 'severity', 'provenance', 'confidence',
  'role', 'featureFlag', 'apiValidation', 'taskId', 'subModule',
];
const BLOCK_FIELDS = new Set(['steps', 'expected', 'testData', 'preconditions', 'automationHint']);
const HEADER_FIELDS = new Set(['id', 'title', 'module', 'moduleCode', 'category']);

function render(cases: TestCase[], sourcePath: string): string {
  const total = cases.length;
  const modules = groupBy(cases, 'module', 'Unspecified module');
  const moduleNames = [...modules.keys()];
  const heading = moduleNames.length === 1 ? `${moduleNames[0]} — Test Cases` : 'Test Cases';

  const md: string[] = [
    `# ${heading}`,
    '',
    `**Total test cases:** ${total}  `,
    `**Modules covered:** ${moduleNames.join(', ')}  `,
    `**Source:** \`${path.relative(ROOT, sourcePath)}\`  `,
    `**Generated:** ${new Date().toISOString().replace('T', ' ').slice(0, 16)} UTC`,
    '',
    '---',
    '',
    '## Summary',
    '',
  ];

  if (modules.size > 1) {
    md.push('### By module', '', '| Module | Count | Share |', '| --- | ---: | ---: |');
    for (const [name, list] of modules) {
      md.push(`| ${cell(name)} | ${list.length} | ${((list.length / total) * 100).toFixed(1)}% |`);
    }
    md.push('');
  }

  for (const field of SUMMARY_FIELDS) md.push(...countTable(titleCase(field), tally(cases, field), total));
  md.push(...countTable('Tag', tally(cases, 'tags'), total));

  // Index — every case, one row, so the document is scannable before the detail.
  md.push('---', '', '## Index', '', '| ID | Title | Module | Category | Priority |', '| --- | --- | --- | --- | --- |');
  for (const c of cases) {
    const id = str(c, 'id');
    const link = id ? `[${cell(id)}](#${slug(`${id} ${str(c, 'title')}`)})` : '';
    md.push(`| ${link} | ${cell(c['title'])} | ${cell(c['module'])} | ${cell(c['category'])} | ${cell(c['priority'])} |`);
  }
  md.push('');

  const detailFields = fieldOrder(cases, DETAIL_FIELD_ORDER).filter(k => !HEADER_FIELDS.has(k));

  for (const [moduleName, moduleCases] of modules) {
    md.push('---', '', `## ${moduleName}`, '', `${moduleCases.length} test case${moduleCases.length === 1 ? '' : 's'}.`, '');

    for (const [categoryName, categoryCases] of groupBy(moduleCases, 'category', 'Uncategorised')) {
      md.push(`### ${titleCase(categoryName)} (${categoryCases.length})`, '');

      for (const c of categoryCases) {
        const id = str(c, 'id');
        md.push(`#### ${[id, str(c, 'title')].filter(Boolean).join(' — ')}`, '');

        // Compact attribute table for everything short enough to fit one row.
        const attrs = detailFields.filter(k => !BLOCK_FIELDS.has(k) && !isEmpty(c[k]));
        if (attrs.length) {
          md.push('| Field | Value |', '| --- | --- |');
          for (const k of attrs) md.push(`| **${titleCase(k)}** | ${cell(c[k])} |`);
          md.push('');
        }

        for (const key of detailFields.filter(k => BLOCK_FIELDS.has(k) && !isEmpty(c[k]))) {
          md.push(`**${titleCase(key)}**`, '');
          if (key === 'steps') md.push(...stepsBlock(c[key]));
          else if (typeof c[key] === 'object') md.push(...bulletBlock(
            Object.entries(c[key] as Record<string, unknown>)
              .filter(([, v]) => !isEmpty(v))
              .map(([k, v]) => `\`${k}\`: ${inline(v)}`),
          ));
          else md.push(inline(c[key]));
          md.push('');
        }
      }
    }
  }

  return md.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
}

// ── Library index ─────────────────────────────────────────────────────────────
/**
 * Builds a README over whatever documents are in the output folder, reading the
 * facts back out of each document's own header — so the index never carries a
 * second, drifting copy of the module list or the counts.
 */
function buildIndex(dir: string): string {
  const docs = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== 'README.md').sort();
  const rows: string[] = [];
  let total = 0;

  for (const f of docs) {
    const text = fs.readFileSync(path.join(dir, f), 'utf8');
    const grab = (re: RegExp): string => (text.match(re) ?? [])[1]?.trim() ?? '';
    const count = grab(/\*\*Total test cases:\*\*\s*(\d+)/);
    const modules = grab(/\*\*Modules covered:\*\*\s*(.+)/);
    const source = grab(/\*\*Source:\*\*\s*`(.+?)`/);
    total += Number(count) || 0;
    rows.push(`| [${cell(f.replace(/\.md$/, ''))}](${encodeURIComponent(f)}) | ${cell(modules)} | ${count} | \`${cell(source)}\` |`);
  }

  return [
    '# SIM ERP — Test Case Library',
    '',
    `**Documents:** ${docs.length}  `,
    `**Total test cases:** ${total}  `,
    `**Generated:** ${new Date().toISOString().replace('T', ' ').slice(0, 16)} UTC`,
    '',
    'Every document is generated from a `reports/test-cases/cases-*.json` run by',
    '`npm run report:md -- --all --index`. Do not hand-edit them — regenerate instead.',
    '',
    '| Document | Modules covered | Test cases | Source |',
    '| --- | --- | ---: | --- |',
    ...rows,
    '',
  ].join('\n');
}

// ── Main ──────────────────────────────────────────────────────────────────────
function convert(input: string, args: Args, outDir: string): number {
  // Retired / superseded / needs-review cases stay in the document, marked from the lifecycle ledger.
  const cases = withLifecycle(extractCases(JSON.parse(fs.readFileSync(input, 'utf8'))));
  if (cases.length === 0) throw new Error('contains no test cases');

  // Label falls back to the source filename's own suffix — still nothing fixed in code.
  const label = args.label || path.basename(input, '.json').replace(/^cases-/, '');
  const outFile = path.join(outDir, `test-cases-${args.stamp ? `${stamp()}-` : ''}${slug(label)}.md`);

  fs.writeFileSync(outFile, render(cases, input), 'utf8');
  console.log(`Markdown test cases: ${path.relative(ROOT, outFile)} (${cases.length} cases)`);
  return cases.length;
}

function main(): void {
  const args = parseArgs(process.argv);
  const outDir = args.out ? path.resolve(ROOT, args.out) : DEFAULT_OUT_DIR;

  const inputs = args.all
    ? allCasesFiles()
    : [args.input ? path.resolve(ROOT, args.input) : latestCasesFile()].filter((f): f is string => !!f);

  if (inputs.length === 0 || !inputs.every(f => fs.existsSync(f))) {
    console.error(`No test-case JSON found. Pass --input=<path> or generate cases into ${path.relative(ROOT, CASES_DIR)}/ first.`);
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });

  let converted = 0;
  let cases = 0;
  for (const input of inputs) {
    try {
      cases += convert(input, args, outDir);
      converted++;
    } catch (e) {
      console.error(`Skipped ${path.relative(ROOT, input)}: ${(e as Error).message}`);
    }
  }

  if (converted === 0) process.exit(1);
  if (inputs.length > 1) console.log(`\n${converted}/${inputs.length} documents written, ${cases} test cases total.`);

  if (args.index) {
    fs.writeFileSync(path.join(outDir, 'README.md'), buildIndex(outDir), 'utf8');
    console.log(`Index: ${path.relative(ROOT, path.join(outDir, 'README.md'))}`);
  }
}

main();
