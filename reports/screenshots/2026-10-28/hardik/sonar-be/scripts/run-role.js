// SI4-T1563 regression — role-scoped checks. Usage: node run-role.js <user> <label>
const H = require('./h');
const enc = encodeURIComponent;
const user = process.argv[2], label = process.argv[3];
const T = require(H.OUT + 'org-teams.json');
const byRm = {}; for (const t of T) (byRm[t.rm] = byRm[t.rm] || []).push(t);
function subtreeMembers(rmEmail) {
  const seen = new Set(); const q = [...(byRm[rmEmail] || [])]; q.forEach((t) => seen.add(t.publicId));
  for (let i = 0; i < q.length; i++) for (const m of q[i].members) for (const c of byRm[m] || []) if (!seen.has(c.publicId)) { seen.add(c.publicId); q.push(c); }
  return new Set(q.flatMap((t) => t.members));
}
const email = user.includes('@') ? user : user + '@simformsolutions.com';

(async () => {
  const b = await H.chromium.launch();
  const { page } = await H.login(b, user);
  const g = (p) => H.get(page, p);
  const me = (await g('/employees/metadata')).body.data;
  const roles = me.employeeRoles.map((r) => r.role.name);
  console.log('logged in as', me.email, roles.join('/'), me.department && me.department.name);

  // ---------- Access matrix on the touched controllers ----------
  const eps = {
    'GET /allocation-tickets': '/allocation-tickets?page=1&limit=100',
    'GET /allocation-tickets/filters': '/allocation-tickets/filters',
    'GET /allocation-tickets/interview-requests': '/allocation-tickets/interview-requests?page=1&limit=100',
    'GET /projects': '/projects?page=1&limit=100',
    'GET /projects/filters': '/projects/filters',
    'GET /employees': '/employees?page=1&limit=100',
    'GET /employee-roles': '/employee-roles?page=1&limit=100',
    'GET /employee-ratings': '/employee-ratings?page=1&limit=100',
    'GET /utilization-priority': '/utilization-priority?page=1&limit=100',
    'GET /opportunities/openings': '/opportunities/openings?page=1&limit=100',
    'GET /opportunities/candidates': '/opportunities/candidates?page=1&limit=100',
    'GET /dashboard/overview': '/dashboard/overview',
    'GET /dashboard/activity': '/dashboard/activity?page=1&limit=100',
    'GET /dashboard/filter-options': '/dashboard/filter-options',
    'GET /working-location/overview': '/working-location/overview',
    'GET /working-location/list': '/working-location/list',
    'GET /working-location/employees': '/working-location/employees?page=1&limit=100',
    'GET /weekly-update': '/weekly-update?page=1&limit=100',
    'GET /notifications': '/notifications?page=1&limit=100',
    'GET /teams (own dept)': '/teams?departmentId=' + (me.department ? me.department.publicId : 'x'),
  };
  const matrix = {};
  for (const [k, p] of Object.entries(eps)) { const r = await g(p); const d = r.body && r.body.data; matrix[k] = r.status + (r.status === 200 ? ` (n=${H.total(r.body) ?? (Array.isArray(d) ? d.length : '-')})` : ''); }
  await H.check('access:matrix', async () => ({ pass: 'info', actual: JSON.stringify(matrix), data: matrix }));

  // ---------- Notifications for this role ----------
  await H.check('notif:isRead', async () => {
    const all = await g('/notifications?page=1&limit=100');
    const rr = await g('/notifications?page=1&limit=100&isRead=true');
    const ru = await g('/notifications?page=1&limit=100&isRead=false');
    const wr = H.items(rr.body).filter((x) => x.isRead !== true).length, wu = H.items(ru.body).filter((x) => x.isRead !== false).length;
    const newest = H.items(all.body).slice(0, 3).map((x) => `${x.createdAt.slice(0, 16)} ${x.title}`);
    return { pass: all.status === 200 && H.total(rr.body) + H.total(ru.body) === H.total(all.body) && wr === 0 && wu === 0, actual: `all=${H.total(all.body)} read=${H.total(rr.body)} unread=${H.total(ru.body)} wrongRows=${wr + wu}; newest: ${newest.join(' | ')}` };
  });

  // ---------- Team hierarchy: employees list vs computed subtree ----------
  if (roles.includes('RM') || roles.includes('TM') || roles.includes('DM') || roles.includes('EM')) {
    const sub = subtreeMembers(email);
    await H.check('hier:employeesList', async () => {
      const all = await H.getAll(page, '/employees');
      if (all.status !== 200) return { pass: 'info', actual: `employees list status ${all.status}` };
      const seen = new Set(all.items.map((x) => x.email));
      const depts = [...new Set(all.items.map((x) => x.department && x.department.name))];
      const missing = [...sub].filter((e) => !seen.has(e));
      const extra = [...seen].filter((e) => !sub.has(e) && e !== email);
      return { pass: 'calc', actual: `visible=${seen.size} subtreeMembers=${sub.size} missingFromList=${missing.length} ${missing.slice(0, 3)} extraNotInSubtree=${extra.length} ${extra.slice(0, 3)} depts=${depts.join(',')}`, data: { visible: seen.size, sub: sub.size, missing, extra, depts } };
    });
    await H.check('hier:workingLocationList', async () => {
      const r = await g('/working-location/list');
      if (r.status !== 200) return { pass: 'info', actual: `status ${r.status}` };
      const list = r.body.data;
      const emp = await H.getAll(page, '/working-location/employees');
      const names = new Set(emp.items.map((x) => x.publicId));
      const overallNull = list.filter((x) => !x.windows || !x.windows.overall || x.windows.overall.wfoPercentage === undefined).length;
      return { pass: 'calc', actual: `list rows=${list.length} employees-table total=${emp.total} rowsWithoutOverall=${overallNull}`, data: { rows: list.length, table: emp.total, overallNull, tableEmails: emp.items.map((x) => x.name) } };
    });
  }

  // ---------- Employees list ratings (toReadableRating) ----------
  await H.check('emp:ratingsShape', async () => {
    const r = await g('/employees?page=1&limit=100');
    if (r.status !== 200) return { pass: 'info', actual: `status ${r.status}` };
    const it = H.items(r.body);
    const withKey = it.filter((x) => x.ratings !== undefined);
    const bad = withKey.filter((x) => !Object.values(x.ratings).every((v) => v === null || (typeof v === 'number' && v >= 0 && v <= 10)));
    const nonNull = withKey.filter((x) => Object.values(x.ratings).some((v) => typeof v === 'number'));
    const zero = withKey.filter((x) => Object.values(x.ratings).some((v) => v === 0));
    const self = it.find((x) => x.email === email);
    return { pass: 'calc', actual: `rows=${it.length} withRatingsKey=${withKey.length} withNumericRating=${nonNull.length} zeroRatings=${zero.length} badValues=${bad.length} sample=${JSON.stringify(nonNull.slice(0, 2).map((x) => [x.name, x.ratings]))} selfRowRatings=${self ? JSON.stringify(self.ratings) : 'n/a'}`, data: { rows: it.length, withKey: withKey.length, nonNull: nonNull.length, bad: bad.length } };
  });

  // ---------- Dashboard department axis ----------
  await H.check('dash:filterOptions', async () => {
    const r = await g('/dashboard/filter-options');
    if (r.status !== 200) return { pass: 'info', actual: `status ${r.status} ${JSON.stringify(r.body).slice(0, 150)}` };
    const d = r.body.data;
    return { pass: 'calc', actual: `departments=${d.departments.length} [${d.departments.slice(0, 5).map((x) => x.label).join(', ')}] projects=${d.projects.length}`, data: { departments: d.departments.map((x) => x.label), projects: d.projects.length } };
  });

  // ---------- Weekly updates (TEAM / DEPARTMENT scope) ----------
  await H.check('weekly:reads', async () => {
    const out = {};
    for (const p of ['/weekly-update?page=1&limit=100', '/weekly-update/filters', '/weekly-update/sessions?page=1&limit=100', '/weekly-update/status', '/weekly-update/last-notes']) { const r = await g(p); out[p.split('?')[0]] = r.status + (r.status === 200 ? '' : ' ' + JSON.stringify(r.body).slice(0, 160)); }
    const l = await g('/weekly-update?page=1&limit=100&sortBy=meetingDate&sortOrder=desc');
    const it = H.items(l.body);
    out.sortDesc = l.status === 200 ? (H.sortedBy(it, (x) => x.meetingDate, 'desc').ok ? 'ok' : 'BROKEN') : l.status;
    out.total = H.total(l.body);
    out.first = it.slice(0, 2).map((x) => `${x.meetingDate} ${x.title || x.name || ''}`);
    return { pass: 'calc', actual: JSON.stringify(out), data: out };
  });

  // ---------- Working location own row + others ----------
  await H.check('wl:selfAndOthers', async () => {
    const own = await g(`/working-location/employees/${me.publicId}`);
    const ownOverall = own.status === 200 ? JSON.stringify(own.body.data.windows && own.body.data.windows.overall) : 'E' + own.status;
    const other = await g(`/working-location/employees/d0837174-4ed8-415b-beb2-5d98b71ce0d5`); // CEO record, not in anyone's team here
    return { pass: 'calc', actual: `own=${own.status} ownOverall=${ownOverall} ceoRecord=${other.status}${other.status === 200 ? ' overall=' + JSON.stringify(other.body.data.windows && other.body.data.windows.overall) : ''}`, data: { own: own.status, ownOverall, other: other.status } };
  });

  H.done(label);
  await b.close();
})();
