/**
 * Fuzzy duplicate detection for newly-generated test cases against every other
 * reports/test-cases/cases-*.json file already on disk. Array-shape/field validation
 * itself is handled by the zod testCasesSchema in scripts/lib/schemas.ts (which also
 * catches the "file is a single object, not an array" class of bug) — this module is
 * specifically about cross-file duplication that schema validation can't see.
 */

export interface MinimalTestCase {
  id: string;
  module: string;
  title: string;
  steps: string[];
}

export interface DuplicateMatch {
  newCase: MinimalTestCase;
  existingCase: MinimalTestCase;
  existingFile: string;
  similarity: number;
}

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}

function fingerprint(tc: MinimalTestCase): Set<string> {
  const text = normalize(`${tc.title} ${(tc.steps ?? []).join(' ')}`);
  return new Set(text.split(' ').filter(w => w.length > 2));
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 0;
  let intersection = 0;
  for (const x of a) if (b.has(x)) intersection++;
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

/**
 * Flag near-duplicate test cases (same module, title+steps fingerprint similarity
 * above threshold) between the freshly generated batch and previously generated
 * cases-*.json files, so redundant Playwright generation/execution can be avoided.
 */
export function findDuplicateTestCases(
  newCases: MinimalTestCase[],
  existingFiles: Array<{ file: string; cases: MinimalTestCase[] }>,
  threshold = 0.85,
): DuplicateMatch[] {
  const matches: DuplicateMatch[] = [];
  for (const nc of newCases) {
    const ncFp = fingerprint(nc);
    for (const { file, cases } of existingFiles) {
      for (const ec of cases) {
        if (!ec.module || ec.module !== nc.module) continue;
        if (ec.id === nc.id) continue;
        const similarity = jaccard(ncFp, fingerprint(ec));
        if (similarity >= threshold) matches.push({ newCase: nc, existingCase: ec, existingFile: file, similarity });
      }
    }
  }
  return matches;
}
