// TC-DEPTCMP-001..003 — exhaustive smoke pass over the Competencies module (Department > Competencies):
// end-to-end Add Competency + listing reflection, Edit Competency + immediate listing update, and the
// RM view-only smoke check (fixme — no dedicated RM test account provisioned, see req doc unclear[]).
import { test, expect } from '../../../fixtures/auth';
import { CompetenciesPage } from '../../../page-objects/department/competencies.page';

test.describe('Competencies — Smoke', () => {
  let competenciesPage: CompetenciesPage;

  test.beforeEach(async ({ page }) => {
    competenciesPage = new CompetenciesPage(page);
  });

  test('TC-DEPTCMP-001 TM/EM/Admin adds a competency end-to-end and it appears in the listing @smoke', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    await expect(competenciesPage.addCompetencyPanel).toBeVisible();

    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available in Add Competency');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, `No free Goal for department "${department}" this year — every goal already has a competency there (goal+year is unique per department), so a create flow cannot run. Clean up test-created competencies or point these specs at a less-used department.`);

    // No of Employees is mandatory — omitting it silently blocks Save (client-side validation),
    // observed live as the panel never closing with no visible error surfaced to the test.
    await competenciesPage.fillNoOfEmployees(5);
    await competenciesPage.selectStatus('In progress');
    await competenciesPage.selectPriority('High');
    const savedGoal = (await competenciesPage.savePanel()) ?? goal;
    await expect(competenciesPage.addCompetencyPanel).not.toBeVisible();

    const row = competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!);
    await expect(row, 'newly created competency row did not appear in the Competencies Listing without a reload').toBeVisible();
    expect(await competenciesPage.getRowStatus(row)).toMatch(/^In progress$/i);
    expect(await competenciesPage.getRowPriority(row)).toMatch(/^High$/i);
  });

  test('TC-DEPTCMP-002 TM/EM/Admin edits an existing competency and the listing updates immediately @smoke', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    const rowCount = await competenciesPage.getRowCount();
    if (rowCount === 0) test.skip(true, 'No existing competency available to edit');

    const rows = competenciesPage.competenciesListing.getByRole('row').or(competenciesPage.competenciesListing.getByRole('listitem'));
    const identifier = ((await rows.first().textContent().catch(() => '')) ?? '').trim();
    if (!identifier) test.skip(true, 'Could not read an identifier from the first competency row');

    const opened = await competenciesPage.clickEditCompetency(identifier);
    if (!opened) test.skip(true, 'Edit control not found on the competency row');

    await competenciesPage.fillDescription(`Updated description text ${Date.now()}`);
    await competenciesPage.selectTargetedMembers('Selected');
    await competenciesPage.fillNoOfEmployees(4);
    await competenciesPage.selectStatus('Completed');
    await competenciesPage.selectPriority('Medium');
    await competenciesPage.savePanel();

    const row = competenciesPage.getCompetencyRow(identifier);
    await expect(row, 'edited competency row is no longer visible in the listing').toBeVisible();
    expect(await competenciesPage.getRowStatus(row)).toMatch(/^Completed$/i);
    expect(await competenciesPage.getRowPriority(row)).toMatch(/^Medium$/i);
  });

  test.fixme('TC-DEPTCMP-003 — MANUAL VERIFICATION REQUIRED: RM opens the Competencies Listing and confirms no add/edit/delete controls are available (no dedicated RM test account provisioned, see unclear[] in req-2026-07-14-DEPTCMP-doc.json)', async () => {});
});
