/**
 * Sync my Zoho work (tasks + bugs) into reports/ops/data/work.json for the ops dashboard.
 * Run by cron every 2 hours (npm run ops:cron:install) or by hand: npm run ops:sync
 *
 * Pulls every task and bug in the SimERP project, tags each with whether it's assigned to /
 * reported by the token's owner, and records what changed since the previous sync in
 * reports/ops/data/sync-log.json. Plain REST — no Claude, no MCP.
 *
 *   --trigger=cron|manual|dashboard   recorded in the sync log (default: manual)
 */

import {
  fetchMe, fetchAllTasks, fetchAllBugs, fetchBugFields, fetchTasklists, fetchProjectUsers, fetchSubtasks, fetchMyLoggedMinutes,
  isZohoRestConfigured, ZohoPerson, ZohoStatus, ZohoTask,
} from '../lib/zoho-rest';
import { WORK_FILE, SYNC_LOG, WorkSnapshot, SyncChange, SyncLogEntry, MineTag, readJson, writeJson, appendLog, isToBeTested } from './store';

const isMe = (me: ZohoPerson, p?: ZohoPerson) =>
  Boolean(p && ((me.zuid && p.zuid === me.zuid) || (me.zpuid && p.zpuid === me.zpuid) || (me.email && p.email?.toLowerCase() === me.email.toLowerCase())));

function diff(prev: WorkSnapshot | null, next: WorkSnapshot): SyncChange[] {
  if (!prev) return [];
  const changes: SyncChange[] = [];
  const compare = (kind: 'task' | 'bug', before: WorkSnapshot['tasks'] | WorkSnapshot['bugs'], after: WorkSnapshot['tasks'] | WorkSnapshot['bugs']) => {
    const old = new Map<string, (typeof before)[number]>(before.map(x => [x.id, x]));
    for (const item of after) {
      const was = old.get(item.id);
      const mine = item.mine.length > 0;
      if (!was) changes.push({ kind, key: item.key, title: item.title, change: 'new', to: item.status.name, mine });
      else {
        if (was.status.name !== item.status.name) changes.push({ kind, key: item.key, title: item.title, change: 'status', from: was.status.name, to: item.status.name, mine });
        if (item.mine.includes('assignedToMe') && !was.mine.includes('assignedToMe')) changes.push({ kind, key: item.key, title: item.title, change: 'assigned-to-me', mine: true });
      }
      old.delete(item.id);
    }
    for (const gone of old.values()) changes.push({ kind, key: gone.key, title: gone.title, change: 'removed', mine: gone.mine.length > 0 });
  };
  compare('task', prev.tasks, next.tasks);
  compare('bug', prev.bugs, next.bugs);
  return changes;
}

export async function syncZoho(trigger: SyncLogEntry['trigger'] = 'manual'): Promise<SyncLogEntry> {
  const started = Date.now();
  try {
    if (!isZohoRestConfigured()) throw new Error('Zoho is not configured — set ZOHO_* in .env (see .env.example)');
    const me = await fetchMe();
    const [topTasks, bugs, bugFields, tasklists, users, myMinutes] = await Promise.all([
      fetchAllTasks(), fetchAllBugs(), fetchBugFields(), fetchTasklists(), fetchProjectUsers(),
      me.zuid ? fetchMyLoggedMinutes(me.zuid).catch(() => new Map<string, number>()) : Promise.resolve(new Map<string, number>()),
    ]);
    // v3 lists only top-level tasks — pull the subtasks of every task that has some.
    const subtasks: ZohoTask[] = [];
    for (const parent of topTasks.filter(t => t.hasSubtasks)) subtasks.push(...await fetchSubtasks(parent.id).catch(() => []));
    // v3 already lists most subtasks — just record their parent; add any it missed.
    const parentOf = new Map(subtasks.map(t => [t.id, t.parentId!]));
    const seen = new Set(topTasks.map(t => t.id));
    const tasks = [...topTasks.map(t => (parentOf.has(t.id) ? { ...t, parentId: parentOf.get(t.id) } : t)), ...subtasks.filter(t => !seen.has(t.id))];

    // Bug ↔ task links from the text: bugs filed from a task name it ("Task: SI4-T1549 …"), and vice versa.
    const keysIn = (text: string, kind: 'T' | 'I') => [...new Set([...String(text).matchAll(new RegExp(`\\bSI4-${kind}\\d+\\b`, 'g'))].map(m => m[0]))];
    const taskKeys = new Set(tasks.map(t => t.key)), bugKeys = new Set(bugs.map(b => b.key));
    const bugToTasks = new Map(bugs.map(b => [b.key, keysIn(`${b.title} ${b.description}`, 'T').filter(k => taskKeys.has(k))]));
    const taskToBugs = new Map<string, Set<string>>();
    for (const [bk, tks] of bugToTasks) for (const tk of tks) (taskToBugs.get(tk) ?? taskToBugs.set(tk, new Set()).get(tk)!).add(bk);
    for (const t of tasks) for (const bk of keysIn(`${t.title} ${t.description}`, 'I')) if (bugKeys.has(bk)) {
      (taskToBugs.get(t.key) ?? taskToBugs.set(t.key, new Set()).get(t.key)!).add(bk);
      const list = bugToTasks.get(bk)!; if (!list.includes(t.key)) list.push(t.key);
    }

    // Zoho has no task-status list endpoint — collect the statuses actually in use.
    const taskStatuses = new Map<string, ZohoStatus>();
    for (const t of tasks) if (t.status.id) taskStatuses.set(t.status.id, t.status);

    const snapshot: WorkSnapshot = {
      syncedAt: new Date().toISOString(),
      me,
      tasks: tasks.map(t => ({
        ...t, mine: t.owners.some(o => isMe(me, o)) ? ['assignedToMe' as MineTag] : [],
        myLoggedHours: myMinutes.has(t.id) ? Math.round((myMinutes.get(t.id)! / 60) * 100) / 100 : undefined,
        linkedBugs: [...(taskToBugs.get(t.key) ?? [])],
      })),
      bugs: bugs.map(b => ({
        ...b, linkedTasks: bugToTasks.get(b.key) ?? [],
        mine: [
          ...(isMe(me, b.reporter) ? ['reportedByMe' as MineTag] : []),
          ...(isMe(me, b.assignee) ? ['assignedToMe' as MineTag] : []),
        ],
      })),
      taskStatuses: [...taskStatuses.values()].sort((a, b) => Number(a.closed) - Number(b.closed) || a.name.localeCompare(b.name)),
      bugFields,
      tasklists,
      users,
    };

    const changes = diff(readJson<WorkSnapshot | null>(WORK_FILE, null), snapshot);
    writeJson(WORK_FILE, snapshot);

    const entry: SyncLogEntry = {
      at: snapshot.syncedAt, trigger, ok: true, durationMs: Date.now() - started,
      counts: {
        tasks: tasks.length,
        bugs: bugs.length,
        myTasks: snapshot.tasks.filter(t => t.mine.length).length,
        bugsReportedByMe: snapshot.bugs.filter(b => b.mine.includes('reportedByMe')).length,
        bugsAssignedToMe: snapshot.bugs.filter(b => b.mine.includes('assignedToMe')).length,
        openBugs: bugs.filter(b => !b.status.closed).length,
        tbtTasks: tasks.filter(t => isToBeTested(t.status.name)).length,
        tbtBugs: bugs.filter(b => isToBeTested(b.status.name)).length,
      },
      changes,
    };
    appendLog(SYNC_LOG, entry);
    return entry;
  } catch (e) {
    const entry: SyncLogEntry = { at: new Date().toISOString(), trigger, ok: false, durationMs: Date.now() - started, error: (e as Error).message };
    appendLog(SYNC_LOG, entry);
    return entry;
  }
}

if (require.main === module) {
  const trigger = (process.argv.find(a => a.startsWith('--trigger='))?.split('=')[1] ?? 'manual') as SyncLogEntry['trigger'];
  syncZoho(trigger).then(entry => {
    if (!entry.ok) { console.error(`✗ Zoho sync failed: ${entry.error}`); process.exit(1); }
    const c = entry.counts!;
    console.log(`✓ Zoho sync done in ${(entry.durationMs / 1000).toFixed(1)}s — ${c.tasks} tasks (${c.myTasks} mine), ${c.bugs} bugs (${c.bugsReportedByMe} reported by me, ${c.bugsAssignedToMe} assigned to me)`);
    const notable = (entry.changes ?? []).filter(x => x.mine || x.change === 'new');
    for (const x of notable.slice(0, 20)) console.log(`  • ${x.kind} ${x.key} ${x.change}${x.from ? ` ${x.from} → ${x.to}` : x.to ? ` (${x.to})` : ''} — ${x.title}`);
  });
}
