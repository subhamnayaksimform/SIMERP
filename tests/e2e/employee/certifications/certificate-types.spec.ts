import { test, expect } from '../../../fixtures/auth';
import { CertificationsPage } from '../../../page-objects/employee/certifications.page';

/**
 * Employee Certifications — Certificate Types (SI4-T1559, live on dev 2026-10-23).
 *
 * A partnership is now only the vendor. Each certificate it offers is a "certificate type" (title,
 * category, optional level, expiry rule, validity, notes), added by Admin / Program Owner from
 * Organisation Level → Add Certificate Type, and picked from a list in Add Certification.
 * Nothing here saves: API checks only send payloads the server must reject. The one approved type
 * created by hand on 2026-10-23 (QA_TYPE, 6 months) is only read.
 */
const QA_PARTNER = 'QA-E2E Partner 2026-10-15';
const QA_TYPE = 'QA-E2E type 2026-10-23 - please delete';

test.describe('Employee — Certifications — Certificate Types', () => {
  test('TC-EMPCRT-094 @security Only Admin can add certificate types', async ({ primaryPage, pmPage, pmoPage, tmPage, emPage, empPage }) => {
    test.setTimeout(180_000); // opens the app as 6 roles
    const admin = new CertificationsPage(primaryPage);
    await admin.open('organisation');
    await expect(primaryPage.getByRole('button', { name: 'Add Certification Type' })).toBeVisible();

    for (const [role, page] of [['PM', pmPage], ['PMO', pmoPage], ['TM', tmPage], ['EM', emPage], ['Employee', empPage]] as const) {
      const c = new CertificationsPage(page);
      await c.open('organisation');
      await expect.soft(page.getByRole('button', { name: 'Add Certification Type' }), role).toHaveCount(0);
      const r = await page.request.post(c.api('/types'), { data: { title: 'QA-NEG must be rejected' }, failOnStatusCode: false });
      expect.soft(r.status(), `${role} POST /types`).toBe(403);
    }
  });

  test('TC-EMPCRT-095 @functional Add Certificate Type: fields, options and when Save enables', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation');
    // 6.9.0 (seen 16/11): the toolbar button reads "Add Certification Type"; its dialog is still "Add Certificate Type".
    await primaryPage.getByRole('button', { name: 'Add Certification Type' }).click();
    const d = primaryPage.getByRole('dialog', { name: 'Add Certificate Type' });
    const save = d.getByRole('button', { name: 'Save Certificate Type' });
    await expect(save).toBeDisabled();

    await d.getByRole('combobox', { name: 'Category' }).click();
    // 4 categories added by SI4-T1559 (CSV bulk import, 29/10) — verified live 2026-11-12.
    await expect(primaryPage.getByRole('option')).toHaveText([
      'Cloud', 'Data', 'AI', 'Security', 'Analytics', 'Observability',
      'Data & AI', 'Sales & Partner Enablement', 'Dev Tools', 'Productivity & Collaboration',
    ]);
    await primaryPage.keyboard.press('Escape');
    await d.getByRole('combobox', { name: 'Level' }).click();
    // Backend levels (SI4-T1559 added 7 more on 29/10): FUNDAMENTAL, APPLIED_SKILL, INTERMEDIATE, ASSOCIATE,
    // ADVANCED, PROFESSIONAL, EXPERT, SALES_BADGE, BADGE, ASSESSMENT, PREPARATION, EXECUTION.
    // Fails today: ADVANCED is labelled "Advance".
    await expect.soft(primaryPage.getByRole('option')).toHaveText([
      'Fundamental', 'Applied Skill', 'Intermediate', 'Associate', 'Advanced', 'Professional', 'Expert',
      'Sales Badge', 'Badge', 'Assessment', 'Preparation', 'Execution',
    ]);
    await primaryPage.keyboard.press('Escape');

    await d.getByRole('combobox', { name: 'Partnership' }).click();
    await primaryPage.getByRole('option', { name: QA_PARTNER, exact: true }).click();
    await d.getByRole('textbox', { name: 'Title' }).fill('QA probe - never saved');
    await expect(save).toBeEnabled(); // Never Expires is the default
    await d.getByRole('radio', { name: 'Standard Expiration' }).click();
    await expect(d.getByRole('spinbutton', { name: 'Validity length' })).toBeVisible();
    await expect(d.getByRole('combobox', { name: 'Validity unit' })).toHaveText('Years');
    await expect(save).toBeDisabled(); // validity now required
    await d.getByRole('spinbutton', { name: 'Validity length' }).fill('2');
    await expect(save).toBeEnabled();

    await d.getByRole('button', { name: 'Cancel' }).click();
    await expect(d).toBeHidden();
  });

  test('TC-EMPCRT-096 @negative Certificate type API rejects invalid and duplicate types', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation');
    const partnershipId = await c.partnershipId(QA_PARTNER);
    const ok = { partnershipId, title: 'QA-NEG must be rejected', category: 'CLOUD', expirationType: 'STANDARD', validityValue: 1, validityUnit: 'YEAR' };
    const cases: [string, Record<string, unknown>, number, RegExp][] = [
      ['empty title', { ...ok, title: '' }, 400, /title should not be empty/],
      ['201-char title', { ...ok, title: 'x'.repeat(201) }, 400, /200 characters/],
      ['standard without validity', { ...ok, validityValue: undefined, validityUnit: undefined }, 400, /required for a standard-expiry/],
      ['never-expires with validity', { ...ok, expirationType: 'NEVER_EXPIRES' }, 400, /not allowed for a never-expires/],
      ['validity 0', { ...ok, validityValue: 0 }, 400, /validityValue must not be less than 1/],
      ['unknown category', { ...ok, category: 'GAMING' }, 400, /category must be one of/],
      ['duplicate title in the same partnership', { ...ok, title: 'QA-E2E sample certificate' }, 409, /already exists for this partnership/],
      ['duplicate title, different case', { ...ok, title: 'qa-e2e SAMPLE certificate' }, 409, /already exists for this partnership/],
      ['unknown partnership', { ...ok, partnershipId: '00000000-0000-4000-8000-000000000000' }, 404, /Partnership not found/],
    ];
    for (const [name, body, status, msg] of cases) {
      const r = await primaryPage.request.post(c.api('/types'), { data: body, failOnStatusCode: false });
      expect.soft(r.status(), name).toBe(status);
      expect.soft(JSON.stringify(await r.json()), name).toMatch(msg);
    }
  });

  test('TC-EMPCRT-097 @functional Certificate list shows only the chosen partnership\'s types', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    const types = await c.certificateTypes();
    await c.openDrawer();
    for (const partnership of ['AWS', 'Claude']) {
      await c.choosePartnership(partnership);
      await c.certificate.click();
      const expected = types.filter(t => t.partnership.name === partnership).map(t => t.title).sort();
      // The list loads per partnership after the pick, so wait for it to settle.
      await expect.poll(async () => (await empPage.getByRole('option').allInnerTexts()).map(t => t.replace(/ · .*$/, '').trim()).sort(), { message: partnership, timeout: 15_000 })
        .toEqual(expected);
      await empPage.keyboard.press('Escape');
    }
  });

  test('TC-EMPCRT-098 @functional A new certificate type is offered to employees with its validity and level', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    const type = (await c.certificateTypes()).find(t => t.title === QA_TYPE);
    expect(type, 'QA type created 2026-10-23').toMatchObject({ expirationType: 'STANDARD', validityValue: 6, validityUnit: 'MONTH', level: 'FUNDAMENTAL' });
    await c.openDrawer();
    await c.choosePartnership(QA_PARTNER);
    await c.certificate.click();
    await expect(empPage.getByRole('option', { name: `${QA_TYPE} · Fundamental` })).toBeVisible();
    await empPage.getByRole('option', { name: `${QA_TYPE} · Fundamental` }).click();
    await c.pickDate(c.issueDate, /^Today/);
    const sixMonths = new Date(); sixMonths.setMonth(sixMonths.getMonth() + 6);
    const dd = (d: Date) => `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
    await expect(c.expireDate).toHaveText(dd(sixMonths));
  });
});
