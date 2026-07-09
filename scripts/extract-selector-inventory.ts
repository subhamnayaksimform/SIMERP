/**
 * Scans tests/page-objects/**\/*.page.ts for real, already-reviewed locator call
 * sites and writes reports/knowledge-base/selector-inventory.json.
 *
 * This is the ground truth automation-generator.agent.md must check candidate
 * selectors against before writing a new one — the prior failure mode was
 * inventing plausible-looking `getByTestId` names that don't exist anywhere in
 * the real page objects (confirmed against reports/requirements/*.json, which
 * had fabricated testids like EMP_SEARCH/BADGE_DEPARTMENT never used in code).
 *
 * Regex-based on purpose — this codebase's page objects are consistently
 * single-line locator declarations; a full TS parser would be overkill for a
 * ground-truth snapshot tool.
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..');
const PAGE_OBJECTS_DIR = path.join(ROOT, 'tests', 'page-objects');
const OUT_PATH = path.join(ROOT, 'reports', 'knowledge-base', 'selector-inventory.json');

interface SelectorEntry {
  kind: 'getByRole' | 'getByTestId' | 'getByLabel' | 'getByPlaceholder';
  args: string;
  context: string;
  line: number;
}

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) entries.push(...walk(full));
    else if (entry.name.endsWith('.page.ts')) entries.push(full);
  }
  return entries;
}

/** Best-effort: the property this locator is assigned to, or the nearest enclosing method name. */
function extractContext(lines: string[], lineIdx: number): string {
  const propMatch = lines[lineIdx].match(/this\.(\w+)\s*=/);
  if (propMatch) return propMatch[1];
  for (let i = lineIdx; i >= 0; i--) {
    const m = lines[i].match(/(?:async\s+)?(\w+)\s*\([^)]*\)\s*(?::\s*[^{]+)?\{/);
    if (m && !/^(if|for|while|switch|catch)$/.test(m[1])) return m[1];
  }
  return '(unknown)';
}

function extractSelectors(file: string): SelectorEntry[] {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  const entries: SelectorEntry[] = [];
  const patterns: Array<{ kind: SelectorEntry['kind']; re: RegExp }> = [
    { kind: 'getByTestId',      re: /getByTestId\(\s*(['"`])((?:[^\\]|\\.)*?)\1\s*\)/g },
    { kind: 'getByRole',        re: /getByRole\(\s*(['"`])((?:[^\\]|\\.)*?)\1\s*(?:,\s*(\{[^}]*\}))?\s*\)/g },
    { kind: 'getByLabel',       re: /getByLabel\(\s*([^)]*?)\)/g },
    { kind: 'getByPlaceholder', re: /getByPlaceholder\(\s*([^)]*?)\)/g },
  ];
  lines.forEach((line, i) => {
    for (const { kind, re } of patterns) {
      re.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = re.exec(line)) !== null) {
        const args = (kind === 'getByRole' || kind === 'getByTestId')
          ? `${m[2]}${m[3] ? ', ' + m[3] : ''}`
          : m[1].trim();
        entries.push({ kind, args, context: extractContext(lines, i), line: i + 1 });
      }
    }
  });
  return entries;
}

function main(): void {
  const files = walk(PAGE_OBJECTS_DIR);
  const inventory: Record<string, { file: string; selectors: SelectorEntry[] }> = {};
  for (const file of files) {
    const moduleName = path.relative(PAGE_OBJECTS_DIR, file).replace(/\.page\.ts$/, '').split(path.sep).join('/');
    inventory[moduleName] = { file: path.relative(ROOT, file).split(path.sep).join('/'), selectors: extractSelectors(file) };
  }
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(inventory, null, 2) + '\n');
  const total = Object.values(inventory).reduce((sum, v) => sum + v.selectors.length, 0);
  console.log(`[extract-selector-inventory] wrote ${path.relative(ROOT, OUT_PATH)} — ${total} selector(s) across ${files.length} page object(s).`);
}

main();
