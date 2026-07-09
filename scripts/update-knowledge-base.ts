/**
 * CLI fallback for the Knowledge Base Curator agent.
 * Fetches all Zoho bugs via REST API, extracts stub edge case entries,
 * and updates reports/knowledge-base/edge-cases-catalog.json.
 *
 * Usage:
 *   npm run kb:update
 *   npm run kb:update -- --dry-run         (print counts, write nothing)
 *   npm run kb:update -- --full-rebuild    (reprocess all bugs, not just new ones)
 *   npm run kb:update -- --since=2026-01-01
 */

import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const REGION = process.env.ZOHO_REGION || 'com';
const PORTAL_ID = process.env.ZOHO_PORTAL_ID || '';
const PROJECT_ID = process.env.ZOHO_PROJECT_ID || '';
const CLIENT_ID = process.env.ZOHO_CLIENT_ID || '';
const CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET || '';
const REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN || '';

const CATALOG_PATH = path.resolve(__dirname, '../reports/knowledge-base/edge-cases-catalog.json');
const KB_DIR = path.dirname(CATALOG_PATH);
const MODULES_DIR = path.join(KB_DIR, 'modules');

// Mirrors the SIM ERP nav tree — see .claude/instructions/qa-conventions.md.
const CODE_TO_FILE: Record<string, string> = {
  EMPDET: 'employee/employee-details', EMPSKL: 'employee/skills',
  EMPGOL: 'employee/goals', EMPALC: 'employee/allocation-correction',
  TEAMDET: 'team/team-details', TEAMWKU: 'team/weekly-updates',
  PROJDET: 'projects/project-details', PROJTCH: 'projects/tech-stack',
  DEPTSET: 'department/department-settings', DEPTCMP: 'department/competencies',
  ADMROL: 'admin/roles-permissions', ADMUSR: 'admin/assign-user-roles', ADMCTR: 'admin/contractors',
  HELP: 'help-support', AUTH: 'auth',
  RPT: 'generic/list-views', CFG: 'generic/configuration',
  INTG: 'generic/api-validation', GEN: 'generic/ui-patterns',
};

interface ZohoIssue {
  id: string;
  title: string;
  description?: string;
  severity?: { type: string };
  status?: { type: string };
  created_time?: string;
  closed_time?: string;
  module?: string;
}

interface EdgeCase {
  id: string;
  pattern: string;
  triggerCondition: string;
  category: string;
  severity: string;
  frequency: number;
  bugIds: string[];
  lastSeen: string;
  testHint: string;
  status: string;
  source?: string;
  needsCuratorReview?: boolean;
}

interface ModuleEntry {
  moduleCode: string;
  edgeCases: EdgeCase[];
  bugPatterns: Array<{ pattern: string; occurrenceCount: number; testStrategy: string }>;
  regressionTriggers: Array<{ trigger: string; risk: string; relatedEdgeCaseIds: string[] }>;
}

interface Catalog {
  schemaVersion: string;
  lastUpdated: string;
  lastUpdateMethod?: string;
  totalBugsAnalyzed: number;
  byModule: Record<string, ModuleEntry>;
  crossModule: { edgeCases: EdgeCase[] };
}

// Ordered most-specific-first to avoid false positives (e.g. ADMUSR's "user role" must be
// checked before ADMROL's bare "role", EMPALC/EMPGOL/EMPSKL before generic "employee" terms).
const MODULE_PATTERNS: Array<[RegExp, string]> = [
  [/\[EMPDET\]|employee detail|employee profile/i, 'EMPDET'],
  [/\[EMPSKL\]|\bskill/i, 'EMPSKL'],
  [/\[EMPGOL\]|\bgoal/i, 'EMPGOL'],
  [/\[EMPALC\]|allocation correction|\ballocation\b/i, 'EMPALC'],
  [/\[TEAMDET\]|team detail/i, 'TEAMDET'],
  [/\[TEAMWKU\]|weekly update/i, 'TEAMWKU'],
  [/\[PROJDET\]|project detail/i, 'PROJDET'],
  [/\[PROJTCH\]|tech stack/i, 'PROJTCH'],
  [/\[DEPTSET\]|department setting/i, 'DEPTSET'],
  [/\[DEPTCMP\]|competenc/i, 'DEPTCMP'],
  [/\[ADMUSR\]|assign user role|user role/i, 'ADMUSR'],
  [/\[ADMROL\]|roles?\s*&\s*permission|\brole\b|\bpermission/i, 'ADMROL'],
  [/\[ADMCTR\]|contractor/i, 'ADMCTR'],
  [/\[HELP\]|\bhelp\b|\bsupport\b/i, 'HELP'],
  [/\[AUTH\]|login|authentication|session|sso/i, 'AUTH'],
  [/\[RPT\]|report|dashboard|analytic|pagination|\bfilter\b/i, 'RPT'],
  [/\[CFG\]|settings|config/i, 'CFG'],
  [/\[INTG\]|integration|webhook|external|\bapi\b/i, 'INTG'],
];

/** Retry a flaky network call with exponential backoff (1s/2s/4s) before giving up. */
async function withRetry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (e: unknown) {
      if (i === attempts - 1) throw e;
      await new Promise(resolve => setTimeout(resolve, 1000 * 2 ** i));
    }
  }
  throw new Error('unreachable');
}

function detectModule(title: string): string {
  for (const [pattern, code] of MODULE_PATTERNS) {
    if (pattern.test(title)) return code;
  }
  return 'GEN';
}

function mapSeverity(zohoSeverity: string): string {
  const s = zohoSeverity.toLowerCase();
  if (s.includes('critical') || s.includes('blocker')) return 'critical';
  if (s.includes('major') || s.includes('high')) return 'major';
  if (s.includes('minor') || s.includes('medium')) return 'minor';
  return 'trivial';
}

function mapStatus(zohoStatus: string): string {
  const s = zohoStatus.toLowerCase();
  if (s.includes('fix') || s.includes('close') || s.includes('done') || s.includes('resolv')) return 'fixed';
  if (s.includes("won't") || s.includes('wont') || s.includes('invalid') || s.includes('duplicate')) return 'wont-fix';
  return 'open';
}

function isoDate(dateStr?: string): string {
  if (!dateStr) return new Date().toISOString().slice(0, 10);
  try { return new Date(dateStr).toISOString().slice(0, 10); } catch { return new Date().toISOString().slice(0, 10); }
}

function nextEdgeCaseId(module: ModuleEntry): string {
  const existing = module.edgeCases.map(e => {
    const m = e.id.match(/-(\d+)$/);
    return m ? parseInt(m[1], 10) : 0;
  });
  const next = existing.length ? Math.max(...existing) + 1 : 1;
  return `EC-${module.moduleCode}-${String(next).padStart(3, '0')}`;
}

async function refreshZohoToken(): Promise<string> {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    throw new Error('ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, and ZOHO_REFRESH_TOKEN must be set in .env');
  }
  const url = `https://accounts.zoho.${REGION}/oauth/v2/token`;
  const params = new URLSearchParams({
    grant_type: 'refresh_token',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    refresh_token: REFRESH_TOKEN,
  });
  const res = await withRetry(() => axios.post(url, params.toString(), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }));
  if (!res.data.access_token) throw new Error(`Token refresh failed: ${JSON.stringify(res.data)}`);
  return res.data.access_token as string;
}

async function fetchAllIssues(token: string): Promise<ZohoIssue[]> {
  if (!PORTAL_ID || !PROJECT_ID) {
    throw new Error('ZOHO_PORTAL_ID and ZOHO_PROJECT_ID must be set in .env');
  }
  const baseUrl = `https://projectsapi.zoho.${REGION}/restapi/portal/${PORTAL_ID}/projects/${PROJECT_ID}/bugs/`;
  const headers = { Authorization: `Zoho-oauthtoken ${token}` };
  const all: ZohoIssue[] = [];
  let index = 1;
  const range = 100;

  while (true) {
    const res = await withRetry(() => axios.get(baseUrl, {
      headers,
      params: { index, range, status: 'all' },
    }));
    const bugs: ZohoIssue[] = res.data.bugs || [];
    all.push(...bugs);
    if (bugs.length < range) break;
    index += range;
  }
  return all;
}

function loadCatalog(): Catalog {
  if (fs.existsSync(CATALOG_PATH)) {
    return JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8')) as Catalog;
  }
  const empty: Catalog = {
    schemaVersion: '1.0',
    lastUpdated: '2000-01-01',
    totalBugsAnalyzed: 0,
    byModule: {},
    crossModule: { edgeCases: [] },
  };
  for (const code of Object.keys(CODE_TO_FILE)) {
    empty.byModule[code] = { moduleCode: code, edgeCases: [], bugPatterns: [], regressionTriggers: [] };
  }
  return empty;
}

function updateCatalog(catalog: Catalog, issues: ZohoIssue[], since: string): { added: number; updated: number } {
  let added = 0;
  let updated = 0;
  const sinceDate = new Date(since);

  for (const issue of issues) {
    const created = new Date(issue.created_time || '2000-01-01');
    if (created <= sinceDate) continue;

    const code = detectModule(issue.title);
    if (!catalog.byModule[code]) {
      catalog.byModule[code] = { moduleCode: code, edgeCases: [], bugPatterns: [], regressionTriggers: [] };
    }
    const mod = catalog.byModule[code];
    const seen = isoDate(issue.created_time || issue.closed_time);
    const severity = mapSeverity(issue.severity?.type || '');
    const status = mapStatus(issue.status?.type || '');

    // Check if this bug ID is already in any edge case
    const alreadyIndexed = mod.edgeCases.some(ec => ec.bugIds.includes(issue.id));
    if (alreadyIndexed) continue;

    // Stub entry — this script does ID-based dedup only, with a generic category and
    // testHint. It is NOT a substitute for the knowledge-base-curator agent's semantic
    // dedup / business-rule inference / root-cause hinting, so it's labeled unclassified
    // and flagged for curator review rather than mislabeled as "validation" (a specific,
    // often-wrong guess) so downstream consumers can tell shallow entries apart.
    const entry: EdgeCase = {
      id: nextEdgeCaseId(mod),
      pattern: issue.title.replace(/^\[.*?\]\s*/, '').slice(0, 80),
      triggerCondition: `Bug ID ${issue.id}: ${issue.title}`,
      category: 'unclassified',
      severity,
      frequency: 1,
      bugIds: [issue.id],
      lastSeen: seen,
      testHint: `Reproduce and cover the scenario described in Zoho bug ${issue.id}`,
      status,
      source: 'cli-fallback-stub',
      needsCuratorReview: true,
    };
    mod.edgeCases.push(entry);
    added++;
  }

  catalog.totalBugsAnalyzed += issues.length;
  catalog.lastUpdated = new Date().toISOString().slice(0, 10);
  catalog.lastUpdateMethod = 'cli-fallback-shallow';
  return { added, updated };
}

function parseArgs(argv: string[]): { dryRun: boolean; fullRebuild: boolean; since: string } {
  let dryRun = false;
  let fullRebuild = false;
  let since = '';
  for (const a of argv.slice(2)) {
    if (a === '--dry-run') dryRun = true;
    else if (a === '--full-rebuild') fullRebuild = true;
    else if (a.startsWith('--since=')) since = a.split('=')[1];
  }
  return { dryRun, fullRebuild, since };
}

async function main() {
  const { dryRun, fullRebuild, since: sinceArg } = parseArgs(process.argv);

  console.log('[kb:update] Loading existing catalog...');
  const catalog = loadCatalog();
  const since = fullRebuild ? '2000-01-01' : (sinceArg || catalog.lastUpdated);
  console.log(`[kb:update] Incremental since: ${since}${fullRebuild ? ' (full rebuild)' : ''}`);

  console.log('[kb:update] Refreshing Zoho OAuth token...');
  const token = await refreshZohoToken();

  console.log('[kb:update] Fetching all Zoho issues...');
  const issues = await fetchAllIssues(token);
  console.log(`[kb:update] Fetched ${issues.length} issues.`);

  if (dryRun) {
    console.log('[kb:update] --dry-run: no files written.');
    console.log(`  Would process: ${issues.length} issues`);
    return;
  }

  fs.mkdirSync(KB_DIR, { recursive: true });

  const stamp = new Date().toISOString().slice(0, 10);
  const rawPath = path.join(KB_DIR, `bugs-raw-${stamp}.json`);
  fs.writeFileSync(rawPath, JSON.stringify(issues, null, 2));
  console.log(`[kb:update] Raw dump: ${rawPath}`);

  const { added, updated } = updateCatalog(catalog, issues, since);
  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2));

  // Export per-module files so loadKbContext() can inject them into AI prompts
  fs.mkdirSync(MODULES_DIR, { recursive: true });
  for (const [code, entry] of Object.entries(catalog.byModule)) {
    if (!entry.edgeCases.length && !entry.bugPatterns.length && !entry.regressionTriggers.length) continue;
    const filename = CODE_TO_FILE[code] ?? `generic/${code.toLowerCase()}`;
    const dest = path.join(MODULES_DIR, `${filename}.json`);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    // Merge with existing hand-curated content rather than overwriting it
    let existing: Record<string, unknown> = {};
    if (fs.existsSync(dest)) {
      try { existing = JSON.parse(fs.readFileSync(dest, 'utf-8')); } catch { /* ignore */ }
    }
    const merged = {
      ...existing,
      moduleCode: entry.moduleCode,
      edgeCases: entry.edgeCases,
      bugPatterns: entry.bugPatterns,
      regressionTriggers: entry.regressionTriggers,
      // Only the full knowledge-base-curator agent sets this true after semantic review —
      // this shallow script must never claim reviewed status it didn't do the work for.
      curatorReviewed: existing['curatorReviewed'] === true,
    };
    fs.writeFileSync(dest, JSON.stringify(merged, null, 2));
  }
  console.log(`[kb:update] Module files written to ${MODULES_DIR}`);

  console.log(`[kb:update] Done.`);
  console.log(`  New edge cases added   : ${added}`);
  console.log(`  Edge cases updated     : ${updated}`);
  console.log(`  Total bugs analyzed    : ${catalog.totalBugsAnalyzed}`);
  console.log(`  Catalog: ${CATALOG_PATH}`);
}

main().catch(e => {
  console.error('[kb:update] ERROR:', e.message || e);
  process.exit(1);
});
