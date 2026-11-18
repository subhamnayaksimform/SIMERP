// Long-Running Allocations (Zoho 688906000093866688) — boundary.
// Date boundaries move every day, so every case computes "today" (server IST) at runtime and picks
// its subject allocation from a full PMO employees-API snapshot (cached per worker). When today's
// data has no allocation sitting exactly on a boundary the case skips at runtime with the reason
// (runtime-conditional test.skip — the lint-accepted form) and runs fully on days that do.
// Live rule (liveGrounding.dateRuleEvidence): Long-Running ⇔ still running AND start < today − 2
// calendar months. Upcoming ⇔ start > today. Recent / Upcoming Deallocation windows are 30 days.
import { test, expect } from '../../../fixtures/auth';
import type { Page } from '@playwright/test';
import * as path from 'path';
import {
  PmProjectsPage, EmployeeAllocation, flattenAllocations, expectedLongRunning, istToday, addDays, minusCalendarMonths,
  formatDdMonYyyy, LR_BADGE_TOOLTIP,
} from '../../../page-objects/pm-pmo/pm-projects.page';
import { EmployeeDetailsPage } from '../../../page-objects/employee/employee-details.page';

const PMO = 'pmo';

async function snapshot(emp: EmployeeDetailsPage, filters?: Record<string, unknown>): Promise<any[]> {
  return emp.fetchAllEmployees(filters, PMO);
}

async function stageIds(emp: EmployeeDetailsPage, stage: string): Promise<Set<string>> {
  return new Set((await snapshot(emp, { allocationStage: [stage] })).map(e => e.publicId));
}

/** Employees whose name is unique in the snapshot — so a name search lands on the right person. */
function uniqueNames(all: any[]): Set<string> {
  const n = new Map<string, number>();
  for (const e of all) n.set(e.name, (n.get(e.name) ?? 0) + 1);
  return new Set([...n].filter(([, c]) => c === 1).map(([k]) => k));
}

/**
 * Dev has allocations whose allocationEndDate disagrees with the last timeline segment's effectiveTo
 * (e.g. end 2026-08-30 vs timeline 2026-07-16 — see liveGrounding.candidateDefectsObserved); the
 * backend's stage windows follow the timeline. Boundary subjects must be internally consistent or
 * the case measures the data bug instead of the rule.
 */
function consistent(a: EmployeeAllocation): boolean {
  if (a.timeline.length === 0) return true;
  const last = a.timeline[a.timeline.length - 1];
  const to = last?.effectiveTo ? String(last.effectiveTo).slice(0, 10) : null;
  return String(a.timeline[0]?.effectiveFrom ?? '').slice(0, 10) === a.start && to === a.end;
}

/** Open the subject's side panel and assert the LR badge on that project row. */
async function expectSidePanelLr(emp: EmployeeDetailsPage, a: EmployeeAllocation, expected: boolean): Promise<void> {
  const drawer = await emp.openEmployeeSidePanel(await emp.searchForEmployee(a.employeeName));
  const row = emp.sidePanelProjectRows(drawer).filter({ hasText: a.alias }).first();
  await expect(row, `${a.employeeName} / ${a.alias} in side panel`).toBeVisible();
  await expect(emp.visibleLrBadges(row), `${a.employeeName} / ${a.alias} start ${a.start} LR=${expected}`).toHaveCount(expected ? 1 : 0);
}

test.describe('PM & PMO — Long-Running Allocations — Boundary — Employee Details (PMO)', () => {
  let emp: EmployeeDetailsPage;
  let today: string;
  let all: any[];
  let allocs: EmployeeAllocation[];
  let unique: Set<string>;
  const running = (a: EmployeeAllocation) => !a.past && (!a.end || a.end >= today) && a.start <= today;
  // Non-billable projects (OnTime / Unassigned / L&D) are never long-running by design (backend
  // isLongRunningAllocation(), SI4-T1374) — cases that expect LR=true only take billable subjects.
  const billable = (a: EmployeeAllocation) => a.isBillable !== false;

  test.beforeEach(async ({ pmoPage }) => {
    test.setTimeout(240_000);
    emp = new EmployeeDetailsPage(pmoPage);
    today = istToday();
    await emp.gotoEmployeeList();
    all = await snapshot(emp);
    allocs = flattenAllocations(all, true).filter(consistent);
    unique = uniqueNames(all);
  });

  test('TC-PMPROJ-135 @boundary @shipped Start date exactly 2 calendar months ago is NOT Long-Running', async () => {
    const boundary = minusCalendarMonths(today, 2);
    const hits = allocs.filter(a => running(a) && a.start === boundary);
    test.skip(hits.length === 0, `No running allocation starts exactly on ${boundary} (today ${today} − 2 months)`);
    for (const a of hits) expect(a.isLongRunning, `${a.employeeName} / ${a.alias} start ${a.start}`).toBe(false);
    const lrIds = await stageIds(emp, 'LONG_RUNNING');
    const soleReason = hits.find(a => unique.has(a.employeeName) && !allocs.some(o => o.employeeId === a.employeeId && o !== a && o.isLongRunning));
    if (soleReason) {
      expect(lrIds.has(soleReason.employeeId), `${soleReason.employeeName} must not be in the Long Running filter because of this allocation`).toBe(false);
      await expectSidePanelLr(emp, soleReason, false);
    }
  });

  test('TC-PMPROJ-136 @boundary @shipped Start date 2 calendar months + 1 day ago IS Long-Running', async () => {
    const boundary = addDays(minusCalendarMonths(today, 2), -1);
    const hits = allocs.filter(a => running(a) && billable(a) && a.start === boundary);
    test.skip(hits.length === 0, `No running billable allocation starts exactly on ${boundary}`);
    for (const a of hits) expect(a.isLongRunning, `${a.employeeName} / ${a.alias} start ${a.start}`).toBe(true);
    const subject = hits.find(a => unique.has(a.employeeName));
    test.skip(!subject, 'Boundary allocations exist but only for non-unique names — UI lookup would be ambiguous');
    const row = await emp.searchForEmployee(subject!.employeeName);
    expect(await emp.readAvailabilityTooltip(row)).toContain(`${subject!.alias} Running since ${formatDdMonYyyy(boundary)}`);
    await emp.page.mouse.move(0, 0);
    await expectSidePanelLr(emp, subject!, true);
  });

  test('TC-PMPROJ-137 @boundary @shipped 60-day and 61-day-old allocations are not Long-Running (month-based rule)', async () => {
    const d60 = addDays(today, -60); const d61 = addDays(today, -61);
    const hits = allocs.filter(a => running(a) && (a.start === d60 || a.start === d61));
    test.skip(hits.length === 0, `No running allocation starts on ${d61} or ${d60}`);
    for (const a of hits) {
      expect(a.isLongRunning, `${a.employeeName} / ${a.alias} start ${a.start} (month rule → ${expectedLongRunning(a.start, a.end, today, a.isBillable)})`).toBe(expectedLongRunning(a.start, a.end, today, a.isBillable));
    }
    test.info().annotations.push({ type: 'rule', description: `today ${today}; 2-month boundary ${minusCalendarMonths(today, 2)}; if the business confirms a 60-day rule this case must be inverted` });
  });

  test('TC-PMPROJ-138 @boundary @partial Month-end date arithmetic for the 2-month threshold', async () => {
    test.info().annotations.push({ type: 'partial', description: `Server clock cannot be mocked; the month-end clamp is exercised only when today (${today}) is a month-end. Checks rule conformance of every running allocation and same-day determinism.` });
    const mismatches = allocs.filter(a => running(a) && typeof a.isLongRunning === 'boolean' && a.isLongRunning !== expectedLongRunning(a.start, a.end, today, a.isBillable));
    expect(mismatches.map(a => `${a.employeeName}/${a.alias} ${a.start}..${a.end} api=${a.isLongRunning}`), 'allocations whose isLongRunning disagrees with the calendar-month rule').toEqual([]);
    const t1 = (await emp.fetchEmployeesApi({ filters: { allocationStage: ['LONG_RUNNING'] } })).body.data.total;
    const t2 = (await emp.fetchEmployeesApi({ filters: { allocationStage: ['LONG_RUNNING'] } })).body.data.total;
    expect(t2, 'Long Running total is stable between loads on the same day').toBe(t1);
  });

  test('TC-PMPROJ-139 @boundary @shipped Ended allocation older than 2 months is not Long-Running', async () => {
    const boundary = minusCalendarMonths(today, 2);
    const hits = allocs.filter(a => a.start < boundary && !!a.end && a.end < today && typeof a.isLongRunning === 'boolean');
    test.skip(hits.length === 0, 'No ended allocation that started more than 2 months ago');
    for (const a of hits) expect(a.isLongRunning, `${a.employeeName} / ${a.alias} ${a.start}..${a.end}`).toBe(false);
  });

  test('TC-PMPROJ-140 @boundary @partial Long-running allocation ending today stays flagged and is an Upcoming Deallocation', async () => {
    const hits = allocs.filter(a => !a.past && billable(a) && a.end === today && a.start < minusCalendarMonths(today, 2));
    test.skip(hits.length === 0, `PARTIAL: no long-running allocation ends exactly today (${today})`);
    const deallocIds = await stageIds(emp, 'UPCOMING_DEALLOCATION');
    for (const a of hits) {
      expect(a.isLongRunning, `${a.employeeName} / ${a.alias} ends today`).toBe(true);
      expect(deallocIds.has(a.employeeId), `${a.employeeName} is an Upcoming Deallocation`).toBe(true);
    }
  });

  test('TC-PMPROJ-141 @boundary @partial Open-ended allocation older than 2 months is Long-Running', async () => {
    const hits = allocs.filter(a => !a.past && billable(a) && !a.end && a.start < minusCalendarMonths(today, 2));
    test.skip(hits.length === 0, 'PARTIAL: no open-ended (no end date) billable allocation older than 2 months today');
    for (const a of hits) expect(a.isLongRunning, `${a.employeeName} / ${a.alias} start ${a.start}, no end`).toBe(true);
    const subject = hits.find(a => unique.has(a.employeeName));
    if (subject) await expectSidePanelLr(emp, subject, true);
  });

  test('TC-PMPROJ-142 @boundary @shipped Allocation % change (scheduled segment) keeps the original start for Long-Running age', async () => {
    const hits = allocs.filter(a => running(a) && a.timeline.length >= 2 && a.timeline[0]?.segmentType === 'STANDING' && a.timeline.some((s: any) => s.segmentType === 'SCHEDULED'));
    test.skip(hits.length === 0, 'No running allocation with a STANDING → SCHEDULED timeline today');
    for (const a of hits) {
      expect(a.start, `${a.employeeName} / ${a.alias} start = first segment effectiveFrom`).toBe(String(a.timeline[0].effectiveFrom).slice(0, 10));
      expect(a.isLongRunning, `${a.employeeName} / ${a.alias} LR age counted from ${a.start}`).toBe(expectedLongRunning(a.start, a.end, today, a.isBillable));
    }
  });

  test('TC-PMPROJ-143 @boundary @not-built Deallocate and re-allocate with a gap resets the Long-Running clock', async () => {
    test.info().annotations.push({ type: 'not-built', description: 'Gap re-allocation handling is unverified on dev. Observes existing gap re-allocations instead of creating one (destructive on shared data).' });
    const pairs = allocs.filter(a => !a.past).flatMap(cur => allocs
      .filter(p => p.past && p.employeeId === cur.employeeId && p.projectId === cur.projectId && !!p.end && cur.start > addDays(p.end, 1))
      .map(p => ({ cur, prev: p })));
    test.skip(pairs.length === 0, 'NOT OBSERVABLE: no employee was re-allocated to the same project after a gap');
    for (const { cur, prev } of pairs) {
      expect(cur.isLongRunning, `${cur.employeeName} / ${cur.alias} re-allocated ${cur.start} after ${prev.end}: LR counted from the new start`).toBe(expectedLongRunning(cur.start, cur.end, today, cur.isBillable));
    }
  });

  test('TC-PMPROJ-144 @boundary @partial Back-to-back re-allocation (no gap) continuity', async () => {
    test.info().annotations.push({ type: 'needs-verification', description: 'Expected continuity (stays Long-Running) is the requirement analyzer\'s assumption, not a confirmed rule.' });
    const pairs = allocs.filter(a => !a.past && running(a) && billable(a)).flatMap(cur => allocs
      .filter(p => p.past && p.employeeId === cur.employeeId && p.projectId === cur.projectId && !!p.end && cur.start === addDays(p.end, 1) && p.start < minusCalendarMonths(today, 2))
      .map(p => ({ cur, prev: p })));
    test.skip(pairs.length === 0, 'PARTIAL: no back-to-back re-allocation whose original start is > 2 months ago');
    for (const { cur, prev } of pairs) expect(cur.isLongRunning, `${cur.employeeName} / ${cur.alias} ${prev.start}..${prev.end} → ${cur.start}`).toBe(true);
  });

  test('TC-PMPROJ-145 @boundary @shipped Employee with mixed allocations appears once in the Long Running filter', async () => {
    const lrList = await snapshot(emp, { allocationStage: ['LONG_RUNNING'] });
    const ids = lrList.map(e => e.publicId);
    expect(new Set(ids).size, 'no employee repeats in the Long Running result').toBe(ids.length);
    const subject = lrList.find(e => unique.has(e.name) && e.projects.some((p: any) => p.isLongRunning) && e.projects.some((p: any) => p.allocationStartDate && !p.isLongRunning));
    test.skip(!subject, 'No employee with both an LR and a non-LR dated allocation today');
    await emp.applyAllocationStages(['LONG_RUNNING']);
    const row = await emp.searchForEmployee(subject.name);
    await expect(emp.page.locator('table tbody tr').filter({ has: emp.page.locator('button[data-variant="link"]').getByText(subject.name, { exact: true }) })).toHaveCount(1);
    const drawer = await emp.openEmployeeSidePanel(row);
    const rows = emp.sidePanelProjectRows(drawer);
    for (const p of subject.projects.filter((x: any) => x.allocationStartDate)) {
      const alias = p.alias ?? p.name;
      await expect(emp.visibleLrBadges(rows.filter({ hasText: alias }).first()), `${alias} LR=${!!p.isLongRunning}`).toHaveCount(p.isLongRunning ? 1 : 0);
    }
  });

  test('TC-PMPROJ-147 @boundary @partial Start date = today is Recent, not Upcoming', async () => {
    const hits = allocs.filter(a => !a.past && a.start === today);
    test.skip(hits.length === 0, `PARTIAL: no allocation starts today (${today})`);
    const recent = await stageIds(emp, 'RECENT');
    for (const a of hits) {
      expect(a.isUpcoming, `${a.employeeName} / ${a.alias} starting today is not upcoming`).toBe(false);
      expect(recent.has(a.employeeId), `${a.employeeName} is in Recent Allocation`).toBe(true);
    }
  });

  test('TC-PMPROJ-149 @boundary @partial Recent window boundary via start date (30 vs 31 days ago)', async () => {
    const d30 = addDays(today, -30); const d31 = addDays(today, -31); const from = d30;
    const other = (a: EmployeeAllocation) => allocs.some(o => o.employeeId === a.employeeId && o !== a &&
      ((o.start >= from && o.start <= today) || (!!o.end && o.end >= from && o.end <= today)));
    const in30 = allocs.filter(a => a.start === d30);
    const out31 = allocs.filter(a => a.start === d31 && !(a.end && a.end >= from && a.end <= today) && !other(a));
    test.skip(in30.length === 0 && out31.length === 0, `PARTIAL: no allocation started on ${d30} or ${d31}`);
    test.info().annotations.push({ type: 'needs-verification', description: 'Inclusive −30 is an assumption (unconfirmed).' });
    const recent = await stageIds(emp, 'RECENT');
    for (const a of in30) expect(recent.has(a.employeeId), `${a.employeeName} started ${d30} → Recent`).toBe(true);
    for (const a of out31) expect(recent.has(a.employeeId), `${a.employeeName} started ${d31} → not Recent`).toBe(false);
  });

  test('TC-PMPROJ-150 @boundary @partial Recent window boundary via end date (30 vs 31 days ago)', async () => {
    const d30 = addDays(today, -30); const d31 = addDays(today, -31); const from = d30;
    const other = (a: EmployeeAllocation) => allocs.some(o => o.employeeId === a.employeeId && o !== a &&
      ((o.start >= from && o.start <= today) || (!!o.end && o.end >= from && o.end <= today)));
    const in30 = allocs.filter(a => a.end === d30);
    const out31 = allocs.filter(a => a.end === d31 && !(a.start >= from && a.start <= today) && !other(a));
    test.skip(in30.length === 0 && out31.length === 0, `PARTIAL: no allocation ended on ${d30} or ${d31}`);
    test.info().annotations.push({ type: 'needs-verification', description: 'Inclusive −30 is an assumption (unconfirmed).' });
    const recent = await stageIds(emp, 'RECENT');
    for (const a of in30) expect(recent.has(a.employeeId), `${a.employeeName} ended ${d30} → Recent`).toBe(true);
    for (const a of out31) expect(recent.has(a.employeeId), `${a.employeeName} ended ${d31} → not Recent`).toBe(false);
  });

  test('TC-PMPROJ-151 @boundary @shipped Upcoming Deallocation boundary (today+30 vs today+31)', async () => {
    const p30 = addDays(today, 30); const p31 = addDays(today, 31);
    const other = (a: EmployeeAllocation) => allocs.some(o => !o.past && o.employeeId === a.employeeId && o !== a && !!o.end && o.end >= today && o.end <= p30);
    const in30 = allocs.filter(a => !a.past && a.end === p30);
    const out31 = allocs.filter(a => !a.past && a.end === p31 && !other(a));
    test.skip(in30.length === 0 && out31.length === 0, `No allocation ends on ${p30} or ${p31}`);
    const dealloc = await stageIds(emp, 'UPCOMING_DEALLOCATION');
    for (const a of in30) expect(dealloc.has(a.employeeId), `${a.employeeName} ends ${p30} → Upcoming Deallocation`).toBe(true);
    for (const a of out31) expect(dealloc.has(a.employeeId), `${a.employeeName} ends ${p31} → not Upcoming Deallocation`).toBe(false);
  });

  test('TC-PMPROJ-152 @boundary @shipped Far-future upcoming allocation is Upcoming only', async () => {
    const far = addDays(today, 180);
    const hits = allocs.filter(a => !a.past && a.start > far);
    test.skip(hits.length === 0, `No allocation starts after ${far}`);
    const upcoming = await stageIds(emp, 'UPCOMING');
    const recent = await stageIds(emp, 'RECENT');
    for (const a of hits) {
      expect(a.isUpcoming, `${a.employeeName} / ${a.alias} start ${a.start} is upcoming`).toBe(true);
      expect(a.isLongRunning, `${a.employeeName} / ${a.alias} is not LR`).toBe(false);
      expect(upcoming.has(a.employeeId)).toBe(true);
      const otherRecent = allocs.some(o => o.employeeId === a.employeeId && o !== a && ((o.start >= addDays(today, -30) && o.start <= today) || (!!o.end && o.end >= addDays(today, -30) && o.end <= today)));
      if (!otherRecent) expect(recent.has(a.employeeId), `${a.employeeName} is not Recent`).toBe(false);
    }
  });

  test('TC-PMPROJ-153 @boundary @shipped Timezone near midnight does not shift flags', async ({ browser }) => {
    const subject = all.find(e => unique.has(e.name) && (e.projects ?? []).some((p: any) => p.isLongRunning));
    expect(subject).toBeTruthy();
    const tips: string[] = [];
    for (const timezoneId of ['America/Los_Angeles', 'Pacific/Kiritimati']) {
      const ctx = await browser.newContext({ storageState: path.join(__dirname, '../../../fixtures/storageState-pmo.json'), timezoneId });
      try {
        const page: Page = await ctx.newPage();
        const e = new EmployeeDetailsPage(page);
        await e.gotoEmployeeList();
        tips.push(await e.readAvailabilityTooltip(await e.searchForEmployee(subject.name)));
      } finally {
        await ctx.close();
      }
    }
    expect(tips[0]).toContain('Long-Running Allocations');
    expect(tips[1], 'UTC−8 and UTC+14 render identical flags/dates').toBe(tips[0]);
  });

  test('TC-PMPROJ-154 @boundary @shipped Page-2 rows show the same Long-Running tooltip and badge', async ({ pmoPage }) => {
    await emp.applyAllocationStages(['LONG_RUNNING']);
    const [res] = await Promise.all([
      pmoPage.waitForResponse(r => /\/api\/v1\/employees\?/.test(r.url()) && r.url().includes('page=2'), { timeout: 40_000 }),
      emp.nextPageBtn.click(),
    ]);
    const items: any[] = (await res.json()).data.items;
    await expect(emp.listResultsSummary).toHaveText(/^Showing 101 - /);
    const subject = [...items].reverse().find(e => (e.projects ?? []).some((p: any) => p.isLongRunning));
    expect(subject, 'a page-2 employee with an LR allocation').toBeTruthy();
    const lr = subject.projects.find((p: any) => p.isLongRunning);
    const row = emp.employeeRow(subject.name);
    // The grid is virtualised — rows near the end of a 100-row page are not in the DOM until scrolled.
    await pmoPage.locator('table tbody tr').first().hover();
    for (let i = 0; i < 20 && (await row.count()) === 0; i++) await pmoPage.mouse.wheel(0, 1500);
    await expect(row).toBeVisible();
    const tip = await emp.readAvailabilityTooltip(row);
    expect(tip).toContain(`${lr.alias ?? lr.name} Running since ${formatDdMonYyyy(lr.allocationStartDate)}`);
    await pmoPage.mouse.move(0, 0);
    // 6.9.0: the Projects column orders chips by logged hours, so on page 2 the billable LR chip is often
    // collapsed into the "+N" overflow behind the non-billable placeholders (Unassigned / L&D / Ontime),
    // and the "+N" popover lists only the ACTIVE placeholder rows. Scan the (virtualised) page for a row
    // whose LR chip is on screen; when none is, read the badge from the page-2 subject's side panel.
    const tbody = pmoPage.locator('table tbody');
    for (let i = 0; i < 20 && (await emp.visibleLrBadges(tbody).count()) === 0; i++) {
      await tbody.locator('tr').first().hover();
      await pmoPage.mouse.wheel(0, 1500);
    }
    let badge = emp.visibleLrBadges(tbody).first();
    if ((await badge.count()) === 0) {
      test.info().annotations.push({ type: 'observed', description: `No page-2 row shows its LR chip outside the "+N" overflow — checked ${subject.name}'s side-panel badge instead.` });
      for (let i = 0; i < 40 && (await row.count()) === 0; i++) {
        await tbody.locator('tr').first().hover();
        await pmoPage.mouse.wheel(0, -1500);
      }
      const drawer = await emp.openEmployeeSidePanel(row);
      badge = emp.visibleLrBadges(emp.sidePanelProjectRows(drawer).filter({ hasText: lr.alias ?? lr.name }).first());
      await expect(badge, `${subject.name} / ${lr.alias ?? lr.name} side-panel LR badge`).toHaveCount(1);
    }
    await pmoPage.mouse.move(0, 0);
    await badge.hover();
    await expect(emp.badgeTooltip).toHaveText(LR_BADGE_TOOLTIP);
  });

  test('TC-PMPROJ-157 @boundary @shipped Long Running filter paginates without duplicates across page sizes 100/200/300', async () => {
    const ui = await emp.applyAllocationStages(['LONG_RUNNING']);
    for (const limit of [100, 200, 300]) {
      const seen: string[] = []; let total = -1; let lastPageSize = 0;
      for (let p = 1; p < 50; p++) {
        const { status, body } = await emp.fetchEmployeesApi({ page: p, limit, filters: { allocationStage: ['LONG_RUNNING'] } });
        expect(status).toBe(200);
        total = body.data.total;
        seen.push(...body.data.items.map((e: any) => e.publicId));
        lastPageSize = body.data.items.length;
        if (p >= body.data.totalPages) break;
      }
      expect(seen.length, `limit ${limit}: rows walked = total`).toBe(total);
      expect(new Set(seen).size, `limit ${limit}: no employee repeats across pages`).toBe(seen.length);
      expect(lastPageSize, `limit ${limit}: last page holds total mod limit`).toBe(total % limit || Math.min(limit, total));
      expect(total, `limit ${limit}: same total as the UI`).toBe(ui.total);
    }
    expect(await emp.readListTotal()).toBe(ui.total);
  });
});

test.describe('PM & PMO — Long-Running Allocations — Boundary — My Projects / Project Detail (CSM)', () => {
  let pm: PmProjectsPage;

  test.beforeEach(async ({ csmPage }) => {
    test.setTimeout(180_000);
    pm = new PmProjectsPage(csmPage);
    await pm.gotoMyProjects();
  });

  /** Every project detail of the CSM (id → detail data). */
  async function allDetails(): Promise<Array<{ project: any; detail: any }>> {
    const out: Array<{ project: any; detail: any }> = [];
    for (const project of await pm.fetchAllProjects()) {
      const d = await pm.fetchProjectDetail(project.publicId);
      expect(d.status).toBe(200);
      out.push({ project, detail: d.body.data });
    }
    return out;
  }

  test('TC-PMPROJ-146 @boundary @shipped Card counts allocations, not distinct employees or projects', async () => {
    const projects = await pm.fetchAllProjects();
    const lr = projects.flatMap(p => (p.employees ?? []).filter((e: any) => e.isLongRunning));
    const distinct = new Set(lr.map((e: any) => e.publicId)).size;
    const card = await pm.readLongRunningCardCount();
    expect(card, 'card = number of LR allocations').toBe(lr.length);
    expect(card).toBeGreaterThanOrEqual(distinct);
    test.info().annotations.push({ type: 'observed', description: `card ${card}; LR allocations ${lr.length}; distinct employees ${distinct}; projects ${projects.length}` });
  });

  test('TC-PMPROJ-148 @boundary @not-live-observable Start date = tomorrow is Upcoming and not active', async () => {
    const tomorrow = addDays(istToday(), 1);
    const hit = (await allDetails()).map(x => ({ ...x, e: x.detail.employees.find((e: any) => String(e.allocationStartDate).slice(0, 10) === tomorrow) })).find(x => x.e);
    test.skip(!hit, `NOT LIVE-OBSERVABLE: no CSM allocation starts tomorrow (${tomorrow})`);
    expect(hit!.e.isUpcoming).toBe(true);
    await pm.gotoProjectDetail(hit!.project.publicId);
    await expect(pm.page.getByRole('button', { name: `Open actions for ${hit!.e.name}` })).toHaveCount(0);
    await pm.upcomingAllocationsTrigger.click();
    await expect(pm.page.getByText(hit!.e.name).first()).toBeVisible();
  });

  test('TC-PMPROJ-155 @boundary @partial Two allocations of the same employee on one project are evaluated separately', async () => {
    const today = istToday();
    const hit = (await allDetails()).map(x => {
      const byEmp = new Map<string, any[]>();
      for (const e of x.detail.employees) if (e.assignmentPublicId) byEmp.set(e.publicId, [...(byEmp.get(e.publicId) ?? []), e]);
      return { ...x, pair: [...byEmp.values()].find(v => v.length >= 2) };
    }).find(x => x.pair);
    test.skip(!hit, 'PARTIAL: no employee holds two assignments on one CSM project today');
    for (const a of hit!.pair!) {
      expect(a.isLongRunning, `${a.name} ${a.assignmentPublicId} start ${a.allocationStartDate}`).toBe(expectedLongRunning(a.allocationStartDate, a.allocationEndDate, today));
    }
    await pm.gotoProjectDetail(hit!.project.publicId);
    const rows = pm.detailRow(hit!.pair![0].name);
    await expect(rows).toHaveCount(hit!.pair!.length);
    await expect(pm.visibleLrBadgesIn(rows)).toHaveCount(hit!.pair!.filter((a: any) => a.isLongRunning).length);
  });

  test('TC-PMPROJ-156 @boundary @shipped Card shows 0 and stays usable when no allocation is long-running', async ({ csmPage }) => {
    const real = await pm.fetchStats();
    const errors: string[] = [];
    csmPage.on('pageerror', e => errors.push(e.message));
    await csmPage.route('**/api/v1/pm-projects/stats*', route => route.fulfill({
      status: 200, contentType: 'application/json',
      body: JSON.stringify({ ...real.body, data: { ...real.body.data, longRunningAllocationCount: 0 } }),
    }));
    await pm.gotoMyProjects();
    await expect(pm.longRunningCard).toBeVisible();
    expect((await pm.longRunningCard.innerText()).replace(/\s+/g, ' ').trim()).toMatch(/^Long-Running Allocations 0$/);
    await pm.toggleLongRunningCard();
    await expect(pm.searchProjectsInput).toBeVisible();
    await expect(pm.getAllProjectRows().first().or(pm.noProjectsFound)).toBeVisible();
    expect(errors, 'no uncaught page errors').toEqual([]);
    await pm.clearPersistedFilters();
  });

  test('TC-PMPROJ-158 @boundary @not-live-observable Upcoming section header count equals rows (N = 1 and N > 1)', async () => {
    const hits = (await allDetails()).filter(x => x.detail.employees.some((e: any) => e.isUpcoming));
    test.skip(hits.length === 0, 'NOT LIVE-OBSERVABLE: no CSM project has an upcoming allocation today');
    for (const h of hits) {
      const n = h.detail.employees.filter((e: any) => e.isUpcoming).length;
      await pm.gotoProjectDetail(h.project.publicId);
      // The count is a separate <span> laid out with a CSS gap, so textContent reads "Upcoming Allocations(2)";
      // the accessible name (what a user / AT perceives) is "Upcoming Allocations (2)" — assert that.
      await expect(pm.upcomingAllocationsTrigger).toHaveAccessibleName(`Upcoming Allocations (${n})`);
      await pm.upcomingAllocationsTrigger.click();
      await expect(pm.page.locator('table').last().locator('tbody tr')).toHaveCount(n);
    }
  });
});
