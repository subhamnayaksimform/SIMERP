const H=require('./h'); const fs=require('fs'); const S=JSON.parse(fs.readFileSync('s1-state.json'));
const {results,chk,save}=require('./lib3');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const page=v.page; const errs=[]; H.attach(page,errs);
 const openEdit=async()=>{ await H.go(page,'/pre-sales/'+S.opp); await page.getByRole('button',{name:'Edit',exact:true}).first().click(); await page.waitForTimeout(2000); return page.getByRole('dialog').last(); };
 let dlg=await openEdit();
 // A: open preferred dropdown, inspect rows
 await dlg.getByRole('combobox',{name:'Preferred Employee'}).click(); await page.waitForTimeout(2500);
 await H.shot(page,'u3-pref-dropdown');
 const rows=await page.getByRole('option').evaluateAll(a=>a.slice(0,40).map(x=>x.innerText.replace(/\n+/g,' | ')));
 console.log(rows.slice(0,25));
 chk('1.ui','dropdown lists preselected employees with their badges',rows.some(r=>/Tanvi Parekh.*QA/.test(r))&&rows.some(r=>/Feni Kotak.*ANDROID/.test(r)),rows.slice(0,6));
 chk('1.ui','contractor with a department (Uday Dave) shows department badge, not "Contractor"',rows.some(r=>/Uday Dave.*QA/.test(r))&&!rows.some(r=>/Uday Dave.*Contractor/.test(r)),rows.filter(r=>/Uday/.test(r)));
 chk('1.ui','dropdown offers employees from both departments',rows.some(r=>/ANDROID/.test(r))&&rows.some(r=>/\bQA\b/.test(r)),rows.length);
 chk('1.ui','no "Contractor" badge rows (dev has no dept-less contractors)',!rows.some(r=>/Contractor$|\| Contractor/.test(r)),rows.filter(r=>/Contractor/.test(r)));
 await page.keyboard.press('Escape'); await page.waitForTimeout(500);
 await dlg.getByRole('button',{name:'Cancel'}).click().catch(()=>{}); await page.waitForTimeout(800);
 // B: fresh drawer, remove ANDROID without opening preferred dropdown
 dlg=await openEdit();
 const dept=dlg.getByRole('combobox',{name:'Select Department(s)'}); await dept.click(); await page.waitForTimeout(1200);
 await H.shot(page,'u3-dept-open');
 const opt=page.getByRole('option',{name:/^ANDROID/}).first(); await opt.click(); await page.waitForTimeout(800); await page.keyboard.press('Escape'); await page.waitForTimeout(800);
 const deptTxt=await dept.innerText(); const prefTxt=await dlg.getByRole('combobox',{name:'Preferred Employee'}).innerText();
 await H.shot(page,'u3-after-remove-android',true);
 chk('1.ui','after removing ANDROID: department field shows only QA',/QA/.test(deptTxt)&&!/ANDROID/.test(deptTxt),deptTxt);
 chk('1.ui','after removing ANDROID (dropdown never opened): Feni Kotak dropped from Preferred Employee field',!/Feni Kotak/.test(prefTxt)&&/Tanvi Parekh/.test(prefTxt),prefTxt);
 await dlg.getByRole('button',{name:'Save Changes'}).click(); await page.waitForTimeout(3500); await H.shot(page,'u3-after-save',true);
 const toast=await page.locator('[data-sonner-toast]').allInnerTexts().catch(()=>[]); console.log('toast',toast, 'form errs',await page.locator('[data-slot="form-message"]').allInnerTexts().catch(()=>[]));
 const d=(await H.api(page,'GET','/opportunities/'+S.opp)).body.data; const pp=d.positions.find(p=>p.publicId===S.pos);
 chk('1.ui','saved: departments now QA only',pp.departments?pp.departments.map(x=>x.name).join()==='QA':true,pp.departments?.map(x=>x.name));
 chk('1.ui','saved: ANDROID employee removed from Preferred Employees; QA employee + contractor stay',pp.preferredEmployees.map(e=>e.name).sort().join()==='Tanvi Parekh,Uday Dave',pp.preferredEmployees.map(e=>e.name));
 // C: reopen to confirm
 dlg=await openEdit(); const pt=await dlg.getByRole('combobox',{name:'Preferred Employee'}).innerText(); await H.shot(page,'u3-reopen',true);
 chk('1.ui','reopen edit: remaining picks still selected',/Tanvi Parekh/.test(pt)&&/Uday Dave/.test(pt),pt);
 console.log('errs',JSON.stringify(errs).slice(0,800)); save('u3-results'); await b.close(); })().catch(e=>console.error('CRASH',e));
