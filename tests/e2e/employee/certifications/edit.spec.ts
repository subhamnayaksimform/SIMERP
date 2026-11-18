import { test, expect } from '../../../fixtures/auth';
import { CertificationsPage } from '../../../page-objects/employee/certifications.page';

/**
 * Employee Certifications — Edit (SI4-T1559, live on dev 2026-10-23).
 *
 * Rules (backend `certifications.update`): everyone edits their OWN certificates (SELF); Admin and
 * Program Owner edit anyone's (ALL). Anything else is 404, so existence is never leaked. The drawer
 * locks Partnership and Certificate and only sends the fields that changed.
 *
 * Saving tests only touch cert.title, a QA-E2E record on the Employee account (kashyap.patel, approved
 * 2026-10-23), and always put the original values back in `finally`.
 * 6.9.0 (SI4-T1685): the API refuses a blank Exam Email on edit, so a stored one can't be cleared —
 * restores therefore never send examEmail for records that had none, and TC-EMPCRT-090 became 143.
 * Known failures today: 088 (Edit calendar ignores the validity cap), 093 (server accepts future
 * issue date / past-validity expiry / ftp:// on edit).
 * Findings: docs/findings/2026-10-23-certifications-t1559-test-results.md
 */
/**
 * Each browser edits its own QA records, so Chromium and Firefox can run at the same time.
 * `cert` is a 1-year certificate; `typeCert` is the one moved to Expired / Need Attention / file proof.
 */
type Rec = { title: string; original: Record<string, string>; cap: Date };
const RECORDS: Record<string, { cert: Rec; typeCert: Rec }> = {
  chromium: {
    // examEmail can no longer be cleared; this record has carried qa.admin@example.com since 091 ran on 6.9.0.
    cert: { title: 'QA-E2E self-add 2026-10-21 - please delete', original: { issueDate: '2026-10-21', expiryDate: '2027-10-21', proofUrl: 'https://example.com/qa-e2e-self-2026-10-21', examEmail: 'qa.admin@example.com' }, cap: new Date(2027, 9, 21) },
    typeCert: { title: 'QA-E2E type 2026-10-23 - please delete', original: { issueDate: '2026-10-23', expiryDate: '2027-04-23', proofUrl: 'https://example.com/qa-e2e-type-2026-10-23', examEmail: 'kashyap.qa@example.com' }, cap: new Date(2027, 3, 23) },
  },
  firefox: {
    cert: { title: 'QA-E2E self-add 2026-10-15 - please delete', original: { issueDate: '2026-10-15', expiryDate: '2027-10-15', proofUrl: 'https://example.com/qa-e2e-self', examEmail: 'qa.firefox@example.com' }, cap: new Date(2027, 9, 15) },
    // The QA-NEG probe was deleted for good on 16/11 (user-approved); this record replaces it.
    typeCert: { title: 'QA-E2E on-behalf 2026-10-21 - please delete', original: { issueDate: '2026-10-21', expiryDate: '2027-10-21', proofUrl: 'https://example.com/qa-e2e-behalf-2026-10-21' }, cap: new Date(2027, 9, 21) },
  },
};
const recordsFor = (browserName: string) => RECORDS[browserName] ?? RECORDS.chromium;
const toDate = (mdy: string) => { const [m, d, y] = mdy.split('/').map(Number); return new Date(y, m - 1, d); };

test.describe('Employee — Certifications — Edit', () => {
  test.describe.configure({ mode: 'default' }); // one worker, in order: every test here edits the same record

  // Safety net: this browser's QA records start AND end the run with their original values (an earlier
  // failed restore must not break the next run). A restore that the API refuses fails loudly.
  const restoreAll = async (browser: import('@playwright/test').Browser, browserName: string) => {
    const ctx = await browser.newContext({ storageState: 'tests/fixtures/storageState-emp.json' });
    const c = new CertificationsPage(await ctx.newPage());
    await c.open(); // loading the app renews the saved session before the API calls
    for (const r of Object.values(recordsFor(browserName))) {
      const res = await c.apiPatch((await c.mine(r.title)).publicId, r.original);
      expect(res.status(), `restore ${r.title}: ${await res.text()}`).toBe(200);
    }
    await ctx.close();
  };
  test.beforeAll(async ({ browser, browserName }) => restoreAll(browser, browserName));
  test.afterAll(async ({ browser, browserName }) => restoreAll(browser, browserName));

  test('TC-EMPCRT-086 @functional Edit opens pre-filled with Partnership and Certificate locked', async ({ empPage, browserName }) => {
    const { cert, typeCert } = recordsFor(browserName);
    const c = new CertificationsPage(empPage);
    await c.open();
    const rows = await c.rows.count();
    await expect(empPage.getByRole('button', { name: /^Edit / })).toHaveCount(rows); // every own row is editable

    await c.openEdit(cert.title);
    await expect(c.drawer.getByRole('heading', { name: 'Update Certification' })).toBeVisible();
    await expect(c.partnership).toBeDisabled();
    await expect(c.partnership).not.toHaveText('Select partnership');
    await expect(c.certificate).toBeDisabled();
    await expect(c.certificate).toContainText(cert.title);
    const dd = (iso: string) => iso.split('-').reverse().join('/');
    await expect(c.issueDate).toHaveText(dd(cert.original.issueDate));
    await expect(c.expireDate).toHaveText(dd(cert.original.expiryDate));
    await expect(c.drawer.getByRole('link', { name: 'View current badge' })).toHaveAttribute('href', cert.original.proofUrl);
    await expect(c.onBehalf).toHaveCount(0);
    await expect(c.save).toHaveText('Save Certification');
    await expect(c.save).toBeDisabled(); // nothing changed yet
  });

  test('TC-EMPCRT-087 @functional Saving an edit sends only the changed field and keeps the record', async ({ empPage, browserName }) => {
    const { cert, typeCert } = recordsFor(browserName);
    const c = new CertificationsPage(empPage);
    await c.open();
    const id = (await c.mine(cert.title)).publicId;
    try {
      await c.openEdit(cert.title);
      await c.examEmail.fill('qa.edit@example.com');
      const [req] = await Promise.all([
        empPage.waitForRequest(r => r.method() === 'PATCH' && r.url().endsWith(`/certifications/${id}`)),
        c.save.click(),
      ]);
      const body = req.postData() ?? '';
      expect(body).toContain('name="examEmail"');
      for (const untouched of ['issueDate', 'expiryDate', 'proofUrl', 'certificationTypeId']) expect(body).not.toContain(`name="${untouched}"`);
      await expect(empPage.getByText('Certification updated successfully')).toBeVisible();
      await expect(c.drawer).toBeHidden();

      const after = await c.mine(cert.title);
      expect(after).toMatchObject({ examEmail: 'qa.edit@example.com', issueDate: cert.original.issueDate, expiryDate: cert.original.expiryDate, proofUrl: cert.original.proofUrl });
      await c.openEdit(cert.title);
      await expect(c.examEmail).toHaveValue('qa.edit@example.com');
    } finally {
      await c.apiPatch(id, cert.original);
    }
  });

  test('TC-EMPCRT-088 @negative Edit calendar does not offer expiry dates past the certificate validity', async ({ empPage, browserName }) => {
    const { cert, typeCert } = recordsFor(browserName);
    // Add caps the calendar at issue date + validity (TC-EMPCRT-024). Edit should do the same.
    // Fails today: every day after the cap (issue date + validity) is clickable and saves (bug, 2026-10-23).
    const c = new CertificationsPage(empPage);
    await c.open();
    await c.openEdit(cert.title);
    await c.openCalendar(c.expireDate); // opens on the stored expiry month, which is the cap
    const after = (await c.calendarDays()).filter(x => toDate(x.day) > cert.cap);
    expect(after.length).toBeGreaterThan(0);
    expect(after.filter(x => !x.disabled).map(x => x.day), 'days past the 1-year validity that can be picked').toEqual([]);
  });

  test('TC-EMPCRT-089 @negative Edit calendar blocks a future issue date', async ({ empPage, browserName }) => {
    const { cert, typeCert } = recordsFor(browserName);
    const c = new CertificationsPage(empPage);
    await c.open();
    await c.openEdit(cert.title);
    await c.openCalendar(c.issueDate);
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const future = (await c.calendarDays()).filter(x => toDate(x.day) > today);
    expect(future.filter(x => !x.disabled), 'future issue days that can be picked').toEqual([]);
  });

  test('TC-EMPCRT-143 @negative A stored Exam Email cannot be cleared on Edit', async ({ empPage, browserName }) => {
    // Replaces TC-EMPCRT-090: since 6.9.0 (SI4-T1685) Exam Email is mandatory, so the API refuses a blank one
    // and clearing the field in the drawer keeps the stored address (only older, blank records may stay blank).
    const { cert } = recordsFor(browserName);
    const c = new CertificationsPage(empPage);
    await c.open();
    const id = (await c.mine(cert.title)).publicId;
    try {
      const r = await c.apiPatch(id, { examEmail: ' ' });
      expect(r.status()).toBe(400);
      expect(JSON.stringify(await r.json())).toMatch(/examEmail should not be empty/);
      expect((await c.mine(cert.title)).examEmail).toBe(cert.original.examEmail);
    } finally {
      await c.apiPatch(id, cert.original);
    }
  });

  test('TC-EMPCRT-091 @security Only the owner, Admin or Program Owner can edit a certificate', async ({ empPage, primaryPage, pmPage, pmoPage, tmPage, emPage, csmPage, browserName }) => {
    test.setTimeout(180_000); // opens the app as 7 roles
    const { cert } = recordsFor(browserName);
    const owner = new CertificationsPage(empPage);
    await owner.open();
    const id = (await owner.mine(cert.title)).publicId;
    try {
      for (const [role, page] of [['PM', pmPage], ['PMO', pmoPage], ['TM', tmPage], ['EM', emPage], ['CSM', csmPage]] as const) {
        const other = new CertificationsPage(page);
        await other.open(); // renews that role's saved session
        const r = await other.apiPatch(id, { examEmail: `qa.${role.toLowerCase()}@example.com` });
        expect.soft(r.status(), `${role} editing someone else's certificate`).toBe(404);
      }
      const adminPage = new CertificationsPage(primaryPage);
      await adminPage.open();
      const admin = await adminPage.apiPatch(id, { examEmail: 'qa.admin@example.com' });
      expect(admin.status(), 'Admin edits any certificate').toBe(200);
      expect((await owner.mine(cert.title)).examEmail).toBe('qa.admin@example.com');
    } finally {
      await owner.apiPatch(id, cert.original);
    }
  });

  test('TC-EMPCRT-092 @negative Edit API rejects invalid values and leaves the record unchanged', async ({ empPage, browserName }) => {
    const { cert, typeCert } = recordsFor(browserName);
    const c = new CertificationsPage(empPage);
    await c.open();
    const id = (await c.mine(cert.title)).publicId;
    try {
      const cases: [string, Record<string, string>, RegExp][] = [
        ['invalid exam email', { examEmail: 'not-an-email' }, /examEmail must be an email/],
        ['expiry before issue', { expiryDate: '2026-10-01' }, /Expiry date must be after the issue date/],
        ['javascript: proof link', { proofUrl: 'javascript:alert(1)' }, /proofUrl must be a URL/],
        ['move to another employee', { employeeId: '8218386f-64d0-46bc-9fd5-f96d9357933b' }, /property employeeId should not exist/],
      ];
      for (const [name, body, msg] of cases) {
        const r = await c.apiPatch(id, body);
        expect.soft(r.status(), name).toBe(400);
        expect.soft(JSON.stringify(await r.json()), name).toMatch(msg);
      }
      const r = await empPage.request.patch(c.api(`/${id}`), {
        multipart: { proofUrl: 'https://example.com/x', proof: { name: 'p.pdf', mimeType: 'application/pdf', buffer: Buffer.from('%PDF-1.4\n%%EOF\n') } },
        failOnStatusCode: false,
      });
      expect.soft(r.status(), 'link and file together').toBe(400);
      expect.soft(JSON.stringify(await r.json()), 'link and file together').toMatch(/not both/);
      expect(await c.mine(cert.title)).toMatchObject({ issueDate: cert.original.issueDate, expiryDate: cert.original.expiryDate, proofUrl: cert.original.proofUrl });
    } finally {
      await c.apiPatch(id, cert.original);
    }
  });

  test('TC-EMPCRT-093 @negative Edit API rejects a future issue date, an expiry past validity and an ftp:// link', async ({ empPage, browserName }) => {
    const { cert, typeCert } = recordsFor(browserName);
    // The form blocks all three; the server should too. Fails today: each one saves with 200 (bug,
    // same gap as create TC-EMPCRT-037..039). Every accepted change is rolled back straight away.
    const c = new CertificationsPage(empPage);
    await c.open();
    const id = (await c.mine(cert.title)).publicId;
    try {
      const cases: [string, Record<string, string>][] = [
        ['future issue date', { issueDate: '2027-01-01', expiryDate: '2028-01-01' }],
        ['expiry past the validity', { expiryDate: '2030-01-01' }],
        ['ftp:// proof link', { proofUrl: 'ftp://example.com/qa-e2e.pdf' }],
      ];
      for (const [name, body] of cases) {
        const r = await c.apiPatch(id, body);
        expect.soft(r.status(), name).toBe(400);
        if (r.ok()) await c.apiPatch(id, cert.original);
      }
    } finally {
      await c.apiPatch(id, cert.original);
    }
  });

  test('TC-EMPCRT-105 @functional Moving the expiry into the past makes the certificate Expired everywhere', async ({ empPage, primaryPage, browserName }) => {
    const { typeCert } = recordsFor(browserName);
    const c = new CertificationsPage(empPage);
    await c.open();
    const id = (await c.mine(typeCert.title)).publicId;
    const admin = new CertificationsPage(primaryPage);
    await admin.open('organisation');
    const row = async () => (await (await admin.apiGet(`/organisation?limit=300&search=${encodeURIComponent(typeCert.title)}`)).json())
      .data.items.find((i: { title: string }) => i.title === typeCert.title) as { activeCount: number; expiredCount: number };
    const before = await row();
    try {
      expect((await c.apiPatch(id, { issueDate: '2024-07-01', expiryDate: '2025-01-01' })).status()).toBe(200);
      expect((await c.mine(typeCert.title)).status).toBe('EXPIRED');
      await c.open();
      await expect(c.rowsWithCell(typeCert.title)).toContainText('Expired');
      expect((await (await c.apiGet('/mine?limit=100&status=EXPIRED')).json()).data.items.map((i: { title: string }) => i.title)).toContain(typeCert.title);
      const after = await row();
      expect({ active: after.activeCount - before.activeCount, expired: after.expiredCount - before.expiredCount }).toEqual({ active: -1, expired: 1 });
    } finally {
      await c.apiPatch(id, typeCert.original);
    }
  });

  test('TC-EMPCRT-106 @functional An expiry within 30 days shows the banner and counts as Need Attention', async ({ empPage, primaryPage, browserName }) => {
    const { typeCert } = recordsFor(browserName);
    const c = new CertificationsPage(empPage);
    await c.open();
    const id = (await c.mine(typeCert.title)).publicId;
    const admin = new CertificationsPage(primaryPage);
    await admin.open('organisation');
    const before = (await (await admin.apiGet('/organisation/summary')).json()).data.needAttention;
    const mineBefore = (await (await c.apiGet('/mine?limit=100')).json()).data.expiringSoonCount as number;
    const soon = new Date(); soon.setDate(soon.getDate() + 18);
    const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const issued = new Date(soon); issued.setMonth(issued.getMonth() - 6);
    try {
      expect((await c.apiPatch(id, { issueDate: iso(issued), expiryDate: iso(soon) })).status()).toBe(200);
      await c.open();
      expect((await (await c.apiGet('/mine?limit=100')).json()).data.expiringSoonCount).toBeGreaterThanOrEqual(mineBefore + 1);
      // 6.9.0: managers are no longer emailed about expiries (SI4-T1685), so the banner no longer says so.
      await expect(empPage.getByText(/^\d+ certifications? expiring within 30 days\. Renew (it|them) and update the dates here\.$/)).toBeVisible();
      expect((await (await admin.apiGet('/organisation/summary')).json()).data.needAttention).toBeGreaterThanOrEqual(before + 1);
    } finally {
      await c.apiPatch(id, typeCert.original);
    }
  });

  test('TC-EMPCRT-107 @functional Replacing the proof with a file through Edit stores and serves the new file', async ({ empPage, browserName }) => {
    const { cert, typeCert } = recordsFor(browserName);
    const c = new CertificationsPage(empPage);
    await c.open();
    const id = (await c.mine(typeCert.title)).publicId;
    try {
      await c.openEdit(typeCert.title);
      await c.proofFile.setInputFiles({ name: 'qa-proof.pdf', mimeType: 'application/pdf', buffer: Buffer.from('%PDF-1.4\n%%EOF\n') });
      const [res] = await Promise.all([
        empPage.waitForResponse(r => r.request().method() === 'PATCH' && r.url().endsWith(`/certifications/${id}`)),
        c.save.click(),
      ]);
      expect(res.status()).toBe(200);
      const proof = (await c.mine(typeCert.title)).proofUrl;
      expect(proof).not.toBe(typeCert.original.proofUrl);
      const file = await empPage.request.get(proof);
      expect(file.headers()['content-type']).toBe('application/pdf');
      await c.open();
      await expect(empPage.getByRole('link', { name: `View proof for ${typeCert.title}` })).toHaveAttribute('href', proof);
    } finally {
      await c.apiPatch(id, typeCert.original);
    }
  });
});
