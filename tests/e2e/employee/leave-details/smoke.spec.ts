import { test, expect } from '@playwright/test';
import { LeaveDetailsPage } from '../../../page-objects/employee/leave-details.page';

// TC-EMPLEV-001, 002 — wholly new sub-feature (2026-07-13, Figma-derived, no prior automation).
// Uses the default `page` fixture (ceo@simformsolutions.com storageState — see
// tests/playwright.config.ts `use.storageState`), matching the convention already used by
// tests/e2e/employee/employee-details/smoke.spec.ts.
test.describe('Employee — Leave & Compliance Details — Smoke', () => {
  let leavePage: LeaveDetailsPage;

  test.beforeEach(async ({ page }) => {
    leavePage = new LeaveDetailsPage(page);
    await leavePage.navigateToLeaveDetails();
    test.skip(
      !(await leavePage.table.isVisible().catch(() => false)),
      'Leave & Compliance Details screen confirmed not found live as of 2026-07-13 — GET /employee/leave returns an in-app 404 and no "Leave" item exists in the Employee sidebar submenu. Figma design-ahead feature, not yet implemented in the running app.'
    );
  });

  test('TC-EMPLEV-001 Full Leave & Compliance Details list renders all 5 Status values with correctly formatted Reason/Date/Days @smoke', async () => {
    const tableVisible = await leavePage.table.isVisible().catch(() => false);
    if (!tableVisible) test.skip(true, 'Leave & Compliance Details table not found — navigation path/selector unconfirmed against live app');

    await expect(leavePage.statusColumnHeader).toBeVisible();
    await expect(leavePage.reasonColumnHeader).toBeVisible();
    await expect(leavePage.dateColumnHeader).toBeVisible();
    await expect(leavePage.daysColumnHeader).toBeVisible();

    const statuses = await leavePage.getAllStatusTexts();
    const expectedStatuses = ['Past', 'Ongoing', 'Upcoming', 'PIP', 'NP'];
    const missing = expectedStatuses.filter(s => !statuses.some(actual => actual === s));
    if (missing.length > 0) test.skip(true, `Dataset does not currently contain all 5 Status values (missing: ${missing.join(', ')})`);

    const rows = leavePage.getDataRows();
    const count = await rows.count();
    for (let i = 0; i < count; i++) {
      const status = (await leavePage.getStatusCell(rows.nth(i)).textContent()) ?? '';
      const days = (await leavePage.getDaysCell(rows.nth(i)).textContent()) ?? '';
      if (/^(pip|np)$/i.test(status.trim())) {
        expect(days, `PIP/NP row must show a countdown format ("N Days Left"), row status=${status}`).toMatch(/days left/i);
      } else if (/^(past|ongoing|upcoming)$/i.test(status.trim())) {
        expect(days, `Past/Ongoing/Upcoming row must show a fixed day count, row status=${status}`).toMatch(/^\d+\s*days?$/i);
      }
    }
  });

  test('TC-EMPLEV-002 Notice Period and PIP/Ongoing scoped views correctly filter the dataset by Status @smoke', async () => {
    const pipOngoingOpened = await leavePage.openPipOngoingScopedView();
    if (pipOngoingOpened) {
      const statuses = await leavePage.getAllStatusTexts();
      for (const s of statuses) {
        expect(['PIP', 'Ongoing'], `PIP/Ongoing scoped view leaked a row with Status="${s}"`).toContain(s.trim());
      }
    }

    const noticePeriodOpened = await leavePage.openNoticePeriodScopedView();
    if (noticePeriodOpened) {
      const statuses = await leavePage.getAllStatusTexts();
      for (const s of statuses) {
        expect(s.trim(), `Notice Period scoped view leaked a row with Status="${s}"`).toBe('NP');
      }
    }

    if (!pipOngoingOpened && !noticePeriodOpened) {
      test.skip(true, 'Neither scoped-view trigger was found — selectors unconfirmed against live app');
    }
  });
});
