const { chromium, login, api, shot, save, BASE } = require('./lib');
(async () => {
  const b = await chromium.launch();
  const { ctx, page } = await login(b, 'ceo@simformsolutions.com');
  const out = {};
  await page.goto(BASE + '/admin/job-queue-scheduler', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: /scheduled jobs/i }).first().click().catch(()=>page.getByText('Scheduled Jobs').first().click()); await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForTimeout(2000);
  out.schedText = (await page.locator('body').innerText()).slice(0, 4000);
  out.shotSched = await shot(page, 'admin-scheduler', true);
  const row = page.locator('tr, [role="row"], li, div').filter({ hasText: 'New Release Notifications' }).filter({ has: page.getByRole('button', { name: /run now/i }) }).last();
  out.rowCount = await page.getByText('New Release Notifications').count();
  out.rowText = await row.innerText().catch(() => '');
  const before = await api(page, 'GET', '/sync-queue/cron-runs?jobName=release-announcement&limit=100');
  out.runsBefore = before.status + ' ' + JSON.stringify(before.body).slice(0, 300);
  // Run now via the row button
  const btn = row.getByRole('button', { name: /run now/i });
  out.runBtn = await btn.count();
  if (out.runBtn) {
    const respP = page.waitForResponse(r => /cron-runs\/release-announcement\/run/.test(r.url()), { timeout: 15000 }).catch(() => null);
    await btn.first().click();
    const confirm = page.getByRole('button', { name: /^(run|confirm|yes|run now)$/i });
    if (await confirm.count()) { await page.waitForTimeout(500); await confirm.last().click().catch(() => {}); }
    const resp = await respP; out.runResp = resp ? resp.status() + ' ' + (await resp.text()) : 'no request';
    await page.waitForTimeout(1500); out.shotRun = await shot(page, 'admin-scheduler-run-now');
    out.toast = await page.locator('[data-sonner-toast]').allInnerTexts().catch(() => []);
  }
  await page.waitForTimeout(15000);
  const after = await api(page, 'GET', '/sync-queue/cron-runs?jobName=release-announcement&limit=100');
  out.runsAfter = after.status + ' ' + JSON.stringify(after.body).slice(0, 600);
  const sum = await api(page, 'GET', '/sync-queue/cron-runs/summary');
  out.summaryRelease = (sum.body.data || []).find(j => j.jobName === 'release-announcement');
  const rel = await api(page, 'GET', '/releases'); out.releasesAfter = JSON.stringify(rel.body);
  const n = await api(page, 'GET', '/notifications?page=1&limit=20'); out.notifAfter = JSON.stringify(n.body).match(/release/gi);
  // Roles & permissions
  await page.goto(BASE + '/admin/roles-and-permissions', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForTimeout(2000);
  out.rolesUrl = page.url();
  out.rolesShot = await shot(page, 'admin-roles', true);
  out.rolesHasRelease = (await page.locator('body').innerText()).split('\n').filter(l => /release|what.?s new/i.test(l));
  save('03-admin-ui', out);
  console.log(JSON.stringify({ ...out, schedText: undefined }, null, 1));
  console.log(out.schedText.slice(0, 2500));
  await ctx.close(); await b.close();
})();
