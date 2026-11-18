'use strict';
/* System chat assistant (optional, Claude). It reads a snapshot of the dashboard's data and
   answers; to do something it proposes action cards — each runs through the normal confirm flow. */

let CHAT = [], chatBusy = false;

const md = t => esc(t)
  .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/\b(SI4-[TI]\d+)\b/g, '<a data-chatkey="$1" class="mono">$1</a>')
  .replace(/\b(TC-[A-Z]{2,12}-\d+)\b/g, '<a data-case="$1" class="mono">$1</a>')
  .split('\n').map(l => (/^\s*[-•*] /.test(l) ? `<li>${l.replace(/^\s*[-•*] /, '')}</li>` : l)).join('\n')
  .replace(/(?:<li>.*<\/li>\n?)+/g, m => `<ul>${m.replace(/\n/g, '')}</ul>`)
  .replace(/\n{2,}/g, '<br><br>').replace(/\n/g, '<br>');

const actionLabel = a => a.label || ({ open: `Open ${a.key}`, page: `Go to ${a.tab}`, 'run-tests': `▶ Run ${a.code ?? `${a.caseIds?.length ?? ''} cases`}`, retest: `✨ Re-test ${a.key}`, pipeline: `✨ Testing pipeline for ${a.key}`, 'set-status': `Set ${a.key} → ${a.status}`, 'create-bug': 'File this bug' })[a.type] || a.type;

function renderChat() {
  $('#chat-msgs').innerHTML = CHAT.length ? CHAT.map((t, i) => `<div class="msg ${t.role}">
      <div class="bubble">${t.role === 'user' ? esc(t.text).replace(/\n/g, '<br>') : md(t.text)}</div>
      ${t.actions?.length ? `<div class="chat-acts">${t.actions.map((a, k) => `<button class="small" data-chatact="${i}:${k}">${esc(actionLabel(a))}</button>`).join('')}</div>` : ''}
      ${t.role === 'assistant' && t.costUsd ? `<div class="meta">${ago(t.at)} · $${t.costUsd.toFixed(2)}</div>` : ''}
    </div>`).join('') + (chatBusy ? `<div class="msg assistant"><div class="bubble"><span class="hb-inline">${Charts.heartbeat('busy', { width: 56, height: 18, beats: 2 })} Looking through the data…</span></div></div>` : '')
    : `<div class="chat-hello"><b>Ask about your QA work</b><p class="small muted">It reads the dashboard's data (tasks, bugs, tests, health, runs) and proposes actions you confirm.</p>
      ${['What is waiting for me to test?', 'Which modules are failing the most?', 'Is the system healthy after the last deploy?', 'Which of my bugs can be re-tested now?'].map(q => `<button class="small chip" data-chatq="${esc(q)}">${esc(q)}</button>`).join('')}</div>`;
  const box = $('#chat-msgs'); box.scrollTop = box.scrollHeight;
  $('#chat-send').disabled = chatBusy || !AI?.available;
  $('#chat-note').textContent = AI?.available ? 'Uses Claude on this machine · read-only · actions need your click' : 'Claude Code is not available on this machine';
}

async function sendChat(text) {
  text = text.trim();
  if (!text || chatBusy) return;
  CHAT.push({ role: 'user', text, at: new Date().toISOString() });
  chatBusy = true; renderChat(); $('#chat-input').value = '';
  try { CHAT.push(await api('/api/chat', { method: 'POST', body: JSON.stringify({ message: text }) })); }
  catch (e) { CHAT.push({ role: 'assistant', text: `Sorry — ${e.message}`, at: new Date().toISOString() }); }
  chatBusy = false; renderChat();
}

async function runChatAction(a) {
  const item = a.key ? (W.tasks.find(t => t.key === a.key) ?? W.bugs.find(b => b.key === a.key)) : null;
  const kind = item ? (W.tasks.includes(item) ? 'task' : 'bug') : null;
  switch (a.type) {
    case 'open': return item ? openDetail(kind, item.id) : alert(`${a.key} is not in the last sync`);
    case 'page': return showTab(String(a.tab));
    case 'run-tests': return testRunDialog({ name: a.label ?? a.code ?? a.key, key: a.key, code: a.code, caseIds: Array.isArray(a.caseIds) ? a.caseIds : [] });
    case 'retest': return item && kind === 'bug' ? retestDialog(item) : alert('That is not a bug in the last sync');
    case 'pipeline': if (item && kind === 'task') { await pipelineDialog(item); if (a.instructions && $('#pl-msg')) $('#pl-msg').value = a.instructions; } return;
    case 'set-status': {
      if (!item) return alert(`${a.key} is not in the last sync`);
      const list = kind === 'task' ? W.taskStatuses : W.bugFields.statuses;
      const to = list.find(s => s.name.toLowerCase() === String(a.status).toLowerCase());
      if (!to) return alert(`“${a.status}” is not a ${kind} status`);
      const payload = kind === 'task' ? { custom_status: to.id } : { status_id: to.id };
      const ok = await confirmSend(`Change <b>${esc(item.key)}</b> status: ${esc(item.status.name)} → <b>${esc(to.name)}</b> (suggested by the assistant)`, 'POST', `/api/${kind}s/${item.id}`, payload, { key: item.key });
      if (ok) item.status = to;
      return;
    }
    case 'create-bug': return newBugDialog({ title: String(a.title ?? ''), description: String(a.description ?? '') });
    default: alert(`Unknown action: ${a.type}`);
  }
}

$('#chat-fab').addEventListener('click', async () => {
  $('#chat').classList.toggle('hidden');
  if (!$('#chat').classList.contains('hidden')) { CHAT = await api('/api/chat').catch(() => []); renderChat(); $('#chat-input').focus(); }
});
$('#chat-close').addEventListener('click', () => $('#chat').classList.add('hidden'));
$('#chat-new').addEventListener('click', async () => { await api('/api/chat/reset', { method: 'POST' }); CHAT = []; renderChat(); });
$('#chat-form').addEventListener('submit', e => { e.preventDefault(); sendChat($('#chat-input').value); });
$('#chat-input').addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat($('#chat-input').value); } });
$('#chat').addEventListener('click', e => {
  const q = e.target.closest('[data-chatq]'); if (q) return sendChat(q.dataset.chatq);
  const k = e.target.closest('[data-chatkey]');
  if (k) { const it = W.tasks.find(t => t.key === k.dataset.chatkey) ?? W.bugs.find(b => b.key === k.dataset.chatkey); if (it) openDetail(W.tasks.includes(it) ? 'task' : 'bug', it.id); return; }
  const b = e.target.closest('[data-chatact]');
  if (b) { const [i, j] = b.dataset.chatact.split(':').map(Number); runChatAction(CHAT[i].actions[j]); }
});
