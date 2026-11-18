// Long-Running Allocations (Zoho 688906000093866688) — functional.
// My Projects / Project Detail cases run as CSM (csmPage, tarun.sharma — the only role that can open
// /my-projects on 6.2.0). Employee Details cases run as PMO (pmoPage) unless the case names a role.
//
// Not-yet-live handling (per repo precedent — runtime-conditional test.skip(condition, reason) is the
// lint-accepted form; declarative test.skip/test.fixme are not used):
//   @not-live-observable / @partial → the subject is picked from live API data; when none exists
//     today the test skips at runtime with the reason, and runs its full assertions once data exists.
//   @not-built → the real expectation is asserted inside test.fail(): it is expected to fail today and
//     will be reported as "unexpectedly passed" the day the feature ships, prompting removal.
import { test, expect } from '../../../fixtures/auth';
import {
  PmProjectsPage, ALLOCATION_STAGES, ALLOCATION_STAGE_LABELS, LR_BADGE_TOOLTIP, LR_CARD_TOOLTIP, UPCOMING_SECTION_TOOLTIP,
  istToday, addDays, formatDdMonYyyy, aliasOf,
} from '../../../page-objects/pm-pmo/pm-projects.page';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

/** First CSM project detail with ≥1 isUpcoming allocation (Change 5 is only observable with one). */
async function findProjectWithUpcoming(pm: PmProjectsPage): Promise<{ project: any; detail: any } | null> {
  for (const project of await pm.fetchAllProjects()) {
    const { status, body } = await pm.fetchProjectDetail(project.publicId);
    if (status === 200 && (body.data.employees ?? []).some((e: any) => e.isUpcoming)) return { project, detail: body.data };
  }
  return null;
}

test.describe('PM & PMO — Long-Running Allocations — Functional — My Projects (CSM)', () => {
  let pm: PmProjectsPage;

  test.beforeEach(async ({ csmPage }) => {
    pm = new PmProjectsPage(csmPage);
    await pm.gotoMyProjects();
  });

  test('TC-PMPROJ-100 @functional @shipped Clicking the Long-Running card filters the project list and sets aria-pressed', async ({ csmPage }) => {
    await expect(pm.longRunningCard).toHaveAttribute('aria-pressed', 'false');
    const reqPromise = csmPage.waitForRequest(r => /\/api\/v1\/pm-projects\?/.test(r.url()) && decodeURIComponent(r.url()).includes('"allocationStage":["LONG_RUNNING"]'));
    await pm.toggleLongRunningCard();
    await reqPromise;
    await expect(pm.longRunningCard).toHaveAttribute('aria-pressed', 'true');
    await expect(csmPage).toHaveURL(/\/my-projects\?adv_allocationStage=LONG_RUNNING$/);

    const apiProjects = await pm.fetchAllProjects({ allocationStage: ['LONG_RUNNING'] });
    for (const p of apiProjects) {
      expect((p.employees ?? []).some((e: any) => e.isLongRunning), `${p.name} listed under LONG_RUNNING has an LR employee`).toBe(true);
    }
    expect((await pm.listedProjectNames()).sort()).toEqual(apiProjects.map(p => p.name).sort());
  });

  test('TC-PMPROJ-101 @functional @shipped Clicking the active Long-Running card again clears the filter', async ({ csmPage }) => {
    await pm.toggleLongRunningCard();
    await expect(pm.longRunningCard).toHaveAttribute('aria-pressed', 'true');
    await pm.toggleLongRunningCard();
    await expect(pm.longRunningCard).toHaveAttribute('aria-pressed', 'false');
    await expect(csmPage).not.toHaveURL(/adv_allocationStage/);
    const unfiltered = await pm.fetchAllProjects();
    expect(await pm.readResultsTotal()).toBe(unfiltered.length);
  });

  test('TC-PMPROJ-102 @functional @partial Long-Running card filter excludes projects without any long-running allocation', async () => {
    const all = await pm.fetchAllProjects();
    const withoutLr = all.filter(p => !(p.employees ?? []).some((e: any) => e.isLongRunning));
    test.skip(withoutLr.length === 0, `PARTIAL: all ${all.length} CSM projects have ≥1 long-running allocation today — exclusion is not observable`);
    await pm.toggleLongRunningCard();
    const listed = await pm.listedProjectNames();
    for (const p of withoutLr) expect(listed, `${p.name} has no LR allocation`).not.toContain(p.name);
    for (const p of all.filter(x => !withoutLr.includes(x))) expect(listed).toContain(p.name);
  });

  test('TC-PMPROJ-103 @functional @shipped Card info icon tooltip explains the Long-Running definition', async () => {
    await expect(pm.longRunningCardInfoIcon).toBeVisible();
    expect(await pm.hoverForTooltip(pm.longRunningCardInfoIcon)).toBe(LR_CARD_TOOLTIP);
  });

  test('TC-PMPROJ-104 @functional @shipped LR badge on Allocated Employees chips shows a tooltip for long-running allocations only', async () => {
    const projects = await pm.fetchAllProjects();
    let lrChecked = 0; let nonLrChecked = 0;
    for (const p of projects) {
      const row = pm.projectRow(p.name);
      const byName = new Map<string, boolean[]>();
      for (const e of p.employees ?? []) byName.set(e.name, [...(byName.get(e.name) ?? []), !!e.isLongRunning]);
      for (const [name, flags] of byName) {
        if (flags.length !== 1) continue; // same person twice on one project — chip → allocation is ambiguous
        const chip = pm.employeeChip(row, name);
        if ((await chip.count()) === 0) continue; // collapsed into "+N" overflow
        await expect(chip.locator('[aria-label="Long-Running"]'), `${p.name} / ${name} isLongRunning=${flags[0]}`).toHaveCount(flags[0] ? 1 : 0);
        if (flags[0]) lrChecked++; else nonLrChecked++;
      }
    }
    expect(lrChecked, 'at least one visible LR chip was compared').toBeGreaterThan(0);
    expect(nonLrChecked, 'at least one visible non-LR chip was compared').toBeGreaterThan(0);
    expect(await pm.hoverForTooltip(pm.visibleTableLrBadges.first())).toBe(LR_BADGE_TOOLTIP);
  });

  test('TC-PMPROJ-105 @functional @shipped @needs-verification Long-Running count is independent of the time-range selector', async () => {
    test.info().annotations.push({ type: 'needs-verification', description: 'Rule is speculative — verify with a human before treating a failure as a confirmed regression.' });
    const before = await pm.readLongRunningCardCount();
    for (const range of ['Last 30 days', 'Last 3 months']) {
      await pm.selectTimeRange(range);
      await expect(pm.timeRangeTrigger).toHaveText(range);
      expect(await pm.readLongRunningCardCount(), `card after "${range}"`).toBe(before);
    }
  });

  test('TC-PMPROJ-194 @functional @shipped Long-Running card label format', async () => {
    test.info().annotations.push({ type: 'needs-verification', description: 'Task text says "Long-Running Allocations: N"; the live build renders the label and number without a colon, like the other cards. Confirm with the business.' });
    const text = (await pm.longRunningCard.innerText()).replace(/\s+/g, ' ').trim();
    expect(text).toMatch(/^Long-Running Allocations \d+$/);
  });

  test('TC-PMPROJ-123 @functional @not-built My Projects offers an Allocation dropdown with the 4 stage options', async ({ csmPage }) => {
    test.fail(true, 'NOT BUILT on dev 6.2.0: GET /api/v1/pm-projects/filters returns allocationStage but /my-projects has no Allocation filter control (only column filters Project Name / CSM / Account Grade).');
    const control = csmPage.getByRole('button', { name: 'Open advanced filter' }).or(csmPage.getByRole('button', { name: /^Filter by Allocation/ }));
    await expect(control.first()).toBeVisible({ timeout: 5_000 });
    await control.first().click();
    for (const label of Object.values(ALLOCATION_STAGE_LABELS)) await expect(csmPage.getByText(label, { exact: true }).first()).toBeVisible();
  });

  test('TC-PMPROJ-124 @functional @shipped My Projects API allocationStage filter returns the right projects for each stage', async () => {
    const today = istToday();
    const inRange = (d: string | null | undefined, from: string, to: string) => !!d && d.slice(0, 10) >= from && d.slice(0, 10) <= to;
    const matches: Record<string, (e: any) => boolean> = {
      LONG_RUNNING: e => !!e.isLongRunning,
      UPCOMING: e => !!e.isUpcoming,
      RECENT: e => inRange(e.allocationStartDate, addDays(today, -30), today) || inRange(e.allocationEndDate, addDays(today, -30), today),
      UPCOMING_DEALLOCATION: e => inRange(e.allocationEndDate, today, addDays(today, 30)),
    };
    const unfiltered = await pm.fetchAllProjects();
    for (const stage of ALLOCATION_STAGES) {
      const filtered = await pm.fetchAllProjects({ allocationStage: [stage] });
      expect(filtered.length).toBeLessThanOrEqual(unfiltered.length);
      for (const p of filtered) {
        expect((p.employees ?? []).some(matches[stage]), `${stage}: ${p.name} has ≥1 matching employee`).toBe(true);
      }
    }
  });
});

test.describe('PM & PMO — Long-Running Allocations — Functional — Project Detail (CSM)', () => {
  let pm: PmProjectsPage;

  test.beforeEach(async ({ csmPage }) => {
    pm = new PmProjectsPage(csmPage);
    await pm.gotoMyProjects();
  });

  test('TC-PMPROJ-106 @functional @not-live-observable Upcoming Allocations collapsible section lists future-start employees below the active table', async () => {
    const hit = await findProjectWithUpcoming(pm);
    test.skip(!hit, 'NOT LIVE-OBSERVABLE: no CSM project has an upcoming allocation today (section renders only when N > 0)');
    const upcoming = hit!.detail.employees.filter((e: any) => e.isUpcoming);
    await pm.gotoProjectDetail(hit!.project.publicId);
    // Count is a separate <span> (CSS gap, no text space): textContent is "Upcoming Allocations(N)"; assert the accessible name.
    await expect(pm.upcomingAllocationsTrigger).toHaveAccessibleName(new RegExp(`^Upcoming Allocations \\(${upcoming.length}\\)$`));
    await expect(pm.upcomingAllocationsTrigger).toHaveAttribute('aria-expanded', 'false');
    await pm.upcomingAllocationsTrigger.click();
    await expect(pm.upcomingAllocationsTrigger).toHaveAttribute('aria-expanded', 'true');
    for (const e of upcoming) await expect(pm.page.locator('table').last().getByText(e.name).first()).toBeVisible();
  });

  test('TC-PMPROJ-107 @functional @not-live-observable Upcoming employees are excluded from the active allocations table', async () => {
    const hit = await findProjectWithUpcoming(pm);
    test.skip(!hit, 'NOT LIVE-OBSERVABLE: no CSM project has an upcoming allocation today');
    const active = hit!.detail.employees.filter((e: any) => !e.isUpcoming);
    await pm.gotoProjectDetail(hit!.project.publicId);
    await expect(pm.activeAllocationsTab).toHaveText(new RegExp(`${active.length}$`));
    for (const e of hit!.detail.employees.filter((x: any) => x.isUpcoming)) {
      await expect(pm.page.locator('table').first().getByRole('button', { name: `Open actions for ${e.name}` })).toHaveCount(0);
    }
  });

  test('TC-PMPROJ-108 @functional @not-live-observable Upcoming section tooltip describes future-start allocations', async () => {
    const hit = await findProjectWithUpcoming(pm);
    test.skip(!hit, 'NOT LIVE-OBSERVABLE: no CSM project has an upcoming allocation today');
    await pm.gotoProjectDetail(hit!.project.publicId);
    expect(await pm.hoverForTooltip(pm.upcomingAllocationsTrigger)).toBe(UPCOMING_SECTION_TOOLTIP);
  });

  test('TC-PMPROJ-109 @functional @shipped Long-Running badge on Project Detail rows matches API flags', async () => {
    const projects = await pm.fetchAllProjects();
    const target = projects.sort((a, b) => b.employees.filter((e: any) => e.isLongRunning).length - a.employees.filter((e: any) => e.isLongRunning).length)[0];
    const { status, body } = await pm.fetchProjectDetail(target.publicId);
    expect(status).toBe(200);
    const activeLr = body.data.employees.filter((e: any) => !e.isUpcoming && e.isLongRunning);
    expect(activeLr.length, `${target.name} has LR allocations`).toBeGreaterThan(0);
    await pm.gotoProjectDetail(target.publicId);
    await expect(pm.visibleTableLrBadges).toHaveCount(activeLr.length);
    for (const e of activeLr.slice(0, 5)) {
      await expect(pm.visibleLrBadgesIn(pm.detailRow(e.name).first()), `${e.name} row carries LR`).toHaveCount(1);
    }
    expect(await pm.hoverForTooltip(pm.visibleTableLrBadges.first())).toBe(LR_BADGE_TOOLTIP);
  });

  test('TC-PMPROJ-193 @functional @not-live-observable Upcoming section behaviour when a project has zero upcoming allocations', async () => {
    test.info().annotations.push({ type: 'needs-verification', description: 'Requirement unclear: hidden section vs always-visible empty state. Asserting live behaviour (hidden).' });
    let targetId: string | null = null;
    for (const p of await pm.fetchAllProjects()) {
      const d = await pm.fetchProjectDetail(p.publicId);
      if (d.status === 200 && !(d.body.data.employees ?? []).some((e: any) => e.isUpcoming)) { targetId = p.publicId; break; }
    }
    test.skip(!targetId, 'Every CSM project has upcoming allocations — no zero-upcoming project to observe');
    await pm.gotoProjectDetail(targetId!);
    await expect(pm.activeAllocationsTab).toBeVisible();
    await expect(pm.page.getByText(/Upcoming Allocations/)).toHaveCount(0);
  });
});

test.describe('PM & PMO — Long-Running Allocations — Functional — Employee Details', () => {
  test('TC-PMPROJ-110 @functional @shipped Availability tooltip "Running since" date matches the allocation start date', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const subject = await emp.findEmployee(e => (e.projects ?? []).some((p: any) => p.isLongRunning), { allocationStage: ['LONG_RUNNING'] });
    expect(subject).not.toBeNull();
    const row = await emp.searchForEmployee(subject.name);
    const tip = await emp.readAvailabilityTooltip(row);
    for (const p of subject.projects.filter((x: any) => x.isLongRunning)) {
      expect(tip).toContain(`${aliasOf(p)} Running since ${formatDdMonYyyy(p.allocationStartDate)}`);
    }
  });

  test('TC-PMPROJ-111 @functional @shipped Availability tooltip has no Long-Running section for an employee without long-running allocations', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const subject = await emp.findEmployee(e => {
      const dated = (e.projects ?? []).filter((p: any) => p.allocationStartDate);
      return dated.length > 0 && dated.every((p: any) => !p.isLongRunning);
    }, { allocationStage: ['UPCOMING_DEALLOCATION'] });
    expect(subject, 'an employee with dated allocations but no LR allocation').not.toBeNull();
    const row = await emp.searchForEmployee(subject.name);
    const tip = await emp.readAvailabilityTooltip(row);
    expect(tip).toContain('Availability Details');
    expect(tip).not.toContain('Long-Running Allocations');
  });

  test('TC-PMPROJ-112 @functional @shipped Employee with multiple long-running allocations lists each in the tooltip and side panel', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const subject = await emp.findEmployee(e => new Set((e.projects ?? []).filter((p: any) => p.isLongRunning).map((p: any) => aliasOf(p))).size >= 2, { allocationStage: ['LONG_RUNNING'] }, 13);
    test.skip(!subject, 'No employee has two long-running allocations on different projects today');
    const lr = subject.projects.filter((p: any) => p.isLongRunning);
    const row = await emp.searchForEmployee(subject.name);
    const tip = await emp.readAvailabilityTooltip(row);
    for (const p of lr) expect(tip).toContain(`${aliasOf(p)} Running since`);
    await pmoPage.mouse.move(0, 0);
    const drawer = await emp.openEmployeeSidePanel(row);
    const rows = emp.sidePanelProjectRows(drawer);
    for (const p of lr) await expect(emp.visibleLrBadges(rows.filter({ hasText: aliasOf(p) }).first())).toHaveCount(1);
    const lrAliases = new Set(lr.map((p: any) => aliasOf(p)));
    for (const p of subject.projects.filter((x: any) => !lrAliases.has(aliasOf(x)))) {
      await expect(emp.visibleLrBadges(rows.filter({ hasText: aliasOf(p) }).first()), `${aliasOf(p)} has no LR badge`).toHaveCount(0);
    }
  });

  test('TC-PMPROJ-113 @functional @shipped Projects column shows an LR badge next to long-running project chips', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const { items } = await emp.applyAllocationStages(['LONG_RUNNING']);
    let lrSeen = 0; let plainSeen = 0;
    for (const e of items.slice(0, 20)) {
      const row = emp.employeeRow(e.name);
      if ((await row.count()) === 0) continue;
      for (const p of e.projects ?? []) {
        const chip = emp.projectChip(row, aliasOf(p));
        if ((await chip.count()) !== 1) continue; // overflowed into "+N" or duplicated alias
        await expect(chip.locator('[aria-label="Long-Running"]'), `${e.name} / ${aliasOf(p)} isLongRunning=${!!p.isLongRunning}`).toHaveCount(p.isLongRunning ? 1 : 0);
        if (p.isLongRunning) lrSeen++; else plainSeen++;
      }
    }
    expect(lrSeen, 'visible LR project chips compared').toBeGreaterThan(0);
    expect(plainSeen, 'visible non-LR project chips compared').toBeGreaterThan(0);
    const badge = emp.visibleLrBadges(pmoPage.locator('table tbody')).first();
    await badge.hover();
    await expect(emp.badgeTooltip).toHaveText(LR_BADGE_TOOLTIP);
  });

  test('TC-PMPROJ-114 @functional @shipped Side panel Projects section shows the Long-Running label for PMO', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const subject = await emp.findEmployee(e => (e.projects ?? []).some((p: any) => p.isLongRunning), { allocationStage: ['LONG_RUNNING'] });
    expect(subject).not.toBeNull();
    const drawer = await emp.openEmployeeSidePanel(await emp.searchForEmployee(subject.name));
    const rows = emp.sidePanelProjectRows(drawer);
    for (const p of subject.projects) {
      const r = rows.filter({ hasText: aliasOf(p) }).first();
      await expect(emp.visibleLrBadges(r), `${aliasOf(p)} LR=${!!p.isLongRunning}`).toHaveCount(p.isLongRunning ? 1 : 0);
    }
    await emp.visibleLrBadges(drawer).first().hover();
    await expect(emp.badgeTooltip).toHaveText(LR_BADGE_TOOLTIP);
  });

  test('TC-PMPROJ-115 @functional @shipped Side panel Projects section shows the Long-Running label for TM', async ({ tmPage }) => {
    const emp = new EmployeeDetailsPage(tmPage);
    await emp.gotoEmployeeList();
    const subject = await emp.findEmployee(e => (e.projects ?? []).some((p: any) => p.isLongRunning), { allocationStage: ['LONG_RUNNING'] });
    expect(subject, 'TM scope contains an LR employee').not.toBeNull();
    const drawer = await emp.openEmployeeSidePanel(await emp.searchForEmployee(subject.name));
    const rows = emp.sidePanelProjectRows(drawer);
    for (const p of subject.projects) {
      await expect(emp.visibleLrBadges(rows.filter({ hasText: aliasOf(p) }).first()), `${aliasOf(p)} LR=${!!p.isLongRunning}`).toHaveCount(p.isLongRunning ? 1 : 0);
    }
    await emp.visibleLrBadges(drawer).first().hover();
    await expect(emp.badgeTooltip).toHaveText(LR_BADGE_TOOLTIP);
  });

  test('TC-PMPROJ-116 @functional @shipped Side panel does not show the LR label on ended/past projects', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const everyone = await emp.fetchAllEmployees(undefined, 'pmo');
    const withPast = everyone.filter(e => (e.pastProjects ?? []).length > 0);
    // Prefer a past allocation that would have been long-running by age — the meaningful case.
    const subject = withPast.find(e => e.pastProjects.some((p: any) => p.allocationStartDate && p.allocationStartDate < addDays(istToday(), -62))) ?? withPast[0];
    expect(subject, 'an employee with past projects').toBeTruthy();
    const drawer = await emp.openEmployeeSidePanel(await emp.searchForEmployee(subject.name));
    const trigger = emp.sidePanelSectionTrigger(drawer, /^Past Projects \(\d+\)/);
    await trigger.click();
    const pastRows = emp.sidePanelPastProjectRows(drawer);
    await expect(pastRows.first()).toBeVisible();
    await expect(emp.visibleLrBadges(pastRows)).toHaveCount(0);
  });

  test('TC-PMPROJ-117 @functional @shipped Selecting two Allocation options returns the union of both stages', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const totals: Record<string, number> = {};
    for (const s of ['LONG_RUNNING', 'UPCOMING'] as const) totals[s] = (await emp.fetchEmployeesApi({ filters: { allocationStage: [s] } })).body.data.total;
    const both = (await emp.fetchEmployeesApi({ filters: { allocationStage: ['LONG_RUNNING', 'UPCOMING'] } })).body.data.total;
    await emp.applyAllocationStages(['LONG_RUNNING', 'UPCOMING']);
    await expect(emp.allocationChip(ALLOCATION_STAGE_LABELS.LONG_RUNNING).or(emp.allocationChip(ALLOCATION_STAGE_LABELS.UPCOMING)).first()).toBeVisible();
    expect(await emp.readListTotal()).toBe(both);
    expect(both).toBeGreaterThanOrEqual(Math.max(totals.LONG_RUNNING, totals.UPCOMING));
    expect(both).toBeLessThanOrEqual(totals.LONG_RUNNING + totals.UPCOMING);
  });

  test('TC-PMPROJ-118 @functional @shipped Clearing the Allocation filter restores the full list', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const unfiltered = (await emp.fetchEmployeesApi()).body.data.total;
    await emp.applyAllocationStages(['RECENT']);
    await expect(emp.allocationChip(ALLOCATION_STAGE_LABELS.RECENT)).toBeVisible();
    await emp.allocationChipRemoveButton(ALLOCATION_STAGE_LABELS.RECENT).click();
    await expect(pmoPage).not.toHaveURL(/adv_allocationStage/);
    await expect.poll(() => emp.readListTotal(), { timeout: 30_000 }).toBe(unfiltered);
  });

  test('TC-PMPROJ-119 @functional @shipped Upcoming Allocation filter returns only employees with a future-start allocation', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const today = istToday();
    const { total } = await emp.applyAllocationStages(['UPCOMING']);
    const all = await emp.fetchAllEmployees({ allocationStage: ['UPCOMING'] }, 'pmo');
    expect(all.length).toBe(total);
    for (const e of all) {
      expect((e.projects ?? []).some((p: any) => p.isUpcoming && String(p.allocationStartDate).slice(0, 10) > today), `${e.name} has a future-start allocation`).toBe(true);
    }
  });

  test('TC-PMPROJ-120 @functional @shipped Recent Allocation filter returns only allocations started or ended in the last 30 days', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const today = istToday(); const from = addDays(today, -30);
    const all = await emp.fetchAllEmployees({ allocationStage: ['RECENT'] }, 'pmo');
    expect(all.length).toBeGreaterThan(0);
    const inWin = (d: any) => !!d && String(d).slice(0, 10) >= from && String(d).slice(0, 10) <= today;
    const offenders = all.filter(e => ![...(e.projects ?? []), ...(e.pastProjects ?? [])].some((p: any) => inWin(p.allocationStartDate) || inWin(p.allocationEndDate)));
    expect(offenders.map(e => e.name), `RECENT employees with no start/end in [${from}, ${today}]`).toEqual([]);
  });

  test('TC-PMPROJ-121 @functional @shipped Upcoming Deallocation filter returns employees whose allocation ends within the next 30 days', async ({ pmoPage }) => {
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    const today = istToday(); const to = addDays(today, 30);
    const all = await emp.fetchAllEmployees({ allocationStage: ['UPCOMING_DEALLOCATION'] }, 'pmo');
    expect(all.length).toBeGreaterThan(0);
    const offenders = all.filter(e => !(e.projects ?? []).some((p: any) => p.allocationEndDate && String(p.allocationEndDate).slice(0, 10) >= today && String(p.allocationEndDate).slice(0, 10) <= to));
    expect(offenders.map(e => e.name), `UPCOMING_DEALLOCATION employees with no end date in [${today}, ${to}]`).toEqual([]);
  });

  test('TC-PMPROJ-122 @functional @shipped @needs-verification Allocation filter persists after a page reload and combines with other filters', async ({ pmoPage }) => {
    test.info().annotations.push({ type: 'needs-verification', description: 'Rule is speculative — verify with a human before treating a failure as a confirmed regression.' });
    const emp = new EmployeeDetailsPage(pmoPage);
    await emp.gotoEmployeeList();
    await emp.setAllocationStages(['LONG_RUNNING']);
    await emp.selectDepartmentFilter('FRONT END');
    const { url } = await emp.saveAdvancedFilterAndWait();
    expect(decodeURIComponent(url)).toContain('"allocationStage":["LONG_RUNNING"]');
    await pmoPage.reload({ waitUntil: 'domcontentloaded' });
    await expect(emp.allocationChip(ALLOCATION_STAGE_LABELS.LONG_RUNNING)).toBeVisible({ timeout: 30_000 });
    await expect(pmoPage.locator('[data-slot="badge"]').filter({ hasText: 'FRONT END' }).first()).toBeVisible();
    const api = await pmoPage.request.get(url);
    expect(api.status()).toBe(200);
    await expect.poll(() => emp.readListTotal(), { timeout: 30_000 }).toBe((await api.json()).data.total);
  });
});
