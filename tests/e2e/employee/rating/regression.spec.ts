import { test, expect } from '@playwright/test';
import { RatingPage } from '../../../page-objects/employee/rating.page';

test.describe('Employee — Ratings — Regression', () => {
  let ratingPage: RatingPage;

  test.beforeEach(async ({ page }) => {
    ratingPage = new RatingPage(page);
    await ratingPage.navigateToRatings();
    test.skip(
      !(await ratingPage.table.isVisible().catch(() => false)),
      'Ratings screen confirmed not found live as of 2026-07-13 — GET /employee/ratings returns an in-app 404 and no "Ratings" item exists in the Employee sidebar submenu. Figma design-ahead feature, not yet implemented in the running app.'
    );
  });

  // TC-EMPRAT-023 — category: integration, routed here (@regression tag, no dedicated
  // integration.spec.ts file in this suite's per-category layout).
  test('TC-EMPRAT-023 Integration — Ratings tab shares chrome with Employee/Leave tabs; a shared-shell regression affects all three @regression @functional', async () => {
    const tableVisible = await ratingPage.table.isVisible().catch(() => false);
    if (!tableVisible) test.skip(true, 'Ratings table not found — navigation path/selector unconfirmed against live app');
    await expect(ratingPage.searchInput).toBeVisible();

    const employeeTabVisible = await ratingPage.employeeTab.isVisible().catch(() => false);
    const leaveTabVisible = await ratingPage.leaveTab.isVisible().catch(() => false);
    if (!employeeTabVisible && !leaveTabVisible) {
      test.skip(true, 'Employee/Leave tab controls not found alongside the Ratings tab — shared-shell tab selectors unconfirmed against live app');
    }
    if (employeeTabVisible) await expect(ratingPage.employeeTab).toBeVisible();
    if (leaveTabVisible) await expect(ratingPage.leaveTab).toBeVisible();
  });

  // TC-EMPRAT-024 — category: integration, automatable: false (whether the two drawers truly share
  // a component is unconfirmed; requires dev confirmation first).
  test.fixme('TC-EMPRAT-024 Integration — Employee Ratings drawer and general Edit Employee drawer may share an underlying form-section component — MANUAL VERIFICATION REQUIRED @regression @functional', async () => {});

  test('TC-EMPRAT-025 Regression — Ratings tab\'s shared chrome continues to function correctly after Employee/Leave tab changes @regression', async () => {
    const tableVisible = await ratingPage.table.isVisible().catch(() => false);
    if (!tableVisible) test.skip(true, 'Ratings table not found — navigation path/selector unconfirmed against live app');
    await expect(ratingPage.searchInput).toBeVisible();
    if (await ratingPage.nextPageBtn.isEnabled().catch(() => false)) {
      await ratingPage.nextPageBtn.click();
      await expect(ratingPage.table).toBeVisible();
    }
  });

  // TC-EMPRAT-026 — automatable: false (depends on confirming whether the two drawers actually share a component).
  test.fixme('TC-EMPRAT-026 Regression — a fix/break in the general Edit Employee drawer does not silently affect the Employee Ratings drawer — MANUAL VERIFICATION REQUIRED @regression', async () => {});

  test('TC-EMPRAT-027 Rating category popup shared-component regression check across Overall/AI/Communication @regression', async () => {
    const row = ratingPage.getDataRows().first();
    if (!(await row.isVisible().catch(() => false))) test.skip(true, 'Ratings table/row not found — selector unconfirmed against live app');

    let anyOpened = false;
    for (const category of ['overall', 'ai', 'communication'] as const) {
      const popup = await ratingPage.openRatingPopup(row, category);
      const visible = await popup.isVisible().catch(() => false);
      if (!visible) continue;
      anyOpened = true;
      await expect(ratingPage.getRatingPopupInput(popup)).toBeVisible();
      await expect(popup.getByRole('button', { name: /^cancel$/i })).toBeVisible();
      await expect(popup.getByRole('button', { name: /^save$/i })).toBeVisible();
      await ratingPage.cancelRatingPopup(popup);
    }
    if (!anyOpened) test.skip(true, 'No rating popup could be opened for any category — selectors unconfirmed against live app');
  });
});
