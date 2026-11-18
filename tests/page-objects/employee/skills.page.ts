import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../base.page';

/**
 * Skills (TC-EMPSKL-*) — Employee > Skills sub-feature (nav code EMPSKL, real live feature per
 * CLAUDE.md's nav table, unlike the Figma-design-ahead `rating`/`leave-details` sibling modules).
 *
 * GROUNDING NOTE: this page object was generated without live-browser/DOM access in this session
 * (no Playwright MCP tool was available to the automation-generator run that produced it) and
 * `reports/knowledge-base/selector-inventory.json` / `dom-snapshots/` carry no Skills-specific
 * entries yet. Every locator below is therefore grounded against the requirement doc's
 * `uiElements[].source === "verbatim"` strings (exact button/label/message text quoted from the
 * spec — see req-2026-07-14-EMPSKL-doc.json) wherever such a string exists; composite/structural
 * widgets that the requirement describes only conceptually (skill list rows, employee chips, the
 * Primary/Secondary toggle control, department checkboxes) use defensive role/label fallbacks and
 * are called out as Unverified Selectors in the automation-generator's output report. Every
 * locator/action is written defensively (`.catch(() => false)`, `isVisible()` guards) so a spec can
 * `test.skip()` gracefully instead of hard-failing on a selector mismatch during the first real run
 * against the live app — a human should re-run once and tighten any locator flagged Unverified.
 *
 * RE-GROUNDED (2026-08-18) against the live app — triggered by a reported structural change to the
 * Employee module. Good news: unlike Employee Details/Goals, this file's July grounding turned out
 * to still be accurate almost verbatim — "Skills Overview" heading, the Departments panel, Employee
 * Strength line, "No skill selected"/"Select a skill from the left panel..." empty state, the "Add
 * New Skill" drawer's exact fields/copy ("Map skill to one or more departments", pre-populated
 * Department chip, "Search or select a skill..", "Enter link", "e.g., easy-skill", "Search
 * employees.."), and the Departments-panel-driven skill list (e.g. "JavaScript 330") were all
 * re-confirmed live, unchanged. Only two things needed fixing:
 *   - `employeeStrengthHeader`'s regex broke: the live copy is now "Employee Strength: 0
 *     Employees out of 93 (0% of Department Strength)" — an "Employees" word was inserted between
 *     the count and "out of" that the old `\d+\s*out of\s*\d+` pattern didn't allow for.
 *   - `navigateToSkills()`'s `/employee/skills` URL fallback is now confirmed dead code (same as
 *     GoalsPage — that route 404s against `/employee/:id` instead) and has been removed; the
 *     tab-click primary path already worked through this change unmodified.
 * No skill rows render until a department is selected first (confirmed: the default ADMIN
 * department shows "Employee Strength: 0 Employees out of 93" with an empty skill list) — this is
 * expected, existing behavior that `switchDepartmentContext()` already exists to drive, not a
 * regression.
 */
export class SkillsPage extends BasePage {
  // ─── Skills Management shell ────────────────────────────────────────────
  /** Tab strip shared with Employee / Leave / Ratings within the same shell (same pattern as sibling modules). */
  readonly skillsTab: Locator;

  /** "Add Skills" button, top-right corner — verbatim: `User clicks the "Add Skills" button in the top-right corner.` */
  readonly addSkillsBtn: Locator;

  /** "Employee Strength: X out of N" header — verbatim, unrelated to skill classification (TC-EMPSKL-010). */
  readonly employeeStrengthHeader: Locator;

  /** No-skill-selected empty state. Ground-truth confirmed live: rendered as TWO separate
   * `<p>` elements ("No skill selected" / "Select a skill from the left panel to view
   * employees."), not one combined string — the previous exact full-string getByText() never
   * matched either paragraph. Points at the first paragraph; see also `noSkillSelectedDetailText`. */
  readonly noSkillSelectedText: Locator;
  /** The second paragraph of the no-skill-selected empty state (see `noSkillSelectedText`). */
  readonly noSkillSelectedDetailText: Locator;

  // ─── Add New Skill drawer — verbatim title/subtitle ─────────────────────
  /** Drawer — verbatim title `"Add New Skill"`. Unverified Selector: dialog/aside role assumed (drawer implementation detail not specified). */
  readonly addNewSkillDrawer: Locator;
  /** Verbatim subtitle: `"Map a skill to one or more departments"`. */
  readonly drawerSubtitle: Locator;
  readonly drawerSaveBtn: Locator;
  readonly drawerCancelBtn: Locator;

  /**
   * Ground-truth confirmed live (`reports/knowledge-base/dom-snapshots/EMPSKL.json` +  a live
   * probe): the "Department" field is NOT a checklist of native checkboxes as originally guessed
   * (no `role="checkbox"` exists anywhere in this drawer) — it's a Radix combobox trigger. Clicking
   * it opens a `role="option"` listbox of every department; a selected department renders as a
   * removable chip (visible text + a same-named `"Remove <dept>"` button) next to the trigger, and
   * the field supports multiple selections. It is the FIRST combobox in the drawer (the second is
   * Assign to Employees' `"Search employees.."` combobox), so `.first()` reliably targets it.
   * Also confirmed live: this trigger can start disabled for a brief moment while its department
   * list loads asynchronously, and can arrive already pre-populated with a default department —
   * same class of async-load race documented on GoalsPage.clickEditGoal().
   */
  readonly departmentCombobox: Locator;

  /**
   * Ground-truth confirmed live: "Search or Create Skill" is NOT a plain input/combobox living
   * inside the drawer as originally guessed — it's a BUTTON (`"Search or select a skill.."`) that,
   * on click, opens a SEPARATE portal-rendered `dialog` (a cmdk-style command palette, same class
   * of pattern as GoalsPage's fuzzy-search fields) appended outside the "Add New Skill" drawer's
   * own DOM subtree entirely. That portal dialog contains the REAL typeable `combobox` plus a
   * `listbox "Suggestions"` of matching skill options (each showing its dept-link count, e.g.
   * "TypeScript 2 dept linked") and, when nothing matches, a single `option "Create New Skill"`.
   * Scoping to `this.addNewSkillDrawer` (as the previous `searchOrCreateSkillInput` guess did)
   * can never find any of this, since it doesn't live in that dialog at all.
   */
  readonly searchOrCreateSkillBtn: Locator;
  /** Verbatim: `"No match found"` + `"+ Create new Skill"` option — scoped to the search popover (see `searchOrCreateSkillBtn`), not the drawer. */
  readonly noMatchFoundText: Locator;
  readonly createNewSkillOption: Locator;

  /**
   * Ground-truth confirmed live (via user's own codegen recording): clicking Save right after
   * "Create New Skill" can open a SEPARATE "Confirm & Create" duplicate-warning dialog — same
   * class of pattern as GoalsPage's "Verify before creating" warning. This was previously
   * unmodeled entirely, and `saveAddSkillDrawer()` never checked for or dismissed it — meaning any
   * Create-New-Skill flow that happened to fuzzy-match an existing skill (a real risk even for a
   * timestamp-suffixed "unique" name) would silently leave the drawer open forever after Save,
   * which had been misdiagnosed as an app-level "Save does nothing" defect. It's a missing
   * dismissal step in test code, not a confirmed product bug — needs re-verification.
   */
  readonly duplicateSkillWarningPopup: Locator;

  /** Ground-truth confirmed live: same class of control as `searchOrCreateSkillBtn` — a plain
   * `<div role="combobox">` trigger (NOT a labeled input/native combobox; `getByLabel`/
   * `getByPlaceholder`/`getByRole('combobox', {name:...})` all fail to match it) that, on click,
   * opens a portal-rendered popover (separate `dialog` outside the drawer's own DOM subtree)
   * containing the real typeable combobox and a "Suggestions" listbox of employee options (e.g.
   * "Jignesh Jadeja ADMIN - jignesh.jadeja@simformsolutions.com"). It's the drawer's LAST
   * combobox in DOM order (Department is first). */
  readonly assignToEmployeesInput: Locator;

  /** Logo (optional URL) field — field name from AC "Add Logo (Optional, URL)"; exact input unconfirmed (unclear #5). Unverified Selector. */
  readonly logoUrlInput: Locator;

  /** Tags input inside the drawer / Skill Detail Panel — field name from AC "tags"; exact widget unconfirmed. Unverified Selector. */
  readonly tagsInput: Locator;

  // ─── Skill Detail Panel — verbatim sub-headers / empty states ───────────
  /** Verbatim: `Sub-header displays the count, e.g., "Primary: 180"`. */
  readonly primaryHoldersHeader: Locator;
  /** Verbatim: `Sub-header displays the count, e.g., "Secondary: 67"`. */
  readonly secondaryHoldersHeader: Locator;
  /** Verbatim: `"No employees in this category."` */
  readonly noEmployeesInCategoryText: Locator;

  // ─── Delete/Unlink — verbatim pop-up titles ─────────────────────────────
  /** Ground-truth confirmed live: the real control is an icon-only button with
   * `aria-label="Unlink Skill"` — NOT "Delete/Unlink" as originally guessed. The requirement
   * doc's "Delete/Unlink" wording describes the conceptual action (delete when the skill has no
   * holders anywhere, unlink when only from this department), not the button's actual accessible
   * name, which never contains the word "Delete". The previous regex required "delete" to appear,
   * so it matched nothing (root cause of TC-EMPSKL-025/026/027/107 all failing to find this
   * control). Also disabled until a skill is selected, same as Goals'/Skills' other icon buttons. */
  readonly deleteUnlinkBtn: Locator;
  /** Verbatim: `"the Delete / Unlink Skill confirmation pop-up"`. */
  readonly deleteUnlinkSkillConfirmation: Locator;
  /** Verbatim: `"the Unlink Skill from Department confirmation pop-up"`. */
  readonly unlinkFromDepartmentConfirmation: Locator;
  /** Verbatim: `"the Cannot Unlink Skill error pop-up"`. */
  readonly cannotUnlinkSkillError: Locator;

  // ─── Edit Skill Details — a SEPARATE dialog from the Add New Skill drawer ────
  /**
   * Ground-truth confirmed live (and by user report): assigning/removing employees does NOT
   * happen in the Add New Skill create drawer at all — its Assign to Employees field exists but
   * real assignment management lives in a completely different dialog, titled "Edit Skill
   * Details", opened via a top-level "Edit" button (next to Unlink Skill) that's enabled once a
   * skill is selected in the listing. That dialog shows Department/Skill Name locked (disabled —
   * immutable post-creation, same pattern as GoalsPage), a Tags editor with removable chips, and
   * an Assign to Employees combobox already populated with the skill's current holders as
   * removable chips (e.g. "Gunjan Trivedi" + a "Remove Gunjan Trivedi" button, plus "+63" more).
   * This was a real gap: every test that tried to assign employees during the CREATE flow was
   * targeting a field that doesn't support it, root-causing TC-EMPSKL-015/036/038/090/102/103.
   */
  readonly editSkillBtn: Locator;
  readonly editSkillDrawer: Locator;
  readonly editSkillDrawerSaveBtn: Locator;
  readonly editSkillDrawerCancelBtn: Locator;

  // ─── Skills Listing (left panel) — conceptual, not verbatim-quoted structure ──
  /**
   * Ground-truth confirmed live: the sidebar `<aside>` has exactly two `<section>` children —
   * a Departments-filter section (41 department buttons) and this one, identified by containing
   * the "Search skills.." box. The previous `getByRole('list').first()` guess grabbed the
   * persistent sidebar NAV's `<ul>` (its very first item was literally the "SimERP 3.0.0" logo)
   * instead, so every caller scanning "rows" in this panel was silently scanning the wrong list.
   */
  readonly skillsListPanel: Locator;

  /**
   * Ground-truth confirmed live: each skill is a plain `<button>` (e.g. "JavaScript 330") with NO
   * explicit ARIA role — NOT a `listitem`/`row` as originally guessed (there are none in this
   * panel at all). The section's only `role="tab"` elements are the All/Primary/Secondary
   * proficiency filters, which `getByRole('button')` correctly excludes (an explicit role
   * attribute overrides a button's implicit role for accessibility purposes), so this can't
   * accidentally match those tabs. This is what `skillsListPanel.getByRole('listitem').or(...
   * getByRole('row'))` — used ~25 times across every skills spec file — should have been.
   */
  readonly skillRows: Locator;

  /** The Skills Listing's own "Search skills.." box — distinct from the Add New Skill drawer's
   * "Search or Create Skill" popover (`searchOrCreateSkillBtn`). Used for tag-based search
   * (TC-EMPSKL-121, inferred — not previously captured in the KB). */
  readonly skillsListingSearchInput: Locator;

  /** REDESIGN (6.9.0): page-level Department combobox ("ADMIN" by default) that replaced the old Departments panel. */
  readonly listingDepartmentCombobox: Locator;
  /** "Clear All" — clears the multi-skill selection. */
  readonly clearAllSelectionBtn: Locator;
  /** REDESIGN (6.9.0): employees table (Employees / Availability / Skills Type / Last Updated / Action). */
  readonly holderTable: Locator;
  /** Data rows of `holderTable` (header row excluded). */
  readonly holderRows: Locator;

  constructor(page: Page) {
    super(page);

    // REDESIGN (SI4-T1672, dev 6.9.0): Skills is no longer a tab on /employee — it's its own page at
    // /employee/skills, reached from the sidebar's Employee group link "Skills".
    this.skillsTab = page.getByRole('link', { name: /^skills$/i });

    this.addSkillsBtn = page.getByRole('button', { name: 'Add Skills' });
    // GROUNDED (2026-08-18): live copy inserts "Employees" between the count and "out of"
    // ("Employee Strength: 0 Employees out of 93 (0% of Department Strength)") — the old pattern
    // required "out of" immediately after the digit (only whitespace allowed between), which no
    // longer matches.
    // REDESIGN (6.9.0): copy is now "Employee Strength: 2 Employees (2% of total)" — no "out of N".
    this.employeeStrengthHeader = page.getByText(/Employee Strength:\s*\d+\s*Employees?/i);
    // REDESIGN (6.9.0): empty state is the status heading "No skills selected" + "Select a skill to view employees."
    this.noSkillSelectedText = page.getByText(/^No skills? selected$/);
    this.noSkillSelectedDetailText = page.getByText(/^Select a skill (from the left panel )?to view employees\.$/);

    this.addNewSkillDrawer = page.getByRole('dialog').filter({ hasText: 'Add New Skill' })
      .or(page.locator('aside[role="complementary"]').filter({ hasText: 'Add New Skill' }))
      .first();
    // Ground-truth confirmed live: real copy is "Map skill to one or more departments" — no "a".
    this.drawerSubtitle = this.addNewSkillDrawer.getByText(/map\s+(a\s+)?skill to one or more departments/i);
    this.drawerSaveBtn = this.addNewSkillDrawer.getByRole('button', { name: /^save$/i });
    this.drawerCancelBtn = this.addNewSkillDrawer.getByRole('button', { name: /^cancel$/i });
    this.departmentCombobox = this.addNewSkillDrawer.getByRole('combobox').first();

    this.searchOrCreateSkillBtn = this.addNewSkillDrawer.getByRole('button', { name: /search or select a skill/i });
    // The popover is a portal dialog rendered outside addNewSkillDrawer — distinguish it from the
    // drawer itself by requiring a "Suggestions" listbox, which only the popover has.
    const skillSearchPopover = page.getByRole('dialog').filter({ has: page.getByRole('listbox') })
      .filter({ hasNot: page.locator('input[placeholder="Department"]') });
    this.createNewSkillOption = skillSearchPopover.getByRole('option', { name: /create new skill/i });
    // Ground-truth confirmed live: a zero-match search renders ONLY the "Create New Skill" option
    // — no separate "No match found" text node exists in the popover. Nearly every spec gates
    // `clickCreateNewSkillOption()` on `noMatchFoundText.isVisible()`, so leaving this scoped to
    // literal "no match found" text (which never appears) meant that gate never fired, the skill
    // was never actually selected, and Save stayed disabled forever (root cause behind ~30 Add/Edit
    // Skill flows never completing). OR'd with createNewSkillOption so the existing gate pattern
    // fires correctly; kept the literal-text lookup first in case a real "No match found" string
    // does render in some other zero-match scenario not covered by this probe.
    this.noMatchFoundText = skillSearchPopover.getByText(/no match found/i).or(this.createNewSkillOption);

    this.duplicateSkillWarningPopup = page.getByRole('dialog').or(page.getByRole('alertdialog'))
      .filter({ has: page.getByRole('button', { name: /confirm\s*&?\s*create/i }) })
      .first();

    // The drawer's LAST combobox in DOM order (Department is first) — see field comment above.
    this.assignToEmployeesInput = this.addNewSkillDrawer.getByRole('combobox').last();

    // Ground-truth confirmed live (dom-snapshots/EMPSKL.json + a live probe): the label text
    // ("Add logo link" / "Skill Tags (Optional)") isn't wired via for/aria-labelledby to its input
    // — getByLabel never matches — and the real placeholders are "Enter link" / "e.g., easy-skill",
    // not the guessed "logo url"/"tags" wording. Added as explicit fallbacks alongside the
    // original guesses (kept in case labelling differs across environments).
    this.logoUrlInput = this.addNewSkillDrawer.getByLabel(/logo/i)
      .or(this.addNewSkillDrawer.getByPlaceholder(/logo url|logo/i))
      .or(this.addNewSkillDrawer.getByPlaceholder(/enter link/i));
    this.tagsInput = this.addNewSkillDrawer.getByLabel(/tags/i)
      .or(this.addNewSkillDrawer.getByPlaceholder(/tags|add tag/i))
      .or(this.addNewSkillDrawer.getByPlaceholder(/e\.g\.,?\s*easy-skill/i));

    // REDESIGN (6.9.0): the separate "Primary: N" / "Secondary: N" holder sub-sections are gone. The
    // detail area is ONE employees table with a "Skills Type" column, filtered by the
    // "Filter employees by proficiency" tablist (All / Primary / Secondary). A tab shows its count
    // only while selected ("Primary 1"). These two locators now point at those tabs.
    const proficiencyTabs = page.getByRole('tablist', { name: /filter employees by proficiency/i });
    this.primaryHoldersHeader = proficiencyTabs.getByRole('tab', { name: /^Primary\b/ });
    this.secondaryHoldersHeader = proficiencyTabs.getByRole('tab', { name: /^Secondary\b/ });
    this.noEmployeesInCategoryText = page.getByRole('heading', { name: /no employees found/i })
      .or(page.getByText('No employees in this category.')).first();

    this.deleteUnlinkBtn = page.getByRole('button', { name: /^unlink skill$/i })
      .or(page.getByRole('button', { name: /delete\s*\/?\s*unlink/i }));
    // REDESIGN (6.9.0) dialog titles, probed live: "Delete Skill" (Cancel / Delete — skill used
    // nowhere else), "Unlink Skill from Department" (Cancel / "Yes, unlink" — used in other
    // departments), "Cannot Delete Skill" (Okay — employees still mapped in this department).
    this.deleteUnlinkSkillConfirmation = page.getByRole('dialog').or(page.getByRole('alertdialog')).filter({ hasText: /delete\s*\/\s*unlink skill|^\s*(close)?\s*delete skill/i }).first();
    this.unlinkFromDepartmentConfirmation = page.getByRole('dialog').or(page.getByRole('alertdialog')).filter({ hasText: /unlink skill from department/i }).first();
    this.cannotUnlinkSkillError = page.getByRole('dialog').or(page.getByRole('alertdialog')).filter({ hasText: /cannot (unlink|delete) skill/i }).first();

    this.editSkillBtn = page.getByRole('button', { name: /^edit$/i });
    this.editSkillDrawer = page.getByRole('dialog').filter({ hasText: 'Edit Skill Details' });
    // REDESIGN (6.9.0): the Edit drawer's submit button is "Update", not "Save".
    this.editSkillDrawerSaveBtn = this.editSkillDrawer.getByRole('button', { name: /^(save|update)$/i });
    this.editSkillDrawerCancelBtn = this.editSkillDrawer.getByRole('button', { name: /^cancel$/i });

    // Ground-truth confirmed live (6.2.0): the Skills tab's two search boxes are
    // "Search departments..." and "Search skills by name or tag..." — there is no "Search skills..."
    // placeholder, so the old locators matched nothing: the list panel never resolved, every row
    // lookup saw zero rows, and searchSkillsListingByText() silently returned false.
    // REDESIGN (6.9.0): the skills list is a `complementary` region ("Skills N") holding a textbox
    // named "Search skills..." (placeholder "Search"), the proficiency tablist and one button per
    // skill ("Adobe XD 2"). Once something is selected a "Clear(N)" button joins the region —
    // excluded from skillRows so rows.first() is always a skill.
    this.skillsListingSearchInput = page.getByRole('textbox', { name: /search skills/i })
      .or(page.getByPlaceholder(/search skills by name or tag/i)).first();
    this.skillsListPanel = page.getByRole('complementary').filter({ has: this.skillsListingSearchInput }).first();
    this.skillRows = this.skillsListPanel.getByRole('button').filter({ hasNotText: /^Clear\s*\(\d+\)$/ });
    this.listingDepartmentCombobox = page.getByRole('main').filter({ has: page.getByRole('heading', { name: 'Skills Overview' }) })
      .getByRole('combobox').first();
    this.clearAllSelectionBtn = page.getByRole('button', { name: /^clear all$/i });
    this.holderTable = page.getByRole('table').filter({ has: page.getByRole('columnheader', { name: /skills type/i }) });
    this.holderRows = this.holderTable.getByRole('row').filter({ has: page.getByRole('cell') });
  }

  // ─── Navigation ──────────────────────────────────────────────────────────

  /**
   * Navigate to Employee > Skills. Real live feature (EMPSKL in nav) — unlike sibling Figma-only
   * modules, no test.skip-by-construction is expected here.
   *
   * GROUNDED (2026-08-18): Skills is exclusively a tab on the `/employee` page — the old
   * `/employee/skills` URL fallback is confirmed dead (it 404s against `/employee/:id` instead,
   * same as Goals) and has been removed.
   */
  async navigateToSkills(): Promise<void> {
    // REDESIGN (SI4-T1672, live on dev 6.9.0): Skills moved off the /employee tab strip to its own
    // route /employee/skills ("Skills Overview"). The old tab click timed out for every spec.
    await this.page.goto('/employee/skills', { waitUntil: 'domcontentloaded' });
    await this.page.getByRole('heading', { name: 'Skills Overview' }).waitFor({ state: 'visible', timeout: 30_000 });
    await this.skillRows.first().waitFor({ state: 'visible', timeout: 15_000 }).catch(() => {});
  }

  /** Visible name of a skill row. Rows render as "[avatar letter]\n<name>\n<count>" (the letter only
   * when the skill has no logo), so raw textContent gives e.g. "TTC019-1784…1" — unusable as a name. */
  async getSkillRowName(row: Locator): Promise<string> {
    const text = (await row.innerText().catch(() => '')) ?? '';
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length === 0) return '';
    if (lines.length >= 3) return lines[lines.length - 2];
    return /^\d+$/.test(lines[lines.length - 1]) && lines.length === 2 ? lines[0] : lines.join(' ').replace(/\s*\d+$/, '');
  }

  /** Snapshot of the whole Skills Listing as {name, count} — read ONCE up front. Loops must not use
   * `skillRows.nth(i)` across iterations: `selectSkillFromListing()` narrows the list via the search
   * box, so after the first iteration nth(i>0) no longer exists and the scan silently stops. */
  async listSkillRows(): Promise<{ name: string; count: number }[]> {
    await this.searchSkillsListingByText('').catch(() => false);
    await this.skillRows.first().waitFor({ state: 'visible', timeout: 10_000 }).catch(() => {});
    const texts = await this.skillRows.allInnerTexts().catch(() => [] as string[]);
    return texts.map(t => {
      const lines = t.split('\n').map(l => l.trim()).filter(Boolean);
      const count = /^\d+$/.test(lines[lines.length - 1] ?? '') ? parseInt(lines[lines.length - 1], 10) : -1;
      const name = lines.length >= 3 ? lines[lines.length - 2] : (lines.length === 2 ? lines[0] : (lines[0] ?? ''));
      return { name, count };
    }).filter(r => r.name);
  }

  /** REDESIGN (6.9.0), probed live: after any selection / tab / department change the page shows a
   * "Loading skills..." / "Loading data..." status for ~1.5s, during which the proficiency tab
   * reads "Secondary 0" and the table is empty. Reading anything in that window gives stale zeros. */
  async waitForSkillDataLoaded(): Promise<void> {
    const loading = this.page.getByRole('status').filter({ hasText: /^\s*Loading/i });
    await loading.first().waitFor({ state: 'visible', timeout: 1500 }).catch(() => {});
    await expect(loading).toHaveCount(0, { timeout: 20_000 }).catch(() => {});
  }

  /** Open the Add drawer's "Assign to Employees" popover (retries a swallowed first click). */
  async openAssignToEmployees(): Promise<void> {
    await this.openAssignEmployeesPopover(this.assignToEmployeesInput);
  }

  /** Clear any multi-skill selection — clicking a second skill ADDS it to the selection in the redesign. */
  async clearSkillSelection(): Promise<void> {
    if (await this.clearAllSelectionBtn.isVisible().catch(() => false)) {
      await this.clearAllSelectionBtn.click().catch(() => {});
      await this.noSkillSelectedText.waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
    }
  }

  /** Switch the Skills Listing's department context (top-level department selector, not the drawer's checklist). Unverified Selector — exact control not specified. */
  async switchDepartmentContext(departmentName: string): Promise<boolean> {
    // REDESIGN (6.9.0): a single page-level Department combobox drives the listing.
    if (!(await this.listingDepartmentCombobox.isVisible({ timeout: 5000 }).catch(() => false))) return false;
    const current = ((await this.listingDepartmentCombobox.textContent().catch(() => '')) ?? '').trim();
    if (current.toLowerCase() === departmentName.trim().toLowerCase()) return true;
    await this.listingDepartmentCombobox.click();
    const option = this.page.getByRole('option', { name: departmentName, exact: true })
      .or(this.page.getByRole('option', { name: new RegExp(departmentName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') })).first();
    if (!(await option.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false))) {
      await this.page.keyboard.press('Escape').catch(() => {});
      return false;
    }
    const firstBefore = (await this.skillRows.first().textContent().catch(() => '')) ?? '';
    await option.click();
    await expect(this.listingDepartmentCombobox).toHaveText(new RegExp(departmentName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), { timeout: 5000 }).catch(() => {});
    await this.waitForSkillDataLoaded();
    // The list re-renders after the fetch — wait for it to actually change (best-effort; two
    // departments can legitimately start with the same skill).
    await expect(this.skillRows.first()).not.toHaveText(firstBefore, { timeout: 8000 }).catch(() => {});
    return true;
  }

  // ─── Skills Listing (left panel) ────────────────────────────────────────

  /** A skill row in the Skills Listing, matched by its visible name. Ground-truth: scoped to `skillRows` (see field comment) rather than an unscoped page-wide button match, which could otherwise cross-match a same-named department filter button in the sibling section. */
  getSkillListingRow(skillName: string): Locator {
    // Anchor on the name followed only by the count, so "Java" does not pick "JavaScript".
    const esc = skillName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return this.skillRows.filter({ hasText: new RegExp(`^\\s*[A-Za-z0-9]?\\s*${esc}\\s*\\d+\\s*$`, 'i') }).first();
  }

  /**
   * Select a skill from the Skills Listing to open its Skill Detail Panel.
   *
   * Narrows the listing by name first: the panel holds 175+ skills for the Admin session, so a
   * just-created one is frequently not in the rendered slice, and the old instantaneous
   * `isVisible()` then reported it missing ("freshly created skill was not found", TC-EMPSKL-019/
   * 110/118/130). Searching first, then auto-waiting for the row, tests what the case actually
   * means — that the skill exists in the listing — rather than whether it happened to be on screen.
   */
  async selectSkillFromListing(skillName: string, department?: string): Promise<boolean> {
    // The Skills Listing only exists once a department is opened in the Departments panel — before
    // that there are literally zero skill rows, which is why a just-created skill "wasn't found".
    // Default to the department the Add Skills drawer used, so create-then-verify specs work
    // without having to thread the name through themselves.
    const scope = department ?? this.lastDrawerDepartment;
    if (scope) await this.openListingDepartment(scope).catch(() => false);
    // Redesign: clicking a skill ADDS it to a multi-selection — clear first so "select" means one skill.
    await this.clearSkillSelection();
    await this.searchSkillsListingByText(skillName).catch(() => false);
    const row = this.getSkillListingRow(skillName);
    const visible = await row.waitFor({ state: 'visible', timeout: 10_000 }).then(() => true).catch(() => false);
    if (!visible) return false;
    await row.click();
    await this.noSkillSelectedText.waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
    await this.waitForSkillDataLoaded();
    return true;
  }

  /** The combined Primary+Secondary count text shown alongside a skill's row (e.g. "TypeScript 247"). */
  getCombinedCountText(row: Locator): Locator {
    return row.getByText(/\d+/).last();
  }

  async getCombinedCountNumber(skillName: string): Promise<number | null> {
    const row = this.getSkillListingRow(skillName);
    const visible = await row.isVisible().catch(() => false);
    if (!visible) return null;
    const text = (await row.innerText().catch(() => '')) ?? '';
    const match = text.match(/(\d+)\s*$/);
    return match ? parseInt(match[1], 10) : null;
  }

  getEmptyDepartmentState(): Locator {
    return this.page.getByText(/no skills found for this department|no skills mapped|no skills found/i).first();
  }

  /** Type a term into the Skills Listing's own "Search skills.." box (see `skillsListingSearchInput`
   * — distinct from the Add New Skill drawer's "Search or Create Skill" popover). Used for
   * tag-based search (TC-EMPSKL-121, inferred — waits for the debounced re-render via network
   * idle rather than a fixed sleep). Returns false if the search box can't be found at all. */
  async searchSkillsListingByText(term: string): Promise<boolean> {
    const visible = await this.skillsListingSearchInput.isVisible().catch(() => false);
    if (!visible) return false;
    await this.skillsListingSearchInput.fill(term);
    await this.page.waitForLoadState('networkidle', { timeout: 3000 }).catch(() => {});
    return true;
  }

  /** Checkbox-style control (if rendered) for multi-selecting a skill row in the Skills Listing,
   * alongside its existing single-select click-to-open behavior (`selectSkillFromListing`).
   * Speculative/Unverified Selector — the requirement describes multi-skill selection only
   * conceptually ("we can see multiple skills together to see employees with those selected
   * skills"); no discrete control has been confirmed live yet. Falls back to a `switch` role in
   * case the control is rendered as a toggle rather than a native checkbox. */
  getSkillRowMultiSelectControl(skillName: string): Locator {
    // REDESIGN (6.9.0): no checkbox — the row button itself is a toggle (aria-pressed); clicking a
    // second row adds it to the selection ("Skills: A ×  B ×  Clear All").
    return this.getSkillListingRow(skillName);
  }

  /** Attempt to multi-select 2+ skills in the Skills Listing via a discrete per-row control (see
   * `getSkillRowMultiSelectControl`). Returns how many were actually selected — callers should
   * `test.skip` when fewer than 2 succeed, since the underlying multi-select UI is unconfirmed
   * against the live app (TC-EMPSKL-124/125/134). */
  async selectMultipleSkills(skillNames: string[]): Promise<number> {
    let selected = 0;
    await this.searchSkillsListingByText('').catch(() => false);
    for (const name of skillNames) {
      const control = this.getSkillRowMultiSelectControl(name);
      const visible = await control.first().isVisible({ timeout: 3000 }).catch(() => false);
      if (!visible) continue;
      if ((await control.first().getAttribute('aria-pressed').catch(() => null)) !== 'true') {
        await control.first().click().catch(() => {});
      }
      await this.waitForSkillDataLoaded();
      if ((await control.first().getAttribute('aria-pressed').catch(() => null)) === 'true') selected++;
    }
    return selected;
  }

  /** Deselect a single skill from an active multi-selection (see `selectMultipleSkills`). Returns
   * whether a control was found AND it was already in a checked/selected state. */
  async deselectSkill(skillName: string): Promise<boolean> {
    const control = this.getSkillRowMultiSelectControl(skillName);
    const visible = await control.first().isVisible().catch(() => false);
    if (!visible) return false;
    const checked = (await control.first().getAttribute('aria-pressed').catch(() => null)) === 'true';
    if (!checked) return false;
    await control.first().click().catch(() => {});
    return true;
  }

  // ─── Skill Detail Panel — Primary/Secondary holders ─────────────────────

  /** REDESIGN (6.9.0): a proficiency tab shows its count only while selected ("Primary 1"), so read
   * it by selecting the tab, then return to "All" so the caller's table view is unchanged.
   * Returns null when no skill is selected (the tabs then carry no count). */
  private async readProficiencyCount(tab: Locator, label: 'Primary' | 'Secondary'): Promise<number | null> {
    if (!(await tab.isVisible({ timeout: 3000 }).catch(() => false))) return null;
    if (await this.noSkillSelectedText.isVisible().catch(() => false)) return null;
    await tab.click();
    await this.waitForSkillDataLoaded();
    const counted = this.page.getByRole('tab', { name: new RegExp(`^${label}\\s*\\d+$`) });
    const ok = await counted.waitFor({ state: 'visible', timeout: 8000 }).then(() => true).catch(() => false);
    const text = ok ? ((await counted.textContent().catch(() => '')) ?? '') : '';
    await this.getHolderFilterTab('All').click().catch(() => {});
    await this.waitForSkillDataLoaded();
    const match = text.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  }

  async getPrimaryCount(): Promise<number | null> {
    return this.readProficiencyCount(this.primaryHoldersHeader, 'Primary');
  }

  async getSecondaryCount(): Promise<number | null> {
    return this.readProficiencyCount(this.secondaryHoldersHeader, 'Secondary');
  }

  /** REDESIGN (6.9.0): "Primary holders" = rows of the employees table whose Skills Type cell is
   * Primary (there is no separate sub-section any more). Current table page only. */
  getPrimaryHoldersSection(): Locator {
    return this.holderRows.filter({ has: this.page.getByRole('cell', { name: 'Primary', exact: true }) });
  }

  /** Rows of the employees table whose Skills Type cell is Secondary. */
  getSecondaryHoldersSection(): Locator {
    return this.holderRows.filter({ has: this.page.getByRole('cell', { name: 'Secondary', exact: true }) });
  }

  /** Employee name shown in a holder row ("Open employee details: <name>" button). */
  async getHolderRowName(row: Locator): Promise<string> {
    const btn = row.getByRole('button', { name: /^open employee details:/i }).first();
    return ((await btn.textContent().catch(() => '')) ?? '').trim();
  }

  getHolderRowByName(section: Locator, employeeName: string): Locator {
    return section.getByText(new RegExp(employeeName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  }

  /** All holder rows across BOTH Primary and Secondary Skill Detail Panel sections, in display
   * order — used to verify panel-wide Availability % ordering (TC-EMPSKL-122/123/132).
   * Speculative/Unverified Selector: the requirement describes Availability % only conceptually
   * ("the employees visible will have availability percentage shown in decreasing order") without
   * a confirmed markup — matched generically by any list item containing an "NN%" pattern. */
  getAllHolderRows(): Locator {
    // REDESIGN (6.9.0): the employees table's data rows (Availability is its own "NN%" cell).
    return this.holderRows;
  }

  /** Availability % values in display order (see `getAllHolderRows`). Used to verify descending
   * sort order (TC-EMPSKL-122) and to detect ties for the stability check (TC-EMPSKL-123). */
  async getAvailabilityPercentages(): Promise<number[]> {
    const rows = this.getAllHolderRows();
    const count = await rows.count().catch(() => 0);
    const values: number[] = [];
    for (let i = 0; i < count; i++) {
      const cell = rows.nth(i).getByRole('cell', { name: /^\d{1,3}\s*%$/ }).first();
      const text = (await cell.textContent().catch(() => '')) ?? '';
      const match = text.match(/(\d{1,3})\s*%/);
      if (match) values.push(parseInt(match[1], 10));
    }
    return values;
  }

  /** Holder names in display order, index-paired with `getAvailabilityPercentages()` — used for
   * the tie-break stability check (TC-EMPSKL-123) and the API-parity lookup (TC-EMPSKL-132). */
  async getHolderNamesInOrder(): Promise<string[]> {
    const rows = this.getAllHolderRows();
    const count = await rows.count().catch(() => 0);
    const names: string[] = [];
    for (let i = 0; i < count; i++) {
      names.push(await this.getHolderRowName(rows.nth(i)));
    }
    return names;
  }

  /** Primary/Secondary/All proficiency filter control, applied to the Skill Detail Panel's holder
   * list (TC-EMPSKL-126/127/128). Ground-truth confirmed live (see `skillRows` field comment)
   * that an "All/Primary/Secondary" `role="tab"` strip exists in the Skills Listing section;
   * reused here since the requirement describes the same conceptual filter ("skills can also be
   * filtered using primary and secondary") without a separately confirmed second widget scoped to
   * the Detail Panel. Unverified Selector — falls back to a same-named button if no tab renders. */
  getHolderFilterTab(filter: 'All' | 'Primary' | 'Secondary'): Locator {
    // Selected tabs carry a count ("Primary 1"), so allow an optional trailing number.
    return this.page.getByRole('tab', { name: new RegExp(`^${filter}(\\s*\\d+)?$`, 'i') })
      .or(this.page.getByRole('button', { name: new RegExp(`^${filter}$`, 'i') }))
      .first();
  }

  async applyHolderFilter(filter: 'All' | 'Primary' | 'Secondary'): Promise<boolean> {
    const tab = this.getHolderFilterTab(filter);
    const visible = await tab.isVisible({ timeout: 3000 }).catch(() => false);
    if (!visible) return false;
    await tab.click();
    await expect(tab).toHaveAttribute('aria-selected', 'true', { timeout: 5000 }).catch(() => {});
    await this.waitForSkillDataLoaded();
    return true;
  }

  // ─── Add New Skill drawer ────────────────────────────────────────────────

  async openAddSkillsDrawer(): Promise<void> {
    await this.addSkillsBtn.click();
    await this.addNewSkillDrawer.waitFor({ state: 'visible', timeout: 10000 });
  }

  async closeAddSkillsDrawer(): Promise<void> {
    if (await this.drawerCancelBtn.isVisible().catch(() => false)) {
      await this.drawerCancelBtn.click();
      await this.addNewSkillDrawer.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    }
  }

  /** The removable chip button for an already-selected department (ground-truth: `"Remove <dept>"`, not a checkbox). Used to detect a pre-populated/already-selected department without reopening the dropdown. */
  getDepartmentChip(departmentName: string): Locator {
    return this.addNewSkillDrawer.getByRole('button', { name: new RegExp(`remove\\s+${departmentName}`, 'i') });
  }

  /** Remove every currently-selected department chip. Ground truth confirmed live: the Department
   * combobox arrives PRE-POPULATED with a default department as soon as the drawer opens — there
   * is no naturally-occurring "nothing selected" state, which TC-EMPSKL-012/046 assume exists.
   * Call this right after opening the drawer to reach that state before testing the gate. */
  async clearAllDepartments(): Promise<void> {
    const chips = this.addNewSkillDrawer.getByRole('button', { name: /^remove\s+/i });
    for (let i = 0; i < 10; i++) {
      const count = await chips.count().catch(() => 0);
      if (count === 0) break;
      await chips.first().click().catch(() => {});
      await this.page.waitForTimeout(200);
    }
  }

  /** Wait out the department combobox's brief disabled window while its option list loads async (same race documented on GoalsPage.clickEditGoal()). */
  private async waitForDepartmentComboboxReady(): Promise<boolean> {
    const visible = await this.departmentCombobox.isVisible({ timeout: 5000 }).catch(() => false);
    if (!visible) return false;
    for (let i = 0; i < 10; i++) {
      if (!(await this.departmentCombobox.isDisabled().catch(() => true))) return true;
      await this.page.waitForTimeout(300);
    }
    return !(await this.departmentCombobox.isDisabled().catch(() => true));
  }

  /** Select one or more departments via the drawer's Department combobox (ground-truth: a
   * multi-select combobox, not a checklist — see `departmentCombobox` above). Skips any name
   * already present as a removable chip. */
  async selectDepartmentsInDrawer(departmentNames: string[]): Promise<void> {
    const ready = await this.waitForDepartmentComboboxReady();
    if (!ready) return;
    for (const name of departmentNames) {
      if (await this.getDepartmentChip(name).isVisible().catch(() => false)) continue;
      await this.departmentCombobox.click();
      const option = this.page.getByRole('option', { name: new RegExp(`^${name}$`, 'i') });
      const optionVisible = await option.first().waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);
      if (optionVisible) await option.first().click();
      await this.closeDepartmentPopover();
    }
  }

  /** REDESIGN (6.9.0): the Department picker is a multi-select cmdk popover (input placeholder
   * "Department") that stays open after an option is clicked. If it is left open, the next
   * "dialog with a listbox" lookup grabs IT instead of the skill/employee popover. Close it and
   * wait until it is really gone. */
  private async closeDepartmentPopover(): Promise<void> {
    const deptInput = this.page.locator('input[placeholder="Department"]');
    for (let i = 0; i < 3; i++) {
      if (!(await deptInput.isVisible().catch(() => false))) return;
      await this.page.keyboard.press('Escape').catch(() => {});
      if (await deptInput.waitFor({ state: 'hidden', timeout: 2000 }).then(() => true).catch(() => false)) return;
    }
  }

  /** Whether all other drawer fields (Search or Create Skill, Assign to Employees) are currently disabled — used to verify the department-selection gate (TC-EMPSKL-012/046). */
  async areOtherFieldsDisabled(): Promise<boolean> {
    const searchDisabled = await this.searchOrCreateSkillBtn.isDisabled().catch(() => true);
    const assignDisabled = await this.assignToEmployeesInput.isDisabled().catch(() => true);
    return searchDisabled && assignDisabled;
  }

  /**
   * Select whichever department the combobox offers first, without depending on a specific
   * seeded department name. If a department is already pre-populated (shown as a removable chip
   * — confirmed live this can happen by default), reuses that one instead of opening the dropdown
   * again. Returns the selected department's visible label, or null if the combobox never becomes
   * available at all.
   */
  /** Department last chosen in the Add Skills drawer — the Skills Listing only renders once that same department is opened in the Departments panel. */
  private lastDrawerDepartment: string | null = null;

  /** Open a department in the Skills tab's Departments panel so its Skills Listing renders. */
  async openListingDepartment(department: string): Promise<boolean> {
    // REDESIGN (6.9.0): the Departments panel is gone — pick the department in the page-level combobox.
    const ok = await this.switchDepartmentContext(department);
    if (!ok) return false;
    return this.skillsListingSearchInput.waitFor({ state: 'visible', timeout: 10_000 }).then(() => true).catch(() => false);
  }

  async selectFirstAvailableDepartment(): Promise<string | null> {
    const ready = await this.waitForDepartmentComboboxReady();
    if (!ready) return null;

    const existingChip = this.addNewSkillDrawer.getByRole('button', { name: /^remove\s+/i }).first();
    if (await existingChip.isVisible().catch(() => false)) {
      const chipLabel = (await existingChip.getAttribute('aria-label').catch(() => null))
        ?? (await existingChip.textContent().catch(() => null));
      const match = chipLabel?.match(/remove\s+(.+)/i);
      if (match) {
        this.lastDrawerDepartment = match[1].trim();
        return this.lastDrawerDepartment;
      }
    }

    const option = this.page.getByRole('option').first();
    let optionVisible = false;
    // The drawer slides in; a click during the animation is sometimes swallowed — retry once.
    for (let attempt = 0; attempt < 2 && !optionVisible; attempt++) {
      await this.departmentCombobox.click();
      optionVisible = await option.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);
    }
    if (!optionVisible) {
      await this.page.keyboard.press('Escape').catch(() => {});
      return null;
    }
    const label = ((await option.textContent().catch(() => '')) ?? '').trim() || 'department';
    // The list re-renders once as it settles ("element was detached") — retry the click once.
    await option.click({ timeout: 5000 }).catch(async () => { await this.page.getByRole('option').first().click(); });
    await this.closeDepartmentPopover();
    this.lastDrawerDepartment = label;
    return label;
  }

  /**
   * A deterministic, always-new skill name for Create flows — avoids depending on unconfirmed
   * seed data for "skill already exists" scenarios; guaranteed to hit the "No match found" +
   * "+ Create new Skill" path.
   */
  createUniqueSkillName(prefix = 'AutoSkill'): string {
    return `${prefix}-${Date.now()}`;
  }

  /** Open Assign to Employees and count how many employees are offered, WITHOUT clicking through
   * them — much cheaper than `addFirstAvailableEmployees()` for tests that only care about the
   * offered list's size (e.g. comparing Admin's vs TM's scoped counts), which previously clicked
   * one-by-one up to the requested count and could exceed the test timeout for a large ask. */
  async getAvailableEmployeeOptionsCount(): Promise<number> {
    const visible = await this.assignToEmployeesInput.isVisible().catch(() => false);
    if (!visible) return 0;
    await this.openAssignEmployeesPopover(this.assignToEmployeesInput);
    const options = this.page.getByRole('option');
    return options.count().catch(() => 0);
  }

  /**
   * Open Assign to Employees and select the first N employees offered, without depending on
   * specific seeded employee names. Returns the selected employees' visible names (best-effort —
   * an empty array element is dropped rather than asserted against).
   */
  /** Open the Assign to Employees popover. Probed live (6.9.0): right after the Department popover
   * closes, the first click on this trigger is sometimes swallowed — retry once. */
  private async openAssignEmployeesPopover(trigger: Locator): Promise<void> {
    // Probed live: the popover can open and then snap shut ~0.5s later (the drawer re-renders once
    // after the department / new-skill / logo changes). Only trust it once it stays open past the
    // follow-up network activity.
    const options = this.page.getByRole('option');
    const popover = this.getAssignToEmployeesPopoverInput();
    for (let attempt = 0; attempt < 3; attempt++) {
      if (!(await popover.isVisible().catch(() => false))) await trigger.click().catch(() => {});
      if (!(await options.first().waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false))) continue;
      await this.page.waitForLoadState('networkidle', { timeout: 3000 }).catch(() => {});
      if (await popover.waitFor({ state: 'hidden', timeout: 1000 }).then(() => false).catch(() => true)) return;
    }
  }

  async addFirstAvailableEmployees(count: number): Promise<string[]> {
    const visible = await this.assignToEmployeesInput.isVisible().catch(() => false);
    if (!visible) return [];
    await this.openAssignEmployeesPopover(this.assignToEmployeesInput);
    const options = this.page.getByRole('option');
    const names: string[] = [];
    const available = await options.count().catch(() => 0);
    const popover = this.getAssignToEmployeesPopoverInput();
    for (let i = 0; i < Math.min(count, available); i++) {
      // Whether the popover stays open after a pick is not guaranteed — reopen only if it closed
      // (clicking the trigger while open would toggle it shut).
      if (!(await popover.isVisible().catch(() => false))) await this.openAssignEmployeesPopover(this.assignToEmployeesInput);
      // Pick the first option not already chosen (cmdk's aria-selected only marks the highlighted
      // row, so dedupe by name). Option text is "<Name> <DEPT> - <email>"; chips/table show <Name>.
      await options.first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
      const texts = await options.allTextContents().catch(() => [] as string[]);
      const idx = texts.findIndex(t => {
        const n = (t.trim().match(/^([A-Z][a-z]+(?:\s[A-Z][a-z]+)*)/)?.[1] ?? t.trim()).trim();
        return n && !names.includes(n);
      });
      if (idx < 0) break;
      const raw = texts[idx].trim();
      const name = (raw.match(/^([A-Z][a-z]+(?:\s[A-Z][a-z]+)*)/)?.[1] ?? raw).trim();
      await options.nth(idx).click().catch(() => {});
      names.push(name);
    }
    // Close ONLY the employee popover — a stray Escape with no popover open closes the whole drawer.
    if (await popover.isVisible().catch(() => false)) {
      await this.page.keyboard.press('Escape').catch(() => {});
      await popover.waitFor({ state: 'hidden', timeout: 3000 }).catch(() => {});
    }
    return names;
  }

  /** The portal-rendered command-palette dialog opened by clicking `searchOrCreateSkillBtn` — see ground-truth note on that locator. Distinguished from the "Add New Skill" drawer by its "Suggestions" listbox. */
  getSkillSearchPopover(): Locator {
    // Exclude the Department picker popover (same cmdk widget, input placeholder "Department").
    return this.page.getByRole('dialog').filter({ has: this.page.getByRole('listbox') })
      .filter({ hasNot: this.page.locator('input[placeholder="Department"]') });
  }

  /** The real typeable search input inside the skill-search popover. */
  getSkillSearchPopoverInput(): Locator {
    return this.getSkillSearchPopover().getByRole('combobox');
  }

  /** Ground-truth confirmed live (via targeted position-polling): right after filling the search
   * term, the debounced fuzzy-search re-renders and the option list visibly SHIFTS POSITION once
   * (observed: an option moved from y=508 to y=318 within a ~300-600ms window), then stays
   * perfectly stable afterward. Clicking mid-shift is what produced "element is not stable" /
   * "detached from the DOM, retrying" errors on `clickCreateNewSkillOption()` — not a real app
   * defect. Waiting past this window fixes it reliably. */
  async searchOrCreateSkill(term: string): Promise<void> {
    const alreadyOpen = await this.getSkillSearchPopover().isVisible().catch(() => false);
    if (!alreadyOpen) await this.searchOrCreateSkillBtn.click();
    const input = this.getSkillSearchPopoverInput();
    await input.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    await input.fill(term);

    // Ground-truth (probe, recorded in the module's session notes): the popover's debounced result
    // list can take well over a second to render — measured visible at 2000ms but NOT at 1500ms.
    // A fixed 800ms sleep followed by the callers' instantaneous `noMatchFoundText.isVisible()`
    // gate therefore lost the race about half the time; the gate returned false, the skill was
    // never selected, and Save stayed disabled until the 15s action timeout. Wait for the result
    // list itself (auto-waiting) instead of guessing a duration.
    await Promise.race([
      this.createNewSkillOption.waitFor({ state: 'visible', timeout: 10_000 }),
      this.getSkillSearchOption(term).first().waitFor({ state: 'visible', timeout: 10_000 }),
    ]).catch(() => {});
    // The list still shifts position once as the debounce settles — clicking into that reflow is
    // what produced "element is not stable"/"detached from DOM" here.
    await this.page.waitForTimeout(400);
  }

  /** A fuzzy-matched skill option in the Search or Create Skill popover, with its department-link count shown alongside (e.g. "TypeScript 3 dept linked"). Ground-truth confirmed live — see `getSkillSearchPopover()`. */
  getSkillSearchOption(skillName: string): Locator {
    return this.getSkillSearchPopover().getByRole('option', { name: new RegExp(skillName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') });
  }

  async selectSkillFromSearchResults(skillName: string): Promise<boolean> {
    const option = this.getSkillSearchOption(skillName).first();
    const visible = await option.isVisible().catch(() => false);
    if (visible) {
      await option.click();
      await this.closeSkillSearchPopover();
    }
    return visible;
  }

  /**
   * Whether the Search-or-Create popover is offering "Create New Skill" — i.e. the typed name
   * matched nothing existing and the create path is available.
   *
   * Use this instead of `noMatchFoundText.isVisible()`. `isVisible()` is an INSTANTANEOUS check
   * with no auto-wait, and the popover's result list is debounced: probed live, the option is
   * absent at the moment the fill returns but `.click()` on it (which does auto-wait) succeeds
   * immediately afterwards. Every spec that gated the create-click on `isVisible()` therefore
   * skipped it about half the time, left the skill unselected, and then timed out 15s later on a
   * permanently disabled Save button — the single largest cause of Skills failures.
   */
  async isCreateNewSkillOffered(timeout = 10_000): Promise<boolean> {
    return this.createNewSkillOption.waitFor({ state: 'visible', timeout }).then(() => true).catch(() => false);
  }

  async clickCreateNewSkillOption(): Promise<void> {
    await this.createNewSkillOption.click();
    await this.closeSkillSearchPopover();
  }

  /** Probed live (6.9.0): after "Create New Skill" the search popover stays open over the drawer,
   * so the next click elsewhere (e.g. Assign to Employees) only dismisses it and is lost. Close it
   * explicitly — and only if open, since a stray Escape closes the whole drawer. */
  async closeSkillSearchPopover(): Promise<void> {
    const pop = this.getSkillSearchPopover();
    if (await pop.isVisible().catch(() => false)) {
      await this.page.keyboard.press('Escape').catch(() => {});
      await pop.waitFor({ state: 'hidden', timeout: 3000 }).catch(() => {});
    }
  }

  /** The real typeable search input inside the Assign to Employees popover — same portal-popover
   * pattern as `getSkillSearchPopoverInput()`. `assignToEmployeesInput` itself is only the
   * trigger; typing must target this instead (a plain `.fill()` on the trigger div was previously
   * a silent no-op, caught by `.catch(() => {})`, so search never actually narrowed the list). */
  getAssignToEmployeesPopoverInput(): Locator {
    return this.page.getByRole('dialog').filter({ has: this.page.getByRole('listbox') })
      .filter({ hasNot: this.page.locator('input[placeholder="Department"]') }).getByRole('combobox');
  }

  async addEmployeeToAssignment(employeeName: string): Promise<boolean> {
    const visible = await this.assignToEmployeesInput.isVisible().catch(() => false);
    if (!visible) return false;
    await this.openAssignEmployeesPopover(this.assignToEmployeesInput);
    const popoverInput = this.getAssignToEmployeesPopoverInput();
    await popoverInput.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    await popoverInput.fill(employeeName).catch(() => {});
    const option = this.page.getByRole('option', { name: new RegExp(employeeName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') }).first();
    const optionVisible = await option.isVisible({ timeout: 3000 }).catch(() => false);
    if (optionVisible) await option.click();
    return optionVisible;
  }

  /** Selected employee's removable chip in Assign to Employees. Unverified Selector — exact chip markup not specified. */
  getEmployeeChip(employeeName: string): Locator {
    return this.addNewSkillDrawer.locator('[data-slot="badge"], [class*="chip" i]').filter({ hasText: employeeName })
      .or(this.addNewSkillDrawer.getByText(employeeName))
      .first();
  }

  async removeEmployeeChip(employeeName: string): Promise<boolean> {
    const chip = this.getEmployeeChip(employeeName);
    const removeBtn = chip.getByRole('button', { name: /remove|close|x/i });
    const visible = await removeBtn.isVisible().catch(() => false);
    if (visible) await removeBtn.click();
    return visible;
  }

  /** The Primary/Secondary toggle rendered next to an employee's chip. Unverified Selector — toggle widget (switch vs. radio pair) not specified. */
  getEmployeeToggle(employeeName: string): Locator {
    const chip = this.getEmployeeChip(employeeName);
    return chip.locator('..').getByRole('switch')
      .or(chip.locator('..').getByRole('radio', { name: /primary/i }))
      .or(chip.locator('..').getByRole('button', { name: /primary|secondary/i }))
      .first();
  }

  /** Set a given employee's toggle explicitly to Primary or Secondary. Leaving an employee untouched (never calling this) is how the "defaults to Secondary" behavior is exercised. */
  async setEmployeeToggle(employeeName: string, classification: 'Primary' | 'Secondary'): Promise<boolean> {
    const toggle = this.getEmployeeToggle(employeeName);
    const visible = await toggle.isVisible().catch(() => false);
    if (!visible) return false;
    const current = (await toggle.getAttribute('aria-checked').catch(() => null))
      ?? (await toggle.textContent().catch(() => ''));
    const isPrimary = /primary|true/i.test(current ?? '');
    const wantPrimary = classification === 'Primary';
    if (isPrimary !== wantPrimary) await toggle.click();
    return true;
  }

  /** Whether the Primary/Secondary toggle is rendered at all next to a given employee's chip (used for RM non-visibility checks — TC-EMPSKL-016/042). */
  async isToggleRendered(employeeName: string): Promise<boolean> {
    return this.getEmployeeToggle(employeeName).count().then(c => c > 0);
  }

  /**
   * Fill the "Add logo link" field.
   *
   * A logo is REQUIRED to create a new skill on 6.2.0: saving without one leaves the drawer open
   * with the inline message "Provide logo URL or upload icon file." and fires no request at all —
   * the "Save does nothing" symptom. The field also renders a beat AFTER "Create New Skill" is
   * clicked, so the old instantaneous `isVisible()` check reported it missing, returned false, and
   * every caller swallowed that with `.catch(() => {})` — leaving the logo blank and the save dead.
   */
  async fillLogoUrl(url: string): Promise<boolean> {
    const present = await this.logoUrlInput.waitFor({ state: 'visible', timeout: 10_000 }).then(() => true).catch(() => false);
    if (!present) return false;
    await this.logoUrlInput.fill(url);
    return true;
  }

  async addTag(tag: string): Promise<boolean> {
    const visible = await this.tagsInput.isVisible().catch(() => false);
    if (!visible) return false;
    await this.tagsInput.fill(tag);
    await this.page.keyboard.press('Enter').catch(() => {});
    return true;
  }

  /** Check for and, if present, dismiss the "Confirm & Create" duplicate-skill warning — see
   * `duplicateSkillWarningPopup` field comment. `timeoutMs` lets a caller right after clicking
   * Save WAIT for it to render (same async-check-fires-after-click ground truth as GoalsPage's
   * duplicate-goal warning) instead of missing it with an instant check. */
  async isDuplicateSkillWarningVisible(timeoutMs = 0): Promise<boolean> {
    if (timeoutMs > 0) {
      return this.duplicateSkillWarningPopup.waitFor({ state: 'visible', timeout: timeoutMs }).then(() => true).catch(() => false);
    }
    return this.duplicateSkillWarningPopup.isVisible().catch(() => false);
  }

  async acknowledgeDuplicateSkillWarning(): Promise<void> {
    const btn = this.duplicateSkillWarningPopup.getByRole('button', { name: /confirm\s*&?\s*create/i });
    if (await btn.isVisible().catch(() => false)) {
      await btn.click();
      await this.duplicateSkillWarningPopup.waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
    }
  }

  async saveAddSkillDrawer(): Promise<void> {
    await this.drawerSaveBtn.click();
    if (await this.isDuplicateSkillWarningVisible(4000)) await this.acknowledgeDuplicateSkillWarning();
    await this.addNewSkillDrawer.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
  }

  async isDrawerSaveEnabled(): Promise<boolean> {
    return this.drawerSaveBtn.isEnabled().catch(() => false);
  }

  /** Inline mandatory-field validation error (e.g. Search or Create Skill left blank). Not a verbatim-quoted message in source — matched generically. */
  getInlineFieldError(): Locator {
    return this.addNewSkillDrawer.getByText(/mandatory|required|is required/i).first();
  }

  /** Per-employee conflict message on Save — verbatim pattern: `"[Employee Name] already has this skill as [Primary/Secondary]."` */
  getPerEmployeeConflictMessage(employeeName: string, category: 'Primary' | 'Secondary'): Locator {
    return this.page.getByText(new RegExp(`${employeeName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+already has this skill as\\s+${category}`, 'i'));
  }

  /** Self-assign duplicate-category message — verbatim: `"This skill is already added as Secondary."` (pattern generalized to either category since only Secondary is quoted in source). */
  getSelfAssignDuplicateMessage(category: 'Primary' | 'Secondary'): Locator {
    return this.page.getByText(new RegExp(`This skill is already added as\\s+${category}`, 'i'));
  }

  // ─── Skill Detail Panel — Tags (editable post-creation) ─────────────────

  /** Tag chip shown in the Skill Detail Panel, if any (used to identify a real, searchable tag
   * for TC-EMPSKL-121, inferred). Speculative/Unverified Selector — tag display markup not
   * confirmed live; distinguished from an employee's chip by excluding any "Remove ..." button
   * and any "@" (email) text. */
  getSkillDetailTagChips(): Locator {
    return this.page.locator('[data-slot="badge"]')
      .filter({ hasNotText: '@' })
      .filter({ hasNot: this.page.getByRole('button', { name: /remove/i }) });
  }

  /** Post-creation lock (TC-EMPSKL-045). REDESIGN (6.9.0): there is no editable detail panel — the
   * only post-creation editor is "Edit Skill Details", where Department (combobox) and the skill
   * picker button are rendered disabled and there is no logo field at all. */
  getDetailPanelField(fieldLabel: 'Skill Name' | 'Department' | 'Logo'): Locator {
    if (fieldLabel === 'Department') return this.editSkillDrawer.getByRole('combobox').first();
    if (fieldLabel === 'Logo') return this.editSkillDrawer.getByPlaceholder(/enter link|logo/i).first();
    return this.editSkillDrawer.getByRole('button', { name: /^(?!cancel$|update$|save$|close$|add tag$|remove )/i }).first();
  }

  /** Returns true if the field can be changed (i.e. it is NOT locked). A field that is absent from
   * the Edit drawer counts as locked. */
  async attemptEditDetailPanelField(fieldLabel: 'Skill Name' | 'Department' | 'Logo', value: string): Promise<boolean> {
    if (!(await this.editSkillDrawer.isVisible().catch(() => false))) await this.openEditSkillDrawer();
    const field = this.getDetailPanelField(fieldLabel);
    if ((await field.count().catch(() => 0)) === 0) return false;
    const isDisabled = await field.isDisabled().catch(() => true);
    if (isDisabled) return false;
    const tag = await field.evaluate(el => el.tagName.toLowerCase()).catch(() => '');
    if (tag === 'input' || tag === 'textarea') await field.fill(value).catch(() => {});
    return true;
  }

  // ─── Delete / Unlink ─────────────────────────────────────────────────────

  async clickDeleteUnlink(): Promise<void> {
    await this.deleteUnlinkBtn.click();
  }

  async isDeleteUnlinkEnabled(): Promise<boolean> {
    return this.deleteUnlinkBtn.isEnabled().catch(() => false);
  }

  async confirmDeleteUnlink(): Promise<void> {
    const dialog = this.deleteUnlinkSkillConfirmation.or(this.unlinkFromDepartmentConfirmation).first();
    const confirmBtn = dialog.getByRole('button', { name: /^(confirm|yes|delete|unlink|yes,\s*unlink)$/i });
    if (await confirmBtn.isVisible().catch(() => false)) {
      await confirmBtn.click();
      await dialog.waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
    }
  }

  async cancelDeleteUnlink(): Promise<void> {
    const dialog = this.deleteUnlinkSkillConfirmation.or(this.unlinkFromDepartmentConfirmation).first();
    const cancelBtn = dialog.getByRole('button', { name: /^cancel$/i });
    if (await cancelBtn.isVisible().catch(() => false)) {
      await cancelBtn.click();
      await dialog.waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
    }
  }

  // ─── Edit Skill Details — real employee assignment lives here, not in Add New Skill ──

  /** Open the Edit Skill Details dialog for the currently-selected skill. Requires a skill to
   * already be selected in the listing (see `selectSkillFromListing`) — `editSkillBtn` stays
   * disabled otherwise. Same async-load settle race documented on GoalsPage.clickEditGoal() —
   * reopening right after a save can otherwise read the dialog before its chips (e.g. a
   * just-assigned employee) finish rendering from the refetched skill data. */
  async openEditSkillDrawer(): Promise<boolean> {
    const visible = await this.editSkillBtn.isVisible().catch(() => false);
    if (!visible) return false;
    const enabled = await this.editSkillBtn.isEnabled().catch(() => false);
    if (!enabled) return false;
    await this.editSkillBtn.click();
    await this.editSkillDrawer.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    await this.page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
    await this.page.waitForTimeout(1000);
    return true;
  }

  async closeEditSkillDrawer(): Promise<void> {
    if (await this.editSkillDrawerCancelBtn.isVisible().catch(() => false)) {
      await this.editSkillDrawerCancelBtn.click();
      await this.editSkillDrawer.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    }
  }

  /** The Assign to Employees combobox inside Edit Skill Details — same trigger-then-portal-popover
   * pattern as the create drawer's `assignToEmployeesInput` (see its ground-truth comment), just
   * pre-populated with the skill's current holders as removable chips. */
  getEditSkillAssignToEmployeesCombobox(): Locator {
    return this.editSkillDrawer.getByRole('combobox').last();
  }

  /** A currently-assigned employee's removable chip inside Edit Skill Details. */
  getEditSkillEmployeeChip(employeeName: string): Locator {
    return this.editSkillDrawer.getByRole('button', { name: new RegExp(`remove\\s+${employeeName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i') });
  }

  /** Assign an employee to the skill from within Edit Skill Details. Reuses the same portal-popover
   * lookup as `addEmployeeToAssignment()` since both fields share the identical widget. */
  async addEmployeeInEditDrawer(employeeName: string): Promise<boolean> {
    await this.getEditSkillAssignToEmployeesCombobox().click();
    const popoverInput = this.getAssignToEmployeesPopoverInput();
    await popoverInput.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    await popoverInput.fill(employeeName).catch(() => {});
    const option = this.page.getByRole('option', { name: new RegExp(employeeName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') }).first();
    const optionVisible = await option.isVisible({ timeout: 3000 }).catch(() => false);
    if (optionVisible) await option.click();
    return optionVisible;
  }

  async removeEmployeeInEditDrawer(employeeName: string): Promise<boolean> {
    const chip = this.getEditSkillEmployeeChip(employeeName);
    const visible = await chip.isVisible().catch(() => false);
    if (visible) await chip.click();
    return visible;
  }

  async saveEditSkillDrawer(): Promise<void> {
    // An open Assign-to-Employees popover sits over the drawer and blocks the Update click.
    const popover = this.getAssignToEmployeesPopoverInput();
    if (await popover.isVisible().catch(() => false)) {
      await this.page.keyboard.press('Escape').catch(() => {});
      await popover.waitFor({ state: 'hidden', timeout: 3000 }).catch(() => {});
    }
    await this.editSkillDrawerSaveBtn.click();
    await this.editSkillDrawer.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
    await this.waitForSkillDataLoaded();
  }

  /** Count how many employees are offered by Edit Skill Details' Assign to Employees, without
   * clicking through them — mirrors `getAvailableEmployeeOptionsCount()` for the create drawer. */
  async getAvailableEmployeeOptionsCountInEditDrawer(): Promise<number> {
    await this.openAssignEmployeesPopover(this.getEditSkillAssignToEmployeesCombobox());
    const options = this.page.getByRole('option');
    return options.count().catch(() => 0);
  }

  /** Select the first employee offered by Edit Skill Details' Assign to Employees, without
   * depending on a specific seeded name — mirrors `addFirstAvailableEmployees()` for the create
   * drawer. Returns the selected employee's visible name, or null if none were offered.
   * Ground-truth confirmed live: each option's full text is "<Name> <DEPT CODE> -
   * <email>" (e.g. "Komal Trivedi FRONT END - komal.trivedi@simformsolutions.com") concatenated
   * with no separator before the department code, but the resulting chip's "Remove <Name>" button
   * only uses the short Title-Case name — using the raw option text as `employeeName` therefore
   * never matched the chip afterward. Extract just the leading Title-Case name portion.
   * Also ground-truth confirmed live: options for employees already assigned to this skill render
   * with `aria-selected="true"` right there in the same list — picking `options.first()`
   * unconditionally can select an ALREADY-assigned holder, which toggles them back OFF instead of
   * adding someone new (root cause of a repeatable, non-flaky failure re-running this on the same
   * small TM-scoped employee pool). Skip already-selected options. */
  async addFirstAvailableEmployeeInEditDrawer(): Promise<string | null> {
    await this.openAssignEmployeesPopover(this.getEditSkillAssignToEmployeesCombobox());
    const options = this.page.getByRole('option');
    const count = await options.count().catch(() => 0);
    for (let i = 0; i < count; i++) {
      const opt = options.nth(i);
      // REDESIGN (6.9.0), probed live: cmdk's aria-selected only marks the keyboard-highlighted row;
      // an employee who already holds the skill is shown with a checked box (lucide "check" icon).
      // Clicking such a row would UN-assign them.
      const alreadySelected = (await opt.locator('svg.lucide-check').count().catch(() => 0)) > 0;
      if (alreadySelected) continue;
      const rawText = ((await opt.textContent().catch(() => '')) ?? '').trim();
      if (!rawText) continue;
      const name = (rawText.match(/^([A-Z][a-z]+(?:\s[A-Z][a-z]+)*)/)?.[1] ?? rawText).trim();
      await opt.click().catch(() => {});
      return name;
    }
    return null;
  }

  async dismissCannotUnlinkError(): Promise<void> {
    const closeBtn = this.cannotUnlinkSkillError.getByRole('button', { name: /^(okay|ok|dismiss)$/i });
    if (await closeBtn.isVisible().catch(() => false)) await closeBtn.click();
  }

  // ─── Override confirmation ──────────────────────────────────────────────

  /** Override confirmation dialog — verbatim message: `"This skill was self-classified by [Employee Name] as [Primary/Secondary]. Changing it will update their profile. Continue?"` */
  getOverrideConfirmationDialog(): Locator {
    return this.page.getByRole('dialog').or(this.page.getByRole('alertdialog')).filter({ hasText: /self-classified by/i }).first();
  }

  async confirmOverride(): Promise<void> {
    const dialog = this.getOverrideConfirmationDialog();
    const confirmBtn = dialog.getByRole('button', { name: /^(continue|confirm|yes)$/i });
    if (await confirmBtn.isVisible().catch(() => false)) {
      await confirmBtn.click();
      await dialog.waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
    }
  }

  async cancelOverride(): Promise<void> {
    const dialog = this.getOverrideConfirmationDialog();
    const cancelBtn = dialog.getByRole('button', { name: /^(cancel|no)$/i });
    if (await cancelBtn.isVisible().catch(() => false)) {
      await cancelBtn.click();
      await dialog.waitFor({ state: 'hidden', timeout: 8000 }).catch(() => {});
    }
  }

  /** Attempt to change an existing employee's classification via the Skill Detail Panel (triggers the override flow if the employee already self-classified). Unverified Selector — exact in-panel toggle control not specified. */
  async attemptOverrideClassification(employeeName: string, newClassification: 'Primary' | 'Secondary'): Promise<boolean> {
    const section = newClassification === 'Primary' ? this.getSecondaryHoldersSection() : this.getPrimaryHoldersSection();
    const row = this.getHolderRowByName(section, employeeName);
    const toggle = row.locator('..').getByRole('switch').or(row.locator('..').getByRole('button', { name: /primary|secondary/i })).first();
    const visible = await toggle.isVisible().catch(() => false);
    if (!visible) return false;
    await toggle.click();
    return true;
  }

  // ─── Employee Profile self-assignment (Section 10.3) ────────────────────
  // Section 10.3's exact UI (drawer vs. inline form, department auto-scoping) is not included in the
  // source addendum (unclear #7) — self-assignment is reached via the employee's own profile,
  // structurally distinct from the multi-employee Skills Management flow above. Unverified Selectors
  // throughout this block.

  /** Navigate to the logged-in user's own Employee Profile, Skills panel. Unverified Selector — exact "own profile" entry point not specified. */
  async navigateToOwnProfileSkillsPanel(): Promise<void> {
    await this.page.goto('/profile', { waitUntil: 'domcontentloaded' }).catch(() => {});
    const skillsSection = this.page.getByRole('heading', { name: /^skills$/i }).or(this.page.getByRole('tab', { name: /^skills$/i }));
    const visible = await skillsSection.first().isVisible({ timeout: 5000 }).catch(() => false);
    if (visible) await skillsSection.first().click().catch(() => {});
  }

  getOwnProfileAddSkillBtn(): Locator {
    return this.page.getByRole('button', { name: /add skill/i });
  }

  /** Single classification control (Primary/Secondary) used at self-assignment time — expected to differ from the multi-employee chip/toggle flow (TC-EMPSKL-030). Unverified Selector. */
  getOwnProfileClassificationControl(): Locator {
    return this.page.getByRole('radiogroup').or(this.page.getByRole('group', { name: /classification/i })).first();
  }

  async selfAssignSkill(skillName: string, classification: 'Primary' | 'Secondary'): Promise<boolean> {
    const addBtn = this.getOwnProfileAddSkillBtn();
    const visible = await addBtn.isVisible().catch(() => false);
    if (!visible) return false;
    await addBtn.click();
    const skillInput = this.page.getByLabel(/skill/i).or(this.page.getByPlaceholder(/skill/i)).first();
    if (await skillInput.isVisible().catch(() => false)) await skillInput.fill(skillName);
    const classificationOption = this.page.getByRole('radio', { name: classification }).or(this.page.getByRole('button', { name: classification }));
    if (await classificationOption.first().isVisible().catch(() => false)) await classificationOption.first().click();
    const saveBtn = this.page.getByRole('button', { name: /^save$/i });
    if (await saveBtn.isVisible().catch(() => false)) await saveBtn.click();
    return true;
  }

  getOwnSkillRow(skillName: string): Locator {
    return this.page.getByRole('listitem').filter({ hasText: skillName }).or(this.page.getByText(skillName).locator('..')).first();
  }

  async reclassifyOwnSkill(skillName: string): Promise<boolean> {
    const row = this.getOwnSkillRow(skillName);
    const toggle = row.getByRole('switch').or(row.getByRole('button', { name: /primary|secondary/i })).first();
    const visible = await toggle.isVisible().catch(() => false);
    if (visible) await toggle.click();
    return visible;
  }

  // ─── API helpers (endpoints NOT confirmed anywhere in source — unclear #4, blocking) ──
  // The requirement doc records only `inferredGuess` endpoints (see apiEndpoints[] in
  // req-2026-07-14-EMPSKL-doc.json) — never confirmed. Callers must treat a null/non-2xx result
  // defensively (skip the API-parity leg of the assertion rather than hard-failing) until a human
  // confirms the real contract, per this suite's PARTIAL automationHints.

  async attemptApiWrite(ctxPage: Page, method: 'post' | 'put' | 'patch' | 'delete', url: string, data: Record<string, unknown> = {}): Promise<number> {
    const response = await ctxPage.request[method](url, { data, failOnStatusCode: false });
    return response.status();
  }

  async attemptApiRead(ctxPage: Page, url: string): Promise<{ status: number; body: any | null }> {
    const response = await ctxPage.request.get(url, { failOnStatusCode: false });
    const body = response.ok() ? await response.json().catch(() => null) : null;
    return { status: response.status(), body };
  }

  /** Intercept the skills API and force a failure — for negative/error-handling tests (500/503). */
  async mockSkillsApiFailure(status = 500): Promise<void> {
    await this.page.route(/\/api\/.*skill/i, route =>
      route.fulfill({
        status,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Internal Server Error' }),
      })
    );
  }

  getNotFoundState(): Locator {
    return this.page.getByText(/not found|404/i).first();
  }
}
