const {H}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const page=v.page; const R=H.runner('u1'); H.attach(page,R.errs);
 await R.step('open-form',async()=>{ await H.go(page,'/pre-sales'); await page.getByRole('button',{name:/New Opportunities/}).click(); await page.waitForTimeout(1500); await H.shot(page,'U-create-1',true);
  return { url:page.url(), labels:await page.locator('label').allInnerTexts(), buttons:(await page.getByRole('button').allInnerTexts()).slice(0,40), dlg:(await page.getByRole('dialog').count()) }; });
 R.done(); await b.close(); })();
