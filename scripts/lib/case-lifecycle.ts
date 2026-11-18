/**
 * Test-case lifecycle — shared helpers.
 *
 * Why this exists: test cases outlive the screens they were written for. Modules get renamed, features move,
 * and case IDs have been reused for different cases across runs (the "newest file wins" rule then silently
 * drops the older one). This library lets the CLI (scripts/cases-lifecycle.ts) answer three questions without
 * ever deleting or rewriting a case:
 *   1. Is any case missing compared with what we have ever seen?          -> `check`
 *   2. Which cases are probably out of date, and why?                       -> `stale`
 *   3. Which cases were retired or replaced, by whom, and for what reason?  -> the ledger
 *
 * A case is identified by `id` + `fp` (a fingerprint of its normalised title), because an ID alone is not unique.
 * Everything here is read-only except the three committed files in reports/knowledge-base/case-lifecycle/.
 */
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import { execFileSync } from 'child_process';

export const ROOT = process.env.CASE_LIFECYCLE_ROOT ? path.resolve(process.env.CASE_LIFECYCLE_ROOT) : path.resolve(__dirname, '..', '..');
export const CASES_DIR = path.join(ROOT, 'reports', 'test-cases');
export const DOCS_DIR = path.join(ROOT, 'docs', 'test-cases');
export const KB_DIR = path.join(ROOT, 'reports', 'knowledge-base', 'case-lifecycle');
export const REGISTRY_FILE = path.join(KB_DIR, 'modules.json');
export const LEDGER_FILE = path.join(KB_DIR, 'lifecycle.json');
export const SNAPSHOT_FILE = path.join(KB_DIR, 'case-ids.snapshot.json');
export const OUT_DIR = path.join(ROOT, 'reports', 'test-cases-lifecycle');

export type LifecycleStatus = 'active' | 'needs-review' | 'retired' | 'superseded';

export interface CaseRow {
  id: string;
  fp: string;
  code: string;
  title: string;
  module: string;
  subModule: string;
  priority: string;
  category: string;
  tags: string[];
  taskIds: string[];
  supersedes: string[];
  lastResult: string;
  file: string;
  fileDate: string;
}

export interface HistoryItem { at: string; status: LifecycleStatus; reason?: string; by?: string }
export interface LedgerEntry {
  status: LifecycleStatus;
  reason?: string;
  replacedBy?: string;
  featureRemoved?: string;
  verified?: { date: string; appVersion?: string; source?: string };
  note?: string;
  by?: string;
  at: string;
  history?: HistoryItem[];
}
export interface Ledger { schemaVersion: 1; cases: Record<string, LedgerEntry> }

export interface ModuleEntry {
  module: string;
  name: string;
  folder?: string;
  route?: string;
  aliases: string[];
  status: 'live' | 'renamed' | 'removed' | 'planned';
  appPaths?: { frontend?: string[]; backend?: string[] };
  needsReview?: boolean;
  notes?: string;
  /** Derived by `registry-sync`; never hand-edit. */
  observed?: Record<string, number>;
}
export interface Registry { schemaVersion: 1; modules: Record<string, ModuleEntry> }

/** [id, fp, priority, title (80 chars)] */
export type SnapshotRow = [string, string, string, string];
export interface Snapshot { schemaVersion: 1; updatedAt: string; cases: SnapshotRow[] }

// ── small utilities ─────────────────────────────────────────────────────────
export const today = (): string => new Date().toISOString().slice(0, 10);
export const key = (id: string, fp: string): string => `${id}#${fp}`;

export function normTitle(title: unknown): string {
  return String(title ?? '')
    .toLowerCase()
    .replace(/@[a-z0-9_-]+/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}
export const fingerprint = (title: unknown): string => crypto.createHash('sha1').update(normTitle(title)).digest('hex').slice(0, 8);
const normName = (s: unknown): string => String(s ?? '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
export { normName };

export function readJson<T>(file: string, fallback: T): T {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')) as T; } catch { return fallback; }
}

/** The cases that matter most. They are listed first, and cannot be retired without a replacement or a stated feature removal. */
export function isProtected(r: Pick<CaseRow, 'priority' | 'category' | 'tags'>): boolean {
  const p = r.priority.toLowerCase();
  const c = r.category.toLowerCase();
  const tags = r.tags.map(t => t.toLowerCase());
  return p === 'critical' || p === 'high' || ['smoke', 'regression', 'security'].includes(c) ||
    tags.some(t => ['@smoke', '@regression', '@security', '@critical'].includes(t));
}

function fileDateOf(file: string): string {
  const name = path.basename(file);
  const iso = name.match(/(\d{4}-\d{2}-\d{2})/);
  if (iso) return iso[1];
  const epoch = name.match(/cases-(\d{13})/);
  if (epoch) return new Date(Number(epoch[1])).toISOString().slice(0, 10);
  try { return fs.statSync(file).mtime.toISOString().slice(0, 10); } catch { return today(); }
}

const asArray = (v: unknown): string[] => (Array.isArray(v) ? v.map(String) : v ? [String(v)] : []);

/** Every row from every cases-*.json. Rows are never merged here, so a reused ID stays visible as two rows. */
export function loadRows(): { rows: CaseRow[]; files: string[]; dupInFile: Array<{ file: string; id: string }> } {
  const rows: CaseRow[] = [];
  const dupInFile: Array<{ file: string; id: string }> = [];
  let files: string[] = [];
  try { files = fs.readdirSync(CASES_DIR).filter(f => /^cases-.*\.json$/.test(f)).sort(); } catch { /* no reports/ on a fresh clone */ }
  for (const f of files) {
    let json: unknown;
    try { json = JSON.parse(fs.readFileSync(path.join(CASES_DIR, f), 'utf8')); } catch { continue; }
    const list: unknown = Array.isArray(json) ? json : (json as Record<string, unknown>)?.testCases ?? (json as Record<string, unknown>)?.cases;
    if (!Array.isArray(list)) continue;
    const seen = new Set<string>();
    for (const raw of list as Array<Record<string, unknown>>) {
      if (!raw || typeof raw.id !== 'string' || !raw.id) continue;
      if (seen.has(raw.id)) dupInFile.push({ file: f, id: raw.id });
      seen.add(raw.id);
      const idCode = raw.id.match(/^TC-([A-Z0-9]+)-/)?.[1] ?? 'GEN';
      rows.push({
        id: raw.id,
        fp: fingerprint(raw.title),
        code: String(raw.moduleCode || idCode),
        title: String(raw.title ?? ''),
        module: String(raw.module ?? ''),
        subModule: String(raw.subModule ?? ''),
        priority: String(raw.priority ?? ''),
        category: String(raw.category ?? ''),
        tags: asArray(raw.tags),
        taskIds: [...new Set([...asArray(raw.taskId), ...asArray(raw.linkedTaskIds)].flatMap(s => s.match(/SI4-[TI]\d+/g) ?? []))],
        supersedes: asArray(raw.supersedes).flatMap(s => s.match(/TC-[A-Z0-9]+-\d+/g) ?? []),
        lastResult: String(raw.lastResult ?? ''),
        file: f,
        fileDate: fileDateOf(path.join(CASES_DIR, f)),
      });
    }
  }
  return { rows, files, dupInFile };
}

/** IDs mentioned in the committed Markdown library. Used when reports/ is missing (fresh clone). */
export function loadDocIds(): Set<string> {
  const ids = new Set<string>();
  let files: string[] = [];
  try { files = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('.md')); } catch { return ids; }
  for (const f of files) {
    const text = fs.readFileSync(path.join(DOCS_DIR, f), 'utf8');
    for (const m of text.matchAll(/TC-[A-Z0-9]+-\d+/g)) ids.add(m[0]);
  }
  return ids;
}

/** One entry per (id, fp). The representative row is the newest file's. */
export interface UniqueCase extends CaseRow { files: string[]; lastPassedDate?: string }
export function uniqueCases(rows: CaseRow[]): UniqueCase[] {
  const map = new Map<string, UniqueCase>();
  for (const r of [...rows].sort((a, b) => a.fileDate.localeCompare(b.fileDate) || a.file.localeCompare(b.file))) {
    const k = key(r.id, r.fp);
    const prev = map.get(k);
    const passed = r.lastResult.toLowerCase() === 'passed' ? r.fileDate : undefined;
    map.set(k, { ...r, files: [...(prev?.files ?? []), r.file], lastPassedDate: passed ?? prev?.lastPassedDate });
  }
  return [...map.values()];
}

// ── committed files ─────────────────────────────────────────────────────────
export const loadLedger = (): Ledger => readJson<Ledger>(LEDGER_FILE, { schemaVersion: 1, cases: {} });
export const loadRegistry = (): Registry => readJson<Registry>(REGISTRY_FILE, { schemaVersion: 1, modules: {} });
export const loadSnapshot = (): Snapshot => readJson<Snapshot>(SNAPSHOT_FILE, { schemaVersion: 1, updatedAt: '', cases: [] });

function writeFileSafe(file: string, text: string): void {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, text);
  fs.renameSync(tmp, file);
}
export function saveLedger(l: Ledger): void {
  const sorted: Record<string, LedgerEntry> = {};
  for (const k of Object.keys(l.cases).sort()) sorted[k] = l.cases[k];
  writeFileSafe(LEDGER_FILE, JSON.stringify({ schemaVersion: 1, cases: sorted }, null, 2) + '\n');
}
export function saveRegistry(r: Registry): void {
  const sorted: Record<string, ModuleEntry> = {};
  for (const k of Object.keys(r.modules).sort()) sorted[k] = r.modules[k];
  writeFileSafe(REGISTRY_FILE, JSON.stringify({ schemaVersion: 1, modules: sorted }, null, 2) + '\n');
}
/** One case per line, so a diff shows exactly which cases were added. */
export function saveSnapshot(s: Snapshot): void {
  const lines = [...s.cases].sort((a, b) => a[0].localeCompare(b[0], 'en', { numeric: true }) || a[1].localeCompare(b[1])).map(r => '    ' + JSON.stringify(r));
  writeFileSafe(SNAPSHOT_FILE, `{\n  "schemaVersion": 1,\n  "updatedAt": ${JSON.stringify(s.updatedAt)},\n  "cases": [\n${lines.join(',\n')}\n  ]\n}\n`);
}

/** Add lifecycle fields to cases before they are rendered, so retired / needs-review cases are visibly marked. */
export function withLifecycle<T extends Record<string, unknown>>(cases: T[]): T[] {
  const ledger = loadLedger();
  return cases.map(c => {
    const e = typeof c.id === 'string' ? ledger.cases[key(c.id, fingerprint(c.title))] : undefined;
    if (!e || e.status === 'active') return c;
    return { ...c, lifecycleStatus: e.status, ...(e.replacedBy ? { replacedBy: e.replacedBy } : {}), ...(e.reason ? { lifecycleReason: e.reason } : {}) };
  });
}

// ── git signals (optional) ──────────────────────────────────────────────────
export const APP_DIR = process.env.SIMERP_APP_DIR || '/home/subham/SIMERP DEV';
export interface Commit { date: string; subject: string }

export function gitLog(repo: string, since: string, paths: string[] = []): Commit[] | null {
  if (!fs.existsSync(path.join(repo, '.git'))) return null;
  let ref = 'HEAD';
  try { execFileSync('git', ['-C', repo, 'rev-parse', '--verify', '-q', 'origin/development'], { stdio: 'ignore' }); ref = 'origin/development'; } catch { /* use HEAD */ }
  try {
    const out = execFileSync('git', ['-C', repo, 'log', ref, `--since=${since}`, '--format=%cs%x09%s', ...(paths.length ? ['--', ...paths] : [])], {
      encoding: 'utf8', timeout: 30_000, maxBuffer: 32 * 1024 * 1024,
    });
    return out.split('\n').filter(Boolean).map(l => { const [date, ...rest] = l.split('\t'); return { date, subject: rest.join('\t') }; });
  } catch { return null; }
}

export function daysBetween(from: string, to: string): number {
  return Math.round((new Date(to).getTime() - new Date(from).getTime()) / 86_400_000);
}
