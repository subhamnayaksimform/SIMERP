const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const P = H.runner('gap-pmo');
  const { page: p2 } = await H.login(b, 'vihaan.chatterjee'); H.attach(p2, P.errs);
  await P.step('emp-projects-overflow-popover', async () => {
    await H.go(p2, '/employee');
    await p2.locator('table tbody tr').first().waitFor({ timeout: 20000 });
    const cand = p2.locator('table tbody td button[aria-haspopup="dialog"]').filter({ hasText: /^\s*\+\s*\d+|more/i });
    const n = await cand.count();
    const t = cand.nth(1); const label = (await t.textContent()).trim();
    const aria = await t.evaluate(e => ({ al: e.getAttribute('aria-label'), hp: e.getAttribute('aria-haspopup'), ex: e.getAttribute('aria-expanded'), row: e.closest('tr').innerText.slice(0, 120) }));
    await t.click(); await p2.waitForTimeout(1500); const pop = p2.locator('[data-radix-popper-content-wrapper]').last(); const popTxt = (await pop.isVisible()) ? (await pop.innerText()).slice(0, 300) : null; await H.shot(p2, 'g05-projects-overflow-popover'); await p2.keyboard.press('Escape'); await p2.waitForTimeout(400); await t.focus(); await p2.keyboard.press('Enter'); await p2.waitForTimeout(800); const kbOpen = await t.getAttribute('aria-expanded'); await p2.keyboard.press('Escape'); await p2.waitForTimeout(300); const focusBack = await p2.evaluate(() => document.activeElement.textContent.trim().slice(0, 10));
    const after = await t.evaluate(e => ({ ex: e.getAttribute('aria-expanded'), ctrl: e.getAttribute('aria-controls') }));
    await p2.keyboard.press('Escape');
    return { n, label, aria, after, popTxt, kbOpen, focusBack };
  });
  P.done(); await b.close();
})();
