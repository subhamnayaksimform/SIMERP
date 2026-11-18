const L=require('./lib');const SH='/home/subham/SIMERP new project/reports/screenshots/2026-10-20/i563/';
const probe=page=>page.evaluate(()=>[...document.querySelectorAll('button[aria-label] > span.text-xs.text-muted-foreground')].map(s=>{const r=s.getBoundingClientRect();return {text:s.textContent,h:Math.round(r.height),w:Math.round(r.width),cut:s.scrollWidth>s.clientWidth+1}}));
(async()=>{const b=await L.chromium.launch();const {page}=await L.login(b,'palak.saxena');
 for(const w of [1440,1280,1024]){await page.setViewportSize({width:w,height:900});
  for(const [dn,id] of [['PM','7db5553f-94cd-45ee-a7d5-eb62e14d446a'],['CSM','69304b79-7ea7-4969-adb3-312bc4682d8e']]){await page.goto(L.BASE+'/team?departmentId='+id,{waitUntil:'domcontentloaded'});await page.waitForTimeout(5000);
   const sw=page.getByRole('switch').first();if(await sw.getAttribute('aria-checked')!=='true')await sw.click();await page.waitForTimeout(1500);
   const p=await probe(page);console.log('team',w,dn,'labels',p.length,'maxH',Math.max(0,...p.map(x=>x.h)),'cut',p.filter(x=>x.cut).length,'widths',[...new Set(p.map(x=>x.text+':'+x.w))].slice(0,4).join(' '));
   await page.screenshot({path:SH+`team-details-${w}-${dn}.png`});}}
 await b.close()})().catch(e=>{console.error('ERR',e.message);process.exit(1)});
