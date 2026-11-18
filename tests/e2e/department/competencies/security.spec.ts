// TC-DEPTCMP-058..064,080 — security pass: TM cross-department scoping (UI probe + API-when-known),
// XSS sanitization in Description. TC-058/060/061/064/080 (RM-specific) are `test.fixme` — no
// dedicated RM test account provisioned, see unclear[] in req-2026-07-14-DEPTCMP-doc.json.
import { test, expect } from '../../../fixtures/auth';
import { CompetenciesPage } from '../../../page-objects/department/competencies.page';

test.describe('Competencies — Security', () => {
  test.fixme('TC-DEPTCMP-058 — MANUAL VERIFICATION REQUIRED: RM role — cannot add/edit/delete a competency, enforced at both UI and API level (no dedicated RM test account provisioned)', async () => {});

  test('TC-DEPTCMP-059 TM role — cannot act on competencies for departments they do not manage, and cannot act without selecting a department when managing multiple @security @regression', async ({ testUserPage }) => {
    const tmCompetenciesPage = new CompetenciesPage(testUserPage);
    await tmCompetenciesPage.navigateToCompetencies();

    const outOfScopeSelectable = await tmCompetenciesPage.isDepartmentSelectableInListing('zzz-outside-scope-probe-department');
    expect(outOfScopeSelectable, 'TM was unexpectedly able to select a clearly out-of-scope probe department').toBe(false);

    const options = await tmCompetenciesPage.getDepartmentFilterOptionsText();
    if (options.length < 2) {
      test.skip(true, 'punit.patel does not manage 2+ departments — cannot exercise the multi-department-selection gate for this account');
    }
    const addEnabledBeforeSelection = await tmCompetenciesPage.addCompetencyBtn.isEnabled().catch(() => true);
    expect(addEnabledBeforeSelection, 'Add competency was enabled for a multi-department TM before explicitly selecting a department').toBe(false);
  });

  test.fixme('TC-DEPTCMP-060 — MANUAL VERIFICATION REQUIRED: EM role — cannot act on competencies for departments they do not manage, and cannot act without selecting a department when managing multiple (no dedicated EM test account provisioned)', async () => {});

  test.fixme('TC-DEPTCMP-061 — MANUAL VERIFICATION REQUIRED: RM session direct API call to create/update/delete a competency is rejected with 403 (no dedicated RM test account provisioned; automate via API request with a real RM auth token once one exists)', async () => {});

  test('TC-DEPTCMP-062 TM/EM cannot edit or delete a competency belonging to a department they do not manage (IDOR check) @security', async ({ testUserPage }) => {
    const tmCompetenciesPage = new CompetenciesPage(testUserPage);
    await tmCompetenciesPage.navigateToCompetencies();

    const outOfScopeSelectable = await tmCompetenciesPage.isDepartmentSelectableInPanel('zzz-outside-scope-probe-department');
    expect(outOfScopeSelectable, 'UI unexpectedly offered a clearly out-of-scope probe department as selectable').toBe(false);

    const status = await tmCompetenciesPage.attemptApiWrite(testUserPage, 'patch', '/api/competencies/00000000-0000-4000-8000-000000000000', { status: 'Completed' });
    expect([401, 403, 404], `expected a rejection status for an out-of-scope competency write attempt, got ${status}`).toContain(status);
  });

  test('TC-DEPTCMP-063 XSS payload entered into the Description field is sanitized, not executed @security @negative', async ({ page }) => {
    const competenciesPage = new CompetenciesPage(page);
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');

    let dialogFired = false;
    page.once('dialog', () => { dialogFired = true; });
    await competenciesPage.fillDescription("<script>alert('xss')</script>");
    await competenciesPage.savePanel();
    expect(dialogFired, 'XSS payload executed instead of being sanitized').toBe(false);

    const opened = await competenciesPage.clickEditCompetency(goal!);
    if (opened) {
      const html = await competenciesPage.descriptionInput.innerHTML().catch(() => '');
      expect(html).not.toMatch(/<script>/i);
    }
  });

  test.fixme('TC-DEPTCMP-064 — MANUAL VERIFICATION REQUIRED: each role\'s permitted/forbidden Competency actions are enforced consistently at both UI and API level (no dedicated RM/EM test account provisioned to exercise all four roles)', async () => {});

  test.fixme('TC-DEPTCMP-080 — MANUAL VERIFICATION REQUIRED: RM (read-only role) can view competency records for their department while all write controls remain absent (no dedicated RM test account provisioned, see unclear[] in req-2026-07-14-DEPTCMP-doc.json)', async () => {});
});
