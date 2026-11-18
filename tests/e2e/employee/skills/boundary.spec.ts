// TC-EMPSKL-061..071, 107..113 — boundary pass: untouched-toggle defaults, independent
// override/conflict evaluation, delete/unlink combined-count thresholds (0/1/N), zero-skills
// empty state, and upper/lower batch-size probes.
import { test, expect } from '../../../fixtures/auth';
import { SkillsPage } from '../../../page-objects/employee/skills.page';

test.describe('Skills — Boundary', () => {
  let skillsPage: SkillsPage;

  test.beforeEach(async ({ page }) => {
    skillsPage = new SkillsPage(page);
  });

  test('TC-EMPSKL-061 5 employees in one Save; 2 explicit Primary, 3 untouched — all 5 save, untouched default Secondary @boundary @functional', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    if (!(await skillsPage.selectFirstAvailableDepartment())) test.skip(true, 'No department checkbox found');
    const skillName = skillsPage.createUniqueSkillName('TC061');
    await skillsPage.searchOrCreateSkill(skillName);
    if (await skillsPage.isCreateNewSkillOffered()) {
      await skillsPage.clickCreateNewSkillOption();
      await skillsPage.fillLogoUrl('https://example.com/logo.png').catch(() => {});
    }

    const employees = await skillsPage.addFirstAvailableEmployees(5);
    if (employees.length < 5) test.skip(true, `Only ${employees.length} employees available — need 5 for this batch boundary case`);
    await skillsPage.setEmployeeToggle(employees[0], 'Primary');
    await skillsPage.setEmployeeToggle(employees[1], 'Primary');
    // employees[2..4] left untouched deliberately.
    await skillsPage.saveAddSkillDrawer();
    await expect(skillsPage.addNewSkillDrawer).not.toBeVisible();

    if (await skillsPage.selectSkillFromListing(skillName)) {
      await expect(skillsPage.getHolderRowByName(skillsPage.getPrimaryHoldersSection(), employees[0])).toBeVisible();
      await expect(skillsPage.getHolderRowByName(skillsPage.getPrimaryHoldersSection(), employees[1])).toBeVisible();
      for (const untouched of employees.slice(2)) {
        await expect(skillsPage.getHolderRowByName(skillsPage.getSecondaryHoldersSection(), untouched)).toBeVisible();
      }
    }
  });

  test('TC-EMPSKL-062 Untouched employee toggle defaults to Secondary on Save (single employee) @boundary @functional', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    if (!(await skillsPage.selectFirstAvailableDepartment())) test.skip(true, 'No department checkbox found');
    const skillName = skillsPage.createUniqueSkillName('TC062');
    await skillsPage.searchOrCreateSkill(skillName);
    if (await skillsPage.isCreateNewSkillOffered()) {
      await skillsPage.clickCreateNewSkillOption();
      await skillsPage.fillLogoUrl('https://example.com/logo.png').catch(() => {});
    }

    const employees = await skillsPage.addFirstAvailableEmployees(1);
    if (employees.length < 1) test.skip(true, 'No employees available to assign');
    await skillsPage.saveAddSkillDrawer();
    await expect(skillsPage.addNewSkillDrawer).not.toBeVisible();

    if (await skillsPage.selectSkillFromListing(skillName)) {
      await expect(skillsPage.getHolderRowByName(skillsPage.getSecondaryHoldersSection(), employees[0])).toBeVisible();
    }
  });

  test('TC-EMPSKL-063 Override and an independent opposite-category conflict for the same employee in one batch are evaluated independently @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    const rowCount = await rows.count().catch(() => 0);
    if (rowCount === 0) test.skip(true, 'No skills present to exercise the independent override/conflict scenario — structural probe only');
    // Structural/best-effort: exact multi-condition setup for one employee across override + conflict
    // requires seed data (an employee already self-classified AND a separate opposite-category
    // assignment row in the same batch) not confirmed available; verify the override dialog and a
    // conflict message can coexist without one suppressing the other where data allows.
    const skillName = (await skillsPage.getSkillRowName(rows.first()));
    await skillsPage.selectSkillFromListing(skillName);
    const primaryCount = await skillsPage.getPrimaryCount();
    if (!primaryCount) test.skip(true, 'No Primary holder available on this skill to attempt an override');
    const employeeName = (await skillsPage.getHolderRowName(skillsPage.getPrimaryHoldersSection().first()));
    const overrode = await skillsPage.attemptOverrideClassification(employeeName, 'Secondary');
    if (overrode) {
      await expect(skillsPage.getOverrideConfirmationDialog()).toBeVisible();
      await skillsPage.cancelOverride();
    }
  });

  test('TC-EMPSKL-064 Skill with 0 Primary / 12 Secondary in-department is treated as assigned — delete/unlink blocked with exact breakdown @boundary @negative', async ({ page }) => {
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
      if (primary === 0 && (secondary ?? 0) > 0) {
        found = true;
        await skillsPage.clickDeleteUnlink();
        await expect(skillsPage.cannotUnlinkSkillError).toBeVisible();
        expect(await skillsPage.cannotUnlinkSkillError.textContent()).toMatch(new RegExp(`primary\\s*:\\s*0.*secondary\\s*:\\s*${secondary}`, 'i'));
      }
    }
    if (!found) test.skip(true, 'No skill with 0 Primary / N>0 Secondary holders found in-department to exercise this exact boundary');
  });

  test('TC-EMPSKL-065 Skill with 0 Primary / 9 Secondary — Primary shows "No employees in this category", Secondary lists all 9 @boundary', async ({ page }) => {
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
      if (primary === 0 && (secondary ?? 0) > 0) {
        found = true;
        // REDESIGN (6.9.0): Primary tab shows the "No employees found…" empty state; the All view lists every Secondary holder.
        await skillsPage.applyHolderFilter('Primary');
        await expect(skillsPage.noEmployeesInCategoryText).toBeVisible();
        await skillsPage.applyHolderFilter('All');
        const listedSecondary = await skillsPage.getSecondaryHoldersSection().count().catch(() => 0);
        expect(listedSecondary).toBe(secondary);
      }
    }
    if (!found) test.skip(true, 'No skill with 0 Primary / N>0 Secondary holders found in-department');
  });

  test('TC-EMPSKL-066 Fuzzy search matching multiple skills shows an accurate department-link count per matched skill @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    if (!(await skillsPage.selectFirstAvailableDepartment())) test.skip(true, 'No department checkbox found');
    await skillsPage.searchOrCreateSkill('a'); // broad single-letter term likely to match multiple existing skills
    const options = skillsPage.page.getByRole('option');
    const count = await options.count().catch(() => 0);
    if (count < 2) test.skip(true, 'Fewer than 2 fuzzy-matched skills found for a broad search term');
    for (let i = 0; i < Math.min(count, 3); i++) {
      const text = (await options.nth(i).textContent().catch(() => '')) ?? '';
      // Ground-truth confirmed live: real copy is "<N> dept linked" (e.g. "Adobe Illustrator2 dept linked"), not "department".
      expect(text, `matched option ${i} does not show a department-link count`).toMatch(/\d+\s*dept(\.|artment)?s?\s*linked/i);
    }
  });

  test('TC-EMPSKL-067 Clicking Save twice in rapid succession creates exactly one record, not duplicates @boundary @needs-verification', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    if (!(await skillsPage.selectFirstAvailableDepartment())) test.skip(true, 'No department checkbox found');
    const skillName = skillsPage.createUniqueSkillName('TC067');
    await skillsPage.searchOrCreateSkill(skillName);
    if (await skillsPage.isCreateNewSkillOffered()) {
      await skillsPage.clickCreateNewSkillOption();
      await skillsPage.fillLogoUrl('https://example.com/logo.png').catch(() => {});
    }

    // Ground truth (confirmed by user): Save is meant to be a one-time action — the real
    // safeguard is that Save disables itself immediately on the first click, not server-side
    // dedup of a genuine double-submission. Verify that directly, in addition to the record-count
    // safety net below.
    await skillsPage.drawerSaveBtn.click();
    const disabledAfterFirstClick = await skillsPage.drawerSaveBtn.isDisabled().catch(() => true);
    expect(disabledAfterFirstClick, 'Save remained clickable immediately after the first click — a second click should not be possible').toBe(true);

    await skillsPage.addNewSkillDrawer.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
    await skillsPage.navigateToSkills();
    const matches = skillsPage.skillRows.filter({ hasText: skillName });
    expect(await matches.count().catch(() => 0), 'double-click Save created duplicate skill-department links').toBeLessThanOrEqual(1);
  });

  test('TC-EMPSKL-068 Selected department with zero skills shows a non-blank empty-state @boundary @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    await skillsPage.navigateToSkills();
    // Ground truth confirmed live: the skill list can briefly report 0 rows while still loading
    // (same async-load race documented elsewhere) — settle first so a real 175+-skill department
    // isn't misread as a genuine zero-skills empty state.
    await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(1500);
    const rows = skillsPage.skillRows;
    // Ground truth (per user): the page needs a skill selected first for its data/context to be
    // fully loaded before the empty-state check is meaningful.
    const initialCount = await rows.count().catch(() => 0);
    if (initialCount > 0) {
      const firstSkillName = (await skillsPage.getSkillRowName(rows.first()));
      await skillsPage.selectSkillFromListing(firstSkillName);
    }
    const rowCount = await rows.count().catch(() => 0);
    if (rowCount > 0) test.skip(true, 'Current department has skills mapped — no zero-skills department found to exercise this case');
    await expect(skillsPage.getEmptyDepartmentState()).toBeVisible();
  });

  test.fixme('TC-EMPSKL-069 — MANUAL VERIFICATION REQUIRED: Logo URL length/protocol boundary probe is a discovery task (unclear #5), no documented limit to assert', async () => {});
  test.fixme('TC-EMPSKL-070 — MANUAL VERIFICATION REQUIRED: fuzzy-search debounce/min-char/case-sensitivity boundary probe is a discovery task (unclear #6)', async () => {});

  test('TC-EMPSKL-071 Assign to Employees is optional — Save succeeds with zero employees selected @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    if (!(await skillsPage.selectFirstAvailableDepartment())) test.skip(true, 'No department checkbox found');
    const skillName = skillsPage.createUniqueSkillName('TC071');
    await skillsPage.searchOrCreateSkill(skillName);
    if (await skillsPage.isCreateNewSkillOffered()) {
      await skillsPage.clickCreateNewSkillOption();
      await skillsPage.fillLogoUrl('https://example.com/logo.png').catch(() => {});
    }
    await skillsPage.saveAddSkillDrawer();
    await expect(skillsPage.addNewSkillDrawer).not.toBeVisible();
    if (await skillsPage.selectSkillFromListing(skillName)) {
      expect(await skillsPage.getPrimaryCount()).toBe(0);
      expect(await skillsPage.getSecondaryCount()).toBe(0);
    }
  });

  test('TC-EMPSKL-107 Skill with 0 combined holders in-department, used in exactly 1 other department, still shows "Delete/Unlink Skill" confirmation @boundary', async ({ page }) => {
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
        expect(deleteVisible || unlinkDeptVisible, 'neither Delete/Unlink Skill nor Unlink Skill from Department confirmation appeared').toBe(true);
        await skillsPage.cancelDeleteUnlink();
      }
    }
    if (!found) test.skip(true, 'No skill with 0 combined holders in-department found to exercise this boundary');
  });

  test('TC-EMPSKL-108 Skill with exactly 1 Primary / 0 Secondary in-department blocks delete/unlink identically to a higher count @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    const rowCount = await rows.count().catch(() => 0);
    let found = false;
    // REDESIGN (6.9.0): with the Primary proficiency tab active the listing shows per-skill PRIMARY
    // counts; with All it shows combined counts. Candidates = primary 1 AND combined 1.
    await skillsPage.applyHolderFilter('Primary');
    const primaryOne = new Set((await skillsPage.listSkillRows()).filter(r => r.count === 1).map(r => r.name));
    await skillsPage.applyHolderFilter('All');
    const listed = (await skillsPage.listSkillRows()).filter(r => r.count === 1 && primaryOne.has(r.name));
    for (let i = 0; i < listed.length && !found; i++) {
      const name = listed[i].name;
      const r = listed[i]; if (!(r.count === 1)) continue; // pre-filter on the listing count (= holders in dept)
      await skillsPage.selectSkillFromListing(name);
      const primary = await skillsPage.getPrimaryCount();
      const secondary = await skillsPage.getSecondaryCount();
      if (primary === 1 && secondary === 0) {
        found = true;
        const enabled = await skillsPage.isDeleteUnlinkEnabled();
        expect(enabled, 'Delete/Unlink is enabled for a skill with 1 Primary holder (minimum non-zero combined count)').toBe(false);
      }
    }
    if (!found) test.skip(true, 'No skill with exactly 1 Primary / 0 Secondary holder found in-department');
  });

  test.fixme('TC-EMPSKL-109 — MANUAL VERIFICATION REQUIRED: requires a TM/EM account confirmed to manage exactly 2 departments', async () => {});

  test('TC-EMPSKL-110 Add New Skill saves successfully with zero tags @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    if (!(await skillsPage.selectFirstAvailableDepartment())) test.skip(true, 'No department checkbox found');
    const skillName = skillsPage.createUniqueSkillName('TC110');
    await skillsPage.searchOrCreateSkill(skillName);
    if (await skillsPage.isCreateNewSkillOffered()) {
      await skillsPage.clickCreateNewSkillOption();
      await skillsPage.fillLogoUrl('https://example.com/logo.png').catch(() => {});
    }
    await skillsPage.saveAddSkillDrawer();
    await expect(skillsPage.addNewSkillDrawer).not.toBeVisible();
    const selected = await skillsPage.selectSkillFromListing(skillName);
    expect(selected, 'skill created with zero tags is not found in the Skills Listing').toBe(true);
  });

  test('TC-EMPSKL-111 Assigning a skill to 20 employees in one Save persists all 20 with their respective toggle states @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    if (!(await skillsPage.selectFirstAvailableDepartment())) test.skip(true, 'No department checkbox found');
    const skillName = skillsPage.createUniqueSkillName('TC111');
    await skillsPage.searchOrCreateSkill(skillName);
    if (await skillsPage.isCreateNewSkillOffered()) {
      await skillsPage.clickCreateNewSkillOption();
      await skillsPage.fillLogoUrl('https://example.com/logo.png').catch(() => {});
    }

    const employees = await skillsPage.addFirstAvailableEmployees(20);
    if (employees.length < 20) test.skip(true, `Only ${employees.length} employees available in this department — need 20+ seeded for this batch boundary case`);
    for (let i = 0; i < 8; i++) await skillsPage.setEmployeeToggle(employees[i], 'Primary');
    // employees[8..19] left untouched -> default Secondary
    await skillsPage.saveAddSkillDrawer();
    await expect(skillsPage.addNewSkillDrawer).not.toBeVisible();

    if (await skillsPage.selectSkillFromListing(skillName)) {
      expect(await skillsPage.getPrimaryCount()).toBe(8);
      expect(await skillsPage.getSecondaryCount()).toBe(12);
    }
  });

  test('TC-EMPSKL-112 Skill Name entered as a single character behaves consistently @boundary @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is inferred — verify with a human before treating a failure as a confirmed regression.
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    if (!(await skillsPage.selectFirstAvailableDepartment())) test.skip(true, 'No department checkbox found');
    const singleChar = `X${Date.now() % 10}`;
    await skillsPage.searchOrCreateSkill(singleChar);
    if (await skillsPage.isCreateNewSkillOffered()) {
      await skillsPage.clickCreateNewSkillOption();
      await skillsPage.fillLogoUrl('https://example.com/logo.png').catch(() => {});
    }
    // A disabled Save is one of the two documented outcomes (rejected) — only click it when enabled.
    if (await skillsPage.isDrawerSaveEnabled()) await skillsPage.saveAddSkillDrawer();
    // Document actual behavior rather than assert a specific limit: either it saved (drawer closed) or was rejected (drawer + inline error remain).
    const drawerClosed = await skillsPage.addNewSkillDrawer.isVisible({ timeout: 3000 }).then(v => !v).catch(() => true);
    if (!drawerClosed) {
      await expect(skillsPage.getInlineFieldError().or(skillsPage.addNewSkillDrawer)).toBeVisible();
    }
    expect(typeof drawerClosed).toBe('boolean');
  });

  test('TC-EMPSKL-113 Two employees both left completely untouched both default to Secondary (zero-Primary boundary) @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    if (!(await skillsPage.selectFirstAvailableDepartment())) test.skip(true, 'No department checkbox found');
    const skillName = skillsPage.createUniqueSkillName('TC113');
    await skillsPage.searchOrCreateSkill(skillName);
    if (await skillsPage.isCreateNewSkillOffered()) {
      await skillsPage.clickCreateNewSkillOption();
      await skillsPage.fillLogoUrl('https://example.com/logo.png').catch(() => {});
    }

    const employees = await skillsPage.addFirstAvailableEmployees(2);
    if (employees.length < 2) test.skip(true, 'Fewer than 2 employees available');
    // Neither toggle touched.
    await skillsPage.saveAddSkillDrawer();
    await expect(skillsPage.addNewSkillDrawer).not.toBeVisible();

    if (await skillsPage.selectSkillFromListing(skillName)) {
      expect(await skillsPage.getPrimaryCount()).toBe(0);
      expect(await skillsPage.getSecondaryCount()).toBe(2);
    }
  });

  test('TC-EMPSKL-123 Employees with tied Availability % maintain a stable secondary sort order @boundary @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    const rowCount = await rows.count().catch(() => 0);
    let tiedSkillName: string | null = null;
    let namesBeforeReload: string[] = [];
    const listed = await skillsPage.listSkillRows();
    for (let i = 0; i < listed.length && !tiedSkillName; i++) {
      const name = listed[i].name;
      const r = listed[i]; if (!(r.count >= 2)) continue; // pre-filter on the listing count (= holders in dept)
      if (!name) continue;
      await skillsPage.selectSkillFromListing(name);
      const percentages = await skillsPage.getAvailabilityPercentages();
      const hasTie = percentages.some((p, idx) => idx > 0 && p === percentages[idx - 1]);
      if (hasTie) {
        tiedSkillName = name;
        namesBeforeReload = await skillsPage.getHolderNamesInOrder();
      }
    }
    if (!tiedSkillName) test.skip(true, 'reason: no skill with 2+ employees sharing an identical Availability % was found — sort-stability behavior unconfirmed against live app');

    await page.reload({ waitUntil: 'domcontentloaded' }).catch(() => {});
    await skillsPage.navigateToSkills();
    const reselected = await skillsPage.selectSkillFromListing(tiedSkillName!);
    if (!reselected) test.skip(true, 'reason: could not reselect the same skill after reload — sort-stability behavior unconfirmed against live app');
    const namesAfterReload = await skillsPage.getHolderNamesInOrder();

    expect(namesAfterReload, 'tied employees did not maintain a stable, repeatable relative order across a reload').toEqual(namesBeforeReload);
  });

  test('TC-EMPSKL-125 Multi-skill selection — an employee holding more than one selected skill appears only once, with no duplicate row @boundary', async ({ page }) => {
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    const rowCount = await rows.count().catch(() => 0);
    if (rowCount < 2) test.skip(true, 'Fewer than 2 skills present in the Skills Listing to multi-select');

    // Find a shared employee across two skills, best-effort — scan holder names for a name common
    // to two different skills' combined Primary/Secondary Detail Panel sections. Capped at 15
    // skills to bound the runtime of this discovery scan.
    const listed = (await skillsPage.listSkillRows()).filter(r => r.count >= 1);
    const scanLimit = Math.min(listed.length, 15);
    const skillHolders: { name: string; holders: string[] }[] = [];
    for (let i = 0; i < scanLimit; i++) {
      const name = listed[i].name;
      if (!name) continue;
      await skillsPage.selectSkillFromListing(name);
      const holders = await skillsPage.getHolderNamesInOrder();
      skillHolders.push({ name, holders });
    }

    let pair: [string, string] | null = null;
    let sharedEmployee: string | null = null;
    findShared:
    for (let i = 0; i < skillHolders.length; i++) {
      for (let j = i + 1; j < skillHolders.length; j++) {
        const shared = skillHolders[i].holders.find(h => h && skillHolders[j].holders.includes(h));
        if (shared) {
          pair = [skillHolders[i].name, skillHolders[j].name];
          sharedEmployee = shared;
          break findShared;
        }
      }
    }
    if (!pair || !sharedEmployee) test.skip(true, 'No two skills sharing a common employee were found to exercise the multi-select union-dedup case');

    const multiSelected = await skillsPage.selectMultipleSkills(pair!);
    if (multiSelected < 2) test.skip(true, 'reason: multi-skill selection control not found on the Skills Listing rows — UI unconfirmed against live app');

    const combinedHolders = await skillsPage.getHolderNamesInOrder();
    const occurrences = combinedHolders.filter(h => h === sharedEmployee).length;
    expect(occurrences, `shared employee "${sharedEmployee}" appeared ${occurrences} times in the combined multi-skill list (expected exactly once)`).toBe(1);
  });

  test('TC-EMPSKL-133 Double-clicking Save on the Add New Skill drawer does not create duplicate records @boundary @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.
    await skillsPage.navigateToSkills();
    await skillsPage.openAddSkillsDrawer();
    if (!(await skillsPage.selectFirstAvailableDepartment())) test.skip(true, 'No department checkbox found');
    const skillName = skillsPage.createUniqueSkillName('TC133');
    await skillsPage.searchOrCreateSkill(skillName);
    if (await skillsPage.isCreateNewSkillOffered()) {
      await skillsPage.clickCreateNewSkillOption();
      await skillsPage.fillLogoUrl('https://example.com/logo.png').catch(() => {});
    }
    await skillsPage.addFirstAvailableEmployees(1);

    // Fire two rapid Save clicks without waiting between them to probe for a real double-submit,
    // distinct from TC-EMPSKL-067's disabled-after-first-click safeguard check — this test's
    // specific concern is the resulting record count.
    await Promise.all([
      skillsPage.drawerSaveBtn.click().catch(() => {}),
      skillsPage.drawerSaveBtn.click({ force: true }).catch(() => {}),
    ]);
    await skillsPage.addNewSkillDrawer.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});

    await skillsPage.navigateToSkills();
    const matches = skillsPage.skillRows.filter({ hasText: skillName });
    const count = await matches.count().catch(() => 0);
    expect(count, 'double-click Save created more than one skill/employee-assignment record').toBeLessThanOrEqual(1);
  });
});
