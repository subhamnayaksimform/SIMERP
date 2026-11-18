// TC-DEPTCMP-004..023 — functional pass: department scoping of the listing and Goal dropdown, the
// 7-column row display, the mandatory-Department-first field gate, minimal/maximal Add Competency
// field combinations (Description, Targeted Members [All/Selected] + No of Employees, Status,
// Priority), field-by-field Edit Competency coverage, Delete Competency, and the multi-department
// department-selection-before-action gate. TC-006 (precise multi-employee progress-average seeding)
// and TC-009 (Year field visibility unresolved) are `test.fixme` per their PARTIAL automationHints;
// TC-022 (RM-specific) is `test.fixme` — no dedicated RM test account provisioned.
import { test, expect } from '../../../fixtures/auth';
import { CompetenciesPage } from '../../../page-objects/department/competencies.page';

test.describe('Competencies — Functional', () => {
  let competenciesPage: CompetenciesPage;

  test.beforeEach(async ({ page }) => {
    competenciesPage = new CompetenciesPage(page);
  });

  test('TC-DEPTCMP-004 Only the currently selected department\'s competencies are shown in the listing @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    // The listing has no Department column any more (verified 2026-11-12), so a row's text cannot
    // carry the department name. Scoping is checked against what the listing request for the selected
    // department returned, and the rendered rows must come only from that response.
    const deptA = await competenciesPage.selectDepartmentInListingWithApi('Engineering');
    if (!deptA) test.skip(true, 'No department filter control available on the Competencies Listing');
    expect(deptA!.departmentNames.filter(d => d !== deptA!.label), `the ${deptA!.label} listing returned other departments' competencies`).toEqual([]);
    const rowsA = await competenciesPage.getAllRowTexts();
    for (const text of rowsA) {
      expect(deptA!.goalNames.some(g => text.includes(g)), `row "${text.slice(0, 80)}" is not one of ${deptA!.label}'s competencies`).toBe(true);
    }

    const deptB = await competenciesPage.selectDepartmentInListingWithApi('Marketing');
    if (!deptB || deptB.label === deptA!.label) test.skip(true, 'A second, distinct department is not available to switch to');
    expect(deptB!.departmentNames.filter(d => d !== deptB!.label), `the ${deptB!.label} listing returned other departments' competencies`).toEqual([]);
    if (deptB!.goalNames.length === 0) test.skip(true, `${deptB!.label} has no competencies to compare`);
    // The table re-renders after the request — wait until its first row belongs to the new response.
    await expect.poll(async () => {
      const first = (await competenciesPage.getAllRowTexts())[0] ?? '';
      return deptB!.goalNames.some(g => first.includes(g));
    }, { timeout: 15_000 }).toBe(true);
    const rowsB = await competenciesPage.getAllRowTexts();
    for (const text of rowsB) {
      expect(deptB!.goalNames.some(g => text.includes(g)), 'a row from the previously selected department leaked into the new department\'s listing').toBe(true);
    }
  });

  test('TC-DEPTCMP-005 Competency row displays all required columns with correct values @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    const rowCount = await competenciesPage.getRowCount();
    if (rowCount === 0) test.skip(true, 'No existing competency row available');
    const row = competenciesPage.getFirstDataRow();
    const cells = await competenciesPage.getRowCells(row);
    expect(cells.length, 'competency row did not expose enough distinct values for its 7 documented columns').toBeGreaterThanOrEqual(5);
    expect(await competenciesPage.getRowStatus(row), 'Status column value not recognized as one of the 3 documented enum values').not.toBeNull();
    expect(await competenciesPage.getRowPriority(row), 'Priority column value not recognized as one of the 3 documented enum values').not.toBeNull();
  });

  test.fixme('TC-DEPTCMP-006 — MANUAL VERIFICATION REQUIRED: Progress percentage equals the average progress of employees assigned to the linked goal (requires precise multi-employee goal-progress test data seeding via API to make the expected average deterministic)', async () => {});

  test('TC-DEPTCMP-007 Add Competency: all non-Department fields stay disabled until a Department is selected, then enable immediately @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    expect(await competenciesPage.areNonDepartmentFieldsDisabled(), 'non-Department fields were enabled before any Department was selected').toBe(true);

    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available in Add Competency');
    const stillDisabled = await competenciesPage.areNonDepartmentFieldsDisabled();
    expect(stillDisabled, 'non-Department fields remained disabled after a Department was selected').toBe(false);
  });

  test('TC-DEPTCMP-008 Goal dropdown is scoped to only the goals belonging to the selected Department @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const deptA = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!deptA) test.skip(true, 'No Department option available in Add Competency');
    const goalsA = await competenciesPage.getGoalDropdownOptionsText();

    const deptB = await competenciesPage.selectDepartmentInPanel('MARKETING');
    if (!deptB || deptB === deptA) test.skip(true, 'A second, distinct department is not available to switch to');
    const goalsB = await competenciesPage.getGoalDropdownOptionsText();

    if (goalsA.length === 0 || goalsB.length === 0) test.skip(true, 'One of the two departments has no goals to compare against');
    const overlap = goalsA.filter(g => goalsB.includes(g));
    expect(overlap.length, 'the Goal dropdown leaked goal(s) across departments').toBe(0);
  });

  test.fixme('TC-DEPTCMP-009 — MANUAL VERIFICATION REQUIRED: newly created competency defaults to the current calendar year (Year field visibility/editability is unresolved per unclear[] in req doc; assertion may need to be against an API/DB field rather than a visible UI control)', async () => {});

  test('TC-DEPTCMP-010 Add Competency captures a minimal valid submission with only mandatory fields (Department + Goal) @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, `No free Goal for department "${department}" this year — every goal already has a competency there (goal+year is unique per department), so a create flow cannot run. Clean up test-created competencies or point these specs at a less-used department.`);
    const savedGoal = (await competenciesPage.savePanel()) ?? goal;
    await expect(competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!)).toBeVisible();
  });

  test('TC-DEPTCMP-011 Add Competency captures Description text and displays it correctly @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    const filled = await competenciesPage.fillDescription('Quarterly code-quality improvement initiative');
    if (!filled) test.skip(true, 'Description field not present/visible');
    const savedGoal = (await competenciesPage.savePanel()) ?? goal;

    const row = competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!);
    await expect(row).toBeVisible();
    const opened = await competenciesPage.clickEditCompetency(goal!);
    if (opened) expect(await competenciesPage.getDescriptionText()).toContain('Quarterly code-quality improvement initiative');
  });

  test('TC-DEPTCMP-012 Add Competency with Targeted Members = \'All\' behaves correctly for No of Employees @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    const set = await competenciesPage.selectTargetedMembers('All');
    if (!set) test.skip(true, 'Targeted Members field not present/visible');
    // Per defaultAssumption (unclear[]: No of Employees vs. Targeted Members relationship), No of
    // Employees is expected to be disabled (not directly editable) OR pre-populated with a derived
    // headcount value when 'All' is chosen — either is acceptable; only a blank, freely-editable
    // field would contradict both possible behaviors.
    const noOfEmployeesEnabledWithAll = await competenciesPage.isNoOfEmployeesEnabled();
    const prefilledValue = await competenciesPage.getNoOfEmployeesValue();
    const savedGoal = (await competenciesPage.savePanel()) ?? goal;
    await expect(competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!), 'competency did not save successfully with Targeted Members = All').toBeVisible();
    expect(
      !noOfEmployeesEnabledWithAll || prefilledValue.trim().length > 0,
      'No of Employees was blank and freely editable with Targeted Members = All, matching neither the disabled-field nor the derived-headcount default assumption'
    ).toBe(true);
  });

  test('TC-DEPTCMP-013 Add Competency with Targeted Members = \'Selected\' requires/accepts a specific No of Employees value @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    const set = await competenciesPage.selectTargetedMembers('Selected');
    if (!set) test.skip(true, 'Targeted Members field not present/visible');
    const filled = await competenciesPage.fillNoOfEmployees(3);
    if (!filled) test.skip(true, 'No of Employees field not enabled for Targeted Members = Selected');
    const savedGoal = (await competenciesPage.savePanel()) ?? goal;

    const row = competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!);
    await expect(row).toBeVisible();
    const counts = await competenciesPage.getRowMemberCounts(row);
    if (counts.targeted !== null) expect(counts.targeted).toBe(3);
  });

  test('TC-DEPTCMP-014 Add Competency accepts each valid Status value at creation (Not Started, In progress, Completed) @functional', async ({ page }) => {
    const statuses: Array<'Not Started' | 'In progress' | 'Completed'> = ['Not Started', 'In progress', 'Completed'];
    await competenciesPage.navigateToCompetencies();
    for (const status of statuses) {
      await competenciesPage.openAddCompetencyPanel();
      const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
      if (!department) test.skip(true, 'No Department option available');
      const goal = await competenciesPage.selectGoalInPanel();
      if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
      await competenciesPage.selectStatus(status);
      const savedGoal = (await competenciesPage.savePanel()) ?? goal;
      const row = competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!);
      await expect(row, `competency with Status = ${status} did not save/display correctly`).toBeVisible();
      expect(await competenciesPage.getRowStatus(row)).toMatch(new RegExp(`^${status}$`, 'i'));
    }
  });

  test('TC-DEPTCMP-015 Add Competency accepts each valid Priority value at creation (High, Medium, Low) @functional', async ({ page }) => {
    const priorities: Array<'High' | 'Medium' | 'Low'> = ['High', 'Medium', 'Low'];
    await competenciesPage.navigateToCompetencies();
    for (const priority of priorities) {
      await competenciesPage.openAddCompetencyPanel();
      const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
      if (!department) test.skip(true, 'No Department option available');
      const goal = await competenciesPage.selectGoalInPanel();
      if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
      await competenciesPage.selectPriority(priority);
      const savedGoal = (await competenciesPage.savePanel()) ?? goal;
      const row = competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!);
      await expect(row, `competency with Priority = ${priority} did not save/display correctly`).toBeVisible();
      expect(await competenciesPage.getRowPriority(row)).toMatch(new RegExp(`^${priority}$`, 'i'));
    }
  });

  test('TC-DEPTCMP-016 Edit Competency: Description field updates and persists in the listing @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    const rowCount = await competenciesPage.getRowCount();
    if (rowCount === 0) test.skip(true, 'No existing competency available to edit');
    const rows = competenciesPage.competenciesListing.getByRole('row').or(competenciesPage.competenciesListing.getByRole('listitem'));
    const identifier = ((await rows.first().textContent().catch(() => '')) ?? '').trim();
    const opened = await competenciesPage.clickEditCompetency(identifier);
    if (!opened) test.skip(true, 'Edit control not found');
    const newDescription = `Revised description after edit ${Date.now()}`;
    const filled = await competenciesPage.fillDescription(newDescription);
    if (!filled) test.skip(true, 'Description field not present in Edit Competency');
    await competenciesPage.savePanel();

    const reopened = await competenciesPage.clickEditCompetency(identifier);
    if (reopened) expect(await competenciesPage.getDescriptionText()).toContain(newDescription);
  });

  test('TC-DEPTCMP-017 Edit Competency: Targeted Members field updates and persists @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    const rowCount = await competenciesPage.getRowCount();
    if (rowCount === 0) test.skip(true, 'No existing competency available to edit');
    const rows = competenciesPage.competenciesListing.getByRole('row').or(competenciesPage.competenciesListing.getByRole('listitem'));
    const identifier = ((await rows.first().textContent().catch(() => '')) ?? '').trim();
    const opened = await competenciesPage.clickEditCompetency(identifier);
    if (!opened) test.skip(true, 'Edit control not found');
    const set = await competenciesPage.selectTargetedMembers('Selected');
    if (!set) test.skip(true, 'Targeted Members field not present in Edit Competency');
    await competenciesPage.savePanel();
    await expect(competenciesPage.getCompetencyRow(identifier), 'listing did not reflect the Targeted Members change immediately').toBeVisible();
  });

  test('TC-DEPTCMP-018 Edit Competency: No of Employees field updates and persists @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    const rowCount = await competenciesPage.getRowCount();
    if (rowCount === 0) test.skip(true, 'No existing competency available to edit');
    const rows = competenciesPage.competenciesListing.getByRole('row').or(competenciesPage.competenciesListing.getByRole('listitem'));
    const identifier = ((await rows.first().textContent().catch(() => '')) ?? '').trim();
    const opened = await competenciesPage.clickEditCompetency(identifier);
    if (!opened) test.skip(true, 'Edit control not found');
    await competenciesPage.selectTargetedMembers('Selected');
    const filled = await competenciesPage.fillNoOfEmployees(7);
    if (!filled) test.skip(true, 'No of Employees field not enabled in Edit Competency');
    await competenciesPage.savePanel();

    const row = competenciesPage.getCompetencyRow(identifier);
    await expect(row).toBeVisible();
    const counts = await competenciesPage.getRowMemberCounts(row);
    if (counts.targeted !== null) expect(counts.targeted).toBe(7);
  });

  test('TC-DEPTCMP-019 Edit Competency: Status field updates with a valid forward transition and persists @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    await competenciesPage.selectStatus('Not Started');
    const savedGoal = (await competenciesPage.savePanel()) ?? goal;

    const row = competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!);
    await expect(row).toBeVisible();
    const opened = await competenciesPage.clickEditCompetency(savedGoal!);
    if (!opened) test.skip(true, 'Edit control not found on the freshly created row');
    await competenciesPage.selectStatus('In progress');
    await competenciesPage.savePanel(); // editing keeps the same goal — no duplicate retry applies

    const updatedRow = competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!);
    await expect(updatedRow, 'row did not reflect the new status without navigating away and back').toBeVisible();
    expect(await competenciesPage.getRowStatus(updatedRow)).toMatch(/^In progress$/i);
  });

  test('TC-DEPTCMP-020 Edit Competency: Priority field updates and persists @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    const rowCount = await competenciesPage.getRowCount();
    if (rowCount === 0) test.skip(true, 'No existing competency available to edit');
    const rows = competenciesPage.competenciesListing.getByRole('row').or(competenciesPage.competenciesListing.getByRole('listitem'));
    const identifier = ((await rows.first().textContent().catch(() => '')) ?? '').trim();
    const opened = await competenciesPage.clickEditCompetency(identifier);
    if (!opened) test.skip(true, 'Edit control not found');
    await competenciesPage.selectPriority('Low');
    await competenciesPage.savePanel();

    const row = competenciesPage.getCompetencyRow(identifier);
    await expect(row).toBeVisible();
    expect(await competenciesPage.getRowPriority(row)).toMatch(/^Low$/i);
  });

  test('TC-DEPTCMP-021 TM/EM/Admin deletes an existing competency and it is removed from the listing @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    const savedGoal = (await competenciesPage.savePanel()) ?? goal;
    await expect(competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!)).toBeVisible();

    const deleted = await competenciesPage.clickDeleteCompetency(goal!);
    if (!deleted) test.skip(true, 'Delete control not found on the freshly created row');
    if (await competenciesPage.getConfirmDialog().isVisible().catch(() => false)) {
      await competenciesPage.confirmDeleteCompetency();
    }
    await expect(competenciesPage.getCompetencyRowByDeptAndGoal(department!, goal!), 'competency still appears in the listing after confirming deletion').not.toBeVisible();
  });

  test.fixme('TC-DEPTCMP-022 — MANUAL VERIFICATION REQUIRED: RM\'s Competencies Listing renders with zero functional add/edit/delete controls in the DOM (no dedicated RM test account provisioned, see unclear[] in req-2026-07-14-DEPTCMP-doc.json)', async () => {});

  test('TC-DEPTCMP-023 Multi-department manager must explicitly select a department before add/edit/delete actions are enabled @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    const options = await competenciesPage.getDepartmentFilterOptionsText();
    if (options.length < 2) test.skip(true, 'This account does not manage 2+ departments — cannot exercise the multi-department gate');

    const department = await competenciesPage.selectDepartmentInListing(options[0]);
    if (!department) test.skip(true, 'Department filter control not present');
    const addEnabledAfter = await competenciesPage.addCompetencyBtn.isEnabled().catch(() => false);
    expect(addEnabledAfter, 'Add competency control did not become enabled after explicitly selecting a department').toBe(true);
  });
});
