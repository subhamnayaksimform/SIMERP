import { test, expect } from '../../../fixtures/auth';
import { CertificationsPage } from '../../../page-objects/employee/certifications.page';

/**
 * Employee Certifications — functional. Read-only: nothing here saves a certification. Saving through Edit is covered in edit.spec.ts, which restores what it changes.
 * Certificate types used (seeded on dev): AWS / AWS Certified Cloud Practitioner (3 years),
 * Microsoft / Azure Fundamentals (AZ-900) (2 years), Claude / Claude Prompt Engineering Essentials (never expires).
 */
const AWS: [string, string] = ['AWS', 'AWS Certified Cloud Practitioner'];
const AZURE: [string, string] = ['Microsoft', 'Azure Fundamentals (AZ-900)'];
const NEVER: [string, string] = ['Claude', 'Claude Prompt Engineering Essentials'];
const PDF = { name: 'certification-proof.pdf', mimeType: 'application/pdf', buffer: Buffer.from('%PDF-1.4\n%%EOF\n') };

/** Local date as the app shows it, dd/mm/yyyy, optionally shifted by whole years/months. */
function ddmmyyyy(d: Date): string {
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}
function plus(years: number, months = 0): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() + years, d.getMonth() + months);
  return ddmmyyyy(d);
}

test.describe('Employee — Certifications — Functional', () => {
  test('TC-EMPCRT-010 @functional My Certificate rows match the /certifications/mine API', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open();
    const api = (await (await c.apiGet('/mine?page=1&limit=100')).json()).data;
    expect(await c.footerTotal()).toBe(api.total);
    if (api.total === 0) await expect(primaryPage.getByText('No certifications found')).toBeVisible();
    else await expect(c.rows).toHaveCount(Math.min(api.total, 100));
    for (const item of api.items.slice(0, 10)) await expect(c.table).toContainText(item.title);
  });

  test('TC-EMPCRT-011 @functional Organisation KPI cards match /certifications/organisation/summary', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation');
    const api = (await (await c.apiGet('/organisation/summary')).json()).data;
    expect(await c.readStats()).toEqual({ total: api.total, active: api.active, expired: api.expired, needAttention: api.needAttention });
  });

  test('TC-EMPCRT-012 @functional Total certifications equals Active + Expired', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation');
    const s = await c.readStats();
    expect(s.total).toBe(s.active + s.expired);
    expect(s.needAttention).toBeLessThanOrEqual(s.active);
  });

  test('TC-EMPCRT-139 @functional Group by Certificate: each certificate\'s Active / Expired holders match the API counts', async ({ primaryPage }) => {
    // Replaces TC-EMPCRT-013 (the count columns were removed in 6.9.0, SI4-T1685).
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation');
    const groups = await c.readCatalogue();
    expect(groups.length).toBeGreaterThan(0);
    const api = (await (await c.apiGet('/organisation?limit=300')).json()).data.items as { title: string; partnership: { name: string }; activeCount: number; expiredCount: number }[];
    const wrong = groups.filter(g => {
      const hit = api.find(i => i.title === g.title && i.partnership.name === g.partnership);
      return !hit || hit.activeCount !== g.active || hit.expiredCount !== g.expired;
    });
    expect(wrong, 'groups whose holder rows differ from /organisation counts').toEqual([]);
    expect(groups.reduce((n, g) => n + g.employees, 0)).toBe((await (await c.apiGet('/organisation/summary')).json()).data.total);
  });

  test('TC-EMPCRT-014 @functional Search filters the catalogue and is kept in the URL', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation', 'groupBy=certificate'); // the per-certificate view (the old catalogue)
    await c.searchFor('snow');
    await expect(primaryPage).toHaveURL(/[?&]search=snow/);
    await expect.poll(async () => (await c.readCatalogue()).filter(r => !`${r.title} ${r.partnership}`.toLowerCase().includes('snow')).length).toBe(0);
    expect((await c.readCatalogue()).length).toBeGreaterThan(0);
    const api = (await (await c.apiGet('/organisation/summary?search=snow')).json()).data;
    await expect.poll(async () => (await c.readStats()).total).toBe(api.total);
  });

  test('TC-EMPCRT-015 @functional Search with no match shows the empty state', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation');
    await c.searchFor('zzzqqq-no-match');
    await expect(primaryPage.getByText('No certifications found')).toBeVisible();
    await expect(primaryPage.getByText('No certifications match your search or filters.')).toBeVisible();
  });

  test('TC-EMPCRT-016 @functional Department filter re-scopes table and KPIs and survives reload', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation');
    await c.pickDepartment('FRONT END');
    await expect(primaryPage).toHaveURL(/[?&]departmentIds=[0-9a-f-]{36}/);
    const deptId = new URL(primaryPage.url()).searchParams.get('departmentIds');
    const api = (await (await c.apiGet(`/organisation/summary?departmentIds=${deptId}`)).json()).data;
    await expect.poll(async () => (await c.readStats()).total).toBe(api.total);
    await expect.poll(() => c.footerTotal()).toBe(api.total);
    const col = (await c.table.getByRole('columnheader').allInnerTexts()).findIndex(h => h.trim().startsWith('Department'));
    expect(col).toBeGreaterThan(-1);
    const depts = await c.rows.evaluateAll((trs, i) => trs.map(tr => (tr.querySelectorAll('td')[i] as HTMLElement | undefined)?.innerText.trim()), col);
    expect(new Set(depts)).toEqual(new Set(['FRONT END']));

    await primaryPage.reload();
    await c.waitForPageLoad();
    await expect(primaryPage).toHaveURL(new RegExp(`departmentIds=${deptId}`));
    await expect.poll(() => c.footerTotal()).toBe(api.total);
  });

  test('TC-EMPCRT-017 @functional Partnership filter lists every partnership from the API', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open();
    const api = (await (await c.apiGet('/partnerships?limit=300&sortBy=name&sortOrder=asc')).json()).data;
    expect(await c.columnFilterOptions('Partnership')).toEqual(api.items.map((p: { name: string }) => p.name));
  });

  test('TC-EMPCRT-018 @functional Status filter offers Active, Expired and Need Attention', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open();
    expect(await c.columnFilterOptions('Status')).toEqual(['Active', 'Expired', 'Need Attention']);
  });

  test('TC-EMPCRT-140 @functional An old holders link still lists that certificate\'s holders', async ({ primaryPage }) => {
    // Replaces TC-EMPCRT-019: the "View employees holding" button is gone in 6.9.0; the route is kept for old links.
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation');
    const row = (await c.readCatalogue()).find(r => r.active > 0 && r.expired > 0);
    expect(row, 'needs a certificate with both active and expired holders').toBeTruthy();
    const partnershipId = await c.partnershipId(row!.partnership);
    await c.goto(`${CertificationsPage.ROUTE}/holders?partnershipId=${partnershipId}&title=${encodeURIComponent(row!.title)}`);
    await expect.poll(() => c.footerTotal()).toBe(row!.employees);
    await expect(c.rowsWithCell('Active')).toHaveCount(row!.active);
    await expect(c.rowsWithCell('Expired')).toHaveCount(row!.expired);
  });

  test('TC-EMPCRT-141 @functional Status = Expired in Group by Certificate shows only expired holders', async ({ primaryPage }) => {
    // Replaces TC-EMPCRT-020 (the per-certificate "expired" count popover was removed in 6.9.0).
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation', 'groupBy=certificate&status=EXPIRED');
    const groups = await c.readCatalogue();
    expect(groups.length).toBeGreaterThan(0);
    expect(groups.filter(g => g.active > 0), 'groups still showing active holders').toEqual([]);
    expect(groups.reduce((n, g) => n + g.expired, 0)).toBe((await (await c.apiGet('/organisation/summary')).json()).data.expired);
  });

  test('TC-EMPCRT-021 @functional New Joiners: Follow-Up follows Certifications Added', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('new-joiners');
    const rows = await c.rows.evaluateAll(trs => trs.map(tr => {
      const td = Array.from(tr.querySelectorAll('td')).map(x => (x as HTMLElement).innerText.trim());
      return { added: td[3], followUp: td[4] };
    }));
    expect(rows.length).toBeGreaterThan(0);
    for (const r of rows) {
      if (r.added === 'Yes') expect(r.followUp).toBe('No action needed');
      // SI4-T1685: a joiner who answered "No" on the reminder prompt reads "Don't hold any certificate".
      else expect(r.followUp).toMatch(/^(Send Reminder|No action needed|Don't hold any certificate)$/);
    }
  });

  test('TC-EMPCRT-022 @functional Admin can add on behalf of another employee', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open();
    await c.openDrawer();
    const employee = c.drawer.getByRole('combobox', { name: 'Select Employee' });
    await expect(employee).toHaveCount(0);
    await c.onBehalf.click();
    await expect(c.onBehalf).toBeChecked();
    await expect(employee).toBeVisible();
    await employee.click();
    await primaryPage.keyboard.type('Kashyap');
    await expect(primaryPage.getByRole('option').first()).toContainText('Kashyap');
  });

  test('TC-EMPCRT-023 @functional Never-expires certificate has no Expire Date to pick', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    await c.openDrawer();
    await c.choose(...NEVER);
    await expect(c.expireDate).toHaveCount(0);
    await expect(c.drawer).toContainText('This certificate never expires.');
  });

  test('TC-EMPCRT-024 @functional Standard certificate pre-fills Expire Date from its validity and caps the calendar', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    await c.openDrawer();
    await c.choose(...AWS); // 3 years
    await c.pickDate(c.issueDate, /^Today/);
    await expect(c.issueDate).toHaveText(ddmmyyyy(new Date()));
    await expect(c.expireDate).toHaveText(plus(3));
    await expect(c.expireDate).toBeEnabled(); // a suggestion since T1559, no longer read-only

    // The calendar opens on the pre-filled month; days after the validity cap are disabled.
    await c.openCalendar(c.expireDate);
    const cap = new Date(); cap.setFullYear(cap.getFullYear() + 3); cap.setHours(0, 0, 0, 0);
    const toDate = (mdy: string) => { const [m, d, y] = mdy.split('/').map(Number); return new Date(y, m - 1, d); };
    const after = (await c.calendarDays()).filter(x => toDate(x.day) > cap);
    expect(after.filter(x => !x.disabled), 'days after the 3-year cap that are still clickable').toEqual([]);
    await empPage.keyboard.press('Escape');

    await c.choose(...AZURE); // 2 years: a new partnership restarts the pick; the pre-fill follows the new type
    await expect(c.issueDate).toHaveText(ddmmyyyy(new Date()));
    await expect(c.expireDate).toHaveText(plus(2));
  });

  test('TC-EMPCRT-025 @functional Save enables only when every required field is filled', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    await c.openDrawer();
    await c.choosePartnership(AWS[0]);
    await expect(c.save).toBeDisabled();
    await c.chooseCertificate(AWS[1]);
    await expect(c.save).toBeDisabled();
    await c.pickDate(c.issueDate, /^Today/);
    await expect(c.save).toBeDisabled();
    await c.proofUrl.fill('https://example.com/proof');
    await expect(c.save).toBeDisabled(); // Exam Email is required since 6.9.0 (SI4-T1685)
    await c.examEmail.fill('qa.never.saved@example.com');
    await expect(c.save).toBeEnabled();
  });

  test('TC-EMPCRT-026 @functional Uploading a valid PDF counts as proof', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    await c.openDrawer();
    await c.choose(...NEVER);
    await c.pickDate(c.issueDate, /^Today/);
    await c.examEmail.fill('qa.never.saved@example.com');
    await expect(c.save).toBeDisabled();
    await c.proofFile.setInputFiles(PDF);
    await expect(c.drawer).toContainText('certification-proof.pdf');
    await expect(c.save).toBeEnabled();
  });

  test('TC-EMPCRT-027 @functional Cancel closes the drawer without saving', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    const before = await c.footerTotal();
    const posts: string[] = [];
    empPage.on('request', r => { if (r.method() === 'POST' && r.url().includes('/certifications')) posts.push(r.url()); });
    await c.openDrawer();
    await c.choose(...AWS);
    await c.drawer.getByRole('button', { name: 'Cancel' }).click();
    await expect(c.drawer).toBeHidden();
    expect(posts).toEqual([]);
    expect(await c.footerTotal()).toBe(before);
  });

  test('TC-EMPCRT-028 @functional Tab deep links open the right tab', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation');
    await expect(c.tab('Organisation Level')).toHaveAttribute('aria-selected', 'true');
    await c.open('new-joiners');
    await expect(c.tab('New Joiners List')).toHaveAttribute('aria-selected', 'true');
  });
});
