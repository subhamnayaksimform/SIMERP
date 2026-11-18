import * as path from 'path';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { test, expect } from '../../../fixtures/auth';
import { WorkingLocationPage, WorkingLocation } from '../../../page-objects/employee/working-location.page';

/**
 * Employee Working Location — role-based access (FRD v1.1 §4, §6, §7).
 *
 * Accounts (tests/fixtures/auth.ts): primaryPage = Admin (ceo), pmoPage = PMO, pmPage = PM
 * (hardik.trivedi — also RM of a PM team, so he is entitled to Overall for those reportees),
 * csmPage = CSM, tmPage = TM, emPage = EM, empPage = plain Employee.
 * No RM-only, Delivery-Manager-only or Login-As account exists, so those rows are manual.
 *
 * Every rule is checked at the API as well as the UI: hiding a column is not access control.
 */
const P = WorkingLocationPage.PEOPLE;
// Same storageState files the auth fixtures use; opened per role so one test body can loop over roles.
type Role = { name: string; state: string; dashboard: boolean };
const ROLES: Role[] = [
  { name: 'Admin', state: 'storageState.json', dashboard: true },
  { name: 'PMO', state: 'storageState-pmo.json', dashboard: true },
  { name: 'TM', state: 'storageState-tm.json', dashboard: true },
  { name: 'EM', state: 'storageState-em.json', dashboard: true },
  { name: 'PM', state: 'storageState-pm.json', dashboard: false },
  { name: 'CSM', state: 'storageState-csm.json', dashboard: false },
  { name: 'Employee', state: 'storageState-emp.json', dashboard: false },
];
const opened: BrowserContext[] = [];
async function openAs(browser: Browser, state: string): Promise<Page> {
  const ctx = await browser.newContext({ storageState: path.resolve(__dirname, '../../../fixtures', state) });
  opened.push(ctx);
  return ctx.newPage();
}
test.afterEach(async () => {
  for (const ctx of opened.splice(0)) await ctx.close();
});

test.describe('Employee — Working Location — Dashboard access by role', () => {
  for (const role of ROLES) {
    test(`TC-EMPWLC-025 @security ${role.name} ${role.dashboard ? 'can' : 'cannot'} open the Working Location dashboard (UI + API)`, async ({ browser }) => {
      const page = await openAs(browser, role.state);
      const wl = new WorkingLocationPage(page);
      await wl.gotoDashboard();
      if (role.dashboard) {
        await expect(wl.pageHeading('Working Location')).toBeVisible();
        expect((await wl.apiOverview()).status()).toBe(200);
      } else {
        expect(await wl.isAccessDenied(), `${role.name} reached the dashboard`).toBe(true);
        const api = await wl.apiOverview();
        expect(api.status(), `${role.name} got overview data from the API: ${(await api.text()).slice(0, 200)}`).not.toBe(200);
        const emp = await wl.apiDashboardEmployees();
        expect(emp.status(), `${role.name} got the dashboard employee table from the API`).not.toBe(200);
      }
    });
  }
});

test.describe('Employee — Working Location — Employee (self only)', () => {
  test('TC-EMPWLC-054 @security Employee can read only their own Working Location via the API', async ({ empPage }) => {
    const wl = new WorkingLocationPage(empPage);
    expect((await wl.apiEmployee(P.kashyapEmp)).status()).toBe(200);
    for (const other of [P.punit, P.sagar, P.tarunCsm]) {
      const r = await wl.apiEmployee(other);
      expect(r.status(), `employee read someone else's data (${other})`).not.toBe(200);
    }
    const list = await (await wl.apiList('15d', [P.punit, P.sagar])).json();
    expect(list.data ?? [], 'list endpoint leaked other employees').toHaveLength(0);
  });

  test('TC-EMPWLC-054 @security Employee cannot open another employee\'s profile or the employee list', async ({ empPage }) => {
    const wl = new WorkingLocationPage(empPage);
    await wl.gotoEmployeeProfile(P.punit);
    expect(await wl.isAccessDenied()).toBe(true);
    await expect(wl.section).toHaveCount(0);
    await wl.goto(WorkingLocationPage.EMPLOYEE_LIST_ROUTE);
    expect(await wl.isAccessDenied()).toBe(true);
  });

  test('TC-EMPWLC-054 @security Employee sees Overall on their own card (full self access)', async ({ empPage }) => {
    const wl = new WorkingLocationPage(empPage);
    await wl.gotoOwnProfile();
    expect(Object.keys(await wl.readWindows(wl.section))).toContain('Overall');
  });
});

test.describe('Employee — Working Location — PM / CSM scope', () => {
  test('TC-EMPWLC-056 @security PM gets nothing for employees outside their scope (API)', async ({ pmPage }) => {
    const wl = new WorkingLocationPage(pmPage);
    for (const id of [P.punit, P.sagar, P.kashyapEmp, P.tarunCsm]) {
      expect((await wl.apiEmployee(id)).status(), `PM read ${id}`).not.toBe(200);
    }
    expect((await (await wl.apiList('all', [P.punit, P.sagar])).json()).data ?? []).toHaveLength(0);
  });

  test('TC-EMPWLC-046 @security PM opening an out-of-scope profile sees no Working Location section', async ({ pmPage }) => {
    const wl = new WorkingLocationPage(pmPage);
    await wl.gotoEmployeeProfile(P.punit);
    await expect(pmPage.getByRole('heading', { name: 'Skills' }).or(pmPage.getByText(/failed to load employee details/i)).first()).toBeVisible();
    await expect(wl.section).toHaveCount(0);
  });

  test('TC-EMPWLC-058 @security CSM gets nothing for employees outside their projects (API)', async ({ csmPage }) => {
    const wl = new WorkingLocationPage(csmPage);
    expect((await wl.apiEmployee(P.tarunCsm)).status(), 'CSM can read own data').toBe(200);
    for (const id of [P.punit, P.sagar, P.kashyapEmp]) {
      expect((await wl.apiEmployee(id)).status(), `CSM read ${id}`).not.toBe(200);
    }
  });

  test('TC-EMPWLC-057 @security CSM never receives Overall figures for project members', async ({ csmPage }) => {
    const wl = new WorkingLocationPage(csmPage);
    const listResp = csmPage.waitForResponse(r => /working-location\/list\?/.test(r.url()) && /projectId=/.test(r.url()));
    await wl.gotoFirstProjectDetail();
    const payload = await (await listResp).json();
    const rows: WorkingLocation[] = payload.data ?? [];
    expect(rows.length).toBeGreaterThan(0);
    const leaked = rows.filter(r => r.windows?.overall && r.windows.overall.wfoPercentage !== null).map(r => r.employeePublicId);
    expect(leaked, `API sent Overall figures to a CSM for ${leaked.length} member(s) — UI hides them but the data is exposed`).toEqual([]);

    // Ask for "all time" directly for a member — must not return all-time data either.
    const member = rows[0].employeePublicId;
    const url = (await listResp).url();
    const projectId = /projectId=([0-9a-f-]{36})/.exec(url)![1];
    const direct = await wl.apiList('all', [member], `&projectId=${projectId}`);
    if (direct.status() === 200) {
      const d: WorkingLocation[] = (await direct.json()).data ?? [];
      expect(d.every(r => !r.windows?.overall || r.windows.overall.wfoPercentage === null), 'timeFrame=all returned Overall to a CSM').toBe(true);
    }
  });

  test('TC-EMPWLC-023 @security CSM requesting a member\'s full record does not get the Overall window', async ({ csmPage }) => {
    const wl = new WorkingLocationPage(csmPage);
    const listResp = csmPage.waitForResponse(r => /working-location\/list\?/.test(r.url()) && /projectId=/.test(r.url()));
    await wl.gotoFirstProjectDetail();
    const member = ((await (await listResp).json()).data as WorkingLocation[])[0].employeePublicId;
    const r = await wl.apiEmployee(member);
    if (r.status() === 200) {
      const w = ((await r.json()).data as WorkingLocation).windows;
      expect(w.overall?.wfoPercentage ?? null, 'employees/:id returned Overall for a project member to a CSM').toBeNull();
    }
  });
});

test.describe('Employee — Working Location — TM / EM department scope', () => {
  for (const role of [{ name: 'TM', state: 'storageState-tm.json' }, { name: 'EM', state: 'storageState-em.json' }]) {
    test(`TC-EMPWLC-06${role.name === 'TM' ? 0 : 1} @security ${role.name}'s dashboard covers only their own department(s)`, async ({ primaryPage, browser }) => {
      const admin = new WorkingLocationPage(primaryPage);
      const scoped = new WorkingLocationPage(await openAs(browser, role.state));
      const all = (await (await admin.apiOverview()).json()).data;
      const mine = (await (await scoped.apiOverview()).json()).data;
      const allNames = new Set(all.departments.map((d: { name: string }) => d.name));
      expect(mine.kpis.totalDepartments, `${role.name} sees as many departments as Admin`).toBeLessThan(all.kpis.totalDepartments);
      for (const d of mine.departments) expect(allNames.has(d.name)).toBe(true);
    });

    test(`TC-EMPWLC-065 @security ${role.name} cannot read an out-of-department employee by id (IDOR)`, async ({ browser }) => {
      const wl = new WorkingLocationPage(await openAs(browser, role.state));
      const dash = (await (await wl.apiOverview()).json()).data;
      const myDepts = new Set<string>(dash.departments.map((d: { name: string }) => d.name));
      test.skip(myDepts.has('FRONT END'), `${role.name} manages FRONT END — Punit is in scope`);
      const r = await wl.apiEmployee(P.punit);
      expect(r.status(), `${role.name} read Punit (FRONT END) — outside ${[...myDepts].join(', ')}`).not.toBe(200);
    });

    test(`TC-EMPWLC-069 @security Every employee in ${role.name}'s list belongs to a department they manage`, async ({ browser }) => {
      const page = await openAs(browser, role.state);
      const wl = new WorkingLocationPage(page);
      const myDepts = new Set<string>(((await (await wl.apiOverview()).json()).data.departments).map((d: { name: string }) => d.name));
      await wl.gotoEmployeeList();
      const depts = (await page.locator('table tbody tr td:nth-child(3)').allInnerTexts()).map(s => s.trim()).filter(Boolean);
      const outside = [...new Set(depts.filter(d => !myDepts.has(d)))];
      expect(outside, `${role.name} list shows people from departments not on their dashboard`).toEqual([]);
    });
  }

  test('TC-EMPWLC-006 @security TM sees Overall for an in-scope employee', async ({ tmPage }) => {
    const wl = new WorkingLocationPage(tmPage);
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    try {
      const popup = await wl.openPopup(wl.cellButtons().first());
      expect(Object.keys(await wl.readWindows(popup))).toContain('Overall');
    } finally {
      await wl.closePopup();
      await wl.setColumn(was);
    }
  });
});

test.describe('Employee — Working Location — Global roles', () => {
  test('TC-EMPWLC-069 @security PMO has the same global data as Admin', async ({ primaryPage, pmoPage }) => {
    const a = (await (await new WorkingLocationPage(primaryPage).apiOverview()).json()).data;
    const p = (await (await new WorkingLocationPage(pmoPage).apiOverview()).json()).data;
    expect(p.kpis.totalDepartments).toBe(a.kpis.totalDepartments);
    for (const id of Object.values(P)) expect((await new WorkingLocationPage(pmoPage).apiEmployee(id)).status()).toBe(200);
  });
});

test.describe('Employee — Working Location — Read-only and input hardening', () => {
  test('TC-EMPWLC-024 @security No write method is accepted on Working Location endpoints', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    for (const method of ['post', 'put', 'patch', 'delete'] as const) {
      const r = await wl.apiWrite(method, `/employees/${P.punit}`);
      expect(r.status(), `${method.toUpperCase()} employees/:id → ${r.status()}`).toBeGreaterThanOrEqual(400);
      expect(r.status()).toBeLessThan(500);
    }
    const after = (await (await wl.apiEmployee(P.punit)).json()).data as WorkingLocation;
    expect(after.days.length).toBe(7);
  });

  test('TC-EMPWLC-066 @security Injection payloads in timeFrame/window are rejected cleanly', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    for (const bad of ["15d' OR '1'='1", '<script>alert(1)</script>', '15d;DROP TABLE x', '../../etc/passwd']) {
      const r1 = await wl.apiList(bad, [P.punit]);
      expect(r1.status(), `list timeFrame=${bad}`).toBe(400);
      const r2 = await wl.apiOverview(bad);
      expect(r2.status(), `overview window=${bad}`).toBeGreaterThanOrEqual(400);
      expect(r2.status()).toBeLessThan(500);
      expect(await r2.text()).not.toMatch(/stack|at \w+ \(|QueryFailedError|SELECT /i);
    }
  });
});
