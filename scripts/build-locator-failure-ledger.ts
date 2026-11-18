/**
 * Reads reports/results/results.json (Playwright's JSON reporter, produced by `npm test` /
 * playwright-runner) and merges every locator-related failure into
 * reports/knowledge-base/locator-failure-ledger.json — a persistent record of which locators
 * are actually fragile in practice, keyed by (module, file:line, locator), instead of that
 * knowledge living only in scattered page-object comments.
 *
 * automation-generator.agent.md consults this ledger the same way it already consults
 * selector-inventory.json, so a locator flagged here gets a scoped fallback instead of being
 * regenerated as-is on the next run.
 *
 * Also emits reports/knowledge-base/testid-recommendations.json: entries seen at least twice
 * that still don't use a getByTestId locator, surfaced as a targeted ask for devs to add a
 * data-testid — automation itself never invents one (see extract-selector-inventory.ts).
 */

import * as fs from 'fs';
import * as path from 'path';
import { parsePlaywrightResults, TestResult } from './lib/failure-triage';
import { classifyLocatorFailure, LocatorErrorKind } from './lib/locator-failure-signatures';
import { DomSnapshot } from './lib/dom-snapshot-types';

const ROOT = path.resolve(__dirname, '..');
const DEFAULT_INPUT = path.join(ROOT, 'reports', 'results', 'results.json');
const LEDGER_PATH = path.join(ROOT, 'reports', 'knowledge-base', 'locator-failure-ledger.json');
const TESTID_RECOMMENDATIONS_PATH = path.join(ROOT, 'reports', 'knowledge-base', 'testid-recommendations.json');
const SNAPSHOT_DIR = path.join(ROOT, 'reports', 'knowledge-base', 'dom-snapshots');

interface LedgerEntry {
  module: string;
  file: string;
  line: number;
  locatorSnippet: string;
  errorKind: LocatorErrorKind;
  occurrences: number;
  lastSeen: string;
  testIds: string[];
  recommendedAlternative?: string;
}

interface Ledger {
  entries: LedgerEntry[];
}

interface TestIdRecommendation {
  module: string;
  file: string;
  line: number;
  currentLocator: string;
  occurrences: number;
  suggestion: string;
}

function loadLedger(): Ledger {
  if (!fs.existsSync(LEDGER_PATH)) return { entries: [] };
  return JSON.parse(fs.readFileSync(LEDGER_PATH, 'utf8'));
}

function entryKey(e: Pick<LedgerEntry, 'module' | 'file' | 'line' | 'locatorSnippet'>): string {
  return `${e.module}|${e.file}:${e.line}|${e.locatorSnippet.replace(/\s+/g, ' ').trim()}`;
}

function parseArgs(argv: string[]): { input: string } {
  let input = DEFAULT_INPUT;
  for (const a of argv.slice(2)) {
    const [k, v] = a.replace(/^--/, '').split('=');
    if (k === 'input' && v) input = path.resolve(ROOT, v);
  }
  return { input };
}

function loadDomSnapshot(moduleCode: string): DomSnapshot | null {
  const p = path.join(SNAPSHOT_DIR, `${moduleCode}.json`);
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

/** Pulls the quoted accessible-name/text out of a locator snippet, e.g.
 * `getByRole('button', { name: 'Add Skills' })` -> "Add Skills", `getByText('Add Goal')` -> "Add Goal". */
function extractLocatorName(locatorSnippet: string): string | null {
  const nameMatch = locatorSnippet.match(/name:\s*['"]([^'"]+)['"]/);
  if (nameMatch) return nameMatch[1];
  const soleArgMatch = locatorSnippet.match(/^\w+\(\s*['"]([^'"]+)['"]\s*\)/);
  if (soleArgMatch) return soleArgMatch[1];
  return null;
}

function normalizeWords(s: string): Set<string> {
  return new Set(s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().split(/\s+/).filter(Boolean));
}

/** Simple normalized word-overlap match — no fuzzy-match dependency. Returns the snapshot
 * element (across every captured state) whose accessible name/text overlaps the failing
 * locator's name the most, provided at least one real word actually matches. */
function findBestMatch(name: string, snapshot: DomSnapshot): string | null {
  const target = normalizeWords(name);
  if (target.size === 0) return null;

  let best: { locator: string; score: number } | null = null;
  for (const state of snapshot.states) {
    for (const el of state.interactiveElements) {
      const candidate = el.accessibleName || el.text;
      if (!candidate) continue;
      const words = normalizeWords(candidate);
      const overlap = [...target].filter(w => words.has(w)).length;
      if (overlap === 0) continue;
      const score = overlap / Math.max(target.size, words.size);
      if (!best || score > best.score) best = { locator: el.suggestedLocator, score };
    }
  }
  return best ? best.locator : null;
}

function suggestTestIdName(locatorSnippet: string, context: string): string {
  const kebab = context
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return kebab || 'unnamed-element';
}

function main(): void {
  const { input } = parseArgs(process.argv);
  if (!fs.existsSync(input)) {
    console.error(`No results file found at ${input} — run tests first (npm test) before building the ledger.`);
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(input, 'utf8'));
  const { results, startTime } = parsePlaywrightResults(data);

  const ledger = loadLedger();
  const byKey = new Map<string, LedgerEntry>(ledger.entries.map(e => [entryKey(e), e]));

  const relevant: TestResult[] = results.filter(
    r => r.status === 'failed' || r.status === 'timedOut' || r.isFlaky
  );

  for (const r of relevant) {
    const signature = classifyLocatorFailure(r.error);
    if (!signature || !r.errorLocation) continue;

    const key = entryKey({
      module: r.module,
      file: r.errorLocation.file,
      line: r.errorLocation.line,
      locatorSnippet: signature.locatorSnippet,
    });

    const existing = byKey.get(key);
    if (existing) {
      existing.occurrences += 1;
      existing.lastSeen = startTime;
      if (r.testId && !existing.testIds.includes(r.testId)) existing.testIds.push(r.testId);
    } else {
      byKey.set(key, {
        module: r.module,
        file: r.errorLocation.file,
        line: r.errorLocation.line,
        locatorSnippet: signature.locatorSnippet,
        errorKind: signature.kind,
        occurrences: 1,
        lastSeen: startTime,
        testIds: r.testId ? [r.testId] : [],
      });
    }
  }

  const entries = Array.from(byKey.values()).sort((a, b) => b.occurrences - a.occurrences);

  // Close the recommendedAlternative loop: cross-reference each entry's own module's dom-snapshot
  // (captured via `npm run capture:dom-snapshot`) to suggest a concrete alternative locator,
  // instead of leaving the field permanently unset with no visible reason why.
  const snapshotCache = new Map<string, DomSnapshot | null>();
  const modulesWithoutSnapshot = new Set<string>();
  for (const entry of entries) {
    if (!snapshotCache.has(entry.module)) snapshotCache.set(entry.module, loadDomSnapshot(entry.module));
    const snapshot = snapshotCache.get(entry.module);
    if (!snapshot) {
      modulesWithoutSnapshot.add(entry.module);
      continue;
    }
    const name = extractLocatorName(entry.locatorSnippet);
    if (!name) continue;
    const match = findBestMatch(name, snapshot);
    if (match) entry.recommendedAlternative = match;
  }
  for (const module of modulesWithoutSnapshot) {
    console.log(`No dom-snapshot for module ${module} — recommendedAlternative left empty for its entr(ies); run npm run capture:dom-snapshot -- --module=${module} --routes=<route> to enable this.`);
  }

  fs.mkdirSync(path.dirname(LEDGER_PATH), { recursive: true });
  fs.writeFileSync(LEDGER_PATH, JSON.stringify({ entries }, null, 2) + '\n');

  const recommendations: TestIdRecommendation[] = entries
    .filter(e => e.occurrences >= 2 && !e.locatorSnippet.startsWith('getByTestId('))
    .map(e => ({
      module: e.module,
      file: e.file,
      line: e.line,
      currentLocator: e.locatorSnippet,
      occurrences: e.occurrences,
      suggestion: `data-testid="${suggestTestIdName(e.locatorSnippet, e.module)}"`,
    }));
  fs.mkdirSync(path.dirname(TESTID_RECOMMENDATIONS_PATH), { recursive: true });
  fs.writeFileSync(TESTID_RECOMMENDATIONS_PATH, JSON.stringify({ recommendations }, null, 2) + '\n');

  console.log(`Locator failure ledger: ${entries.length} entries (${LEDGER_PATH})`);
  console.log(`Testid recommendations: ${recommendations.length} entries (${TESTID_RECOMMENDATIONS_PATH})`);
}

main();
