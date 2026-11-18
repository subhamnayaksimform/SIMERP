const {H,fs,as}=require('./lib3'); const S=JSON.parse(fs.readFileSync('s2-state.json'));
(async()=>{ const b=await H.chromium.launch(); const E=await as(b,'iti.trivedi');
 let r=await E('GET','/notifications?page=1&limit=10'); console.log(r.status,JSON.stringify(r.body).slice(0,1500));
 r=await E('GET','/opportunities/'+S.D.d2.opp); console.log('detail',r.status,r.body.code, JSON.stringify(r.body.data?.positions?.[0]?.openings?.[0]||{}).slice(0,600));
 await b.close(); })();
