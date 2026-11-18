const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const R = H.runner('t5');
  const { page } = await H.login(b, 'vihaan.chatterjee'); H.attach(page, R.errs);
  await R.step('I626-javalead', async () => {
    await H.go(page, '/pre-sales/b4de8cc1-d99f-4387-a95f-b20ab37470e0#position-97c347fb-5011-4d74-8346-d6668ba0545a');
    await page.locator('svg.lucide-chevron-right, svg.lucide-chevron-down').first().click().catch(()=>{}); await page.mouse.click(297,328); await page.waitForTimeout(1200);
    await H.shot(page, 'I626-javalead', true);
    const txt = await page.locator('body').innerText();
    return { smit: txt.includes('Smit Shah'), uday: txt.includes('Uday Hegde'), noCand: /No candidates shortlisted yet/.test(txt), rel: txt.split('\n').filter(l=>/releas/i.test(l)) };
  });
  R.done(); await b.close();
})();
