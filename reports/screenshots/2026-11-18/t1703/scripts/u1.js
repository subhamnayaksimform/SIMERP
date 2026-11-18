const H=require('./h'); const fs=require('fs'); const S=JSON.parse(fs.readFileSync('s1-state.json'));
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const page=v.page; const errs=[]; H.attach(page,errs);
 await H.go(page,'/pre-sales/'+S.opp); await H.shot(page,'u1-detail',true);
 const txt=await page.locator('main').innerText().catch(()=>page.locator('body').innerText()); fs.writeFileSync('u1-detail.txt',txt);
 console.log(txt.slice(0,2500));
 console.log('buttons',(await page.getByRole('button').allInnerTexts()).filter(Boolean).slice(0,60));
 console.log('tabs',await page.getByRole('tab').allInnerTexts());
 console.log('errs',JSON.stringify(errs).slice(0,600)); await b.close(); })();
