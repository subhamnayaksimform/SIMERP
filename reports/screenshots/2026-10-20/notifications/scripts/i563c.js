const L=require('./lib');const SH='/home/subham/SIMERP new project/reports/screenshots/2026-10-20/i563/';const fs=require('fs');const out={};
const probe=page=>page.evaluate(()=>[...document.querySelectorAll('button[aria-label] > span.text-xs.text-muted-foreground')].map(s=>{const r=s.getBoundingClientRect();const row=s.closest('tr,li,[class*="row"]');const rr=row?row.getBoundingClientRect():null;return {text:s.textContent,cls:s.className,h:Math.round(r.height),w:Math.round(r.width),cut:s.scrollWidth>s.clientWidth+1,rowH:rr&&Math.round(rr.height)}}));
(async()=>{const b=await L.chromium.launch();const {page}=await L.login(b,'palak.saxena');
 for(const w of [1440,1280,1024]){await page.setViewportSize({width:w,height:900});
  for(const q of ['Hardik Trivedi','Jignesh Raval','Vihaan Dodia','Rajan Kale']){await page.goto(L.BASE+'/employee?search='+encodeURIComponent(q),{waitUntil:'domcontentloaded'});
   const sb=page.getByPlaceholder('Name, email, or project');await sb.waitFor();await sb.fill(q);await page.waitForTimeout(3500);
   const p=await probe(page);out[`emp_${w}_${q}`]=p;console.log('emp',w,q,JSON.stringify(p.map(x=>[x.text,x.h,x.w,x.cut,x.rowH])));
   if(w!==1440||q==='Hardik Trivedi') await page.locator('table').first().screenshot({path:SH+`emp-${w}-${q.replace(/ /g,'_')}.png`}).catch(()=>{});}
  for(const [dn,id] of [['PM','7db5553f-94cd-45ee-a7d5-eb62e14d446a'],['CSM','69304b79-7ea7-4969-adb3-312bc4682d8e']]){await page.goto(L.BASE+'/team?departmentId='+id,{waitUntil:'domcontentloaded'});await page.waitForTimeout(6000);
   const p=await probe(page);const multi=p.filter(x=>x.h>20);out[`team_${w}_${dn}`]={n:p.length,multi,cut:p.filter(x=>x.cut).map(x=>x.text)};
   console.log('team',w,dn,'labels',p.length,'multiLine',multi.length,'cut',p.filter(x=>x.cut).length,'maxH',Math.max(0,...p.map(x=>x.h)));await page.screenshot({path:SH+`team-${w}-${dn}.png`});}}
 fs.writeFileSync(SH+'i563-results.json',JSON.stringify(out,null,1));await b.close()})().catch(e=>{console.error('ERR',e.message);process.exit(1)});
