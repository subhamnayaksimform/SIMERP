'use strict';
/* Task / bug detail — a slide-over panel opened from anywhere ([data-detail="task:<id>"]).
   Tabs: Overview (details, hours, description) · Tests · Linked · Comments · Attachments.
   Status changes use the shared confirm-then-send flow in app.js (select[data-kind]). */

let D = null; // { kind, item, extra, tab }
let BSEL = null; // task panel: Set of selected linked-bug keys (null = not chosen yet → the open ones)

/** A task/bug key (or `text`) that opens the detail panel; plain text when it isn't in the last sync. */
function keyLink(key, text = key, cls = 'key') {
  const t = W?.tasks.find(x => x.key === key), it = t ?? W?.bugs.find(x => x.key === key);
  return it ? `<a class="${cls}" data-detail="${t ? 'task' : 'bug'}:${esc(it.id)}" title="Open ${esc(key)}">${esc(text)}</a>` : `<span class="${cls}">${esc(text)}</span>`;
}

const htmlToText = html => {
  const doc = new DOMParser().parseFromString(String(html ?? '').replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|li|h\d)>/gi, '\n'), 'text/html');
  return (doc.body.textContent ?? '').replace(/\n{3,}/g, '\n\n').trim();
};
const fmtH = h => (h === null || h === undefined ? '—' : `${Math.round(h * 10) / 10} h`);
const findItem = (kind, key) => (kind === 'task' ? W?.tasks : W?.bugs)?.find(x => x.key === key);

async function openDetail(kind, id, tab = 'overview') {
  const item = await api(`/api/item/${kind}/${id}`).catch(err => ({ error: err.message }));
  if (item.error) return alert(item.error);
  D = { kind, item, extra: null, tab };
  BSEL = null;
  $('#drawer').classList.remove('hidden');
  $('#drawer-back').classList.remove('hidden');
  renderDrawer();
  api(`/api/item/${kind}/${id}/extra`).then(x => { if (D?.item.id === id) { D.extra = x; renderDrawer(); } }).catch(e => { if (D?.item.id === id) { D.extra = { error: e.message }; renderDrawer(); } });
}

function closeDetail() { D = null; $('#drawer').classList.add('hidden'); $('#drawer-back').classList.add('hidden'); }
$('#drawer-back').addEventListener('click', closeDetail);
// Escape closes the panel — but not the Escape that just closed a dialog opened from it
// (the browser can close the dialog before this listener runs).
let dlgClosedAt = 0;
$('#dlg').addEventListener('close', () => { dlgClosedAt = Date.now(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && D && !$('#dlg').open && Date.now() - dlgClosedAt > 300) closeDetail(); });

function renderDrawer() {
  const { kind, item, extra } = D;
  const statuses = kind === 'task' ? W.taskStatuses : W.bugFields.statuses;
  const links = linkOf(item.key);
  const linked = kind === 'task' ? (item.linkedBugs ?? []) : (item.linkedTasks ?? []);
  const nComments = Array.isArray(extra?.comments) ? extra.comments.length : null;
  const nAtt = Array.isArray(extra?.attachments) ? extra.attachments.length : null;

  $('#drawer-head').innerHTML = `<div class="top">
      <span class="key mono"><b>${esc(item.key)}</b></span><span class="pill ${kind === 'bug' ? 'vio' : 'acc'}">${kind === 'bug' ? `${Charts.bug(13)}Bug` : 'Task'}</span>
      ${statusSelect(kind, item, statuses)}
      ${item.mine?.length ? '<span class="pill">Mine</span>' : ''}
      <button class="ghost x" id="drawer-close" aria-label="Close">✕</button>
    </div>
    <h2>${esc(item.title)}</h2>
    <div class="small muted">${kind === 'task' ? `Owners: ${people(item.owners)}` : `Reported by ${esc(item.reporter?.name ?? '—')} · Assignee: ${item.assignee ? esc(item.assignee.name) : 'Unassigned'}`} · updated ${ago(item.updatedAt)} · <a href="${esc(item.url)}" target="_blank" rel="noopener">Open in Zoho ↗</a></div>
    <div class="acts" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px" id="drawer-actions"></div>
    <div data-actbox="${esc(item.key)}">${typeof actBox === 'function' ? actBox(item.key) : ''}</div>`;
  $('#drawer-actions').innerHTML = typeof detailActions === 'function' ? detailActions(kind, item, links) : '';

  const nRep = pastReports(item.key).count;
  const tabs = [['overview', 'Overview'], ['tests', `Tests${links ? ` · ${links.caseTotal || links.modules.length}` : ''}`], ['reports', `Reports${nRep ? ` · ${nRep}` : ''}`], ['linked', `${kind === 'task' ? 'Linked bugs' : 'Linked tasks'} · ${linked.length}`], ['comments', `Comments${nComments === null ? '' : ` · ${nComments}`}`], ['attachments', `Attachments${nAtt === null ? '' : ` · ${nAtt}`}`]];
  $('#drawer-tabs').innerHTML = tabs.map(([k, l]) => `<button data-dtab="${k}" class="${D.tab === k ? 'on' : ''}">${l}</button>`).join('');
  $('#drawer-body').innerHTML = ({ overview: drawerOverview, tests: drawerTests, reports: drawerReports, linked: drawerLinked, comments: drawerComments, attachments: drawerAttachments })[D.tab]();
  const f = $('#drawer-desc');
  if (f) f.srcdoc = `<base target="_blank"><style>body{font:14px/1.55 system-ui,sans-serif;color:#0f172a;margin:12px}img{max-width:100%}</style>${item.description}`;
}

function drawerOverview() {
  const { kind, item } = D;
  const rows = kind === 'task'
    ? [['Task list', esc(item.tasklist?.name)], ['Priority', esc(item.priority)], ['Created by', esc(item.createdBy?.name)], ['Created', when(item.createdAt)], ['Parent task', item.parentId ? esc(W.tasks.find(t => t.id === item.parentId)?.key ?? item.parentId) : '']]
    : [['Severity', esc(item.severity)], ['Classification', esc(item.classification)], ['Module', esc(item.module)], ['Created', when(item.createdAt)], ['Closed', item.closedAt ? when(item.closedAt) : '']];
  let hours = '';
  if (kind === 'task') {
    const planned = item.plannedHours, all = item.loggedHours, me = item.myLoggedHours;
    const max = Math.max(planned ?? 0, all ?? 0, me ?? 0, 1);
    const over = planned && all && all > planned;
    hours = `<h4 class="mini-h">Hours</h4>
      <div class="hours"><div><div class="l">Baseline planned</div><div class="v">${fmtH(planned)}</div></div>
        <div><div class="l">Logged by everyone</div><div class="v" style="${over ? 'color:var(--bad)' : ''}">${fmtH(all)}</div></div>
        <div><div class="l">Logged by me</div><div class="v">${fmtH(me)}</div></div></div>
      <div class="hbar" title="planned ${fmtH(planned)} · logged ${fmtH(all)}"><i style="width:${((planned ?? 0) / max) * 100}%;background:var(--grid);border:1px solid var(--muted)"></i><i style="width:${((all ?? 0) / max) * 100}%;background:${over ? 'var(--bad)' : 'var(--s1)'};opacity:.85"></i></div>
      ${item.ownerWork?.length > 1 ? `<div class="small muted">Planned per owner: ${item.ownerWork.map(o => `${esc(o.name)} ${fmtH(o.hours)}`).join(' · ')}</div>` : ''}`;
  }
  return `${hours}
    <h4 class="mini-h">Details</h4>
    <dl class="kv">${rows.filter(r => r[1]).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
    <h4 class="mini-h">Description</h4>
    ${item.description ? '<iframe class="desc" sandbox="" id="drawer-desc"></iframe>' : '<p class="muted">No description.</p>'}`;
}

function drawerTests() {
  const l = linkOf(D.item.key);
  if (!l) return `<div class="empty"><b>No tests linked yet</b>${D.kind === 'task' ? 'Use “Run testing pipeline” to have tests written for it, or link a module on the To-be-tested page.' : 'Link a module from the To-be-tested page, or re-test it.'}</div>`;
  return l.modules.map(m => {
    const r = m.last;
    return `<div class="mod" style="margin-bottom:10px">${Charts.ring(r ? [{ value: r.passed, color: 'var(--good)' }, { value: r.failed, color: 'var(--bad)' }, { value: r.total - r.passed - r.failed, color: 'var(--skip)' }] : [], r ? `${Math.round((r.passed / r.total) * 100)}%` : '—', 40, 5)}
      <div class="grow"><div class="nm">${esc(m.name)} <span class="muted small mono">${esc(m.code)}</span></div>
      <div class="ds">${m.caseIds.length ? `<a data-lcases="${esc(l.key)}|${esc(m.code)}">${m.caseIds.length} linked cases</a> · ${m.automated} automated` : 'whole module'} · ${r ? `last ${r.passed}/${r.total} passed ${ago(r.at)} · <a data-report="${esc(r.report)}">report</a>` : 'not run yet'}</div></div>
      <button class="small" data-lrun="${esc(m.code)}">▶ Run</button></div>`;
  }).join('') + (l.docs.length ? `<h4 class="mini-h">Docs</h4><div class="small">${l.docs.map(d => `<div class="mono">${esc(d)}</div>`).join('')}</div>` : '');
}

/** The tests a bug can be re-run with, without Claude: its linked cases, or its single linked module. */
function bugTests(key) {
  const l = linkOf(key);
  if (!l) return null;
  const caseIds = l.modules.flatMap(m => m.caseIds);
  if (caseIds.length) return { caseIds, label: `${caseIds.length} linked case${caseIds.length === 1 ? '' : 's'}` };
  const mods = l.modules.filter(m => SUITE?.some(s => s.code === m.code));
  return mods.length === 1 ? { code: mods[0].code, label: `${mods[0].code} module` } : null;
}

/** Newest re-test of a bug (Claude re-test or a plain test run started for it), as a pill. */
function lastRetestPill(key) {
  const a = (typeof ACTS !== 'undefined' ? ACTS : []).find(x => x.key === key && (x.type === 'ai-retest' || x.type === 'tests'));
  if (!a) return '<span class="pill" title="No re-test was started from this dashboard">Not re-tested here</span>';
  const s = a.summary;
  if (['queued', 'waiting', 'running'].includes(a.status)) return `<span class="pill acc" title="${esc(a.title)}">${a.status === 'running' ? 'Re-testing…' : 'Queued'}</span>`;
  if (a.status === 'needs-approval') return `<span class="pill warn" title="Approve on the Running tab">${s?.verdict === 'fixed' ? 'Looks fixed' : 'Still failing'} · approve</span>`;
  if (a.status === 'failed' || a.status === 'stopped') return `<span class="pill bad">Re-test ${a.status}</span>`;
  if (a.type === 'ai-retest') return `<span class="pill ${s?.verdict === 'fixed' ? 'good' : s?.verdict === 'still-failing' ? 'bad' : ''}">${esc(s?.verdict ?? 'done')} · ${ago(a.finishedAt ?? a.startedAt)}</span>`;
  return s?.total ? `<span class="pill ${s.failed ? 'bad' : 'good'}">${s.passed}/${s.total} passed · ${ago(a.finishedAt ?? a.startedAt)}</span>` : '<span class="pill">No tests ran</span>';
}

/** Task panel: every bug linked to the task, each manageable on its own, plus bulk re-test / status. */
function taskBugs(item) {
  const bugs = (item.linkedBugs ?? []).map(k => findItem('bug', k) ?? { key: k, missing: true });
  if (!bugs.length) return `<div class="empty"><b>No linked bugs</b>Bugs that name this task (e.g. “Task: ${esc(item.key)}”) show up here after a sync.</div>`;
  const known = bugs.filter(b => !b.missing);
  BSEL ??= new Set(known.filter(b => !b.status.closed).map(b => b.key));
  const sel = known.filter(b => BSEL.has(b.key)), open = known.filter(b => !b.status.closed).length;
  return `<div class="bulk">
      <label class="chk"><input type="checkbox" id="bsel-all"${sel.length === known.length ? ' checked' : ''}> All</label>
      <button class="ghost small" id="bsel-open">Open only</button>
      <span class="small muted grow">${known.length} bug${known.length === 1 ? '' : 's'} · ${open} open · <b>${sel.length} selected</b></span>
      <button class="small primary" data-bulk="retest"${sel.length ? '' : ' disabled'}>Re-test selected (${sel.length})</button>
      <select id="bulk-status"${sel.length ? '' : ' disabled'}><option value="">Set status…</option>${W.bugFields.statuses.map(s => `<option value="${esc(s.id)}">${esc(s.name)}</option>`).join('')}</select>
    </div>
    ${bugs.map(b => {
      if (b.missing) return `<div class="bugrow"><span></span><span class="mono">${esc(b.key)}</span><span class="muted small">not in the last sync</span></div>`;
      const t = bugTests(b.key);
      return `<div class="bugrow${b.status.closed ? ' closed' : ''}">
        <input type="checkbox" data-bsel="${esc(b.key)}" aria-label="Select ${esc(b.key)}"${BSEL.has(b.key) ? ' checked' : ''}>
        <div class="grow"><div>${keyLink(b.key, b.key, 'mono')} ${keyLink(b.key, b.title, 'bt')}</div>
          <div class="small muted">${esc(b.severity ?? '—')} · ${esc(b.assignee?.name ?? 'Unassigned')} · reported by ${esc(b.reporter?.name ?? '—')} · ${t ? esc(t.label) : 'no linked tests'}</div></div>
        <div class="bugacts"><span data-actmini="${esc(b.key)}">${actMini(b.key)}</span>${statusSelect('bug', b, W.bugFields.statuses)}
          ${t ? `<button class="small" data-brun="${esc(b.key)}" title="Run its existing tests — no Claude">▶ Run</button>` : ''}
          <button class="small" data-bai="${esc(b.key)}" title="Claude writes and runs a re-test">✨ Re-test</button></div>
      </div>`;
    }).join('')}
    <p class="small muted" style="margin-top:12px">Linked when the bug names the task in its title or description. ▶ Run uses existing tests (no Claude). ✨ uses Claude. Every status change asks before sending to Zoho.</p>`;
}

/** Re-test several bugs at once: existing tests where they have them, Claude for the rest (or all one way). */
async function bulkRetestDialog(task, bugs) {
  const plan = mode => bugs.map(b => {
    const t = bugTests(b.key);
    const how = mode === 'claude' ? 'claude' : t ? 'tests' : mode === 'tests' ? 'skip' : 'claude';
    return { b, t, how };
  });
  const LBL = { tests: '▶ existing tests', claude: '✨ Claude re-test', skip: 'skipped — no tests' };
  const draw = () => {
    const p = plan($('#br-mode button.on').dataset.m), nAi = p.filter(x => x.how === 'claude').length, nRun = p.filter(x => x.how !== 'skip').length;
    $('#br-list').innerHTML = p.map(x => `<div class="small"><span class="mono">${esc(x.b.key)}</span> ${esc(x.b.title.slice(0, 70))} — <b>${LBL[x.how]}</b>${x.how === 'tests' ? ` (${esc(x.t.label)})` : ''}</div>`).join('');
    $('#br-cost').innerHTML = `${nRun} job${nRun === 1 ? '' : 's'} will be queued and run one after another.${nAi ? ` <b>${nAi} use Claude</b> (about $0.25–1 each).` : ' <b>No Claude needed.</b>'}`;
    $('#br-notes').hidden = !nAi;
    $('#dlg-ok').disabled = !nRun || (nAi > 0 && !AI?.available);
  };
  let started = 0;
  const ok = await dialog({
    title: `Re-test ${bugs.length} bug${bugs.length === 1 ? '' : 's'} of ${task.key}`,
    ok: 'Start re-tests',
    body: `<div class="pills" id="br-mode" style="margin-bottom:12px"><button data-m="smart" class="on">Existing tests, Claude for the rest</button><button data-m="tests">Existing tests only</button><button data-m="claude">Claude for all</button></div>
      <div id="br-list" class="rows" style="max-height:260px;overflow:auto;display:grid;gap:6px"></div>
      <p class="small" id="br-cost" style="margin-top:12px"></p>
      <div id="br-notes"><h4 class="mini-h">Notes for Claude <span class="muted" style="text-transform:none;letter-spacing:0">(optional, used for every Claude re-test)</span></h4>
      <textarea id="br-msg" placeholder="e.g. Use the PM account. Data is on project HyperScale."></textarea>${aiNote()}</div>
      <p class="small muted">Nothing in Zoho changes. Claude re-tests end with a suggested status for you to approve on the Running tab.</p>`,
    onOpen: () => { $('#br-mode').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; $$('#br-mode button').forEach(x => x.classList.toggle('on', x === b)); draw(); }); draw(); },
    onOk: async () => {
      const notes = $('#br-msg').value.trim();
      const todo = plan($('#br-mode button.on').dataset.m).filter(x => x.how !== 'skip');
      for (const x of todo) {
        try {
          await startAct(x.how === 'claude'
            ? { type: 'ai-retest', title: `Re-test ${x.b.key}`, key: x.b.key, instructions: notes }
            : { type: 'tests', title: `Re-test ${x.b.key} (existing tests)`, key: x.b.key, code: x.t.code, caseIds: x.t.caseIds });
        } catch (err) {
          // Pressing Start again would queue the started ones twice, so say exactly where it stopped.
          throw new Error(`${started ? `Started ${started} (${todo.slice(0, started).map(y => y.b.key).join(', ')}), then ` : ''}${x.b.key} failed: ${err.message}. Close this and start the rest from the bug rows.`);
        }
        started++;
      }
    },
  });
  if (ok && started) startedToast({ title: `${started} re-test${started === 1 ? '' : 's'} for ${task.key}` });
}

/** One confirm for a status change on several bugs; sends them one by one and reports what Zoho kept. */
async function bulkStatus(bugs, to) {
  const change = bugs.filter(b => b.status.id !== to.id);
  if (!change.length) return alert(`All selected bugs are already ${to.name}.`);
  const res = [];
  const ok = await dialog({
    title: 'Send to Zoho?',
    body: `<p>Change the status of <b>${change.length} bug${change.length === 1 ? '' : 's'}</b> to <b>${esc(to.name)}</b>:</p>
      <div class="rows" style="max-height:240px;overflow:auto">${change.map(b => `<div class="small"><span class="mono">${esc(b.key)}</span> ${esc(b.status.name)} → <b>${esc(to.name)}</b></div>`).join('')}</div>
      <p class="muted small">These fields are sent to Zoho for each bug:</p><pre class="payload">${esc(JSON.stringify({ status_id: to.id }, null, 2))}</pre>`,
    ok: `Send ${change.length} to Zoho`,
    onOk: async () => {
      for (const b of change) {
        try { await api(`/api/bugs/${b.id}`, { method: 'POST', body: JSON.stringify({ status_id: to.id, key: b.key }) }); b.status = to; res.push([b.key, true]); }
        catch (err) { res.push([b.key, false, err.message]); }
      }
    },
  });
  if (!ok) return;
  const bad = res.filter(r => !r[1]);
  if (bad.length) dialog({ title: `${res.length - bad.length} of ${res.length} changed`, body: `<p>Zoho did not change these:</p>${bad.map(r => `<div class="small"><span class="mono">${esc(r[0])}</span> — ${esc(r[2])}</div>`).join('')}` });
}

function drawerLinked() {
  const { kind, item } = D;
  if (kind === 'task') return taskBugs(item);
  const keys = kind === 'task' ? (item.linkedBugs ?? []) : (item.linkedTasks ?? []);
  const other = kind === 'task' ? 'bug' : 'task';
  if (!keys.length) return `<div class="empty"><b>No linked ${other}s</b>${other === 'bug' ? 'Bugs that name this task (e.g. “Task: ' + esc(item.key) + '”) show up here after a sync.' : 'Tasks named in this bug’s description show up here.'}</div>`;
  const statuses = other === 'task' ? W.taskStatuses : W.bugFields.statuses;
  return keys.map(k => {
    const x = findItem(other, k);
    if (!x) return `<div class="linked"><span class="mono">${esc(k)}</span><span class="muted">not in the last sync</span></div>`;
    return `<div class="linked"><span class="mono"><b>${esc(x.key)}</b></span><a data-detail="${other}:${esc(x.id)}">${esc(x.title)}</a>${statusSelect(other, x, statuses)}<span class="small muted">${esc(other === 'bug' ? (x.assignee?.name ?? 'Unassigned') : x.owners.map(o => o.name).join(', '))}</span></div>`;
  }).join('') + '<p class="small muted" style="margin-top:12px">Linked when the bug names the task (or the task names the bug) in its title or description. Change a status right here — it asks before sending to Zoho.</p>';
}

/** Everything already reported for a task/bug: QA reports that ran its tests, its docs/findings, dashboard runs. */
function pastReports(key) {
  const l = linkOf(key);
  const files = [...new Set([...(l?.reports ?? []), ...(l?.modules ?? []).map(m => m.last?.report).filter(Boolean)])];
  const acts = (typeof ACTS !== 'undefined' ? ACTS : []).filter(a => a.key === key);
  return { files, docs: l?.docs ?? [], acts, count: files.length + (l?.docs.length ?? 0) + acts.length };
}

function drawerReports() {
  const { files, docs, acts, count } = pastReports(D.item.key);
  if (!count) return `<div class="empty"><b>No reports yet</b>Reports show up here once a QA report runs tests linked to ${esc(D.item.key)}, or a doc or finding is named after it.</div>`;
  if (files.length && !REPORTS) { api('/api/reports').then(r => { REPORTS = r; if (D?.tab === 'reports') renderDrawer(); }).catch(() => {}); }
  const meta = f => REPORTS?.qa.find(r => r.file === f);
  const rows = files.map(f => ({ f, r: meta(f) })).sort((a, b) => (b.r?.at ?? b.f).localeCompare(a.r?.at ?? a.f));
  const qaUrl = TBT?.qa?.running ? TBT.qa.url : null;
  return `${rows.length ? `<h4 class="mini-h">QA reports that ran its tests · ${rows.length}</h4><div class="reps">${rows.map(({ f, r }) => {
      const rate = r?.total ? Math.round(((r.passed + (r.flaky ?? 0)) / r.total) * 100) : null;
      return `<div class="rep clickable-row" data-report="${esc(f)}">
        <div class="grow"><div><b>${esc(r?.title ?? f.replace(/^qa-report-?/, '').replace(/\.html$/, ''))}</b></div>
          <div class="small muted">${r ? `${when(r.at)} · ${r.passed}/${r.total} passed${r.failed ? ` · <span style="color:var(--bad)">${r.failed} failed</span>` : ''}` : esc(f)}</div></div>
        ${rate === null ? '' : `<span class="pill ${rate >= 90 ? 'good' : rate >= 70 ? 'warn' : 'bad'}">${rate}%</span>`}
        <a class="small" href="/reports/${esc(f)}" target="_blank" rel="noopener" title="Open in a new tab">↗</a></div>`;
    }).join('')}</div>` : ''}
    ${docs.length ? `<h4 class="mini-h">Docs and findings · ${docs.length}</h4><div class="reps">${docs.map(d => `<div class="rep"><span class="grow">${qaUrl ? `<a href="${esc(qaUrl)}/files/${esc(d)}" target="_blank" rel="noopener">${esc(d.split('/').pop())}</a>` : `<span class="mono">${esc(d.split('/').pop())}</span>`}<div class="small muted mono">${esc(d)}</div></span></div>`).join('')}</div>${qaUrl ? '' : '<p class="small muted">Start the QA Workspace (npm run ui) to open docs from here.</p>'}` : ''}
    ${acts.length ? `<h4 class="mini-h">Runs from this dashboard · ${acts.length}</h4><div class="reps">${acts.map(a => `<div class="rep clickable-row" data-actopen="${esc(a.id)}">
        <div class="grow"><div><b>${esc(a.title)}</b></div><div class="small muted">${ago(a.startedAt)} · ${summaryLine(a) || esc(a.error ?? a.phase ?? '')}</div></div>${stPill(a.status)}</div>`).join('')}</div>` : ''}`;
}

function drawerComments() {
  const e = D.extra;
  if (!e) return '<div class="skel"></div><div class="skel"></div>';
  if (e.comments?.error) return `<div class="empty"><b>Could not load comments</b>${esc(e.comments.error)}</div>`;
  if (!e.comments.length) return '<div class="empty"><b>No comments</b></div>';
  return e.comments.map(c => `<div class="comment"><div class="who"><b>${esc(c.author)}</b> · ${when(c.at)}</div><div class="txt">${esc(htmlToText(c.html))}</div></div>`).join('');
}

function drawerAttachments() {
  const e = D.extra;
  if (!e) return '<div class="skel"></div>';
  if (e.attachments?.error) return `<div class="empty"><b>Could not load attachments</b>${esc(e.attachments.error)}</div>`;
  if (!e.attachments.length) return '<div class="empty"><b>No attachments</b></div>';
  return `<div class="rows">${e.attachments.map(a => `<div class="ftest"><span>📎 <b>${esc(a.name)}</b>${a.size ? ` <span class="muted small">${esc(a.size)}</span>` : ''}<div class="small muted">${[a.by, a.at && when(a.at)].filter(Boolean).map(esc).join(' · ')}</div></span>
      <span>${a.url ? `<a href="${esc(a.url)}" target="_blank" rel="noopener">Open ↗</a>` : `<a href="${esc(D.item.url)}" target="_blank" rel="noopener">Open in Zoho ↗</a>`}</span></div>`).join('')}</div>
    <p class="small muted">Files open in Zoho — downloading them here needs the WorkDrive permission on the Zoho login (npm run zoho:reauth).</p>`;
}

$('#drawer').addEventListener('click', e => {
  if (e.target.closest('#drawer-close')) return closeDetail();
  const t = e.target.closest('[data-dtab]');
  if (t) { D.tab = t.dataset.dtab; renderDrawer(); return; }
  const run = e.target.closest('[data-lrun]');
  if (run) { const m = SUITE?.find(x => x.code === run.dataset.lrun); return runModule(run.dataset.lrun, m?.caseCount ?? 0); }
  const c = e.target.closest('[data-lcases]');
  if (c) {
    const [key, code] = c.dataset.lcases.split('|');
    const m = LINKS.tasks.find(x => x.key === key)?.modules.find(x => x.code === code);
    if (m) dialog({ title: `${key} · ${m.name} — ${m.caseIds.length} linked cases`, body: `<div class="rows" style="max-height:420px;overflow:auto">${m.caseIds.map(id => `<div class="mono clickable-row" data-case="${esc(id)}">${esc(id)}</div>`).join('')}</div>` });
  }
});

// Task panel → linked bugs: selection, bulk re-test / status, per-bug run and Claude re-test.
$('#drawer').addEventListener('change', async e => {
  if (!D || D.kind !== 'task') return;
  const bugs = () => (D.item.linkedBugs ?? []).map(k => findItem('bug', k)).filter(Boolean);
  const one = e.target.closest('[data-bsel]');
  if (one) { one.checked ? BSEL.add(one.dataset.bsel) : BSEL.delete(one.dataset.bsel); return renderDrawer(); }
  if (e.target.id === 'bsel-all') { BSEL = new Set(e.target.checked ? bugs().map(b => b.key) : []); return renderDrawer(); }
  if (e.target.id === 'bulk-status' && e.target.value) {
    const to = W.bugFields.statuses.find(s => s.id === e.target.value);
    await bulkStatus(bugs().filter(b => BSEL.has(b.key)), to);
    renderDrawer();
  }
});
$('#drawer').addEventListener('click', e => {
  if (!D || D.kind !== 'task') return;
  const bug = k => findItem('bug', k);
  if (e.target.closest('#bsel-open')) { BSEL = new Set((D.item.linkedBugs ?? []).map(bug).filter(b => b && !b.status.closed).map(b => b.key)); return renderDrawer(); }
  if (e.target.closest('[data-bulk="retest"]')) return bulkRetestDialog(D.item, [...BSEL].map(bug).filter(Boolean));
  const run = e.target.closest('[data-brun]');
  if (run) { const b = bug(run.dataset.brun), t = bugTests(b.key); return testRunDialog({ name: b.key, key: b.key, code: t.code, caseIds: t.caseIds ?? [] }); }
  const ai = e.target.closest('[data-bai]');
  if (ai) return retestDialog(bug(ai.dataset.bai));
});

// Every [data-detail] anywhere opens the panel (feed items, tables, linked lists…).
document.addEventListener('click', e => {
  const a = e.target.closest('[data-detail]');
  if (!a || a.closest('#dlg')) return;
  const [kind, id] = a.dataset.detail.split(':');
  openDetail(kind, id, a.dataset.tab || 'overview');
});

// Report links inside panels open the report (in-app viewer arrives with reports.js; new tab until then).
document.addEventListener('click', e => {
  const r = e.target.closest('[data-report]');
  if (!r || r.tagName === 'BUTTON' || e.target.closest('a[href]')) return; // a real link inside the row opens on its own
  if (typeof openReport === 'function') openReport(r.dataset.report); else window.open(`/reports/${r.dataset.report}`, '_blank', 'noopener');
});
