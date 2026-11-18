const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const v = await H.login(b, 'vihaan.chatterjee');
  let hits=[]; for (let p=1;p<=6;p++){ const r = await H.api(v.page,'GET','/opportunities/candidates?limit=100&page='+p+'&positionPublicId=3bca05c3-d240-4960-bf65-2473726a7cbe'); const it=r.body.data?.items||[]; hits.push(...it.filter(i=>i.clientRejection).map(i=>({n:i.name,cr:i.clientRejection}))); if(it.length<100)break; }
  console.log(JSON.stringify(hits).slice(0,600));
  await b.close();
})();
