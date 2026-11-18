import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../base.page';

/**
 * Utilization Priority (TC-UTLPRI-*) — PMO resource-prioritization screen at `/utilization-priority`.
 *
 * GROUNDING (2026-09-04, live against BASE_URL, PMO session bhumi.chauhan@simformsolutions.com):
 * every locator below traces to `reports/knowledge-base/dom-snapshots/UTLPRI.json` or to a live
 * interaction probe. Confirmed facts that shaped these locators:
 *
 *  - The screen is a TOP-LEVEL nav item (sidebar link "Utilization Priority" → `/utilization-priority`),
 *    not a PM & PMO sub-page. `/pmo/utilization-priority`, `/pmo`, `/utilisation-priority` all 404.
 *  - There is NO `data-testid` anywhere on this screen — every locator is role/label-based per the
 *    selector priority in qa-conventions.md.
 *  - Column order is fixed: 1 Employee Name (incl. designation + experience), 2 Department,
 *    3 UP (System), 4 UP (Manual), 5 Availability, 6 Value Score, 7 Skills / Tech, 8 Allocation.
 *  - The per-column sort/filter icon buttons render at opacity 0 until their column header is
 *    hovered, so a plain `.click()` fails actionability. `hover()` on the header first, then click.
 *  - Filter popovers are Radix poppers exposed as `role="dialog"` with `data-state="open"`; they are
 *    portaled to <body>, so they are NOT descendants of the column header.
 *  - Filter selections only take effect after the popover's "Save" button; "Clear" resets that one
 *    filter. Applied filters render as chips with a "Clear filter" control.
 *  - The list opens ordered by Value Score ASCENDING (so the P3 cohort is on page 1), and that
 *    ordering also governs every filtered cohort — page 1 of a tier filter is that tier's floor.
 *  - Filter state PERSISTS across navigations for the session (FRD §12.A) and is mirrored into the
 *    URL (`?upSystemTiers=P1_RED`, `?upManualTiers=NOT_SET`, `?onlyUnderUtilized=true`,
 *    `?sortBy=…&sortOrder=…`, `?search=…`). Because stored state wins over a deep link on load,
 *    tests that need a pristine list must call `clearAllFilters()` or use a fresh browser context.
 */
export class UtilizationPriorityPage extends BasePage {
  static readonly ROUTE = '/utilization-priority';

  /** Column index (1-based) of every table column, confirmed live. */
  static readonly COL = {
    name: 1, department: 2, upSystem: 3, upManual: 4,
    availability: 5, valueScore: 6, skills: 7, allocation: 8,
  } as const;

  readonly heading: Locator;
  readonly subtitle: Locator;
  readonly searchInput: Locator;
  readonly table: Locator;
  readonly resultsSummary: Locator;
  readonly pagination: Locator;
  readonly previousPageBtn: Locator;
  readonly nextPageBtn: Locator;
  readonly emptyState: Locator;

  readonly kpiP1: Locator;
  readonly kpiP2: Locator;
  readonly kpiP3: Locator;
  readonly kpiUnderUtilized: Locator;
  readonly underUtilizedInfoIcon: Locator;
  readonly valueScoreInfoIcon: Locator;

  constructor(page: Page) {
    super(page);
    // 6.2.0 renders this title twice (sr-only + visible) — see BasePage.pageHeading().
    this.heading = this.pageHeading('Utilization Priority');
    this.subtitle = page.getByText(/PMO ranking of people by how urgently they should be \(re\)utilized/);
    this.searchInput = page.getByLabel('Search');
    this.table = page.getByRole('table');
    this.resultsSummary = page.getByText(/^Showing \d+ - \d+ of \d+ results$/);
    this.pagination = page.getByRole('navigation', { name: 'Pagination Navigation' });
    this.previousPageBtn = page.getByRole('button', { name: 'Previous page' });
    this.nextPageBtn = page.getByRole('button', { name: 'Next page' });
    this.emptyState = page.getByText(/No one to rank yet|No employees match the current filters/);

    // KPI tiles render label and count as one concatenated accessible name ("UP (System) P1 1347"),
    // the same pattern as the PM Projects KPI cards — anchor on the label prefix only.
    this.kpiP1 = page.getByRole('button', { name: /^UP \(System\) P1/ });
    this.kpiP2 = page.getByRole('button', { name: /^UP \(System\) P2/ });
    this.kpiP3 = page.getByRole('button', { name: /^UP \(System\) P3/ });
    this.kpiUnderUtilized = page.getByRole('button', { name: /^Under-Utilized/ });

    this.underUtilizedInfoIcon = page.getByRole('img', { name: /Counts everyone with \d+% or more of their capacity unclaimed/ });
    this.valueScoreInfoIcon = page.getByRole('img', { name: /Composite 0-100 score behind the system tier/ });
  }

  // ─── Navigation ────────────────────────────────────────────────────────────

  async navigate(): Promise<void> {
    await this.page.goto(UtilizationPriorityPage.ROUTE, { waitUntil: 'domcontentloaded' });
    await this.table.waitFor({ state: 'visible', timeout: 45_000 });
    await this.waitForRowsSettled();
  }

  /** Navigate and guarantee a pristine, unfiltered list (session filter state is sticky). */
  async navigateClean(): Promise<void> {
    await this.navigate();
    await this.clearAllFilters();
  }

  /** True when the current session is allowed on this screen at all. */
  async isAccessible(): Promise<boolean> {
    await this.page.goto(UtilizationPriorityPage.ROUTE, { waitUntil: 'domcontentloaded' });
    await this.page.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => {});
    return this.table.isVisible({ timeout: 20_000 }).catch(() => false);
  }

  // ─── Rows ──────────────────────────────────────────────────────────────────

  getAllRows(): Locator {
    return this.page.locator('table tbody tr');
  }

  cell(rowIndex: number, column: number): Locator {
    return this.getAllRows().nth(rowIndex).locator(`td:nth-child(${column})`);
  }

  /**
   * The grid streams in after a slow initial fetch and briefly renders a transient row set while a
   * debounced search/filter request is still in flight — poll until the count holds steady, the
   * same technique already proven on PM Projects.
   */
  async waitForRowsSettled(timeoutMs = 20_000): Promise<number> {
    const deadline = Date.now() + timeoutMs;
    let previous = -1;
    let stableSince = Date.now();
    while (Date.now() < deadline) {
      const current = await this.getAllRows().count();
      if (current !== previous) {
        previous = current;
        stableSince = Date.now();
      } else if (Date.now() - stableSince > 1200) {
        return current;
      }
      await this.page.waitForTimeout(200);
    }
    return previous;
  }

  async getColumnValues(column: number): Promise<string[]> {
    await this.waitForRowsSettled();
    return this.getAllRows().locator(`td:nth-child(${column})`).allInnerTexts()
      .then(v => v.map(s => s.replace(/\s+/g, ' ').trim()));
  }

  async getTierColumn(): Promise<string[]> {
    return this.getColumnValues(UtilizationPriorityPage.COL.upSystem);
  }

  /** Availability column parsed to numbers (the cell renders e.g. "10.23%"). */
  async getAvailabilityNumbers(): Promise<number[]> {
    const raw = await this.getColumnValues(UtilizationPriorityPage.COL.availability);
    return raw.map(v => parseFloat(v.replace('%', '')));
  }

  async getValueScoreNumbers(): Promise<number[]> {
    const raw = await this.getColumnValues(UtilizationPriorityPage.COL.valueScore);
    return raw.map(v => parseFloat(v));
  }

  /**
   * One fully parsed row per visible table row — the shape every calculation assertion works from.
   * The name cell packs "<Name> <Designation> <Experience>" into one block (with an optional
   * leading "NP" notice-period badge), so designation and experience are split back out here.
   */
  async getRowData(): Promise<UtilizationRow[]> {
    await this.waitForRowsSettled();
    const raw = await this.getAllRows().evaluateAll(rows => rows.map(tr => {
      const tds = Array.from(tr.querySelectorAll('td')).map(td => (td.textContent || '').replace(/\s+/g, ' ').trim());
      const nameButtons = Array.from(tr.querySelectorAll('td:nth-child(1) button'))
        .map(b => (b.textContent || '').trim()).filter(Boolean);
      return { nameCell: tds[0] ?? '', name: nameButtons[nameButtons.length - 1] ?? '',
        department: tds[1] ?? '', upSystem: tds[2] ?? '', upManual: tds[3] ?? '',
        availability: tds[4] ?? '', valueScore: tds[5] ?? '' };
    }));

    return raw.map(r => {
      const tail = r.name && r.nameCell.includes(r.name)
        ? r.nameCell.slice(r.nameCell.lastIndexOf(r.name) + r.name.length).trim()
        : r.nameCell;
      const match = tail.match(/^(.*?)\s*(\d+(?:\.\d+)?)$/);
      return {
        name: r.name,
        designation: (match ? match[1].trim() : tail) || 'N/A',
        experience: match ? parseFloat(match[2]) : null,
        department: r.department,
        upSystemTier: (r.upSystem.match(/P[123]/)?.[0] ?? '') as Tier,
        upManual: r.upManual,
        availability: parseFloat(r.availability.replace('%', '')),
        valueScore: parseFloat(r.valueScore),
      };
    });
  }

  /**
   * The name in row `index` of the current grid.
   *
   * Every spec that WRITES a UP (Manual) value must claim its own row index: the write is real and
   * persists server-side, so two specs sharing row 0 clobber each other under parallel workers.
   */
  async getEmployeeNameAt(index: number): Promise<string> {
    const rows = await this.getRowData();
    if (index >= rows.length) throw new Error(`Only ${rows.length} rows rendered — row ${index} does not exist.`);
    return rows[index].name;
  }

  // ─── Search ────────────────────────────────────────────────────────────────

  async search(term: string): Promise<void> {
    await this.searchInput.fill('');
    await this.searchInput.fill(term);
    await this.waitForRowsSettled();
  }

  async clearSearch(): Promise<void> {
    await this.searchInput.fill('');
    await this.waitForRowsSettled();
  }

  /** Parsed row for one employee, or null when the search returns no match for that exact name. */
  async findEmployee(name: string): Promise<UtilizationRow | null> {
    await this.search(name);
    const rows = await this.getRowData();
    return rows.find(r => r.name === name) ?? null;
  }

  // ─── Sorting ───────────────────────────────────────────────────────────────

  columnHeader(name: string | RegExp): Locator {
    return this.page.getByRole('columnheader', { name });
  }

  /**
   * Whether a column offers a sort control at all. Confirmed live: only Employee Name, Department,
   * UP (System), UP (Manual) and Availability ship one — Value Score, Skills / Tech and Allocation
   * do not, even though FRD §12.B lists Value Score as sortable.
   */
  async isSortable(columnName: string | RegExp): Promise<boolean> {
    const header = this.columnHeader(columnName);
    await header.hover().catch(() => {});
    return (await header.getByRole('button', { name: /sort/i }).count()) > 0;
  }

  /**
   * Click a column's sort control. The icon button is opacity-0 until the header is hovered, so the
   * hover is load-bearing, not cosmetic — without it Playwright times out on actionability.
   */
  async sortBy(columnName: string | RegExp): Promise<void> {
    const header = this.columnHeader(columnName);
    await header.hover();
    const sortButton = header.getByRole('button', { name: /sort/i });
    if (await sortButton.count() === 0) {
      throw new Error(`The "${columnName}" column header exposes no sort control, so it cannot be sorted.`);
    }
    await sortButton.first().click({ force: true });
    await this.waitForRowsSettled();
  }

  // ─── Filters ───────────────────────────────────────────────────────────────

  /** Open one column's filter popover and return the (portaled) popover locator. */
  async openFilter(columnLabel: string): Promise<Locator> {
    const trigger = this.page.getByLabel(`Filter by ${columnLabel}`);
    await trigger.first().hover().catch(() => {});
    await trigger.first().click({ force: true });
    const popover = this.page.getByRole('dialog').filter({ hasText: columnLabel }).last();
    await popover.waitFor({ state: 'visible', timeout: 15_000 });
    return popover;
  }

  /** Tick the given option labels inside a column filter and Save. */
  async applyFilter(columnLabel: string, optionLabels: string[]): Promise<void> {
    const popover = await this.openFilter(columnLabel);
    for (const label of optionLabels) {
      await popover.getByText(label, { exact: true }).first().click();
    }
    await popover.getByRole('button', { name: 'Save' }).click();
    await this.waitForRowsSettled();
  }

  async clearFilter(columnLabel: string): Promise<void> {
    const popover = await this.openFilter(columnLabel);
    await popover.getByRole('button', { name: 'Clear' }).click();
    await this.waitForRowsSettled();
    await this.page.keyboard.press('Escape').catch(() => {});
  }

  getFilterChips(): Locator {
    return this.page.getByRole('button', { name: /Clear filter/i });
  }

  /** Remove every applied filter chip so the list returns to its unfiltered state. */
  async clearAllFilters(): Promise<void> {
    for (let guard = 0; guard < 10; guard++) {
      const chips = this.getFilterChips();
      if (await chips.count() === 0) break;
      await chips.first().click();
      await this.waitForRowsSettled();
    }
  }

  // ─── KPI tiles (which double as one-click filters) ─────────────────────────

  /** Parse the trailing count out of a KPI tile's concatenated accessible name. */
  async getKpiCount(tile: Locator): Promise<number> {
    const name = (await tile.first().getAttribute('aria-label')) ?? await tile.first().innerText();
    const match = name.replace(/\s+/g, ' ').trim().match(/(\d+)\s*$/);
    if (!match) throw new Error(`Could not parse a trailing count out of KPI tile "${name}"`);
    return parseInt(match[1], 10);
  }

  async clickKpi(tile: Locator): Promise<void> {
    await tile.first().click();
    await this.waitForRowsSettled();
  }

  // ─── UP (Manual) ───────────────────────────────────────────────────────────

  manualPriorityFor(employeeName: string): Locator {
    return this.page.getByRole('combobox', { name: `Set manual priority for ${employeeName}` });
  }

  /** `value` is the visible option label: "Not set" | "P1 · Red" | "P2 · Amber" | "P3 · Green". */
  async setManualPriority(employeeName: string, value: ManualPriority): Promise<void> {
    const combobox = this.manualPriorityFor(employeeName);
    await combobox.click();
    await this.page.getByRole('option', { name: value, exact: true }).click();
    await expect(combobox).toHaveText(value, { timeout: 20_000 });
  }

  async getManualPriority(employeeName: string): Promise<string> {
    return (await this.manualPriorityFor(employeeName).innerText()).replace(/\s+/g, ' ').trim();
  }

  async getManualPriorityOptions(employeeName: string): Promise<string[]> {
    await this.manualPriorityFor(employeeName).click();
    const options = await this.page.getByRole('option').allInnerTexts();
    await this.page.keyboard.press('Escape');
    return options.map(o => o.replace(/\s+/g, ' ').trim());
  }

  // ─── Pagination ────────────────────────────────────────────────────────────

  async gotoPage(pageNumber: number): Promise<void> {
    await this.page.getByRole('button', { name: `Page ${pageNumber}`, exact: true }).click();
    await this.waitForRowsSettled();
  }

  /** Jump to the final page of the current result set; returns its 1-based page number. */
  async gotoLastPage(): Promise<number> {
    const { total, to } = await this.getResultsSummary();
    const lastPage = Math.ceil(total / to);
    if (lastPage > 1) await this.gotoPage(lastPage);
    return lastPage;
  }

  /** { from, to, total } parsed out of "Showing 1 - 100 of 3655 results". */
  async getResultsSummary(): Promise<{ from: number; to: number; total: number }> {
    const text = (await this.resultsSummary.first().innerText()).replace(/\s+/g, ' ').trim();
    const match = text.match(/^Showing (\d+) - (\d+) of (\d+) results$/);
    if (!match) throw new Error(`Unexpected results-summary text: "${text}"`);
    return { from: +match[1], to: +match[2], total: +match[3] };
  }
}

export type Tier = 'P1' | 'P2' | 'P3' | '';
export type ManualPriority = 'Not set' | 'P1 · Red' | 'P2 · Amber' | 'P3 · Green';

export interface UtilizationRow {
  name: string;
  designation: string;
  experience: number | null;
  department: string;
  upSystemTier: Tier;
  upManual: string;
  availability: number;
  valueScore: number;
}
