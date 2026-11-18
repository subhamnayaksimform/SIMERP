const {H,fs,chk,as,save}=require('./lib3'); const S=JSON.parse(fs.readFileSync('s2-state.json'));
(async()=>{ const b=await H.chromium.launch();
 const TM=await as(b,'sudhansu.patel'); let r=await TM('GET','/opportunities/openings?view=TEAM&limit=100&search='+S.T); chk('regression','TM Team board lists the QA ticket',r.status===200&&(r.body.data.items||[]).length>0,[r.status,(r.body.data?.items||[]).length]);
 r=await TM('GET','/opportunities/openings?view=MINE&limit=100'); chk('regression','TM My Opportunity tab loads',r.status===200,r.status);
 const RM=await as(b,'deepak.rao'); r=await RM('GET','/opportunities/openings?limit=100'); chk('regression','RM board loads',r.status===200,[r.status,(r.body.data?.items||[]).length]);
 const PM=await as(b,'maitri.bose'); r=await PM('GET','/opportunities/'+S.opp); chk('regression','PM not assigned to a Prospect ticket gets 404 (unchanged rule)',r.status===404,[r.status,r.body.code]);
 const C=await as(b,'tarun.sharma'); r=await C('GET','/opportunities/openings?limit=100&requestType=DIRECT'); chk('regression','CSM Direct board loads',r.status===200,[r.status,(r.body.data?.items||[]).length]);
 const E=await as(b,'neel.rathod'); r=await E('GET','/opportunities/'+S.opp); chk('regression','cleared Selected candidate still opens their ticket',r.status===200,r.status);
 save('r1-results'); await b.close(); })().catch(e=>console.error('CRASH',e));
