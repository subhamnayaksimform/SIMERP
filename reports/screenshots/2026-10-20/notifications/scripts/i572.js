const L=require('./lib');const {expect}=require('@playwright/test');
const SH='/home/subham/SIMERP new project/reports/screenshots/2026-10-20/i572/';
const res={};const rec=(k,v)=>{res[k]=v;console.log(k,JSON.stringify(v))};
(async()=>{const b=await L.chromium.launch();const {page,ctx}=await L.login(b,process.argv[2]||'gaurav.dutta');
 await page.goto(L.BASE+'/employee/certifications');await page.getByRole('button',{name:'Add Certification',exact:true}).click();
 const d=page.getByRole('dialog',{name:'Add Certification'});await d.waitFor();
 const part=d.getByRole('combobox',{name:'Partnership'});const proof=d.getByRole('textbox',{name:'Proof of Certification'});
 const save=d.getByRole('button',{name:'Save Certification'});const exp=d.getByRole('button',{name:'Expire Date'});const iss=d.getByRole('button',{name:'Issue Date'});
 await part.click();const opts=await page.getByRole('option').allInnerTexts();rec('partnerships',opts);await page.keyboard.press('Escape');
 const errText=async()=>(await d.locator('p[id$="-form-item-message"], [data-slot="form-message"], .text-destructive').allInnerTexts()).filter(Boolean);
 // 053: error while typing w/o blur
 await proof.click();await proof.pressSequentially('notaurl',{delay:30});await page.waitForTimeout(400);
 rec('053_typing_notaurl_errors',await errText());await page.screenshot({path:SH+'053-typing-notaurl.png'});
 await proof.fill('');await proof.pressSequentially('https://example.com/x',{delay:10});await page.waitForTimeout(400);
 rec('053_valid_errors',await errText());
 // 055: clear
 await proof.fill('notaurl');await page.waitForTimeout(300);await proof.fill('');await page.waitForTimeout(400);
 rec('055_cleared_errors',await errText());rec('055_save_enabled',await save.isEnabled());await page.screenshot({path:SH+'055-cleared.png'});
 // 054 hosts
 const hosts=['https://dddddd','https://localhost/x','http://999.1.1.1/x','https://a.b1','https://credly.com/b/1','https://in.credly.com/x','http://10.0.0.1/x'];
 const h={};for(const u of hosts){await proof.fill('');await proof.pressSequentially(u,{delay:5});await page.waitForTimeout(350);h[u]=await errText();}
 rec('054_hosts',h);
 // 056/057 expiry
 const pick=async(name)=>{await part.click();await page.getByRole('option',{name,exact:true}).click();await page.waitForTimeout(300)};
 const pickDay=async(field,dateStr)=>{ // dateStr yyyy-mm-dd within current or previous months
   const grid=page.getByRole('grid');if(!(await grid.isVisible()))await field.click();await grid.waitFor();
   for(let i=0;i<4;i++){const btn=grid.locator(`button[data-day]`).filter({hasNot:page.locator('[disabled]')});const days=await grid.locator('button[data-day]').evaluateAll(bs=>bs.map(b=>b.getAttribute('data-day')));
     const [y,m,dd]=dateStr.split('-');const want=`${dd}/${m}/${y}`;if(days.includes(want)){await grid.locator(`button[data-day="${want}"]`).click();return true}
     await page.getByRole('button',{name:/previous/i}).first().click();}
   return false};
 rec('expiry_disabled_initial',await exp.isDisabled().catch(e=>String(e)));
 const fmt=d=>d.toISOString().slice(0,10);const t=new Date('2026-10-20');const m10=fmt(new Date(t-10*864e5)),m40=fmt(new Date(t-40*864e5));
 const p12=opts.find(o=>/Partnership 1/i.test(o))||opts[0];
 await pick(p12);await pickDay(iss,m10);await page.waitForTimeout(300);
 rec('056_'+p12+'_issue_'+m10,{expire:await exp.innerText(),disabled:await exp.isDisabled()});
 await pickDay(iss,m40);await page.waitForTimeout(300);
 rec('056_issue_'+m40,{expire:await exp.innerText(),disabled:await exp.isDisabled()});await page.screenshot({path:SH+'056-expiry.png'});
 for(const n of opts.filter(o=>/AWS|Claude/i.test(o)).concat([p12])){await pick(n);rec('057_'+n,{expire:await exp.innerText(),disabled:await exp.isDisabled(),note:(await d.getByText(/never expires/i).allInnerTexts())});}
 await page.screenshot({path:SH+'057-switch.png'});
 // try to open expiry calendar to check cap
 rec('expiry_click_opens_calendar',await exp.click({timeout:2000}).then(()=>page.getByRole('grid').isVisible()).catch(()=>false));
 await page.keyboard.press('Escape');
 require('fs').writeFileSync(SH+'i572-results.json',JSON.stringify(res,null,1));await b.close();})().catch(e=>{console.error('ERR',e.message.slice(0,500));process.exit(1)});
