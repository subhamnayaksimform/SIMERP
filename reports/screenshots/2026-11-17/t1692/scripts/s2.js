const {H,fs,QA,results,chk,pos,as,notesFor,save}=require('./lib3');
(async()=>{
 const b=await H.chromium.launch(); const P=await as(b,'vihaan.chatterjee'); const TM=await as(b,'sudhansu.patel'); const code=r=>r.body?.code;
 const E={}; for(const u of ['riddhi.verma','yamini.langalia','yash.sinha','urvashi.kotak','punit.patil','sneha.yadav','arnav.shetty']) E[u]=await as(b,u);
 const cand=(await P('GET','/opportunities/candidates?limit=100&departmentPublicIds='+QA)).body.data.items; const id=e=>cand.find(c=>c.email===e+'@simformsolutions.com').publicId;
 const t0=new Date(Date.now()-5000); const S={t0};
 let r=await P('POST','/opportunities',{title:'QA-AUTO T1692 visibility 17-11',clientType:'PROSPECT',requestType:'INTERVIEW',clientName:'QA-AUTO T1692 Client',jobDescription:'<p>jd</p>',prospectContact:'QA',prospectNotes:'secret prospect note',positions:[pos('T1692 A',3,{note:'secret position note'}),pos('T1692 B',2)]});
 chk('setup','interview ticket created',r.status===201,[r.status,code(r),r.body.message]); const O=r.body.data; S.opp=O.publicId; S.T=O.ticketNumber;
 const PA=O.positions.find(p=>p.title==='T1692 A').publicId, PB=O.positions.find(p=>p.title==='T1692 B').publicId; Object.assign(S,{PA,PB});
 const seats=async()=>(await P('GET','/opportunities/openings?limit=100&search='+S.T)).body.data.items;
 const nomOf=async e=>(await seats()).find(s=>s.activeNomination?.employee?.publicId===id(e))?.activeNomination;
 // TM shortlists E1
 r=await TM('POST','/opportunities/positions/'+PA+'/nominations',{candidates:[{employeePublicId:id('riddhi.verma')}]}); chk('2.visibility','TM shortlists plain Employee (Riddhi Verma)',r.status===201,[r.status,code(r),r.body.message]);
 r=await P('POST','/opportunities/positions/'+PA+'/nominations',{candidates:[{employeePublicId:id('yamini.langalia')},{employeePublicId:id('urvashi.kotak')}]}); chk('2.visibility','PMO shortlists Yamini + Urvashi on A',r.status===201,[r.status,code(r)]);
 r=await P('POST','/opportunities/positions/'+PB+'/nominations',{candidates:[{employeePublicId:id('punit.patil')},{employeePublicId:id('sneha.yadav')}]}); chk('2.visibility','PMO shortlists Punit + Sneha on B',r.status===201,[r.status,code(r)]);
 const n1=await nomOf('riddhi.verma'); S.n1=n1; console.log('n1',JSON.stringify(n1).slice(0,300));
 const mine=async A=>{ const x=await A('GET','/opportunities/openings?view=MINE&limit=100'); return {status:x.status,ids:(x.body.data?.items||[]).map(i=>i.opportunity?.publicId)}; };
 const rej=async A=>{ const x=await A('GET','/opportunities/openings/rejected?view=MINE&limit=100'); return {status:x.status,ids:(x.body.data?.items||[]).map(i=>i.opportunity?.publicId)}; };
 // pending check E1
 let m=await mine(E['riddhi.verma']); chk('2.visibility','pending: opportunity NOT on Riddhi\'s My Opportunities',m.status===200&&!m.ids.includes(S.opp),m);
 r=await E['riddhi.verma']('GET','/opportunities/'+S.opp); chk('2.visibility','pending: Riddhi opening detail URL gets 403 (Unauthorized)',r.status===403,[r.status,code(r),r.body.message]);
 let ns=await notesFor(E['riddhi.verma'],t0); chk('2.visibility','pending: Riddhi has no notification about it',ns.length===0,ns.map(n=>[n.eventType,n.title]));
 // E2 request approval + TM approve
 const n2=await nomOf('yamini.langalia'); r=await P('POST','/opportunities/nominations/'+n2.publicId+'/request-approval'); chk('2.visibility','PMO requests TM approval for Yamini',r.status===200,[r.status,code(r)]);
 ns=await notesFor(E['yamini.langalia'],t0); chk('2.visibility','approval requested (not yet cleared): Yamini gets no notification',ns.length===0,ns.map(n=>[n.eventType,n.title]));
 r=await E['yamini.langalia']('GET','/opportunities/'+S.opp); chk('2.visibility','approval pending: Yamini detail 403',r.status===403,[r.status,code(r)]);
 r=await TM('POST','/opportunities/nominations/'+n2.publicId+'/approve'); chk('2.visibility','TM approves Yamini',r.status===200,[r.status,code(r),r.body.message]);
 // E1 bypass
 r=await P('POST','/opportunities/nominations/'+n1.publicId+'/bypass-approval',{reason:'QA T1692 bypass'}); chk('2.visibility','PMO bypasses approval for Riddhi',r.status===200,[r.status,code(r),r.body.message]);
 const n6=await nomOf('sneha.yadav'); r=await P('POST','/opportunities/nominations/'+n6.publicId+'/bypass-approval',{reason:'QA T1692 bypass'}); chk('2.visibility','PMO bypasses approval for Sneha (B)',r.status===200,[r.status,code(r)]);
 await new Promise(r=>setTimeout(r,3000));
 for(const [u,how] of [['riddhi.verma','bypass'],['yamini.langalia','TM approve']]){
  m=await mine(E[u]); chk('2.visibility',`cleared (${how}): opportunity now on ${u} board`,m.ids.includes(S.opp),m);
  r=await E[u]('GET','/opportunities/'+S.opp); const d=r.body.data;
  chk('2.visibility',`cleared (${how}): ${u} opens detail (200)`,r.status===200,[r.status,code(r)]);
  if(d){ const noms=d.positions.flatMap(p=>p.openings.flatMap(o=>o.nominations)); const others=noms.filter(n=>n.employee?.publicId&&n.employee.publicId!==id(u));
   chk('2.visibility',`cleared: ${u} sees only own card`,others.length===0&&noms.length>=1,{own:noms.length,others:others.map(n=>n.employee?.name)});
   chk('2.visibility',`cleared: ${u} sees no preferred employees / notes / prospect notes`,d.positions.every(p=>!p.note&&(!p.preferredEmployees||p.preferredEmployees.length===0))&&!d.prospectNotes,d.positions.map(p=>[p.note,p.preferredEmployees?.length]).concat([d.prospectNotes]));
   chk('2.visibility',`cleared: ${u} sees only positions they are on`,d.positions.length===1,d.positions.map(p=>p.title)); }
  ns=await notesFor(E[u],t0); chk('2.visibility',`cleared: ${u} now gets a notification`,ns.length>=1,ns.map(n=>[n.eventType,n.title]));
 }
 // pending others still blind
 for(const u of ['urvashi.kotak','punit.patil']){ m=await mine(E[u]); r=await E[u]('GET','/opportunities/'+S.opp); ns=await notesFor(E[u],t0);
  chk('2.visibility',`still pending: ${u} — not on board, 403, no notification`,!m.ids.includes(S.opp)&&r.status===403&&ns.length===0,{board:m.ids.includes(S.opp),status:r.status,notes:ns.map(n=>n.eventType)}); }
 // never shortlisted / invalid id
 r=await E['yash.sinha']('GET','/opportunities/'+S.opp); chk('2.visibility','never shortlisted Employee opens real opportunity URL -> 404 (not 403)',r.status===404,[r.status,code(r),r.body.message]);
 r=await E['yash.sinha']('GET','/opportunities/00000000-0000-4000-8000-000000000000'); chk('2.visibility','Employee opens invalid opportunity id -> 404',r.status===404,[r.status,code(r)]);
 r=await E['yash.sinha']('GET','/opportunities/not-a-uuid'); chk('2.visibility','Employee opens malformed id -> 400/404, never 403',[400,404].includes(r.status),[r.status,code(r)]);
 // pre-approval rejection (Arnav)
 r=await P('POST','/opportunities/positions/'+PA+'/nominations',{candidates:[{employeePublicId:id('arnav.shetty')}]}); const n7=await nomOf('arnav.shetty');
 r=await P('POST','/opportunities/nominations/'+n7.publicId+'/reject',{reason:'QA T1692 reject before approval',rejectedByRole:'PMO'}); chk('2.visibility','PMO rejects Arnav before approval',r.status===200,[r.status,code(r),r.body.message]);
 await new Promise(r=>setTimeout(r,2500));
 ns=await notesFor(E['arnav.shetty'],t0); const rj=await rej(E['arnav.shetty']); m=await mine(E['arnav.shetty']); r=await E['arnav.shetty']('GET','/opportunities/'+S.opp);
 chk('2.visibility','rejected before approval: Arnav gets no notification, nothing on board or Rejected column',ns.length===0&&!rj.ids.includes(S.opp)&&!m.ids.includes(S.opp),{notes:ns.map(n=>[n.eventType,n.title]),rejected:rj,board:m.ids.includes(S.opp)});
 chk('2.visibility','rejected before approval: Arnav detail status (record; 403 or 404 both hide it)',[403,404].includes(r.status),[r.status,code(r)]);
 // re-initiate A: Riddhi + Yamini cleared, Urvashi pending
 const t1=new Date(Date.now()-2000);
 r=await P('POST','/opportunities/positions/'+PA+'/reinitiate',{reason:'QA T1692 reinitiate'}); chk('2.reinit','PMO re-initiates Position A',r.status===200||r.status===201,[r.status,code(r),r.body.message]);
 await new Promise(r=>setTimeout(r,3000));
 for(const [u,exp] of [['riddhi.verma',true],['yamini.langalia',true],['urvashi.kotak',false]]){ ns=(await notesFor(E[u],t1)); chk('2.reinit',`re-initiate: ${u} ${exp?'IS':'is NOT'} notified`,exp?ns.length>=1:ns.length===0,ns.map(n=>[n.eventType,n.title,n.body||n.message])); }
 // delete B: Sneha cleared, Punit pending
 const t2=new Date(Date.now()-2000);
 r=await P('DELETE','/opportunities/positions/'+PB); chk('2.delete','PMO deletes Position B with candidates',r.status===200,[r.status,code(r),r.body.message]);
 await new Promise(r=>setTimeout(r,3000));
 for(const [u,exp] of [['sneha.yadav',true],['punit.patil',false]]){ ns=(await notesFor(E[u],t2)); chk('2.delete',`delete position: ${u} ${exp?'IS':'is NOT'} notified`,exp?ns.length>=1:ns.length===0,ns.map(n=>[n.eventType,n.title,n.body||n.message])); }
 // regression: TM / PMO still see full detail
 r=await TM('GET','/opportunities/'+S.opp); chk('regression','TM still sees full detail with prospect notes + notes',r.status===200&&r.body.data?.prospectNotes,[r.status,r.body.data?.prospectNotes]);
 r=await P('GET','/opportunities/'+S.opp); chk('regression','PMO still sees full detail',r.status===200&&r.body.data?.positions?.length>=1,[r.status,r.body.data?.positions?.length]);
 save('s2-results'); fs.writeFileSync('s2-state.json',JSON.stringify(S,null,1)); await b.close();
})().catch(e=>{console.error('CRASH',e);});
