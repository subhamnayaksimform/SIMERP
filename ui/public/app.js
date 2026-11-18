// SimERP QA Workspace — front end (plain JS, no build step).

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
async function api(url, opts = {}) {
  let r;
  try { r = await fetch(url, opts); } catch { throw new Error('The workspace is not responding. In a terminal in the project folder, run: npm run ui'); }
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error || r.statusText);
  return j;
}
const post = (url, body) => api(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
const fileUrl = (p, dl) => `/files/${p.split('/').map(encodeURIComponent).join('/')}${dl ? '?download' : ''}`;
const fname = p => p.split('/').pop();
function when(t) {
  if (!t) return '—';
  const d = new Date(t), diff = (Date.now() - d) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} h ago`;
  if (diff < 7 * 86400) return `${Math.floor(diff / 86400)} day${diff < 2 * 86400 ? '' : 's'} ago`;
  return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
}
const size = n => n < 1024 ? `${n} B` : n < 1048576 ? `${(n / 1024).toFixed(0)} KB` : `${(n / 1048576).toFixed(1)} MB`;
function toast(msg, bad) { const t = $('#toast'); t.innerHTML = `<span class="toast-icon">${bad ? '!' : '✓'}</span>${esc(msg)}`; t.className = `toast ${bad ? 'bad' : ''}`; clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.add('hidden'), 4500); }
const dur = (a, b) => { const s = Math.round((new Date(b) - new Date(a)) / 1000); return s < 2 ? '' : s < 60 ? `${s} s` : s < 3600 ? `${Math.round(s / 60)} min` : `${(s / 3600).toFixed(1)} h`; };

// Stage order for "All files" — pipeline order.
const STAGES = [
  ['attachments', 'Attachments'], ['task', 'Zoho task & source docs'], ['requirements', 'Requirements'],
  ['test-cases', 'Test cases (JSON)'], ['test-case-docs', 'Test case documents'], ['automation', 'Test scripts'],
  ['page-objects', 'Page objects'], ['results', 'Latest results'], ['excel', 'Excel workbooks'], ['reports', 'HTML reports'],
  ['knowledge-base', 'Knowledge base'], ['screenshots', 'Screenshots'], ['docs', 'Other documents'],
];

const state = { modules: [], current: null, moduleTab: 'overview', activeJob: null, setup: null };

// ─── navigation ───
function show(view, push = true) {
  $$('#nav button[data-view]').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  $$('.view').forEach(v => { const on = v.id === `view-${view}`; if (on && v.classList.contains('hidden')) { v.classList.remove('enter'); void v.offsetWidth; v.classList.add('enter'); } v.classList.toggle('hidden', !on); });
  state.view = view;
  ({ home: loadHome, runs: loadHistory, tasks: loadTasks, tools: loadUnassigned, setup: loadSetup, new: renderNew, help: () => { renderHelp(); try { localStorage.setItem('qa-help-seen', '1'); } catch { /* not persisted */ } }, modules: () => state.current || renderModuleList() }[view] || (() => {}))();
  if (push) history.replaceState(null, '', `#${view}${view === 'modules' && state.current ? '/' + state.current : ''}`);
}
$('#nav').addEventListener('click', e => { const b = e.target.closest('button[data-view]'); if (b) show(b.dataset.view); });

$('#themeToggle').onclick = () => {
  const root = document.documentElement;
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('qa-theme', root.dataset.theme); } catch { /* not persisted */ }
};

// ─── shared helpers ───
function resultPill(run) {
  if (!run) return '<span class="pill">– Not run yet</span>';
  if (run.failed) return `<span class="pill bad">✕ ${run.failed} failing</span>`;
  const ran = run.total - run.skipped;
  return ran ? `<span class="pill good">✓ All ${ran} passing</span>` : '<span class="pill">– All skipped</span>';
}
const moduleState = m => !m.lastRun ? 'notrun' : m.lastRun.failed ? 'failing' : 'passing';
async function loadModules(refresh) {
  const d = await api(`/api/modules${refresh ? '?refresh' : ''}`);
  state.modules = d.modules;
  state.taskCount = d.taskCount;
  setJob(d.activeJob);
  return d;
}

// ─── home ───
async function loadHome() {
  try { await loadModules(); } catch (err) { $('#homeTable').innerHTML = `<p class="bad-text">${esc(err.message)}</p>`; return; }
  const ms = state.modules;
  countUp($('#statModules'), ms.length);
  countUp($('#statCases'), ms.reduce((n, m) => n + m.caseCount, 0));
  const failing = ms.filter(m => m.lastRun?.failed);
  const failCount = failing.reduce((n, m) => n + m.lastRun.failed, 0);
  $('#statFailing').innerHTML = `<span class="${failCount ? 'bad-text' : ''}">0</span>`;
  countUp($('#statFailing span'), failCount);
  $('#statFailingSub').innerHTML = failing.length ? `In ${failing.map(m => `<button class="linklike" data-open-module="${m.code}">${esc(m.name)}</button>`).join(', ')}.` : 'Nothing failing in the latest runs.';
  const latest = ms.filter(m => m.lastRun?.at).sort((a, b) => String(b.lastRun.at).localeCompare(String(a.lastRun.at)))[0];
  $('#statLast').textContent = latest ? when(latest.lastRun.at) : 'None';
  $('#statLastSub').textContent = latest ? `${latest.name}: ${latest.lastRun.passed} passed, ${latest.lastRun.failed} failed.` : 'No tests run yet.';

  // Hero donut — latest result of every module that has one.
  const ran = ms.filter(m => m.lastRun);
  const agg = { passed: 0, failed: 0, flaky: 0, skipped: 0 };
  for (const m of ran) for (const k of STATUS_KEYS) agg[k] += m.lastRun[k] || 0;
  $('#heroChart').innerHTML = ran.length ? `
    <div class="hero-head"><h3>Latest results</h3><span class="muted small">${ran.length} of ${ms.length} module${ms.length > 1 ? 's' : ''} run</span></div>
    <div class="hero-body">${donut(agg)}<div>${statusLegend(agg, { clickable: true })}
      <p class="muted small hero-note">Hover the ring for numbers. Click <b>Failed</b> to see failing modules.</p></div></div>`
    : `<div class="hero-head"><h3>Latest results</h3></div><div class="hero-empty"><div class="hero-empty-ring">${donut({})}</div><p>No tests have been run on this computer yet.</p><button class="primary" data-job="run-tests" data-workers="1" data-confirm="Run every test for every module? This takes a few hours.">▶ Run all tests</button></div>`;
  drawHomeModules();

  const all = await api('/api/history').catch(() => []);
  $('#recentList').innerHTML = renderHistoryRows(all.slice(0, 6)) || '<p class="muted">Nothing yet — runs, new requirements and uploads you do here are listed.</p>';
  loadSetupFlag();
}

function drawHomeModules() {
  const f = state.homeFilter || 'all', q = ($('#homeSearch').value || '').toLowerCase(), view = state.homeView || 'cards';
  $$('#homeChips button').forEach(b => b.classList.toggle('active', b.dataset.f === f));
  $$('#homeView button').forEach(b => b.classList.toggle('active', b.dataset.v === view));
  const counts = { all: state.modules.length, failing: 0, passing: 0, notrun: 0 };
  for (const m of state.modules) counts[moduleState(m)]++;
  $$('#homeChips button').forEach(b => { b.dataset.count = counts[b.dataset.f]; });
  const ms = state.modules.filter(m => (f === 'all' || moduleState(m) === f) && (!q || `${m.name} ${m.code} ${m.group}`.toLowerCase().includes(q)));
  if (!state.modules.length) { $('#homeTable').innerHTML = `<div class="card pad empty-hint">No modules yet. Start with <a href="#new" data-go="new">a new requirement</a> — its test cases will appear here.</div>`; return; }
  if (!ms.length) { $('#homeTable').innerHTML = '<p class="muted pad">No modules match.</p>'; return; }
  if (view === 'table') {
    const groups = {};
    for (const m of ms) (groups[m.group] ||= []).push(m);
    $('#homeTable').innerHTML = `<div class="table-wrap"><table class="grid clickable-rows"><thead><tr><th>Module</th><th class="num">Test cases</th><th class="num">Test scripts</th><th>Latest run</th><th>Result</th><th>Last run</th></tr></thead><tbody>
      ${Object.entries(groups).map(([g, list]) => `<tr class="group-row"><td colspan="6">${esc(g)}</td></tr>` + list.map(m => `
        <tr data-open-module="${m.code}"><td><b>${esc(m.name)}</b> <span class="code">${m.code}</span></td><td class="num">${m.caseCount || '—'}</td><td class="num">${m.scriptCount || '—'}</td><td class="bar-cell">${stackBar(m.lastRun)}</td><td>${resultPill(m.lastRun)}</td><td class="muted">${m.lastRun ? when(m.lastRun.at) : '—'}</td></tr>`).join('')).join('')}
    </tbody></table></div>`;
    return;
  }
  $('#homeTable').innerHTML = `<div class="card-grid">${ms.map((m, i) => {
    const r = m.lastRun, st = moduleState(m), rate = r ? pct(r.passed, r.total - r.skipped) : null;
    return `<article class="mcard ${st}" style="--i:${i}" data-open-module="${m.code}" tabindex="0">
      <div class="mcard-top"><div><div class="crumb">${esc(m.group)}</div><h3>${esc(m.name)}</h3></div>${r ? ring(rate, { size: 52, stroke: 6, failedRate: pct(r.failed, r.total - r.skipped) }) : '<span class="ring-empty" data-tip="Not run yet">–</span>'}</div>
      <div class="mcard-meta"><span><b>${m.caseCount}</b> cases</span><span><b>${m.scriptCount}</b> scripts</span><span class="code">${m.code}</span></div>
      ${stackBar(r, { height: 6 })}
      <div class="mcard-foot">${resultPill(r)}<span class="muted small">${r ? when(r.at) : ''}</span>
        <button class="icon run-quick" data-job="run-tests" data-code="${m.code}" data-name="${esc(m.name)}" data-tip="Run ${esc(m.name)} tests" aria-label="Run ${esc(m.name)} tests">▶</button></div>
    </article>`;
  }).join('')}</div>`;
}
$('#homeChips').addEventListener('click', e => { const b = e.target.closest('[data-f]'); if (b) { state.homeFilter = b.dataset.f; drawHomeModules(); } });
$('#homeView').addEventListener('click', e => { const b = e.target.closest('[data-v]'); if (b) { state.homeView = b.dataset.v; try { localStorage.setItem('qa-home-view', b.dataset.v); } catch { /* not persisted */ } drawHomeModules(); } });
$('#homeSearch').addEventListener('input', () => drawHomeModules());
try { state.homeView = localStorage.getItem('qa-home-view') || 'cards'; } catch { /* default */ }
document.addEventListener('click', e => {
  const lg = e.target.closest('#heroChart [data-legend]');
  if (lg) { state.homeFilter = lg.dataset.legend === 'failed' ? 'failing' : lg.dataset.legend === 'passed' ? 'passing' : 'all'; drawHomeModules(); $('#homeChips').scrollIntoView({ behavior: 'smooth', block: 'center' }); }
});
document.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.matches?.('.mcard')) openModule(e.target.dataset.openModule, 'overview'); });

$('#openLatestReport').onclick = async () => {
  const r = await api('/api/latest-report').catch(() => null);
  if (r?.path) window.open(fileUrl(r.path), '_blank', 'noopener'); else toast('No QA report yet — run some tests first.', true);
};

async function loadSetupFlag() {
  try {
    state.setup = await api('/api/setup');
    const flag = $('#setupFlag');
    flag.classList.toggle('hidden', !state.setup.blocking);
    flag.textContent = state.setup.blocking;
    const missing = state.setup.items.filter(i => i.state === 'missing');
    let seen = false; try { seen = localStorage.getItem('qa-help-seen') === '1'; } catch { /* show it */ }
    const hint = seen ? '' : `<div class="banner help-banner"><span class="hb-icon">👋</span><div><b>New here?</b> See how to check test status, open reports, run tests and add a new requirement — it takes two minutes.</div><button class="small-btn primary" data-go="help">Show me how</button><button class="icon" id="hintClose" aria-label="Dismiss">✕</button></div>`;
    $('#setupBanner').innerHTML = hint + (missing.length ? `<div class="banner warn-banner"><b>${missing.length === 1 ? 'One thing needs' : `${missing.length} things need`} setting up on this computer:</b> ${missing.map(i => esc(i.label)).join(', ')}. <a href="#setup" data-go="setup">Open Setup →</a></div>` : '');
    const hc = $('#hintClose'); if (hc) hc.onclick = () => { try { localStorage.setItem('qa-help-seen', '1'); } catch { /* not persisted */ } hc.closest('.banner').remove(); };
  } catch { /* setup check is best-effort */ }
}

// ─── modules ───
function renderModuleList() {
  const q = $('#moduleSearch').value.toLowerCase();
  const groups = {};
  for (const m of state.modules) {
    if (q && !`${m.code} ${m.name} ${m.group}`.toLowerCase().includes(q)) continue;
    (groups[m.group] ||= []).push(m);
  }
  $('#moduleList').innerHTML = Object.entries(groups).map(([g, ms]) => `
    <div class="group-label">${esc(g)}</div>
    ${ms.map(m => `<button class="module-item ${m.code === state.current ? 'active' : ''}" data-code="${m.code}">
        <span class="mi-top"><strong>${esc(m.name)}</strong><span class="code">${m.code}</span></span>
        <span class="mi-bottom">${m.caseCount} cases ${resultPill(m.lastRun)}</span>
      </button>`).join('')}`).join('') || '<p class="muted pad">No modules match.</p>';
}
$('#moduleSearch').addEventListener('input', renderModuleList);
$('#moduleList').addEventListener('click', e => { const b = e.target.closest('.module-item'); if (b) openModule(b.dataset.code); });

async function openModule(code, tab) {
  if (state.view !== 'modules') show('modules', false);
  state.current = code;
  if (tab) state.moduleTab = tab;
  if (!state.modules.length) await loadModules().catch(() => {});
  renderModuleList();
  history.replaceState(null, '', `#modules/${code}`);
  $('#moduleDetail').innerHTML = '<p class="muted pad">Loading…</p>';
  let m;
  try { m = await api(`/api/modules/${code}`); } catch (err) { $('#moduleDetail').innerHTML = `<p class="pad bad-text">${esc(err.message)}</p>`; return; }
  state.mod = m;
  $('#moduleDetail').innerHTML = `
    <div class="mod-head">
      <div><div class="crumb">${esc(m.group)}</div><h2>${esc(m.name)} <span class="code big">${m.code}</span></h2>
        <div class="muted">${m.caseCount} test cases · last change ${when(m.files[0]?.mtime)}</div></div>
      <div class="actions">
        <button class="primary" data-job="run-tests" data-code="${m.code}" data-name="${esc(m.name)}">▶ Run tests</button>
        <button data-job="run-tests" data-code="${m.code}" data-name="${esc(m.name)}" data-workers="1" title="Slower, but avoids timing clashes between tests">Run with 1 worker</button>
        <button class="attach-open">＋ Attach files</button>
      </div>
    </div>
    <nav class="subtabs">
      <button data-tab="overview">Overview</button><button data-tab="cases">Test cases (${m.caseCount})</button>
      <button data-tab="runs">Runs (${m.runs.length})</button><button data-tab="files">All files (${m.files.length})</button>
    </nav>
    <div id="modTab"></div>`;
  $('#moduleDetail .subtabs').onclick = e => { if (e.target.dataset.tab) renderModuleTab(e.target.dataset.tab); };
  renderModuleTab(state.moduleTab);
}

function trendPoints(m) {
  const ok = new Set(m.trendIds || []);
  return m.runs.filter(h => h.stats?.[m.code] && (!m.trendIds || ok.has(h.id))).slice(0, 12).reverse().map(h => {
    const st = h.stats[m.code];
    return { rate: pct(st.passed, st.total - st.skipped), passed: st.passed, failed: st.failed, label: new Date(h.finishedAt || h.startedAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short' }) };
  });
}
function newest(files, stage, re) { return files.filter(f => f.stage === stage && (!re || re.test(fname(f.path)))).sort((a, b) => b.mtime - a.mtime)[0]; }

function renderModuleTab(tab) {
  state.moduleTab = tab;
  $$('#moduleDetail .subtabs button').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  const el = $('#modTab'), m = state.mod;
  if (tab === 'overview') {
    const r = m.lastRun;
    const docs = [
      ['Test cases', 'Readable document', newest(m.files, 'test-case-docs')],
      ['Test cases', 'Excel', newest(m.files, 'excel', /^test-cases|^Test_Cases/i)],
      ['Latest results', 'Excel', newest(m.files, 'excel', /^results/i)],
      ['Latest results', 'QA report', newest(m.files, 'reports', /^qa-report/)],
      ['Requirement', 'Analysed by Claude', newest(m.files, 'requirements')],
      ['Coverage', 'Requirement coverage', newest(m.files, 'reports', /^coverage|^review/)],
    ];
    el.innerHTML = `
      ${r ? `<div class="run-summary rich">
        <div class="rs-ring">${ring(pct(r.passed, r.total - r.skipped), { size: 92, stroke: 9, failedRate: pct(r.failed, r.total - r.skipped) })}</div>
        <div class="rs-main">
          <div class="rs-title"><b>Latest run</b> <span class="muted small">${when(r.at)} · ${r.total} tests</span></div>
          ${stackBar(r, { height: 10 })}
          ${statusLegend(r)}
        </div>
        ${trendPoints(m).length > 1 ? `<div class="rs-trend"><div class="muted small">Pass rate by run</div>${trendLine(trendPoints(m), { width: 300, height: 92 })}</div>` : ''}
      </div>
      ${r.failures?.length ? `<div class="run-summary slim"><details class="failing"><summary>${r.failures.length} failing test${r.failures.length > 1 ? 's' : ''} — see which</summary><ul>${r.failures.map(f => `<li><b>${esc(f.title)}</b>${f.error ? `<div class="muted small">${esc(f.error.split('\n')[0].slice(0, 220))}</div>` : ''}</li>`).join('')}</ul></details></div>` : ''}` : `<div class="run-summary muted">These tests haven't been run yet. Press <b>Run tests</b> above.</div>`}
      <h3 class="section-title">Key documents <span class="muted small">— click to open</span></h3>
      <div class="doc-grid">${docs.map(([title, sub, f]) => f
        ? `<button class="doc-card file-open" data-path="${esc(f.path)}"><span class="doc-title">${title}</span><span class="doc-sub">${sub} · ${when(f.mtime)}</span><span class="doc-file">${esc(fname(f.path))}</span></button>`
        : `<div class="doc-card empty"><span class="doc-title">${title}</span><span class="doc-sub">${sub}</span><span class="doc-file">Not created yet</span></div>`).join('')}</div>
      ${m.tasks.length ? `<h3 class="section-title">Zoho tasks</h3><div class="task-strip">${m.tasks.map(t => `<span class="task-chip">${t.prefix ? `<b>${esc(t.prefix)}</b> ` : ''}${esc(t.name)}${t.url ? ` <a href="${esc(t.url)}" target="_blank" rel="noopener">open in Zoho ↗</a>` : ''}</span>`).join('')}</div>` : ''}
      ${state.viewer && !m.files.some(f => f.stage === 'attachments') ? '' : `<h3 class="section-title">Attachments</h3>
      ${attachSection(m.files.filter(f => f.stage === 'attachments'))}`}`;
    wireDropzone();
  }
  if (tab === 'files') { el.innerHTML = renderFiles(m.files, true); wireDropzone(); }
  if (tab === 'runs') el.innerHTML = renderHistoryRows(m.runs, m.code) || '<p class="muted pad">No runs yet. Press “Run tests” — every run is saved here.</p>';
  if (tab === 'cases') loadCases(el);
}

function fileRow(f) {
  return `<li class="file">
    <button class="file-open" data-path="${esc(f.path)}"><span class="ext">${esc((fname(f.path).split('.').pop() || '').toUpperCase())}</span><span class="fname">${esc(fname(f.path))}</span>${f.note ? `<span class="note">${esc(f.note)}</span>` : ''}</button>
    ${f.mtime ? `<span class="fmeta">${size(f.size)} · ${when(f.mtime)}</span>` : ''}
    <a class="icon" href="${fileUrl(f.path, true)}" title="Download">⤓</a>
    ${f.stage === 'attachments' ? `<button class="icon danger" data-remove="${esc(f.path)}" title="Remove attachment">🗑</button>` : ''}
  </li>`;
}
function attachSection(fs) {
  return `<section class="stage attach-stage">
    ${fs.length ? `<ul class="files">${fs.map(fileRow).join('')}</ul>` : ''}
    <div class="dropzone" id="dropzone">Drop files here, or <button class="linklike attach-open">choose files</button> — specs, notes, screenshots, anything for this module.</div>
  </section>`;
}
function renderFiles(files, grouped) {
  if (!grouped) return files.length ? `<ul class="files">${files.map(fileRow).join('')}</ul>` : '<p class="muted">No files.</p>';
  return STAGES.map(([key, label]) => {
    const fs = files.filter(f => f.stage === key);
    if (key === 'attachments' && state.view === 'modules') return `<h4 class="stage-label">${label}</h4>${attachSection(fs)}`;
    if (!fs.length) return '';
    return `<details class="stage" ${fs.length > 6 ? '' : 'open'}><summary><span>${label}</span><span class="count">${fs.length}</span>${fs.length > 6 ? '<span class="muted small">newest first</span>' : ''}</summary><ul class="files">${fs.map(fileRow).join('')}</ul></details>`;
  }).join('') || '<p class="muted">No files.</p>';
}

async function loadCases(el) {
  el.innerHTML = '<p class="muted pad">Loading test cases…</p>';
  let cases;
  try { cases = await api(`/api/modules/${state.current}/cases`); } catch (err) { el.innerHTML = `<p class="pad bad-text">${esc(err.message)}</p>`; return; }
  const caseFiles = state.mod.files.filter(f => f.stage === 'test-cases' && f.path.startsWith('reports/test-cases/'));
  const devBar = caseFiles.length ? `<details class="devbar"><summary>For devs: generate Playwright scripts from a cases file</summary>
      <select id="genFile">${caseFiles.map(f => `<option value="${esc(f.path)}">${esc(fname(f.path))} (${esc(f.note || '')})</option>`).join('')}</select>
      <button id="genBtn">Generate test scripts</button> <span class="muted small">Uses your Claude login · writes under tests/ · runs type-check + lint</span></details>` : '';
  if (!cases.length) { el.innerHTML = devBar + '<p class="muted pad">No test cases yet. Use <a href="#new" data-go="new">New requirement</a> to write some.</p>'; wireGen(); return; }
  const cats = [...new Set(cases.map(c => c.category).filter(Boolean))];
  const byCat = cats.map(c => ({ c, n: cases.filter(x => x.category === c).length, bad: cases.filter(x => x.category === c && x.result?.status === 'failed').length })).sort((a, b) => b.n - a.n);
  const maxN = Math.max(...byCat.map(x => x.n), 1);
  const resCount = k => cases.filter(c => k === 'none' ? !c.result : c.result?.status === k).length;
  el.innerHTML = `${devBar}
    <div class="cases-overview">
      <div class="card cat-card"><div class="cat-head"><b>By category</b><span class="muted small">click a bar to filter</span></div>
        <ul class="catbars">${byCat.map(x => `<li><button data-cat="${esc(x.c)}" data-tip="${esc(x.c)}: ${x.n} case${x.n > 1 ? 's' : ''}${x.bad ? `, ${x.bad} failing` : ''}">
          <span class="cb-label">${esc(x.c)}</span><span class="cb-track"><span class="cb-fill" style="width:${(x.n / maxN) * 100}%"></span></span><span class="cb-n">${x.n}${x.bad ? ` <span class="bad-text">· ✕ ${x.bad}</span>` : ''}</span></button></li>`).join('')}</ul></div>
      <div class="card cat-card res-card"><div class="cat-head"><b>Latest result per case</b></div>
        <div class="res-tiles">${[['failed', '✕ Failing', 'bad'], ['passed', '✓ Passing', 'good'], ['flaky', '~ Flaky', 'warn'], ['skipped', '– Skipped', ''], ['none', 'Not run', '']].map(([k, label, cls]) =>
          `<button class="res-tile ${cls}" data-res="${k}"><b>${resCount(k)}</b><span>${label}</span></button>`).join('')}</div></div>
    </div>
    <div class="filters">
      <input id="caseSearch" type="search" placeholder="Search by ID or title…">
      <select id="caseCat"><option value="">All categories</option>${cats.map(c => `<option>${esc(c)}</option>`).join('')}</select>
      <select id="caseRes"><option value="">Any result</option><option value="failed">Failing</option><option value="passed">Passing</option><option value="flaky">Flaky</option><option value="skipped">Skipped</option><option value="none">Not run</option></select>
      <span class="muted" id="caseCount"></span>
    </div>
    <div class="table-wrap"><table class="grid clickable-rows sortable"><thead><tr><th data-sort="id">ID</th><th data-sort="title">Title</th><th data-sort="category">Category</th><th data-sort="priority">Priority</th><th data-sort="result">Latest result</th></tr></thead><tbody></tbody></table></div>`;
  const PRI = { critical: 0, high: 1, medium: 2, low: 3 };
  const RES = { failed: 0, flaky: 1, passed: 2, skipped: 3 };
  const sortKey = (c, k) => k === 'priority' ? (PRI[c.priority] ?? 9) : k === 'result' ? (RES[c.result?.status] ?? 9) : String(c[k] ?? '');
  state.caseSort = state.caseSort || { k: 'id', dir: 1 };
  const draw = () => {
    const q = $('#caseSearch').value.toLowerCase(), cat = $('#caseCat').value, res = $('#caseRes').value;
    const { k: sk, dir } = state.caseSort;
    const list = cases.filter(c => (!q || `${c.id} ${c.title}`.toLowerCase().includes(q)) && (!cat || c.category === cat) && (!res || (res === 'none' ? !c.result : c.result?.status === res)))
      .sort((a, b) => { const x = sortKey(a, sk), y = sortKey(b, sk); return (typeof x === 'number' ? x - y : x.localeCompare(y, undefined, { numeric: true })) * dir; });
    $('#caseCount').textContent = `${list.length} of ${cases.length}`;
    $$('th[data-sort]', el).forEach(th => { th.classList.toggle('sorted', th.dataset.sort === sk); th.dataset.dir = th.dataset.sort === sk ? (dir > 0 ? '↑' : '↓') : ''; });
    $$('[data-cat]', el).forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
    $$('[data-res]', el).forEach(b => b.classList.toggle('active', b.dataset.res === res));
    $('tbody', el).innerHTML = list.slice(0, 1000).map(c => `<tr data-i="${cases.indexOf(c)}"><td class="mono nowrap">${esc(c.id)}</td><td>${esc(c.title)}</td><td>${esc(c.category)}</td><td>${esc(c.priority)}</td><td>${statusPill(c.result?.status)}</td></tr>`).join('');
  };
  ['caseSearch', 'caseCat', 'caseRes'].forEach(id => $(`#${id}`).addEventListener('input', draw));
  el.querySelector('.cases-overview').addEventListener('click', e => {
    const c = e.target.closest('[data-cat]'), r = e.target.closest('[data-res]');
    if (c) { $('#caseCat').value = $('#caseCat').value === c.dataset.cat ? '' : c.dataset.cat; draw(); }
    if (r) { $('#caseRes').value = $('#caseRes').value === r.dataset.res ? '' : r.dataset.res; draw(); }
  });
  $('thead', el).addEventListener('click', e => {
    const th = e.target.closest('th[data-sort]'); if (!th) return;
    state.caseSort = { k: th.dataset.sort, dir: state.caseSort.k === th.dataset.sort ? -state.caseSort.dir : 1 };
    draw();
  });
  $('tbody', el).addEventListener('click', e => { const tr = e.target.closest('tr[data-i]'); if (tr) showCase(cases[tr.dataset.i]); });
  draw();
  wireGen();
}
function wireGen() { const b = $('#genBtn'); if (b) b.onclick = () => startJob('generate-automation', { file: $('#genFile').value, code: state.current }); }
const statusPill = s => !s ? '<span class="pill">– Not run</span>' : `<span class="pill ${s === 'passed' ? 'good' : s === 'failed' ? 'bad' : s === 'flaky' ? 'warn' : ''}">${STATUS[s]?.icon ?? ''} ${{ passed: 'Passing', failed: 'Failing', flaky: 'Flaky', skipped: 'Skipped' }[s] || s}</span>`;

function showCase(c) {
  const list = v => Array.isArray(v) ? `<ol>${v.map(s => `<li>${esc(typeof s === 'object' ? (s.action || s.step || JSON.stringify(s)) : s)}${s?.expected ? `<div class="muted">→ ${esc(s.expected)}</div>` : ''}</li>`).join('')}</ol>` : `<p>${esc(v || 'Not given')}</p>`;
  openDrawer(c.id, `
    <h3 class="case-title">${esc(c.title)}</h3>
    <div class="kv"><span>Category</span><b>${esc(c.category)}</b><span>Priority</span><b>${esc(c.priority)}</b><span>Role</span><b>${esc(c.role || 'Not set')}</b><span>Tags</span><b>${esc((c.tags || []).join(', ') || 'None')}</b></div>
    ${c.result ? `<p>Latest result: ${statusPill(c.result.status)} <span class="muted">${when(c.result.at)}</span></p>${c.result.error ? `<pre class="err">${esc(c.result.error)}</pre>` : ''}` : ''}
    <h4>Preconditions</h4>${list(c.preconditions)}<h4>Steps</h4>${list(c.steps)}<h4>Expected result</h4>${list(c.expected)}
    <p class="muted small">From ${esc(c.source)}</p>`);
}

// ─── attachments ───
$('#fileInput').addEventListener('change', e => { const files = [...e.target.files]; e.target.value = ''; if (state.fileTarget) { state.fileTarget(files); state.fileTarget = null; } else uploadFiles(files); });
function wireDropzone() {
  const dz = $('#dropzone'); if (!dz) return;
  dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('over'); });
  dz.addEventListener('dragleave', () => dz.classList.remove('over'));
  dz.addEventListener('drop', e => { e.preventDefault(); dz.classList.remove('over'); if (e.dataTransfer.files.length) uploadFiles([...e.dataTransfer.files]); });
}
async function uploadFiles(files) {
  if (!state.current) return;
  toast(`Uploading ${files.length} file${files.length > 1 ? 's' : ''}…`);
  let ok = 0;
  for (const f of files) {
    try { await api(`/api/modules/${state.current}/attachments?name=${encodeURIComponent(f.name)}`, { method: 'POST', body: f }); ok++; }
    catch (err) { toast(`${f.name}: ${err.message}`, true); }
  }
  if (ok) toast(`Attached ${ok} file${ok > 1 ? 's' : ''}`);
  await loadModules(true);
  openModule(state.current);
}

// ─── global clicks ───
document.addEventListener('click', async e => {
  const t = e.target;
  const go = t.closest('[data-go]'); if (go) { e.preventDefault(); show(go.dataset.go); return; }
  if (t.closest('.attach-open')) { state.fileTarget = null; $('#fileInput').click(); return; }
  const rm = t.closest('[data-remove]');
  if (rm) {
    if (!confirm(`Remove ${fname(rm.dataset.remove)}? This deletes the file.`)) return;
    try { await api(`/api/attachments?path=${encodeURIComponent(rm.dataset.remove)}`, { method: 'DELETE' }); toast('Attachment removed'); } catch (err) { toast(err.message, true); }
    await loadModules(true); openModule(state.current); return;
  }
  const op = t.closest('.file-open'); if (op) { openFile(op.dataset.path); return; }
  const job = t.closest('[data-job]');
  if (job) {
    if (job.dataset.confirm && !confirm(job.dataset.confirm)) return;
    startJob(job.dataset.job, { code: job.dataset.code, name: job.dataset.name, workers: job.dataset.workers ? Number(job.dataset.workers) : undefined });
    return;
  }
  const h = t.closest('[data-history]'); if (h) { openHistory(h.dataset.history); return; }
  const om = t.closest('[data-open-module]'); if (om) { closeDrawer(); openModule(om.dataset.openModule, 'overview'); }
});

// ─── file viewer: one click opens anything ───
const TEXT_EXT = ['json', 'md', 'ts', 'js', 'txt', 'log', 'csv', 'yml', 'yaml', 'xml', 'sh'];
async function openFile(p) {
  const name = fname(p), ext = name.includes('.') ? name.split('.').pop().toLowerCase() : '';
  const actions = `<a class="btn" href="${fileUrl(p)}" target="_blank" rel="noopener">Open in new tab ↗</a><a class="btn" href="${fileUrl(p, true)}">Download</a>`;
  if (['html', 'htm', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'webm', 'mp4'].includes(ext)) { window.open(fileUrl(p), '_blank', 'noopener'); return; }
  if (ext === 'xlsx' || ext === 'docx') {
    openDrawer(name, '<p class="muted pad">Opening…</p>', actions, p);
    try {
      const d = await api(`/api/preview?path=${encodeURIComponent(p)}`);
      if (d.kind === 'html') { $('#drawerBody').innerHTML = `<div class="md docx">${d.html}</div>`; return; }
      const table = sh => `${sh.total > sh.rows.length ? `<p class="warn">Showing the first ${sh.rows.length} of ${sh.total} rows — download for the rest.</p>` : ''}<div class="sheet-wrap"><table class="sheet">${sh.rows.map((r, k) => `<tr>${r.map(c => k ? `<td>${esc(c)}</td>` : `<th>${esc(c)}</th>`).join('')}</tr>`).join('')}</table></div>`;
      $('#drawerBody').innerHTML = `<nav class="subtabs sheet-tabs">${d.sheets.map((sh, i) => `<button class="${i ? '' : 'active'}" data-sheet="${i}">${esc(sh.name)}</button>`).join('')}</nav><div id="sheetBody">${d.sheets.length ? table(d.sheets[0]) : '<p class="muted">Empty workbook.</p>'}</div>`;
      $('.sheet-tabs').onclick = e => { const b = e.target.closest('[data-sheet]'); if (!b) return; $$('.sheet-tabs button').forEach(x => x.classList.toggle('active', x === b)); $('#sheetBody').innerHTML = table(d.sheets[b.dataset.sheet]); };
    } catch (err) { $('#drawerBody').innerHTML = `<p class="pad">Couldn't show a preview (${esc(err.message)}).</p><p class="pad"><a class="btn primary" href="${fileUrl(p, true)}">Download ${esc(name)}</a></p>`; }
    return;
  }
  if (!TEXT_EXT.includes(ext)) { location.href = fileUrl(p, true); return; }
  openDrawer(name, '<p class="muted pad">Loading…</p>', actions, p);
  let d;
  try { d = await api(`/api/text?path=${encodeURIComponent(p)}`); } catch (err) { $('#drawerBody').innerHTML = `<p class="pad bad-text">${esc(err.message)}</p>`; return; }
  let body;
  if (ext === 'json') {
    let j = null; try { j = JSON.parse(d.text); } catch { /* raw */ }
    const r = j && (Array.isArray(j) ? j[0] : j);
    body = r && r.acceptanceCriteria ? requirementView(r, j) : `<pre class="code-view">${esc(j ? JSON.stringify(j, null, 2) : d.text)}</pre>`;
  } else if (ext === 'md') body = `<div class="md">${markdown(d.text)}</div>`;
  else body = `<pre class="code-view">${esc(d.text)}</pre>`;
  $('#drawerBody').innerHTML = (d.truncated ? '<p class="warn">Large file — showing the first 2 MB. Download for the full file.</p>' : '') + body;
}

/** Requirements JSON shown as a readable summary first, raw JSON on request. */
function requirementView(r, raw) {
  const text = v => typeof v === 'string' ? v : v?.criterion || v?.description || v?.rule || v?.scenario || v?.title || v?.name || v?.text || JSON.stringify(v);
  const list = (title, arr) => Array.isArray(arr) && arr.length ? `<h4>${title} <span class="count">${arr.length}</span></h4><ul>${arr.slice(0, 60).map(x => `<li>${esc(text(x))}</li>`).join('')}</ul>` : '';
  return `<div class="req-view">
    <h3>${esc(r.feature || r.module || 'Requirement')}</h3>
    <div class="kv"><span>Module</span><b>${esc(r.module || '—')}</b><span>Code</span><b>${esc(r.moduleCode || '—')}</b>${r.taskId ? `<span>Task</span><b>${esc(r.taskId)}</b>` : ''}</div>
    ${list('Acceptance criteria', r.acceptanceCriteria)}${list('Business rules', r.businessRules)}${list('Test scenarios', r.testScenarios)}${list('Edge cases', r.edgeCases)}${list('Open questions', r.unclear)}
    <details><summary>Show raw JSON</summary><pre class="code-view">${esc(JSON.stringify(raw, null, 2))}</pre></details></div>`;
}

function openDrawer(title, html, actions = '', p) {
  $('#drawerTitle').textContent = title; $('#drawerTitle').title = p || '';
  $('#drawerActions').innerHTML = actions; $('#drawerBody').innerHTML = html;
  $('#drawer').classList.remove('hidden');
}
function closeDrawer() { $('#drawer').classList.add('hidden'); clearInterval(state.logTimer); }
$('#drawerClose').onclick = closeDrawer;
$('#drawer').addEventListener('click', e => { if (e.target.id === 'drawer') closeDrawer(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

function markdown(src) {
  const inline = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/(^|\W)\*([^*]+)\*/g, '$1<i>$2</i>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, t, u) => /^https?:/.test(u) ? `<a href="${u}" target="_blank" rel="noopener">${t}</a>` : t);
  const lines = src.split('\n'); let out = '', i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (/^```/.test(l)) { let code = ''; i++; while (i < lines.length && !/^```/.test(lines[i])) code += lines[i++] + '\n'; i++; out += `<pre class="code-view">${esc(code)}</pre>`; continue; }
    const h = /^(#{1,6})\s+(.*)/.exec(l); if (h) { const n = Math.min(h[1].length + 1, 6); out += `<h${n}>${inline(h[2])}</h${n}>`; i++; continue; }
    if (/^\|/.test(l)) {
      const rows = []; while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]);
      const cells = r => r.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      const body = rows.filter((r, k) => !(k === 1 && /^[\s|:-]+$/.test(r)));
      out += `<div class="table-wrap"><table><thead><tr>${cells(body[0]).map(c => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${body.slice(1).map(r => `<tr>${cells(r).map(c => `<td>${inline(c).replace(/&lt;br\s*\/?&gt;/g, '<br>')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      continue;
    }
    if (/^\s*([-*]|\d+\.)\s+/.test(l)) {
      const ordered = /^\s*\d+\./.test(l); let items = '';
      while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) items += `<li>${inline(lines[i++].replace(/^\s*([-*]|\d+\.)\s+/, ''))}</li>`;
      out += ordered ? `<ol>${items}</ol>` : `<ul>${items}</ul>`; continue;
    }
    if (/^>\s?/.test(l)) { out += `<blockquote>${inline(l.replace(/^>\s?/, ''))}</blockquote>`; i++; continue; }
    if (/^---+\s*$/.test(l)) { out += '<hr>'; i++; continue; }
    if (l.trim()) out += `<p>${inline(l)}</p>`;
    i++;
  }
  return out;
}

// ─── jobs ───
async function startJob(action, opts = {}) {
  try {
    const entry = await post('/api/jobs', { action, ...opts });
    setJob(entry);
    toast(`Started: ${entry.label}`);
    openHistory(entry.id);
    return entry;
  } catch (err) { toast(err.message, true); return null; }
}
function setJob(job) {
  const was = state.activeJob;
  state.activeJob = job;
  const b = $('#jobBadge');
  b.classList.toggle('busy', !!job);
  b.innerHTML = job
    ? `<div class="status-line"><b>Running</b><span class="spinner"></span></div><div class="status-sub">${esc(job.label)}<br>started ${when(job.startedAt)}</div><button class="small-btn" data-history="${job.id}">View progress</button>`
    : '<div class="status-line"><b>Idle</b><span class="dot"></span></div><div class="status-sub">Nothing running.</div>';
  if (was && (!job || job.id !== was.id)) jobFinished(was);
}
async function jobFinished(was) {
  const h = await api(`/api/history/${was.id}?since=999999999`).catch(() => null);
  if (h && h.status !== 'running') toast(`${h.label}: ${{ passed: 'all passed', failed: 'finished with failures', done: 'done', stopped: 'stopped' }[h.status] || h.status}`, h.status === 'failed');
  await loadModules(true).catch(() => {});
  if (state.view === 'home') loadHome();
  if (state.view === 'runs') loadHistory();
  if (state.view === 'modules' && state.current) openModule(state.current);
}
// Poll: fast while something runs, slow otherwise (picks up jobs started from another tab).
async function poll() {
  try { const d = await api('/api/modules'); state.modules = d.modules; setJob(d.activeJob); } catch { /* server restarting */ }
  setTimeout(poll, state.activeJob ? 3000 : 15000);
}

// ─── runs / history ───
function statusTag(h) {
  const map = { running: ['run', 'Running'], passed: ['good', 'Passed'], failed: ['bad', 'Failed'], done: ['good', 'Done'], stopped: ['', 'Stopped'] };
  const [cls, text] = map[h.status] || ['', h.status];
  return `<span class="pill ${cls}">${h.status === 'running' ? '<span class="spinner"></span>' : ''}${text}</span>`;
}
function renderHistoryRows(items, code) {
  if (!items.length) return '';
  return `<ul class="history">${items.map(h => {
    const s = h.stats?.[code || h.code || 'all'] || h.stats?.all;
    const d = h.finishedAt ? dur(h.startedAt, h.finishedAt) : '';
    return `<li><button class="hist-row" data-history="${h.id}">${statusTag(h)}
      <span class="hist-main"><b>${esc(h.label)}</b>
        ${s ? `<span class="hist-stats">${s.passed} passed · <span class="${s.failed ? 'bad-text' : ''}">${s.failed} failed</span> · ${s.skipped} skipped</span>` : h.details ? `<span class="hist-stats">${esc(h.details)}</span>` : ''}</span>
      ${h.code && !code ? `<span class="code">${h.code}</span>` : ''}
      <span class="muted hist-time">${when(h.startedAt)}${d ? ` · ${d}` : ''}</span></button></li>`;
  }).join('')}</ul>`;
}
async function loadHistory() {
  const all = await api('/api/history').catch(() => []);
  const f = $('#historyFilter').value;
  const items = all.filter(h => !f || (f === 'other' ? !['run-tests', 'new-requirement', 'attach', 'detach', 'link'].includes(h.type) : f === 'attach' ? ['attach', 'detach', 'link'].includes(h.type) : h.type === f));
  $('#historyList').innerHTML = renderHistoryRows(items) || '<p class="muted pad">Nothing here yet.</p>';
}
$('#historyFilter').addEventListener('change', loadHistory);

function progressHtml(h) {
  const pr = h.progress || { done: [] };
  if (!pr.done.length && !pr.current) return '<div class="prog"></div>';
  return `<div class="prog">${pr.attention ? `<div class="banner warn-banner">${esc(pr.attention)}</div>` : ''}<ol class="steps">${pr.done.map(s => `<li class="done">${esc(s)}</li>`).join('')}${pr.current ? `<li class="now"><span class="spinner"></span> ${esc(pr.current)}</li>` : ''}</ol></div>`;
}
function outputsHtml(h) {
  const outs = (h.outputs || []).filter(o => o.kind !== 'automation');
  const scripts = (h.outputs || []).filter(o => o.kind === 'automation');
  const names = { requirements: 'Requirement (analysed)', 'test-cases': 'Test cases (JSON)', 'test-case-doc': 'Test cases (document)' };
  const xl = h.type === 'run-tests' ? [] : (h.producedFiles || []).filter(p => /\.xlsx$/.test(p));
  if (!outs.length && !scripts.length && !xl.length) return '';
  return `<h4>Results</h4><div class="doc-grid">${outs.map(o => `<button class="doc-card file-open" data-path="${esc(o.path)}"><span class="doc-title">${names[o.kind] || o.kind}</span><span class="doc-file">${esc(fname(o.path))}</span></button>`).join('')}
    ${xl.map(p => `<button class="doc-card file-open" data-path="${esc(p)}"><span class="doc-title">Test cases (Excel)</span><span class="doc-file">${esc(fname(p))}</span></button>`).join('')}</div>
    ${scripts.length ? `<p class="muted small">${scripts.length} test script file(s) written under tests/.</p>` : ''}`;
}

async function openHistory(id) {
  clearInterval(state.logTimer);
  let h;
  try { h = await api(`/api/history/${id}`); } catch (err) { toast(err.message, true); return; }
  let offset = h.logSize;
  const render = () => {
    const s = h.stats?.[h.code || 'all'] || h.stats?.all;
    return `
      <div class="kv"><span>Status</span><b>${statusTag(h)}</b><span>Started</span><b>${new Date(h.startedAt).toLocaleString()}</b>
        ${h.finishedAt ? `<span>Took</span><b>${dur(h.startedAt, h.finishedAt) || 'a moment'}</b>` : ''}${h.code ? `<span>Module</span><b><button class="linklike" data-open-module="${h.code}">${h.code} →</button></b>` : ''}</div>
      ${h.details ? `<p class="${h.status === 'failed' ? 'bad-text' : ''}">${esc(h.details)}</p>` : ''}
      ${progressHtml(h)}
      ${s ? `<div class="run-numbers big"><span><b>${s.passed}</b> passed</span><span class="${s.failed ? 'bad-text' : ''}"><b>${s.failed}</b> failed</span><span><b>${s.flaky}</b> flaky</span><span><b>${s.skipped}</b> skipped</span></div>` : ''}
      ${outputsHtml(h)}
      ${h.failures?.length ? `<h4>Failing tests</h4><ul class="failures">${h.failures.map(f => `<li><b>${esc(f.title)}</b><div class="muted small">${esc(f.file)}</div>${f.error ? `<pre class="err">${esc(f.error)}</pre>` : ''}</li>`).join('')}</ul>` : ''}
      ${h.producedFiles?.length && h.type === 'run-tests' ? `<h4>Reports from this run</h4>${renderFiles(h.producedFiles.filter(p => /\.(xlsx|html)$/.test(p)).map(p => ({ path: p, stage: '' })), false)}` : ''}
      ${h.resultsSnapshot ? `<p><a class="btn" href="${fileUrl(h.resultsSnapshot, true)}">Download this run's results.json</a></p>` : ''}
      ${h.logFile ? `<details class="log-wrap" ${h.status === 'running' || h.status === 'failed' ? 'open' : ''}><summary>Technical log</summary><pre class="log" id="logView">${esc(h.log)}</pre></details>` : ''}`;
  };
  openDrawer(h.label, render(), h.status === 'running' ? '<button class="danger" id="stopJob">Stop</button>' : '');
  const b = $('#stopJob');
  if (b) b.onclick = async () => { if (!confirm('Stop this run?')) return; try { await post('/api/jobs/stop', {}); toast('Stopping…'); } catch (err) { toast(err.message, true); } };
  const lv = $('#logView'); if (lv) lv.scrollTop = lv.scrollHeight;
  if (h.status === 'running') {
    state.logTimer = setInterval(async () => {
      if ($('#drawer').classList.contains('hidden')) return clearInterval(state.logTimer);
      const n = await api(`/api/history/${id}?since=${offset}`).catch(() => null);
      if (!n) return;
      const lv = $('#logView');
      if (n.log && lv) { const atBottom = lv.scrollHeight - lv.scrollTop - lv.clientHeight < 60; lv.textContent += n.log; if (atBottom) lv.scrollTop = lv.scrollHeight; }
      offset = n.logSize;
      const prog = $('#drawerBody .prog'); if (prog) prog.outerHTML = progressHtml(n);
      if (n.status !== 'running') { clearInterval(state.logTimer); h = await api(`/api/history/${id}`); $('#drawerBody').innerHTML = render(); $('#drawerActions').innerHTML = ''; }
    }, 2000);
  }
}

// ─── new requirement ───
function renderNew() {
  if (state.viewer) { $('#newBody').innerHTML = '<div class="banner">This is a view-only demo link, so writing test cases is switched off here. On their own computer, a PM or dev uploads a requirement document (or pastes text, or gives a Zoho task ID) and Claude writes the test cases, an Excel file and a readable document in 5–15 minutes. See <a href="#help" data-go="help">How to use</a>.</div>'; return; }
  const running = state.activeJob;
  if (state.newWatch) return renderNewProgress(state.newWatch);
  const s = state.setup;
  const aiItem = s?.items.find(i => i.key === 'ai');
  const zohoOk = s?.items.find(i => i.key === 'zoho')?.state === 'ok';
  const src = state.newSource || 'file';
  const noAi = aiItem && aiItem.state !== 'ok';
  $('#newBody').innerHTML = `
    ${noAi ? `<div class="banner warn-banner"><b>Claude isn't set up on this computer yet.</b> ${esc(aiItem.fix || '')} <a href="#setup" data-go="setup">Setup →</a></div>` : ''}
    ${running ? `<div class="banner">“${esc(running.label)}” is running now — you can start this once it finishes. <button class="linklike" data-history="${running.id}">View progress</button></div>` : ''}
    <div class="card form">
      <label class="field-label">1. Where is the requirement?</label>
      <div class="segctl" id="srcSeg">
        <button data-src="file" class="${src === 'file' ? 'active' : ''}">Upload a document</button>
        <button data-src="text" class="${src === 'text' ? 'active' : ''}">Paste text</button>
        <button data-src="zoho" class="${src === 'zoho' ? 'active' : ''}">Zoho task ID</button>
      </div>
      <div id="srcBody"></div>
      <label class="field-label" for="featName">2. Feature name <span class="muted">${src === 'text' ? '(required)' : '(optional)'}</span></label>
      <input id="featName" class="wide" placeholder="e.g. Skills — Primary/Secondary classification" value="${esc(state.newName || '')}">
      <label class="check"><input type="checkbox" id="withAuto"> Also generate Playwright test scripts <span class="muted">(for devs — adds a few minutes)</span></label>
      <div class="form-actions"><button class="primary big-btn" id="newStart" ${noAi || running ? 'disabled' : ''}>Write test cases</button><span class="muted small">Uses your own Claude login. You'll get test cases, an Excel file and a readable document, filed under the right module.</span></div>
    </div>`;
  const body = $('#srcBody');
  if (src === 'file') {
    body.innerHTML = `<div class="dropzone big" id="reqDrop">${state.newFile ? `<b>${esc(state.newFile.name)}</b> is ready · <button class="linklike" id="reqPick">choose a different file</button>` : 'Drop a .pdf, .docx, .txt or .md file here, or <button class="linklike" id="reqPick">choose a file</button>'}</div>`;
    const dz = $('#reqDrop');
    dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('over'); });
    dz.addEventListener('dragleave', () => dz.classList.remove('over'));
    dz.addEventListener('drop', e => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) { state.newFile = f; renderNew(); } });
    $('#reqPick').onclick = () => { state.fileTarget = files => { state.newFile = files[0]; renderNew(); }; $('#fileInput').click(); };
  } else if (src === 'text') {
    body.innerHTML = `<textarea id="reqText" rows="10" placeholder="Paste the user story, acceptance criteria, or spec text here…">${esc(state.newText || '')}</textarea>`;
    $('#reqText').oninput = e => { state.newText = e.target.value; };
  } else {
    body.innerHTML = zohoOk
      ? `<input id="reqZoho" class="wide" placeholder="SI4-T501, SI4-T502" value="${esc(state.newZoho || '')}"><p class="muted small">One or more task IDs, comma-separated. Or pick one from <a href="#tasks" data-go="tasks">Zoho tasks</a>.</p>`
      : `<p class="muted">Zoho isn't configured on this computer (see <a href="#setup" data-go="setup">Setup</a>). Upload the document or paste the text instead.</p>`;
    const z = $('#reqZoho'); if (z) z.oninput = e => { state.newZoho = e.target.value; };
  }
  $('#featName').oninput = e => { state.newName = e.target.value; };
  $('#srcSeg').onclick = e => { const b = e.target.closest('[data-src]'); if (b) { state.newSource = b.dataset.src; renderNew(); } };
  $('#newStart').onclick = startNewRequirement;
}

async function startNewRequirement() {
  const src = state.newSource || 'file', name = ($('#featName').value || '').trim();
  const withAutomation = $('#withAuto').checked;
  const btn = $('#newStart'); btn.disabled = true; btn.textContent = 'Starting…';
  try {
    let input;
    if (src === 'file') {
      if (!state.newFile) throw new Error('Choose a document first.');
      input = (await api(`/api/inbox?name=${encodeURIComponent(state.newFile.name)}`, { method: 'POST', body: state.newFile })).path;
    } else if (src === 'text') {
      const text = ($('#reqText').value || '').trim();
      if (!name) throw new Error('Give the feature a name.');
      if (text.length < 40) throw new Error('Paste the full requirement text (at least a few sentences).');
      input = (await api(`/api/inbox?name=${encodeURIComponent((name.replace(/[^\w -]/g, '').slice(0, 60) || 'requirement') + '.txt')}`, { method: 'POST', body: text })).path;
    } else {
      input = ($('#reqZoho')?.value || '').trim();
      if (!input) throw new Error('Enter a Zoho task ID.');
    }
    const entry = await post('/api/jobs', { action: 'new-requirement', source: src, input, name, withAutomation });
    setJob(entry);
    Object.assign(state, { newFile: null, newText: '', newZoho: '', newName: '', newWatch: entry.id });
    renderNewProgress(entry.id);
  } catch (err) { toast(err.message, true); btn.disabled = false; btn.textContent = 'Write test cases'; }
}

async function renderNewProgress(id) {
  clearInterval(state.newTimer);
  const draw = async () => {
    if (state.view !== 'new') return clearInterval(state.newTimer);
    const h = await api(`/api/history/${id}?since=999999999`).catch(() => null);
    if (!h) return;
    const done = h.status !== 'running';
    $('#newBody').innerHTML = `<div class="card form">
      <div class="prog-head">${statusTag(h)} <b>${esc(h.label)}</b> <span class="muted small">started ${when(h.startedAt)}</span></div>
      ${h.progress?.done.length || h.progress?.current ? progressHtml(h) : '<p class="muted"><span class="spinner"></span> Starting…</p>'}
      ${done ? (h.status === 'done'
        ? `<div class="banner ok-banner">✓ ${esc(h.details || 'Finished.')}</div>${outputsHtml(h)}<div class="form-actions">${h.code ? `<button class="primary" data-open-module="${h.code}">Open the module</button>` : ''}<button id="newAnother">Add another requirement</button></div>`
        : `<div class="banner warn-banner">${h.status === 'stopped' ? 'Stopped.' : 'It didn\'t finish — the log shows why.'}</div><div class="form-actions"><button data-history="${h.id}">Open the log</button><button id="newAnother">Try again</button></div>`)
        : `<p class="muted small">This usually takes 5–15 minutes. You can leave this page — it keeps running and is listed under Runs.</p><div class="form-actions"><button data-history="${h.id}">Watch the live log</button><button class="danger" id="newStop">Stop</button></div>`}
    </div>`;
    const again = $('#newAnother'); if (again) again.onclick = () => { clearInterval(state.newTimer); state.newWatch = null; renderNew(); };
    const stop = $('#newStop'); if (stop) stop.onclick = async () => { if (confirm('Stop writing test cases?')) await post('/api/jobs/stop', {}).catch(err => toast(err.message, true)); };
    if (done) clearInterval(state.newTimer);
  };
  await draw();
  state.newTimer = setInterval(draw, 3000);
}

// ─── tasks ───
async function loadTasks() {
  try { state.tasks = await api('/api/tasks'); } catch (err) { $('#taskList').innerHTML = `<p class="bad-text">${esc(err.message)}</p>`; return; }
  drawTasks();
}
function drawTasks() {
  const { tasks, modules } = state.tasks;
  const q = $('#taskSearch').value.toLowerCase();
  const list = tasks.filter(t => !q || `${t.prefix} ${t.name} ${t.assignee}`.toLowerCase().includes(q));
  $('#taskList').innerHTML = list.length ? `<div class="table-wrap"><table class="grid tasks"><thead><tr><th>Task</th><th>Status</th><th>Assignee</th><th>Module</th><th></th></tr></thead><tbody>
    ${list.map(t => `<tr>
      <td>${t.prefix ? `<span class="mono">${esc(t.prefix)}</span> ` : ''}${esc(t.name)}${t.url ? ` <a href="${esc(t.url)}" target="_blank" rel="noopener" title="Open in Zoho">↗</a>` : ''}<div class="task-files">${t.files.map(f => `<button class="linklike file-open" data-path="${esc(f)}">${esc(fname(f))}</button>`).join('')}</div></td>
      <td>${esc(t.status || '—')}${t.priority ? `<div class="muted small">${esc(t.priority)}</div>` : ''}</td>
      <td class="small">${esc(t.assignee || '—')}</td>
      <td>${t.modules.map(c => `<button class="code clickable" data-open-module="${c}">${c}</button><button class="icon small" data-unlink="${t.id}" data-code="${c}" title="Unlink">✕</button>`).join(' ') || `<select data-link="${t.id}"><option value="">Link to module…</option>${modules.map(m => `<option value="${m.code}">${esc(m.name)}</option>`).join('')}</select>`}</td>
      <td><button class="small-btn" data-write="${esc(t.prefix || t.id)}">Write test cases</button></td>
    </tr>`).join('')}</tbody></table></div>` : '<p class="muted pad">No Zoho tasks on this computer yet. Use <a href="#new" data-go="new">New requirement</a> with a Zoho task ID, a document, or pasted text.</p>';
}
$('#taskSearch').addEventListener('input', () => state.tasks && drawTasks());
$('#taskList').addEventListener('change', async e => {
  const s = e.target.closest('[data-link]'); if (!s || !s.value) return;
  try { await post(`/api/tasks/${s.dataset.link}/links`, { code: s.value }); toast('Linked'); } catch (err) { toast(err.message, true); }
  loadTasks(); loadModules(true);
});
$('#taskList').addEventListener('click', async e => {
  const u = e.target.closest('[data-unlink]');
  if (u) { await post(`/api/tasks/${u.dataset.unlink}/links`, { code: u.dataset.code, remove: true }).catch(err => toast(err.message, true)); loadTasks(); loadModules(true); return; }
  const w = e.target.closest('[data-write]');
  if (w) { state.newSource = 'zoho'; state.newZoho = w.dataset.write; state.newWatch = null; show('new'); }
});

// ─── setup ───
async function loadSetup(refresh) {
  $('#setupList').innerHTML = '<p class="muted"><span class="spinner"></span> Checking this computer…</p>';
  try { state.setup = await api(`/api/setup${refresh === true ? '?refresh' : ''}`); } catch (err) { $('#setupList').innerHTML = `<p class="bad-text">${esc(err.message)}</p>`; return; }
  const icon = { ok: '✓', warn: '!', missing: '✕' };
  $('#setupList').innerHTML = `${state.setup.blocking ? '' : '<div class="banner ok-banner">✓ This computer is ready.</div>'}<ul class="setup">${state.setup.items.map(i => `
    <li class="setup-item ${i.state}"><span class="setup-icon">${icon[i.state]}</span>
      <div><b>${esc(i.label)}</b> <span class="muted small">· needed for ${esc(i.needed)}</span><div class="muted">${esc(i.detail)}</div>
      ${i.fix ? `<div class="fix">${esc(i.fix).replace(/`([^`]+)`/g, '<code>$1</code>')}</div>` : ''}
      ${i.action ? `<button class="small-btn primary" data-job="${i.action}">Install</button>` : ''}</div></li>`).join('')}</ul>
    <p class="muted small">Start, stop or check the workspace from a terminal in the project folder: <code>npm run ui</code> · <code>npm run ui:stop</code> · <code>npm run ui:status</code></p>`;
  loadSetupFlag();
}
$('#setupRecheck').onclick = () => loadSetup(true);

// ─── tools ───
$('#importRuns').onclick = async () => {
  try { const r = await post('/api/import-past-runs', {}); toast(r.imported ? `Added ${r.imported} past run${r.imported > 1 ? 's' : ''} to Runs` : 'No new past runs found'); await loadModules(true); } catch (err) { toast(err.message, true); }
};
$('#grepRun').onclick = () => { const g = $('#grepInput').value.trim(); if (!g) return toast('Type a tag, e.g. @smoke', true); startJob('run-tests', { grep: g }); };
async function loadUnassigned() {
  const files = await api('/api/unassigned').catch(() => []);
  $('#unassignedList').innerHTML = '<p class="muted">Shared files, and files whose module could not be worked out.</p>' + renderFiles(files, true);
}

// ─── quick search (Ctrl/⌘+K) ───
const PAGES = [['home', 'Home', 'Overview and module status'], ['modules', 'Modules', 'Browse every module'], ['new', 'New requirement', 'Turn a requirement into test cases'],
  ['runs', 'Runs', 'Every run and its log'], ['tasks', 'Zoho tasks', 'Tasks pulled from Zoho'], ['setup', 'Setup', 'What this computer needs'], ['tools', 'Dev tools', 'Reports, lint, type-check'], ['help', 'How to use', 'Guide, shortcuts and fixes']];
function paletteItems(q) {
  q = q.trim().toLowerCase();
  const items = [
    ...PAGES.map(([v, t, d]) => ({ kind: 'Page', title: t, sub: d, run: () => show(v) })),
    ...state.modules.map(m => ({ kind: 'Module', title: m.name, sub: `${m.group} · ${m.caseCount} cases · ${m.lastRun ? (m.lastRun.failed ? `${m.lastRun.failed} failing` : 'passing') : 'not run'}`, code: m.code, run: () => openModule(m.code, 'overview') })),
    ...state.modules.map(m => ({ kind: 'Action', title: `Run tests — ${m.name}`, sub: 'Logs in first, then builds the reports', code: m.code, run: () => confirm(`Run ${m.name} tests now?`) && startJob('run-tests', { code: m.code, name: m.name }) })),
    { kind: 'Action', title: 'New requirement → test cases', sub: 'Upload, paste or Zoho ID', run: () => show('new') },
    { kind: 'Action', title: 'Open latest QA report', sub: 'Opens in a new tab', run: () => $('#openLatestReport').click() },
    { kind: 'Action', title: 'Switch light / dark theme', sub: '', run: () => $('#themeToggle').click() },
  ];
  if (!q) return items.filter(i => i.kind !== 'Action' || !i.code).slice(0, 12);
  const score = i => { const t = `${i.title} ${i.code || ''}`.toLowerCase(); return t.startsWith(q) ? 3 : t.split(/[\s—-]+/).some(w => w.startsWith(q)) ? 2 : t.includes(q) || i.sub.toLowerCase().includes(q) ? 1 : 0; };
  return items.map(i => [i, score(i)]).filter(x => x[1]).sort((a, b) => b[1] - a[1]).map(x => x[0]).slice(0, 14);
}
function openPalette() {
  const pal = $('#palette'), inp = $('#paletteInput');
  pal.classList.remove('hidden'); inp.value = ''; inp.focus(); state.palSel = 0; drawPalette();
}
function closePalette() { $('#palette').classList.add('hidden'); }
function drawPalette() {
  state.palItems = paletteItems($('#paletteInput').value);
  $('#paletteList').innerHTML = state.palItems.map((i, n) => `<li class="${n === state.palSel ? 'sel' : ''}" data-n="${n}"><span class="pk pk-${i.kind.toLowerCase()}">${i.kind}</span><span class="pt-title">${esc(i.title)}${i.code ? ` <span class="code">${i.code}</span>` : ''}</span><span class="muted small">${esc(i.sub)}</span></li>`).join('') || '<li class="muted">Nothing matches.</li>';
  $('#paletteList .sel')?.scrollIntoView({ block: 'nearest' });
}
$('#paletteInput').addEventListener('input', () => { state.palSel = 0; drawPalette(); });
$('#paletteInput').addEventListener('keydown', e => {
  if (e.key === 'ArrowDown') { e.preventDefault(); state.palSel = Math.min(state.palSel + 1, state.palItems.length - 1); drawPalette(); }
  if (e.key === 'ArrowUp') { e.preventDefault(); state.palSel = Math.max(state.palSel - 1, 0); drawPalette(); }
  if (e.key === 'Enter') { const it = state.palItems[state.palSel]; if (it) { closePalette(); it.run(); } }
  if (e.key === 'Escape') closePalette();
});
$('#paletteList').addEventListener('click', e => { const li = e.target.closest('[data-n]'); if (li) { closePalette(); state.palItems[li.dataset.n].run(); } });
$('#palette').addEventListener('click', e => { if (e.target.id === 'palette') closePalette(); });
$('#openPalette').onclick = openPalette;
document.addEventListener('keydown', e => {
  const typing = e.target.matches?.('input, textarea, select');
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); $('#palette').classList.contains('hidden') ? openPalette() : closePalette(); return; }
  if (typing || e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.key === '/') { e.preventDefault(); openPalette(); }
  if (e.key === '?') { e.preventDefault(); show('help'); return; }
  const go = { h: 'home', m: 'modules', n: 'new', r: 'runs', t: 'tasks' }[e.key];
  if (go && $('#palette').classList.contains('hidden') && $('#drawer').classList.contains('hidden')) show(go);
});

// Address-bar / back-button navigation (e.g. a bookmarked #modules/EMPSKL).
window.addEventListener('hashchange', () => {
  const [view, code] = location.hash.slice(1).split('/');
  if (view === 'modules' && code) { if (code !== state.current || state.view !== 'modules') openModule(code); }
  else if (view && view !== state.view && ['home', 'modules', 'new', 'runs', 'tasks', 'setup', 'tools', 'help'].includes(view)) show(view, false);
});

// ─── boot ───
(async () => {
  // Shared demo link → view-only: hide everything that changes things.
  try {
    const me = await api('/api/me');
    state.viewer = me.viewer;
    if (me.viewer) {
      document.body.classList.add('viewer');
      $('#jobBadge').insertAdjacentHTML('beforebegin', `<div class="viewer-badge"><b>👀 View-only demo</b><span>${me.name ? `Hi ${esc(me.name.split(' ')[0])} — you` : 'You'} can look around everything. Running tests and uploads are switched off.</span></div>`);
    }
  } catch { /* older server */ }
  const [view, code] = location.hash.slice(1).split('/');
  try { await loadModules(); } catch (err) { toast(err.message, true); }
  if (view === 'modules' && code) openModule(code);
  else show(['home', 'modules', 'new', 'runs', 'tasks', 'setup', 'tools', 'help'].includes(view) ? view : 'home');
  if (view !== 'home') loadSetupFlag();
  setTimeout(poll, 3000);
})();
