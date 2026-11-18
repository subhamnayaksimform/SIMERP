import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

/**
 * Employee Ratings & Feedback (TC-EMPRTF-*) — the deallocation-time ratings/feedback surface.
 *
 * LIVE AND GROUNDED (2026-09-23, SimERP 6.2.0 at BASE_URL=https://simerp-dev.simform.solutions).
 * Reached from the sidebar via **Overview → Employee Ratings** — the link only renders once the
 * Overview group is expanded, which is why a collapsed-sidebar snapshot misses it entirely.
 * Every locator below traces to a captured DOM snapshot:
 *   - dom-snapshots/EMPRTF.json         — list view at /employee-ratings
 *   - dom-snapshots/EMPRTF_DETAIL.json  — detail view at /employee-ratings/:publicId
 *   - dom-snapshots/EMPRTF_EDIT.json    — the "Edit Feedback" dialog
 *   - dom-snapshots/EMPRTF_FILTER.json  — a column filter popover
 *   - dom-snapshots/EMPRTF_NAV.json     — the expanded Overview nav group
 *
 * The app exposes NO data-testid anywhere on this feature (0 of 348 interactive elements on the
 * list view), so everything here is role + accessible name, which the screen does supply generously
 * ("View ratings and feedback for <employee>", "Edit feedback for <project>", "Filter by <column>").
 *
 * SHAPE, as built — note it differs from the FRD v1.1 prototype in several ways that matter:
 *   - List columns are Action (FIRST, not last), Employee, Department, De-allocations, Avg Rating,
 *     Latest Feedback, Reallocate. The prototype called the rating column "Avg Overall" and put the
 *     action last.
 *   - The detail view is a TABLE, not a stack of cards: Action, Project, Reason, De-allocated On,
 *     Core, Comm., Beh., Overall, Reallocate, Submitted By, Project Manager, CSM, Feedback. It
 *     carries three attribution columns (Submitted By / Project Manager / CSM) the prototype never
 *     showed, and long feedback collapses behind a "Read the full feedback for <project>" button.
 *   - **Avg Rating is the mean of the FOUR rating dimensions, not the mean of the Overall column.**
 *     Verified on two employees: Kavya Mehta (8+8+9+9)/4 = 8.50, Rachna Gupta (1.15+1+1+1)/4 = 1.04,
 *     both matching the list figure exactly. Asserting it against the Overall column alone is wrong.
 *   - Ratings display to 2 decimal places, not 1.
 *   - Column filters are popovers with a search box, checkboxes and Clear/Save — not select elements.
 *   - The edit dialog's reallocate control is labelled "Open to work with again", not
 *     "Open to reallocate?" as in the prototype.
 */
export class RatingsFeedbackPage extends BasePage {
  static readonly LIST_ROUTE = '/employee-ratings';

  readonly heading: Locator;
  readonly searchInput: Locator;
  readonly projectFilter: Locator;
  readonly dateRangeButton: Locator;
  readonly tableOptionsButton: Locator;
  readonly table: Locator;
  readonly resultsStatus: Locator;
  readonly nextPageButton: Locator;
  readonly previousPageButton: Locator;

  constructor(page: Page) {
    super(page);

    this.heading = this.pageHeading(/employee ratings & feedback/i);
    this.searchInput = page.getByRole('textbox', { name: /search name/i });
    this.projectFilter = page.getByRole('combobox', { name: /project/i });
    this.dateRangeButton = page.getByRole('button', { name: /filter by de-allocation date range/i });
    this.tableOptionsButton = page.getByRole('button', { name: /table options/i });
    this.table = page.getByRole('table');
    this.resultsStatus = page.getByText(/showing \d+ - \d+ of \d+ results/i);
    this.nextPageButton = page.getByRole('button', { name: /next page/i });
    this.previousPageButton = page.getByRole('button', { name: /previous page/i });
  }

  /** The list table is identified by its Employee column; the detail table by its Project column. */
  private listTableReady(): Locator {
    return this.getColumnHeaders().filter({ hasText: 'Employee' }).first();
  }

  private detailTableReady(): Locator {
    return this.getColumnHeaders().filter({ hasText: 'Project' }).first();
  }

  async goToConsole(): Promise<void> {
    await this.page.goto(RatingsFeedbackPage.LIST_ROUTE, { waitUntil: 'domcontentloaded' });
    await this.listTableReady().waitFor({ state: 'visible' });
  }

  /** Navigate the way a user does — expand Overview, then click Employee Ratings. */
  async goToConsoleViaNav(): Promise<void> {
    await this.page.goto('/dashboard', { waitUntil: 'domcontentloaded' });
    await this.page.getByRole('button', { name: /^overview$/i }).first().click();
    await this.page.getByRole('link', { name: /^employee ratings$/i }).first().click();
    await this.listTableReady().waitFor({ state: 'visible' });
  }

  // ─── List view ──────────────────────────────────────────────────────────────

  getColumnHeaders(): Locator {
    return this.table.getByRole('columnheader');
  }

  getDataRows(): Locator {
    return this.table.locator('tbody tr');
  }

  getRowForEmployee(name: string): Locator {
    return this.getDataRows().filter({ has: this.page.getByRole('button', { name: `View ratings and feedback for ${name}` }) });
  }

  /** Cells are positional — Action(0), Employee(1), Department(2), De-allocations(3), Avg Rating(4), Latest Feedback(5), Reallocate(6). */
  getCell(row: Locator, column: 'action' | 'employee' | 'department' | 'deallocations' | 'avgRating' | 'latestFeedback' | 'reallocate'): Locator {
    const index = { action: 0, employee: 1, department: 2, deallocations: 3, avgRating: 4, latestFeedback: 5, reallocate: 6 }[column];
    return row.getByRole('cell').nth(index);
  }

  /** Employee names, in visual order, taken from the row action's accessible name (the name cell duplicates its text). */
  async getEmployeeNames(): Promise<string[]> {
    const buttons = await this.getDataRows().getByRole('button', { name: /^view ratings and feedback for /i }).all();
    const names: string[] = [];
    for (const button of buttons) {
      const label =
        (await button.getAttribute('aria-label')) ??
        (await button.getAttribute('title')) ??
        (await button.textContent()) ??
        '';
      names.push(label.replace(/^view ratings and feedback for\s*/i, '').trim());
    }
    return names;
  }

  async getAvgRatings(): Promise<number[]> {
    const values: number[] = [];
    for (const row of await this.getDataRows().all()) {
      const text = (await this.getCell(row, 'avgRating').textContent()) ?? '';
      values.push(Number(text.trim()));
    }
    return values;
  }

  async getDeallocationCounts(): Promise<number[]> {
    const counts: number[] = [];
    for (const row of await this.getDataRows().all()) {
      const text = (await this.getCell(row, 'deallocations').textContent()) ?? '';
      counts.push(Number(text.trim()));
    }
    return counts;
  }

  /** The "N Yes · M No" split from a list row. */
  async getReallocateSplit(row: Locator): Promise<{ yes: number; no: number }> {
    const text = (await this.getCell(row, 'reallocate').textContent()) ?? '';
    return {
      yes: Number(text.match(/(\d+)\s*Yes/i)?.[1] ?? 0),
      no: Number(text.match(/(\d+)\s*No/i)?.[1] ?? 0),
    };
  }

  async openDetail(row: Locator): Promise<void> {
    await this.getCell(row, 'action').getByRole('button').click();
    await this.page.waitForURL(/\/employee-ratings\/[0-9a-f-]{36}/);
    // The URL changes before the table re-renders — without this the next read still sees the
    // list's rows and every positional cell lookup resolves against the wrong table.
    await this.detailTableReady().waitFor({ state: 'visible' });
  }

  /** Search is debounced server-side, so fill and then wait for the result count to stop moving. */
  async search(term: string): Promise<void> {
    const before = await this.getReportedResultCount().catch(() => -1);
    await this.searchInput.fill(term);
    await this.page
      .waitForFunction(
        (previous) => {
          const status = document.body.textContent?.match(/of (\d+) results/);
          return status ? Number(status[1]) !== previous : false;
        },
        before,
        { timeout: 10000 }
      )
      .catch(() => {});
  }

  getEmptyState(): Locator {
    return this.page.getByText(/no .*(result|record|data)/i).first();
  }

  // ─── Sorting and column filters ─────────────────────────────────────────────

  getColumnHeader(name: string | RegExp): Locator {
    return this.getColumnHeaders().filter({ hasText: name }).first();
  }

  async sortBy(column: string | RegExp): Promise<void> {
    await this.getColumnHeader(column).getByRole('button', { name: /sort/i }).click();
  }

  /** Column filter popovers are dialogs with a search box, checkboxes and Clear/Save. */
  async openColumnFilter(column: string): Promise<Locator> {
    await this.page.getByRole('button', { name: `Filter by ${column}` }).click();
    const popover = this.page.getByRole('dialog').last();
    await popover.waitFor({ state: 'visible' });
    return popover;
  }

  async applyColumnFilter(column: string, ...values: string[]): Promise<void> {
    const popover = await this.openColumnFilter(column);
    for (const value of values) {
      await popover.getByRole('checkbox', { name: value, exact: true }).check();
    }
    await popover.getByRole('button', { name: /^save$/i }).click();
    await popover.waitFor({ state: 'hidden' });
    // The table re-renders after the filter applies; reading rows too early sees an empty body.
    await this.getDataRows().first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  }

  async clearColumnFilter(column: string): Promise<void> {
    const popover = await this.openColumnFilter(column);
    await popover.getByRole('button', { name: /^clear$/i }).click();
    await popover.waitFor({ state: 'hidden' }).catch(() => {});
  }

  /** Total row count as the app reports it, independent of pagination. */
  async getReportedResultCount(): Promise<number> {
    const text = (await this.resultsStatus.textContent()) ?? '';
    return Number(text.match(/of (\d+) results/i)?.[1] ?? 0);
  }

  // ─── Detail view ────────────────────────────────────────────────────────────

  getDetailHeading(): Locator {
    return this.pageHeading(/.+/).last();
  }

  /** Scoped to the breadcrumb — the sidebar nav carries an identically named link. */
  getBreadcrumbLink(): Locator {
    return this.page.getByRole('main').getByRole('link', { name: /^employee ratings$/i }).first();
  }

  getDetailSearchInput(): Locator {
    return this.page.getByRole('textbox', { name: /search project, feedback or people/i });
  }

  /** The "Avg Rating" summary figure on the detail view. */
  async getDetailAvgRating(): Promise<number> {
    const value = this.page.getByText('Avg Rating').locator('..').getByText(/^\d+\.\d{2}$/).first();
    return Number(((await value.textContent()) ?? '').trim());
  }

  /** The four Breakdown dimension averages shown above the detail table. */
  async getBreakdown(): Promise<Record<'core' | 'comm' | 'behaviour' | 'overall', number>> {
    const container = this.page.getByText('Breakdown').locator('..');
    const text = (await container.textContent()) ?? '';
    const read = (label: string) => Number(text.match(new RegExp(`${label}\\s*(\\d+\\.\\d{2})`))?.[1] ?? NaN);
    return {
      core: read('Core Skill'),
      comm: read('Comm\\.'),
      behaviour: read('Behaviour'),
      overall: read('Overall'),
    };
  }

  getDetailRows(): Locator {
    return this.table.locator('tbody tr');
  }

  /** Detail cells are positional: Action(0), Project(1), Reason(2), De-allocated On(3), Core(4), Comm.(5), Beh.(6), Overall(7), Reallocate(8), Submitted By(9), Project Manager(10), CSM(11), Feedback(12). */
  getDetailCell(
    row: Locator,
    column: 'action' | 'project' | 'reason' | 'deallocatedOn' | 'core' | 'comm' | 'beh' | 'overall' | 'reallocate' | 'submittedBy' | 'projectManager' | 'csm' | 'feedback'
  ): Locator {
    const index = {
      action: 0, project: 1, reason: 2, deallocatedOn: 3, core: 4, comm: 5, beh: 6,
      overall: 7, reallocate: 8, submittedBy: 9, projectManager: 10, csm: 11, feedback: 12,
    }[column];
    return row.getByRole('cell').nth(index);
  }

  /** Every deallocation's four ratings, used to re-derive the Avg Rating and Breakdown figures. */
  async getDetailRatings(): Promise<Array<{ core: number; comm: number; beh: number; overall: number }>> {
    const ratings: Array<{ core: number; comm: number; beh: number; overall: number }> = [];
    for (const row of await this.getDetailRows().all()) {
      ratings.push({
        core: Number(((await this.getDetailCell(row, 'core').textContent()) ?? '').trim()),
        comm: Number(((await this.getDetailCell(row, 'comm').textContent()) ?? '').trim()),
        beh: Number(((await this.getDetailCell(row, 'beh').textContent()) ?? '').trim()),
        overall: Number(((await this.getDetailCell(row, 'overall').textContent()) ?? '').trim()),
      });
    }
    return ratings;
  }

  getReadFullFeedbackButton(row: Locator): Locator {
    return row.getByRole('button', { name: /^read the full feedback for /i });
  }

  getEditButton(row: Locator): Locator {
    return row.getByRole('button', { name: /^edit feedback for /i });
  }

  // ─── Edit Feedback dialog ───────────────────────────────────────────────────

  getEditDialog(): Locator {
    return this.page.getByRole('dialog', { name: /edit feedback/i });
  }

  async openEditDialog(row: Locator): Promise<Locator> {
    await this.getEditButton(row).click();
    const dialog = this.getEditDialog();
    await dialog.waitFor({ state: 'visible' });
    return dialog;
  }

  getEditRatingInput(dialog: Locator, label: 'Core Skill' | 'Comm.' | 'Behaviour' | 'Overall'): Locator {
    return dialog.getByRole('textbox', { name: label, exact: true });
  }

  getEditFeedbackInput(dialog: Locator): Locator {
    return dialog.getByRole('textbox', { name: /^feedback$/i });
  }

  getEditReallocateSelect(dialog: Locator): Locator {
    return dialog.getByRole('combobox', { name: /open to work with again/i });
  }

  async saveEditDialog(dialog: Locator): Promise<void> {
    await dialog.getByRole('button', { name: /^save$/i }).click();
  }

  async cancelEditDialog(dialog: Locator): Promise<void> {
    await dialog.getByRole('button', { name: /^cancel$/i }).click();
    await dialog.waitFor({ state: 'hidden' });
  }
}
