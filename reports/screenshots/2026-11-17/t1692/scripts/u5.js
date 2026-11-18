const H=require('./h'); const fs=require('fs'); const S2=JSON.parse(fs.readFileSync('s2-state.json'));
const {chk,save}=require('./lib3');
(async()=>{ const b=await H.chromium.launch();
 // A: create page, Preferred Employee before department
 const v=await H.login(b,'vihaan.chatterjee'); const page=v.page;
 await H.go(page,'/pre-sales/new'); await page.getByText('Interview Opportunity').first().click(); await page.getByText('Prospect',{exact:true}).first().click(); await page.waitForTimeout(1200);
 const pe=page.getByRole('combobox',{name:'Preferred Employee'}).first();
 const vis=await pe.isVisible().catch(()=>false); const dis=vis?await pe.isDisabled():null;
 if(vis){ await pe.click({timeout:10000}); await page.waitForTimeout(2500); }
 await H.shot(page,'u5-create-pref-no-dept');
 const opts=await page.getByRole('option').allInnerTexts(); const listTxt=await page.locator('[role=listbox],[cmdk-list],[data-radix-popper-content-wrapper]').allInnerTexts().catch(()=>[]);
 chk('1.ui','create page: Preferred Employee field usable before any department',vis&&!dis,{vis,dis});
 chk('1.ui','create page: before department the list holds only dept-less contractors (0 on dev) — record',true,{options:opts.length,text:listTxt.join(' ').slice(0,200)});
 await page.keyboard.press('Escape');
 // B: candidate views
 const shotPage=async(u,path,name)=>{ const s=await H.login(b,u); await H.go(s.page,path); await s.page.waitForTimeout(1500); await H.shot(s.page,name); const t=(await s.page.locator('body').innerText()).slice(0,600); const url=s.page.url(); await s.ctx.close(); return {url,t}; };
 let x=await shotPage('urvashi.kotak','/pre-sales/'+S2.opp,'u5-pending-candidate-url');
 chk('2.ui','pending candidate opens opportunity URL -> Unauthorized page',/unauthori[sz]ed/i.test(x.url+x.t),{url:x.url,t:x.t.slice(0,200)});
 x=await shotPage('yash.sinha','/pre-sales/'+S2.opp,'u5-never-shortlisted-url');
 chk('2.ui','never-shortlisted employee opens URL -> Not Found, not Unauthorized',/not found|404|doesn.t exist|does not exist/i.test(x.t)&&!/unauthori[sz]ed/i.test(x.url+x.t),{url:x.url,t:x.t.slice(0,250)});
 x=await shotPage('yash.sinha','/pre-sales/00000000-0000-4000-8000-000000000000','u5-invalid-id');
 chk('2.ui','employee opens invalid opportunity id -> Not Found',/not found|404|doesn.t exist|does not exist/i.test(x.t)&&!/unauthori[sz]ed/i.test(x.url+x.t),{url:x.url,t:x.t.slice(0,250)});
 // My Opportunities board for cleared vs pending (find the route)
 const s=await H.login(b,'iti.trivedi'); const nav=await H.sidebar(s.page); console.log('emp nav',nav);
 await s.ctx.close();
 save('u5-results'); await b.close(); })().catch(e=>console.error('CRASH',e));
