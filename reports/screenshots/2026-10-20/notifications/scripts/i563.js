const L=require('./lib');const SH='/home/subham/SIMERP new project/reports/screenshots/2026-10-20/i563/';const fs=require('fs');const out={};
const probe=page=>page.evaluate(()=>{const spans=[...document.querySelectorAll('span.truncate.text-xs.text-muted-foreground, span.text-xs.text-muted-foreground')].filter(s=>s.closest('button[aria-label]'));
 return spans.map(s=>{const r=s.getBoundingClientRect();const lh=parseFloat(getComputedStyle(s).lineHeight)||16;return {text:s.textContent,cls:s.className,h:Math.round(r.height),lines:Math.round(r.height/lh),cut:s.scrollWidth>s.clientWidth+1,w:Math.round(r.width)}})});
(async()=>{const b=await L.chromium.launch();const {page,ctx}=await L.login(b,'palak.saxena');
 for(const [name,url] of [['employee','/employee'],['team','/team']]){
  for(const w of [1440,1280,1024]){await page.setViewportSize({width:w,height:900});await page.goto(L.BASE+url,{waitUntil:'domcontentloaded'});await page.waitForTimeout(5000);
   const p=await probe(page);const multi=p.filter(x=>x.lines>1);const cut=p.filter(x=>x.cut);const longest=[...p].sort((a,b)=>b.text.length-a.text.length).slice(0,4);
   out[name+'_'+w]={url:page.url(),stackLabels:p.length,multiLine:multi,truncated:cut.map(x=>x.text),longest};
   console.log(name,w,page.url(),'labels',p.length,'multiLine',multi.length,'truncated',cut.length,'longest',JSON.stringify(longest.map(x=>[x.text,x.lines,x.cut])));
   await page.screenshot({path:SH+`${name}-${w}.png`});}}
 fs.writeFileSync(SH+'i563-results.json',JSON.stringify(out,null,1));await b.close()})().catch(e=>{console.error('ERR',e.message);process.exit(1)});
