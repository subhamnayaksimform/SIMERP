'use strict';
/* In-app viewers: QA / pipeline reports (no redirect — "open in new tab" is optional) with a
   failures panel that files Zoho bugs, and the test-case viewer. Uses helpers from app.js. */

// ─── report viewer ───

async function openReport(file) {
  const v = $('#viewer');
  v.classList.remove('hidden'); $('#viewer-back').classList.remove('hidden');
  const isQa = file.startsWith('qa-report');
  $('#viewer-title').textContent = file.replace(/\.html$/, '');
  $('#viewer-open').href = `/reports/${file}`;
  $('#viewer-frame').src = `/reports/${file}`;
  $('#viewer-side').innerHTML = isQa ? '<div class="skel"></div><div class="skel"></div>' : '<p class="muted small">Pipeline report — requirements, cases, automation, results and bugs for one pipeline run.</p>';
  $('#viewer-side').classList.toggle('hidden', !isQa);
  if (!isQa) return;
  const r = await api(`/api/reports/${file}/failures`).catch(() => ({ failures: [] }));
  if (r.title) $('#viewer-title').textContent = `${r.title} · ${when(r.at)}`;
  $('#viewer-side').innerHTML = `<h4 class="mini-h" style="margin-top:0">Failed tests · ${r.failures.length}</h4>
    ${r.total ? `<div class="small muted" style="margin-bottom:10px">${r.passed}/${r.total} passed</div>` : ''}
    ${r.failures.length ? r.failures.map((f, i) => `<div class="vfail">
      <a class="mono small" data-case="${esc(f.id)}">${esc(f.id)}</a>
      <div class="small">${esc(f.title)}</div>
      ${f.error ? `<div class="e">${esc(f.error)}</div>` : ''}
      <button class="small bad" data-vreport="${i}">Report to Zoho</button></div>`).join('') : '<div class="empty"><b>No failures</b></div>'}`;
  $('#viewer-side').onclick = e => {
    const b = e.target.closest('[data-vreport]'); if (!b) return;
    const f = r.failures[Number(b.dataset.vreport)];
    const dupe = (W?.bugs ?? []).find(x => !x.status.closed && f.id && x.title.includes(f.id));
    newBugDialog({
      note: dupe ? `Possible duplicate: <b>${esc(dupe.key)}</b> “${esc(dupe.title)}” already mentions ${esc(f.id)}.` : '',
      title: `[${f.id}] ${f.title}`.slice(0, 250),
      description: `Found in QA report “${r.title}” (${when(r.at)}).\n\nTest: ${f.id} ${f.title}\nEnvironment: ${OV.baseUrl ?? 'dev'}\n\nSteps to reproduce:\n1. npx playwright test --config=tests/playwright.config.ts --project=chromium --grep "${f.id}"\n2. (add the manual steps)\n\nExpected: the test passes\nActual: it fails with the error below\n\nError:\n${f.error ?? ''}`,
      context: `QA report ${file}; test ${f.id} "${f.title}"; error: ${f.error ?? ''}`,
    });
  };
}
function closeReport() { $('#viewer').classList.add('hidden'); $('#viewer-back').classList.add('hidden'); $('#viewer-frame').src = 'about:blank'; }
$('#viewer-close').addEventListener('click', closeReport);
$('#viewer-back').addEventListener('click', closeReport);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#viewer').classList.contains('hidden') && !$('#dlg').open) closeReport(); });

// Any link to a report opens in the viewer (Ctrl/⌘-click still opens a new tab).
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="/reports/"]');
  if (!a || e.ctrlKey || e.metaKey || e.shiftKey || a.id === 'viewer-open') return;
  e.preventDefault();
  openReport(decodeURIComponent(a.getAttribute('href').slice('/reports/'.length)));
});

// ─── test-case viewer ───

const listOf = v => (Array.isArray(v) ? v : v ? [v] : []).map(x => (typeof x === 'string' ? x : x?.action ?? x?.step ?? x?.description ?? JSON.stringify(x)));

/* Case viewer. `nav` = { ids, back }: the list the case was opened from (for ‹ Prev / Next ›) and,
   when it was opened from another dialog, that dialog's content so ← Back can return to it. */
let CASE_NAV = null;
async function openCase(id, nav = { ids: [id], back: null }) {
  const d = await api(`/api/suite/case/${id}`).catch(err => ({ error: err.message }));
  if (d.error) return alert(d.error);
  CASE_NAV = { ...nav, id };
  const c = d.case ?? {};
  const tasks = (LINKS?.tasks ?? []).filter(t => t.modules.some(m => m.caseIds.includes(id)));
  const steps = listOf(c.steps), pre = listOf(c.preconditions), tags = Array.isArray(c.tags) ? c.tags : String(c.tags ?? '').split(/[,\s]+/).filter(Boolean);
  const i = nav.ids.indexOf(id), n = nav.ids.length;
  const title = `${id} · ${c.title ?? c.name ?? ''}`;
  const html = `${nav.back || n > 1 ? `<div class="casenav">
        ${nav.back ? '<button class="small ghost" data-casenav="back">← Back</button>' : ''}<span class="grow"></span>
        ${n > 1 ? `<button class="small" data-casenav="prev" aria-label="Previous case"${i > 0 ? '' : ' disabled'}>‹ Prev</button><span class="small muted">${i + 1} of ${n}</span><button class="small" data-casenav="next" aria-label="Next case"${i < n - 1 ? '' : ' disabled'}>Next ›</button>` : ''}
      </div>` : ''}
      <div class="casehead">${[d.moduleName && `<span class="pill acc">${esc(d.moduleName)}</span>`, c.category && `<span class="pill">${esc(c.category)}</span>`, c.priority && `<span class="pill">${esc(c.priority)}</span>`, ...tags.map(t => `<span class="pill">${esc(t)}</span>`)].filter(Boolean).join(' ')}</div>
      ${tasks.length ? `<p class="small">Linked to ${tasks.map(t => { const it = W?.tasks.find(x => x.key === t.key) ?? W?.bugs.find(x => x.key === t.key); return it ? `<a data-detail="${t.kind}:${esc(it.id)}" class="mono">${esc(t.key)}</a>` : `<span class="mono">${esc(t.key)}</span>`; }).join(', ')}</p>` : ''}
      ${c.description ? `<p>${esc(c.description)}</p>` : ''}
      ${pre.length ? `<h4 class="mini-h">Preconditions</h4><ul>${pre.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      ${steps.length ? `<h4 class="mini-h">Steps</h4><ol>${steps.map(x => `<li>${esc(x)}</li>`).join('')}</ol>` : ''}
      ${c.expectedResult || c.expected ? `<h4 class="mini-h">Expected result</h4><p>${esc(c.expectedResult ?? c.expected)}</p>` : ''}
      ${!d.case ? '<p class="muted">The case definition was not found in the test-case files — only its run history is known.</p>' : ''}
      <h4 class="mini-h">Recent results</h4>
      ${d.history.length ? `<div class="rows">${d.history.map(h => `<div><span class="pill ${h.status === 'failed' ? 'bad' : h.status === 'passed' ? 'good' : ''}">${esc(h.status)}</span> ${when(h.at)} · <a href="/reports/${esc(h.report)}">${esc(h.title)}</a>${h.error ? `<div class="small muted mono">${esc(h.error)}</div>` : ''}</div>`).join('')}</div>` : '<p class="muted small">Not in any QA report yet.</p>'}
      <div style="display:flex;gap:8px;margin-top:14px"><button class="small" data-caserun="${esc(id)}">▶ Run this case</button></div>`;
  const dlg = $('#dlg');
  if (dlg.open && dlg.dataset.view === 'case') { $('#dlg-title').textContent = title; $('#dlg-body').innerHTML = html; $('#dlg-body').scrollTop = 0; return; }
  dialog({
    title, body: html,
    onOpen: () => {
      dlg.dataset.view = 'case';
      $('#dlg-body').onclick = e => {
        const nv = e.target.closest('[data-casenav]');
        if (nv) return caseNav(nv.dataset.casenav);
        const r = e.target.closest('[data-caserun]'); if (!r) return;
        $('#dlg').close();
        testRunDialog({ name: id, caseIds: [id] });
      };
    },
  });
}

function caseNav(dir) {
  const nav = CASE_NAV; if (!nav) return;
  if (dir === 'back') { $('#dlg').close(); return dialog(nav.back); }
  const i = nav.ids.indexOf(nav.id) + (dir === 'next' ? 1 : -1);
  if (i >= 0 && i < nav.ids.length) openCase(nav.ids[i], nav);
}
$('#dlg').addEventListener('close', () => { delete $('#dlg').dataset.view; });
document.addEventListener('keydown', e => {
  if ($('#dlg').dataset.view !== 'case' || !$('#dlg').open || e.target.closest('input, textarea, select')) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); caseNav('next'); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); caseNav('prev'); }
});

// Any [data-case] opens the viewer; Prev/Next walk the list it was clicked in (nearest list holding
// more than one case, never wider than its panel / dialog / chat message).
document.addEventListener('click', e => {
  const a = e.target.closest('[data-case]'); if (!a) return;
  e.preventDefault();
  let box = a.parentElement;
  while (box && box.querySelectorAll('[data-case]').length < 2 && !box.matches('.panel, #dlg-body, .chat-msgs, .drawer-body, section, main, body')) box = box.parentElement;
  const ids = box ? [...new Set([...box.querySelectorAll('[data-case]')].map(x => x.dataset.case))] : [a.dataset.case];
  const inDlg = a.closest('#dlg') && $('#dlg').dataset.view !== 'case';
  openCase(a.dataset.case, { ids, back: inDlg ? { title: $('#dlg-title').textContent, body: $('#dlg-body').innerHTML } : null });
});
