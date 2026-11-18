const H=require('./h');
(async()=>{
 const b=await H.chromium.launch(); const v=await H.login(b,'ceo'); const A=(m,p)=>H.api(v.page,m,p);
 let nodept=[],tot=0; for(let p=1;p<=3;p++){ const r=await A('GET','/contractors?limit=100&page='+p); const it=r.body.data?.items||[]; tot+=it.length; nodept.push(...it.filter(c=>!c.department).map(c=>[c.name,c.email])); }
 console.log('scanned',tot,'no-dept',nodept);
 for(const g of process.argv.slice(2)){ const r=await A('GET','/teams-webhook-configs?groupType='+g); console.log('webhooks',g,r.status,JSON.stringify(r.body).slice(0,2500)); }
 await b.close();
})();
