import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

/**
 * Dashboard (TC-DASH-*) — top-level Dashboard module (nav code DASH, no sub-feature level).
 *
 * GROUNDED (2026-09-02) against the live app at BASE_URL via `npm run capture:dom-snapshot`
 * (reports/knowledge-base/dom-snapshots/DASH.json, DASH_PM.json, DASH_TM.json, DASH_PUNIT.json,
 * DASH_EMP.json). Confirmed live: 'Dashboard' is the first sidebar link, above 'Employee'. The
 * page itself is a KPI/chart dashboard (Total Allocation / Total Deallocation / Net Utilisation
 * cards + 4 charts + one consolidated "All Activity" table), NOT the FRD's literal 3-separate-
 * tabular-sections layout — see reports/requirements/req-2026-09-02-DASH-doc.json unclear[] for
 * the full FRD-vs-live discussion. Locators below marked "UNVERIFIED" had their trigger control
 * grounded live but not their full open/interaction shape (popover option list, combobox open
 * behavior) — treat assertions built on them as best-effort, not hard requirements.
 *
 * CONFIRMED DEFECT (DEF-DASH-001): the base Employee role (kashyap.patel@simformsolutions.com,
 * empPage fixture) has NO 'Dashboard' sidebar link at all, and direct navigation to /dashboard
 * redirects to /unauthorized ("Access Denied"). This contradicts FRD Section 3/10, which lists
 * Employee as an accessible role. getUnauthorizedHeading()/isUnauthorized() below exist
 * specifically to assert this current (defective) behavior — see negative.spec.ts.
 */
const ACTIVITY_COLUMNS = ['Employee Name', 'Projects', 'Allocation %', 'Hrs / Day', 'Logged', 'Status', 'Start Date', 'End Date'] as const;
type ActivityColumn = typeof ACTIVITY_COLUMNS[number];

export class DashboardPage extends BasePage {
  readonly dashboardHeading: Locator;
  readonly periodFilterBtn: Locator;
  readonly departmentFilterCombobox: Locator;
  readonly exportDataBtn: Locator;
  readonly upcomingChangesBtn: Locator;

  readonly totalAllocationCard: Locator;
  readonly totalDeallocationCard: Locator;
  readonly netUtilisationCard: Locator;

  readonly trendChart: Locator;
  readonly allocationTypeDonut: Locator;
  readonly projectBarChart: Locator;
  readonly netUtilisationBreakdownChart: Locator;

  readonly allActivityHeading: Locator;
  readonly allActivitySearchInput: Locator;
  readonly allActivityTable: Locator;

  readonly unauthorizedHeading: Locator;

  constructor(page: Page) {
    super(page);

    // 6.2.0 renders this title twice (sr-only + visible) — see BasePage.pageHeading().
    this.dashboardHeading = this.pageHeading(/^dashboard$/i);

    // GROUNDED live: aria-label "Change the dashboard period", visible text the currently
    // selected option (e.g. "This Year").
    this.periodFilterBtn = page.getByLabel('Change the dashboard period');

    // GROUNDED live for PMO/TM; CONFIRMED ABSENT for PM/Employee-scoped sessions (see AC11).
    this.departmentFilterCombobox = page.getByRole('combobox', { name: /filter the dashboard by department/i });

    // GROUNDED live: aria-label "Export dashboard data", visible text "Export Data".
    this.exportDataBtn = page.getByLabel('Export dashboard data');

    // GROUNDED live: aria-label "Filter upcoming allocations and de-allocations by date",
    // visible text "Upcoming Changes".
    this.upcomingChangesBtn = page.getByLabel('Filter upcoming allocations and de-allocations by date');

    // KPI cards are plain text (no distinct role/testid found live) — scope by their leading label.
    this.totalAllocationCard = page.getByText(/^total allocation/i).first();
    this.totalDeallocationCard = page.getByText(/^total deallocation/i).first();
    this.netUtilisationCard = page.getByText(/^net utilisation/i).first();

    this.trendChart = page.getByRole('img', { name: /line chart of allocated versus de-allocated hours/i });
    this.allocationTypeDonut = page.getByRole('img', { name: /donut chart splitting allocated hours/i });
    this.projectBarChart = page.getByRole('img', { name: /bar chart of allocated hours per day by project/i });
    this.netUtilisationBreakdownChart = page.getByRole('img', { name: /grouped bar chart comparing allocated and de-allocated hours/i });

    this.allActivityHeading = page.getByRole('heading', { name: /^all activity$/i });
    this.allActivitySearchInput = page.getByRole('textbox', { name: /^search$/i });
    this.allActivityTable = page.getByRole('table').first();

    this.unauthorizedHeading = page.getByRole('heading', { name: /access denied/i });
  }

  // ─── Navigation ──────────────────────────────────────────────────────────

  async navigateToDashboard(): Promise<void> {
    // Use page.goto() directly — BasePage.goto() calls networkidle which can outlast this SPA's
    // background chart/data fetches; wait on a concrete element instead (same pattern already used
    // by every other page object in this repo, e.g. EmployeeDetailsPage.navigateToEmployees()).
    await this.page.goto('/dashboard');
    await Promise.race([
      this.dashboardHeading.waitFor({ state: 'visible', timeout: 20000 }),
      this.unauthorizedHeading.waitFor({ state: 'visible', timeout: 20000 }),
    ]).catch(() => {});
    // The All Activity table's row data arrives via a separate, later async fetch than the top
    // heading — confirmed live 2026-09-02 (root cause of an initial flaky "0 rows" read on
    // TC-DASH-026 when only the heading, not the table, was awaited). Wait for at least one data
    // row OR the table's own empty-state, bounded, best-effort (a genuinely unauthorized/empty page
    // has neither and correctly falls through).
    if (!(await this.isUnauthorized())) {
      await this.getAllActivityDataRows().first().waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
    }
  }

  async isUnauthorized(): Promise<boolean> {
    return this.unauthorizedHeading.isVisible().catch(() => false);
  }

  getSidebarLink(name: string | RegExp): Locator {
    return this.page.getByRole('link', { name });
  }

  /**
   * All top-level sidebar nav item labels, in DOM order (links + expandable-group buttons).
   * GROUND-TRUTH CORRECTION (2026-09-02): the sidebar is NOT wrapped in an `<aside>`/`<nav>` tag —
   * confirmed live the page's only real `<nav>` element is the All Activity table's own pagination
   * ("Previous 1 2 3 ... Next"), and there is no `<aside>` at all. The sidebar is a plain
   * `role="list"` containing 'Dashboard'/'Employee' as real links and the remaining items
   * (Team/Requests Tracking/Projects/Department/Admin) as expandable-group buttons — scope by that
   * list directly instead of guessing a wrapper landmark tag. Anchored on the 'Employee' link
   * (confirmed present for every role sampled, including the Employee role that is missing
   * 'Dashboard' — DEF-DASH-001) rather than 'Dashboard' itself, so this method still finds the
   * sidebar list even when asserting Dashboard's absence.
   */
  async getSidebarItemLabels(): Promise<string[]> {
    const sidebarList = this.page.getByRole('list').filter({ has: this.page.getByRole('link', { name: 'Employee' }).or(this.page.getByRole('button', { name: /^Employee\b/ })) }).first();
    // Callers often land with waitUntil 'domcontentloaded' — the sidebar renders after the session
    // check resolves, so reading immediately returned [] (seen 2026-11-12 on the Employee role).
    await sidebarList.waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
    const items = sidebarList.getByRole('listitem');
    const count = await items.count().catch(() => 0);
    const labels: string[] = [];
    for (let i = 0; i < count; i++) {
      const text = ((await items.nth(i).textContent().catch(() => '')) ?? '').trim();
      if (text) labels.push(text);
    }
    return labels;
  }

  // ─── Global period filter ────────────────────────────────────────────────

  async openPeriodFilter(): Promise<Locator> {
    await this.periodFilterBtn.click();
    const dialog = this.page.getByRole('dialog').filter({ hasText: 'This Week' });
    await dialog.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return dialog;
  }

  /** GROUNDED live 2026-09-02: exactly these 6 buttons render inside the period-filter popover. */
  async getPeriodFilterOptionLabels(): Promise<string[]> {
    const dialog = await this.openPeriodFilter();
    const buttons = dialog.getByRole('button');
    const count = await buttons.count().catch(() => 0);
    const labels: string[] = [];
    for (let i = 0; i < count; i++) {
      const text = ((await buttons.nth(i).textContent().catch(() => '')) ?? '').trim();
      if (text) labels.push(text);
    }
    return labels;
  }

  async selectPeriod(option: 'This Week' | 'This Month' | 'This Year' | '0 - 1 Year' | '1 - 2 Years' | 'Custom Date Range'): Promise<void> {
    const dialog = await this.openPeriodFilter();
    await dialog.getByRole('button', { name: option, exact: true }).click();
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  }

  /**
   * GROUNDED live 2026-09-02 via direct network capture — the exact `duration` query param each
   * period-filter option sends to /api/v1/dashboard/overview and /activity. Confirmed for all 5
   * non-custom options; Custom Date Range likely sends explicit fromDate/toDate params instead of
   * a `duration` enum value (not independently confirmed — its date-input control isn't exposed
   * via standard textbox/date-input roles, see applyCustomDateRange()'s note).
   */
  static readonly PERIOD_DURATION_PARAM: Record<string, string> = {
    'This Week': 'this_week',
    'This Month': 'this_month',
    'This Year': 'this_year',
    '0 - 1 Year': 'last_one_year',
    '1 - 2 Years': 'one_to_two_years',
  };

  /**
   * UNVERIFIED — Custom Date Range's date-input control does not expose standard textbox/
   * input[type=date] roles (confirmed live: page.getByRole('textbox') only finds the unrelated
   * All Activity search box while this popover is open) — likely a custom masked/calendar widget.
   * Best-effort: tries a couple of plausible shapes and returns false gracefully if none match,
   * rather than assume a specific control exists.
   */
  async applyCustomDateRange(startISO: string, endISO: string): Promise<boolean> {
    const dialog = await this.openPeriodFilter();
    await dialog.getByRole('button', { name: 'Custom Date Range', exact: true }).click();
    const dateInputs = this.page.locator('input[type="date"]');
    const count = await dateInputs.count().catch(() => 0);
    if (count >= 2) {
      await dateInputs.nth(0).fill(startISO);
      await dateInputs.nth(1).fill(endISO);
      const applyBtn = this.page.getByRole('button', { name: /^apply$|^save$|^ok$/i });
      if (await applyBtn.isVisible().catch(() => false)) await applyBtn.click();
      await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
      return true;
    }
    await this.page.keyboard.press('Escape').catch(() => {});
    return false;
  }

  // ─── Department filter ───────────────────────────────────────────────────

  async isDepartmentFilterVisible(): Promise<boolean> {
    return this.departmentFilterCombobox.isVisible().catch(() => false);
  }

  /** UNVERIFIED — the open option list was not successfully captured live; best-effort. */
  async selectDepartment(name: string | RegExp): Promise<boolean> {
    const visible = await this.isDepartmentFilterVisible();
    if (!visible) return false;
    await this.departmentFilterCombobox.click();
    const option = this.page.getByRole('option', { name });
    const optionVisible = await option.first().isVisible({ timeout: 3000 }).catch(() => false);
    if (optionVisible) {
      await option.first().click();
      await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    } else {
      await this.page.keyboard.press('Escape').catch(() => {});
    }
    return optionVisible;
  }

  async getDepartmentFilterOptionsText(): Promise<string[]> {
    const visible = await this.isDepartmentFilterVisible();
    if (!visible) return [];
    await this.departmentFilterCombobox.click();
    const options = this.page.getByRole('option');
    await options.first().waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
    const count = await options.count().catch(() => 0);
    const texts: string[] = [];
    for (let i = 0; i < count; i++) {
      texts.push(((await options.nth(i).textContent().catch(() => '')) ?? '').trim());
    }
    await this.page.keyboard.press('Escape').catch(() => {});
    return texts;
  }

  // ─── KPI parsing ──────────────────────────────────────────────────────────
  //
  // GROUND-TRUTH CORRECTION (2026-09-02): KPI cards render their label ("Total Allocation") and
  // value ("3,231hrs") as SEPARATE text nodes/spans, so `getByText(/^total allocation/i).
  // textContent()` only ever returns the label — confirmed live via a standalone probe, root cause
  // of every KPI-parsing test initially reading "Could not parse ...". Likewise the donut/bar chart
  // `<img role>` elements' `textContent()` pulls in inline `<style>` tag CSS noise ahead of the real
  // summary text, while their `aria-label` is just a short static description with no numbers.
  // `main.innerText()` (the browser's RENDERED text, excluding <style>/hidden content) reads
  // cleanly as e.g. "Total Allocation\n10hrs\n6\n6 allocations\n...Net Utilisation\n-33hrs\n..." —
  // read it once per call and regex the specific figure out, rather than trusting a narrow locator.

  private async getMainText(): Promise<string> {
    return (await this.page.locator('main').first().innerText().catch(() => '')) ?? '';
  }

  private parseAfterLabel(text: string, label: string): number | null {
    const match = text.replace(/,/g, '').match(new RegExp(`${label}\\s*\\n?\\s*(-?\\d+(?:\\.\\d+)?)\\s*hrs`, 'i'));
    return match ? parseFloat(match[1]) : null;
  }

  private parseCountWord(text: string, word: 'allocations?' | 'deallocations?'): number | null {
    const match = text.replace(/,/g, '').match(new RegExp(`(\\d+)\\s*${word}`, 'i'));
    return match ? parseInt(match[1], 10) : null;
  }

  async getTotalAllocationHours(): Promise<number | null> {
    return this.parseAfterLabel(await this.getMainText(), 'Total Allocation');
  }

  async getTotalAllocationCount(): Promise<number | null> {
    return this.parseCountWord(await this.getMainText(), 'allocations?');
  }

  async getTotalDeallocationHours(): Promise<number | null> {
    return this.parseAfterLabel(await this.getMainText(), 'Total Deallocation');
  }

  async getNetUtilisationHours(): Promise<number | null> {
    return this.parseAfterLabel(await this.getMainText(), 'Net Utilisation');
  }

  /** Fixed%/Dynamic% + hour totals parsed from the donut chart's rendered summary text (e.g. "Fixed 3,219h (100%). Dynamic 12h (0%)"). */
  async getAllocationTypeBreakdown(): Promise<{ fixedPct: number | null; dynamicPct: number | null; fixedHours: number | null; dynamicHours: number | null }> {
    const text = (await this.allocationTypeDonut.innerText().catch(() => '')) || (await this.getMainText());
    const clean = text.replace(/,/g, '');
    const fixed = clean.match(/Fixed\s+(\d+(?:\.\d+)?)h\s*\((\d+(?:\.\d+)?)%\)/i);
    const dynamic = clean.match(/Dynamic\s+(\d+(?:\.\d+)?)h\s*\((\d+(?:\.\d+)?)%\)/i);
    return {
      fixedHours: fixed ? parseFloat(fixed[1]) : null,
      fixedPct: fixed ? parseFloat(fixed[2]) : null,
      dynamicHours: dynamic ? parseFloat(dynamic[1]) : null,
      dynamicPct: dynamic ? parseFloat(dynamic[2]) : null,
    };
  }

  /**
   * Per-project hour values parsed from the bar chart's rendered summary text, in rendered order.
   * Excludes the trailing "N other projects - Xhrs" rollup bucket (see AC7) — that figure is a SUM
   * of many small remaining projects, so it is not itself part of the per-project descending sort
   * order (confirmed live: e.g. "...34hrs (393 other projects) -3,008hrs" — the rollup's own total
   * can exceed every individual project shown above it without indicating a sort-order bug).
   */
  async getProjectBarChartValues(): Promise<number[]> {
    const text = (await this.projectBarChart.innerText().catch(() => '')) || (await this.getMainText());
    const withoutRollup = text.replace(/\d+\s*other projects[^.]*\.?/i, '');
    const matches = [...withoutRollup.replace(/,/g, '').matchAll(/-?\s*(\d+(?:\.\d+)?)\s*hrs/gi)];
    return matches.map(m => parseFloat(m[1]));
  }

  // ─── Export ───────────────────────────────────────────────────────────────

  /**
   * GROUNDED live (2026-09-02): "Export Data" does NOT download directly — it opens a real
   * `role="dialog"` titled "Export Dashboard Data" ("Export files will strictly include records
   * within your permitted view authority.") with a File Format choice (CSV (.csv) / Excel (.xlsx))
   * and Cancel / "Yes, export" buttons. The actual download only fires after "Yes, export".
   */
  getExportDialog(): Locator {
    return this.page.getByRole('dialog').filter({ hasText: 'Export Dashboard Data' });
  }

  /** Click Export Data, complete the format-confirmation dialog, and race a download event against an export-ish network response. Returns which (if either) fired. */
  async clickExportAndObserve(format: 'CSV' | 'Excel' = 'CSV'): Promise<{ downloaded: boolean; responseObserved: boolean; dialogOpened: boolean }> {
    await this.exportDataBtn.click();
    const dialog = this.getExportDialog();
    const dialogOpened = await dialog.waitFor({ state: 'visible', timeout: 8000 }).then(() => true).catch(() => false);
    if (!dialogOpened) return { downloaded: false, responseObserved: false, dialogOpened: false };

    const formatOption = dialog.getByText(new RegExp(format === 'CSV' ? 'CSV' : 'Excel', 'i')).first();
    if (await formatOption.isVisible().catch(() => false)) await formatOption.click().catch(() => {});

    const downloadPromise = this.page.waitForEvent('download', { timeout: 10000 }).then(() => true).catch(() => false);
    const responsePromise = this.page.waitForResponse(r => /export|dashboard/i.test(r.url()) && r.request().method() !== 'GET', { timeout: 10000 }).then(() => true).catch(() => false);

    const confirmBtn = dialog.getByRole('button', { name: /yes,?\s*export/i });
    await confirmBtn.click().catch(() => {});

    const [downloaded, responseObserved] = await Promise.all([downloadPromise, responsePromise]);
    return { downloaded, responseObserved, dialogOpened };
  }

  /**
   * Export as CSV, save the downloaded file, and parse it into structured sections. GROUNDED live
   * 2026-09-02: the CSV is a single file with `# <Section>` headers separating 5 sections —
   * Summary (metric/value pairs), Trend (one row per month bucket), Allocation Type (FIXED/
   * DYNAMIC), Hours by Project (EVERY project individually — NOT capped to top-6-plus-rollup like
   * the overview API's projectBreakdown), and All Activity (every row, not paginated like the UI
   * table or the /activity API — confirmed exactly 5939 data rows for PMO/this_year, matching the
   * /activity API's own `total` field exactly). Each section after Summary has its own CSV header
   * row. Returns null if the export/download didn't succeed.
   */
  async exportAndParseCsv(): Promise<{
    summary: Record<string, string>;
    trend: Array<Record<string, string>>;
    allocationType: Array<Record<string, string>>;
    hoursByProject: Array<Record<string, string>>;
    allActivity: Array<Record<string, string>>;
    filename: string;
  } | null> {
    await this.exportDataBtn.click();
    const dialog = this.getExportDialog();
    const dialogOpened = await dialog.waitFor({ state: 'visible', timeout: 8000 }).then(() => true).catch(() => false);
    if (!dialogOpened) return null;

    const csvOption = dialog.getByText('CSV', { exact: false }).first();
    if (await csvOption.isVisible().catch(() => false)) await csvOption.click().catch(() => {});

    const downloadPromise = this.page.waitForEvent('download', { timeout: 15000 }).catch(() => null);
    await dialog.getByRole('button', { name: /yes,?\s*export/i }).click().catch(() => {});
    const download = await downloadPromise;
    if (!download) return null;

    const stream = await download.createReadStream().catch(() => null);
    if (!stream) return null;
    const chunks: Buffer[] = [];
    for await (const chunk of stream) chunks.push(chunk as Buffer);
    const text = Buffer.concat(chunks).toString('utf8').replace(/^﻿/, '');

    return { ...this.parseExportedCsv(text), filename: download.suggestedFilename() };
  }

  /** Parses the "# Section" / CSV-header / quoted-CSV-rows structure into per-section arrays of row objects. */
  private parseExportedCsv(text: string): {
    summary: Record<string, string>;
    trend: Array<Record<string, string>>;
    allocationType: Array<Record<string, string>>;
    hoursByProject: Array<Record<string, string>>;
    allActivity: Array<Record<string, string>>;
  } {
    const parseCsvLine = (line: string): string[] => {
      const fields: string[] = [];
      let cur = '';
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (inQuotes) {
          if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; }
          else if (ch === '"') { inQuotes = false; }
          else { cur += ch; }
        } else if (ch === '"') { inQuotes = true; }
        else if (ch === ',') { fields.push(cur); cur = ''; }
        else { cur += ch; }
      }
      fields.push(cur);
      return fields;
    };

    const lines = text.split(/\r?\n/);
    const sections: Record<string, Array<Record<string, string>>> = {};
    let currentSection: string | null = null;
    let header: string[] | null = null;

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('# ')) {
        currentSection = trimmed.slice(2).trim();
        sections[currentSection] = [];
        header = null;
        continue;
      }
      if (!trimmed || currentSection === null) continue;
      const fields = parseCsvLine(line);
      if (!header) { header = fields; continue; }
      const row: Record<string, string> = {};
      header.forEach((h, i) => { row[h] = fields[i] ?? ''; });
      sections[currentSection].push(row);
    }

    const summary: Record<string, string> = {};
    for (const row of sections['Summary'] ?? []) {
      if (row['Metric'] !== undefined) summary[row['Metric']] = row['Value'];
    }

    return {
      summary,
      trend: sections['Trend'] ?? [],
      allocationType: sections['Allocation Type'] ?? [],
      hoursByProject: sections['Hours by Project'] ?? [],
      allActivity: sections['All Activity'] ?? [],
    };
  }

  // ─── All Activity table ───────────────────────────────────────────────────

  async searchAllActivity(query: string): Promise<void> {
    const responsePromise = this.page.waitForResponse(r => /\/dashboard\/activity/i.test(r.url()), { timeout: 10000 }).catch(() => null);
    await this.allActivitySearchInput.fill(query);
    await responsePromise;
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  }

  /**
   * Clear the All Activity search and wait for the full (unfiltered, potentially hundreds-of-rows —
   * see TC-DASH-026) dataset to actually finish re-rendering, not just for the network call to
   * settle. GROUND-TRUTH CORRECTION (2026-09-02): `networkidle` alone can resolve while a large
   * table is still appending/virtualizing rows client-side, observed live as a restored row count
   * transiently LOWER than the just-cleared filtered count — poll until the row count stabilizes
   * (two consecutive equal reads) instead of trusting a single post-networkidle snapshot.
   */
  async clearAllActivitySearch(): Promise<void> {
    await this.allActivitySearchInput.clear();
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    // A large PMO-scale table (900+ rows, no pagination — see TC-DASH-026) can render in visible
    // batches well past networkidle; require 2 consecutive stable reads, generous budget (up to
    // ~12s), rather than trusting the first plateau (confirmed live: an early plateau at ~46 rows
    // grew further shortly after on a slower render).
    let previous = -1;
    let stableStreak = 0;
    for (let i = 0; i < 20; i++) {
      const current = await this.getAllActivityRowCount().catch(() => 0);
      if (current === previous && current > 0) {
        stableStreak++;
        if (stableStreak >= 2) return;
      } else {
        stableStreak = 0;
      }
      previous = current;
      // Deliberate stabilization-poll interval (detecting when a count stops changing), not a
      // blind fixed wait — plain setTimeout rather than page.waitForTimeout since there is no
      // single event/response to key an auto-waiting assertion off (the table can re-render in
      // several batches from one query).
      await new Promise(resolve => setTimeout(resolve, 600));
    }
  }

  getAllActivityDataRows(): Locator {
    return this.allActivityTable.getByRole('row').filter({ hasNot: this.page.getByRole('columnheader') });
  }

  async getAllActivityRowCount(): Promise<number> {
    return this.getAllActivityDataRows().count();
  }

  /** GROUNDED live: column order is Employee Name | Projects | Allocation % | Hrs / Day | Logged | Status | Start Date | End Date. */
  async getRowCellText(row: Locator, column: ActivityColumn): Promise<string> {
    return ((await this.getRowCell(row, column).textContent().catch(() => '')) ?? '').trim();
  }

  /**
   * The cell itself, for web-first assertions. After a search/filter the table re-renders, and a
   * one-shot textContent() read of a row that is being replaced returns '' (seen 2026-11-12 on
   * TC-DASH-012: the filter applied correctly but the read raced the re-render) — assert on this
   * locator with toHaveText/toContainText so the check retries until the new rows are in place.
   */
  getRowCell(row: Locator, column: ActivityColumn): Locator {
    return row.getByRole('cell').nth(ACTIVITY_COLUMNS.indexOf(column));
  }

  getColumnSortBtn(column: 'Employee Name' | 'Projects' | 'Allocation %' | 'Start Date' | 'End Date'): Locator {
    return this.allActivityTable.locator('th').filter({ hasText: column }).getByRole('button', { name: /sort/i });
  }

  getColumnFilterBtn(column: 'Employee Name' | 'Projects' | 'Status'): Locator {
    return this.allActivityTable.locator('th').filter({ hasText: column }).getByRole('button', { name: /^filter by/i });
  }

  async openColumnFilter(column: 'Employee Name' | 'Projects' | 'Status'): Promise<Locator> {
    await this.getColumnFilterBtn(column).click();
    const dialog = this.page.getByRole('dialog').or(this.page.locator('[role="listbox"]')).first();
    await dialog.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return dialog;
  }

  /** Filter the Status column to a single value. Returns false if the control/option isn't found. */
  async filterStatusTo(status: string): Promise<boolean> {
    const dialog = await this.openColumnFilter('Status');
    const option = dialog.getByRole('checkbox', { name: status }).or(dialog.getByText(status, { exact: true }));
    const visible = await option.first().isVisible({ timeout: 3000 }).catch(() => false);
    if (!visible) { await this.page.keyboard.press('Escape').catch(() => {}); return false; }
    await option.first().click().catch(() => {});
    const applyBtn = dialog.getByRole('button', { name: /^save$|^apply$/i });
    if (await applyBtn.isVisible().catch(() => false)) await applyBtn.click();
    else await this.page.keyboard.press('Escape').catch(() => {});
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    return true;
  }

  // ─── Upcoming Changes filter ────────────────────────────────────────────

  /**
   * UNVERIFIED — trigger button grounded live; its popover's option content was not distinctly
   * captured. Defensive: checks visibility with a bounded timeout before clicking (an unguarded
   * `.click()` on a not-yet-rendered/covered button previously threw after the full default action
   * timeout and could leave an open overlay blocking later locators in the same test file — see
   * TC-DASH-014's cascading 60s timeout, root-caused to this method on 2026-09-02).
   */
  async openUpcomingChangesFilter(): Promise<Locator> {
    const clickable = await this.upcomingChangesBtn.isVisible({ timeout: 5000 }).catch(() => false);
    if (!clickable) return this.page.locator('[data-nonexistent-popover]');
    await this.upcomingChangesBtn.click({ timeout: 5000 }).catch(() => {});
    const popover = this.page.getByRole('dialog').or(this.page.locator('[role="listbox"], [data-radix-popper-content-wrapper]')).first();
    await popover.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return popover;
  }

  // ─── Negative / reliability helpers ────────────────────────────────────

  /** Intercept the dashboard's own data request(s) and force a failure — endpoint path is unconfirmed, so match broadly. */
  async mockDashboardApiFailure(status = 500): Promise<void> {
    await this.page.route(/\/api\/.*(dashboard|allocation)/i, route =>
      route.fulfill({
        status,
        contentType: 'application/json',
        body: JSON.stringify({ message: status === 401 ? 'Unauthorized' : 'Internal Server Error' }),
      })
    );
  }

  // ─── API helpers (ground-truth data validation) ────────────────────────
  // GROUNDED live 2026-09-02 via direct network capture of a real Dashboard page load: the real
  // API lives on a SEPARATE origin, `https://simerp-dev-api.simform.solutions`, under `/api/v1/...`
  // — same pattern already confirmed for Goals (see GoalsPage.API_BASE). Three real endpoints:
  //   GET /api/v1/dashboard/overview?duration=<duration>&projectLimit=<n>
  //     -> { data: { period, summary, trend, allocationTypeDistribution, projectBreakdown,
  //                  loggedHoursTimeframe, isTruncated } }
  //   GET /api/v1/dashboard/activity?duration=<duration>&page=<p>&limit=<n>
  //     -> { data: { items[], total, page, limit, totalPages, loggedHoursTimeframe } }
  //   GET /api/v1/dashboard/filter-options -> { data: { departments[] } }
  // `duration=this_year` is CONFIRMED (captured from the page's own default load); other duration
  // values (this_week/this_month/0-1 year/1-2 years/custom) are inferred by naming convention from
  // the UI's period-filter options, not independently confirmed — pass the confirmed 'this_year'
  // when a test doesn't specifically need a different period.
  // Overridable so the same specs can run against a local stack (e.g. API_BASE_URL=http://localhost:3002)
  // without editing code. Defaults to the staging API, so existing staging runs are unchanged.
  private static readonly API_BASE = process.env.API_BASE_URL || 'https://simerp-dev-api.simform.solutions';

  /**
   * Materialise the API session for a context that hasn't loaded the app yet.
   *
   * Ground-truth confirmed live: the access token lives in app storage, not in a cookie the
   * request context carries on its own, so `page.request.get(...)` straight from a freshly created
   * `storageState` context answers 401 for EVERY role — which `fetchOverview()` turned into `null`
   * and the specs reported as "overview API call failed" (TC-DASH-030/060/061). Loading any app
   * route once bootstraps auth; probed 401 → 200 for PMO, Employee and CSM after a single `/` hit.
   * `/` is used rather than `/dashboard` because the Employee role is blocked from the dashboard
   * route itself (DEF-DASH-001) while its API access is fine.
   */
  private async ensureApiSession(ctxPage: Page): Promise<void> {
    if (/^https?:\/\//.test(ctxPage.url())) return;
    await ctxPage.goto('/', { waitUntil: 'domcontentloaded' }).catch(() => {});
    await ctxPage.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
  }

  async fetchOverview(ctxPage: Page, duration = 'this_year', projectLimit = 6): Promise<any | null> {
    await this.ensureApiSession(ctxPage);
    const response = await ctxPage.request.get(
      `${DashboardPage.API_BASE}/api/v1/dashboard/overview?duration=${duration}&projectLimit=${projectLimit}`,
      { failOnStatusCode: false }
    );
    if (!response.ok()) return null;
    const body = await response.json().catch(() => null);
    return body?.data ?? null;
  }

  async fetchActivity(ctxPage: Page, duration = 'this_year', page = 1, limit = 100): Promise<any | null> {
    await this.ensureApiSession(ctxPage);
    const response = await ctxPage.request.get(
      `${DashboardPage.API_BASE}/api/v1/dashboard/activity?duration=${duration}&page=${page}&limit=${limit}`,
      { failOnStatusCode: false }
    );
    if (!response.ok()) return null;
    const body = await response.json().catch(() => null);
    return body?.data ?? null;
  }

  /** Raw status-only probe (used by negative/security tests that just need the HTTP status, not a parsed body). */
  async probeOverviewStatus(ctxPage: Page, duration = 'this_year'): Promise<number> {
    await this.ensureApiSession(ctxPage);
    const response = await ctxPage.request.get(
      `${DashboardPage.API_BASE}/api/v1/dashboard/overview?duration=${duration}&projectLimit=6`,
      { failOnStatusCode: false }
    );
    return response.status();
  }
}
