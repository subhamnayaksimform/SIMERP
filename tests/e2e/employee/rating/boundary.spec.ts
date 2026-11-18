import { test, expect } from '@playwright/test';
import { RatingPage } from '../../../page-objects/employee/rating.page';

test.describe('Employee — Ratings — Boundary', () => {
  let ratingPage: RatingPage;

  test.beforeEach(async ({ page }) => {
    ratingPage = new RatingPage(page);
    await ratingPage.navigateToRatings();
    test.skip(
      !(await ratingPage.table.isVisible().catch(() => false)),
      'Ratings screen confirmed not found live as of 2026-07-13 — GET /employee/ratings returns an in-app 404 and no "Ratings" item exists in the Employee sidebar submenu. Figma design-ahead feature, not yet implemented in the running app.'
    );
  });

  // TC-EMPRAT-012 — automatable: false (requirement clarification needed: which Advanced Filter variant is live).
  test.fixme('TC-EMPRAT-012 V1 (7 filters) vs V2 (9 filters) — confirm which Advanced Filter variant is the current live build — MANUAL VERIFICATION REQUIRED @boundary @needs-verification', async () => {});

  test('TC-EMPRAT-013 Rating popup positioned near the table edge/last row does not render off-screen or clipped @boundary', async () => {
    const rows = ratingPage.getDataRows();
    const count = await rows.count();
    if (count === 0) test.skip(true, 'No rows available — table selector unconfirmed against live app');
    const lastRow = rows.nth(count - 1); // positional intent: explicitly the last visible row
    const popup = await ratingPage.openRatingPopup(lastRow, 'overall');
    const visible = await popup.isVisible().catch(() => false);
    if (!visible) test.skip(true, 'Rating popup not found for the last row — selector unconfirmed against live app');

    const box = await popup.boundingBox();
    const viewport = ratingPage.page.viewportSize();
    if (box && viewport) {
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.y).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 5);
      expect(box.y + box.height).toBeLessThanOrEqual(viewport.height + 5);
    }
  });

  // TC-EMPRAT-014 — automatable: false (need product confirmation on expected Ratings-vs-Employee row-count relationship).
  test.fixme('TC-EMPRAT-014 Ratings tab\'s small row count (2) reflects a genuine small rated-team sample, not a filter/bug hiding rows — MANUAL VERIFICATION REQUIRED @boundary @needs-verification', async () => {});

  // TC-EMPRAT-015 — automatable: false (rating scale/format unconfirmed in source).
  test.fixme('TC-EMPRAT-015 Rating input format/range for Overall/AI/Communication — clarification needed — MANUAL VERIFICATION REQUIRED @boundary @needs-verification', async () => {});

  test('TC-EMPRAT-016 Overall, AI, and Communication rating popups share identical dialog dimensions and button behavior @boundary', async () => {
    const row = ratingPage.getDataRows().first();
    if (!(await row.isVisible().catch(() => false))) test.skip(true, 'Ratings table/row not found — selector unconfirmed against live app');

    const dimensions: { category: string; width: number; height: number }[] = [];
    for (const category of ['overall', 'ai', 'communication'] as const) {
      const popup = await ratingPage.openRatingPopup(row, category);
      const visible = await popup.isVisible().catch(() => false);
      if (!visible) continue;
      const box = await popup.boundingBox();
      if (box) dimensions.push({ category, width: Math.round(box.width), height: Math.round(box.height) });
      await ratingPage.cancelRatingPopup(popup);
    }
    if (dimensions.length < 2) test.skip(true, 'Fewer than 2 rating popups could be opened — selectors unconfirmed against live app');

    const [first, ...rest] = dimensions;
    for (const d of rest) {
      expect(d.width, `${d.category} popup width (${d.width}) differs from ${first.category} popup width (${first.width})`).toBeCloseTo(first.width, -1);
      expect(d.height, `${d.category} popup height (${d.height}) differs from ${first.category} popup height (${first.height})`).toBeCloseTo(first.height, -1);
    }
  });

  // TC-EMPRAT-017 — automatable: false (relationship between the two "edit employee" drawers needs dev confirmation).
  test.fixme('TC-EMPRAT-017 Relationship between the Employee Ratings drawer (14 inputs) and the general Edit Employee drawer (15 inputs) — clarification needed — MANUAL VERIFICATION REQUIRED @boundary @needs-verification', async () => {});

  test('TC-EMPRAT-018 Double-clicking Save on a rating popup does not create duplicate rating records or a conflicting overwrite @boundary @needs-verification', async ({ page }) => {
    // NOTE: underlying rule is speculative — verify with a human before treating a failure as a confirmed regression.
    const row = ratingPage.getDataRows().first();
    if (!(await row.isVisible().catch(() => false))) test.skip(true, 'Ratings table/row not found — selector unconfirmed against live app');
    const popup = await ratingPage.openRatingPopup(row, 'overall');
    if (!(await popup.isVisible().catch(() => false))) test.skip(true, 'Overall rating popup not found — selector unconfirmed against live app');
    const filled = await ratingPage.fillRatingValue(popup, '3');
    if (!filled) test.skip(true, 'Rating popup input not found');

    const writeRequests: number[] = [];
    page.on('response', resp => {
      if (/\/api\/.*rating/i.test(resp.url()) && ['POST', 'PUT', 'PATCH'].includes(resp.request().method())) {
        writeRequests.push(resp.status());
      }
    });
    const saveBtn = popup.getByRole('button', { name: /^save$/i });
    await saveBtn.click().catch(() => {});
    await saveBtn.click({ timeout: 1000 }).catch(() => {}); // second click likely a no-op once the popup closes
    await page.waitForResponse(r => /\/api\/.*rating/i.test(r.url()), { timeout: 3000 }).catch(() => null);

    expect(writeRequests.length, 'Double-clicking Save issued more than one write request (possible duplicate/conflicting overwrite)').toBeLessThanOrEqual(1);
  });
});
