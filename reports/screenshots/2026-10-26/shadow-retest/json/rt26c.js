const H = require('./h'); const C = require('./common');
(async () => { const b = await H.chromium.launch(); const pmo = (await H.login(b, 'bhumi.chauhan')).page; const csm = (await H.login(b, 'priya.chopra')).page;
  const p = (await H.api(pmo, 'GET', '/projects/' + C.HS)).body.data; const r = p.employees.find(e => e.name === 'Urvashi Saxena' && e.allocationStartDate === '2026-11-01');
  if (r) { const c = await H.api(pmo, 'POST', '/allocation-tickets/cancel-direct-allocation', { projectAssignmentPublicId: r.assignmentPublicId, deallocationReason: 'OTHERS', deallocationReasonNote: 'QA re-test 2026-10-26 clean-up: shadow attached to a shadow (SI4-I593)' }); console.log('cancel', H.short(c, 200)); }
  const p2 = (await H.api(pmo, 'GET', '/projects/' + C.HS)).body.data;
  for (const e of p2.employees.filter(e => /Vandana|Zalak Chopra|Karan|Aarav Patel|Vihaan|Urvashi Saxena/.test(e.name))) console.log('FINAL', e.name, e.allocationPercentage, e.allocationStartDate, '->', e.allocationEndDate, e.shadowDeveloper ? 'shadowOf ' + e.shadowDeveloper.name : '');
  await b.close(); })();
