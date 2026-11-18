// Long-Running Allocations (Zoho 688906000093866688) — integration (cross-screen / cross-role).
// Two different users may be open at once (single-session rule is per user). Write flows on shared
// dev data are recorded as manual with a runtime skip (repo precedent TC-DASH-040).
import { test, expect } from '../../../fixtures/auth';
import { PmProjectsPage, formatDdMonYyyy, formatDdMmYyyy, aliasOf } from '../../../page-objects/pm-pmo/pm-projects.page';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

test.describe('PM & PMO — Long-Running Allocations — Integration', () => {
  test('TC-PMPROJ-188 @integration @shipped Same allocation shows the same Long-Running state on My Projects and on Employee Details', async ({ csmPage, pmoPage }) => {
    test.setTimeout(180_000);
    const pm = new PmProjectsPage(csmPage);
    await pm.gotoMyProjects();
    let pick: { project: any; e: any } | null = null;
    for (const p of await pm.fetchAllProjects()) {
      const d = (await pm.fetchProjectDetail(p.publicId)).body.data;
      const names = d.employees.map((x: any) => x.name);
      const e = d.employees.find((x: any) => x.isLongRunning && !x.isUpcoming && names.filter((n: string) => n === x.name).length === 1);
      if (e) { pick = { project: d, e }; break; }
    }
    expect(pick, 'a CSM project with an active LR allocation').not.toBeNull();
    await pm.gotoProjectDetail(pick!.project.publicId);
    const detailRow = pm.detailRow(pick!.e.name).first();
    await expect(pm.visibleLrBadgesIn(detailRow)).toHaveCount(1);
    await expect(detailRow).toContainText(formatDdMmYyyy(pick!.e.allocationStartDate));

    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const alias = aliasOf(pick!.project);
    const row = await emp.searchForEmployee(pick!.e.name);
    expect(await emp.readAvailabilityTooltip(row)).toContain(`${alias} Running since ${formatDdMonYyyy(pick!.e.allocationStartDate)}`);
    await pmoPage.mouse.move(0, 0);
    const drawer = await emp.openEmployeeSidePanel(row);
    await expect(emp.visibleLrBadges(emp.sidePanelProjectRows(drawer).filter({ hasText: alias }).first())).toHaveCount(1);
  });

  test('TC-PMPROJ-189 @integration @partial Update Allocation ticket (scheduled change) does not reset the Long-Running flag', async () => {
    test.info().annotations.push({ type: 'manual', description: 'Requires raising and approving an Update Allocation ticket (ALCTKT) on shared dev data. Read-only half is covered by TC-PMPROJ-142 (STANDING → SCHEDULED keeps the original start).' });
    test.skip(true, 'PARTIAL/MANUAL: write flow on shared dev data');
  });

  test('TC-PMPROJ-190 @integration @not-live-observable New future-dated allocation appears as Upcoming across screens', async () => {
    test.info().annotations.push({ type: 'manual', description: 'Requires creating + approving a New Allocation with start = today+7 on a CSM project; no CSM project has upcoming allocations today.' });
    test.skip(true, 'NOT LIVE-OBSERVABLE / MANUAL: requires creating an allocation on shared dev data');
  });

  test('TC-PMPROJ-191 @integration @shipped @needs-verification Employees API and UI agree on flags for every row of the Long Running filter page', async ({ pmoPage }) => {
    test.setTimeout(180_000);
    test.info().annotations.push({ type: 'needs-verification', description: 'Rule is speculative — verify with a human before treating a failure as a confirmed regression.' });
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const { total, items } = await emp.applyAllocationStages(['LONG_RUNNING']);
    expect(await emp.readListTotal()).toBe(total);
    let compared = 0;
    for (const e of items.slice(0, 15)) {
      const row = emp.employeeRow(e.name);
      if ((await row.count()) === 0) continue;
      for (const p of e.projects ?? []) {
        const chip = emp.projectChip(row, aliasOf(p));
        if ((await chip.count()) !== 1) continue;
        await expect(chip.locator('[aria-label="Long-Running"]'), `${e.name} / ${aliasOf(p)} isLongRunning=${!!p.isLongRunning}`).toHaveCount(p.isLongRunning ? 1 : 0);
        compared++;
      }
    }
    expect(compared, 'visible project chips compared against the API').toBeGreaterThan(0);
  });

  test('TC-PMPROJ-192 @integration @known-defect Stats card vs project detail LR totals are consistent', async ({ csmPage }) => {
    test.setTimeout(180_000);
    test.fail(true, 'CANDIDATE DEFECT (not filed): the card also counts exited employees (see TC-PMPROJ-183) — e.g. AnalytixHub list LR 8 vs detail 7.');
    const pm = new PmProjectsPage(csmPage);
    await pm.gotoMyProjects();
    const card = await pm.readLongRunningCardCount();
    let badges = 0;
    for (const p of await pm.fetchAllProjects()) {
      await pm.gotoProjectDetail(p.publicId);
      badges += await pm.visibleTableLrBadges.count();
    }
    expect(badges, `sum of active LR badges over project details vs card ${card}`).toBe(card);
  });
});
