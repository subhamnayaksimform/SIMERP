/**
 * Test-case lifecycle CLI — keeps the case library honest as modules, names and screens change.
 * Plain script: no Claude, no MCP, no network except an optional app-version probe.
 *
 *   npm run cases:stale                       # which cases are probably out of date, and why (report only)
 *   npm run cases:stale -- --days=30 --module=EMPGOL --limit=100
 *   npm run cases:check                       # safety gate: fails if a case was lost or an ID was reused
 *   npm run cases:snapshot                    # record every (id, fingerprint) seen so far (additive only)
 *   npm run cases:next-id -- EMPDET [--count=5]   # next free ID for a code — never reuse an ID
 *   npm run cases:mark -- TC-EMPDET-001 --status=verified [--version=6.8.0] [--fp=abcd1234]
 *   npm run cases:mark -- TC-EMPDET-001 --status=needs-review --reason="Goals tab moved"
 *   npm run cases:retire -- TC-EMPDET-001 --reason="..." --replaced-by=TC-EMPDET-900
 *   npm run cases:retire -- TC-X-1 --reason="..." --feature-removed="Removed in 6.9.0"   # no replacement
 *   npm run cases:reactivate -- TC-EMPDET-001 --reason="Feature came back"
 *   npm run cases:from-results -- reports/results/results.json [--version=6.8.0]   # passed tests -> "verified today"
 *   npm run cases:registry-sync               # add new module codes to the registry (never overwrites your edits)
 *
 * Safety rules (enforced here, covered by `npm run cases:selftest`):
 *   - Nothing is ever deleted or edited in the case files. Retiring only writes a ledger entry.
 *   - A retired case needs a reason. A high-priority / smoke / regression / security case also needs a
 *     replacement case or a stated feature removal.
 *   - `check` fails when a case that was in the snapshot has vanished, or an existing ID now holds a different case.
 *   - `snapshot` never forgets a case and refuses to bless a reused ID unless you pass --accept-reused-ids.
 */
import * as fs from 'fs';
import * as path from 'path';
import {
  APP_DIR, KB_DIR, OUT_DIR, ROOT, Commit, LedgerEntry, LifecycleStatus, UniqueCase,
  daysBetween, gitLog, isProtected, key, loadDocIds, loadLedger, loadRegistry, loadRows, loadSnapshot,
  normName, normTitle, saveLedger, saveRegistry, saveSnapshot, today, uniqueCases,
} from './lib/case-lifecycle';

// ── args ────────────────────────────────────────────────────────────────────
interface Args { cmd: string; pos: string[]; opt: Record<string, string> }
function parseArgs(argv: string[]): Args {
  const pos: string[] = [];
  const opt: Record<string, string> = {};
  for (const a of argv) {
    if (a.startsWith('--')) { const [k, ...v] = a.slice(2).split('='); opt[k] = v.length ? v.join('=') : 'true'; } else pos.push(a);
  }
  return { cmd: pos[0] ?? 'stale', pos: pos.slice(1), opt };
}
const who = (): string => process.env.USER || process.env.USERNAME || 'unknown';
const fail = (msg: string): never => { console.error(`✗ ${msg}`); process.exit(1); };

async function appVersion(explicit?: string): Promise<string | undefined> {
  if (explicit) return explicit;
  try {
    const base = (process.env.API_BASE_URL || 'https://simerp-dev-api.simform.solutions').replace(/\/$/, '');
    const r = await fetch(`${base}/api/v1/health-check`, { signal: AbortSignal.timeout(5000) });
    return r.headers.get('x-api-version') ?? undefined;
  } catch { return undefined; }
}

// ── module registry ─────────────────────────────────────────────────────────
type Seed = [code: string, module: string, name: string, folder: string, route: string | null, fe: string[], be: string[]];
const SEEDS: Seed[] = [
  ['EMPDET', 'Employee', 'Employee Details', 'employee', '/employee', ['src/components/employee'], ['src/modules/employees']],
  ['EMPSKL', 'Employee', 'Skills', 'employee', '/employee/skills', ['src/components/skills'], ['src/modules/skills']],
  ['EMPGOL', 'Employee', 'Goals', 'employee', '/employee/goals', ['src/components/goal'], ['src/modules/goals', 'src/modules/employee-goals']],
  ['EMPALC', 'Employee', 'Allocation Correction', 'employee', null, ['src/components/allocation-correction'], ['src/modules/allocation-verification']],
  ['EMPRTF', 'Employee', 'Ratings & Feedback', 'employee', '/employee-ratings', ['src/components/employee-ratings'], ['src/modules/employee-ratings']],
  ['EMPWLC', 'Employee', 'Working Location (WFO/WFH)', 'employee', '/working-location', ['src/components/working-location'], ['src/modules/working-location']],
  ['EMPCRT', 'Employee', 'Certifications', 'employee', '/employee/certifications', ['src/components/certifications'], ['src/modules/certifications']],
  ['TEAMDET', 'Team', 'Team Details', 'team', null, ['src/components/team', 'src/components/teams'], ['src/modules/teams']],
  ['TEAMWKU', 'Team', 'Weekly Updates', 'team', null, ['src/components/weekly-updates'], ['src/modules/weekly-update', 'src/modules/weekly-update-config']],
  ['PROJDET', 'Projects', 'Project Details', 'projects', '/projects', ['src/components/project'], ['src/modules/projects']],
  ['PROJTCH', 'Projects', 'Tech Stack', 'projects', '/projects/tech-stack', ['src/components/project'], ['src/modules/tech-stack']],
  ['DEPTSET', 'Department', 'Department Settings', 'department', null, ['src/components/department'], ['src/modules/departments', 'src/modules/department-stacks']],
  ['DEPTCMP', 'Department', 'Competencies', 'department', null, ['src/components/competencies'], ['src/modules/competencies']],
  ['ADMROL', 'Admin', 'Roles & Permissions', 'admin', null, ['src/components/roles-and-permissions'], ['src/modules/roles']],
  ['ADMUSR', 'Admin', 'Assign User Roles', 'admin', '/admin/assign-user-roles', ['src/components/roles-and-permissions'], ['src/modules/employee-roles']],
  ['ADMCTR', 'Admin', 'Contractors', 'admin', null, ['src/components/contractors'], ['src/modules/contractors']],
  ['HELP', 'Help & Support', 'Help & Support', 'help-support', '/help', ['src/components/help'], ['src/modules/releases']],
  ['PMPROJ', 'PM & PMO', 'PM Projects', 'pm-pmo', '/my-projects', ['src/components/pm-projects'], ['src/modules/pm-projects']],
  ['ALCTKT', 'PM & PMO', 'Allocation Requests', 'pm-pmo', '/my-tickets', ['src/components/tickets'], ['src/modules/allocation-tickets']],
  ['UTLPRI', 'Utilization Priority', 'Utilization Priority', 'utilization-priority', null, ['src/components/utilization-priority'], ['src/modules/utilization-priority']],
  ['DASH', 'Dashboard', 'Dashboard', 'dashboard', null, ['src/components/dashboard'], ['src/modules/dashboard']],
  ['OPPTY', 'Pre-sales', 'Opportunity Allocation', 'presales', '/pre-sales', ['src/components/opportunities'], ['src/modules/opportunities']],
  ['OPPM', 'Pre-sales', 'Opportunity Allocation (manual)', 'presales', '/pre-sales', ['src/components/opportunities'], ['src/modules/opportunities']],
  ['OPPRT', 'Pre-sales', 'Opportunity Allocation (interview re-test)', 'presales', '/pre-sales', ['src/components/opportunities'], ['src/modules/opportunities']],
  ['AUTH', 'Authentication', 'Login', 'auth', '/dev-login', [], ['src/modules/auth']],
];

function registrySync(): void {
  const reg = loadRegistry();
  const cases = uniqueCases(loadRows().rows);
  const observed: Record<string, Record<string, number>> = {};
  const byCode: Record<string, { mods: Record<string, number>; subs: Record<string, number> }> = {};
  for (const c of cases) {
    const o = (observed[c.code] ??= {});
    for (const n of [c.module, c.subModule]) if (n) o[n] = (o[n] ?? 0) + 1;
    const b = (byCode[c.code] ??= { mods: {}, subs: {} });
    if (c.module) b.mods[c.module] = (b.mods[c.module] ?? 0) + 1;
    if (c.subModule) b.subs[c.subModule] = (b.subs[c.subModule] ?? 0) + 1;
  }
  const top = (r: Record<string, number>): string => Object.entries(r).sort((a, b) => b[1] - a[1])[0]?.[0] ?? '';
  let added = 0;
  for (const s of SEEDS) {
    if (reg.modules[s[0]]) continue;
    reg.modules[s[0]] = {
      module: s[1], name: s[2], folder: s[3], ...(s[4] ? { route: s[4] } : {}), aliases: [], status: 'live',
      appPaths: { frontend: s[5], backend: s[6] }, needsReview: true, notes: 'Seeded by registry-sync; confirm name, route and appPaths, then set needsReview to false.',
    }; added++;
  }
  for (const code of Object.keys(byCode)) {
    if (reg.modules[code]) continue;
    reg.modules[code] = { module: top(byCode[code].mods), name: top(byCode[code].subs) || top(byCode[code].mods), aliases: [], status: 'live', needsReview: true, notes: 'Added from observed cases; fill in route and appPaths.' }; added++;
  }
  for (const [code, entry] of Object.entries(reg.modules)) entry.observed = observed[code] ?? {};
  saveRegistry(reg);
  console.log(`✓ registry: ${Object.keys(reg.modules).length} module codes (${added} added). Edit ${path.relative(ROOT, path.join(KB_DIR, 'modules.json'))} to record renames in "aliases".`);
}

// ── snapshot ────────────────────────────────────────────────────────────────
function snapshot(opt: Record<string, string>): void {
  const { rows } = loadRows();
  if (!rows.length) fail('No case files found in reports/test-cases — nothing to snapshot.');
  const snap = loadSnapshot();
  const known = new Map<string, Set<string>>();
  for (const r of snap.cases) (known.get(r[0]) ?? known.set(r[0], new Set()).get(r[0]))!.add(r[1]);
  const have = new Set(snap.cases.map(r => key(r[0], r[1])));
  const reused: string[] = [];
  let added = 0;
  for (const c of uniqueCases(rows)) {
    if (have.has(key(c.id, c.fp))) continue;
    if (known.has(c.id)) reused.push(`${c.id} "${c.title.slice(0, 60)}" (${c.file})`);
    else { snap.cases.push([c.id, c.fp, c.priority, c.title.slice(0, 80)]); have.add(key(c.id, c.fp)); added++; }
  }
  if (reused.length && opt['accept-reused-ids'] !== 'true') {
    console.error(`✗ ${reused.length} case(s) reuse an ID that already holds a different case. Not recorded.\n  ${reused.slice(0, 15).join('\n  ')}\n  Give them new IDs (npm run cases:next-id -- <CODE>), or pass --accept-reused-ids if the old case really is gone.`);
    if (added) { snap.updatedAt = today(); saveSnapshot(snap); console.log(`  (recorded ${added} other new case(s))`); }
    process.exit(1);
  }
  if (reused.length) for (const c of uniqueCases(rows)) if (!have.has(key(c.id, c.fp))) { snap.cases.push([c.id, c.fp, c.priority, c.title.slice(0, 80)]); added++; }
  snap.updatedAt = today();
  saveSnapshot(snap);
  console.log(`✓ snapshot: ${snap.cases.length} cases recorded (${added} new).`);
}

// ── check (the safety gate) ─────────────────────────────────────────────────
function check(opt: Record<string, string>): void {
  const { rows, dupInFile } = loadRows();
  const cases = uniqueCases(rows);
  const snap = loadSnapshot();
  const ledger = loadLedger();
  const docIds = loadDocIds();
  const current = new Set(cases.map(c => key(c.id, c.fp)));
  const currentIds = new Set(cases.map(c => c.id));
  const snapIds = new Set(snap.cases.map(r => r[0]));
  const errors: string[] = [];
  const warns: string[] = [];
  const hasJson = rows.length > 0;

  if (!snap.cases.length) errors.push('No snapshot yet. Run: npm run cases:snapshot');

  const known = new Map<string, Set<string>>();
  for (const [id, fp] of snap.cases) (known.get(id) ?? known.set(id, new Set()).get(id))!.add(fp);

  for (const [id, fp, , title] of snap.cases) {
    const k = key(id, fp);
    if (current.has(k)) continue;
    const e = ledger.cases[k];
    if (e && (e.status === 'retired' || e.status === 'superseded')) continue;
    const present = hasJson ? currentIds.has(id) : docIds.has(id);
    if (!present) errors.push(`LOST  ${id} "${title}" is in the snapshot but in no case file${hasJson ? '' : ' or Markdown doc'}, and is not retired.`);
    else if (hasJson) warns.push(`CHANGED  ${id} "${title}" — the ID still exists, but this exact case no longer does (title edited, or the ID was reused).`);
  }
  for (const c of cases) {
    const fps = known.get(c.id);
    if (fps && !fps.has(c.fp)) {
      const msg = `REUSED  ${c.id} now also holds "${c.title.slice(0, 70)}" (${c.file}); the snapshot has "${snap.cases.find(r => r[0] === c.id)?.[3]}". Use the next free ID: npm run cases:next-id -- ${c.code}`;
      (opt['allow-reuse'] === 'true' ? warns : errors).push(msg);
    }
  }
  for (const d of dupInFile) errors.push(`DUPLICATE  ${d.id} appears twice inside ${d.file} — one will overwrite the other in specs and reports.`);

  const existsAnywhere = (id: string): boolean => currentIds.has(id) || snapIds.has(id) || docIds.has(id);
  for (const [k, e] of Object.entries(ledger.cases)) {
    const id = k.split('#')[0];
    if (e.status === 'retired' || e.status === 'superseded') {
      if (!e.reason?.trim()) errors.push(`LEDGER  ${k} is retired without a reason.`);
      const c = cases.find(x => key(x.id, x.fp) === k);
      const prot = c ? isProtected(c) : (snap.cases.find(r => key(r[0], r[1]) === k)?.[2] ?? '').match(/critical|high/i) !== null;
      if (prot && !e.replacedBy && !e.featureRemoved) errors.push(`LEDGER  ${k} is a protected case retired with neither a replacement nor a stated feature removal.`);
      if (e.replacedBy && !existsAnywhere(e.replacedBy)) errors.push(`LEDGER  ${k} says it was replaced by ${e.replacedBy}, which does not exist.`);
    }
    if (!current.has(k) && !known.has(id)) warns.push(`ORPHAN  ledger entry ${k} matches no known case.`);
  }
  const fresh = cases.filter(c => !known.has(c.id)).length;
  if (fresh) warns.push(`NEW  ${fresh} case(s) are not in the snapshot yet. Run: npm run cases:snapshot`);
  if (!hasJson) warns.push('NOTE  reports/test-cases is empty here, so only the Markdown library was checked (IDs only).');

  for (const w of warns.slice(0, 40)) console.log(`! ${w}`);
  if (warns.length > 40) console.log(`! … and ${warns.length - 40} more warning(s)`);
  for (const e of errors.slice(0, 60)) console.error(`✗ ${e}`);
  if (errors.length > 60) console.error(`✗ … and ${errors.length - 60} more error(s)`);
  console.log(`\n${errors.length ? '✗ FAILED' : '✓ OK'} — ${snap.cases.length} snapshot cases, ${cases.length} current cases, ${errors.length} error(s), ${warns.length} warning(s).`);
  if (errors.length) process.exit(1);
}

// ── stale (report only) ─────────────────────────────────────────────────────
interface Reason { code: string; detail: string; info?: boolean }
interface Finding { c: UniqueCase; status: LifecycleStatus; reasons: Reason[]; verified?: string; protectedCase: boolean }

function staleReport(opt: Record<string, string>): void {
  const days = Number(opt.days ?? 45);
  const limit = Number(opt.limit ?? 60);
  const only = opt.module?.toUpperCase();
  const { rows } = loadRows();
  if (!rows.length) fail('No case files found in reports/test-cases.');
  const cases = uniqueCases(rows).filter(c => !only || c.code === only);
  const ledger = loadLedger();
  const registry = loadRegistry();
  const t = today();

  const fpsById = new Map<string, Set<string>>();
  for (const c of uniqueCases(rows)) (fpsById.get(c.id) ?? fpsById.set(c.id, new Set()).get(c.id))!.add(c.fp);
  const claimedBy = new Map<string, string[]>();
  for (const c of uniqueCases(rows)) for (const s of c.supersedes) (claimedBy.get(s) ?? claimedBy.set(s, []).get(s))!.push(c.id);

  const horizon = new Date(Date.now() - 180 * 86_400_000).toISOString().slice(0, 10);
  const repos = { frontend: path.join(APP_DIR, 'frontend'), backend: path.join(APP_DIR, 'backend') };
  // A commit that only touches tests/chores does not change behaviour; it is kept as a weaker signal (task-touched), never ignored.
  const isFunctional = (subject: string): boolean => !(/(^|\s)(test|chore|docs|ci|style)(\([^)]*\))?:/i.test(subject) || /\b(specs?|tests?|lint|lockfile|changelog)\b/i.test(subject));
  const taskLatest = new Map<string, Commit>();
  const taskFunc = new Map<string, Commit>();
  let gitOk = false;
  for (const repo of Object.values(repos)) {
    const log = gitLog(repo, horizon);
    if (!log) continue;
    gitOk = true;
    for (const cm of log) for (const id of cm.subject.match(/SI4-[TI]\d+/g) ?? []) {
      if (!taskLatest.has(id) || taskLatest.get(id)!.date < cm.date) taskLatest.set(id, cm);
      if (isFunctional(cm.subject) && (!taskFunc.has(id) || taskFunc.get(id)!.date < cm.date)) taskFunc.set(id, cm);
    }
  }
  const moduleCommits = new Map<string, Commit[]>();
  for (const code of new Set(cases.map(c => c.code))) {
    const paths = registry.modules[code]?.appPaths;
    const list: Commit[] = [];
    if (paths) {
      for (const [kind, repo] of Object.entries(repos)) {
        const p = (paths as Record<string, string[] | undefined>)[kind] ?? [];
        if (p.length) list.push(...(gitLog(repo, horizon, p) ?? []));
      }
    }
    moduleCommits.set(code, list.sort((a, b) => b.date.localeCompare(a.date)));
  }

  const findings: Finding[] = cases.map(c => {
    const e = ledger.cases[key(c.id, c.fp)];
    const status: LifecycleStatus = e?.status ?? 'active';
    const verified = e?.verified?.date ?? c.lastPassedDate;
    const reasons: Reason[] = [];
    if (status === 'active' || status === 'needs-review') {
      const mod = registry.modules[c.code];
      if (status === 'needs-review') reasons.push({ code: 'marked', detail: e?.reason ?? 'marked for review' });
      if (!verified) reasons.push({ code: 'never-verified', detail: 'no record that this case ever passed' });
      else if (daysBetween(verified, t) > days) reasons.push({ code: 'age', detail: `last verified ${verified} (${daysBetween(verified, t)} days ago)` });
      if (verified) {
        const newer = (moduleCommits.get(c.code) ?? []).filter(cm => cm.date > verified);
        if (newer.length) reasons.push({ code: 'code-changed', detail: `${newer.length} change(s) to ${c.code} code since ${verified}; latest: ${newer[0].subject.slice(0, 80)}` });
        for (const id of c.taskIds) {
          const fc = taskFunc.get(id);
          const tc = taskLatest.get(id);
          if (fc && fc.date > verified) reasons.push({ code: 'task-changed', detail: `${id} changed on ${fc.date}: ${fc.subject.slice(0, 70)}` });
          else if (tc && tc.date > verified) reasons.push({ code: 'task-touched', detail: `${id} had only test/chore commits on ${tc.date}: ${tc.subject.slice(0, 60)}` });
        }
      }
      if (!mod) reasons.push({ code: 'unregistered-module', detail: `module code ${c.code} is not in the registry (run cases:registry-sync)` });
      else {
        const aliases = mod.aliases.map(normName);
        for (const n of [c.module, c.subModule]) if (n && aliases.includes(normName(n))) reasons.push({ code: 'old-name', detail: `uses the old name "${n}" (now "${mod.name}")` });
        if (mod.status === 'removed') reasons.push({ code: 'module-removed', detail: `module ${c.code} is marked removed in the registry` });
      }
      const claims = claimedBy.get(c.id);
      if (claims?.length) reasons.push({ code: 'superseded-pending', detail: `${[...new Set(claims)].join(', ')} claim(s) to supersede it; retire it or confirm it is still valid` });
      if ((fpsById.get(c.id)?.size ?? 1) > 1) reasons.push({ code: 'shared-id', detail: 'this ID also holds a different case in another file (look at both)', info: true });
    }
    return { c, status, reasons, verified, protectedCase: isProtected(c) };
  });

  // Tiers, so the list stays readable. A = hard evidence the case may be wrong now; B = its module's code changed;
  // C = no recent pass on record (hygiene). Retired cases are never listed.
  const STRONG = new Set(['task-changed', 'old-name', 'superseded-pending', 'marked', 'module-removed', 'unregistered-module']);
  const tierOf = (f: Finding): 'ok' | 'A' | 'B' | 'C' | 'retired' => {
    if (f.status === 'retired' || f.status === 'superseded') return 'retired';
    const rs = f.reasons.filter(r => !r.info);
    if (rs.some(r => STRONG.has(r.code))) return 'A';
    if (rs.some(r => r.code === 'code-changed' || r.code === 'task-touched')) return 'B';
    return rs.length ? 'C' : 'ok';
  };
  const tiers = findings.map(f => ({ f, tier: tierOf(f) }));
  const inTier = (t: string): Finding[] => tiers.filter(x => x.tier === t).map(x => x.f);
  const A = inTier('A'), B = inTier('B'), C = inTier('C'), OK = inTier('ok'), RET = inTier('retired');
  const due = [...A, ...B, ...C];
  const reasonCount: Record<string, number> = {};
  for (const f of due) for (const code of new Set(f.reasons.filter(r => !r.info).map(r => r.code))) reasonCount[code] = (reasonCount[code] ?? 0) + 1;
  const sharedIds = findings.filter(f => f.reasons.some(r => r.code === 'shared-id'));
  const order = (x: Finding, y: Finding): number => Number(y.protectedCase) - Number(x.protectedCase) || y.reasons.length - x.reasons.length || x.c.id.localeCompare(y.c.id, 'en', { numeric: true });
  const prot = (l: Finding[]): number => l.filter(f => f.protectedCase).length;
  const total = findings.length;

  const md: string[] = [
    `# Test-case review list — ${t}`, '',
    `Generated by \`npm run cases:stale\`. This is a **review list only**: nothing was changed, deleted or retired.`, '',
    `## Reconciliation (every case is accounted for)`, '',
    `| | Cases | Protected |`, `| --- | ---: | ---: |`,
    `| Tracked cases (unique ID + content) | ${total} | ${prot(findings)} |`,
    `| **A. Likely outdated** (hard evidence: its own task changed, old module name, superseded, or marked) | ${A.length} | ${prot(A)} |`,
    `| **B. Weaker change signal** (module code changed, or only test/chore commits on its task) since last verified | ${B.length} | ${prot(B)} |`,
    `| **C. No recent pass on record** (never run, or older than ${days} days) | ${C.length} | ${prot(C)} |`,
    `| Up to date | ${OK.length} | ${prot(OK)} |`,
    `| Retired / superseded (kept in the ledger) | ${RET.length} | ${prot(RET)} |`,
    `| Check | ${A.length + B.length + C.length + OK.length + RET.length === total ? '✓ adds up to ' + total : '✗ DOES NOT ADD UP'} | |`, '',
    `Reasons (cases per reason): ${Object.entries(reasonCount).map(([k, v]) => `${k} ${v}`).join(', ') || 'none'}.`,
    `Code-change signal: ${gitOk ? `from ${APP_DIR} (last 180 days)` : 'UNAVAILABLE — app repos not found, so only age, naming and marking were used'}.`,
    `Every test run can clear tier C: \`npm run cases:from-results -- <results.json>\` marks the passed cases as verified today.`, '',
    `## By module`, '', `| Code | Module | Tracked | A | B | C | Retired |`, `| --- | --- | ---: | ---: | ---: | ---: | ---: |`,
  ];
  for (const code of [...new Set(findings.map(f => f.c.code))].sort()) {
    const m = (l: Finding[]): number => l.filter(f => f.c.code === code).length;
    md.push(`| ${code} | ${registry.modules[code]?.name ?? '**not in registry**'} | ${m(findings)} | ${m(A)} | ${m(B)} | ${m(C)} | ${m(RET)} |`);
  }
  // Group tier A by the change that caused it, so "task X changed" is one line with a count instead of hundreds of lines.
  const groups = new Map<string, { label: string; list: Finding[] }>();
  for (const f of A) {
    for (const r of f.reasons.filter(x => STRONG.has(x.code))) {
      const gk = r.code === 'task-changed' ? `task-changed|${r.detail}` : `${r.code}|${r.code === 'superseded-pending' || r.code === 'marked' ? 'per-case' : r.detail}`;
      const g = groups.get(gk) ?? { label: r.code === 'task-changed' ? `task changed — ${r.detail}` : r.code === 'superseded-pending' ? 'another case claims to supersede it' : r.code === 'marked' ? 'marked for review' : `${r.code} — ${r.detail}`, list: [] };
      if (!g.list.includes(f)) g.list.push(f);
      groups.set(gk, g);
    }
  }
  md.push('', `## A. Likely outdated — review these first`, '', `| Why | Cases | Protected |`, `| --- | ---: | ---: |`);
  for (const g of [...groups.values()].sort((x, y) => prot(y.list) - prot(x.list))) md.push(`| ${g.label.replace(/\|/g, '/')} | ${g.list.length} | ${prot(g.list)} |`);
  md.push('', `A case can appear under more than one reason. Examples (protected ★ first, ${limit} per reason):`, '');
  for (const g of [...groups.values()].sort((x, y) => prot(y.list) - prot(x.list))) {
    md.push(`**${g.label}**`, '');
    for (const f of [...g.list].sort(order).slice(0, limit > 15 && g.label.startsWith('task changed') ? 8 : limit)) md.push(`- ${f.c.id} ${f.c.title.slice(0, 90)} — ${f.c.priority}/${f.c.category}${f.protectedCase ? ' ★' : ''}${f.c.files.length > 1 ? ` — ${f.c.files.length} files` : ''}`);
    if (g.list.length > 8) md.push(`- … ${g.list.length - 8} more`);
    md.push('');
  }
  md.push('', `## B. Weaker change signal since last verified`, '', `| Module | Cases | Protected | Latest change |`, `| --- | ---: | ---: | --- |`);
  for (const code of [...new Set(B.map(f => f.c.code))].sort()) {
    const l = B.filter(f => f.c.code === code);
    md.push(`| ${code} ${registry.modules[code]?.name ?? ''} | ${l.length} | ${prot(l)} | ${(moduleCommits.get(code)?.[0]?.subject ?? '').slice(0, 80)} |`);
  }
  md.push('', `Protected cases in B (top ${limit}):`, '');
  for (const f of [...B].filter(x => x.protectedCase).sort(order).slice(0, limit)) md.push(`- ${f.c.id} ${f.c.title.slice(0, 90)} (${f.c.priority}/${f.c.category})`);
  md.push('', `## C. No recent pass on record`, '', `| Module | Cases | Protected |`, `| --- | ---: | ---: |`);
  for (const code of [...new Set(C.map(f => f.c.code))].sort()) { const l = C.filter(f => f.c.code === code); md.push(`| ${code} ${registry.modules[code]?.name ?? ''} | ${l.length} | ${prot(l)} |`); }
  md.push('', `## IDs shared by different cases (${new Set(sharedIds.map(f => f.c.id)).size} IDs)`, '',
    'These IDs hold more than one different case. Each case is tracked separately here, so none is lost, but give new cases new IDs from now on (`cases:next-id`).', '');
  for (const id of [...new Set(sharedIds.map(f => f.c.id))].slice(0, limit)) {
    md.push(`- **${id}**: ${findings.filter(f => f.c.id === id).map(f => `"${f.c.title.slice(0, 50)}" (${f.c.files.at(-1)})`).join(' | ')}`);
  }
  const needsRegistry = Object.entries(registry.modules).filter(([, m]) => m.needsReview).map(([k]) => k);
  md.push('', `## Module registry`, '', needsRegistry.length ? `${needsRegistry.length} module code(s) still marked \`needsReview\` (names, routes and appPaths were seeded automatically and are unconfirmed): ${needsRegistry.join(', ')}.` : 'All registry entries are confirmed.');

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const out = path.join(OUT_DIR, `stale-${t}.md`);
  fs.writeFileSync(out, md.join('\n') + '\n');
  fs.writeFileSync(path.join(OUT_DIR, 'stale-latest.json'), JSON.stringify({ date: t, tracked: total, tierA: A.length, tierB: B.length, tierC: C.length, upToDate: OK.length, retired: RET.length, reasons: reasonCount, tierAIds: A.map(f => key(f.c.id, f.c.fp)) }, null, 1));
  console.log(`Tracked ${total} cases: A likely outdated ${A.length} (${prot(A)} protected) · B module changed ${B.length} · C no recent pass ${C.length} · up to date ${OK.length} · retired ${RET.length}.`);
  console.log(`Report: ${path.relative(ROOT, out)}`);
  if (opt.json === 'true') console.log(JSON.stringify([...A].sort(order).slice(0, limit).map(f => ({ id: f.c.id, fp: f.c.fp, protected: f.protectedCase, reasons: f.reasons })), null, 1));
}

// ── ledger actions ──────────────────────────────────────────────────────────
function resolveCase(id: string, fpOpt?: string): UniqueCase {
  const matches = uniqueCases(loadRows().rows).filter(c => c.id === id);
  if (!matches.length) return fail(`${id} is not in any case file.`);
  const pick = fpOpt ? matches.filter(c => c.fp === fpOpt) : matches;
  if (!pick.length) return fail(`${id} has no case with fingerprint ${fpOpt}.`);
  if (pick.length > 1) return fail(`${id} holds ${pick.length} different cases. Pick one with --fp=<fingerprint>:\n  ${pick.map(c => `${c.fp}  "${c.title.slice(0, 70)}" (${c.files.at(-1)})`).join('\n  ')}`);
  return pick[0];
}

function writeEntry(k: string, mutate: (prev: LedgerEntry | undefined) => LedgerEntry): void {
  const ledger = loadLedger();
  const prev = ledger.cases[k];
  const next = mutate(prev);
  next.history = [...(prev?.history ?? []), { at: new Date().toISOString(), status: next.status, reason: next.reason, by: who() }];
  ledger.cases[k] = next;
  saveLedger(ledger);
}

async function mark(a: Args): Promise<void> {
  const id = a.pos[0] ?? fail('Usage: cases:mark -- <ID> --status=verified|needs-review');
  const status = a.opt.status;
  const c = resolveCase(id, a.opt.fp);
  const k = key(c.id, c.fp);
  if (status === 'verified') {
    const version = await appVersion(a.opt.version);
    writeEntry(k, p => ({ ...(p ?? { at: new Date().toISOString() }), status: p?.status === 'retired' || p?.status === 'superseded' ? p.status : 'active', at: p?.at ?? new Date().toISOString(), verified: { date: today(), appVersion: version, source: a.opt.source ?? 'manual' }, by: who() }));
    console.log(`✓ ${k} verified ${today()}${version ? ` on ${version}` : ''}`);
  } else if (status === 'needs-review') {
    if (!a.opt.reason) fail('--reason is required when marking a case for review.');
    writeEntry(k, p => ({ ...(p ?? {}), status: 'needs-review', reason: a.opt.reason, at: new Date().toISOString(), by: who() }));
    console.log(`✓ ${k} marked needs-review`);
  } else fail('--status must be verified or needs-review.');
}

function retire(a: Args): void {
  const id = a.pos[0] ?? fail('Usage: cases:retire -- <ID> --reason="..." [--replaced-by=<ID> | --feature-removed="..."]');
  const reason = a.opt.reason?.trim();
  if (!reason) fail('--reason is required to retire a case.');
  const c = resolveCase(id, a.opt.fp);
  const replacedBy = a.opt['replaced-by'];
  const removed = a.opt['feature-removed'];
  if (isProtected(c) && !replacedBy && !removed) fail(`${c.id} is a protected case (${c.priority}/${c.category}). Give a replacement (--replaced-by=<ID>) or say why none is needed (--feature-removed="…").`);
  if (replacedBy) {
    const all = new Set([...uniqueCases(loadRows().rows).map(x => x.id), ...loadSnapshot().cases.map(r => r[0]), ...loadDocIds()]);
    if (!all.has(replacedBy)) fail(`${replacedBy} does not exist, so it cannot replace ${c.id}.`);
    if (replacedBy === c.id) fail('A case cannot replace itself.');
  }
  const k = key(c.id, c.fp);
  writeEntry(k, p => ({ ...(p ?? {}), status: replacedBy ? 'superseded' : 'retired', reason, ...(replacedBy ? { replacedBy } : {}), ...(removed ? { featureRemoved: removed } : {}), at: new Date().toISOString(), by: who() }));
  console.log(`✓ ${k} ${replacedBy ? `superseded by ${replacedBy}` : 'retired'} — still in the case files and the snapshot, now marked in the ledger.`);
}

function reactivate(a: Args): void {
  const id = a.pos[0] ?? fail('Usage: cases:reactivate -- <ID> --reason="..."');
  if (!a.opt.reason) fail('--reason is required.');
  const c = resolveCase(id, a.opt.fp);
  const k = key(c.id, c.fp);
  if (!loadLedger().cases[k]) fail(`${k} has no ledger entry; it is already active.`);
  writeEntry(k, p => ({ ...(p as LedgerEntry), status: 'active', reason: a.opt.reason, replacedBy: undefined, featureRemoved: undefined, at: new Date().toISOString(), by: who() }));
  console.log(`✓ ${k} is active again.`);
}

function nextId(a: Args): void {
  const code = (a.pos[0] ?? fail('Usage: cases:next-id -- <CODE> [--count=n]')).toUpperCase();
  const re = new RegExp(`^TC-${code}-(\\d+)$`);
  const all = new Set([...uniqueCases(loadRows().rows).map(c => c.id), ...loadSnapshot().cases.map(r => r[0]), ...loadDocIds()]);
  let max = 0;
  for (const id of all) { const m = id.match(re); if (m) max = Math.max(max, Number(m[1])); }
  const count = Math.max(1, Number(a.opt.count ?? 1));
  const out = Array.from({ length: count }, (_, i) => `TC-${code}-${String(max + 1 + i).padStart(3, '0')}`);
  console.log(out.join('\n'));
}

async function fromResults(a: Args): Promise<void> {
  const file = a.pos[0] ?? fail('Usage: cases:from-results -- <results.json>');
  const json = JSON.parse(fs.readFileSync(path.resolve(file), 'utf8')) as { suites?: unknown[] };
  const specs: Array<{ title: string; ok: boolean }> = [];
  const visit = (s: Record<string, unknown>): void => {
    for (const child of (s.suites as Record<string, unknown>[] | undefined) ?? []) visit(child);
    for (const sp of (s.specs as Array<{ title: string; ok?: boolean; tests?: Array<{ status?: string }> }> | undefined) ?? []) {
      specs.push({ title: sp.title, ok: sp.ok ?? (sp.tests ?? []).every(t => t.status === 'expected') });
    }
  };
  for (const s of json.suites ?? []) visit(s as Record<string, unknown>);
  const cases = uniqueCases(loadRows().rows);
  const version = await appVersion(a.opt.version);
  const ledger = loadLedger();
  let marked = 0;
  const skipped: string[] = [];
  for (const sp of specs) {
    const id = sp.title.match(/TC-[A-Z0-9]+-\d+/)?.[0];
    if (!id || !sp.ok) continue;
    const cands = cases.filter(c => c.id === id);
    const want = normTitle(sp.title.replace(id, ''));
    const pick = cands.length === 1 ? cands[0] : cands.find(c => normTitle(c.title) === want || want.includes(normTitle(c.title)) || normTitle(c.title).includes(want));
    if (!pick) { skipped.push(`${id} (${cands.length ? 'ambiguous ID' : 'not in any case file'})`); continue; }
    const k = key(pick.id, pick.fp);
    const prev = ledger.cases[k];
    ledger.cases[k] = { ...(prev ?? {}), status: prev?.status === 'retired' || prev?.status === 'superseded' ? prev.status : 'active', at: prev?.at ?? new Date().toISOString(), verified: { date: today(), appVersion: version, source: path.basename(file) }, by: who(), history: [...(prev?.history ?? []), { at: new Date().toISOString(), status: prev?.status ?? 'active', reason: 'verified from test results', by: who() }] };
    marked++;
  }
  saveLedger(ledger);
  console.log(`✓ ${marked} passed case(s) marked verified${version ? ` on ${version}` : ''}.${skipped.length ? ` Skipped ${skipped.length}: ${skipped.slice(0, 5).join(', ')}` : ''}`);
}

// ── main ────────────────────────────────────────────────────────────────────
(async () => {
  const a = parseArgs(process.argv.slice(2));
  switch (a.cmd) {
    case 'stale': return staleReport(a.opt);
    case 'check': return check(a.opt);
    case 'snapshot': return snapshot(a.opt);
    case 'registry-sync': return registrySync();
    case 'mark': return mark(a);
    case 'retire': return retire(a);
    case 'reactivate': return reactivate(a);
    case 'next-id': return nextId(a);
    case 'from-results': return fromResults(a);
    default: return fail(`Unknown command "${a.cmd}". See the header of scripts/cases-lifecycle.ts.`);
  }
})();

