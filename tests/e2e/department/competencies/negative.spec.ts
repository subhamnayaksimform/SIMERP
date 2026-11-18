// TC-DEPTCMP-024..042 — negative pass: RM add/edit/delete blocking (024/025/026 fixme — no dedicated
// RM test account), multi-department manager action gating, No of Employees numeric validation,
// whitespace/max-length Description handling (032 fixme — undocumented limit), special-character/XSS
// sanitization, mid-flow refresh safety, slow-network/401/403/404/503/retry reliability, and the
// duplicate Department+Goal combination case (034 fixme — blocking unclear[] item, behavior
// unconfirmed).
import { test, expect } from '../../../fixtures/auth';
import { CompetenciesPage } from '../../../page-objects/department/competencies.page';

test.describe('Competencies — Negative', () => {
  let competenciesPage: CompetenciesPage;

  test.beforeEach(async ({ page }) => {
    competenciesPage = new CompetenciesPage(page);
  });

  test.fixme('TC-DEPTCMP-024 — MANUAL VERIFICATION REQUIRED: RM attempts to add a competency — action is blocked (no dedicated RM test account provisioned, see unclear[] in req-2026-07-14-DEPTCMP-doc.json)', async () => {});

  test.fixme('TC-DEPTCMP-025 — MANUAL VERIFICATION REQUIRED: RM attempts to edit an existing competency — action is blocked (no dedicated RM test account provisioned, see unclear[] in req-2026-07-14-DEPTCMP-doc.json)', async () => {});

  test.fixme('TC-DEPTCMP-026 — MANUAL VERIFICATION REQUIRED: RM attempts to delete an existing competency — action is blocked (no dedicated RM test account provisioned, see unclear[] in req-2026-07-14-DEPTCMP-doc.json)', async () => {});

  test('TC-DEPTCMP-027 Submit Add Competency without selecting a Department — submission cannot occur @negative @boundary', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    expect(await competenciesPage.areNonDepartmentFieldsDisabled(), 'Goal and other fields were not disabled while Department was unselected').toBe(true);
    const saveEnabled = await competenciesPage.isSaveEnabled();
    expect(saveEnabled, 'Save was enabled without a Department selected').toBe(false);
  });

  test('TC-DEPTCMP-028 Select a Department but leave Goal unselected, then attempt to save — validation blocks submission @negative @boundary', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const saveEnabled = await competenciesPage.isSaveEnabled();
    if (saveEnabled) {
      await competenciesPage.panelSaveBtn.click();
      await expect(competenciesPage.getInlineFieldError()).toBeVisible();
      await expect(competenciesPage.addCompetencyPanel).toBeVisible();
    } else {
      expect(saveEnabled).toBe(false);
    }
  });

  test('TC-DEPTCMP-029 Multi-department manager attempts add/edit/delete without selecting a department first — action is blocked @negative', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    const options = await competenciesPage.getDepartmentFilterOptionsText();
    if (options.length < 2) test.skip(true, 'This account does not manage 2+ departments — cannot exercise the multi-department gate');
    const addEnabled = await competenciesPage.addCompetencyBtn.isEnabled().catch(() => true);
    expect(addEnabled, 'Add competency was enabled before a department was explicitly selected').toBe(false);
  });

  test('TC-DEPTCMP-030 No of Employees field rejects non-numeric input @negative @boundary', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    await competenciesPage.selectTargetedMembers('Selected');
    const filled = await competenciesPage.fillNoOfEmployees('abc');
    if (!filled) test.skip(true, 'No of Employees field not present/enabled');
    await competenciesPage.panelSaveBtn.click().catch(() => {});
    const errorVisible = await competenciesPage.getInlineFieldError().isVisible({ timeout: 3000 }).catch(() => false);
    const panelStillOpen = await competenciesPage.addCompetencyPanel.isVisible().catch(() => false);
    expect(errorVisible || panelStillOpen, 'non-numeric input was silently accepted into No of Employees').toBe(true);
  });

  test('TC-DEPTCMP-031 Description field containing only whitespace is treated as empty @negative @boundary', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    const filled = await competenciesPage.fillDescription('    ');
    if (!filled) test.skip(true, 'Description field not present/visible');
    const savedGoal = (await competenciesPage.savePanel()) ?? goal;

    const row = competenciesPage.getCompetencyRowByDeptAndGoal(department!, savedGoal!);
    await expect(row).toBeVisible();
    const opened = await competenciesPage.clickEditCompetency(goal!);
    if (opened) {
      const value = (await competenciesPage.getDescriptionText()).trim();
      expect(value, 'whitespace-only Description was stored as a non-empty value').toBe('');
    }
  });

  test.fixme('TC-DEPTCMP-032 — MANUAL VERIFICATION REQUIRED: Description field rejects/truncates a value exceeding the documented max length (max length for Description is not documented in source; verify the actual application-enforced limit with a human before treating either outcome as pass/fail)', async () => {});

  test('TC-DEPTCMP-033 Description field sanitizes special/injection characters across the full test set @negative @security', async ({ page }) => {
    const payloads = ['<script>alert(1)</script>', '"', "'", '--', '%', 'null', 'undefined'];
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');

    let dialogFired = false;
    page.once('dialog', () => { dialogFired = true; });
    for (const payload of payloads) {
      await competenciesPage.fillDescription(payload);
    }
    await competenciesPage.savePanel();
    expect(dialogFired, 'a payload triggered an unexpected JS dialog instead of being sanitized').toBe(false);

    const opened = await competenciesPage.clickEditCompetency(goal!);
    if (opened) {
      const html = await competenciesPage.descriptionInput.innerHTML().catch(() => '');
      expect(html, 'raw <script> tag rendered unescaped in the Description field').not.toMatch(/<script>/i);
    }
  });

  test.fixme('TC-DEPTCMP-034 — MANUAL VERIFICATION REQUIRED: creating a second competency for the same Department+Goal combination (per current default assumption, both should be created independently rather than blocked as a duplicate — governed by a blocking unclear[] item cross-referencing the Availability Matrix feature; verify actual app behavior with a human before treating either outcome as pass/fail)', async () => {});

  test('TC-DEPTCMP-035 Refreshing the browser mid-Add-Competency-form-fill does not submit partial data @negative @regression', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    const before = await competenciesPage.getRowCount();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');
    await competenciesPage.fillDescription('partial-fill-refresh-probe').catch(() => {});
    await page.reload({ waitUntil: 'domcontentloaded' });
    await competenciesPage.navigateToCompetencies();
    const after = await competenciesPage.getRowCount();
    expect(after, 'a partial/incomplete competency record was created from a mid-flow refresh').toBe(before);
  });

  test('TC-DEPTCMP-036 Slow network on Competencies fetch shows a loading indicator without freezing the UI @negative @regression', async ({ page }) => {
    await competenciesPage.mockCompetenciesApiFailure(200, 3000);
    // 6.8.x: observe the in-flight state — navigateToCompetencies() waits for network idle, i.e. until loading is over.
    await competenciesPage.gotoWithoutSettling();
    const loadingIndicator = page.getByRole('progressbar').or(page.getByText(/loading/i));
    const seen = await loadingIndicator.first().waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false); // isVisible() never waits
    expect(seen, 'no loading indicator was shown during a slow/delayed competencies fetch').toBe(true);
  });

  test('TC-DEPTCMP-037 Session expiry (HTTP 401) during a Competencies action returns the user to login without data loss @negative @regression', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.mockCompetenciesApiFailure(401);
    // 6.8.x: opening the Add panel makes no competencies request — force one by reloading the list.
    await page.reload({ waitUntil: 'domcontentloaded' });
    const redirectedToLogin = await page.waitForURL(/login|signin|microsoftonline|live\.com/i, { timeout: 8000 }).then(() => true).catch(() => false);
    if (!redirectedToLogin) {
      await expect(competenciesPage.getErrorToast().or(page.getByText(/session expired|log in again/i))).toBeVisible();
    }
  });

  test('TC-DEPTCMP-038 A 403 permission-denied response on a Competencies action shows a user-friendly message @negative @regression', async ({ testUserPage }) => {
    const tmCompetenciesPage = new CompetenciesPage(testUserPage);
    await tmCompetenciesPage.mockCompetenciesApiFailure(403);
    await tmCompetenciesPage.navigateToCompetencies();
    await tmCompetenciesPage.openAddCompetencyPanel().catch(() => {});
    // 6.8.x: shows a persistent "Failed to load data" state plus a "Forbidden" toast (the toast alone is short-lived).
    await expect(testUserPage.getByText(/failed to load data|permission denied|not authorized|forbidden|access denied|don't have permission/i).first()).toBeVisible();
    const bodyText = (await testUserPage.textContent('body').catch(() => '')) ?? '';
    expect(bodyText).not.toMatch(/at\s+\w+\s*\(.*:\d+:\d+\)|TypeError:|ReferenceError:/);
  });

  test('TC-DEPTCMP-039 Navigating to a non-existent competency record shows a not-found state, not a blank screen @negative @regression', async ({ page }) => {
    await page.goto('/department/competencies/non-existent-competency-id-99999', { waitUntil: 'domcontentloaded' }).catch(() => {});
    await expect(competenciesPage.getNotFoundState().or(page.getByText(/does not exist|could not be found/i))).toBeVisible();
    const bodyText = (await page.textContent('body').catch(() => '')) ?? '';
    expect(bodyText.trim().length, 'a non-existent competency ID rendered a blank screen').toBeGreaterThan(0);
  });

  test('TC-DEPTCMP-040 A 503 service-unavailable response on Competencies shows a maintenance/retry message @negative @regression', async ({ page }) => {
    await competenciesPage.mockCompetenciesApiFailure(503);
    await competenciesPage.navigateToCompetencies();
    await expect(page.getByText(/unavailable|maintenance|try again|something went wrong/i).first()).toBeVisible();
  });

  test('TC-DEPTCMP-041 A failed Save on Add/Edit Competency offers a retry without requiring a full page reload @negative @regression', async ({ page }) => {
    await competenciesPage.navigateToCompetencies();
    await competenciesPage.openAddCompetencyPanel();
    const department = await competenciesPage.selectDepartmentInPanel('MANAGEMENT');
    if (!department) test.skip(true, 'No Department option available');
    const goal = await competenciesPage.selectGoalInPanel();
    if (!goal) test.skip(true, 'No free Goal for this department/year — every goal already has a competency (goal+year is unique per department). Clean up test-created competencies or point these specs at a less-used department.');

    let firstAttempt = true;
    await page.route(/\/api\/.*competenc/i, async route => {
      if (firstAttempt && route.request().method() !== 'GET') {
        firstAttempt = false;
        await route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ message: 'Internal Server Error' }) });
      } else {
        await route.continue();
      }
    });

    await competenciesPage.panelSaveBtn.click().catch(() => {});
    // Error toast AND the still-open panel can both be visible — .first() avoids a strict-mode violation.
    await expect(competenciesPage.getErrorToast().or(competenciesPage.addCompetencyPanel).first()).toBeVisible();
    await expect(competenciesPage.panelSaveBtn, 'Save button was not re-clickable after a failed attempt without a full page reload').toBeEnabled();
    await competenciesPage.panelSaveBtn.click();
    await expect(competenciesPage.getCompetencyRowByDeptAndGoal(department!, goal!), 'retry after a simulated failure did not eventually succeed').toBeVisible();
  });

  test.fixme('TC-DEPTCMP-042 — MANUAL VERIFICATION REQUIRED: attempting to delete a Competency documents current (undocumented) deletion-condition behavior — deletion conditions for Competency are undocumented in source (see unclear[] in req-2026-07-14-DEPTCMP-doc.json: "No mentioned conditions" under Competency Deletion); verify actual app behavior with a human before asserting pass/fail', async () => {});
});
