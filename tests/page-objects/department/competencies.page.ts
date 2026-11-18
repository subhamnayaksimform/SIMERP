import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

/**
 * Competencies (TC-DEPTCMP-*) — Department > Competencies sub-feature (nav code DEPTCMP).
 *
 * GROUNDING NOTE: originally generated without live-browser/DOM access, and against the WRONG
 * route (`/department/competencies` — a guess from the req doc's nav table, which 404s). A live
 * probe found the real route is `/competencies` (no `/department` prefix at all — reached via
 * clicking the "Department" sidebar group, which expands to "Department Settings" + "Competencies"
 * as sibling links, both living at top-level paths). The real Add Competency panel is genuinely
 * grounded now: Department / "Goal/ Competency Name" (not just "Goal" — label text corrected) /
 * Target Members / Select Year (confirmed real and editable — resolves the req doc's own open
 * question about year-editability) / No of Employees / Status (Not Started/In Progress/Completed/
 * **Delayed** — a 4th value not in the original spec) / Priority / Description. The listing is a
 * real semantic `<table>` with columns Goal/Competency Name | Target Members | Progress | Status |
 * Priority | Allocated | Action, matching the sibling Goals table's collision risk with the
 * persistent sidebar `role="list"` — see `competenciesListing` below.
 *
 * Toast/confirmation-dialog primitives are intentionally NOT redefined here — `getSuccessToast()`,
 * `getErrorToast()`, `getConfirmDialog()`, `confirmAction()`, `cancelAction()` are inherited from
 * `BasePage` and reused as-is for the Delete Competency confirmation flow (businessRules:
 * "confirmation step before executing" — existence unconfirmed per req doc, see Unverified
 * Selectors in the output report).
 *
 * A Competency has no independent unique "name" field of its own in the source — its identity is
 * the Department + Goal combination it is linked to (the "Competency Name" column is understood to
 * be the linked Goal's name). Because Competencies tests cannot create new Goals (that's the
 * EMPGOL/Goals module's job) and only two seeded test accounts exist, most flows here resolve
 * Department/Goal defensively via "first available option" helpers rather than depending on
 * specific seeded names — mirroring the sibling Skills/Goals pages' `selectFirstAvailableDepartment`
 * / `addFirstAvailableEmployees` convention.
 */
export class CompetenciesPage extends BasePage {
  // ─── Competencies shell / listing ────────────────────────────────────────
  /** Tab strip shared with Department Settings within the same shell. Unverified Selector — exact tab markup not specified. */
  readonly competenciesTab: Locator;

  /** Verbatim page heading: "Competencies Listing". */
  readonly competenciesListingHeading: Locator;

  /** The Competencies Listing table/grid itself. Unverified Selector — exact row/column markup not specified. */
  readonly competenciesListing: Locator;

  /** "Add competency" action — verbatim: `Add competency`. */
  readonly addCompetencyBtn: Locator;

  /** Generic empty-state text shown when the listing has no matching records. Unverified Selector — exact copy not specified. */
  readonly emptyStateText: Locator;

  /** Top-level Department filter/selector for the Competencies Listing (distinct from the Add Competency panel's own Department dropdown). Unverified Selector — exact control (dropdown vs. tabs vs. sidebar list) not specified. */
  readonly departmentFilterSelector: Locator;

  /** "Select Year" filter on the Competencies Listing — ground-truth confirmed real and editable
   * (resolves the requirement doc's own open question about year-editability). */
  readonly yearFilterSelector: Locator;

  // ─── Add/Edit Competency panel — verbatim field labels ──────────────────
  /** Panel container — scoped by the verbatim field label "No of Employees" (a distinctive combination unlikely to appear elsewhere on the page). Unverified Selector: dialog/aside role assumed (drawer implementation detail not specified). */
  readonly addCompetencyPanel: Locator;

  /** Department — verbatim: `Department (Mandatory, Dropdown)`. */
  readonly departmentDropdown: Locator;

  /** Goal — verbatim: `Goal (Mandatory, Dropdown)`. */
  readonly goalDropdown: Locator;

  /** Description — verbatim: `Description (Optional, Textbox)`. */
  readonly descriptionInput: Locator;

  /** Targeted Members — verbatim: `Targeted Members (Dropdown) [All/Selected]`. */
  readonly targetedMembersDropdown: Locator;

  /** No of Employees — verbatim field name `No of Employees`. */
  readonly noOfEmployeesInput: Locator;

  /** Status — verbatim: `Status (Dropdown) [Not Started, In progress, Completed]`. */
  readonly statusDropdown: Locator;

  /** Priority — verbatim: `Priority (Dropdown) [High, Medium, Low]`. */
  readonly priorityDropdown: Locator;

  /** "Select Year" — ground-truth confirmed real and editable inside the Add Competency panel. */
  readonly yearDropdown: Locator;

  readonly panelSaveBtn: Locator;
  readonly panelCancelBtn: Locator;

  constructor(page: Page) {
    super(page);

    this.competenciesTab = page.getByRole('tab', { name: /^competencies$/i }).or(page.getByRole('button', { name: /^competencies$/i }));

    this.competenciesListingHeading = page.getByRole('heading', { name: /^competencies$/i }).first();
    // Ground-truth confirmed live at /competencies: a real semantic <table>, no grid. Same
    // sidebar-collision risk as the sibling Goals table (persistent nav renders a role="list" <ul>
    // earlier in DOM order) — drop the 'list' fallback entirely rather than risk `.first()`
    // grabbing the sidebar menu instead of the real listing.
    this.competenciesListing = page.getByRole('table').first();

    this.addCompetencyBtn = page.getByRole('button', { name: /^\+?\s*add competency$/i });
    this.emptyStateText = page.getByText(/no data available|there is no information to display|no competencies found|no records found/i).first();

    // Ground-truth: real top toolbar shows a Department filter — a `role="combobox"` button whose
    // accessible name is its currently selected VALUE (e.g. "MANAGEMENT"), same value-not-label
    // pattern confirmed throughout this app's Select components — cannot match by a fixed
    // "department" name. Department names render in caps; scoped to combobox role to avoid
    // matching unrelated all-caps text elsewhere on the page.
    // The listing's first combobox (the second is the year). The old /^[A-Z][A-Z\s&-]{2,}$/ text filter
    // stopped matching as soon as a department with a digit or dot was selected ("L1 SUPPORT",
    // "VUE.JS"), so a later re-selection returned null (TC-DEPTCMP-050, 2026-11-12).
    this.departmentFilterSelector = page.getByRole('combobox').filter({ hasNotText: /^\s*\d{4}\s*$/ }).first();
    // Real "Select Year" filter — same combobox-with-value-as-name pattern; year renders as a bare
    // 4-digit number (e.g. "2026").
    this.yearFilterSelector = page.getByRole('combobox').filter({ hasText: /^\d{4}$/ }).first();

    this.addCompetencyPanel = page.getByRole('dialog').filter({ hasText: 'No of Employees' })
      .or(page.locator('aside[role="complementary"]').filter({ hasText: 'No of Employees' }))
      .first();

    // Ground-truth confirmed live for ALL Select-style fields below: every shadcn combobox's
    // accessible name is its currently selected VALUE ("ADMIN", "Not Started", "Medium", ...),
    // never its field label — the same pattern that broke Goals' Goal Type field. getByLabel/
    // getByRole(name: <label>) never matches any of them. Scope by the field's own form-item
    // container (identified by its label text) and grab the descendant combobox, same fix pattern.
    // NOTE: `.first()` is required on every chain below — `.or()` does not dedupe distinct DOM
    // nodes that both happen to satisfy different alternatives (e.g. a combobox <button> and its
    // inner value <span> can each independently match), which throws a strict-mode violation that
    // every defensive `.catch(() => false)` call elsewhere in this class silently swallows as
    // "field not found" — a real bug that briefly looked like missing seed data during live testing.
    this.departmentDropdown = this.addCompetencyPanel.locator('[data-slot="form-item"]').filter({ hasText: 'Department' }).getByRole('combobox')
      .or(this.addCompetencyPanel.getByLabel(/^department$/i)).first();

    // Real label is "Goal/ Competency Name", not just "Goal" — corrected. Real placeholder
    // ("Select a goal") also confirmed live and used as a secondary match.
    this.goalDropdown = this.addCompetencyPanel.locator('[data-slot="form-item"]').filter({ hasText: 'Goal/ Competency Name' }).getByRole('combobox')
      .or(this.addCompetencyPanel.getByText('Select a goal'))
      .or(this.addCompetencyPanel.getByLabel(/goal/i)).first();

    this.descriptionInput = this.addCompetencyPanel.getByLabel(/^description$/i)
      .or(this.addCompetencyPanel.getByRole('textbox', { name: /description/i }))
      .or(this.addCompetencyPanel.getByPlaceholder(/description/i)).first();

    this.targetedMembersDropdown = this.addCompetencyPanel.locator('[data-slot="form-item"]').filter({ hasText: 'Target Members' }).getByRole('combobox')
      .or(this.addCompetencyPanel.getByLabel(/target(ed)? members/i)).first();

    this.noOfEmployeesInput = this.addCompetencyPanel.getByLabel(/no of employees/i)
      .or(this.addCompetencyPanel.getByPlaceholder(/no of employees/i)).first();

    // Ground-truth: real options are Not Started/In Progress/Completed/**Delayed** — a 4th value
    // beyond the requirement doc's Not Started/In progress/Completed.
    this.statusDropdown = this.addCompetencyPanel.locator('[data-slot="form-item"]').filter({ hasText: 'Status' }).getByRole('combobox')
      .or(this.addCompetencyPanel.getByLabel(/^status$/i)).first();

    this.priorityDropdown = this.addCompetencyPanel.locator('[data-slot="form-item"]').filter({ hasText: 'Priority' }).getByRole('combobox')
      .or(this.addCompetencyPanel.getByLabel(/^priority$/i)).first();

    // Real "Select Year" field inside the panel — confirmed live (2026/2025/2024/2023/2022),
    // missing from the original page object entirely (the req doc's own open question about
    // year-editability is resolved: yes, it's editable).
    this.yearDropdown = this.addCompetencyPanel.locator('[data-slot="form-item"]').filter({ hasText: 'Select Year' }).getByRole('combobox').first();

    this.panelSaveBtn = this.addCompetencyPanel.getByRole('button', { name: /^save$/i });
    this.panelCancelBtn = this.addCompetencyPanel.getByRole('button', { name: /^cancel$/i });
  }

  // ─── Navigation ──────────────────────────────────────────────────────────

  /** Ground-truth confirmed live: the real route is `/competencies` — NOT `/department/
   * competencies` as originally guessed from the requirement doc's nav table (that URL 404s).
   * Reached via the sidebar "Department" group, which expands to "Department Settings" and
   * "Competencies" as sibling links, both living at top-level paths, not nested under `/department`. */
  async navigateToCompetencies(): Promise<void> {
    await this.page.goto('/competencies', { waitUntil: 'domcontentloaded' });
    await this.addCompetencyBtn.waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
    // Same async-table-load race confirmed on the sibling Goals page — the Add button (static UI)
    // renders before the table's row data finishes its fetch.
    await this.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
  }

  // ─── Department filter (Competencies Listing) ───────────────────────────

  /** Select a department in the top-level listing filter. Falls back to the first offered option if `name` isn't found. Returns the selected label, or null if the control isn't present. */
  async selectDepartmentInListing(name?: string): Promise<string | null> {
    // Verify the trigger really shows the choice: right after another popover closed (e.g.
    // getDepartmentFilterOptionsText()'s Escape), the click could land on a closing list and the
    // listing silently stayed on the old department (seen 2026-11-12). One retry.
    for (let attempt = 0; attempt < 2; attempt++) {
      const label = await this.chooseComboboxOption(this.departmentFilterSelector, name);
      if (!label) return null;
      const applied = await this.waitForListingDepartment(label);
      if (applied) {
        await this.page.waitForLoadState('networkidle', { timeout: 8_000 }).catch(() => {});
        return label;
      }
    }
    return null;
  }

  private async waitForListingDepartment(label: string, timeoutMs = 5_000): Promise<boolean> {
    const deadline = Date.now() + timeoutMs;
    const wanted = label.trim().toLowerCase();
    while (Date.now() < deadline) {
      const shown = ((await this.departmentFilterSelector.textContent().catch(() => '')) ?? '').trim().toLowerCase();
      if (shown === wanted || (shown.includes(wanted) && wanted.length > 0)) return true;
      await new Promise(resolve => setTimeout(resolve, 250));
    }
    return false;
  }

  /**
   * Select a listing department and return what the listing request for it actually returned. The
   * listing no longer has a Department column (verified 2026-11-12: Action, Goal / Competency Name,
   * Target Members, Progress, Status, Priority, Allocated), so department scoping can only be checked
   * against the competencies response (`departmentIds=` in the URL) and the rendered goal names.
   */
  async selectDepartmentInListingWithApi(name?: string): Promise<{ label: string; departmentNames: string[]; goalNames: string[] } | null> {
    const response = this.page.waitForResponse(r => /\/api\/v1\/competencies\?.*departmentIds=/.test(r.url()) && r.ok(), { timeout: 15_000 }).catch(() => null);
    const picked = await this.selectDepartmentInListing(name);
    if (!picked) return null;
    const res = await response;
    if (!res) return null;
    const json = await res.json().catch(() => null);
    const items: Array<{ departmentName?: string; goal?: { name?: string } }> = json?.data?.items ?? [];
    const label = ((await this.departmentFilterSelector.textContent().catch(() => '')) ?? '').trim();
    return {
      label,
      departmentNames: [...new Set(items.map(i => i.departmentName ?? ''))],
      goalNames: items.map(i => i.goal?.name ?? '').filter(Boolean),
    };
  }

  /** Whether a given department name is offered as a selectable option in the listing filter — used to assert cross-department scoping (a department a TM/EM does not manage must not appear). */
  async isDepartmentSelectableInListing(name: string): Promise<boolean> {
    const visible = await this.departmentFilterSelector.isVisible().catch(() => false);
    if (!visible) return false;
    await this.departmentFilterSelector.click();
    const option = this.page.getByRole('option', { name: new RegExp(name, 'i') });
    const found = await option.first().isVisible({ timeout: 3000 }).catch(() => false);
    await this.page.keyboard.press('Escape').catch(() => {});
    return found;
  }

  async getDepartmentFilterOptionsText(): Promise<string[]> {
    const visible = await this.departmentFilterSelector.isVisible().catch(() => false);
    if (!visible) return [];
    await this.departmentFilterSelector.click();
    const options = this.page.getByRole('option');
    const count = await options.count().catch(() => 0);
    const texts: string[] = [];
    for (let i = 0; i < count; i++) {
      texts.push(((await options.nth(i).textContent().catch(() => '')) ?? '').trim());
    }
    await this.page.keyboard.press('Escape').catch(() => {});
    return texts;
  }

  // ─── Add/Edit Competency panel ───────────────────────────────────────────

  async openAddCompetencyPanel(): Promise<void> {
    await this.addCompetencyBtn.click();
    await this.addCompetencyPanel.waitFor({ state: 'visible', timeout: 10000 });
  }

  async closeAddCompetencyPanel(): Promise<void> {
    if (await this.panelCancelBtn.isVisible().catch(() => false)) {
      await this.panelCancelBtn.click();
      await this.addCompetencyPanel.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    }
  }

  /** Whether every non-Department field (Goal, Description, Targeted Members, No of Employees, Status, Priority) is currently disabled — used to verify the mandatory Department-first gate (TC-DEPTCMP-007/027). */
  async areNonDepartmentFieldsDisabled(): Promise<boolean> {
    const checks = await Promise.all([
      this.goalDropdown.isDisabled().catch(() => true),
      this.descriptionInput.isDisabled().catch(() => true),
      this.targetedMembersDropdown.isDisabled().catch(() => true),
      this.noOfEmployeesInput.isDisabled().catch(() => true),
      this.statusDropdown.isDisabled().catch(() => true),
      this.priorityDropdown.isDisabled().catch(() => true),
    ]);
    return checks.every(Boolean);
  }

  /** Select a Department in the Add Competency panel. Falls back to the first offered option if `name` isn't found. Returns the selected label, or null if the control isn't present. */
  async selectDepartmentInPanel(name?: string): Promise<string | null> {
    const label = await this.chooseComboboxOption(this.departmentDropdown, name);
    if (label) {
      await this.goalDropdown.isEnabled({ timeout: 5000 }).catch(() => false);
      // Ground-truth fix: the goal field becomes ENABLED before its department-scoped goal list
      // has actually finished fetching — observed live as selectGoalInPanel() immediately after
      // this call finding zero options even though the real goal list (90 real goals confirmed
      // for "MANAGEMENT") renders correctly ~1-1.5s later. Wait for the fetch to settle, and give
      // the Department popover's own close transition a beat before the caller opens a different
      // combobox (same close-transition-intercepts-next-click pattern confirmed on Goals).
      await this.page.waitForLoadState('networkidle', { timeout: 8_000 }).catch(() => {});
      await this.page.waitForTimeout(400);
    }
    return label;
  }

  async getGoalDropdownOptionsText(): Promise<string[]> {
    const visible = await this.goalDropdown.isVisible().catch(() => false);
    if (!visible) return [];
    await this.goalDropdown.click();
    const options = this.page.getByRole('option');
    const count = await options.count().catch(() => 0);
    const texts: string[] = [];
    for (let i = 0; i < count; i++) {
      texts.push(((await options.nth(i).textContent().catch(() => '')) ?? '').trim());
    }
    await this.page.keyboard.press('Escape').catch(() => {});
    return texts;
  }

  /** Select a Goal in the Add Competency panel (assumed already scoped to whichever Department is currently selected). Falls back to the first offered option. Returns the selected label, or null if none are offered (e.g. Department has zero Goals). */
  async selectGoalInPanel(name?: string): Promise<string | null> {
    if (name) return this.chooseComboboxOption(this.goalDropdown, name);

    // Ground-truth confirmed live: POST /api/v1/competencies answers 400 "A competency for this
    // goal and year already exists" when the chosen goal is already linked for that department and
    // year, and the panel then just stays open with no inline message — so always taking the FIRST
    // goal option made every create test fail from the second run onwards.
    //
    // The already-taken set comes from the API rather than the rendered listing: the listing is
    // paginated (only ~37 rows visible of 101) and, while the Add panel is open, Radix marks the
    // page behind it aria-hidden, so scraping it under-reports what is taken and picks a goal that
    // then collides anyway.
    const department = ((await this.departmentDropdown.innerText().catch(() => '')) ?? '').trim();
    const taken = new Set((await this.fetchTakenGoalNames(department)).map(n => n.toLowerCase()));
    const candidates = await this.getGoalOptionValues();
    const free = candidates.filter(v => v && !taken.has(v.toLowerCase()));
    if (free.length === 0) {
      // Every goal in this department already has a competency for the current year — a test-data
      // condition, not a product failure. Returning null lets the caller skip with its own message
      // instead of failing 15s later on a Save button that can never succeed.
      return this.closeCombobox();
    }
    // Pick at random rather than always the first: concurrent/repeated runs would otherwise race
    // for the same goal between this read and the save.
    const pick = free[Math.floor(Math.random() * free.length)];
    return this.chooseComboboxOption(this.goalDropdown, pick);
  }

  /** Goal names that already have a competency for `departmentName` in `year` — read straight from the API, across all pages. */
  async fetchTakenGoalNames(departmentName: string, year = new Date().getFullYear()): Promise<string[]> {
    const names: string[] = [];
    for (let page = 1; page <= 20; page++) {
      const response = await this.page.request.get(
        `${CompetenciesPage.API_BASE}/api/v1/competencies?page=${page}&limit=100&year=${year}`,
        { failOnStatusCode: false },
      );
      if (!response.ok()) break;
      const body = await response.json().catch(() => null);
      const items = body?.data?.items ?? body?.data?.data ?? [];
      if (!Array.isArray(items) || items.length === 0) break;
      for (const item of items) {
        const name = item?.goal?.name ?? item?.goalName;
        if (name && (!departmentName || item?.departmentName === departmentName)) names.push(String(name));
      }
      if (items.length < 100) break;
    }
    return names;
  }

  /** Every goal offered by the Add Competency panel's Goal dropdown, read from the options' own `data-value`. Opens and closes the popover. */
  async getGoalOptionValues(): Promise<string[]> {
    if (!(await this.goalDropdown.isVisible().catch(() => false))) return [];
    await this.goalDropdown.click();
    await this.page.getByRole('option').first().waitFor({ state: 'visible', timeout: 5_000 }).catch(() => {});
    const values = await this.page.getByRole('option')
      .evaluateAll(els => els.map(e => e.getAttribute('data-value') ?? e.textContent?.trim() ?? ''))
      .catch(() => [] as string[]);
    await this.page.keyboard.press('Escape').catch(() => {});
    return values.filter(Boolean);
  }

  async selectTargetedMembers(value: 'All' | 'Selected'): Promise<boolean> {
    const visible = await this.targetedMembersDropdown.isVisible().catch(() => false);
    if (!visible) return false;
    await this.chooseComboboxOption(this.targetedMembersDropdown, value);
    return true;
  }

  async isNoOfEmployeesEnabled(): Promise<boolean> {
    const visible = await this.noOfEmployeesInput.isVisible().catch(() => false);
    if (!visible) return false;
    return !(await this.noOfEmployeesInput.isDisabled().catch(() => true));
  }

  /**
   * Type a value into No of Employees.
   *
   * The real control is `<input type="number">`, and Playwright's `fill()` refuses non-numeric
   * text there outright ("Cannot type text into input[type=number]") — which made the
   * reject-non-numeric-input test (TC-DEPTCMP-030) fail on the harness rather than on the app.
   * Type key-by-key instead, exactly like a user would, so the browser's own number-input
   * filtering is what decides whether the characters land.
   */
  async fillNoOfEmployees(value: string | number): Promise<boolean> {
    if (!(await this.isNoOfEmployeesEnabled())) return false;
    const text = String(value);
    if (/^-?\d*\.?\d*$/.test(text)) {
      await this.noOfEmployeesInput.fill(text);
      return true;
    }
    await this.noOfEmployeesInput.click();
    await this.noOfEmployeesInput.press('ControlOrMeta+a').catch(() => {});
    await this.noOfEmployeesInput.pressSequentially(text, { delay: 30 });
    return true;
  }

  async getNoOfEmployeesValue(): Promise<string> {
    return (await this.noOfEmployeesInput.inputValue().catch(() => '')) ?? '';
  }

  async selectStatus(value: 'Not Started' | 'In progress' | 'Completed'): Promise<boolean> {
    const visible = await this.statusDropdown.isVisible().catch(() => false);
    if (!visible) return false;
    await this.chooseComboboxOption(this.statusDropdown, value);
    return true;
  }

  async selectPriority(value: 'High' | 'Medium' | 'Low'): Promise<boolean> {
    const visible = await this.priorityDropdown.isVisible().catch(() => false);
    if (!visible) return false;
    await this.chooseComboboxOption(this.priorityDropdown, value);
    return true;
  }

  async fillDescription(text: string): Promise<boolean> {
    const visible = await this.descriptionInput.isVisible().catch(() => false);
    if (!visible) return false;
    await this.descriptionInput.fill(text).catch(async () => {
      await this.descriptionInput.click();
      await this.page.keyboard.type(text);
    });
    return true;
  }

  async getDescriptionText(): Promise<string> {
    return (await this.descriptionInput.textContent().catch(() => '')) ?? (await this.descriptionInput.inputValue().catch(() => '')) ?? '';
  }

  /**
   * Save the Add/Edit Competency panel, returning the Goal the competency was actually saved
   * against — which is NOT always the one the caller selected, because of the retry below. A
   * caller that then looks the new row up by goal name must use this return value, or it will
   * match some older competency that happens to carry the goal it originally picked.
   *
   * Returns the Goal the competency was saved against, so a caller that then looks the new row up
   * by goal name uses the real one (`selectGoalInPanel()` picks a free goal itself).
   */
  async savePanel(): Promise<string | null> {
    const goal = await this.getSelectedGoal();
    await this.panelSaveBtn.click();
    await this.addCompetencyPanel.waitFor({ state: 'hidden', timeout: 10_000 }).catch(() => {});
    return goal;
  }

  /** The Goal currently chosen in the panel, read from the trigger's own label. */
  async getSelectedGoal(): Promise<string | null> {
    const text = ((await this.goalDropdown.innerText().catch(() => '')) ?? '').trim();
    return text && !/select/i.test(text) ? text : null;
  }


  async isSaveEnabled(): Promise<boolean> {
    return this.panelSaveBtn.isEnabled().catch(() => false);
  }

  /** Inline mandatory-field validation error (e.g. Department/Goal left unselected, No of Employees non-numeric). Not a verbatim-quoted message in source — matched generically. */
  getInlineFieldError(): Locator {
    return this.addCompetencyPanel.getByText(/mandatory|required|is required|invalid|must be a number/i).first();
  }

  // ─── Competencies Listing (rows) ─────────────────────────────────────────

  /** The first non-header row of the listing — the header row also carries `role="row"`, so `rows.first()` is the header, whose cells are `columnheader`s (that is why TC-DEPTCMP-005 saw a single value instead of 7 columns). */
  getFirstDataRow(): Locator {
    return this.competenciesListing.getByRole('row').filter({ hasNot: this.page.getByRole('columnheader') })
      .or(this.competenciesListing.getByRole('listitem'))
      .first();
  }

  /** A competency row, matched by any visible text (Department name and/or Competency/Goal name). Unverified Selector — exact row markup not specified. */
  getCompetencyRow(identifier: string): Locator {
    return this.competenciesListing.getByRole('row').filter({ hasText: identifier })
      .or(this.competenciesListing.getByRole('listitem').filter({ hasText: identifier }))
      .first();
  }

  /** A competency row scoped to both its Department and Competency/Goal name — narrows ambiguity when the same Goal name could theoretically appear under multiple departments. */
  getCompetencyRowByDeptAndGoal(department: string, goalName: string): Locator {
    // Ground-truth confirmed live: the listing's columns are Action | Goal / Competency Name |
    // Target Members | Progress | Status | Priority | Allocated — there is NO Department column, so
    // a row NEVER contains its department's name and `.filter({ hasText: department })` matched
    // nothing (the cause of ~15 "element(s) not found" failures across this module). The listing is
    // already scoped to one department by its own top-bar filter, so the goal name is the row's
    // identity here; `department` is kept in the signature for call-site readability and to assert
    // the caller is looking at the right listing.
    void department;
    return this.competenciesListing.getByRole('row').filter({ hasText: goalName })
      .or(this.competenciesListing.getByRole('listitem').filter({ hasText: goalName }))
      .first();
  }

  /** Ground-truth: the real table's header row (Goal/Competency Name | Target Members | Progress |
   * Status | Priority | Allocated | Action) also has `role="row"` — subtract it so this returns
   * the actual data-row count, matching the sibling Goals fix for the same header-inclusion bug. */
  async getRowCount(): Promise<number> {
    const rows = this.competenciesListing.getByRole('row').or(this.competenciesListing.getByRole('listitem'));
    const count = await rows.count().catch(() => 0);
    return Math.max(0, count - 1);
  }

  /** All row texts in the current listing, top to bottom. */
  async getAllRowTexts(): Promise<string[]> {
    // Data rows only — the header row ("Action Goal / Competency Name …") used to be included.
    const rows = this.competenciesListing.getByRole('row').filter({ hasNot: this.page.getByRole('columnheader') })
      .or(this.competenciesListing.getByRole('listitem'));
    // One snapshot read: a per-row textContent() loop over ~100 rows that re-render after a
    // department switch waited out the action timeout on each detached row (TC-DEPTCMP-050 timeout).
    return (await rows.allTextContents().catch(() => [] as string[])).map(t => t.trim());
  }

  /** The 7 documented cell values for a row (Department Name, Competency Name, Targeted Members, Progress, Status, Priority, Allocated Members), read via role="cell" if the markup exposes it. Unverified Selector — exact column markup not specified; falls back to splitting the row's raw text if no cell roles are found. */
  async getRowCells(row: Locator): Promise<string[]> {
    const cells = row.getByRole('cell').or(row.getByRole('gridcell'));
    // One read per row instead of one per cell — TC-DEPTCMP-046 walks every row (~116) and the
    // per-cell loop overran the 60s budget (2026-11-12).
    const texts = (await cells.allTextContents().catch(() => [] as string[])).map(t => t.trim());
    if (texts.length > 0) return texts;
    const text = (await row.textContent().catch(() => '')) ?? '';
    return text.split(/\s{2,}|\t|\n/).map(s => s.trim()).filter(Boolean);
  }

  /**
   * A row's value for the column whose header matches `header`.
   *
   * Ground-truth confirmed live: the listing's real columns are
   * Action | Goal / Competency Name | Target Members | Progress | Status | Priority | Allocated,
   * and a row's `textContent()` concatenates them with NO separator
   * ("Mobile App PerformanceALL0.0%In ProgressHigh0"). The previous `\b(...)\b` regexes over that
   * blob could never match — "In Progress" is immediately followed by "High", so the trailing word
   * boundary never exists — which is why getRowStatus()/getRowPriority() returned null on rows that
   * plainly showed a status and a priority (TC-DEPTCMP-001/005/014/015/019). Read the cell by its
   * header position instead, so a column reorder can't silently break this again either.
   */
  async getRowCellByHeader(row: Locator, header: RegExp): Promise<string | null> {
    const headers = await this.competenciesListing.getByRole('columnheader').allInnerTexts().catch(() => [] as string[]);
    const index = headers.findIndex(h => header.test(h.trim()));
    if (index === -1) return null;
    const cells = await this.getRowCells(row);
    const value = cells[index];
    return value ? value.trim() : null;
  }

  /** Status as the listing actually renders it (e.g. "In Progress"). Compare case-insensitively — the UI's casing differs from the requirement doc's "In progress". */
  async getRowStatus(row: Locator): Promise<string | null> {
    return this.getRowCellByHeader(row, /^status$/i);
  }

  /** Priority parsed from a row's text — one of the three documented enum values. */
  async getRowPriority(row: Locator): Promise<string | null> {
    return this.getRowCellByHeader(row, /^priority$/i);
  }

  /** Progress % parsed from a row's text. Returns null if no percentage is present (e.g. markup renders it as a bar with no text). */
  async getRowProgress(row: Locator): Promise<number | null> {
    const text = (await row.textContent().catch(() => '')) ?? '';
    const match = text.match(/(\d+)\s*%/);
    return match ? parseInt(match[1], 10) : null;
  }

  /**
   * Targeted Members and Allocated Members counts, read positionally from the documented column
   * order (index 2 and 6 of the 7 documented columns). Unverified Selector — exact column
   * order/markup not specified in source; treat divergence defensively (null) rather than a hard
   * failure.
   */
  async getRowMemberCounts(row: Locator): Promise<{ targeted: number | null; allocated: number | null }> {
    const cells = await this.getRowCells(row);
    const numeric = cells.map(c => {
      const m = c.match(/^-?\d+$/);
      return m ? parseInt(m[0], 10) : null;
    });
    return {
      targeted: numeric[2] ?? null,
      allocated: numeric[numeric.length - 1] ?? null,
    };
  }

  // ─── Edit / Delete ────────────────────────────────────────────────────────

  /** Row-level Edit control — verbatim action name `Edit Competency` (icon tooltip/aria-label), typically rendered as an icon-only "Edit" button. */
  getEditCompetencyBtn(row: Locator): Locator {
    return row.getByRole('button', { name: /^edit(\s|$)/i }).first();
  }

  /** Row-level Delete control — no verbatim button label is quoted in source (uiElements[] marks this "inferred"). Unverified Selector. */
  getDeleteCompetencyBtn(row: Locator): Locator {
    return row.getByRole('button', { name: /^delete(\s|$)/i }).first();
  }

  async clickEditCompetency(identifier: string): Promise<boolean> {
    const row = this.getCompetencyRow(identifier);
    const rowVisible = await row.isVisible().catch(() => false);
    if (!rowVisible) return false;
    await row.hover().catch(() => {});
    const btn = this.getEditCompetencyBtn(row);
    const visible = await btn.isVisible().catch(() => false);
    if (!visible) return false;
    await btn.click();
    await this.addCompetencyPanel.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    return true;
  }

  async isEditEnabled(identifier: string): Promise<boolean> {
    const row = this.getCompetencyRow(identifier);
    await row.hover().catch(() => {});
    const btn = this.getEditCompetencyBtn(row);
    const visible = await btn.isVisible().catch(() => false);
    if (!visible) return false;
    return btn.isEnabled().catch(() => false);
  }

  async clickDeleteCompetency(identifier: string): Promise<boolean> {
    const row = this.getCompetencyRow(identifier);
    const rowVisible = await row.isVisible().catch(() => false);
    if (!rowVisible) return false;
    await row.hover().catch(() => {});
    const btn = this.getDeleteCompetencyBtn(row);
    const visible = await btn.isVisible().catch(() => false);
    if (!visible) return false;
    await btn.click();
    return true;
  }

  async isDeleteEnabled(identifier: string): Promise<boolean> {
    const row = this.getCompetencyRow(identifier);
    await row.hover().catch(() => {});
    const btn = this.getDeleteCompetencyBtn(row);
    const visible = await btn.isVisible().catch(() => false);
    if (!visible) return false;
    return btn.isEnabled().catch(() => false);
  }

  /**
   * Confirm a competency deletion via the shared BasePage confirmation-dialog helpers. Whether a
   * confirmation dialog exists at all for this destructive action is unconfirmed in the source
   * (businessRules: speculative) — callers should check `getConfirmDialog().isVisible()` first and
   * treat its absence as "no confirmation step" rather than a hard failure.
   */
  async confirmDeleteCompetency(): Promise<void> {
    await this.confirmAction();
    await this.getConfirmDialog().waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
  }

  async cancelDeleteCompetency(): Promise<void> {
    await this.cancelAction();
    await this.getConfirmDialog().waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
  }

  // ─── Role-scope probes (TM/EM cross-department checks — TC-DEPTCMP-059/062) ──

  /** Whether a given (assumed out-of-scope) department name is selectable anywhere the current session can act — used both for the listing filter and the Add Competency panel's Department dropdown. */
  async isDepartmentSelectableInPanel(name: string): Promise<boolean> {
    const visible = await this.departmentDropdown.isVisible().catch(() => false);
    if (!visible) return false;
    await this.departmentDropdown.click();
    const option = this.page.getByRole('option', { name: new RegExp(name, 'i') });
    const found = await option.first().isVisible({ timeout: 3000 }).catch(() => false);
    await this.page.keyboard.press('Escape').catch(() => {});
    return found;
  }

  // ─── API helpers (endpoints NOT confirmed anywhere in source — apiEndpoints[] all "unclear") ──
  // The requirement doc records only `inferredGuess` endpoints. Callers must treat a null/non-2xx
  // result defensively (skip the API-parity leg of the assertion rather than hard-failing) until a
  // human confirms the real contract, per this suite's PARTIAL automationHints.

  // The real API lives on its OWN origin under /api/v1 (same arrangement GoalsPage documents).
  // Hitting a bare "/api/..." path goes to the FRONTEND origin instead, where the SPA's catch-all
  // answers 200 with index.html for literally any path — which is why the IDOR check
  // (TC-DEPTCMP-062) reported "expected a rejection, got 200" and looked like a security hole.
  // Overridable for a local stack via API_BASE_URL; defaults to staging.
  private static readonly API_BASE = process.env.API_BASE_URL || 'https://simerp-dev-api.simform.solutions';

  private resolveApiUrl(url: string): string {
    if (/^https?:\/\//i.test(url)) return url;
    const path = url.startsWith('/api/v1') ? url : url.replace(/^\/api\//, '/api/v1/');
    return CompetenciesPage.API_BASE + path;
  }

  async attemptApiRead(ctxPage: Page, url: string): Promise<{ status: number; body: any | null }> {
    const response = await ctxPage.request.get(this.resolveApiUrl(url), { failOnStatusCode: false });
    const body = response.ok() ? await response.json().catch(() => null) : null;
    return { status: response.status(), body };
  }

  async attemptApiWrite(ctxPage: Page, method: 'post' | 'put' | 'patch' | 'delete', url: string, data: Record<string, unknown> = {}): Promise<number> {
    const response = await ctxPage.request[method](this.resolveApiUrl(url), { data, failOnStatusCode: false });
    return response.status();
  }

  /** Intercept the competencies API and force a failure — for negative/error-handling tests (401/403/500/503). */
  async mockCompetenciesApiFailure(status = 500, delayMs = 0): Promise<void> {
    await this.page.route(/\/api\/.*competenc/i, async route => {
      if (delayMs > 0) await new Promise(resolve => setTimeout(resolve, delayMs));
      await route.fulfill({
        status,
        contentType: 'application/json',
        body: JSON.stringify({ message: status === 401 ? 'Unauthorized' : status === 403 ? 'Forbidden' : 'Internal Server Error' }),
      });
    });
  }

  /** Navigate WITHOUT waiting for the fetch to settle — for tests that observe the in-flight loading state. */
  async gotoWithoutSettling(): Promise<void> {
    await this.page.goto('/competencies', { waitUntil: 'domcontentloaded' });
  }

  getNotFoundState(): Locator {
    return this.page.getByText(/not found|404/i).first();
  }
}
