const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('pmo2');
  const { ctx, page } = await H.login(b, 'vihaan.chatterjee'); H.attach(page, R.errs);
  await H.go(page, '/employee?sortBy=availabilityPercentage&sortOrder=desc');
  await page.locator('table tbody tr').first().waitFor({ timeout: 30000 });
  await R.step('emp-page2-then-search', async () => {
    await page.getByRole('button', { name: /^Next/ }).first().click(); await page.waitForTimeout(2000);
    const u1 = page.url();
    const s = page.getByPlaceholder('Name, email, or project');
    await s.fill('sagar'); await page.waitForTimeout(2500); await page.waitForLoadState('networkidle').catch(() => {});
    const u2 = page.url(); const out2 = await page.locator('output').allTextContents();
    const names = await page.$$eval('table tbody tr td:nth-child(2)', t => t.slice(0, 5).map(x => x.textContent.trim().slice(0, 30)));
    const shot = await H.shot(page, 'p06-employee-search-sagar');
    await s.fill(''); await page.waitForTimeout(2500);
    return { u1, u2, out2, names, u3: page.url(), shot };
  });
  await R.step('emp-column-filter', async () => {
    const th = page.locator('thead th').filter({ hasText: 'Departm' });
    await th.getByRole('button', { name: /filter/i }).first().click().catch(async () => { await th.locator('button').last().click(); });
    const pop = page.getByRole('dialog').first(); await pop.waitFor({ timeout: 5000 });
    await pop.getByText('ADMIN', { exact: true }).click();
    await pop.getByText('CSM', { exact: true }).click();
    await pop.getByRole('button', { name: 'Save' }).click(); await page.waitForTimeout(2500);
    const u = new URL(page.url());
    const adv = [...u.searchParams.entries()].filter(([k]) => k.startsWith('adv_'));
    const out = await page.locator('output').allTextContents();
    const depts = await page.$$eval('table tbody tr td:nth-child(3)', t => [...new Set(t.map(x => x.textContent.trim()))]);
    const shot = await H.shot(page, 'p07-employee-dept-filter');
    // reload preserves filter
    await page.reload(); await page.waitForLoadState('networkidle').catch(() => {}); await page.waitForTimeout(1500);
    const out2 = await page.locator('output').allTextContents();
    // clear via popover
    await th.locator('button').last().click(); await page.waitForTimeout(500);
    await page.getByRole('dialog').first().getByRole('button', { name: 'Clear' }).click(); await page.waitForTimeout(2000);
    const u3 = new URL(page.url());
    return { adv, out, depts, afterReload: out2, advAfterClear: [...u3.searchParams.keys()], shot };
  });
  await R.step('emp-timeframe', async () => {
    const tr = page.getByRole('button', { name: /Last 15 days|time range/i }).first();
    const aria = await tr.getAttribute('aria-label');
    await tr.click(); await page.waitForTimeout(500);
    const items = await page.getByRole('menuitem').allTextContents();
    const cur = await page.$$eval('[role="menuitem"][aria-current="true"]', e => e.map(x => x.textContent.trim()));
    await page.getByRole('menuitem').nth(1).click(); await page.waitForTimeout(2500);
    const u = new URL(page.url());
    const label = await page.getByRole('button', { name: aria || /time range/i }).first().textContent();
    const hdr = await page.$$eval('thead th', t => t.map(x => x.textContent.trim()).filter(x => /Log Hours|Availability/.test(x)));
    const shot = await H.shot(page, 'p08-employee-timeframe');
    // reset
    await page.getByRole('button', { name: aria || /time range/i }).first().click(); await page.getByRole('menuitem').first().click(); await page.waitForTimeout(1500);
    return { aria, items, cur, timeFrame: u.searchParams.get('timeFrame'), label, hdr, reset: new URL(page.url()).searchParams.get('timeFrame'), shot };
  });
  await R.step('emp-log-hours-indicators', async () => {
    // log hours column: indicator badges with tooltips
    const res = await page.evaluate(() => {
      const ths = Array.from(document.querySelectorAll('thead th')).map(th => th.textContent.trim());
      const idx = ths.findIndex(t => /^Log Hours/.test(t));
      return { idx, cells: Array.from(document.querySelectorAll('table tbody tr')).slice(0, 25).map(r => { const td = r.querySelectorAll('td')[idx]; return td ? td.innerText.replace(/\n/g, ' ').slice(0, 40) : null; }) };
    });
    return res;
  });
  await R.step('emp-project-badge-hover', async () => {
    const badge = page.locator('table tbody tr').first().locator('td').nth(5).getByRole('button').first();
    const tag = await badge.evaluate(b => b.tagName + ' type=' + b.type + ' cls=' + b.className.slice(0, 80));
    await badge.hover(); await page.waitForTimeout(1200);
    const card = await page.locator('[data-slot="hover-card-content"], [role="dialog"], [data-radix-popper-content-wrapper]').allTextContents();
    const shot = await H.shot(page, 'p09-project-badge-hover');
    await badge.focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(1200);
    const afterEnter = { url: page.url(), dialogs: await page.getByRole('dialog').count() };
    const shot2 = await H.shot(page, 'p09b-project-badge-enter');
    await page.keyboard.press('Escape'); await page.waitForTimeout(500);
    return { tag, card: card.map(c => c.slice(0, 200)), afterEnter, shot, shot2 };
  });
  await R.step('emp-projects-overflow-popover', async () => {
    const more = page.locator('table tbody td').getByRole('button', { name: /^\+\d/ }).first();
    await more.click(); await page.waitForTimeout(1200);
    const pop = page.locator('[data-radix-popper-content-wrapper]').last();
    const txt = (await pop.textContent()).slice(0, 400);
    const btns = await pop.locator('button').evaluateAll(bs => bs.slice(0, 10).map(b => b.textContent.trim().slice(0, 30) + '|' + b.className.includes('text-left')));
    const shot = await H.shot(page, 'p10-projects-popover');
    // click the first project name button inside popover → opens project panel?
    const pb = pop.locator('button.underline, button[title]').first();
    let after = null;
    if (await pb.count()) { const t = await pb.textContent(); await pb.click(); await page.waitForTimeout(1500); after = { clicked: t, url: page.url(), aside: await page.locator('aside[aria-label]').evaluateAll(a => a.map(x => x.getAttribute('aria-label') + ':' + x.getAttribute('aria-hidden'))) }; await H.shot(page, 'p10b-project-panel-from-popover'); }
    await page.keyboard.press('Escape');
    return { txt, btns, after, shot };
  });
  await R.step('emp-side-panel', async () => {
    await H.go(page, '/employee?sortBy=availabilityPercentage&sortOrder=desc');
    await page.locator('table tbody tr').first().waitFor({ timeout: 30000 });
    // click employee name to open side panel
    const nm = page.locator('table tbody tr').nth(1).locator('td').nth(1).getByRole('button').first();
    const nmText = await nm.textContent();
    await nm.click(); await page.waitForTimeout(2500);
    const aside = await page.locator('aside').evaluateAll(a => a.map(x => ({ role: x.getAttribute('role'), label: x.getAttribute('aria-label'), hidden: x.getAttribute('aria-hidden') })));
    const landmarks = await page.getByRole('complementary').count();
    const shot = await H.shot(page, 'p11-employee-side-panel');
    const panel = page.locator('aside[aria-hidden="false"]').last();
    const iconBtns = await panel.locator('button:has(img)').evaluateAll(bs => bs.map(b => b.getAttribute('aria-label')));
    const truncBtns = await panel.locator('button.truncate').evaluateAll(bs => bs.slice(0, 6).map(b => b.textContent.trim().slice(0, 30)));
    const bad = await H.emptyScan(page);
    const txt = (await panel.innerText()).slice(0, 1200);
    return { nmText, aside, landmarks, iconBtns, truncBtns, bad, txt, shot };
  });
  await R.step('emp-side-panel-icon-tooltip', async () => {
    const panel = page.locator('aside[aria-hidden="false"]').last();
    const ib = panel.locator('button:has(img)').first();
    if (!(await ib.count())) return { note: 'no icon button' };
    await ib.focus(); await page.waitForTimeout(900);
    const tip = await page.locator('[role="tooltip"]').allTextContents();
    const shot = await H.shot(page, 'p12-side-panel-icon-tooltip');
    return { label: await ib.getAttribute('aria-label'), tip, shot };
  });
  await R.step('emp-side-panel-close', async () => {
    const close = page.locator('aside[aria-hidden="false"]').last().getByRole('button', { name: /close/i }).first();
    await close.click(); await page.waitForTimeout(800);
    return { open: await page.locator('aside[aria-hidden="false"]').count() };
  });
  await R.step('past-employee-tab', async () => {
    await page.getByRole('tab', { name: 'Past Employee' }).or(page.getByRole('button', { name: 'Past Employee' })).first().click(); await page.waitForTimeout(2500);
    const ths = await page.$$eval('thead th', t => t.map(x => x.textContent.trim()));
    const rows = await page.locator('table tbody tr').count();
    const actionBtns = await page.locator('table tbody button[aria-label*="elete"], table tbody button[aria-label*="estore"]').count();
    const bad = await H.emptyScan(page);
    const shot = await H.shot(page, 'p13-past-employees');
    const sb = page.locator('thead button[aria-label*="ort"]').first();
    await sb.click(); await page.waitForTimeout(1500);
    return { ths, rows, actionBtns, bad, url: page.url(), shot };
  });
  R.done(); await b.close();
})();
