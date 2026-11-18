import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';
import { apiGet, filtersParam, ApiResult, AllocationStage, ALLOCATION_STAGE_LABELS } from '../pm-pmo/pm-projects.page';

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
  readonly rmFilterBtn: Locator;
  readonly projectsFilterBtn: Locator;
  readonly logHoursFilterBtn: Locator;
  readonly availabilityFilterBtn: Locator;
  readonly nightShiftFilterBtn: Locator;
  readonly tableOptionsBtn: Locator;
  readonly skillsTab: Locator;
  readonly goalsTab: Locator;
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
    // GROUNDED (2026-08-18): confirmed live via a real suite run — Current/Past Employee are now
    // rendered with role="tab" inside the same tablist as the new Skills/Goals tabs (not
    // role="button" as before the merge). The old button-only locator caused a cluster of
    // timeouts on every Past-Employee-tab test (TC-EMPDET-002/046/048/161/169/185/259) plus
    // TC-EMPDET-001's Current-tab visibility check. Kept the button fallback defensively.
    this.currentEmployeeTab = page.getByRole('tab', { name: 'Current Employee' }).or(page.getByRole('button', { name: 'Current Employee' }));
    this.formerEmployeeTab  = page.getByRole('tab', { name: 'Past Employee' }).or(page.getByRole('button', { name: 'Past Employee' }));
    // Placeholder differs by tab: Current="Name, email, or project", Past="Search past employee..."
    this.searchInput = page.getByPlaceholder(/name, email, or project|search past employee/i);
    this.filterBtn        = page.getByRole('button', { name: 'Open advanced filter' });
    this.advancedFilterBtn = page.getByRole('button', { name: 'Open advanced filter' });
    // "Clear all" has aria-hidden="true" initially; use locator-based match to bypass aria-hidden
    this.resetFiltersBtn  = page.locator('button').filter({ hasText: /^clear (all|filter)/i }); // 6.8.x label: "Clear filter"
    // Column-level filter buttons
    this.departmentFilterDropdown = page.getByRole('button', { name: 'Filter by Department' });
    // GROUNDED (2026-08-18): "Designation" is no longer its own grid column/column-header filter —
    // it moved into the Advanced Filter panel as one accordion section among many (see the
    // GROUNDED (2026-08-18) block below getVisibleColumnFilterButtons()). This locator resolves to
    // nothing now; kept only so existing isVisible()-guarded call sites no-op safely.
    this.designationFilterDropdown = page.getByRole('button', { name: /filter by designation/i });
    // GROUNDED (2026-08-18) column-header quick-filter buttons — see block comment below.
    this.rmFilterBtn = page.getByRole('button', { name: 'Filter by RM' });
    this.projectsFilterBtn = page.getByRole('button', { name: 'Filter by Projects' });
    this.logHoursFilterBtn = page.getByRole('button', { name: 'Filter by Log Hours' });
    this.availabilityFilterBtn = page.getByRole('button', { name: 'Filter by Availability %' });
    this.nightShiftFilterBtn = page.getByRole('button', { name: 'Filter by Night Shift Preference' });
    this.tableOptionsBtn = page.getByRole('button', { name: 'Table options' });
    // GROUNDED (2026-08-18): Skills and Goals are no longer separate pages/routes — they are two
    // more tabs on this same Employee page (see class-level GROUNDED (2026-08-18) block below).
    this.skillsTab = page.getByRole('tab', { name: /^skills$/i });
    this.goalsTab = page.getByRole('tab', { name: /^goals$/i });
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
    // exact:true — without it this substring-matches a visible toast's "Close toast" button too
    // (strict-mode violation), confirmed live via TC-EMPDET-323 (2026-08-19).
    this.drawerCloseBtn = page.getByRole('button', { name: 'Close', exact: true });
  }

  // ─── Utilization Priority columns (relocated from the retired standalone module) ─────────
  //
  // GROUNDED (2026-09-21) against the live build. The standalone /utilization-priority route now
  // renders the in-app 404 page and the nav entry is gone; the capability is two columns in this
  // table:
  //   UP (System) — read-only pill ("P1 · Red" / "P2 · Amber" / "P3 · Green"). The pill itself is
  //     the tooltip trigger (`data-slot="tooltip-trigger"`); hovering it shows the per-employee
  //     "How Value Score is Calculated" breakdown. NOTE: the icon buttons in the column HEADER are
  //     the sort and filter controls, not the calculation info icon — do not hover those for it.
  //   UP (Manual) — a real `role="combobox"` select offering exactly Not set / P1 · Red /
  //     P2 · Amber / P3 · Green. Writing one issues
  //     PATCH /api/v1/utilization-priority/:employeeId/manual and toasts "Manual priority updated."
  // Column positions are read from the header row rather than hardcoded, so a column reorder or a
  // role that sees a different column set can't silently shift these lookups.

  /**
   * Wait for the grid to finish repopulating after a sort/filter/pagination change.
   *
   * Ground-truth confirmed live: the table empties to zero rows while it refetches and only fills
   * back in ~2-3s later — and `networkidle` fires DURING that blank window. Counting rows straight
   * after an action therefore reads 0 and looks like "sorting dropped every row". Wait for a real
   * row, or for an explicit empty state, before measuring.
   */
  async waitForRowsSettled(timeout = 15_000): Promise<number> {
    const deadline = Date.now() + timeout;
    while (Date.now() < deadline) {
      const count = await this.getDataRows().count().catch(() => 0);
      if (count > 0) return count;
      const empty = await this.page.getByText(/no records|no data|no employees|nothing to show/i).first()
        .isVisible().catch(() => false);
      if (empty) return 0;
      await this.page.waitForTimeout(250);
    }
    return this.getDataRows().count().catch(() => 0);
  }

  /** Zero-based index of a column, located by its header text. -1 when the column isn't rendered for this role. */
  async getColumnIndex(header: RegExp): Promise<number> {
    const headers = await this.page.getByRole('columnheader').allInnerTexts().catch(() => [] as string[]);
    return headers.findIndex(h => header.test(h.trim()));
  }

  async hasUtilizationPriorityColumns(): Promise<{ system: boolean; manual: boolean }> {
    return {
      system: (await this.getColumnIndex(/UP \(System\)/i)) !== -1,
      manual: (await this.getColumnIndex(/UP \(Manual\)/i)) !== -1,
    };
  }

  /** The UP (System) cell of `row`, or null when the column isn't present for this role. */
  async getUpSystemCell(row: Locator): Promise<Locator | null> {
    const index = await this.getColumnIndex(/UP \(System\)/i);
    return index === -1 ? null : row.getByRole('cell').nth(index);
  }

  async getUpManualCell(row: Locator): Promise<Locator | null> {
    const index = await this.getColumnIndex(/UP \(Manual\)/i);
    return index === -1 ? null : row.getByRole('cell').nth(index);
  }

  /** The tier text a row shows for UP (System), e.g. "P1 · Red" — null when the column or value is absent. */
  async getUpSystemTier(row: Locator): Promise<string | null> {
    const cell = await this.getUpSystemCell(row);
    if (!cell) return null;
    const text = ((await cell.innerText().catch(() => '')) ?? '').replace(/\s+/g, ' ').trim();
    return text || null;
  }

  async getUpManualTier(row: Locator): Promise<string | null> {
    const cell = await this.getUpManualCell(row);
    if (!cell) return null;
    const text = ((await cell.innerText().catch(() => '')) ?? '').replace(/\s+/g, ' ').trim();
    return text || null;
  }

  /** Whether this session can actually edit UP (Manual) on `row` (the column exists and its control is enabled). */
  async isUpManualEditable(row: Locator): Promise<boolean> {
    const cell = await this.getUpManualCell(row);
    if (!cell) return false;
    const combobox = cell.getByRole('combobox').first();
    if (!(await combobox.count())) return false;
    return !(await combobox.isDisabled().catch(() => true));
  }

  /** The options offered by a row's UP (Manual) dropdown. Leaves the dropdown closed. */
  async getUpManualOptions(row: Locator): Promise<string[]> {
    const cell = await this.getUpManualCell(row);
    if (!cell) return [];
    await cell.getByRole('combobox').first().click();
    await this.page.getByRole('option').first().waitFor({ state: 'visible', timeout: 5_000 }).catch(() => {});
    const options = (await this.page.getByRole('option').allInnerTexts().catch(() => [] as string[]))
      .map(o => o.replace(/\s+/g, ' ').trim()).filter(Boolean);
    await this.page.keyboard.press('Escape').catch(() => {});
    return options;
  }

  /** Set a row's UP (Manual) value. Returns false when this session can't edit it. */
  async setUpManual(row: Locator, value: string): Promise<boolean> {
    const cell = await this.getUpManualCell(row);
    if (!cell) return false;
    const combobox = cell.getByRole('combobox').first();
    if (!(await combobox.count())) return false;
    await combobox.click();
    const option = this.page.getByRole('option', { name: value, exact: true }).first();
    if (!(await option.isVisible({ timeout: 5_000 }).catch(() => false))) {
      await this.page.keyboard.press('Escape').catch(() => {});
      return false;
    }
    await option.click();
    // The write is a PATCH; wait for the row to settle rather than for a fixed delay.
    await this.page.waitForLoadState('networkidle', { timeout: 8_000 }).catch(() => {});
    return true;
  }

  /** The "How Value Score is Calculated" breakdown shown when a row's UP (System) pill is hovered. */
  async getUpSystemTooltipText(row: Locator): Promise<string | null> {
    const cell = await this.getUpSystemCell(row);
    if (!cell) return null;
    // Hover the pill itself, never the cell: `.or(cell)` resolved the union to the wide <td>,
    // whose centre is empty space, so the tooltip never opened.
    const pill = cell.locator('[data-slot="tooltip-trigger"]').first();
    const trigger = (await pill.count()) ? pill : cell.locator('span').last();
    await trigger.scrollIntoViewIfNeeded().catch(() => {});
    await trigger.hover();
    const tooltip = this.page.locator('[data-slot="tooltip-content"]').or(this.page.getByRole('tooltip')).first();
    if (!(await tooltip.waitFor({ state: 'visible', timeout: 5_000 }).then(() => true).catch(() => false))) return null;
    return ((await tooltip.innerText().catch(() => '')) ?? '').replace(/\s+/g, ' ').trim() || null;
  }

  /** An info icon rendered beside the UP (System) value itself — scoped to the CELL, never the header (whose icons are sort/filter). */
  async getUpSystemInfoIcon(row: Locator): Promise<Locator | null> {
    const cell = await this.getUpSystemCell(row);
    return cell ? cell.getByRole('button').or(cell.locator('svg')).first() : null;
  }

  /** Open a column's filter popover from its header (e.g. /UP \(System\)/). */
  async openColumnFilter(column: string): Promise<boolean> {
    const button = this.page.getByRole('button', { name: `Filter by ${column}`, exact: true }).first();
    if (!(await button.isVisible({ timeout: 5_000 }).catch(() => false))) return false;
    await button.click();
    return true;
  }

  /** Clear a column's filter from its header popover. Filter state is sticky for the session, so a test that applies one must clear it. */
  async clearColumnFilter(column: string): Promise<boolean> {
    if (!(await this.openColumnFilter(column))) return false;
    const popover = this.page.locator('[data-slot="popover-content"], [role="dialog"]').last();
    const clear = popover.getByRole('button', { name: /^clear$/i }).first();
    if (await clear.isVisible({ timeout: 3_000 }).catch(() => false)) {
      await clear.click();
      const save = popover.getByRole('button', { name: /^save$/i }).first();
      if (await save.isVisible({ timeout: 2_000 }).catch(() => false)) await save.click();
    }
    await this.page.keyboard.press('Escape').catch(() => {});
    await this.waitForRowsSettled();
    return true;
  }

  /** Sort by a column located by its header TEXT (distinct from `sortByColumn(header: Locator)` above, which takes the header element). */
  async sortByColumnNamed(header: RegExp): Promise<boolean> {
    const index = await this.getColumnIndex(header);
    if (index === -1) return false;
    const control = this.page.getByRole('columnheader').nth(index).getByRole('button', { name: /sort/i }).first();
    if (!(await control.isVisible({ timeout: 5_000 }).catch(() => false))) return false;
    await control.click();
    await this.page.waitForLoadState('networkidle', { timeout: 8_000 }).catch(() => {});
    await this.waitForRowsSettled();
    return true;
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
    // Wait for the Past tab's own search box — the outgoing grid is still visible during the swap,
    // so a grid check alone returns early and later input is typed into the old tab and lost.
    await this.page.getByPlaceholder(/search past employee/i).waitFor({ state: 'visible', timeout: 15000 });
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 15000 });
  }

  async switchToCurrentEmployeeTab(): Promise<void> {
    await this.currentEmployeeTab.click();
    await this.page.getByPlaceholder(/name, email, or project/i).waitFor({ state: 'visible', timeout: 15000 });
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 15000 });
  }

  /**
   * GROUNDED (2026-08-18): Skills is now a tab on this same `/employee` page (Current Employee |
   * Past Employee | Skills | Goals), not a separate `/employee/skills` route — clicking it swaps
   * the whole `<main>` content to a "Skills Overview" master/detail explorer (Departments list on
   * the left, per-department skill proficiency breakdown on the right), unrelated in structure to
   * the employee grid. Callers needing the grid back must call switchToCurrentEmployeeTab() or
   * switchToFormerEmployeeTab() again — this tab does not preserve/restore the grid.
   */
  async switchToSkillsTab(): Promise<void> {
    await this.skillsTab.click();
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  }

  /**
   * GROUNDED (2026-08-18): Goals is now a tab on this same `/employee` page, not a separate
   * `/employee/goals` route (that URL now 404s the app's employee-detail-by-id route instead —
   * see class-level GROUNDED (2026-08-18) block below). Prefer GoalsPage.navigateToGoals(), which
   * already implements this exact tab-click as its primary path.
   */
  async switchToGoalsTab(): Promise<void> {
    await this.goalsTab.click();
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
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
    // Exclude the panel's own "Search filters..." box: Availability/Experience became sliders, and the
    // bare locator then silently typed the value into that search box and reported success (2026-11-12).
    const inputs = panel.locator('input[type="number"], input[type="text"]').and(panel.locator(':not([placeholder^="Search filters"])'));
    const input = which === 'first' ? inputs.first() : inputs.last();
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
    // Confirmed live 2026-08-19 (TC-EMPDET-326): the result-count badge and the grid rows can
    // briefly disagree right after Save (badge/grid re-fetch independently) — settle before the
    // caller reads either.
    await this.page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
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

  /**
   * Like getResultCountBadge() but skips any hidden/stale match. Confirmed live 2026-08-19 (TC-
   * EMPDET-326/327): the Advanced Filter panel has its own "Showing N results" live-preview text
   * that can remain in the DOM (hidden) after Save/close, and getByText() matches regardless of
   * visibility — `.first()` in DOM order can silently pick that stale node over the real, visible
   * page-level badge. Returns the text of the first genuinely visible match.
   */
  async getVisibleResultCountText(): Promise<string | null> {
    const candidates = this.page.getByTestId('result-count')
      .or(this.page.getByText(/\d+\s*(employees|results?|records?)\b/i));
    const count = await candidates.count().catch(() => 0);
    for (let i = 0; i < count; i++) {
      const el = candidates.nth(i);
      if (await el.isVisible().catch(() => false)) {
        return el.textContent().catch(() => null);
      }
    }
    return null;
  }

  /**
   * Parse the true total out of the result-count badge's text. Confirmed live 2026-08-19: at
   * dataset sizes beyond one page the badge reads "Showing 1 - 100 of 3654 results" — a naive
   * `text.match(/\d+/)[0]` grabs "1" (from "1 - 100"), not the total. Prefer the "of <N>" total;
   * fall back to a bare "<N> results/employees/records" format (single number, no range).
   */
  parseResultCountTotal(badgeText: string): number | null {
    const ofMatch = badgeText.match(/of\s+([\d,]+)/i);
    if (ofMatch) return parseInt(ofMatch[1].replace(/,/g, ''), 10);
    const bareMatch = badgeText.match(/([\d,]+)\s*(employees|results?|records?)\b/i);
    if (bareMatch) return parseInt(bareMatch[1].replace(/,/g, ''), 10);
    return null;
  }

  getEmptyState(): Locator {
    // The page header always shows "Last Updated: No data available" when no sync has run — that is
    // not the table's empty state, yet /no data/ matched it on every load (false "empty state while
    // rows are rendered" on TC-EMPDET-039, 2026-11-12). Exclude it.
    return this.page.getByText(/no employees found|no records found|no results found|no data/i)
      .filter({ hasNotText: /last updated/i }).first();
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

  /**
   * CONFIRMED LIVE (2026-08-19) root cause of TC-EMPDET-020/045 both reading "page 2 identical to
   * page 1" (100% overlap) regardless of whether pagination actually worked: this read the row's
   * FIRST cell as a per-row identity/"id" — correct back when Action was the last column, but
   * Action is now first, so every row's first cell is just the "Edit" button (identical text on
   * every row, on every page). A direct live probe confirmed pagination itself genuinely works
   * (page 2 renders different employees) — only this identity-extraction was broken. Name is now
   * the second cell.
   */
  async getAllRowFirstCellTexts(): Promise<string[]> {
    const rows = this.getDataRows();
    const count = await rows.count();
    const texts: string[] = [];
    for (let i = 0; i < count; i++) {
      const cell = rows.nth(i).getByRole('cell').nth(1);
      let t = ((await cell.textContent()) ?? '').trim();
      // The avatar (span[role=button]) renders initials ("PP") until its image loads, so the same row
      // read "PPPunit Patel…" on one pass and "Punit Patel…" on the next (TC-EMPDET-020, 2026-11-12).
      // Drop whatever the avatar contributes so the identity is stable across image loads.
      const avatar = cell.locator('span[role="button"]').first();
      const avatarText = (await avatar.count()) ? ((await avatar.textContent().catch(() => '')) ?? '').trim() : '';
      if (avatarText && t.startsWith(avatarText)) t = t.slice(avatarText.length).trim();
      texts.push(t);
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
    // The Departments combobox renders disabled ("Select...") until the department list has loaded;
    // clicking it in that window silently selected nothing (TC-EMPDET-326 flake, 2026-11-12).
    for (let i = 0; i < 20 && !(await combobox.isEnabled().catch(() => true)); i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    if (await combobox.isVisible().catch(() => false)) {
      // This option list is a KNOWN-FLAKY control, already documented and tolerated elsewhere in
      // this suite (see TC-EMPDET-262's comment): it re-renders/virtualizes while opening,
      // occasionally detaching the just-resolved option mid-click. Retry the open->click sequence
      // a few times rather than letting one transient detach fail the whole case.
      let selected = false;
      for (let attempt = 0; attempt < 3 && !selected; attempt++) {
        await combobox.click().catch(() => {});
        const option = this.page.getByRole('option', { name: new RegExp(department, 'i') });
        await option.first().waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
        const optionVisible = await option.first().isVisible().catch(() => false);
        if (!optionVisible) break;
        selected = await option.first().click({ timeout: 3000 }).then(() => true).catch(() => false);
        if (!selected) await this.page.keyboard.press('Escape').catch(() => {});
      }
      if (selected) {
        // Confirmed live 2026-08-19 (TC-EMPDET-326/328): this combobox's popover can remain open
        // after selection and physically overlap later controls (e.g. the panel's Save button),
        // causing "element intercepts pointer events" click failures — explicitly wait for it to
        // close, forcing it with Escape if it doesn't on its own.
        const option = this.page.getByRole('option', { name: new RegExp(department, 'i') });
        const stillOpen = await option.first().isVisible({ timeout: 2000 }).catch(() => false);
        if (stillOpen) await this.page.keyboard.press('Escape').catch(() => {});
      } else {
        await this.page.keyboard.press('Escape').catch(() => {});
      }
    }
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
  }

  /**
   * GROUNDED (2026-08-18): Designation is no longer a column-header quick-filter (that button no
   * longer exists live) — it moved into the Advanced Filter panel as its own accordion section,
   * same pattern as selectDepartmentFilter() above. Falls back to the old column-header button
   * first in case a future build reintroduces it, then to the panel accordion.
   */
  async selectDesignationFilter(designation: string): Promise<void> {
    const legacyBtn = this.page.getByRole('button', { name: /filter by designation/i });
    if (await legacyBtn.isVisible().catch(() => false)) {
      await legacyBtn.click();
      await this.page.getByRole('option', { name: designation }).click().catch(() => {});
      await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
      return;
    }
    const panel = this.getAdvancedFilterPanel();
    const isPanelOpen = await panel.isVisible().catch(() => false);
    if (!isPanelOpen) {
      await this.openBasicFilterPanel();
      await panel.waitFor({ state: 'visible', timeout: 5000 });
    }
    await this.expandAdvancedFilterSection('Designation');
    const combobox = panel.locator('[role="combobox"]').first();
    // The Departments combobox renders disabled ("Select...") until the department list has loaded;
    // clicking it in that window silently selected nothing (TC-EMPDET-326 flake, 2026-11-12).
    for (let i = 0; i < 20 && !(await combobox.isEnabled().catch(() => true)); i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    if (await combobox.isVisible().catch(() => false)) {
      await combobox.click();
      const option = this.page.getByRole('option', { name: new RegExp(designation, 'i') });
      if (await option.first().isVisible().catch(() => false)) {
        await option.first().click();
      } else {
        await this.page.keyboard.press('Escape');
      }
    } else {
      // Designation section may instead render as a checkbox list (same as the column-header
      // quick-filter dialogs) rather than a combobox — try that shape too before giving up.
      const checkbox = panel.getByRole('checkbox', { name: new RegExp(designation, 'i') }).first();
      if (await checkbox.isVisible().catch(() => false)) await checkbox.click();
    }
    await this.clickAdvancedFilterSave();
  }

  // ─────────────────────────────────────────────────────────────────────────
  // GROUNDED (2026-08-18) against the live app — re-grounding pass triggered by a reported
  // structural change: the Employee module (grid columns, filters, and the Skills/Goals
  // sub-features) had drifted since the 2026-07-13 grounding above. Findings, confirmed by
  // driving the real running app fresh (login re-verified, session was stale):
  //
  //   - Sidebar nav no longer has an expandable "Employee" group with sub-links for "Employee
  //     Details" / "Skills" / "Goals" / "Allocation Correction" (confirmed live via the
  //     2026-07-15 dom-snapshot vs. today's — that whole nested list is GONE). "Employee" is now
  //     a single top-level sidebar LINK straight to `/employee`. Skills and Goals are reached
  //     exclusively via the tab strip on that one page (see skillsTab/goalsTab above) — visiting
  //     `/employee/goals` or `/employee/skills` directly now 404s against an `/employee/:id`
  //     detail route instead ("Failed to load employee details" / "Employee not found" /
  //     "Validation failed (uuid is expected)" toasts — the literal word "goals"/"skills" gets
  //     parsed as a UUID path param). GoalsPage.navigateToGoals()/SkillsPage's equivalent already
  //     try the tab first and only fall back to the old URL if the tab isn't found, so they
  //     still work — but that URL fallback is now dead code, not a real alternate path.
  //   - The employee grid gained real columns/quick-filters beyond what was grounded in July:
  //     RM (own "Filter by RM" checkbox-dialog quick-filter — same pattern as Department),
  //     Projects ("Filter by Projects" checkbox-dialog quick-filter + a separate "Show all
  //     projects in a scrollable row" toggle), Log Hours (has a "Filter by Log Hours" button but
  //     — confirmed live — clicking it opens NOTHING, no dialog/popover of any kind; left as a
  //     documented non-functional stub below, not a "not found" one, since the button itself is
  //     real), Availability % (real "Filter by Availability %" opens a min/max SLIDER dialog —
  //     "0 % / 100 %", two `slider` roles, Clear/Save footer — plus an unrelated "How
  //     availability % is calculated" info-tooltip button and a "Clear sort" button since the
  //     grid defaults to sorting by this column), Night Shift Preference (has a "Filter by Night
  //     Shift Preference" button but — confirmed live, same as Log Hours — clicking it opens
  //     nothing), Skills (per-row badges + "View all skills" — unchanged from July), Visa (new
  //     column, always rendered "—" for every sampled row — no confirmed populated state or
  //     filter).
  //   - Department/RM/Projects column-header quick-filters are all the SAME real component:
  //     a `role="dialog"` titled after the column, a "Close" button, a `Search...` textbox, a
  //     flat list of real `checkbox` roles (one per option, name = the option's exact visible
  //     text), and a "Clear" / "Save" footer button pair. Genuinely additive to (not a
  //     replacement for) the existing Advanced Filter panel's own Departments accordion.
  //   - A new "Table options" button opens a real `role="dialog"` containing a "Column
  //     Visibility" list — one `role="switch"` per column (name = column label, e.g. "RM",
  //     "Availability %"), each with its own "Drag to reorder" handle button, so columns can be
  //     hidden/shown and reordered. Confirmed columns default to visible except "Cohort" and
  //     "Employee Origin", which default to hidden.
  //   - The Advanced Filter panel (getAdvancedFilterPanel()) is unchanged in mechanism
  //     (accordion-per-section, generic expandAdvancedFilterSection() still works) but confirmed
  //     live to now have many more sections than previously grounded: Departments, Designation,
  //     Available since, Log Hours (Last 15 days), Availability % (Last 15 days), Projects,
  //     Reporting Manager, Experience, Employee, Stacks, Night Shift Preference, Leave & Status
  //     (already used by getPipFilterCheckbox() above), Employee Type, Visa Country, Overall
  //     Rating, Visa Status, AI Rating, Communication Rating, Employee Origin, Cohort — plus a
  //     new "Search filters" textbox at the top of the panel to filter this now-long section list
  //     itself, and a live "Showing N results" status line.
  // ─────────────────────────────────────────────────────────────────────────

  /** Open the "Table options" (column visibility/reorder) dialog. */
  async openTableOptions(): Promise<Locator> {
    await this.tableOptionsBtn.click();
    const dialog = this.page.getByRole('dialog').filter({ hasText: 'Column Visibility' });
    await dialog.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return dialog;
  }

  /**
   * A column's visibility switch inside the (already-open) Table options dialog.
   * GROUNDED (2026-08-20, playwright codegen): a live click resolved to the unscoped
   * `page.getByRole('switch', { name: 'Cohort' })` — falling back to the unscoped page here in
   * case the dialog-scoped lookup (via the `hasText: 'Column Visibility'` filter in
   * openTableOptions()) doesn't resolve for every column, e.g. due to a long/virtualized switch
   * list not yet having rendered a given row into the DOM.
   */
  getColumnVisibilitySwitch(dialog: Locator, columnLabel: string): Locator {
    return dialog.getByRole('switch', { name: columnLabel }).or(this.page.getByRole('switch', { name: columnLabel }));
  }

  /** Toggle a column's visibility via Table options. Returns false if the column/switch isn't present. */
  async toggleColumnVisibility(columnLabel: string): Promise<boolean> {
    const dialog = await this.openTableOptions();
    const toggle = this.getColumnVisibilitySwitch(dialog, columnLabel).first();
    const visible = await toggle.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);
    if (visible) await toggle.click();
    await this.page.keyboard.press('Escape').catch(() => {});
    return visible;
  }

  /**
   * Generic column-header quick-filter dialog — shared real component behind "Filter by
   * Department" / "Filter by RM" / "Filter by Projects" (confirmed live identical structure).
   * `columnLabel` matches the dialog's own heading text (e.g. "Department", "RM", "Projects").
   */
  getColumnFilterDialog(columnLabel: string): Locator {
    return this.page.getByRole('dialog').filter({ hasText: new RegExp(`^${columnLabel}`) }).first();
  }

  /** Open a column's quick-filter dialog by clicking its `getByRole('button', { name: 'Filter by <Column>' })` trigger. */
  async openColumnFilterDialog(trigger: Locator, columnLabel: string): Promise<Locator> {
    await trigger.click();
    const dialog = this.getColumnFilterDialog(columnLabel);
    await dialog.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return dialog;
  }

  /** Check one or more options (by exact visible text) inside an already-open column quick-filter dialog, then Save. */
  async selectColumnFilterOptions(dialog: Locator, optionNames: string[]): Promise<void> {
    for (const name of optionNames) {
      const checkbox = dialog.getByRole('checkbox', { name });
      if (await checkbox.isVisible().catch(() => false)) await checkbox.check().catch(() => {});
    }
    await dialog.getByRole('button', { name: /^save$/i }).click().catch(() => {});
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
  }

  /** Search within an already-open column quick-filter dialog's option list. */
  async searchColumnFilterOptions(dialog: Locator, query: string): Promise<void> {
    await dialog.getByPlaceholder('Search...').fill(query);
  }

  /** Clear an already-open column quick-filter dialog's selections via its "Clear" footer button. */
  async clearColumnFilterDialog(dialog: Locator): Promise<void> {
    await dialog.getByRole('button', { name: /^clear$/i }).click().catch(() => {});
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
  }

  /** Open the "Filter by RM" quick-filter dialog and select one or more RM names. */
  async selectRMFilter(names: string[]): Promise<boolean> {
    const visible = await this.rmFilterBtn.isVisible().catch(() => false);
    if (!visible) return false;
    const dialog = await this.openColumnFilterDialog(this.rmFilterBtn, 'RM');
    await this.selectColumnFilterOptions(dialog, names);
    return true;
  }

  /**
   * GROUNDED (2026-08-20, via `playwright codegen` — recorded live, not scripted): unlike the
   * Advanced Filter panel's own "Cohort" accordion section (which renders a `role="combobox"`
   * whose open/select interaction is still unconfirmed — see the module KB), toggling the
   * Cohort/Employee Origin COLUMN visible via Table options exposes the same "Filter by <Column>"
   * column-header quick-filter dialog already used for Department/RM/Projects
   * (`getColumnFilterDialog`/`openColumnFilterDialog`/`selectColumnFilterOptions`). This is a
   * genuinely separate, working path for selecting a Cohort/Employee Origin value — prefer it over
   * the Advanced Filter accordion for both fields until the combobox is separately grounded.
   */
  getColumnQuickFilterButton(columnLabel: string): Locator {
    return this.page.getByRole('button', { name: new RegExp(`^Filter by ${columnLabel}`, 'i') });
  }

  /**
   * Open the "Filter by <columnLabel>" quick-filter dialog (column must already be visible via
   * toggleColumnVisibility) and select option(s) by exact visible text, then Save. Returns false
   * if the trigger button isn't found/visible.
   */
  async selectColumnQuickFilter(columnLabel: string, optionNames: string[]): Promise<boolean> {
    const trigger = this.getColumnQuickFilterButton(columnLabel);
    const visible = await trigger.first().isVisible().catch(() => false);
    if (!visible) return false;
    const dialog = await this.openColumnFilterDialog(trigger.first(), columnLabel);
    let clicked = false;
    for (const name of optionNames) {
      // GROUNDED (2026-08-20, playwright codegen): live clicks on Cohort's quick-filter rows
      // resolved to getByText rather than getByRole('checkbox', ...), so these rows may not expose
      // an accessible checkbox name the way Department/RM/Projects rows do — try the checkbox
      // first (cheap, matches the shared component when it does apply) and fall back to the exact
      // text match that codegen actually recorded.
      const checkbox = dialog.getByRole('checkbox', { name });
      const text = dialog.getByText(name, { exact: true });
      const option = (await checkbox.first().isVisible().catch(() => false)) ? checkbox.first() : text.first();
      if (await option.isVisible().catch(() => false)) {
        await option.click().catch(() => {});
        clicked = true;
      }
    }
    if (!clicked) return false;
    const saveBtn = dialog.getByRole('button', { name: /^save$/i });
    if (await saveBtn.isVisible().catch(() => false)) await saveBtn.click().catch(() => {});
    else await this.page.keyboard.press('Escape').catch(() => {});
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    return true;
  }

  /**
   * Enumerate the visible option labels inside an already-open column quick-filter dialog.
   * UNVERIFIED beyond checkbox-role rows: live codegen recording for the Cohort dialog resolved
   * clicks via getByText rather than getByRole('checkbox', ...), meaning its rows may not expose
   * an accessible checkbox name — that shape has not been independently grounded, so this only
   * implements the confirmed checkbox path and returns whatever it finds (possibly empty).
   */
  async getColumnQuickFilterOptionLabels(dialog: Locator): Promise<string[]> {
    const checkboxes = dialog.getByRole('checkbox');
    const count = await checkboxes.count();
    const labels: string[] = [];
    for (let i = 0; i < count; i++) {
      const label = (await checkboxes.nth(i).getAttribute('aria-label').catch(() => null))
        ?? (await checkboxes.nth(i).locator('..').textContent().catch(() => ''));
      if (label && label.trim()) labels.push(label.trim());
    }
    return labels;
  }

  /** Open the "Filter by Projects" quick-filter dialog and select one or more project names. */
  async selectProjectsFilter(names: string[]): Promise<boolean> {
    const visible = await this.projectsFilterBtn.isVisible().catch(() => false);
    if (!visible) return false;
    const dialog = await this.openColumnFilterDialog(this.projectsFilterBtn, 'Projects');
    await this.selectColumnFilterOptions(dialog, names);
    return true;
  }

  /** Open the "Filter by Department" quick-filter dialog (column-header variant, distinct from the Advanced Filter panel's Departments accordion) and select one or more department names. */
  async selectDepartmentColumnFilter(names: string[]): Promise<boolean> {
    const visible = await this.departmentFilterDropdown.isVisible().catch(() => false);
    if (!visible) return false;
    const dialog = await this.openColumnFilterDialog(this.departmentFilterDropdown, 'Department');
    await this.selectColumnFilterOptions(dialog, names);
    return true;
  }

  /** The "Availability %" min/max slider quick-filter dialog. */
  getAvailabilityFilterDialog(): Locator {
    return this.page.getByRole('dialog').filter({ hasText: 'Availability %' }).first();
  }

  /** Open the Availability % slider filter dialog. */
  async openAvailabilityFilterDialog(): Promise<Locator> {
    await this.availabilityFilterBtn.click();
    const dialog = this.getAvailabilityFilterDialog();
    await dialog.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return dialog;
  }

  /**
   * Drag the Availability % dialog's Minimum/Maximum sliders to the given percentages (0-100) via
   * keyboard (arrow-key stepping from each slider's current position) rather than a raw pointer
   * drag, since Radix range sliders are keyboard-operable and this avoids guessing pixel-per-percent
   * track geometry. Then Save. Returns false if the dialog/sliders aren't present.
   */
  async setAvailabilityFilterRange(min: number, max: number): Promise<boolean> {
    const dialog = await this.openAvailabilityFilterDialog();
    const minSlider = dialog.getByRole('slider', { name: /minimum/i });
    const maxSlider = dialog.getByRole('slider', { name: /maximum/i });
    const visible = await minSlider.isVisible().catch(() => false);
    if (!visible) return false;
    const setSlider = async (slider: Locator, target: number) => {
      await slider.focus();
      const current = parseInt((await slider.getAttribute('aria-valuenow').catch(() => null)) ?? '0', 10);
      const delta = target - (isNaN(current) ? 0 : current);
      const key = delta >= 0 ? 'ArrowRight' : 'ArrowLeft';
      for (let i = 0; i < Math.abs(delta); i++) await this.page.keyboard.press(key);
    };
    await setSlider(minSlider, min);
    await setSlider(maxSlider, max);
    await dialog.getByRole('button', { name: /^save$/i }).click().catch(() => {});
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
    return true;
  }

  /** Clear the Availability % filter via its dialog's "Clear" button. */
  async clearAvailabilityFilter(): Promise<boolean> {
    const dialog = await this.openAvailabilityFilterDialog();
    const clearBtn = dialog.getByRole('button', { name: /^clear$/i });
    const visible = await clearBtn.isVisible().catch(() => false);
    if (visible) {
      await clearBtn.click();
      await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
    }
    return visible;
  }

  /**
   * CONFIRMED LIVE BUT NON-FUNCTIONAL (2026-08-18): the "Filter by Log Hours" button is real and
   * clickable, but clicking it opens no dialog/popover of any kind (verified via a full
   * before/after accessibility-tree diff — zero change beyond an unrelated session toast). This
   * is a real app gap, not a missing selector — do not add assertions expecting a dialog here;
   * use test.skip() with this same reasoning instead of timing out.
   */
  async attemptOpenLogHoursFilter(): Promise<boolean> {
    await this.logHoursFilterBtn.click().catch(() => {});
    const anyDialog = this.page.getByRole('dialog');
    return anyDialog.first().isVisible({ timeout: 1500 }).catch(() => false);
  }

  /** CONFIRMED LIVE BUT NON-FUNCTIONAL (2026-08-18) — see attemptOpenLogHoursFilter(); same confirmed-dead behavior for Night Shift Preference. */
  async attemptOpenNightShiftFilter(): Promise<boolean> {
    await this.nightShiftFilterBtn.click().catch(() => {});
    const anyDialog = this.page.getByRole('dialog');
    return anyDialog.first().isVisible({ timeout: 1500 }).catch(() => false);
  }

  async resetFilters(): Promise<void> {
    // Close the panel FIRST — its backdrop can otherwise physically overlap resetFiltersBtn on
    // the main page, causing "<main> intercepts pointer events" click failures (confirmed live
    // 2026-08-19 via TC-EMPDET-328).
    await this.closeAdvancedFilterPanel();
    // "Clear all" may have aria-hidden="true" before filters applied; use isVisible() to check
    const btn = this.resetFiltersBtn;
    const visible = await btn.first().isVisible().catch(() => false);
    // 6.8.x: two matching buttons can exist (chip row + a leftover) — click only the first, once.
    if (visible) {
      // Pick the visible one: the chip-row "Clear filter" (6.8.x) or the legacy "Clear all".
      const chip = btn.filter({ hasText: /^clear filter/i });
      const target = (await chip.count()) > 0 ? chip.first() : btn.first();
      await target.click({ timeout: 5000 }).catch(() => {});
    }
    // Close the panel again in case it was reopened by the above (defensive, normally a no-op)
    await this.closeAdvancedFilterPanel();
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
    // Same badge/grid settle rationale as clickAdvancedFilterSave() — confirmed live 2026-08-19.
    await this.page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
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

  /**
   * TRIAGE NOTE (2026-08-19): waiting only for the grid CONTAINER to be visible is a no-op — it's
   * already visible before the click (pagination doesn't unmount/remount it, only its row data
   * changes). That gap was the likely cause of TC-EMPDET-020/045 reading page 2 as identical to
   * page 1 (100% row overlap) — the read happened before the new page's data had actually arrived.
   * Wait for the underlying employees API response, same helper `searchEmployee()` already uses.
   */
  async clickNextPage(): Promise<void> {
    await this.waitForEmployeesApiResponse(() => this.nextPageBtn.click());
    await this.employeeGrid.waitFor({ state: 'visible', timeout: 10000 });
  }

  async clickPreviousPage(): Promise<void> {
    await this.waitForEmployeesApiResponse(() => this.previousPageBtn.click());
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

  /**
   * CONFIRMED LIVE (2026-08-19): Designation now renders as `combobox "Designation" [disabled]` in
   * the Edit drawer — along with Employee Name, Employee Number, Email, and Department, all now
   * locked. This locator still correctly resolves to that (disabled) field; it's the assumption
   * that Designation is editable here that's no longer true. Use `getDrawerOverallRatingField()`
   * below for generic "edit any field and verify Cancel/Save behavior" tests instead — Overall/AI/
   * Comm. Rating and Reporting Manager/Stack/Type/Night Shift Preference are the fields confirmed
   * still editable.
   */
  getDrawerDesignationField(): Locator {
    return this.editDrawer.getByLabel(/designation/i).or(this.editDrawer.getByRole('textbox', { name: /designation/i }));
  }

  async setDrawerDesignation(newValue: string): Promise<boolean> {
    const field = this.getDrawerDesignationField();
    const visible = await field.isVisible().catch(() => false);
    if (visible) await field.fill(newValue);
    return visible;
  }

  /**
   * Overall Rating (out of 10) — confirmed live as a plain, editable `textbox` in the Edit drawer
   * (unlike Designation/Name/Email/Department, which are all locked). Used as the generic
   * "editable field" for Cancel/double-Save/persistence tests since it's a simple fill-and-compare
   * value, same shape as how Designation used to be exercised.
   */
  getDrawerOverallRatingField(): Locator {
    return this.editDrawer.getByLabel(/overall rating/i).or(this.editDrawer.getByRole('textbox', { name: /overall rating/i }));
  }

  async setDrawerOverallRating(newValue: string): Promise<boolean> {
    const field = this.getDrawerOverallRatingField();
    const visible = await field.isVisible().catch(() => false);
    if (visible) await field.fill(newValue);
    return visible;
  }

  async getDrawerOverallRatingValue(): Promise<string> {
    return (await this.getDrawerOverallRatingField().inputValue().catch(() => '')) ?? '';
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
    // Only the list GET (/api/v1/employees?…). The old /api/.*employee/ pattern also failed
    // /employees/permissions and /employees/metadata, so the app redirected to "Access Denied" before
    // the list could ever show its error state (verified 2026-11-12).
    await this.page.route(/\/api\/v1\/employees(\?|$)/, route =>
      route.request().method() === 'GET'
        ? route.fulfill({
            status,
            contentType: 'application/json',
            body: JSON.stringify({ message: 'Internal Server Error' }),
          })
        : route.continue()
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

  // ─────────────────────────────────────────────────────────────────────────
  // GROUNDED (2026-07-13) against the live app at BASE_URL, replacing the
  // Figma-inferred locators added earlier the same day (TC-EMPDET-131..259).
  // Findings, confirmed by driving the real running app:
  //
  //   REAL, fixed below to match live DOM:
  //   - Employee-details side drawer: opened by clicking the employee's
  //     NAME link (not a generic row click) — `<aside role="complementary"
  //     aria-label="{Employee Name}">` with 4 collapsible sections
  //     ("Projects (N)", "Past Projects (N)", "PR Reviewer for Projects (N)",
  //     "Goals (N)") — not the 2 sections originally guessed. The Projects
  //     section table has only "Project Name" / "Since" columns (no
  //     Allocation/Logged-Hours columns as guessed).
  //   - Skills detail drawer: opened via the row's `aria-label="View all
  //     skills"` button (not the generic "+N" overflow control) — same aside
  //     pattern, aria-label="{Name}'s Skills", heading "All Technologies (N)",
  //     badges are `[data-slot="badge"]` (confirmed, matches the app's
  //     badge component used elsewhere on this same page).
  //   - Per-project kebab ("Project actions" button in the Projects column,
  //     not a row-hover menu) opens a real `role="menu"` with exactly two
  //     items: "Add Project Allocation" and "View Project Details".
  //   - "View Project Details" opens a real `role="dialog"` popover titled
  //     "{Name}'s Project Details" with a "Billability" split and a
  //     Projects/Allocation/Logged Hours % table — this is the ONE real
  //     surface behind three separate guessed concepts (hover popup,
  //     "view project details" sheet, and "project-details drawer"); they
  //     are consolidated below. Confirmed billability was a 2-bucket split
  //     (Non-billable/Billable) for the sampled employee — the "3-bucket +
  //     Not allotted" variant is left as a tolerant match, not a hard
  //     assertion, in case it appears for other allocation states.
  //   - "Add Project Allocation" opens a real Sheet (`role="dialog"`)
  //     titled "{Name} - Add Project Allocation" with fields Project
  //     (combobox), Allocation Type (Fixed/Dynamic select), Allocation
  //     Percentage (number input), Allocation Start/End Date (date pickers),
  //     Type of Work (select), and Notes (textarea) — footer buttons are
  //     Cancel / **Save** (not "Submit" as originally guessed).
  //
  //   CONFIRMED NOT FOUND LIVE as of 2026-07-13 — no matching DOM anywhere
  //   on the Employee Details screen, and the literal terms "note",
  //   "delete", "archive", "deallocat", "tentative", "shadow developer", and
  //   "allocation since" do not appear anywhere in the page's text content
  //   (verified via a full-page text sweep). These are Figma design-ahead
  //   concepts with no live implementation yet. Kept as documented stubs —
  //   locators below resolve to nothing so callers' existing `isVisible()`
  //   guards no-op safely, and the corresponding spec tests use
  //   `test.skip()` with this same reasoning instead of timing out:
  //     - Row-hover allocation/utilization summary popup (hovering a row or
  //       its Log Hours flag icon only surfaces a plain
  //       "Designation: <title>" tooltip — no allocation/duration/shadow-
  //       developer content).
  //     - Tentative-projects shortlist / multi-add mini-table (Add Project
  //       Allocation is a single-entry form, not a shortlist).
  //     - Last-15-days logs table/form (no such feature; the app's only
  //       "15 days" reference is an unrelated global "Last 15 days" date-
  //       range dropdown at the top of the page).
  //     - Add/Edit note dialog.
  //     - Deallocation confirmation modal.
  //     - Row action menu / Delete-employee confirmation modal (the Action
  //       column only ever renders a single "Edit" icon button).
  //     - Read-only "Archive employee details" drawer for Past employees
  //       (clicking a Past-employee row's name opens no dialog/aside at all).
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * NOT FOUND LIVE (2026-07-13): no row-hover popup exists. Hovering a row or
   * its Log Hours flag icon only ever surfaces a generic `role="tooltip"`
   * reading "Designation: <title>" — never allocation/duration/logged-hours/
   * shadow-developer content. Kept as a resolves-to-nothing locator so
   * existing `isVisible()`/`waitFor(...).catch()` call sites no-op safely;
   * do not add real assertions against this — use `test.skip()` instead.
   */
  getHoverAllocationPopup(): Locator {
    return this.page.locator('[data-not-found-live="hover-allocation-popup"]');
  }

  /** NOT FOUND LIVE — see getHoverAllocationPopup(). */
  async hoverRowForAllocationSummary(row: Locator): Promise<Locator> {
    await row.hover();
    const popup = this.getHoverAllocationPopup();
    // Short timeout (confirmed not-found-live; some callers loop this across every row on the
    // page, and a long per-iteration wait risks blowing the whole test's 60s timeout).
    await popup.waitFor({ state: 'visible', timeout: 300 }).catch(() => {});
    return popup;
  }

  /** NOT FOUND LIVE — see getHoverAllocationPopup(). */
  getHoverAllocationPercentage(popup: Locator): Locator {
    return popup.getByText(/\d+(\.\d+)?%/).first();
  }

  /** NOT FOUND LIVE — see getHoverAllocationPopup(). */
  getHoverLoggedHoursVariance(popup: Locator): Locator {
    return popup.getByText(/more|less/i);
  }

  /** NOT FOUND LIVE — "Allocation Since" text does not appear anywhere in the live app. */
  getHoverAllocationSince(popup: Locator): Locator {
    return popup.getByText(/allocation since/i);
  }

  /** NOT FOUND LIVE — see getHoverAllocationPopup(). */
  getHoverDuration(popup: Locator): Locator {
    return popup.getByText(/duration|ending in/i);
  }

  /** NOT FOUND LIVE — see getHoverAllocationPopup(). */
  getHoverTotalLoggedHours(popup: Locator): Locator {
    return popup.getByText(/total logged hours/i);
  }

  /** NOT FOUND LIVE — "Shadow Developer" text does not appear anywhere in the live app. */
  getHoverShadowDeveloperOf(popup: Locator): Locator {
    return popup.getByText(/shadow developer/i);
  }

  /** NOT FOUND LIVE — see getHoverAllocationPopup(). Real per-project table lives in getProjectDetailsSheet() instead. */
  getHoverPerProjectTable(popup: Locator): Locator {
    return popup.getByRole('table').or(popup.locator('table')).first();
  }

  /** NOT FOUND LIVE — see getHoverPerProjectTable(). */
  getHoverPerProjectRows(popup: Locator): Locator {
    return this.getHoverPerProjectTable(popup).getByRole('row').filter({ hasNot: this.page.getByRole('columnheader') });
  }

  /** NOT FOUND LIVE — see getHoverAllocationPopup(). Real billability split lives in getProjectDetailsSheet() instead. */
  getHoverBillabilitySplit(popup: Locator): Locator {
    return popup.getByText(/non-billable/i).locator('..')
      .or(popup.getByText(/billable/i));
  }

  /** NOT FOUND LIVE — the row-hover popup this depended on does not exist; use the "View Project Details" popover instead. */
  async clickProjectRowInHoverPopup(popup: Locator, projectName?: string): Promise<void> {
    const rows = this.getHoverPerProjectRows(popup);
    const target = projectName ? rows.filter({ hasText: projectName }).first() : rows.first();
    await target.click().catch(() => {});
    await this.getProjectDetailsSheet().waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
  }

  // ─── "View Project Details" popover (real; TC-EMPDET-141, 142, 191) ──────
  // Reached via a project's kebab ("Project actions" button) → "View Project
  // Details" menu item. Confirmed live: role="dialog" popover titled
  // "{Employee}'s Project Details", a "Billability" split, and a
  // Projects / Allocation / Logged Hours % table. This single real surface
  // replaces the three separately-guessed concepts (hover popup,
  // "view project details" sheet, "project-details drawer") from the
  // original Figma-derived draft.

  /** The per-project "Project actions" kebab button within a row (opens Add Project Allocation / View Project Details). */
  getProjectActionsKebab(row: Locator): Locator {
    return row.getByRole('button', { name: 'Project actions' });
  }

  /** Open the per-project actions menu and return it. */
  async openProjectActionsMenu(row: Locator): Promise<Locator> {
    const kebab = this.getProjectActionsKebab(row).first();
    const menu = this.page.getByRole('menu').first();
    const kebabVisible = await kebab.isVisible().catch(() => false);
    if (!kebabVisible) return menu; // e.g. a row with no projects/kebab (or Past employees) — caller's isVisible() checks will no-op safely
    await kebab.click().catch(() => {});
    await menu.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return menu;
  }

  /**
   * "View Project Details" popover — billability split + Projects/Allocation/Logged Hours % table.
   * Confirmed live as a `role="dialog"` popover titled "{Employee}'s Project Details".
   */
  getProjectDetailsSheet(): Locator {
    return this.page.getByRole('dialog', { name: /project details/i }).first();
  }

  /** Open "View Project Details" via the row's per-project kebab menu (real trigger — not a hover menu). */
  async openViewProjectDetailsFromRow(row: Locator): Promise<void> {
    const menu = await this.openProjectActionsMenu(row);
    await menu.getByRole('menuitem', { name: 'View Project Details' }).click().catch(() => {});
    await this.getProjectDetailsSheet().waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
  }

  /**
   * Billability breakdown inside the popover. Confirmed live as a 2-bucket split
   * (Non-billable/Billable); matched tolerantly here (also accepts a 3rd "Not allotted"
   * bucket) since bucket count may vary by employee's allocation state.
   */
  getSheetBillabilityThreeBucket(sheet: Locator): Locator {
    return sheet.getByText(/billability/i).locator('..')
      .or(sheet.getByText(/non-billable/i));
  }

  /** Projects/Allocation/Logged Hours % table inside the "View Project Details" popover. Confirmed live (exact column headers). */
  getSheetProjectsTable(sheet: Locator): Locator {
    return sheet.getByText('Projects', { exact: true }).locator('..').locator('..')
      .or(sheet.getByRole('table'))
      .first();
  }

  /** Legacy alias kept for callers written against the original "project-details drawer" name — same live popover. */
  getProjectDetailsDrawer(): Locator {
    return this.getProjectDetailsSheet();
  }

  /**
   * Drill into a project by name via its row's kebab → "View Project Details"
   * (real trigger; drops the unconfirmed "click project name text directly"
   * path — clicking a project badge in the grid does not open any drawer).
   */
  async openProjectDetailsDrawerByName(projectName: string): Promise<void> {
    const row = this.getDataRows().filter({ hasText: projectName }).first();
    const visible = await row.isVisible().catch(() => false);
    if (!visible) return;
    await this.openViewProjectDetailsFromRow(row);
  }

  /** NOT FOUND LIVE — the real popover has no per-role icon rows (no user/user-cog icons observed). */
  getProjectDrawerOwnRoleRow(drawer: Locator): Locator {
    return drawer.locator('[data-not-found-live="project-drawer-own-role-row"]');
  }

  /** NOT FOUND LIVE — see getProjectDrawerOwnRoleRow(). */
  getProjectDrawerReportingManagerRow(drawer: Locator): Locator {
    return drawer.locator('[data-not-found-live="project-drawer-rm-row"]');
  }

  // ─── Side drawers — employee details / skills detail (TC-EMPDET-149..152, 179) — real ──

  /**
   * Employee-details side drawer — confirmed live as `<aside role="complementary"
   * aria-label="{Employee Name}">`, distinguished from the (also real) Advanced
   * Filter aside by aria-label. Opened by clicking the employee's NAME link,
   * not a generic row click.
   */
  getEmployeeDetailsSideDrawer(): Locator {
    // 6.8.x: the drawer is <aside aria-label="<employee name>"> with no explicit role attribute.
    return this.page.locator('aside[aria-label]:not([aria-label="Advanced filter" i])').first();
  }

  /** Click a row's employee-name link to open the employee-details side drawer (confirmed live trigger). */
  async openEmployeeDetailsDrawer(row: Locator): Promise<void> {
    await row.locator('button[data-variant="link"]').first().click().catch(() => {});
    await this.getEmployeeDetailsSideDrawer().waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
  }

  /**
   * The drawer's 4 collapsible sections — "Projects (N)", "Past Projects (N)",
   * "PR Reviewer for Projects (N)", "Goals (N)" — confirmed live (not the 2
   * originally guessed).
   */
  getEmployeeDrawerCollapsibleSections(drawer: Locator): Locator {
    return drawer.locator('[data-slot="collapsible-trigger"]');
  }

  /** A specific named collapsible section (matched by its visible label, ignoring the trailing "(N)" count). */
  getEmployeeDrawerSection(drawer: Locator, label: 'Projects' | 'Past Projects' | 'PR Reviewer for Projects' | 'Goals'): Locator {
    return this.getEmployeeDrawerCollapsibleSections(drawer).filter({ hasText: label });
  }

  /** Toggle a collapsible section (by index) inside the employee-details drawer. */
  async toggleEmployeeDrawerSection(drawer: Locator, index: number): Promise<boolean> {
    const section = this.getEmployeeDrawerCollapsibleSections(drawer).nth(index);
    const visible = await section.isVisible().catch(() => false);
    if (!visible) return false;
    await section.click();
    return true;
  }

  /**
   * Skills detail drawer — confirmed live as the same aside pattern, aria-label
   * "{Employee}'s Skills", heading "All Technologies (N)".
   */
  getSkillsDetailDrawer(): Locator {
    // The drawer is a plain <aside aria-label="<Name>'s Skills"> with no explicit role attribute, so the
    // old CSS 'aside[role="complementary"]' never matched (TC-EMPDET-179 timed out walking every row,
    // 2026-11-12). Match by the implicit ARIA role instead.
    return this.page.getByRole('complementary').filter({ hasText: /all technologies/i }).first();
  }

  /** Open the Skills detail drawer via the row's "View all skills" button (confirmed live aria-label — not the generic "+N" control). */
  async openSkillsDetailDrawer(row: Locator): Promise<void> {
    await row.getByRole('button', { name: 'View all skills' }).click().catch(() => {});
    await this.getSkillsDetailDrawer().waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
  }

  getSkillsDetailHeader(drawer: Locator): Locator {
    return drawer.getByText(/all technologies \(\d+\)/i);
  }

  /** Flat badge list of technologies inside the Skills detail drawer — confirmed live as `[data-slot="badge"]` (same component used in the main grid's Skills column). */
  getSkillsDetailBadges(drawer: Locator): Locator {
    return drawer.locator('[data-slot="badge"]');
  }

  /**
   * "Show more" control inside the Skills detail drawer. Not confirmed either way —
   * the sampled employee had only 4 skills (no pagination needed); kept as a
   * best-effort locator for employees with larger skill lists rather than marked
   * not-found, since a single negative sample doesn't prove absence.
   */
  getSkillsDetailShowMoreControl(drawer: Locator): Locator {
    return drawer.getByRole('button', { name: /show more/i });
  }

  // ─── PR Reviewer info & last-15-days logs (TC-EMPDET-143, 153, 154) ──────

  /**
   * NOT FOUND LIVE (2026-07-13): there is no Skill-column filter/action and no
   * "PR Reviewer" popup triggered from one — the Skills column header has no
   * filter control at all. The real PR-reviewer information instead lives as
   * the "PR Reviewer for Projects (N)" collapsible section inside the
   * employee-details side drawer (see getEmployeeDrawerSection) — a
   * structurally different surface (an inline collapsible section, not a
   * popup) than what TC-EMPDET-143 describes, so this stub is left
   * unresolvable rather than silently redirected to the drawer.
   */
  getPRReviewerPopup(): Locator {
    return this.page.locator('[data-not-found-live="pr-reviewer-popup"]');
  }

  /** NOT FOUND LIVE — see getPRReviewerPopup(); there is no Skill-column trigger to click. */
  async openPRReviewerPopup(): Promise<void> {
    await this.getPRReviewerPopup().waitFor({ state: 'visible', timeout: 1000 }).catch(() => {});
  }

  /** NOT FOUND LIVE — no "last 15 days" per-project logs feature exists; the app's only "Last 15 days" text is an unrelated global date-range dropdown. */
  getLast15DaysLogsTable(): Locator {
    return this.page.locator('[data-not-found-live="last-15-days-logs-table"]');
  }

  /** NOT FOUND LIVE — see getLast15DaysLogsTable(). */
  getLast15DaysLogsForm(): Locator {
    return this.page.locator('[data-not-found-live="last-15-days-logs-form"]');
  }

  /** NOT FOUND LIVE — see getLast15DaysLogsTable(). */
  async openLast15DaysLogsTable(projectDrawer: Locator): Promise<void> {
    await this.getLast15DaysLogsTable().waitFor({ state: 'visible', timeout: 1000 }).catch(() => {});
  }

  /** NOT FOUND LIVE — see getLast15DaysLogsTable(). */
  async openLast15DaysLogsForm(projectDrawer: Locator): Promise<void> {
    await this.getLast15DaysLogsForm().waitFor({ state: 'visible', timeout: 1000 }).catch(() => {});
  }

  // ─── Notes: add/edit — NOT FOUND LIVE (TC-EMPDET-155, 156, 168, 190) ─────
  // The literal word "note" does not appear anywhere on the Employee Details
  // screen (verified via full-page text sweep); there is no Add/Edit-note
  // affordance on any row or drawer.

  /** NOT FOUND LIVE — see note above. */
  getNoteDialog(): Locator {
    return this.page.locator('[data-not-found-live="note-dialog"]');
  }

  /** NOT FOUND LIVE — see note above. */
  async openAddNoteDialog(row: Locator): Promise<void> {
    await this.getNoteDialog().waitFor({ state: 'visible', timeout: 1000 }).catch(() => {});
  }

  /** NOT FOUND LIVE — see note above. */
  async openEditNoteDialog(row: Locator): Promise<void> {
    await this.getNoteDialog().waitFor({ state: 'visible', timeout: 1000 }).catch(() => {});
  }

  getNoteTextarea(dialog: Locator): Locator {
    return dialog.getByRole('textbox').last();
  }

  async fillNoteText(dialog: Locator, text: string): Promise<boolean> {
    const textarea = this.getNoteTextarea(dialog);
    const visible = await textarea.isVisible().catch(() => false);
    if (visible) await textarea.fill(text);
    return visible;
  }

  async submitNoteDialog(dialog: Locator): Promise<void> {
    const submit = dialog.getByRole('button', { name: /^save$|^submit$/i });
    if (await submit.isVisible().catch(() => false)) {
      await submit.click();
      await dialog.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    }
  }

  async cancelNoteDialog(dialog: Locator): Promise<void> {
    const cancel = dialog.getByRole('button', { name: /^cancel$/i });
    if (await cancel.isVisible().catch(() => false)) {
      await cancel.click();
      await dialog.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    } else {
      await dialog.getByRole('button', { name: /close/i }).first().click().catch(() => {});
    }
  }

  // ─── Add Project Allocation (real; TC-EMPDET-145..148, 180) ──────────────
  // Confirmed live as a Sheet (role="dialog") titled "{Employee} - Add
  // Project Allocation", reached via the per-project kebab's "Add Project
  // Allocation" menu item (not a row-hover trigger). It is a single-entry
  // form (Project, Allocation Type, Allocation Percentage, Start/End Date,
  // Type of Work, Notes) — the "tentative-projects shortlist" multi-add
  // mini-table described in TC-EMPDET-147/148/180 does NOT exist live; those
  // methods are kept as documented not-found stubs below.

  /** "Add Project Allocation" drawer — confirmed live title/fields (see block comment above). */
  getAddProjectAllocationDrawer(): Locator {
    return this.page.getByRole('dialog', { name: /add project allocation/i }).first();
  }

  /** Open "Add Project Allocation" via the row's per-project kebab menu (real trigger). */
  async openAddProjectAllocationDrawer(row: Locator): Promise<void> {
    const menu = await this.openProjectActionsMenu(row);
    await menu.getByRole('menuitem', { name: 'Add Project Allocation' }).click().catch(() => {});
    await this.getAddProjectAllocationDrawer().waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
  }

  /** Project combobox field — confirmed live (`#aa-project`). */
  getAddAllocationProjectField(drawer: Locator): Locator {
    return drawer.locator('#aa-project');
  }

  /** Allocation % number input — 6.9.x: `spinbutton "Allocation %"` (the old `#aa-percentage` id is gone). */
  getAddAllocationPercentageField(drawer: Locator): Locator {
    return drawer.getByRole('spinbutton', { name: 'Allocation %' }).or(drawer.locator('#aa-percentage')).first();
  }

  /** Notes textarea — 6.9.x: textbox "Add notes or comments.." (old id `#aa-notes` kept as fallback). */
  getAddAllocationNotesField(drawer: Locator): Locator {
    return drawer.getByRole('textbox', { name: /add notes or comments/i }).or(drawer.locator('#aa-notes')).first();
  }

  /**
   * NOT FOUND LIVE — Add Project Allocation is a single-entry form; there is no
   * tentative-projects shortlist/mini-table. The exact empty-state copy
   * "No tentative projects selected..." does not appear anywhere live.
   */
  getTentativeProjectsEmptyState(drawer: Locator): Locator {
    return drawer.getByText('No tentative projects selected. Use the dropdown above to add projects.');
  }

  /** NOT FOUND LIVE — see getTentativeProjectsEmptyState(). Real single-project field is getAddAllocationProjectField(). */
  getTentativeProjectsDropdown(drawer: Locator): Locator {
    return drawer.locator('[data-not-found-live="tentative-projects-dropdown"]');
  }

  /** NOT FOUND LIVE — see getTentativeProjectsEmptyState(). */
  async addTentativeProject(drawer: Locator, projectName: string): Promise<boolean> {
    return false;
  }

  /** NOT FOUND LIVE — see getTentativeProjectsEmptyState(). */
  getTentativeProjectRows(drawer: Locator): Locator {
    return drawer.locator('[data-not-found-live="tentative-project-row"]');
  }

  /** NOT FOUND LIVE — see getTentativeProjectsEmptyState(). */
  async removeTentativeProjectRow(drawer: Locator, index = 0): Promise<boolean> {
    return false;
  }

  /** Submit the Add Project Allocation drawer — confirmed live button text is "Save" (not "Submit"). */
  async submitAddProjectAllocation(drawer: Locator): Promise<void> {
    const submit = drawer.getByRole('button', { name: /^save$/i });
    if (await submit.isVisible().catch(() => false)) {
      await submit.click();
      await drawer.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    }
  }

  async cancelAddProjectAllocation(drawer: Locator): Promise<void> {
    const cancel = drawer.getByRole('button', { name: /^cancel$/i });
    if (await cancel.isVisible().catch(() => false)) {
      await cancel.click();
      await drawer.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    } else {
      await drawer.getByRole('button', { name: /close/i }).first().click().catch(() => {});
    }
  }

  // ─── Deallocation confirmation — NOT FOUND LIVE (TC-EMPDET-133, 166, 179, 186) ──
  // The literal substring "deallocat" does not appear anywhere on the
  // Employee Details screen (verified via full-page text sweep).

  /** NOT FOUND LIVE — see note above. */
  getDeallocationConfirmationModal(): Locator {
    return this.page.locator('[data-not-found-live="deallocation-confirm-modal"]');
  }

  /** NOT FOUND LIVE — see note above. */
  async triggerDeallocation(projectDrawer: Locator): Promise<void> {
    await this.getDeallocationConfirmationModal().waitFor({ state: 'visible', timeout: 1000 }).catch(() => {});
  }

  async confirmDeallocation(): Promise<void> {
    const modal = this.getDeallocationConfirmationModal();
    await modal.getByRole('button', { name: /confirm|yes|deallocat/i }).first().click().catch(() => {});
    await modal.waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
  }

  async cancelDeallocation(): Promise<void> {
    const modal = this.getDeallocationConfirmationModal();
    await modal.getByRole('button', { name: /cancel|no/i }).first().click().catch(() => {});
    await modal.waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
  }

  // ─── Archive / Delete employee + Past-employees drawer parity — NOT FOUND LIVE ──
  // (TC-EMPDET-133, 161, 167, 169, 185, 227, 259). The literal substrings
  // "delete" and "archive" do not appear anywhere on the Employee Details
  // screen; the Action column renders only a single "Edit" icon button for
  // both Current and Past employees, and clicking a Past-employee row's name
  // opens no dialog/aside at all (unlike Current employees).

  /** NOT FOUND LIVE — the Action column has no kebab/overflow menu, only a single "Edit" button. */
  async openRowActionMenu(row: Locator): Promise<Locator> {
    return this.page.getByRole('menu').first();
  }

  /** NOT FOUND LIVE — see note above. */
  getDeleteConfirmationModal(): Locator {
    return this.page.locator('[data-not-found-live="delete-employee-confirm-modal"]');
  }

  /** NOT FOUND LIVE — see note above. */
  async triggerDeleteEmployee(row: Locator): Promise<void> {
    await this.getDeleteConfirmationModal().waitFor({ state: 'visible', timeout: 1000 }).catch(() => {});
  }

  async confirmDelete(): Promise<void> {
    const modal = this.getDeleteConfirmationModal();
    await modal.getByRole('button', { name: /confirm|yes|delete|archive/i }).first().click().catch(() => {});
    await modal.waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
  }

  async cancelDelete(): Promise<void> {
    const modal = this.getDeleteConfirmationModal();
    await modal.getByRole('button', { name: /cancel|no/i }).first().click().catch(() => {});
    await modal.waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
  }

  /** NOT FOUND LIVE — clicking a Past-employee row's name opens no dialog/aside at all as of 2026-07-13. */
  getArchiveEmployeeDrawer(): Locator {
    return this.page.locator('[data-not-found-live="archive-employee-drawer"]');
  }

  /** NOT FOUND LIVE — see note above. */
  async openArchiveEmployeeDrawer(row: Locator): Promise<void> {
    await row.locator('button[data-variant="link"]').first().click().catch(() => {});
    await this.getArchiveEmployeeDrawer().waitFor({ state: 'visible', timeout: 1000 }).catch(() => {});
  }

  /** True if the given drawer exposes any edit/save affordance (should be false for the read-only Archive drawer). */
  async drawerHasEditAffordance(drawer: Locator): Promise<boolean> {
    const editControls = drawer.getByRole('button', { name: /^save$|^edit$/i });
    return editControls.first().isVisible().catch(() => false);
  }

  // ─── Role/security helpers (TC-EMPDET-210..219) ──

  /**
   * Attempt a privileged write via the API directly (used by role-enforcement/IDOR checks) —
   * generic helper so security specs don't hand-roll a fetch per case.
   */
  async attemptApiWrite(ctxPage: Page, method: 'post' | 'put' | 'patch' | 'delete', url: string, data: Record<string, unknown> = {}): Promise<number> {
    const response = await ctxPage.request[method](url, { data, failOnStatusCode: false });
    return response.status();
  }

  /** Attempt a scoped/out-of-scope GET (used by IDOR/RM-scope checks). */
  async attemptApiRead(ctxPage: Page, url: string): Promise<{ status: number; body: any | null }> {
    const response = await ctxPage.request.get(url, { failOnStatusCode: false });
    const body = response.ok() ? await response.json().catch(() => null) : null;
    return { status: response.status(), body };
  }

  // ─── PIP indicator (real; TC-EMPDET-260, 261, 262, 268-270, 278, 279, 284, 285, 287, 308, 311, 312,
  // 315) — GROUNDED (2026-07-13/14) against the live app, employee "Kashyap Bose" on page 1 of Employee
  // Details, Current tab, and RE-GROUNDED (2026-07-14) with a second live pass that corrected two
  // assumptions from the first pass (see below). Confirmed live DOM:
  //   - Outer wrapper: `<div aria-label="Leave & Compliance Details" data-state="closed">` wraps the
  //     avatar `<span role="button" tabindex="0">`. This wrapper/hover-card pattern is REUSED across
  //     several leave-compliance states, not just PIP — e.g. the same structure was also confirmed
  //     live rendering "NP" (Notice Period) for a different employee, with its own overlay classes
  //     (`bg-np-overlay-bg`/`border-badge-rose-border`) vs PIP's (`bg-pip-overlay-bg`/
  //     `border-badge-orange-border`). Wrapper PRESENCE ALONE therefore does not mean "has an active
  //     PIP" — every PIP-specific locator below additionally requires the overlay text to read "PIP".
  //   - Inside it, `<span aria-hidden="true">` renders the literal overlay text (e.g. "PIP" or "NP").
  //   - Hovering (or focus + Enter — confirmed keyboard-operable) opens a hover-card portalled to the
  //     body. CORRECTED (2026-07-14): the hover-card's own container carries NO distinguishing
  //     aria-label of its own (only the trigger wrapper does) — it renders a literal `<p>Leave &
  //     Compliance Details</p>` heading followed by the Status/Reason/Period/Days block, so it is
  //     matched below via that literal text, not an aria-label. Either way, nothing in the hover-card
  //     ever announces "PIP" as an accessible name — a real, worth-flagging accessibility gap.
  //   - Content is a 4-column grid: Status ("In PIP") | Reason ("—" placeholder when blank) | Period
  //     ("25 Jun – 10 Sep", en-dash, day+month only, no year) | Days ("58 Days Left"). CORRECTED
  //     (2026-07-14): confirmed live raw text is concatenated as a LABEL BLOCK followed by a VALUE
  //     BLOCK ("Status Reason Period Days In PIP — 25 Jun – 10 Sep 58 Days Left"), not
  //     label-immediately-followed-by-its-own-value as first assumed — field parsing below searches
  //     the whole raw string for each field's distinctive pattern instead of relying on label
  //     adjacency, so it works under either layout.
  //   - Advanced Filter panel's leave-status accordion (confirmed live label text "Leave & Status") has
  //     a real checkbox `id="filter-cb-leaveStatus-pip"`, `aria-label="PIP"`.

  /**
   * The per-row PIP wrapper — scoped to the "Leave & Compliance Details" wrapper AND requires its
   * overlay text to be exactly "PIP" (the same wrapper/hover-card structure is reused for other
   * leave-compliance states like "NP" — see class doc block above — so wrapper presence alone is not
   * sufficient). Absent entirely for employees with no active PIP.
   */
  getPipWrapper(row: Locator): Locator {
    return row.locator('[aria-label="Leave & Compliance Details"]').filter({
      has: this.page.locator('span[aria-hidden="true"]').filter({ hasText: /^\s*PIP\s*$/ }),
    });
  }

  /** The literal "PIP" overlay text span on the avatar — aria-hidden, so it never reaches assistive tech via its own text (see class doc block above). */
  getPipOverlayText(row: Locator): Locator {
    return row.locator('[aria-label="Leave & Compliance Details"] span[aria-hidden="true"]').filter({ hasText: /^\s*PIP\s*$/ });
  }

  /**
   * The hover-card content portalled to the document body. Matched by its literal
   * "Leave & Compliance Details" heading text plus its distinctive Status/Reason/Period fields
   * (the card itself carries no aria-label — see class doc block above); `.last()` picks the
   * innermost matching container since document order places ancestor `div`s before their children.
   */
  getPipHoverCard(): Locator {
    return this.page
      .locator('div')
      .filter({ hasText: 'Leave & Compliance Details' })
      .filter({ hasText: /status/i })
      .filter({ hasText: /period/i })
      .last();
  }

  /** Hover the PIP wrapper to open its hover-card and return the (possibly not-yet-visible) card locator. */
  async hoverPipIndicator(row: Locator): Promise<Locator> {
    await this.getPipWrapper(row).hover();
    const card = this.getPipHoverCard();
    await card.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return card;
  }

  /** Keyboard path: focus the PIP avatar trigger and press Enter to open the hover-card (confirmed live keyboard-operable). */
  async openPipHoverCardViaKeyboard(row: Locator): Promise<Locator> {
    const wrapper = this.getPipWrapper(row);
    const trigger = wrapper.getByRole('button').first();
    const hasButton = await trigger.count();
    await (hasButton > 0 ? trigger : wrapper).focus().catch(() => {});
    await this.page.keyboard.press('Enter');
    const card = this.getPipHoverCard();
    await card.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return card;
  }

  /** Raw text of the hover-card, for pattern-based Status/Reason/Period/Days extraction (no confirmed per-cell testids). */
  async getPipHoverCardText(card: Locator): Promise<string> {
    return (await card.textContent().catch(() => '')) ?? '';
  }

  /**
   * Parse the "Status" field value out of the hover-card's raw text (e.g. "In PIP"). Searches the
   * whole string for a known status phrase rather than assuming label/value adjacency (see class doc
   * block above) — and deliberately has NO leading word-boundary requirement, since the confirmed live
   * text is fully concatenated with zero separators between fields (e.g. "...DaysIn PIP—25 Jun...",
   * where "Days" and "In" are jammed directly together with no space).
   */
  parsePipStatus(cardText: string): string | null {
    const match = cardText.match(/(In\s+PIP|Completed|Cancelled|Canceled|Overdue|Active)\b/i);
    return match ? match[0].trim() : null;
  }

  /**
   * Parse the "Reason" field value (may be an em/en-dash placeholder when blank). Derived as
   * whatever text sits between the end of the Status phrase and the start of the Period date-range,
   * which is layout-agnostic (works whether the card renders label-then-value per field or a
   * label-block followed by a value-block).
   */
  parsePipReason(cardText: string): string | null {
    const periodMatch = cardText.match(/\d{1,2}\s+[A-Za-z]{3,}\s*[–—-]\s*\d{1,2}\s+[A-Za-z]{3,}/);
    if (!periodMatch || periodMatch.index === undefined) return null;
    const statusMatch = cardText.match(/(?:In\s+PIP|Completed|Cancelled|Canceled|Overdue|Active)\b/i);
    const afterStatusIdx = statusMatch && statusMatch.index !== undefined ? statusMatch.index + statusMatch[0].length : 0;
    const reasonRaw = cardText.slice(afterStatusIdx, periodMatch.index).trim();
    return reasonRaw.replace(/^Reason\s*/i, '').trim();
  }

  /** Parse the "Period" field's two dates ("25 Jun – 10 Sep", day+month only, no year) into real Date objects, inferring year from today. Searched directly against the whole raw string (layout-agnostic). */
  parsePipPeriod(cardText: string): { start: Date; end: Date } | null {
    const match = cardText.match(/(\d{1,2})\s+([A-Za-z]{3,})\s*[–—-]\s*(\d{1,2})\s+([A-Za-z]{3,})/);
    if (!match) return null;
    const [, startDay, startMon, endDay, endMon] = match;
    const year = new Date().getFullYear();
    const start = new Date(`${startDay} ${startMon} ${year}`);
    let end = new Date(`${endDay} ${endMon} ${year}`);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return null;
    // A PIP period never regresses within one cycle; if end < start it must roll into next year.
    if (end.getTime() < start.getTime()) end = new Date(`${endDay} ${endMon} ${year + 1}`);
    return { start, end };
  }

  /** Parse the "Days" field's numeric countdown (e.g. "58 Days Left" -> 58). Searched directly against the whole raw string (layout-agnostic); falls back to a bare "N Days" count if no "Left" suffix is present. */
  parsePipDaysLeft(cardText: string): number | null {
    const withLeft = cardText.match(/(\d+)\s*Days?\s*Left/i);
    if (withLeft) return parseInt(withLeft[1], 10);
    const bare = cardText.match(/(\d+)\s*Days?\b/i);
    return bare ? parseInt(bare[1], 10) : null;
  }

  /** Whole-day difference between a PIP end date and today (midnight-normalized), clamped at 0 — the expected "Days Left" value. Computed dynamically so assertions never go stale against a specific employee's fixed dates. */
  computeExpectedDaysLeft(end: Date): number {
    const today = new Date();
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endMidnight = new Date(end.getFullYear(), end.getMonth(), end.getDate());
    const diffMs = endMidnight.getTime() - todayMidnight.getTime();
    return Math.max(0, Math.round(diffMs / 86400000));
  }

  /** Whether a given date (midnight-normalized) is today — used for the inclusive Start/End boundary cases. */
  isToday(date: Date): boolean {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
  }

  /**
   * All currently-visible data rows that render a specifically-PIP overlay (not merely the shared
   * "Leave & Compliance Details" wrapper, which other leave-compliance states like "NP" also use —
   * see class doc block above).
   */
  getRowsWithActivePip(): Locator {
    return this.getDataRows().filter({
      has: this.page.locator('[aria-label="Leave & Compliance Details"] span[aria-hidden="true"]').filter({ hasText: /^\s*PIP\s*$/ }),
    });
  }

  /**
   * All currently-visible data rows that render a specifically-NP (Notice Period) overlay — the same
   * "Leave & Compliance Details" wrapper/hover-card pattern PIP uses (see class doc block above),
   * confirmed live for a different employee with its own overlay classes (`bg-np-overlay-bg`/
   * `border-badge-rose-border`). Added for TC-EMPDET-293 (PIP + Notice Period coexistence check).
   */
  getRowsWithActiveNoticePeriod(): Locator {
    return this.getDataRows().filter({
      has: this.page.locator('[aria-label="Leave & Compliance Details"] span[aria-hidden="true"]').filter({ hasText: /^\s*NP\s*$/ }),
    });
  }

  /** The PIP checkbox inside the Advanced Filter panel's "Leave & Status"-style accordion — confirmed live id + aria-label. */
  getPipFilterCheckbox(): Locator {
    const panel = this.getAdvancedFilterPanel();
    return panel.locator('#filter-cb-leaveStatus-pip').or(panel.getByRole('checkbox', { name: 'PIP' }));
  }

  /** Open the Advanced Filter panel (if needed) and expand the Leave/Status accordion, returning the PIP checkbox. */
  async openPipFilterCheckbox(): Promise<Locator> {
    const panel = this.getAdvancedFilterPanel();
    const isPanelOpen = await panel.isVisible().catch(() => false);
    if (!isPanelOpen) await this.openBasicFilterPanel();
    await this.expandAdvancedFilterSection(/leave/i);
    return this.getPipFilterCheckbox();
  }

  /** Toggle the PIP filter checkbox and apply via Save. Returns false if the checkbox is not present. */
  async togglePipFilter(): Promise<boolean> {
    const checkbox = await this.openPipFilterCheckbox();
    const visible = await checkbox.isVisible().catch(() => false);
    if (!visible) return false;
    await checkbox.click();
    await this.clickAdvancedFilterSave();
    return true;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // NEW (2026-08-19, manual-requirement-derived) — Full Employee Profile view
  // (Personal Information/Skills/Visa Information/Projects/PR Reviewer/Goals
  // sections), the LinkedIn field, "Login as Employee" impersonation, and the
  // project popup's Edit/Deallocate affordances. None of these have been
  // re-confirmed against a live DOM snapshot newer than the 2026-07-13/
  // 2026-08-18 grounding passes above (which found no "note"/"delete"/
  // "archive"/"deallocat" text live, and a 2-section-only "View Project
  // Details" popover with no Edit/Deallocate control) — every locator below
  // is intentionally generic (role/text, with .or() fallbacks) rather than a
  // guessed testid, per qa-conventions' grounding rule. Callers MUST
  // isVisible()-guard and test.skip() gracefully when a control isn't found,
  // exactly like the existing NOT FOUND LIVE stubs above — treat these as
  // re-opening a prior "not found" finding for a fresh check, not as an
  // assumption that the feature now exists.
  // ─────────────────────────────────────────────────────────────────────────

  /** Generic "View Employee Profile" trigger inside the (real) employee-details side drawer. */
  getViewEmployeeProfileTrigger(drawer: Locator): Locator {
    return drawer.getByRole('link', { name: /view (employee )?profile/i })
      .or(drawer.getByRole('button', { name: /view (employee )?profile/i }));
  }

  /** Open the full Employee Profile view from an already-open employee-details drawer. Returns the profile view container (resolves to nothing if unconfirmed). */
  async openEmployeeProfileFromDrawer(drawer: Locator): Promise<Locator> {
    await this.getViewEmployeeProfileTrigger(drawer).first().click().catch(() => {});
    const view = this.getEmployeeProfileView();
    await view.waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
    return view;
  }

  /**
   * Attempt to open a row's full Employee Profile view directly — used for Past-employee rows,
   * where clicking the name link has historically opened no dialog/aside at all (see the
   * 2026-07-13 grounding above). Tries a generic "View Profile" row action first, falling back to
   * the same side-drawer path used for active employees.
   */
  async openEmployeeProfileFromRow(row: Locator): Promise<Locator> {
    const directTrigger = row.getByRole('button', { name: /view profile/i }).or(row.getByRole('link', { name: /view profile/i }));
    if (await directTrigger.first().isVisible().catch(() => false)) {
      await directTrigger.first().click().catch(() => {});
    } else {
      await this.openEmployeeDetailsDrawer(row);
      const drawer = this.getEmployeeDetailsSideDrawer();
      if (await drawer.isVisible().catch(() => false)) {
        return this.openEmployeeProfileFromDrawer(drawer);
      }
    }
    const view = this.getEmployeeProfileView();
    await view.waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
    return view;
  }

  /** The full Employee Profile view/page container — matched generically since no confirmed testid/route exists yet. */
  getEmployeeProfileView(): Locator {
    return this.page.getByRole('main').filter({ hasText: /personal information/i })
      .or(this.page.getByText(/personal information/i).locator('..').locator('..'))
      .first();
  }

  /** A named section within the profile view (Personal Information / Skills / Visa Information / Projects / PR Reviewer / Goals). */
  getProfileSection(view: Locator, label: string): Locator {
    return view.locator('section, [role="region"], div').filter({ hasText: new RegExp(`^${label}`, 'i') }).first();
  }

  /** Enumerate every actionable control (button/link) visible on the profile view — for the "no edit affordance beyond impersonation" read-only check on Past-employee profiles. */
  getProfileActionableControls(view: Locator): Locator {
    return view.getByRole('button').or(view.getByRole('link'));
  }

  // ─── Personal Information ────────────────────────────────────────────────

  getProfileEditButton(view: Locator): Locator {
    return view.getByRole('button', { name: /^edit$/i }).first();
  }

  getProfileSaveButton(view: Locator): Locator {
    return view.getByRole('button', { name: /^save$/i }).first();
  }

  /** Any field inside the Personal Information section rendering a literal "undefined"/"null" leak instead of a value or an explicit empty-state placeholder. */
  getProfileUndefinedLeak(view: Locator): Locator {
    return this.getProfileSection(view, 'Personal Information').getByText(/undefined|\bnull\b/i);
  }

  // ─── LinkedIn field ──────────────────────────────────────────────────────

  getProfileLinkedInField(view: Locator): Locator {
    return view.getByLabel(/linkedin/i).or(view.getByPlaceholder(/linkedin/i)).or(view.getByRole('textbox', { name: /linkedin/i }));
  }

  async setProfileLinkedInUrl(view: Locator, url: string): Promise<boolean> {
    const field = this.getProfileLinkedInField(view);
    const visible = await field.isVisible().catch(() => false);
    if (visible) await field.fill(url);
    return visible;
  }

  getProfileLinkedInLink(view: Locator): Locator {
    return view.getByRole('link', { name: /linkedin/i });
  }

  // ─── Skills section (Primary/Secondary classification display + edit) ──

  getProfileSkillsClassificationLabel(view: Locator, classification: 'Primary' | 'Secondary'): Locator {
    return this.getProfileSection(view, 'Skills').getByText(new RegExp(`^${classification}`, 'i'));
  }

  /** The Primary/Secondary classification toggle for a named skill within the profile's Skills section. */
  getProfileSkillToggle(view: Locator, skillName: string): Locator {
    const skillRow = this.getProfileSection(view, 'Skills').getByText(skillName).locator('..');
    return skillRow.getByRole('switch').or(skillRow.getByRole('button', { name: /primary|secondary/i }));
  }

  /** Toggle a skill's Primary/Secondary classification from the profile's Skills section. Returns false if the toggle isn't present. */
  async toggleProfileSkillClassification(view: Locator, skillName: string): Promise<boolean> {
    const toggle = this.getProfileSkillToggle(view, skillName);
    const visible = await toggle.isVisible().catch(() => false);
    if (visible) await toggle.click();
    return visible;
  }

  // ─── Visa Information (add/edit/delete) ─────────────────────────────────

  getProfileVisaSection(view: Locator): Locator {
    return this.getProfileSection(view, 'Visa Information');
  }

  getAddVisaButton(view: Locator): Locator {
    return this.getProfileVisaSection(view).getByRole('button', { name: /add/i });
  }

  getVisaDialog(): Locator {
    return this.page.getByRole('dialog').filter({ hasText: /visa/i });
  }

  async openAddVisaDialog(view: Locator): Promise<Locator> {
    await this.getAddVisaButton(view).click().catch(() => {});
    const dialog = this.getVisaDialog();
    await dialog.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return dialog;
  }

  async fillVisaFields(dialog: Locator, data: { country?: string; type?: string; number?: string; expiry?: string }): Promise<void> {
    if (data.country) await dialog.getByLabel(/country/i).fill(data.country).catch(() => {});
    if (data.type) await dialog.getByLabel(/visa type/i).fill(data.type).catch(() => {});
    if (data.number) await dialog.getByLabel(/number/i).fill(data.number).catch(() => {});
    if (data.expiry) await dialog.locator('input[type="date"]').first().fill(data.expiry).catch(() => {});
  }

  async saveVisaDialog(dialog: Locator): Promise<void> {
    const btn = dialog.getByRole('button', { name: /^save$/i });
    if (await btn.isVisible().catch(() => false)) {
      await btn.click();
      await dialog.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    }
  }

  getVisaRecordRow(view: Locator, identifier: string): Locator {
    return this.getProfileVisaSection(view).getByText(identifier).locator('..');
  }

  getEditVisaButton(row: Locator): Locator {
    return row.getByRole('button', { name: /edit/i });
  }

  getDeleteVisaButton(row: Locator): Locator {
    return row.getByRole('button', { name: /delete|remove/i });
  }

  // ─── Projects section (read-only) + PR Reviewer ─────────────────────────

  getProfileProjectsSection(view: Locator): Locator {
    return this.getProfileSection(view, 'Projects');
  }

  /** Confirmed via figma-employee-module-design-brief.md node 26709:253255: literal dialog title "PR Reviewer" with Project/Frequency columns. */
  getPRReviewerDialog(): Locator {
    return this.page.getByRole('dialog', { name: 'PR Reviewer' });
  }

  async openPRReviewerDialogFromProfile(view: Locator): Promise<Locator> {
    const trigger = this.getProfileSection(view, 'PR Reviewer').or(view.getByText(/pr reviewer/i)).first();
    await trigger.click().catch(() => {});
    const dialog = this.getPRReviewerDialog();
    await dialog.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return dialog;
  }

  getPRReviewerTable(dialog: Locator): Locator {
    return dialog.getByRole('table').or(dialog.locator('table')).first();
  }

  // ─── Goals section ───────────────────────────────────────────────────────

  getProfileGoalsSection(view: Locator): Locator {
    return this.getProfileSection(view, 'Goals');
  }

  // ─── "Login as Employee" impersonation ──────────────────────────────────

  getLoginAsEmployeeButton(view: Locator): Locator {
    return view.getByRole('button', { name: /login as employee|view as employee|impersonate/i })
      .or(view.getByRole('link', { name: /login as employee|view as employee|impersonate/i }));
  }

  /** Click "Login as Employee" from the profile view and wait for the impersonation banner. Returns false if the control isn't present. */
  async startImpersonation(view: Locator): Promise<boolean> {
    const btn = this.getLoginAsEmployeeButton(view);
    const visible = await btn.first().isVisible().catch(() => false);
    if (!visible) return false;
    await btn.click().catch(() => {});
    await this.getImpersonationBanner().waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
    return true;
  }

  getImpersonationBanner(): Locator {
    return this.page.getByText(/viewing as|impersonating|logged in as/i).first();
  }

  getExitImpersonationButton(): Locator {
    return this.page.getByRole('button', { name: /exit impersonation|return to admin|back to admin|stop viewing/i });
  }

  /** Click the exit-impersonation control and wait for the banner to disappear. Returns false if the control isn't present. */
  async exitImpersonation(): Promise<boolean> {
    const btn = this.getExitImpersonationButton();
    const visible = await btn.first().isVisible().catch(() => false);
    if (!visible) return false;
    await btn.click().catch(() => {});
    await this.getImpersonationBanner().waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
    return true;
  }

  // ─── Project popup Edit / Deallocate (2026-08-19 re-raised requirement) ─
  // Re-opens the 2026-07-13 "NOT FOUND LIVE" finding for a fresh check (see class doc block
  // above) rather than assuming the feature still doesn't exist — callers must isVisible()-guard.

  getProjectPopupEditSection(sheet: Locator): Locator {
    return sheet.getByRole('button', { name: /^edit$/i }).or(sheet.locator('[data-slot="edit-section"]')).first();
  }

  getProjectPopupAllocationEndDateField(sheet: Locator): Locator {
    return sheet.getByLabel(/allocation end date|end date/i).or(sheet.locator('input[type="date"]').last());
  }

  async setProjectPopupEndDate(sheet: Locator, date: string): Promise<boolean> {
    const field = this.getProjectPopupAllocationEndDateField(sheet);
    const visible = await field.isVisible().catch(() => false);
    if (visible) await field.fill(date);
    return visible;
  }

  async saveProjectPopupEdit(sheet: Locator): Promise<void> {
    const btn = sheet.getByRole('button', { name: /^save$/i });
    if (await btn.isVisible().catch(() => false)) {
      await btn.click();
    }
  }

  getProjectPopupDeallocateButton(sheet: Locator): Locator {
    return sheet.getByRole('button', { name: /^deallocate$/i });
  }

  /** Click the popup's Deallocate button and return whatever confirmation/detail popup opens, if any. */
  async clickProjectPopupDeallocate(sheet: Locator): Promise<Locator> {
    await this.getProjectPopupDeallocateButton(sheet).click().catch(() => {});
    const popup = this.page.getByRole('alertdialog').or(this.page.getByRole('dialog')).last();
    await popup.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return popup;
  }

  /** Best-effort fetch of a specific employee's allocation records via API, for UI/API parity checks (endpoint shape unconfirmed). */
  async fetchAllocationRecord(employeeIdentifier: string): Promise<any | null> {
    try {
      const response = await this.page.request.get(`/api/employees/${encodeURIComponent(employeeIdentifier)}/allocations`, { failOnStatusCode: false });
      if (!response.ok()) return null;
      return await response.json().catch(() => null);
    } catch {
      return null;
    }
  }

  // ─── Notification center (deallocation notifications) ──────────────────

  getNotificationBell(): Locator {
    return this.page.getByRole('button', { name: /notification/i }).or(this.page.locator('[aria-label*="notification" i]')).first();
  }

  async openNotificationCenter(): Promise<Locator> {
    await this.getNotificationBell().click().catch(() => {});
    const center = this.page.getByRole('menu').or(this.page.getByRole('dialog')).filter({ hasText: /notification/i }).first();
    await center.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return center;
  }

  // ─── Edit Drawer field enumeration (TC-EMPDET-322) ──────────────────────

  /** Every input/textarea/combobox/select rendered inside the (already-open) Edit Drawer, for enumerating editable vs read-only fields. */
  getAllDrawerFieldControls(): Locator {
    return this.editDrawer.locator('input, textarea, [role="combobox"], select');
  }

  // ─── Column sort direction indicator (TC-EMPDET-324) ────────────────────

  /** A column header's current sort direction, read from its `aria-sort` attribute (null if not present/applicable). */
  async getColumnSortDirection(header: Locator): Promise<string | null> {
    return header.getAttribute('aria-sort').catch(() => null);
  }

  // ─────────────────────────────────────────────────────────────────────────
  // GROUNDED (2026-08-20) — new "Cohort" and "Employee Origin" Advanced Filter accordion
  // sections + Employee Profile fields, confirmed live via reports/knowledge-base/dom-
  // snapshots/EMPDET.json's "after-click-open-advanced-filter" state: the panel's accordion
  // button list now includes exactly `button "Employee Origin"` and `button "Cohort"` (among
  // many other pre-existing sections), and a `textbox "Search filters"` (placeholder "Search
  // filters...") at the top of the panel. expandAdvancedFilterSection() already handles any
  // accordion label generically, so no new "expand" method is needed for these two — only the
  // option-enumeration/selection, grid-cell, and search-box helpers below, which were genuinely
  // missing. The Employee Profile Personal-Information fields below remain GENERIC/UNCONFIRMED,
  // same caveat as getEmployeeProfileView()/getProfileSection() above — see their comments.
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Checkbox options belonging to the currently-expanded advanced-filter accordion section.
   * Scoped to the whole panel (not a specific section) on the same assumption already relied on
   * by selectDepartmentFilter()'s combobox lookup above: Radix Accordion unmounts a section's
   * content while collapsed, so only the just-expanded section's checkboxes exist in the DOM at
   * a time. Used for Cohort/Employee Origin, which render as checkbox lists (per the requirement's
   * own automation hint) rather than the combobox shape used by Departments/Designation.
   */
  getExpandedAccordionSectionOptions(): Locator {
    return this.getAdvancedFilterPanel().getByRole('checkbox');
  }

  /** Enumerate the visible option labels of the currently-expanded advanced-filter accordion section. */
  async getExpandedAccordionSectionOptionLabels(): Promise<string[]> {
    const options = this.getExpandedAccordionSectionOptions();
    const count = await options.count();
    const labels: string[] = [];
    for (let i = 0; i < count; i++) {
      const option = options.nth(i);
      const ariaLabel = await option.getAttribute('aria-label').catch(() => null);
      if (ariaLabel && ariaLabel.trim()) {
        labels.push(ariaLabel.trim());
        continue;
      }
      const text = (await option.locator('..').textContent().catch(() => '')) ?? '';
      if (text.trim()) labels.push(text.trim());
    }
    return labels;
  }

  /**
   * Check (select) an option by its exact visible text inside an already-expanded advanced-filter
   * accordion section — pair with expandAdvancedFilterSection() then clickAdvancedFilterSave()/
   * clickAdvancedFilterCancel(). Returns false if the option checkbox isn't found/visible.
   */
  async checkAdvancedFilterOption(optionLabel: string): Promise<boolean> {
    const panel = this.getAdvancedFilterPanel();
    const checkbox = panel.getByRole('checkbox', { name: optionLabel });
    const visible = await checkbox.isVisible().catch(() => false);
    if (visible) await checkbox.check().catch(() => checkbox.click().catch(() => {}));
    return visible;
  }

  /** Convenience: expand a section then check one of its options. Does not Save/Cancel — caller decides. Returns false if the option isn't found. */
  async selectAdvancedFilterOption(sectionLabel: string | RegExp, optionLabel: string): Promise<boolean> {
    await this.expandAdvancedFilterSection(sectionLabel);
    return this.checkAdvancedFilterOption(optionLabel);
  }

  /**
   * Resolve a grid column's 0-based cell index by its header label — works for any column,
   * including ones only just toggled visible via Table options (Cohort/Employee Origin have no
   * fixed position — "in a reorderable position like any other column" per the requirement — so
   * a hand-guessed fixed .nth() index would be unsafe). Returns null if no header matches.
   */
  async getColumnIndexByLabel(columnLabel: string | RegExp): Promise<number | null> {
    const headers = this.employeeGrid.locator('th');
    const count = await headers.count();
    const pattern = typeof columnLabel === 'string' ? new RegExp(`^${columnLabel}`, 'i') : columnLabel;
    for (let i = 0; i < count; i++) {
      const text = (await headers.nth(i).textContent().catch(() => '')) ?? '';
      if (pattern.test(text.trim())) return i;
    }
    return null;
  }

  /** Read a row's cell value for a named grid column (by header label), e.g. 'Cohort'/'Employee Origin'. Returns null if the column isn't found/visible. */
  async getRowCellByColumnLabel(row: Locator, columnLabel: string | RegExp): Promise<string | null> {
    const index = await this.getColumnIndexByLabel(columnLabel);
    if (index === null) return null;
    const cell = row.getByRole('cell').nth(index);
    return (await cell.textContent().catch(() => null))?.trim() ?? null;
  }

  /**
   * The Advanced Filter panel's "Search filters" textbox — GROUNDED (2026-08-20) via
   * dom-snapshots/EMPDET.json: `textbox "Search filters"` with placeholder "Search filters...".
   */
  getAdvancedFilterSearchInput(): Locator {
    return this.getAdvancedFilterPanel().getByPlaceholder('Search filters...');
  }

  /** Fill the panel's "Search filters" textbox to narrow the visible accordion section list. */
  async searchAdvancedFilterSections(query: string): Promise<void> {
    await this.getAdvancedFilterSearchInput().fill(query);
  }

  /** Every accordion section trigger button currently rendered inside the (already-open) Advanced Filter panel — reflects the live filtering applied by the "Search filters" textbox. */
  getVisibleAdvancedFilterSectionButtons(): Locator {
    return this.getAdvancedFilterPanel().locator('button[aria-expanded]');
  }

  /**
   * Cohort / Employee Origin fields within the Profile view's Personal Information section —
   * GENERIC/UNCONFIRMED (2026-08-20), same caveat as getEmployeeProfileView()/getProfileSection()
   * above: no confirmed testid/route exists for this view, and whether these fields exist here at
   * all is an open product-gap question (TC-EMPDET-387/397). Matches the smallest container whose
   * text starts with the field's label (`.last()` picks the most deeply-nested match in document
   * order, i.e. the tightest wrapper, not the whole Personal Information section) so the adjacent
   * value text is captured too. Callers testing FOR the gap must assert directly (e.g.
   * `await expect(field, '...').toBeVisible()`) and let a genuine absence fail the test — that
   * failure IS the reportable product-gap signal. Do not isVisible()-guard this away.
   */
  getProfileCohortField(view: Locator): Locator {
    return this.getProfileSection(view, 'Personal Information')
      .locator('div, li, section, dl, p')
      .filter({ hasText: /^cohort\b/i })
      .last();
  }

  getProfileEmployeeOriginField(view: Locator): Locator {
    return this.getProfileSection(view, 'Personal Information')
      .locator('div, li, section, dl, p')
      .filter({ hasText: /^employee origin\b/i })
      .last();
  }

  /** Read a Personal-Information field's value text, stripping a leading "<label>[:]" prefix. Returns null if the field container isn't visible. */
  async getProfileFieldValueText(field: Locator, label: string): Promise<string | null> {
    const visible = await field.isVisible().catch(() => false);
    if (!visible) return null;
    const text = (await field.textContent().catch(() => '')) ?? '';
    const stripped = text.replace(new RegExp(`^\\s*${label}\\s*:?\\s*`, 'i'), '').trim();
    return stripped || null;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // GROUNDED (2026-09-28) — Long-Running Allocations (TC-PMPROJ-097..194). Live probes as PMO:
  //   - Availability % cell: `<button aria-label="Availability details">`; hover opens a Radix
  //     tooltip (role=tooltip) "Availability Details / Upcoming Deallocations / … / Long-Running
  //     Allocations / <alias> Running since DD Mon YYYY". Scroll it into view and move the mouse
  //     away first, or the hover does not register.
  //   - Projects column: project chips are `[role=button][aria-label="<alias>"]`; an LR project chip
  //     carries a nested `[aria-label="Long-Running"]` ("LR"). A hidden measurement copy of every chip
  //     exists and overflowing chips collapse into "+N" — only `:visible` matches are real.
  //   - Side panel (click the name link): collapsible "Projects (N)" (expanded by default, table
  //     PROJECT NAME | SINCE, LR badge next to the alias), "Past Projects (N)", …
  //   - Advanced filter → accordion "Allocation" → role=checkbox buttons with ids
  //     filter-cb-allocationStage-<VALUE> and aria-label = option label; Save → URL gains
  //     adv_allocationStage=<VALUE> and a badge chip with "Remove Allocation filter <label>".
  //   - Employee (empPage) is redirected to /unauthorized ("Access Denied").
  // ─────────────────────────────────────────────────────────────────────────

  // The availability card is a Radix popper (hover card) — NOT role=tooltip (confirmed via failure
  // screenshot 2026-09-29: card visible, getByRole('tooltip') never resolved).
  readonly employeeTooltip: Locator = this.page.locator('[data-radix-popper-content-wrapper]').or(this.page.getByRole('tooltip'))
    .filter({ hasText: 'Availability Details' }).first();
  /** Generic small tooltip (e.g. the LR badge's) — Radix role=tooltip node. */
  readonly badgeTooltip: Locator = this.page.getByRole('tooltip').first();
  readonly listResultsSummary: Locator = this.page.getByText(/^Showing \d+ - \d+ of [\d,]+ results$/).first();
  readonly unableToConnectText: Locator = this.page.getByText(/Unable to connect/i).first();

  private static employeesCache = new Map<string, any[]>();

  /** Open /employee[?query], retrying dev's transient "Unable to connect" page; resolves on list, empty list or Access Denied. */
  async gotoEmployeeList(query = ''): Promise<void> {
    for (let attempt = 0; attempt < 3; attempt++) {
      if (attempt === 0) await this.page.goto(`/employee${query}`, { waitUntil: 'domcontentloaded' });
      else await this.page.reload({ waitUntil: 'domcontentloaded' });
      const outcome = await Promise.race([
        this.listResultsSummary.waitFor({ state: 'visible', timeout: 40_000 }).then(() => 'ready'),
        this.getEmptyState().waitFor({ state: 'visible', timeout: 40_000 }).then(() => 'ready'),
        this.pageHeading('Access Denied').waitFor({ state: 'visible', timeout: 40_000 }).then(() => 'ready'),
        this.unableToConnectText.waitFor({ state: 'visible', timeout: 40_000 }).then(() => 'retry'),
      ]).catch(() => 'timeout');
      if (outcome === 'ready') return;
    }
  }

  /** The list row of one employee, matched on the exact name link. */
  employeeRow(name: string): Locator {
    return this.page.locator('table tbody tr').filter({
      has: this.page.locator('button[data-variant="link"]').getByText(name, { exact: true }),
    }).first();
  }

  /** Search the list by name and wait for the matching API response and row. */
  async searchForEmployee(name: string): Promise<Locator> {
    await Promise.all([
      this.page.waitForResponse(r => /\/api\/v1\/employees\?/.test(r.url()) && r.url().includes('search='), { timeout: 30_000 }).catch(() => null),
      this.searchInput.fill(name),
    ]);
    const row = this.employeeRow(name);
    await row.waitFor({ state: 'visible', timeout: 30_000 });
    return row;
  }

  availabilityDetailsButton(row: Locator): Locator {
    return row.getByRole('button', { name: 'Availability details' });
  }

  /** Hover a row's "Availability details" icon and return the tooltip text (whitespace-normalised). */
  async readAvailabilityTooltip(row: Locator): Promise<string> {
    const btn = this.availabilityDetailsButton(row);
    await this.page.mouse.move(0, 0);
    await btn.scrollIntoViewIfNeeded();
    await btn.hover();
    await this.employeeTooltip.waitFor({ state: 'visible', timeout: 8_000 });
    return (await this.employeeTooltip.innerText()).replace(/\s+/g, " ").trim();
  }

  /** Visible LR badges inside a scope (row, drawer, whole table). */
  visibleLrBadges(scope: Locator): Locator {
    return scope.locator('[aria-label="Long-Running"]:visible');
  }

  /** A visible project chip (by alias) in a list row's Projects column. */
  projectChip(row: Locator, alias: string): Locator {
    // 6.9.0 chips are native <button aria-label> (no explicit role attr) — match both forms.
    return row.locator(`:is([role="button"], button)[aria-label="${alias.replace(/"/g, '\\"')}"]:visible`);
  }

  /** Open the employee side panel from a row and wait for it (throws if it never opens). */
  async openEmployeeSidePanel(row: Locator): Promise<Locator> {
    await row.locator('button[data-variant="link"]').first().click();
    const drawer = this.getEmployeeDetailsSideDrawer();
    await drawer.waitFor({ state: 'visible', timeout: 15_000 });
    await drawer.locator('[data-slot="collapsible-trigger"]').filter({ hasText: /^Projects \(\d+\)/ }).first()
      .waitFor({ state: 'visible', timeout: 15_000 });
    return drawer;
  }

  /** Trigger of a side-panel collapsible section ("Projects (N)", "Past Projects (N)", ...). */
  sidePanelSectionTrigger(drawer: Locator, label: RegExp): Locator {
    return drawer.locator('[data-slot="collapsible-trigger"]').filter({ hasText: label }).first();
  }

  /** Rows of the side panel's "Projects (N)" section (the collapsible whose trigger starts with "Projects ("). */
  sidePanelProjectRows(drawer: Locator): Locator {
    return drawer.locator('[data-slot="collapsible"]')
      .filter({ has: this.page.locator('[data-slot="collapsible-trigger"]').filter({ hasText: /^Projects \(\d+\)/ }) })
      .locator('table tbody tr');
  }

  /** Rows of the side panel's "Past Projects (N)" section (expand it first). */
  sidePanelPastProjectRows(drawer: Locator): Locator {
    return drawer.locator('[data-slot="collapsible"]')
      .filter({ has: this.page.locator('[data-slot="collapsible-trigger"]').filter({ hasText: /^Past Projects \(\d+\)/ }) })
      .locator('table tbody tr');
  }

  /** Accordion trigger of the advanced-filter "Allocation" group (exact — "Remaining Allocation" must not match). */
  allocationAccordion(): Locator {
    return this.getAdvancedFilterPanel().locator('button[aria-expanded]').filter({ hasText: /^Allocation(\s*\d+)?$/ }).first();
  }

  allocationStageCheckbox(stage: AllocationStage): Locator {
    return this.getAdvancedFilterPanel().locator(`[id="filter-cb-allocationStage-${stage}"]`);
  }

  allocationStageLabel(stage: AllocationStage): Locator {
    return this.page.locator(`label[for='filter-cb-allocationStage-${stage}']`);
  }

  /** Open the advanced filter and expand the Allocation group. */
  async openAllocationFilterGroup(): Promise<void> {
    if (!(await this.getAdvancedFilterPanel().isVisible().catch(() => false))) await this.openAdvancedFilterPanel();
    const acc = this.allocationAccordion();
    if ((await acc.getAttribute('aria-expanded')) !== 'true') await acc.click();
    await this.allocationStageCheckbox('LONG_RUNNING').waitFor({ state: 'visible', timeout: 10_000 });
  }

  /** Tick exactly `stages` in the Allocation group (unticking the rest) without saving. */
  async setAllocationStages(stages: AllocationStage[]): Promise<void> {
    await this.openAllocationFilterGroup();
    for (const stage of Object.keys(ALLOCATION_STAGE_LABELS) as AllocationStage[]) {
      const cb = this.allocationStageCheckbox(stage);
      const checked = (await cb.getAttribute('aria-checked')) === 'true';
      if (checked !== stages.includes(stage)) await this.allocationStageLabel(stage).click();
    }
  }

  /** Save the advanced filter and wait for the employees refetch; returns that response's total/items/url. */
  async saveAdvancedFilterAndWait(): Promise<{ total: number | null; items: any[]; url: string }> {
    const [res] = await Promise.all([
      this.page.waitForResponse(r => /\/api\/v1\/employees\?/.test(r.url()) && r.request().method() === 'GET', { timeout: 40_000 }).catch(() => null),
      this.getAdvancedFilterPanel().getByRole('button', { name: 'Save', exact: true }).click(),
    ]);
    await this.listResultsSummary.or(this.getEmptyState()).first().waitFor({ state: 'visible', timeout: 30_000 });
    const body = res ? await res.json().catch(() => null) : null;
    return { total: body?.data?.total ?? null, items: body?.data?.items ?? [], url: res?.url() ?? '' };
  }

  /** Apply exactly these Allocation stages via the UI; returns the resulting employees response summary. */
  async applyAllocationStages(stages: AllocationStage[]): Promise<{ total: number | null; items: any[]; url: string }> {
    await this.setAllocationStages(stages);
    return this.saveAdvancedFilterAndWait();
  }

  /** The filter chip's remove button for an Allocation option label. */
  allocationChipRemoveButton(label: string): Locator {
    return this.page.getByRole('button', { name: `Remove Allocation filter ${label}` });
  }

  /** The filter chip for an Allocation option label. */
  allocationChip(label: string): Locator {
    return this.page.locator('[data-slot="badge"]').filter({ has: this.allocationChipRemoveButton(label) });
  }

  /** Parse "Showing a - b of N results" → N; null when not rendered. */
  async readListTotal(): Promise<number | null> {
    if (!(await this.listResultsSummary.isVisible().catch(() => false))) return null;
    return this.parseResultCountTotal(await this.listResultsSummary.innerText());
  }

  // ─── Employees API (same session cookies) ────────────────────────────────

  async fetchEmployeesApi(opts: { page?: number; limit?: number; search?: string; filters?: Record<string, unknown>; timeFrame?: string; sortBy?: string; sortOrder?: 'asc' | 'desc' } = {}): Promise<ApiResult> {
    const q = [`page=${opts.page ?? 1}`, `limit=${opts.limit ?? 100}`, `timeFrame=${opts.timeFrame ?? '15d'}`];
    if (opts.sortBy) q.push(`sortBy=${opts.sortBy}`, `sortOrder=${opts.sortOrder ?? 'desc'}`);
    if (opts.search) q.push(`search=${encodeURIComponent(opts.search)}`);
    if (opts.filters) q.push(filtersParam(opts.filters));
    return apiGet(this.page, `/api/v1/employees?${q.join('&')}`);
  }

  /**
   * Every employee the session can see for a filter (walks all pages at limit=300). Cached per
   * worker under `cacheKey` (e.g. the role) because a full PMO scan is ~13 heavy requests and
   * several boundary cases need the same snapshot.
   */
  async fetchAllEmployees(filters: Record<string, unknown> | undefined, cacheKey: string): Promise<any[]> {
    const key = `${cacheKey}|${JSON.stringify(filters ?? {})}`;
    const hit = EmployeeDetailsPage.employeesCache.get(key);
    if (hit) return hit;
    const items: any[] = [];
    for (let p = 1; p < 100; p++) {
      const { status, body } = await this.fetchEmployeesApi({ page: p, limit: 300, filters });
      if (status !== 200) throw new Error(`GET /api/v1/employees page ${p} → ${status}`);
      items.push(...(body?.data?.items ?? []));
      if (p >= (body?.data?.totalPages ?? 1)) break;
    }
    EmployeeDetailsPage.employeesCache.set(key, items);
    return items;
  }

  /**
   * First employee (scanning up to `maxPages` API pages of 100) matching `predicate` — used to pick
   * live test subjects instead of hardcoding names that move as dates advance.
   */
  async findEmployee(predicate: (e: any) => boolean, filters?: Record<string, unknown>, maxPages = 3): Promise<any | null> {
    for (let p = 1; p <= maxPages; p++) {
      const { status, body } = await this.fetchEmployeesApi({ page: p, limit: 100, filters });
      if (status !== 200) return null;
      const hit = (body?.data?.items ?? []).find(predicate);
      if (hit) return hit;
      if (p >= (body?.data?.totalPages ?? 1)) break;
    }
    return null;
  }
}
