/**
 * Task ↔ test links: every past test case, spec, report and finding tied to the Zoho task it
 * was written for — down to the individual TC ids. Rule-based, no AI.
 *
 * Evidence, strongest first:
 *   case-task      a test case in reports/test-cases/*.json carries the task in its `taskId`
 *                  (a Zoho id like 688906000094274428, or text like "SI4-T1267 / SI4-T1446")
 *   tag            a test in a QA report is tagged @T1549
 *   file-name      a test-case doc / QA report / finding is named after the task (…-t1549-retest.md)
 *   requirement    a requirements JSON has the task as taskId (module-level)
 *   manual         linked by hand on the dashboard or in the QA Workspace (module-level, task-links.json)
 * Files that merely list many task keys are recorded as "mentioned in" only — never as test links.
 *
 * Sources that are not Zoho tasks (DOC-…, FRD-…) can be mapped to a task by hand
 * (reports/ops/data/source-links.json).
 */

import * as fs from 'fs';
import * as path from 'path';
import { buildIndex, LINKS_FILE } from '../../ui/indexer';
import { ROOT, OPS_DIR, WorkSnapshot, readJson, writeJson } from './store';
import { reportsIndex } from './suite';

export const SOURCE_LINKS = path.join(OPS_DIR, 'data/source-links.json');

export type Evidence = 'case-task' | 'tag' | 'file-name' | 'requirement' | 'manual';

export interface TaskModuleLink {
  code: string; name: string;
  caseIds: string[];            // exact cases (empty for module-level links)
  automated: number;            // of caseIds, how many have a spec
  evidence: { kind: Evidence; file?: string }[];
  last: { report: string; title: string; at: string; passed: number; failed: number; total: number } | null;
}

export interface TaskLinks {
  key: string;                  // SI4-T1549 / SI4-I483
  kind: 'task' | 'bug';
  zohoId?: string;
  inZoho: boolean;
  title: string; status?: { id: string; name: string; color?: string; closed: boolean }; owners: string[]; mine: boolean;
  modules: TaskModuleLink[];
  docs: string[];               // test-case docs + findings named after the task
  reports: string[];            // QA reports that ran its tests
  mentionedIn: string[];        // weak: files listing the key among many others
  caseTotal: number; automatedTotal: number;
}

export interface UnmappedSource { source: string; codes: Record<string, number>; files: string[]; mappedTo?: string }

const codeOf = (id: string) => /^TC-([A-Z]{2,12})-/.exec(id)?.[1] ?? '';
const shortOf = (key: string) => key.replace(/^SI4-/i, '').toUpperCase();

let cache: { at: number; data: ReturnType<typeof compute> } | null = null;

/** TC ids that have an automated spec (appear in a test title under tests/e2e). */
function automatedIds(): Set<string> {
  const ids = new Set<string>();
  const walk = (dir: string) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.spec.ts')) for (const m of fs.readFileSync(p, 'utf8').matchAll(/\bTC-[A-Z]{2,12}-\d+\b/g)) ids.add(m[0]);
    }
  };
  const root = path.join(ROOT, 'tests/e2e');
  if (fs.existsSync(root)) walk(root);
  return ids;
}

function compute(work: WorkSnapshot) {
  // Tasks and bugs both: bug re-tests (SI4-I483 …) have their own cases too.
  type Item = { id: string; key: string; title: string; status: TaskLinks['status']; owners: string[]; mine: boolean; kind: 'task' | 'bug' };
  const items: Item[] = [
    ...work.tasks.map(t => ({ id: t.id, key: t.key, title: t.title, status: t.status, owners: t.owners.map(o => o.name), mine: t.mine.length > 0, kind: 'task' as const })),
    ...work.bugs.map(b => ({ id: b.id, key: b.key, title: b.title, status: b.status, owners: b.assignee ? [b.assignee.name] : [], mine: b.mine.length > 0, kind: 'bug' as const })),
  ];
  const byId = new Map(items.map(t => [t.id, t]));
  const byShort = new Map(items.map(t => [shortOf(t.key), t]));
  const { modules } = buildIndex();
  const automated = automatedIds();
  const sourceMap = readJson<Record<string, string>>(SOURCE_LINKS, {});

  type Acc = { cases: Map<string, Set<string>>; evidence: Map<string, Map<string, { kind: Evidence; file?: string }>>; docs: Set<string>; reports: Set<string>; mentioned: Set<string>; zohoId?: string };
  const acc = new Map<string, Acc>();
  const get = (short: string) => { let a = acc.get(short); if (!a) { a = { cases: new Map(), evidence: new Map(), docs: new Set(), reports: new Set(), mentioned: new Set() }; acc.set(short, a); } return a; };
  const addCase = (short: string, id: string, kind: Evidence, file: string) => {
    const code = codeOf(id); if (!code) return;
    const a = get(short);
    (a.cases.get(code) ?? a.cases.set(code, new Set()).get(code)!).add(id);
    const ev = a.evidence.get(code) ?? a.evidence.set(code, new Map()).get(code)!;
    ev.set(`${kind}|${file}`, { kind, file });
  };
  const addModule = (short: string, code: string, kind: Evidence, file?: string) => {
    const a = get(short);
    if (!a.cases.has(code)) a.cases.set(code, new Set());
    const ev = a.evidence.get(code) ?? a.evidence.set(code, new Map()).get(code)!;
    ev.set(`${kind}|${file ?? ''}`, { kind, file });
  };
  /** Task keys inside a taskId value: Zoho ids, SI4-T…, T…; DOC-/FRD- sources go through the manual map. */
  const refsOf = (value: string): string[] => {
    const out = new Set<string>();
    for (const m of value.matchAll(/\b(\d{15,20})\b/g)) { const t = byId.get(m[1]); if (t) out.add(shortOf(t.key)); }
    for (const m of value.matchAll(/\b(?:SI4-)?([TI]\d{2,5})\b/gi)) out.add(m[1].toUpperCase());
    const mapped = sourceMap[value.trim()];
    if (mapped) out.add(shortOf(mapped));
    return [...out];
  };
  const unmapped = new Map<string, UnmappedSource>();

  // 1. Test-case JSONs: per-case taskId.
  const casesDir = path.join(ROOT, 'reports/test-cases');
  for (const f of fs.existsSync(casesDir) ? fs.readdirSync(casesDir).filter(x => x.endsWith('.json')) : []) {
    const rel = `reports/test-cases/${f}`;
    let data: any; try { data = JSON.parse(fs.readFileSync(path.join(casesDir, f), 'utf8')); } catch { continue; }
    const fileShort = (/\b([ti]\d{3,5})\b/i.exec(f)?.[1] ?? '').toUpperCase();
    const visit = (o: any, inherited?: string) => {
      if (Array.isArray(o)) return o.forEach(x => visit(x, inherited));
      if (!o || typeof o !== 'object') return;
      const own = typeof o.taskId === 'string' && o.taskId.trim() ? o.taskId.trim() : inherited;
      if (typeof o.id === 'string' && /^TC-[A-Z]{2,12}-\d+$/.test(o.id)) {
        const refs = own ? refsOf(own) : [];
        for (const r of refs) addCase(r, o.id, 'case-task', rel);
        if (fileShort) addCase(fileShort, o.id, 'file-name', rel);
        if (own && !refs.length) {
          const u: UnmappedSource = unmapped.get(own) ?? { source: own, codes: {}, files: [] };
          const c = codeOf(o.id); u.codes[c] = (u.codes[c] ?? 0) + 1;
          if (!u.files.includes(rel)) u.files.push(rel);
          unmapped.set(own, u);
        }
      }
      for (const v of Object.values(o)) if (v && typeof v === 'object') visit(v, own);
    };
    visit(data);
  }

  // 2. Docs named after a task (test-case docs + findings), and weak mentions.
  for (const dir of ['docs/test-cases', 'docs/findings']) {
    const abs = path.join(ROOT, dir);
    for (const f of fs.existsSync(abs) ? fs.readdirSync(abs).filter(x => x.endsWith('.md')) : []) {
      const rel = `${dir}/${f}`;
      const text = fs.readFileSync(path.join(abs, f), 'utf8');
      const named = [...f.matchAll(/\b(?:si4-)?([ti]\d{3,5})\b/gi)].map(m => m[1].toUpperCase());
      for (const k of named) {
        get(k).docs.add(rel);
        for (const m of text.matchAll(/\bTC-[A-Z]{2,12}-\d+\b/g)) addCase(k, m[0], 'file-name', rel);
      }
      const mentioned = new Set([...text.matchAll(/\b(?:SI4-)?([TI]\d{3,5})\b/g)].map(m => m[1].toUpperCase()));
      for (const k of mentioned) if (!named.includes(k)) get(k).mentioned.add(rel);
    }
  }

  // 3. QA reports: tests tagged @T…, reports named after a task.
  const { qa } = reportsIndex();
  for (const r of qa) {
    for (const [k, ids] of Object.entries(r.tagged ?? {})) { for (const id of ids) addCase(k, id, 'tag', `reports/html/${r.file}`); get(k).reports.add(r.file); }
    for (const m of r.file.matchAll(/\b(?:si4-)?([ti]\d{3,5})\b/gi)) {
      const k = m[1].toUpperCase();
      for (const id of Object.keys(r.results)) addCase(k, id, 'file-name', `reports/html/${r.file}`);
      get(k).reports.add(r.file);
    }
  }

  // 4. Requirements JSON taskId → module; 5. manual links (module-level).
  const reqDir = path.join(ROOT, 'reports/requirements');
  for (const f of fs.existsSync(reqDir) ? fs.readdirSync(reqDir).filter(x => x.endsWith('.json')) : []) {
    const r = readJson<any>(path.join(reqDir, f), null);
    const code = r?.moduleCode;
    if (!code) continue;
    for (const ref of [r.taskId, ...(Array.isArray(r.linkedTaskIds) ? r.linkedTaskIds : [])].filter(Boolean)) for (const k of refsOf(String(ref))) addModule(k, code, 'requirement', `reports/requirements/${f}`);
  }
  const manual = readJson<Record<string, string[]>>(LINKS_FILE, {});
  for (const [zohoId, codes] of Object.entries(manual)) {
    const t = byId.get(zohoId);
    if (t) for (const c of codes) addModule(shortOf(t.key), c, 'manual');
  }

  // Results of each task's own cases: the newest QA report that ran any of them.
  const newestFirst = qa.slice().sort((a, b) => b.at.localeCompare(a.at));
  const out: TaskLinks[] = [];
  for (const [short, a] of acc) {
    const t = byShort.get(short);
    const mods: TaskModuleLink[] = [];
    for (const [code, ids] of a.cases) {
      if (!modules.get(code)?.caseCount && !ids.size) continue; // catch-all buckets (GEN) with no suite
      const caseIds = [...ids].sort((x, y) => Number(x.split('-').pop()) - Number(y.split('-').pop()));
      let last: TaskModuleLink['last'] = null;
      if (caseIds.length) {
        // Newest report that ran a real share (≥25% of the best coverage) of this task's cases.
        const cover = newestFirst.map(r => ({ r, ran: caseIds.filter(id => r.results[id]) })).filter(x => x.ran.length);
        const best = Math.max(0, ...cover.map(x => x.ran.length));
        for (const x of cover) a.reports.add(x.r.file);
        const pick = cover.find(x => x.ran.length >= Math.max(1, Math.ceil(best * 0.25)));
        if (pick) {
          const res = pick.r.results;
          last = { report: pick.r.file, title: pick.r.title, at: pick.r.at, total: pick.ran.length,
            passed: pick.ran.filter(id => res[id] === 'passed' || res[id] === 'flaky').length,
            failed: pick.ran.filter(id => res[id] === 'failed').length };
        }
      }
      mods.push({
        code, name: modules.get(code)?.name ?? code, caseIds,
        automated: caseIds.filter(id => automated.has(id)).length,
        evidence: [...(a.evidence.get(code)?.values() ?? [])], last,
      });
    }
    if (!mods.length && !a.docs.size) continue; // mentioned only — not linked
    mods.sort((x, y) => y.caseIds.length - x.caseIds.length);
    out.push({
      key: t?.key ?? `SI4-${short}`, zohoId: t?.id, inZoho: Boolean(t),
      kind: t?.kind ?? (short.startsWith('I') ? 'bug' : 'task'),
      title: t?.title ?? 'Not found in the SimERP Zoho project (another project, or deleted)', status: t?.status, owners: t?.owners ?? [], mine: Boolean(t?.mine),
      modules: mods, docs: [...a.docs].sort(), reports: [...a.reports].sort().reverse(), mentionedIn: [...a.mentioned].sort(),
      caseTotal: mods.reduce((n, m) => n + m.caseIds.length, 0), automatedTotal: mods.reduce((n, m) => n + m.automated, 0),
    });
  }
  out.sort((x, y) => Number(y.key.replace(/\D/g, '')) - Number(x.key.replace(/\D/g, '')));
  return { tasks: out, unmapped: [...unmapped.values()].map(u => ({ ...u, mappedTo: sourceMap[u.source] })) };
}

export function taskLinks(work: WorkSnapshot) {
  if (!cache || Date.now() - cache.at > 60_000) cache = { at: Date.now(), data: compute(work) };
  return cache.data;
}

/** Map a non-Zoho source (DOC-…, FRD-…) to a task key, or clear it. */
export function mapSource(source: string, key: string | null): void {
  const m = readJson<Record<string, string>>(SOURCE_LINKS, {});
  if (key) m[source] = key; else delete m[source];
  writeJson(SOURCE_LINKS, m);
  cache = null;
}

export const resetTaskLinks = () => { cache = null; };
