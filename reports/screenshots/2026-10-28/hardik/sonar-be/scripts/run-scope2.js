// SI4-T1563 regression — scope follow-ups. Usage: node run-scope2.js <user> <label>
const H = require('./h');
const user = process.argv[2], label = process.argv[3];
const email = user + '@simformsolutions.com';
const T = require(H.OUT + 'org-teams.json');
const P = require(H.OUT + 'pmo-projects.json');
const E = require(H.OUT + 'pmo-employees.json');
const byRm = {}; for (const t of T) (byRm[t.rm] = byRm[t.rm] || []).push(t);
function subtree(rm) { const seen = new Set(); const q = [...(byRm[rm] || [])]; q.forEach((t) => seen.add(t.publicId)); for (let i = 0; i < q.length; i++) for (const m of q[i].members) for (const c of byRm[m] || []) if (!seen.has(c.publicId)) { seen.add(c.publicId); q.push(c); } return new Set(q.flatMap((t) => t.members)); }
const idByEmail = {}; const emailById = {}; for (const e of E) { idByEmail[e.email] = e.id; emailById[e.id] = e.email; }

(async () => {
  const b = await H.chromium.launch();
  const { page } = await H.login(b, user);
  const g = (p) => H.get(page, p);
  const me = (await g('/employees/metadata')).body.data;
  const myProjects = new Set(P.filter((p) => p.csm === me.publicId || p.pm === me.publicId).map((p) => p.id));
  const staff = new Set(E.filter((e) => e.projects.some((id) => myProjects.has(id))).map((e) => e.id));
  const sub = new Set([...subtree(email)].map((m) => idByEmail[m]).filter(Boolean));

  await H.check('wl:rowsWithinScope', async () => {
    const r = await g('/working-location/list');
    const rows = r.body.data;
    const out = rows.filter((x) => x.employeePublicId !== me.publicId && !sub.has(x.employeePublicId) && !staff.has(x.employeePublicId));
    const others = rows.filter((x) => x.employeePublicId !== me.publicId);
    const othersWithOverall = others.filter((x) => x.windows && x.windows.overall && x.windows.overall.wfoPercentage !== undefined && x.windows.overall.wfoPercentage !== null);
    const own = rows.find((x) => x.employeePublicId === me.publicId);
    return { pass: 'calc', actual: `rows=${rows.length} subtree=${sub.size} ownedProjects=${myProjects.size} projectStaff=${staff.size} rowsOutsideSubtreeAndStaff=${out.length} ${out.slice(0, 3).map((x) => emailById[x.employeePublicId])} otherRowsWithOverall=${othersWithOverall.length}/${others.length} ownOverall=${own ? JSON.stringify(own.windows.overall) : 'n/a'}`, data: { rows: rows.length, out: out.length, others: others.length, othersWithOverall: othersWithOverall.length, ownHasOverall: !!(own && own.windows.overall) } };
  });

  await H.check('tickets:ownership', async () => {
    const all = await H.getAll(page, '/allocation-tickets');
    if (all.status !== 200) return { pass: 'info', actual: 'status ' + all.status };
    const direct = new Set((byRm[email] || []).flatMap((t) => t.members).map((m) => idByEmail[m]));
    const reasons = { ownProjectCsmOrPm: 0, directReporteeProject: 0, requesterSelf: 0, other: 0 }; const others = [];
    for (const t of all.items) {
      const pm = t.project && t.project.projectManagerEmployee && t.project.projectManagerEmployee.publicId;
      const csm = t.project && t.project.csmEmployee && t.project.csmEmployee.publicId;
      const req = t.requester && t.requester.publicId;
      if (pm === me.publicId || csm === me.publicId) reasons.ownProjectCsmOrPm++;
      else if (req === me.publicId) reasons.requesterSelf++;
      else if (direct.has(pm) || direct.has(csm) || direct.has(req) || sub.has(pm) || sub.has(csm) || sub.has(req)) reasons.directReporteeProject++;
      else { reasons.other++; others.push(`${t.title} pm=${emailById[pm]} csm=${emailById[csm]} req=${emailById[req]}`); }
    }
    return { pass: 'calc', actual: `tickets=${all.items.length}/${all.total} ${JSON.stringify(reasons)} ${others.slice(0, 4).join(' | ')}`, data: { reasons, others: others.slice(0, 30) } };
  });

  await H.check('sched:withdrawNegative', async () => {
    const fake = '00000000-0000-4000-8000-000000000000';
    const a = await H.api(page, 'DELETE', `/allocation-tickets/scheduled-changes/${fake}/withdraw`);
    const d = await H.api(page, 'DELETE', `/allocation-tickets/scheduled-changes/not-a-uuid/withdraw`);
    return { pass: 'calc', actual: `withdraw(unknown uuid)=${a.status} ${JSON.stringify(a.body).slice(0, 140)}; withdraw(bad uuid)=${d.status} ${JSON.stringify(d.body).slice(0, 140)}`, data: { a: a.status, d: d.status } };
  });

  H.done('scope2-' + label);
  await b.close();
})();
