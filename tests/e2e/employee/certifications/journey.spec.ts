import { Page } from '@playwright/test';
import { test, expect } from '../../../fixtures/auth';
import { CertificationsPage } from '../../../page-objects/employee/certifications.page';

/**
 * Employee Certifications — end-to-end journey from "SimERP Certificate Tracking — End-to-End User
 * Journey (From Screens)" (PDF shared 2026-10-15). Read-only.
 *
 * The saving half of the journey is run by hand, never from a test (approved, no edit/delete exists):
 *  - 2026-10-15: Admin created partnership QA_PARTNER (Standard, 1 year)
 *  - 2026-10-21 (re-seeded after devs removed the 10-15 on-behalf record): Employee kashyap.patel
 *    added SELF_TITLE for themselves, and Admin added BEHALF_TITLE on behalf of kashyap.patel
 *  - 2026-10-23 (SI4-T1559): Admin added certificate type TYPE_TITLE (6 months, Fundamental) under
 *    QA_PARTNER, and kashyap.patel added a certificate of that type with an Exam Email; Admin added
 *    BEHALF_TYPE ("QA-E2E sample certificate") on behalf of kashyap.patel through the new form
 * These tests check that those records surface everywhere the journey says they should. If devs
 * delete the QA-E2E data, these fail on the first lookup — re-seed by hand, never from a test.
 * Findings: docs/findings/2026-10-15-certifications-e2e-journey.md, docs/findings/2026-10-21-certifications-tbt-retest.md
 */
const QA_PARTNER = 'QA-E2E Partner 2026-10-15';
const SELF_TITLE = 'QA-E2E self-add 2026-10-21 - please delete';
const BEHALF_TITLE = 'QA-E2E on-behalf 2026-10-21 - please delete';
const TYPE_TITLE = 'QA-E2E type 2026-10-23 - please delete';
const BEHALF_TYPE = 'QA-E2E sample certificate';

function ddmmyyyy(d: Date): string {
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

/** Department labels of every option in the on-behalf employee picker (first page of 100). */
async function pickerDepartments(page: Page): Promise<{ count: number; departments: string[] }> {
  const c = new CertificationsPage(page);
  await c.open();
  await c.openDrawer();
  await c.onBehalf.click();
  await c.drawer.getByRole('combobox', { name: 'Select Employee' }).click();
  const options = page.getByRole('option');
  await options.first().waitFor();
  const texts = await options.allInnerTexts();
  return { count: texts.length, departments: [...new Set(texts.map(t => t.trim().split('\n').pop()!.trim()))] };
}

test.describe('Employee — Certifications — End-to-end journey', () => {
  test('TC-EMPCRT-063 @functional A partnership added by Admin is selectable in the Employee Add Certification form', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    await c.openDrawer();
    await c.partnership.click();
    await expect(empPage.getByRole('option', { name: QA_PARTNER, exact: true })).toBeVisible();
  });

  test('TC-EMPCRT-064 @functional A certificate type\'s 1-year validity pre-fills Expiry Date', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    await c.openDrawer();
    await c.choose(QA_PARTNER, 'QA-E2E sample certificate'); // migrated from the partnership's old 1-year rule
    await c.pickDate(c.issueDate, /^Today/);
    const next = new Date();
    next.setFullYear(next.getFullYear() + 1);
    await expect(c.expireDate).toHaveText(ddmmyyyy(next));
  });

  test('TC-EMPCRT-065 @functional A self-added certification shows in the Employee\'s My Certificate list', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    const row = c.rowsWithCell(SELF_TITLE);
    await expect(row).toHaveCount(1);
    await expect(row).toContainText(QA_PARTNER);
    await expect(row).toContainText('Active');
    await expect(row).toContainText('21/10/2026');
    await expect(row).toContainText('21/10/2027');
  });

  test('TC-EMPCRT-066 @functional A certification added on behalf lands on the chosen employee, not on the adder', async ({ empPage, primaryPage }) => {
    const emp = new CertificationsPage(empPage);
    await emp.open();
    await expect(emp.rowsWithCell(BEHALF_TITLE)).toHaveCount(1);

    const admin = new CertificationsPage(primaryPage);
    await admin.open();
    await expect(admin.rowsWithCell(BEHALF_TITLE)).toHaveCount(0);
  });

  test('TC-EMPCRT-067 @functional Saved certifications roll up to Organisation Level, grouped by certificate', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation', 'search=QA-E2E');
    const catalogue = await c.readCatalogue();
    for (const title of [SELF_TITLE, BEHALF_TITLE]) {
      expect(catalogue).toContainEqual({ title, partnership: QA_PARTNER, employees: 1, active: 1, expired: 0 });
    }

    // 6.9.0: the holders show under their certificate's band (the holders page button is gone).
    const band = c.rows.filter({ has: primaryPage.getByRole('button', { name: `Show or hide the holders of ${SELF_TITLE}`, exact: true }) });
    const holder = band.locator('xpath=following-sibling::tr[1]');
    await expect(holder).toContainText('Kashyap Patel');
    await expect(holder).toContainText('DATA ENGINEERING');
  });

  test('TC-EMPCRT-068 @functional The Organisation Partnership filter lists the new partnership', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation');
    expect(await c.columnFilterOptions('Partnership')).toContain(QA_PARTNER);
  });

  test('TC-EMPCRT-069 @functional Add Partnership holds only the vendor: name, website and badge colour', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation');
    await primaryPage.getByRole('button', { name: 'Add Partnership' }).click();
    const modal = primaryPage.getByRole('dialog', { name: 'Add Partnership' });
    const save = modal.getByRole('button', { name: 'Save Partnership' });
    await expect(save).toBeDisabled();
    // Since SI4-T1559 the expiry rule, category and notes live on the certificate type, not here.
    await expect(modal.getByRole('radiogroup', { name: 'Expiration' })).toHaveCount(0);
    await expect(modal.getByRole('combobox', { name: 'Category' })).toHaveCount(0);
    await expect(modal.getByRole('radiogroup', { name: 'Badge Color' }).getByRole('radio')).toHaveCount(8);

    await modal.getByRole('textbox', { name: 'Partnership Name' }).fill('QA probe - never saved');
    await expect(save).toBeEnabled();
    await modal.getByRole('textbox', { name: 'Partner Website' }).fill('not a url');
    await modal.getByRole('textbox', { name: 'Partner Website' }).blur();
    await expect(modal.getByText('Enter a valid URL starting with http:// or https://.')).toBeVisible();
    await expect(save).toBeDisabled();

    await modal.getByRole('button', { name: 'Cancel' }).click();
    await expect(modal).toBeHidden();
  });

  test('TC-EMPCRT-070 @security On-behalf employee picker is scoped to the manager\'s own departments', async ({ pmPage, tmPage }) => {
    // PM hardik.trivedi manages PROJECT MANAGEMENT; TM sudhansu.patel manages ANDROID, QA and CSM (2026-10-15).
    const pm = await pickerDepartments(pmPage);
    expect(pm.count).toBeGreaterThan(0);
    expect(pm.departments).toEqual(['PROJECT MANAGEMENT']);

    const tm = await pickerDepartments(tmPage);
    expect(tm.count).toBeGreaterThan(0);
    expect(tm.departments.every(d => ['ANDROID', 'QA', 'CSM'].includes(d))).toBe(true);
  });

  test('TC-EMPCRT-071 @security Employee and CSM get no on-behalf switch; PMO (organisation scope) does', async ({ csmPage, pmoPage, empPage }) => {
    // EM is left out on purpose: the journey PDF says TM/EM can add on behalf (open question).
    // Since SI4-T1559 (26-27/10, "drive certification tabs from permission scopes, not role names")
    // the switch follows the create scope: anyone whose scope reaches beyond self gets it, so PMO
    // now has it — verified live 2026-11-12.
    for (const page of [csmPage, empPage]) {
      const c = new CertificationsPage(page);
      await c.open();
      await c.openDrawer();
      await expect(c.onBehalf).toHaveCount(0);
    }
    const pmo = new CertificationsPage(pmoPage);
    await pmo.open();
    await pmo.openDrawer();
    await expect(pmo.onBehalf).toHaveCount(1);
  });

  test('TC-EMPCRT-103 @functional A certificate of a new type lands in My Certificate and Organisation Level', async ({ empPage, primaryPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    const saved = await c.mine(TYPE_TITLE);
    expect(saved).toMatchObject({ issueDate: '2026-10-23', expiryDate: '2027-04-23', examEmail: 'kashyap.qa@example.com', status: 'ACTIVE' });
    const row = c.rowsWithCell(TYPE_TITLE);
    await expect(row).toHaveCount(1);
    await expect(row).toContainText(QA_PARTNER);
    await expect(row).toContainText('23/04/2027');

    const org = new CertificationsPage(primaryPage);
    await org.open('organisation');
    await org.searchFor(TYPE_TITLE);
    expect(await org.readCatalogue()).toContainEqual({ title: TYPE_TITLE, partnership: QA_PARTNER, employees: 1, active: 1, expired: 0 });
  });

  test('TC-EMPCRT-104 @functional An on-behalf certificate (new form) reaches the employee, holders page and Recently Resigned, not other scopes', async ({ empPage, primaryPage, pmPage }) => {
    const emp = new CertificationsPage(empPage);
    await emp.open();
    const cert = await emp.mine(BEHALF_TYPE);
    expect(cert).toMatchObject({ issueDate: '2026-10-23', expiryDate: '2027-10-23', status: 'ACTIVE' });
    await expect(emp.editButton(BEHALF_TYPE)).toBeVisible(); // the owner can edit what Admin added

    const admin = new CertificationsPage(primaryPage);
    await admin.open();
    expect((await (await admin.apiGet('/mine?limit=100')).json()).data.items.map((i: { title: string }) => i.title)).not.toContain(BEHALF_TYPE);
    const partnershipId = await admin.partnershipId(QA_PARTNER);
    await primaryPage.goto(`${CertificationsPage.ROUTE}/holders?partnershipId=${partnershipId}&title=${encodeURIComponent(BEHALF_TYPE)}`);
    // Scoped to Kashyap's row: this type is shared test data and another holder (Abhishek Hingorani,
    // added by someone else on dev — verified 2026-11-12) also appears on the holders page.
    const kashyapRow = admin.rows.filter({ hasText: 'Kashyap Patel' });
    await expect(kashyapRow).toHaveCount(1);
    await expect(kashyapRow.getByRole('cell', { name: 'Active', exact: true })).toHaveCount(1);
    const resigned = (await (await admin.apiGet('/resigned-joiners?limit=300&search=Kashyap Patel')).json()).data.items;
    expect(resigned.map((i: { publicId: string }) => i.publicId)).toContain((cert as { publicId: string }).publicId);

    const pm = new CertificationsPage(pmPage); // PROJECT MANAGEMENT only; kashyap is DATA ENGINEERING
    await pm.open();
    expect((await pm.apiGet(`/${(cert as { publicId: string }).publicId}`)).status()).toBe(404);
  });
});
