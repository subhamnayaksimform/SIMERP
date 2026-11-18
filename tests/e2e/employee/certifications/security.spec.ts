import * as path from 'path';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { test, expect } from '../../../fixtures/auth';
import { CertificationsPage } from '../../../page-objects/employee/certifications.page';

/**
 * Employee Certifications — role-based access, checked in the UI and at the API.
 * Accounts (tests/fixtures/auth.ts): primaryPage = Admin, pmPage = PM, tmPage = TM, empPage = Employee.
 * PMO (TC-EMPCRT-045) is manual until product confirms whether PMO should have org-wide access.
 */
const opened: BrowserContext[] = [];
async function openAs(browser: Browser, state: string): Promise<Page> {
  const ctx = await browser.newContext({ storageState: path.resolve(__dirname, '../../../fixtures', state) });
  opened.push(ctx);
  return ctx.newPage();
}
test.afterEach(async () => { await Promise.all(opened.splice(0).map(c => c.close())); });

test.describe('Employee — Certifications — Security', () => {
  test('TC-EMPCRT-040 @security Employee cannot reach Organisation or New Joiners by URL', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    for (const tab of ['organisation', 'new-joiners'] as const) {
      await c.open(tab);
      await expect(c.tabs, tab).toHaveCount(0);
      await expect(c.stats, tab).toHaveCount(0);
      await expect(c.header('Employees'), tab).toHaveCount(0);
      await expect(c.header('Date of Joining'), tab).toHaveCount(0);
    }
  });

  test('TC-EMPCRT-041 @security PM and TM see My Certificate and their own scope level only', async ({ browser }) => {
    // Since SI4-T1559 (26-27/10) the second tab is named after the permission scope: PM = Team Level,
    // TM = Department Level (verified live 2026-11-12). Neither gets Organisation Level any more.
    for (const [state, scopeTab] of [['storageState-pm.json', 'Team Level'], ['storageState-tm.json', 'Department Level']] as const) {
      const c = new CertificationsPage(await openAs(browser, state));
      await c.open();
      await expect(c.tabs, state).toHaveText(['My Certificate', scopeTab]);
      await c.open('new-joiners');
      await expect(c.tab('My Certificate'), state).toHaveAttribute('aria-selected', 'true');
      await expect(c.header('Date of Joining'), state).toHaveCount(0);
    }
  });

  test('TC-EMPCRT-042 @security Employee API: New Joiners and Program Owners forbidden, other data limited to self', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    expect((await c.apiGet('/new-joiners?page=1&limit=100')).status()).toBe(403);
    expect((await c.apiGet('/program-owners?limit=100')).status()).toBe(403);

    const mine = (await (await c.apiGet('/mine?page=1&limit=100')).json()).data;
    const all = await c.apiGet('?page=1&limit=100');
    expect(all.status()).toBe(200);
    const items = (await all.json()).data.items as { publicId: string }[];
    const own = new Set((mine.items as { publicId: string }[]).map(i => i.publicId));
    expect(items.filter(i => !own.has(i.publicId)), 'other people\'s certifications returned to an Employee').toEqual([]);

    const summary = (await (await c.apiGet('/organisation/summary')).json()).data;
    expect(summary.total, 'org summary for an Employee covers only their own certs').toBe(mine.total);
  });

  test('TC-EMPCRT-043 @security Employee cannot add a certification for someone else via the API', async ({ empPage, primaryPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    const someoneElse = '12e776cb-07c6-40c7-b230-01f3dae14565'; // Kashyap Chauhan, FRONT END — not the empPage account
    const r = await c.apiCreate({
      certificationTypeId: await c.certificateTypeId('AWS', 'AWS Certified Cloud Practitioner'),
      issueDate: '2026-10-01', expiryDate: '2027-10-01', proofUrl: 'https://example.com/qa-neg', employeeId: someoneElse,
      examEmail: 'qa.neg@example.com', // required since 6.9.0 — without it the request fails validation (400) before the scope check
    });
    if (r.ok()) {
      // Safety net: never leave a wrongly created record on someone else's profile.
      const admin = new CertificationsPage(primaryPage);
      await admin.open();
      await primaryPage.request.delete(admin.api(`/${(await r.json()).data.publicId}`), { data: { reason: 'WRONG_EMPLOYEE' } });
    }
    expect(r.status()).toBe(403);
  });

  test('TC-EMPCRT-044 @security Only Admin sees Add Partnership / Add Program Owner, on Organisation Level', async ({ primaryPage, pmPage, empPage }) => {
    const admin = new CertificationsPage(primaryPage);
    await admin.open();
    await expect(primaryPage.getByRole('button', { name: 'Add Partnership' })).toHaveCount(0);
    await admin.open('organisation');
    await expect(primaryPage.getByRole('button', { name: 'Add Partnership' })).toBeVisible();
    await expect(primaryPage.getByRole('button', { name: 'Add Program Owner' })).toBeVisible();

    const pm = new CertificationsPage(pmPage);
    await pm.open('organisation');
    await expect(pmPage.getByRole('button', { name: /Add Partnership|Add Program Owner/ })).toHaveCount(0);

    const emp = new CertificationsPage(empPage);
    await emp.open();
    await expect(empPage.getByRole('button', { name: /Add Partnership|Add Program Owner/ })).toHaveCount(0);
    await emp.openDrawer();
    await expect(emp.onBehalf).toHaveCount(0);
  });
});
