import { test, expect } from '../../../fixtures/auth';
import { WorkingLocationPage, WorkingLocation, Overview } from '../../../page-objects/employee/working-location.page';

/**
 * Employee Working Location — integration: the same figures agree across placements and the API (FRD v1.1 §3, §7).
 */
test.describe('Employee — Working Location — Integration', () => {
  test('TC-EMPWLC-086 @integration The same employee shows identical figures in the list, popup, dashboard and API', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    const api = (await (await wl.apiEmployee(WorkingLocationPage.PEOPLE.punit)).json()).data as WorkingLocation;
    const want15 = Math.round(api.windows['15d']!.wfoPercentage!);

    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    try {
      const cell = wl.cellFor('Punit Patel');
      expect((await wl.readCell(cell))?.wfo, 'list cell').toBe(want15);
      const popup = await wl.openPopup(cell);
      expect((await wl.readWindows(popup))['15 days'].wfo, 'popup').toBe(want15);
    } finally {
      await wl.closePopup();
      await wl.setColumn(was);
    }

    const dashRows = (await (await wl.apiDashboardEmployees('15d', 1, 100)).json()).data.items as (WorkingLocation & { publicId: string; wfoPercentage: number })[];
    const asList = (await (await wl.apiList('15d', [WorkingLocationPage.PEOPLE.punit])).json()).data as WorkingLocation[];
    expect(Math.round(asList[0].windows['15d']!.wfoPercentage!), 'list API').toBe(want15);
    const onDash = dashRows.find(r => r.publicId === WorkingLocationPage.PEOPLE.punit);
    if (onDash) expect(Math.round(onDash.wfoPercentage)).toBe(want15);
  });

  test('TC-EMPWLC-087 @integration Dashboard KPIs reconcile with its department table', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await wl.gotoDashboard();
    const ov = (await (await wl.apiOverview('15d')).json()).data as Overview;
    await expect(primaryPage.getByText(`${ov.kpis.departmentsBelowThreshold} of ${ov.kpis.totalDepartments}`).first()).toBeVisible();
    await expect(primaryPage.getByText(/Showing 1 - \d+ of (\d+) results/).first()).toContainText(`of ${ov.kpis.totalDepartments} results`);
    await expect(primaryPage.getByText(`${Math.round(ov.kpis.companyWfoPercentage)}%`).first()).toBeVisible();
  });
});
