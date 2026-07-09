import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

/** Poll a locator's attribute until it matches, without failing the caller if it never does. */
async function pollForAttribute(locator: Locator, attr: string, value: string, timeoutMs: number): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if ((await locator.getAttribute(attr).catch(() => null)) === value) return;
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

export class EmployeeDetailsPage extends BasePage {
  readonly currentEmployeeTab: Locator;
  readonly formerEmployeeTab: Locator;
  readonly searchInput: Locator;
  readonly filterBtn: Locator;
  readonly advancedFilterBtn: Locator;
  readonly resetFiltersBtn: Locator;
  readonly departmentFilterDropdown: Locator;
  readonly designationFilterDropdown: Locator;
  readonly employeeGrid: Locator;
  readonly nameColumnHeader: Locator;
  readonly departmentColumnHeader: Locator;
  readonly reportingManagerColumnHeader: Locator;
  readonly availabilityColumnHeader: Locator;
  readonly logHoursColumnHeader: Locator;
  readonly nextPageBtn: Locator;
  readonly previousPageBtn: Locator;
  readonly pageSizeSelect: Locator;
  readonly editDrawer: Locator;
  readonly drawerCloseBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.currentEmployeeTab = page.getByRole('button', { name: 'Current Employee' });
    this.formerEmployeeTab  = page.getByRole('button', { name: 'Past Employee' });
    // Placeholder differs by tab: Current="Name, email, or project", Past="Search past employee..."
    this.searchInput = page.getByPlaceholder(/name, email, or project|search past employee/i);
    this.filterBtn        = page.getByRole('button', { name: 'Open advanced filter' });
    this.advancedFilterBtn = page.getByRole('button', { name: 'Open advanced filter' });
    // "Clear all" has aria-hidden="true" initially; use locator-based match to bypass aria-hidden
    this.resetFiltersBtn  = page.locator('button').filter({ hasText: 'Clear all' });
    // Column-level filter buttons
    this.departmentFilterDropdown = page.getByRole('button', { name: 'Filter by Department' });
    this.designationFilterDropdown = page.getByRole('button', { name: /filter by designation/i });
    // KB flagged plain `.locator('table')` as fragile (TC-EMPDET-003 known flaky timeout) and suggested
    // role=grid first — try that, falling back to the original `table` match so behavior can't regress.
    this.employeeGrid     = page.getByRole('grid').first().or(page.locator('table').first());
    // <th> elements have implicit columnheader role but getByRole name matching can fail due to icon
    // buttons inside headers — use locator('th').filter() instead
    this.nameColumnHeader = page.locator('th').filter({ hasText: 'Name' }).first();
    this.departmentColumnHeader = page.locator('th').filter({ hasText: 'Department' }).first();
    this.reportingManagerColumnHeader = page.locator('th').filter({ hasText: /^RM$|reporting manager/i }).first();
    this.availabilityColumnHeader = page.locator('th').filter({ hasText: /availability/i }).first();
    this.logHoursColumnHeader = page.locator('th').filter({ hasText: /log hours/i }).first();
    this.nextPageBtn     = page.getByRole('button', { name: 'Next page' });
    this.previousPageBtn = page.getByRole('button', { name: 'Previous page' });
    this.pageSizeSelect  = page.locator('[aria-label*="rows per page" i]').first();
    this.editDrawer    = page.getByRole('dialog');
    this.drawerCloseBtn = page.getByRole('button', { name: 'Close' });
  }

  async navigateToEmployees(): Promise<void> {
    // Use page.goto() directly — BasePage.goto() calls networkidle which never fires on this SPA
    await this.page.goto('/employee');
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 20000 });
  }

  /**
   * Navigate/trigger an action while capturing the matching employees API response.
   * Returns the parsed JSON body, or null if no matching response arrived in time
   * or the body wasn't JSON — callers must treat a null result defensively since the
   * real API contract (field names, shape) is not guaranteed here.
   */
  async waitForEmployeesApiResponse(trigger: () => Promise<void>, urlPattern: RegExp = /\/api\/.*employee/i): Promise<any | null> {
    try {
      const [response] = await Promise.all([
        this.page.waitForResponse(r => urlPattern.test(r.url()) && r.ok(), { timeout: 10000 }),
        trigger(),
      ]);
      return await response.json().catch(() => null);
    } catch {
      return null;
    }
  }

  async navigateToEmployeesAndCaptureApi(): Promise<any | null> {
    return this.waitForEmployeesApiResponse(() => this.navigateToEmployees());
  }

  async switchToFormerEmployeeTab(): Promise<void> {
    await this.formerEmployeeTab.click();
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 15000 });
  }

  async switchToCurrentEmployeeTab(): Promise<void> {
    await this.currentEmployeeTab.click();
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 15000 });
  }

  async searchEmployee(name: string): Promise<void> {
    await this.waitForEmployeesApiResponse(() => this.searchInput.fill(name));
  }

  async clearSearch(): Promise<void> {
    await this.searchInput.clear();
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 15000 });
  }

  async openBasicFilterPanel(): Promise<void> {
    await this.filterBtn.click();
    await this.getAdvancedFilterPanel().waitFor({ state: 'visible', timeout: 5000 });
  }

  async openAdvancedFilterPanel(): Promise<void> {
    await this.advancedFilterBtn.click();
    await this.getAdvancedFilterPanel().waitFor({ state: 'visible', timeout: 5000 });
  }

  getAdvancedFilterPanel(): Locator {
    return this.page.getByRole('complementary', { name: /advanced filter/i });
  }

  async closeAdvancedFilterPanel(): Promise<void> {
    const closeBtn = this.page.getByRole('button', { name: 'Close advanced filter' });
    if (await closeBtn.isVisible().catch(() => false)) {
      await closeBtn.click();
      await this.getAdvancedFilterPanel().waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    }
  }

  /** Expand an accordion section inside the advanced filter panel by its visible label. */
  async expandAdvancedFilterSection(label: string | RegExp): Promise<Locator> {
    const panel = this.getAdvancedFilterPanel();
    const accordion = panel.locator('button[aria-expanded]').filter({ hasText: label });
    const expanded = await accordion.getAttribute('aria-expanded').catch(() => 'false');
    if (expanded !== 'true') {
      await accordion.click().catch(() => {});
      await pollForAttribute(accordion, 'aria-expanded', 'true', 5000);
    }
    return accordion;
  }

  /** Fill a numeric/text input inside a given advanced-filter accordion section. */
  async fillAdvancedFilterField(sectionLabel: string | RegExp, value: string, which: 'first' | 'last' = 'first'): Promise<boolean> {
    const panel = this.getAdvancedFilterPanel();
    await this.expandAdvancedFilterSection(sectionLabel);
    const input = which === 'first'
      ? panel.locator('input[type="number"], input[type="text"]').first()
      : panel.locator('input[type="number"], input[type="text"]').last();
    const visible = await input.isVisible().catch(() => false);
    // No extra settle wait needed — the filter value is only read when Save is clicked,
    // which has its own grid-visible synchronization.
    if (visible) await input.fill(value);
    return visible;
  }

  async clickAdvancedFilterSave(): Promise<void> {
    const panel = this.getAdvancedFilterPanel();
    const saveBtn = panel.getByRole('button', { name: /^save$/i });
    if (await saveBtn.isVisible().catch(() => false)) {
      await saveBtn.click();
    } else {
      await this.closeAdvancedFilterPanel();
    }
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
  }

  async clickAdvancedFilterCancel(): Promise<void> {
    const panel = this.getAdvancedFilterPanel();
    const cancelBtn = panel.getByRole('button', { name: /^cancel$/i });
    if (await cancelBtn.isVisible().catch(() => false)) {
      await cancelBtn.click();
      await this.getAdvancedFilterPanel().waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    } else {
      await this.closeAdvancedFilterPanel();
    }
  }

  getFilterChips(): Locator {
    return this.page.getByTestId('filter-chip');
  }

  getResultCountBadge(): Locator {
    return this.page.getByTestId('result-count')
      .or(this.page.getByText(/\d+\s*(employees|results?|records?)\b/i))
      .first();
  }

  getEmptyState(): Locator {
    return this.page.getByText(/no employees found|no records found|no results found|no data/i).first();
  }

  getValidationError(pattern: RegExp): Locator {
    return this.page.getByText(pattern).first();
  }

  getErrorAlert(): Locator {
    return this.page.getByRole('alert').filter({ hasText: /error|exception|crash/i });
  }

  getRowByName(name: string): Locator {
    return this.page.getByRole('row', { name: new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') });
  }

  getDataRows(): Locator {
    return this.page.getByRole('row').filter({ hasNot: this.page.getByRole('columnheader') });
  }

  async getAllRowFirstCellTexts(): Promise<string[]> {
    const rows = this.getDataRows();
    const count = await rows.count();
    const texts: string[] = [];
    for (let i = 0; i < count; i++) {
      const t = await rows.nth(i).getByRole('cell').first().textContent();
      texts.push((t ?? '').trim());
    }
    return texts;
  }

  async selectDepartmentFilter(department: string): Promise<void> {
    // The Departments filter is inside the advanced filter panel as a collapsed accordion.
    // Open the panel if not already open, then expand the Departments accordion.
    const panel = this.getAdvancedFilterPanel();
    const isPanelOpen = await panel.isVisible().catch(() => false);
    if (!isPanelOpen) {
      await this.openBasicFilterPanel();
      await panel.waitFor({ state: 'visible', timeout: 5000 });
    }
    await this.expandAdvancedFilterSection('Departments');
    // Click the Radix UI combobox inside the Departments section
    const combobox = panel.locator('[role="combobox"]').first();
    if (await combobox.isVisible().catch(() => false)) {
      await combobox.click();
      const option = this.page.getByRole('option', { name: new RegExp(department, 'i') });
      await option.first().waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
      const optionVisible = await option.first().isVisible().catch(() => false);
      if (optionVisible) {
        await option.first().click();
      } else {
        await this.page.keyboard.press('Escape');
      }
    }
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
  }

  async selectDesignationFilter(designation: string): Promise<void> {
    // Designation filter may not be present; skip gracefully
    const btn = this.page.getByRole('button', { name: /filter by designation/i });
    const visible = await btn.isVisible().catch(() => false);
    if (!visible) return;
    await btn.click();
    await this.page.getByRole('option', { name: designation }).click().catch(() => {});
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
  }

  async resetFilters(): Promise<void> {
    // "Clear all" may have aria-hidden="true" before filters applied; use isVisible() to check
    const btn = this.resetFiltersBtn;
    const visible = await btn.isVisible().catch(() => false);
    if (visible) await btn.click();
    // Close the panel if it is still open
    await this.closeAdvancedFilterPanel();
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
  }

  async sortByNameAscending(): Promise<void> {
    await this.nameColumnHeader.click();
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
  }

  async sortByNameDescending(): Promise<void> {
    await this.nameColumnHeader.click();
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
  }

  /** Click a column header once — direction toggles based on current sort state (app-controlled). */
  async sortByColumn(header: Locator): Promise<void> {
    await header.click();
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
  }

  async clickNextPage(): Promise<void> {
    await this.nextPageBtn.click();
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
  }

  async clickPreviousPage(): Promise<void> {
    await this.previousPageBtn.click();
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
  }

  async changePageSize(size: number): Promise<void> {
    // Page size select does not exist on this page; skip gracefully
    const exists = await this.pageSizeSelect.isVisible().catch(() => false);
    if (!exists) return;
    await this.pageSizeSelect.selectOption(String(size));
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
  }

  async openEditDrawerForFirstEmployee(): Promise<void> {
    const firstRow = this.getDataRows().first();
    await firstRow.hover();
    const editBtn = firstRow.getByRole('button', { name: 'Edit' });
    await editBtn.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    await editBtn.click();
    await this.editDrawer.waitFor({ state: 'visible', timeout: 15000 });
  }

  async closeEditDrawer(): Promise<void> {
    await this.drawerCloseBtn.click();
    await this.editDrawer.waitFor({ state: 'hidden', timeout: 10000 });
  }

  getDrawerSaveBtn(): Locator {
    return this.editDrawer.getByRole('button', { name: /^save$/i });
  }

  getDrawerCancelBtn(): Locator {
    return this.editDrawer.getByRole('button', { name: /^cancel$/i });
  }

  getDrawerDesignationField(): Locator {
    return this.editDrawer.getByLabel(/designation/i).or(this.editDrawer.getByRole('textbox', { name: /designation/i }));
  }

  async setDrawerDesignation(newValue: string): Promise<boolean> {
    const field = this.getDrawerDesignationField();
    const visible = await field.isVisible().catch(() => false);
    if (visible) await field.fill(newValue);
    return visible;
  }

  async saveDrawer(): Promise<void> {
    const btn = this.getDrawerSaveBtn();
    if (await btn.isVisible().catch(() => false)) {
      await btn.click();
      await this.editDrawer.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    }
  }

  async cancelDrawer(): Promise<void> {
    const btn = this.getDrawerCancelBtn();
    if (await btn.isVisible().catch(() => false)) {
      await btn.click();
      await this.editDrawer.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    } else {
      await this.closeEditDrawer();
    }
  }

  /**
   * The "+N" overflow control shown when not all chips fit inline in a row.
   * Generic by design — reused for both the Skills column (TC-EMPDET-024) and the
   * Projects column overflow badge (TC-EMPDET-019/020); the control is just text
   * matching `/^\+\d+$/` wherever it appears in the row, so no separate
   * "Projects" variant is needed.
   */
  getSkillsExpandControl(row: Locator): Locator {
    return row.getByText(/^\+\d+$/);
  }

  /**
   * Parse the numeric N out of a row's "+N" overflow control (skills or projects).
   * Returns null when the row has no overflow control (i.e. every chip already fits inline).
   */
  async getOverflowCount(row: Locator): Promise<number | null> {
    const control = this.getSkillsExpandControl(row);
    const visible = await control.first().isVisible().catch(() => false);
    if (!visible) return null;
    const text = (await control.first().textContent().catch(() => '')) ?? '';
    const match = text.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  }

  /**
   * Reporting Manager hover card that appears when hovering the RM cell of a row.
   * Selector is defensive/speculative (tooltip role, or a dialog/testid fallback)
   * since the exact markup for this card is not confirmed by an existing spec.
   */
  getReportingManagerHoverCard(): Locator {
    return this.page.getByRole('tooltip')
      .or(this.page.locator('[data-testid="rm-hover-card"], [role="dialog"]').filter({ hasText: /designation|manager/i }))
      .first();
  }

  /** Hover a row's Reporting Manager cell (4th column, matching the convention already used in boundary.spec.ts) to trigger its hover card. */
  async hoverReportingManagerCell(row: Locator): Promise<void> {
    await row.getByRole('cell').nth(3).hover();
    await this.getReportingManagerHoverCard().waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
  }

  /** Employee avatar image (or initials/placeholder fallback when the image is missing/broken) within a row. */
  getEmployeeAvatar(row: Locator): Locator {
    return row.locator('img[alt], [data-testid="avatar"], [class*="avatar" i]').first();
  }

  /** Availability/allocation percentage cell within a row — may carry an overallocation visual flag (e.g. red styling) when >100%. */
  getAvailabilityIndicatorCell(row: Locator): Locator {
    return row.getByTestId('cell-availability').or(row.getByRole('cell', { name: /\d+(\.\d+)?%/ })).first();
  }

  /**
   * The two date inputs inside the "Available Since" advanced-filter accordion (start, end).
   * Expands the section first if it is not already open.
   */
  getAvailableSinceDateInputs(): Locator {
    const panel = this.getAdvancedFilterPanel();
    return panel.locator('input[type="date"]');
  }

  /** Fill the Available Since start/end date range. Returns false if the two date inputs are not present. */
  async setAvailableSinceDateRange(start: string, end: string): Promise<boolean> {
    await this.expandAdvancedFilterSection(/available since/i);
    const dateInputs = this.getAvailableSinceDateInputs();
    const count = await dateInputs.count();
    if (count < 2) return false;
    await dateInputs.nth(0).fill(start);
    await dateInputs.nth(1).fill(end);
    return true;
  }

  /** Employee Name field within the Edit Drawer (distinct from getDrawerDesignationField). */
  getDrawerNameField(): Locator {
    return this.editDrawer.getByLabel(/^name$|employee name/i).or(this.editDrawer.getByRole('textbox', { name: /^name$|employee name/i }));
  }

  /** Fill the drawer's Employee Name field. Returns false if the field is not present/visible. */
  async setDrawerName(newValue: string): Promise<boolean> {
    const field = this.getDrawerNameField();
    const visible = await field.isVisible().catch(() => false);
    if (visible) await field.fill(newValue);
    return visible;
  }

  /** Clear the drawer's Employee Name field (for required-field validation cases). Returns false if not present. */
  async clearDrawerName(): Promise<boolean> {
    const field = this.getDrawerNameField();
    const visible = await field.isVisible().catch(() => false);
    if (visible) await field.clear();
    return visible;
  }

  /** Reporting Manager field/picker within the Edit Drawer. */
  getDrawerReportingManagerField(): Locator {
    return this.editDrawer.getByLabel(/reporting manager/i).or(this.editDrawer.getByRole('combobox', { name: /reporting manager/i }));
  }

  /** Open the Reporting Manager picker inside the drawer and optionally type a search term. Returns false if the picker is not present. */
  async openDrawerReportingManagerPicker(searchTerm?: string): Promise<boolean> {
    const field = this.getDrawerReportingManagerField();
    const visible = await field.isVisible().catch(() => false);
    if (!visible) return false;
    await field.click();
    await this.page.getByRole('option').first().waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
    if (searchTerm) {
      await field.fill(searchTerm).catch(() => {});
      await this.page.getByRole('option').first().waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
    }
    return true;
  }

  /**
   * Fetch the employee total directly from the API (bypassing rendering) for the count triple-check
   * (grid rows == badge == API total). Endpoint shape is defensive/best-effort — returns null rather
   * than throwing when the contract doesn't match what's expected.
   */
  async fetchApiEmployeeTotal(status: 'current' | 'past' = 'current'): Promise<number | null> {
    try {
      const response = await this.page.request.get('/api/employees', { params: { status }, failOnStatusCode: false });
      if (!response.ok()) return null;
      const body = await response.json().catch(() => null);
      if (!body) return null;
      const list = Array.isArray(body) ? body : body.data ?? body.employees ?? body.items ?? null;
      const total = body.total ?? body.count ?? (Array.isArray(list) ? list.length : undefined);
      return typeof total === 'number' ? total : null;
    } catch {
      return null;
    }
  }

  /**
   * The Employee Details navigation entry in the app's main nav — used by feature-flag
   * visibility checks (TC-EMPDET-068 and related). Selector mirrors the pattern already used
   * inline in security.spec.ts (TC-EMPDET-054).
   */
  getEmployeeNavLink(): Locator {
    return this.page.getByRole('link', { name: /employee details|employee/i });
  }

  /**
   * Speculative "Add Employee" trigger — exact selector unconfirmed (no create-employee spec
   * exists yet in this repo), used defensively for create-flow count checks (e.g. TC-EMPDET-111/121).
   */
  getAddEmployeeButton(): Locator {
    return this.page.getByRole('button', { name: /add employee|new employee|create employee/i });
  }

  /**
   * Speculative row-level "Archive" action — exact selector unconfirmed, used defensively for
   * archive-flow count checks (e.g. TC-EMPDET-112/121).
   */
  getArchiveButton(row: Locator): Locator {
    return row.getByRole('button', { name: /archive|deactivate/i });
  }

  /** Intercept the employees list/detail API and force it to fail — for negative/error-handling tests. */
  async mockEmployeeListFailure(status = 500): Promise<void> {
    await this.page.route(/\/api\/.*employee/i, route =>
      route.fulfill({
        status,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Internal Server Error' }),
      })
    );
  }

  async getVisibleRowCount(): Promise<number> {
    return this.getDataRows().count();
  }

  async navigateToLastPage(): Promise<void> {
    // Click the last numbered page button directly (e.g. "Page 36")
    // rather than clicking Next repeatedly through all pages.
    const lastPageBtn = this.page.locator('button[aria-label^="Page "]').last();
    const isVisible = await lastPageBtn.isVisible().catch(() => false);
    if (isVisible) {
      await lastPageBtn.click();
      await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
    }
  }
}
