const H = require('./h');
(async () => {
  const b = await H.chromium.launch();
  const v = await H.login(b, 'vihaan.chatterjee');
  const r = await H.api(v.page,'GET','/opportunities/lookup'); console.log(r.status, JSON.stringify(r.body).slice(0,300));
  const d = await H.api(v.page,'GET','/opportunities/50d6a999-05dd-455f-8264-8e2d9308bb7d'.replace('50d6a999-05dd-455f-8264-8e2d9308bb7d','2b9e5dd6-a202-464d-b4da-0ad75e733a75'));
  console.log(JSON.stringify(d.body.data.positions[0]).slice(0,900));
  await b.close();
})();
