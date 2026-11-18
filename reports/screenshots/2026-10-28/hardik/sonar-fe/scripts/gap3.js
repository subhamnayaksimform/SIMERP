const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const errs = [];
  const { page } = await H.login(b, 'vihaan.chatterjee'); H.attach(page, errs);
  await H.go(page, '/employee');
  await page.locator('table tbody tr').first().waitFor({ timeout: 20000 });
  const out = [];
  const trig = page.locator('table tbody td button[aria-haspopup="dialog"]').filter({ hasText: /^\s*\+\s*\d+/ });
  for (const i of [2, 3]) {
    const t = trig.nth(i);
    await t.scrollIntoViewIfNeeded();
    const box = await t.boundingBox();
    await t.click(); await page.waitForTimeout(1500);
    const id = await t.getAttribute('aria-controls');
    const info = await page.evaluate((id) => { const el = document.getElementById(id); if (!el) return { found: false }; const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); const w = el.closest('[data-radix-popper-content-wrapper]'); const wr = w && w.getBoundingClientRect(); return { found: true, rect: [r.x, r.y, r.width, r.height].map(Math.round), vis: cs.visibility, op: cs.opacity, disp: cs.display, state: el.dataset.state, wrapper: wr && [wr.x, wr.y, wr.width, wr.height].map(Math.round), wrapStyle: w && w.getAttribute('style'), text: el.innerText.slice(0, 250) }; }, id);
    await H.shot(page, 'g07-projects-popover-' + i);
    out.push({ i, label: (await t.textContent()).trim(), box, expanded: await t.getAttribute('aria-expanded'), info });
    await page.keyboard.press('Escape'); await page.waitForTimeout(500);
  }
  console.log(JSON.stringify(out, null, 1).slice(0, 3000));
  console.log('errs', JSON.stringify(errs.filter(e => e.type === 'pageerror' || e.type === 'error')).slice(0, 600));
  await b.close();
})();
