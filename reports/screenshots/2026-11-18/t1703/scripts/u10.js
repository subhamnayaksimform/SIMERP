const H=require('./h'); const fs=require('fs'); const S=JSON.parse(fs.readFileSync('s4-state.json'));
const {chk,save}=require('./lib3');
(async()=>{ const b=await H.chromium.launch(); const s=await H.login(b,'vihaan.chatterjee'); const page=s.page;
 await H.go(page,'/my-tickets/'+S.A); await page.waitForTimeout(1200); await page.getByRole('button',{name:'Edit Ticket'}).click(); await page.waitForTimeout(1800); const dlg=page.getByRole('dialog').last();
 const state=async()=>({msgs:(await dlg.locator('[data-slot="form-message"], .text-destructive').allInnerTexts()).filter(m=>m!=='*'),save:await dlg.getByRole('button',{name:'Save Changes'}).isEnabled()});
 console.log('dynamic (as opened)',await state());
 await dlg.getByRole('radio').nth(0).click(); await page.waitForTimeout(800);
 const pct=dlg.locator('input[name="allocationPercentage"]');
 for(const v of ['10','20']){ await pct.fill(v); await pct.blur(); await page.waitForTimeout(1200); console.log('fixed',v,await state()); await H.shot(page,'u10-fixed-'+v,true); }
 const st=await state();
 if(st.save){ await dlg.getByRole('button',{name:'Save Changes'}).click(); await page.waitForTimeout(3000); await H.shot(page,'u10-after-save',true);
   console.log('toast',await page.locator('[data-sonner-toast]').allInnerTexts().catch(()=>[])); }
 const d=(await H.api(page,'GET','/allocation-tickets/'+S.A)).body.data; console.log('saved',d.requestedAllocationType,d.requestedAllocationPercentage);
 chk('4.alloc-edit','UI: UA-0145 Fixed→Dynamic ticket edited back to Fixed (20%) and saved',d.requestedAllocationType==='FIXED'&&d.requestedAllocationPercentage===20,{type:d.requestedAllocationType,pct:d.requestedAllocationPercentage,st});
 save('u10-results'); await b.close(); })().catch(e=>console.error('CRASH',e));
