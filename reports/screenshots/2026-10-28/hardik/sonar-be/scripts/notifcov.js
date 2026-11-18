const H = require('./h');
(async () => {
  const b = await H.chromium.launch(); const { page } = await H.login(b, 'nandini.langalia');
  const tickets = (await H.getAll(page, '/allocation-tickets?sortBy=createdAt&sortOrder=desc', 9)).items.filter((t) => t.createdAt > '2026-10-01');
  const notifs = (await H.getAll(page, '/notifications', 15)).items;
  const roles = require(H.OUT + 'employee-roles-all.json'); const R = {}; for (const e of roles) R[e.publicId] = e.roles;
  const rows = tickets.map((t) => { const rq = t.requester && t.requester.publicId; const rr = (R[rq] || []).filter((x) => x !== 'EMPLOYEE').join('/');
    const ns = notifs.filter((n) => (n.title + ' ' + (n.body || '')).includes(t.title));
    return { t: t.title, type: t.ticketType, at: t.createdAt.slice(0, 16), req: t.requester && t.requester.name, reqRoles: rr, notified: ns.length, types: [...new Set(ns.map((n) => n.eventType))].join(',') }; });
  const agg = {};
  for (const r of rows) { const k = `${r.at < '2026-10-23T05:30' ? 'pre' : 'post'}|${/PMO|ADMIN/.test(r.reqRoles) ? 'PMO-raised' : 'PM/CSM-raised'}|${r.type}`; const a = agg[k] || (agg[k] = { n: 0, notified: 0 }); a.n++; if (r.notified) a.notified++; }
  console.log(JSON.stringify(agg, null, 1));
  console.log(rows.filter((r) => !r.notified && !/PMO|ADMIN/.test(r.reqRoles)).slice(0, 15).map((r) => JSON.stringify(r)).join('\n'));
  H.save('notif-coverage', { agg, rows });
  await b.close();
})();
