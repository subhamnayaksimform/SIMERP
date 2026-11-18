/**
 * Non-interactive pipeline entry point — used by the QA Workspace UI (npm run ui), also usable
 * from a terminal or CI. Same steps as `npm run pipeline`, without the menus.
 *
 *   ts-node scripts/pipeline-headless.ts --source=file   --input=<path .pdf/.docx/.txt/.md> [--name=<feature>]
 *   ts-node scripts/pipeline-headless.ts --source=text   --input=<path to a .txt holding the pasted text> --name=<feature>
 *   ts-node scripts/pipeline-headless.ts --source=zoho   --input=SI4-T501,SI4-T502
 *   ts-node scripts/pipeline-headless.ts --source=req    --input=<requirements JSON>      (skip analysis)
 *   ts-node scripts/pipeline-headless.ts --source=cases  --input=<cases JSON>             (automation only)
 *       [--steps=analyze,cases,automation]   default: analyze,cases
 *   ts-node scripts/pipeline-headless.ts --check        → prints which AI backend / Zoho config is available
 *
 * AI runs on whoever is running it: their local `claude` CLI login first, ANTHROPIC_API_KEY second.
 * Prints one machine-readable line per output: `@@output <kind> <path>`.
 */

process.env.PIPELINE_HEADLESS = '1';

import * as fs from 'fs';
import * as path from 'path';
import {
  readDocumentText, resolveAIBackend, findClaudeBin, isZohoConfigured, fetchTasksByIds,
  runRequirementAnalysis, runTestCaseGeneration, runAutomationGeneration,
} from './pipeline';

const ROOT = path.resolve(__dirname, '..');

function args(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const a of process.argv.slice(2)) {
    const m = /^--([\w-]+)(?:=(.*))?$/.exec(a);
    if (m) out[m[1]] = m[2] ?? 'true';
  }
  return out;
}

const say = (msg: string) => console.log(`\n=== ${msg}`);
const output = (kind: string, file: string) => console.log(`@@output ${kind} ${path.relative(ROOT, file)}`);

async function main(): Promise<number> {
  const a = args();

  if (a.check) {
    const bin = findClaudeBin();
    const key = process.env.ANTHROPIC_API_KEY;
    console.log(JSON.stringify({
      claudeCli: bin,
      apiKey: !!key && key !== 'your_anthropic_api_key_here',
      zoho: isZohoConfigured(),
    }));
    return 0;
  }

  const source = a.source;
  const steps = new Set((a.steps ?? (source === 'cases' ? 'automation' : 'analyze,cases')).split(','));
  if (!source || !a.input) {
    console.error('Usage: --source=file|text|zoho|req|cases --input=<…> [--name=…] [--steps=analyze,cases,automation]');
    return 2;
  }

  const backend = resolveAIBackend();
  say(`AI: ${backend.type === 'cli' ? 'your Claude Code login (claude CLI)' : 'Anthropic API key'}`);
  const ts = Date.now();
  for (const d of ['requirements', 'test-cases', 'raw', 'excel', 'results']) fs.mkdirSync(path.join(ROOT, 'reports', d), { recursive: true });

  let reqFile = source === 'req' ? path.resolve(ROOT, a.input) : '';
  let casesFile = source === 'cases' ? path.resolve(ROOT, a.input) : '';

  if (['file', 'text', 'zoho'].includes(source) && steps.has('analyze')) {
    let tasks: Record<string, unknown>[];
    if (source === 'zoho') {
      if (!isZohoConfigured()) throw new Error('Zoho is not configured in .env — use a document or pasted text instead.');
      const ids = a.input.split(',').map(s => s.trim()).filter(Boolean);
      say(`Fetching ${ids.length} task(s) from Zoho`);
      tasks = await fetchTasksByIds(ids);
      if (!tasks.length) throw new Error(`No Zoho tasks found for: ${ids.join(', ')}`);
      tasks.forEach(t => console.log(`  ✓ ${t['prefix'] ?? ''} ${t['name'] ?? ''}`));
    } else {
      const file = path.resolve(ROOT, a.input);
      say(`Reading ${path.basename(file)}`);
      const text = await readDocumentText(file);
      if (!text.trim()) throw new Error('The document has no readable text (scanned PDF?). Paste the text instead.');
      console.log(`  ${text.length.toLocaleString()} characters`);
      const name = a.name || path.basename(file).replace(/^\d+-/, '');
      tasks = [{ id: `${source === 'file' ? 'DOC' : 'MANUAL'}-${ts}`, name, description: text, status: 'open', source: source === 'file' ? 'document' : 'manual' }];
    }
    say('Step 1 — Analyzing requirements (a few minutes)');
    ({ reqFile } = await runRequirementAnalysis(backend, tasks, 'Analyzing requirements'));
    output('requirements', reqFile);
  }

  if (reqFile && steps.has('cases')) {
    say('Step 2 — Writing test cases (a few minutes)');
    casesFile = (await runTestCaseGeneration(backend, reqFile, ts)) ?? '';
    if (!casesFile) throw new Error('Test case generation failed — see the log above.');
    output('test-cases', casesFile);
    const md = path.join(ROOT, 'docs', 'test-cases', `test-cases-${path.basename(casesFile, '.json').replace(/^cases-/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`);
    if (fs.existsSync(md)) output('test-case-doc', md);
  }

  if (casesFile && steps.has('automation')) {
    say('Step 3 — Generating test scripts');
    const files = await runAutomationGeneration(backend, casesFile);
    for (const f of files) output('automation', path.join(ROOT, f.path));
    if (!files.length) throw new Error('Automation was not generated, or failed type-check/lint — see the log above.');
  }

  say('Done');
  return 0;
}

main().then(code => process.exit(code)).catch(err => {
  console.error(`\n✖ ${err?.message ?? String(err)}`);
  process.exit(1);
});
