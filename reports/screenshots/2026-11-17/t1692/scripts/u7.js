const H=require('./h'); const fs=require('fs'); const S2=JSON.parse(fs.readFileSync('s2-state.json'));
const {chk,save,as}=require('./lib3');
(async()=>{ const b=await H.chromium.launch(); const P=await as(b,'vihaan.chatterjee');
 const s=await H.login(b,'neel.rathod'); const page=s.page;
 // before clearing: board
 await page.getByRole('button',{name:'Employee'}).first().click().catch(()=>{}); await page.waitForTimeout(800);
 console.log('nav',await H.sidebar(page));
 await H.go(page,'/pre-sales'); await page.waitForTimeout(2000); await H.shot(page,'u7-neel-board-pending',true);
 let t=await page.locator('body').innerText(); console.log('url',page.url(),'pending board has ticket?',t.includes(S2.T)); 
 chk('2.ui','pending: ticket not shown on candidate\'s board (UI)',!t.includes(S2.T),page.url());
 const seats=(await P('GET','/opportunities/openings?limit=100&search='+S2.T)).body.data.items; const n=seats.find(x=>x.activeNomination?.employee?.name==='Neel Rathod').activeNomination;
 let r=await P('POST','/opportunities/nominations/'+n.publicId+'/bypass-approval',{reason:'QA T1692 UI check'}); console.log('bypass',r.status);
 await H.go(page,'/pre-sales'); await page.waitForTimeout(2500); await H.shot(page,'u7-neel-board-cleared',true); t=await page.locator('body').innerText();
 chk('2.ui','cleared: ticket now on candidate\'s board (UI)',t.includes(S2.T)||/T1692 A/.test(t),t.slice(0,300));
 await H.go(page,'/pre-sales/'+S2.opp); await page.waitForTimeout(2500); await H.shot(page,'u7-neel-detail-cleared',true); t=await page.locator('body').innerText();
 chk('2.ui','cleared: candidate opens detail page in UI',page.url().includes(S2.opp)&&/T1692 A/.test(t)&&!/Unauthori|not found/i.test(t),page.url());
 chk('2.ui','cleared detail: no other candidates / prospect notes / position note visible',!/secret prospect note|secret position note|Riddhi|Yamini|Urvashi|Arnav/.test(t),t.match(/secret[^\n]*|Riddhi|Yamini|Urvashi|Arnav/g));
 await page.getByRole('tab',{name:'Ticket Info'}).click().catch(()=>{}); await page.waitForTimeout(1200); await H.shot(page,'u7-neel-ticketinfo',true); t=await page.locator('body').innerText();
 chk('2.ui','cleared Ticket Info: no prospect notes / notes / preferred employees',!/secret prospect note|secret position note/.test(t),(t.match(/Prospect notes\n+[^\n]*|Preferred employees\n+[^\n]*|Note\n+[^\n]*/g)||[]));
 // Direct candidate Swati
 const w=await H.login(b,'swati.malhotra'); await H.go(w.page,'/pre-sales'); await w.page.waitForTimeout(2000);
 const dt=w.page.getByRole('tab',{name:/Direct/}).or(w.page.getByText(/Direct Allocation/).first()); await dt.first().click().catch(()=>{}); await w.page.waitForTimeout(2000); await H.shot(w.page,'u7-swati-direct-board',true);
 t=await w.page.locator('body').innerText(); chk('2.ui','Direct AWAITING: candidate sees ticket on Direct board (UI)',t.includes(S2.D.d3.T),t.slice(0,400));
 save('u7-results'); await b.close(); })().catch(e=>console.error('CRASH',e));
