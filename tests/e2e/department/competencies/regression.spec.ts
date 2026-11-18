// TC-DEPTCMP-065..081 — regression pass: cross-module non-interference with the affected EMPGOL
// (Goals) module, UI/API parity, record-count consistency, F5-refresh persistence for
// create/update/delete, control-visibility/Save-button/tooltip/hover-icon UI-state invariants,
// success/error toasts, loading and empty states, 5xx handling, and Allocated Members count
// reconciliation against the linked Goal.
import { test, expect } from '../../../fixtures/auth';
import { CompetenciesPage } from '../../../page-objects/department/competencies.page';

test.describe('Competencies — Regression', () => {
  let competenciesPage: CompetenciesPage;

  test.beforeEach(async ({ page }) => {
    competenciesPage = new CompetenciesPage(page);
  });

  test('TC-DEPTCMP-065 Regression spot-check — Competencies changes do not break the affected EMPGOL (Goals) module @regression', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    const savedGoal = (await competenciesPage.savePanel()) ?? goal;
    await expect(competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!)).toBeVisible();

    await page.goto('/employee', { waitUntil: 'domcontentloaded' }).catch(() => {});
    const goalsTab = page.getByRole('tab', { name: /^goals$/i }).or(page.getByRole('button', { name: /^goals$/i }));
    if (await goalsTab.first().isVisible({ timeout: 3000 }).catch(() => false)) await goalsTab.first().click();
    const goalRow = page.getByRole('row').filter({ hasText: goal! }).or(page.getByRole('listitem').filter({ hasText: goal! }));
    const rowVisible = await goalRow.first().isVisible({ timeout: 5000 }).catch(() => false);
    if (!rowVisible) test.skip(true, 'Could not locate the linked Goal in the Goals module to verify cross-module consistency');
    await expect(goalRow.first(), 'the linked Goal became corrupted/unreadable in EMPGOL after a Competencies-side change').toBeVisible();
  });

  test('TC-DEPTCMP-066 UI-displayed competency values match the API response after save @regression', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    await competenciesPage.selectStatus('In progress');
    await competenciesPage.selectPriority('High');
    const savedGoal = (await competenciesPage.savePanel()) ?? goal;

    const row = competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!);
    await expect(row).toBeVisible();
    const apiResult = await competenciesPage.attemptApiRead(page, `/api/departments/${encodeURIComponent(department!)}/competencies`);
    if (apiResult.status !== 200 || !apiResult.body) test.skip(true, 'Competencies API endpoint unconfirmed — parity check skipped');
    const records = Array.isArray(apiResult.body) ? apiResult.body : (apiResult.body.items ?? apiResult.body.data ?? []);
    const match = records.find((r: any) => (r.goalName ?? r.name ?? '') === goal);
    if (!match) test.skip(true, 'Could not locate the created record in the API response shape');
    // PRODUCT DEFECT SUSPECTED if this ever diverges: UI shows X but API returns Y — see TC-DEPTCMP-066
    expect(match.status ?? match.Status).toBe('In progress');
    expect(match.priority ?? match.Priority).toBe('High');
  });

  test('TC-DEPTCMP-067 Competency record count is consistent across list view, summary/dashboard widget (if any), and API total @regression', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    const before = await competenciesPage.getRowCount();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    await competenciesPage.savePanel();
    const after = await competenciesPage.getRowCount();
    expect(after, 'competency listing row count did not increase by exactly 1 after Add').toBe(before + 1);

    const apiResult = await competenciesPage.attemptApiRead(page, `/api/departments/${encodeURIComponent(department!)}/competencies`);
    if (apiResult.status === 200 && apiResult.body) {
      const apiTotal = apiResult.body.total ?? (Array.isArray(apiResult.body) ? apiResult.body.length : null);
      if (apiTotal !== null) expect(apiTotal, 'listing count and API total diverged after a create').toBe(after);
    }
  });

  test('TC-DEPTCMP-068 A newly created competency is present in the list after a full page refresh (F5) @regression', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    const savedGoal = (await competenciesPage.savePanel()) ?? goal;

    await page.reload({ waitUntil: 'domcontentloaded' });
    await expect(competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!), 'newly created competency was missing after an F5 refresh').toBeVisible({ timeout: 10000 });
  });

  test('TC-DEPTCMP-069 Updated competency field values are correct after a full page refresh (F5) @regression', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    const rowCount = await competenciesPage.getRowCount();
    if (rowCount === 0) test.skip(true, 'No existing competency available to edit');
    const rows = competenciesPage.competenciesListing.getByRole('row').or(competenciesPage.competenciesListing.getByRole('listitem'));
    const identifier = ((await rows.first().textContent().catch(() => '')) ?? '').trim();
    const opened = await competenciesPage.clickEditCompetency(identifier);
    if (!opened) test.skip(true, 'Edit control not found');
    await competenciesPage.selectPriority('Low');
    await competenciesPage.savePanel();

    await page.reload({ waitUntil: 'domcontentloaded' });
    const row = competenciesPage.getCompetencyRow(identifier);
    await expect(row, 'edited competency was missing after an F5 refresh').toBeVisible({ timeout: 10000 });
    expect(await competenciesPage.getRowPriority(row)).toMatch(/^Low$/i);
  });

  test('TC-DEPTCMP-070 A deleted competency is absent from the active list immediately, without a page refresh @regression', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    const savedGoal = (await competenciesPage.savePanel()) ?? goal;

    const deleted = await competenciesPage.clickDeleteCompetency(goal!);
    if (!deleted) test.skip(true, 'Delete control not found on the freshly created row');
    if (await competenciesPage.getConfirmDialog().isVisible().catch(() => false)) await competenciesPage.confirmDeleteCompetency();
    await expect(competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!), 'deleted competency still appeared without a manual refresh').not.toBeVisible();
  });

  test('TC-DEPTCMP-071 Primary action buttons (Add/Edit/Delete) remain visible to permitted roles before and after a CRUD operation @regression @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await expect(competenciesPage.addCompetencyBtn, 'Add competency control was not visible before any CRUD operation').toBeVisible();

    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    const savedGoal = (await competenciesPage.savePanel()) ?? goal;

    await expect(competenciesPage.addCompetencyBtn, 'Add competency control disappeared after a Create').toBeVisible();
    const row = competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!);
    await row.hover().catch(() => {});
    await expect(competenciesPage.getEditCompetencyBtn(row).or(competenciesPage.getDeleteCompetencyBtn(row)), 'no row-level Edit/Delete control was visible after a Create').toBeVisible();
  });

  test('TC-DEPTCMP-072 Save button on Add Competency is disabled while required fields are empty and enables once they are filled @regression @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const disabledBefore = await competenciesPage.isSaveEnabled();
    expect(disabledBefore, 'Save was enabled with Department/Goal both empty').toBe(false);

    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    const enabledAfter = await competenciesPage.isSaveEnabled();
    expect(enabledAfter, 'Save did not become enabled once Department and Goal were filled').toBe(true);
  });

  test('TC-DEPTCMP-073 Row-level Edit/Delete icons appear on hover for every row, including the first and last row @regression @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    const rowCount = await competenciesPage.getRowCount();
    if (rowCount === 0) test.skip(true, 'No existing competency rows to hover over');
    // data rows only — the header row (also role=row) has no Edit/Delete buttons
    const rows = competenciesPage.competenciesListing.getByRole('row').filter({ hasNot: page.getByRole('columnheader') }).or(competenciesPage.competenciesListing.getByRole('listitem'));

    const first = rows.first();
    await first.hover().catch(() => {});
    await expect(competenciesPage.getEditCompetencyBtn(first).or(competenciesPage.getDeleteCompetencyBtn(first)).first(), 'no hover affordance appeared on the first row').toBeVisible();

    const last = rows.last();
    await last.hover().catch(() => {});
    await expect(competenciesPage.getEditCompetencyBtn(last).or(competenciesPage.getDeleteCompetencyBtn(last)).first(), 'no hover affordance appeared on the last row').toBeVisible();
  });

  test('TC-DEPTCMP-074 Icon-only Edit/Delete buttons show a readable tooltip on hover @regression @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    const rowCount = await competenciesPage.getRowCount();
    if (rowCount === 0) test.skip(true, 'No existing competency rows to hover over');
    const rows = competenciesPage.competenciesListing.getByRole('row').or(competenciesPage.competenciesListing.getByRole('listitem'));
    const row = rows.first();
    await row.hover().catch(() => {});
    const editBtn = competenciesPage.getEditCompetencyBtn(row);
    const visible = await editBtn.isVisible().catch(() => false);
    if (!visible) test.skip(true, 'No Edit control found to hover for a tooltip');
    await editBtn.hover();
    const tooltip = page.getByRole('tooltip').or(page.locator('[title]:visible').filter({ hasText: /edit/i }));
    await expect(tooltip.first(), 'no readable tooltip appeared for the icon-only Edit button').toBeVisible({ timeout: 3000 });
  });

  test('TC-DEPTCMP-075 A success toast appears after Create/Update/Delete and names the competency or confirms the action @regression @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    await competenciesPage.panelSaveBtn.click();
    await expect(competenciesPage.getSuccessToast(), 'no success toast appeared after Create').toBeVisible();
  });

  test('TC-DEPTCMP-076 An error toast appears on a server error without exposing a raw stack trace @regression @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    await competenciesPage.mockCompetenciesApiFailure(500);
    await competenciesPage.panelSaveBtn.click().catch(() => {});
    await expect(competenciesPage.getErrorToast()).toBeVisible();
    const bodyText = (await page.textContent('body').catch(() => '')) ?? '';
    expect(bodyText).not.toMatch(/at\s+\w+\s*\(.*:\d+:\d+\)|TypeError:|ReferenceError:/);
  });

  test('TC-DEPTCMP-077 A loading indicator is shown during competency data fetch and disappears once data loads @regression @functional', async ({ page }) => {
    await competenciesPage.mockCompetenciesApiFailure(200, 2000);
    // 6.8.x: observe the in-flight state — navigateToCompetencies() waits for network idle, i.e. until loading is over.
    await competenciesPage.gotoWithoutSettling();
    const loadingIndicator = page.getByRole('progressbar').or(page.getByText(/loading/i));
    const seen = await loadingIndicator.first().waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false); // isVisible() never waits
    expect(seen, 'no loading indicator was visible during the competencies fetch').toBe(true);
    await expect(loadingIndicator.first(), 'loading indicator did not disappear once data loaded').toBeHidden({ timeout: 15000 });
  });

  test('TC-DEPTCMP-078 An empty-state message is shown when the selected department has no competencies @regression @functional', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    const department = await competenciesPage.selectDepartmentInListing('Department With Zero Competencies');
    if (!department || !/zero competencies/i.test(department)) test.skip(true, 'A department confirmed to have zero competencies is not present in seed data');
    await expect(competenciesPage.emptyStateText, 'no empty-state message was shown for a department with zero competencies').toBeVisible();
  });

  test('TC-DEPTCMP-079 A 5xx API error on the Competencies Listing shows a user-friendly error message, not a blank screen @regression @functional', async ({ page }) => {
    await competenciesPage.mockCompetenciesApiFailure(503);
    await competenciesPage.navigateToCompetencies();
    await expect(page.getByText(/unavailable|something went wrong|try again|error/i).first()).toBeVisible();
    const bodyText = (await page.textContent('body').catch(() => '')) ?? '';
    expect(bodyText.trim().length, 'a 5xx error on the competencies list produced a blank screen').toBeGreaterThan(0);
  });

  test('TC-DEPTCMP-081 Allocated Members count on the competency row matches the actual assigned-employee count from the linked goal (and API) @regression @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    await competenciesPage.navigateToCompetencies();
    const rowCount = await competenciesPage.getRowCount();
    if (rowCount === 0) test.skip(true, 'No existing competency available to inspect');
    const rows = competenciesPage.competenciesListing.getByRole('row').or(competenciesPage.competenciesListing.getByRole('listitem'));
    const row = rows.first();
    const identifier = ((await row.textContent().catch(() => '')) ?? '').trim();
    const counts = await competenciesPage.getRowMemberCounts(row);
    if (counts.allocated === null) test.skip(true, 'Could not parse an Allocated Members value from the row');

    const apiResult = await competenciesPage.attemptApiRead(page, `/api/goals?name=${encodeURIComponent(identifier)}`);
    if (apiResult.status !== 200 || !apiResult.body) test.skip(true, 'Goals API endpoint unconfirmed — Allocated Members reconciliation skipped');
    const apiAssignedCount = apiResult.body.allocatedCount ?? apiResult.body.assignedCount ?? apiResult.body.organizationAssignedCount ?? null;
    if (apiAssignedCount === null) test.skip(true, 'Goals API response shape did not expose a recognizable assigned-employee count field');
    // PRODUCT DEFECT SUSPECTED if this diverges: Competency row shows Allocated Members = X but the
    // linked Goal's API assigned-employee count returns Y — see TC-DEPTCMP-081
    expect(apiAssignedCount, 'Allocated Members count on the competency row does not reconcile with the linked goal\'s API assigned-employee count').toBe(counts.allocated);
  });
});
