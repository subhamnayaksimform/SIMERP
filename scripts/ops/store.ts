/**
 * File layout + JSON helpers shared by the ops cron jobs (scripts/ops/) and the ops dashboard
 * (ops-dashboard/). Everything lives under reports/ops/ (gitignored). Plain JSON, no database.
 */

import * as fs from 'fs';
import * as path from 'path';
import type { ZohoBug, ZohoPerson, ZohoStatus, ZohoTask, BugFields } from '../lib/zoho-rest';

export const ROOT = path.resolve(__dirname, '../..');
export const OPS_DIR = path.join(ROOT, 'reports/ops');
export const WORK_FILE = path.join(OPS_DIR, 'data/work.json');
export const SYNC_LOG = path.join(OPS_DIR, 'data/sync-log.json');
export const HEALTH_DIR = path.join(OPS_DIR, 'health');
export const LOG_DIR = path.join(OPS_DIR, 'logs');
export const ACTIONS_LOG = path.join(OPS_DIR, 'data/actions-log.json');
export const TBT_RUNS = path.join(OPS_DIR, 'data/tbt-runs.json');

/** "To be tested" — Zoho spells it both "To be tested" and "ToBeTested". */
export const isToBeTested = (statusName: string) => /^to\s*be\s*tested$/i.test(statusName.trim());

export type MineTag = 'assignedToMe' | 'reportedByMe';

export interface WorkSnapshot {
  syncedAt: string;
  me: ZohoPerson;
  tasks: (ZohoTask & { mine: MineTag[]; myLoggedHours?: number; linkedBugs?: string[] })[];
  bugs: (ZohoBug & { mine: MineTag[]; linkedTasks?: string[] })[];
  taskStatuses: ZohoStatus[];
  bugFields: BugFields;
  tasklists: { id: string; name: string }[];
  users: ZohoPerson[];
}

export interface SyncChange {
  kind: 'task' | 'bug';
  key: string;
  title: string;
  change: 'new' | 'status' | 'assigned-to-me' | 'removed';
  from?: string;
  to?: string;
  mine: boolean;
}

export interface SyncLogEntry {
  at: string;
  trigger: 'cron' | 'manual' | 'dashboard';
  ok: boolean;
  durationMs: number;
  counts?: { tasks: number; bugs: number; myTasks: number; bugsReportedByMe: number; bugsAssignedToMe: number; openBugs?: number; tbtTasks?: number; tbtBugs?: number };
  changes?: SyncChange[];
  error?: string;
}

export function readJson<T>(file: string, fallback: T): T {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')) as T; } catch { return fallback; }
}

/** Write via a temp file + rename so the dashboard never reads a half-written file. */
export function writeJson(file: string, data: unknown): void {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2));
  fs.renameSync(tmp, file);
}

/** Prepend to a JSON array log, keeping the newest `keep` entries. */
export function appendLog<T>(file: string, entry: T, keep = 300): void {
  writeJson(file, [entry, ...readJson<T[]>(file, [])].slice(0, keep));
}
