const H = require('./h');
(async () => { const b = await H.chromium.launch(); const { page } = await H.login(b, process.argv[2]);
 const r = await H.api(page, 'GET', '/employees/permissions'); const rules = r.body.data.rules;
 console.log(JSON.stringify(rules.filter(x => new RegExp(process.argv[3]).test(x[1]))));
 const roles = await H.api(page, 'GET', '/roles'); console.log(roles.status, JSON.stringify((roles.body.data||[]).map?.(x=>x.name+':'+x.type) || roles.body).slice(0,500));
 await b.close(); })();
