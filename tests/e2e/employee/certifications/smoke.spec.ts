import { test, expect } from '../../../fixtures/auth';
import { CertificationsPage } from '../../../page-objects/employee/certifications.page';

/**
 * Employee Certifications — smoke. Live on dev 6.4.2; no FRD yet (see the page object header).
 * primaryPage = Admin (all three tabs), empPage = plain Employee (own list only).
 */
test.describe('Employee — Certifications — Smoke', () => {
  test('TC-EMPCRT-001 @smoke Certifications opens from Employee > Certifications with four tabs for Admin', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.goto('/');
    const link = primaryPage.locator(`a[href="${CertificationsPage.ROUTE}"]`);
    if (!(await link.isVisible())) await primaryPage.getByRole('button', { name: /^Employee( Has changes)?$/ }).click();
    await link.click();

    await expect(primaryPage).toHaveURL(/\/employee\/certifications$/);
    await expect(c.pageHeading('Certifications')).toBeVisible();
    await expect(c.tabs).toHaveText(['My Certificate', 'Organisation Level', 'New Joiners List', 'Recently Resigned']);
    await expect(c.tab('My Certificate')).toHaveAttribute('aria-selected', 'true');
    await expect(c.addButton).toBeVisible();
  });

  test('TC-EMPCRT-002 @smoke Employee sees only their own list with no tabs', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    await expect(c.tabs).toHaveCount(0);
    for (const h of ['Certification Title', 'Partnership', 'Status', 'Issue Date', 'Expiry Date', 'Actions']) {
      await expect(c.header(h)).toBeVisible();
    }
    await expect(c.addButton).toBeVisible();
  });

  test('TC-EMPCRT-003 @smoke Organisation Level shows KPI cards and the certification list', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation');
    await expect(c.tab('Organisation Level')).toHaveAttribute('aria-selected', 'true');
    for (const k of ['Total certifications', 'Active', 'Expired', 'Need Attention']) {
      await expect(c.stats).toContainText(k);
    }
    // 6.9.0: a flat list, one row per certificate (the old catalogue is "Group by Certificate").
    for (const h of ['Certification Title', 'Partnership', 'Employee Name', 'Exam Email', 'Department', 'Status', 'Issue Date', 'Expiry Date', 'Actions']) {
      await expect(c.header(h)).toBeVisible();
    }
    await expect(c.rows.first()).toBeVisible();
  });

  test('TC-EMPCRT-004 @smoke New Joiners List loads for Admin', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('new-joiners');
    await expect(c.tab('New Joiners List')).toHaveAttribute('aria-selected', 'true');
    for (const h of ['Employee Name', 'Department', 'Date of Joining', 'Certifications Added', 'Follow-Up']) {
      await expect(c.header(h)).toBeVisible();
    }
  });

  test('TC-EMPCRT-005 @smoke Add Certification drawer opens with all required fields', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    await c.openDrawer();
    for (const f of [c.partnership, c.certificate, c.issueDate, c.expireDate, c.proofUrl, c.examEmail]) await expect(f).toBeVisible();
    await expect(c.certificate).toBeDisabled();
    await expect(c.certificate).toHaveText('Select a partnership first');
    // 6.9.0 (SI4-T1685): Exam Email is required, marked * like the other required fields.
    expect(await c.drawer.innerText()).toMatch(/Exam Email\s*\n\s*\*/);
    await expect(c.dropZone).toBeVisible();
    await expect(c.drawer).toContainText('PDF, PNG or JPG, up to 5 MB');
    await expect(c.save).toBeDisabled();
  });
});
