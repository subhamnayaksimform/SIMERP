const H=require('./h'); const fs=require('fs'); const S=JSON.parse(fs.readFileSync('s4-state.json'));
const {chk,save}=require('./lib3');
(async()=>{ const b=await H.chromium.launch(); const s=await H.login(b,'vihaan.chatterjee'); const page=s.page; const errs=[]; H.attach(page,errs);
 const open=async(id)=>{ await H.go(page,'/my-tickets/'+id); await page.waitForTimeout(1200); await page.getByRole('button',{name:'Edit Ticket'}).click(); await page.waitForTimeout(1800); return page.getByRole('dialog').last(); };
 let dlg=await open(S.A);
 await dlg.getByRole('radio').nth(0).click(); await page.waitForTimeout(1000);
 const pct=dlg.locator('input[name="allocationPercentage"]'); const v1=await pct.inputValue(); const dis=await pct.isDisabled();
 await H.shot(page,'u9-ua145-back-to-fixed',true);
 const msgs=await dlg.locator('[data-slot="form-message"], .text-destructive').allInnerTexts();
 console.log('pct after Fixed:',JSON.stringify(v1),'disabled',dis,'msgs',msgs);
 chk('4.alloc-edit','UI: switching UA-0145 back to Fixed is allowed (field enabled, no Dynamic-to-Fixed error)',!dis&&!msgs.some(m=>/dynamic/i.test(m)),{dis,msgs});
 chk('4.alloc-edit','UI: percentage field shows a saved percentage, not 0',v1!==''&&v1!=='0',{value:v1});
 if(v1===''||v1==='0'){ await pct.fill('10'); }
 await dlg.getByRole('button',{name:'Save Changes'}).click(); await page.waitForTimeout(3000); await H.shot(page,'u9-ua145-after-save',true);
 const toast=await page.locator('[data-sonner-toast]').allInnerTexts().catch(()=>[]); console.log('toast',toast,'msgs',await page.locator('[data-slot="form-message"]').allInnerTexts().catch(()=>[]));
 let d=(await H.api(page,'GET','/allocation-tickets/'+S.A)).body.data;
 chk('4.alloc-edit','UA-0145 saved as FIXED with a percentage',d.requestedAllocationType==='FIXED'&&d.requestedAllocationPercentage>0,{type:d.requestedAllocationType,pct:d.requestedAllocationPercentage,toast});
 // reopen: switch to Dynamic then back to Fixed -> should restore saved %
 dlg=await open(S.A); const before=await dlg.locator('input[name="allocationPercentage"]').inputValue();
 await dlg.getByRole('radio').nth(1).click(); await page.waitForTimeout(600); const dyn=await dlg.locator('input[name="allocationPercentage"]').inputValue();
 await dlg.getByRole('radio').nth(0).click(); await page.waitForTimeout(800); const back=await dlg.locator('input[name="allocationPercentage"]').inputValue();
 await H.shot(page,'u9-ua145-roundtrip',true);
 chk('4.alloc-edit','UI: Fixed -> Dynamic -> Fixed round trip restores the saved % (not 0)',back===before&&back!=='0'&&back!=='',{before,dyn,back});
 await dlg.getByRole('button',{name:'Cancel'}).click(); await page.waitForTimeout(800);
 save('u9-results'); console.log('errs',JSON.stringify(errs).slice(0,500)); await b.close(); })().catch(e=>console.error('CRASH',e));
