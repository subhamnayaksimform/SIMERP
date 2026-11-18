/**
 * Direct Zoho Projects REST client — no MCP, no Claude, no model. Used by the ops dashboard
 * (ops-dashboard/) and its cron jobs (scripts/ops/), and by the knowledge-base sync.
 *
 * Auth is the Self Client refresh token in .env (ZOHO_CLIENT_ID / ZOHO_CLIENT_SECRET /
 * ZOHO_REFRESH_TOKEN, refreshed via `npm run zoho:reauth`). Access tokens are cached on disk
 * so cron runs and the dashboard share one token instead of minting a new one per call.
 *
 * Zoho quirks this handles (all verified against the SimERP project):
 *   - record ids are 18-digit numbers, often returned as bare JSON numbers → parsed as strings
 *   - v1 (`/restapi/...`) writes must be form-encoded; a JSON body gives 6831 "Input Parameter Missing"
 *   - reads use v3 (`/api/v3/...`): the v1 bug list returns 6500 "General Error" for some
 *     pages (a bad record somewhere in 101-150), v3 pages through all of them; v3 `created_by` is the reporter
 *   - there is no task-status list endpoint → task statuses are collected from the tasks themselves
 */

import axios, { AxiosError } from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

const ROOT = path.resolve(__dirname, '../..');
dotenv.config({ path: path.join(ROOT, '.env') });

const REGION = process.env.ZOHO_REGION || 'com';
const PORTAL_ID = process.env.ZOHO_PORTAL_ID || '';
const PROJECT_ID = process.env.ZOHO_PROJECT_ID || '';
const TOKEN_CACHE = path.join(ROOT, 'reports/ops/.zoho-token.json');

const API = `https://projectsapi.zoho.${REGION}`;
const V1 = `${API}/restapi/portal/${PORTAL_ID}/projects/${PROJECT_ID}`;
const V3_PORTAL = `${API}/api/v3/portal/${PORTAL_ID}`;
const V3 = `${V3_PORTAL}/projects/${PROJECT_ID}`;

// ─── types ───

export interface ZohoPerson { zuid?: string; zpuid?: string; name: string; email?: string }

export interface ZohoStatus { id: string; name: string; closed: boolean; color?: string }

export interface ZohoTask {
  id: string;
  key: string;            // SI4-T1668
  title: string;
  description: string;
  status: ZohoStatus;
  priority: string;
  owners: ZohoPerson[];
  createdBy?: ZohoPerson;
  tasklist?: { id: string; name: string };
  createdAt: string;
  updatedAt: string;
  url: string;
  plannedHours: number | null;   // owners_and_work.total_work (baseline)
  loggedHours: number | null;    // log_hours.total_hours (everyone)
  ownerWork: { name: string; hours: number | null }[];
  hasComments: boolean; hasAttachments: boolean; hasSubtasks: boolean;
  parentId?: string;
}

export interface ZohoComment { id: string; author: string; at: string; html: string }
export interface ZohoAttachment { id: string; name: string; size?: string; type?: string; at?: string; by?: string; url?: string }

export interface ZohoBug {
  id: string;
  key: string;            // SI4-I623
  title: string;
  description: string;
  status: ZohoStatus;
  severity: string;
  classification: string;
  module: string;
  reporter: ZohoPerson;
  assignee?: ZohoPerson;
  createdAt: string;
  updatedAt: string;
  closedAt?: string;
  url: string;
}

export interface BugFields {
  statuses: ZohoStatus[];
  severities: { id: string; name: string }[];
  classifications: { id: string; name: string }[];
  modules: { id: string; name: string }[];
}

// ─── low level ───

export function isZohoRestConfigured(): boolean {
  return Boolean(PORTAL_ID && PROJECT_ID && process.env.ZOHO_CLIENT_ID && process.env.ZOHO_CLIENT_SECRET && process.env.ZOHO_REFRESH_TOKEN);
}

/**
 * JSON.parse that keeps 15+ digit numbers as strings — Zoho ids exceed Number.MAX_SAFE_INTEGER.
 * Scans the text so digits inside string values (descriptions, urls) are never touched.
 */
export function parseZohoJson(text: string): any {
  let out = '';
  let inString = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inString) {
      out += ch;
      if (ch === '\\') out += text[++i] ?? '';
      else if (ch === '"') inString = false;
    } else if (ch === '"') {
      inString = true;
      out += ch;
    } else if (ch >= '0' && ch <= '9') {
      let j = i;
      while (j < text.length && /[0-9.eE+-]/.test(text[j])) j++;
      const num = text.slice(i, j);
      out += /^\d{15,}$/.test(num) ? `"${num}"` : num;
      i = j - 1;
    } else out += ch;
  }
  return JSON.parse(out);
}

/** Retry a flaky network call with exponential backoff (1s/2s/4s); 4xx errors are not retried. */
export async function withRetry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (e: unknown) {
      const status = (e as AxiosError).response?.status;
      if (i === attempts - 1 || (status && status >= 400 && status < 500 && status !== 429)) throw e;
      await new Promise(resolve => setTimeout(resolve, 1000 * 2 ** i));
    }
  }
  throw new Error('unreachable');
}

/** Mint a fresh access token from the refresh token (no caching). */
export async function refreshZohoToken(): Promise<string> {
  const { ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN } = process.env;
  if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN) {
    throw new Error('ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, and ZOHO_REFRESH_TOKEN must be set in .env');
  }
  const params = new URLSearchParams({
    grant_type: 'refresh_token',
    client_id: ZOHO_CLIENT_ID,
    client_secret: ZOHO_CLIENT_SECRET,
    refresh_token: ZOHO_REFRESH_TOKEN,
  });
  const res = await withRetry(() => axios.post(`https://accounts.zoho.${REGION}/oauth/v2/token`, params.toString(), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }));
  if (!res.data.access_token) throw new Error(`Token refresh failed: ${JSON.stringify(res.data)} — run \`npm run zoho:reauth\``);
  return res.data.access_token as string;
}

/** Cached access token — reused until 5 minutes before expiry (or until Zoho rejects it). */
async function accessToken(fresh = false): Promise<string> {
  if (!fresh) try {
    const c = JSON.parse(fs.readFileSync(TOKEN_CACHE, 'utf8'));
    if (c.token && c.expiresAt > Date.now() + 5 * 60_000) return c.token;
  } catch { /* no cache yet */ }
  const token = await refreshZohoToken();
  fs.mkdirSync(path.dirname(TOKEN_CACHE), { recursive: true });
  fs.writeFileSync(TOKEN_CACHE, JSON.stringify({ token, expiresAt: Date.now() + 55 * 60_000 }), { mode: 0o600 });
  return token;
}

function describeError(e: unknown): Error {
  const ax = e as AxiosError;
  if (!ax.isAxiosError) return e as Error;
  const body = typeof ax.response?.data === 'string' ? ax.response.data : JSON.stringify(ax.response?.data ?? '');
  return new Error(`Zoho ${ax.config?.method?.toUpperCase()} ${ax.config?.url} → ${ax.response?.status ?? ax.code}: ${body.slice(0, 300)}`);
}

/** Zoho can revoke an access token before it expires — detect that so the call is retried once with a fresh one. */
const isInvalidToken = (e: unknown) => (e as AxiosError).response?.status === 401 && /INVALID_OAUTHTOKEN|Invalid OAuth access token/i.test(String((e as AxiosError).response?.data ?? ''));

async function zget(url: string, params?: Record<string, string | number>, retried = false): Promise<any> {
  const token = await accessToken(retried);
  try {
    const res = await withRetry(() => axios.get(url, {
      params,
      headers: { Authorization: `Zoho-oauthtoken ${token}` },
      responseType: 'text',
      transformResponse: r => r,
    }));
    return res.data ? parseZohoJson(res.data) : {};
  } catch (e) {
    if (!retried && isInvalidToken(e)) return zget(url, params, true);
    throw describeError(e);
  }
}

/** Form-encoded POST — the only body format the v1 write endpoints accept. Not retried (writes aren't idempotent). */
async function zpostForm(url: string, fields: Record<string, string | undefined>, retried = false): Promise<any> {
  const token = await accessToken(retried);
  const body = new URLSearchParams();
  for (const [k, v] of Object.entries(fields)) if (v !== undefined && v !== '') body.append(k, v);
  try {
    const res = await axios.post(url, body.toString(), {
      headers: { Authorization: `Zoho-oauthtoken ${token}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      responseType: 'text',
      transformResponse: r => r,
    });
    return res.data ? parseZohoJson(res.data) : {};
  } catch (e) {
    // A 401 for a bad token means Zoho never processed the write, so one retry is safe.
    if (!retried && isInvalidToken(e)) return zpostForm(url, fields, true);
    throw describeError(e);
  }
}

// ─── normalisers ───

const str = (v: unknown) => (v === undefined || v === null ? '' : String(v));

/** "12:30" → 12.5 hours; null when missing. */
const hhmm = (v: unknown): number | null => {
  const m = /^(\d+):(\d{1,2})$/.exec(String(v ?? '').trim());
  return m ? Math.round((Number(m[1]) + Number(m[2]) / 60) * 100) / 100 : null;
};

/** Zoho returns titles HTML-encoded (`&quot;`, `&#39;`) — decode them to plain text. */
const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
const plain = (v: unknown) => str(v).replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, e: string) =>
  e[0] === '#' ? String.fromCodePoint(parseInt(e.slice(1).replace(/^x/i, ''), /^#x/i.test(e) ? 16 : 10)) : ENTITIES[e.toLowerCase()] ?? m);

function v3Person(p: any): ZohoPerson {
  return { zuid: str(p.zuid) || undefined, zpuid: str(p.zpuid) || undefined, name: str(p.full_name || p.name || p.display_name), email: p.email || undefined };
}

function taskFromV3(t: any): ZohoTask {
  return {
    id: str(t.id),
    key: str(t.prefix),
    title: plain(t.name),
    description: str(t.description),
    status: { id: str(t.status?.id), name: str(t.status?.name), closed: Boolean(t.status?.is_closed_type), color: t.status?.color_hexcode },
    priority: str(t.priority || 'None'),
    owners: (t.owners_and_work?.owners ?? []).filter((o: any) => o.zuid || o.zpuid).map(v3Person),
    createdBy: t.created_by ? v3Person(t.created_by) : undefined,
    tasklist: t.tasklist ? { id: str(t.tasklist.id), name: plain(t.tasklist.name) } : undefined,
    createdAt: str(t.created_time),
    updatedAt: str(t.last_modified_time || t.created_time),
    url: `https://projects.zoho.${REGION}/portal/${PORTAL_ID}#taskdetail/${PROJECT_ID}/${str(t.tasklist?.id)}/${str(t.id)}`,
    plannedHours: hhmm(t.owners_and_work?.total_work),
    loggedHours: hhmm(t.log_hours?.total_hours),
    ownerWork: (t.owners_and_work?.owners ?? []).filter((o: any) => o.zuid || o.zpuid).map((o: any) => ({ name: str(o.full_name || o.name), hours: hhmm(o.work_values) })),
    hasComments: Boolean(t.association_info?.has_comments), hasAttachments: Boolean(t.association_info?.has_attachments), hasSubtasks: Boolean(t.association_info?.has_subtasks),
  };
}

/** v1 task shape (subtask lists only come from v1). */
function taskFromV1(t: any, parentId: string): ZohoTask {
  const owners = (t.details?.owners ?? []).filter((o: any) => o.id && o.name !== 'Unassigned');
  return {
    id: str(t.id_string || t.id), key: str(t.key), title: plain(t.name), description: str(t.description),
    status: { id: str(t.status?.id), name: str(t.status?.name), closed: t.status?.type === 'closed', color: t.status?.color_code },
    priority: str(t.priority || 'None'),
    owners: owners.map((o: any) => ({ zuid: str(o.id), zpuid: str(o.zpuid) || undefined, name: str(o.full_name || o.name), email: o.email })),
    createdBy: t.created_person ? { name: str(t.created_person), email: t.created_by_email } : undefined,
    tasklist: t.tasklist ? { id: str(t.tasklist.id_string || t.tasklist.id), name: plain(t.tasklist.name) } : undefined,
    createdAt: t.created_time_long ? new Date(Number(t.created_time_long)).toISOString() : '',
    updatedAt: t.last_updated_time_long ? new Date(Number(t.last_updated_time_long)).toISOString() : '',
    url: str(t.link?.web?.url),
    plannedHours: hhmm(t.work ?? owners[0]?.work), loggedHours: hhmm(t.log_hours?.total_hours),
    ownerWork: owners.map((o: any) => ({ name: str(o.full_name || o.name), hours: hhmm(o.work) })),
    hasComments: Boolean(t.is_comment_added), hasAttachments: false, hasSubtasks: Boolean(t.subtasks), parentId,
  };
}

function bugFromV3(b: any): ZohoBug {
  return {
    id: str(b.id),
    key: str(b.prefix),
    title: plain(b.name),
    description: str(b.description),
    status: { id: str(b.status?.id), name: str(b.status?.name), closed: Boolean(b.status?.is_closed_type), color: b.status?.color_hexcode },
    severity: str(b.severity?.value || 'None'),
    classification: str(b.classification?.value || 'None'),
    module: str(b.module?.value || b.module?.name || 'None'),
    reporter: b.created_by ? v3Person(b.created_by) : { name: 'Unknown' },
    assignee: b.assignee?.zuid || b.assignee?.zpuid ? v3Person(b.assignee) : undefined,
    createdAt: str(b.created_time),
    updatedAt: str(b.last_updated_time || b.created_time),
    closedAt: b.status?.is_closed_type && b.completed_time ? str(b.completed_time) : undefined,
    url: `https://projects.zoho.${REGION}/portal/${PORTAL_ID}#buginfo/${PROJECT_ID}/${str(b.id)}`,
  };
}

/** v1 write responses (create/update bug) still come back in the v1 shape. */
function bugFromV1(b: any): ZohoBug {
  const assigned = b.assignee_name && !/not assigned/i.test(b.assignee_name);
  return {
    id: str(b.id_string || b.id),
    key: str(b.key),
    title: plain(b.title),
    description: str(b.description),
    status: { id: str(b.status?.id), name: str(b.status?.type), closed: Boolean(b.closed), color: b.status?.colorcode },
    severity: str(b.severity?.type || 'None'),
    classification: str(b.classification?.type || 'None'),
    module: str(b.module?.name || 'None'),
    reporter: { zuid: str(b.reporter_id) || undefined, name: str(b.reported_person), email: b.reporter_email || undefined },
    assignee: assigned ? { zuid: str(b.assignee_id) || undefined, zpuid: str(b.assignee_zpuid) || undefined, name: str(b.assignee_name) } : undefined,
    createdAt: b.created_time_long ? new Date(Number(b.created_time_long)).toISOString() : '',
    updatedAt: b.updated_time_long ? new Date(Number(b.updated_time_long)).toISOString() : '',
    url: str(b.link?.web?.url) || `https://projects.zoho.${REGION}/portal/${PORTAL_ID}#buginfo/${PROJECT_ID}/${str(b.id_string)}`,
  };
}

// ─── reads ───

/** The Zoho user behind the refresh token — "me" for the My Work views. */
/** Raw GET for one-off lookups (diagnostics). */
export const zohoGet = (url: string, params?: Record<string, string | number>) => zget(url, params);
export const ZOHO_V3 = V3;

export async function fetchMe(): Promise<ZohoPerson> {
  const me = await zget(`${V3_PORTAL}/users/me`);
  return { zuid: str(me.zuid), zpuid: str(me.id), name: str(me.full_name || me.display_name), email: me.email };
}

export async function fetchProjectUsers(): Promise<ZohoPerson[]> {
  const data = await zget(`${V1}/users/`);
  return (data.users ?? []).filter((u: any) => u.active !== false)
    .map((u: any) => ({ zuid: str(u.id), zpuid: str(u.zpuid), name: str(u.name), email: u.email }));
}

export async function fetchAllTasks(maxPages = 50): Promise<ZohoTask[]> {
  const all: ZohoTask[] = [];
  for (let page = 1; page <= maxPages; page++) {
    const data = await zget(`${V3}/tasks`, { page, per_page: 100 });
    all.push(...(data.tasks ?? []).map(taskFromV3));
    if (!data.page_info?.has_next_page) break;
  }
  return all;
}

export async function fetchAllBugs(maxPages = 50): Promise<ZohoBug[]> {
  const all: ZohoBug[] = [];
  for (let page = 1; page <= maxPages; page++) {
    const data = await zget(`${V3}/issues`, { page, per_page: 100 });
    all.push(...(data.issues ?? []).map(bugFromV3));
    if (!data.page_info?.has_next_page) break;
  }
  return all;
}

/** Subtasks of one task — v3 lists only top-level tasks. */
export async function fetchSubtasks(parentId: string): Promise<ZohoTask[]> {
  const data = await zget(`${V1}/tasks/${parentId}/subtasks/`);
  return (data.tasks ?? []).map((t: any) => taskFromV1(t, parentId));
}

/** Minutes the given user logged per task over the last `months` months (month views, newest first). */
export async function fetchMyLoggedMinutes(zuid: string, months = 6): Promise<Map<string, number>> {
  const out = new Map<string, number>();
  const d = new Date();
  for (let i = 0; i < months; i++) {
    const day = new Date(d.getFullYear(), d.getMonth() - i, 15);
    const date = `${String(day.getMonth() + 1).padStart(2, '0')}-15-${day.getFullYear()}`;
    const data = await zget(`${V1}/logs/`, { users_list: zuid, view_type: 'month', date, bill_status: 'All', component_type: 'task' });
    for (const dayLogs of data.timelogs?.date ?? []) for (const l of dayLogs.tasklogs ?? []) {
      if (String(l.owner_id) !== zuid) continue;
      const id = str(l.task?.id_string || l.task?.id);
      out.set(id, (out.get(id) ?? 0) + Number(l.total_minutes ?? 0));
    }
  }
  return out;
}

export async function fetchComments(kind: 'task' | 'bug', id: string): Promise<ZohoComment[]> {
  const data = await zget(`${V3}/${kind === 'task' ? 'tasks' : 'issues'}/${id}/comments`, { page: 1, per_page: 100 });
  return (data.comments ?? []).map((c: any) => ({
    id: str(c.id), author: str(c.created_by?.full_name || c.created_by?.name || c.added_by?.name || c.commenter || 'Unknown'),
    at: str(c.created_time), html: str(c.comment ?? c.content ?? ''),
  }));
}

export async function fetchAttachments(kind: 'task' | 'bug', id: string): Promise<ZohoAttachment[]> {
  const data = await zget(`${V3}/${kind === 'task' ? 'tasks' : 'issues'}/${id}/attachments`);
  const list = [...(data.attachment ?? []), ...(data.attachments ?? []), ...(data.comment_attachments ?? []), ...(data.resolution_attachments ?? [])];
  return list.map((a: any) => ({
    id: str(a.id || a.attachment_id), name: plain(a.name || a.file_name || 'attachment'), size: str(a.size || a.file_size) || undefined,
    type: str(a.type || a.content_type) || undefined, at: str(a.created_time || a.uploaded_time) || undefined,
    by: str(a.created_by?.name || a.uploaded_by?.name) || undefined, url: str(a.permanent_url || a.preview_url || a.download_url || a.link) || undefined,
  }));
}

export async function fetchTasklists(): Promise<{ id: string; name: string }[]> {
  const all: { id: string; name: string }[] = [];
  const range = 100;
  for (let page = 0, index = 1; page < 20; page++, index += range) {
    const lists = (await zget(`${V1}/tasklists/`, { flag: 'internal', index, range })).tasklists ?? [];
    all.push(...lists.map((l: any) => ({ id: str(l.id_string || l.id), name: str(l.name) })));
    if (lists.length < range) break;
  }
  return all;
}

export async function fetchBugFields(): Promise<BugFields> {
  const d = (await zget(`${V1}/bugs/defaultfields/`)).defaultfields ?? {};
  return {
    statuses: (d.status_details ?? []).map((s: any) => ({ id: str(s.status_id), name: str(s.status_name), closed: s.closed === 'true', color: s.colorcode })),
    severities: (d.severity_details ?? []).map((s: any) => ({ id: str(s.severity_id), name: str(s.severity_name) })),
    classifications: (d.classification_details ?? []).map((s: any) => ({ id: str(s.classification_id), name: str(s.classification_name) })),
    modules: (d.module_details ?? []).map((s: any) => ({ id: str(s.module_id), name: str(s.module_name) })),
  };
}

// ─── writes (v1, form-encoded) ───

export interface NewBug {
  title: string;
  description?: string;
  assignee?: string;          // zuid — a zpuid gives "user assigned does not belong to this project"
  severity_id?: string;
  classification_id?: string;
  module_id?: string;
  flag?: 'Internal' | 'External';
}

export async function createBug(bug: NewBug): Promise<ZohoBug> {
  const data = await zpostForm(`${V1}/bugs/`, { ...bug });
  return bugFromV1(data.bugs?.[0] ?? {});
}

export async function updateBug(id: string, fields: Partial<NewBug> & { status_id?: string }): Promise<ZohoBug> {
  const data = await zpostForm(`${V1}/bugs/${id}/`, { ...fields });
  return bugFromV1(data.bugs?.[0] ?? {});
}

export interface NewTask {
  name: string;
  description?: string;
  tasklist_id?: string;
  person_responsible?: string; // comma-separated zuids
  priority?: 'None' | 'Low' | 'Medium' | 'High';
  start_date?: string;         // MM-DD-YYYY
  end_date?: string;
}

export async function createTask(task: NewTask): Promise<{ id: string; key: string }> {
  const data = await zpostForm(`${V1}/tasks/`, { ...task });
  const t = data.tasks?.[0] ?? {};
  return { id: str(t.id_string || t.id), key: str(t.key) };
}

export async function updateTask(id: string, fields: Partial<NewTask> & { custom_status?: string }): Promise<{ id: string; key: string }> {
  const data = await zpostForm(`${V1}/tasks/${id}/`, { ...fields });
  const t = data.tasks?.[0] ?? {};
  return { id: str(t.id_string || t.id || id), key: str(t.key) };
}

/** Add a comment to a task (v1 form post). */
export async function addTaskComment(id: string, content: string): Promise<void> {
  await zpostForm(`${V1}/tasks/${id}/comments/`, { content });
}
