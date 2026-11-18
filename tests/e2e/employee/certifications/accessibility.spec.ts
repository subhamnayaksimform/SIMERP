import { test, expect } from '../../../fixtures/auth';
import { CertificationsPage } from '../../../page-objects/employee/certifications.page';

/** Employee Certifications — accessibility and the project's empty-data convention. */
test.describe('Employee — Certifications — Accessibility', () => {
  test('TC-EMPCRT-050 @a11y Empty values use a readable word, not N/A', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open('new-joiners');
    const cells = await c.rows.locator('td').allInnerTexts();
    const lines = cells.flatMap(t => t.split('\n').map(s => s.trim()));
    expect(lines.filter(l => /^(N\/A|NA|-|—|null|undefined)$/i.test(l)), 'bare placeholders in New Joiners').toEqual([]);
  });

  test('TC-EMPCRT-142 @a11y Group by Certificate toggles are named after their certificate', async ({ primaryPage }) => {
    // Replaces TC-EMPCRT-051 (the "Show the 1 employee holding" count buttons were removed in 6.9.0).
    const c = new CertificationsPage(primaryPage);
    await c.open('organisation');
    const groups = await c.readCatalogue();
    for (const g of groups.slice(0, 5)) {
      const toggle = primaryPage.getByRole('button', { name: `Show or hide the holders of ${g.title}`, exact: true });
      await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    }
  });

  test('TC-EMPCRT-052 @a11y Add Certification drawer is fully labelled', async ({ primaryPage }) => {
    const c = new CertificationsPage(primaryPage);
    await c.open();
    await c.openDrawer();
    await expect(c.drawer.getByRole('heading', { name: 'Add Certification' })).toBeVisible();
    for (const el of [c.onBehalf, c.partnership, c.certificate, c.issueDate, c.expireDate, c.proofUrl, c.examEmail, c.save]) await expect(el).toBeVisible();
    await expect(c.dropZone).toBeVisible();
    await expect(c.drawer.getByRole('button', { name: 'Close' })).toBeVisible();
  });
});
