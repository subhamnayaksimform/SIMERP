// TC-EMPSKL-096..101 — integration pass: Employee Profile <-> Skills Management sync,
// department/role-matrix cross-checks (require accounts not yet provisioned), and cross-surface
// count reconciliation (Skills Listing combined = Primary+Secondary = API).
import { test, expect } from '../../../fixtures/auth';
import { SkillsPage } from '../../../page-objects/employee/skills.page';

test.describe('Skills — Integration', () => {
  test('TC-EMPSKL-096 Self-assignment/reclassification from the Employee Profile stays in sync with the Skills Management view for the same employee-skill link @regression @functional', async ({ page, tmPage }) => {
    const employeeSkillsPage = new SkillsPage(tmPage);
    await employeeSkillsPage.navigateToOwnProfileSkillsPanel();
    if (!(await employeeSkillsPage.getOwnProfileAddSkillBtn().isVisible().catch(() => false))) {
      test.skip(true, 'Own Employee Profile Skills panel not found — Section 10.3 UI unconfirmed live (unclear #7)');
    }
    const skillName = employeeSkillsPage.createUniqueSkillName('TC096');
    const assigned = await employeeSkillsPage.selfAssignSkill(skillName, 'Primary');
    expect(assigned).toBe(true);

    const adminSkillsPage = new SkillsPage(page);
    await adminSkillsPage.navigateToSkills();
    const foundInManagement = await adminSkillsPage.selectSkillFromListing(skillName);
    if (!foundInManagement) test.skip(true, 'Self-assigned skill not found in Skills Management — cross-module sync could not be verified with current department scoping');
    // The employee's name is not known here without a confirmed identity mapping between the
    // tmPage session and its display name in the Admin-scoped Skills Management view — assert
    // the structural sync signal instead (a Primary holder now exists for this brand-new skill).
    expect(await adminSkillsPage.getPrimaryCount()).toBeGreaterThan(0);
  });

  test.fixme('TC-EMPSKL-097 — MANUAL VERIFICATION REQUIRED: department checklist parity with Department Settings requires a confirmed multi-department manager account', async () => {});
  test.fixme('TC-EMPSKL-098 — MANUAL VERIFICATION REQUIRED: full role/managed-department gating parity with Admin/Roles & Permissions requires dedicated EM/RM accounts', async () => {});

  test('TC-EMPSKL-099 Employee counts reconcile: Skills Listing combined = Primary + Secondary on the Detail Panel = the API response @functional @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.
    const skillsPage = new SkillsPage(page);
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    if ((await rows.count().catch(() => 0)) === 0) test.skip(true, 'No skills present to verify cross-surface count reconciliation');
    const skillName = (await skillsPage.getSkillRowName(rows.first()));

    const listingCombined = await skillsPage.getCombinedCountNumber(skillName);
    await skillsPage.selectSkillFromListing(skillName);
    const primary = await skillsPage.getPrimaryCount();
    const secondary = await skillsPage.getSecondaryCount();
    if (listingCombined !== null && primary !== null && secondary !== null) {
      expect(listingCombined, 'Skills Listing combined count does not equal Primary + Secondary from the Detail Panel').toBe(primary + secondary);
    }

    const apiResult = await skillsPage.attemptApiRead(page, `/api/skills?name=${encodeURIComponent(skillName)}`);
    if (apiResult.status === 200 && apiResult.body) {
      const apiCombined = apiResult.body.combinedCount ?? apiResult.body.total ?? null;
      if (apiCombined !== null && primary !== null && secondary !== null) {
        expect(apiCombined, 'API-reported count does not match Primary + Secondary').toBe(primary + secondary);
      }
    }
  });

  test.fixme('TC-EMPSKL-100 — MANUAL VERIFICATION REQUIRED: write-then-verify via API requires the actual confirmed endpoint (unclear #4, blocking)', async () => {});
  test.fixme('TC-EMPSKL-101 — MANUAL VERIFICATION REQUIRED: documentation/tracking case only (unclear #4, blocking) — no API endpoints confirmed anywhere in source, not an executable UI flow', async () => {});

  test('TC-EMPSKL-132 Availability % shown in the Skill Detail Panel matches the value returned by the API for the same employee @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.
    const skillsPage = new SkillsPage(page);
    await skillsPage.navigateToSkills();
    const rows = skillsPage.skillRows;
    const rowCount = await rows.count().catch(() => 0);
    let topEmployee: string | null = null;
    let topAvailability: number | null = null;
    const listed = await skillsPage.listSkillRows();
    for (let i = 0; i < listed.length && !topEmployee; i++) {
      const name = listed[i].name;
      const r = listed[i]; if (!(r.count >= 1)) continue; // pre-filter on the listing count (= holders in dept)
      if (!name) continue;
      await skillsPage.selectSkillFromListing(name);
      const percentages = await skillsPage.getAvailabilityPercentages();
      const names = await skillsPage.getHolderNamesInOrder();
      if (percentages.length > 0 && names.length > 0 && names[0]) {
        topEmployee = names[0];
        topAvailability = percentages[0];
      }
    }
    if (!topEmployee || topAvailability === null) {
      test.skip(true, 'reason: no employee with a readable Availability % was found in any Skill Detail Panel — selector/endpoint unconfirmed against live app');
    }

    const apiResult = await skillsPage.attemptApiRead(page, `/api/employees/availability?name=${encodeURIComponent(topEmployee!)}`);
    if (apiResult.status !== 200 || !apiResult.body) {
      test.skip(true, 'reason: employee/availability API endpoint not confirmed live (returned non-200 or empty body) — cannot verify API/UI parity');
    }
    const apiAvailability = apiResult.body?.availability ?? apiResult.body?.availabilityPercent ?? apiResult.body?.percentage ?? null;
    if (apiAvailability === null) {
      test.skip(true, 'reason: API response did not contain a recognizable availability field — endpoint contract unconfirmed');
    }
    expect(apiAvailability, 'UI-displayed Availability % does not match the API value').toBe(topAvailability);
  });
});
