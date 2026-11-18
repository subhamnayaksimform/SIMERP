const L=require('./lib');const SH='/home/subham/SIMERP new project/reports/screenshots/2026-10-20/i457-458/';
(async()=>{const b=await L.chromium.launch();const {page}=await L.login(b,'palak.saxena');
 for(const q of ['Rohan Singh','Swati Iyer','Smriti Arora','Nisha Joshi']){await page.goto(L.BASE+'/employee',{waitUntil:'domcontentloaded'});
  const sb=page.getByPlaceholder('Name, email, or project');await sb.waitFor();await sb.fill(q);await page.waitForTimeout(3500);
  const row=page.locator('tbody tr').filter({hasText:q}).first();const av=row.locator('img, [class*="avatar" i]').first();
  await av.hover();await page.waitForTimeout(1200);
  const tip=await page.locator('[role="tooltip"], [data-radix-popper-content-wrapper]').allInnerTexts();
  console.log(q,'|',JSON.stringify(tip).slice(0,400));await page.screenshot({path:SH+q.replace(/ /g,'_')+'.png',clip:{x:250,y:150,width:900,height:450}});}
 await b.close()})().catch(e=>{console.error('ERR',e.message);process.exit(1)});
