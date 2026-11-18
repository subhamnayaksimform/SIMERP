const H=require('./h'); const fs=require('fs'); const S=JSON.parse(fs.readFileSync('s1-state.json'));
const {chk,save}=require('./lib3'); const AND='fce95f27-7424-4288-aac3-6eec0147b933';
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const page=v.page;
 // put Feni back for a reproducible state
 let r=await H.api(page,'PATCH','/opportunities/positions/'+S.pos,{departmentPublicIds:['c868f1aa-6bc1-430c-b26a-11222919627f',AND],preferredEmployeePublicIds:[S.qe[1],S.ae[1],S.qc[1]]}); console.log('restore',r.status,r.body.code,r.body.message);
 await H.go(page,'/pre-sales/'+S.opp); await page.getByRole('button',{name:'Edit',exact:true}).first().click(); await page.waitForTimeout(2000);
 const dlg=page.getByRole('dialog').last(); await dlg.getByRole('combobox',{name:'Preferred Employee'}).click(); await page.waitForTimeout(2500);
 const rowsOf=async()=>page.getByRole('option').evaluateAll(a=>a.map(x=>[x.innerText.replace(/\n+/g,' | '),x.getAttribute('aria-selected')||x.getAttribute('data-state')||x.querySelector('[role=checkbox],button[role=checkbox]')?.getAttribute('data-state')]));
 let rows=await rowsOf(); console.log('first load',rows.length, rows.filter(r=>/Tanvi|Uday|Feni/.test(r[0])));
 for(let i=0;i<12;i++){ await page.getByRole('option').last().scrollIntoViewIfNeeded(); await page.waitForTimeout(1200); }
 rows=await rowsOf(); console.log('after scroll',rows.length, rows.filter(r=>/Tanvi|Uday|Feni/.test(r[0])));
 await page.getByRole('option',{name:/Tanvi Parekh/}).first().scrollIntoViewIfNeeded(); await H.shot(page,'u4-after-scroll');
 chk('1.ui','pre-selected rows at top of dropdown show email + department badge on first open',rows.length&&false,'see first load list');
 save('u4-results'); await b.close(); })().catch(e=>console.error('CRASH',e));
