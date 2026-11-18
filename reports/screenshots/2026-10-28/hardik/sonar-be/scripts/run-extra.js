// SI4-T1563 regression — PMO extra checks: notification emit chain after deploy, allocation timeline invariants,
// scheduled-change endpoints (negative only).
const H = require('./h');
const DEPLOY = '2026-10-23T06:00:00.000Z'; // PR #565/#566 merged 23/10 ~11:00 IST

(async () => {
  const b = await H.chromium.launch();
  const { page } = await H.login(b, 'nandini.langalia');
  const g = (p) => H.get(page, p);

  await H.check('notif:emitChainAfterDeploy', async () => {
    const tickets = (await H.getAll(page, '/allocation-tickets?sortBy=createdAt&sortOrder=desc', 3)).items.filter((t) => t.createdAt > DEPLOY);
    const notifs = (await H.getAll(page, '/notifications', 15)).items;
    const after = notifs.filter((n) => n.createdAt > DEPLOY);
    const types = {}; for (const n of after) types[n.eventType] = (types[n.eventType] || 0) + 1;
    const missing = [];
    for (const t of tickets) if (!notifs.some((n) => (n.title + ' ' + (n.body || '')).includes(t.title))) missing.push(`${t.title}(${t.ticketType},${t.createdAt.slice(0, 16)})`);
    return { pass: tickets.length > 0 && missing.length === 0, actual: `ticketsCreatedAfterDeploy=${tickets.length} withoutAnyPmoNotification=${missing.length} ${missing.slice(0, 6).join(', ')}; notificationsAfterDeploy=${after.length} byType=${JSON.stringify(types)}`, data: { missing, types } };
  });

  await H.check('timeline:invariants', async () => {
    const all = await H.getAll(page, '/employees');
    let segs = 0, assignments = 0, multi = 0, pending = 0; const types = {}; const bad = [];
    for (const e of all.items) for (const p of e.projects || []) {
      const tl = p.allocationTimeline || []; if (!tl.length) continue; assignments++; if (tl.length > 1) multi++;
      for (let i = 0; i < tl.length; i++) {
        const s = tl[i]; segs++; types[s.segmentType] = (types[s.segmentType] || 0) + 1; if (s.isPending) pending++;
        if (s.effectiveTo && s.effectiveFrom > s.effectiveTo) bad.push(`${e.name}/${p.name}: from>to ${s.effectiveFrom}>${s.effectiveTo}`);
        if (i > 0 && tl[i - 1].effectiveTo && s.effectiveFrom <= tl[i - 1].effectiveTo) bad.push(`${e.name}/${p.name}: overlap ${tl[i - 1].effectiveTo}>=${s.effectiveFrom}`);
        if (i > 0 && tl[i - 1].effectiveFrom > s.effectiveFrom) bad.push(`${e.name}/${p.name}: unsorted`);
        if (s.allocationType === 'FIXED' && (typeof s.allocationPercentage !== 'number')) bad.push(`${e.name}/${p.name}: FIXED without %`);
      }
      const cur = tl.filter((s) => s.isCurrent).length; if (cur > 1) bad.push(`${e.name}/${p.name}: ${cur} current segments`);
    }
    return { pass: assignments > 0 && bad.length === 0, actual: `employees=${all.items.length} assignmentsWithTimeline=${assignments} multiSegment=${multi} segments=${segs} pendingSegments=${pending} segmentTypes=${JSON.stringify(types)} violations=${bad.length} ${bad.slice(0, 4).join(' | ')}`, data: { bad: bad.slice(0, 50) } };
  });

  await H.check('sched:negative', async () => {
    const fake = '00000000-0000-4000-8000-000000000000';
    const a = await H.api(page, 'DELETE', `/allocation-tickets/scheduled-changes/${fake}/withdraw`);
    const c = await H.api(page, 'DELETE', `/allocation-tickets/scheduled-changes/${fake}`);
    const d = await H.api(page, 'DELETE', `/allocation-tickets/scheduled-changes/not-a-uuid/withdraw`);
    return { pass: [404].includes(a.status) && [404].includes(c.status) && d.status === 400, actual: `withdraw(unknown)=${a.status} ${JSON.stringify(a.body).slice(0, 120)}; cancel(unknown)=${c.status} ${JSON.stringify(c.body).slice(0, 120)}; withdraw(bad uuid)=${d.status}` };
  });

  H.done('pmo-extra');
  await b.close();
})();
