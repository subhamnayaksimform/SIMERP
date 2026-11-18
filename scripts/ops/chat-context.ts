/**
 * The data snapshot the chat assistant answers from — a plain JSON file it can read, nothing
 * else. Built fresh for every message from what the dashboard already has. No AI here.
 */

import * as path from 'path';
import { OPS_DIR, WORK_FILE, SYNC_LOG, WorkSnapshot, SyncLogEntry, readJson, writeJson, isToBeTested } from './store';
import { buildTbt } from './tbt';
import { taskLinks } from './task-links';
import { moduleHealth, topFailing, allRuns } from './suite';
import { healthRuns } from './health-check';
import { listActivities } from './activities';

export const CHAT_DIR = path.join(OPS_DIR, 'chat');
export const CONTEXT_FILE = path.join(CHAT_DIR, 'context.json');

export function buildChatContext(): string {
  const w = readJson<WorkSnapshot | null>(WORK_FILE, null);
  if (!w) throw new Error('No Zoho data yet — sync first');
  const links = taskLinks(w).tasks;
  const tbt = buildTbt(w, links);
  const health = healthRuns('dev', 10);
  const ctx = {
    generatedAt: new Date().toISOString(),
    me: w.me,
    statuses: { task: w.taskStatuses.map(s => s.name), bug: w.bugFields.statuses.map(s => s.name) },
    myOpenTasks: w.tasks.filter(t => t.mine.length && !t.status.closed).map(t => ({ key: t.key, title: t.title, status: t.status.name, tasklist: t.tasklist?.name, plannedHours: t.plannedHours, loggedHours: t.loggedHours, myLoggedHours: t.myLoggedHours, linkedBugs: t.linkedBugs, updatedAt: t.updatedAt })),
    toBeTested: tbt.items.map(i => ({ key: i.key, kind: i.kind, title: i.title, people: i.people, reporter: i.reporter, mine: i.mine, updatedAt: i.updatedAt, tests: i.modules.map(m => ({ module: m.code, name: m.name, linkedCases: m.taskCases ?? 0, lastRun: m.taskLast ?? m.lastRun })), suggestedModules: i.suggested.map(s => s.code) })),
    openBugs: w.bugs.filter(b => !b.status.closed).map(b => ({ key: b.key, title: b.title, status: b.status.name, severity: b.severity, reporter: b.reporter?.name, assignee: b.assignee?.name ?? 'Unassigned', mine: b.mine, linkedTasks: b.linkedTasks, updatedAt: b.updatedAt })),
    taskTestLinks: links.map(l => ({ key: l.key, kind: l.kind, inZoho: l.inZoho, title: l.title, status: l.status?.name, modules: l.modules.map(m => ({ module: m.code, cases: m.caseIds.length, automated: m.automated, last: m.last })) })),
    suite: moduleHealth().map(m => ({ module: m.code, name: m.name, group: m.group, cases: m.caseCount, lastRun: m.lastRun && { at: m.lastRun.at, passRate: m.lastRun.rate, passed: m.lastRun.passed, failed: m.lastRun.failed, total: m.lastRun.total }, trend: m.trend })),
    mostFailingTests: topFailing(25, 25),
    recentRuns: allRuns().slice(0, 20).map(r => ({ at: r.at, label: r.label, passed: r.passed, failed: r.failed, total: r.total, report: r.report })),
    health: health.map(r => ({ at: r.finishedAt, ok: r.ok, version: r.version, reason: r.reason, api: r.api && { passed: r.api.passed, failed: r.api.failed, total: r.api.total, failures: r.api.checks.filter(c => c.status === 'failed').map(c => ({ id: c.id, endpoint: c.endpoint, http: c.httpStatus, error: c.error })) }, regression: r.regression && { passed: r.regression.passed, failed: r.regression.failed, total: r.regression.total, failures: r.regression.failures.slice(0, 30).map(c => ({ id: c.id, title: c.title })) } })),
    activities: listActivities(30).map(a => ({ title: a.title, type: a.type, status: a.status, key: a.key, startedAt: a.startedAt, summary: a.summary })),
    recentZohoChanges: readJson<SyncLogEntry[]>(SYNC_LOG, []).filter(e => e.ok).slice(0, 12).flatMap(e => (e.changes ?? []).map(c => ({ at: e.at, ...c }))).slice(0, 80),
    counts: { tbtTasks: w.tasks.filter(t => isToBeTested(t.status.name)).length, tbtBugs: w.bugs.filter(b => isToBeTested(b.status.name)).length, openBugs: w.bugs.filter(b => !b.status.closed).length, myOpenTasks: w.tasks.filter(t => t.mine.length && !t.status.closed).length },
  };
  writeJson(CONTEXT_FILE, ctx);
  return CONTEXT_FILE;
}
