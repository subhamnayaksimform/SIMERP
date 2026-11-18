'use strict';
/* Task ↔ tests page. Uses helpers from app.js ($, api, esc, ago, statusPill…), charts.js and suite.js (runModule). */

let linkFilter = 'all';
const EVIDENCE = { 'case-task': 'test cases written for it', tag: 'tagged in a QA report', 'file-name': 'doc/report named after it', requirement: 'requirement', manual: 'linked by hand' };

function renderLinks() {
  if (!LINKS) { $('#links-list').innerHTML = '<div class="empty"><b>No data yet</b>Press “Sync now”.</div>'; return; }
  const all = LINKS.tasks;
  // Unique cases — several tasks can share one suite (e.g. T1267 and T1446 → the same Opportunity cases).
  const unique = new Set(all.flatMap(t => t.modules.flatMap(m => m.caseIds)));
  const cases = unique.size;
  const auto = all.reduce((n, t) => n + t.automatedTotal, 0) && new Set(all.flatMap(t => t.modules.filter(m => m.automated).flatMap(m => m.caseIds))).size;
  const kpi = (l, n, d) => `<div class="stat" style="cursor:default"><span class="l">${l}</span><span class="n">${n}</span><span class="d">${d}</span></div>`;
  $('#links-kpis').innerHTML = [
    kpi('Tasks & bugs with tests', all.length, `${all.filter(t => t.kind === 'task').length} tasks · ${all.filter(t => t.kind === 'bug').length} bugs`),
    kpi('Linked test cases', cases.toLocaleString(), 'exact TC ids, de-duplicated'),
    kpi('In suites with automation', auto.toLocaleString(), `${cases ? Math.round((auto / cases) * 100) : 0}% of linked cases`),
    kpi('Sources without a task', LINKS.unmapped.filter(u => !u.mappedTo).length, 'map them below'),
  ].join('');

  const q = $('#links-q').value.trim().toLowerCase();
  const isTbt = t => t.status && /^to\s*be\s*tested$/i.test(t.status.name);
  const list = all.filter(t => {
    if (linkFilter === 'tbt' && !isTbt(t)) return false;
    if (linkFilter === 'open' && (!t.status || t.status.closed)) return false;
    if (linkFilter === 'closed' && !t.status?.closed) return false;
    if (linkFilter === 'bug' && t.kind !== 'bug') return false;
    if (linkFilter === 'mine' && !t.mine) return false;
    if (linkFilter === 'missing' && t.inZoho) return false;
    return !q || t.key.toLowerCase().includes(q) || t.title.toLowerCase().includes(q) || t.modules.some(m => m.code.toLowerCase().includes(q) || m.name.toLowerCase().includes(q));
  });

  $('#links-list').innerHTML = list.length ? list.map(t => `<article class="tcard">
      <div class="top">${keyLink(t.key)}<span data-actmini="${esc(t.key)}">${actMini(t.key)}</span><span class="pill ${t.kind === 'bug' ? 'vio' : 'acc'}">${t.kind === 'bug' ? `${Charts.bug(13)}Bug` : 'Task'}</span>${t.status ? statusPill(t.status) : '<span class="pill">not in Zoho</span>'}${t.mine ? '<span class="pill">Mine</span>' : ''}<span class="grow"></span>
        <span class="muted small">${t.caseTotal} case${t.caseTotal === 1 ? '' : 's'} · ${t.automatedTotal} automated</span></div>
      <h4>${keyLink(t.key, t.title, 'tt')}</h4>
      ${t.owners.length ? `<div class="who">${t.kind === 'bug' ? 'Assignee' : 'Owners'}: ${people(t.owners)}</div>` : ''}
      <div class="mods">${t.modules.map(m => {
        const r = m.last;
        const ring = Charts.ring(r ? [{ value: r.passed, color: 'var(--good)' }, { value: r.failed, color: 'var(--bad)' }, { value: r.total - r.passed - r.failed, color: 'var(--skip)' }] : [], r ? `${Math.round((r.passed / r.total) * 100)}%` : '—', 40, 5);
        return `<div class="mod">${ring}<div>
          <div class="nm">${esc(m.name)} <span class="muted small mono">${esc(m.code)}</span></div>
          <div class="ds">${m.caseIds.length ? `<a data-lcases="${esc(t.key)}|${esc(m.code)}">${m.caseIds.length} cases</a> · ${m.automated} automated` : 'whole module'} · ${r ? `last ${r.passed}/${r.total} passed ${ago(r.at)} · <a href="/reports/${esc(r.report)}" target="_blank" rel="noopener">report ↗</a>` : 'not run yet'}</div>
          <div class="ds">${[...new Set(m.evidence.map(e => e.kind))].map(k => EVIDENCE[k] ?? k).join(' · ')}</div></div>
          <button class="small" data-lrun="${esc(m.code)}" title="Runs the module's existing tests through the QA Workspace — no Claude">▶ Run</button></div>`;
      }).join('')}</div>
      ${t.docs.length ? `<div class="docs">Docs: ${t.docs.map(d => `<span class="mono">${esc(d.split('/').pop())}</span>`).join(' · ')}</div>` : ''}
      ${t.reports.length ? `<div class="docs">Reports: ${t.reports.slice(0, 6).map(r => `<a href="/reports/${esc(r)}" target="_blank" rel="noopener">${esc(r.replace(/^qa-report-?/, '').replace(/\.html$/, ''))}</a>`).join(' · ')}${t.reports.length > 6 ? ` · +${t.reports.length - 6} more` : ''}</div>` : ''}
      ${t.mentionedIn.length ? `<div class="docs">Also mentioned in ${t.mentionedIn.length} other doc${t.mentionedIn.length > 1 ? 's' : ''} (not counted as tests)</div>` : ''}
    </article>`).join('') : '<div class="empty"><b>Nothing matches</b></div>';

  const taskOpts = (W?.tasks ?? []).slice().sort((a, b) => Number(b.key.replace(/^SI4-T/, '')) - Number(a.key.replace(/^SI4-T/, ''))).map(t => `<option value="${esc(t.key)}">${esc(t.key)} — ${esc(t.title.slice(0, 70))}</option>`).join('');
  $('#links-unmapped-panel').classList.toggle('hidden', !LINKS.unmapped.length);
  $('#links-unmapped').innerHTML = LINKS.unmapped.map(u => `<div class="ftest">
      <span><b class="mono">${esc(u.source)}</b> · ${Object.entries(u.codes).map(([c, n]) => `${n} ${esc(c)} cases`).join(', ')}<div class="small muted">${u.files.map(f => esc(f.split('/').pop())).join(' · ')}</div></span>
      <span><select data-map="${esc(u.source)}" style="max-width:340px"><option value="">${u.mappedTo ? 'Remove link' : 'Belongs to task…'}</option>${taskOpts}</select></span>
      ${u.mappedTo ? `<span class="small" style="grid-column:1/-1;color:var(--good)">→ linked to ${esc(u.mappedTo)}</span>` : ''}
    </div>`).join('');
  $$('#links-unmapped select').forEach(sel => { const u = LINKS.unmapped.find(x => x.source === sel.dataset.map); if (u?.mappedTo) sel.value = u.mappedTo; });
}

$('#links-filter').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  linkFilter = b.dataset.f;
  $$('#links-filter button').forEach(x => x.classList.toggle('on', x === b));
  renderLinks();
});
$('#links-q').addEventListener('input', renderLinks);

$('#links-list').addEventListener('click', e => {
  const run = e.target.closest('[data-lrun]');
  if (run) { const m = SUITE?.find(x => x.code === run.dataset.lrun); return runModule(run.dataset.lrun, m?.caseCount ?? 0); }
  const c = e.target.closest("[data-lcases]");
  if (!c) return;
  const [key, code] = c.dataset.lcases.split('|');
  const m = LINKS.tasks.find(t => t.key === key)?.modules.find(x => x.code === code);
  if (!m) return;
  dialog({
    title: `${key} · ${m.name} — ${m.caseIds.length} linked cases`,
    body: `<p class="muted small">${m.automated} of these have an automated spec. Where the link comes from: ${m.evidence.map(ev => `${EVIDENCE[ev.kind] ?? ev.kind}${ev.file ? ` (<span class="mono">${esc(ev.file.split('/').pop())}</span>)` : ''}`).join(', ')}.</p>
      <div class="rows" style="max-height:420px;overflow:auto">${m.caseIds.map(id => `<div class="mono clickable-row" data-case="${esc(id)}">${esc(id)}</div>`).join('')}</div>`,
  });
});

$('#links-unmapped').addEventListener('change', async e => {
  const sel = e.target.closest('[data-map]'); if (!sel) return;
  await api('/api/task-links/source', { method: 'POST', body: JSON.stringify({ source: sel.dataset.map, key: sel.value || null }) });
  [LINKS, TBT] = await Promise.all([api('/api/task-links'), api('/api/tbt').catch(() => TBT)]);
  renderLinks(); renderWork(); renderBugs(); renderTbt();
});
