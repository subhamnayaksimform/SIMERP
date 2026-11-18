// generic: node act.js <name> <actor> <method> <path> '<jsonbody>' <snapLabel> users...
const L = require('./lib'); const { snap } = require('./snap');
(async () => {
  const [name, actor, method, path, bodyStr, label, ...users] = process.argv.slice(2);
  const b = await L.chromium.launch();
  const { page, ctx } = await L.login(b, actor);
  const body = bodyStr && bodyStr !== '-' ? JSON.parse(bodyStr) : undefined;
  const T0 = new Date().toISOString();
  const r = await L.api(page, method, path, body);
  const T1 = new Date().toISOString();
  console.log(name, r.status, JSON.stringify(r.body).slice(0, 900));
  L.save(name, { actor, T0, T1, method, path, req: body, res: r });
  await ctx.close();
  if (label && label !== '-' && r.status < 300) { await new Promise(r => setTimeout(r, 4000)); await snap(b, label, users); }
  await b.close();
})();
