const { chromium, login, api, shot, save, BASE } = require('./lib');
(async () => {
  const b = await chromium.launch();
  const { ctx, page } = await login(b, 'ceo@simformsolutions.com');
  const out = {};
  await page.goto(BASE + '/admin/job-queue-scheduler', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle').catch(() => {});
  await page.getByText('Scheduled Jobs').first().click(); await page.waitForTimeout(1500);
  await page.getByText('All Jobs').first().click(); await page.waitForTimeout(1000);
  out.options = await page.getByRole('option').allInnerTexts();
  out.shotDropdown = await shot(page, 'admin-scheduler-jobs-dropdown');
  await page.keyboard.press('Escape');
  out.run = await api(page, 'POST', '/sync-queue/cron-runs/release-announcement/run');
  out.runUnknown = await api(page, 'POST', '/sync-queue/cron-runs/not-a-job/run');
  await page.waitForTimeout(20000);
  out.runsAfter = await api(page, 'GET', '/sync-queue/cron-runs?jobName=release-announcement&limit=100');
  out.notif = (await api(page, 'GET', '/notifications?page=1&limit=20')).body;
  out.relNotif = JSON.stringify(out.notif).includes('release.published');
  // Roles page: open Releases row
  await page.goto(BASE + '/admin/roles-and-permissions', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForTimeout(1500);
  const rel = page.getByText('Releases', { exact: true }).first();
  await rel.scrollIntoViewIfNeeded().catch(() => {});
  out.shotRoles = await shot(page, 'admin-roles-releases');
  out.relRowText = await page.locator('tr, [role="row"]').filter({ hasText: 'Releases' }).allInnerTexts().catch(() => []);
  save('04-admin-run', { ...out, notif: undefined });
  console.log(JSON.stringify({ ...out, notif: undefined }, null, 1));
  await ctx.close(); await b.close();
})();
