const H=require('./h');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const page=v.page;
 await H.go(page,'/pre-sales/new'); await page.waitForTimeout(1500); await H.shot(page,'u5a-new',true);
 console.log((await page.locator('body').innerText()).slice(0,1500)); await b.close(); })();
