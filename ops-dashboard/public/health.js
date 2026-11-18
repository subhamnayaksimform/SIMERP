'use strict';
/* Health page — deploy-triggered API checks + regression suite. Uses helpers from app.js and charts.js. */

let H = null, hEnv = 'dev', hDays = 7, hSelected = null, hPoll = null;

const counts = r => {
  const sum = (k) => (r.api?.[k] ?? 0) + (r.regression?.[k] ?? 0);
  return { total: sum('total'), passed: sum('passed') + sum('flaky'), failed: sum('failed'), skipped: sum('skipped') };
};
const runRate = r => { const c = counts(r); return c.total - c.skipped > 0 ? Math.round((c.passed / (c.total - c.skipped)) * 100) : null; };
const reasonLabel = r => ({ deploy: 'after deploy', manual: 'manual', cron: 'scheduled' }[r] ?? r);

async function renderHealthPage() {
  try { H = await api(`/api/health/summary?env=${hEnv}&days=${hDays}`); }
  catch (e) { $('#h-kpis').innerHTML = `<div class="empty"><b>Could not load health data</b>${esc(e.message)}</div>`; return; }
  if (!hSelected || !H.runs.some(r => r.id === hSelected)) hSelected = H.runs[0]?.id ?? null;

  $('#h-env').innerHTML = H.envs.map(e => `<button data-env="${esc(e.name)}" class="${e.name === hEnv ? 'on' : ''}">${esc(e.label)}</button>`).join('');
  const env = H.envs.find(e => e.name === hEnv);
  $('#h-run').disabled = !env?.suites || Boolean(H.running);
  $('#h-run').title = env?.suites ? '' : 'Probed only — the saved test logins are dev accounts';
  $('#h-running').innerHTML = H.running ? `<span class="hb-inline">${Charts.heartbeat('busy', { width: 70, height: 20, beats: 2 })}Health run in progress · ${esc(H.running.phase)} · started ${ago(H.running.startedAt)}</span>` : '';
  if (H.running && !hPoll) hPoll = setInterval(() => { if (tab === 'health') renderHealthPage(); }, 15_000);
  if (!H.running && hPoll) { clearInterval(hPoll); hPoll = null; }

  renderHealthKpis();
  renderHealthRunsChart();
  renderLatency();
  renderHealthSelected();
  renderTimeline();
  renderHealthCases();
}

let htcView = 'api';
function renderHealthCases() {
  const run = selectedRun();
  if (!run) { $('#htc-body').innerHTML = '<div class="empty"><b>No run selected</b></div>'; return; }
  $('#htc-sub').textContent = `${when(run.finishedAt)} · ${run.version}${run.api ? ` · ${run.api.total} API checks` : ''}${run.regression ? ` · ${run.regression.total} regression tests` : ''}`;
  if (htcView === 'api') {
    const checks = run.api?.checks ?? [];
    if (!checks.length) { $('#htc-body').innerHTML = `<div class="empty"><b>${run.api ? 'Only failed checks are kept for older runs' : 'No API checks in this run'}</b>Pick one of the 3 newest runs to see every check.</div>`; return; }
    $('#htc-body').innerHTML = `<div class="panel flush" style="box-shadow:none"><table class="list"><thead><tr><th>Check</th><th>API</th><th>HTTP</th><th>Response</th><th>Result</th></tr></thead><tbody>${checks.map(c => `<tr class="clickable-row" data-case="${esc(c.id)}">
        <td><span class="mono small">${esc(c.id)}</span><div>${esc(c.title)}</div></td>
        <td class="mono small">${esc(c.endpoint ?? '—')}</td><td>${esc(c.httpStatus ?? '—')}</td>
        <td>${c.latencyMs !== undefined ? `<span style="color:${c.latencyMs > 3000 ? 'var(--bad)' : c.latencyMs > 1500 ? 'var(--warn)' : 'inherit'}">${c.latencyMs} ms</span>` : '—'}</td>
        <td><span class="pill ${c.status === 'failed' ? 'bad' : c.status === 'passed' ? 'good' : 'warn'}">${esc(c.status)}</span></td></tr>`).join('')}</tbody></table></div>`;
  } else {
    const reg = run.regression;
    if (!reg) { $('#htc-body').innerHTML = '<div class="empty"><b>The regression suite was not part of this run</b>Start a health run with “Regression suite” ticked.</div>'; return; }
    const byMod = new Map();
    for (const c of reg.checks ?? reg.failures) { const code = /^TC-([A-Z]+)-/.exec(c.id)?.[1] ?? 'OTHER'; (byMod.get(code) ?? byMod.set(code, []).get(code)).push(c); }
    $('#htc-body').innerHTML = [...byMod].sort((a, b) => b[1].filter(c => c.status === 'failed').length - a[1].filter(c => c.status === 'failed').length).map(([code, list]) => {
      const f = list.filter(c => c.status === 'failed').length, name = SUITE?.find(m => m.code === code)?.name ?? code;
      return `<details class="regmod"${f ? ' open' : ''}><summary><span class="modchip">${esc(code)}</span><b>${esc(name)}</b> <span class="small muted">${list.length - f}/${list.length} passed</span>${f ? ` <span class="pill bad">${f} failed</span>` : ''}</summary>
        <div class="rows">${list.map(c => `<div class="clickable-row" data-case="${esc(c.id)}"><span class="pill ${c.status === 'failed' ? 'bad' : c.status === 'passed' ? 'good' : 'warn'}">${esc(c.status)}</span> <span class="mono small">${esc(c.id)}</span> ${esc(c.title)}</div>`).join('')}</div></details>`;
    }).join('');
  }
}
$('#htc-view').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; htcView = b.dataset.v; $$('#htc-view button').forEach(x => x.classList.toggle('on', x === b)); renderHealthCases(); });

function renderHealthKpis() {
  const last = H.runs[0], probe = H.probes[H.probes.length - 1];
  const up = H.probes.filter(p => p.up).length;
  const avail = H.probes.length ? Math.round((up / H.probes.length) * 1000) / 10 : null;
  const deploy = H.deploys[0];
  const tile = (label, n, detail, cls = '') => `<div class="stat" style="cursor:default"><span class="l">${label}</span><span class="n ${cls}">${n}</span><span class="d">${detail}</span></div>`;
  const status = !probe ? ['—', 'no probe yet — install the cron job', ''] : !probe.up ? ['Down', `API not answering · ${ago(probe.at)}`, 'bad'] : last && !last.ok ? ['Failing', `last health run ${ago(last.finishedAt)}`, 'bad'] : last ? ['Healthy', `last health run ${ago(last.finishedAt)}`, 'good'] : ['Up', 'no health run yet', 'good'];
  $('#h-kpis').innerHTML = [
    tile('Status', status[0], status[1], status[2]).replace('</div>', `${Charts.heartbeat(!probe || !probe.up ? 'down' : status[2] === 'bad' ? 'bad' : 'ok', { width: 160, height: 30 })}</div>`),
    tile('Deployed version', probe?.version || '—', deploy ? `last deploy ${ago(deploy.at)} (${deploy.kinds.join(' + ')})` : probe?.uptime ? `API up for ${Math.round(probe.uptime / 3600)} h` : ''),
    tile('API checks', last?.api ? `${last.api.passed + last.api.flaky}/${last.api.total}` : '—', last?.api ? `avg ${last.api.avgLatencyMs ?? '—'} ms per call` : 'not run yet', last?.api ? (last.api.failed ? 'bad' : 'good') : ''),
    tile('Regression suite', last?.regression ? `${last.regression.passed + last.regression.flaky}/${last.regression.total}` : '—', last?.regression ? `${last.regression.failed} failed · ${last.regression.flaky} flaky` : 'not in the last run', last?.regression ? (last.regression.failed ? 'bad' : 'good') : ''),
    tile('API availability', avail === null ? '—' : `${avail}%`, `${H.probes.length} probes in ${hDays} day${hDays > 1 ? 's' : ''}`),
  ].join('');
}

function renderHealthRunsChart() {
  const runs = H.runs.slice().reverse();
  const series = [
    { name: 'Passed', color: 'var(--good)', values: runs.map(r => counts(r).passed) },
    { name: 'Failed', color: 'var(--bad)', values: runs.map(r => counts(r).failed) },
  ];
  $('#h-legend').innerHTML = series.map(s => `<span><i style="background:${s.color}"></i>${s.name}</span>`).join('');
  if (runs.length < 2) {
    const r = runs[0];
    $('#h-runs-chart').innerHTML = r
      ? `<div class="empty"><b>${counts(r).passed} passed · ${counts(r).failed} failed</b>Only one health run so far — the trend appears after the next deploy (or press ▶ Run health check).</div>`
      : '<div class="empty"><b>No health runs yet</b>They start automatically after each deploy once the cron job is installed — or press ▶ Run health check.</div>';
    return;
  }
  Charts.area($('#h-runs-chart'), {
    labels: runs.map(r => r.finishedAt), series, height: 230,
    fmtLabel: (t, long) => { if (!long) return shortDate(t); const r = runs.find(x => x.finishedAt === t); return `${when(t)} · ${r.version} · ${reasonLabel(r.reason)}`; },
  });
}

function renderLatency() {
  const pts = H.probes.filter(p => p.ms !== null);
  const step = Math.max(1, Math.ceil(pts.length / 200));
  const sampled = pts.filter((_, i) => i % step === 0 || i === pts.length - 1);
  const up = H.probes.filter(p => p.up).length;
  $('#h-avail').textContent = H.probes.length ? `health-check probe every 10 minutes · ${up}/${H.probes.length} up` : 'health-check probe every 10 minutes';
  if (sampled.length < 2) { $('#h-latency').innerHTML = '<div class="empty"><b>Not enough probes yet</b>The deploy watcher probes every 10 minutes once the cron job is installed (npm run ops:cron:install -- --yes).</div>'; return; }
  Charts.area($('#h-latency'), {
    labels: sampled.map(p => p.at), height: 200,
    series: [{ name: 'Response ms', color: 'var(--s1)', values: sampled.map(p => p.ms) }],
    fmtLabel: (t, long) => { if (!long) return hDays <= 1 ? new Date(t).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }) : shortDate(t); const p = sampled.find(x => x.at === t); return `${when(t)} · ${p.version}${p.up ? '' : ' · DOWN'}`; },
  });
}

function selectedRun() { return H.runs.find(r => r.id === hSelected) ?? null; }

function healthFailures(run) {
  return [
    ...(run.api?.checks ?? []).filter(c => c.status === 'failed').map(c => ({ ...c, kind: 'API' })),
    ...(run.regression?.failures ?? []).map(c => ({ ...c, kind: 'UI' })),
  ];
}

function renderHealthSelected() {
  const run = selectedRun();
  if (!run) {
    $('#h-failures').innerHTML = '<div class="empty"><b>No run selected</b></div>';
    $('#h-modules').innerHTML = '<div class="empty"><b>No data yet</b></div>';
    return;
  }
  const fails = healthFailures(run);
  $('#h-fail-title').textContent = fails.length ? `${fails.length} failure${fails.length > 1 ? 's' : ''}` : 'No failures';
  $('#h-fail-sub').textContent = `${when(run.finishedAt)} · ${run.version} · ${reasonLabel(run.reason)}${run.error ? ` · ${run.error}` : ''}`;
  $('#h-mod-sub').textContent = `run of ${when(run.finishedAt)}`;
  $('#h-failures').innerHTML = fails.length ? fails.map((f, i) => `<div class="hfail">
      <span class="pill ${f.kind === 'API' ? 'acc' : 'warn'}">${f.kind}</span>
      <span><span class="k">${esc(f.id)}</span> ${esc(f.title)}${f.endpoint ? `<div class="small muted">${esc(f.endpoint)} → HTTP ${esc(f.httpStatus ?? '?')}${f.latencyMs !== undefined ? ` in ${f.latencyMs} ms` : ''}</div>` : f.file ? `<div class="small muted mono">${esc(f.file)}</div>` : ''}</span>
      <button class="small bad" data-hreport="${i}">Report to Zoho</button>
      ${f.error ? `<span class="e">${esc(f.error)}</span>` : ''}
      ${f.screenshot ? `<img loading="lazy" src="/health-artifacts/${f.screenshot.split('/').map(encodeURIComponent).join('/')}" alt="Screenshot of the failure" data-zoom>` : ''}
    </div>`).join('') : `<div class="empty"><b>All ${counts(run).total} checks passed</b>Nothing to report.</div>`;

  const byMod = {};
  if (run.api?.failed) byMod['API checks'] = run.api.failed;
  for (const [code, c] of Object.entries(run.regression?.byModule ?? {})) if (c.failed) byMod[code] = c.failed;
  const rows = Object.entries(byMod).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
  if (rows.length) Charts.bars($('#h-modules'), { rows: rows.slice(0, 10), color: 'var(--bad)', unit: ' failed' });
  else $('#h-modules').innerHTML = `<div class="empty"><b>No failing modules</b>${run.regression ? `${Object.keys(run.regression.byModule).length} modules ran clean` : 'API checks only in this run'}</div>`;
}

function renderTimeline() {
  const items = [
    ...H.deploys.map(d => ({ at: d.at, html: `<span class="ico acc">⇪</span><div><b>Deploy</b> · ${esc(d.kinds.join(' + '))} ${d.fromVersion !== d.toVersion ? `${esc(d.fromVersion)} → <b>${esc(d.toVersion)}</b>` : esc(d.toVersion)}<div class="meta">${when(d.at)} · health run ${esc(d.healthRun)}</div></div>` })),
    ...H.runs.map(r => ({ at: r.startedAt, id: r.id, html: `<span class="ico ${r.ok ? 'good' : 'bad'}">${r.ok ? '✓' : '✗'}</span><div><b>${r.ok ? 'Healthy' : 'Failing'}</b> · ${counts(r).passed}/${counts(r).total} passed${counts(r).failed ? ` · <span style="color:var(--bad)">${counts(r).failed} failed</span>` : ''} <span class="small muted">· ${fmtPct(runRate(r))}</span><div class="meta">${when(r.finishedAt)} · ${esc(r.version)} · ${reasonLabel(r.reason)} · ${[r.api && 'API', r.regression && 'regression'].filter(Boolean).join(' + ')}</div></div>` })),
  ].sort((a, b) => b.at.localeCompare(a.at));
  $('#h-timeline').innerHTML = items.length ? items.slice(0, 60).map(i => `<div class="fi${i.id ? ' clickable' : ''}${i.id === hSelected ? ' sel' : ''}"${i.id ? ` data-hrun="${esc(i.id)}"` : ''}>${i.html}</div>`).join('')
    : '<div class="empty"><b>Nothing yet</b>Deploys and health runs show up here.</div>';
}

/** Bug text for a health failure — fixed template from the run data (no AI). */
function healthBug(run, f) {
  const envLabel = H.envs.find(e => e.name === run.env)?.label ?? run.env;
  const dupe = (W?.bugs ?? []).find(b => !b.status.closed && f.id && b.title.includes(f.id));
  return {
    note: dupe ? `Possible duplicate: <b>${esc(dupe.key)}</b> “${esc(dupe.title)}” (${esc(dupe.status.name)}) already mentions ${esc(f.id)}.` : '',
    title: `[${envLabel} ${run.version}] ${f.id} ${f.title}`.slice(0, 250),
    description: [
      `Health check failed on ${envLabel} after ${reasonLabel(run.reason) === 'after deploy' ? 'a deploy' : 'a manual run'} — API version ${run.version}${run.frontendBuild ? `, frontend build ${run.frontendBuild}` : ''}.`,
      `Check: ${f.id} ${f.title} (${f.kind === 'API' ? 'API check' : 'regression test'})`,
      f.endpoint ? `Endpoint: ${f.endpoint} → HTTP ${f.httpStatus ?? '?'}${f.latencyMs !== undefined ? ` in ${f.latencyMs} ms` : ''}` : `Spec: ${f.file ?? ''}`,
      `Run: ${run.id} · ${when(run.startedAt)}`,
      '',
      'Steps to reproduce:',
      `1. npx playwright test --config=tests/playwright.config.ts --project=chromium --grep "${f.id}"`,
      f.endpoint ? `2. Or call ${f.endpoint} with a logged-in session` : '2. (add the manual steps)',
      '',
      `Expected: ${f.title}`,
      'Actual: the check fails with the error below',
      '',
      'Error:',
      f.error ?? '',
      f.screenshot ? `\nScreenshot: reports/ops/health/artifacts/${f.screenshot} (attach it in Zoho — file upload through the API is not available)` : '',
    ].join('\n').trim(),
  };
}

// ─── events ───

$('#h-env').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; hEnv = b.dataset.env; hSelected = null; renderHealthPage(); });
$('#h-days').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  hDays = Number(b.dataset.d);
  $$('#h-days button').forEach(x => x.classList.toggle('on', x === b));
  renderHealthPage();
});
$('#h-timeline').addEventListener('click', e => { const r = e.target.closest('[data-hrun]'); if (!r) return; hSelected = r.dataset.hrun; renderHealthSelected(); renderTimeline(); renderHealthCases(); });
$('#h-failures').addEventListener('click', e => {
  const img = e.target.closest('[data-zoom]');
  if (img) return dialog({ title: 'Screenshot', body: `<img src="${img.src}" style="width:100%;border-radius:10px">` });
  const b = e.target.closest('[data-hreport]'); if (!b) return;
  const run = selectedRun();
  newBugDialog(healthBug(run, healthFailures(run)[Number(b.dataset.hreport)]));
});
$('#h-run').addEventListener('click', async () => {
  const ok = await dialog({
    title: 'Run a health check now?',
    ok: '▶ Start',
    body: `<p>Runs against <b>${esc(H.envs.find(e => e.name === hEnv)?.label)}</b> with Playwright (logs in first). No Claude needed.</p>
      <label class="chk" style="margin:8px 0"><input type="checkbox" id="h-s-api" checked> API checks — ${'about 1 minute'}</label>
      <label class="chk" style="margin:8px 0"><input type="checkbox" id="h-s-reg"> Regression suite (@regression, 221 UI tests — takes a while)</label>
      <p class="muted small">Waits if a QA Workspace test run is in progress, so the two never share the same logins.</p>`,
    onOk: async () => {
      const suites = [$('#h-s-api').checked && 'api', $('#h-s-reg').checked && 'regression'].filter(Boolean);
      await api('/api/health/run', { method: 'POST', body: JSON.stringify({ env: hEnv, suites }) });
    },
  });
  if (ok) setTimeout(renderHealthPage, 1500);
});
