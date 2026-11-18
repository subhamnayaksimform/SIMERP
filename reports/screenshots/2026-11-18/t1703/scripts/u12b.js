const H=require('./h'); const fs=require('fs'); const S=JSON.parse(fs.readFileSync('s4-state.json')); const {chk,save}=require('./lib3');
(async()=>{ const b=await H.chromium.launch(); const s=await H.login(b,'vihaan.chatterjee'); const page=s.page; const A=(m,p,d)=>H.api(page,m,p,d);
 await H.go(page,'/my-tickets/'+S.C);
 let r=await A('GET','/allocation-tickets/'+S.C); const t=r.body.data; console.log('before',t.status,t.allocationStartDate,t.allocationEndDate,t.effectiveStartDate);
 r=await A('PATCH','/allocation-tickets/'+S.C+'/edit',{allocationEndDate:'2027-03-31',effectiveStartDate:'2026-12-01'}); console.log('set dates',r.status,r.body.code,r.body.message);
 const open=async(id)=>{ await H.go(page,'/my-tickets/'+id); await page.waitForTimeout(1200); await page.getByRole('button',{name:'Edit Ticket'}).click(); await page.waitForTimeout(1800); return page.getByRole('dialog').last(); };
 let dlg=await open(S.C); const pct=()=>dlg.locator('input[name="allocationPercentage"]');
 const before=await pct().inputValue(); await dlg.getByRole('radio').nth(1).click(); await page.waitForTimeout(600); const dyn=await pct().inputValue();
 await dlg.getByRole('radio').nth(0).click(); await page.waitForTimeout(800); const back=await pct().inputValue(); await H.shot(page,'u12b-roundtrip',true);
 chk('4.alloc-edit','UI: Fixed 20 -> Dynamic -> Fixed restores saved 20, not 0',before==='20'&&back==='20',{before,dyn,back});
 const endBox=dlg.getByText('End Date',{exact:true}).locator('xpath=..'); const effBox=dlg.getByText('Effective From',{exact:true}).locator('xpath=..');
 await endBox.locator('button:has(svg.lucide-x), [aria-label*="Clear" i]').first().click({timeout:8000}); await page.waitForTimeout(400);
 await effBox.locator('button:has(svg.lucide-x), [aria-label*="Clear" i]').first().click({timeout:8000}); await page.waitForTimeout(800);
 await H.shot(page,'u12b-dates-cleared',true);
 const canSave=await dlg.getByRole('button',{name:'Save Changes'}).isEnabled(); chk('4.alloc-edit','UI: clearing End Date + Effective From enables Save',canSave,'');
 if(canSave){ await dlg.getByRole('button',{name:'Save Changes'}).click(); await page.waitForTimeout(3000); }
 let d=(await A('GET','/allocation-tickets/'+S.C)).body.data;
 chk('4.alloc-edit','saved: End Date and Effective From cleared',!d.allocationEndDate&&!d.effectiveStartDate,{end:d.allocationEndDate,eff:d.effectiveStartDate,type:d.requestedAllocationType,pct:d.requestedAllocationPercentage,status:d.status});
 dlg=await open(S.C); const txt=await dlg.innerText(); await H.shot(page,'u12b-reopen',true);
 const endV=(txt.match(/End Date\n+([^\n]*)/)||[])[1], effV=(txt.match(/Effective From\n+([^\n]*)/)||[])[1];
 chk('4.alloc-edit','reopen: End Date and Effective From stay blank',/Pick a date/.test(endV||'')&&/Pick a date/.test(effV||''),{endV,effV});
 await dlg.getByRole('button',{name:'Cancel'}).click().catch(()=>{});
 dlg=await open(S.B); const radioDisabled=await dlg.getByRole('radio').nth(0).isDisabled(); if(!radioDisabled){ await dlg.getByRole('radio').nth(0).click(); await page.waitForTimeout(800);}
 const m=(await dlg.locator('[data-slot="form-message"], .text-destructive').allInnerTexts()).filter(x=>x!=='*'); await H.shot(page,'u12b-jay',true);
 d=(await A('GET','/allocation-tickets/'+S.B)).body.data;
 chk('4.alloc-edit','UI: live-Dynamic (UA-0146) cannot go to Fixed - message shown',d.requestedAllocationType==='DYNAMIC'&&(radioDisabled||m.some(x=>/dynamic|Deallocate/i.test(x))),{radioDisabled,m});
 save('u12b-results'); await b.close(); })().catch(e=>{console.error('CRASH',e.message); process.exit(1);});
