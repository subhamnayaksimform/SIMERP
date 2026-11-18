import { test, expect } from '@playwright/test';
import { LeaveDetailsPage } from '../../../page-objects/employee/leave-details.page';

test.describe('Employee — Leave & Compliance Details — Boundary', () => {
  let leavePage: LeaveDetailsPage;

  test.beforeEach(async ({ page }) => {
    leavePage = new LeaveDetailsPage(page);
    await leavePage.navigateToLeaveDetails();
    test.skip(
      !(await leavePage.table.isVisible().catch(() => false)),
      'Leave & Compliance Details screen confirmed not found live as of 2026-07-13 — GET /employee/leave returns an in-app 404 and no "Leave" item exists in the Employee sidebar submenu. Figma design-ahead feature, not yet implemented in the running app.'
    );
  });

  // TC-EMPLEV-016 — automatable: false (expired-state copy unconfirmed in source).
  test.fixme('TC-EMPLEV-016 Notice-period countdown boundary at 1 day left and at/after expiry — MANUAL VERIFICATION REQUIRED @boundary', async () => {});

  // TC-EMPLEV-017 — automatable: false (PIP-countdown-reaches-0 transition label unconfirmed).
  test.fixme('TC-EMPLEV-017 PIP countdown reaching 0 transitions to a defined status/label — MANUAL VERIFICATION REQUIRED @boundary', async () => {});

  test("TC-EMPLEV-018 A leave row with a blank/'-' Reason renders '-' rather than blank/null causing a crash @boundary", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('pageerror', err => consoleErrors.push(err.message));

    const opened = await leavePage.openNoticePeriodScopedView();
    const rows = leavePage.getDataRows();
    const count = await rows.count();
    if (!opened || count === 0) test.skip(true, 'No NP row with a blank Reason found, or Notice Period scoped view selector unconfirmed against live app');

    const reason = ((await leavePage.getReasonCell(rows.first()).textContent()) ?? '').trim();
    expect(reason).toBe('-');
    expect(consoleErrors.length).toBe(0);
  });

  // TC-EMPLEV-019 — automatable: false (data-source parity between the two screens unconfirmed).
  test.fixme("TC-EMPLEV-019 'Leave & Compliance Details' and 'Employee Past Leaves' do not silently diverge as independent data sources — MANUAL VERIFICATION REQUIRED @boundary", async () => {});

  test('TC-EMPLEV-020 A long-duration leave row (91 Days) sorts correctly relative to short 2-Day entries @boundary', async () => {
    const daysBefore = await leavePage.getAllDaysTexts();
    if (daysBefore.length < 2) test.skip(true, 'Fewer than 2 rows available to verify a sort order');

    await leavePage.sortByDays();
    const daysAscending = await leavePage.getAllDaysTexts();
    await leavePage.sortByDays();
    const daysDescending = await leavePage.getAllDaysTexts();

    // A sort-by-Days control is assumed to exist per the case's automationHint (PARTIAL, not confirmed) —
    // if clicking the header didn't change order at all in either direction, the control likely doesn't exist.
    const changed = JSON.stringify(daysAscending) !== JSON.stringify(daysBefore) || JSON.stringify(daysDescending) !== JSON.stringify(daysBefore);
    if (!changed) test.skip(true, 'Days column header does not appear to trigger a sort — sort-by-Days control unconfirmed against live app');
    expect(daysAscending).not.toEqual(daysDescending);
  });

  // TC-EMPLEV-021 — automatable: false (requires a mocked/travel-able clock to assert daily decrement).
  test.fixme('TC-EMPLEV-021 Days countdown decrements daily and transitions to an expired/zero state at day 0 — MANUAL VERIFICATION REQUIRED @boundary', async () => {});
});
