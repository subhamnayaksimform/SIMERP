const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('t10');
  const v = await H.login(b, 'vihaan.chatterjee'); H.attach(v.page, R.errs);
  const page = v.page;
  await R.step('close-ticket', async () => {
    await H.go(page, '/pre-sales/2b9e5dd6-a202-464d-b4da-0ad75e733a75');
    const btns = await page.getByRole('button').allInnerTexts();
    let found = page.getByRole('button', { name: /close ticket|close opportunity|mark.*(won|lost)/i }).first();
    if (!(await found.isVisible().catch(()=>false))) {
      // try header overflow menu
      const kebab = page.locator('button:has(svg.lucide-ellipsis), button:has(svg.lucide-more-horizontal), button:has(svg.lucide-ellipsis-vertical)').first();
      await kebab.click().catch(()=>{}); await page.waitForTimeout(600);
      found = page.getByRole('menuitem', { name: /close/i }).first();
    }
    await found.click(); await page.waitForTimeout(1000);
    await H.shot(page, 'I627-close-dialog');
    return { btns: btns.slice(0,25), dialog: (await page.getByRole('dialog').innerText().catch(()=>'')).slice(0,500) };
  });
  R.done(); await b.close();
})();
