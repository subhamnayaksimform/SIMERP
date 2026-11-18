import { test, expect } from '../../../fixtures/auth';
import { WorkingLocationPage, WorkingLocation, Overview } from '../../../page-objects/employee/working-location.page';

/**
 * Employee Working Location — boundary / data-rule checks (FRD v1.1 §2.2, §5, §6).
 * Data-driven: each check scans what the daily snapshot actually contains instead of assuming
 * specific employees sit on a boundary.
 */
test.describe('Employee — Working Location — Data rules', () => {
  test('TC-EMPWLC-039 @boundary Displayed WFO% + WFH% always add up to 100%', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    const bad: string[] = [];
    try {
      for (const label of ['Last 15 days', 'Last 30 days', 'Last 3 months', 'All time']) {
        await wl.selectTimeRange(label);
        const names = await wl.rowNames(100);
        const cells = await wl.cellButtons().all();
        for (let i = 0; i < cells.length; i++) {
          const v = await wl.readCell(cells[i]);
          if (v && v.wfo + v.wfh !== 100) bad.push(`${names[i]} (${label}): ${v.wfo}% + ${v.wfh}% = ${v.wfo + v.wfh}%`);
        }
      }
    } finally {
      await wl.selectTimeRange('Last 15 days');
      await wl.setColumn(was);
    }
    expect(bad, `${bad.length} cell(s) whose split does not total 100%:\n${bad.slice(0, 15).join('\n')}`).toEqual([]);
  });

  test('TC-EMPWLC-039 @boundary Popup window rows add up to 100%', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    const bad: string[] = [];
    try {
      const names = await wl.rowNames(20);
      for (let i = 0; i < names.length; i++) {
        const popup = await wl.openPopup(wl.cellButtons().nth(i));
        for (const [label, r] of Object.entries(await wl.readWindows(popup))) {
          if (r.wfo + r.wfh !== 100) bad.push(`${names[i]} ${label}: ${r.wfo}% WFO + ${r.wfh}% WFH = ${r.wfo + r.wfh}%`);
        }
        await wl.closePopup();
      }
    } finally {
      await wl.setColumn(was);
    }
    expect(bad, `${bad.length} popup row(s) not totalling 100%:\n${bad.join('\n')}`).toEqual([]);
  });

  test('TC-EMPWLC-039 @boundary Dashboard department splits add up to 100%', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoDashboard();
    const bad: string[] = [];
    for (const row of await primaryPage.locator('table').first().locator('tbody tr').all()) {
      const t = await row.innerText();
      const m = /(\d+)% WFO\s+(\d+)% WFH/.exec(t);
      if (m && Number(m[1]) + Number(m[2]) !== 100) bad.push(`${t.split('\n')[0].trim()}: ${m[1]}% + ${m[2]}%`);
    }
    expect(bad, `department rows that do not total 100%:\n${bad.join('\n')}`).toEqual([]);
  });

  test('TC-EMPWLC-030 @boundary Partial windows show the "N/X days logged" note matching the API', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    try {
      const popup = await wl.openPopup(wl.cellFor('Punit Patel'));
      const rows = await wl.readWindows(popup);
      const data = (await (await wl.apiEmployee(WorkingLocationPage.PEOPLE.punit)).json()).data as WorkingLocation;
      for (const [label, key] of [['15 days', '15d'], ['30 days', '30d'], ['90 days', '90d']] as const) {
        const w = data.windows[key]!;
        expect(rows[label].logged).toBe(`${w.daysLogged}/${w.daysInWindow} days logged`);
      }
    } finally {
      await wl.closePopup();
      await wl.setColumn(was);
    }
  });

  test('TC-EMPWLC-032 @boundary A window with no logged days is "no data", never 0% (API contract)', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    const items: (WorkingLocation & { name?: string })[] = [];
    for (let p = 1; p <= 5; p++) {
      const d = (await (await wl.apiDashboardEmployees('15d', p, 100)).json()).data;
      items.push(...d.items);
    }
    const bad = items.flatMap(e => Object.entries(e.windows).filter(([, w]) => w && w.daysLogged === 0 && (w.wfoPercentage === 0 || w.wfhPercentage === 0))
      .map(([k]) => `${e.name ?? e.employeePublicId} ${k}`));
    expect(bad, 'windows with zero logged days reported as 0%').toEqual([]);
  });

  test('TC-EMPWLC-049 @boundary A blank day renders as the neutral "-" placeholder with a "No record" label', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    try {
      const popup = await wl.openPopup(wl.cellFor('Punit Patel'));
      const data = (await (await wl.apiEmployee(WorkingLocationPage.PEOPLE.punit)).json()).data as WorkingLocation;
      const blanks = data.days.filter(d => d.status === null);
      test.skip(blanks.length === 0, 'no blank day in this snapshot');
      for (const d of blanks) await expect(popup).toContainText(`${WorkingLocationPage.fmtDay(d.date)}: No record`);
      await expect(popup).not.toContainText(/Leave|Holiday/);
    } finally {
      await wl.closePopup();
      await wl.setColumn(was);
    }
  });

  test('TC-EMPWLC-042 @boundary Department "Below threshold" status matches the configured WFO% threshold', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    const ov = (await (await wl.apiOverview('15d')).json()).data as Overview;
    const t = ov.kpis.wfoThresholdPercentage;
    const below = ov.departments.filter(d => d.wfoPercentage < t).length;
    expect(below, `departments under ${t}% vs KPI`).toBe(ov.kpis.departmentsBelowThreshold);
    expect(ov.kpis.departmentsBelowThreshold + ov.kpis.departmentsMeetingThreshold).toBe(ov.kpis.totalDepartments);
    expect(ov.departments).toHaveLength(ov.kpis.totalDepartments);
  });

  test('TC-EMPWLC-044 @boundary "Data as of" is the same on every placement and across reloads', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    const iso = ((await (await wl.apiEmployee(WorkingLocationPage.PEOPLE.punit)).json()).data as WorkingLocation).asOfDate;
    const want = new Date(`${iso}T00:00:00Z`).getTime();
    const parse = (s: string | null) => (s ? new Date(`${s} UTC`).getTime() : NaN);

    await wl.gotoOwnProfile();
    expect(parse(await wl.readAsOf(wl.section))).toBe(want);
    await primaryPage.reload();
    await wl.waitForPageLoad();
    expect(parse(await wl.readAsOf(wl.section))).toBe(want);

    await wl.gotoDashboard();
    expect(parse(await wl.readAsOf(primaryPage.locator('main').or(primaryPage.locator('body')).first()))).toBe(want);
  });
});
