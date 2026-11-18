import { Page, Locator, Response, APIResponse, expect } from '@playwright/test';
import { BasePage } from '../base.page';

/**
 * Goals (TC-EMPGOL-4xx/5xx) — Employee > Goals, SimERP 6.3.2 layout.
 *
 * REBUILT 2026-10-07 for the 6.3.x redesign (docs/findings/2026-10-07-goals-6.3.2-change-brief.md).
 * The previous 6.2.0 three-tab page object is archived untouched in
 * archive/goals-6.2.0/page-objects/goals.page.ts. Every locator below is grounded against the aria
 * snapshots in reports/knowledge-base/dom-snapshots/EMPGOL-6.3.2-explore/ and against live probes
 * run on 2026-10-07 (SimERP 6.3.2).
 *
 * Structure (live):
 *   /employee/goals                       → top tablist [Dashboard | Goals], Dashboard selected
 *   /employee/goals?tab=goals              → Goals > By Employee (inner tablist "Goals view")
 *   /employee/goals?tab=goals&view=catalog → Goals > By Goal
 *   group "Goal filters" (Year / Department / RM / Timeframe) is shared by both tabs.
 *
 * Gotchas carried over from the 6.2.0 page object (still true on 6.3.2) and new ones found live:
 *   - Tab content renders inside a NESTED `<main>`, not a `tabpanel` — `getByRole('main').last()`.
 *   - Column checklist filters render each label in a sibling `<label for>`; on 6.3.2 the label is
 *     wired, so `getByRole('checkbox', { name })` works. Filters only apply after "Save".
 *   - By Goal search box: `getByRole('textbox', { name: 'Search', exact: true })` — a column filter
 *     popover's own "Search... <Column>" box would otherwise collide.
 *   - Re-typing the SAME search query does not re-trigger the debounced fetch — clear first.
 *   - Rich-text toolbar buttons act on the current selection; type text first, select it, then format.
 *   - The Org-count popover heading uses British spelling "Organisation Employees".
 *   - NEW: `fill()` on Goal Name does NOT enable Save (the form only validates on key events);
 *     `pressSequentially()` does. `typeGoalName()` uses key events for that reason.
 *   - NEW: Save on Add Goal always opens alertdialog "Verify before creating" ("Confirm & Create").
 *   - NEW: Edit Goal fetches GET /api/v1/goals/<id> after the dialog mounts — wait for it before
 *     editing, or the late form reset reverts typed values.
 *   - NEW: dashboard sections are `[data-slot="card"]` containers holding an h2 (no landmark/region).
 *   - NEW: the "Sort goals: …" button opens a menu of `menuitemradio` options, it does not toggle.
 *   - NEW: By Employee data rows are the `<tr aria-expanded>` rows themselves (tabindex=0), each
 *     followed by a collapsible detail row referenced by `aria-controls`.
 */

export type GoalFilter = 'Year' | 'Department' | 'RM' | 'Timeframe';
export type RichTextField = 'Description' | 'Learning Objectives' | 'Definition of Done' | 'Topics & Concepts';
export type DashboardCard = 'Goal Tracking Health' | 'Employee Goal Coverage' | 'RM-wise Goal Status' | 'Your Team Goal Status' | 'Completion by Goal' | 'Most At-Risk Goals' | 'L&D Hours by RM';
export const RICH_TEXT_FIELDS: RichTextField[] = ['Description', 'Learning Objectives', 'Definition of Done', 'Topics & Concepts'];

export interface GoalKpis {
  totalEmployees: number;
  employeesWithGoals: number;
  goalAssignments: number;
  ldHours: number;
  billableHours: number;
}

export interface RankedGoal { rank: number; name: string; value: number; }
export interface ResultRange { from: number; to: number; total: number; }
export interface CreatedGoal { name: string; id: string; }
export interface GoalDetailRow { goal: string; status: string; progressHistory: string; completion: string; startDate: string; endDate: string; comment: string; }

export interface NewGoalInput {
  name: string;
  type?: 'Technical' | 'Certificate';
  certificateCode?: string;
  richText?: Partial<Record<RichTextField, string>>;
  duration?: { months?: number | string; weeks?: number | string; days?: number | string };
}

const esc = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Parse "3,648" / "157,867h" / "89%" into a number (NaN when nothing numeric is present). */
export function parseNumber(text: string | null | undefined): number {
  const m = (text ?? '').replace(/,/g, '').match(/-?\d+(\.\d+)?/);
  return m ? Number(m[0]) : NaN;
}

export class GoalsPage extends BasePage {
  /** API origin — the app calls a separate origin; a bare relative /api path hits the SPA and returns 200 for anything. */
  static readonly API_BASE = process.env.API_BASE_URL || 'https://simerp-dev-api.simform.solutions';
  /** Unique prefix for every goal this suite creates (deleted again in cleanup). */
  static readonly GOAL_PREFIX = 'AUTO-GOL';

  // ─── Shell ───────────────────────────────────────────────────────────────
  readonly heading: Locator;
  readonly breadcrumb: Locator;
  /** Inner `<main>` holding the tab content (no tabpanel role on this screen). */
  readonly content: Locator;
  readonly topTablist: Locator;
  readonly dashboardTab: Locator;
  readonly goalsTab: Locator;
  readonly goalsViewTablist: Locator;
  readonly byEmployeeTab: Locator;
  readonly byGoalTab: Locator;

  // ─── Shared filters ──────────────────────────────────────────────────────
  readonly filterGroup: Locator;
  readonly yearCombo: Locator;
  readonly departmentCombo: Locator;
  readonly rmCombo: Locator;
  readonly timeframeCombo: Locator;

  // ─── Dashboard ───────────────────────────────────────────────────────────
  readonly kpiGroup: Locator;
  readonly ldHoursInfo: Locator;
  readonly billableHoursInfo: Locator;

  // ─── Goals > By Employee ─────────────────────────────────────────────────
  readonly employeeSearch: Locator;
  readonly tableOptionsBtn: Locator;
  /** The outer data table of whichever Goals view is open (first table in the content area). */
  readonly table: Locator;
  readonly employeeRows: Locator;
  readonly resultsStatus: Locator;
  readonly pagination: Locator;
  readonly columnVisibilityList: Locator;

  // ─── Goals > By Goal ─────────────────────────────────────────────────────
  readonly goalSearch: Locator;
  readonly addGoalBtn: Locator;
  readonly goalRows: Locator;
  readonly emptyTableText: Locator;

  // ─── Add / Edit Goal dialog ──────────────────────────────────────────────
  readonly goalDialog: Locator;
  readonly addGoalDialog: Locator;
  readonly editGoalDialog: Locator;
  readonly goalNameInput: Locator;
  readonly goalTypeCombo: Locator;
  readonly certificateCodeInput: Locator;
  readonly monthsInput: Locator;
  readonly weeksInput: Locator;
  readonly daysInput: Locator;
  readonly dialogSaveBtn: Locator;
  readonly dialogCancelBtn: Locator;
  readonly dialogCloseBtn: Locator;
  readonly verifyBeforeCreatingDialog: Locator;
  readonly deleteGoalDialog: Locator;
  /** Popover opened by an Assigned Emp. count button ("Department Employees" / "Organisation Employees"). */
  readonly countPopover: Locator;

  /** Pages that already have the session-takeover toast handler registered (one per Page). */
  private static readonly toastHandled = new WeakSet<Page>();

  constructor(page: Page) {
    super(page);
    // SimERP 6.9.0 raises a sticky "Your session was taken over by another tab" warning toast whenever
    // another browser (a parallel run, a probe) uses the same account. It never auto-dismisses and sits
    // over the top-right of every dialog, swallowing clicks on Close / Goal Name. It is environment
    // noise, not Goals behaviour: close it whenever it blocks an action.
    if (!GoalsPage.toastHandled.has(page)) {
      GoalsPage.toastHandled.add(page);
      const sessionToast = page.locator('[data-sonner-toast]').filter({ hasText: /taken over by another tab/i });
      void page.addLocatorHandler(sessionToast.first(), async () => {
        // dispatchEvent, not click(): a real pointer press outside an open Radix popover/dialog would dismiss it.
        await sessionToast.first().getByRole('button', { name: 'Close notification' }).dispatchEvent('click', undefined, { timeout: 3_000 }).catch(() => {});
      }, { noWaitAfter: true }).catch(() => {});
    }
    // On 6.3.2 the only <h1> is the visually-hidden `<h1 class="sr-only">Goals</h1>` (the visible
    // title is the breadcrumb), so BasePage.pageHeading()'s sr-only exclusion would match nothing.
    this.heading = page.getByRole('heading', { name: 'Goals', level: 1, exact: true });
    this.breadcrumb = page.getByRole('main').first().getByRole('list').filter({ has: page.getByRole('link', { name: 'Employee' }) }).first();
    this.content = page.getByRole('main').last();
    this.topTablist = this.content.getByRole('tablist').first();
    this.dashboardTab = page.getByRole('tab', { name: 'Dashboard', exact: true });
    this.goalsTab = page.getByRole('tab', { name: 'Goals', exact: true });
    this.goalsViewTablist = page.getByRole('tablist', { name: 'Goals view' });
    this.byEmployeeTab = this.goalsViewTablist.getByRole('tab', { name: 'By Employee' });
    this.byGoalTab = this.goalsViewTablist.getByRole('tab', { name: 'By Goal' });

    this.filterGroup = page.getByRole('group', { name: 'Goal filters' });
    this.yearCombo = this.filterGroup.getByRole('combobox', { name: 'Year' });
    this.departmentCombo = this.filterGroup.getByRole('combobox', { name: 'Department' });
    this.rmCombo = this.filterGroup.getByRole('combobox', { name: 'RM' });
    this.timeframeCombo = this.filterGroup.getByRole('combobox', { name: 'Timeframe' });

    this.kpiGroup = page.getByRole('group', { name: 'Goal KPIs' });
    this.ldHoursInfo = this.kpiGroup.getByRole('img', { name: 'Non-billable hours logged in the selected timeframe' });
    this.billableHoursInfo = this.kpiGroup.getByRole('img', { name: 'Billable hours logged in the selected timeframe', exact: true });

    this.employeeSearch = page.getByRole('textbox', { name: 'Search employee', exact: true });
    this.tableOptionsBtn = page.getByRole('button', { name: 'Table options' });
    this.table = this.content.getByRole('table').first();
    // Data rows carry aria-expanded (they are the expander); the hidden detail rows and nested
    // goal-table rows do not — CSS attribute scoping is the only way to tell them apart.
    this.employeeRows = this.table.locator('tbody').first().locator('tr[aria-expanded]');
    this.resultsStatus = this.content.getByRole('status').filter({ hasText: /Showing \d+ - \d+ of \d+ results/ });
    this.pagination = this.content.getByRole('navigation', { name: 'Pagination Navigation' });
    this.columnVisibilityList = page.getByRole('list', { name: 'Column Visibility' });

    this.goalSearch = page.getByRole('textbox', { name: 'Search', exact: true });
    this.addGoalBtn = page.getByRole('button', { name: 'Add Goal', exact: true });
    this.goalRows = this.table.locator('tbody').first().getByRole('row');
    this.emptyTableText = this.content.getByText(/No goals found|No data available|No results|No employees found/i).first();

    this.goalDialog = page.getByRole('dialog', { name: /^(Add|Edit) Goal$/ });
    this.addGoalDialog = page.getByRole('dialog', { name: 'Add Goal' });
    this.editGoalDialog = page.getByRole('dialog', { name: 'Edit Goal' });
    this.goalNameInput = this.goalDialog.getByRole('textbox', { name: 'Goal Name' });
    this.goalTypeCombo = this.goalDialog.getByRole('combobox', { name: 'Goal Type' });
    this.certificateCodeInput = this.goalDialog.getByRole('textbox', { name: 'Certificate Code' });
    this.monthsInput = this.goalDialog.getByRole('spinbutton', { name: 'Months' });
    this.weeksInput = this.goalDialog.getByRole('spinbutton', { name: 'Weeks' });
    this.daysInput = this.goalDialog.getByRole('spinbutton', { name: 'Days' });
    this.dialogSaveBtn = this.goalDialog.getByRole('button', { name: 'Save', exact: true });
    this.dialogCancelBtn = this.goalDialog.getByRole('button', { name: 'Cancel', exact: true });
    this.dialogCloseBtn = this.goalDialog.getByRole('button', { name: 'Close', exact: true });
    this.verifyBeforeCreatingDialog = page.getByRole('alertdialog', { name: 'Verify before creating' });
    this.deleteGoalDialog = page.getByRole('alertdialog', { name: 'Delete Goal' });
    this.countPopover = page.locator('[data-radix-popper-content-wrapper]').filter({ hasText: /^(Department|Organisation) Employees/ }).last();
  }

  // ═══ Navigation ═══════════════════════════════════════════════════════════

  /** Open the Goals screen. `query` is appended verbatim (e.g. "tab=goals&view=catalog"). */
  async open(query = ''): Promise<void> {
    await this.page.goto(`/employee/goals${query ? `?${query.replace(/^\?/, '')}` : ''}`, { waitUntil: 'domcontentloaded' });
    await this.heading.waitFor({ state: 'visible', timeout: 60_000 });
  }

  /**
   * Open the Dashboard tab. Without a `tab` param the app restores the tab/view last used in this
   * session (seen live: /employee/goals reopened Goals > By Goal), so click Dashboard when needed.
   */
  async openDashboard(query = ''): Promise<void> {
    await this.open(query);
    await this.goalsTab.waitFor({ state: 'visible', timeout: 30_000 });
    if ((await this.dashboardTab.getAttribute('aria-selected')) !== 'true') await this.dashboardTab.click();
    await this.waitForKpis();
  }

  async openByEmployee(extraQuery = ''): Promise<void> {
    await this.open(`tab=goals${extraQuery ? `&${extraQuery}` : ''}`);
    await this.waitForResults();
  }

  async openByGoal(extraQuery = ''): Promise<void> {
    await this.open(`tab=goals&view=catalog${extraQuery ? `&${extraQuery}` : ''}`);
    await this.waitForResults();
  }

  /** Load any authenticated page so the app refreshes the access-token cookie before raw API calls. */
  async primeApiSession(): Promise<void> {
    await this.page.goto('/profile', { waitUntil: 'domcontentloaded' });
    await this.page.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => {});
  }

  async waitForKpis(): Promise<void> {
    await this.kpiGroup.getByText(/^\d[\d,]*h?$/).first().waitFor({ state: 'visible', timeout: 60_000 });
  }

  /** Wait until a "Showing a - b of N results" footer or an empty-table message is shown. */
  async waitForResults(timeout = 60_000): Promise<void> {
    await this.resultsStatus.or(this.emptyTableText).first().waitFor({ state: 'visible', timeout });
  }

  async selectTopTab(tab: 'Dashboard' | 'Goals'): Promise<void> {
    await (tab === 'Dashboard' ? this.dashboardTab : this.goalsTab).click();
  }

  async selectGoalsView(view: 'By Employee' | 'By Goal'): Promise<void> {
    await (view === 'By Employee' ? this.byEmployeeTab : this.byGoalTab).click();
    await this.waitForResults();
  }

  sidebarGoalsLink(): Locator {
    return this.page.getByRole('link', { name: /^Goals( New)?$/ }).and(this.page.locator('[href="/employee/goals"]'));
  }

  /** Sidebar "Employee" group toggle — 6.9.0 appends a "Has changes" badge to its name. */
  sidebarEmployeeGroup(): Locator {
    return this.page.getByRole('button', { name: /^Employee( Has changes)?$/ }).first();
  }

  /** Expand the sidebar "Employee" group (if collapsed) and click its "Goals" link. */
  async openFromSidebar(): Promise<void> {
    // Link name carries a "New" badge on 6.3.2 ("Goals New"); match the route instead of exact text.
    const goalsLink = this.sidebarGoalsLink();
    if (!(await goalsLink.isVisible().catch(() => false))) {
      await this.sidebarEmployeeGroup().click();
    }
    await goalsLink.click();
    await this.heading.waitFor({ state: 'visible', timeout: 60_000 });
  }

  // ═══ Network helpers ══════════════════════════════════════════════════════

  /** Promise for the next GET to an /api/v1/employee-goals/<endpoint> (or /goals) URL. */
  waitForApi(pattern: RegExp, timeout = 45_000): Promise<Response> {
    return this.page.waitForResponse(r => pattern.test(r.url()) && r.request().method() === 'GET', { timeout });
  }

  /**
   * Wait until the open table renders the list response it just received. The footer and rows are
   * still showing the PREVIOUS result when the response lands, so "footer visible" alone is a stale
   * read — wait for the footer text that matches the response's page/limit/total instead.
   * No-op for responses that are not a server-paged list (dashboard, single goal).
   */
  async syncTable(responsePromise: Promise<Response | null>): Promise<void> {
    const res = await responsePromise;
    if (!res || !/\/api\/v1\/(employee-goals\/employees|goals)\?/.test(res.url())) return;
    const body = await res.json().catch(() => null);
    const total = body?.data?.total;
    if (typeof total !== 'number') return;
    if (total === 0) {
      await this.emptyTableText.waitFor({ state: 'visible', timeout: 20_000 }).catch(() => {});
      return;
    }
    const q = new URL(res.url()).searchParams;
    const page = Number(q.get('page') ?? 1);
    const limit = Number(q.get('limit') ?? 100);
    const from = (page - 1) * limit + 1;
    const to = Math.min(page * limit, total);
    await this.content.getByRole('status').filter({ hasText: `Showing ${from} - ${to} of ${total} results` }).first()
      .waitFor({ state: 'visible', timeout: 20_000 }).catch(() => {});
  }

  // ═══ Shared filters ═══════════════════════════════════════════════════════

  filterCombo(name: GoalFilter): Locator {
    return { Year: this.yearCombo, Department: this.departmentCombo, RM: this.rmCombo, Timeframe: this.timeframeCombo }[name];
  }

  /** Searchable popover (Department / RM) — a dialog holding an inner combobox + listbox "Suggestions". */
  private suggestionsListbox(): Locator {
    return this.page.getByRole('listbox', { name: 'Suggestions' });
  }

  /** Every option label offered by a filter combobox (the popover is closed again afterwards). */
  async getFilterOptions(name: GoalFilter): Promise<string[]> {
    await this.filterCombo(name).click();
    const options = this.page.getByRole('option');
    await options.first().waitFor({ state: 'visible', timeout: 15_000 });
    const texts = (await options.allInnerTexts()).map(t => t.trim());
    await this.page.keyboard.press('Escape');
    await this.page.getByRole('listbox').first().waitFor({ state: 'hidden', timeout: 5_000 }).catch(() => {});
    return texts;
  }

  /**
   * Choose a value in a shared filter. Year/Timeframe are Radix selects; Department/RM are
   * searchable cmdk popovers (typing first keeps the click off a re-rendering list).
   * Waits for the refresh request when one fires (none fires when the tab reuses cached data).
   */
  async selectFilter(name: GoalFilter, option: string, refresh: RegExp = /\/api\/v1\/employee-goals\/(dashboard|employees)/): Promise<void> {
    const combo = this.filterCombo(name);
    const current = ((await combo.innerText().catch(() => '')) ?? '').trim();
    if (current === option) return;
    const refreshed = this.waitForApi(refresh, 30_000).catch(() => null);
    await combo.click();
    if (name === 'Department' || name === 'RM') {
      const listbox = this.suggestionsListbox();
      await listbox.waitFor({ state: 'visible', timeout: 15_000 });
      await this.page.keyboard.type(option);
      await listbox.getByRole('option', { name: option, exact: true }).click();
    } else {
      // Radix select: the popper keeps re-positioning while the dashboard charts re-render, so a pointer
      // click can spin on "element is not stable". Fall back to keyboard selection (focus + Enter).
      const opt = this.page.getByRole('option', { name: option, exact: true });
      await opt.waitFor({ state: 'visible', timeout: 15_000 });
      if (!(await opt.click({ timeout: 5_000 }).then(() => true, () => false))) {
        await opt.focus();
        await this.page.keyboard.press('Enter');
      }
      await expect(combo).toHaveText(option, { timeout: 10_000 });
    }
    await this.syncTable(refreshed);
  }

  async getFilterValue(name: GoalFilter): Promise<string> {
    return ((await this.filterCombo(name).innerText()) ?? '').trim();
  }

  // ═══ Dashboard: KPIs ══════════════════════════════════════════════════════

  async readKpis(): Promise<GoalKpis> {
    const text = (await this.kpiGroup.innerText()).replace(/\s+/g, ' ');
    const pick = (label: string): number => {
      const m = text.match(new RegExp(`${esc(label)}\\s+([\\d,]+)h?`));
      return m ? parseNumber(m[1]) : NaN;
    };
    return {
      totalEmployees: pick('Total Employees'),
      employeesWithGoals: pick('Employees with Goals'),
      goalAssignments: pick('Goal Assignments'),
      ldHours: pick('L&D Hours'),
      billableHours: pick('Billable Hours'),
    };
  }

  /**
   * Run `action` (a filter change, a tab switch, a reload …) and return the dashboard payload it
   * fetched plus the KPI tiles once they show that payload. `api` is null when the tab reused cached
   * data and sent no request (6.3.1 behaviour).
   */
  async refreshDashboard(action: () => Promise<unknown>, timeout = 45_000): Promise<{ api: any | null; kpis: GoalKpis }> {
    const resP = this.waitForApi(/\/api\/v1\/employee-goals\/dashboard/, timeout).catch(() => null);
    await action();
    const res = await resP;
    const api = res ? ((await res.json().catch(() => null))?.data ?? null) : null;
    if (api) {
      const fmt = (n: number) => esc(Number(n).toLocaleString('en-US'));
      await this.kpiGroup.filter({ hasText: new RegExp(`Total Employees\\s*${fmt(api.totalEmployees)}`) })
        .filter({ hasText: new RegExp(`L&D Hours\\s*${fmt(api.totalLdHours)}h`) })
        .waitFor({ state: 'visible', timeout: 20_000 });
    } else {
      await this.waitForKpis();
    }
    return { api, kpis: await this.readKpis() };
  }

  /**
   * Read the doughnut values of a chart card through recharts' keyboard accessibility layer:
   * focusing the chart (role=application) and pressing the arrow keys moves the active segment and
   * shows its tooltip. Hovering sector paths is unreliable — a sector's bounding-box centre often
   * falls in the doughnut hole. Returns { label → value }.
   */
  async readDoughnutTooltips(card: Locator): Promise<Record<string, number>> {
    const chart = card.getByRole('application').first();
    // recharts' tooltip wrapper has no role — its library class is the only handle.
    const tip = card.locator('.recharts-tooltip-wrapper');
    const legend = (await this.legendItems(card).allInnerTexts()).map(t => t.trim());
    const out: Record<string, number> = {};
    await chart.focus();
    for (const key of [...Array(legend.length + 1).fill('ArrowRight'), ...Array(legend.length + 1).fill('ArrowLeft')]) {
      await this.page.keyboard.press(key);
      const lines = (await tip.innerText().catch(() => '')).split('\n').map(l => l.trim()).filter(Boolean);
      if (lines.length >= 2) out[lines[0]] = parseNumber(lines[lines.length - 1]);
      if (Object.keys(out).length === legend.length) break;
    }
    return out;
  }

  async hoverTooltipText(trigger: Locator): Promise<string> {
    await trigger.hover();
    const tip = this.page.getByRole('tooltip');
    await tip.first().waitFor({ state: 'visible', timeout: 5_000 });
    return ((await tip.first().innerText()) ?? '').trim();
  }

  // ═══ Dashboard: cards / charts ════════════════════════════════════════════

  /** A dashboard section — a `[data-slot="card"]` containing the given h2 (no region/landmark exists). */
  card(heading: DashboardCard | string): Locator {
    return this.content.locator('[data-slot="card"]').filter({ has: this.page.getByRole('heading', { name: heading, level: 2, exact: true }) });
  }

  get completionCard(): Locator { return this.card('Completion by Goal'); }
  get atRiskCard(): Locator { return this.card('Most At-Risk Goals'); }

  /** The RM / team bar chart card — "RM-wise Goal Status" (Admin), "Your Team Goal Status" (RM personas), "Team Goal Status" (Admin with one RM selected). */
  teamChartCard(): Locator {
    return this.content.locator('[data-slot="card"]').filter({ has: this.page.getByRole('heading', { name: /^(RM-wise Goal Status|Your Team Goal Status|Team Goal Status)$/, level: 2 }) });
  }

  legendItems(card: Locator): Locator {
    return card.getByRole('listitem');
  }

  /** "Showing 1–400 of 400 RMs · …" → { from, to, total }. */
  async readChartCaption(card: Locator): Promise<ResultRange & { unit: string }> {
    const text = await card.getByText(/Ctrl \+ scroll to zoom/).innerText();
    const m = text.match(/Showing\s+([\d,]+)\D+([\d,]+)\s+of\s+([\d,]+)\s+(\w+)/);
    return { from: parseNumber(m?.[1]), to: parseNumber(m?.[2]), total: parseNumber(m?.[3]), unit: m?.[4] ?? '' };
  }

  zoomButton(card: Locator, name: 'Zoom in' | 'Zoom out' | 'Reset zoom'): Locator {
    return card.getByRole('group', { name: 'Zoom range' }).getByRole('button', { name, exact: true }).first();
  }

  // ═══ Dashboard: ranked lists (Completion by Goal / Most At-Risk Goals) ═══

  rankedButtons(scope: Locator): Locator {
    return scope.getByRole('list').getByRole('button', { name: /^View assignments for / });
  }

  /** Parse every visible item: "#1 zozooo 89%" → value 89; "#1 X 16 emp" → value 16. */
  async readRanked(scope: Locator): Promise<RankedGoal[]> {
    const btns = this.rankedButtons(scope);
    const n = await btns.count();
    const out: RankedGoal[] = [];
    for (let i = 0; i < n; i++) {
      const label = (await btns.nth(i).getAttribute('aria-label')) ?? '';
      const text = (await btns.nth(i).innerText()).replace(/\s+/g, ' ').trim();
      const name = label.replace(/^View assignments for /, '');
      const rank = parseNumber(text.match(/#(\d+)/)?.[1]);
      const tail = text.slice(text.indexOf(name) + name.length);
      out.push({ rank, name, value: parseNumber(tail) });
    }
    return out;
  }

  listStatus(scope: Locator): Locator {
    return scope.getByRole('status').filter({ hasText: /Showing/ }).first();
  }

  /** "Showing 1–5 of 49 goals" → { from, to, total }. */
  async readListStatus(scope: Locator): Promise<ResultRange> {
    const text = await this.listStatus(scope).innerText();
    const m = text.match(/Showing\s+([\d,]+)\D+([\d,]+)\s+of\s+([\d,]+)/);
    return { from: parseNumber(m?.[1]), to: parseNumber(m?.[2]), total: parseNumber(m?.[3]) };
  }

  sortGoalsButton(scope: Locator): Locator {
    return scope.getByRole('button', { name: /^Sort goals: / }).first();
  }

  /** The sort control opens a menu of radio items ("Completion, low to high", "Employees, fewest first", "Name, A to Z" …). */
  async chooseListSort(scope: Locator, option: string): Promise<void> {
    await this.sortGoalsButton(scope).click();
    await this.page.getByRole('menuitemradio', { name: option, exact: true }).click();
    await this.page.getByRole('menu').waitFor({ state: 'hidden', timeout: 5_000 }).catch(() => {});
  }

  async getListSortOptions(scope: Locator): Promise<string[]> {
    await this.sortGoalsButton(scope).click();
    const items = this.page.getByRole('menuitemradio');
    await items.first().waitFor({ state: 'visible' });
    const names: string[] = [];
    for (const item of await items.all()) names.push((await item.getAttribute('aria-label')) ?? (await item.innerText()));
    await this.page.keyboard.press('Escape');
    return names;
  }

  listSearch(scope: Locator): Locator {
    return scope.getByRole('textbox', { name: 'Search goals' }).first();
  }

  rowsPerPage(scope: Locator): Locator {
    return scope.getByRole('combobox', { name: 'Rows per page' }).first();
  }

  async setRowsPerPage(scope: Locator, size: 5 | 10 | 20 | number): Promise<void> {
    await this.rowsPerPage(scope).click();
    await this.page.getByRole('option', { name: String(size), exact: true }).click();
  }

  listPages(scope: Locator): Locator {
    return scope.getByRole('navigation', { name: 'Goal list pages' }).first();
  }

  listDialog(name: 'Completion by Goal' | 'Most At-Risk Goals'): Locator {
    return this.page.getByRole('dialog', { name, exact: true });
  }

  async openViewAll(card: 'Completion by Goal' | 'Most At-Risk Goals'): Promise<Locator> {
    await this.card(card).getByRole('button', { name: 'View All' }).click();
    const dlg = this.listDialog(card);
    await this.rankedButtons(dlg).first().waitFor({ state: 'visible', timeout: 30_000 });
    return dlg;
  }

  // ═══ Dashboard: "View assignments" dialog ═════════════════════════════════

  assignmentsDialog(goalName: string): Locator {
    return this.page.getByRole('dialog', { name: goalName, exact: true });
  }

  /** Click the "View assignments for <goal>" item in `scope` and wait for its dialog's table. */
  async openAssignments(scope: Locator, goalName: string): Promise<Locator> {
    await scope.getByRole('button', { name: `View assignments for ${goalName}`, exact: true }).first().click();
    const dlg = this.assignmentsDialog(goalName);
    await dlg.getByText(/\d+ assignments?/).first().waitFor({ state: 'visible', timeout: 30_000 });
    await dlg.getByRole('status').or(dlg.getByText(/No (data|results|assignments)/i)).first().waitFor({ state: 'visible', timeout: 30_000 });
    return dlg;
  }

  async readAssignmentCount(dlg: Locator): Promise<number> {
    return parseNumber(await dlg.getByText(/^\d[\d,]* assignments?$/).first().innerText());
  }

  assignmentRows(dlg: Locator): Locator {
    return dlg.getByRole('table').locator('tbody').getByRole('row');
  }

  /** Text of one column for every row on the dialog's current page. */
  async readTableColumn(table: Locator, column: string): Promise<string[]> {
    const headers = (await table.getByRole('columnheader').allInnerTexts()).map(h => h.trim());
    const idx = headers.findIndex(h => h === column || h.startsWith(`${column}\n`) || h.split('\n')[0].trim() === column);
    if (idx < 0) throw new Error(`Column "${column}" not found in [${headers.join(' | ')}]`);
    // nth-child is positional by necessity: cells have no per-column label/test id.
    return (await table.locator(`tbody > tr > td:nth-child(${idx + 1})`).allInnerTexts()).map(t => t.trim());
  }

  // ═══ Generic column helpers (By Employee, By Goal, assignments dialog) ════

  columnHeader(scope: Locator, column: string): Locator {
    return scope.getByRole('columnheader', { name: new RegExp(`^${esc(column)}( Sort| Filter|$)`) }).first();
  }

  sortButton(scope: Locator, column: string): Locator {
    return this.columnHeader(scope, column).getByRole('button', { name: /^Sort/ });
  }

  filterButton(scope: Locator, column: string): Locator {
    return scope.getByRole('button', { name: `Filter by ${column}`, exact: true }).first();
  }

  /** The open column-filter popover (role=dialog without a name, titled by the column text). */
  filterPopover(column: string): Locator {
    return this.page.getByRole('dialog').filter({ hasText: column }).filter({ has: this.page.getByRole('button', { name: 'Save', exact: true }) }).last();
  }

  async openColumnFilter(scope: Locator, column: string): Promise<Locator> {
    await this.filterButton(scope, column).click();
    const pop = this.filterPopover(column);
    await pop.waitFor({ state: 'visible', timeout: 15_000 });
    return pop;
  }

  /** Move a Radix slider thumb to `target` with the keyboard. */
  async setSlider(slider: Locator, target: number): Promise<void> {
    await slider.focus();
    for (let i = 0; i < 400; i++) {
      const now = Number(await slider.getAttribute('aria-valuenow'));
      if (now === target) return;
      const diff = target - now;
      if (Math.abs(diff) >= 10) await this.page.keyboard.press(diff > 0 ? 'PageUp' : 'PageDown');
      else await this.page.keyboard.press(diff > 0 ? 'ArrowRight' : 'ArrowLeft');
      const after = Number(await slider.getAttribute('aria-valuenow'));
      if (after === now) return; // clamped — cannot move further
    }
  }

  async readSlider(slider: Locator): Promise<{ min: number; max: number; now: number }> {
    return {
      min: Number(await slider.getAttribute('aria-valuemin')),
      max: Number(await slider.getAttribute('aria-valuemax')),
      now: Number(await slider.getAttribute('aria-valuenow')),
    };
  }

  /** Apply a numeric range filter on a column and Save (waits for the server refetch). */
  async applyRangeFilter(scope: Locator, column: string, range: { min?: number; max?: number }): Promise<void> {
    const pop = await this.openColumnFilter(scope, column);
    if (range.max !== undefined) await this.setSlider(pop.getByRole('slider', { name: 'Maximum' }), range.max);
    if (range.min !== undefined) await this.setSlider(pop.getByRole('slider', { name: 'Minimum' }), range.min);
    const refreshed = this.waitForApi(/\/api\/v1\/employee-goals\/employees/, 30_000).catch(() => null);
    await pop.getByRole('button', { name: 'Save', exact: true }).click();
    await this.syncTable(refreshed);
    await this.waitForResults();
  }

  /** Apply a checklist filter (text columns): tick each value then Save. */
  async applyChecklistFilter(scope: Locator, column: string, values: string[], refresh: RegExp = /\/api\/v1\/(employee-goals\/employees|goals)/): Promise<void> {
    const pop = await this.openColumnFilter(scope, column);
    for (const v of values) {
      const search = pop.getByRole('textbox').first();
      if (await search.isVisible().catch(() => false)) await search.fill(v);
      await pop.getByRole('checkbox', { name: v, exact: true }).click();
    }
    const refreshed = this.waitForApi(refresh, 20_000).catch(() => null);
    await pop.getByRole('button', { name: 'Save', exact: true }).click();
    await this.syncTable(refreshed);
  }

  /** By Employee "Goals" filter: status checklist + "Search goal" box + switch "No Goals Assigned". */
  async applyNoGoalsAssignedFilter(): Promise<void> {
    const pop = await this.openColumnFilter(this.table, 'Goals');
    await pop.getByRole('switch', { name: 'No Goals Assigned' }).click();
    const refreshed = this.waitForApi(/\/api\/v1\/employee-goals\/employees/, 20_000).catch(() => null);
    await pop.getByRole('button', { name: 'Save', exact: true }).click();
    await this.syncTable(refreshed);
  }

  async clearColumnFilter(scope: Locator, column: string): Promise<void> {
    const pop = await this.openColumnFilter(scope, column);
    const refreshed = this.waitForApi(/\/api\/v1\/(employee-goals\/employees|goals)/, 20_000).catch(() => null);
    await pop.getByRole('button', { name: 'Clear', exact: true }).click();
    if (await pop.isVisible().catch(() => false)) await pop.getByRole('button', { name: 'Save', exact: true }).click().catch(() => {});
    await this.syncTable(refreshed);
  }

  /** Click a column's sort button and wait for the server refetch (By Employee / By Goal are server-sorted). */
  async clickSort(scope: Locator, column: string, refresh: RegExp | null = /\/api\/v1\/(employee-goals\/employees|goals)\?/): Promise<void> {
    const refreshed = refresh ? this.waitForApi(refresh, 20_000).catch(() => null) : Promise.resolve(null);
    await this.sortButton(scope, column).click();
    await this.syncTable(refreshed);
  }

  // ═══ Results footer / pagination ══════════════════════════════════════════

  async readResults(scope: Locator = this.content): Promise<ResultRange> {
    const status = scope.getByRole('status').filter({ hasText: /Showing \d+ - \d+ of \d+ results/ }).first();
    const text = await status.innerText();
    const m = text.match(/Showing (\d+) - (\d+) of (\d+) results/);
    return { from: Number(m?.[1]), to: Number(m?.[2]), total: Number(m?.[3]) };
  }

  /** Footer total, or 0 when the table shows its empty state instead of a footer. */
  async readTotal(): Promise<number> {
    await this.waitForResults();
    if (await this.resultsStatus.isVisible().catch(() => false)) return (await this.readResults()).total;
    return 0;
  }

  pageButton(n: number, scope: Locator = this.pagination): Locator {
    return scope.getByRole('button', { name: `Page ${n}`, exact: true });
  }

  nextPageBtn(scope: Locator = this.pagination): Locator { return scope.getByRole('button', { name: 'Next page' }); }
  prevPageBtn(scope: Locator = this.pagination): Locator { return scope.getByRole('button', { name: 'Previous page' }); }

  /** Click a pager button and wait for the server page request. */
  async goToPage(target: Locator, refresh: RegExp = /\/api\/v1\/(employee-goals\/employees|goals)\?/): Promise<void> {
    const refreshed = this.waitForApi(refresh, 30_000).catch(() => null);
    await target.click();
    await this.syncTable(refreshed);
    await this.waitForResults();
  }

  // ═══ Goals > By Employee ══════════════════════════════════════════════════

  /** Type a debounced search and wait for the server refetch. Clears first (same-query re-type does not refetch). */
  async searchEmployees(query: string): Promise<void> {
    if ((await this.employeeSearch.inputValue()) !== '') {
      const cleared = this.waitForApi(/\/api\/v1\/employee-goals\/employees/, 15_000).catch(() => null);
      await this.employeeSearch.fill('');
      await this.syncTable(cleared);
    }
    if (query === '') return;
    const refreshed = this.waitForApi(/\/api\/v1\/employee-goals\/employees/, 20_000).catch(() => null);
    await this.employeeSearch.fill(query);
    await this.syncTable(refreshed);
    await this.waitForResults();
  }

  employeeRow(name: string): Locator {
    return this.employeeRows.filter({ has: this.page.getByRole('cell', { name, exact: true }) }).first();
  }

  async readEmployeeColumn(column: string): Promise<string[]> {
    const headers = (await this.table.locator('thead').first().getByRole('columnheader').allInnerTexts()).map(h => h.split('\n')[0].trim());
    const idx = headers.indexOf(column);
    if (idx < 0) throw new Error(`Column "${column}" not in [${headers.join(' | ')}]`);
    // Positional cell lookup is unavoidable: data cells carry no column label.
    return (await this.employeeRows.locator(`> td:nth-child(${idx + 1})`).allInnerTexts()).map(t => t.trim());
  }

  async readHeaderNames(scope: Locator = this.table): Promise<string[]> {
    return (await scope.locator('thead').first().getByRole('columnheader').allInnerTexts()).map(h => h.split('\n')[0].trim());
  }

  /** Expand / collapse a By Employee row — the row itself is the expander (clicking its first cell toggles it). */
  async toggleRow(row: Locator): Promise<void> {
    await row.getByRole('cell').first().click();
  }

  /** The collapsible detail panel a row controls (resolved through aria-controls, not DOM position). */
  async detailPanel(row: Locator): Promise<Locator> {
    const id = await row.getAttribute('aria-controls');
    return this.page.locator(`[id="${id}"]`);
  }

  async readDetailRows(row: Locator): Promise<GoalDetailRow[]> {
    const panel = await this.detailPanel(row);
    const table = panel.getByRole('table');
    await table.locator('tbody tr').first().waitFor({ state: 'visible', timeout: 20_000 });
    const rows = table.locator('tbody').getByRole('row');
    const out: GoalDetailRow[] = [];
    for (const r of await rows.all()) {
      const c = (await r.getByRole('cell').allInnerTexts()).map(t => t.trim());
      out.push({ goal: c[0], status: c[1], progressHistory: c[2], completion: c[3], startDate: c[4], endDate: c[5], comment: c[6] });
    }
    return out;
  }

  // ═══ Table options ════════════════════════════════════════════════════════

  async openTableOptions(): Promise<Locator> {
    await this.tableOptionsBtn.click();
    await this.columnVisibilityList.waitFor({ state: 'visible', timeout: 10_000 });
    return this.columnVisibilityList;
  }

  columnSwitch(column: string): Locator {
    return this.columnVisibilityList.getByRole('switch', { name: column, exact: true });
  }

  async closePopover(): Promise<void> {
    await this.page.keyboard.press('Escape');
  }

  // ═══ Goals > By Goal ══════════════════════════════════════════════════════

  /** Debounced catalogue search; waits for the /api/v1/goals refetch. Clears first (same-query re-type does not refetch). */
  async searchGoals(query: string): Promise<void> {
    if ((await this.goalSearch.inputValue()) !== '') {
      const cleared = this.waitForApi(/\/api\/v1\/goals\?/, 15_000).catch(() => null);
      await this.goalSearch.fill('');
      await this.syncTable(cleared);
    }
    if (query === '') { await this.waitForResults(); return; }
    const refreshed = this.waitForApi(/\/api\/v1\/goals\?.*search=/, 20_000).catch(() => null);
    await this.goalSearch.fill(query);
    await this.syncTable(refreshed);
    await this.waitForResults();
  }

  /** Catalogue row whose Goal Name cell starts with `name` (certificate code may follow in muted text). */
  goalRow(name: string): Locator {
    return this.goalRows.filter({ has: this.page.getByRole('cell', { name: new RegExp(`^${esc(name)}`) }) }).first();
  }

  /** Goal Name cell parts: visible name and muted certificate code (empty when none). */
  async readGoalNameCell(row: Locator): Promise<{ name: string; code: string }> {
    const cell = row.getByRole('cell').nth(1);
    const full = (await cell.innerText()).trim();
    const muted = cell.locator('.text-muted-foreground, .font-mono').first();
    const code = (await muted.count()) ? ((await muted.innerText()) ?? '').trim() : '';
    const name = code && full.endsWith(code) ? full.slice(0, full.length - code.length).trim() : full;
    return { name, code };
  }

  async readGoalNames(): Promise<string[]> {
    const names: string[] = [];
    for (const row of await this.goalRows.all()) names.push((await this.readGoalNameCell(row)).name);
    return names;
  }

  /** Count-button of a catalogue row ("Assigned Emp. (Dept.)" = 4th data column, "(Org.)" = 5th). */
  countCell(row: Locator, which: 'Dept' | 'Org'): Locator {
    // Positional by necessity: the two count cells have identical content shapes and no labels.
    return row.getByRole('cell').nth(which === 'Dept' ? 4 : 5);
  }

  async openCountPopover(row: Locator, which: 'Dept' | 'Org'): Promise<Locator> {
    await this.countCell(row, which).getByRole('button').click();
    const pop = this.page.locator('[data-radix-popper-content-wrapper]').filter({ hasText: which === 'Dept' ? 'Department Employees' : 'Organisation Employees' }).last();
    await pop.waitFor({ state: 'visible', timeout: 10_000 });
    return pop;
  }

  /** "L1 SUPPORT 11 employees …" breakdown entries from an open Organisation popover. */
  async readOrgBreakdown(pop: Locator): Promise<Array<{ department: string; count: number }>> {
    const text = (await pop.innerText()).replace(/^Organisation Employees\s*/, '');
    const out: Array<{ department: string; count: number }> = [];
    const re = /(.+?)\s*\n?\s*(\d+) employees?/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) out.push({ department: m[1].trim(), count: Number(m[2]) });
    return out;
  }

  /**
   * Employee names listed in an open "Department Employees" popover. Each entry is an avatar
   * (photo, or initials when the photo fails) followed by the name as text — keep the text lines
   * that look like a name (contain a space), which drops the heading and any initials fallback.
   */
  async readDeptEmployees(pop: Locator): Promise<string[]> {
    return (await pop.innerText()).split('\n').map(s => s.trim())
      .filter(s => s && s !== 'Department Employees' && /\S\s+\S/.test(s));
  }

  // ═══ Add / Edit Goal dialog ═══════════════════════════════════════════════

  async openAddGoal(): Promise<void> {
    await this.waitForToastsToClear();
    await this.addGoalBtn.click();
    await this.addGoalDialog.waitFor({ state: 'visible', timeout: 15_000 });
  }

  /** Sonner toasts stack top-right over the dialog's Goal Name field and swallow clicks until they auto-dismiss. */
  async waitForToastsToClear(): Promise<void> {
    const toasts = this.page.locator('[data-sonner-toast]');
    // Success/info toasts auto-dismiss within a few seconds. Sticky ones (6.9.0's "Your session was taken
    // over by another tab" warning, raised whenever another browser signs in to the same account) never do —
    // close those with their own "Close notification" button instead of waiting forever.
    if (await expect(toasts).toHaveCount(0, { timeout: 8_000 }).then(() => true, () => false)) return;
    for (let i = 0; i < 5 && (await toasts.count()) > 0; i++) {
      await toasts.first().getByRole('button', { name: 'Close notification' }).dispatchEvent('click', undefined, { timeout: 3_000 }).catch(() => {});
      await expect(toasts).toHaveCount(Math.max(0, (await toasts.count()) - 1), { timeout: 3_000 }).catch(() => {});
    }
    await expect(toasts).toHaveCount(0, { timeout: 7_000 });
  }

  /** Goal Name via key events — `fill()` sets the value but leaves Save disabled (form validates on key events). */
  async typeGoalName(name: string): Promise<void> {
    await this.goalNameInput.click();
    await this.goalNameInput.press('ControlOrMeta+a');
    await this.goalNameInput.press('Backspace');
    if (name.length > 60) {
      // Long values: fill the bulk, then a real key event so the form re-validates.
      await this.goalNameInput.fill(name.slice(0, -1));
      await this.goalNameInput.pressSequentially(name.slice(-1));
    } else {
      await this.goalNameInput.pressSequentially(name, { delay: 10 });
    }
  }

  async selectGoalType(type: 'Technical' | 'Certificate'): Promise<void> {
    await this.goalTypeCombo.click();
    await this.page.getByRole('option', { name: type, exact: true }).click();
  }

  async getGoalTypeOptions(): Promise<string[]> {
    await this.goalTypeCombo.click();
    const opts = this.page.getByRole('option');
    await opts.first().waitFor({ state: 'visible' });
    const texts = (await opts.allInnerTexts()).map(t => t.trim());
    await this.page.keyboard.press('Escape');
    return texts;
  }

  /** A form field container inside the goal dialog (`[data-slot="form-item"]` holding its label). */
  formItem(label: string): Locator {
    return this.goalDialog.locator('[data-slot="form-item"]').filter({ hasText: new RegExp(`^${esc(label)}`) }).first();
  }

  editor(field: RichTextField): Locator {
    return this.formItem(field).locator('[contenteditable="true"]').first();
  }

  toolbarButton(field: RichTextField, name: string): Locator {
    return this.formItem(field).getByRole('button', { name, exact: true });
  }

  async typeRichText(field: RichTextField, text: string): Promise<void> {
    await this.editor(field).click();
    await this.page.keyboard.press('ControlOrMeta+End');
    await this.page.keyboard.type(text);
  }

  /** Select all text in one editor (toolbar formatting applies to the current selection). */
  async selectAllInEditor(field: RichTextField): Promise<void> {
    await this.editor(field).click();
    await this.page.keyboard.press('ControlOrMeta+a');
  }

  async setDuration(d: { months?: number | string; weeks?: number | string; days?: number | string }): Promise<void> {
    const set = async (input: Locator, v?: number | string) => {
      if (v === undefined) return;
      await input.click();
      await input.press('ControlOrMeta+a');
      await input.pressSequentially(String(v));
    };
    await set(this.monthsInput, d.months);
    await set(this.weeksInput, d.weeks);
    await set(this.daysInput, d.days);
  }

  async readDuration(): Promise<{ months: string; weeks: string; days: string }> {
    return { months: await this.monthsInput.inputValue(), weeks: await this.weeksInput.inputValue(), days: await this.daysInput.inputValue() };
  }

  /**
   * Click Save and pass the "Verify before creating" confirmation (Add only).
   * Resolves with the write response (POST for Add, PATCH/PUT for Edit), or null if none was sent.
   */
  async saveGoalDialog(): Promise<Response | null> {
    const write = this.page.waitForResponse(
      r => /\/api\/v1\/goals(\/[\w-]+)?$/.test(r.url().split('?')[0]) && ['POST', 'PATCH', 'PUT'].includes(r.request().method()),
      { timeout: 30_000 },
    ).catch(() => null);
    await this.dialogSaveBtn.click();
    const confirm = this.verifyBeforeCreatingDialog.getByRole('button', { name: 'Confirm & Create' });
    const outcome = await Promise.race([
      confirm.waitFor({ state: 'visible', timeout: 10_000 }).then(() => 'confirm' as const),
      write.then(() => 'written' as const),
    ]).catch(() => 'none' as const);
    if (outcome === 'confirm') await confirm.click();
    return write;
  }

  /** Create a goal through the UI and return its name + publicId (from the POST response). */
  async createGoal(input: NewGoalInput): Promise<CreatedGoal> {
    await this.openAddGoal();
    await this.typeGoalName(input.name);
    if (input.type && input.type !== 'Technical') await this.selectGoalType(input.type);
    if (input.certificateCode !== undefined) await this.certificateCodeInput.fill(input.certificateCode);
    for (const [field, text] of Object.entries(input.richText ?? {})) await this.typeRichText(field as RichTextField, text as string);
    if (input.duration) await this.setDuration(input.duration);
    const res = await this.saveGoalDialog();
    if (!res) throw new Error(`No create request was sent for goal "${input.name}"`);
    const body = await res.json().catch(() => ({}));
    if (!res.ok()) throw new Error(`Create goal "${input.name}" failed: ${res.status()} ${JSON.stringify(body).slice(0, 300)}`);
    await this.addGoalDialog.waitFor({ state: 'hidden', timeout: 15_000 });
    return { name: input.name, id: body?.data?.publicId ?? body?.publicId ?? '' };
  }

  /** Search the catalogue for `name` and open its Edit dialog, waiting for the goal fetch that resets the form. */
  async openEditGoal(name: string): Promise<void> {
    await this.searchGoals(name);
    const row = this.goalRow(name);
    const loaded = this.page.waitForResponse(r => /\/api\/v1\/goals\/[\w-]+$/.test(r.url().split('?')[0]) && r.request().method() === 'GET', { timeout: 20_000 }).catch(() => null);
    await row.getByRole('button', { name: 'Edit', exact: true }).click();
    await this.editGoalDialog.waitFor({ state: 'visible', timeout: 15_000 });
    await loaded;
    await this.goalNameInput.and(this.page.locator(':disabled')).waitFor({ state: 'visible', timeout: 10_000 }).catch(() => {});
  }

  async closeGoalDialog(how: 'Cancel' | 'Close' | 'Escape' = 'Cancel'): Promise<void> {
    if (how === 'Escape') await this.page.keyboard.press('Escape');
    else await (how === 'Cancel' ? this.dialogCancelBtn : this.dialogCloseBtn).click();
    await this.goalDialog.waitFor({ state: 'hidden', timeout: 10_000 });
  }

  /** Delete a catalogue goal through the UI (search → Delete → confirm). Resolves with the DELETE response. */
  async deleteGoalViaUi(name: string): Promise<Response | null> {
    await this.searchGoals(name);
    await this.goalRow(name).getByRole('button', { name: 'Delete', exact: true }).click();
    await this.deleteGoalDialog.waitFor({ state: 'visible', timeout: 10_000 });
    const del = this.page.waitForResponse(r => /\/api\/v1\/goals\/[\w-]+$/.test(r.url()) && r.request().method() === 'DELETE', { timeout: 20_000 }).catch(() => null);
    await this.deleteGoalDialog.getByRole('button', { name: 'Delete', exact: true }).click();
    return del;
  }

  // ═══ Raw API (role enforcement / cleanup) ═════════════════════════════════

  apiUrl(path: string): string {
    return /^https?:\/\//.test(path) ? path : `${GoalsPage.API_BASE}${path.startsWith('/') ? '' : '/'}${path}`;
  }

  async apiGet(path: string): Promise<{ status: number; body: any }> {
    const res = await this.sendWithRefresh(() => this.page.request.get(this.apiUrl(path), { failOnStatusCode: false }));
    return { status: res.status(), body: await res.json().catch(() => null) };
  }

  /**
   * The saved storageState's short-lived accessToken cookie is often stale when a test calls the API
   * before (or without) a page load — the SPA refreshes it on load, `page.request` never does, and the
   * call comes back 401 AUTH_001 regardless of role. Do what the SPA does: POST /auth/refresh once with
   * the same cookie jar, then retry. A genuine 401 (refresh also rejected) is returned unchanged.
   */
  private async sendWithRefresh(call: () => Promise<APIResponse>): Promise<APIResponse> {
    const first = await call();
    if (first.status() !== 401) return first;
    const refreshed = await this.page.request.post(this.apiUrl('/api/v1/auth/refresh'), { failOnStatusCode: false });
    return refreshed.ok() ? call() : first;
  }

  async apiSend(method: 'post' | 'patch' | 'put' | 'delete', path: string, data?: unknown): Promise<{ status: number; body: any }> {
    const res = await this.sendWithRefresh(() => this.page.request[method](this.apiUrl(path), { data: data as any, failOnStatusCode: false }));
    return { status: res.status(), body: await res.json().catch(() => null) };
  }

  /** All catalogue goals whose name EXACTLY equals `name` (via GET /api/v1/goals?search=). */
  async findGoalsByExactName(name: string): Promise<any[]> {
    const { status, body } = await this.apiGet(`/api/v1/goals?page=1&limit=100&search=${encodeURIComponent(name)}`);
    if (status !== 200) return [];
    return (body?.data?.items ?? []).filter((g: any) => g.name === name);
  }

  /**
   * Cleanup: delete goals this suite created, by exact name. Refuses any name that does not carry
   * the suite prefix, so it can never touch a goal it did not create. Returns names it could not delete.
   */
  async deleteGoalsByName(names: string[]): Promise<string[]> {
    const failed: string[] = [];
    for (const name of names) {
      if (!name.includes(GoalsPage.GOAL_PREFIX)) { failed.push(name); continue; }
      for (const g of await this.findGoalsByExactName(name)) {
        const { status } = await this.apiSend('delete', `/api/v1/goals/${g.publicId}`);
        if (status >= 300) failed.push(`${name} (${status})`);
      }
    }
    return failed;
  }

  /** Delete a goal by publicId — only for ids taken from this suite's own create responses. */
  async deleteGoalById(id: string): Promise<number> {
    return (await this.apiSend('delete', `/api/v1/goals/${id}`)).status;
  }

  /** Any toast currently on screen whose text matches. */
  toast(text: string | RegExp): Locator {
    return this.page.locator('[data-sonner-toast]').filter({ hasText: text });
  }

  static uniqueName(tag = ''): string {
    return `${GoalsPage.GOAL_PREFIX}-${Date.now()}${tag ? `-${tag}` : ''}`;
  }

  /**
   * Rendered document width vs viewport. The one justified `evaluate` in this file: Playwright's
   * Locator API exposes no scrollWidth, and this reads layout geometry, not application state.
   */
  async hasHorizontalPageOverflow(): Promise<boolean> {
    return this.page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  }

  // ═══ Legacy adapters (6.2.0 API) ══════════════════════════════════════════
  // Kept so ci-cd-pipeline/tests/positive-flows.spec.ts and
  // tests/e2e/employee/employee-details/integration.spec.ts keep compiling and keep working
  // against the 6.3.2 layout. New code should use the methods above.

  /** @deprecated use openByGoal() */
  async navigateToGoals(): Promise<void> { await this.openByGoal(); }
  /** @deprecated use openAddGoal() */
  async openAddGoalPanel(): Promise<void> { await this.openAddGoal(); }
  /** @deprecated use GoalsPage.uniqueName() */
  createUniqueGoalName(prefix = 'AutoGoal'): string { return `${prefix}-${Date.now()}`; }
  /** @deprecated use typeGoalName() */
  async fillGoalName(text: string): Promise<void> { await this.typeGoalName(text); }
  /** @deprecated the duplicate check is the "Verify before creating" alertdialog shown on Save */
  async isDuplicateWarningVisible(timeoutMs = 0): Promise<boolean> {
    if (timeoutMs > 0) await this.verifyBeforeCreatingDialog.waitFor({ state: 'visible', timeout: timeoutMs }).catch(() => {});
    return this.verifyBeforeCreatingDialog.isVisible().catch(() => false);
  }
  /** @deprecated */
  async acknowledgeDuplicateWarning(): Promise<void> {
    await this.verifyBeforeCreatingDialog.getByRole('button', { name: 'Confirm & Create' }).click();
  }
  /** @deprecated use saveGoalDialog() */
  async savePanel(): Promise<void> {
    await this.saveGoalDialog();
    await this.goalDialog.waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => {});
  }
  /** @deprecated use goalRow() */
  getGoalRow(goalName: string): Locator { return this.goalRow(goalName); }
  /** @deprecated */
  async isDeleteEnabled(goalName: string): Promise<boolean> {
    await this.searchGoals(goalName);
    return this.goalRow(goalName).getByRole('button', { name: 'Delete', exact: true }).isEnabled().catch(() => false);
  }
  /** @deprecated use deleteGoalViaUi() */
  async clickDeleteGoal(goalName: string): Promise<void> {
    await this.searchGoals(goalName);
    await this.goalRow(goalName).getByRole('button', { name: 'Delete', exact: true }).click();
  }
  /** @deprecated */
  async confirmDeleteGoal(): Promise<void> {
    await this.deleteGoalDialog.getByRole('button', { name: 'Delete', exact: true }).click();
    await this.deleteGoalDialog.waitFor({ state: 'hidden', timeout: 10_000 }).catch(() => {});
  }
  /** @deprecated opens the "Department Employees" popover of a goal */
  async openGoalEmployeeList(goalName: string): Promise<boolean> {
    await this.searchGoals(goalName);
    const row = this.goalRow(goalName);
    if (!(await row.isVisible().catch(() => false))) return false;
    return this.openCountPopover(row, 'Dept').then(() => true).catch(() => false);
  }
  /** @deprecated */
  async isEmployeeInGoalEmployeeList(employeeName: string): Promise<boolean> {
    return this.countPopover.getByText(employeeName, { exact: true }).first().isVisible().catch(() => false);
  }
}
