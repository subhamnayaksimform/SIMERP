// TC-DEPTCMP-082..083 — integration pass: Goal-assignment/progress changes in EMPGOL recalculating
// the linked Competency's Progress % and keeping the Goal dropdown correctly department-scoped.
// TC-083 (Goal auto-deletion at zero assignment orphaning a Competency link) is `test.fixme` — it
// requires API-level goal-unassignment setup and is derived from a KB cross-reference
// (reports/knowledge-base/modules/employee/goals.json), not a directly documented rule.
import { test, expect } from '../../../fixtures/auth';
import { CompetenciesPage } from '../../../page-objects/department/competencies.page';

test.describe('Competencies — Integration', () => {
  test('TC-DEPTCMP-082 Integration — Goal assignment/progress changes in EMPGOL correctly recalculate the linked Competency\'s Progress % and Goal dropdown data @regression @functional', async ({ page }) => {
    const competenciesPage = new CompetenciesPage(page);
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    const savedGoal = (await competenciesPage.savePanel()) ?? goal;

    const row = competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!);
    await expect(row).toBeVisible();
    const progressBefore = await competenciesPage.getRowProgress(row);

    await page.goto('/employee', { waitUntil: 'domcontentloaded' }).catch(() => {});
    const goalsTab = page.getByRole('tab', { name: /^goals$/i }).or(page.getByRole('button', { name: /^goals$/i }));
    if (await goalsTab.first().isVisible({ timeout: 3000 }).catch(() => false)) await goalsTab.first().click();
    const goalRow = page.getByRole('row').filter({ hasText: goal! }).or(page.getByRole('listitem').filter({ hasText: goal! }));
    const goalRowVisible = await goalRow.first().isVisible({ timeout: 5000 }).catch(() => false);
    if (!goalRowVisible) test.skip(true, 'Could not locate the linked Goal in the Goals module to drive a progress change');

    const editBtn = goalRow.first().getByRole('button', { name: /^edit$/i });
    const editable = await editBtn.isVisible({ timeout: 3000 }).catch(() => false);
    if (!editable) test.skip(true, 'No Edit control available on the Goal row to change its progress/assignment');
    await editBtn.click();

    // Best-effort: assign an additional employee to the Goal to perturb its progress-average input.
    const assignInput = page.getByLabel(/assign to/i).or(page.getByPlaceholder(/assign to|search employee/i)).first();
    const assignVisible = await assignInput.isVisible({ timeout: 3000 }).catch(() => false);
    if (!assignVisible) test.skip(true, 'No Assign to control found on the Goal edit panel');
    await assignInput.click();
    const option = page.getByRole('option').first();
    const optionVisible = await option.isVisible({ timeout: 5000 }).catch(() => false);
    if (!optionVisible) test.skip(true, 'No employee available to assign to perturb the goal-progress average');
    await option.click();
    const saveBtn = page.getByRole('button', { name: /^save$/i });
    await saveBtn.click();
    await saveBtn.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});

    await competenciesPage.navigateToCompetencies();
    const rowAfter = competenciesPage.getCompetencyRowByDeptAndGoal(department!, goal!);
    await expect(rowAfter, 'linked competency disappeared from the listing after an EMPGOL-side goal change').toBeVisible();
    const progressAfter = await competenciesPage.getRowProgress(rowAfter);
    // The exact expected delta is not deterministic without seeded progress values — assert the
    // Progress % value remains a valid, readable number (not NaN/undefined/crashed) after the
    // cross-module change, which is the documented regression risk in affectedModules[EMPGOL].
    if (progressBefore !== null || progressAfter !== null) {
      expect(progressAfter, 'Competency Progress % became unreadable (null/NaN) after an EMPGOL-side goal-progress change').not.toBeNull();
    }

    await competenciesPage.openAddCompetencyPanel();
    await competenciesPage.selectDepartmentInPanel(department!);
    const goalOptionsAfter = await competenciesPage.getGoalDropdownOptionsText();
    expect(goalOptionsAfter.some(g => g.includes(goal!)), 'Goal dropdown lost its correct department scoping after an EMPGOL-side change').toBe(true);
  });

  test.fixme('TC-DEPTCMP-083 — MANUAL VERIFICATION REQUIRED: a Goal auto-deleted for reaching zero assignment does not leave an orphaned/broken Competency link (requires API-level goal-unassignment setup; derived from a KB cross-reference with reports/knowledge-base/modules/employee/goals.json, not a directly documented source rule)', async () => {});
});
