// SI4-T1563 regression — PMO (nandini.langalia) read-only checks.
const H = require('./h');
const enc = encodeURIComponent;
const TARUN = '4174b8c1-9d89-4b61-bfd7-075924620091';

(async () => {
  const b = await H.chromium.launch();
  const { page } = await H.login(b, 'nandini.langalia');
  const g = (p) => H.get(page, p);
  const tot = async (p) => { const r = await g(p); return r.status === 200 ? H.total(r.body) : 'E' + r.status; };
  const SPECIAL = ['%', '_', '\\', '%%', 'a%b', '%_%'];

  // ---------- Search escaping on endpoints that use escapeLikePattern ----------
  const escEps = {
    openings: '/opportunities/openings?page=1&limit=100',
    interviewRequests: '/allocation-tickets/interview-requests?page=1&limit=100',
    candidates: '/opportunities/candidates?page=1&limit=100',
    assignees: '/opportunities/assignees?role=PM',
    lookup: '/opportunities/lookup',
  };
  for (const [name, ep] of Object.entries(escEps)) {
    await H.check(`esc:${name}:wildcards`, async () => {
      const base = await tot(ep);
      const row = {};
      for (const t of SPECIAL) row[t] = await tot(`${ep}${ep.includes('?') ? '&' : '?'}search=${enc(t)}`);
      const bad = Object.entries(row).filter(([, v]) => typeof v !== 'number' || v >= base || v > 0);
      return { pass: bad.length === 0, actual: `base=${base}; ` + JSON.stringify(row), data: { base, row } };
    });
    await H.check(`esc:${name}:quotes`, async () => {
      const row = {};
      for (const t of ["'", '"', "O'Brien", 'a"b', '--', ';']) { const r = await g(`${ep}${ep.includes('?') ? '&' : '?'}search=${enc(t)}`); row[t] = r.status === 200 ? H.total(r.body) : 'E' + r.status; }
      const bad = Object.values(row).filter((v) => typeof v !== 'number');
      return { pass: bad.length === 0, actual: JSON.stringify(row) };
    });
  }
  // normal-term searches still match
  await H.check('esc:openings:normal', async () => {
    const r = await g('/opportunities/openings?page=1&limit=100&search=java');
    const it = H.items(r.body);
    const miss = it.filter((x) => !JSON.stringify(x).toLowerCase().includes('java'));
    return { pass: r.status === 200 && it.length > 0 && miss.length === 0, actual: `status=${r.status} total=${H.total(r.body)} nonMatching=${miss.length}` };
  });
  await H.check('esc:interviewRequests:normal', async () => {
    const r = await g('/allocation-tickets/interview-requests?page=1&limit=100&search=AnalytixHub');
    const it = H.items(r.body);
    const miss = it.filter((x) => !JSON.stringify(x).toLowerCase().includes('analytixhub'));
    return { pass: r.status === 200 && it.length > 0 && miss.length === 0, actual: `status=${r.status} total=${H.total(r.body)} nonMatching=${miss.length}` };
  });
  await H.check('esc:candidates:normal', async () => {
    const r = await g('/opportunities/candidates?page=1&limit=100&search=tarun');
    const it = H.items(r.body);
    const miss = it.filter((x) => !(x.name + ' ' + x.email).toLowerCase().includes('tarun'));
    return { pass: r.status === 200 && it.length > 0 && miss.length === 0, actual: `status=${r.status} total=${H.total(r.body)} names=${it.slice(0, 5).map((x) => x.name).join(', ')} nonMatching=${miss.length}` };
  });
  await H.check('esc:openings:titleFilters', async () => {
    const base = await tot('/opportunities/openings?page=1&limit=100');
    const row = {};
    for (const k of ['positionTitle', 'opportunityTitle']) for (const t of ['%', '_', 'Java']) row[`${k}=${t}`] = await tot(`/opportunities/openings?page=1&limit=100&${k}=${enc(t)}`);
    const wild = Object.entries(row).filter(([k]) => !k.endsWith('Java'));
    const ok = wild.every(([, v]) => v === 0) && typeof row['positionTitle=Java'] === 'number' && row['positionTitle=Java'] > 0;
    return { pass: ok, actual: `base=${base}; ` + JSON.stringify(row) };
  });
  await H.check('esc:employeeOpportunityHistory', async () => {
    // pick an employee that has nominations: first candidate of first opening with nominations
    const r0 = await g(`/opportunities/employees/${TARUN}/history`);
    const row = { none: r0.status === 200 ? (Array.isArray(r0.body.data) ? r0.body.data.length : H.total(r0.body) ?? JSON.stringify(r0.body.data).length) : 'E' + r0.status };
    for (const t of ['%', '_', '\\']) { const r = await g(`/opportunities/employees/${TARUN}/history?search=${enc(t)}`); row[t] = r.status === 200 ? (Array.isArray(r.body.data) ? r.body.data.length : H.total(r.body)) : 'E' + r.status; }
    return { pass: Object.values(row).every((v) => typeof v === 'number' || v === undefined) && ['%', '_', '\\'].every((t) => row[t] === 0 || row[t] === undefined), actual: JSON.stringify(row) };
  });

  // ---------- Search on endpoints that do NOT use the helper (pre-existing behaviour) ----------
  const rawEps = {
    employees: '/employees?page=1&limit=100',
    projects: '/projects?page=1&limit=100',
    allocationTickets: '/allocation-tickets?page=1&limit=100',
    notifications: '/notifications?page=1&limit=100',
    utilizationPriority: '/utilization-priority?page=1&limit=100',
    employeeRoles: '/employee-roles?page=1&limit=100',
    dashboardActivity: '/dashboard/activity?page=1&limit=100',
  };
  for (const [name, ep] of Object.entries(rawEps)) {
    await H.check(`raw:${name}:wildcards`, async () => {
      const base = await tot(ep);
      const row = {};
      for (const t of ['%', '_', 'a%b', "'", 'zzzz-no-match']) row[t] = await tot(`${ep}&search=${enc(t)}`);
      const matchAll = row['%'] === base || row['_'] === base;
      return { pass: !matchAll, actual: `base=${base}; ` + JSON.stringify(row), data: { base, row } };
    });
  }

  // ---------- Allocation tickets list: sorting, filters, counts ----------
  await H.check('tickets:sort', async () => {
    const out = {};
    for (const [k, f] of [['ticketNumber', (x) => x.title], ['createdAt', (x) => x.createdAt], ['project.name', (x) => x.project && x.project.name], ['allocationStartDate', (x) => x.allocationStartDate]]) {
      for (const dir of ['asc', 'desc']) {
        const r = await g(`/allocation-tickets?page=1&limit=100&sortBy=${enc(k)}&sortOrder=${dir}`);
        const it = H.items(r.body);
        const s = H.sortedBy(it, f, dir, k === 'project.name' ? (a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }) : undefined);
        out[`${k}:${dir}`] = r.status === 200 ? (s.ok ? 'ok' : `BREAK@${s.at} ${s.a} | ${s.b}`) : 'E' + r.status;
      }
    }
    return { pass: Object.values(out).every((v) => v === 'ok'), actual: JSON.stringify(out) };
  });
  await H.check('tickets:filterStatusAndCounts', async () => {
    const all = await H.getAll(page, '/allocation-tickets');
    const byStatus = {};
    for (const t of all.items) byStatus[t.status] = (byStatus[t.status] || 0) + 1;
    const out = { total: all.total, paged: all.items.length, byStatus };
    const mism = [];
    for (const s of Object.keys(byStatus)) {
      const r = await g(`/allocation-tickets?page=1&limit=100&filters=${enc(JSON.stringify({ status: s }))}`);
      const it = H.items(r.body);
      const wrong = it.filter((x) => x.status !== s).length;
      if (H.total(r.body) !== byStatus[s] || wrong) mism.push(`${s}: filter=${H.total(r.body)} vs list=${byStatus[s]} wrongRows=${wrong}`);
    }
    const r0 = await g('/allocation-tickets?page=1&limit=100');
    out.stats = r0.body.data.stats;
    return { pass: all.items.length === all.total && mism.length === 0, actual: JSON.stringify(out) + (mism.length ? ' MISMATCH ' + mism.join('; ') : ''), data: out };
  });
  await H.check('tickets:filterProjectCsm', async () => {
    const r = await g(`/allocation-tickets?page=1&limit=100&filters=${enc(JSON.stringify({ csmPublicId: [TARUN] }))}`);
    const it = H.items(r.body);
    const wrong = it.filter((x) => !(x.csm && x.csm.publicId === TARUN) && !(x.project && x.project.csmEmployee && x.project.csmEmployee.publicId === TARUN));
    return { pass: r.status === 200 && it.length > 0 && wrong.length === 0, actual: `status=${r.status} total=${H.total(r.body)} wrongRows=${wrong.length}` };
  });

  // ---------- Interview requests list: list-param parsing (toListParam rewrite) ----------
  await H.check('ir:prioritiesParsing', async () => {
    const base = '/allocation-tickets/interview-requests?page=1&limit=100';
    const a = await g(`${base}&priorities=HIGH,MEDIUM`);
    const b2 = await g(`${base}&priorities=HIGH&priorities=MEDIUM`);
    const c = await g(`${base}&priorities=${enc(' HIGH , MEDIUM ')}`);
    const h = await tot(`${base}&priorities=HIGH`), m = await tot(`${base}&priorities=MEDIUM`);
    const bad = await g(`${base}&priorities[a]=HIGH`);
    const bad2 = await g(`${base}&priorities=URGENT`);
    const prio = (x) => (x.opportunity ? x.opportunity.priority : x.ticket ? x.ticket.priority : x.priority);
    const wrong = H.items(a.body).filter((x) => !['HIGH', 'MEDIUM'].includes(prio(x))).length;
    const actual = `comma=${H.total(a.body)} repeated=${H.total(b2.body)} spaced=${c.status}/${H.total(c.body)} HIGH+MEDIUM=${h}+${m} wrongRowsOnPage1=${wrong} nested[a]=${bad.status} invalidEnum=${bad2.status}`;
    const ok = a.status === 200 && H.total(a.body) === H.total(b2.body) && H.total(a.body) === h + m && c.status === 200 && H.total(c.body) === H.total(a.body) && wrong === 0 && bad.status === 400 && bad2.status === 400;
    return { pass: ok, actual };
  });
  await H.check('ir:statusTiles', async () => {
    const base = '/allocation-tickets/interview-requests?page=1&limit=100';
    const r = await g(base); const st = r.body.data.stats;
    const out = { stats: st };
    for (const s of ['OPEN', 'WON', 'LOST', 'ON_HOLD']) out[s] = await tot(`${base}&status=${s}`);
    const ok = out.OPEN === st.open && out.WON === st.won && out.LOST === st.lost && out.ON_HOLD === st.onHold && st.all === H.total(r.body);
    return { pass: ok, actual: JSON.stringify(out) };
  });

  // ---------- Opportunities: candidates computed sorts + list params; allocation-conflicts ----------
  await H.check('cand:sorts', async () => {
    const out = {};
    for (const [k, f] of [['availabilityPercentage', (x) => x.availabilityPercentage], ['remainingAllocationPercentage', (x) => x.remainingAllocationPercentage], ['name', (x) => x.name]]) {
      for (const dir of ['asc', 'desc']) {
        const r = await g(`/opportunities/candidates?page=1&limit=100&sortBy=${k}&sortOrder=${dir}`);
        const s = H.sortedBy(H.items(r.body), f, dir, k === 'name' ? (a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }) : undefined);
        out[`${k}:${dir}`] = r.status === 200 ? (s.ok ? 'ok' : `BREAK@${s.at} ${s.a}|${s.b}`) : 'E' + r.status + ' ' + JSON.stringify(r.body).slice(0, 120);
      }
    }
    return { pass: Object.values(out).every((v) => v === 'ok'), actual: JSON.stringify(out) };
  });
  await H.check('cand:rangesAndLists', async () => {
    const base = '/opportunities/candidates?page=1&limit=100';
    const r1 = await g(`${base}&minAvailabilityPercentage=50&maxAvailabilityPercentage=80`);
    const outOfRange = H.items(r1.body).filter((x) => x.availabilityPercentage < 50 || x.availabilityPercentage > 80).length;
    const dep = (await g('/departments?page=1&limit=100')).body.data.departments.slice(0, 2).map((d) => d.publicId);
    const c1 = await g(`${base}&departmentPublicIds=${dep.join(',')}`);
    const c2 = await g(`${base}&departmentPublicIds=${dep[0]}&departmentPublicIds=${dep[1]}`);
    const bad = await g(`${base}&departmentPublicIds[x]=${dep[0]}`);
    const ok = r1.status === 200 && outOfRange === 0 && c1.status === 200 && H.total(c1.body) === H.total(c2.body) && H.total(c1.body) > 0 && bad.status === 400;
    return { pass: ok, actual: `range50-80 total=${H.total(r1.body)} outOfRangeOnPage=${outOfRange}; deptComma=${H.total(c1.body)} deptRepeated=${H.total(c2.body)}; nested[x]=${bad.status}` };
  });
  await H.check('opp:allocationConflicts', async () => {
    const ids = H.items((await g('/opportunities/candidates?page=1&limit=100')).body).slice(0, 3).map((x) => x.publicId);
    const a = await g(`/opportunities/allocation-conflicts?employeePublicIds=${ids.join(',')}`);
    const b2 = await g(`/opportunities/allocation-conflicts?employeePublicIds=${ids[0]}&employeePublicIds=${ids[1]}&employeePublicIds=${ids[2]}`);
    const c = await g(`/opportunities/allocation-conflicts?employeePublicIds=${ids.join(',')},`);
    const d = await g(`/opportunities/allocation-conflicts?employeePublicIds[x]=${ids[0]}`);
    const e = await g(`/opportunities/allocation-conflicts?employeePublicIds=not-a-uuid`);
    const same = JSON.stringify(a.body.data) === JSON.stringify(b2.body.data) && JSON.stringify(a.body.data) === JSON.stringify(c.body.data);
    return { pass: a.status === 200 && b2.status === 200 && c.status === 200 && same && d.status === 400 && e.status === 400, actual: `comma=${a.status} repeated=${b2.status} trailingComma=${c.status} sameBody=${same} nested=${d.status} invalidUuid=${e.status}` };
  });
  await H.check('opp:openingsEnumLists', async () => {
    const base = '/opportunities/openings?page=1&limit=100';
    const a = await g(`${base}&stages=PENDING_TO_SHORTLIST,SHORTLISTED`);
    const b2 = await g(`${base}&stages=PENDING_TO_SHORTLIST&stages=SHORTLISTED`);
    const s1 = await tot(`${base}&stages=PENDING_TO_SHORTLIST`), s2 = await tot(`${base}&stages=SHORTLISTED`);
    const bad = await g(`${base}&stages[a]=SHORTLISTED`);
    const wrong = H.items(a.body).filter((x) => !['PENDING_TO_SHORTLIST', 'SHORTLISTED'].includes(x.stage)).length;
    return { pass: a.status === 200 && H.total(a.body) === H.total(b2.body) && H.total(a.body) === s1 + s2 && wrong === 0 && bad.status === 400, actual: `comma=${H.total(a.body)} repeated=${H.total(b2.body)} sum=${s1}+${s2} wrongRows=${wrong} nested=${bad.status}` };
  });

  // ---------- Notifications isRead flip ----------
  await H.check('notif:isRead', async () => {
    const all = await tot('/notifications?page=1&limit=100');
    const rr = await g('/notifications?page=1&limit=100&isRead=true');
    const ru = await g('/notifications?page=1&limit=100&isRead=false');
    const wr = H.items(rr.body).filter((x) => x.isRead !== true).length, wu = H.items(ru.body).filter((x) => x.isRead !== false).length;
    return { pass: H.total(rr.body) + H.total(ru.body) === all && wr === 0 && wu === 0, actual: `all=${all} read=${H.total(rr.body)} unread=${H.total(ru.body)} wrongRead=${wr} wrongUnread=${wu}` };
  });

  // ---------- Dashboard ----------
  await H.check('dash:filterOptionsPmo', async () => {
    const r = await g('/dashboard/filter-options');
    const d = r.body.data;
    return { pass: r.status === 200 && d.departments.length > 0, actual: `status=${r.status} departments=${d.departments.length} projects=${d.projects.length}` };
  });
  await H.check('dash:listParams', async () => {
    const deps = (await g('/dashboard/filter-options')).body.data.departments.slice(0, 2).map((x) => x.value);
    const base = '/dashboard/activity?page=1&limit=100';
    const a = await g(`${base}&departmentPublicIds=${deps.join(',')}`);
    const b2 = await g(`${base}&departmentPublicIds=${deps[0]}&departmentPublicIds=${deps[1]}`);
    const o1 = await g(`/dashboard/overview?departmentPublicIds=${deps.join(',')}`);
    const o2 = await g(`/dashboard/overview?departmentPublicIds=${deps[0]}&departmentPublicIds=${deps[1]}`);
    const bad = await g(`${base}&departmentPublicIds[a]=${deps[0]}`);
    const badO = await g(`/dashboard/overview?departmentPublicIds[a]=${deps[0]}`);
    const st = await g(`${base}&statuses=upcoming_allocation`);
    const wrong = H.items(st.body).filter((x) => x.status !== 'upcoming_allocation').length;
    const ok = a.status === 200 && H.total(a.body) === H.total(b2.body) && JSON.stringify(o1.body.data.summary) === JSON.stringify(o2.body.data.summary) && bad.status === 400 && badO.status === 400 && st.status === 200 && wrong === 0;
    return { pass: ok, actual: `activity comma=${H.total(a.body)} repeated=${H.total(b2.body)}; overview summaries equal=${JSON.stringify(o1.body.data.summary) === JSON.stringify(o2.body.data.summary)}; nested activity=${bad.status} overview=${badO.status}; statuses filter=${st.status}/${H.total(st.body)} wrong=${wrong}` };
  });
  await H.check('dash:exportCsv', async () => {
    const r = await page.request.fetch(H.API + '/dashboard/export?format=csv', { headers: { Origin: H.BASE }, failOnStatusCode: false });
    const txt = await r.text();
    require('fs').writeFileSync(H.OUT + 'dashboard-export.csv', txt);
    const lines = txt.split(/\r?\n/);
    const sections = lines.filter((l) => l.startsWith('# '));
    // any quoted cell whose first non-space char is a formula trigger must carry a leading tab
    const cells = txt.match(/"(?:[^"]|"")*"/g) || [];
    const unsafe = cells.filter((c) => /^"\s*[=+\-@]/.test(c));
    return { pass: r.status() === 200 && /text\/csv/.test(r.headers()['content-type']) && sections.length > 0 && unsafe.length === 0, actual: `status=${r.status()} type=${r.headers()['content-type']} bytes=${txt.length} sections=${sections.join(' / ')} quotedCells=${cells.length} unneutralisedFormulaCells=${unsafe.length}` };
  });
  await H.check('dash:exportXlsx', async () => {
    const r = await page.request.fetch(H.API + '/dashboard/export?format=excel', { headers: { Origin: H.BASE }, failOnStatusCode: false });
    const buf = await r.body();
    let ok = r.status() === 200 && buf.slice(0, 2).toString() === 'PK';
    let extra = '';
    if (r.status() !== 200) { const r2 = await page.request.fetch(H.API + '/dashboard/export?format=xlsx', { headers: { Origin: H.BASE }, failOnStatusCode: false }); const b2 = await r2.body(); extra = ` (xlsx retry ${r2.status()} ${b2.slice(0, 2)})`; ok = r2.status() === 200 && b2.slice(0, 2).toString() === 'PK'; if (ok) require('fs').writeFileSync(H.OUT + 'dashboard-export.xlsx', b2); }
    else require('fs').writeFileSync(H.OUT + 'dashboard-export.xlsx', buf);
    return { pass: ok, actual: `status=${r.status()} type=${r.headers()['content-type']} bytes=${buf.length} magic=${buf.slice(0, 2)}${extra} ${r.status() !== 200 ? buf.toString().slice(0, 200) : ''}` };
  });

  // ---------- Working location ----------
  await H.check('wl:overviewVsList', async () => {
    const ov = (await g('/working-location/overview')).body.data;
    const list = (await H.getAll(page, '/working-location/employees')).items;
    const maxAsOf = list.reduce((m, x) => (x.asOfDate > m ? x.asOfDate : m), '0000');
    // recompute trend the way buildTrend does (per date over all rows' 7-day strip)
    const counts = {};
    for (const row of list) for (const d of row.days) { if (d.status === null) continue; const c = counts[d.date] || (counts[d.date] = { wfo: 0, wfh: 0, total: 0 }); c.total++; if (d.status === 'WFO') c.wfo++; if (d.status === 'WFH') c.wfh++; }
    const diffs = [];
    for (const t of ov.trend) { const c = counts[t.date]; if (!c) { diffs.push(t.date + ':missing'); continue; } const wfo = Math.round((c.wfo / c.total) * 1000) / 10, wfh = Math.round((c.wfh / c.total) * 1000) / 10; if (Math.abs(wfo - t.wfoPercentage) > 0.11 || Math.abs(wfh - t.wfhPercentage) > 0.11) diffs.push(`${t.date}: api ${t.wfoPercentage}/${t.wfhPercentage} vs recomputed ${wfo}/${wfh}`); }
    const sortedTrend = H.sortedBy(ov.trend, (x) => x.date, 'asc').ok;
    return { pass: ov.asOfDate === maxAsOf && diffs.length === 0 && sortedTrend, actual: `overview.asOfDate=${ov.asOfDate} max(list.asOfDate)=${maxAsOf} employeeRows=${list.length} trendDays=${ov.trend.length} sorted=${sortedTrend} diffs=${diffs.join('; ') || 'none'}` };
  });
  await H.check('wl:percentages', async () => {
    const all = await H.getAll(page, '/working-location/employees');
    const bad = []; let nullPct = 0;
    for (const e of all.items) {
      for (const [w, v] of Object.entries(e.windows || {})) {
        if (v.wfoPercentage === null || v.wfoPercentage === undefined) { nullPct++; continue; }
        if (typeof v.wfoPercentage !== 'number' || v.wfoPercentage < 0 || v.wfoPercentage > 100 || Math.abs(v.wfoPercentage + v.wfhPercentage - 100) > 0.2) bad.push(`${e.name}/${w}:${v.wfoPercentage}+${v.wfhPercentage}`);
        if (v.daysLogged !== null && !Number.isInteger(v.daysLogged)) bad.push(`${e.name}/${w}:daysLogged=${v.daysLogged}`);
      }
    }
    const asOf = [...new Set(all.items.map((x) => x.asOfDate))];
    return { pass: all.items.length === all.total && bad.length === 0, actual: `employees=${all.items.length}/${all.total} badWindows=${bad.length} ${bad.slice(0, 3).join(', ')} nullWindows=${nullPct} distinctAsOfDates=${asOf.join(',')}` };
  });

  // ---------- Employees ----------
  await H.check('emp:sorts', async () => {
    const out = {};
    for (const [k, f, cmp] of [['name', (x) => x.name, (a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })], ['dateOfJoining', (x) => x.dateOfJoining], ['availabilityPercentage', (x) => x.availabilityPercentage]]) {
      for (const dir of ['asc', 'desc']) {
        const r = await g(`/employees?page=1&limit=100&sortBy=${k}&sortOrder=${dir}`);
        const s = H.sortedBy(H.items(r.body), f, dir, cmp);
        out[`${k}:${dir}`] = r.status === 200 ? (s.ok ? 'ok' : `BREAK@${s.at} ${s.a}|${s.b}`) : 'E' + r.status;
      }
    }
    return { pass: Object.values(out).every((v) => v === 'ok'), actual: JSON.stringify(out) };
  });
  await H.check('emp:visaFilters', async () => {
    const base = '/employees?page=1&limit=100';
    const all = await tot(base);
    const out = {};
    for (const f of [{ visaStatus: ['NOT_ADDED'] }, { visaStatus: ['VALID'] }, { visaStatus: ['VALID', 'EXPIRING_SOON', 'EXPIRED'] }, { visaCountry: ['UNITED_STATES'] }, { visaCountry: ['UNITED_STATES'], visaStatus: ['VALID'] }, { visaStatus: [] }, { visaStatus: ['BOGUS'] }]) {
      out[JSON.stringify(f)] = await tot(`${base}&filters=${enc(JSON.stringify(f))}`);
    }
    const nA = out['{"visaStatus":["NOT_ADDED"]}'], v = out['{"visaStatus":["VALID"]}'], v3 = out['{"visaStatus":["VALID","EXPIRING_SOON","EXPIRED"]}'], us = out['{"visaCountry":["UNITED_STATES"]}'], usv = out['{"visaCountry":["UNITED_STATES"],"visaStatus":["VALID"]}'];
    const ok = [nA, v, v3, us, usv].every((x) => typeof x === 'number') && nA < all && v <= v3 && usv <= us && usv <= v && String(out['{"visaStatus":["BOGUS"]}']).startsWith('E4');
    return { pass: ok, actual: `all=${all} ` + JSON.stringify(out) };
  });
  await H.check('emp:detailRatings', async () => {
    // employees that have ratings, from the ratings list
    const rl = H.items((await g('/employee-ratings?page=1&limit=100')).body).slice(0, 5);
    const out = [];
    for (const r of rl) {
      const d = await g(`/employees/${r.employee.publicId}`);
      const rt = d.body.data && (d.body.data.ratings || (d.body.data.employee && d.body.data.employee.ratings));
      out.push({ name: r.employee.name, status: d.status, ratings: rt });
    }
    const types = out.map((o) => o.ratings ? Object.values(o.ratings).map((v) => (v === null ? 'null' : typeof v)).join('/') : 'absent');
    // PMO role grants employees.read with selectedFields ["departmentId"] only, so buildRatingsEntry must omit the key entirely.
    const ok = out.every((o) => o.status === 200 && o.ratings === undefined);
    return { pass: ok, actual: out.map((o) => `${o.name}:${o.status}:${JSON.stringify(o.ratings)}`).join('; '), data: types };
  });
  await H.check('emp:zohoSyncFresh', async () => {
    const e = (await g('/employees?page=1&limit=100')).body.data.lastSyncedAt;
    const p = (await g('/projects?page=1&limit=100')).body.data.lastSyncedAt;
    return { pass: (!e || !p) ? 'blocked' : (e > '2026-10-23' && p > '2026-10-23'), actual: `employees.lastSyncedAt=${e} projects.lastSyncedAt=${p}` };
  });

  // ---------- Employee ratings rehire Set ----------
  await H.check('ratings:rehireFlags', async () => {
    const base = '/employee-ratings?page=1&limit=100';
    const all = await H.getAll(page, '/employee-ratings');
    const exp = { YES: all.items.filter((x) => x.rehireYesCount > 0).length, NO: all.items.filter((x) => x.rehireNoCount > 0).length, UNANSWERED: all.items.filter((x) => x.rehireUnansweredCount > 0).length };
    const got = {};
    for (const f of ['YES', 'NO', 'UNANSWERED']) got[f] = await tot(`${base}&rehireFlags=${f}`);
    got['YES,NO'] = await tot(`${base}&rehireFlags=YES,NO`);
    got['YES&NO'] = await tot(`${base}&rehireFlags=YES&rehireFlags=NO`);
    const bad = await g(`${base}&rehireFlags[a]=YES`);
    const expYN = all.items.filter((x) => x.rehireYesCount > 0 || x.rehireNoCount > 0).length;
    const ok = got.YES === exp.YES && got.NO === exp.NO && got.UNANSWERED === exp.UNANSWERED && got['YES,NO'] === expYN && got['YES&NO'] === expYN && bad.status === 400;
    return { pass: ok, actual: `rows=${all.items.length} expected=${JSON.stringify(exp)} YES|NO=${expYN} got=${JSON.stringify(got)} nested=${bad.status}` };
  });

  // ---------- Utilization priority range clause ----------
  await H.check('up:rangeFilter', async () => {
    const base = '/utilization-priority?page=1&limit=100';
    const all = await tot(base);
    const q = async (f) => { const r = await g(`${base}&filters=${enc(JSON.stringify(f))}`); return r; };
    const out = {}; const viol = [];
    for (const [lbl, f, lo, hi] of [['[30,80]', { availability: [30, 80] }, 30, 80], ['[null,50]', { availability: [null, 50] }, -1, 50], ['[50,null]', { availability: [50, null] }, 50, 1e9], ['[null,null]', { availability: [null, null] }, -1, 1e9]]) {
      const r = await q(f); out[lbl] = r.status === 200 ? H.total(r.body) : 'E' + r.status + ' ' + JSON.stringify(r.body).slice(0, 120);
      for (const x of H.items(r.body)) if (x.effectiveAvailability < lo || x.effectiveAvailability > hi) viol.push(`${lbl}:${x.name}=${x.effectiveAvailability}`);
    }
    const bad = await q({ availability: [30] });
    const ok = typeof out['[30,80]'] === 'number' && out['[null,null]'] === all && out['[null,50]'] + out['[50,null]'] >= all && viol.length === 0 && bad.status === 400;
    return { pass: ok, actual: `all=${all} ${JSON.stringify(out)} violationsOnPage1=${viol.length} ${viol.slice(0, 3)} malformed=${bad.status}` };
  });

  // ---------- Projects filter helper ----------
  await H.check('proj:filters', async () => {
    const base = '/projects?page=1&limit=100';
    const all = await tot(base);
    const out = {}; const wrong = [];
    const r1 = await g(`${base}&filters=${enc(JSON.stringify({ customerSuccessManager: [TARUN] }))}`);
    out.csm = H.total(r1.body); for (const p of H.items(r1.body)) if (!(p.customerSuccessManager && p.customerSuccessManager.publicId === TARUN) && !(p.csmEmployee && p.csmEmployee.publicId === TARUN)) wrong.push('csm:' + p.name);
    const pm = H.items(r1.body)[0] && (H.items(r1.body)[0].projectManager || H.items(r1.body)[0].projectManagerEmployee);
    if (pm) { const r2 = await g(`${base}&filters=${enc(JSON.stringify({ projectManager: [pm.publicId] }))}`); out.pm = H.total(r2.body); for (const p of H.items(r2.body)) { const x = p.projectManager || p.projectManagerEmployee; if (!x || x.publicId !== pm.publicId) wrong.push('pm:' + p.name); } }
    const r3 = await g(`${base}&filters=${enc(JSON.stringify({ accountGrade: [7, 10] }))}`); out.grade7_10 = H.total(r3.body); for (const p of H.items(r3.body)) if (p.accountGrade === null || p.accountGrade < 7 || p.accountGrade > 10) wrong.push(`grade:${p.name}=${p.accountGrade}`);
    const r4 = await g(`${base}&filters=${enc(JSON.stringify({ employee: [TARUN] }))}`); out.employeeTarun = H.total(r4.body);
    const r5 = await g(`${base}&filters=${enc(JSON.stringify({ customerSuccessManager: [TARUN], accountGrade: [7, 10] }))}`); out.csmAndGrade = H.total(r5.body);
    const r6 = await g(`${base}&filters=${enc(JSON.stringify({ unknownKey: ['x'] }))}`); out.unknownKey = r6.status === 200 ? H.total(r6.body) : 'E' + r6.status;
    const ok = out.csm > 0 && out.employeeTarun > 0 && out.csmAndGrade <= Math.min(out.csm, out.grade7_10) && wrong.length === 0;
    return { pass: ok, actual: `all=${all} ${JSON.stringify(out)} wrongRows=${wrong.length} ${wrong.slice(0, 3)}` };
  });

  // ---------- Teams / Zoho team sync side-effects ----------
  await H.check('teams:noDuplicateOrNewDefaultTeams', async () => {
    const T = require(H.OUT + 'org-teams.json');
    const dupe = {}; for (const t of T) { const k = t.rm + '|' + t.dept; dupe[k] = (dupe[k] || 0) + 1; }
    const d = Object.entries(dupe).filter(([, v]) => v > 1);
    const recent = T.filter((t) => t.createdAt > '2026-10-22');
    const multi = {}; for (const t of T) for (const m of t.members) multi[m] = (multi[m] || 0) + 1;
    const m2 = Object.entries(multi).filter(([, v]) => v > 1);
    const noRm = T.filter((t) => !t.rm);
    return { pass: d.length === 0 && m2.length === 0, actual: `teams=${T.length} rm+deptDuplicates=${d.length} teamsCreatedAfter22Oct=${recent.length} employeesInMultipleTeams=${m2.length} teamsWithoutRm=${noRm.length}` };
  });

  H.done(process.env.ONLY ? 'pmo-rerun' : 'pmo');
  await b.close();
})();
