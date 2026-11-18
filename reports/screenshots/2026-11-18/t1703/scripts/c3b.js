const H=require('./h'); const SHOT='/home/subham/SIMERP new project/reports/screenshots/2026-11-18/t1685/';
(async()=>{ const b=await H.chromium.launch(); const a=await H.login(b,'ceo'); const q=a.page;
 await H.go(q,'/employee/certifications?tab=organisation'); await q.screenshot({path:SHOT+'org-tab.png'});
 console.log(await q.getByRole('button').evaluateAll(x=>x.map(e=>e.getAttribute('aria-label')||e.innerText).filter(Boolean).slice(0,60)));
 await b.close(); })();
