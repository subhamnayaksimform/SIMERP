const {H,fs,DEPT,results,chk,pos,save}=require('./lib2');
(async()=>{
 const b=await H.chromium.launch(); const v=await H.login(b,'vihaan.chatterjee'); const A=(m,p,d)=>H.api(v.page,m,p,d); const tm=await H.login(b,'mehul.pandya');
 const code=r=>r.body?.code; const S={};
 let r=await A('POST','/opportunities',{title:'QA-AUTO E2E run2 won+open',clientType:'PROSPECT',requestType:'INTERVIEW',clientName:'QA-AUTO E2E Client',jobDescription:'<p>jd</p>',positions:[pos('WO X',2)]});
 S.opp=r.body.data; const T=S.opp.ticketNumber; const PX=S.opp.positions[0].publicId; S.PX=PX; S.T=T;
 const seats=async()=>(await A('GET','/opportunities/openings?limit=100&withArchived=true&search='+T)).body.data.items;
 const stats=async()=>(await seats())[0]?.opportunity.stats; const byName=async n=>(await seats()).find(s=>s.activeNomination?.employee?.name===n);
 const cr=await A('GET','/opportunities/candidates?limit=100&departmentPublicIds='+DEPT+'&positionPublicId='+PX);
 S.c=cr.body.data.items.filter(i=>i.canNominate&&!i.clientRejection&&!(i.interviewOpportunities||[]).length&&i.name!=='Mehul Pandya').slice(20,26).map(i=>({id:i.publicId,name:i.name})); fs.writeFileSync('S3r.json',JSON.stringify(S,null,1));
 await A('POST','/opportunities/positions/'+PX+'/nominations',{candidates:[{employeePublicId:S.c[0].id},{employeePublicId:S.c[1].id}]});
 const nid=async i=>(await byName(S.c[i].name)).activeNomination.publicId; const stage=async i=>(await byName(S.c[i].name))?.stage;
 await A('POST','/opportunities/nominations/'+await nid(0)+'/request-approval'); r=await H.api(tm.page,'POST','/opportunities/nominations/'+await nid(0)+'/approve'); chk('won','approved',r.status===200,[r.status,code(r)]);
 r=await A('POST','/opportunities/nominations/'+await nid(0)+'/select',{isConfirmed:true}); chk('won','select with confirm (round skip)',r.status===200,[r.status,code(r),r.body.message]);
 chk('won','seat WON, stats 1 filled / 2 required',await stage(0)==='WON'&&JSON.stringify((await stats()))===JSON.stringify({shortlistedCount:2,rejectedCount:0,filledCount:1,requiredCount:2}),[await stage(0),await stats()]);
 // close with Won + live
 r=await A('POST','/opportunities/positions/'+PX+'/close',{reason:'QA close with Won seat'}); chk('close','close position with Won + live candidate',r.status===200,[r.status,code(r),r.body.message]);
 chk('close','Won seat kept as WON',await stage(0)==='WON',await stage(0)); chk('close','live candidate released',!(await byName(S.c[1].name))||(await byName(S.c[1].name)).activeNomination?.status==='RELEASED',await stage(1));
 let st=await stats(); chk('close','stats filled<=required',st.filledCount<=st.requiredCount,st);
 const sc=(await A('GET','/opportunities/openings/stage-counts?withArchived=true&search='+T)).body.data; chk('close','Kanban: Won seat counted in Won column (WON=1,NLR=1)',sc.WON===1&&sc.NO_LONGER_REQUIRED===1,sc);
 r=await A('POST','/opportunities/positions/'+PX+'/reopen'); chk('close','reopen',r.status===200,[r.status,code(r)]); chk('close','Won seat still WON after reopen',await stage(0)==='WON',await stage(0));
 // update position / ticket
 r=await A('PATCH','/opportunities/positions/'+PX,{requiredCount:1}); chk('position','reduce required to filled count (1)',[200,400,409].includes(r.status),[r.status,code(r),r.body.message]);
 r=await A('PATCH','/opportunities/positions/'+PX,{requiredCount:0}); chk('position','required 0 refused',r.status===400,[r.status,code(r)]);
 r=await A('PATCH','/opportunities/positions/'+PX,{requiredCount:3,title:'WO X edited',priority:'HIGH'}); chk('position','edit title/priority/required up',r.status===200,[r.status,code(r),r.body.message]);
 r=await A('PATCH','/opportunities/positions/'+PX,{title:''}); chk('position','empty title refused',r.status===400,[r.status,code(r)]);
 r=await A('PATCH','/opportunities/'+S.opp.publicId,{title:'QA-AUTO E2E won+open edited'}); chk('ticket','edit ticket title',r.status===200,[r.status,code(r),r.body.message]);
 r=await A('PATCH','/opportunities/'+S.opp.publicId,{title:''}); chk('ticket','empty ticket title refused',r.status===400,[r.status,code(r)]);
 r=await A('PATCH','/opportunities/'+S.opp.publicId,{clientName:'<img src=x onerror=alert(1)>'}); chk('ticket','html client name stored as text',[200,400].includes(r.status),[r.status,code(r)]);
 r=await A('PATCH','/opportunities/'+S.opp.publicId,{clientName:'QA-AUTO E2E Client'});
 // add position / delete
 r=await A('POST','/opportunities/'+S.opp.publicId+'/positions',pos('WO Y',1)); chk('position','add position to ticket',r.status===201||r.status===200,[r.status,code(r),r.body.message]); const PY=(r.body.data?.positions||[]).find(p=>p.title==='WO Y')?.publicId;
 r=await A('DELETE','/opportunities/positions/'+PX); chk('position','delete position that has a Won seat refused',r.status>=400,[r.status,code(r),r.body.message]);
 if(PY){ r=await A('DELETE','/opportunities/positions/'+PY); chk('position','delete empty position',r.status===200,[r.status,code(r)]); }
 // prep materials
 r=await A('POST','/opportunities/positions/'+PX+'/prep-materials',{title:'Node bank',url:'https://example.com/prep.pdf'}); chk('prep','add material',r.status===201||r.status===200,[r.status,code(r)]); const pm=r.body.data;
 r=await A('POST','/opportunities/positions/'+PX+'/prep-materials',{title:'bad',url:'javascript:alert(1)'}); chk('prep','javascript: url refused',r.status===400,[r.status,code(r)]);
 r=await A('POST','/opportunities/positions/'+PX+'/prep-materials',{title:'',url:'https://x.com'}); chk('prep','empty title refused',r.status===400,[r.status,code(r)]);
 r=await A('POST','/opportunities/positions/'+PX+'/prep-materials',{title:'x'.repeat(201),url:'https://x.com'}); chk('prep','201-char title refused',r.status===400,[r.status,code(r)]);
 const dd=(await A('GET','/opportunities/'+S.opp.publicId)).body.data; const pm2=dd.positions.find(p=>p.publicId===PX).prepMaterials[0]; if(pm2?.publicId){ r=await A('PATCH','/opportunities/prep-materials/'+pm2.publicId,{title:'Node bank v2'}); chk('prep','edit material',r.status===200,[r.status,code(r)]); r=await A('DELETE','/opportunities/prep-materials/'+pm2.publicId); chk('prep','delete material',r.status===200,[r.status,code(r)]); }
 // board filters
 const f=async(q)=>(await A('GET','/opportunities/openings?limit=100&'+q)); 
 let x=await f('search='+T); chk('board','search by ticket',x.body.data.items.length>=1&&x.body.data.items.every(i=>i.opportunity.ticketNumber===T),x.body.data.total);
 x=await f('search='+T+'&stages=WON'); chk('board','stage filter WON',x.status===200&&x.body.data.items.every(i=>i.stage==='WON'),[x.status,x.body.data?.items?.length]);
 x=await f('search='+T+'&priorities=HIGH'); chk('board','priority filter',x.status===200,x.body.data?.items?.length);
 x=await f('search='+T+'&departmentPublicIds='+DEPT); chk('board','department filter',x.status===200&&x.body.data.items.length>0,x.body.data?.items?.length);
 x=await f('search='+T+'&opportunityStatuses=OPEN'); chk('board','status filter OPEN',x.status===200&&x.body.data.items.length>0,x.body.data?.items?.length);
 x=await f('search='+T+'&sortBy=createdAt&sortOrder=desc'); chk('board','sort accepted',[200,400].includes(x.status),[x.status,code(x)]);
 x=await f('search='+encodeURIComponent("' OR 1=1 --")); chk('board','SQL-ish search returns 0 safely',x.status===200&&x.body.data.items.length===0,[x.status,x.body.data?.items?.length]);
 x=await f('search='+encodeURIComponent('<script>')); chk('board','html search safe',x.status===200,x.status);
 x=await A('GET','/opportunities/openings?limit=0'); chk('board','limit 0 refused',x.status===400,[x.status,code(x)]);
 x=await A('GET','/opportunities/openings?limit=101'); chk('board','limit 101 refused',x.status===400,[x.status,code(x)]);
 x=await A('GET','/opportunities/openings?page=0'); chk('board','page 0 refused',x.status===400,[x.status,code(x)]);
 x=await A('GET','/opportunities/openings?limit=100&page=2'); chk('board','pagination page 2',x.status===200&&x.body.data.page===2,[x.status,x.body.data?.page,x.body.data?.total]);
 const all=await A('GET','/opportunities/openings?limit=100&page=1'); const sc2=(await A('GET','/opportunities/openings/stage-counts')).body.data; const sum=Object.values(sc2).reduce((a,c)=>a+c,0); 
 for(const [n,p] of [['summary','/opportunities/summary'],['lookup','/opportunities/lookup'],['clients','/opportunities/clients'],['assignees','/opportunities/assignees?role=PM'],['candidate filters','/opportunities/candidates/filters'],['direct stage counts','/opportunities/openings/direct-stage-counts'],['rejected list','/opportunities/openings/rejected']]) { x=await A('GET',p); chk('endpoints',n+' 200',x.status===200,[x.status,code(x)]); }
 // candidates filters
 x=await A('GET','/opportunities/candidates?limit=100&minAvailability=101&positionPublicId='+PX); chk('picker','minAvailability 101 refused',[200,400].includes(x.status),[x.status,code(x),x.body.data?.items?.length]);
 x=await A('GET','/opportunities/candidates?limit=100&search='+encodeURIComponent('zzzz-nobody')+'&positionPublicId='+PX); chk('picker','no match -> empty',x.status===200&&x.body.data.items.length===0,[x.status,x.body.data?.items?.length]);
 x=await A('GET','/opportunities/candidates?limit=100&sortBy=name&sortOrder=asc&positionPublicId='+PX); chk('picker','sort name',[200,400].includes(x.status),[x.status,code(x)]);
 x=await A('GET','/opportunities/candidates?limit=100&upSystemTiers=P1&positionPublicId='+PX); chk('picker','UP tier filter',[200,400].includes(x.status),[x.status,code(x)]);
 // employee history
 x=await A('GET','/opportunities/employee-history?employeePublicId='+S.c[0].id); 
 save('g3r-results'); fs.writeFileSync('S3r.json',JSON.stringify(S,null,1)); await b.close();
})();
