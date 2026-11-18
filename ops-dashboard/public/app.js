'use strict';
/* SimERP Ops dashboard — plain JS, no build step, no external libraries. Charts: charts.js */

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const MAX_ROWS = 400;
const DAY = 86_400_000;
const SLOTS = ['var(--s1)', 'var(--s2)', 'var(--s3)', 'var(--s4)', 'var(--s5)', 'var(--s6)'];

async function api(path, opts = {}) {
  const r = await fetch(path, { ...opts, headers: opts.body ? { 'Content-Type': 'application/json' } : {} });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error || `${r.status} ${r.statusText}`);
  return j;
}

function ago(iso) {
  if (!iso) return '—';
  const s = (Date.now() - new Date(iso).getTime()) / 1000;
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.round(s / 60)} min ago`;
  if (s < 86400) return `${Math.round(s / 3600)} h ago`;
  return `${Math.round(s / 86400)} d ago`;
}
function until(iso) {
  const s = Math.max(60, (new Date(iso).getTime() - Date.now()) / 1000);
  return s < 3600 ? `${Math.round(s / 60)} min` : `${Math.floor(s / 3600)} h ${Math.round((s % 3600) / 60)} min`;
}
const when = iso => (iso ? new Date(iso).toLocaleString() : '—');
const shortDate = d => new Date(d).toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
const fmtPct = v => (v === null || v === undefined ? "—" : `${v}%`);
const statusPill = s => `<span class="pill dot" style="--c:${esc(s.color || '#94a3b8')}">${esc(s.name)}</span>`;
const people = list => (list || []).map(p => esc(p.name ?? p)).join(', ') || '<span class="muted">—</span>';
const isTbt = name => /^to\s*be\s*tested$/i.test(String(name).trim());
const stripAnsi = s => String(s ?? '').replace(/\u001b\[[0-9;]*m/g, '');

// ─── state ───

let OV = null, W = null, TBT = null, SUITE = null, LINKS = null, HS = null, SYNC_LOG = [], ACTIONS = [];
const linkOf = key => LINKS?.tasks.find(t => t.key === key);
let bugScope = 'reportedByMe', tbtFilter = 'all', tab = 'overview';
const runs = {}; // item key → { id, code, job }

async function loadAll() {
  [OV, SYNC_LOG, ACTIONS] = await Promise.all([api('/api/overview'), api('/api/sync-log'), api('/api/actions-log')]);
  [W, TBT, SUITE, LINKS, HS] = await Promise.all([api('/api/work').catch(() => null), api('/api/tbt').catch(() => null), api('/api/suite/modules').catch(() => null), api('/api/task-links').catch(() => null), api('/api/health/summary?env=dev&days=7').catch(() => null)]);
  render();
  watchRecentRuns();
}

function render() {
  renderChrome();
  renderOverview();
  renderTbt();
  renderWork();
  renderBugs();
  renderSuite();
  renderLinks();
  if (tab === 'health') renderHealthPage();
  if (tab === 'activity') renderActivity();
  if (tab === 'runs') renderRunsPage();
}

// ─── navigation ───

const TITLES = {
  overview: ['Overview', 'System health and my Zoho work at a glance'],
  tbt: ['To be tested', 'Every task and bug waiting for QA in Zoho — re-test with the existing suite'],
  suite: ['Test suite', 'Every module in the automation suite, with its latest results and trend'],
  running: ['Running', 'Everything in progress — test runs and Claude jobs, with live logs and results'],
  links: ['Task ↔ tests', 'Every past test case, report and finding, tied to the Zoho task or bug it was written for'],
  runs: ['Runs & reports', 'Pass-rate history, the tests that fail most, and every generated report'],
  work: ['My work', 'Zoho tasks where I am an owner'],
  bugs: ['Bugs', 'SimERP bugs from Zoho'],
  health: ['Health', 'API checks and the regression suite, run automatically after every deploy'],
  activity: ['Activity', 'Syncs and everything sent to Zoho from here'],
};

function showTab(name) {
  if (!TITLES[name]) name = 'overview';
  tab = name;
  $$('#nav button').forEach(b => b.classList.toggle('on', b.dataset.tab === name));
  $$('.main > section').forEach(s => s.classList.toggle('hidden', s.id !== `tab-${name}`));
  $('#page-title').innerHTML = esc(TITLES[name][0]) + (name === 'bugs' ? Charts.bug(22) : '');
  $('#page-sub').textContent = TITLES[name][1];
  if (location.hash !== `#${name}`) history.replaceState(null, '', `#${name}`);
  if (name === 'activity') renderActivity();
  if (name === 'running' && typeof renderRunning === 'function') renderRunning();
  if (name === 'runs') renderRunsPage();
  if (name === 'health') renderHealthPage();
  if (name === 'overview') requestAnimationFrame(() => { renderTbtTrend(); renderOvHealth(); });
}
$('#nav').addEventListener('click', e => { const b = e.target.closest('button'); if (b) showTab(b.dataset.tab); });

// ─── chrome: sidebar status, header, banner ───

function renderChrome() {
  const cron = OV.cron, last = OV.lastSync;
  const live = $('#live');
  const state = !last ? '' : !last.ok ? 'bad' : cron.installed ? 'ok' : 'warn';
  live.className = `live ${state}`;
  $('#live-beat').innerHTML = Charts.heartbeat(state === 'ok' ? 'ok' : state === 'bad' ? 'down' : 'idle', { width: 46, height: 16, beats: 2 });
  $('#live-text').textContent = !last ? 'Never synced' : !last.ok ? 'Last sync failed' : cron.installed ? `Live sync · next in ${until(cron.nextSync)}` : 'Auto-sync off';
  const qa = TBT?.qa;
  $('#qa-mini').innerHTML = qa ? (qa.running
    ? `QA Workspace <a href="${esc(qa.url)}" target="_blank" rel="noopener">running ↗</a>${qa.activeJob ? `<br><span class="small">Busy: ${esc(qa.activeJob.label)}</span>` : ''}`
    : 'QA Workspace off — starts when you run tests') : '';
  $('#sync-info').textContent = OV.syncedAt ? `Synced ${ago(OV.syncedAt)}` : '';
  const changed = W ? [...W.tasks.filter(t => t.mine.length), ...W.bugs].filter(isNew).length : 0;
  const si = $('#sync-info');
  const ageH = OV.syncedAt ? (Date.now() - new Date(OV.syncedAt)) / 3.6e6 : null;
  si.classList.toggle('stale', ageH !== null && ageH > 3);
  if (ageH !== null && ageH > 3) si.textContent += ' · older than 3 h';
  si.insertAdjacentHTML('beforeend', changed ? ` · <a id="mark-seen" class="chg-link" title="Hide the update dots">${changed} updated since last visit — mark seen</a>` : '');
  $('#sync-now').disabled = OV.syncing || !OV.zohoConfigured;

  const c = OV.counts;
  $('#nb-tbt').textContent = c ? c.tbtTasks + c.tbtBugs : '';
  $('#nb-work').textContent = c ? c.myOpenTasks : '';
  $('#nb-bugs').textContent = c ? c.openBugs : '';
  $('#nb-suite').textContent = SUITE ? SUITE.length : '';
  $('#nb-links').textContent = LINKS ? LINKS.tasks.length : '';

  const b = $('#banner');
  const stale = OV.syncedAt && (Date.now() - new Date(OV.syncedAt)) > 3 * 3.6e6;
  let msg = '', cls = '';
  if (!OV.zohoConfigured) { msg = 'Zoho is not configured. Fill the ZOHO_* values in .env (see .env.example).'; cls = 'bad'; }
  else if (last && !last.ok) { msg = `The last sync failed (${ago(last.at)}): ${last.error}${/refresh|oauth|token/i.test(last.error) ? ' — try: npm run zoho:reauth' : ''}`; cls = 'bad'; }
  else if (!W) msg = 'No data yet — press “Sync now”.';
  else if (stale) { msg = `Data is stale — last synced ${ago(OV.syncedAt)}. Press “Sync now”${cron.installed ? ' (the 2-hourly auto-sync may have stopped)' : ''}.`; cls = 'warn'; }
  else if (!cron.installed) msg = 'Auto-sync is off. Turn it on with: npm run ops:cron:install -- --yes';
  b.className = `banner ${cls}`;
  b.textContent = msg;
  b.classList.toggle('hidden', !msg);
}

$('#sync-now').addEventListener('click', async () => {
  const btn = $('#sync-now');
  btn.disabled = true; btn.textContent = '↻ Syncing…';
  try { await api('/api/sync', { method: 'POST' }); } catch (e) { alert(`Sync failed: ${e.message}`); }
  btn.textContent = '↻ Sync now';
  await loadAll();
});

const THEMES = ['dark', 'light', 'orange', 'green', 'purple'];
function setTheme(t) {
  if (!THEMES.includes(t)) t = 'dark';
  document.documentElement.dataset.theme = t;
  $('#theme').value = t;
  try { localStorage.setItem('ops-theme', t); } catch { /* storage blocked */ }
}
$('#theme').addEventListener('change', e => { setTheme(e.target.value); if (tab === 'overview') renderOverview(); });
function setCalm(on) {
  document.documentElement.toggleAttribute('data-calm', on);
  const b = $('#calm'); if (b) { b.setAttribute('aria-pressed', on); b.textContent = on ? '😌 Calm: on' : '😌 Calm'; }
  try { localStorage.setItem('ops-calm', on ? '1' : '0'); } catch { /* storage blocked */ }
}
$('#calm').addEventListener('click', () => setCalm(!document.documentElement.hasAttribute('data-calm')));
document.addEventListener('click', e => { if (e.target.id === 'mark-seen') { prevVisit = new Date().toISOString(); markSeen(); render(); } });
let calmSaved = false;
try { calmSaved = localStorage.getItem('ops-calm') === '1'; } catch { /* storage blocked */ }
setCalm(calmSaved);
// Blue neon (dark) is the default; the chosen theme is remembered.
let savedTheme = 'dark';
try { savedTheme = localStorage.getItem('ops-theme') || 'dark'; } catch { /* storage blocked */ }
setTheme(savedTheme);

// ─── overview ───

let tbtRange = 7;

/** Open bugs on each of the last `days` days, rebuilt from created/closed dates. */
function openBugSeries(days) {
  const out = [];
  for (let d = days - 1; d >= 0; d--) {
    const t = Date.now() - d * DAY;
    out.push(W.bugs.filter(b => new Date(b.createdAt).getTime() <= t && (!b.closedAt || new Date(b.closedAt).getTime() > t)).length);
  }
  return out;
}

/** Jump to the Bugs page with filters applied. */
function goBugs({ scope = 'all', status = '', assignee = '', showClosed = false } = {}) {
  setBugScope(scope);
  renderBugs();
  $('#bug-status').value = status;
  $('#bug-asg').value = assignee;
  $('#bug-hide-closed').checked = !showClosed;
  renderBugs();
  showTab('bugs');
}

function renderOverview() {
  const c = OV.counts;
  if (!c || !W) return;
  const tbtHist = SYNC_LOG.filter(e => e.ok && e.counts?.tbtTasks !== undefined).slice(0, 30).reverse().map(e => e.counts.tbtTasks + e.counts.tbtBugs);
  const tile = (go, label, n, detail, spark = '', cls = '') => `<button class="stat" data-go="${go}"><span class="l">${label}</span><span class="n ${cls}">${n}</span><span class="d">${detail}</span>${spark}</button>`;
  const lastRun = HS?.runs?.[0];
  const probe = HS?.probes?.[HS.probes.length - 1];
  const healthState = !probe ? ['—', 'no probe yet', ''] : !probe.up ? ['Down', 'API not answering', 'bad'] : lastRun && !lastRun.ok ? ['Failing', `last run ${ago(lastRun.finishedAt)}`, 'bad'] : lastRun ? ['Healthy', `${probe.version} · last run ${ago(lastRun.finishedAt)}`, 'good'] : ['Up', probe.version, 'good'];
  $('#stats').innerHTML = [
    tile('tbt', 'To be tested', c.tbtTasks + c.tbtBugs, `${c.tbtTasks} tasks · ${c.tbtBugs} issues`, Charts.spark(tbtHist, 'var(--accent)')),
    tile('work', 'My open tasks', c.myOpenTasks, `${W.tasks.filter(t => t.mine.length).length} assigned in total`),
    tile('bugs', 'Open bugs', c.openBugs, `${c.bugsReportedByMeOpen} reported by me · ${c.bugsAssignedToMeOpen} assigned to me`, Charts.spark(openBugSeries(30), 'var(--s1)') + `<span class="crawler">${Charts.bug(14)}</span>`),
    tile('health', 'Health report', healthState[0], healthState[1], Charts.heartbeat(!probe ? 'down' : !probe.up ? 'down' : healthState[2] === 'bad' ? 'bad' : 'ok', { width: 160, height: 30 }), healthState[2]),
    SUITE ? (() => {
      const healthy = SUITE.filter(m => (m.lastRun?.rate ?? -1) >= 90).length;
      return tile('suite', 'Healthy test modules', `${healthy}/${SUITE.length}`, `${SUITE.reduce((a, m) => a + m.caseCount, 0).toLocaleString()} cases in the suite`);
    })() : '',
  ].join('');
  Charts.countUp($('#stats'));

  renderTbtTrend();
  renderOvHealth();

  const open = W.bugs.filter(b => !b.status.closed);
  const order = W.bugFields.statuses.filter(s => !s.closed);
  const byStatus = order.map((s, i) => ({ id: s.id, name: s.name, value: open.filter(b => b.status.id === s.id).length, color: SLOTS[i] ?? 'var(--skip)' }));
  const segs = byStatus.filter(s => s.value > 0);
  if (segs.length) Charts.donut($('#donut'), { segments: segs, centerLabel: 'open bugs', onClick: s => goBugs({ status: s.id }) });
  else $('#donut').innerHTML = '<div class="empty"><b>No open bugs</b>Nice.</div>';

  const byPerson = new Map();
  for (const b of open) { const n = b.assignee?.name ?? 'Unassigned'; byPerson.set(n, (byPerson.get(n) ?? 0) + 1); }
  let rows = [...byPerson].map(([name, value]) => ({ name, value, onClick: () => goBugs({ assignee: name }) })).sort((a, b) => b.value - a.value);
  if (rows.length > 8) rows = [...rows.slice(0, 7), { name: 'Others', value: rows.slice(7).reduce((a, r) => a + r.value, 0), note: `${rows.length - 7} people`, onClick: () => goBugs({}) }];
  Charts.bars($('#bars'), { rows, unit: ' open' });

  renderReadiness();
  renderFeed();
}

/** Pending To-be-tested tasks and issues over time — one point per Zoho sync, plus "now". */
function renderTbtTrend() {
  if (!W || $('#tab-overview').classList.contains('hidden')) return;
  const since = Date.now() - tbtRange * DAY;
  const pts = SYNC_LOG.filter(e => e.ok && e.counts?.tbtTasks !== undefined && new Date(e.at).getTime() >= since).reverse()
    .map(e => ({ at: e.at, tasks: e.counts.tbtTasks, bugs: e.counts.tbtBugs }));
  const series = [
    { name: 'Tasks', color: 'var(--s1)', values: pts.map(p => p.tasks) },
    { name: 'Issues', color: 'var(--s2)', values: pts.map(p => p.bugs) },
  ];
  $('#tbt-legend').innerHTML = series.map(s => `<span><i style="background:${s.color}"></i>${s.name} <b>${s.values[s.values.length - 1] ?? 0}</b></span>`).join('');
  if (pts.length < 2) $('#tbt-trend').innerHTML = '<div class="empty"><b>Building the trend</b>A point is added at every Zoho sync (every 2 hours once auto-sync is on).</div>';
  else Charts.area($('#tbt-trend'), {
    labels: pts.map(p => p.at), series, height: 200,
    fmtLabel: (t, long) => long ? when(t) : tbtRange <= 1 ? new Date(t).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }) : shortDate(t),
    onClick: () => showTab('tbt'),
  });
  const items = (TBT?.items ?? []).slice().sort((a, b) => (a.updatedAt || '').localeCompare(b.updatedAt || '')).slice(0, 5);
  $('#tbt-oldest').innerHTML = items.map(i => `<div class="clickable-row" data-detail="${i.kind}:${esc(i.id)}" style="padding:7px 6px"><span class="mono">${esc(i.key)}</span> <span class="pill ${i.kind === 'bug' ? 'vio' : 'acc'}" style="margin:0 4px">${i.kind === 'bug' ? `${Charts.bug(12)}Issue` : 'Task'}</span>${esc(i.title.slice(0, 60))}<span class="muted small"> · ${ago(i.updatedAt)}</span></div>`).join('') || '<p class="muted small">Nothing waiting.</p>';
}
$('#tbt-range').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  tbtRange = Number(b.dataset.r);
  $$('#tbt-range button').forEach(x => x.classList.toggle('on', x === b));
  renderTbtTrend();
});

/** System health on the overview: pass rate per health run + live probe KPIs. */
function renderOvHealth() {
  if (!HS || $('#tab-overview').classList.contains('hidden')) return;
  const runs = HS.runs.slice().reverse();
  const rate = r => { const t = (r.api?.total ?? 0) + (r.regression?.total ?? 0) - (r.api?.skipped ?? 0) - (r.regression?.skipped ?? 0); const p = (r.api?.passed ?? 0) + (r.api?.flaky ?? 0) + (r.regression?.passed ?? 0) + (r.regression?.flaky ?? 0); return t ? Math.round((p / t) * 100) : 0; };
  $('#ovh-legend').innerHTML = '<span><i style="background:var(--good)"></i>Pass rate % per health run</span>';
  if (runs.length < 2) $('#ovh-chart').innerHTML = `<div class="empty"><b>${runs.length ? `${rate(runs[0])}% passed in the only run so far` : 'No health runs yet'}</b>A run starts automatically after every deploy.</div>`;
  else Charts.area($('#ovh-chart'), {
    labels: runs.map(r => r.finishedAt), height: 200,
    series: [{ name: 'Pass rate %', color: 'var(--good)', values: runs.map(rate) }], maxY: 100,
    fmtLabel: (t, long) => { if (!long) return shortDate(t); const r = runs.find(x => x.finishedAt === t); return `${when(t)} · ${r.version}`; },
    onClick: i => { hSelected = runs[i].id; showTab('health'); },
  });
  const probes = HS.probes.filter(p => p.ms !== null);
  const avail = HS.probes.length ? Math.round((HS.probes.filter(p => p.up).length / HS.probes.length) * 1000) / 10 : null;
  const last = HS.runs[0], probe = HS.probes[HS.probes.length - 1];
  const k = (l, v, cls = '', extra = '') => `<div class="clickable-row" data-goto="health"><div class="l">${l}</div><div class="v ${cls}">${v}</div>${extra}</div>`;
  $('#ovh-kpis').innerHTML = [
    k('Version', esc(probe?.version || '—')),
    k('API checks', last?.api ? `${last.api.passed + last.api.flaky}/${last.api.total}` : '—', last?.api ? (last.api.failed ? 'bad' : 'good') : ''),
    k('Availability', avail === null ? '—' : `${avail}%`, avail !== null && avail < 99 ? 'bad' : 'good'),
    k('Response', probe?.ms ? `${probe.ms} ms` : '—', '', Charts.spark(probes.slice(-60).map(p => p.ms), 'var(--s1)')),
  ].join('');
  const lat = probes.slice(-150);
  if (lat.length >= 2) Charts.area($('#ovh-latency'), {
    labels: lat.map(p => p.at), height: 120, series: [{ name: 'API response ms', color: 'var(--s1)', values: lat.map(p => p.ms) }],
    fmtLabel: (t, long) => long ? when(t) : new Date(t).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }),
    onClick: () => showTab('health'),
  });
  else $('#ovh-latency').innerHTML = '<p class="muted small">Response times appear as the deploy watcher probes (every 10 minutes).</p>';
  $('#ovh-sub').textContent = last ? `${last.ok ? 'Healthy' : 'Failing'} · last run ${ago(last.finishedAt)} · ${HS.runs.length} runs` : 'API checks + regression suite per health run';
}

let resizeT;
window.addEventListener('resize', () => { clearTimeout(resizeT); resizeT = setTimeout(() => { renderTbtTrend(); renderOvHealth(); }, 150); });

$('#stats').addEventListener('click', e => {
  const b = e.target.closest('[data-go]'); if (!b) return;
  if (b.dataset.go === 'bugs') return goBugs({});
  showTab(b.dataset.go);
});
document.addEventListener('click', e => { const g = e.target.closest('[data-goto]'); if (g) showTab(g.dataset.goto); });

function renderReadiness() {
  if (!TBT) { $('#readiness').innerHTML = '<p class="muted small">Sync first.</p>'; return; }
  const items = TBT.items, total = items.length;
  const linked = items.filter(i => i.modules.length).length;
  const ran = items.filter(i => i.modules.some(m => m.lastRun || m.taskLast));
  const passing = ran.filter(i => i.modules.every(m => !(m.taskLast ?? m.lastRun) || (m.taskLast ?? m.lastRun).failed === 0)).length;
  const pct = (a, b) => (b ? `${Math.round((a / b) * 100)}%` : '—');
  $('#readiness').innerHTML = `<div class="rings">
    <div class="ring clickable-row" data-tbtfilter="unlinked">${Charts.ring([{ value: linked, color: 'var(--accent)' }, { value: total - linked, color: 'var(--grid)' }], pct(linked, total))}<div class="l"><b>${linked}/${total}</b>have tests linked</div></div>
    <div class="ring clickable-row" data-tbtfilter="all">${Charts.ring([{ value: passing, color: 'var(--good)' }, { value: ran.length - passing, color: 'var(--bad)' }], pct(passing, ran.length))}<div class="l"><b>${passing}/${ran.length}</b>last run all passed</div></div>
  </div><button class="small" style="margin-top:14px;width:100%" data-goto="tbt">Open the To-be-tested queue →</button>`;
}
$('#readiness').addEventListener('click', e => {
  const r = e.target.closest('[data-tbtfilter]'); if (!r) return;
  tbtFilter = r.dataset.tbtfilter;
  $$('#tbt-filter button').forEach(x => x.classList.toggle('on', x.dataset.f === tbtFilter));
  renderTbt(); showTab('tbt');
});

function renderFeed() {
  const items = [];
  const known = key => W?.tasks.find(t => t.key === key) ? 'task' : W?.bugs.find(b => b.key === key) ? 'bug' : null;
  const idOf = (kind, key) => (kind === 'task' ? W.tasks : W.bugs).find(x => x.key === key)?.id;
  for (const entry of SYNC_LOG.filter(x => x.ok).slice(0, 40)) {
    for (const ch of entry.changes || []) {
      if (!(ch.mine || (ch.change === 'status' && isTbt(ch.to)) || ch.change === 'new')) continue;
      const txt = ch.change === 'status' ? `${esc(ch.from)} → <b>${esc(ch.to)}</b>` : ch.change === 'new' ? `new ${ch.kind}` : ch.change === 'assigned-to-me' ? '<b>assigned to me</b>' : 'removed';
      const kind = known(ch.key);
      items.push({ at: entry.at, ico: isTbt(ch.to) ? '✓' : ch.change === 'new' ? '+' : '↻', cls: isTbt(ch.to) ? 'acc' : '', attr: kind ? `data-detail="${kind}:${esc(idOf(kind, ch.key))}"` : '', html: `<span class="mono">${esc(ch.key)}</span> ${txt}<div class="meta">${esc(ch.title)}</div>` });
    }
  }
  for (const a of ACTIONS.slice(0, 30)) items.push({ at: a.at, ico: a.ok ? '↑' : '!', cls: a.ok ? 'good' : 'bad', attr: 'data-goto="activity"', html: `${a.ok ? 'Sent' : 'Failed'}: <b>${esc(a.action)}</b> ${esc(a.target)}${a.ok ? '' : `<div class="meta">${esc(a.error)}</div>`}` });
  for (const i of TBT?.items ?? []) for (const r of i.runs.slice(0, 3)) items.push({ at: r.at, ico: '▶', cls: 'acc', attr: 'data-goto="tbt"', html: `${r.kind === 'generate' ? 'Tests generated for' : 'Re-test started:'} <span class="mono">${esc(i.key)}</span> · ${esc(r.code)}` });
  for (const r of HS?.runs?.slice(0, 10) ?? []) items.push({ at: r.finishedAt, ico: r.ok ? '♥' : '!', cls: r.ok ? 'good' : 'bad', attr: 'data-goto="health"', html: `Health run <b>${r.ok ? 'healthy' : 'failing'}</b> · ${esc(r.version)} · ${esc(r.reason)}` });
  for (const d of HS?.deploys?.slice(0, 10) ?? []) items.push({ at: d.at, ico: '⇪', cls: 'acc', attr: 'data-goto="health"', html: `Deploy detected · ${esc(d.kinds.join(' + '))} ${esc(d.toVersion)}` });
  items.sort((a, b) => b.at.localeCompare(a.at));
  $('#feed').innerHTML = items.length
    ? items.slice(0, 40).map(i => `<div class="fi clickable" ${i.attr}><span class="ico ${i.cls}">${i.ico}</span><div>${i.html}<div class="meta">${ago(i.at)}</div></div></div>`).join('')
    : '<div class="empty"><b>Quiet so far</b>Changes appear here after the next syncs.</div>';
}

// ─── to be tested ───

$('#tbt-filter').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  tbtFilter = b.dataset.f;
  $$('#tbt-filter button').forEach(x => x.classList.toggle('on', x === b));
  renderTbt();
});
$('#tbt-q').addEventListener('input', () => renderTbt());

function moduleChip(item, m) {
  // Prefer the item's own cases (task-links index) over the whole module's last run.
  const own = m.taskLast;
  const r = own ? { ...own, flaky: 0, skipped: own.total - own.passed - own.failed } : m.lastRun;
  const ring = Charts.ring(r ? [{ value: r.passed + r.flaky, color: 'var(--good)' }, { value: r.failed, color: 'var(--bad)' }, { value: r.skipped, color: 'var(--skip)' }] : [], r ? `${Math.round(((r.passed + r.flaky) / r.total) * 100)}%` : '—', 40, 5);
  return `<div class="mod">${ring}<div><div class="nm">${esc(m.name)} <span class="muted small mono">${esc(m.code)}</span></div>
    <div class="ds">${m.taskCases ? `<b>${m.taskCases} linked cases</b> of ${m.caseCount}` : `${m.caseCount} cases`} · ${r ? `last run ${ago(r.at)}: ${r.passed}/${r.total} passed` : 'never run'} · ${({ cases: 'its own test cases', manual: 'linked by you', requirement: 'from requirement', 'report-tag': 'tagged in a QA report', mentioned: 'found in docs' })[m.how] ?? m.how}</div></div>
    <button class="small primary" data-run="${esc(item.key)}" data-code="${esc(m.code)}" data-cases="${m.caseCount}">▶ Run</button>
    ${m.how === 'manual' ? `<button class="x" title="Unlink" data-unlink="${esc(item.id)}" data-code="${esc(m.code)}">✕</button>` : ''}</div>`;
}

function renderRun(item) {
  const r = runs[item.key];
  if (!r) return '';
  const j = r.job;
  if (r.kind === 'generate') {
    if (!j || j.status === 'running') return `<div class="run"><b>✨ Claude is writing the test suite…</b> <span class="muted small">${esc(j?.progress?.current ?? 'starting')}</span><div class="bar"><i></i></div><div class="small muted" style="margin-top:6px">Runs in the QA Workspace and takes several minutes — you can leave this page.</div></div>`;
    return `<div class="run"><b>${j.status === 'done' || j.status === 'passed' ? '✓ Test suite generated' : j.status === 'stopped' ? 'Generation stopped' : '✗ Generation failed'}</b> <span class="muted small">· ${ago(j.finishedAt)}</span>${r.linked?.length ? ` · linked <b>${r.linked.map(esc).join(', ')}</b> — press ▶ Run on it` : ''}${j.status === 'failed' && j.progress?.attention ? `<div class="small" style="color:var(--bad);margin-top:4px">${esc(j.progress.attention)}</div>` : ''}</div>`;
  }
  if (!j || j.status === 'running') {
    return `<div class="run"><b>Running ${esc(r.code)} tests…</b> <span class="muted small">${esc(j?.progress?.current ?? 'starting')}</span>
      ${Charts.heartbeat('busy', { width: 600, height: 26, beats: 6 }).replace('class="hb ', 'class="hb hb-progress ')}<div class="small muted" style="margin-top:6px">Runs in the background — you can leave this page.</div></div>`;
  }
  const s = j.stats?.[r.code];
  const fails = (j.failures ?? []).slice(0, 12);
  return `<div class="run"><b>${j.status === 'passed' ? '✓ Passed' : j.status === 'stopped' ? 'Stopped' : '✗ Failed'}</b> · ${esc(r.code)} ${s ? `· ${s.passed}/${s.total} passed${s.failed ? `, ${s.failed} failed` : ''}${s.flaky ? `, ${s.flaky} flaky` : ''}` : ''} <span class="muted small">· ${ago(j.finishedAt)}</span>
    ${TBT.qa.running ? ` · <a href="${esc(TBT.qa.url)}/#runs" target="_blank" rel="noopener">QA Workspace runs ↗</a>` : ''}
    ${fails.map((f, k) => `<div class="fail"><div class="grow"><div>${esc(f.id ?? '')} ${esc(f.title)}</div><div class="e">${esc(stripAnsi(f.error).split('\n').slice(0, 3).join('\n'))}</div></div><button class="small bad" data-report="${esc(item.key)}" data-fail="${k}">Report bug</button></div>`).join('')}</div>`;
}

function renderTbt() {
  if (!TBT) { $('#tbt-list').innerHTML = '<div class="empty"><b>No data yet</b>Press “Sync now”.</div>'; return; }
  const q = $('#tbt-q').value.trim().toLowerCase();
  const items = TBT.items.filter(i => (tbtFilter === 'all' || (tbtFilter === 'mine' ? i.mine : tbtFilter === 'unlinked' ? !i.modules.length : i.kind === tbtFilter))
    && (!q || i.key.toLowerCase().includes(q) || i.title.toLowerCase().includes(q)));
  const qaFiles = p => (TBT.qa.running ? `<a href="${esc(TBT.qa.url)}/files/${esc(p)}" target="_blank" rel="noopener">${esc(p.split('/').pop())}</a>` : `<span class="mono">${esc(p.split('/').pop())}</span>`);
  $('#tbt-list').innerHTML = items.length ? items.map(i => `<article class="tcard" data-key="${esc(i.key)}">
      <div class="top">${keyLink(i.key)}<span data-actmini="${esc(i.key)}">${actMini(i.key)}</span><span class="pill ${i.kind === 'bug' ? 'vio' : 'acc'}">${i.kind === 'bug' ? `${Charts.bug(13)}Bug` : 'Task'}</span>${statusPill(i.status)}${i.mine ? '<span class="pill">Mine</span>' : ''}<span class="grow"></span><span class="muted small">updated ${ago(i.updatedAt)}</span></div>
      <h4>${keyLink(i.key, i.title, 'tt')}</h4>
      <div class="who">${i.kind === 'bug' ? 'Assignee' : 'Owners'}: ${people(i.people)}${i.reporter ? ` · ${i.kind === 'bug' ? 'Reported' : 'Created'} by ${esc(i.reporter)}` : ''}</div>
      ${i.modules.length ? `<div class="mods">${i.modules.map(m => moduleChip(i, m)).join('')}</div>` : ''}
      ${i.suggested.length ? `<div class="sugg">Suggested tests: ${i.suggested.map(s => `<button data-link="${esc(i.id)}" data-code="${esc(s.code)}">+ ${esc(s.name)}</button>`).join('')}</div>` : ''}
      ${!i.modules.length ? (i.kind === 'task'
        ? `<div class="gen"><span class="t"><b>No test suite for this task yet.</b> Generate one with the AI pipeline (requirement → test cases → automation). Uses Claude.</span><button class="small primary" data-generate="${esc(i.key)}">✨ Generate tests with Claude</button></div>`
        : '<div class="sugg">No tests linked — link a module below, or report a new bug if it still fails.</div>') : ''}
      ${i.docs.length ? `<div class="docs">Docs: ${i.docs.map(qaFiles).join(' · ')}</div>` : ''}
      ${renderRun(i)}
      <div data-actbox="${esc(i.key)}">${actBox(i.key)}</div>
      <div class="acts">
        <select data-linkpick="${esc(i.id)}"><option value="">+ Link tests…</option>${TBT.modules.filter(m => !i.modules.some(x => x.code === m.code)).map(m => `<option value="${esc(m.code)}">${esc(m.name)} (${m.caseCount})</option>`).join('')}</select>
        <span class="grow"></span>
        <button class="small good" data-verdict="pass" data-key="${esc(i.key)}">✓ ${i.kind === 'task' ? 'QA Approve' : 'Close'}</button>
        <button class="small bad" data-verdict="fail" data-key="${esc(i.key)}">✗ ${i.kind === 'task' ? 'Send back' : 'Reopen'}</button>
        <button class="small" data-report="${esc(i.key)}">Report bug</button>
        <a class="small" href="${esc(i.url)}" target="_blank" rel="noopener">Zoho ↗</a>
      </div></article>`).join('')
    : '<div class="empty"><b>Nothing here</b>No to-be-tested items match this filter.</div>';
}

async function reloadTbt() { TBT = await api('/api/tbt'); renderTbt(); renderReadiness(); renderChrome(); }

$('#tbt-list').addEventListener('change', async e => {
  const sel = e.target.closest('[data-linkpick]');
  if (!sel || !sel.value) return;
  await api(`/api/tbt/${sel.dataset.linkpick}/links`, { method: 'POST', body: JSON.stringify({ code: sel.value }) });
  await reloadTbt();
});

$('#tbt-list').addEventListener('click', async e => {
  const t = e.target.closest('button');
  if (!t) return;
  const item = TBT.items.find(i => i.key === (t.dataset.key ?? t.dataset.run ?? t.dataset.report ?? t.dataset.generate));

  if (t.dataset.link || t.dataset.unlink) {
    await api(`/api/tbt/${t.dataset.link ?? t.dataset.unlink}/links`, { method: 'POST', body: JSON.stringify({ code: t.dataset.code, remove: Boolean(t.dataset.unlink) }) });
    return reloadTbt();
  }

  if (t.dataset.run) {
    // Existing tests run without Claude: this item's own linked cases, or the whole module, by test type.
    const code = t.dataset.code;
    const own = linkOf(t.dataset.run)?.modules.find(m => m.code === code)?.caseIds ?? [];
    return testRunDialog({ name: `${t.dataset.run} · ${code}`, key: t.dataset.run, code, caseIds: own });
  }

  if (t.dataset.generate && item) return pipelineDialog(item);

  if (t.dataset.verdict && item) return verdict(item, t.dataset.verdict);

  if (t.dataset.report && item) {
    const r = runs[item.key];
    const f = t.dataset.fail !== undefined ? r?.job?.failures?.[Number(t.dataset.fail)] : null;
    return newBugDialog(f ? failureBug(item, r, f) : { title: `[${item.key} re-test] `, description: `Found while re-testing ${item.key} — ${item.title}\n\nSteps to reproduce:\n1. \n\nExpected:\n\nActual:\n\nEnvironment: ${OV.baseUrl ?? 'dev'}` });
  }
});

/** Bug text for a failed test — a fixed template filled from the run (no AI). */
function failureBug(item, r, f) {
  const err = stripAnsi(f.error).split('\n').slice(0, 15).join('\n').trim();
  return {
    title: `[${item.key} re-test] ${f.id ? `${f.id} — ` : ''}${f.title}`.slice(0, 250),
    description: [
      `Found while re-testing ${item.key} — ${item.title}`,
      `Module: ${r.code} · Test: ${f.id ?? ''} ${f.title}`,
      `Spec: ${f.file ?? ''}`,
      `Environment: ${OV.baseUrl ?? 'dev'}`,
      `Run: QA Workspace run ${r.job.id} on ${when(r.job.finishedAt)}`,
      '',
      'Steps to reproduce:',
      `1. npx playwright test --config=tests/playwright.config.ts --project=chromium --grep "${f.id ?? f.title}"`,
      '2. (add the manual steps)',
      '',
      'Expected: the test passes',
      'Actual: the test fails with the error below',
      '',
      'Error:',
      err,
    ].join('\n'),
  };
}

async function pollRun(key) {
  const r = runs[key];
  if (!r || r.polling) return;
  r.polling = true;
  try {
    while (true) {
      r.job = await api(`/api/qa/job/${r.id}`).catch(() => r.job);
      if (tab === 'tbt') renderTbt();
      if (r.job && r.job.status !== 'running') break;
      await new Promise(res => setTimeout(res, 4000));
    }
    if (r.kind === 'generate' && r.job && r.job.status !== 'stopped' && r.job.status !== 'failed') {
      const item = TBT.items.find(i => i.key === key);
      if (item) r.linked = (await api(`/api/tbt/${item.id}/autolink`, { method: 'POST', body: JSON.stringify({ key, since: r.job.startedAt }) }).catch(() => ({ codes: [] }))).codes;
      SUITE = await api('/api/suite/modules').catch(() => SUITE);
    }
    TBT = await api('/api/tbt').catch(() => TBT);
    renderTbt(); renderReadiness(); renderFeed();
  } finally { r.polling = false; }
}

/** Show results of runs started from here in the last day (and keep polling ones still running). */
function watchRecentRuns() {
  for (const i of TBT?.items ?? []) {
    const last = i.runs[0];
    if (!last || runs[i.key] || Date.now() - new Date(last.at).getTime() > DAY) continue;
    runs[i.key] = { id: last.historyId, code: last.code, kind: last.kind ?? 'run', job: null };
    pollRun(i.key);
  }
}

/** Tasks with no suite: hand them to the QA Workspace AI pipeline (the only Claude-backed action here). */
async function generateSuite(item) {
  const ok = await dialog({
    title: `Generate tests for ${item.key} with Claude?`,
    ok: '✨ Generate',
    body: `<p><b>${esc(item.title)}</b></p>
      <p>The QA Workspace pipeline reads the Zoho task, writes structured requirements, then test cases (<code>TC-…</code>), and optionally the Playwright automation. It uses <b>your Claude login</b> on this machine and takes several minutes.</p>
      <label class="chk" style="margin:10px 0"><input type="checkbox" id="gen-auto" checked> Also generate Playwright automation (needed for ▶ Run)</label>
      <div id="gen-check" class="run"><b>Checking Claude…</b>${Charts.heartbeat('busy', { width: 600, height: 26, beats: 6 }).replace('class="hb ', 'class="hb hb-progress ')}</div>`,
    onOpen: async () => {
      const okBtn = $('#dlg-ok');
      okBtn.disabled = true;
      try {
        const s = await api('/api/qa/setup');
        $('#gen-check').innerHTML = s.claude ? `<b style="color:var(--good)">✓ Claude is available</b> <span class="muted small">— ${esc(s.detail)}</span>` : `<b style="color:var(--bad)">✗ Claude is not available</b><div class="small muted">${esc(s.detail)} ${esc(s.fix ?? '')}</div>`;
        okBtn.disabled = !s.claude;
      } catch (e) { $('#gen-check').innerHTML = `<b style="color:var(--bad)">Could not check:</b> ${esc(e.message)}`; }
    },
    onOk: async () => {
      const job = await api('/api/qa/generate', { method: 'POST', body: JSON.stringify({ key: item.key, withAutomation: $('#gen-auto').checked }) });
      runs[item.key] = { id: job.id, code: 'NEW', kind: 'generate', job: null };
    },
  });
  if (ok) { renderTbt(); pollRun(item.key); }
}

async function verdict(item, v) {
  const list = item.kind === 'task' ? W.taskStatuses : W.bugFields.statuses;
  const pick = re => list.find(s => re.test(s.name));
  const to = v === 'pass'
    ? (item.kind === 'task' ? pick(/qa\s*approved/i) ?? pick(/^closed$/i) : pick(/^closed$/i))
    : (item.kind === 'task' ? pick(/in\s*progress/i) ?? pick(/^open$/i) : pick(/^reopen$/i) ?? pick(/^open$/i));
  if (!to) return alert('No matching status found in Zoho for this action.');
  const payload = item.kind === 'task' ? { custom_status: to.id } : { status_id: to.id };
  const ok = await confirmSend(`Change <b>${esc(item.key)}</b> status: ${esc(item.status.name)} → <b>${esc(to.name)}</b>`, 'POST', `/api/${item.kind}s/${item.id}`, payload, { key: item.key });
  if (!ok) return;
  const src = (item.kind === 'task' ? W.tasks : W.bugs).find(x => x.id === item.id);
  if (src) src.status = to;
  await reloadTbt();
  renderOverview();
}

// ─── shared list helpers ───

function fillSelect(sel, options) {
  const current = sel.value;
  sel.innerHTML = sel.options[0].outerHTML + options.map(o => `<option value="${esc(o.id)}">${esc(o.name)}</option>`).join('');
  sel.value = current;
}
const textMatch = (item, q) => !q || item.key.toLowerCase().includes(q) || item.title.toLowerCase().includes(q);
// ─── "what changed" — items updated since the previous visit get a dot ───
let prevVisit = '';
try { prevVisit = localStorage.getItem('ops-last-visit') || ''; } catch { /* storage blocked */ }
const markSeen = () => { try { localStorage.setItem('ops-last-visit', new Date().toISOString()); } catch { /* storage blocked */ } };
window.addEventListener('pagehide', markSeen);
document.addEventListener('visibilitychange', () => { if (document.hidden) markSeen(); });
const isNew = x => !!prevVisit && !!x.updatedAt && x.updatedAt > prevVisit;
const newDot = x => (isNew(x) ? '<span class="chg" title="Updated since your last visit"></span>' : '');
const byUpdated = (a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || '');

function statusSelect(kind, item, statuses) {
  return `<select data-kind="${kind}" data-id="${esc(item.id)}" data-key="${esc(item.key)}" data-current="${esc(item.status.id)}">${
    statuses.map(s => `<option value="${esc(s.id)}"${s.id === item.status.id ? ' selected' : ''}>${esc(s.name)}</option>`).join('')
  }${statuses.some(s => s.id === item.status.id) ? '' : `<option value="${esc(item.status.id)}" selected>${esc(item.status.name)}</option>`}</select>`;
}

/** "Tests" cell for a task/bug row: its linked cases (task-links index). */
function testsCell(key) {
  const l = linkOf(key);
  if (!l) return '<span class="muted small">—</span>';
  const last = l.modules.map(m => m.last).filter(Boolean).sort((a, b) => b.at.localeCompare(a.at))[0];
  return `<a class="small" data-golink="${esc(key)}">${l.caseTotal ? `${l.caseTotal} cases` : `${l.modules.length} module${l.modules.length === 1 ? '' : 's'}`}</a>${last ? ` <span class="small" style="color:${last.failed ? 'var(--bad)' : 'var(--good)'}">${last.passed}/${last.total}</span>` : ''}`;
}
document.addEventListener('click', e => { const a = e.target.closest('[data-golink]'); if (!a) return; $('#links-q').value = a.dataset.golink; linkFilter = 'all'; $$('#links-filter button').forEach(x => x.classList.toggle('on', x.dataset.f === 'all')); renderLinks(); showTab('links'); });

// ─── my work ───

function renderWork() {
  if (!W) { $('#work-table').innerHTML = '<tr><td class="empty">No data yet.</td></tr>'; return; }
  fillSelect($('#work-status'), W.taskStatuses);
  const q = $('#work-q').value.trim().toLowerCase();
  const st = $('#work-status').value;
  const hideClosed = $('#work-hide-closed').checked;
  const rows = W.tasks.filter(t => t.mine.length && textMatch(t, q) && (!st || t.status.id === st) && (!hideClosed || !t.status.closed)).sort(byUpdated);
  const h = v => (v === null || v === undefined ? '<span class="muted">—</span>' : `${Math.round(v * 10) / 10}`);
  const sum = k => rows.reduce((a, t) => a + (t[k] ?? 0), 0);
  const planned = sum('plannedHours'), mine = sum('myLoggedHours'), all = sum('loggedHours');
  $('#work-kpis').innerHTML = [
    ['Tasks shown', rows.length, `${rows.filter(t => isTbt(t.status.name)).length} to be tested`],
    ['Baseline planned', `${Math.round(planned)} h`, 'sum of planned work'],
    ['Logged by me', `${Math.round(mine)} h`, `${planned ? Math.round((mine / planned) * 100) : 0}% of planned · last 6 months`],
    ['Logged by everyone', `${Math.round(all)} h`, all > planned && planned ? '<span style="color:var(--bad)">over the baseline</span>' : 'within the baseline'],
  ].map(([l, n, d]) => `<div class="stat" style="cursor:default"><span class="l">${l}</span><span class="n">${n}</span><span class="d">${d}</span></div>`).join('');
  Charts.countUp($('#work-kpis'));
  $('#work-table').innerHTML = `<thead><tr><th>Key</th><th>Task</th><th>Status</th><th>Tests</th><th>Bugs</th><th title="Baseline planned hours">Planned h</th><th title="Hours I logged (last 6 months)">My h</th><th title="Hours logged by everyone">All h</th><th>Task list</th><th>Updated</th></tr></thead><tbody>${
    rows.slice(0, MAX_ROWS).map(t => {
      const over = t.plannedHours && t.loggedHours && t.loggedHours > t.plannedHours;
      return `<tr class="clickable-row">
      <td class="key">${newDot(t)}<a data-detail="task:${esc(t.id)}">${esc(t.key)}</a> <span data-actmini="${esc(t.key)}">${actMini(t.key)}</span></td>
      <td class="title"><a data-detail="task:${esc(t.id)}">${esc(t.title)}</a></td>
      <td>${statusSelect('task', t, W.taskStatuses)}</td>
      <td>${testsCell(t.key)}</td>
      <td>${t.linkedBugs?.length ? `<a class="small" data-detail="task:${esc(t.id)}" data-tab="linked">${t.linkedBugs.length} bug${t.linkedBugs.length > 1 ? 's' : ''}</a>` : '<span class="muted small">—</span>'}</td>
      <td>${h(t.plannedHours)}</td>
      <td><b>${h(t.myLoggedHours)}</b></td>
      <td style="${over ? 'color:var(--bad)' : ''}">${h(t.loggedHours)}</td>
      <td class="small">${esc(t.tasklist?.name ?? '')}</td>
      <td class="small muted" title="${esc(when(t.updatedAt))}">${ago(t.updatedAt)}</td>
    </tr>`;
    }).join('')
  }</tbody><tfoot><tr><td colspan="10" class="count">${rows.length} task${rows.length === 1 ? '' : 's'}${rows.length > MAX_ROWS ? ` — showing the newest ${MAX_ROWS}, search to narrow down` : ''}</td></tr></tfoot>`;
}
['#work-q', '#work-status', '#work-hide-closed'].forEach(s => $(s).addEventListener('input', renderWork));

// ─── bugs ───

function setBugScope(scope) {
  bugScope = scope;
  $$('#bug-scope button').forEach(b => b.classList.toggle('on', b.dataset.scope === scope));
}
$('#bug-scope').addEventListener('click', e => { const b = e.target.closest('button'); if (b) { setBugScope(b.dataset.scope); renderBugs(); } });

function renderBugs() {
  if (!W) { $('#bug-table').innerHTML = '<tr><td class="empty">No data yet.</td></tr>'; return; }
  fillSelect($('#bug-status'), W.bugFields.statuses);
  fillSelect($('#bug-sev'), W.bugFields.severities.map(s => ({ id: s.name, name: s.name })));
  fillSelect($('#bug-asg'), [{ id: 'Unassigned', name: 'Unassigned' }, ...[...new Set(W.bugs.map(b => b.assignee?.name).filter(Boolean))].sort().map(n => ({ id: n, name: n }))]);
  const asg = $('#bug-asg').value;
  const q = $('#bug-q').value.trim().toLowerCase();
  const st = $('#bug-status').value;
  const sev = $('#bug-sev').value;
  const hideClosed = $('#bug-hide-closed').checked && !W.bugFields.statuses.find(s => s.id === st)?.closed;
  const rows = W.bugs.filter(b => (bugScope === 'all' || b.mine.includes(bugScope)) && textMatch(b, q)
    && (!st || b.status.id === st) && (!sev || b.severity === sev) && (!asg || (b.assignee?.name ?? 'Unassigned') === asg) && (!hideClosed || !b.status.closed)).sort(byUpdated);
  $('#bug-table').innerHTML = `<thead><tr><th>Key</th><th>Bug</th><th>Status</th><th>Tests</th><th>Task</th><th>Severity</th><th>Reporter</th><th>Assignee</th><th>Updated</th></tr></thead><tbody>${
    rows.slice(0, MAX_ROWS).map(b => `<tr>
      <td class="key">${newDot(b)}<a data-detail="bug:${esc(b.id)}">${esc(b.key)}</a> <span data-actmini="${esc(b.key)}">${actMini(b.key)}</span></td>
      <td class="title"><a data-detail="bug:${esc(b.id)}">${esc(b.title)}</a></td>
      <td>${statusSelect('bug', b, W.bugFields.statuses)}</td>
      <td>${testsCell(b.key)}</td>
      <td class="small">${(b.linkedTasks ?? []).map(k => { const t = W.tasks.find(x => x.key === k); return t ? `<a class="mono" data-detail="task:${esc(t.id)}" title="${esc(t.title)}">${esc(k)}</a>` : esc(k); }).join(', ') || '<span class="muted">—</span>'}</td>
      <td>${esc(b.severity)}</td>
      <td class="small">${esc(b.reporter?.name ?? '')}</td>
      <td class="small">${b.assignee ? esc(b.assignee.name) : '<span class="muted">Unassigned</span>'}</td>
      <td class="small muted" title="${esc(when(b.updatedAt))}">${ago(b.updatedAt)}</td>
    </tr>`).join('')
  }</tbody><tfoot><tr><td colspan="9" class="count">${rows.length} bug${rows.length === 1 ? '' : 's'}${rows.length > MAX_ROWS ? ` — showing the newest ${MAX_ROWS}, search to narrow down` : ''}</td></tr></tfoot>`;
}
['#bug-q', '#bug-status', '#bug-sev', '#bug-asg', '#bug-hide-closed'].forEach(s => $(s).addEventListener('input', renderBugs));

// ─── health ───

// ─── activity ───

async function renderActivity() {
  [SYNC_LOG, ACTIONS] = await Promise.all([api('/api/sync-log'), api('/api/actions-log')]);
  $('#sync-log').innerHTML = SYNC_LOG.length ? SYNC_LOG.slice(0, 60).map(e => `<div>${e.ok ? '<span class="pill good">ok</span>' : '<span class="pill bad">failed</span>'} ${when(e.at)} <span class="muted small">· ${esc(e.trigger)} · ${(e.durationMs / 1000).toFixed(1)}s</span>${
    e.ok ? ` <span class="small">· ${(e.changes || []).length} change(s)</span>` : `<div class="small" style="color:var(--bad)">${esc(e.error)}</div>`}</div>`).join('') : '<p class="muted">No syncs yet.</p>';
  $('#actions-log').innerHTML = ACTIONS.length ? ACTIONS.slice(0, 60).map(a => `<div>${a.ok ? '<span class="pill good">sent</span>' : '<span class="pill bad">failed</span>'} <b>${esc(a.action)}</b> ${esc(a.target)} <span class="muted small">· ${when(a.at)}</span>${
    a.ok ? '' : `<div class="small" style="color:var(--bad)">${esc(a.error)}</div>`}</div>`).join('') : '<p class="muted">Nothing sent to Zoho from here yet.</p>';
}

// ─── dialog ───

/** Open the shared dialog. `onOk` may throw — the error shows in the dialog and it stays open. */
function dialog({ title, body, ok = 'OK', onOk, onOpen }) {
  const dlg = $('#dlg');
  $('#dlg-title').textContent = title;
  $('#dlg-body').innerHTML = body;
  $('#dlg-err').classList.add('hidden');
  const okBtn = $('#dlg-ok');
  okBtn.textContent = ok;
  okBtn.classList.toggle('hidden', !onOk);
  okBtn.disabled = false;
  return new Promise(resolve => {
    okBtn.onclick = async e => {
      e.preventDefault();
      okBtn.disabled = true;
      try { const r = await onOk(); dlg.close(); resolve(r ?? true); }
      catch (err) { $('#dlg-err').textContent = err.message; $('#dlg-err').classList.remove('hidden'); okBtn.disabled = false; }
    };
    dlg.onclose = () => resolve(false);
    dlg.showModal();
    onOpen?.();
  });
}

/** Last step before anything goes to Zoho: show exactly which fields will be sent. */
function confirmSend(summary, method, path, payload, meta = {}) {
  return dialog({
    title: 'Send to Zoho?',
    body: `<p>${summary}</p><p class="muted small">These fields are sent to Zoho:</p><pre class="payload">${esc(JSON.stringify(payload, null, 2))}</pre>`,
    ok: 'Send to Zoho',
    onOk: () => api(path, { method, body: JSON.stringify({ ...payload, ...meta }) }),
  });
}

// ─── status change in tables ───

document.addEventListener('change', async e => {
  const sel = e.target.closest('select[data-kind]');
  if (!sel) return;
  const { kind, id, key, current } = sel.dataset;
  const list = kind === 'task' ? W.taskStatuses : W.bugFields.statuses;
  const from = list.find(s => s.id === current)?.name ?? current;
  const to = list.find(s => s.id === sel.value);
  const payload = kind === 'task' ? { custom_status: to.id } : { status_id: to.id };
  const result = await confirmSend(`Change <b>${esc(key)}</b> status: ${esc(from)} → <b>${esc(to.name)}</b>`, 'POST', `/api/${kind}s/${id}`, payload, { key });
  if (!result) { sel.value = current; return; }
  const item = (kind === 'task' ? W.tasks : W.bugs).find(x => x.id === id);
  if (item) item.status = to;
  sel.dataset.current = to.id;
});

// ─── detail: see detail.js (slide-over panel) ───

// ─── create bug / task ───

const textToHtml = t => esc(t).split(/\n{2,}/).map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
const opts = (list, selected) => list.map(o => `<option value="${esc(o.id)}"${o.id === selected ? ' selected' : ''}>${esc(o.name)}</option>`).join('');
const userOpts = () => [...W.users].sort((a, b) => a.name.localeCompare(b.name)).map(u => ({ id: u.zuid, name: `${u.name}${u.email ? ` (${u.email})` : ''}` }));

async function newBugDialog(prefill = {}) {
  if (!W) W = await api('/api/work').catch(() => null);
  if (!W) return alert('Zoho data is not loaded yet — press “Sync now” first.');
  const f = W.bugFields;
  let payload;
  const ok = await dialog({
    title: 'New bug',
    ok: 'Review →',
    body: `${prefill.note ? `<p class="banner" style="margin:0 0 12px">${prefill.note}</p>` : ''}<div class="form">
      <label for="nb-title">Title</label><input id="nb-title" required value="${esc(prefill.title ?? '')}">
      <label class="full" for="nb-desc">Description <span class="small">(steps, expected, actual, environment)</span></label>
      <textarea class="full" id="nb-desc" rows="12" placeholder="Steps to reproduce:\n1. …\n\nExpected:\n\nActual:\n\nEnvironment: dev">${esc(prefill.description ?? '')}</textarea>
      <label for="nb-sev">Severity</label><select id="nb-sev">${opts(f.severities)}</select>
      <label for="nb-cls">Classification</label><select id="nb-cls">${opts(f.classifications)}</select>
      <label for="nb-mod">Module</label><select id="nb-mod">${opts(f.modules)}</select>
      <label for="nb-asg">Assignee</label><select id="nb-asg"><option value="">Unassigned</option>${opts(userOpts())}</select>
    </div>
    <div style="display:flex;gap:8px;align-items:center;margin-top:12px"><button type="button" class="small" id="nb-ai">✨ Improve with Claude</button><span class="small muted" id="nb-ai-msg">Optional — rewrites the title and description into the bug format; you still review it.</span></div>`,
    onOpen: () => {
      const btn = $('#nb-ai');
      if (!AI?.available) { btn.disabled = true; $('#nb-ai-msg').textContent = 'Claude Code is not available on this machine.'; return; }
      btn.onclick = async () => {
        btn.disabled = true; $('#nb-ai-msg').innerHTML = `<span class="hb-inline">${Charts.heartbeat('busy', { width: 56, height: 18, beats: 2 })} Claude is rewriting the report…</span>`;
        try {
          const d = await api('/api/ai/draft-bug', { method: 'POST', body: JSON.stringify({ title: $('#nb-title').value, description: $('#nb-desc').value, context: prefill.context }) });
          $('#nb-title').value = d.title; $('#nb-desc').value = d.description;
          $('#nb-ai-msg').textContent = 'Rewritten by Claude — check it before sending.';
        } catch (e) { $('#nb-ai-msg').textContent = e.message; }
        btn.disabled = false;
      };
    },
    onOk: async () => {
      const title = $('#nb-title').value.trim();
      if (!title) throw new Error('Title is required');
      const desc = $('#nb-desc').value.trim();
      payload = { title, description: desc ? textToHtml(desc) : '', severity_id: $('#nb-sev').value, classification_id: $('#nb-cls').value, module_id: $('#nb-mod').value, assignee: $('#nb-asg').value };
      for (const k of Object.keys(payload)) if (!payload[k]) delete payload[k];
    },
  });
  if (!ok) return;
  const bug = await confirmSend(`Create a new bug: <b>${esc(payload.title)}</b>`, 'POST', '/api/bugs', payload);
  if (bug) alert(`Created ${bug.key || 'the bug'} in Zoho. It shows up in the lists after the next sync.`);
}
$('#new-bug').addEventListener('click', () => newBugDialog());

const zohoDate = v => { if (!v) return ''; const [y, m, d] = v.split('-'); return `${m}-${d}-${y}`; };

$('#new-task').addEventListener('click', async () => {
  if (!W) return;
  const lists = [...W.tasklists].sort((a, b) => a.name.localeCompare(b.name));
  let payload;
  const ok = await dialog({
    title: 'New task',
    ok: 'Review →',
    body: `<div class="form">
      <label for="nt-name">Name</label><input id="nt-name" required>
      <label for="nt-list">Task list</label><select id="nt-list"><option value="">Pick a task list…</option>${opts(lists)}</select>
      <label for="nt-own">Owners</label><select id="nt-own" multiple>${opts(userOpts(), W.me.zuid)}</select>
      <label for="nt-pri">Priority</label><select id="nt-pri">${['None', 'Low', 'Medium', 'High'].map(p => `<option>${p}</option>`).join('')}</select>
      <label for="nt-start">Start date</label><input id="nt-start" type="date">
      <label for="nt-end">Due date</label><input id="nt-end" type="date">
      <label class="full" for="nt-desc">Description</label><textarea class="full" id="nt-desc"></textarea>
    </div>`,
    onOk: async () => {
      const name = $('#nt-name').value.trim();
      if (!name) throw new Error('Name is required');
      if (!$('#nt-list').value) throw new Error('Pick a task list');
      const desc = $('#nt-desc').value.trim();
      payload = {
        name, tasklist_id: $('#nt-list').value,
        person_responsible: [...$('#nt-own').selectedOptions].map(o => o.value).join(','),
        priority: $('#nt-pri').value, start_date: zohoDate($('#nt-start').value), end_date: zohoDate($('#nt-end').value),
        description: desc ? textToHtml(desc) : '',
      };
      for (const k of Object.keys(payload)) if (!payload[k]) delete payload[k];
    },
  });
  if (!ok) return;
  const task = await confirmSend(`Create a new task: <b>${esc(payload.name)}</b>`, 'POST', '/api/tasks', payload);
  if (task) alert(`Created ${task.key || 'the task'} in Zoho. It shows up in the lists after the next sync.`);
});

// ─── boot ───

// Boot after every script (charts.js, suite.js) has loaded.
window.addEventListener('DOMContentLoaded', () => {
  $('#nav-bug').innerHTML = Charts.bug(17);
  showTab((location.hash || '#overview').slice(1));
  loadAll().catch(e => { $('#banner').textContent = e.message; $('#banner').className = 'banner bad'; });
});

// Pick up cron syncs while the page is open.
setInterval(async () => {
  if ($('#dlg').open) return;
  const ov = await api('/api/overview').catch(() => null);
  if (ov && (ov.syncedAt !== OV?.syncedAt || ov.lastSync?.at !== OV?.lastSync?.at)) await loadAll();
  else if (ov) { OV = ov; renderChrome(); }
}, 60_000);
