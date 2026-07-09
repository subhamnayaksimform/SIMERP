/**
 * Shared failure-triage logic used by both the Excel reporter and the bug-filing path
 * in scripts/pipeline.ts, so "what counts as a failure / how severe / is it a duplicate"
 * can never diverge between the two.
 *
 * The flaky-detection logic here is the one already used (and correct) in
 * .claude/skills/excel-reporter/scripts/generate-excel.ts — moved here so it has a
 * single owner instead of being reimplemented (badly) in the bug-filing path.
 */

export interface TestResult {
  title: string;
  testId?: string;
  module: string;
  category: string;
  status: string;
  duration: number;
  file?: string;
  error?: string;
  screenshotPath?: string;
  videoPath?: string;
  tracePath?: string;
  retryCount: number;
  isRegression: boolean;
  isFlaky: boolean;
  consoleErrors?: string;
}

export function extractModule(title: string): string {
  const m = title.match(/TC-([A-Z]+)-\d+/);
  return m ? m[1] : 'General';
}

export function extractCategory(title: string): string {
  const tags = ['@smoke', '@functional', '@negative', '@boundary', '@security', '@regression', '@a11y', '@performance'];
  for (const tag of tags) {
    if (title.includes(tag)) return tag.slice(1);
  }
  return 'functional';
}

export function extractTestId(title: string): string | undefined {
  const m = title.match(/(TC-[A-Z]+-\d+)/);
  return m ? m[1] : undefined;
}

/**
 * Parse a Playwright JSON reporter output into a flat list of TestResult records.
 * A test is flaky when Playwright's own top-level status says so, OR when it took
 * more than one attempt and the last attempt passed — never trust a single failed
 * attempt in isolation without checking the full attempts array.
 */
export function parsePlaywrightResults(data: any): {
  results: TestResult[];
  browser: string;
  env: string;
  startTime: string;
  totalDuration: number;
} {
  const results: TestResult[] = [];
  let browser = 'chromium';
  const env = (data.config?.projects?.[0]?.use?.baseURL) || process.env.BASE_URL || '';
  const startTime: string = data.startTime || new Date().toISOString();
  let totalDuration = 0;

  if (data.config?.projects?.[0]?.name) {
    browser = data.config.projects[0].name;
  }

  const visitSuite = (suite: any): void => {
    for (const s of suite.suites || []) visitSuite(s);
    for (const spec of suite.specs || []) {
      for (const t of spec.tests || []) {
        const attempts: any[] = t.results || [];
        const lastResult = attempts[attempts.length - 1] || {};
        const isFlaky = t.status === 'flaky' || (attempts.length > 1 && lastResult.status === 'passed');

        let finalStatus: string = t.status || lastResult.status || 'unknown';
        if (isFlaky) finalStatus = 'flaky';

        const attachments: Array<{ name: string; path?: string }> = lastResult.attachments || [];
        const screenshotPath = attachments.find(a => a.name === 'screenshot')?.path;
        const videoPath = attachments.find(a => a.name === 'video')?.path;
        const tracePath = attachments.find(a => a.name === 'trace')?.path;

        const title: string = spec.title || '';
        totalDuration += lastResult.duration || 0;

        const stderr = (lastResult.stderr || []) as string[];
        results.push({
          title,
          testId: extractTestId(title),
          module: extractModule(title),
          category: extractCategory(title),
          status: finalStatus,
          duration: lastResult.duration || 0,
          file: spec.file,
          error: lastResult.error?.message,
          screenshotPath,
          videoPath,
          tracePath,
          retryCount: Math.max(0, attempts.length - 1),
          isRegression: title.includes('@regression'),
          isFlaky,
          consoleErrors: stderr.join('\n').trim() || undefined,
        });
      }
    }
  };

  for (const s of data.suites || []) visitSuite(s);
  return { results, browser, env, startTime, totalDuration };
}

/** A result is reportable as a bug only if it actually failed and stayed failed. */
export function isReportable(result: TestResult): boolean {
  if (result.isFlaky) return false;
  if (result.status === 'skipped') return false;
  return result.status === 'failed' || result.status === 'timedOut';
}

/**
 * Reproducibility per bug-reporter.agent.md's table:
 *   - failed on every attempt (retryCount could be 0 if retries were disabled) -> Always
 *   - only one attempt total and it failed -> Unknown (needs a forced retry before filing)
 */
export function reproducibility(result: TestResult): 'always' | 'unknown' {
  return result.retryCount === 0 ? 'unknown' : 'always';
}

/**
 * Severity classification driven by the test's own @tag, matching
 * bug-reporter.agent.md's Severity Heuristics table — NOT a substring match on
 * the title (a @boundary test that merely mentions "login" must not become Critical).
 */
export function classifySeverity(result: TestResult): 'Critical' | 'Major' | 'Minor' | 'Trivial' {
  const title = result.title;
  const hasTag = (tag: string) => title.includes(`@${tag}`);
  if (hasTag('smoke')) return 'Critical';
  if (/login|auth|app[- ]launch/i.test(title) && (hasTag('smoke') || hasTag('functional'))) return 'Critical';
  if (hasTag('functional') || hasTag('regression')) return 'Major';
  if (hasTag('a11y')) return 'Trivial';
  if (hasTag('boundary') || hasTag('negative')) return 'Minor';
  return 'Minor';
}

export interface ZohoIssueLike {
  id: string;
  name: string;
  description: string;
  status: string;
}

export interface DedupCandidate {
  title: string;
  module: string;
  testId?: string;
  errorFirstLine: string;
}

/**
 * Best-effort duplicate check against the flat Zoho issue list returned by
 * fetchAllIssues(). This can only compare the signals present in that shape
 * (title/description text) — it is not the full 7-signal comparison from
 * bug-reporter.agent.md (which also has route/locator/API endpoint available
 * when routed through the agent with richer per-bug metadata). Requires at
 * least 2 of 3 available signals to match before calling it a duplicate.
 */
export function dedupeAgainstZoho(candidate: DedupCandidate, openIssues: ZohoIssueLike[]): ZohoIssueLike | null {
  for (const issue of openIssues) {
    if (/closed/i.test(issue.status)) continue;
    const haystack = `${issue.name}\n${issue.description}`;
    let matches = 0;
    if (candidate.testId && haystack.includes(candidate.testId)) matches++;
    if (candidate.module && new RegExp(`\\b${candidate.module}\\b`, 'i').test(haystack)) matches++;
    if (candidate.errorFirstLine && candidate.errorFirstLine.length > 12 && haystack.includes(candidate.errorFirstLine.slice(0, 80))) matches++;
    if (matches >= 2) return issue;
  }
  return null;
}
