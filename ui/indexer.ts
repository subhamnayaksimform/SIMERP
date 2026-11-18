/**
 * QA Workspace — file index. Works out which module every pipeline file belongs to.
 *
 * Nothing about a module is hardcoded: module codes come from the TC-<CODE>-NNN ids and
 * `moduleCode` fields inside the files, names come from qa-conventions.md and the cases JSON.
 */

import * as fs from 'fs';
import * as path from 'path';

export const ROOT = path.resolve(__dirname, '..');
export const REPORTS = path.join(ROOT, 'reports');
export const HISTORY_DIR = path.join(REPORTS, 'ui-history');
export const LINKS_FILE = path.join(HISTORY_DIR, 'task-links.json');
const SCAN_CACHE_FILE = path.join(HISTORY_DIR, 'scan-cache.json');
export const ATTACH_DIR = path.join(REPORTS, 'ui-attachments');
export const RESULTS_JSON = path.join(REPORTS, 'results', 'results.json');
const CONVENTIONS = path.join(ROOT, '.claude', 'instructions', 'qa-conventions.md');

for (const d of [HISTORY_DIR, ATTACH_DIR]) fs.mkdirSync(d, { recursive: true });

// ───────────────────────────── helpers ─────────────────────────────

export const rel = (abs: string) => path.relative(ROOT, abs).split(path.sep).join('/');

export function readJson<T>(file: string, fallback: T): T {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')) as T; } catch { return fallback; }
}
export function writeJson(file: string, data: unknown) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}
export function listFiles(dir: string, recursive = false): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (recursive) out.push(...listFiles(p, true)); }
    else out.push(p);
  }
  return out;
}
export const slug = (s: string) => s.toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const TC_RE = /TC-([A-Z]{2,12})-\d{1,4}/g;
function codesIn(text: string): Map<string, number> {
  const m = new Map<string, number>();
  for (const x of text.matchAll(TC_RE)) m.set(x[1], (m.get(x[1]) ?? 0) + 1);
  return m;
}

// Content scans of big files (HTML reports reach ~40MB) are cached by mtime+size, on disk too.
type ScanEntry = { key: string; codes: string[] };
const scanCache: Record<string, ScanEntry> = readJson(SCAN_CACHE_FILE, {});
let scanCacheDirty = false;
function scannedCodes(abs: string): string[] {
  const st = fs.statSync(abs);
  const key = `${st.mtimeMs}:${st.size}`;
  const hit = scanCache[abs];
  if (hit && hit.key === key) return hit.codes;
  let codes: string[] = [];
  try { codes = [...codesIn(fs.readFileSync(abs, 'utf8')).keys()]; } catch { /* unreadable → no codes */ }
  scanCache[abs] = { key, codes };
  scanCacheDirty = true;
  return codes;
}

// ───────────────────────────── module index ─────────────────────────────

export type Stage =
  | 'task' | 'requirements' | 'test-cases' | 'test-case-docs' | 'automation' | 'page-objects'
  | 'results' | 'excel' | 'reports' | 'knowledge-base' | 'screenshots' | 'docs' | 'attachments';

export interface FileRef { path: string; stage: Stage; size: number; mtime: number; note?: string }
export interface ModuleInfo { code: string; name: string; group: string; files: FileRef[]; caseCount: number; taskIds: string[] }
const decode = (s: string) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');
export interface TaskInfo { id: string; prefix?: string; name: string; status?: string; priority?: string; assignee?: string; url?: string; source: string; files: string[]; modules: string[] }

function fileRef(abs: string, stage: Stage, note?: string): FileRef {
  const st = fs.statSync(abs);
  return { path: rel(abs), stage, size: st.size, mtime: st.mtimeMs, note };
}

/** Parse the sub-feature code table in qa-conventions.md → code → {name, group, folder}. */
function conventionCodes(): Map<string, { name: string; group: string; folder: string }> {
  const out = new Map<string, { name: string; group: string; folder: string }>();
  let group = '', folder = '';
  const text = fs.existsSync(CONVENTIONS) ? fs.readFileSync(CONVENTIONS, 'utf8') : '';
  for (const line of text.split('\n')) {
    const cells = line.split('|').slice(1, -1).map(c => c.trim());
    if (cells.length !== 4) continue;
    const code = cells[3].replace(/`/g, '');
    if (!/^[A-Z]{2,12}$/.test(code)) continue;
    if (cells[0]) group = cells[0].startsWith('*') ? 'Other' : cells[0];
    if (cells[1]) folder = cells[1].replace(/`/g, '');
    if (folder === '—') group = 'Other';
    const sub = cells[2].replace(/\*/g, '');
    out.set(code, { name: /no sub-feature|^—$/.test(sub) ? (group === 'Other' ? cells[0] || code : group) : sub, group, folder });
  }
  return out;
}

export function buildIndex(): { modules: Map<string, ModuleInfo>; unassigned: FileRef[]; tasks: TaskInfo[] } {
  const conv = conventionCodes();
  const modules = new Map<string, ModuleInfo>();
  const unassigned: FileRef[] = [];
  const nameHints = new Map<string, { name: string; group: string }>();
  const aliases = new Map<string, string[]>(); // lowercase slug → codes (used for filename-only files)
  const codeFolder = new Map<string, string>(); // code → top-level tests/e2e folder
  // "cases-2026-08-20-EMPDET-cohort-origin.json" teaches the alias "cohort-origin" → EMPDET,
  // so Excel/HTML named after the same feature find their module.
  const fileAlias = (abs: string, codes: string[]) => {
    if (!codes.length) return;
    const words = slug(path.basename(abs).replace(/\.[^.]+$/, ''))
      .split('-')
      .filter(w => !/^(cases|req|requirements|test|doc)$/.test(w) && !/^\d+$/.test(w) && !codes.some(c => c.toLowerCase() === w));
    const a = words.join('-');
    if (a.length >= 6 && !aliases.has(a)) aliases.set(a, codes);
  };

  const mod = (code: string): ModuleInfo => {
    let m = modules.get(code);
    if (!m) { m = { code, name: code, group: 'Other', files: [], caseCount: 0, taskIds: [] }; modules.set(code, m); }
    return m;
  };
  const attach = (codes: Iterable<string>, ref: FileRef) => {
    let any = false;
    for (const c of codes) { mod(c).files.push(ref); any = true; }
    if (!any) unassigned.push(ref);
  };

  // Screenshots under reports/ root — attached to whichever module's JSON mentions them.
  const screenshots = new Map<string, string>();
  for (const f of listFiles(REPORTS)) if (/\.(png|jpe?g)$/i.test(f)) screenshots.set(path.basename(f), f);
  const claimedShots = new Set<string>();
  const claimShots = (text: string, codes: string[]) => {
    if (!codes.length) return;
    for (const x of text.matchAll(/[\w.-]+\.(?:png|jpe?g)/gi)) {
      const abs = screenshots.get(x[0]);
      if (abs && !claimedShots.has(abs)) { claimedShots.add(abs); attach(codes, fileRef(abs, 'screenshots')); }
    }
  };

  // Requirements (and requirement-shaped JSON that landed in test-cases/).
  const reqTaskLinks: { taskId: string; codes: string[] }[] = [];
  const handleRequirement = (abs: string, j: any, text: string) => {
    const r = Array.isArray(j) ? j[0] : j;
    const code = typeof r?.moduleCode === 'string' && /^[A-Z]{2,12}$/.test(r.moduleCode) ? r.moduleCode : '';
    const codes = code ? [code] : [...codesIn(text).keys()];
    if (code && typeof r?.module === 'string' && !nameHints.has(code)) nameHints.set(code, { name: r.feature ? String(r.module) : code, group: 'Other' });
    for (const t of [r?.taskId, ...(Array.isArray(r?.linkedTaskIds) ? r.linkedTaskIds : [])]) {
      if (t) reqTaskLinks.push({ taskId: String(t), codes });
    }
    fileAlias(abs, codes);
    attach(codes, fileRef(abs, 'requirements', r?.feature ? String(r.feature).slice(0, 120) : undefined));
    claimShots(text, codes);
  };
  for (const f of listFiles(path.join(REPORTS, 'requirements'))) {
    const text = fs.readFileSync(f, 'utf8');
    if (f.endsWith('.json')) handleRequirement(f, readJson(f, {}), text);
    else attach(codesFromName(f, aliases), fileRef(f, 'requirements'));
  }

  // Test cases JSON — also the best source of human module names.
  const caseCodesByFile = new Map<string, string[]>();
  for (const f of listFiles(path.join(REPORTS, 'test-cases'))) {
    const text = fs.readFileSync(f, 'utf8');
    if (!f.endsWith('.json')) { attach(codesFromName(f, aliases), fileRef(f, 'docs')); continue; }
    const j = readJson<any>(f, null);
    if (j && !Array.isArray(j) && j.moduleCode) { handleRequirement(f, j, text); continue; }
    const cases: any[] = Array.isArray(j) ? j : Array.isArray(j?.testCases) ? j.testCases : [];
    const counts = new Map<string, number>();
    for (const c of cases) {
      const m = /^TC-([A-Z]{2,12})-/.exec(String(c?.id ?? ''));
      if (!m) continue;
      counts.set(m[1], (counts.get(m[1]) ?? 0) + 1);
      if (!nameHints.has(m[1]) || nameHints.get(m[1])!.group === 'Other') {
        nameHints.set(m[1], { name: String(c.subModule || c.module || m[1]), group: String(c.module || 'Other') });
      }
    }
    const codes = [...counts.keys()];
    caseCodesByFile.set(path.basename(f, '.json'), codes);
    fileAlias(f, codes);
    attach(codes, fileRef(f, 'test-cases', `${cases.length} cases`));
    claimShots(text, codes);
  }

  // Specs → codes from their TC ids; spec folders become filename aliases.
  const specCodes = new Map<string, string[]>();
  for (const f of listFiles(path.join(ROOT, 'tests', 'e2e'), true)) {
    if (!f.endsWith('.ts')) continue;
    const counts = codesIn(fs.readFileSync(f, 'utf8'));
    const codes = [...counts.keys()];
    specCodes.set(f, codes);
    const top = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
    if (top) {
      const dir = path.basename(path.dirname(f));
      if (dir !== 'e2e' && !aliases.has(dir)) aliases.set(dir, [top[0]]);
      const folder = rel(f).split('/')[2];
      if (folder && !f.endsWith(`${folder}.spec.ts`) && !codeFolder.has(top[0])) codeFolder.set(top[0], folder);
    }
    attach(codes, fileRef(f, 'automation'));
  }

  // Page objects → inherit codes of every spec that imports them.
  for (const f of listFiles(path.join(ROOT, 'tests', 'page-objects'), true)) {
    if (!f.endsWith('.ts')) continue;
    const importKey = rel(f).replace(/^tests\//, '').replace(/\.ts$/, '');
    const codes = new Set<string>();
    for (const [spec, cs] of specCodes) {
      if (fs.readFileSync(spec, 'utf8').includes(importKey)) cs.forEach(c => codes.add(c));
    }
    if (path.basename(f) === 'base.page.ts') { unassigned.push(fileRef(f, 'page-objects', 'shared by every page object')); continue; }
    attach(codes, fileRef(f, 'page-objects'));
  }

  // Names + aliases from conventions and case data.
  for (const [code, info] of conv) {
    if (!aliases.has(slug(info.name))) aliases.set(slug(info.name), [code]);
  }
  for (const [code, h] of nameHints) if (!aliases.has(slug(h.name))) aliases.set(slug(h.name), [code]);
  for (const code of new Set([...conv.keys(), ...nameHints.keys()])) aliases.set(code.toLowerCase(), [code]);

  // Markdown test-case library mirrors the cases JSON filenames.
  for (const f of listFiles(path.join(ROOT, 'docs', 'test-cases'))) {
    const base = path.basename(f, '.md').replace(/^test-cases-/, 'cases-');
    const match = [...caseCodesByFile.entries()].find(([k]) => k.toLowerCase() === base);
    const codes = match ? match[1] : scannedCodes(f);
    if (path.basename(f) === 'README.md') { unassigned.push(fileRef(f, 'test-case-docs', 'library index')); continue; }
    attach(codes, fileRef(f, 'test-case-docs'));
  }
  for (const dir of ['requirements', 'findings']) {
    for (const f of listFiles(path.join(ROOT, 'docs', dir))) {
      const codes = new Set([...scannedCodes(f), ...codesFromName(f, aliases)]);
      attach(codes, fileRef(f, 'docs'));
    }
  }

  const knownCodes = new Set([...conv.keys(), ...nameHints.keys()].filter(c => c !== 'GEN'));

  // Excel — filename only (codes or sub-feature names appear in the names).
  // Remember which modules each run timestamp belonged to, for the HTML dashboards below.
  const stampCodes = new Map<string, Set<string>>();
  const stampOf = (f: string) => /(\d{4}-\d{2}-\d{2}_\d{2}-\d{2})/.exec(path.basename(f))?.[1];
  for (const f of listFiles(path.join(REPORTS, 'excel'))) {
    const codes = codesFromName(f, aliases);
    const st = stampOf(f);
    if (st) { const set = stampCodes.get(st) ?? new Set<string>(); codes.forEach(c => set.add(c)); stampCodes.set(st, set); }
    attach(codes, fileRef(f, 'excel'));
  }

  // HTML dashboards / coverage / review pages — scan for TC ids.
  for (const dir of ['html', 'coverage', 'test-cases-review']) {
    for (const f of listFiles(path.join(REPORTS, dir))) {
      if (!f.endsWith('.html')) continue;
      // Pipeline dashboards carry no TC ids — they share a timestamp with that run's Excel.
      let codes = scannedCodes(f);
      if (!codes.length) codes = [...(stampCodes.get(stampOf(f) ?? '') ?? [])];
      if (!codes.length && fs.statSync(f).size < 2_000_000) {
        const text = fs.readFileSync(f, 'utf8');
        codes = [...knownCodes].filter(c => new RegExp(`\\b${c}\\b`).test(text));
      }
      attach(codes, fileRef(f, 'reports'));
    }
  }

  // Current Playwright results.
  if (fs.existsSync(RESULTS_JSON)) attach(scannedCodes(RESULTS_JSON), fileRef(RESULTS_JSON, 'results', 'latest run'));

  // Knowledge base per-module files.
  for (const f of listFiles(path.join(REPORTS, 'knowledge-base', 'modules'), true)) {
    let codes: string[] = [];
    if (f.endsWith('.json')) {
      const j = readJson<any>(f, {});
      if (typeof j?.module === 'string' && /^[A-Z]{2,12}$/.test(j.module)) codes = [j.module];
    }
    if (!codes.length) codes = codesFromName(f, aliases);
    attach(codes, fileRef(f, 'knowledge-base'));
  }

  // Raw Zoho pulls + tasks.
  const tasks = new Map<string, TaskInfo>();
  const rawDir = path.join(REPORTS, 'raw');
  for (const f of listFiles(rawDir)) {
    const name = path.basename(f);
    const tm = /^task-(\d+)/.exec(name);
    if (tm) {
      const t = tasks.get(tm[1]) ?? { id: tm[1], name: `Task ${tm[1]}`, source: rel(f), files: [], modules: [] };
      t.files.push(rel(f));
      if (name.endsWith('.md')) {
        const h = /^#\s*(.+)$/m.exec(fs.readFileSync(f, 'utf8'));
        if (h) t.name = h[1].replace(/^Zoho task \d+\s*[—-]\s*/, '');
        const u = /https?:\/\/\S*zoho\S*/.exec(fs.readFileSync(f, 'utf8'));
        if (u && !t.url) t.url = u[0];
      }
      tasks.set(tm[1], t);
      continue;
    }
    if (/^tasks-fetched-.*\.json$/.test(name)) {
      for (const x of readJson<any[]>(f, [])) {
        if (!x?.id) continue;
        const t = tasks.get(String(x.id)) ?? { id: String(x.id), name: String(x.name ?? x.id), source: rel(f), files: [], modules: [] };
        Object.assign(t, { prefix: x.prefix, name: decode(String(x.name ?? t.name)), status: x.status, priority: x.priority, assignee: x.assignee, url: x.url || t.url });
        if (!t.files.includes(rel(f))) t.files.push(rel(f));
        tasks.set(t.id, t);
      }
      continue;
    }
    // document-fetched, issues-fetched, failed-test-cases — tied up below via requirement links / content.
    const dm = /^document-fetched-(\d+)/.exec(name);
    if (dm) {
      const link = reqTaskLinks.find(l => /^DOC-\d+$/.test(l.taskId) && Math.abs(Number(l.taskId.slice(4)) - Number(dm[1])) < 5000);
      if (link) { attach(link.codes, fileRef(f, 'task', 'source document')); continue; }
    }
    attach(f.endsWith('.json') ? scannedCodes(f) : [], fileRef(f, 'task'));
  }

  // Task ↔ module links: from requirements, plus manual links saved from the UI.
  const manual = readJson<Record<string, string[]>>(LINKS_FILE, {});
  for (const t of tasks.values()) {
    const codes = new Set<string>(manual[t.id] ?? []);
    for (const l of reqTaskLinks) if (l.taskId === t.id) l.codes.forEach(c => codes.add(c));
    t.modules = [...codes];
    for (const c of codes) {
      const m = mod(c);
      m.taskIds.push(t.id);
      for (const p of t.files) m.files.push(fileRef(path.join(ROOT, p), 'task', t.name));
    }
  }

  // User attachments.
  for (const d of fs.existsSync(ATTACH_DIR) ? fs.readdirSync(ATTACH_DIR) : []) {
    if (!/^[A-Z]{2,12}$/.test(d)) continue; // _inbox = uploads not yet tied to a module
    for (const f of listFiles(path.join(ATTACH_DIR, d))) mod(d).files.push(fileRef(f, 'attachments'));
  }

  // Everything not referenced by any module JSON.
  for (const abs of screenshots.values()) if (!claimedShots.has(abs)) unassigned.push(fileRef(abs, 'screenshots'));

  // Finalise names, counts, dedupe.
  for (const m of modules.values()) {
    const c = conv.get(m.code), h = nameHints.get(m.code);
    if (c) { m.name = c.name; m.group = c.group; }
    else if (h) {
      m.name = h.name;
      const viaFolder = [...conv.values()].find(v => v.folder === codeFolder.get(m.code));
      m.group = viaFolder?.group ?? h.group;
    }
    const seen = new Set<string>();
    m.files = m.files.filter(f => (seen.has(f.path) ? false : (seen.add(f.path), true))).sort((a, b) => b.mtime - a.mtime);
    m.caseCount = latestCases(m).length;
  }
  if (scanCacheDirty) { writeJson(SCAN_CACHE_FILE, scanCache); scanCacheDirty = false; }
  return { modules, unassigned, tasks: [...tasks.values()] };
}

function codesFromName(abs: string, aliases: Map<string, string[]>): string[] {
  const name = slug(path.basename(abs).replace(/\.[^.]+$/, ''));
  const found = new Set<string>();
  // Longest alias first so "ratings-feedback" wins over "rating".
  let rest = `-${name}-`;
  for (const [a, codes] of [...aliases.entries()].sort((x, y) => y[0].length - x[0].length)) {
    const needle = `-${a}-`;
    if (rest.includes(needle)) { codes.forEach(c => found.add(c)); rest = rest.split(needle).join('-'); }
  }
  return [...found];
}

/**
 * Test cases from a docs/test-cases/*.md document (generated from the cases JSON and committed
 * to git). Used when reports/test-cases/ is absent — a fresh checkout has no reports/.
 */
function parseMdCases(abs: string): any[] {
  const text = fs.readFileSync(abs, 'utf8');
  const category = new Map<string, string>();
  for (const m of text.matchAll(/^\| \[(TC-[A-Z]{2,12}-\d+)\]\([^)]*\) \| (?:[^|]*\|){2} ([^|]+?) \|/gm)) category.set(m[1], m[2].trim());
  const out: any[] = [];
  const blocks = text.split(/^#### /m).slice(1);
  for (const blk of blocks) {
    const head = /^(TC-[A-Z]{2,12}-\d+)\s+—\s+(.+)$/m.exec(blk);
    if (!head) continue;
    const field = (name: string) => new RegExp(`^\\| \\*\\*${name}\\*\\* \\| (.*) \\|$`, 'm').exec(blk)?.[1].trim();
    const section = (name: string) => {
      const m = new RegExp(`\\*\\*${name}\\*\\*\\n\\n([\\s\\S]*?)(?=\\n\\*\\*[A-Z][^*]+\\*\\*\\n|\\n---|$)`).exec(blk);
      return m ? m[1].trim() : '';
    };
    const steps = section('Steps').split('\n').filter(l => /^\d+\.\s/.test(l)).map(l => l.replace(/^\d+\.\s+/, ''));
    out.push({
      id: head[1], title: head[2].trim(), category: category.get(head[1]), priority: field('Priority'), role: field('Role'),
      tags: (field('Tags') ?? '').split(',').map(t => t.trim()).filter(Boolean),
      preconditions: section('Preconditions'), steps: steps.length ? steps : section('Steps'), expected: section('Expected'),
    });
  }
  return out;
}

/** Every test case for a module, newest file wins per id (cases JSON first, else the Markdown docs). */
export function latestCases(m: ModuleInfo): any[] {
  const byId = new Map<string, any>();
  const jsonFiles = m.files.filter(f => f.stage === 'test-cases' && f.path.endsWith('.json'));
  if (!jsonFiles.length) {
    for (const f of m.files.filter(x => x.stage === 'test-case-docs').sort((a, b) => a.mtime - b.mtime)) {
      try { for (const c of parseMdCases(path.join(ROOT, f.path))) if (c.id.startsWith(`TC-${m.code}-`)) byId.set(c.id, { ...c, _source: f.path }); } catch { /* unreadable doc */ }
    }
    return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
  }
  const files = m.files.filter(f => f.stage === 'test-cases').sort((a, b) => a.mtime - b.mtime);
  for (const f of files) {
    const j = readJson<any>(path.join(ROOT, f.path), []);
    const cases: any[] = Array.isArray(j) ? j : Array.isArray(j?.testCases) ? j.testCases : [];
    for (const c of cases) {
      if (typeof c?.id === 'string' && c.id.startsWith(`TC-${m.code}-`)) byId.set(c.id, { ...c, _source: f.path });
    }
  }
  return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
}

// ───────────────────────────── results parsing ─────────────────────────────

export interface TestRow { id: string | null; title: string; file: string; status: 'passed' | 'failed' | 'flaky' | 'skipped'; duration: number; error?: string }
export function parseResults(file: string): { rows: TestRow[]; startTime?: string } {
  const j = readJson<any>(file, null);
  if (!j) return { rows: [] };
  const rows: TestRow[] = [];
  const walk = (s: any, specFile: string) => {
    for (const sp of s.specs ?? []) {
      for (const t of sp.tests ?? []) {
        const last = t.results?.[t.results.length - 1];
        const status = t.status === 'expected' ? 'passed' : t.status === 'flaky' ? 'flaky' : t.status === 'skipped' ? 'skipped' : 'failed';
        const id = /TC-[A-Z]{2,12}-\d{1,4}/.exec(sp.title)?.[0] ?? null;
        rows.push({ id, title: sp.title, file: sp.file ?? specFile, status, duration: last?.duration ?? 0, error: last?.error?.message?.replace(/\x1b\[[0-9;]*m/g, '').slice(0, 800) });
      }
    }
    for (const c of s.suites ?? []) walk(c, s.file ?? specFile);
  };
  for (const s of j.suites ?? []) walk(s, s.file);
  return { rows, startTime: j.stats?.startTime };
}
export function summarize(rows: TestRow[]) {
  const s = { total: 0, passed: 0, failed: 0, flaky: 0, skipped: 0 };
  for (const r of rows) { s.total++; s[r.status]++; }
  return s;
}
export const rowsFor = (rows: TestRow[], code: string) => rows.filter(r => r.id?.startsWith(`TC-${code}-`));
