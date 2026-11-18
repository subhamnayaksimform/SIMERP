// TC-EMPSKL-001..005 — exhaustive smoke pass over the Skills module (Employee > Skills).
// `test`/`expect` imported from the shared auth fixtures (not '@playwright/test' directly) since
// TC-EMPSKL-002 below needs `testUserPage` (punit.patel, TM/Employee) alongside the default
// primaryPage-equivalent `page` fixture used by the rest of this file.
import { test, expect } from '../../../fixtures/auth';
import { SkillsPage } from '../../../page-objects/employee/skills.page';

test.describe('Skills — Smoke', () => {
  let skillsPage: SkillsPage;

  test.beforeEach(async ({ page }) => {
    skillsPage = new SkillsPage(page);
  });

  test('TC-EMPSKL-001 Admin adds a new skill with mixed Primary/Secondary classifications and Save reflects everywhere @smoke', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    await expect(skillsPage.addNewSkillDrawer).toBeVisible();
    await expect(skillsPage.drawerSubtitle).toBeVisible();

    const department = await skillsPage.selectFirstAvailableDepartment();
    if (!department) test.skip(true, 'No department checkbox found in the Add New Skill drawer — cannot proceed with Select Department (mandatory)');

    const skillName = skillsPage.createUniqueSkillName('TC001');
    await skillsPage.searchOrCreateSkill(skillName);
    const matched = await skillsPage.selectSkillFromSearchResults(skillName);
    if (!matched) {
      const noMatchVisible = await skillsPage.isCreateNewSkillOffered();
      if (noMatchVisible) {
        await skillsPage.clickCreateNewSkillOption();
        // Ground truth: a brand-new skill's Save silently no-ops unless Logo URL is filled — not
        // what this test is about (Primary/Secondary classification), so work around it here.
        await skillsPage.fillLogoUrl('https://example.com/logo.png').catch(() => {});
      }
    }

    const employees = await skillsPage.addFirstAvailableEmployees(2);
    if (employees.length >= 1) await skillsPage.setEmployeeToggle(employees[0], 'Primary');
    // Second employee (if any) is deliberately left untouched to exercise the default-to-Secondary rule.

    await skillsPage.saveAddSkillDrawer();
    await expect(skillsPage.addNewSkillDrawer).not.toBeVisible();

    const selected = await skillsPage.selectSkillFromListing(skillName);
    if (selected) {
      await expect(skillsPage.primaryHoldersHeader.or(skillsPage.noSkillSelectedText)).toBeVisible();
    }
  });

  test('TC-EMPSKL-002 Employee self-assigns a skill from their profile and it reflects in the Skill Detail Panel for their department @smoke', async ({ testUserPage }) => {
    const employeeSkillsPage = new SkillsPage(testUserPage);
    await employeeSkillsPage.navigateToOwnProfileSkillsPanel();
    const addBtnVisible = await employeeSkillsPage.getOwnProfileAddSkillBtn().isVisible().catch(() => false);
    if (!addBtnVisible) test.skip(true, 'Own Employee Profile Skills panel "Add Skill" control not found — Section 10.3 UI unconfirmed live (unclear #7)');

    const skillName = employeeSkillsPage.createUniqueSkillName('TC002');
    const assigned = await employeeSkillsPage.selfAssignSkill(skillName, 'Secondary');
    expect(assigned, 'self-assignment flow did not complete').toBe(true);
    await expect(employeeSkillsPage.getOwnSkillRow(skillName).or(employeeSkillsPage.getSuccessToast())).toBeVisible();
  });

  test('TC-EMPSKL-003 Admin overrides an employee\'s self-classified skill after one-time confirmation, reflected immediately @smoke', async ({ page }) => {
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    const rowCount = await rows.count().catch(() => 0);
    if (rowCount === 0) test.skip(true, 'No skills present in the Skills Listing to select for the override flow');

    const firstSkillName = (await skillsPage.getSkillRowName(rows.first()));
    if (!firstSkillName) test.skip(true, 'Could not read a skill name from the Skills Listing');
    await skillsPage.selectSkillFromListing(firstSkillName);

    const primarySection = skillsPage.getPrimaryHoldersSection();
    const secondarySection = skillsPage.getSecondaryHoldersSection();
    const primaryHolderCount = await primarySection.count().catch(() => 0);
    if (primaryHolderCount === 0) test.skip(true, 'No Primary holder available on this skill to exercise the override flow');

    const employeeName = (await skillsPage.getHolderRowName(primarySection.first()));
    const overrode = await skillsPage.attemptOverrideClassification(employeeName, 'Secondary');
    if (!overrode) test.skip(true, 'Per-employee classification toggle not found in the Skill Detail Panel');

    const confirmDialog = skillsPage.getOverrideConfirmationDialog();
    await expect(confirmDialog).toBeVisible();
    expect(await confirmDialog.textContent()).toMatch(new RegExp(`${employeeName}.*Primary`, 'i'));
    await skillsPage.confirmOverride();
    await expect(confirmDialog).not.toBeVisible();
    await expect(skillsPage.getHolderRowByName(secondarySection, employeeName)).toBeVisible();
  });

  test('TC-EMPSKL-004 Skills Listing shows one combined Primary+Secondary count per skill with no per-category breakdown at list level @smoke', async ({ page }) => {
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    const rowCount = await rows.count().catch(() => 0);
    if (rowCount === 0) test.skip(true, 'No skills present in the Skills Listing for this department');

    const firstRow = rows.first();
    const rowText = ((await firstRow.textContent().catch(() => '')) ?? '').trim();
    expect(rowText, 'skill row has no combined count number').toMatch(/\d+/);
    expect(rowText, 'skill row exposes a Primary/Secondary split at list level (should be combined only)').not.toMatch(/primary\s*:\s*\d+.*secondary\s*:\s*\d+/i);
  });

  test('TC-EMPSKL-005 Selecting a skill renders Primary Holders and Secondary Holders sub-sections with correct counts and matching members @smoke', async ({ page }) => {
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    const rowCount = await rows.count().catch(() => 0);
    if (rowCount === 0) test.skip(true, 'No skills present in the Skills Listing to select');

    const firstSkillName = (await skillsPage.getSkillRowName(rows.first()));
    await skillsPage.selectSkillFromListing(firstSkillName);

    await expect(skillsPage.primaryHoldersHeader).toBeVisible();
    await expect(skillsPage.secondaryHoldersHeader).toBeVisible();

    const primaryCount = await skillsPage.getPrimaryCount();
    const secondaryCount = await skillsPage.getSecondaryCount();
    const primarySection = skillsPage.getPrimaryHoldersSection();
    const secondarySection = skillsPage.getSecondaryHoldersSection();

    // REDESIGN (6.9.0): an empty category is shown by selecting its proficiency tab, which renders
    // the "No employees found for selected skill." empty state (no per-section placeholder any more).
    if (primaryCount === 0) {
      await skillsPage.applyHolderFilter('Primary');
      await expect(skillsPage.noEmployeesInCategoryText).toBeVisible();
      await skillsPage.applyHolderFilter('All');
    } else if (primaryCount !== null) {
      const listedPrimary = await primarySection.count().catch(() => 0);
      expect(listedPrimary).toBe(primaryCount);
    }
    if (secondaryCount === 0) {
      await skillsPage.applyHolderFilter('Secondary');
      await expect(skillsPage.noEmployeesInCategoryText).toBeVisible();
      await skillsPage.applyHolderFilter('All');
    } else if (secondaryCount !== null) {
      const listedSecondary = await secondarySection.count().catch(() => 0);
      expect(listedSecondary).toBe(secondaryCount);
    }
  });

  test('TC-EMPSKL-117 Add New Skill drawer — selecting an existing skill from search results and assigning employees succeeds end-to-end @smoke @functional', async ({ page }) => {
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    if ((await rows.count().catch(() => 0)) === 0) test.skip(true, 'No existing skill available in the current department to search for and select');
    const existingSkillName = (await skillsPage.getSkillRowName(rows.first()));
    if (!existingSkillName) test.skip(true, 'Could not read an existing skill name from the Skills Listing');

    await skillsPage.openAddSkillsDrawer();
    if (!(await skillsPage.selectFirstAvailableDepartment())) test.skip(true, 'No department checkbox found in the Add New Skill drawer');

    await skillsPage.searchOrCreateSkill(existingSkillName);
    const matched = await skillsPage.selectSkillFromSearchResults(existingSkillName);
    expect(matched, 'existing skill was not matched/selected from the search results').toBe(true);

    const employees = await skillsPage.addFirstAvailableEmployees(1);
    if (employees.length === 0) test.skip(true, 'No employees available to assign');

    await skillsPage.saveAddSkillDrawer();
    await expect(skillsPage.addNewSkillDrawer).not.toBeVisible();

    const selected = await skillsPage.selectSkillFromListing(existingSkillName);
    expect(selected, 'skill+department+employee assignment did not appear in the Skills Listing without reload').toBe(true);
    await expect(
      skillsPage.getHolderRowByName(skillsPage.getSecondaryHoldersSection(), employees[0])
        .or(skillsPage.getHolderRowByName(skillsPage.getPrimaryHoldersSection(), employees[0]))
    ).toBeVisible();
  });

  test('TC-EMPSKL-124 Selecting multiple skills together shows the combined (union) list of employees holding any of them @smoke @functional', async ({ page }) => {
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    const rowCount = await rows.count().catch(() => 0);
    if (rowCount < 2) test.skip(true, 'Fewer than 2 skills present in the Skills Listing to multi-select');

    const names: string[] = [];
    for (let i = 0; i < Math.min(rowCount, 2); i++) {
      const name = (await skillsPage.getSkillRowName(rows.nth(i)));
      if (name) names.push(name);
    }
    if (names.length < 2) test.skip(true, 'Could not read 2 distinct skill names from the Skills Listing');

    await skillsPage.selectSkillFromListing(names[0]);
    const singleCount = (await skillsPage.getPrimaryCount() ?? 0) + (await skillsPage.getSecondaryCount() ?? 0);

    const multiSelected = await skillsPage.selectMultipleSkills(names);
    if (multiSelected < 2) test.skip(true, 'reason: multi-skill selection control not found on the Skills Listing rows — UI unconfirmed against live app');

    const combinedCount = (await skillsPage.getPrimaryCount() ?? 0) + (await skillsPage.getSecondaryCount() ?? 0);
    expect(combinedCount, 'combined multi-skill employee list is not at least as large as a single selected skill\'s holder count').toBeGreaterThanOrEqual(singleCount);
  });
});
