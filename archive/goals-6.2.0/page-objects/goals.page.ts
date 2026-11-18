import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

/** The three tabs of the relocated (2026-09-22) Goals screen, keyed by their URL `tab=` value. */
export type GoalsTabName = 'dashboard' | 'employee-goals' | 'management';

/**
 * Goals (TC-EMPGOL-*) — Employee > Goals sub-feature (nav code EMPGOL).
 *
 * GROUNDING NOTE: originally generated without live-browser/DOM access, grounded only against
 * req-2026-07-14-EMPGOL-doc.json's verbatim uiElements[] strings, with conceptual/inferred markup
 * (table structure, Goal Type field wiring, the profile Goals tab container) left as defensive
 * role/label guesses. A subsequent live-app probe (reports/knowledge-base/dom-snapshots/EMPGOL.json,
 * captured via `npm run capture:dom-snapshot`) found several of those guesses were actively wrong,
 * not just unverified — see the ground-truth comments on `goalsTable`, `goalTypeDropdown`, and
 * `getProfileGoalsList()` below for what real markup replaced each guess and why it was failing.
 * Locators still marked Unverified Selector below remain unconfirmed against the live app.
 *
 * RE-GROUNDED (2026-08-18) against the live app — a structural change had landed since the last
 * pass: the sidebar's expandable "Employee" nav group (with separate "Employee Details" / "Skills"
 * / "Goals" / "Allocation Correction" links) is GONE. "Employee" is now a single top-level sidebar
 * link straight to `/employee`, and Goals/Skills are reached exclusively via a tab strip
 * ("Current Employee" | "Past Employee" | "Skills" | "Goals") on that one page — confirmed live,
 * `/employee/goals` no longer resolves to this feature at all; it now 404s against an
 * `/employee/:id` employee-detail route instead ("Employee not found" / "Validation failed (uuid
 * is expected)" toasts, since the literal word "goals" gets parsed as the id). Fortunately
 * `navigateToGoals()` below already tried the tab FIRST and only fell back to that URL if the tab
 * wasn't found, so it kept working through this change unmodified — the URL fallback is now
 * confirmed dead code, not a real alternate path, and is removed below rather than left to silently
 * fail loud (a 404 is worse than a no-op skip).
 *
 * Also confirmed changed in this same pass: the Goals table's own column order — "Action" is now
 * the FIRST cell (previously last), so getGoalNameFromRow()'s "first cell = Goal Name" assumption
 * broke and is fixed to index 1. The table gained two new column-header quick-filters, "Filter by
 * Goal Name" and "Filter by Type" (structure not yet confirmed against a live click — left as
 * best-effort locators, not asserted on). A new department-scope combobox (default label
 * "MANAGEMENT", a `listbox` of every department — same option set as the Skills tab's Departments
 * panel) now sits between the Search box and the table; its effect on the listing is not yet
 * confirmed (kept as a best-effort selector, `selectDepartmentScope()`, rather than asserted on).
 *
 * RE-GROUNDED (2026-08-19) after triaging a real suite run — the Add/Edit Goal panel itself was
 * substantially simplified since this page object was last written:
 *   - "Assign to Employees" is GONE from BOTH the Add Goal and Edit Goal panels (confirmed live —
 *     the panel now has only Goal Name, Goal Type, [Certificate Code], and Description). This is
 *     the real root cause behind every "Admin/TM assign-to offered 0 employees" failure — not a
 *     locator bug, not department-scoping by `departmentScopeCombobox`. There is no UI path left
 *     in this panel to assign an employee to a goal at all; `assignToMultiselect` and every method
 *     built on it now correctly resolve to "not present" (`isVisible()` false), which is accurate,
 *     not broken.
 *   - The immutability notice text is also GONE — confirmed no such copy renders anywhere in the
 *     panel. The underlying LOCK is still real, though: Edit Goal confirmed live renders Goal Name
 *     and Goal Type as `[disabled]` (Description remains editable) — just with no explanatory text
 *     alongside it.
 *   - Goal Name is now a plain `textbox` (confirmed live, placeholder "Enter goal name") — not the
 *     fuzzy-search combobox-with-suggestions originally described. `fillGoalName()`'s
 *     suggestion-popover handling below is left in place defensively (harmless no-op via its own
 *     `.catch()`s if no popover ever appears) rather than removed, since the duplicate-goal warning
 *     itself was not re-confirmed either way in this pass.
 *   - Goal Type now arrives pre-selected with a default value ("Technical") rather than empty —
 *     confirmed live via the Add Goal panel on open. A "Save with no Goal Type chosen" scenario is
 *     therefore not constructible the way TC-EMPGOL-041 assumes; see that spec for the resulting
 *     skip-guard.
 *   - Certificate Code's conditional show/hide (only present when Goal Type = Certificate) is
 *     UNCHANGED and confirmed still working live.
 *
 * Toast/confirmation-dialog primitives are intentionally NOT redefined here — `getSuccessToast()`,
 * `getErrorToast()`, `getConfirmDialog()`, `confirmAction()`, `cancelAction()` are inherited from
 * `BasePage` and reused as-is for the goal Delete confirmation flow (businessRules: "confirmation
 * step before executing" — existence unconfirmed, see class-level Unverified Selector list below).
 */
export class GoalsPage extends BasePage {
  // ─── Goals shell / listing ───────────────────────────────────────────────
  /** Tab strip shared with Employee Details / Skills / Leave / Ratings within the same shell (same pattern as sibling modules). Unverified Selector — exact tab markup not specified. */
  readonly goalsTab: Locator;

  /** "Add Goal" action — verbatim: `when user wants to add a new goal they will click on new "Add Goal"`. */
  readonly addGoalBtn: Locator;

  /** Goals Listing / table — inferred: `All goals should be visible in the list`. Unverified Selector — exact list/grid markup not specified. */
  readonly goalsTable: Locator;

  /** Generic empty-state text shown when the listing has no matching records. Unverified Selector — exact copy not specified. */
  readonly emptyStateText: Locator;

  /** Ground-truth confirmed via dom-snapshots/EMPGOL.json: a real `aria-label="Search"` input on
   * the Goals Listing toolbar. Needed because Goals are sorted descending by allocated-employee
   * count — a freshly created goal (0 assigned) sorts to the very bottom, likely off the first
   * page, so row-lookup after Create must filter by name first rather than scanning visible rows. */
  readonly searchInput: Locator;

  // ─── Add Goal / Edit Goal side panel — verbatim: "the side panel will open where user need to fill the below details" ──
  /** Side panel container — verbatim that a side panel opens, but no exact title string is quoted in source; scoped by the verbatim field name "Goal Type" that must appear inside it. Unverified Selector: dialog/aside role assumed. */
  readonly addGoalPanel: Locator;

  /** Goal Name — verbatim: `Goal Name (Mandatory, Dropdown) [Fuzzy search supported]`. Unverified Selector: exact input widget not specified. */
  readonly goalNameInput: Locator;

  /** Goal Type — verbatim: `Goal Type (Mandatory, Dropdown) [Technical, Certificate]`. */
  readonly goalTypeDropdown: Locator;

  /**
   * CONFIRMED REMOVED LIVE (2026-08-19): neither the Add Goal nor the Edit Goal panel renders an
   * Assign to Employees field anymore — the panel is now just Goal Name / Goal Type / [Certificate
   * Code] / Description. This locator resolves to nothing, correctly; every method built on it
   * (`addAssignee`, `addFirstAvailableAssignees`, `isEmployeeSelectableInAssignTo`, ...) already
   * degrades gracefully via `isVisible()` checks, so no code change was needed there — only the
   * specs that hard-asserted a non-zero result needed a skip guard (see EMPGOL-018/019/028/036/078).
   */
  readonly assignToMultiselect: Locator;

  /** Certificate Code — verbatim: `Certificate Code (Optional, Conditional) [Enabled only when Goal Type = Certificate]`. */
  readonly certificateCodeInput: Locator;

  /** Description — verbatim: `Description (Optional, Textbox) [Rich text supported]`. */
  readonly descriptionInput: Locator;

  /**
   * CONFIRMED REMOVED LIVE (2026-08-19): no such notice text renders in the Add or Edit Goal
   * panel. The lock itself is still real (Edit Goal's Goal Name/Goal Type render `[disabled]`,
   * confirmed live) — there is just no user-facing copy announcing it anymore.
   */
  readonly immutabilityNotice: Locator;

  /** Proposed Department dropdown (not yet confirmed live) — inferred addition, may not exist in the current build. Unverified Selector. */
  readonly departmentDropdown: Locator;

  /** Duplicate-goal warning popup — verbatim exact copy: "Before creating a new goal, please check whether a similar goal already exists. Create a new goal only if no existing goal matches your requirement." */
  readonly duplicateGoalWarningPopup: Locator;

  readonly panelSaveBtn: Locator;
  readonly panelCancelBtn: Locator;

  /** GROUNDED (2026-08-18): department-scope selector sitting between Search and the table, default label "MANAGEMENT". Effect on the listing not yet confirmed live. */
  readonly departmentScopeCombobox: Locator;

  /** GROUNDED (2026-08-18): new column-header quick-filters on Goal Name / Type — structure not yet confirmed via a live click (kept best-effort, not asserted on). */
  readonly goalNameFilterBtn: Locator;
  readonly typeFilterBtn: Locator;

  // ─── RELOCATION (2026-09-22): three-tab shell ────────────────────────────
  // Ground-truth confirmed live: `/employee/goals` is a three-tab sub-app (Dashboard /
  // Employee Goals / Goal Management) with a shared Year filter and, for multi-department
  // roles, a shared Department picker above the tab strip.
  readonly dashboardTab: Locator;
  readonly employeeGoalsTab: Locator;
  readonly goalManagementTab: Locator;
  /** GROUND-TRUTH CORRECTION (confirmed via a live failed-test error-context dump): this screen
   * does NOT use `role="tabpanel"` at all — `getByRole('tabpanel')` matches zero elements, which
   * silently made every descendant query under the originally-planned `activeTabPanel` resolve to
   * nothing rather than throwing (the classic "wrong scope" failure mode). The tab content instead
   * renders inside a second, NESTED `<main>` landmark (the outer `<main>` holds the page chrome —
   * breadcrumb, heading, notification bell, user menu — and the tab strip + KPIs/table live in an
   * inner `<main>` that is its child) — `.last()` in DOM order reaches that inner one. Only one
   * tab's content is mounted at a time (confirmed live), so no `hidden`-panel disambiguation is
   * needed beyond this. */
  readonly activeTabPanel: Locator;
  /** The Dashboard tab's empty state before a department is chosen (Admin only). */
  readonly selectDepartmentEmptyState: Locator;

  constructor(page: Page) {
    super(page);

    this.goalsTab = page.getByRole('tab', { name: /^goals$/i }).or(page.getByRole('button', { name: /^goals$/i }));

    this.addGoalBtn = page.getByRole('button', { name: /^add goal$/i });

    // Ground-truth confirmed via reports/knowledge-base/dom-snapshots/EMPGOL.json: the Goals
    // Listing is a genuine semantic <table>/<tr>/<td>. The prior 'grid'/'list' fallback chain was
    // actively wrong, not just redundant — the persistent sidebar nav renders a role="list" <ul>
    // earlier in DOM order than the table, so `.or(getByRole('list')).first()` reliably grabbed
    // the sidebar menu instead of the goals table, making every row lookup silently search the
    // wrong element (observed live: newly created goal rows never found, timeout on "not found").
    this.goalsTable = page.getByRole('table').first();
    this.emptyStateText = page.getByText(/no goals found|no goals to display|no records found/i).first();
    // GROUND-TRUTH CORRECTION: exact match is required — a column filter popover's own search
    // box carries `aria-label="Search... Goal Name"`, which a substring getByLabel('Search') also
    // matches whenever that popover happens to still be in the DOM, throwing a strict-mode
    // violation (confirmed live: TC-EMPGOL-265, which opens the Goal Name column filter then
    // calls searchGoals() right after).
    this.searchInput = page.getByLabel('Search', { exact: true });

    this.addGoalPanel = page.getByRole('dialog').filter({ hasText: 'Goal Type' })
      .or(page.locator('aside[role="complementary"]').filter({ hasText: 'Goal Type' }))
      .first();

    this.goalNameInput = this.addGoalPanel.getByLabel(/goal name/i)
      .or(this.addGoalPanel.getByPlaceholder(/goal name/i))
      .or(this.addGoalPanel.getByRole('combobox', { name: /goal name/i }));

    // Ground-truth confirmed via reports/knowledge-base/dom-snapshots/EMPGOL.json: the field is a
    // `<div data-slot="form-item">` containing a `<label data-slot="form-label">Goal Type*</label>`
    // sibling to a `<button role="combobox">` whose accessible name is its currently SELECTED
    // VALUE ("Technical"), not "Goal Type" — so getByLabel/getByRole(name: /goal type/i) never
    // matched (label isn't wired via for/aria-labelledby to the combobox). Scope by the form-item
    // container's text instead of the combobox's own (value-dependent) accessible name.
    // NOTE: `.first()` is required — `.or()` does not dedupe distinct DOM nodes that each
    // independently satisfy a different alternative (e.g. a combobox <button> and its inner value
    // <span> can both match), which throws a strict-mode violation that defensive `.catch(() =>
    // false)` calls elsewhere silently swallow as "field not found" (confirmed live: this exact
    // bug briefly looked like missing seed data in the sibling Competencies module).
    this.goalTypeDropdown = this.addGoalPanel.locator('[data-slot="form-item"]').filter({ hasText: 'Goal Type' }).getByRole('combobox')
      .or(this.addGoalPanel.getByLabel(/goal type/i))
      .or(this.addGoalPanel.getByRole('combobox', { name: /goal type/i }))
      .or(this.addGoalPanel.getByRole('button', { name: /goal type/i })).first();

    this.assignToMultiselect = this.addGoalPanel.getByLabel(/assign to/i)
      .or(this.addGoalPanel.getByPlaceholder(/assign to|search employee/i))
      .or(this.addGoalPanel.getByRole('combobox', { name: /assign to/i }));

    this.certificateCodeInput = this.addGoalPanel.getByLabel(/certificate code/i)
      .or(this.addGoalPanel.getByPlaceholder(/certificate code/i));

    this.descriptionInput = this.addGoalPanel.getByLabel(/^description$/i)
      .or(this.addGoalPanel.getByRole('textbox', { name: /description/i }))
      .or(this.addGoalPanel.getByPlaceholder(/description/i));

    this.immutabilityNotice = this.addGoalPanel.getByText(/cannot be edited once added|cannot be changed once (saved|created)/i);

    this.departmentDropdown = this.addGoalPanel.getByLabel(/^department$/i)
      .or(this.addGoalPanel.getByRole('combobox', { name: /department/i }));

    this.duplicateGoalWarningPopup = page.getByRole('dialog').or(page.getByRole('alertdialog'))
      .filter({ hasText: /before creating a new goal/i })
      .first();

    this.panelSaveBtn = this.addGoalPanel.getByRole('button', { name: /^save$/i });
    this.panelCancelBtn = this.addGoalPanel.getByRole('button', { name: /^cancel$/i });

    this.departmentScopeCombobox = page.getByRole('combobox', { name: /management|department/i })
      .or(page.getByRole('combobox').filter({ hasText: /management/i }))
      .first();

    this.goalNameFilterBtn = page.getByRole('button', { name: /filter by goal name/i });
    this.typeFilterBtn = page.getByRole('button', { name: /^filter by type$/i });

    this.dashboardTab = page.getByRole('tab', { name: /^dashboard$/i });
    this.employeeGoalsTab = page.getByRole('tab', { name: /^employee goals$/i });
    this.goalManagementTab = page.getByRole('tab', { name: /^goal management$/i });
    this.activeTabPanel = page.locator('main').last();
    this.selectDepartmentEmptyState = page.getByText(/choose a department above to view its goals dashboard/i);
  }

  // ─── Navigation ──────────────────────────────────────────────────────────

  /**
   * RE-GROUNDED (2026-09-22): Goals relocated AGAIN — `/employee/goals` is a real, live route
   * once more (it does NOT 404 against `/employee/:id`; that collision was fixed) and is now a
   * three-tab sub-app (Dashboard / Employee Goals / Goal Management) rather than a tab on
   * `/employee`. The flat goal-catalogue listing this method's callers (the pre-2026-09-22 test
   * suite) expect now lives on the **Goal Management** tab specifically — going there directly
   * via `?tab=management` reproduces the old listing's shape (Add Goal button, Search, table)
   * without changing any of those tests' own assertions. See `navigateToGoalsScreen()` below for
   * the general-purpose entry point used by the post-relocation (TC-EMPGOL-2xx/3xx) test cases,
   * which need the other two tabs and the Year/Department filters as well.
   */
  async navigateToGoals(): Promise<void> {
    await this.navigateToGoalsScreen({ tab: 'management' });
  }

  /**
   * General-purpose entry point for the relocated Goals screen (2026-09-22). Navigates straight
   * to `/employee/goals`, optionally with a `departmentId` and/or a `tab` query param, and waits
   * for the screen to leave its "Loading data..." state. GROUND-TRUTH CAVEAT (confirmed live):
   * `tab=` in the URL is written on tab click but NOT read back on load — passing `tab` here only
   * biases which tab we then explicitly click via `selectTab()`, it does not by itself change
   * which tab renders after `goto()`. `departmentId`, by contrast, IS honoured (redirected to)
   * automatically when omitted — the app substitutes the signed-in user's own department.
   */
  async navigateToGoalsScreen(opts: { departmentId?: string; tab?: GoalsTabName } = {}): Promise<void> {
    const params = new URLSearchParams();
    if (opts.departmentId) params.set('departmentId', opts.departmentId);
    const qs = params.toString();
    await this.page.goto(`/employee/goals${qs ? `?${qs}` : ''}`, { waitUntil: 'domcontentloaded' });
    await this.waitForGoalsScreenLoaded();
    if (opts.tab) await this.selectTab(opts.tab);
    await this.waitForGoalsScreenLoaded();
  }

  /** Wait out the shell's own "Loading data..." interstitial (confirmed live on every tab). */
  async waitForGoalsScreenLoaded(): Promise<void> {
    await this.page.getByText(/loading data\.\.\./i).first().waitFor({ state: 'hidden', timeout: 45_000 }).catch(() => {});
    await this.page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {});
  }

  // ─── Add/Edit Goal side panel ────────────────────────────────────────────

  async openAddGoalPanel(): Promise<void> {
    await this.addGoalBtn.click();
    await this.addGoalPanel.waitFor({ state: 'visible', timeout: 10000 });
  }

  async closeAddGoalPanel(): Promise<void> {
    if (await this.panelCancelBtn.isVisible().catch(() => false)) {
      // Cancel can be transiently disabled, or the panel can keep re-rendering (element
      // repeatedly detached mid-click) right after a rejected Save attempt while it settles
      // (confirmed live via TC-EMPGOL-112, 2026-08-19) — try a short-timeout click and fall back
      // to Escape on ANY failure rather than letting it hang for the full action timeout.
      await this.panelCancelBtn.click({ timeout: 3000 }).catch(() => {});
      if (await this.addGoalPanel.isVisible().catch(() => false)) {
        await this.page.keyboard.press('Escape').catch(() => {});
      }
      await this.addGoalPanel.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    }
  }

  createUniqueGoalName(prefix = 'AutoGoal'): string {
    return `${prefix}-${Date.now()}`;
  }

  /** Ground-truth confirmed live: Certificate Code is server-enforced unique across ALL goals —
   * a hardcoded literal (e.g. `'CERT-ADM-01'`) collides with whatever the same test created on any
   * PRIOR run and silently fails to save ("Goal with this certificate code already exists" error
   * toast), leaving the goal never actually created and every downstream assertion chasing a row
   * that doesn't exist. Same fix as createUniqueGoalName() — timestamp-suffix it. */
  createUniqueCertificateCode(prefix = 'CERT'): string {
    return `${prefix}-${Date.now()}`;
  }

  async fillGoalName(text: string): Promise<void> {
    await this.goalNameInput.fill(text);
    // Fuzzy-search combobox (cmdk) stays open after filling, with either a matching option or
    // the auto-generated "create new goal" entry pre-highlighted (aria-selected) — click it to
    // confirm and close the popover before touching any other field, otherwise it intercepts
    // subsequent clicks (observed live: Goal Type combobox blocked by the still-open popover;
    // pressing Enter alone did not close it, so a direct click on the highlighted item is used).
    const highlighted = this.page.locator('[cmdk-item][aria-selected="true"], [role="option"][aria-selected="true"]').first();
    if (await highlighted.isVisible({ timeout: 2000 }).catch(() => false)) {
      await highlighted.click().catch(() => {});
    } else {
      await this.page.keyboard.press('Escape').catch(() => {});
    }
    await this.page.locator('[data-radix-popper-content-wrapper]').first().waitFor({ state: 'hidden', timeout: 3000 }).catch(() => {});
  }

  /** A fuzzy-matched goal suggestion, with its assigned-employee count shown alongside (e.g. "NodeJS Basics (12)"). Unverified Selector — exact option markup not specified. */
  getGoalNameSuggestion(goalName: string): Locator {
    return this.page.getByRole('option', { name: new RegExp(goalName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') })
      .or(this.addGoalPanel.getByText(new RegExp(goalName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')));
  }

  async selectGoalNameSuggestion(goalName: string): Promise<boolean> {
    const option = this.getGoalNameSuggestion(goalName).first();
    const visible = await option.isVisible({ timeout: 3000 }).catch(() => false);
    if (visible) await option.click();
    return visible;
  }

  async getSuggestionCountText(goalName: string): Promise<string | null> {
    const option = this.getGoalNameSuggestion(goalName).first();
    const visible = await option.isVisible().catch(() => false);
    if (!visible) return null;
    return (await option.textContent().catch(() => null));
  }

  /**
   * `timeoutMs` lets callers right after a Save click WAIT for the fuzzy-match warning to render
   * instead of checking instantly. Ground-truth confirmed live: the warning fires from an async
   * fuzzy-match check that isn't done by the time a plain `isVisible()` (no wait) is called right
   * after `panelSaveBtn.click()` — the one-shot check misses it, the warning stays open
   * unacknowledged, and the goal is never actually created (root cause behind TC-EMPGOL-011/024/072
   * repeatedly finding "no such row" after a create that silently never completed). Defaults to 0
   * (instant check, unchanged) for existing call sites that check right after typing a name, where
   * the warning — if any — has already had time to render.
   */
  async isDuplicateWarningVisible(timeoutMs = 0): Promise<boolean> {
    if (timeoutMs > 0) {
      return this.duplicateGoalWarningPopup.waitFor({ state: 'visible', timeout: timeoutMs }).then(() => true).catch(() => false);
    }
    return this.duplicateGoalWarningPopup.isVisible().catch(() => false);
  }

  async getDuplicateWarningText(): Promise<string> {
    return (await this.duplicateGoalWarningPopup.textContent().catch(() => '')) ?? '';
  }

  /** Acknowledge the duplicate-goal warning to proceed with creating a new goal rather than selecting a suggestion.
   * Ground-truth confirmed live: the real dialog is titled "Verify before creating" with a
   * "Confirm & Create" / "Cancel" button pair — the prior exact-match regex (`^(proceed|continue|
   * create|ok|yes)$`) never matched "Confirm & Create" since it's a multi-word label, not one of
   * those exact words. Widened to a substring match. */
  async acknowledgeDuplicateWarning(): Promise<void> {
    const proceedBtn = this.duplicateGoalWarningPopup.getByRole('button', { name: /confirm|proceed|continue|create|^ok$|^yes$/i });
    if (await proceedBtn.isVisible().catch(() => false)) {
      await proceedBtn.click();
      await this.duplicateGoalWarningPopup.waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
    }
  }

  async selectGoalType(goalType: 'Technical' | 'Certificate'): Promise<void> {
    const visible = await this.goalTypeDropdown.isVisible().catch(() => false);
    if (!visible) return;
    await this.goalTypeDropdown.click();
    const option = this.page.getByRole('option', { name: new RegExp(`^${goalType}$`, 'i') });
    if (await option.first().isVisible().catch(() => false)) {
      await option.first().click();
    } else {
      // Fallback: native <select>-style dropdown.
      await this.goalTypeDropdown.selectOption({ label: goalType }).catch(() => {});
    }
  }

  /** All options currently offered by the Goal Type dropdown — used to assert exactly Technical/Certificate are present (TC-EMPGOL-068). Unverified Selector — assumes options render via role="option". */
  async getGoalTypeOptionsText(): Promise<string[]> {
    const visible = await this.goalTypeDropdown.isVisible().catch(() => false);
    if (!visible) return [];
    await this.goalTypeDropdown.click();
    const options = this.page.getByRole('option');
    const count = await options.count().catch(() => 0);
    const texts: string[] = [];
    for (let i = 0; i < count; i++) {
      texts.push(((await options.nth(i).textContent().catch(() => '')) ?? '').trim());
    }
    return texts;
  }

  async isCertificateCodeEnabled(): Promise<boolean> {
    const visible = await this.certificateCodeInput.isVisible().catch(() => false);
    if (!visible) return false;
    return !(await this.certificateCodeInput.isDisabled().catch(() => true));
  }

  async fillCertificateCode(code: string): Promise<boolean> {
    if (!(await this.isCertificateCodeEnabled())) return false;
    await this.certificateCodeInput.fill(code);
    return true;
  }

  /** Ground-truth confirmed live: opening Edit on a Certificate-type goal renders the panel with
   * Goal Type visible first — the conditional Certificate Code field only appears a beat later,
   * once an async fetch of the goal's full data resolves and re-renders the form. Reading
   * `inputValue()` immediately (no wait) can catch it before that render, silently returning ''
   * instead of the real value. Wait for the field to actually be visible first. */
  async getCertificateCodeValue(): Promise<string> {
    await this.certificateCodeInput.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    return (await this.certificateCodeInput.inputValue().catch(() => '')) ?? '';
  }

  async fillDescription(text: string): Promise<void> {
    const visible = await this.descriptionInput.isVisible().catch(() => false);
    if (!visible) return;
    await this.descriptionInput.fill(text).catch(async () => {
      // Rich-text editors are frequently contenteditable divs rather than <textarea> — retry via click+type.
      await this.descriptionInput.click();
      await this.page.keyboard.type(text);
    });
  }

  async getDescriptionText(): Promise<string> {
    return (await this.descriptionInput.textContent().catch(() => '')) ?? (await this.descriptionInput.inputValue().catch(() => '')) ?? '';
  }

  /** Apply bold formatting to the Description field via its rich-text toolbar. Unverified Selector — toolbar markup not specified. Returns false if no toolbar is found (plain textarea). */
  async applyBoldToDescription(): Promise<boolean> {
    const boldBtn = this.addGoalPanel.getByRole('button', { name: /^bold$/i });
    const visible = await boldBtn.isVisible().catch(() => false);
    if (visible) await boldBtn.click();
    return visible;
  }

  /** Apply a bullet list to the Description field via its rich-text toolbar. Unverified Selector. */
  async applyBulletListToDescription(): Promise<boolean> {
    const bulletBtn = this.addGoalPanel.getByRole('button', { name: /bullet|unordered list/i });
    const visible = await bulletBtn.isVisible().catch(() => false);
    if (visible) await bulletBtn.click();
    return visible;
  }

  async isImmutabilityNoticeVisible(): Promise<boolean> {
    return this.immutabilityNotice.isVisible().catch(() => false);
  }

  async isDepartmentDropdownPresent(): Promise<boolean> {
    return this.departmentDropdown.isVisible().catch(() => false);
  }

  /** Select a department in the (proposed, unconfirmed) Department dropdown. Returns false if the control isn't present in the current build. */
  async selectDepartmentInPanel(departmentName: string): Promise<boolean> {
    const present = await this.isDepartmentDropdownPresent();
    if (!present) return false;
    await this.departmentDropdown.click();
    const option = this.page.getByRole('option', { name: new RegExp(departmentName, 'i') });
    const visible = await option.first().isVisible().catch(() => false);
    if (visible) await option.first().click();
    return visible;
  }

  async getDepartmentDropdownOptionsText(): Promise<string[]> {
    const present = await this.isDepartmentDropdownPresent();
    if (!present) return [];
    await this.departmentDropdown.click();
    const options = this.page.getByRole('option');
    const count = await options.count().catch(() => 0);
    const texts: string[] = [];
    for (let i = 0; i < count; i++) {
      texts.push(((await options.nth(i).textContent().catch(() => '')) ?? '').trim());
    }
    return texts;
  }

  /**
   * Search the Assign to multiselect for a given employee and, if offered, select them.
   * Returns whether the employee was selectable — used both to add assignees and to assert
   * an out-of-scope employee is NOT selectable (TC-EMPGOL-046/047/061/075).
   */
  async addAssignee(employeeName: string): Promise<boolean> {
    const visible = await this.assignToMultiselect.isVisible().catch(() => false);
    if (!visible) return false;
    await this.assignToMultiselect.click();
    await this.assignToMultiselect.fill(employeeName).catch(() => {});
    const option = this.page.getByRole('option', { name: new RegExp(employeeName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') }).first();
    const optionVisible = await option.isVisible({ timeout: 3000 }).catch(() => false);
    if (optionVisible) await option.click();
    return optionVisible;
  }

  async isEmployeeSelectableInAssignTo(employeeName: string): Promise<boolean> {
    return this.addAssignee(employeeName);
  }

  /**
   * Select the first N employees offered by Assign to without depending on specific seeded
   * employee names. Returns the selected employees' visible names.
   */
  async addFirstAvailableAssignees(count: number): Promise<string[]> {
    const visible = await this.assignToMultiselect.isVisible().catch(() => false);
    if (!visible) return [];
    await this.assignToMultiselect.click();
    const options = this.page.getByRole('option');
    await options.first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    const names: string[] = [];
    const available = await options.count().catch(() => 0);
    for (let i = 0; i < Math.min(count, available); i++) {
      const opt = options.nth(0); // re-query each time — selecting one usually removes it from the open list
      const name = ((await opt.textContent().catch(() => '')) ?? '').trim();
      if (!name) break;
      await opt.click().catch(() => {});
      names.push(name);
      await this.assignToMultiselect.click().catch(() => {});
    }
    return names;
  }

  /** Selected employee's removable chip in Assign to. Unverified Selector — exact chip markup not specified. */
  getAssigneeChip(employeeName: string): Locator {
    return this.addGoalPanel.locator('[data-slot="badge"], [class*="chip" i]').filter({ hasText: employeeName })
      .or(this.addGoalPanel.getByText(employeeName))
      .first();
  }

  async removeAssignee(employeeName: string): Promise<boolean> {
    const chip = this.getAssigneeChip(employeeName);
    const removeBtn = chip.getByRole('button', { name: /remove|close|x/i });
    const visible = await removeBtn.isVisible().catch(() => false);
    if (visible) await removeBtn.click();
    return visible;
  }

  /** Ground-truth confirmed live: the "Verify before creating" duplicate-goal warning fires on
   * clicking Save (fuzzy-matched against ANY similarly-named existing goal, not just an
   * exact-name collision) — not only right after typing the Goal Name as previously assumed. Must
   * check for and dismiss it here too, or the panel never closes and every assertion after Save
   * times out waiting on a row that was never actually created.
   *
   * GROUND-TRUTH CORRECTION: the fuzzy-match check itself is async (a beat behind the click, not
   * instant) — checking with a plain instant `isVisible()` right after the click can miss a
   * warning that hasn't rendered yet, silently skip the acknowledge, and leave the goal never
   * actually created (root cause behind TC-EMPGOL-011/024/072 repeatedly finding "no such row"
   * after a create that silently never completed). Give it up to 2s to appear before deciding
   * there isn't one. */
  async savePanel(): Promise<void> {
    await this.panelSaveBtn.click();
    if (await this.isDuplicateWarningVisible(4000)) await this.acknowledgeDuplicateWarning();
    await this.addGoalPanel.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
  }

  /**
   * Click Save and dismiss the fuzzy-match duplicate-goal warning if it appears — same ground
   * truth as savePanel() (the warning fires after Save, not before, and matches against ANY
   * similarly-named existing goal, which is common across repeated test runs using a shared
   * `TC0xx-<timestamp>` naming convention) — but WITHOUT savePanel()'s wait-for-panel-hidden,
   * so failure-path tests (mocked 500s) that expect the panel to stay open aren't stuck paying a
   * 10s timeout for a hide that will never happen.
   */
  async clickSaveDismissingDuplicateWarning(): Promise<void> {
    await this.panelSaveBtn.click().catch(() => {});
    if (await this.isDuplicateWarningVisible(4000)) await this.acknowledgeDuplicateWarning();
  }

  async isSaveEnabled(): Promise<boolean> {
    return this.panelSaveBtn.isEnabled().catch(() => false);
  }

  /** Inline mandatory-field validation error (e.g. Goal Name/Goal Type left unselected, or an
   * empty Certificate Code on a Certificate-type goal). Not a verbatim-quoted message in source —
   * matched generically. */
  getInlineFieldError(fieldLabel: 'Goal Name' | 'Goal Type' | 'Certificate Code'): Locator {
    return this.addGoalPanel.getByText(new RegExp(`${fieldLabel}.*(mandatory|required)|mandatory|required|is required`, 'i')).first();
  }

  // ─── Edit Goal panel (post-creation lock) ───────────────────────────────

  async isGoalNameFieldEditableInPanel(): Promise<boolean> {
    const visible = await this.goalNameInput.isVisible().catch(() => false);
    if (!visible) return false;
    return !(await this.goalNameInput.isDisabled().catch(() => true));
  }

  async isGoalTypeFieldEditableInPanel(): Promise<boolean> {
    const visible = await this.goalTypeDropdown.isVisible().catch(() => false);
    if (!visible) return false;
    return !(await this.goalTypeDropdown.isDisabled().catch(() => true));
  }

  /**
   * Enumerate every field currently rendered in the Add/Edit Goal panel with its label and
   * enabled/disabled state — used to assert the post-creation editable-fields lock generically
   * (TC-EMPGOL-108/109), without hard-coding which exact fields exist beyond what's actually
   * rendered (a Technical-type goal never renders Certificate Code at all, for example).
   *
   * Ground-truth confirmed live (see `goalTypeDropdown` above): fields render as a
   * `[data-slot="form-item"]` container with a sibling `[data-slot="form-label"]` label — reused
   * generically here rather than assumed only for Goal Type. Falls back to the four fields this
   * page object already models by their own best-effort selectors if that generic scan finds
   * nothing, so an unconfirmed markup change degrades to "check what we already model" instead of
   * silently reporting zero fields (which would make TC-EMPGOL-108's lock assertion vacuously pass).
   */
  async getEditPanelFieldStates(): Promise<Array<{ label: string; enabled: boolean }>> {
    const formItems = this.addGoalPanel.locator('[data-slot="form-item"]');
    const itemCount = await formItems.count().catch(() => 0);
    const results: Array<{ label: string; enabled: boolean }> = [];

    for (let i = 0; i < itemCount; i++) {
      const item = formItems.nth(i);
      const label = ((await item.locator('[data-slot="form-label"]').first().textContent().catch(() => '')) ?? '').trim();
      if (!label) continue;
      const control = item.locator('input, textarea, [role="combobox"], [role="textbox"], button[role="combobox"]').first();
      const controlVisible = await control.isVisible().catch(() => false);
      let enabled = true;
      if (controlVisible) {
        const disabledAttr = await control.getAttribute('disabled').catch(() => null);
        const ariaDisabled = await control.getAttribute('aria-disabled').catch(() => null);
        enabled = disabledAttr === null && ariaDisabled !== 'true';
      }
      results.push({ label: label.replace(/\*$/, '').trim(), enabled });
    }

    if (results.length > 0) return results;

    // Fallback: the four fields this page object already models by best-effort selector, in case
    // the generic `[data-slot="form-item"]` scan doesn't match the live markup for this panel.
    const known: Array<[string, Locator]> = [
      ['Goal Name', this.goalNameInput],
      ['Goal Type', this.goalTypeDropdown],
      ['Certificate Code', this.certificateCodeInput],
      ['Description', this.descriptionInput],
    ];
    for (const [label, locator] of known) {
      const visible = await locator.isVisible().catch(() => false);
      if (!visible) continue;
      const enabled = !(await locator.isDisabled().catch(() => true));
      results.push({ label, enabled });
    }
    return results;
  }

  // ─── Goals Listing ───────────────────────────────────────────────────────

  /** Filter the Goals Listing via the real Search input — required before asserting on a
   * freshly created goal, since it sorts to the bottom (0 allocated) and may be off-page.
   * Ground-truth confirmed live: the search is debounced client-side before it fires its API
   * call — `waitForLoadState('networkidle')` right after `fill()` can resolve BEFORE the
   * debounced request even starts (no network activity yet to wait on), silently returning
   * with the table still showing its pre-search contents. Give the debounce a moment to fire
   * first. */
  async searchGoals(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await this.page.waitForTimeout(500);
    await this.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
    // Ground-truth confirmed live: the search result table shows its own "Loading data..." state
    // that can still be up when networkidle resolves (the fetch itself is in-flight, not yet
    // counted as idle network by the time this checks) — wait for it to clear too, or the caller's
    // very next row lookup reads a table that's still mid-refresh and finds nothing.
    await this.page.getByText(/loading data/i).first().waitFor({ state: 'hidden', timeout: 10_000 }).catch(() => {});
    // GROUND-TRUTH CORRECTION: confirmed live that the results-count footer ("Showing 1 - 1 of 1
    // results") can update a beat BEFORE the <tbody> rows themselves finish painting — a caller's
    // very next `tbody tr` count() can read 0 despite the footer already reporting 1. Wait for
    // either at least one row, or an explicit empty-state, before returning.
    await Promise.race([
      this.goalsTable.locator('tbody tr').first().waitFor({ state: 'visible', timeout: 5_000 }),
      this.emptyStateText.waitFor({ state: 'visible', timeout: 5_000 }),
    ]).catch(() => {});
  }

  /** A goal row in the Goals Listing, matched by its visible name. Unverified Selector — exact row markup not specified. */
  getGoalRow(goalName: string): Locator {
    return this.goalsTable.getByRole('row').filter({ hasText: goalName })
      .or(this.goalsTable.getByRole('listitem').filter({ hasText: goalName }))
      .first();
  }

  /**
   * The first real DATA row in the Goals Listing — NOT the header row. Ground-truth confirmed
   * live: `getByRole('row')` matches the `<thead><tr>` header just as much as a `<tbody><tr>` data
   * row, so a naive `.getByRole('row').first()` (used throughout the spec files to grab "any goal
   * to test with") actually grabs the header row. Its "name" then becomes the literal column-header
   * text ("Goal NameTypeDescription...Action"), which subsequently fails to search-match anything
   * and — since the header row still renders regardless of the (now-empty) search results — a
   * leftover header sort-icon button gets clicked instead of a real per-row action button,
   * producing a confusing "opened: true, but nothing relevant appeared" failure downstream.
   * Excludes rows containing a `columnheader` cell so this holds regardless of row index.
   */
  getFirstDataRow(): Locator {
    return this.goalsTable.getByRole('row').filter({ hasNot: this.page.getByRole('columnheader') })
      .or(this.goalsTable.getByRole('listitem'))
      .first();
  }

  /**
   * The Goal Name for a given row — NOT `row.textContent()`, which fuses every cell's text
   * together with no separator (ground-truth confirmed live: a real row's `textContent()` reads
   * "GraphQL API DesignTechnicalDesign and implement...1221", not "GraphQL API Design").
   *
   * RE-GROUNDED (2026-08-18): column order changed live — real columns are now Action | Goal Name
   * | Type | Description | Assigned Emp. (Dept.) | Assigned Emp. (Org.) (Action moved from last to
   * first). Goal Name is the SECOND cell now, not the first.
   */
  async getGoalNameFromRow(row: Locator): Promise<string> {
    return ((await row.getByRole('cell').nth(1).textContent().catch(() => '')) ?? '').trim();
  }

  /**
   * GROUNDED (2026-08-18): select a department scope from the new combobox between Search and the
   * table (default label "MANAGEMENT"). Effect on the goals listing is not yet confirmed live —
   * used defensively by callers that want to assert on/rule out a scoping effect. Returns false if
   * the combobox or the named option isn't present.
   */
  async selectDepartmentScope(departmentName: string): Promise<boolean> {
    const visible = await this.departmentScopeCombobox.isVisible().catch(() => false);
    if (!visible) return false;
    await this.departmentScopeCombobox.click();
    const option = this.page.getByRole('option', { name: new RegExp(`^${departmentName}$`, 'i') });
    const optionVisible = await option.first().isVisible({ timeout: 3000 }).catch(() => false);
    if (optionVisible) {
      await option.first().click();
      await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    } else {
      await this.page.keyboard.press('Escape').catch(() => {});
    }
    return optionVisible;
  }

  /** All options currently offered by the Goals Listing's department-scope combobox — used to
   * pick a concrete non-default department to apply as a filter (TC-EMPGOL-105/106/113/114/115)
   * without hard-coding a specific department name. Returns [] if the combobox isn't present in
   * the current build. */
  async getDepartmentScopeOptionsText(): Promise<string[]> {
    const visible = await this.departmentScopeCombobox.isVisible().catch(() => false);
    if (!visible) return [];
    await this.departmentScopeCombobox.click();
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

  /**
   * Reset the Goals Listing department-scope filter back to its default/all-departments state —
   * used to assert the filter can be cleared (TC-EMPGOL-106). Unverified Selector: neither a
   * dedicated clear button nor an explicit "All"/"All Departments" option has been confirmed live;
   * tries both, in that order, and returns false if neither is found so callers can skip rather
   * than assume a reset happened.
   */
  async clearDepartmentScope(): Promise<boolean> {
    const visible = await this.departmentScopeCombobox.isVisible().catch(() => false);
    if (!visible) return false;

    const clearBtn = this.page.getByRole('button', { name: /clear (department )?filter|reset filter/i });
    if (await clearBtn.isVisible().catch(() => false)) {
      await clearBtn.click();
      await this.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
      return true;
    }

    await this.departmentScopeCombobox.click();
    const allOption = this.page.getByRole('option', { name: /^all( departments)?$/i });
    const optionVisible = await allOption.first().isVisible({ timeout: 3000 }).catch(() => false);
    if (optionVisible) {
      await allOption.first().click();
      await this.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
      return true;
    }
    await this.page.keyboard.press('Escape').catch(() => {});
    return false;
  }

  /**
   * Total goal count. Ground-truth confirmed live: a real `role="status"` label reads
   * "Showing 1 - 73 of 73 results" — this is the TRUE total, and is what nearly every caller of
   * this method actually wants ("record count matches API total", "count increases by 1 after
   * create"). Counting rendered `<tr>`s only reflects the CURRENT page — the table is genuinely
   * paginated ("Previous 1 2 3 ... Next" confirmed live) — so a DOM row count silently breaks any
   * before/after delta whenever the changed row doesn't land on the currently-visible page (e.g. a
   * freshly created goal with 0 allocated employees sorts to the very last page). Falls back to a
   * DOM row count (minus the header row) only if the summary label isn't present (e.g. empty state).
   */
  async getRowCount(): Promise<number> {
    const summaryText = await this.page.getByText(/showing\s+\d+\s*-\s*\d+\s+of\s+\d+\s+results?/i).first()
      .textContent().catch(() => null);
    const match = summaryText?.match(/of\s+(\d+)\s+results?/i);
    if (match) return parseInt(match[1], 10);

    const rows = this.goalsTable.getByRole('row').or(this.goalsTable.getByRole('listitem'));
    const count = await rows.count().catch(() => 0);
    return Math.max(0, count - 1);
  }

  /**
   * Parse the department-assigned and organization-assigned counts from a goal row. Real columns
   * (confirmed live): Goal Name | Type | Description | Assigned Emp. (Dept.) | Assigned Emp.
   * (Org.) | Action — the first two digit-groups found in the row text (once the goal name itself
   * is stripped out) are [department, organization], in that order.
   *
   * GROUND-TRUTH CORRECTIONS (two separate issues, both confirmed live):
   * 1. The requirement doc says a zero-assignment goal shows "0" in these columns, but the real
   *    app renders the literal word "None" instead — a plain digit-regex extraction returns
   *    nothing for "None", silently producing `null` (not `0`). Normalize "None" -> "0" first.
   * 2. Test-generated goal names embed a timestamp (e.g. "TC001-1784123915021"), which is itself
   *    2 digit-groups — matching digits against the FULL row text (as originally written) picks
   *    up the name's own digits before ever reaching the real count columns. Strip the goal name
   *    out of the row text before extracting digit-groups so this holds regardless of naming
   *    convention.
   */
  async getRowCounts(goalName: string): Promise<{ department: number | null; organization: number | null }> {
    // Goals sort descending by allocated count — a target row created/updated moments ago may not
    // be on the currently-visible page. Search first so row-dependent lookups don't depend on the
    // caller remembering to do it (see searchGoals() on goalsTable/getGoalRow()).
    await this.searchGoals(goalName).catch(() => {});
    const row = this.getGoalRow(goalName);
    const visible = await row.isVisible().catch(() => false);
    if (!visible) return { department: null, organization: null };
    // Read the two count cells by their column headers rather than regexing every digit out of the
    // row's fused text. A row's `textContent()` concatenates all cells, so the Description column's
    // own digits (and any year, e.g. "2026") were being picked up as the department count — that is
    // how TC-EMPGOL-116 came to compare 2026 against an API total of 220.
    const department = await this.getRowCountByHeader(row, /dept/i);
    const organization = await this.getRowCountByHeader(row, /org/i);
    return { department, organization };
  }

  /** A numeric cell of `row`, located by its column header ("none" counts as 0). */
  private async getRowCountByHeader(row: Locator, header: RegExp): Promise<number | null> {
    const headers = await this.goalsTable.getByRole('columnheader').allInnerTexts().catch(() => [] as string[]);
    const index = headers.findIndex(h => header.test(h.trim()));
    if (index === -1) return null;
    const text = ((await row.getByRole('cell').nth(index).textContent().catch(() => '')) ?? '').trim();
    if (/^none$/i.test(text)) return 0;
    const match = text.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  }

  /** The sort-driving allocated-employee count for a goal — taken as the last digit-group in the
   * row (mirrors the sibling Skills module's combined-count convention). Ground-truth: the real
   * column shows "None" for zero, not "0" — normalized here same as getRowCounts(). Unverified:
   * whether sort order is actually driven by this (org) count vs. the department count. */
  async getAllocatedCount(goalName: string): Promise<number | null> {
    await this.searchGoals(goalName).catch(() => {});
    const row = this.getGoalRow(goalName);
    const visible = await row.isVisible().catch(() => false);
    if (!visible) return null;
    const text = ((await row.textContent().catch(() => '')) ?? '').replace(/none/gi, ' 0 ');
    const match = text.match(/(\d+)\s*$/);
    return match ? parseInt(match[1], 10) : null;
  }

  /** Allocated-employee counts for every row currently in the Goals Listing, top to bottom — used to assert descending sort order (TC-EMPGOL-007/085). */
  async getAllRowAllocatedCounts(): Promise<number[]> {
    const rows = this.goalsTable.getByRole('row').or(this.goalsTable.getByRole('listitem'));
    const count = await rows.count().catch(() => 0);
    const counts: number[] = [];
    for (let i = 0; i < count; i++) {
      const text = ((await rows.nth(i).textContent().catch(() => '')) ?? '').replace(/none/gi, ' 0 ');
      const match = text.match(/(\d+)\s*$/);
      if (match) counts.push(parseInt(match[1], 10));
    }
    return counts;
  }

  /** Row-level Edit option — verbatim: `User will be able to edit the existing goal using the edit option on the table.` */
  getEditGoalBtn(goalName: string): Locator {
    return this.getGoalRow(goalName).getByRole('button', { name: /^edit$/i });
  }

  /**
   * Ground-truth confirmed live: Edit/Delete are icon-only buttons (`aria-label="Edit"`/
   * `aria-label="Delete"` — the name-matching locator was always correct) that are HOVER-revealed
   * — `isVisible()` on the row without first hovering reports `false`, so the previous early-return
   * guard silently skipped every edit attempt (observed: TC-EMPGOL-026's Certificate Code edit
   * "worked" against a stale still-open Add panel because clickEditGoal never actually opened Edit
   * mode). Hover the row first, same as a real user would.
   *
   * GROUND-TRUTH CORRECTION (confirmed via live probe): the Edit panel becomes visible and its
   * fields interactive BEFORE an async fetch of the goal's full record resolves and resets the
   * form. Editing Certificate Code/Description in that window gets SILENTLY REVERTED back to the
   * original value once that fetch resolves — the field visibly shows the typed value for a
   * moment, then snaps back, leaving the form's isDirty/isValid state false and Save permanently
   * disabled (root cause of TC-EMPGOL-025/026/095 hanging for 15s on a Save click that can never
   * succeed). This is a real app race condition, not just a test timing issue — reported separately.
   * Waiting for network to settle plus a fixed buffer here lets that reset complete before any
   * caller starts editing fields, which is cheaper than adding the same wait to every edit method.
   */
  async clickEditGoal(goalName: string): Promise<boolean> {
    await this.searchGoals(goalName).catch(() => {});
    const row = this.getGoalRow(goalName);
    await row.hover().catch(() => {});
    const btn = this.getEditGoalBtn(goalName);
    const visible = await btn.isVisible().catch(() => false);
    if (!visible) return false;
    await btn.click();
    await this.addGoalPanel.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    await this.page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
    await this.page.waitForTimeout(1000);
    return true;
  }

  /** Row-level Delete option — verbatim: `the "delete" option will be disabled` (implying it exists and is conditionally enabled/disabled). */
  getDeleteGoalBtn(goalName: string): Locator {
    return this.getGoalRow(goalName).getByRole('button', { name: /^delete$/i });
  }

  /** Same hover-revealed-icon-button ground truth as clickEditGoal() above — must hover the row before checking visibility. */
  async isDeleteEnabled(goalName: string): Promise<boolean> {
    await this.searchGoals(goalName).catch(() => {});
    const row = this.getGoalRow(goalName);
    await row.hover().catch(() => {});
    const btn = this.getDeleteGoalBtn(goalName);
    const visible = await btn.isVisible().catch(() => false);
    if (!visible) return false;
    return btn.isEnabled().catch(() => false);
  }

  async clickDeleteGoal(goalName: string): Promise<void> {
    await this.searchGoals(goalName).catch(() => {});
    const row = this.getGoalRow(goalName);
    await row.hover().catch(() => {});
    await this.getDeleteGoalBtn(goalName).click();
  }

  /**
   * Confirm a goal deletion via the shared BasePage confirmation-dialog helpers. Whether a
   * confirmation dialog exists at all for this destructive action is unconfirmed in the source
   * (unclear topic) — callers should check `getConfirmDialog().isVisible()` first and treat its
   * absence as "no confirmation step" rather than a hard failure.
   */
  async confirmDeleteGoal(): Promise<void> {
    await this.confirmAction();
    await this.getConfirmDialog().waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
  }

  async cancelDeleteGoal(): Promise<void> {
    await this.cancelAction();
    await this.getConfirmDialog().waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
  }

  // ─── Per-goal employee list / department view toggle ────────────────────

  /** Expand/open a goal row to view its assigned-employee list. Ground-truth confirmed live: there
   * is no dedicated "view employees" button and clicking the row itself does nothing — the
   * department-assigned COUNT VALUE ("1", "221", ...) is itself the clickable trigger, opening a
   * popover titled "Department Employees" (department-assigned count) / presumably an
   * organization-scoped equivalent for the second count. Uses the first count button (department-
   * scoped, matching this method's original "view employees for this goal" intent).
   *
   * GROUND-TRUTH CORRECTION: searching unconditionally before every lookup (added to fix the
   * separate "freshly created goal sorts off-page" problem elsewhere) actively breaks this method
   * — confirmed live: typing into Search triggers a table refetch/re-render that leaves the row
   * DOM in a transient state, so a click landing right after `searchGoals()` resolves silently
   * fails to open the popover (no error, `opened` still reports `true` because the button itself
   * was clickable — just not the same live button that's still wired to the popover). Only search
   * as a fallback when the row isn't already visible on the current page. */
  async openGoalEmployeeList(goalName: string): Promise<boolean> {
    let row = this.getGoalRow(goalName);
    let visible = await row.isVisible().catch(() => false);
    if (!visible) {
      await this.searchGoals(goalName).catch(() => {});
      row = this.getGoalRow(goalName);
      visible = await row.isVisible().catch(() => false);
    }
    if (!visible) return false;
    // RE-GROUNDED (2026-08-18): column order changed live — "Action" (Edit/Delete) is now the
    // FIRST cell, not the last, so `row.getByRole('button').first()` started grabbing "Edit"
    // instead of the department-assigned-count button (confirmed live root cause of
    // TC-EMPGOL-005/058/039 all failing to find the "Department Employees" popover). The count
    // buttons are the only ones with a purely numeric accessible name (e.g. "1", "221") — match on
    // that instead of position.
    const countBtn = row.getByRole('button', { name: /^\d+$/ }).first();
    if (!(await countBtn.isVisible().catch(() => false))) return false;
    await countBtn.click();
    return true;
  }

  /** Ground-truth confirmed live: the popover has NO ARIA role at all (plain Radix Popover div,
   * class `text-popover-foreground`) — `getByRole('dialog')`/`aside[role="complementary"]` never
   * matched it. Scope by the distinctive class + the real heading text instead.
   *
   * GROUND-TRUTH CORRECTION: the organisation-wide popover's real heading uses the BRITISH
   * spelling "Organisation Employees" (confirmed live) — the American "organization" spelling
   * originally matched here never found it, silently making every caller treat a popover that HAD
   * opened as "not found" (confirmed live: `[data-radix-popper-content-wrapper]` count was 1 while
   * this filtered locator matched 0). Accept both spellings. */
  getGoalEmployeeListPanel(): Locator {
    return this.page.locator('.text-popover-foreground').filter({ hasText: /department employees|organi[sz]ation employees/i }).first();
  }

  async isEmployeeInGoalEmployeeList(employeeName: string): Promise<boolean> {
    return this.getGoalEmployeeListPanel().getByText(new RegExp(employeeName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')).isVisible().catch(() => false);
  }

  /**
   * Every employee name currently listed in the open goal-employees popover (Department/
   * Organization Employees) — used to assert department-scoping of a goal's assignee list
   * (TC-EMPGOL-113/114). Unverified Selector: exact list-item markup inside the popover is not
   * confirmed live (see `getGoalEmployeeListPanel()`'s own ground-truth note); falls back to
   * splitting the panel's own text into non-empty lines if no `listitem`/`li` markup is found.
   */
  async getGoalEmployeeListNames(): Promise<string[]> {
    const panel = this.getGoalEmployeeListPanel();
    const items = panel.getByRole('listitem').or(panel.locator('li'));
    const count = await items.count().catch(() => 0);
    if (count > 0) {
      const names: string[] = [];
      for (let i = 0; i < count; i++) {
        const text = ((await items.nth(i).textContent().catch(() => '')) ?? '').trim();
        if (text) names.push(text);
      }
      return names;
    }
    const raw = (await panel.textContent().catch(() => '')) ?? '';
    return raw.split(/\n+/).map(s => s.trim()).filter(Boolean);
  }

  /** Per-goal single-department employee-view toggle — inferred, unconfirmed control type (dropdown/tabs/checkbox). Unverified Selector. */
  async selectPerGoalDepartmentFilter(goalName: string, departmentName: string): Promise<boolean> {
    await this.openGoalEmployeeList(goalName);
    const panel = this.getGoalEmployeeListPanel();
    const filterControl = panel.getByRole('combobox', { name: /department/i })
      .or(panel.getByRole('tab', { name: new RegExp(departmentName, 'i') }))
      .or(panel.getByRole('button', { name: new RegExp(departmentName, 'i') }));
    const visible = await filterControl.first().isVisible().catch(() => false);
    if (!visible) return false;
    await filterControl.first().click();
    const option = panel.getByRole('option', { name: new RegExp(departmentName, 'i') });
    if (await option.first().isVisible().catch(() => false)) await option.first().click();
    return true;
  }

  // ─── Employee's own profile Goals tab — verbatim: "Goals should also be visible in goals tab in user profile page." ──

  async navigateToOwnProfileGoalsTab(): Promise<void> {
    await this.page.goto('/profile', { waitUntil: 'domcontentloaded' }).catch(() => {});
    const goalsTab = this.page.getByRole('tab', { name: /^goals$/i }).or(this.page.getByRole('heading', { name: /^goals$/i }));
    const visible = await goalsTab.first().isVisible({ timeout: 5000 }).catch(() => false);
    if (visible) await goalsTab.first().click().catch(() => {});
  }

  /**
   * Ground-truth confirmed via a live probe of /profile: the Goals tab under "Project Allocation
   * Details" renders a real `role="tabpanel"` (Radix Tabs) containing exactly one semantic
   * `<table>` (Goal Name / Progress % / Status / Start Date / End Date / Notes columns; shows
   * "No data available — No goals found." when empty). The prior `getByRole('list').first().or(
   * getByRole('main'))` matched 3 real elements (sidebar <ul>, outer <main>, inner <main>) and hit
   * a strict-mode violation — scoping to the active tabpanel's table avoids the sidebar/layout
   * collision entirely instead of guessing generic layout roles.
   */
  getProfileGoalsList(): Locator {
    return this.page.getByRole('tabpanel').getByRole('table');
  }

  async isGoalInProfileList(goalName: string): Promise<boolean> {
    return this.getProfileGoalsList().getByText(new RegExp(goalName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')).isVisible().catch(() => false);
  }

  // ─── Employee role write-control visibility (TC-EMPGOL-082) ─────────────

  async hasAnyGoalWriteControlsVisible(): Promise<boolean> {
    const controls = this.addGoalBtn
      .or(this.page.getByRole('button', { name: /^edit$/i }))
      .or(this.page.getByRole('button', { name: /^delete$/i }));
    return controls.first().isVisible({ timeout: 3000 }).catch(() => false);
  }

  // ─── API helpers ──────────────────────────────────────────────────────────
  // Ground-truth confirmed live via network capture during a real goal-create flow: the real API
  // lives on a SEPARATE origin, `https://simerp-dev-api.simform.solutions`, under `/api/v1/...`
  // (e.g. `GET /api/v1/goals`, `POST /api/v1/goals`, `GET /api/v1/goals/search/fuse`) — NOT the
  // frontend's own origin under a bare `/api/...` path as previously guessed. A relative URL like
  // `/api/goals/1/assignments` resolves against the frontend origin (this page's `baseURL`), which
  // likely hit an SPA catch-all returning 200 rather than the real API's 401/403 — the probable
  // cause of security tests asserting "expected 401/403/404, got 200". Exact sub-resource paths
  // beyond `/goals` itself (e.g. an "assignments" endpoint) are still unconfirmed — only the base
  // origin + `/api/v1` prefix is fixed here; a relative path's specific segments are still a guess.
  // Overridable so the same specs can run against a local stack (e.g. API_BASE_URL=http://localhost:3002)
  // without editing code. Defaults to the staging API, so existing staging runs are unchanged.
  private static readonly API_BASE = process.env.API_BASE_URL || 'https://simerp-dev-api.simform.solutions';

  private resolveApiUrl(url: string): string {
    if (/^https?:\/\//i.test(url)) return url;
    const path = url.startsWith('/api/v1') ? url : url.replace(/^\/api\//, '/api/v1/');
    return GoalsPage.API_BASE + path;
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

  /**
   * Find the first goal (from the API, in the calling page's own auth scope) whose department/
   * organization assigned-employee counts satisfy `predicate`. Ground-truth confirmed live:
   * `GET /api/v1/goals` returns `data.items[]` with `departmentAssigned`/`organizationAssigned`
   * fields per goal that exactly match what the Goals Listing table renders for that same
   * logged-in user (verified: a TM-scoped account's API-reported counts for a goal matched the
   * UI-reported counts for that identical goal) — `data.total`/`data.totalPages` give real
   * pagination, so this only needs ceil(total/100) requests.
   *
   * Replaces the previous approach (loop every rendered row, calling searchGoals() — a full
   * debounced search-and-wait round trip — per row) which was an O(rows) UI scan. With the Goals
   * dataset now at 170+ records, that scan alone could exceed a test's 60s timeout (root cause of
   * TC-EMPGOL-052/045 timing out at "Test timeout of 60000ms exceeded" before ever reaching the
   * assertion). This is O(pages), not O(rows), and doesn't touch the UI at all.
   */
  /**
   * Shared pagination scan over `GET /api/v1/goals` — walks every page until `matcher` returns a
   * non-undefined result or the pages run out. Factored out of `findGoalMatchingCounts()` so
   * `fetchGoalCountsFromApi()` (TC-EMPGOL-116) can reuse the identical O(pages) walk instead of
   * duplicating it for an exact-name lookup.
   */
  private async scanGoalsViaApi<T>(
    ctxPage: Page,
    matcher: (goal: any) => T | undefined
  ): Promise<T | null> {
    let page = 1;
    let totalPages = 1;
    do {
      const { status, body } = await this.attemptApiRead(
        ctxPage,
        `/api/v1/goals?limit=100&sortBy=name&sortOrder=asc&page=${page}`
      );
      if (status !== 200 || !body?.data?.items) return null;
      for (const g of body.data.items) {
        const result = matcher(g);
        if (result !== undefined) return result;
      }
      totalPages = body.data.totalPages ?? 1;
      page++;
    } while (page <= totalPages);
    return null;
  }

  async findGoalMatchingCounts(
    ctxPage: Page,
    predicate: (counts: { department: number; organization: number }) => boolean
  ): Promise<string | null> {
    return this.scanGoalsViaApi(ctxPage, (g: any) => {
      const counts = { department: g.departmentAssigned ?? 0, organization: g.organizationAssigned ?? 0 };
      return predicate(counts) ? (g.name as string) : undefined;
    });
  }

  /**
   * Look up a specific goal (by exact name) via the API and return its department/organization
   * assigned counts — used to reconcile the UI's two count columns against the underlying API
   * total (TC-EMPGOL-116). Returns null if the API is unreachable/unconfirmed or no goal with
   * this exact name is found within the API's own pagination.
   */
  async fetchGoalCountsFromApi(
    ctxPage: Page,
    goalName: string
  ): Promise<{ department: number; organization: number } | null> {
    return this.scanGoalsViaApi(ctxPage, (g: any) =>
      g.name === goalName
        ? { department: g.departmentAssigned ?? 0, organization: g.organizationAssigned ?? 0 }
        : undefined
    );
  }

  /** Count of goals with this EXACT name, read via the API rather than the UI table — used where
   * a UI re-search after a create/duplicate attempt is unreliable (a same-value re-fill of the
   * search box does not reliably re-trigger the table's own debounced re-fetch, confirmed live on
   * TC-EMPGOL-302/303). Unlike `scanGoalsViaApi()`'s first-match short-circuit, this tallies every
   * page so an accidental duplicate (2 matches) is distinguishable from a single create (1). */
  async scanGoalsCountByExactName(ctxPage: Page, goalName: string): Promise<number> {
    let page = 1;
    let totalPages = 1;
    let count = 0;
    do {
      const { status, body } = await this.attemptApiRead(ctxPage, `/api/v1/goals?limit=100&sortBy=name&sortOrder=asc&page=${page}`);
      if (status !== 200 || !body?.data?.items) break;
      for (const g of body.data.items) if (g.name === goalName) count++;
      totalPages = body.data.totalPages ?? 1;
      page++;
    } while (page <= totalPages);
    return count;
  }

  /** Intercept the goals API and force a failure — for negative/error-handling tests (401/500/503). */
  async mockGoalsApiFailure(status = 500): Promise<void> {
    await this.page.route(/\/api\/.*goal/i, route =>
      route.fulfill({
        status,
        contentType: 'application/json',
        body: JSON.stringify({ message: status === 401 ? 'Unauthorized' : 'Internal Server Error' }),
      })
    );
  }

  // ═══════════════════════════════════════════════════════════════════════
  // RELOCATION (2026-09-22): /employee/goals is now a 3-tab sub-app (Dashboard /
  // Employee Goals / Goal Management). Everything below backs TC-EMPGOL-201..343
  // (docs/findings/2026-09-22-goals-module-relocation-review.md). The Goal Management tab
  // kept the pre-relocation table shape, so methods above (searchGoals, getGoalRow,
  // getFirstDataRow, getGoalNameFromRow, getRowCount, clickEditGoal/clickDeleteGoal,
  // isDeleteEnabled, confirm/cancelDeleteGoal, openGoalEmployeeList) are reused as-is by the
  // new cases too — only genuinely new surface gets a new method here.
  // ═══════════════════════════════════════════════════════════════════════

  // ─── Tab shell ────────────────────────────────────────────────────────

  async selectTab(tab: GoalsTabName): Promise<void> {
    const locator = tab === 'dashboard' ? this.dashboardTab : tab === 'employee-goals' ? this.employeeGoalsTab : this.goalManagementTab;
    await locator.click();
    await this.waitForGoalsScreenLoaded();
  }

  /** The tab currently carrying `aria-selected="true"`, or null if none do. */
  async getSelectedTabName(): Promise<string | null> {
    const tabs = this.page.getByRole('tab');
    const count = await tabs.count().catch(() => 0);
    for (let i = 0; i < count; i++) {
      if ((await tabs.nth(i).getAttribute('aria-selected').catch(() => null)) === 'true') {
        return ((await tabs.nth(i).textContent().catch(() => '')) ?? '').trim();
      }
    }
    return null;
  }

  async getVisibleTabNames(): Promise<string[]> {
    return this.page.getByRole('tab').allInnerTexts().catch(() => []);
  }

  // ─── Shared Year / Department filters (shell, above the tab strip) ──────

  /** Ground-truth confirmed live: Year has no wired accessible name of its own (a plain
   * `role="combobox"` button whose only text is its current value) — it is reliably the FIRST
   * combobox rendered in the active tab panel; Employee Goals/Goal Management don't render a
   * Year filter at all, so this is Dashboard-only in practice. */
  yearCombobox(): Locator {
    return this.activeTabPanel.getByRole('combobox').first();
  }

  async selectYear(year: 'All Years' | '2026' | '2025'): Promise<void> {
    await this.chooseComboboxOption(this.yearCombobox(), year);
    await this.waitForGoalsScreenLoaded();
  }

  async getYearOptions(): Promise<string[]> {
    await this.yearCombobox().click();
    const options = this.page.getByRole('option');
    await options.first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    const texts = await options.allInnerTexts().catch(() => []);
    await this.closeCombobox();
    return texts;
  }

  /** Dashboard-only Department picker (Admin/multi-department roles). Ground-truth confirmed
   * live: it is the SECOND combobox in the active panel, same unwired-name situation as Year. */
  dashboardDepartmentCombobox(): Locator {
    return this.activeTabPanel.getByRole('combobox').nth(1);
  }

  async isDashboardDepartmentPickerPresent(): Promise<boolean> {
    return (await this.activeTabPanel.getByRole('combobox').count().catch(() => 0)) > 1;
  }

  async selectDashboardDepartment(name: string): Promise<void> {
    await this.chooseComboboxOption(this.dashboardDepartmentCombobox(), name);
    await this.waitForGoalsScreenLoaded();
  }

  async getDashboardDepartmentOptions(): Promise<string[]> {
    await this.dashboardDepartmentCombobox().click();
    const options = this.page.getByRole('option');
    await options.first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    const texts = await options.allInnerTexts().catch(() => []);
    await this.closeCombobox();
    return texts;
  }

  async isSelectDepartmentEmptyStateVisible(): Promise<boolean> {
    return this.selectDepartmentEmptyState.isVisible().catch(() => false);
  }

  getShowingDataForLabel(): Locator {
    return this.page.getByText(/showing data for/i);
  }

  // ─── Dashboard tab ────────────────────────────────────────────────────

  /** Parses the four KPI cards straight out of the panel's own rendered text (`<n>[h]` immediately
   * followed by its label — confirmed live) rather than guessing a card container's markup, which
   * was never confirmed and would be four near-identical guesses. */
  async readDashboardKpis(): Promise<{ totalEmployees: number | null; employeesWithGoals: number | null; totalGoalAssignments: number | null; totalLDHours: number | null }> {
    const body = (await this.activeTabPanel.innerText().catch(() => '')) ?? '';
    const grab = (label: string): number | null => {
      const m = body.match(new RegExp(`(\\d+)h?\\s+${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i'));
      return m ? parseInt(m[1], 10) : null;
    };
    return {
      totalEmployees: grab('Total Employees'),
      employeesWithGoals: grab('Employees with Goals'),
      totalGoalAssignments: grab('Total Goal Assignments'),
      totalLDHours: grab('Total L&D Hours'),
    };
  }

  showSeparateChartsCheckbox(): Locator {
    return this.activeTabPanel.getByRole('checkbox', { name: /separate charts/i });
  }

  async toggleSeparateCharts(): Promise<void> {
    await this.showSeparateChartsCheckbox().click();
  }

  /** Legend/segment labels immediately following a card heading — both donuts render their legend
   * as plain text lines right after the heading (confirmed live), so this is more reliable than
   * guessing the chart library's own DOM structure. */
  async getTextAfterHeading(heading: string, maxLines = 8): Promise<string[]> {
    const body = (await this.activeTabPanel.innerText().catch(() => '')) ?? '';
    const idx = body.search(new RegExp(heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
    if (idx < 0) return [];
    return body.slice(idx + heading.length).split('\n').map(s => s.trim()).filter(Boolean).slice(0, maxLines);
  }

  /** The final `(<n>)` count in a card heading, e.g. "AVG COMPLETION % BY GOAL (46)" -> 46, or
   * "MOST AT-RISK GOALS (DELAYED) (12)" -> 12 (note the intervening fixed "(DELAYED)" — `.*?`
   * skips over any such literal text between the heading and its actual count group). */
  async getCardHeaderCount(heading: string): Promise<number | null> {
    const body = (await this.activeTabPanel.innerText().catch(() => '')) ?? '';
    const m = body.match(new RegExp(`${heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*?\\((\\d+)\\)`, 'i'));
    return m ? parseInt(m[1], 10) : null;
  }

  /** Ranked rows under "AVG COMPLETION % BY GOAL" — pattern confirmed live: `#<n>\n<goal>\n<pct>%`. */
  async getAvgCompletionRanking(): Promise<Array<{ rank: number; goal: string; percent: number }>> {
    const body = (await this.activeTabPanel.innerText().catch(() => '')) ?? '';
    const start = body.search(/AVG COMPLETION % BY GOAL/i);
    const end = body.search(/MOST AT-RISK GOALS/i);
    const section = start < 0 ? '' : body.slice(start, end < 0 ? undefined : end);
    const rows: Array<{ rank: number; goal: string; percent: number }> = [];
    const re = /#(\d+)\s*\n+([^\n]+)\n+(\d+)%/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(section))) rows.push({ rank: parseInt(m[1], 10), goal: m[2].trim(), percent: parseInt(m[3], 10) });
    return rows;
  }

  /** Ranked rows under "MOST AT-RISK GOALS (DELAYED)" — pattern confirmed live: `#<n>\n<goal>\n<n> emp...`. */
  async getAtRiskGoalsRanking(): Promise<Array<{ rank: number; goal: string; employeeText: string }>> {
    const body = (await this.activeTabPanel.innerText().catch(() => '')) ?? '';
    const start = body.search(/MOST AT-RISK GOALS/i);
    const section = start < 0 ? '' : body.slice(start);
    const rows: Array<{ rank: number; goal: string; employeeText: string }> = [];
    const re = /#(\d+)\s*\n+([^\n]+)\n+([^\n]*emp[^\n]*)/gi;
    let m: RegExpExecArray | null;
    while ((m = re.exec(section))) rows.push({ rank: parseInt(m[1], 10), goal: m[2].trim(), employeeText: m[3].trim() });
    return rows;
  }

  /** `{ total, labelled }` chart `<svg>` count in the active tab — a structural a11y check
   * (locator-based, no `page.evaluate`) backing "every chart carries a text alternative". */
  async getChartSvgAccessibilityStats(): Promise<{ total: number; labelled: number }> {
    const total = await this.activeTabPanel.locator('svg').count().catch(() => 0);
    const labelled = await this.activeTabPanel.locator('svg[role], svg[aria-label]').count().catch(() => 0);
    return { total, labelled };
  }

  // ─── Employee Goals tab ───────────────────────────────────────────────

  searchEmployeeInput(): Locator { return this.activeTabPanel.getByPlaceholder(/search employee/i); }
  searchGoalOnEmployeeGoalsTab(): Locator { return this.activeTabPanel.getByPlaceholder(/search goal/i); }
  noGoalsAssignedToggle(): Locator { return this.activeTabPanel.getByRole('switch'); }
  clearEmployeeGoalsFiltersBtn(): Locator { return this.activeTabPanel.getByRole('button', { name: /^clear$/i }); }
  /** Ground-truth confirmed live: unlike Dashboard's Year/Department, these three DO carry a
   * proper accessible name each (Department / Reporting Manager / Tracking Status). */
  employeeGoalsDepartmentCombobox(): Locator { return this.activeTabPanel.getByRole('combobox', { name: 'Department' }); }
  employeeGoalsManagerCombobox(): Locator { return this.activeTabPanel.getByRole('combobox', { name: 'Reporting Manager' }); }
  employeeGoalsStatusCombobox(): Locator { return this.activeTabPanel.getByRole('combobox', { name: 'Tracking Status' }); }
  employeeGoalsTable(): Locator { return this.activeTabPanel.getByRole('table').first(); }

  async searchEmployeeGoalsByEmployee(name: string): Promise<void> {
    await this.searchEmployeeInput().fill(name);
    // Debounced client-side search — same justified short wait as the pre-existing searchGoals().
    await this.page.waitForTimeout(500);
    await this.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
  }

  async searchEmployeeGoalsByGoal(name: string): Promise<void> {
    await this.searchGoalOnEmployeeGoalsTab().fill(name);
    await this.page.waitForTimeout(500);
    await this.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
  }

  async setEmployeeGoalsDepartmentFilter(name: string): Promise<void> {
    await this.chooseComboboxOption(this.employeeGoalsDepartmentCombobox(), name);
    await this.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
  }

  async setEmployeeGoalsManagerFilter(name: string): Promise<void> {
    await this.chooseComboboxOption(this.employeeGoalsManagerCombobox(), name);
    await this.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
  }

  async setEmployeeGoalsStatusFilter(name: string): Promise<void> {
    await this.chooseComboboxOption(this.employeeGoalsStatusCombobox(), name);
    await this.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
  }

  async getEmployeeGoalsFilterOptions(which: 'department' | 'manager' | 'status'): Promise<string[]> {
    const combo = which === 'department' ? this.employeeGoalsDepartmentCombobox() : which === 'manager' ? this.employeeGoalsManagerCombobox() : this.employeeGoalsStatusCombobox();
    await combo.click();
    const options = this.page.getByRole('option');
    await options.first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    const texts = await options.allInnerTexts().catch(() => []);
    await this.closeCombobox();
    return texts;
  }

  async toggleNoGoalsAssigned(): Promise<void> {
    await this.noGoalsAssignedToggle().click();
    await this.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
  }

  async isNoGoalsAssignedOn(): Promise<boolean> {
    return (await this.noGoalsAssignedToggle().getAttribute('aria-checked').catch(() => null)) === 'true';
  }

  async clearEmployeeGoalsFilters(): Promise<void> {
    await this.clearEmployeeGoalsFiltersBtn().click();
    await this.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
  }

  async getEmployeeGoalsRowCount(): Promise<number> {
    return this.employeeGoalsTable().locator('tbody tr').count().catch(() => 0);
  }

  /** First employee name holding at least one goal in the given status, found via the Tracking
   * Status filter rather than scanning up to 3,648 unfiltered rows — used by cases that need "any
   * employee with a goal" without depending on a specific seeded name. Restores the filter to "All
   * Statuses" before returning so callers get a clean slate. */
  async findEmployeeNameWithGoalInStatus(status: 'Not Started' | 'In Progress' | 'Completed' | 'Delayed' = 'Not Started'): Promise<string | null> {
    await this.setEmployeeGoalsStatusFilter(status);
    const row = this.employeeGoalsTable().locator('tbody tr').first();
    const visible = await row.isVisible().catch(() => false);
    const name = visible ? ((await row.getByRole('cell').nth(1).textContent().catch(() => '')) ?? '').trim() : null;
    await this.setEmployeeGoalsStatusFilter('All Statuses');
    return name || null;
  }

  getEmployeeGoalsRow(employeeName: string): Locator {
    return this.employeeGoalsTable().locator('tbody tr').filter({ hasText: employeeName }).first();
  }

  async getEmployeeRowRollup(employeeName: string): Promise<{ reportingManager: string; goals: number; overdueGoals: number; certificates: number; ldHours: string } | null> {
    const row = this.getEmployeeGoalsRow(employeeName);
    if (!(await row.isVisible().catch(() => false))) return null;
    const cells = row.getByRole('cell');
    const n = await cells.count().catch(() => 0);
    const texts: string[] = [];
    for (let i = 0; i < n; i++) texts.push(((await cells.nth(i).textContent().catch(() => '')) ?? '').trim());
    // Columns confirmed live: [expander, Employee, Reporting Manager, Goals, Overdue Goals, Certificates, L&D Hours]
    return {
      reportingManager: texts[2] ?? '',
      goals: parseInt(texts[3] || '0', 10),
      overdueGoals: parseInt(texts[4] || '0', 10),
      certificates: parseInt(texts[5] || '0', 10),
      ldHours: texts[6] ?? '',
    };
  }

  /** Whether a row's expander currently reads "Hide goals" (expanded) vs "Show goals" (collapsed)
   * — ground-truth confirmed live: an `.sr-only` span carries that exact text; there is no
   * `aria-expanded` on the expander itself (see `expandEmployeeRow()`'s own note — this is D10). */
  async isEmployeeRowExpanded(employeeName: string): Promise<boolean> {
    const text = await this.getEmployeeGoalsRow(employeeName).locator('.sr-only').first().textContent().catch(() => '');
    return /hide goals/i.test(text ?? '');
  }

  /** Expand/collapse an employee's row. GROUND-TRUTH / DEFECT (D10): the expander is a bare `<td>`
   * with an `.sr-only` label and an icon — no `role="button"`, no `tabindex`, no `aria-expanded` —
   * so it is not reachable via `getByRole('button')` and this method clicks the cell directly,
   * which is what a mouse user can do but a keyboard user cannot (that gap is exactly what
   * TC-EMPGOL-274 asserts against). */
  async toggleEmployeeRowExpansion(employeeName: string): Promise<void> {
    await this.getEmployeeGoalsRow(employeeName).locator('td').first().click();
  }

  /** The expansion renders as the very next `<tr>` after the employee's own row (confirmed live) —
   * a CSS adjacent-sibling combinator reaches it without resorting to XPath. */
  getEmployeeExpansionTable(employeeName: string): Locator {
    const escaped = employeeName.replace(/"/g, '\\"');
    return this.page.locator(`table tr:has-text("${escaped}") + tr table`).first();
  }

  async getExpandedGoalDetailRows(employeeName: string): Promise<Array<{ goal: string; status: string; progressHistory: string; completionPercent: string; startDate: string; endDate: string; comment: string }>> {
    const rows = this.getEmployeeExpansionTable(employeeName).locator('tbody tr');
    const n = await rows.count().catch(() => 0);
    const out: Array<{ goal: string; status: string; progressHistory: string; completionPercent: string; startDate: string; endDate: string; comment: string }> = [];
    for (let i = 0; i < n; i++) {
      const cells = rows.nth(i).locator('td');
      const cCount = await cells.count().catch(() => 0);
      const vals: string[] = [];
      for (let j = 0; j < cCount; j++) vals.push(((await cells.nth(j).textContent().catch(() => '')) ?? '').trim());
      out.push({ goal: vals[0] ?? '', status: vals[1] ?? '', progressHistory: vals[2] ?? '', completionPercent: vals[3] ?? '', startDate: vals[4] ?? '', endDate: vals[5] ?? '', comment: vals[6] ?? '' });
    }
    return out;
  }

  // ─── Goal Management tab: additions beyond the pre-relocation listing methods ──

  /** Total goals count from the "Showing X - Y of Z results" footer (Z), distinct from
   * `getRowCount()`'s reuse of the same text — kept as its own method here so a case can name
   * "the results footer" directly regardless of which page object era it reads from. */
  async getGoalManagementResultsFooterText(): Promise<string | null> {
    return this.page.getByText(/showing\s+\d+\s*-\s*\d+\s+of\s+\d+\s+results?/i).first().textContent().catch(() => null);
  }

  async hasGoalManagementPaginationControls(): Promise<boolean> {
    const nav = this.page.getByRole('button', { name: /^(next|previous|first|last|\d+)$/i })
      .or(this.page.getByRole('navigation'))
      .or(this.page.getByRole('combobox', { name: /rows per page|page size/i }));
    return (await nav.count().catch(() => 0)) > 0;
  }

  private goalManagementColumnHeader(pattern: RegExp): Locator {
    return this.goalsTable.getByRole('columnheader').filter({ hasText: pattern });
  }

  async sortGoalManagementColumn(column: 'Goal Name' | 'Type'): Promise<void> {
    await this.goalManagementColumnHeader(column === 'Goal Name' ? /goal name/i : /^type$/i).getByRole('button').first().click();
    // Same debounce trap as searchGoals() above: the re-sort re-fetch is debounced a beat behind
    // the click, so networkidle can resolve on the pre-click "nothing in flight yet" state before
    // the real request even starts — confirmed live as a transient 0-row table read immediately
    // after the click. Give the debounce a moment to fire first.
    await this.page.waitForTimeout(500);
    await this.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
    await this.goalsTable.locator('tbody tr').first().waitFor({ state: 'visible', timeout: 10_000 }).catch(() => {});
  }

  /** Goal Name cells as actually displayed (certificate-prefixed where applicable) top to bottom. */
  async getDisplayedGoalNames(): Promise<string[]> {
    const rows = this.goalsTable.locator('tbody tr').or(this.goalsTable.getByRole('row').filter({ hasNot: this.page.getByRole('columnheader') }));
    const n = await rows.count().catch(() => 0);
    const names: string[] = [];
    for (let i = 0; i < n; i++) names.push(await this.getGoalNameFromRow(rows.nth(i)));
    return names;
  }

  /** GROUND-TRUTH CORRECTION (confirmed live): these column filter popovers render their items
   * as `role="checkbox"`, not `role="option"` — a plain multi-select checklist, not a
   * single-select combobox popover like the department/year pickers elsewhere on this screen. */
  /** GROUND-TRUTH CORRECTION: each checkbox's own innerText is empty — the label text lives in
   * its PARENT element, not the checkbox itself (a styled empty box + a sibling text node under
   * one wrapper) — reading `checkbox.innerText()` directly returns "" for every item. */
  private async readCheckboxListLabels(popover: Locator): Promise<string[]> {
    const checkboxes = popover.getByRole('checkbox');
    const n = await checkboxes.count().catch(() => 0);
    const labels: string[] = [];
    for (let i = 0; i < n; i++) {
      const text = ((await checkboxes.nth(i).locator('xpath=..').textContent().catch(() => '')) ?? '').trim();
      if (text) labels.push(text);
    }
    return labels;
  }

  async openGoalNameColumnFilterOptions(): Promise<string[]> {
    await this.goalNameFilterBtn.click();
    const popover = this.page.locator('[data-radix-popper-content-wrapper]').last();
    await popover.getByRole('checkbox').first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    const texts = await this.readCheckboxListLabels(popover);
    await this.page.keyboard.press('Escape').catch(() => {});
    return texts;
  }

  async openTypeColumnFilterOptions(): Promise<string[]> {
    await this.typeFilterBtn.click();
    const popover = this.page.locator('[data-radix-popper-content-wrapper]').last();
    await popover.getByRole('checkbox').first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    const texts = await this.readCheckboxListLabels(popover);
    await this.page.keyboard.press('Escape').catch(() => {});
    return texts;
  }

  async selectTypeColumnFilter(type: 'Technical' | 'Certificate'): Promise<void> {
    await this.typeFilterBtn.click();
    const popover = this.page.locator('[data-radix-popper-content-wrapper]').last();
    await popover.getByRole('checkbox', { name: type, exact: true }).click();
    // GROUND-TRUTH CORRECTION: this is an Excel-style checklist filter with its own Clear/Save
    // footer — checking a box alone does not apply anything until "Save" is clicked (confirmed
    // live: the listing was unchanged after checking a box with no Save click).
    await popover.getByRole('button', { name: 'Save', exact: true }).click();
    await this.page.waitForTimeout(500);
    await this.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
    await this.goalsTable.locator('tbody tr').first().waitFor({ state: 'visible', timeout: 10_000 }).catch(() => {});
  }

  /** Open either the department- or organisation-assigned count popover for a goal row, keyed by
   * column header — Goal Management now shows BOTH counts per row (the pre-relocation
   * `openGoalEmployeeList()` assumed only one and grabbed "the first numeric button"). */
  async openGoalCountPopover(goalName: string, which: 'department' | 'organization'): Promise<boolean> {
    await this.searchGoals(goalName).catch(() => {});
    const row = this.getGoalRow(goalName);
    if (!(await row.isVisible().catch(() => false))) return false;
    const headers = await this.goalsTable.getByRole('columnheader').allInnerTexts().catch(() => []);
    const idx = headers.findIndex(h => (which === 'department' ? /dept/i : /org/i).test(h));
    if (idx === -1) return false;
    const btn = row.getByRole('cell').nth(idx).getByRole('button');
    if (!(await btn.isVisible().catch(() => false))) return false;
    // GROUND-TRUTH CORRECTION: confirmed live to be intermittently flaky — the click can land
    // right as the just-completed searchGoals() re-render swaps the row's own button for a fresh
    // one, opening nothing. Retry once if the popover hasn't actually appeared before reporting
    // success, rather than returning true the instant the click call itself resolves.
    await btn.click();
    const opened = await this.getGoalEmployeeListPanel().waitFor({ state: 'visible', timeout: 4000 }).then(() => true).catch(() => false);
    if (opened) return true;
    await btn.click().catch(() => {});
    return this.getGoalEmployeeListPanel().waitFor({ state: 'visible', timeout: 6000 }).then(() => true).catch(() => false);
  }

  /** Per-department employee counts inside an open "Organisation Employees" breakdown popover.
   * GROUND-TRUTH CORRECTION: reads the structural DOM (one flex row per department, two child
   * divs: name then "<n> employees") rather than regexing the panel's flattened text — some real
   * department names embed a digit ("L1 SUPPORT"), and there is no separator between one entry's
   * count and the next entry's name in flattened text (e.g. "...INNOVATIONS11 employeesDEVOPS10
   * ..."), both of which broke a text-based regex. */
  async getOrganizationBreakdown(): Promise<Array<{ department: string; count: number }>> {
    const panel = this.getGoalEmployeeListPanel();
    const entries = panel.locator('.space-y-2 > div.flex');
    const n = await entries.count().catch(() => 0);
    const rows: Array<{ department: string; count: number }> = [];
    for (let i = 0; i < n; i++) {
      const cells = entries.nth(i).locator('div');
      const department = ((await cells.nth(0).textContent().catch(() => '')) ?? '').trim();
      const countText = ((await cells.nth(1).textContent().catch(() => '')) ?? '').trim();
      const match = countText.match(/\d+/);
      if (department && match) rows.push({ department, count: parseInt(match[0], 10) });
    }
    return rows;
  }

  async getDeleteButtonTooltip(goalName: string): Promise<string | null> {
    await this.searchGoals(goalName).catch(() => {});
    const row = this.getGoalRow(goalName);
    await row.hover().catch(() => {});
    const btn = this.getDeleteGoalBtn(goalName);
    await btn.hover({ timeout: 3000 }).catch(() => {});
    const tooltip = this.page.getByRole('tooltip');
    if (!(await tooltip.isVisible({ timeout: 2000 }).catch(() => false))) return null;
    return tooltip.textContent().catch(() => null);
  }

  // ─── Add/Edit Goal panel: fields new to the 2026-09-22 redesign ─────────

  private richTextFieldLabel(which: 'description' | 'learningObjectives' | 'definitionOfDone' | 'topicsAndConcepts'): string {
    return { description: 'Description', learningObjectives: 'Learning Objectives', definitionOfDone: 'Definition of Done', topicsAndConcepts: 'Topics & Concepts' }[which];
  }

  /** Each rich-text field lives in its own `[data-slot="form-item"]` container (same pattern as
   * `goalTypeDropdown` above) — needed because there are FOUR such editors on one panel, so a bare
   * `getByRole('textbox')` does not disambiguate between them. */
  private richTextFieldContainer(which: 'description' | 'learningObjectives' | 'definitionOfDone' | 'topicsAndConcepts'): Locator {
    return this.addGoalPanel.locator('[data-slot="form-item"]').filter({ hasText: this.richTextFieldLabel(which) });
  }

  richTextEditorBody(which: 'description' | 'learningObjectives' | 'definitionOfDone' | 'topicsAndConcepts'): Locator {
    return this.richTextFieldContainer(which).locator('[contenteditable="true"]').first();
  }

  async fillRichTextField(which: 'description' | 'learningObjectives' | 'definitionOfDone' | 'topicsAndConcepts', text: string): Promise<void> {
    const field = this.richTextEditorBody(which);
    await field.click();
    await this.page.keyboard.type(text);
  }

  async getRichTextFieldText(which: 'description' | 'learningObjectives' | 'definitionOfDone' | 'topicsAndConcepts'): Promise<string> {
    return (await this.richTextEditorBody(which).textContent().catch(() => '')) ?? '';
  }

  /** A formatting toolbar button scoped to ONE of the four rich-text editors (Bold/Italic/
   * Underline/Strikethrough/Code/"Align left"/"Align center"/"Align right"/Link/"Bullet
   * list"/"Numbered list"/Quote/Undo/Redo — verbatim toolbar labels confirmed live). */
  async clickRichTextToolbarButton(which: 'description' | 'learningObjectives' | 'definitionOfDone' | 'topicsAndConcepts', button: string): Promise<boolean> {
    const btn = this.richTextFieldContainer(which).getByRole('button', { name: button, exact: true });
    const visible = await btn.isVisible().catch(() => false);
    if (visible) await btn.click();
    return visible;
  }

  async isRichTextToolbarButtonEnabled(which: 'description' | 'learningObjectives' | 'definitionOfDone' | 'topicsAndConcepts', button: string): Promise<boolean> {
    const btn = this.richTextFieldContainer(which).getByRole('button', { name: button, exact: true });
    if (!(await btn.isVisible().catch(() => false))) return false;
    return btn.isEnabled().catch(() => false);
  }

  durationMonthsInput(): Locator { return this.addGoalPanel.locator('input[type="number"]').nth(0); }
  durationWeeksInput(): Locator { return this.addGoalPanel.locator('input[type="number"]').nth(1); }
  durationDaysInput(): Locator { return this.addGoalPanel.locator('input[type="number"]').nth(2); }

  async fillEstimatedDuration(months?: number | string, weeks?: number | string, days?: number | string): Promise<void> {
    if (months !== undefined) await this.durationMonthsInput().fill(String(months));
    if (weeks !== undefined) await this.durationWeeksInput().fill(String(weeks));
    if (days !== undefined) await this.durationDaysInput().fill(String(days));
  }

  async getEstimatedDurationValues(): Promise<{ months: string; weeks: string; days: string }> {
    return {
      months: await this.durationMonthsInput().inputValue().catch(() => ''),
      weeks: await this.durationWeeksInput().inputValue().catch(() => ''),
      days: await this.durationDaysInput().inputValue().catch(() => ''),
    };
  }

  /** `aria-invalid="true"` on Goal Name — DEFECT (D14): confirmed live to be `true` the instant
   * the Add Goal panel opens, before any user interaction (touched/blurred) has happened. */
  async isGoalNameMarkedInvalid(): Promise<boolean> {
    return (await this.goalNameInput.getAttribute('aria-invalid').catch(() => null)) === 'true';
  }

  async isCertificateCodeMarkedRequired(): Promise<boolean> {
    if ((await this.certificateCodeInput.getAttribute('aria-required').catch(() => null)) === 'true') return true;
    const container = this.addGoalPanel.locator('[data-slot="form-item"]').filter({ hasText: 'Certificate Code' });
    return (await container.getByText('*').count().catch(() => 0)) > 0;
  }

  // ─── Structural / a11y helpers shared across all three tabs ─────────────

  /** `{ h1, h2, h3 }` heading counts in the active tab — used to assert no heading level is
   * skipped (e.g. an h3 with no h2 above it) without resorting to `page.evaluate`. */
  async getHeadingLevelCounts(): Promise<{ h1: number; h2: number; h3: number; h4: number }> {
    return {
      h1: await this.activeTabPanel.locator('h1').count().catch(() => 0),
      h2: await this.activeTabPanel.locator('h2').count().catch(() => 0),
      h3: await this.activeTabPanel.locator('h3').count().catch(() => 0),
      h4: await this.activeTabPanel.locator('h4').count().catch(() => 0),
    };
  }

  /** Rendered layout width vs viewport width — the one narrowly-scoped, justified use of
   * `page.evaluate` in this file: Playwright's Locator API has no equivalent for
   * `document.documentElement.scrollWidth`, and this reads a pure layout dimension, not any
   * application/business state, so it does not fall under qa-conventions' "don't bypass the UI to
   * read app internals for assertions" ban on `page.evaluate` (that rule targets faking a
   * business-state assertion, not measuring rendered geometry no other API exposes). */
  async hasHorizontalPageOverflow(): Promise<boolean> {
    return this.page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  }
}
