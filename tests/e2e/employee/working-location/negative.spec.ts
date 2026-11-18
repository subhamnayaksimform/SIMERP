import { test, expect } from '../../../fixtures/auth';
import { WorkingLocationPage } from '../../../page-objects/employee/working-location.page';

/**
 * Employee Working Location — negative: backend errors are shown as friendly states (mocked responses).
 */
test.describe('Employee — Working Location — Error handling', () => {
  test('TC-EMPWLC-028 @negative A server error on the list endpoint shows a friendly state, not a raw error', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await primaryPage.route(/\/api\/v1\/working-location\/list/, r => r.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ statusCode: 500, message: 'Internal server error', stack: 'Error: boom\n    at Fake (x.ts:1:1)' }) }));
    await wl.gotoEmployeeList();
    const was = await wl.setColumn(true);
    try {
      await expect(primaryPage.locator('table tbody tr').first()).toBeVisible();
      await expect(primaryPage.locator('body')).not.toContainText(/at Fake|Error: boom|stack/);
    } finally {
      await primaryPage.unroute(/\/api\/v1\/working-location\/list/);
      await wl.setColumn(was);
    }
  });

  test('TC-EMPWLC-027 @negative A 403 on the profile endpoint hides the card without breaking the profile', async ({ primaryPage }) => {
    const wl = new WorkingLocationPage(primaryPage);
    await primaryPage.route(/\/api\/v1\/working-location\/employees\/[0-9a-f-]{36}$/, r => r.fulfill({ status: 403, contentType: 'application/json', body: '{"statusCode":403,"message":"Forbidden"}' }));
    await wl.gotoOwnProfile();
    await expect(primaryPage.getByRole('heading', { name: 'Skills' })).toBeVisible();
    await expect(primaryPage.locator('body')).not.toContainText(/statusCode|"Forbidden"/);
  });
});
