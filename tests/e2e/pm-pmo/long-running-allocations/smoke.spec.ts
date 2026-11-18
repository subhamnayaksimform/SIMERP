// Long-Running Allocations (Zoho 688906000093866688) — smoke.
// Source: reports/test-cases/cases-2026-09-28-PMPROJ-688906000093866688.json (TC-PMPROJ-097..194).
// Live facts (dev 6.2.0): My Projects is CSM-only (csmPage); Employee Details is PMO-wide (pmoPage).
// Every name/date is chosen from the API at runtime — nothing is pinned to the grounding date.
import { test, expect } from '../../../fixtures/auth';
import { PmProjectsPage, ALLOCATION_STAGES, ALLOCATION_STAGE_LABELS, formatDdMonYyyy, filtersParam, aliasOf } from '../../../page-objects/pm-pmo/pm-projects.page';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

test.describe('PM & PMO — Long-Running Allocations — Smoke', () => {
  test('TC-PMPROJ-097 @smoke @shipped Long-Running Allocations card renders with backend count on My Projects', async ({ csmPage }) => {
    const pm = new PmProjectsPage(csmPage);
    await pm.gotoMyProjects();
    await expect(pm.longRunningCard).toBeVisible();

    const stats = await pm.fetchStats();
    expect(stats.status).toBe(200);
    const apiCount = stats.body.data.longRunningAllocationCount;
    expect(typeof apiCount).toBe('number');
    expect(await pm.readLongRunningCardCount()).toBe(apiCount);

    // It is the 5th card: rendered after (to the right of) Dynamic Allocation.
    const dyn = await pm.kpiDynamicAllocation.first().boundingBox();
    const card = await pm.longRunningCard.boundingBox();
    expect(dyn && card && card.x > dyn.x, 'Long-Running card should follow the Dynamic Allocation card').toBe(true);
  });

  test('TC-PMPROJ-098 @smoke @shipped Availability tooltip and side panel show Long-Running for an employee with a >2-month allocation', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const subject = await emp.findEmployee(e => (e.projects ?? []).some((p: any) => p.isLongRunning), { allocationStage: ['LONG_RUNNING'] });
    expect(subject, 'an employee with a long-running allocation exists').not.toBeNull();
    const lr = subject.projects.find((p: any) => p.isLongRunning);

    const row = await emp.searchForEmployee(subject.name);
    const tip = await emp.readAvailabilityTooltip(row);
    expect(tip).toContain('Long-Running Allocations');
    expect(tip).toContain(`${aliasOf(lr)} Running since ${formatDdMonYyyy(lr.allocationStartDate)}`);

    await emp.page.mouse.move(0, 0);
    const drawer = await emp.openEmployeeSidePanel(row);
    const projRow = emp.sidePanelProjectRows(drawer).filter({ hasText: aliasOf(lr) }).first();
    await expect(projRow).toBeVisible();
    await expect(emp.visibleLrBadges(projRow)).toHaveCount(1);
    await expect(emp.visibleLrBadges(projRow)).toHaveText('LR');
  });

  test('TC-PMPROJ-099 @smoke @shipped Advanced filter "Allocation" applies each stage and the count matches the API', async ({ pmoPage }) => {
    test.setTimeout(300_000);
    const emp = new EmployeeDetailsPage(pmoPage);
    for (const stage of ALLOCATION_STAGES) {
      await emp.gotoEmployeeList();
      await emp.applyAllocationStages([stage]);
      await expect(pmoPage).toHaveURL(new RegExp(`adv_allocationStage=${stage}(&|$)`));
      await expect(emp.allocationChip(ALLOCATION_STAGE_LABELS[stage])).toBeVisible();

      const api = await emp.fetchEmployeesApi({ filters: { allocationStage: [stage] } });
      expect(api.status, `GET employees ${filtersParam({ allocationStage: [stage] })}`).toBe(200);
      const apiTotal: number = api.body.data.total;
      if (apiTotal === 0) await expect(emp.getEmptyState()).toBeVisible();
      else expect(await emp.readListTotal(), `UI total for ${stage}`).toBe(apiTotal);
    }
  });
});
