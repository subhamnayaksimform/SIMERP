import { Page, expect } from '@playwright/test';
import { test } from '../../../fixtures/auth';

/**
 * SI4-T1685 "Certification Module CR" (Bhargav, merged to development 13/11/2026, live on dev 6.9.0).
 * Source: the Zoho task's 15-point list + backend PR #633 / frontend PR #565. Nothing here saves or deletes:
 * delete calls only go out where the server must refuse them (the one real delete was a one-off, user-approved run).
 *
 * Cases marked "CR gap" assert what the CR asks for; they fail while the CR point is not built.
 */
const API = (process.env.API_BASE_URL || 'https://simerp-dev-api.simform.solutions') + '/api/v1/certifications';
const ROUTE = '/employee/certifications';
const OWN = 'QA-E2E sample certificate'; // kashyap.patel's approved QA record (2026-10-23)

const open = async (page: Page, qs = '') => {
  await page.goto(ROUTE + (qs ? `?${qs}` : ''));
  await page.getByText(/Showing \d+ - \d+ of \d+ results|No certifications found/).first().waitFor();
};
const footerTotal = async (page: Page) =>
  Number(((await page.getByText(/Showing \d+ - \d+ of \d+ results/).innerText()).match(/of (\d+)/) || [])[1]);
const apiJson = async (page: Page, path: string) => (await page.request.get(API + path)).json();
const csvRows = (text: string) => text.split(/\r?\n/).filter(Boolean);
const groupBy = async (page: Page, option: 'None' | 'Certificate' | 'Employee') => {
  await page.getByRole('button', { name: 'Group certifications by' }).click();
  await page.getByRole('menuitemradio', { name: option }).click();
};
const CSV_HEADER = 'Employee Name,Employee Email,Department,Certification Title,Partnership,Exam Email,Status,Issue Date,Expiry Date,Badge Link';

test.describe('Employee — Certifications — SI4-T1685 CR', () => {
  test.setTimeout(120_000);

  // ── CR 1: Delete ────────────────────────────────────────────────────────────────────────────
  test('TC-EMPCRT-108 @smoke Employee has Edit and Delete on every own certificate row', async ({ empPage }) => {
    await open(empPage);
    const mine = (await apiJson(empPage, '/mine?limit=100')).data.items as { title: string }[];
    expect(mine.length).toBeGreaterThan(0);
    for (const { title } of mine) {
      await expect(empPage.getByRole('button', { name: `Delete ${title}`, exact: true }).first()).toBeVisible();
      await expect(empPage.getByRole('button', { name: `Edit ${title}`, exact: true }).first()).toBeVisible();
    }
  });

  test('TC-EMPCRT-109 @negative Delete dialog needs a reason and offers the four reasons; Cancel keeps the record', async ({ empPage }) => {
    await open(empPage);
    await empPage.getByRole('button', { name: `Delete ${OWN}`, exact: true }).click();
    const dlg = empPage.getByRole('dialog', { name: 'Delete this certificate?' });
    await expect(dlg).toContainText(`${OWN} will be removed from every view and report.`);
    await expect(dlg).toContainText('You can undo this for a short while from the toast.');
    await dlg.getByRole('button', { name: 'Yes, Delete' }).click();
    await expect(dlg.getByText('Pick a reason.')).toBeVisible();
    await dlg.getByRole('combobox').click();
    await expect(empPage.getByRole('option')).toHaveText(['Wrong entry', 'Duplicate entry', 'Added for the wrong employee', 'Other']);
    await empPage.keyboard.press('Escape');
    await dlg.getByRole('button', { name: 'Cancel' }).click();
    await expect(dlg).toBeHidden();
    const mine = (await apiJson(empPage, '/mine?limit=100')).data.items as { title: string }[];
    expect(mine.map(m => m.title)).toContain(OWN);
  });

  test('TC-EMPCRT-110 @security Employee and TM cannot delete someone else\'s certificate (404)', async ({ empPage, tmPage, primaryPage }) => {
    await open(primaryPage); await open(empPage); await open(tmPage);
    const org = (await apiJson(primaryPage, '?limit=100')).data.items as { publicId: string; employee: { email?: string; name: string } }[];
    const other = org.find(c => !/kashyap/i.test(c.employee.name))!;
    const r1 = await empPage.request.delete(`${API}/${other.publicId}`, { data: { reason: 'WRONG_ENTRY' }, failOnStatusCode: false });
    expect(r1.status()).toBe(404);
    const team = (await apiJson(tmPage, '?limit=100')).data.items as { publicId: string; employee: { name: string } }[];
    const member = team.find(c => !/sudhansu/i.test(c.employee.name));
    expect(member, 'TM scope has a team member certificate').toBeTruthy();
    const r2 = await tmPage.request.delete(`${API}/${member!.publicId}`, { data: { reason: 'WRONG_ENTRY' }, failOnStatusCode: false });
    expect(r2.status()).toBe(404);
    const r3 = await empPage.request.post(`${API}/${other.publicId}/restore`, { failOnStatusCode: false });
    expect(r3.status()).toBe(404);
  });

  test('TC-EMPCRT-111 @negative Delete API rejects a missing or unknown reason (400)', async ({ empPage }) => {
    await open(empPage);
    const own = ((await apiJson(empPage, '/mine?limit=100')).data.items as { publicId: string; title: string }[]).find(m => m.title === OWN)!;
    const none = await empPage.request.delete(`${API}/${own.publicId}`, { data: {}, failOnStatusCode: false });
    const bad = await empPage.request.delete(`${API}/${own.publicId}`, { data: { reason: 'BECAUSE' }, failOnStatusCode: false });
    // Safety net: never leave the shared QA record deleted.
    for (const r of [none, bad]) if (r.ok()) await empPage.request.post(`${API}/${own.publicId}/restore`);
    expect(none.status()).toBe(400);
    expect(await none.text()).toContain('reason is required');
    expect(bad.status()).toBe(400);
    expect(await bad.text()).toContain('WRONG_ENTRY, DUPLICATE, WRONG_EMPLOYEE, OTHER');
  });

  test('TC-EMPCRT-112 @functional Admin sees Delete on other employees\' certificates on Organisation Level', async ({ primaryPage }) => {
    await open(primaryPage, 'tab=organisation');
    await groupBy(primaryPage, 'None');
    await primaryPage.getByRole('searchbox').fill('Kashyap');
    await expect(primaryPage.getByText(/Showing \d+ - \d+ of \d+ results/)).toBeVisible();
    await expect(primaryPage.getByRole('button', { name: `Delete ${OWN}`, exact: true }).first()).toBeVisible({ timeout: 15_000 });
    await primaryPage.getByRole('button', { name: `Delete ${OWN}`, exact: true }).first().click();
    const dlg = primaryPage.getByRole('dialog', { name: 'Delete this certificate?' });
    await expect(dlg).toContainText(`${OWN} for Kashyap Patel will be removed from every view and report.`);
    await dlg.getByRole('button', { name: 'Cancel' }).click();
  });

  // ── CR 5: Program manager tabular view, filters ─────────────────────────────────────────────
  test('TC-EMPCRT-113 @functional Organisation Level lists one row per certificate with employee, dates and badge link', async ({ primaryPage }) => {
    await open(primaryPage, 'tab=organisation');
    await groupBy(primaryPage, 'None');
    for (const h of ['Certification Title', 'Partnership', 'Employee Name', 'Exam Email', 'Department', 'Status', 'Issue Date', 'Expiry Date']) {
      await expect(primaryPage.getByRole('columnheader', { name: new RegExp(`^${h}`) }).first()).toBeVisible();
    }
    const summary = (await apiJson(primaryPage, '/organisation/summary')).data;
    expect(await footerTotal(primaryPage)).toBe(summary.total);
    // An employee with several certificates appears once per certificate.
    await primaryPage.getByRole('searchbox').fill('Kashyap Patel');
    await expect.poll(() => footerTotal(primaryPage)).toBeGreaterThan(1);
  });

  test('TC-EMPCRT-114 @functional Group by offers None / Certificate / Employee and keeps the choice in the URL', async ({ primaryPage }) => {
    await open(primaryPage, 'tab=organisation');
    await groupBy(primaryPage, 'Certificate');
    await expect(primaryPage).toHaveURL(/groupBy=certificate/);
    await expect(primaryPage.getByRole('button', { name: /^Show or hide the holders of / }).first()).toBeVisible();
    await groupBy(primaryPage, 'Employee');
    await expect(primaryPage).toHaveURL(/groupBy=employee/);
    await expect(primaryPage.getByRole('button', { name: /^View .+'s profile$/ }).first()).toBeVisible();
  });

  test('TC-EMPCRT-115 @functional Need Attention card filters the list to the card count (CR 11)', async ({ primaryPage }) => {
    await open(primaryPage, 'tab=organisation');
    const summary = (await apiJson(primaryPage, '/organisation/summary')).data;
    await primaryPage.getByLabel('Certification summary').getByText('Need Attention', { exact: true }).click();
    await expect(primaryPage).toHaveURL(/status=NEED_ATTENTION/);
    await expect.poll(() => footerTotal(primaryPage)).toBe(summary.needAttention);
    const list = (await apiJson(primaryPage, '?limit=100&status=NEED_ATTENTION')).data.items as { status: string; expiryDate: string }[];
    const in30 = Date.now() + 31 * 86_400_000;
    for (const c of list) {
      expect(c.status).toBe('ACTIVE');
      expect(new Date(c.expiryDate).getTime()).toBeLessThan(in30);
    }
  });

  test('TC-EMPCRT-116 @functional Search finds certificates by exam code and by employee name', async ({ primaryPage }) => {
    await open(primaryPage, 'tab=organisation');
    const byCode = (await apiJson(primaryPage, '?limit=100&search=AZ-900')).data.items as { title: string }[];
    expect(byCode.length).toBeGreaterThan(0);
    for (const c of byCode) expect(c.title).toContain('AZ-900');
    const byName = (await apiJson(primaryPage, '?limit=100&search=Kashyap')).data.items as { employee: { name: string } }[];
    expect(byName.length).toBeGreaterThan(0);
    for (const c of byName) expect(c.employee.name).toMatch(/Kashyap/i);
  });

  test('TC-EMPCRT-117 @functional Expiry date range filter returns only certificates expiring in the range', async ({ primaryPage }) => {
    await open(primaryPage, 'tab=organisation');
    const from = new Date().toISOString().slice(0, 10);
    const to = new Date(Date.now() + 60 * 86_400_000).toISOString().slice(0, 10);
    const items = (await apiJson(primaryPage, `?limit=300&expiryFrom=${from}&expiryTo=${to}`)).data.items as { expiryDate: string | null }[];
    expect(items.length).toBeGreaterThan(0);
    for (const c of items) {
      expect(c.expiryDate).not.toBeNull();
      expect(c.expiryDate!.slice(0, 10) >= from && c.expiryDate!.slice(0, 10) <= to).toBe(true);
    }
  });

  test('TC-EMPCRT-118 @functional Department filter takes several departments; result = sum of each', async ({ primaryPage }) => {
    await open(primaryPage, 'tab=organisation');
    const all = (await apiJson(primaryPage, '?limit=300')).data.items as { employee: { department?: { publicId: string; name: string } } }[];
    const deptIds = [...new Set(all.map(c => c.employee.department?.publicId).filter(Boolean))].slice(0, 2) as string[];
    expect(deptIds.length).toBe(2);
    const one = (await apiJson(primaryPage, `?limit=100&departmentIds=${deptIds[0]}`)).data.total;
    const two = (await apiJson(primaryPage, `?limit=100&departmentIds=${deptIds[1]}`)).data.total;
    const both = (await apiJson(primaryPage, `?limit=100&departmentIds=${deptIds[0]}&departmentIds=${deptIds[1]}`)).data.total;
    expect(both).toBe(one + two);
  });

  // ── CR 5.3 / 10: CSV export ─────────────────────────────────────────────────────────────────
  test('TC-EMPCRT-119 @functional Export on Organisation Level downloads every listed certificate as CSV', async ({ primaryPage }) => {
    await open(primaryPage, 'tab=organisation');
    const [dl] = await Promise.all([primaryPage.waitForEvent('download'), primaryPage.getByRole('button', { name: 'Export', exact: true }).click()]);
    expect(dl.suggestedFilename()).toMatch(/^certifications-\d{4}-\d{2}-\d{2}\.csv$/);
    const rows = csvRows((await (await import('fs')).promises.readFile((await dl.path())!, 'utf8')).replace(/^﻿/, ''));
    expect(rows[0]).toBe(CSV_HEADER);
    expect(rows.length - 1).toBe((await apiJson(primaryPage, '/organisation/summary')).data.total);
  });

  test('TC-EMPCRT-120 @functional Export follows the active filter (Need Attention)', async ({ primaryPage }) => {
    await open(primaryPage, 'tab=organisation&status=NEED_ATTENTION');
    const need = (await apiJson(primaryPage, '/organisation/summary')).data.needAttention;
    const [dl] = await Promise.all([primaryPage.waitForEvent('download'), primaryPage.getByRole('button', { name: 'Export', exact: true }).click()]);
    const rows = csvRows((await (await import('fs')).promises.readFile((await dl.path())!, 'utf8')));
    expect(rows.length - 1).toBe(need);
    for (const r of rows.slice(1)) expect(r).toContain(',Active,');
  });

  test('TC-EMPCRT-121 @functional Export works on My Certificate, New Joiners and Recently Resigned', async ({ primaryPage, empPage }) => {
    await open(empPage);
    const mine = await empPage.request.get(`${API}/export?view=mine`);
    expect(mine.headers()['content-type']).toContain('text/csv');
    expect(csvRows(await mine.text()).length - 1).toBe((await apiJson(empPage, '/mine?limit=100')).data.total);
    await open(primaryPage, 'tab=new-joiners');
    const nj = await primaryPage.request.get(`${API}/export?view=new-joiners`);
    expect(csvRows(await nj.text())[0].replace(/^﻿/, '')).toBe('Employee Name,Designation,Department,Date of Joining,Certifications Added,Follow Up');
    const rs = await primaryPage.request.get(`${API}/export?view=resigned`);
    expect(csvRows(await rs.text())[0].replace(/^﻿/, '')).toContain('Resignation Date,Last Working Date,Employment Status');
  });

  test('TC-EMPCRT-122 @security New Joiners / Recently Resigned export is Admin / Program Owner only', async ({ empPage, tmPage, pmoPage }) => {
    for (const p of [empPage, tmPage, pmoPage]) {
      await open(p);
      for (const v of ['new-joiners', 'resigned']) {
        expect((await p.request.get(`${API}/export?view=${v}`, { failOnStatusCode: false })).status()).toBe(403);
      }
    }
    // TM's "list" export is scoped to what the TM can see.
    const tmList = (await apiJson(tmPage, '?limit=100')).data.total;
    expect(csvRows(await (await tmPage.request.get(`${API}/export?view=list`)).text()).length - 1).toBe(tmList);
  });

  // ── CR 7–9: form wording ────────────────────────────────────────────────────────────────────
  test('TC-EMPCRT-123 @functional Add form: "Expiry Date", drop text and Exam Email required (Save off until filled)', async ({ empPage }) => {
    await open(empPage);
    await empPage.getByRole('button', { name: 'Add Certification', exact: true }).click();
    const d = empPage.getByRole('dialog', { name: 'Add Certification' });
    await expect(d).toContainText('Expiry Date');
    await expect(d).not.toContainText('Expire Date');
    await expect(d).toContainText('Or drop your certificate badge file here');
    expect(await d.innerText()).toMatch(/Exam Email\s*\n\s*\*/);
    await expect(d).not.toContainText('Exam Email(Optional)');
    await expect(d.getByRole('button', { name: 'Save Certification' })).toBeDisabled();
  });

  // TC-EMPCRT-124 retired 18/11/2026 → 144: placeholder kept as "username@simform.com" (Bhargav, SI4-I644 closed 17/11).
  test('TC-EMPCRT-144 @functional Exam Email placeholder is the agreed "username@simform.com"', async ({ empPage }) => {
    await open(empPage);
    await empPage.getByRole('button', { name: 'Add Certification', exact: true }).click();
    const email = empPage.getByRole('dialog', { name: 'Add Certification' }).locator('input[name=examEmail]');
    await expect(email).toHaveAttribute('placeholder', 'username@simform.com');
  });

  // TC-EMPCRT-125 retired 18/11/2026 → 145: the drawer edits the whole certificate, so it keeps its
  // "Update Certification" title; the CR point is met by calling the proof a badge everywhere in it (frontend PR #569).
  test('TC-EMPCRT-145 @functional Update Certification drawer calls the proof a badge, never "proof"', async ({ empPage }) => {
    await open(empPage);
    await empPage.getByRole('button', { name: `Edit ${OWN}`, exact: true }).click();
    const d = empPage.getByRole('dialog', { name: 'Update Certification' });
    await expect(d).toContainText('Current Badge');
    await expect(d.getByRole('link', { name: 'View current badge' })).toBeVisible();
    await expect(d.getByText('Badge link', { exact: true })).toBeVisible();
    await expect(d).not.toContainText(/proof/i);
  });

  test('TC-EMPCRT-146 @functional SI4-I645 leftover — Certification details panel calls the proof a badge, not "Proof"', async ({ primaryPage }) => {
    await open(primaryPage, 'tab=organisation');
    const row = primaryPage.locator('table tbody tr').filter({ hasText: OWN }).filter({ hasText: 'Kashyap Patel' }).first();
    await row.getByText('Kashyap Patel', { exact: true }).click();
    const panel = primaryPage.locator('div')
      .filter({ has: primaryPage.getByText('Certification Details', { exact: true }) })
      .filter({ has: primaryPage.getByText('Exam Email', { exact: true }) }).last();
    await expect(panel).toBeVisible();
    await expect(panel).toContainText('Exam Email');
    await expect(panel).not.toContainText(/Proof/, { timeout: 5_000 });
  });

  test('TC-EMPCRT-147 @functional A cut-off certificate title or employee name shows the full text on hover; a short one shows none', async ({ primaryPage }) => {
    await open(primaryPage, 'tab=organisation');
    const tooltip = primaryPage.locator('[role=tooltip], [data-slot=tooltip-content]');
    const cut = await primaryPage.locator('table tbody td').evaluateAll(cells => {
      for (const td of cells) for (const el of Array.from(td.querySelectorAll('*')))
        if (!el.children.length && el.scrollWidth > el.clientWidth + 1 && (el.textContent || '').trim().length > 5) return (el.textContent || '').trim();
      return null;
    });
    expect(cut, 'a cut-off title or name on the first page').not.toBeNull();
    await primaryPage.locator('table tbody').getByText(cut!, { exact: true }).first().hover();
    await expect(tooltip.filter({ hasText: cut! }).first()).toBeVisible();
    await primaryPage.locator('table tbody').getByText('AWS basics', { exact: true }).first().hover();
    await expect(tooltip.filter({ hasText: cut! })).toHaveCount(0);
    await expect(tooltip.filter({ hasText: 'AWS basics' })).toHaveCount(0);
  });

  test('TC-EMPCRT-148 @functional Certification detail API returns the certificate type with its expiry rule', async ({ primaryPage }) => {
    await open(primaryPage, 'tab=organisation');
    const types = ((d => d.items ?? d)((await apiJson(primaryPage, '/types?limit=300')).data)) as { publicId: string; expirationType: string; validityValue: number | null; validityUnit: string | null }[];
    const groups = (await apiJson(primaryPage, '/organisation/certificates?page=1&limit=100')).data.items as { certifications: { publicId: string }[] }[];
    const ids = groups.flatMap(g => g.certifications).slice(0, 5).map(c => c.publicId);
    expect(ids.length).toBeGreaterThan(0);
    for (const id of ids) {
      const t = (await apiJson(primaryPage, `/${id}`)).data.certificationType;
      expect(t, `certificationType on ${id}`).toEqual(expect.objectContaining({ expirationType: expect.any(String) }));
      const live = types.find(x => x.publicId === t.publicId)!;
      expect({ e: t.expirationType, v: t.validityValue, u: t.validityUnit }).toEqual({ e: live.expirationType, v: live.validityValue, u: live.validityUnit });
    }
  });

  // ── CR 2–3: certification visible on employee views ─────────────────────────────────────────
  test('TC-EMPCRT-126 @functional CR gap — Employee table (TM view) has a Certification column', async ({ tmPage }) => {
    await tmPage.goto('/employee');
    await expect(tmPage.getByRole('columnheader', { name: /^Name/ })).toBeVisible();
    await expect(tmPage.getByRole('columnheader', { name: /^Certification/ })).toBeVisible({ timeout: 5_000 });
  });

  test('TC-EMPCRT-127 @functional CR gap — Employee short profile popup shows certifications', async ({ primaryPage }) => {
    await primaryPage.goto('/employee');
    const row = primaryPage.locator('table tbody tr').first();
    await expect(row).toBeVisible();
    const name = (await row.locator('td').nth(1).innerText()).split('\n').map(l => l.trim()).find(l => / /.test(l))!;
    await row.locator('td').nth(1).getByText(name, { exact: true }).click();
    const panel = primaryPage.locator('[role=dialog], [data-slot=sheet-content], aside').filter({ hasText: name }).last();
    await expect(panel).toBeVisible();
    await expect(panel).toContainText(/Projects|Goals/);
    await expect(panel).toContainText(/Certification/i, { timeout: 5_000 });
  });

  // TC-EMPCRT-128 retired 18/11/2026: profile-page Certifications section is not being built (Bhargav, SI4-I643 closed 17/11).

  // ── CR 4 / 14: new joiner "no certificate" answer ───────────────────────────────────────────
  test('TC-EMPCRT-129 @functional New Joiners list shows "Don\'t hold any certificate" for a joiner who answered No', async ({ primaryPage, empPage }) => {
    await open(primaryPage, 'tab=new-joiners');
    const nj = (await apiJson(primaryPage, '/new-joiners?limit=300')).data.items as { followUp: string; name?: string; employee?: { name: string } }[];
    const answered = nj.filter(x => x.followUp === 'NO_CERTIFICATE');
    expect(answered.length, 'at least one joiner answered No on dev').toBeGreaterThan(0);
    const who = answered[0].name || answered[0].employee!.name;
    const row = primaryPage.locator('table tbody tr').filter({ hasText: who });
    await expect(row).toContainText("Don't hold any certificate");
    // A non-joiner gets no prompt.
    await open(empPage);
    expect((await apiJson(empPage, '/new-joiners/me')).data).toBeNull();
    expect((await empPage.request.post(`${API}/new-joiners/me/no-certificate`, { failOnStatusCode: false })).status()).toBe(404);
  });
});
