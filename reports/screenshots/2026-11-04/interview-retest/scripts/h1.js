const {H,fs,DEPT,results,chk,pos,save}=require('./lib2');
(async()=>{
 const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const tm=await H.login(b,'mehul.pandya'); const A=(m,p,d)=>H.api(v.page,m,p,d); const code=r=>r.body?.code; const page=v.page;
 const mk=async(title,n)=>{ const r=await A('POST','/opportunities',{title,clientType:'PROSPECT',requestType:'INTERVIEW',clientName:'QA-AUTO Retest Client',jobDescription:'<p>jd</p>',positions:[pos('RT X',n)]}); return r.body.data; };
 const ids=[];
 // ---------- I632 ----------
 const opp=await mk('QA-AUTO I632 retest 04-11 pm',2); ids.push(opp.publicId); const T=opp.ticketNumber, PX=opp.positions[0].publicId;
 const seats=async(t)=>(await A('GET','/opportunities/openings?limit=100&withArchived=true&search='+(t||T))).body.data.items;
 const counts=async(t)=>(await A('GET','/opportunities/openings/stage-counts?withArchived=true&search='+(t||T))).body.data;
 const cr=await A('GET','/opportunities/candidates?limit=100&departmentPublicIds='+DEPT+'&positionPublicId='+PX);
 const c=cr.body.data.items.filter(i=>i.canNominate&&!i.clientRejection&&!(i.interviewOpportunities||[]).length&&i.name!=='Mehul Pandya').slice(40,46).map(i=>({id:i.publicId,name:i.name}));
 await A('POST','/opportunities/positions/'+PX+'/nominations',{candidates:[{employeePublicId:c[0].id},{employeePublicId:c[1].id}]});
 const nom=async n=>(await seats()).find(s=>s.activeNomination?.employee?.name===n)?.activeNomination?.publicId;
 await A('POST','/opportunities/nominations/'+await nom(c[0].name)+'/request-approval'); await H.api(tm.page,'POST','/opportunities/nominations/'+await nom(c[0].name)+'/approve');
 let r=await A('POST','/opportunities/nominations/'+await nom(c[0].name)+'/select',{isConfirmed:true}); chk('I632','seat is Won',r.status===200,[r.status,code(r)]);
 r=await A('POST','/opportunities/positions/'+PX+'/close',{reason:'QA I632 retest close'}); chk('I632','close position with Won seat + live candidate',r.status===200,[r.status,code(r)]);
 let sc=await counts(); chk('I632','Won seat counted in Won column (WON=1, NLR=1)',sc.WON===1&&sc.NO_LONGER_REQUIRED===1,sc);
 chk('I632','Won candidate still Won and blocked; other released',JSON.stringify((await seats()).map(s=>[s.stage,s.activeNomination?.status,s.activeNomination?.isBlocked]).sort())===JSON.stringify([['SHORTLISTED','RELEASED',false],['WON','SELECTED',true]].sort()),(await seats()).map(s=>[s.stage,s.activeNomination?.status]));
 let st=(await seats())[0].opportunity.stats; chk('I632','header stats filled<=required',st.filledCount<=st.requiredCount,st);
 r=await A('POST','/opportunities/positions/'+PX+'/reopen'); sc=await counts(); chk('I632','after reopen WON=1 and seats return to Pending',r.status===200&&sc.WON===1&&sc.NO_LONGER_REQUIRED===0,[r.status,sc]);
 await A('POST','/opportunities/positions/'+PX+'/close',{reason:'again'});
 // UI Kanban
 await H.go(page,'/pre-sales'); await page.getByPlaceholder(/search/i).first().fill(T); await page.waitForTimeout(2500);
 await page.getByRole('button',{name:/kanban/i}).or(page.getByRole('tab',{name:/kanban/i})).first().click(); await page.waitForTimeout(2000);
 const labels=await page.evaluate(()=>[...document.querySelectorAll('[aria-label*="column"]')].map(e=>e.getAttribute('aria-label')).filter(l=>/Won|Project Allocated|No Longer/.test(l)));
 chk('I632','UI Kanban: Won column has the card',labels.includes('Won column, 1 card')&&labels.includes('No Longer Required column, 1 card'),labels);
 await page.getByRole('button',{name:/Won/}).first().scrollIntoViewIfNeeded().catch(()=>{});
 await page.evaluate(()=>{ const t=[...document.querySelectorAll('[aria-label]')].find(e=>/^Won column/.test(e.getAttribute('aria-label'))); t&&t.scrollIntoView({inline:'center'}); }); await page.waitForTimeout(600); await H.shot(page,'R-I632-kanban');
 // top tiles / Won tile unaffected
 // regression: Project Allocated seat on closed position (OPP-0334)
 const s334=await seats('OPP-0334'); const c334=await counts('OPP-0334'); chk('I632','regression I628: OPP-0334 Project Allocated stays in its column',c334.PROJECT_ALLOCATED===1,c334);
 // two Won seats then close: not closable (fully filled)
 const opp2=await mk('QA-AUTO I632 retest 04-11 two-won',2); ids.push(opp2.publicId); const P2=opp2.positions[0].publicId;
 await A('POST','/opportunities/positions/'+P2+'/nominations',{candidates:[{employeePublicId:c[2].id},{employeePublicId:c[3].id}]});
 const nom2=async n=>(await seats(opp2.ticketNumber)).find(s=>s.activeNomination?.employee?.name===n)?.activeNomination?.publicId;
 for(const k of [2,3]){ await A('POST','/opportunities/nominations/'+await nom2(c[k].name)+'/request-approval'); await H.api(tm.page,'POST','/opportunities/nominations/'+await nom2(c[k].name)+'/approve'); await A('POST','/opportunities/nominations/'+await nom2(c[k].name)+'/select',{isConfirmed:true}); }
 r=await A('POST','/opportunities/positions/'+P2+'/close',{reason:'x'}); chk('I632','fully filled position cannot be closed (409)',r.status===409,[r.status,code(r)]);
 // ---------- I633 ----------
 const PROJ='a8869918-6732-4886-9153-8dfa5b06c79a';
 const cr2=await A('GET','/opportunities/candidates?limit=100&departmentPublicIds='+DEPT);
 const emp=cr2.body.data.items.filter(i=>i.canNominate&&!(i.interviewOpportunities||[]).length&&i.name!=='Mehul Pandya').slice(50,54).map(i=>i.publicId);
 const dpos=(e,x={})=>({title:'QA Direct',techStacks:['Java'],departmentPublicIds:[DEPT],preferredSeniority:'MID',allocationType:'FIXED',allocationPercentage:10,tentativeAllocationDate:'2027-02-01',employeePublicId:e,priority:'LOW',isAllocationConfirmed:false,...x});
 const base={title:'QA-AUTO I633 retest 04-11',clientType:'EXISTING',requestType:'DIRECT',clientName:'AnalytixHub',projectPublicId:PROJ,positions:[dpos(emp[0])]};
 r=await A('POST','/opportunities',{...base,clientType:'PROSPECT',projectPublicId:undefined}); chk('I633','Direct + Prospect + no project refused',r.status===400,[r.status,code(r),r.body.message]); if(r.status===201) ids.push(r.body.data.publicId);
 r=await A('POST','/opportunities',{...base,clientType:'PROSPECT'}); chk('I633','Direct + Prospect + project given refused (or record)',[400,201].includes(r.status),[r.status,code(r),r.body.message]); if(r.status===201) ids.push(r.body.data.publicId);
 r=await A('POST','/opportunities',{...base,projectPublicId:undefined}); chk('I633','Direct + Existing + no project refused',r.status===400,[r.status,code(r),r.body.message]); if(r.status===201) ids.push(r.body.data.publicId);
 r=await A('POST','/opportunities',base); chk('I633','valid Direct (Existing client + project) still created',r.status===201,[r.status,code(r),r.body.message]); const D=r.body.data;
 if(D){ const o=(await A('GET','/opportunities/openings?requestType=DIRECT&limit=100&search='+D.ticketNumber)).body.data.items[0]; r=await A('PATCH','/opportunities/openings/'+o.publicId+'/cancel',{reason:'QA-AUTO cleanup I633 retest'}); chk('I633','cleanup cancel of the valid Direct ticket',r.status===200,[r.status,code(r)]); }
 r=await A('POST','/opportunities',{...base,clientType:'PROSPECT',requestType:'INTERVIEW',projectPublicId:undefined,positions:[pos('regress interview prospect',1)],clientName:'QA-AUTO Retest Client'}); chk('I633','regression: Interview + Prospect + no project still created',r.status===201,[r.status,code(r),r.body.message]); if(r.status===201) ids.push(r.body.data.publicId);
 // cleanup only tickets created in this run
 for(const id of ids){ const x=await A('PATCH','/opportunities/'+id+'/status',{status:'NO_LONGER_REQUIRED',isConfirmed:true}); }
 save('h1-results'); fs.writeFileSync('h1-ids.json',JSON.stringify(ids)); await b.close();
})();
