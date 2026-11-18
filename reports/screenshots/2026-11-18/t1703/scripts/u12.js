const H=require('./h'); const fs=require('fs'); const S=JSON.parse(fs.readFileSync('s4-state.json'));
const {chk,save}=require('./lib3');
(async()=>{ const b=await H.chromium.launch(); const s=await H.login(b,'vihaan.chatterjee'); const page=s.page; const A=(m,p,d)=>H.api(page,m,p,d);
 const open=async(id)=>{ await H.go(page,'/my-tickets/'+id); await page.waitForTimeout(1200); await page.getByRole('button',{name:'Edit Ticket'}).click(); await page.waitForTimeout(1800); return page.getByRole('dialog').last(); };
 const msgs=async dlg=>(await dlg.locator('[data-slot="form-message"], .text-destructive').allInnerTexts()).filter(m=>m!=='*');
 // 1 round trip on UA-0147 (now FIXED 20)
 let dlg=await open(S.C); const pct=()=>dlg.locator('input[name="allocationPercentage"]');
 const before=await pct().inputValue(); await dlg.getByRole('radio').nth(1).click(); await page.waitForTimeout(600); const dyn=await pct().inputValue();
 await dlg.getByRole('radio').nth(0).click(); await page.waitForTimeout(800); const back=await pct().inputValue(); await H.shot(page,'u12-roundtrip',true);
 chk('4.alloc-edit','UI: Fixed 20 → Dynamic (shows 0) → Fixed restores saved 20, not 0',before==='20'&&back==='20',{before,dyn,back});
 chk('4.alloc-edit','UI: round trip leaves nothing to save (Save disabled)',!(await dlg.getByRole('button',{name:'Save Changes'}).isEnabled()),'');
 // 2 clear End Date + Effective From
 const clearBtns=dlg.locator('button:has(svg.lucide-x)'); console.log('x buttons',await clearBtns.count());
 const endBox=dlg.getByText('End Date',{exact:true}).locator('xpath=..'); const effBox=dlg.getByText('Effective From',{exact:true}).locator('xpath=..');
 await endBox.locator('button:has(svg.lucide-x), [aria-label*="Clear" i]').first().click(); await page.waitForTimeout(400);
 await effBox.locator('button:has(svg.lucide-x), [aria-label*="Clear" i]').first().click(); await page.waitForTimeout(800);
 await H.shot(page,'u12-dates-cleared',true); console.log('msgs after clear',await msgs(dlg));
 const canSave=await dlg.getByRole('button',{name:'Save Changes'}).isEnabled(); chk('4.alloc-edit','UI: clearing End Date + Effective From enables Save (clear-only edit is a change)',canSave,await msgs(dlg));
 if(canSave){ await dlg.getByRole('button',{name:'Save Changes'}).click(); await page.waitForTimeout(3000); console.log('toast',await page.locator('[data-sonner-toast]').allInnerTexts().catch(()=>[])); }
 let d=(await A('GET','/allocation-tickets/'+S.C)).body.data;
 chk('4.alloc-edit','saved: End Date and Effective From are cleared (null)',d.allocationEndDate===null&&d.effectiveStartDate===null,{end:d.allocationEndDate,eff:d.effectiveStartDate,type:d.requestedAllocationType,pct:d.requestedAllocationPercentage});
 dlg=await open(S.C); const txt=await dlg.innerText(); await H.shot(page,'u12-reopen-cleared',true);
 const endV=(txt.match(/End Date\n+([^\n]*)/)||[])[1], effV=(txt.match(/Effective From\n+([^\n]*)/)||[])[1];
 chk('4.alloc-edit','reopen: End Date and Effective From stay blank',/Pick a date/.test(endV||'')&&/Pick a date/.test(effV||''),{endV,effV});
 await dlg.getByRole('button',{name:'Cancel'}).click().catch(()=>{});
 // 3 Jay live DYNAMIC: UI Fixed refused
 dlg=await open(S.B); await dlg.getByRole('radio').nth(0).click(); await page.waitForTimeout(800); const m3=await msgs(dlg); await H.shot(page,'u12-jay-dynamic-to-fixed',true);
 const radioDisabled=await dlg.getByRole('radio').nth(0).isDisabled();
 console.log('jay msgs',m3,'radio disabled',radioDisabled);
 if(!radioDisabled && !m3.some(m=>/dynamic/i.test(m))){ await dlg.locator('input[name="allocationPercentage"]').fill('30').catch(()=>{}); await page.waitForTimeout(500);
   if(await dlg.getByRole('button',{name:'Save Changes'}).isEnabled()){ await dlg.getByRole('button',{name:'Save Changes'}).click(); await page.waitForTimeout(2500);} }
 const t3=await page.locator('[data-sonner-toast]').allInnerTexts().catch(()=>[]); const m3b=await msgs(dlg).catch(()=>[]); await H.shot(page,'u12-jay-after-try',true);
 d=(await A('GET','/allocation-tickets/'+S.B)).body.data;
 chk('4.alloc-edit','UI: live-Dynamic allocation (Jay, UA-0146) cannot be edited to Fixed — refused with Dynamic-to-Fixed message',d.requestedAllocationType!=='FIXED'&&(radioDisabled||[...m3,...m3b,...t3].some(m=>/dynamic/i.test(m))),{radioDisabled,m3,m3b,t3,type:d.requestedAllocationType});
 save('u12-results'); await b.close(); })().catch(e=>console.error('CRASH',e));
