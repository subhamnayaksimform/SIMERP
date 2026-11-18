const H=require('./h');
(async()=>{ const b=await H.chromium.launch(); const v=await H.login(b,'ceo');
 const x=await H.api(v.page,'GET','/employee-roles?limit=100&search=kriti.desai'); console.log(JSON.stringify(x.body).slice(0,1200)); await b.close();})();
