const H = require('./h');
const USER = process.argv[2] || 'zalak.das';
(async () => {
  const b = await H.chromium.launch(); const R = H.runner('tm-' + USER);
  const { page } = await H.login(b, USER); H.attach(page, R.errs);
  await R.step('wu-list', async () => {
    await H.go(page, '/weekly-updates'); await page.waitForTimeout(2000);
    const btns = await page.locator('main button, main a').evaluateAll(b => [...new Set(b.map(x => (x.getAttribute('aria-label') || x.textContent.trim()).slice(0, 40)))].slice(0, 40));
    return { url: page.url(), h: await page.locator('h1').allTextContents(), tabs: await page.getByRole('tab').allTextContents(), rows: await page.locator('table tbody tr').count(), outs: await page.locator('output').allTextContents(), btns, bad: await H.emptyScan(page), shot: await H.shot(page, 't01-weekly-updates') };
  });
  await R.step('wu-row-sample', async () => ({ rows: await page.$$eval('table tbody tr', t => t.slice(0, 4).map(r => r.innerText.replace(/\n/g, ' | ').slice(0, 200))), links: await page.$$eval('main a[href*="weekly-updates/"]', a => a.slice(0, 5).map(x => x.getAttribute('href'))) }));
  await R.step('team-page', async () => {
    await H.go(page, '/team'); await page.waitForTimeout(1500);
    const copy = await page.getByRole('button', { name: /copy/i }).count();
    const btns = await page.locator('main button').evaluateAll(b => [...new Set(b.map(x => (x.getAttribute('aria-label') || x.textContent.trim()).slice(0, 30)))].slice(0, 15));
    return { copy, btns, shot: await H.shot(page, 't02-team') };
  });
  await R.step('team-member-profile', async () => {
    const m = page.locator('main button').filter({ hasNotText: /Add Team|Show All|Edit|Drag/ }).nth(2);
    const t = await m.textContent();
    await m.click(); await page.waitForTimeout(2500);
    const asides = await page.locator('aside[aria-hidden="false"]').evaluateAll(a => a.map(x => x.getAttribute('aria-label') + ' :: ' + x.innerText.replace(/\n/g, ' | ').slice(0, 500)));
    const shot = await H.shot(page, 't03-team-member-profile');
    return { t, asides, bad: await H.emptyScan(page), shot };
  });
  await R.step('team-show-all-details', async () => {
    await page.keyboard.press('Escape');
    const sa = page.getByRole('button', { name: /Show All Details/ });
    if (!(await sa.count())) return { note: 'none' };
    await sa.click(); await page.waitForTimeout(1500);
    const shot = await H.shot(page, 't04-team-show-all');
    return { pressed: await sa.getAttribute('aria-pressed'), shot };
  });
  await R.step('department', async () => {
    await H.go(page, '/department'); await page.waitForTimeout(2000);
    return { url: page.url(), h: await page.locator('h1').allTextContents(), tabs: await page.getByRole('tab').allTextContents(), rows: await page.locator('table tbody tr').count(), bad: await H.emptyScan(page), shot: await H.shot(page, 't05-department') };
  });
  await R.step('dept-weekly-settings-tab', async () => {
    const t = page.getByRole('tab', { name: /Weekly/i });
    if (!(await t.count())) return { note: 'no weekly tab', tabs: await page.getByRole('tab').allTextContents() };
    await t.click(); await page.waitForTimeout(1500);
    return { switches: await page.getByRole('switch').count(), live: await page.$$eval('[aria-live]', e => e.map(x => x.tagName)), shot: await H.shot(page, 't06-dept-weekly-settings') };
  });
  R.done(); await b.close();
})();
