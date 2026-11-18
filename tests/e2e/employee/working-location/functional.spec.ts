import { test, expect } from '../../../fixtures/auth';
import { WorkingLocationPage, WorkingLocation } from '../../../page-objects/employee/working-location.page';

/**
 * Employee Working Location — functional (FRD v1.1 §3, §5).
 * Values on screen are compared with the API response for the same employee, rounded the way the
 * UI rounds (whole percent), so the checks hold whatever the daily snapshot contains.
 */
const LABEL: Record<string, '15d' | '30d' | '90d' | 'overall'> = { '15 days': '15d', '30 days': '30d', '90 days': '90d', Overall: 'overall' };

test.describe('Employee — Working Location — Profile card', () => {
  test('TC-EMPWLC-004 @functional The 7-day strip shows real calendar dates ending on the As Of Date', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    const id = await wl.ownPublicId();
    const data = (await (await wl.apiEmployee(id)).json()).data as WorkingLocation;

    await expect(wl.section).toBeVisible();
    const days = await wl.readDays(wl.section);
    const expected = [...data.days].reverse().map(d =>
      `${WorkingLocationPage.fmtDay(d.date)}: ${d.status === 'WFO' ? 'Work from office' : d.status === 'WFH' ? 'Work from home' : 'No record'}`);
    expect(days, 'strip runs oldest → As Of Date, one chip per calendar day').toEqual(expected);
    expect(data.days[0].date).toBe(data.asOfDate);
  });

  test('TC-EMPWLC-005 @functional The card shows 15/30/90-day and Overall rows plus "Data as of", matching the API', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    const id = await wl.ownPublicId();
    const data = (await (await wl.apiEmployee(id)).json()).data as WorkingLocation;

    const asOf = await wl.readAsOf(wl.section);
    expect(asOf && new Date(`${asOf} UTC`).toISOString().slice(0, 10)).toBe(data.asOfDate);

    const rows = await wl.readWindows(wl.section);
    expect(Object.keys(rows)).toEqual(['15 days', '30 days', '90 days', 'Overall']);
    for (const [label, row] of Object.entries(rows)) {
      const w = data.windows[LABEL[label]]!;
      expect.soft(row.wfo, `${label} WFO%`).toBe(Math.round(w.wfoPercentage!));
      expect.soft(row.wfh, `${label} WFH%`).toBe(Math.round(w.wfhPercentage!));
      const note = label === 'Overall' ? `${w.daysLogged} days logged` : `${w.daysLogged}/${w.daysInWindow} days logged`;
      expect.soft(row.logged, `${label} sample-size note`).toBe(note);
    }
  });

  test('TC-EMPWLC-007 @functional The Location Preference tag carries an info icon pointing to Working Location', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoOwnProfile();
    const field = primaryPage.getByText('Location Preference', { exact: true }).locator('xpath=..');
    await expect(field).toBeVisible();
    // FRD §3.1 / decision 5: "Declared preference — see the Working Location tab for actual attendance history."
    const info = field.getByRole('button').or(field.locator('[aria-label*="preference" i], [title*="preference" i], svg')).first();
    await expect(info, 'no info icon next to the Location Preference tag').toBeVisible();
    await info.hover();
    await expect(primaryPage.getByRole('tooltip')).toContainText(/declared preference/i);
  });

  test('TC-EMPWLC-014 @functional The profile card offers no way to edit WFO/WFH values', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoOwnProfile();
    await expect(wl.section).toBeVisible();
    await expect(wl.section.getByRole('button', { name: /edit|update|change|save/i })).toHaveCount(0);
    await expect(wl.section.getByRole('textbox')).toHaveCount(0);
    await expect(wl.section.getByRole('combobox')).toHaveCount(0);
  });

  test('TC-EMPWLC-050 @functional The strip only ever shows WFO, WFH or a blank "No record" day', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    try {
      for (let i = 0; i < 5; i++) {
        const popup = await wl.openPopup(wl.cellButtons().nth(i));
        const days = await wl.readDays(popup);
        expect(days).toHaveLength(7);
        for (const d of days) expect(d).toMatch(/: (Work from office|Work from home|No record)$/);
        await wl.closePopup();
      }
    } finally {
      await wl.setColumn(was);
    }
  });
});

test.describe('Employee — Working Location — Employee list column', () => {
  test('TC-EMPWLC-008 @functional The column is off by default and can be switched on and off again', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoEmployeeList();
    const was = await wl.isColumnEnabledInMenu();
    try {
      await wl.setColumn(false);
      await expect(wl.columnHeader).toHaveCount(0);
      await wl.setColumn(true);
      await expect(wl.columnHeader).toBeVisible();
      await wl.setColumn(false);
      await expect(wl.columnHeader).toHaveCount(0);
    } finally {
      await wl.setColumn(was);
    }
    expect(was, 'FRD §3.2: column must default to off — this account had it on before the test').toBe(false);
  });

  test('TC-EMPWLC-012 @functional The hover popup shows the same 7 days and windows as the API', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    try {
      const cell = wl.cellFor('Punit Patel');
      const popup = await wl.openPopup(cell);
      const data = (await (await wl.apiEmployee(WorkingLocationPage.PEOPLE.punit)).json()).data as WorkingLocation;
      expect(await wl.readDays(popup)).toHaveLength(7);
      const rows = await wl.readWindows(popup);
      expect(Object.keys(rows)).toEqual(['15 days', '30 days', '90 days', 'Overall']);
      for (const [label, row] of Object.entries(rows)) {
        expect.soft(row.wfo, `${label} WFO%`).toBe(Math.round(data.windows[LABEL[label]]!.wfoPercentage!));
      }
      await expect(popup.getByRole('link', { name: /profile/i })).toHaveAttribute('href', `/employee/${WorkingLocationPage.PEOPLE.punit}`);
      await expect(popup).toContainText(/Data as of/);
    } finally {
      await wl.closePopup();
      await wl.setColumn(was);
    }
  });

  test('TC-EMPWLC-013 @functional The list column header has an info icon explaining the column', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    try {
      await expect(wl.columnHeader.getByRole('img', { name: /WFO|WFH|attendance/i })).toBeVisible();
    } finally {
      await wl.setColumn(was);
    }
  });

  test('TC-EMPWLC-009 @functional The column follows the page\'s time-range dropdown', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    const name = 'Punit Patel';
    const data = (await (await wl.apiEmployee(WorkingLocationPage.PEOPLE.punit)).json()).data as WorkingLocation;
    const r = (k: '15d' | '30d' | '90d' | 'overall') => Math.round(data.windows[k]!.wfoPercentage!);
    try {
      // Ranges that have a matching data window must show that window.
      for (const [label, key] of [['Last 15 days', '15d'], ['Last 30 days', '30d'], ['Last 3 months', '90d'], ['All time', 'overall']] as const) {
        await wl.selectTimeRange(label);
        expect.soft((await wl.readCell(wl.cellFor(name)))?.wfo, `"${label}" should show the ${key} value`).toBe(r(key));
      }
      // Ranges with NO matching window (5 days, 6 months) must not silently show another window's number.
      for (const label of ['Last 5 days', 'Last 6 months']) {
        await wl.selectTimeRange(label);
        const shown = (await wl.readCell(wl.cellFor(name)))?.wfo;
        const borrowed = (Object.entries({ '15d': r('15d'), '30d': r('30d'), '90d': r('90d'), overall: r('overall') }) as [string, number][])
          .filter(([, v]) => v === shown).map(([k]) => k);
        expect.soft(borrowed, `"${label}" is selected but the column shows the ${borrowed.join('/')} figure with no indication`).toEqual([]);
      }
    } finally {
      await wl.selectTimeRange('Last 15 days');
      await wl.setColumn(was);
    }
  });

  test('TC-EMPWLC-017 @functional Sorting by Working Location orders rows by WFO% and reverses on re-click', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    try {
      await wl.columnHeader.getByRole('button', { name: /sort/i }).click();
      await expect(primaryPage).toHaveURL(/sortBy=workingLocation&sortOrder=asc/);
      await wl.waitForPageLoad();
      const asc = await Promise.all((await wl.cellButtons().all()).slice(0, 15).map(c => wl.readCell(c)));
      const ascWfo = asc.map(c => c?.wfo ?? -1);
      expect(ascWfo, 'ascending by WFO%').toEqual([...ascWfo].sort((a, b) => a - b));

      await wl.columnHeader.getByRole('button', { name: /sort/i }).click();
      await expect(primaryPage).toHaveURL(/sortBy=workingLocation&sortOrder=desc/);
      await wl.waitForPageLoad();
      const desc = await Promise.all((await wl.cellButtons().all()).slice(0, 15).map(c => wl.readCell(c)));
      const descWfo = desc.map(c => c?.wfo ?? -1);
      expect(descWfo, 'descending by WFO%').toEqual([...descWfo].sort((a, b) => b - a));
    } finally {
      await wl.gotoEmployeeList();
      await wl.setColumn(was);
    }
  });
});

test.describe('Employee — Working Location — Project table (CSM)', () => {
  test('TC-EMPWLC-010 @functional Project column is always on and its popup stops at 90 days (no Overall)', async ({ csmPage }) => {
    const wl = new WorkingLocationPage(csmPage);
    await wl.gotoFirstProjectDetail();
    await expect(wl.columnHeader).toBeVisible();
    await expect(wl.tableOptions, 'project table has no column toggle — the column is standard').toHaveCount(0);
    const popup = await wl.openPopup(wl.cellButtons().first());
    expect(Object.keys(await wl.readWindows(popup))).toEqual(['15 days', '30 days', '90 days']);
    await expect(popup).not.toContainText('Overall');
  });

  test('TC-EMPWLC-010 @functional Project column follows the page\'s time-range dropdown', async ({ csmPage }) => {
    const wl = new WorkingLocationPage(csmPage);
    await wl.gotoFirstProjectDetail();
    // Pick a member whose 15/30/90-day figures all differ, so the cell can only match one window.
    let cell = wl.cellButtons().first();
    let rows: Record<string, { wfo: number }> = {};
    for (const c of (await wl.cellButtons().all()).slice(0, 15)) {
      const popup = await wl.openPopup(c);
      const r = await wl.readWindows(popup);
      await wl.closePopup();
      if (new Set([r['15 days'].wfo, r['30 days'].wfo, r['90 days'].wfo]).size === 3) { cell = c; rows = r; break; }
    }
    test.skip(!Object.keys(rows).length, 'no member with three distinct window figures');
    const which = (v?: number) => Object.entries(rows).filter(([, r]) => r.wfo === v).map(([k]) => k).join('/') || 'none';
    await expect(wl.timeRange).toHaveText(/Last 15 days/);
    for (const [label, key] of [['Last 15 days', '15 days'], ['Last 30 days', '30 days'], ['Last 3 months', '90 days']] as const) {
      await wl.selectTimeRange(label);
      const shown = (await wl.readCell(cell))?.wfo;
      expect.soft(shown, `"${label}" selected — column shows the ${which(shown)} figure, expected ${key}`).toBe(rows[key].wfo);
    }
    await wl.selectTimeRange('Last 15 days');
  });

  test('TC-EMPWLC-013 @functional Project column header has an info icon explaining the column', async ({ csmPage }) => {
    const wl = new WorkingLocationPage(csmPage);
    await wl.gotoFirstProjectDetail();
    await expect(wl.columnHeader.getByRole('img', { name: /WFO|WFH|attendance/i }), 'FRD §5.4: column header carries a static info-icon tooltip').toBeVisible();
  });

  test('TC-EMPWLC-010 @functional Project column also appears on the Past Allocations tab', async ({ csmPage }) => {
    const wl = new WorkingLocationPage(csmPage);
    await wl.gotoFirstProjectDetail();
    await csmPage.getByRole('tab', { name: /past allocations/i }).click();
    await expect(csmPage.getByRole('columnheader', { name: /deallocation reason/i })).toBeVisible();
    await expect(wl.columnHeader, 'FRD §3.3: column appears identically on Active and Past tabs').toBeVisible();
  });

  test('TC-EMPWLC-012 @functional CSM\'s popup offers no "Profile" link to a page the CSM cannot open', async ({ csmPage }) => {
    // SI4-T1375 (FE 9e51ae0d, 2026-10-19): the popup's Profile link is now left out for PM and CSM viewers
    // (useCanOpenEmployeeProfile), because it led them to Access Denied. Before that fix the link was always shown.
    const wl = new WorkingLocationPage(csmPage);
    await wl.gotoFirstProjectDetail();
    const popup = await wl.openPopup(wl.cellButtons().first());
    await expect(popup.getByText('Data as of')).toBeVisible();
    await expect(popup.getByRole('link', { name: /profile/i }), 'CSM popup still offers a Profile link (leads to Access Denied)').toHaveCount(0);
  });
});

test.describe('Employee — Working Location — Dashboard', () => {
  test('TC-EMPWLC-011 @functional Dashboard shows KPIs, trend and department rollup sorted lowest WFO first', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoDashboard();
    const ov = (await (await wl.apiOverview('15d')).json()).data;

    for (const name of ['15 Days', '30 Days', '90 Days', 'Overall'] as const) await expect(wl.windowRadio(name)).toBeVisible();
    await expect(primaryPage.getByText(`Below ${ov.kpis.wfoThresholdPercentage}% WFO`).first()).toBeVisible();
    await expect(primaryPage.getByText(`${ov.kpis.departmentsBelowThreshold} of ${ov.kpis.totalDepartments}`).first()).toBeVisible();
    await expect(primaryPage.getByText('Employees with no data').first()).toBeVisible();
    await expect(primaryPage.getByText(/Company WFO - WFH trend/)).toBeVisible();

    const pcts: number[] = [];
    for (const row of await primaryPage.locator('table').first().locator('tbody tr').all()) {
      const m = /(\d+)% WFO/.exec(await row.innerText());
      if (m) pcts.push(Number(m[1]));
    }
    expect(pcts.length).toBeGreaterThan(0);
    expect(pcts).toEqual([...pcts].sort((a, b) => a - b));
  });

  // FRD §3.4 says a department row drills into the Employee List; dev 6.4.1 instead filters the
  // dashboard's own "Employees" table (chip "Department: <name>"). This checks the built behaviour;
  // the deviation is reported for PM confirmation.
  test('TC-EMPWLC-011 @functional Clicking a department filters the dashboard\'s employee table to it', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoDashboard();
    const btn = wl.departmentButtons().first();
    const dept = (await btn.innerText()).trim();
    await btn.click();
    await expect(primaryPage.getByText(`Department: ${dept}`)).toBeVisible();
    const empTable = primaryPage.locator('table').nth(1);
    await expect(empTable.locator('tbody tr').first()).toBeVisible();
    const depts = await empTable.locator('tbody tr td:nth-child(2)').allInnerTexts();
    expect(depts.length).toBeGreaterThan(0);
    for (const d of depts) expect(d.trim()).toBe(dept);
  });

  test('TC-EMPWLC-011 @functional Switching the dashboard window reloads every section for that window', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoDashboard();
    const req = primaryPage.waitForRequest(r => /working-location\/overview\?window=30d/.test(r.url()));
    await wl.windowRadio('30 Days').click();
    await req;
    await expect(wl.windowRadio('30 Days')).toBeChecked();
    await expect(primaryPage.locator('table').first().locator('thead')).toContainText(/30 days/i);
  });
});
