import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

export interface PmProjectKpis {
  totalActiveProjects: number;
  totalAllocation: number;
  fixedAllocation: number;
  dynamicAllocation: number;
}

// ─── Long-Running / allocation-stage shared helpers (used by pm-pmo + employee specs) ──────────

/** The API lives on a separate origin; overridable for a local stack (same pattern as GoalsPage/DashboardPage). */
export const SIMERP_API_BASE = process.env.API_BASE_URL || 'https://simerp-dev-api.simform.solutions';

export type AllocationStage = 'RECENT' | 'LONG_RUNNING' | 'UPCOMING' | 'UPCOMING_DEALLOCATION';
export const ALLOCATION_STAGES: AllocationStage[] = ['RECENT', 'LONG_RUNNING', 'UPCOMING', 'UPCOMING_DEALLOCATION'];

/** Visible option labels of the Employee Details advanced-filter "Allocation" group (verbatim, live). */
export const ALLOCATION_STAGE_LABELS: Record<AllocationStage, string> = {
  RECENT: 'Recent Allocation',
  LONG_RUNNING: 'Long Running Allocation',
  UPCOMING: 'Upcoming Allocation',
  UPCOMING_DEALLOCATION: 'Upcoming Deallocation',
};

/** Verbatim live tooltip strings. */
export const LR_BADGE_TOOLTIP = 'Long-Running — still running and started more than two months ago';
export const LR_CARD_TOOLTIP = 'Allocations still running that started more than two months ago. Select to show only the projects behind this number.';
export const UPCOMING_SECTION_TOOLTIP = 'Allocations that have not started yet — their start date is still in the future.';

export interface ApiResult { status: number; body: any }

/** GET an API path (relative to SIMERP_API_BASE) with the page's own cookies; never throws on non-2xx. */
export async function apiGet(page: Page, path: string): Promise<ApiResult> {
  const call = () => page.request.get(SIMERP_API_BASE + path, { failOnStatusCode: false, timeout: 90_000 });
  let res = await call();
  // The storageState accessToken cookie can be stale when no page load has refreshed it yet
  // (401 AUTH_001) — do what the SPA does: POST /auth/refresh once on the same cookie jar, retry.
  if (res.status() === 401) {
    const refreshed = await page.request.post(SIMERP_API_BASE + '/api/v1/auth/refresh', { failOnStatusCode: false });
    if (refreshed.ok()) res = await call();
  }
  let body: any = null;
  try { body = await res.json(); } catch { body = null; }
  return { status: res.status(), body };
}

/** Encode a filters object the way the SPA does (`filters=<url-encoded JSON>`). */
export function filtersParam(filters: Record<string, unknown>): string {
  return `filters=${encodeURIComponent(JSON.stringify(filters))}`;
}

/**
 * "Today" as the server sees it. Allocation dates are date-only strings and the backend is IST —
 * compute the calendar date in Asia/Kolkata instead of the runner's local zone.
 */
export function istToday(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}

function parseIso(iso: string): { y: number; m: number; d: number } {
  const [y, m, d] = iso.slice(0, 10).split('-').map(Number);
  return { y, m, d };
}

function toIso(y: number, m: number, d: number): string {
  return `${String(y).padStart(4, '0')}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

export function addDays(iso: string, days: number): string {
  const { y, m, d } = parseIso(iso);
  const dt = new Date(Date.UTC(y, m - 1, d + days));
  return toIso(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate());
}

/** Calendar-month subtraction with end-of-month clamping (31 May − 3 months → 28/29 Feb). */
export function minusCalendarMonths(iso: string, months: number): string {
  const { y, m, d } = parseIso(iso);
  const total = y * 12 + (m - 1) - months;
  const ny = Math.floor(total / 12);
  const nm = (total % 12) + 1;
  const lastDay = new Date(Date.UTC(ny, nm, 0)).getUTCDate();
  return toIso(ny, nm, Math.min(d, lastDay));
}

/** Whole days from a to b (b − a). */
export function daysBetween(a: string, b: string): number {
  const pa = parseIso(a); const pb = parseIso(b);
  return Math.round((Date.UTC(pb.y, pb.m - 1, pb.d) - Date.UTC(pa.y, pa.m - 1, pa.d)) / 86_400_000);
}

/**
 * The live Long-Running rule (grounded 2026-09-28, see liveGrounding.dateRuleEvidence): the
 * allocation is still running (no end date, or end ≥ today) and its start date is STRICTLY before
 * today − 2 calendar months (exactly 2 months ago is NOT long-running; this is not a 60-day rule).
 *
 * RE-GROUNDED 2026-11-12 (backend origin/development, SI4-T1374 `isLongRunningAllocation()` in
 * allocation-tickets/allocation-effective-date.util.ts): allocations on NON-BILLABLE projects
 * (OnTime, Unassigned, L&D — `isBillable: false` on the API row) are deliberately never
 * long-running ("standing placeholders that run for years by design"). Pass `isBillable` when known.
 */
export function expectedLongRunning(start: string | null | undefined, end: string | null | undefined, today: string, isBillable = true): boolean {
  if (!start) return false;
  if (isBillable === false) return false;
  const s = start.slice(0, 10);
  if (end && end.slice(0, 10) < today) return false;
  return s < minusCalendarMonths(today, 2);
}

/** "2026-05-01" → "01 May 2026" (the availability tooltip's "Running since" format). */
export function formatDdMonYyyy(iso: string): string {
  const { y, m, d } = parseIso(iso);
  const mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1];
  return `${String(d).padStart(2, '0')} ${mon} ${y}`;
}

/** Display name the UI uses for a project: its alias, or the full name when no alias is set. */
export function aliasOf(p: any): string {
  return p?.alias ?? p?.name ?? '';
}

/** One dated project allocation of an employee, flattened from GET /api/v1/employees items. */
export interface EmployeeAllocation {
  employeeId: string;
  employeeName: string;
  alias: string;
  projectId: string;
  assignmentId: string | null;
  start: string;
  end: string | null;
  isLongRunning: boolean | undefined;
  isUpcoming: boolean | undefined;
  /** Project billable flag from the API row (non-billable projects are never long-running). */
  isBillable: boolean | undefined;
  past: boolean;
  timeline: any[];
}

/** Flatten employees' `projects[]` (and optionally `pastProjects[]`) into dated allocations. */
export function flattenAllocations(employees: any[], includePast = false): EmployeeAllocation[] {
  const out: EmployeeAllocation[] = [];
  for (const e of employees) {
    const groups: Array<[any[], boolean]> = [[e.projects ?? [], false]];
    if (includePast) groups.push([e.pastProjects ?? [], true]);
    for (const [list, past] of groups) {
      for (const p of list) {
        if (!p?.allocationStartDate) continue;
        out.push({
          employeeId: e.publicId, employeeName: e.name, alias: aliasOf(p), projectId: p.projectPublicId,
          assignmentId: p.projectAssignmentPublicId ?? null, start: String(p.allocationStartDate).slice(0, 10),
          end: p.allocationEndDate ? String(p.allocationEndDate).slice(0, 10) : null,
          isLongRunning: p.isLongRunning, isUpcoming: p.isUpcoming, isBillable: p.isBillable, past, timeline: p.allocationTimeline ?? [],
        });
      }
    }
  }
  return out;
}

/** "2025-06-22" → "22/06/2025" (project-detail Start Date column format). */
export function formatDdMmYyyy(iso: string): string {
  const { y, m, d } = parseIso(iso);
  return `${String(d).padStart(2, '0')}/${String(m).padStart(2, '0')}/${y}`;
}

/**
 * RE-GROUNDED (SimERP 6.2.0, 2026-09-28): /my-projects and /my-projects/:id are CSM-only. The
 * owning persona is the `csmPage` fixture (tarun.sharma@simformsolutions.com). PM (hardik.trivedi),
 * PMO, TM, EM, CEO and Employee are all redirected to /unauthorized ("Access Denied"), and the
 * backing API (GET /api/v1/pm-projects/*) answers 403 "Access forbidden" for every non-CSM role.
 * (Originally grounded 2026-08-07 against a PM session, when the page was still PM-visible.)
 * Nav path: "My Projects" (top-level sidebar item, CSM-only). No data-testid anywhere — every
 * locator below is role/label-based per selector priority.
 *
 * Long-Running Allocations (TC-PMPROJ-097..194, Zoho 688906000093866688) — grounded live
 * 2026-09-28 by throwaway probes (see reports/requirements/req-2026-09-28-PMPROJ-*.json →
 * liveGrounding):
 *   - 5th stats card is the only card rendered as `<button aria-pressed>`; accessible name
 *     "Long-Running Allocations <N>"; N = GET /api/v1/pm-projects/stats → data.longRunningAllocationCount.
 *   - Card info icon: role=img whose name/tooltip is the "started more than two months ago" text.
 *   - Clicking the card sets ?adv_allocationStage=LONG_RUNNING; a second click removes it.
 *   - The filter is persisted in localStorage `filters_my_projects` and silently re-applied on
 *     later visits, even overriding a different ?adv_allocationStage in the URL — tests must clear it.
 *   - LR badge: `[aria-label="Long-Running"]` (text "LR"). The Allocated Employees column renders an
 *     invisible measurement copy of every chip, so only `:visible` matches are real.
 *   - Project detail has tabs "Active Allocations <N>" / "Past Allocations <N>" (role=tab).
 */
export class PmProjectsPage extends BasePage {
  readonly searchProjectsInput: Locator;
  readonly searchEmployeeInput: Locator;
  readonly newAllocationBtn: Locator;
  readonly previousPageBtn: Locator;
  readonly nextPageBtn: Locator;
  readonly kpiTotalActiveProjects: Locator;
  readonly kpiTotalAllocation: Locator;
  readonly kpiFixedAllocation: Locator;
  readonly kpiDynamicAllocation: Locator;
  readonly resultsSummary: Locator;
  // Long-Running Allocations (Change 2 / 5)
  readonly longRunningCard: Locator;
  readonly longRunningCardInfoIcon: Locator;
  readonly tooltip: Locator;
  readonly visibleTableLrBadges: Locator;
  readonly noProjectsFound: Locator;
  readonly timeRangeTrigger: Locator;
  readonly activeAllocationsTab: Locator;
  readonly pastAllocationsTab: Locator;
  readonly upcomingAllocationsTrigger: Locator;
  readonly unableToConnect: Locator;

  static readonly PERSISTED_FILTER_KEY = 'filters_my_projects';

  constructor(page: Page) {
    super(page);
    this.searchProjectsInput = page.getByPlaceholder('Search projects');
    this.searchEmployeeInput = page.getByPlaceholder('Search employee');
    this.newAllocationBtn = page.getByRole('button', { name: 'New Allocation' });
    this.previousPageBtn = page.getByRole('button', { name: 'Previous page' });
    this.nextPageBtn = page.getByRole('button', { name: 'Next page' });
    // KPI cards render as one concatenated text node per card (no space between label and
    // number, e.g. "Total Active Projects2") — same pattern observed on the Allocation Requests
    // page's "All Tickets" tile.
    this.kpiTotalActiveProjects = page.getByText(/^Total Active Projects\d+$/);
    this.kpiTotalAllocation = page.getByText(/^Total Allocation\d+$/);
    this.kpiFixedAllocation = page.getByText(/^Fixed Allocation\d+$/);
    this.kpiDynamicAllocation = page.getByText(/^Dynamic Allocation\d+$/);
    this.resultsSummary = page.getByText(/^Showing \d+ - \d+ of \d+ results$/);
    this.longRunningCard = page.getByRole('button', { name: /Long-Running Allocations/ });
    this.longRunningCardInfoIcon = page.getByRole('img', { name: /started more than two months ago/ });
    // Radix renders one visually-hidden role=tooltip node carrying the tooltip text.
    this.tooltip = page.getByRole('tooltip').first();
    this.visibleTableLrBadges = page.locator('table tbody [aria-label="Long-Running"]:visible');
    this.noProjectsFound = page.getByText(/No projects found/i).first();
    this.timeRangeTrigger = page.getByRole('button', { name: /^(Last \d+ (days|months)|All time)$/ }).first();
    this.activeAllocationsTab = page.getByRole('tab', { name: /^Active Allocations/ });
    this.pastAllocationsTab = page.getByRole('tab', { name: /^Past Allocations/ });
    // Code-only on dev today (component returns null when N = 0) — grounded from the deployed bundle.
    this.upcomingAllocationsTrigger = page.getByRole('button', { name: /^Upcoming Allocations \(\d+\)$/ });
    this.unableToConnect = page.getByText(/Unable to connect/i).first();
  }

  // ─── Long-Running Allocations: navigation ────────────────────────────────────

  /**
   * Remove the persisted My Projects filter so it cannot leak into (or override) this navigation.
   * Setup-only use of page.evaluate (never used for assertions). A fresh fixture context has no
   * such key, so this is a no-op before the first visit.
   */
  async clearPersistedFilters(): Promise<void> {
    if (!this.page.url().startsWith('http')) return;
    await this.page.evaluate(k => window.localStorage.removeItem(k), PmProjectsPage.PERSISTED_FILTER_KEY).catch(() => {});
  }

  /** Dev occasionally renders "Unable to connect" on a cold load — reload (max 3 tries) until `ready` shows. */
  private async gotoWithRetry(path: string, ready: Locator, timeout = 30_000): Promise<void> {
    for (let attempt = 0; attempt < 3; attempt++) {
      if (attempt === 0) await this.page.goto(path, { waitUntil: 'domcontentloaded' });
      else await this.page.reload({ waitUntil: 'domcontentloaded' });
      const outcome = await Promise.race([
        ready.waitFor({ state: 'visible', timeout }).then(() => 'ready'),
        this.unableToConnect.waitFor({ state: 'visible', timeout }).then(() => 'retry'),
        this.page.waitForURL(/\/unauthorized/, { timeout }).then(() => 'denied'),
      ]).catch(() => 'timeout');
      if (outcome === 'ready' || outcome === 'denied') return;
    }
  }

  /** Open /my-projects[?query] with the persisted filter cleared first (unless keepPersisted). */
  async gotoMyProjects(query = '', opts: { keepPersisted?: boolean } = {}): Promise<void> {
    if (!opts.keepPersisted) await this.clearPersistedFilters();
    await this.gotoWithRetry(`/my-projects${query}`, this.searchProjectsInput);
    await this.waitForStableProjectRowCount();
  }

  /** Open a project detail page by public id. */
  async gotoProjectDetail(projectId: string, query = ''): Promise<void> {
    await this.gotoWithRetry(`/my-projects/${projectId}${query}`, this.searchEmployeeInput, 40_000);
    await this.waitForStableEmployeeRowCount();
  }

  /** Navigate to a route and just wait for the app to settle (used for denied-role checks). */
  async gotoForAccessCheck(path: string): Promise<void> {
    await this.gotoWithRetry(path, this.pageHeading(/Access Denied|Project Details/));
  }

  // ─── Long-Running Allocations: card + list ───────────────────────────────────

  /** Trailing integer of the Long-Running card ("Long-Running Allocations\n21" → 21). */
  async readLongRunningCardCount(): Promise<number> {
    // The number renders only once /pm-projects/stats resolves (blank right after a reload/refetch).
    await this.longRunningCard.filter({ hasText: /\d+\s*$/ }).waitFor({ state: 'visible', timeout: 30_000 });
    const text = (await this.longRunningCard.innerText()).trim();
    const m = text.match(/(\d+)\s*$/);
    if (!m) throw new Error(`Long-Running card has no trailing count: "${text}"`);
    return parseInt(m[1], 10);
  }

  /** Click the Long-Running card and wait for the project list refetch it triggers. */
  async toggleLongRunningCard(): Promise<void> {
    await Promise.all([
      this.page.waitForResponse(r => /\/api\/v1\/pm-projects\?/.test(r.url()), { timeout: 30_000 }).catch(() => null),
      this.longRunningCard.click(),
    ]);
    await this.waitForStableProjectRowCount();
  }

  /** Pick a time-range option ("Last 30 days", "Last 3 months", ...) from the header selector. */
  async selectTimeRange(label: string): Promise<void> {
    await this.timeRangeTrigger.click();
    await Promise.all([
      this.page.waitForResponse(r => /\/api\/v1\/pm-projects/.test(r.url()), { timeout: 30_000 }).catch(() => null),
      this.page.getByRole('menuitem', { name: label, exact: true }).click(),
    ]);
    await this.waitForStableProjectRowCount();
  }

  /** Hover a trigger and return the text of the tooltip it opens. */
  async hoverForTooltip(trigger: Locator): Promise<string> {
    await this.page.mouse.move(0, 0);
    await trigger.scrollIntoViewIfNeeded();
    await trigger.hover();
    await this.tooltip.waitFor({ state: 'attached', timeout: 8_000 });
    return (await this.tooltip.innerText()).replace(/\s+/g, ' ').trim();
  }

  /** The table row of a project in the My Projects list. */
  projectRow(projectName: string): Locator {
    return this.page.locator('table tbody tr').filter({ has: this.viewProjectButton(projectName) });
  }

  /** Visible "Allocated Employees" chip of one employee inside a project row (hidden measurement copies excluded). */
  employeeChip(projectRow: Locator, employeeName: string): Locator {
    return projectRow.locator(`button[aria-label="${employeeName.replace(/"/g, '\\"')}"]:visible`);
  }

  /** Project names ("View <name>" labels stripped) currently listed. */
  async listedProjectNames(): Promise<string[]> {
    const labels = await this.getAllProjectRows().evaluateAll(els => els.map(e => e.getAttribute('aria-label') || ''));
    return labels.map(l => l.replace(/^View /, ''));
  }

  /** Parse "Showing a - b of N results" → N (null when not rendered, e.g. empty state). */
  async readResultsTotal(): Promise<number | null> {
    if (!(await this.resultsSummary.first().isVisible().catch(() => false))) return null;
    const m = (await this.resultsSummary.first().innerText()).match(/of (\d+) results/);
    return m ? parseInt(m[1], 10) : null;
  }

  // ─── Long-Running Allocations: project detail ────────────────────────────────

  async openPastAllocationsTab(): Promise<void> {
    await this.pastAllocationsTab.click();
    await this.page.waitForURL(/tab=past/, { timeout: 15_000 });
    await this.waitForStableEmployeeRowCount();
  }

  /** Visible LR badges inside a scope (row / table). */
  visibleLrBadgesIn(scope: Locator): Locator {
    return scope.locator('[aria-label="Long-Running"]:visible');
  }

  /** A project-detail table row for one employee (Active tab rows carry "Open actions for <name>"; Past rows don't). */
  detailRow(employeeName: string): Locator {
    return this.getAllEmployeeRows().filter({ hasText: employeeName });
  }

  // ─── Long-Running Allocations: API ───────────────────────────────────────────

  async fetchStats(): Promise<ApiResult> {
    return apiGet(this.page, '/api/v1/pm-projects/stats');
  }

  /** Every project the session can see (walks all pages), optionally filtered. */
  async fetchAllProjects(filters?: Record<string, unknown>, timeFrame = '15d'): Promise<any[]> {
    const items: any[] = [];
    for (let p = 1; p < 50; p++) {
      const q = `/api/v1/pm-projects?page=${p}&limit=100&timeFrame=${timeFrame}${filters ? '&' + filtersParam(filters) : ''}`;
      const { status, body } = await apiGet(this.page, q);
      if (status !== 200) throw new Error(`GET ${q} → ${status}`);
      items.push(...(body?.data?.items ?? []));
      if (p >= (body?.data?.totalPages ?? 1)) break;
    }
    return items;
  }

  async fetchProjectDetail(projectId: string): Promise<ApiResult> {
    return apiGet(this.page, `/api/v1/pm-projects/${projectId}?timeFrame=15d`);
  }

  async navigate(): Promise<void> {
    await this.page.goto('/my-projects');
    await this.searchProjectsInput.waitFor({ state: 'visible', timeout: 20000 });
    await this.waitForStableProjectRowCount();
  }

  /** The "View <project name>" icon button in a project row's Action column. */
  viewProjectButton(projectName: string): Locator {
    return this.page.getByRole('button', { name: `View ${projectName}` });
  }

  async openNewAllocationForm(): Promise<void> {
    await this.newAllocationBtn.first().click();
    // 6.2.0 renders every title twice (a visually-hidden sr-only copy + the visible one), so an
    // unqualified heading lookup is a strict-mode violation — see BasePage.pageHeading().
    await this.pageHeading('New Allocation Request').waitFor({ state: 'visible', timeout: 15000 });
  }

  async openProject(projectName: string): Promise<void> {
    await this.viewProjectButton(projectName).click();
    // Cold project-detail loads observed live taking up to ~15-20s under load — give real headroom.
    await this.searchEmployeeInput.waitFor({ state: 'visible', timeout: 30000 });
    await this.waitForStableEmployeeRowCount();
  }

  /**
   * All project-row "View <name>" action buttons currently rendered.
   *
   * Ground-truth confirmed live: the app header carries a "View notifications" button, which an
   * unscoped /^View .+/ also matched — so this returned 5 for a 4-project list ("Showing 1 - 4 of
   * 4 results"). That broke TC-PMPROJ-010 (KPI count vs row count off by exactly one) and
   * TC-PMPROJ-011/017, which take `first()` here as "the first project" and were really clicking
   * the notifications bell, then waiting 30s for a project-detail input that never came. Scope to
   * the table body so only real project rows can match.
   */
  getAllProjectRows(): Locator {
    return this.page.locator('table tbody tr').getByRole('button', { name: /^View .+/ });
  }

  /**
   * Employee rows within the currently open project's developer table. Ground-truth confirmed
   * live: `table tbody tr` alone is correct and complete — `[role="row"]` matches zero elements
   * on this page, and the first cell in each row is an icon-only actions dropdown with no text,
   * so callers must not assume the row's first text line is the employee name (skip blank lines).
   */
  getAllEmployeeRows(): Locator {
    return this.page.locator('table tbody tr');
  }

  private async pollStableCount(getCount: () => Promise<number>, timeoutMs = 10000): Promise<number> {
    // Ground-truth confirmed live: typing into a search box briefly clears the table to 0 rows
    // (client-side, before the debounced API response lands) — a short stability window can lock
    // onto that transient 0 as "stable" before the real filtered result arrives. 1000ms proved
    // reliable in manual verification against the live app; 500ms did not.
    const deadline = Date.now() + timeoutMs;
    let previous = -1;
    let stableSince = Date.now();
    while (Date.now() < deadline) {
      const current = await getCount();
      if (current !== previous) {
        previous = current;
        stableSince = Date.now();
      } else if (Date.now() - stableSince > 1000) {
        return current;
      }
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    return previous;
  }

  /** The table renders progressively after a slow initial fetch (confirmed live, ~7-9s cold). */
  async waitForStableProjectRowCount(timeoutMs = 15000): Promise<number> {
    return this.pollStableCount(() => this.getAllProjectRows().count(), timeoutMs);
  }

  async waitForStableEmployeeRowCount(timeoutMs = 15000): Promise<number> {
    return this.pollStableCount(() => this.getAllEmployeeRows().count(), timeoutMs);
  }

  private async parseTrailingCount(locator: Locator): Promise<number> {
    const text = (await locator.first().innerText()).trim();
    const match = text.match(/(\d+)$/);
    if (!match) throw new Error(`Could not parse a trailing count out of KPI tile text: "${text}"`);
    return parseInt(match[1], 10);
  }

  /**
   * The KPI cards and the project table are populated by separate queries that can settle at
   * slightly different times (confirmed live: totalActiveProjects briefly read 3 while only 2
   * rows had rendered, self-corrected moments later). Poll until the KPI value itself stops
   * changing rather than trusting a single read right after the table settles.
   */
  async waitForStableKpiTotalActiveProjects(timeoutMs = 8000): Promise<number> {
    const deadline = Date.now() + timeoutMs;
    let previous = -1;
    let stableSince = Date.now();
    while (Date.now() < deadline) {
      const current = await this.parseTrailingCount(this.kpiTotalActiveProjects);
      if (current !== previous) {
        previous = current;
        stableSince = Date.now();
      } else if (Date.now() - stableSince > 500) {
        return current;
      }
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    return previous;
  }

  async getKpis(): Promise<PmProjectKpis> {
    const [totalActiveProjects, totalAllocation, fixedAllocation, dynamicAllocation] = await Promise.all([
      this.parseTrailingCount(this.kpiTotalActiveProjects),
      this.parseTrailingCount(this.kpiTotalAllocation),
      this.parseTrailingCount(this.kpiFixedAllocation),
      this.parseTrailingCount(this.kpiDynamicAllocation),
    ]);
    return { totalActiveProjects, totalAllocation, fixedAllocation, dynamicAllocation };
  }

  async searchProjects(term: string): Promise<void> {
    await this.searchProjectsInput.fill(term);
    await this.page.waitForTimeout(800);
    await this.waitForStableProjectRowCount();
  }

  async searchEmployee(term: string): Promise<void> {
    await this.searchEmployeeInput.fill(term);
    await this.page.waitForTimeout(800);
    await this.waitForStableEmployeeRowCount();
  }
}
