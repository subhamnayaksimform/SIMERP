const {H,fs,DEPT,results,chk,save}=require('./lib2');
(async()=>{
 const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d); const page=v.page;
 // I625 employee list pill
 await H.go(page,'/employee'); await page.getByPlaceholder('Name, email, or project').fill('Hardik Desai'); await page.waitForTimeout(3000);
 const cell=await page.evaluate(()=>{const ths=[...document.querySelectorAll('thead th')].map(t=>t.textContent.trim());const i=ths.findIndex(t=>/Active Opportunit/i.test(t));const tr=[...document.querySelectorAll('tbody tr')].find(t=>/Hardik Desai/.test(t.textContent));return tr&&tr.querySelectorAll('td')[i]?.innerText.replace(/\s+/g,' ');});
 chk('I625','employee list shows a pill and +N (not only +N)',/OPP-\d+/.test(cell||''),cell);
 // I626 released shown on detail (use a ticket with released candidates: OPP-0335)
 const o35=(await A('GET','/opportunities/openings?limit=100&withArchived=true&search=OPP-0335')).body.data.items[0].opportunity.publicId;
 await H.go(page,'/pre-sales/'+o35); const t=await page.locator('body').innerText(); chk('I626','Released rows visible on detail',/Released/.test(t),(t.match(/Released/g)||[]).length);
 // I628/I630 on OPP-0334
 const sc=(await A('GET','/opportunities/openings/stage-counts?withArchived=true&search=OPP-0334')).body.data; chk('I628','Project Allocated seat stays in its column',sc.PROJECT_ALLOCATED===1,sc);
 const st=(await A('GET','/opportunities/openings?limit=100&withArchived=true&search=OPP-0334')).body.data.items[0].opportunity.stats; chk('I630','filled<=required',st.filledCount<=st.requiredCount,st);
 // I629 PMO rejection not flagged / client rejection flagged
 const cr=await A('GET','/opportunities/candidates?limit=100&positionPublicId=3bca05c3-d240-4960-bf65-2473726a7cbe'); const it=cr.body.data.items;
 chk('I629','client rejection still flagged',it.some(i=>i.clientRejection&&i.clientRejection.rejectedByRole==='CLIENT'),it.filter(i=>i.clientRejection).length);
 chk('I629','no non-client role in clientRejection',it.every(i=>!i.clientRejection||i.clientRejection.rejectedByRole==='CLIENT'),it.filter(i=>i.clientRejection&&i.clientRejection.rejectedByRole!=='CLIENT').map(i=>i.name));
 // I631 ceo permissions
 const c=await H.login(b,'ceo'); const r=await H.api(c.page,'POST','/opportunities/positions/3bca05c3-d240-4960-bf65-2473726a7cbe/close',{reason:''}); chk('I631','Admin allowed to close (400 validation, not 403)',r.status===400,[r.status,r.body.code]);
 // I627 warning dialog text exists in UI: skip (covered earlier)
 save('r1-results'); await b.close();
})();
