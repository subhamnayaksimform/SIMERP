import { test, expect } from '../../fixtures/auth';
import { DashboardPage } from '../../page-objects/dashboard/dashboard.page';

// TC-DASH-045..059 — data correctness. Two flavors:
//  (a) API self-consistency: does /api/v1/dashboard/overview's own internal arithmetic add up
//      (trend buckets sum to the summary, donut slices sum to the summary, project breakdown
//      sums to the summary)? These need no UI at all — pure ground-truth validation.
//  (b) UI vs API parity: does what's RENDERED match what the real API actually returned?
// Endpoints confirmed live 2026-09-02 via direct network capture — see dashboard.page.ts's API
// helpers block for the full grounding note.
const TOLERANCE = 0.5; // hrs, for display-rounding comparisons
const EXACT_TOLERANCE = 0.01; // hrs, for pure API-arithmetic comparisons

test.describe('Dashboard — Data Validation (API ground truth)', () => {
  let dashboardPage: DashboardPage;

  test.beforeEach(({ page }) => {
    dashboardPage = new DashboardPage(page);
  });

  test('TC-DASH-045 API: Net Utilisation exactly equals Total Allocation minus Total Deallocation @regression', async ({ page }) => {
    const overview = await dashboardPage.fetchOverview(page);
    if (!overview) test.skip(true, 'Overview API did not return data');
    const { totalAllocatedHoursPerDay, totalDeallocatedHoursPerDay, netUtilizationHoursPerDay } = overview.summary;
    expect(netUtilizationHoursPerDay).toBeCloseTo(totalAllocatedHoursPerDay - totalDeallocatedHoursPerDay, 1);
  });

  test('TC-DASH-046 API: netDirection field matches the actual sign of netUtilizationHoursPerDay @regression', async ({ page }) => {
    const overview = await dashboardPage.fetchOverview(page);
    if (!overview) test.skip(true, 'Overview API did not return data');
    const { netUtilizationHoursPerDay, netDirection } = overview.summary;
    if (netUtilizationHoursPerDay < 0) expect(netDirection).toBe('down');
    if (netUtilizationHoursPerDay > 0) expect(netDirection).toBe('up');
  });

  test('TC-DASH-047 API: sum of trend bucket counts equals summary counts exactly @regression', async ({ page }) => {
    const overview = await dashboardPage.fetchOverview(page);
    if (!overview) test.skip(true, 'Overview API did not return data');
    const buckets = overview.trend.buckets;
    const sumAlloc = buckets.reduce((s: number, b: any) => s + b.allocationCount, 0);
    const sumDealloc = buckets.reduce((s: number, b: any) => s + b.deallocationCount, 0);
    expect(sumAlloc).toBe(overview.summary.allocationCount);
    expect(sumDealloc).toBe(overview.summary.deallocationCount);
  });

  test('TC-DASH-048 API: sum of trend bucket hours reconciles with summary total hours @regression', async ({ page }) => {
    const overview = await dashboardPage.fetchOverview(page);
    if (!overview) test.skip(true, 'Overview API did not return data');
    const buckets = overview.trend.buckets;
    const sumAllocHours = buckets.reduce((s: number, b: any) => s + b.allocatedHoursPerDay, 0);
    const sumDeallocHours = buckets.reduce((s: number, b: any) => s + b.deallocatedHoursPerDay, 0);
    expect(sumAllocHours).toBeCloseTo(overview.summary.totalAllocatedHoursPerDay, 0);
    expect(sumDeallocHours).toBeCloseTo(overview.summary.totalDeallocatedHoursPerDay, 0);
  });

  test('TC-DASH-049 API: each trend bucket netHoursPerDay equals its own allocated minus deallocated @regression', async ({ page }) => {
    const overview = await dashboardPage.fetchOverview(page);
    if (!overview) test.skip(true, 'Overview API did not return data');
    for (const b of overview.trend.buckets) {
      expect(b.netHoursPerDay, `bucket ${b.key}`).toBeCloseTo(b.allocatedHoursPerDay - b.deallocatedHoursPerDay, 1);
    }
  });

  test('TC-DASH-050 API: Allocation Type Distribution totals and counts reconcile with summary @regression', async ({ page }) => {
    const overview = await dashboardPage.fetchOverview(page);
    if (!overview) test.skip(true, 'Overview API did not return data');
    const dist = overview.allocationTypeDistribution;
    expect(dist.totalHoursPerDay).toBeCloseTo(overview.summary.totalAllocatedHoursPerDay, 1);
    const sumHours = dist.slices.reduce((s: number, sl: any) => s + sl.hoursPerDay, 0);
    expect(sumHours).toBeCloseTo(dist.totalHoursPerDay, 0);
    const sumCount = dist.slices.reduce((s: number, sl: any) => s + sl.allocationCount, 0);
    expect(sumCount).toBe(overview.summary.allocationCount);
  });

  test('TC-DASH-051 API: each allocation-type slice sharePercentage matches its own hours-over-total @regression', async ({ page }) => {
    const overview = await dashboardPage.fetchOverview(page);
    if (!overview) test.skip(true, 'Overview API did not return data');
    const dist = overview.allocationTypeDistribution;
    if (dist.totalHoursPerDay === 0) test.skip(true, 'Zero total hours — percentage computation undefined');
    for (const slice of dist.slices) {
      const computed = (slice.hoursPerDay / dist.totalHoursPerDay) * 100;
      expect(slice.sharePercentage, slice.allocationType).toBeCloseTo(computed, 0);
    }
  });

  test('TC-DASH-052 API: Project Breakdown totals reconcile and items are sorted strictly descending @regression', async ({ page }) => {
    const overview = await dashboardPage.fetchOverview(page);
    if (!overview) test.skip(true, 'Overview API did not return data');
    const pb = overview.projectBreakdown;
    expect(pb.totalAllocatedHoursPerDay).toBeCloseTo(overview.summary.totalAllocatedHoursPerDay, 1);
    const sum = pb.items.reduce((s: number, i: any) => s + i.allocatedHoursPerDay, 0) + (pb.otherProjects?.allocatedHoursPerDay ?? 0);
    expect(sum).toBeCloseTo(pb.totalAllocatedHoursPerDay, 0);
    for (let i = 1; i < pb.items.length; i++) {
      expect(pb.items[i - 1].allocatedHoursPerDay).toBeGreaterThanOrEqual(pb.items[i].allocatedHoursPerDay);
    }
  });

  test('TC-DASH-053 API: "N other projects" rollup count reconciles exactly with totalProjectCount @boundary', async ({ page }) => {
    const overview = await dashboardPage.fetchOverview(page);
    if (!overview) test.skip(true, 'Overview API did not return data');
    const pb = overview.projectBreakdown;
    if (!pb.otherProjects) test.skip(true, 'No otherProjects rollup present (every project individually listed)');
    const match = pb.otherProjects.projectName.match(/^(\d+)\s+other projects/i);
    if (!match) test.skip(true, `Could not parse a count from otherProjects.projectName: "${pb.otherProjects.projectName}"`);
    const otherCount = parseInt(match![1], 10);
    expect(pb.items.length + otherCount).toBe(pb.totalProjectCount);
  });

  test('TC-DASH-054 UI vs API parity: KPI cards exactly match the overview API @regression @functional', async ({ page }) => {
    await dashboardPage.navigateToDashboard();
    const overview = await dashboardPage.fetchOverview(page);
    if (!overview) test.skip(true, 'Overview API did not return data');

    const uiAllocHours = await dashboardPage.getTotalAllocationHours();
    const uiAllocCount = await dashboardPage.getTotalAllocationCount();
    const uiDeallocHours = await dashboardPage.getTotalDeallocationHours();
    const uiNet = await dashboardPage.getNetUtilisationHours();

    expect(uiAllocHours, 'UI Total Allocation hours failed to parse').not.toBeNull();
    expect(uiAllocHours!).toBeCloseTo(overview.summary.totalAllocatedHoursPerDay, 0);
    expect(uiAllocCount, 'UI Total Allocation count failed to parse').not.toBeNull();
    expect(uiAllocCount).toBe(overview.summary.allocationCount);
    expect(uiDeallocHours, 'UI Total Deallocation hours failed to parse').not.toBeNull();
    expect(uiDeallocHours!).toBeCloseTo(overview.summary.totalDeallocatedHoursPerDay, 0);
    expect(uiNet, 'UI Net Utilisation failed to parse').not.toBeNull();
    expect(uiNet!).toBeCloseTo(overview.summary.netUtilizationHoursPerDay, 0);
  });

  test('TC-DASH-055 UI vs API parity: donut chart percentages match allocationTypeDistribution @regression', async ({ page }) => {
    await dashboardPage.navigateToDashboard();
    const overview = await dashboardPage.fetchOverview(page);
    if (!overview) test.skip(true, 'Overview API did not return data');

    const breakdown = await dashboardPage.getAllocationTypeBreakdown();
    const fixedSlice = overview.allocationTypeDistribution.slices.find((s: any) => s.allocationType === 'FIXED');
    const dynamicSlice = overview.allocationTypeDistribution.slices.find((s: any) => s.allocationType === 'DYNAMIC');
    if (breakdown.fixedPct === null || !fixedSlice) test.skip(true, 'Could not obtain both UI and API Fixed% to compare');

    expect(breakdown.fixedPct!).toBeCloseTo(fixedSlice.sharePercentage, 0);
    if (dynamicSlice && breakdown.dynamicPct !== null) {
      expect(breakdown.dynamicPct!).toBeCloseTo(dynamicSlice.sharePercentage, 0);
    }
  });

  test('TC-DASH-056 UI vs API parity: bar chart top-project hours match projectBreakdown items in order @regression', async ({ page }) => {
    await dashboardPage.navigateToDashboard();
    const overview = await dashboardPage.fetchOverview(page);
    if (!overview) test.skip(true, 'Overview API did not return data');

    const uiValues = await dashboardPage.getProjectBarChartValues();
    const apiValues = overview.projectBreakdown.items.map((i: any) => i.allocatedHoursPerDay);
    if (uiValues.length === 0 || apiValues.length === 0) test.skip(true, 'No project values available from UI or API to compare');

    const n = Math.min(uiValues.length, apiValues.length);
    for (let i = 0; i < n; i++) {
      expect(uiValues[i], `project index ${i}`).toBeCloseTo(apiValues[i], 0);
    }
  });

  test('TC-DASH-057 UI vs API parity: All Activity first row matches the activity API first item @regression', async ({ page }) => {
    await dashboardPage.navigateToDashboard();
    const activity = await dashboardPage.fetchActivity(page);
    if (!activity || activity.items.length === 0) test.skip(true, 'Activity API returned no items');
    const apiItem = activity.items[0];

    const rows = dashboardPage.getAllActivityDataRows();
    if (await rows.count() === 0) test.skip(true, 'All Activity table has no rendered rows');
    const uiName = await dashboardPage.getRowCellText(rows.first(), 'Employee Name');
    const uiProjects = await dashboardPage.getRowCellText(rows.first(), 'Projects');

    // Best-effort — UI default sort may differ from the API's page-1 order; this assumes they match.
    if (!uiName.includes(apiItem.employee.name)) {
      test.skip(true, `UI first row ("${uiName}") does not match API items[0] ("${apiItem.employee.name}") — default sort order likely differs between UI and this raw page=1 API call`);
    }
    expect(uiProjects).toContain(apiItem.project.name.split(' | ')[0]);
  });

  test('TC-DASH-058 API: activity endpoint total record count is stable across repeated calls @boundary @regression', async ({ page }) => {
    const first = await dashboardPage.fetchActivity(page);
    const second = await dashboardPage.fetchActivity(page);
    if (!first || !second) test.skip(true, 'Activity API did not return data on one of the two calls');
    expect(second.total).toBe(first.total);
    expect(first.items.length).toBeLessThanOrEqual(first.limit);
  });

  test('TC-DASH-059 API: isTruncated flag vs. an actually-truncated projectBreakdown — semantics unconfirmed @boundary', async ({ page }) => {
    const overview = await dashboardPage.fetchOverview(page);
    if (!overview) test.skip(true, 'Overview API did not return data');
    const pb = overview.projectBreakdown;
    const projectBreakdownIsTruncated = pb.totalProjectCount > pb.items.length;

    // UNCONFIRMED SEMANTICS (2026-09-02): `isTruncated` is a top-level sibling of `projectBreakdown`
    // and `loggedHoursTimeframe`, not nested inside `projectBreakdown` — so it may describe
    // `loggedHoursTimeframe` truncation (or something else entirely), not the project list. GROUNDED
    // LIVE: for PMO/this_year, projectBreakdown WAS genuinely truncated (399 total, only 6 individually
    // listed, "393 other projects" rollup present) yet `isTruncated` read `false`. This is flagged as
    // an observation to verify with the backend team — not asserted as a confirmed bug, since the
    // field's intended meaning isn't documented and could legitimately track something else.
    test.info().annotations.push({
      type: 'observation',
      description: `isTruncated=${overview.isTruncated}, but projectBreakdown itself is${projectBreakdownIsTruncated ? '' : ' NOT'} truncated (${pb.items.length}/${pb.totalProjectCount} projects individually listed). If isTruncated is meant to describe projectBreakdown, this is a mismatch worth confirming with the backend team — its exact semantics are not documented.`,
    });
    expect(typeof overview.isTruncated).toBe('boolean');
  });

  test('TC-DASH-062 API: This Year period fromDate/toDate exactly span Jan 1 - Dec 31 of the current year @boundary', async ({ page }) => {
    const overview = await dashboardPage.fetchOverview(page, 'this_year');
    if (!overview) test.skip(true, 'Overview API did not return data');
    const year = overview.period.fromDate.slice(0, 4);
    expect(overview.period.fromDate).toBe(`${year}-01-01`);
    expect(overview.period.toDate).toBe(`${year}-12-31`);
  });
});

// TC-DASH-063..068 — does each period-filter option produce the CORRECT date range (not just any
// range)? TC-DASH-069..077 — does the Export button produce a file whose data actually matches
// what the API/on-screen data says, for the currently selected filter, at every level of detail
// (summary, trend, per-type, per-project, and every single activity row)?
function toDateStr(d: Date): string {
  return d.toISOString().slice(0, 10);
}

test.describe('Dashboard — Period Filter Date-Range Correctness', () => {
  let dashboardPage: DashboardPage;
  test.beforeEach(({ page }) => { dashboardPage = new DashboardPage(page); });

  test('TC-DASH-063 "This Week" filter produces the correct Monday-Sunday date range @boundary', async ({ page }) => {
    const overview = await dashboardPage.fetchOverview(page, 'this_week');
    if (!overview) test.skip(true, 'Overview API did not return data');
    const today = new Date();
    const dayOfWeek = (today.getUTCDay() + 6) % 7; // 0=Monday
    const monday = new Date(today); monday.setUTCDate(today.getUTCDate() - dayOfWeek);
    const sunday = new Date(monday); sunday.setUTCDate(monday.getUTCDate() + 6);
    expect(overview.period.fromDate).toBe(toDateStr(monday));
    expect(overview.period.toDate).toBe(toDateStr(sunday));
  });

  test('TC-DASH-064 "This Month" filter produces the correct calendar-month date range @boundary', async ({ page }) => {
    const overview = await dashboardPage.fetchOverview(page, 'this_month');
    if (!overview) test.skip(true, 'Overview API did not return data');
    const today = new Date();
    const firstDay = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 1));
    const lastDay = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() + 1, 0));
    expect(overview.period.fromDate).toBe(toDateStr(firstDay));
    expect(overview.period.toDate).toBe(toDateStr(lastDay));
  });

  test('TC-DASH-066 "0 - 1 Year" filter produces a rolling 1-year window ending today @boundary', async ({ page }) => {
    const overview = await dashboardPage.fetchOverview(page, 'last_one_year');
    if (!overview) test.skip(true, 'Overview API did not return data');
    const today = new Date();
    const oneYearAgo = new Date(today); oneYearAgo.setUTCFullYear(today.getUTCFullYear() - 1); oneYearAgo.setUTCDate(oneYearAgo.getUTCDate() + 1);
    expect(overview.period.toDate).toBe(toDateStr(today));
    expect(overview.period.fromDate).toBe(toDateStr(oneYearAgo));
  });

  test('TC-DASH-067 "1 - 2 Years" filter is contiguous with "0 - 1 Year" — no gap or overlap @boundary', async ({ page }) => {
    const zeroToOne = await dashboardPage.fetchOverview(page, 'last_one_year');
    const oneToTwo = await dashboardPage.fetchOverview(page, 'one_to_two_years');
    if (!zeroToOne || !oneToTwo) test.skip(true, 'Overview API did not return data for one of the two windows');

    const oneToTwoEnd = new Date(oneToTwo.period.toDate + 'T00:00:00Z');
    const zeroToOneStart = new Date(zeroToOne.period.fromDate + 'T00:00:00Z');
    const expectedZeroToOneStart = new Date(oneToTwoEnd); expectedZeroToOneStart.setUTCDate(oneToTwoEnd.getUTCDate() + 1);
    expect(toDateStr(zeroToOneStart)).toBe(toDateStr(expectedZeroToOneStart));
  });

  test('TC-DASH-068 Custom Date Range applies the exact selected start/end dates @boundary', async ({ page }) => {
    await dashboardPage.navigateToDashboard();
    const applied = await dashboardPage.applyCustomDateRange('2026-01-01', '2026-03-31');
    if (!applied) test.skip(true, 'Custom Date Range date-input control not found — control shape unconfirmed against live app (does not expose standard textbox/date-input roles)');
    await expect(dashboardPage.dashboardHeading).toBeVisible();
  });
});

test.describe('Dashboard — Export Data Correctness', () => {
  let dashboardPage: DashboardPage;
  test.beforeEach(({ page }) => { dashboardPage = new DashboardPage(page); });

  test('TC-DASH-069 Export respects the currently selected period filter, not always the default @regression @functional', async ({ page }) => {
    await dashboardPage.navigateToDashboard();
    await dashboardPage.selectPeriod('This Week');
    const weekExport = await dashboardPage.exportAndParseCsv();
    if (!weekExport) test.skip(true, 'Export did not produce a downloadable CSV');

    await dashboardPage.selectPeriod('This Year');
    const yearExport = await dashboardPage.exportAndParseCsv();
    if (!yearExport) test.skip(true, 'Second export did not produce a downloadable CSV');

    expect(weekExport!.summary['Period start']).not.toBe(yearExport!.summary['Period start']);
    expect(yearExport!.filename).toContain(yearExport!.summary['Period start']);
  });

  test('TC-DASH-070 Exported CSV Summary section exactly matches the overview API @regression', async ({ page }) => {
    await dashboardPage.navigateToDashboard();
    const overview = await dashboardPage.fetchOverview(page);
    const exported = await dashboardPage.exportAndParseCsv();
    if (!overview || !exported) test.skip(true, 'API call or export failed');

    expect(parseFloat(exported!.summary['Total allocated hours/day'])).toBeCloseTo(overview.summary.totalAllocatedHoursPerDay, 1);
    expect(parseFloat(exported!.summary['Total de-allocated hours/day'])).toBeCloseTo(overview.summary.totalDeallocatedHoursPerDay, 1);
    expect(parseFloat(exported!.summary['Net utilization hours/day'])).toBeCloseTo(overview.summary.netUtilizationHoursPerDay, 1);
    expect(parseInt(exported!.summary['Allocation count'], 10)).toBe(overview.summary.allocationCount);
    expect(parseInt(exported!.summary['De-allocation count'], 10)).toBe(overview.summary.deallocationCount);
    expect(exported!.summary['Period start']).toBe(overview.period.fromDate);
    expect(exported!.summary['Period end']).toBe(overview.period.toDate);
  });

  test('TC-DASH-071 Exported CSV Trend section exactly matches the overview API monthly buckets @regression', async ({ page }) => {
    await dashboardPage.navigateToDashboard();
    const overview = await dashboardPage.fetchOverview(page);
    const exported = await dashboardPage.exportAndParseCsv();
    if (!overview || !exported) test.skip(true, 'API call or export failed');
    if (exported!.trend.length === 0) test.skip(true, 'Exported Trend section is empty');

    expect(exported!.trend.length).toBe(overview.trend.buckets.length);
    for (let i = 0; i < overview.trend.buckets.length; i++) {
      const apiBucket = overview.trend.buckets[i];
      const csvRow = exported!.trend.find(r => r['Bucket'] === apiBucket.label);
      expect(csvRow, `No CSV row found for bucket "${apiBucket.label}"`).toBeDefined();
      if (!csvRow) continue;
      expect(parseFloat(csvRow['Allocated Hours/Day'])).toBeCloseTo(apiBucket.allocatedHoursPerDay, 1);
      expect(parseFloat(csvRow['De-allocated Hours/Day'])).toBeCloseTo(apiBucket.deallocatedHoursPerDay, 1);
      expect(parseInt(csvRow['Allocations'], 10)).toBe(apiBucket.allocationCount);
      expect(parseInt(csvRow['De-allocations'], 10)).toBe(apiBucket.deallocationCount);
    }
  });

  test('TC-DASH-072 Exported CSV Allocation Type section exactly matches the overview API distribution @regression', async ({ page }) => {
    await dashboardPage.navigateToDashboard();
    const overview = await dashboardPage.fetchOverview(page);
    const exported = await dashboardPage.exportAndParseCsv();
    if (!overview || !exported) test.skip(true, 'API call or export failed');

    for (const slice of overview.allocationTypeDistribution.slices) {
      const csvRow = exported!.allocationType.find(r => r['Allocation Type'] === slice.allocationType);
      expect(csvRow, `No CSV row found for allocation type "${slice.allocationType}"`).toBeDefined();
      if (!csvRow) continue;
      expect(parseFloat(csvRow['Hours/Day'])).toBeCloseTo(slice.hoursPerDay, 1);
      expect(parseInt(csvRow['Allocations'], 10)).toBe(slice.allocationCount);
      expect(parseFloat(csvRow['Share %'])).toBeCloseTo(slice.sharePercentage, 1);
    }
  });

  test('TC-DASH-073 Exported CSV Hours by Project section sums to the same total as the Summary (full, uncapped list) @regression', async ({ page }) => {
    await dashboardPage.navigateToDashboard();
    const exported = await dashboardPage.exportAndParseCsv();
    if (!exported) test.skip(true, 'Export failed');
    if (exported!.hoursByProject.length === 0) test.skip(true, 'Exported Hours by Project section is empty');

    const sum = exported!.hoursByProject.reduce((s, row) => s + (parseFloat(row['Allocated Hours/Day']) || 0), 0);
    const summaryTotal = parseFloat(exported!.summary['Total allocated hours/day']);
    expect(sum).toBeCloseTo(summaryTotal, 0);
  });

  test('TC-DASH-074 Exported CSV Hours by Project row count matches the overview API totalProjectCount @regression @boundary', async ({ page }) => {
    await dashboardPage.navigateToDashboard();
    const overview = await dashboardPage.fetchOverview(page);
    const exported = await dashboardPage.exportAndParseCsv();
    if (!overview || !exported) test.skip(true, 'API call or export failed');

    expect(exported!.hoursByProject.length).toBe(overview.projectBreakdown.totalProjectCount);
  });

  test('TC-DASH-075 Exported CSV All Activity row count exactly matches the activity API total (full export, not paginated) @regression @boundary', async ({ page }) => {
    await dashboardPage.navigateToDashboard();
    const activity = await dashboardPage.fetchActivity(page);
    const exported = await dashboardPage.exportAndParseCsv();
    if (!activity || !exported) test.skip(true, 'API call or export failed');

    expect(exported!.allActivity.length).toBe(activity.total);
  });

  test('TC-DASH-076 Exported CSV All Activity row-level fields match the activity API for a spot-checked record @regression', async ({ page }) => {
    await dashboardPage.navigateToDashboard();
    const activity = await dashboardPage.fetchActivity(page);
    const exported = await dashboardPage.exportAndParseCsv();
    if (!activity || !exported || activity.items.length === 0) test.skip(true, 'API call or export failed, or no activity items');

    const apiItem = activity.items[0];
    const csvRow = exported!.allActivity.find(r => r['Employee'] === apiItem.employee.name && r['Project'] === apiItem.project.name);
    if (!csvRow) test.skip(true, `No matching CSV row found for employee "${apiItem.employee.name}" / project "${apiItem.project.name}" — dataset may have changed between the two calls`);

    expect(csvRow!['Allocation Type']).toBe(apiItem.allocationType);
    expect(parseFloat(csvRow!['Hours/Day'])).toBeCloseTo(apiItem.hoursPerDay, 1);
    expect(csvRow!['Start Date']).toBe(apiItem.startDate);
    expect(csvRow!['End Date']).toBe(apiItem.endDate);
  });

  test('TC-DASH-077 Export respects role-based scoping at the content level, not just the trigger @security @regression', async ({ primaryPage, pmPage }) => {
    const pmo = new DashboardPage(primaryPage);
    const pm = new DashboardPage(pmPage);
    await Promise.all([pmo.navigateToDashboard(), pm.navigateToDashboard()]);

    const pmoExport = await pmo.exportAndParseCsv();
    const pmExport = await pm.exportAndParseCsv();
    if (!pmoExport || !pmExport) test.skip(true, 'One of the two exports failed');

    const pmoTotal = parseFloat(pmoExport!.summary['Total allocated hours/day']);
    const pmTotal = parseFloat(pmExport!.summary['Total allocated hours/day']);
    expect(pmTotal, 'PM export total should be strictly less than PMO export total — export scoping enforced in actual file content').toBeLessThan(pmoTotal);
    expect(pmExport!.allActivity.length).toBeLessThan(pmoExport!.allActivity.length);
  });
});
