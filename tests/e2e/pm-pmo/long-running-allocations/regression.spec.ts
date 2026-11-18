// Long-Running Allocations (Zoho 688906000093866688) — regression.
// Destructive cases on shared dev data (deallocation) are recorded as manual with a runtime skip, per
// the repo precedent (tests/e2e/dashboard/regression.spec.ts TC-DASH-040). @known-defect cases assert
// the correct behaviour inside test.fail().
import { test, expect } from '../../../fixtures/auth';
import { PmProjectsPage, ALLOCATION_STAGE_LABELS, apiGet, istToday, addDays, formatDdMonYyyy, aliasOf } from '../../../page-objects/pm-pmo/pm-projects.page';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

test.describe('PM & PMO — Long-Running Allocations — Regression — My Projects (CSM)', () => {
  let pm: PmProjectsPage;

  test.beforeEach(async ({ csmPage }) => {
    pm = new PmProjectsPage(csmPage);
    await pm.gotoMyProjects();
  });

  test('TC-PMPROJ-178 @regression @shipped Existing 4 stats cards are unchanged after adding the Long-Running card', async () => {
    const stats = (await pm.fetchStats()).body.data;
    await expect.poll(() => pm.getKpis(), { timeout: 20_000 }).toEqual({
      totalActiveProjects: stats.totalProjects,
      totalAllocation: stats.totalAllocatedEmployees,
      fixedAllocation: stats.fixedAllocationCount,
      dynamicAllocation: stats.dynamicAllocationCount,
    });
    expect(stats.fixedAllocationCount + stats.dynamicAllocationCount).toBe(stats.totalAllocatedEmployees);
    expect(await pm.readResultsTotal()).toBe(stats.totalProjects);
  });

  test('TC-PMPROJ-179 @regression @shipped Active + upcoming + past partition matches the project detail API', async () => {
    const projects = await pm.fetchAllProjects();
    let best: { id: string; detail: any } | null = null;
    for (const p of projects) {
      const d = await pm.fetchProjectDetail(p.publicId);
      if (d.status === 200 && (!best || d.body.data.pastEmployees.length > best.detail.pastEmployees.length)) best = { id: p.publicId, detail: d.body.data };
    }
    expect(best).not.toBeNull();
    const { employees, pastEmployees } = best!.detail;
    const active = employees.filter((e: any) => !e.isUpcoming);
    const upcoming = employees.filter((e: any) => e.isUpcoming);
    await pm.gotoProjectDetail(best!.id);
    await expect(pm.activeAllocationsTab).toHaveText(new RegExp(`Active Allocations\\s*${active.length}$`));
    await expect(pm.pastAllocationsTab).toHaveText(new RegExp(`Past Allocations\\s*${pastEmployees.length}$`));
    if (upcoming.length === 0) await expect(pm.upcomingAllocationsTrigger).toHaveCount(0);
    else await expect(pm.upcomingAllocationsTrigger).toHaveText(new RegExp(`Upcoming Allocations\\s*\\(${upcoming.length}\\)`));
    await pm.openPastAllocationsTab();
    await expect(pm.getAllEmployeeRows()).toHaveCount(pastEmployees.length);
    const activeIds = new Set(employees.map((e: any) => e.assignmentPublicId).filter(Boolean));
    for (const e of pastEmployees) expect(activeIds.has(e.assignmentPublicId), `${e.name} is not both active and past`).toBe(false);
  });

  test('TC-PMPROJ-182 @regression @partial Deallocation removes the Long-Running flag and decrements the card', async () => {
    test.info().annotations.push({ type: 'manual', description: 'Destructive 3-step deallocation (CSM submit → confirm → PMO "Acknowledge & Deallocate") on shared dev data — run manually or against a disposable allocation.' });
    test.skip(true, 'PARTIAL/MANUAL: destructive write on shared dev data');
  });

  test('TC-PMPROJ-183 @regression @known-defect Exited employee is not counted as Long-Running', async () => {
    test.fail(true, 'CANDIDATE DEFECT (not filed): employees already moved to pastEmployees[] (deletedAt set) keep isLongRunning=true in the /pm-projects list and are counted in longRunningAllocationCount.');
    const stats = (await pm.fetchStats()).body.data;
    let detailActiveLr = 0;
    const offenders: string[] = [];
    for (const p of await pm.fetchAllProjects()) {
      const d = (await pm.fetchProjectDetail(p.publicId)).body.data;
      const activeIds = new Set(d.employees.filter((e: any) => !e.isUpcoming).map((e: any) => e.assignmentPublicId));
      detailActiveLr += d.employees.filter((e: any) => !e.isUpcoming && e.isLongRunning).length;
      for (const e of p.employees.filter((x: any) => x.isLongRunning && !activeIds.has(x.assignmentPublicId))) offenders.push(`${p.alias ?? p.name}/${e.name}`);
    }
    expect(offenders, 'list LR allocations that are not active in the project detail (exited/past)').toEqual([]);
    expect(stats.longRunningAllocationCount, 'card count = active LR allocations across project details').toBe(detailActiveLr);
  });

  test('TC-PMPROJ-184 @regression @shipped @needs-verification Card count, list badges and stats API stay consistent after a filter round-trip', async ({ csmPage }) => {
    test.info().annotations.push({ type: 'needs-verification', description: 'Rule is speculative — verify with a human before treating a failure as a confirmed regression.' });
    const n = await pm.readLongRunningCardCount();
    await pm.toggleLongRunningCard();
    expect(await pm.readLongRunningCardCount()).toBe(n);
    await pm.toggleLongRunningCard();
    expect(await pm.readLongRunningCardCount()).toBe(n);
    await csmPage.reload({ waitUntil: 'domcontentloaded' });
    await expect(pm.longRunningCard).toBeVisible({ timeout: 30_000 });
    await expect.poll(() => pm.readLongRunningCardCount(), { timeout: 20_000 }).toBe(n);
    expect((await pm.fetchStats()).body.data.longRunningAllocationCount).toBe(n);
  });

  test('TC-PMPROJ-186 @regression @shipped Existing project list search/sort still works with the Long-Running card active', async ({ csmPage }) => {
    await pm.toggleLongRunningCard();
    const names = await pm.listedProjectNames();
    expect(names.length).toBeGreaterThan(0);
    const term = names[0].split('|')[0].trim();
    await pm.searchProjects(term);
    const filtered = await pm.listedProjectNames();
    expect(filtered.length).toBeGreaterThan(0);
    for (const n of filtered) expect(n).toContain(term);
    await expect(pm.longRunningCard).toHaveAttribute('aria-pressed', 'true');
    const sortBtn = csmPage.locator('th').filter({ hasText: 'Project Name' }).getByRole('button', { name: /^Sort/ });
    await sortBtn.click();
    await expect(pm.getAllProjectRows().first()).toBeVisible();
    await pm.searchProjects('');
    await expect(pm.longRunningCard).toHaveAttribute('aria-pressed', 'true');
    await expect(csmPage).toHaveURL(/adv_allocationStage=LONG_RUNNING/);
    expect((await pm.listedProjectNames()).sort()).toEqual([...names].sort());
    await pm.clearPersistedFilters();
  });
});

test.describe('PM & PMO — Long-Running Allocations — Regression — Employee Details (PMO)', () => {
  let emp: EmployeeDetailsPage;

  test.beforeEach(async ({ pmoPage }) => {
    emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
  });

  test('TC-PMPROJ-180 @regression @shipped Availability tooltip still shows existing Upcoming Deallocations entries', async () => {
    const today = istToday(); const to = addDays(today, 30);
    const subject = await emp.findEmployee(e => (e.projects ?? []).some((p: any) => p.allocationEndDate && p.allocationEndDate >= today && p.allocationEndDate <= to), { allocationStage: ['UPCOMING_DEALLOCATION'] });
    expect(subject).not.toBeNull();
    const ending = subject.projects.find((p: any) => p.allocationEndDate && p.allocationEndDate >= today && p.allocationEndDate <= to);
    const row = await emp.searchForEmployee(subject.name);
    const tip = await emp.readAvailabilityTooltip(row);
    expect(tip).toContain('Upcoming Deallocations');
    expect(tip).toContain(`${aliasOf(ending)} Ends on ${formatDdMonYyyy(ending.allocationEndDate)}`);
    await expect(row).toContainText(`${subject.availabilityPercentage}%`);
  });

  test('TC-PMPROJ-181 @regression @shipped Existing advanced filter groups still work together with Allocation', async ({ pmoPage }) => {
    const groups = ['Departments', 'Designation', 'Available since', 'Log Hours', 'Availability %', 'Projects', 'Reporting Manager', 'Experience', 'Employee', 'Stacks', 'Skills', 'Night Shift Preference', 'Leave & Status', 'Employment Type', 'Visa Country', 'Visa Status', 'Allocation', 'Employee Origin', 'Cohort', 'Remaining Allocation', 'UP (System)', 'UP (Manual)'];
    await emp.openAdvancedFilterPanel();
    const present = (await emp.getVisibleAdvancedFilterSectionButtons().allInnerTexts()).map(t => t.replace(/\s+\d+$/, '').trim());
    for (const g of groups) expect(present.some(p => p.startsWith(g)), `group "${g}" present`).toBe(true);
    await emp.expandAdvancedFilterSection(/^Leave & Status/);
    await emp.getAdvancedFilterPanel().getByRole('checkbox', { name: 'Notice Period', exact: true }).click();
    await emp.setAllocationStages(['UPCOMING_DEALLOCATION']);
    const { url, total } = await emp.saveAdvancedFilterAndWait();
    await expect(emp.allocationChip(ALLOCATION_STAGE_LABELS.UPCOMING_DEALLOCATION)).toBeVisible();
    await expect(pmoPage.locator('[data-slot="badge"]').filter({ hasText: 'Notice Period' }).first()).toBeVisible();
    const again = await pmoPage.request.get(url);
    expect((await again.json()).data.total).toBe(total);
    if (total === 0) await expect(emp.getEmptyState()).toBeVisible();
    else expect(await emp.readListTotal()).toBe(total);
  });

  test('TC-PMPROJ-185 @regression @shipped @needs-verification Allocation filter updates the result count and empty state (filtering)', async ({ pmoPage }) => {
    test.info().annotations.push({ type: 'needs-verification', description: 'Rule is speculative — verify with a human before treating a failure as a confirmed regression.' });
    const upcoming = await emp.fetchAllEmployees({ allocationStage: ['UPCOMING'] }, 'pmo');
    const withUpcoming = new Set(upcoming.map(e => e.department?.name));
    const depts = (await apiGet(pmoPage, '/api/v1/departments?limit=100&sortBy=name&sortOrder=asc&page=1')).body?.data?.departments ?? [];
    const empty = depts.find((d: any) => d.name && !withUpcoming.has(d.name) && /^[A-Z .&]+$/.test(d.name));
    test.skip(!empty, 'Every department has an upcoming allocation — no zero-match combination');
    const unfiltered = await emp.readListTotal();
    await emp.setAllocationStages(['UPCOMING']);
    await emp.selectDepartmentFilter(empty.name);
    const { total } = await emp.saveAdvancedFilterAndWait();
    expect(total).toBe(0);
    await expect(emp.getEmptyState()).toBeVisible();
    expect((await emp.getEmptyState().innerText()).trim()).not.toMatch(/^(-|—|N\/A|null)?$/i);
    await pmoPage.getByRole('button', { name: 'Clear filter' }).click();
    await expect.poll(() => emp.readListTotal(), { timeout: 30_000 }).toBe(unfiltered);
  });

  test('TC-PMPROJ-187 @regression @shipped Empty-data placeholders in the side panel use readable words', async () => {
    const subject = await emp.findEmployee(e => (e.projects ?? []).some((p: any) => p.isLongRunning) && (e.projects ?? []).some((p: any) => !p.allocationStartDate), { allocationStage: ['LONG_RUNNING'] });
    expect(subject, 'an LR employee who also has non-project (L&D/Unassigned/Ontime) rows').not.toBeNull();
    const drawer = await emp.openEmployeeSidePanel(await emp.searchForEmployee(subject.name));
    const rows = emp.sidePanelProjectRows(drawer);
    await expect(rows.first()).toBeVisible();
    const n = await rows.count();
    for (let i = 0; i < n; i++) {
      const since = (await rows.nth(i).locator('td').last().innerText()).trim();
      expect(since, `row ${i} SINCE cell`).not.toMatch(/^(-|—|N\/A|null|undefined)?$/i);
    }
    for (const p of subject.projects.filter((x: any) => !x.allocationStartDate)) {
      await expect(rows.filter({ hasText: aliasOf(p) }).first().locator('td').last()).toHaveText('No data available');
    }
  });
});
