const L = require('./lib');
(async () => {
  const b = await L.chromium.launch();
  const ctx = await b.newContext(); const page = await ctx.newPage();
  const seen=[];
  page.on('response', async r => { if (r.url().includes('/api/v1')) { let t=''; try{t=(await r.text()).slice(0,400);}catch{} seen.push(r.request().method()+' '+r.url().replace(L.API,'')+' '+r.status()+' '+t); }});
  await page.goto(L.BASE); await page.waitForLoadState('networkidle').catch(()=>{});
  const c = page.getByText('Login with Credentials').first(); if (await c.isVisible({timeout:8000}).catch(()=>false)) await c.click();
  await page.locator('input[name="email"], input[type="email"]').first().fill('tarun.sharma@simformsolutions.com');
  await page.locator('input[type="password"]').first().fill(process.env.SIMERP_PASSWORD||require('fs').readFileSync('/home/subham/SIMERP new project/.env','utf8').match(/SIMERP_PASSWORD=(.*)/)[1].trim());
  await page.locator('button[type="submit"]').first().click();
  await page.waitForTimeout(8000);
  console.log(seen.join('\n'));
  await b.close();
})();
