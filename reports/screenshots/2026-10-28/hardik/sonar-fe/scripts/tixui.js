const H = require('./h');
(async () => {
  const b = await H.chromium.launch(); const R = H.runner('tixui');
  const { page } = await H.login(b, 'vihaan.chatterjee'); H.attach(page, R.errs);
  const ids = ['522815e5-d5dc-4286-9d47-6d70d0aa0161', '920b813a-75c8-4149-bd6a-13d5a962aa5f', 'e124acc9-6315-443a-a19b-5ea1d97d118a', '14bab8ce-94de-4116-a6ec-926ce8c2c618', 'fae3d426-bcb3-4b6f-bbc2-b5be3dca5b36'];
  for (const [i, id] of ids.entries()) {
    await R.step('ua-ticket-' + i, async () => {
      await H.go(page, '/my-tickets/' + id); await page.waitForTimeout(2000);
      const api = await H.api(page, 'GET', '/allocation-tickets/' + id);
      const d = api.body.data || {}; const s = JSON.stringify(d);
      const dates = { prevStart: s.match(/"(previous|current)[A-Za-z]*StartDate":"?[^",]*/g), prevEnd: s.match(/"(previous|current)[A-Za-z]*EndDate":"?[^",]*/g), req: s.match(/"(requested|effective)[A-Za-z]*(Start|End)Date":"?[^",]*/g) };
      const card = page.locator('text=Update Allocation Details').first();
      const labels = await page.evaluate(() => Array.from(document.querySelectorAll('main *')).filter(e => !e.children.length && /^(Start Date|End Date|Current Start Date|Requested Start Date|Current End Date|Requested End Date)$/.test(e.textContent.trim())).map(e => e.textContent.trim() + ' = ' + (e.parentElement.nextElementSibling?.textContent || e.nextElementSibling?.textContent || e.parentElement.parentElement.textContent).trim().slice(0, 60)));
      const h = await page.locator('h1').allTextContents();
      const banner = await page.locator('main [role="alert"]').allTextContents();
      const shot = await H.shot(page, 'r0' + i + '-ua-ticket', true);
      return { h, labels, dates, banner, bad: await H.emptyScan(page), shot };
    });
  }
  await R.step('ua-edit-history', async () => {
    await H.go(page, '/my-tickets/522815e5-d5dc-4286-9d47-6d70d0aa0161'); await page.waitForTimeout(2000);
    const tabs = await page.getByRole('tab').allTextContents();
    const t = page.getByRole('tab', { name: /Edit History/i });
    if (!(await t.count())) return { tabs };
    await t.click(); await page.waitForTimeout(1200);
    const panel = page.getByRole('tabpanel').last();
    const txt = (await panel.innerText()).slice(0, 900);
    const objectLeak = /\[object Object\]/.test(txt);
    const shot = await H.shot(page, 'r10-edit-history');
    return { tabs, txt, objectLeak, shot };
  });
  await R.step('ticket-employee-name-tooltip', async () => {
    const btn = page.locator('main button.cursor-help').first();
    if (!(await btn.count())) return { note: 'no employee name hover button' };
    const t = await btn.textContent();
    await btn.focus(); await page.waitForTimeout(900);
    const tip = await page.locator('[role="tooltip"], [data-slot="tooltip-content"]').allTextContents();
    const shot = await H.shot(page, 'r11-ticket-employee-tooltip');
    return { t, tip, shot };
  });
  R.done(); await b.close();
})();
