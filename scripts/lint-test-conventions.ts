/**
 * Automated enforcement of .claude/instructions/qa-conventions.md — the conventions
 * were previously prompt-only (relying entirely on the LLM's own self-review
 * checklist in automation-generator.agent.md, unverified by tooling). This script
 * catches the patterns that were already found violated in committed/generated code:
 * hard-coded waits, structurally-unfailable assertions, and comment-only defect markers.
 *
 * Hard rules are "ratcheted" against a baseline (scripts/lint-baseline.json): a file
 * that already had N violations of a rule before this script existed won't block CI
 * today, but any NEW violation beyond the recorded baseline will. Run with
 * --update-baseline after intentionally fixing (or knowingly adding to) violations.
 *
 * Soft rules are informational only — they need judgment this script can't fully
 * automate (e.g. "is this threshold actually wrong") — and are always printed, never
 * blocking.
 *
 * Usage:
 *   npm run lint:tests                  # check against baseline, exit 1 on new violations
 *   npm run lint:tests -- --update-baseline   # accept current violations as the new baseline
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..');
const TARGET_DIRS = ['tests/e2e', 'tests/page-objects'];
const BASELINE_PATH = path.join(__dirname, 'lint-baseline.json');
const KB_MODULES_DIR = path.join(ROOT, 'reports', 'knowledge-base', 'modules');

interface Violation {
  file: string;
  line: number;
  rule: string;
  message: string;
}

function walk(dir: string, out: string[] = [], ext = '.ts'): string[] {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out, ext);
    else if (entry.name.endsWith(ext)) out.push(full);
  }
  return out;
}

function stripLineComment(line: string): string {
  const idx = line.indexOf('//');
  return idx === -1 ? line : line.slice(0, idx);
}

// ── Hard rules (baseline-ratcheted) ────────────────────────────────────────────

function checkWaitForTimeout(rel: string, lines: string[]): Violation[] {
  const out: Violation[] = [];
  lines.forEach((line, i) => {
    if (/\bwaitForTimeout\s*\(/.test(stripLineComment(line))) {
      out.push({ file: rel, line: i + 1, rule: 'no-wait-for-timeout', message: 'Hard-coded page.waitForTimeout — use an auto-waiting assertion, waitForResponse, or waitForLoadState instead.' });
    }
  });
  return out;
}

function checkTestOnly(rel: string, lines: string[]): Violation[] {
  const out: Violation[] = [];
  lines.forEach((line, i) => {
    if (/\btest(\.describe)?\.only\s*\(/.test(stripLineComment(line))) {
      out.push({ file: rel, line: i + 1, rule: 'no-test-only', message: 'test.only()/test.describe.only() must never be committed — it silently disables every other test in the run.' });
    }
  });
  return out;
}

function checkDeclarativeSkip(rel: string, lines: string[]): Violation[] {
  const out: Violation[] = [];
  lines.forEach((line, i) => {
    const clean = stripLineComment(line);
    if (/\btest\.describe\.skip\s*\(/.test(clean)) {
      out.push({ file: rel, line: i + 1, rule: 'no-declarative-skip', message: 'test.describe.skip(...) disables an entire suite — remove or convert to a runtime-conditional test.skip(condition, reason) inside each test.' });
      return;
    }
    // Declarative form: test.skip('title', fn) — first arg is a string literal.
    // Allowed form: test.skip(<expression>, 'reason') — first arg is not a string literal.
    const m = clean.match(/\btest\.skip\s*\(\s*(['"`])/);
    if (m) {
      out.push({ file: rel, line: i + 1, rule: 'no-declarative-skip', message: 'test.skip("title", fn) declaratively disables a whole test — use the runtime-conditional form test.skip(condition, "reason") instead.' });
    }
  });
  return out;
}

/** Empty (or comment-only) .catch(() => { ... }) bodies make an assertion structurally unable to fail. */
function checkSwallowedAssertions(rel: string, lines: string[]): Violation[] {
  const out: Violation[] = [];
  // Single-line: .catch(() => {})
  lines.forEach((line, i) => {
    if (/expect\s*\(/.test(line) && /\.catch\s*\(\s*\(\s*\)\s*=>\s*\{\s*\}\s*\)/.test(line)) {
      out.push({ file: rel, line: i + 1, rule: 'no-swallowed-assertion', message: 'expect(...).catch(() => {}) makes the assertion structurally unable to fail — remove the .catch or assert on the caught state.' });
    }
  });
  // Multi-line: .catch(() => {   ...only comments/whitespace...   });
  for (let i = 0; i < lines.length; i++) {
    if (!/expect\s*\(/.test(lines[i])) continue;
    if (!/\.catch\s*\(\s*\(\s*\)\s*=>\s*\{\s*$/.test(lines[i].trimEnd())) continue;
    let j = i + 1;
    let bodyHasContent = false;
    while (j < lines.length && !/^\s*\}\s*\)\s*;?\s*$/.test(lines[j])) {
      if (stripLineComment(lines[j]).trim().length > 0) bodyHasContent = true;
      j++;
      if (j - i > 15) break; // safety bound — not a match if it runs away
    }
    if (j < lines.length && !bodyHasContent) {
      out.push({ file: rel, line: i + 1, rule: 'no-swallowed-assertion', message: 'expect(...).catch(() => { <comment-only> }) makes the assertion structurally unable to fail — the catch body has no real check.' });
    }
  }
  return out;
}

/** A "PRODUCT DEFECT SUSPECTED" marker with no expect() nearby means the check can never fail. */
function checkSilentDefectMarkers(rel: string, lines: string[]): Violation[] {
  const out: Violation[] = [];
  lines.forEach((line, i) => {
    if (!/PRODUCT DEFECT SUSPECTED/.test(line)) return;
    const windowStart = Math.max(0, i - 5);
    const windowEnd = Math.min(lines.length, i + 6);
    const windowText = lines.slice(windowStart, windowEnd).join('\n');
    if (!/expect\s*\(/.test(windowText)) {
      out.push({ file: rel, line: i + 1, rule: 'no-silent-defect-marker', message: '"PRODUCT DEFECT SUSPECTED" comment has no expect() within +/-5 lines — a genuinely broken product will not fail this test.' });
    }
  });
  return out;
}

function checkFileHardRules(file: string): Violation[] {
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  return [
    ...checkWaitForTimeout(rel, lines),
    ...checkTestOnly(rel, lines),
    ...checkDeclarativeSkip(rel, lines),
    ...checkSwallowedAssertions(rel, lines),
    ...checkSilentDefectMarkers(rel, lines),
  ];
}

// ── Soft rules (informational only, never blocking) ────────────────────────────

interface TestBlock { title: string; startLine: number; body: string; }

/** Split a spec file into per-test bodies via brace-depth counting from each test(/test.skip(/test.fixme( call. */
function extractTestBlocks(text: string): TestBlock[] {
  const blocks: TestBlock[] = [];
  const callRe = /\btest(?:\.skip|\.fixme)?\s*\(\s*(['"`])((?:[^\\]|\\.)*?)\1/g;
  let m: RegExpExecArray | null;
  while ((m = callRe.exec(text)) !== null) {
    const title = m[2];
    const openParenIdx = m.index + m[0].indexOf('(');
    let depth = 0, i = openParenIdx, end = -1;
    for (; i < text.length; i++) {
      if (text[i] === '(') depth++;
      else if (text[i] === ')') { depth--; if (depth === 0) { end = i; break; } }
    }
    if (end === -1) continue;
    const body = text.slice(openParenIdx, end + 1);
    const startLine = text.slice(0, m.index).split('\n').length;
    blocks.push({ title, startLine, body });
  }
  return blocks;
}

function checkPerfThresholdDrift(rel: string, text: string, kbTargets: Map<string, Record<string, string>>): string[] {
  const warnings: string[] = [];
  for (const block of extractTestBlocks(text)) {
    const titleMatch = block.title.match(/within (\d+)\s*(second|s)\b/i);
    const thresholdMatch = block.body.match(/toBeLessThan\((\d+)\)/);
    if (!titleMatch || !thresholdMatch) continue;
    const claimedMs = Number(titleMatch[1]) * 1000;
    const assertedMs = Number(thresholdMatch[1]);
    if (assertedMs > claimedMs * 2) {
      warnings.push(`${rel}:${block.startLine} [perf-threshold-drift] "${block.title}" claims ${titleMatch[1]}${titleMatch[2]} but asserts toBeLessThan(${assertedMs}) — over 2x looser than the title. Reconcile with the KB performanceTargets or fix the title.`);
    }
    const moduleCode = block.title.match(/TC-([A-Z]+)-\d+/)?.[1];
    if (moduleCode && kbTargets.has(moduleCode)) {
      const targets = kbTargets.get(moduleCode)!;
      for (const target of Object.values(targets)) {
        const targetMs = Number(target.match(/(\d+)/)?.[1] ?? 0) * 1000;
        if (targetMs > 0 && assertedMs > targetMs * 2 && !block.body.includes('KB-DEVIATION')) {
          warnings.push(`${rel}:${block.startLine} [perf-threshold-drift] "${block.title}" asserts ${assertedMs}ms, more than 2x the KB performanceTargets value "${target}" for module ${moduleCode} — add a "// KB-DEVIATION: <reason>" comment if intentional.`);
        }
      }
    }
  }
  return warnings;
}

function checkTitleCountMismatch(rel: string, text: string): string[] {
  const warnings: string[] = [];
  for (const block of extractTestBlocks(text)) {
    const countMatch = block.title.match(/\ball (\d+)\b/i);
    if (!countMatch) continue;
    const claimed = Number(countMatch[1]);
    const arrayMatch = block.body.match(/=\s*\[([\s\S]*?)\];/);
    if (!arrayMatch) continue;
    const items = arrayMatch[1].split(',').map(s => s.trim()).filter(Boolean);
    if (items.length !== claimed) {
      warnings.push(`${rel}:${block.startLine} [title-count-mismatch] "${block.title}" claims "all ${claimed}" but the checked array has ${items.length} entries.`);
    }
  }
  return warnings;
}

function loadKbPerformanceTargets(): Map<string, Record<string, string>> {
  const map = new Map<string, Record<string, string>>();
  for (const f of walk(KB_MODULES_DIR, [], '.json')) {
    try {
      const data = JSON.parse(fs.readFileSync(f, 'utf8'));
      if (data.module && data.performanceTargets) map.set(String(data.module).toUpperCase(), data.performanceTargets);
    } catch { /* skip unparsable KB file */ }
  }
  return map;
}

function checkKbKnownFailureRegression(pageObjectFiles: string[]): string[] {
  const warnings: string[] = [];
  for (const f of walk(KB_MODULES_DIR, [], '.json')) {
    const rel = path.relative(ROOT, f).split(path.sep).join('/');
    let data: Record<string, unknown>;
    try { data = JSON.parse(fs.readFileSync(f, 'utf8')); } catch { continue; }
    const known = data['knownFailure'] as Record<string, unknown> | undefined;
    const hint = known?.['hint'] as string | undefined;
    if (!hint) continue;
    const quoted = [...hint.matchAll(/'([^']+)'/g)].map(m => m[1]);
    for (const selector of quoted) {
      for (const pageFile of pageObjectFiles) {
        const pageRel = path.relative(ROOT, pageFile).split(path.sep).join('/');
        const content = fs.readFileSync(pageFile, 'utf8');
        const needle = `.locator('${selector}')`;
        if (content.includes(needle)) {
          warnings.push(`${pageRel} [kb-known-failure-regression] still uses ${needle}, flagged fragile by KB module ${rel} (${known?.['tc']}): "${hint}"`);
        }
      }
    }
  }
  return warnings;
}

// ── Baseline ────────────────────────────────────────────────────────────────────

type Baseline = Record<string, Record<string, number>>; // file -> rule -> count

function loadBaseline(): Baseline {
  if (!fs.existsSync(BASELINE_PATH)) return {};
  try { return JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf8')); } catch { return {}; }
}

function violationsToBaseline(violations: Violation[]): Baseline {
  const baseline: Baseline = {};
  for (const v of violations) {
    baseline[v.file] ??= {};
    baseline[v.file][v.rule] = (baseline[v.file][v.rule] ?? 0) + 1;
  }
  return baseline;
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main(): void {
  const updateBaseline = process.argv.includes('--update-baseline');

  const files = TARGET_DIRS.flatMap(d => walk(path.join(ROOT, d)));
  const hardViolations = files.flatMap(checkFileHardRules);

  const kbTargets = loadKbPerformanceTargets();
  const specFiles = files.filter(f => f.includes(`${path.sep}e2e${path.sep}`));
  const pageObjectFiles = files.filter(f => f.includes(`${path.sep}page-objects${path.sep}`));
  const softWarnings = [
    ...specFiles.flatMap(f => checkPerfThresholdDrift(path.relative(ROOT, f).split(path.sep).join('/'), fs.readFileSync(f, 'utf8'), kbTargets)),
    ...specFiles.flatMap(f => checkTitleCountMismatch(path.relative(ROOT, f).split(path.sep).join('/'), fs.readFileSync(f, 'utf8'))),
    ...checkKbKnownFailureRegression(pageObjectFiles),
  ];

  if (updateBaseline) {
    fs.writeFileSync(BASELINE_PATH, JSON.stringify(violationsToBaseline(hardViolations), null, 2) + '\n');
    console.log(`[lint-test-conventions] Baseline updated: ${hardViolations.length} pre-existing violation(s) recorded across ${Object.keys(violationsToBaseline(hardViolations)).length} file(s).`);
    return;
  }

  const baseline = loadBaseline();
  const seenCounts: Record<string, Record<string, number>> = {};
  const newViolations: Violation[] = [];
  for (const v of hardViolations) {
    seenCounts[v.file] ??= {};
    seenCounts[v.file][v.rule] = (seenCounts[v.file][v.rule] ?? 0) + 1;
    const allowed = baseline[v.file]?.[v.rule] ?? 0;
    if (seenCounts[v.file][v.rule] > allowed) newViolations.push(v);
  }

  if (softWarnings.length) {
    console.log(`\n[lint-test-conventions] ${softWarnings.length} informational warning(s) (non-blocking):`);
    softWarnings.forEach(w => console.log(`  ⚠ ${w}`));
  }

  const baselinedCount = hardViolations.length - newViolations.length;
  if (baselinedCount > 0) {
    console.log(`\n[lint-test-conventions] ${baselinedCount} pre-existing violation(s) covered by baseline (not blocking) — see ${path.relative(ROOT, BASELINE_PATH)}.`);
  }

  if (newViolations.length) {
    console.log(`\n[lint-test-conventions] ${newViolations.length} NEW violation(s) beyond baseline:`);
    newViolations.forEach(v => console.log(`  ✗ ${v.file}:${v.line} [${v.rule}] ${v.message}`));
    console.log('\nFix these, or if intentional, run with --update-baseline after review.');
    process.exit(1);
  }

  console.log('[lint-test-conventions] ✓ No new violations beyond baseline.');
}

main();
