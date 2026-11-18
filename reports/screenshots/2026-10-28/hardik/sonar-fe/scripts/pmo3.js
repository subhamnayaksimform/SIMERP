const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('pmo3');
  const { ctx, page } = await H.login(b, 'vihaan.chatterjee'); H.attach(page, R.errs);
  const visit = (id, path, sh, extra) => R.step(id, async () => {
    await H.go(page, path);
    await page.waitForTimeout(1500);
    const h = await page.locator('h1').allTextContents();
    const r = { url: page.url(), h, tabs: await page.getByRole('tab').allTextContents(), rows: await page.locator('table tbody tr').count(), outputs: await page.locator('output').allTextContents(), bad: await H.emptyScan(page) };
    if (extra) Object.assign(r, await extra());
    r.shot = await H.shot(page, sh);
    return r;
  });
  await visit('projects-list', '/projects', 'q01-projects');
  await R.step('projects-sort-search', async () => {
    const sb = page.locator('thead button[aria-label*="ort"]').first();
    await sb.click(); await page.waitForTimeout(1500);
    const u1 = page.url();
    const s = page.getByPlaceholder(/Search/i).first(); const ph = await s.getAttribute('placeholder');
    await s.fill('pulse'); await page.waitForTimeout(2500);
    const u2 = page.url(); const out = await page.locator('output').allTextContents();
    const shot = await H.shot(page, 'q02-projects-search');
    await s.fill(''); await page.waitForTimeout(1500);
    return { u1, ph, u2, out, shot };
  });
  await R.step('projects-panel', async () => {
    await H.go(page, '/projects');
    const first = page.locator('table tbody tr').first().locator('td').nth(1).getByRole('button').first();
    const t = await first.textContent().catch(() => null);
    await first.click(); await page.waitForTimeout(2500);
    const panel = page.locator('aside[aria-hidden="false"]').last();
    const txt = (await panel.innerText().catch(() => '')).slice(0, 900);
    const nameBtns = await panel.locator('button.text-left').evaluateAll(bs => bs.slice(0, 6).map(b => b.textContent.trim().slice(0, 30)));
    const deptIcons = await panel.locator('button:has(img)').evaluateAll(bs => bs.slice(0, 6).map(b => ({ label: b.getAttribute('aria-label'), alt: b.querySelector('img').alt })));
    const sortBtns = await panel.locator('button[aria-label*="ort"]').evaluateAll(bs => bs.map(b => b.getAttribute('aria-label')));
    const shot = await H.shot(page, 'q03-project-side-panel');
    return { clicked: t, txt, nameBtns, deptIcons, sortBtns, bad: await H.emptyScan(page), shot };
  });
  await R.step('projects-panel-dept-icon-tooltip', async () => {
    const panel = page.locator('aside[aria-hidden="false"]').last();
    const ib = panel.locator('button:has(img)').first();
    if (!(await ib.count())) return { note: 'no dept icon' };
    await ib.focus(); await page.waitForTimeout(900);
    const tip = await page.locator('[role="tooltip"]').allTextContents();
    const shot = await H.shot(page, 'q04-project-panel-dept-tooltip');
    return { tip, shot };
  });
  await R.step('projects-panel-employee-click', async () => {
    const panel = page.locator('aside[aria-hidden="false"]').last();
    const nb = panel.locator('button.text-left').first();
    if (!(await nb.count())) return { note: 'no employee name button' };
    const t = await nb.textContent();
    await nb.focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(2000);
    const asides = await page.locator('aside[aria-hidden="false"]').evaluateAll(a => a.map(x => x.getAttribute('aria-label')));
    const shot = await H.shot(page, 'q05-project-panel-employee-enter');
    await page.keyboard.press('Escape');
    return { t, asides, shot };
  });
  await visit('team', '/team', 'q06-team', async () => {
    const btns = await page.locator('main button').evaluateAll(bs => [...new Set(bs.map(b => (b.getAttribute('aria-label') || b.textContent).trim()).filter(Boolean))].slice(0, 30));
    const copy = await page.getByRole('button', { name: /^Copy/ }).count();
    const copyLabel = await page.locator('[aria-label="Copy team data"]').count();
    return { btns, copy, copyLabel };
  });
  await R.step('team-dept-switch-member', async () => {
    const combo = page.locator('#department-combobox');
    let opts = null;
    if (await combo.count()) { await combo.click(); await page.waitForTimeout(800); opts = (await page.getByRole('option').allTextContents()).slice(0, 8); await page.getByRole('option').nth(1).click().catch(() => {}); await page.waitForTimeout(2500); }
    const cards = await page.locator('main h3, main [data-team-card]').allTextContents();
    // click a member to open profile panel
    const member = page.locator('main [role="button"], main button').filter({ hasText: /\w+ \w+/ }).first();
    const mt = await member.textContent().catch(() => null);
    await member.click().catch(() => {}); await page.waitForTimeout(2000);
    const panel = await page.locator('aside[aria-hidden="false"]').evaluateAll(a => a.map(x => x.getAttribute('aria-label') + ':' + x.innerText.slice(0, 300)));
    const shot = await H.shot(page, 'q07-team-member-panel');
    return { opts, cards: cards.slice(0, 8), mt, panel, bad: await H.emptyScan(page), shot };
  });
  await visit('dashboard', '/dashboard', 'q08-dashboard', async () => {
    const fills = await page.$$eval('.recharts-pie-sector path, .recharts-sector', ps => ps.map(p => p.getAttribute('fill')));
    return { fills };
  });
  await R.step('dashboard-donut-hover', async () => {
    const sec = page.locator('.recharts-pie-sector').first();
    if (!(await sec.count())) return { note: 'no donut' };
    const before = await page.$$eval('.recharts-pie-sector path', ps => ps.map(p => p.getAttribute('d').slice(0, 60)));
    const box = await sec.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2); await page.waitForTimeout(800);
    const after = await page.$$eval('.recharts-pie-sector path', ps => ps.map(p => p.getAttribute('d').slice(0, 60)));
    const tip = await page.locator('.recharts-tooltip-wrapper').allTextContents();
    const center = await page.$$eval('.recharts-pie text, .recharts-label', t => t.map(x => x.textContent));
    const shot = await H.shot(page, 'q09-dashboard-donut-hover');
    return { changed: before.map((d, i) => d !== after[i]), tip, center, shot };
  });
  await visit('goals', '/employee/goals', 'q10-goals', async () => ({ fills: await page.$$eval('.recharts-pie-sector path', ps => ps.map(p => p.getAttribute('fill'))), center: await page.$$eval('.recharts-pie text', t => t.map(x => x.textContent)), fieldsets: await page.$$eval('fieldset', f => f.map(x => x.getAttribute('aria-label'))) }));
  await R.step('goals-ld-chart-tooltip', async () => {
    const bar = page.locator('.recharts-bar-rectangle').first();
    if (!(await bar.count())) return { note: 'no bar chart' };
    await bar.hover(); await page.waitForTimeout(900);
    const tip = await page.locator('.recharts-tooltip-wrapper').allTextContents();
    const shot = await H.shot(page, 'q11-goals-ld-tooltip');
    return { tip: tip.map(t => t.slice(0, 200)), shot };
  });
  await R.step('goals-ranked-pagination', async () => {
    const outs = await page.locator('output').allTextContents();
    const sel = page.getByRole('combobox').filter({ hasText: /\d+/ });
    return { outs, nCombos: await sel.count() };
  });
  await R.step('goals-tabs', async () => {
    const tabs = page.getByRole('tab'); const names = await tabs.allTextContents(); const res = {};
    for (let i = 0; i < names.length; i++) { await tabs.nth(i).click(); await page.waitForTimeout(2500); res[names[i]] = { rows: await page.locator('table tbody tr').count(), ths: (await page.$$eval('thead th', t => t.map(x => x.textContent.trim()))).slice(0, 12), bad: await H.emptyScan(page) }; await H.shot(page, 'q12-goals-tab' + i); }
    return res;
  });
  await R.step('goals-by-goal-sort', async () => {
    const tabs = page.getByRole('tab'); const names = await tabs.allTextContents();
    const i = names.findIndex(n => /By Goal|Goal/.test(n)); if (i >= 0) { await tabs.nth(i).click(); await page.waitForTimeout(2000); }
    const th = page.locator('thead th').filter({ hasText: /Dep\.? Assigned|Department/ }).first();
    const sb = th.locator('button[aria-label*="ort"]');
    if (!(await sb.count())) return { note: 'no sort on dept assigned', ths: await page.$$eval('thead th', t => t.map(x => x.textContent.trim())) };
    await sb.click(); await page.waitForTimeout(1500); const u = page.url();
    const pop = page.locator('table tbody tr').first().getByRole('button').first();
    return { u };
  });
  await visit('tech-stack', '/tech-stack', 'q13-tech-stack');
  await visit('working-location', '/working-location', 'q14-working-location');
  await R.step('wl-trend-tooltip', async () => {
    const pt = page.locator('.recharts-surface').first();
    if (!(await pt.count())) return { note: 'no chart' };
    const box = await pt.boundingBox(); await page.mouse.move(box.x + box.width * 0.6, box.y + box.height / 2); await page.waitForTimeout(800);
    const tip = await page.locator('.recharts-tooltip-wrapper').allTextContents();
    const shot = await H.shot(page, 'q15-wl-trend-tooltip');
    return { tip: tip.map(t => t.slice(0, 200)), shot };
  });
  await visit('skills', '/employee/skills', 'q16-skills');
  await visit('certifications', '/employee/certifications', 'q17-certifications');
  await visit('notifications', '/notifications', 'q18-notifications', async () => {
    const s = page.getByPlaceholder(/Search/i).first();
    if (!(await s.count())) return { note: 'no search' };
    await s.fill('allocation'); await page.waitForTimeout(2000);
    const marks = await page.$$eval('mark', m => m.slice(0, 5).map(x => x.textContent));
    await s.fill('a.b(c'); await page.waitForTimeout(1500);
    const marks2 = await page.$$eval('mark', m => m.length);
    await s.fill('allocation');
    await page.waitForTimeout(1500);
    return { marks, marks2 };
  });
  R.done(); await b.close();
})();
