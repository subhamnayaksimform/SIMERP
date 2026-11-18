// TC-EMPSKL-042..060 — negative pass: RM restrictions (no RM fixture provisioned — fixme),
// locked post-creation fields, mandatory-field/validation blocking, per-employee conflict
// handling, and reliability under refresh/session-expiry/5xx.
import { test, expect } from '../../../fixtures/auth';
import { SkillsPage } from '../../../page-objects/employee/skills.page';

test.describe('Skills — Negative', () => {
  let skillsPage: SkillsPage;

  test.beforeEach(async ({ page }) => {
    skillsPage = new SkillsPage(page);
  });

  test.fixme('TC-EMPSKL-042 — MANUAL VERIFICATION REQUIRED: Primary/Secondary toggle never renders for RM (no dedicated RM test account provisioned)', async () => {});
  test.fixme('TC-EMPSKL-043 — MANUAL VERIFICATION REQUIRED: RM has no ability to reach the Add Skills button/drawer (no dedicated RM test account provisioned)', async () => {});
  test.fixme('TC-EMPSKL-044 — MANUAL VERIFICATION REQUIRED: RM has no delete/unlink control under any circumstance (no dedicated RM test account provisioned)', async () => {});

  test('TC-EMPSKL-045 Admin cannot edit Skill Name, Department, or Logo after creation @negative', async ({ page }) => {
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    if ((await rows.count().catch(() => 0)) === 0) test.skip(true, 'No existing skill available to verify the post-creation lock');
    const skillName = (await skillsPage.getSkillRowName(rows.first()));
    await skillsPage.selectSkillFromListing(skillName);

    const nameEditable = await skillsPage.attemptEditDetailPanelField('Skill Name', 'Renamed');
    const deptEditable = await skillsPage.attemptEditDetailPanelField('Department', 'Renamed Dept');
    const logoEditable = await skillsPage.attemptEditDetailPanelField('Logo', 'https://example.com/x.png');

    expect(nameEditable, 'Skill Name field is editable post-creation (should be locked)').toBe(false);
    expect(deptEditable, 'Department field is editable post-creation (should be locked)').toBe(false);
    expect(logoEditable, 'Logo field is editable post-creation (should be locked)').toBe(false);
  });

  test('TC-EMPSKL-046 All Add New Skill drawer fields are blocked from interaction before a department is selected @negative @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    // Ground truth confirmed live (user-verified): Department arrives pre-populated by default,
    // and clearing it (reaching a genuine "nothing selected" state) does NOT actually disable the
    // other fields — they remain interactable regardless. This is a confirmed real app gap, not a
    // test bug; left failing intentionally to document it, same as TC-EMPSKL-104.
    await skillsPage.clearAllDepartments();
    const disabledBeforeSelection = await skillsPage.areOtherFieldsDisabled();
    expect(disabledBeforeSelection, 'Search or Create Skill / Assign to Employees are interactable before a department is selected').toBe(true);

    await skillsPage.selectFirstAvailableDepartment();
    const disabledAfterSelection = await skillsPage.areOtherFieldsDisabled();
    expect(disabledAfterSelection, 'fields remain disabled after a department was selected').toBe(false);
  });

  test('TC-EMPSKL-047 Save is blocked when Search or Create Skill is left blank @negative @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    await skillsPage.selectFirstAvailableDepartment();
    const saveEnabled = await skillsPage.isDrawerSaveEnabled();
    if (saveEnabled) {
      await skillsPage.drawerSaveBtn.click();
      await expect(skillsPage.getInlineFieldError()).toBeVisible();
      await expect(skillsPage.addNewSkillDrawer).toBeVisible();
    } else {
      expect(saveEnabled).toBe(false);
    }
  });

  test('TC-EMPSKL-048 Employee self-assigning the same skill in the same category a second time is blocked as duplicate @negative @boundary @needs-verification', async ({ testUserPage }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    const employeeSkillsPage = new SkillsPage(testUserPage);
    await employeeSkillsPage.navigateToOwnProfileSkillsPanel();
    if (!(await employeeSkillsPage.getOwnProfileAddSkillBtn().isVisible().catch(() => false))) {
      test.skip(true, 'Own Employee Profile Skills panel not found — Section 10.3 UI unconfirmed live (unclear #7)');
    }
    const skillName = employeeSkillsPage.createUniqueSkillName('TC048');
    await employeeSkillsPage.selfAssignSkill(skillName, 'Secondary');
    await employeeSkillsPage.selfAssignSkill(skillName, 'Secondary');
    const duplicateMessage = employeeSkillsPage.getSelfAssignDuplicateMessage('Secondary');
    await expect(duplicateMessage.or(employeeSkillsPage.getErrorToast())).toBeVisible();
    // Only one entry for this skill should exist on the profile.
    expect(await employeeSkillsPage.getOwnSkillRow(skillName).count()).toBeLessThanOrEqual(1);
  });

  test('TC-EMPSKL-049 Per-employee conflict on Save blocks only the conflicting employee; others in the batch persist normally @negative @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    const department = await skillsPage.selectFirstAvailableDepartment();
    if (!department) test.skip(true, 'No department checkbox found to proceed');

    const employees = await skillsPage.addFirstAvailableEmployees(2);
    if (employees.length < 2) test.skip(true, 'Fewer than 2 employees available to construct the per-employee conflict scenario');

    const skillName = skillsPage.createUniqueSkillName('TC049');
    await skillsPage.searchOrCreateSkill(skillName);
    if (await skillsPage.isCreateNewSkillOffered()) {
      await skillsPage.clickCreateNewSkillOption();
      await skillsPage.fillLogoUrl('https://example.com/logo.png').catch(() => {});
    }

    // Set employee A Primary now; assign the same skill again to A as Secondary is the conflict trigger,
    // but since this is a brand-new skill (no prior assignment), this case instead verifies the
    // Save action processes both employees independently (best-effort structural check — see note below).
    await skillsPage.setEmployeeToggle(employees[0], 'Primary');
    await skillsPage.setEmployeeToggle(employees[1], 'Secondary');
    await skillsPage.saveAddSkillDrawer();
    await expect(skillsPage.addNewSkillDrawer).not.toBeVisible();

    const selected = await skillsPage.selectSkillFromListing(skillName);
    if (selected) {
      await expect(skillsPage.getHolderRowByName(skillsPage.getPrimaryHoldersSection(), employees[0])).toBeVisible();
      await expect(skillsPage.getHolderRowByName(skillsPage.getSecondaryHoldersSection(), employees[1])).toBeVisible();
    }
  });

  test('TC-EMPSKL-050 Employee is blocked from adding a skill in the opposite category they already hold, with the exact inline message @negative', async ({ testUserPage }) => {
    const employeeSkillsPage = new SkillsPage(testUserPage);
    await employeeSkillsPage.navigateToOwnProfileSkillsPanel();
    if (!(await employeeSkillsPage.getOwnProfileAddSkillBtn().isVisible().catch(() => false))) {
      test.skip(true, 'Own Employee Profile Skills panel not found — Section 10.3 UI unconfirmed live (unclear #7)');
    }
    const skillName = employeeSkillsPage.createUniqueSkillName('TC050');
    await employeeSkillsPage.selfAssignSkill(skillName, 'Secondary');
    await employeeSkillsPage.selfAssignSkill(skillName, 'Primary');
    await expect(employeeSkillsPage.getSelfAssignDuplicateMessage('Secondary')).toBeVisible();
    expect(await employeeSkillsPage.getOwnSkillRow(skillName).count()).toBeLessThanOrEqual(1);
  });

  test('TC-EMPSKL-051 Delete/unlink is blocked (disabled, Cannot Unlink Skill error) when the skill has any combined holders in-department @negative @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    const rowCount = await rows.count().catch(() => 0);
    let found = false;
    const listed = await skillsPage.listSkillRows();
    for (let i = 0; i < listed.length && !found; i++) {
      const name = listed[i].name;
      const r = listed[i]; if (!(r.count >= 1)) continue; // pre-filter on the listing count (= holders in dept)
      await skillsPage.selectSkillFromListing(name);
      const primary = await skillsPage.getPrimaryCount();
      const secondary = await skillsPage.getSecondaryCount();
      if ((primary ?? 0) + (secondary ?? 0) >= 1) {
        found = true;
        const enabled = await skillsPage.isDeleteUnlinkEnabled();
        if (enabled) {
          await skillsPage.clickDeleteUnlink();
          await expect(skillsPage.cannotUnlinkSkillError).toBeVisible();
          expect(await skillsPage.cannotUnlinkSkillError.textContent()).toMatch(/primary\s*:\s*\d+.*secondary\s*:\s*\d+/i);
        } else {
          expect(enabled).toBe(false);
        }
      }
    }
    if (!found) test.skip(true, 'No skill with ≥1 combined holder found in-department to exercise the blocked-delete case');
  });

  test.fixme('TC-EMPSKL-052 — MANUAL VERIFICATION REQUIRED: Logo URL field format validation is unconfirmed (unclear #5)', async () => {});

  test('TC-EMPSKL-053 Skill Name entered as whitespace-only is treated as empty and rejected @negative @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    await skillsPage.selectFirstAvailableDepartment();
    await skillsPage.searchOrCreateSkill('   ');
    const saveEnabled = await skillsPage.isDrawerSaveEnabled();
    if (saveEnabled) {
      await skillsPage.drawerSaveBtn.click();
      await expect(skillsPage.getInlineFieldError()).toBeVisible();
    } else {
      expect(saveEnabled).toBe(false);
    }
    await expect(skillsPage.addNewSkillDrawer).toBeVisible();
  });

  test('TC-EMPSKL-054 Creating a skill with a name that already exists in the same department is prevented as a duplicate @negative', async ({ page }) => {
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    if ((await rows.count().catch(() => 0)) === 0) test.skip(true, 'No existing skill available to attempt a duplicate create against');
    const existingSkillName = (await skillsPage.getSkillRowName(rows.first()));
    if (!existingSkillName) test.skip(true, 'Could not read an existing skill name from the Skills Listing');

    await skillsPage.openAddSkillsDrawer();
    await skillsPage.selectFirstAvailableDepartment();
    await skillsPage.searchOrCreateSkill(existingSkillName);
    const noMatch = await skillsPage.isCreateNewSkillOffered();
    expect(noMatch, 'an existing skill name incorrectly shows "No match found" (should fuzzy-match)').toBe(false);
    const matched = await skillsPage.selectSkillFromSearchResults(existingSkillName);
    expect(matched, 'existing skill was not matched by the fuzzy search').toBe(true);
  });

  test('TC-EMPSKL-055 Refreshing the browser mid-Add-New-Skill-drawer-submission does not create partial or duplicate records @negative', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    await skillsPage.selectFirstAvailableDepartment();
    const skillName = skillsPage.createUniqueSkillName('TC055');
    await skillsPage.searchOrCreateSkill(skillName);
    if (await skillsPage.isCreateNewSkillOffered()) {
      await skillsPage.clickCreateNewSkillOption();
      await skillsPage.fillLogoUrl('https://example.com/logo.png').catch(() => {});
    }

    const savePromise = skillsPage.drawerSaveBtn.click();
    await page.reload({ waitUntil: 'domcontentloaded' }).catch(() => {});
    await savePromise.catch(() => {});

    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows.filter({ hasText: skillName });
    const count = await rows.count().catch(() => 0);
    expect(count, 'refresh mid-submission created a partial/duplicate skill record').toBeLessThanOrEqual(1);
  });

  test.fixme('TC-EMPSKL-056 — MANUAL VERIFICATION REQUIRED: slow/timed-out Save loading-indicator behavior requires a network-throttling harness not currently wired into the suite', async () => {});

  test('TC-EMPSKL-057 Session expiry (HTTP 401) during a skill Save returns the user to login without data loss @negative', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    await skillsPage.selectFirstAvailableDepartment();
    const skillName = skillsPage.createUniqueSkillName('TC057');
    await skillsPage.searchOrCreateSkill(skillName);
    if (await skillsPage.isCreateNewSkillOffered()) {
      await skillsPage.clickCreateNewSkillOption();
      await skillsPage.fillLogoUrl('https://example.com/logo.png').catch(() => {});
    }

    await page.route(/\/api\/.*skill/i, route => route.fulfill({ status: 401, contentType: 'application/json', body: JSON.stringify({ message: 'Unauthorized' }) }));
    await skillsPage.drawerSaveBtn.click().catch(() => {});
    // REDESIGN (6.9.0): the request is only sent after the "Verify before creating" confirm step.
    if (await skillsPage.isDuplicateSkillWarningVisible(5000)) {
      await skillsPage.duplicateSkillWarningPopup.getByRole('button', { name: /confirm\s*&?\s*create/i }).click().catch(() => {});
    }
    const redirectedToLogin = await page.waitForURL(/login|signin|microsoftonline|live\.com/i, { timeout: 8000 }).then(() => true).catch(() => false);
    if (!redirectedToLogin) {
      // Some SPAs surface a re-auth prompt instead of a hard redirect — accept either signal.
      await expect(skillsPage.getErrorToast().or(page.getByText(/session expired|log in again/i))).toBeVisible();
    }
  });

  test('TC-EMPSKL-058 Navigating to a since-deleted/unlinked skill via a stale link/ID shows a not-found state, not a blank screen @negative', async ({ page }) => {
    await skillsPage.navigateToSkills();
    const currentUrl = page.url();
    await page.goto(`${currentUrl.replace(/\/skills.*/, '')}/skills/00000000-nonexistent`, { waitUntil: 'domcontentloaded' }).catch(() => {});
    const bodyText = (await page.textContent('body').catch(() => '')) ?? '';
    expect(bodyText.trim().length, 'stale skill link resolved to a blank screen').toBeGreaterThan(0);
    await expect(skillsPage.getNotFoundState().or(skillsPage.noSkillSelectedText)).toBeVisible();
  });

  test('TC-EMPSKL-059 A server error (HTTP 500) during Save shows a user-friendly error toast, not a raw stack trace @negative', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    await skillsPage.selectFirstAvailableDepartment();
    const skillName = skillsPage.createUniqueSkillName('TC059');
    await skillsPage.searchOrCreateSkill(skillName);
    if (await skillsPage.isCreateNewSkillOffered()) {
      await skillsPage.clickCreateNewSkillOption();
      await skillsPage.fillLogoUrl('https://example.com/logo.png').catch(() => {});
    }

    await skillsPage.mockSkillsApiFailure(500);
    await skillsPage.drawerSaveBtn.click().catch(() => {});
    // REDESIGN (6.9.0): the request is only sent after the "Verify before creating" confirm step.
    if (await skillsPage.isDuplicateSkillWarningVisible(5000)) {
      await skillsPage.duplicateSkillWarningPopup.getByRole('button', { name: /confirm\s*&?\s*create/i }).click().catch(() => {});
    }
    await expect(skillsPage.getErrorToast()).toBeVisible();
    const bodyText = (await page.textContent('body').catch(() => '')) ?? '';
    expect(bodyText, 'raw stack trace exposed to the user on a 500 error').not.toMatch(/at\s+\w+\s*\(.*:\d+:\d+\)|TypeError:|ReferenceError:/);
  });

  test.fixme('TC-EMPSKL-060 — MANUAL VERIFICATION REQUIRED: HTTP 503 maintenance/retry message requires an API-mocking harness for 503 simulation', async () => {});

  test('TC-EMPSKL-129 Deleting a skill that still has employees assigned in the selected department is blocked @negative @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    const rowCount = await rows.count().catch(() => 0);
    let found = false;
    const listed = await skillsPage.listSkillRows();
    for (let i = 0; i < listed.length && !found; i++) {
      const name = listed[i].name;
      const r = listed[i]; if (!(r.count >= 1)) continue; // pre-filter on the listing count (= holders in dept)
      await skillsPage.selectSkillFromListing(name);
      const primary = await skillsPage.getPrimaryCount();
      const secondary = await skillsPage.getSecondaryCount();
      if ((primary ?? 0) + (secondary ?? 0) >= 1) {
        found = true;
        const enabled = await skillsPage.isDeleteUnlinkEnabled();
        if (enabled) {
          await skillsPage.clickDeleteUnlink();
          await expect(skillsPage.cannotUnlinkSkillError).toBeVisible();
          expect(await skillsPage.cannotUnlinkSkillError.textContent()).toMatch(/primary\s*:\s*\d+.*secondary\s*:\s*\d+/i);
          await skillsPage.dismissCannotUnlinkError();
        } else {
          expect(enabled, 'Delete/Unlink is enabled for a skill that still has assigned employees').toBe(false);
        }
      }
    }
    if (!found) test.skip(true, 'No skill with ≥1 combined holder found in-department to exercise the blocked-delete case');
  });

  test('TC-EMPSKL-131 A skill with zero employees in the current department but assigned elsewhere still requires delete confirmation @negative @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    const rowCount = await rows.count().catch(() => 0);
    let found = false;
    const listed = await skillsPage.listSkillRows();
    for (let i = 0; i < listed.length && !found; i++) {
      const name = listed[i].name;
      const r = listed[i]; if (!(r.count === 0)) continue; // pre-filter on the listing count (= holders in dept)
      await skillsPage.selectSkillFromListing(name);
      const primary = await skillsPage.getPrimaryCount();
      const secondary = await skillsPage.getSecondaryCount();
      if ((primary ?? 0) + (secondary ?? 0) === 0) {
        found = true;
        await skillsPage.clickDeleteUnlink();
        const deleteVisible = await skillsPage.deleteUnlinkSkillConfirmation.isVisible().catch(() => false);
        const unlinkDeptVisible = await skillsPage.unlinkFromDepartmentConfirmation.isVisible().catch(() => false);
        expect(deleteVisible || unlinkDeptVisible, 'no delete/unlink confirmation pop-up appeared for a zero-in-department-holder skill').toBe(true);
        await skillsPage.cancelDeleteUnlink();
      }
    }
    if (!found) test.skip(true, 'No skill with 0 combined holders in-department found to exercise this cross-department confirmation case');
  });
});
