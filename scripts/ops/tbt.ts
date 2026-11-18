/**
 * "To be tested" queue: every Zoho task/bug in To-be-tested status, each linked to the test
 * suite's modules (TC-<CODE>) so it can be re-tested from the ops dashboard. Rule-based, no AI.
 *
 * A module is linked to an item when (strongest first):
 *   1. it was linked by hand — stored in the QA Workspace's own task-links.json, so both apps agree
 *   2. the QA Workspace already ties the Zoho task to it (analysed requirement)
 *   3. a QA report has tests tagged with the key (@T1549)
 *   4. a test-case doc / finding / spec mentions the item key (SI4-T1549 or T1549) and TC-<CODE> ids
 * Modules whose name shares a word stem with the title are offered as suggestions only.
 */

import * as fs from 'fs';
import * as path from 'path';
import { buildIndex, LINKS_FILE, HISTORY_DIR, ModuleInfo } from '../../ui/indexer';
import { ROOT, TBT_RUNS, WorkSnapshot, readJson, writeJson, isToBeTested } from './store';
import { keysFromReports } from './suite';
import type { TaskLinks } from './task-links';

export interface ModuleLink {
  code: string;
  name: string;
  caseCount: number;
  how: 'cases' | 'manual' | 'requirement' | 'report-tag' | 'mentioned';
  taskCases?: number;                                   // this item's own linked cases in the module
  taskLast?: { at: string; passed: number; failed: number; total: number; report: string } | null;
  lastRun: { at: string; historyId: string; status: string; total: number; passed: number; failed: number; flaky: number; skipped: number } | null;
}

export interface TbtItem {
  kind: 'task' | 'bug';
  id: string;
  key: string;
  title: string;
  status: { id: string; name: string; color?: string };
  people: string[];          // owners (task) or assignee (bug)
  reporter?: string;
  mine: boolean;
  updatedAt: string;
  url: string;
  modules: ModuleLink[];
  suggested: { code: string; name: string }[];
  docs: string[];            // repo files that mention the key
  runs: { historyId: string; code: string; at: string; kind?: 'run' | 'generate' }[];
}

const SCAN_DIRS = ['docs/test-cases', 'docs/findings', 'reports/test-cases', 'reports/requirements', 'tests/e2e'];
const STOP = new Set(['with', 'from', 'that', 'this', 'when', 'should', 'into', 'have', 'only', 'issue', 'issues', 'functionality', 'development', 'update', 'showing', 'shown', 'being', 'their', 'there', 'users', 'user', 'page', 'details', 'module', 'screen', 'prod']);

let indexCache: { at: number; data: ReturnType<typeof buildIndex> } | null = null;
function index() {
  if (!indexCache || Date.now() - indexCache.at > 60_000) indexCache = { at: Date.now(), data: buildIndex() };
  return indexCache.data;
}

type Mention = { files: Set<string>; codes: Map<string, number>; namedCodes: Map<string, number> };
let mentionCache: { at: number; byShort: Map<string, Mention> } | null = null;

/** One pass over the scanned folders: which files mention which item keys, and which TC codes those files carry. */
function mentions() {
  if (mentionCache && Date.now() - mentionCache.at < 60_000) return mentionCache.byShort;
  const byShort = new Map<string, Mention>();
  const walk = (dir: string) => {
    const abs = path.join(ROOT, dir);
    if (!fs.existsSync(abs)) return;
    for (const e of fs.readdirSync(abs, { withFileTypes: true })) {
      const rel = path.join(dir, e.name);
      if (e.isDirectory()) { walk(rel); continue; }
      if (!/\.(md|json|ts)$/.test(e.name)) continue;
      let text: string;
      try { text = fs.readFileSync(path.join(ROOT, rel), 'utf8'); } catch { continue; }
      const keys = new Set([...text.matchAll(/\b(?:SI4-)?([TI]\d{2,5})\b/g)].map(m => m[1]));
      if (!keys.size) continue;
      const codes = new Map<string, number>();
      for (const m of text.matchAll(/\bTC-([A-Z]{2,12})-\d+/g)) codes.set(m[1], (codes.get(m[1]) ?? 0) + 1);
      for (const k of keys) {
        const entry = byShort.get(k) ?? { files: new Set<string>(), codes: new Map<string, number>(), namedCodes: new Map<string, number>() };
        entry.files.add(rel);
        // A file named after the item (…-t1549-retest.md) is about it; others just mention it in passing.
        const target = e.name.toLowerCase().includes(k.toLowerCase()) ? entry.namedCodes : entry.codes;
        for (const [c, n] of codes) target.set(c, (target.get(c) ?? 0) + n);
        byShort.set(k, entry);
      }
    }
  };
  SCAN_DIRS.forEach(walk);
  mentionCache = { at: Date.now(), byShort };
  return byShort;
}

const stems = (s: string) => new Set(s.toLowerCase().split(/[^a-z]+/).filter(w => w.length >= 4 && !STOP.has(w)).map(w => w.slice(0, 6)));

/** Newest run that really tested the module — same 25%-of-biggest-run rule as the QA Workspace (ui/server.ts substantialRuns). */
function lastRunFor(code: string, history: any[]): ModuleLink['lastRun'] {
  const withCode = history.filter(x => x.isTestRun && x.finishedAt && x.stats?.[code]?.total > 0);
  const max = Math.max(0, ...withCode.map(x => x.stats[code].total));
  const h = withCode.find(x => x.stats[code].total >= Math.max(1, Math.ceil(max * 0.25)));
  if (!h) return null;
  const s = h.stats[code];
  return { at: h.finishedAt, historyId: h.id, status: h.status, total: s.total, passed: s.passed, failed: s.failed, flaky: s.flaky, skipped: s.skipped };
}

export function buildTbt(work: WorkSnapshot, linked: TaskLinks[] = []): { items: TbtItem[]; modules: { code: string; name: string; caseCount: number }[] } {
  const { tasks: indexed, modules } = index();
  const manual = readJson<Record<string, string[]>>(LINKS_FILE, {});
  const history = readJson<any[]>(path.join(HISTORY_DIR, 'history.json'), []);
  const runs = readJson<Record<string, TbtItem['runs']>>(TBT_RUNS, {});
  const found = mentions();
  const tagged = keysFromReports();
  const moduleList = [...modules.values()].filter(m => m.caseCount > 0);

  const link = (m: ModuleInfo, how: ModuleLink['how']): ModuleLink =>
    ({ code: m.code, name: m.name, caseCount: m.caseCount, how, lastRun: lastRunFor(m.code, history) });

  const raw = [
    ...work.tasks.filter(t => isToBeTested(t.status.name)).map(t => ({ kind: 'task' as const, x: t, people: t.owners.map(o => o.name), reporter: t.createdBy?.name })),
    ...work.bugs.filter(b => isToBeTested(b.status.name)).map(b => ({ kind: 'bug' as const, x: b, people: b.assignee ? [b.assignee.name] : [], reporter: b.reporter?.name })),
  ];

  const items = raw.map(({ kind, x, people, reporter }): TbtItem => {
    const short = x.key.replace(/^SI4-/, '');
    const links = new Map<string, ModuleLink>();
    // Strongest: the item's own test cases from the task-links index.
    for (const tm of linked.find(l => l.key === x.key)?.modules ?? []) {
      const m = modules.get(tm.code);
      if (!m) continue;
      links.set(tm.code, { ...link(m, tm.caseIds.length ? 'cases' : tm.evidence.some(e => e.kind === 'manual') ? 'manual' : 'requirement'), taskCases: tm.caseIds.length, taskLast: tm.last });
    }
    for (const c of manual[x.id] ?? []) { const m = modules.get(c); if (m && !links.has(c)) links.set(c, link(m, 'manual')); }
    for (const c of indexed.find(t => t.id === x.id)?.modules ?? []) { const m = modules.get(c); if (m && !links.has(c)) links.set(c, link(m, 'requirement')); }
    for (const c of tagged.get(short) ?? []) { const m = modules.get(c); if (m && m.caseCount > 0 && !links.has(c)) links.set(c, link(m, 'report-tag')); }
    const mention = found.get(short);
    // Files named after the item: up to 2 codes. Otherwise only the single most-cited code.
    const pool = mention?.namedCodes.size ? [...mention.namedCodes].sort((a, b) => b[1] - a[1]).slice(0, 2)
      : [...(mention?.codes ?? new Map<string, number>())].sort((a, b) => b[1] - a[1]).slice(0, 1);
    for (const [c] of pool) {
      const m = modules.get(c);
      if (m && m.caseCount > 0 && !links.has(c)) links.set(c, link(m, 'mentioned'));
    }
    const titleStems = stems(x.title);
    const suggested = links.size ? [] : moduleList
      .map(m => ({ m, score: [...stems(m.name)].filter(s => titleStems.has(s)).length }))
      .filter(s => s.score > 0).sort((a, b) => b.score - a.score || b.m.caseCount - a.m.caseCount).slice(0, 3)
      .map(s => ({ code: s.m.code, name: s.m.name }));
    return {
      kind, id: x.id, key: x.key, title: x.title, status: x.status, people, reporter,
      mine: x.mine.length > 0, updatedAt: x.updatedAt, url: x.url,
      modules: [...links.values()], suggested,
      docs: [...(mention?.files ?? [])].filter(f => !f.startsWith('reports/')).sort().slice(0, 8),
      runs: (runs[x.key] ?? []).slice(0, 10),
    };
  }).sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''));

  return { items, modules: moduleList.map(m => ({ code: m.code, name: m.name, caseCount: m.caseCount })).sort((a, b) => a.name.localeCompare(b.name)) };
}

/** Add/remove a manual link — written to the QA Workspace's task-links.json (same format it uses). */
export function setLink(zohoId: string, code: string, remove: boolean): void {
  const links = readJson<Record<string, string[]>>(LINKS_FILE, {});
  const set = new Set(links[zohoId] ?? []);
  if (remove) set.delete(code); else set.add(code);
  links[zohoId] = [...set];
  writeJson(LINKS_FILE, links);
  indexCache = null;
}

export function recordRun(key: string, historyId: string, code: string, kind: 'run' | 'generate' = 'run'): void {
  const runs = readJson<Record<string, TbtItem['runs']>>(TBT_RUNS, {});
  runs[key] = [{ historyId, code, at: new Date().toISOString(), kind }, ...(runs[key] ?? [])].slice(0, 20);
  writeJson(TBT_RUNS, runs);
}
