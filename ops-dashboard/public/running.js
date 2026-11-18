'use strict';
/* Running tab + every "start something" dialog: Playwright runs (pick test types) and the
   optional Claude jobs (bug re-test, task testing pipeline with chat input, module updates).
   Uses helpers from app.js / charts.js. */

let ACTS = [], AI = null, actOpen = null, actPoll = null;
const TYPES = [['smoke', 'Smoke'], ['functional', 'Functional'], ['negative', 'Negative'], ['boundary', 'Boundary'], ['regression', 'Regression'], ['security', 'Security'], ['a11y', 'Accessibility'], ['integration', 'Integration']];
const ACTIVE = ['queued', 'waiting', 'running'];

async function loadActivities() {
  const before = new Map(ACTS.map(a => [a.id, a.status]));
  [ACTS, AI] = await Promise.all([api('/api/activities').catch(() => []), AI ? AI : api('/api/ai/status').catch(() => ({ available: false }))]);
  const n = ACTS.filter(a => ACTIVE.includes(a.status)).length, approve = ACTS.filter(a => a.status === 'needs-approval').length;
  $('#nb-running').textContent = n || approve ? `${n}${approve ? ` · ${approve}!` : ''}` : '';
  if (tab === 'running') renderRunning();
  refreshActBoxes();
  // Something I started just finished → say so on whatever page I'm on.
  const done = ACTS.find(a => ACTIVE.includes(before.get(a.id)) && !ACTIVE.includes(a.status));
  if (done) finishedToast(done);
}

// ─── run status + result on the item itself (popup, To-be-tested card, list rows) ───

const ACT_DETAIL = {}; // activity id → full activity (result, log) once it has finished
const VERB = { 'ai-retest': 'Claude is re-testing this bug', 'ai-pipeline': 'Claude is writing tests for this task', 'ai-module': 'Claude is updating the module tests', tests: 'Running its tests' };
const usd = c => (c ? ` · Claude cost $${c.toFixed(2)}` : '');

function actHeadline(a, d) {
  const s = a.summary ?? {};
  if (a.status === 'failed') return `<b style="color:var(--bad)">✗ ${a.usesClaude ? 'Claude job' : 'Test run'} failed</b>${a.error ? ` — ${esc(a.error)}` : ''}`;
  if (a.status === 'stopped') return '<b>■ Stopped</b>';
  if (a.type === 'ai-retest') return { fixed: '<b style="color:var(--good)">✓ Re-test passed — the bug looks fixed</b>', 'still-failing': '<b style="color:var(--bad)">✗ Re-test still fails — the bug is still there</b>' }[s.verdict] ?? '<b>? Re-test was inconclusive</b> — no spec could be verified';
  if (a.type === 'tests') return s.total ? `<b style="color:${s.failed ? 'var(--bad)' : 'var(--good)'}">${s.failed ? '✗' : '✓'} ${(s.passed ?? 0) + (s.flaky ?? 0)}/${s.total} passed</b>${s.failed ? ` · ${s.failed} failed` : ''}` : '<b>No tests ran</b>';
  return `<b style="color:var(--good)">✓ Tests written</b> · ${s.module ? `module ${esc(s.module)} · ` : ''}${s.cases ?? '?'} cases · ${s.specs ?? 0} specs${s.total ? ` · new tests ${s.passed}/${s.total} passed` : ''}`;
}

/** The newest job for a task/bug: live progress while it runs, then its result (and approval for re-tests). */
function actBox(key) {
  const a = ACTS.find(x => x.key === key);
  if (!a) return '';
  if (ACTIVE.includes(a.status)) {
    const busy = a.status === 'running';
    return `<div class="run actbox is-live"><div><b>${a.usesClaude ? '✨ ' : '▶ '}${busy ? esc(VERB[a.type] ?? a.title) : 'Queued — waiting for another test run to finish'}…</b></div>
      <div class="small muted">${esc(a.phase ?? 'starting')} · started ${ago(a.startedAt)} · ${dur(a)}</div>
      ${Charts.heartbeat(busy ? 'busy' : 'down', { width: 600, height: 26, beats: 6 }).replace('class="hb ', 'class="hb hb-progress ')}
      <div class="small muted">Runs in the background — you can leave this page. <a data-actopen="${esc(a.id)}">Live log</a> · <a data-stop="${esc(a.id)}">Stop</a></div></div>`;
  }
  const d = ACT_DETAIL[a.id];
  if (!d || d.status !== a.status) loadActDetail(a.id);
  const r = d?.result, c = r?.claude;
  const fails = (r?.checks ?? []).filter(x => x.status === 'failed').slice(0, 5);
  const bug = a.type === 'ai-retest' && a.status === 'needs-approval' ? W?.bugs.find(b => b.key === a.key) : null;
  return `<div class="run actbox ${a.status === 'needs-approval' ? 'ask' : ''}">
    <div>${actHeadline(a, d)}</div>
    <div class="small muted">${esc(a.title)} · ${ago(a.finishedAt ?? a.startedAt)} · took ${dur(a)}${usd(c?.costUsd)}</div>
    ${c?.summary ? `<p class="small" style="margin:8px 0 0">${esc(c.summary)}</p>` : ''}
    ${c?.evidence?.length ? `<ul class="small" style="margin:6px 0 0;padding-left:18px">${c.evidence.slice(0, 4).map(e => `<li>${esc(e)}</li>`).join('')}</ul>` : ''}
    ${fails.map(f => `<div class="fail"><div class="grow"><div>${esc(f.id ?? '')} ${esc(f.title)}</div>${f.error ? `<div class="e">${esc(stripAnsi(f.error).split('\n').slice(0, 2).join('\n'))}</div>` : ''}</div></div>`).join('')}
    ${r?.spec ? `<div class="small muted" style="margin-top:6px">Spec: <span class="mono">${esc(r.spec)}</span></div>` : ''}
    ${bug ? `<div class="small" style="margin-top:8px"><b>Your call:</b> ${approvalButtons(a, bug, r?.summary ?? a.summary)}</div>` : ''}
    <div class="small" style="margin-top:6px"><a data-actopen="${esc(a.id)}">Full details and log</a></div></div>`;
}

async function loadActDetail(id) {
  if (ACT_DETAIL[id]?.loading) return;
  ACT_DETAIL[id] = { ...(ACT_DETAIL[id] ?? {}), loading: true };
  const d = await api(`/api/activities/${id}`).catch(() => null);
  ACT_DETAIL[id] = d ?? { status: null };
  refreshActBoxes(true);
}

/** Small live marker for list rows and card headers. */
function actMini(key) {
  const a = ACTS.find(x => x.key === key);
  if (!a) return '';
  if (ACTIVE.includes(a.status)) return `<span class="pill acc hb-inline" title="${esc(a.title)} — ${esc(a.phase ?? a.status)}">${Charts.heartbeat(a.status === 'running' ? 'busy' : 'down', { width: 28, height: 12, beats: 2 })}${a.status === 'running' ? (a.type === 'ai-retest' ? 'Re-testing' : 'Running') : 'Queued'}</span>`;
  if (a.status === 'needs-approval') return `<span class="pill warn" title="${esc(a.title)}">${a.summary?.verdict === 'fixed' ? 'Looks fixed' : 'Still failing'} · approve</span>`;
  return (a.type === 'ai-retest' || a.type === 'tests') && W?.bugs.some(b => b.key === key) ? lastRetestPill(key) : '';
}

/** Re-draw every box / marker on screen whose job changed (cheap: compares a signature first). */
function refreshActBoxes(force) {
  $$('[data-actbox],[data-actmini]').forEach(el => {
    const key = el.dataset.actbox ?? el.dataset.actmini, a = ACTS.find(x => x.key === key);
    const sig = a ? `${a.id}|${a.status}|${a.phase}|${Math.floor((Date.now() - new Date(a.startedAt)) / 60_000)}|${ACT_DETAIL[a.id]?.status ?? ''}|${W?.bugs.find(b => b.key === key)?.status.id ?? ''}` : '';
    if (!force && el.dataset.sig === sig) return;
    el.dataset.sig = sig;
    el.innerHTML = el.dataset.actbox !== undefined ? actBox(key) : actMini(key);
  });
}

function finishedToast(a) {
  const b = $('#banner');
  b.className = `banner ${a.status === 'failed' || a.summary?.verdict === 'still-failing' || a.summary?.failed ? 'bad' : 'ok'}`;
  b.innerHTML = `Finished: <b>${esc(a.title)}</b> — ${a.status === 'needs-approval' ? 'needs your approval' : a.status}${a.key ? ` · <a data-openkey="${esc(a.key)}">Open ${esc(a.key)}</a>` : ''} · <a data-actopen="${esc(a.id)}">Details</a>`;
  setTimeout(() => renderChrome(), 20_000);
}

function approvalButtons(a, bug, s) {
  return `${W.bugFields.statuses.filter(x => /^(closed|reopen|to be tested|tobetested|in progress)$/i.test(x.name)).map(x => `<button class="small ${x.name === s?.suggestion ? 'primary' : ''}" data-approve="${esc(a.id)}" data-status="${esc(x.id)}">Set ${esc(bug.key)} → ${esc(x.name)}</button>`).join(' ')} <button class="small ghost" data-dismiss="${esc(a.id)}">Leave status as is</button>`;
}

// Approve / dismiss / stop / open — work from the Running tab, the popup, cards and the banner alike.
document.addEventListener('click', async e => {
  const ap = e.target.closest('[data-approve]');
  if (ap) {
    const a = ACTS.find(x => x.id === ap.dataset.approve), bug = W.bugs.find(b => b.key === a.key), to = W.bugFields.statuses.find(s => s.id === ap.dataset.status);
    const sent = await confirmSend(`Change <b>${esc(bug.key)}</b> status: ${esc(bug.status.name)} → <b>${esc(to.name)}</b> (after the re-test)`, 'POST', `/api/bugs/${bug.id}`, { status_id: to.id }, { key: bug.key });
    if (sent) { bug.status = to; await api(`/api/activities/${a.id}/approval`, { method: 'POST', body: JSON.stringify({ action: `status → ${to.name}` }) }); loadActivities(); if (D?.item.key === bug.key) renderDrawer(); }
    return;
  }
  const dm = e.target.closest('[data-dismiss]');
  if (dm) { await api(`/api/activities/${dm.dataset.dismiss}/approval`, { method: 'POST', body: JSON.stringify({ action: 'left as is' }) }); return loadActivities(); }
  const stop = e.target.closest('[data-stop]');
  if (stop) { await api(`/api/activities/${stop.dataset.stop}/stop`, { method: 'POST' }).catch(err => alert(err.message)); return loadActivities(); }
  const go = e.target.closest('[data-actopen]');
  if (go) { if (D) closeDetail(); actOpen = go.dataset.actopen; showTab('running'); return renderRunning(); }
  const ok = e.target.closest('[data-openkey]');
  if (ok && !ok.closest('#run-list')) { const k = ok.dataset.openkey, t = W.tasks.find(x => x.key === k), b = W.bugs.find(x => x.key === k); if (t || b) openDetail(t ? 'task' : 'bug', (t ?? b).id); }
});
setInterval(loadActivities, 5000);
window.addEventListener('DOMContentLoaded', loadActivities);

const typePicker = (preset = []) => `<div class="tpick">${TYPES.map(([v, l]) => `<label class="chk"><input type="checkbox" name="ttype" value="${v}"${preset.includes(v) ? ' checked' : ''}> ${l}</label>`).join('')}</div><p class="small muted" style="margin:6px 0 0">Leave all unticked to run every type.</p>`;
const pickedTypes = () => $$('#dlg input[name=ttype]:checked').map(i => i.value);
const aiNote = () => AI?.available ? `<p class="small muted">Uses your Claude Code login on this machine (${esc(AI.version)}). Nothing in Zoho changes without your approval.</p>` : '<p class="dlg-err">Claude Code is not available on this machine — install it and sign in once with <code>claude</code>.</p>';

async function startAct(body) {
  const a = await api('/api/activities', { method: 'POST', body: JSON.stringify(body) });
  await loadActivities();
  return a;
}
function startedToast(a) {
  const b = $('#banner');
  b.className = 'banner'; b.innerHTML = `Started: <b>${esc(a.title)}</b> — follow it on the <a data-goto="running">Running</a> tab.`;
  setTimeout(() => renderChrome(), 8000);
}

/** Run existing tests (no Claude): a module, an item's own cases, filtered by test type. */
async function testRunDialog({ title, code, caseIds = [], key, name }) {
  const auto = caseIds.length;
  let started;
  const ok = await dialog({
    title: `Run tests — ${name ?? code ?? key}`,
    ok: '▶ Run',
    body: `<p>Runs existing Playwright tests on dev (logs in first). <b>No Claude needed.</b></p>
      ${auto && code ? `<div class="pills" id="rscope" style="margin:6px 0 12px"><button data-s="cases" class="on">Only its ${auto} linked cases</button><button data-s="module">Whole ${esc(code)} module</button></div>` : ''}
      <h4 class="mini-h" style="margin-top:6px">Test types</h4>${typePicker()}
      <p class="small muted" style="margin-top:12px">Waits if another test run is in progress. Results show on the Running tab.</p>`,
    onOpen: () => $('#rscope')?.addEventListener('click', e => { const b = e.target.closest('button'); if (b) $$('#rscope button').forEach(x => x.classList.toggle('on', x === b)); }),
    onOk: async () => {
      const onlyCases = auto && (!code || $('#rscope button.on')?.dataset.s === 'cases');
      started = await startAct({ type: 'tests', title: title ?? `Run ${onlyCases ? `${auto} linked cases of ${key}` : code}`, key, code: onlyCases ? undefined : code, caseIds: onlyCases ? caseIds : undefined, types: pickedTypes() });
    },
  });
  if (ok && started) startedToast(started);
}

/** Tasks: generate (or extend) a suite with the repo's pipeline agents via Claude, with user input. */
async function pipelineDialog(item) {
  let started;
  const ok = await dialog({
    title: `Testing pipeline — ${item.key}`,
    ok: '✨ Start pipeline',
    body: `<p><b>${esc(item.title)}</b></p>
      <p>Claude follows this repo's agents: requirements → test cases (linked to ${esc(item.key)}) → Playwright automation, then the dashboard runs the new tests.</p>
      <h4 class="mini-h">What should be tested?</h4>${typePicker(['smoke', 'functional', 'negative', 'boundary'])}
      <label class="chk" style="margin:10px 0 4px"><input type="checkbox" id="pl-auto" checked> Write Playwright automation</label>
      <label class="chk" style="margin:4px 0 10px"><input type="checkbox" id="pl-run" checked> Run the new tests when done</label>
      <h4 class="mini-h">Anything else? <span class="muted" style="text-transform:none;letter-spacing:0">(optional — like a chat message)</span></h4>
      <textarea id="pl-msg" placeholder="e.g. Focus on the PMO role. Skip the export button. Use project HyperScale for data."></textarea>
      ${aiNote()}`,
    onOpen: () => { $('#dlg-ok').disabled = !AI?.available; },
    onOk: async () => {
      started = await startAct({ type: 'ai-pipeline', title: `Testing pipeline — ${item.key}`, key: item.key, types: pickedTypes(), withAutomation: $('#pl-auto').checked, runAfter: $('#pl-run').checked, instructions: $('#pl-msg').value.trim() });
    },
  });
  if (ok && started) startedToast(started);
}

/** Bugs: Claude writes + runs a Playwright re-test; the runner verifies; you approve the status. */
async function retestDialog(bug) {
  let started;
  const ok = await dialog({
    title: `Re-test ${bug.key} with Claude?`,
    ok: '✨ Re-test',
    body: `<p><b>${esc(bug.title)}</b></p>
      <p>Claude reads the bug, writes a Playwright re-test at <code>tests/e2e/retests/${esc(bug.key.toLowerCase())}.spec.ts</code> following this repo's conventions, and runs it on dev. The dashboard then re-runs the spec itself, and suggests <b>Closed</b> (fixed) or <b>Reopen</b> (still failing). <b>You approve before Zoho changes.</b></p>
      <h4 class="mini-h">Notes for Claude <span class="muted" style="text-transform:none;letter-spacing:0">(optional)</span></h4>
      <textarea id="rt-msg" placeholder="e.g. Use the PM account. The fix is behind the new filter chip."></textarea>
      ${aiNote()}`,
    onOpen: () => { $('#dlg-ok').disabled = !AI?.available; },
    onOk: async () => { started = await startAct({ type: 'ai-retest', title: `Re-test ${bug.key}`, key: bug.key, instructions: $('#rt-msg').value.trim() }); },
  });
  if (ok && started) startedToast(started);
}

/** Test suite: ask Claude to add / update a module's cases (and specs) from free text. */
async function moduleAiDialog(code, name) {
  let started;
  const ok = await dialog({
    title: `Update ${name ?? code} tests with Claude`,
    ok: '✨ Start',
    body: `<p>The suite already has pre-built cases for this module — use this only when something new is needed.</p>
      <h4 class="mini-h">What should change?</h4>
      <textarea id="ma-msg" placeholder="e.g. Add negative cases for the new date filter. Update TC-${esc(code)}-012 — the button is now called Save."></textarea>
      <h4 class="mini-h">Test types</h4>${typePicker()}
      <label class="chk" style="margin:10px 0 4px"><input type="checkbox" id="ma-auto" checked> Update Playwright automation too</label>
      <label class="chk" style="margin:4px 0 10px"><input type="checkbox" id="ma-run" checked> Run the changed tests when done</label>
      ${aiNote()}`,
    onOpen: () => { $('#dlg-ok').disabled = !AI?.available; },
    onOk: async () => {
      const msg = $('#ma-msg').value.trim();
      if (!msg) throw new Error('Tell Claude what should change');
      started = await startAct({ type: 'ai-module', title: `Update ${code} tests`, code, types: pickedTypes(), instructions: msg, withAutomation: $('#ma-auto').checked, runAfter: $('#ma-run').checked });
    },
  });
  if (ok && started) startedToast(started);
}

// ─── Running tab ───

const stPill = s => ({ queued: '<span class="pill">Queued</span>', waiting: '<span class="pill warn">Waiting</span>', running: `<span class="pill acc hb-inline">${Charts.heartbeat('busy', { width: 34, height: 14, beats: 2 })}Running</span>`, 'needs-approval': '<span class="pill warn">Needs your approval</span>', done: '<span class="pill good">Done</span>', failed: '<span class="pill bad">Failed</span>', stopped: '<span class="pill">Stopped</span>' })[s] ?? esc(s);
const dur = a => { const ms = (a.finishedAt ? new Date(a.finishedAt) : new Date()) - new Date(a.startedAt); return ms < 60_000 ? `${Math.round(ms / 1000)} s` : `${Math.round(ms / 60_000)} min`; };
const typeLabel = { tests: 'Playwright', 'ai-retest': 'Claude · bug re-test', 'ai-pipeline': 'Claude · testing pipeline', 'ai-module': 'Claude · module tests' };

function renderRunning() {
  const qa = TBT?.qa?.activeJob;
  const health = HS?.running;
  const sorted = ACTS.slice().sort((a, b) => (ACTIVE.includes(b.status) - ACTIVE.includes(a.status)) || ((b.status === 'needs-approval') - (a.status === 'needs-approval')) || b.startedAt.localeCompare(a.startedAt));
  const ext = [
    health ? `<div class="act ext"><span class="pill acc hb-inline">${Charts.heartbeat('busy', { width: 34, height: 14, beats: 2 })}Running</span> <b>Health run</b> · ${esc(health.phase)} · started ${ago(health.startedAt)} <a data-goto="health" class="go">open</a></div>` : '',
    qa ? `<div class="act ext"><span class="pill acc hb-inline">${Charts.heartbeat('busy', { width: 34, height: 14, beats: 2 })}Running</span> <b>QA Workspace:</b> ${esc(qa.label)} · started ${ago(qa.startedAt)} <a href="${esc(TBT.qa.url)}/#runs" target="_blank" rel="noopener" class="go">open ↗</a></div>` : '',
  ].join('');
  const list = $('#run-list');
  const oldBody = actOpen ? $(`#act-${CSS.escape(actOpen)}`)?.innerHTML : null;
  const html = ext + (sorted.length ? sorted.map(a => `<article class="tcard act${actOpen === a.id ? ' open' : ''}" data-act="${esc(a.id)}">
      <div class="top">${stPill(a.status)}<span class="pill ${a.usesClaude ? 'acc' : ''}">${typeLabel[a.type] ?? a.type}</span>${a.key ? `<span class="mono small">${esc(a.key)}</span>` : ''}${a.code ? `<span class="mono small">${esc(a.code)}</span>` : ''}
        <span class="grow"></span><span class="small muted">${ago(a.startedAt)} · ${dur(a)}</span></div>
      <h4>${esc(a.title)}</h4>
      <div class="small muted">${a.phase ? esc(a.phase) : a.error ? `<span style="color:var(--bad)">${esc(a.error)}</span>` : summaryLine(a)}</div>
      ${ACTIVE.includes(a.status) ? Charts.heartbeat(a.status === 'running' ? 'busy' : 'down', { width: 900, height: 26, beats: 9 }).replace('class="hb ', 'class="hb hb-progress ') : ''}
      <div class="act-body" id="act-${esc(a.id)}">${actOpen === a.id ? '<div class="skel"></div>' : ''}</div>
    </article>`).join('') : '<div class="empty"><b>Nothing has run yet</b>Test runs and Claude jobs you start from any page show up here.</div>');
  // Re-draw only when something changed, and keep the open card's detail — otherwise the list flashes every poll.
  if (list.dataset.sig !== html) {
    list.innerHTML = html; list.dataset.sig = html;
    const nb = actOpen && $(`#act-${CSS.escape(actOpen)}`);
    if (nb && oldBody) nb.innerHTML = oldBody;
  }
  if (actOpen) renderActDetail(actOpen);
}

function summaryLine(a) {
  const s = a.summary;
  if (!s) return '';
  if (a.type === 'ai-retest') return `Verdict: <b>${esc(s.verdict)}</b> · verification ${s.passed}/${s.total} passed${s.suggestion ? ` · suggests <b>${esc(s.suggestion)}</b>` : ''}`;
  if (a.type === 'tests') return `${(s.passed ?? 0) + (s.flaky ?? 0)}/${s.total} passed${s.failed ? ` · <span style="color:var(--bad)">${s.failed} failed</span>` : ''}`;
  return `${s.module ? `Module ${esc(s.module)} · ` : ''}${s.cases ?? '?'} cases · ${s.specs} specs${s.total ? ` · new tests ${s.passed}/${s.total} passed` : ''}`;
}

async function renderActDetail(id) {
  const a = await api(`/api/activities/${id}`).catch(() => null);
  const el = $(`#act-${CSS.escape(id)}`);
  if (!a || !el) return;
  const r = a.result;
  const checks = (r?.checks ?? []).filter(c => c.status === 'failed').slice(0, 30);
  let approval = '';
  if (a.type === 'ai-retest' && a.status === 'needs-approval') {
    const bug = W?.bugs.find(b => b.key === a.key);
    approval = `<div class="approve"><b>${r.summary.verdict === 'fixed' ? '✓ The re-test passed — the bug looks fixed.' : '✗ The re-test still fails — the bug is still there.'}</b>
      <div class="small muted">Claude said “${esc(r.summary.claudeVerdict ?? 'no verdict')}”; the dashboard's own run: ${r.summary.passed}/${r.summary.total} passed.</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">${bug ? approvalButtons(a, bug, r.summary) : `<button class="small ghost" data-dismiss="${esc(id)}">Leave status as is</button>`}</div></div>`;
  }
  el.innerHTML = `${approval}
    ${r?.claude?.summary ? `<h4 class="mini-h">Claude's summary</h4><p style="margin:0">${esc(r.claude.summary)}</p>` : ''}
    ${r?.claude?.evidence?.length ? `<ul class="small">${r.claude.evidence.map(e => `<li>${esc(e)}</li>`).join('')}</ul>` : ''}
    ${r?.spec ? `<div class="small muted">Spec: <span class="mono">${esc(r.spec)}</span></div>` : ''}
    ${r?.specs?.length ? `<div class="small muted">Specs: ${r.specs.map(s => `<span class="mono">${esc(s)}</span>`).join(' · ')}</div>` : ''}
    ${checks.length ? `<h4 class="mini-h">Failed tests</h4>${checks.map(c => `<div class="hfail"><span class="pill bad">fail</span><span><span class="k">${esc(c.id)}</span> ${esc(c.title)}</span><span></span>${c.error ? `<span class="e">${esc(c.error)}</span>` : ''}${c.screenshot ? `<img loading="lazy" src="/activity-artifacts/${c.screenshot.split('/').map(encodeURIComponent).join('/')}" alt="Screenshot of the failure" data-zoom>` : ''}</div>`).join('')}` : ''}
    <h4 class="mini-h">Log</h4><pre class="payload log">${esc(a.log.split('\n').slice(-80).join('\n')) || '…'}</pre>
    <div style="display:flex;gap:8px;margin-top:10px">${ACTIVE.includes(a.status) ? `<button class="small bad" data-stop="${esc(id)}">■ Stop</button>` : ''}${a.key ? `<button class="small" data-openkey="${esc(a.key)}">Open ${esc(a.key)}</button>` : ''}</div>`;
  const pre = el.querySelector('pre.log'); if (pre) pre.scrollTop = pre.scrollHeight;
}

$('#run-list').addEventListener('click', async e => {
  const img = e.target.closest('[data-zoom]');
  if (img) return dialog({ title: 'Screenshot', body: `<img src="${img.src}" style="width:100%;border-radius:10px">` });
  if (e.target.closest('[data-stop],[data-approve],[data-dismiss]')) return; // handled by the document-level listener
  const ok = e.target.closest('[data-openkey]');
  if (ok) { const k = ok.dataset.openkey, t = W.tasks.find(x => x.key === k), b = W.bugs.find(x => x.key === k); if (t || b) openDetail(t ? 'task' : 'bug', (t ?? b).id); return; }
  const card = e.target.closest('[data-act]');
  if (card && !e.target.closest('button, a, pre, img')) { actOpen = actOpen === card.dataset.act ? null : card.dataset.act; renderRunning(); }
});
setInterval(() => { if (tab === 'running' && actOpen && ACTS.find(a => a.id === actOpen && ACTIVE.includes(a.status))) renderActDetail(actOpen); }, 3000);

// ─── buttons in the detail panel ───

function detailActions(kind, item, links) {
  const ai = AI?.available;
  const automated = links?.modules.flatMap(m => m.caseIds) ?? [];
  if (kind === 'bug') return `<button class="small primary" data-da="retest">✨ Re-test with Claude</button>
    ${links ? `<button class="small" data-da="run">▶ Run linked tests</button>` : ''}
    <button class="small" data-da="report">Report a related bug</button>${ai ? '' : '<span class="small muted">Claude not available</span>'}`;
  const nb = item.linkedBugs?.length ?? 0, nOpen = (item.linkedBugs ?? []).filter(k => W.bugs.find(b => b.key === k && !b.status.closed)).length;
  return `${nb ? `<button class="small primary" data-da="bugs">Manage bugs (${nOpen ? `${nOpen} open of ${nb}` : nb})</button>` : ''}
    ${links ? `<button class="small" data-da="run">▶ Run its tests (${automated.length} cases)</button>` : ''}
    <button class="small ${links || nb ? '' : 'primary'}" data-da="pipeline">✨ ${links ? 'Extend tests' : 'Run testing pipeline'} with Claude</button>`;
}
$('#drawer').addEventListener('click', e => {
  const b = e.target.closest('[data-da]'); if (!b || !D) return;
  const { kind, item } = D, links = linkOf(item.key);
  if (b.dataset.da === 'retest') return retestDialog(item);
  if (b.dataset.da === 'bugs') { D.tab = 'linked'; return renderDrawer(); }
  if (b.dataset.da === 'pipeline') return pipelineDialog(item);
  if (b.dataset.da === 'report') return newBugDialog({ title: `[${item.key}] `, description: `Related to ${item.key} — ${item.title}\n\nSteps to reproduce:\n1. \n\nExpected:\n\nActual:\n\nEnvironment: ${OV.baseUrl ?? 'dev'}` });
  if (b.dataset.da === 'run' && links) {
    const mods = links.modules.filter(m => m.caseIds.length || SUITE?.some(s => s.code === m.code));
    return testRunDialog({ name: item.key, key: item.key, code: mods.length === 1 ? mods[0].code : undefined, caseIds: links.modules.flatMap(m => m.caseIds) });
  }
});
