import { test, expect } from '../../../fixtures/auth';
import { CertificationsPage } from '../../../page-objects/employee/certifications.page';

/**
 * Employee Certifications — Recently Resigned tab (SI4-T1559, live on dev 2026-10-23).
 * Admin / Program Owner only (`certifications.manage_new_joiners`). Lists the certificates of people
 * who joined in the last 6 months and have resigned: "On notice" until their last working day,
 * "Left" after it (or once deactivated). One row per certificate. Read-only.
 */
type Row = { title: string; employee: { name: string }; dateOfJoining: string; resignationDate: string; lastWorkingDate: string | null; employmentStatus: 'ON_NOTICE' | 'LEFT' };

function iso(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

test.describe('Employee — Certifications — Recently Resigned', () => {
  test('TC-EMPCRT-099 @security Recently Resigned is visible to Admin only', async ({ primaryPage, pmPage, pmoPage, tmPage, emPage, csmPage, empPage }) => {
    test.setTimeout(180_000); // opens the app as 7 roles
    const admin = new CertificationsPage(primaryPage);
    await admin.open('recently-resigned');
    await expect(admin.tab('Recently Resigned')).toHaveAttribute('aria-selected', 'true');
    expect((await admin.apiGet('/resigned-joiners?limit=100')).status()).toBe(200);

    for (const [role, page] of [['PM', pmPage], ['PMO', pmoPage], ['TM', tmPage], ['EM', emPage], ['CSM', csmPage], ['Employee', empPage]] as const) {
      const c = new CertificationsPage(page);
      await c.open('recently-resigned');
      await expect.soft(c.tab('Recently Resigned'), role).toHaveCount(0);
      expect.soft((await c.apiGet('/resigned-joiners?limit=100')).status(), `${role} API`).toBe(403);
    }
  });

  test('TC-EMPCRT-100 @functional Only people who joined in the last 6 months and resigned are listed, with the right status', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('recently-resigned');
    const body = (await (await c.apiGet('/resigned-joiners?limit=300')).json()).data;
    const items = body.items as Row[];
    expect(items.length, 'needs at least one resigned joiner on dev').toBeGreaterThan(0);

    const today = new Date(); today.setHours(0, 0, 0, 0);
    const from = new Date(today); from.setMonth(from.getMonth() - 6);
    for (const r of items) {
      const who = `${r.employee.name} / ${r.title}`;
      expect.soft(r.dateOfJoining >= iso(from) && r.dateOfJoining <= iso(today), `${who} joined ${r.dateOfJoining}`).toBe(true);
      expect.soft(r.resignationDate, `${who} has a resignation date`).toBeTruthy();
      if (r.lastWorkingDate && r.lastWorkingDate < iso(today)) expect.soft(r.employmentStatus, `${who} past last working day`).toBe('LEFT');
    }
    expect(await c.footerTotal()).toBe(body.total);
    for (const h of ['Employee Name', 'Department', 'Certificate', 'Partnership', 'Expiry Date', 'Date of Joining', 'Resignation Date', 'Last Working Day', 'Employment']) {
      await expect.soft(c.header(h), h).toBeVisible();
    }
  });

  test('TC-EMPCRT-101 @functional Employment filter and search narrow the list', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('recently-resigned');
    const all = (await (await c.apiGet('/resigned-joiners?limit=300')).json()).data as { total: number; items: Row[] };
    const count = (s: string) => all.items.filter(i => i.employmentStatus === s).length;
    for (const status of ['LEFT', 'ON_NOTICE'] as const) {
      const r = (await (await c.apiGet(`/resigned-joiners?limit=300&employmentStatus=${status}`)).json()).data;
      expect.soft(r.total, status).toBe(count(status));
    }
    expect(count('LEFT') + count('ON_NOTICE')).toBe(all.total);

    const someone = all.items[0].employee.name.split(' ')[0];
    const expected = all.items.filter(i => i.employee.name.includes(someone)).length;
    await c.searchFor(someone);
    // The table should settle on that person's rows only (search is debounced, so poll).
    await expect.poll(async () => {
      const names = await c.rows.locator('td:first-child').allInnerTexts();
      return { rows: names.length, others: names.filter(n => !n.includes(someone)).length };
    }, { timeout: 15000 }).toEqual({ rows: expected, others: 0 });
  });

  test('TC-EMPCRT-102 @a11y Recently Resigned shows a readable word for missing values', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('recently-resigned');
    const lines = (await c.rows.locator('td').allInnerTexts()).flatMap(t => t.split('\n').map(s => s.trim()));
    expect(lines.filter(l => /^(N\/A|NA|-|—|null|undefined)$/i.test(l)), 'bare placeholders in Recently Resigned').toEqual([]);
  });
});
