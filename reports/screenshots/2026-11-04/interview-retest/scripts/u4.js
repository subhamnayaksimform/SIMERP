const {H}=require('./lib2');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const page=v.page; const R=H.runner('u4'); H.attach(page,R.errs);
 await R.step('combos',async()=>{ await H.go(page,'/pre-sales/new'); await page.getByText('Interview Opportunity').first().click(); await page.getByText('Prospect',{exact:true}).first().click(); await page.waitForTimeout(500);
  const combos=page.getByRole('combobox'); const n=await combos.count(); const names=[]; for(let i=0;i<n;i++) names.push((await combos.nth(i).innerText()).trim().slice(0,30));
  await combos.nth(0).click(); await page.waitForTimeout(600); await page.keyboard.type('QA-AUTO UI Client'); await page.waitForTimeout(800); await H.shot(page,'U-combo0');
  return {names, opts:await page.getByRole('option').allInnerTexts()}; });
 R.done(); await b.close(); })();
