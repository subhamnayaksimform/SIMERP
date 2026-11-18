const H = require('./h'); const C = require('./common'); const SB = require('./swapbody');
const URVSAX = 'a47311de-ba03-4389-a356-e45b6651082d', VIHAAN = 'dcfc5685-8cdd-440a-af8d-f1af386032e4';
const rows = async (pg, re) => { const p = (await H.api(pg, 'GET', '/projects/' + C.HS)).body.data; return p.employees.filter(e => re.test(e.name)).map(e => `${e.name} ${e.assignmentPublicId.slice(0, 8)} ${e.allocationPercentage}% ${e.allocationStartDate}->${e.allocationEndDate}${e.shadowDeveloper ? ' shadowOf ' + e.shadowDeveloper.name : ''}`).join(' ; '); };
const fu = { deptStackPublicId: C.QASTACK, requestedAllocationStartDate: '2026-11-01', requestedAllocationType: 'FIXED', requestedAllocationPercentage: 20, isInterviewRequired: false, isClientFacing: false };
(async () => { const b = await H.chromium.launch(); const csm = (await H.login(b, 'priya.chopra')).page; const pmo = (await H.login(b, 'bhumi.chauhan')).page; const tm = (await H.login(b, 'sudhansu.patel')).page; const out = {};
  const st = async (k, pg, m, p, body) => { out[k] = await H.api(pg, m, p, body); console.log(k, H.short(out[k], 300)); return out[k]; };
  // ---- A: I593 example 1 — shadow for someone who is only a shadow (Aarav Patel), normal TM approval ----
  console.log('A start:', await rows(pmo, /Karan|Aarav Patel|Urvashi Saxena/));
  const a = await st('A-create', csm, 'POST', '/allocation-tickets/new-allocation', { projectPublicId: C.HS, description: 'QA re-test 2026-10-26 SI4-I593: shadow for a person who is only a shadow', resourceRequests: [{ ...fu, requestType: 'SHADOW_DEVELOPER', shadowForPublicId: C.AARAVP, note: 'shadow for Aarav Patel (he is a shadow, not main)' }] });
  const A = (a.body.data || [])[0]; out.A = A && { id: A.publicId, n: A.ticketNumber };
  if (A) { await st('A-prep-send', pmo, 'PATCH', `/allocation-tickets/${A.publicId}`, { departmentPublicId: C.QA, addEmployees: [{ employeePublicId: URVSAX, sequence: 0 }], activeEmployeePublicId: URVSAX });
    const d = await H.tk(pmo, A.publicId); console.log('A after send:', JSON.stringify(H.sum(d)), 'owner:', JSON.stringify(d.allocationOwner || d.owner || null).slice(0, 120));
    if (d.status !== 'APPROVED') await st('A-tm-approve', tm, 'PATCH', `/allocation-tickets/${A.publicId}/approve`, { remarks: 'QA re-test 2026-10-26 SI4-I593' });
    const d2 = H.sum(await H.tk(pmo, A.publicId)); console.log('A final ticket:', JSON.stringify(d2)); }
  console.log('A end:', await rows(pmo, /Karan|Aarav Patel|Urvashi Saxena/));
  // ---- B: shadow for someone with no row on the project (Janki Naik), PMO bypass ----
  const bb = await st('B-create', csm, 'POST', '/allocation-tickets/new-allocation', { projectPublicId: C.HS, description: 'QA re-test 2026-10-26 SI4-I593: shadow for someone not on the project', resourceRequests: [{ ...fu, requestType: 'SHADOW_DEVELOPER', shadowForPublicId: C.JANKI, note: 'shadow for Janki Naik (no row on HyperScale)' }] });
  const B = (bb.body.data || [])[0]; out.B = B && { id: B.publicId, n: B.ticketNumber };
  if (B) { await st('B-prep', pmo, 'PATCH', `/allocation-tickets/${B.publicId}`, { departmentPublicId: C.QA, addEmployees: [{ employeePublicId: VIHAAN, sequence: 0 }], activeEmployeePublicId: VIHAAN });
    await st('B-bypass', pmo, 'PATCH', `/allocation-tickets/${B.publicId}/bypass-approval`, { reason: 'QA re-test 2026-10-26 SI4-I593 variant' });
    console.log('B final ticket:', JSON.stringify(H.sum(await H.tk(pmo, B.publicId)))); }
  console.log('B end:', await rows(pmo, /Janki|Vihaan/));
  // ---- C: regression — linked swap option 2 on Vandana/Zalak, check step gating, then close main DA ----
  const sw = await st('C-swap', csm, 'POST', '/allocation-tickets/shadow-swap', SB({ flow: 'SHADOW_TO_MAIN_NEW_SHADOW', mainRow: 'd055b459-3989-46a4-8045-e8e7da6e9f29', shadowRow: '6f08b458-c2e6-4c35-bacf-d7699a1ff123', shadowEmp: C.ZALAK, tag: 'regression after T1566' }));
  const tix = (sw.body.data && (sw.body.data.tickets || sw.body.data.group && sw.body.data.group.tickets)) || []; out.C = tix.map(t => ({ id: t.publicId, n: t.ticketNumber, type: t.ticketType || t.type }));
  console.log('C tickets', JSON.stringify(out.C));
  for (const t of tix) { const d = await H.tk(pmo, t.publicId); console.log('C', JSON.stringify(H.sum(d))); }
  const ns = tix.find(t => /NA/.test(t.ticketNumber) && (t.requestType === 'SHADOW_DEVELOPER' || /shadow/i.test(JSON.stringify(t.resourceRequest || t)))) || tix[tix.length - 1];
  const promo = tix.filter(t => /NA/.test(t.ticketNumber)).find(t => t !== ns);
  if (ns) { await st('C-ns-prep', pmo, 'PATCH', `/allocation-tickets/${ns.publicId}`, { departmentPublicId: C.QA, addEmployees: [{ employeePublicId: VIHAAN, sequence: 0 }] });
    await st('C-ns-bypass-early', pmo, 'PATCH', `/allocation-tickets/${ns.publicId}/bypass-approval`, { reason: 'QA re-test 2026-10-26 gating check' }); }
  if (promo) await st('C-promo-bypass-early', pmo, 'PATCH', `/allocation-tickets/${promo.publicId}/bypass-approval`, { reason: 'QA re-test 2026-10-26 gating check' });
  const mainDA = tix.find(t => /DA/.test(t.ticketNumber));
  if (mainDA) { await st('C-close-main', csm, 'PATCH', `/allocation-tickets/${mainDA.publicId}/close`, { remarks: 'QA re-test 2026-10-26 clean-up: close main DA' });
    await pmo.waitForTimeout(3000); for (const t of tix) { const d = await H.tk(pmo, t.publicId); console.log('C after close', d.ticketNumber, d.status); } }
  console.log('C end:', await rows(pmo, /Vandana|Zalak Chopra|Vihaan/));
  H.save('rt26', out); await b.close(); })();
