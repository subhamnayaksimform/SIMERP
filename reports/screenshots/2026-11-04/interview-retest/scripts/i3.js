const {H,fs}=require('./lib2'); const S=JSON.parse(fs.readFileSync('S3.json'));
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d); const page=v.page;
 const o=(await A('GET','/opportunities/openings?limit=100&withArchived=true&search='+S.T)).body.data.items;
 for(const s of o) console.log(s.seatId,s.stage,s.directStage, s.activeNomination&&{st:s.activeNomination.status,blocked:s.activeNomination.isBlocked,sel:s.activeNomination.selectedAt}, Object.keys(s).join(','));
 await H.go(page,'/pre-sales'); await page.getByPlaceholder(/search/i).first().fill(S.T); await page.waitForTimeout(2500); await H.shot(page,'G-closedwon-list');
 await page.getByRole('button',{name:/kanban/i}).or(page.getByRole('tab',{name:/kanban/i})).first().click(); await page.waitForTimeout(2000); await H.shot(page,'G-closedwon-kanban',true);
 const labels=await page.evaluate(()=>[...document.querySelectorAll('[aria-label]')].map(e=>e.getAttribute('aria-label')).filter(l=>/column/i.test(l)&&!/ 0 cards/.test(l))); console.log(labels);
 await H.go(page,'/pre-sales/'+S.opp.publicId); await H.shot(page,'G-closedwon-detail',true); const t=await page.locator('body').innerText(); console.log(t.split('\n').filter(l=>/Neel|Falgun|Won|Released|No longer/i.test(l)).slice(0,10));
 await b.close(); })();
