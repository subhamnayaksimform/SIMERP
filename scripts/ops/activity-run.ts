/**
 * Runs one activity (see activities.ts), detached from the dashboard:
 *   npx ts-node scripts/ops/activity-run.ts <activity-id>
 *
 *   tests        Playwright only — a module, a task's own cases, filtered by test type. No Claude.
 *   ai-retest    Claude writes a Playwright re-test for a bug (repo conventions), runs it; then this
 *                runner re-runs the spec itself so the verdict comes from a real run. Ends in
 *                "needs approval": the user decides the Zoho status (Closed / Reopen) in the UI.
 *   ai-pipeline  Claude runs the repo's pipeline agents for a task with no suite: requirements →
 *                test cases (taskId = the task) → optional automation; then the new specs run.
 *   ai-module    Claude adds / updates a module's test cases (and specs) from the user's input.
 *
 * Only one Playwright run at a time: shares the health-check slot and waits for QA Workspace jobs.
 */

import * as fs from 'fs';
import * as path from 'path';
import { ROOT, WORK_FILE, readJson, writeJson, WorkSnapshot } from './store';
import { ACT_DIR, ActivitySpec, ActivityStatus, statusFile, resultFile, TestType } from './activities';
import { playwright, readReport, count, isHealthRunning, RUNNING_FILE, HealthCheck } from './health-check';
import { qaStatus } from './qa-bridge';
import { envByName } from './envs';
import { fetchComments } from '../lib/zoho-rest';
import { runClaude, lastJsonBlock } from './ai';
import { taskLinks } from './task-links';

const id = process.argv[2];
const dir = path.join(ACT_DIR, id);
const spec = readJson<ActivitySpec>(path.join(dir, 'spec.json'), null as any);
const log = (line: string) => process.stdout.write(`[${new Date().toLocaleTimeString()}] ${line}\n`);
const setStatus = (patch: Partial<ActivityStatus>) => writeJson(statusFile(id), { ...readJson<ActivityStatus>(statusFile(id), {} as any), ...patch });
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
const rel = (p: string) => path.relative(ROOT, p);

// ─── the shared Playwright slot ───

/**
 * Create the slot file exclusively, so activities queued together (e.g. "re-test all bugs")
 * cannot all see a free slot and start at once. A leftover file whose process is gone is cleared;
 * one that can't be parsed yet is another claim in progress, so it counts as busy.
 */
function claimSlot(state: object): boolean {
  fs.mkdirSync(path.dirname(RUNNING_FILE), { recursive: true });
  try { fs.writeFileSync(RUNNING_FILE, JSON.stringify(state, null, 2), { flag: 'wx' }); return true; }
  catch (e) {
    if ((e as NodeJS.ErrnoException).code !== 'EEXIST') throw e;
    let pid: number | undefined;
    try { pid = JSON.parse(fs.readFileSync(RUNNING_FILE, 'utf8')).pid; } catch { return false; }
    try { process.kill(pid!, 0); } catch { try { fs.unlinkSync(RUNNING_FILE); } catch { /* gone */ } }
    return false;
  }
}

async function acquireSlot(phase: string) {
  setStatus({ status: 'waiting', phase: 'waiting for another test run to finish' });
  const state = { pid: process.pid, id, env: 'dev', reason: 'activity', suites: [spec.type], startedAt: new Date().toISOString(), phase };
  for (let i = 0; ; i++) {
    const busy = isHealthRunning();
    const qa = busy ? null : await qaStatus();
    if (!busy && !qa?.activeJob && claimSlot(state)) break;
    if (i % 4 === 0) log(`waiting — ${busy ? `health run / activity ${busy.id} is running` : qa?.activeJob ? `QA Workspace job “${qa.activeJob.label}” is running` : 'another activity is starting'}`);
    await sleep(15_000);
  }
  setStatus({ status: 'running', phase });
}
const releaseSlot = () => { const r = readJson<any>(RUNNING_FILE, null); if (r?.pid === process.pid) try { fs.unlinkSync(RUNNING_FILE); } catch { /* gone */ } };

/** Run Playwright and summarise. `files` and/or a `grep` regex select the tests. */
async function runTests(label: string, files: string[], grep?: string): Promise<{ counts: ReturnType<typeof count>; checks: HealthCheck[]; exitCode: number }> {
  const env = envByName('dev')!;
  const out = path.join(dir, `pw-${Date.now()}`);
  const report = `${out}.json`;
  const args = [...files, '--reporter=json', `--output=${out}`];
  if (grep) args.push('--grep', grep);
  log(`▶ ${label}: npx playwright test ${files.join(' ')}${grep ? ` --grep "${grep.length > 120 ? grep.slice(0, 120) + '…' : grep}"` : ''}`);
  const exitCode = await playwright(args, { BASE_URL: env.baseUrl, API_BASE_URL: env.apiUrl, PLAYWRIGHT_JSON_OUTPUT_NAME: report }, path.join(dir, 'playwright.log'), pid => setStatus({ childPid: pid }));
  const checks = readReport(report, dir, ACT_DIR);
  const counts = count(checks);
  log(`${counts.failed ? '✗' : '✓'} ${counts.passed + counts.flaky}/${counts.total} passed${counts.failed ? `, ${counts.failed} failed` : ''}${counts.flaky ? `, ${counts.flaky} flaky` : ''}`);
  return { counts, checks, exitCode };
}

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function grepFor(s: ActivitySpec): string | undefined {
  const types = s.types?.length ? `.*@(?:${s.types.map(escapeRe).join('|')})\\b` : '';
  if (s.caseIds?.length) return `\\b(?:${s.caseIds.map(escapeRe).join('|')})\\b${types}`;
  if (s.code) return `\\bTC-${escapeRe(s.code)}-\\d+${types}`;
  return types ? types.replace(/^\.\*/, '') : undefined;
}

// ─── context for Claude ───

function itemContext(work: WorkSnapshot, key: string) {
  const task = work.tasks.find(t => t.key === key), bug = work.bugs.find(b => b.key === key);
  const item: any = task ?? bug;
  if (!item) throw new Error(`${key} is not in the last Zoho sync`);
  const links = taskLinks(work).tasks.find(t => t.key === key);
  return {
    kind: task ? 'task' : 'bug', item,
    linkedTasks: (bug?.linkedTasks ?? []).map(k => work.tasks.find(t => t.key === k)).filter(Boolean).map((t: any) => ({ key: t.key, title: t.title, status: t.status.name, description: t.description })),
    linkedBugs: (task?.linkedBugs ?? []).map(k => work.bugs.find(b => b.key === k)).filter(Boolean).map((b: any) => ({ key: b.key, title: b.title, status: b.status.name })),
    existingTests: links?.modules.map(m => ({ module: m.code, name: m.name, cases: m.caseIds.slice(0, 200), automated: m.automated })) ?? [],
  };
}

const CONVENTIONS = `Follow this repository's own rules exactly — read them first:
- CLAUDE.md (pipeline, layout, test IDs) and .claude/instructions/qa-conventions.md (naming, selectors, assertions, forbidden practices)
- tests/fixtures/auth.ts (role fixtures: primaryPage = Admin, pmoPage, pmPage, tmPage, emPage, csmPage, empPage) and reuse page objects in tests/page-objects/
- Always run Playwright through the config so global-setup logs in: npx playwright test --config=tests/playwright.config.ts --project=chromium <file> --retries=0
- Never use page.waitForTimeout, test.only, test.skip, or page.evaluate for assertions. Never weaken an assertion to make a test pass.
- Do not change application code, other people's specs, .env, or anything outside tests/, reports/ and docs/.
- Do not contact Zoho. Do not change any Zoho status — the user decides that afterwards.`;

function retestPrompt(ctxFile: string, key: string, specPath: string, code: string, instructions?: string) {
  const short = key.replace(/^SI4-/, '');
  return `You are re-testing Zoho bug ${key} on SimERP dev (${envByName('dev')!.baseUrl}).
Bug data (title, description with steps/expected/actual, comments, linked tasks, existing tests): ${ctxFile}

${CONVENTIONS}

Do this:
1. Read the bug and work out the steps and the EXPECTED (fixed) behaviour.
2. Write ONE Playwright spec at ${specPath} that follows those steps and asserts the expected behaviour.
   Test titles: "TC-${code}-${short.replace(/\D/g, '')}NN <what it checks> @retest @${short}" (NN = 01, 02 …) so the dashboard links it to the bug.
3. Run it. If it fails because of the TEST itself (wrong locator, timing, setup) fix the test and run again — at most 3 attempts.
   If it fails because the app still behaves as the bug describes, that is the answer — do not "fix" it.
4. Finish with ONE fenced json block:
\`\`\`json
{"verdict": "fixed" | "still-failing" | "inconclusive", "summary": "<2-3 plain sentences>", "steps": ["…"], "evidence": ["what you saw, with the assertion that passed/failed"], "spec": "${specPath}"}
\`\`\`${instructions ? `\n\nExtra instructions from the user:\n${instructions}` : ''}`;
}

function pipelinePrompt(ctxFile: string, s: ActivitySpec) {
  const today = new Date().toISOString().slice(0, 10);
  const short = (s.key ?? '').replace(/^SI4-/, '').toLowerCase();
  return `Write the test suite for Zoho task ${s.key}. Task data (title, description, comments, linked bugs, existing tests): ${ctxFile}

Use this repository's pipeline agents as your instructions — read and follow their output formats:
- .claude/agents/requirement-analyzer.agent.md → reports/requirements/requirements-<CODE>-${short}.json (taskId "${s.key}")
- .claude/agents/test-case-generator.agent.md → reports/test-cases/cases-${today}-<CODE>-${short}.json
  EVERY test case must carry "taskId": "${s.key}" so the dashboard links it to the task.
${s.withAutomation ? '- .claude/agents/automation-generator.agent.md → specs under tests/e2e/<module>/<sub-feature>/ and page objects under tests/page-objects/; then run npx tsc --noEmit and fix type errors.' : '- Do NOT write Playwright specs this time (test cases only).'}
Pick <CODE> from the TC-<CODE> table in .claude/instructions/qa-conventions.md (the module the task belongs to).
Test types to cover: ${s.types?.length ? s.types.join(', ') : 'all categories the agents normally produce'}.
After writing the cases run: npm run report:md
Do NOT run the Playwright tests yourself — the dashboard runs them afterwards.

${CONVENTIONS}
${s.instructions ? `\nExtra instructions from the user:\n${s.instructions}\n` : ''}
Finish with ONE fenced json block:
\`\`\`json
{"module": "<CODE>", "casesFile": "reports/test-cases/…json", "cases": <number>, "specs": ["tests/e2e/…spec.ts"], "summary": "<2-3 plain sentences>"}
\`\`\``;
}

function modulePrompt(s: ActivitySpec) {
  return `Update the test suite of module ${s.code} (test IDs TC-${s.code}-NNN).
Find its current cases in reports/test-cases/*.json and docs/test-cases/*.md, and its specs under tests/e2e/.

What the user wants:
${s.instructions || '(no extra input — review the module and fill clear coverage gaps)'}

Test types to focus on: ${s.types?.length ? s.types.join(', ') : 'any'}.
- Add new cases (next free TC-${s.code} numbers) or update existing ones; write them to a new reports/test-cases/cases-${new Date().toISOString().slice(0, 10)}-${s.code}-update.json following .claude/agents/test-case-generator.agent.md.
${s.withAutomation ? '- Add or update the matching Playwright specs following .claude/agents/automation-generator.agent.md, then run npx tsc --noEmit.' : '- Do NOT write Playwright specs this time.'}
- Then run: npm run report:md
Do NOT run the Playwright tests yourself — the dashboard runs them afterwards.

${CONVENTIONS}

Finish with ONE fenced json block:
\`\`\`json
{"module": "${s.code}", "casesFile": "reports/test-cases/…json", "added": <n>, "updated": <n>, "specs": ["…"], "summary": "<2-3 plain sentences>"}
\`\`\``;
}

// ─── main ───

async function main() {
  setStatus({ status: 'running', pid: process.pid, phase: 'starting' });
  const work = readJson<WorkSnapshot | null>(WORK_FILE, null);

  if (spec.type === 'tests') {
    await acquireSlot('running tests');
    try {
      const r = await runTests(spec.title, [], grepFor(spec));
      writeJson(resultFile(id), { summary: { ...r.counts }, checks: r.checks });
      setStatus({ status: r.counts.total ? 'done' : 'failed', phase: undefined, finishedAt: new Date().toISOString(), error: r.counts.total ? undefined : 'No tests matched — check the module, cases or test types' });
    } finally { releaseSlot(); }
    return;
  }

  if (!work) throw new Error('No Zoho data yet — sync first');
  let ctxFile = '';
  if (spec.key) {
    const ctx: any = itemContext(work, spec.key);
    ctx.comments = await fetchComments(ctx.kind, ctx.item.id).catch(() => []);
    ctxFile = path.join(dir, 'context.json');
    writeJson(ctxFile, ctx);
    ctxFile = rel(ctxFile);
  }

  if (spec.type === 'ai-retest') {
    const key = spec.key!;
    const linkedCode = taskLinks(work).tasks.find(t => t.key === key)?.modules[0]?.code;
    const code = linkedCode && /^[A-Z]{2,12}$/.test(linkedCode) ? linkedCode : 'RTST';
    const specPath = `tests/e2e/retests/${key.toLowerCase()}.spec.ts`;
    await acquireSlot('Claude is re-testing the bug');
    let answer: any = null, claude;
    try {
      claude = await runClaude(retestPrompt(ctxFile, key, specPath, code, spec.instructions), { onLine: log, onSpawn: pid => setStatus({ childPid: pid }) });
      answer = lastJsonBlock(claude.text);
      log(`Claude's verdict: ${answer?.verdict ?? 'no verdict block'}`);
      const file = path.join(ROOT, answer?.spec ?? specPath);
      let verify = null;
      if (fs.existsSync(file)) {
        setStatus({ phase: 'verifying — re-running the spec' });
        verify = await runTests('Verification run', [rel(file)]);
      } else log('No spec was written — nothing to verify');
      const verdict = !verify || !verify.counts.total ? 'inconclusive' : verify.counts.failed ? 'still-failing' : 'fixed';
      const suggestion = verdict === 'fixed' ? 'Closed' : verdict === 'still-failing' ? 'Reopen' : null;
      writeJson(resultFile(id), {
        summary: { verdict, claudeVerdict: answer?.verdict ?? null, passed: verify?.counts.passed ?? 0, failed: verify?.counts.failed ?? 0, total: verify?.counts.total ?? 0, suggestion },
        claude: { summary: answer?.summary ?? claude.text.slice(-1500), steps: answer?.steps ?? [], evidence: answer?.evidence ?? [], costUsd: claude.costUsd, turns: claude.turns },
        spec: rel(file), checks: verify?.checks ?? [],
      });
      setStatus({ status: suggestion ? 'needs-approval' : 'done', phase: undefined, finishedAt: new Date().toISOString() });
    } finally { releaseSlot(); }
    return;
  }

  if (spec.type === 'ai-pipeline' || spec.type === 'ai-module') {
    setStatus({ phase: spec.type === 'ai-pipeline' ? 'Claude is writing requirements and test cases' : 'Claude is updating the module tests' });
    const claude = await runClaude(spec.type === 'ai-pipeline' ? pipelinePrompt(ctxFile, spec) : modulePrompt(spec), { onLine: log, onSpawn: pid => setStatus({ childPid: pid }) });
    const answer = lastJsonBlock(claude.text);
    const specs = (answer?.specs ?? []).filter((f: string) => typeof f === 'string' && fs.existsSync(path.join(ROOT, f)));
    let run = null;
    if (spec.runAfter && specs.length) {
      await acquireSlot('running the new tests');
      try { run = await runTests('New tests', specs, spec.types?.length ? `@(?:${spec.types.join('|')})\\b` : undefined); } finally { releaseSlot(); }
    }
    writeJson(resultFile(id), {
      summary: { module: answer?.module ?? spec.code ?? null, cases: answer?.cases ?? answer?.added ?? null, specs: specs.length, passed: run?.counts.passed ?? null, failed: run?.counts.failed ?? null, total: run?.counts.total ?? null },
      claude: { summary: answer?.summary ?? claude.text.slice(-1500), casesFile: answer?.casesFile, costUsd: claude.costUsd, turns: claude.turns },
      specs, checks: run?.checks ?? [],
    });
    setStatus({ status: answer ? 'done' : 'failed', phase: undefined, finishedAt: new Date().toISOString(), error: answer ? undefined : 'Claude finished without the summary block — see the log' });
  }
}

main().catch(e => {
  log(`✗ ${(e as Error).message}`);
  releaseSlot();
  setStatus({ status: 'failed', phase: undefined, error: (e as Error).message, finishedAt: new Date().toISOString() });
  process.exit(1);
});
process.on('SIGTERM', () => { releaseSlot(); setStatus({ status: 'stopped', finishedAt: new Date().toISOString() }); process.exit(143); });
