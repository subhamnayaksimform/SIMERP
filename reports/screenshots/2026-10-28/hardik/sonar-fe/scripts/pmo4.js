const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('pmo4');
  const { ctx, page } = await H.login(b, 'vihaan.chatterjee'); H.attach(page, R.errs);
  await R.step('dashboard-donut-hover2', async () => {
    await H.go(page, '/dashboard'); await page.waitForTimeout(2000);
    const lbl = page.locator('text').filter({ hasText: 'total hours' }).first();
    const tb = await page.locator('tspan').filter({ hasText: /h$/ }).first().boundingBox();
    const secs = page.locator('.recharts-pie-sector');
    const n = await secs.count();
    const before = await page.$$eval('.recharts-pie-sector path', ps => ps.map(p => p.getAttribute('d')));
    const cx = tb.x + tb.width / 2, cy = tb.y + tb.height;
    const res = [];
    for (const dx of [-80, 80]) {
      await page.mouse.move(cx + dx, cy); await page.waitForTimeout(900);
      const after = await page.$$eval('.recharts-pie-sector path', ps => ps.map(p => p.getAttribute('d')));
      const tip = (await page.locator('.recharts-tooltip-wrapper').allTextContents()).filter(Boolean);
      res.push({ dx, changed: before.map((d, i) => d !== after[i]), tip });
      await H.shot(page, 'q09b-dashboard-donut-hover-' + (dx < 0 ? 'left' : 'right'));
    }
    return { n, res };
  });
  await R.step('dashboard-empty-check', async () => ({ bad: await H.emptyScan(page) }));
  for (const [id, path, sh] of [['skills', '/employee/skills', 'q16-skills'], ['certifications', '/employee/certifications', 'q17-certifications']]) {
    await R.step(id, async () => { await H.go(page, path); await page.waitForTimeout(1500); return { url: page.url(), h: await page.locator('h1').allTextContents(), outputs: await page.locator('output').allTextContents(), rows: await page.locator('table tbody tr').count(), bad: await H.emptyScan(page), shot: await H.shot(page, sh) }; });
  }
  await R.step('notifications-search-highlight', async () => {
    await H.go(page, '/notifications');
    const s = page.getByPlaceholder(/Search/i).first();
    const ph = await s.getAttribute('placeholder').catch(() => null);
    await s.fill('allocation'); await page.waitForTimeout(2500);
    const marks = await page.$$eval('mark', m => m.slice(0, 6).map(x => x.textContent));
    const dupKeys = R.errs.filter(e => /same key|unique "key"/.test(e.text)).length;
    const shot = await H.shot(page, 'q18-notifications-highlight');
    await s.fill('(a+'); await page.waitForTimeout(2000);
    const marks2 = await page.$$eval('mark', m => m.length);
    const shot2 = await H.shot(page, 'q18b-notifications-regex-chars');
    return { ph, marks, dupKeys, marks2, shot, shot2 };
  });
  await R.step('projects-na-context', async () => {
    await H.go(page, '/projects');
    const r = await page.evaluate(() => {
      const ths = Array.from(document.querySelectorAll('thead th')).map(t => t.textContent.trim());
      const hits = [];
      document.querySelectorAll('table tbody tr').forEach((tr, ri) => tr.querySelectorAll('td').forEach((td, ci) => {
        td.querySelectorAll('*').forEach(el => { if (!el.children.length && /^(NA|N\/A|-|—)$/.test(el.textContent.trim())) hits.push({ ri, col: ths[ci], proj: tr.querySelectorAll('td')[1]?.textContent.trim().slice(0, 40) }); });
      }));
      return { ths, hits: hits.slice(0, 10), total: hits.length };
    });
    const shot = await H.shot(page, 'q19-projects-na');
    return { ...r, shot };
  });
  await R.step('team-member-panel', async () => {
    await H.go(page, '/team');
    const s = await page.evaluate(() => Array.from(document.querySelectorAll('main [role="button"], main button')).slice(0, 30).map(b => (b.getAttribute('aria-label') || b.textContent.trim()).slice(0, 40)));
    const member = page.locator('main [data-member], main li button, main [role="button"]').first();
    const shot = await H.shot(page, 'q20-team-page');
    return { s };
  });
  R.done(); await b.close();
})();
