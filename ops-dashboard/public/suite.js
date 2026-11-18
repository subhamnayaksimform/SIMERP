'use strict';
/* Test suite + Runs & reports pages. Uses helpers from app.js ($, api, esc, ago, dialog, runs…) and charts.js. */

let suiteSort = 'group';
let RUNS = null, FAILING = null, REPORTS = null;
let runsRange = 90, repKind = 'qa';

const rateColor = r => (r === null || r === undefined ? 'var(--skip)' : r >= 90 ? 'var(--good)' : r >= 70 ? 'var(--warn)' : 'var(--bad)');
const rateRing = (lr, size = 54, stroke = 6) => Charts.ring(
  lr ? [{ value: lr.passed + lr.flaky, color: 'var(--good)' }, { value: lr.failed, color: 'var(--bad)' }, { value: lr.skipped, color: 'var(--skip)' }] : [],
  lr ? fmtPct(lr.rate) : '—', size, stroke);
const kpi = (label, n, detail) => `<div class="stat" style="cursor:default"><span class="l">${label}</span><span class="n">${n}</span><span class="d">${detail}</span></div>`;

// ─── test suite ───

function renderSuite() {
  if (!SUITE) return;
  const ran = SUITE.filter(m => m.lastRun && m.lastRun.rate !== null);
  const cases = SUITE.reduce((a, m) => a + m.caseCount, 0);
  const avg = ran.length ? Math.round(ran.reduce((a, m) => a + m.lastRun.rate, 0) / ran.length) : null;
  const failing = ran.filter(m => m.lastRun.rate < 70).length;
  const stale = SUITE.filter(m => !m.lastRun || Date.now() - new Date(m.lastRun.at).getTime() > 14 * DAY).length;
  $('#suite-kpis').innerHTML = [
    kpi('Modules', SUITE.length, `${cases.toLocaleString()} test cases`),
    kpi('Average last-run pass rate', fmtPct(avg), `over ${ran.length} modules that have run`),
    kpi('Modules below 70%', failing, 'need a look'),
    kpi('Not run in 14 days', stale, 'results may be out of date'),
  ].join('');

  const q = $('#suite-q').value.trim().toLowerCase();
  let list = SUITE.filter(m => !q || m.name.toLowerCase().includes(q) || m.code.toLowerCase().includes(q));
  const rate = m => m.lastRun?.rate ?? -1;
  if (suiteSort === 'worst') list = [...list].sort((a, b) => rate(a) - rate(b));
  if (suiteSort === 'cases') list = [...list].sort((a, b) => b.caseCount - a.caseCount);
  if (suiteSort === 'stale') list = [...list].sort((a, b) => (a.lastRun?.at ?? '').localeCompare(b.lastRun?.at ?? ''));

  let html = '';
  for (const m of list) {
    const lr = m.lastRun;
    html += `<div class="mcard">
      <div class="hd">${rateRing(lr)}<div><div class="nm">${esc(m.name)}</div><div class="cd">${esc(m.code)} · ${m.caseCount} cases${m.specFiles ? ` · ${m.specFiles} specs` : ''}</div><div class="grp">${esc(m.group)}</div></div></div>
      <div class="meta">${lr ? `Last run ${ago(lr.at)} · ${lr.passed}/${lr.total} passed${lr.failed ? ` · <span style="color:var(--bad)">${lr.failed} failed</span>` : ''}` : 'Never run'}${m.runCount > 1 ? ` · ${m.runCount} runs` : ''}</div>
      <div class="sp">${Charts.spark(m.trend, rateColor(lr?.rate))}</div>
      <div class="ft"><button class="small primary" data-srun="${esc(m.code)}" data-cases="${m.caseCount}">▶ Run</button><button class="small" data-sdetail="${esc(m.code)}">Details</button><button class="small" data-sai="${esc(m.code)}" title="Add or update this module's tests with Claude">✨</button>${lr?.report ? `<a class="small" href="/reports/${esc(lr.report)}" target="_blank" rel="noopener" style="align-self:center">Last report ↗</a>` : ''}</div>
    </div>`;
  }
  $('#suite-grid').innerHTML = html || '<div class="empty"><b>No modules match</b></div>';
}
$('#suite-q').addEventListener('input', renderSuite);

// ─── all test cases (merged across modules) ───

let CASES = null, suiteView = 'modules';
$('#suite-view').addEventListener('click', async e => {
  const b = e.target.closest('button'); if (!b) return;
  suiteView = b.dataset.v;
  $$('#suite-view button').forEach(x => x.classList.toggle('on', x === b));
  $('#suite-grid').classList.toggle('hidden', suiteView !== 'modules');
  $('#suite-sort').classList.toggle('hidden', suiteView !== 'modules');
  $('#suite-q').classList.toggle('hidden', suiteView !== 'modules');
  $('#suite-cases').classList.toggle('hidden', suiteView !== 'cases');
  if (suiteView === 'cases') { if (!CASES) { $('#sc-table').innerHTML = '<tr><td><div class="skel"></div></td></tr>'; CASES = await api('/api/suite/cases'); } renderCases(); }
});
function renderCases() {
  const caseTasks = new Map();
  for (const t of LINKS?.tasks ?? []) for (const m of t.modules) for (const id of m.caseIds) (caseTasks.get(id) ?? caseTasks.set(id, []).get(id)).push(t.key);
  fillSelect($('#sc-mod'), [...new Map(CASES.map(c => [c.module, c.moduleName])).entries()].sort((a, b) => a[1].localeCompare(b[1])).map(([id, name]) => ({ id, name: `${name} (${id})` })));
  fillSelect($('#sc-cat'), [...new Set(CASES.map(c => c.category).filter(Boolean))].sort().map(c => ({ id: c, name: c })));
  const q = $('#sc-q').value.trim().toLowerCase(), mod = $('#sc-mod').value, cat = $('#sc-cat').value, link = $('#sc-link').value;
  const rows = CASES.filter(c => (!q || c.id.toLowerCase().includes(q) || c.title.toLowerCase().includes(q)) && (!mod || c.module === mod) && (!cat || c.category === cat)
    && (!link || (link === 'linked') === caseTasks.has(c.id)));
  $('#sc-count').textContent = `${rows.length.toLocaleString()} of ${CASES.length.toLocaleString()} cases`;
  $('#sc-table').innerHTML = `<thead><tr><th>Case</th><th>Title</th><th>Module</th><th>Category</th><th>Priority</th><th>Tasks</th></tr></thead><tbody>${rows.slice(0, 500).map(c => `<tr class="clickable-row" data-case="${esc(c.id)}">
      <td class="key">${esc(c.id)}</td><td class="title">${esc(c.title)}</td><td class="small">${esc(c.moduleName)}</td><td><span class="pill">${esc(c.category || '—')}</span></td><td class="small">${esc(c.priority)}</td>
      <td class="small mono">${(caseTasks.get(c.id) ?? []).map(esc).join(', ') || '<span class="muted">—</span>'}</td></tr>`).join('')}</tbody>
    <tfoot><tr><td colspan="6" class="count">${rows.length > 500 ? `Showing 500 of ${rows.length.toLocaleString()} — narrow the filters` : `${rows.length.toLocaleString()} cases`}</td></tr></tfoot>`;
}
['#sc-q', '#sc-mod', '#sc-cat', '#sc-link'].forEach(sel => $(sel).addEventListener('input', () => CASES && renderCases()));
$('#suite-sort').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  suiteSort = b.dataset.sort;
  $$('#suite-sort button').forEach(x => x.classList.toggle('on', x === b));
  renderSuite();
});

$('#suite-grid').addEventListener('click', async e => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.dataset.srun) return runModule(b.dataset.srun, Number(b.dataset.cases));
  if (b.dataset.sdetail) return moduleDetailDialog(b.dataset.sdetail);
  if (b.dataset.sai) return moduleAiDialog(b.dataset.sai, SUITE.find(x => x.code === b.dataset.sai)?.name);
});

/** Run an existing module suite — plain Playwright, no Claude; pick test types (running.js). */
function runModule(code, cases) {
  const m = SUITE?.find(x => x.code === code);
  return testRunDialog({ name: `${m?.name ?? code} (${cases} cases)`, code });
}

async function moduleDetailDialog(code) {
  const d = await api(`/api/suite/module/${code}`).catch(err => ({ error: err.message }));
  if (d.error) return alert(d.error);
  const cats = [...new Set(d.cases.map(c => c.category).filter(Boolean))];
  await dialog({
    title: `${d.name} · ${d.code}`,
    body: `<p class="muted small">${d.caseCount} test cases · ${d.runs.length} runs on record${d.docs.length ? ` · ${d.docs.length} docs` : ''}</p>
      <h4 style="margin:14px 0 6px">Recent runs</h4>
      <div class="rows">${d.runs.slice(0, 8).map(r => `<div><span style="color:${rateColor(Math.round(((r.passed + r.flaky) / Math.max(1, r.total - r.skipped)) * 100))}">●</span> ${when(r.at)} · <b>${r.passed}/${r.total}</b> passed${r.failed ? `, ${r.failed} failed` : ''} <span class="muted small">· ${esc(r.label)}</span>${r.report ? ` · <a href="/reports/${esc(r.report)}" target="_blank" rel="noopener">report ↗</a>` : ''}</div>`).join('') || '<p class="muted">No runs yet.</p>'}</div>
      ${d.failing.length ? `<h4 style="margin:14px 0 6px">Failing in the last report</h4><div class="rows">${d.failing.slice(0, 15).map(f => `<div class="ftest clickable-row" data-case="${esc(f.id)}"><span>${esc(f.id)} ${esc(f.title)}</span><span></span><span class="e" title="${esc(f.error)}">${esc(f.error)}</span></div>`).join('')}</div>` : ''}
      <h4 style="margin:14px 0 6px">Test cases</h4>
      <div class="toolbar" style="margin-bottom:8px"><input type="search" id="mc-q" placeholder="Search cases…" style="flex:1">${cats.length ? `<select id="mc-cat"><option value="">All categories</option>${cats.map(c => `<option>${esc(c)}</option>`).join('')}</select>` : ''}</div>
      <div id="mc-list" class="rows" style="max-height:320px;overflow:auto"></div>`,
    onOpen: () => {
      const draw = () => {
        const q = $('#mc-q').value.trim().toLowerCase(), cat = $('#mc-cat')?.value ?? '';
        const rows = d.cases.filter(c => (!q || c.id.toLowerCase().includes(q) || c.title.toLowerCase().includes(q)) && (!cat || c.category === cat));
        $('#mc-list').innerHTML = rows.slice(0, 300).map(c => `<div class="clickable-row" data-case="${esc(c.id)}"><span class="mono">${esc(c.id)}</span> ${esc(c.title)} ${c.category ? `<span class="pill">${esc(c.category)}</span>` : ''}${c.priority ? ` <span class="muted small">${esc(c.priority)}</span>` : ''}</div>`).join('') + (rows.length > 300 ? `<div class="muted small">…and ${rows.length - 300} more — search to narrow down</div>` : '') || '<p class="muted">No cases match.</p>';
      };
      $('#mc-q').addEventListener('input', draw);
      $('#mc-cat')?.addEventListener('change', draw);
      draw();
    },
  });
}

// ─── runs & reports ───

async function renderRunsPage() {
  if (!RUNS) [RUNS, FAILING, REPORTS] = await Promise.all([api('/api/suite/runs'), api('/api/suite/failing'), api('/api/reports')]);
  const since = Date.now() - 30 * DAY;
  const recent = RUNS.filter(r => new Date(r.at).getTime() >= since);
  const executed = recent.reduce((a, r) => a + r.total, 0);
  const rated = recent.filter(r => r.rate !== null);
  const avg = rated.length ? Math.round(rated.reduce((a, r) => a + r.rate, 0) / rated.length) : null;
  $('#runs-kpis').innerHTML = [
    kpi('Runs in the last 30 days', recent.length, `${RUNS.length} on record`),
    kpi('Tests executed (30 days)', executed.toLocaleString(), 'across all runs'),
    kpi('Average pass rate (30 days)', fmtPct(avg), 'passed + flaky, skips excluded'),
    kpi('Flaky tests', FAILING.filter(f => f.flaky).length, `of the ${FAILING.length} most failing`),
  ].join('');
  renderRunsChart();

  $('#failing').innerHTML = FAILING.length ? FAILING.map(f => {
    const pct = Math.round((f.fails / f.seen) * 100);
    return `<div class="failrow" data-case="${esc(f.id)}">
      <div class="t"><div><span class="modchip">${esc(f.code)}</span><b>${esc(f.id)}</b> ${f.flaky ? '<span class="pill warn">flaky</span>' : '<span class="pill bad">fails every run</span>'}</div><div class="nm" title="${esc(f.title)}">${esc(f.title.replace(f.id, '').trim() || '—')}</div></div>
      <div class="failrate"><span>failed ${f.fails} of ${f.seen} runs</span><div class="track"><i style="width:${pct}%"></i></div></div>
      <span class="small muted">${ago(f.lastFailAt)}</span>
      <div class="e" title="${esc(f.lastError)}">${esc(f.lastError || 'no error text recorded')}</div>
    </div>`;
  }).join('') : '<div class="empty"><b>No repeated failures</b></div>';
  renderReports();
}

function renderRunsChart() {
  if (!RUNS || $('#tab-runs').classList.contains('hidden')) return;
  const since = Date.now() - runsRange * DAY;
  const pts = RUNS.filter(r => r.rate !== null && new Date(r.at).getTime() >= since).slice().reverse();
  if (pts.length < 2) { $('#runs-chart').innerHTML = '<div class="empty"><b>Not enough runs in this range</b></div>'; return; }
  Charts.area($('#runs-chart'), {
    labels: pts.map(r => r.at),
    series: [{ name: 'Pass rate %', color: 'var(--s3)', values: pts.map(r => r.rate) }], maxY: 100,
    fmtLabel: (t, long) => {
      if (!long) return shortDate(t);
      const r = pts.find(x => x.at === t);
      return `${when(t)} · ${r.label} · ${r.passed}/${r.total}`;
    },
  });
}
$('#runs-range').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  runsRange = Number(b.dataset.range);
  $$('#runs-range button').forEach(x => x.classList.toggle('on', x === b));
  renderRunsChart();
});
window.addEventListener('resize', () => { clearTimeout(window.__rr); window.__rr = setTimeout(renderRunsChart, 150); });

function renderReports() {
  if (!REPORTS) return;
  const q = $('#rep-q').value.trim().toLowerCase();
  if (repKind === 'qa') {
    const list = REPORTS.qa.filter(r => !q || r.title.toLowerCase().includes(q) || r.file.toLowerCase().includes(q));
    $('#reports').innerHTML = list.slice(0, 120).map(r => `<div>
        <span><a href="/reports/${esc(r.file)}" target="_blank" rel="noopener">${esc(r.title)}</a> <span class="muted small">· ${when(r.at)}</span></span>
        <span class="small"><b style="color:${rateColor(r.rate)}">${fmtPct(r.rate)}</b> · ${r.passed}/${r.total}</span>
        <div class="mini" title="${r.passed} passed · ${r.flaky} flaky · ${r.failed} failed · ${r.skipped} skipped"><i style="width:${(r.passed / r.total) * 100}%;background:var(--good)"></i><i style="width:${(r.flaky / r.total) * 100}%;background:var(--warn)"></i><i style="width:${(r.failed / r.total) * 100}%;background:var(--bad)"></i></div>
      </div>`).join('') || '<p class="muted">No reports match.</p>';
  } else {
    const list = REPORTS.pipeline.filter(r => !q || r.file.toLowerCase().includes(q));
    const stat = (r, re) => r.stats.find(s => re.test(s.label))?.value ?? '—';
    $('#reports').innerHTML = list.slice(0, 120).map(r => `<div>
        <span><a href="/reports/${esc(r.file)}" target="_blank" rel="noopener">Pipeline report</a> <span class="muted small">· ${when(r.at)}</span></span>
        <span class="small muted">${stat(r, /total cases/)} cases · ${stat(r, /spec file/)} specs · ${stat(r, /requirement set/)} req</span>
      </div>`).join('') || '<p class="muted">No reports match.</p>';
  }
}
$('#rep-q').addEventListener('input', renderReports);
$('#rep-kind').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  repKind = b.dataset.k;
  $$('#rep-kind button').forEach(x => x.classList.toggle('on', x === b));
  renderReports();
});
