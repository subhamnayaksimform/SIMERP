/**
 * Install / remove / inspect the ops dashboard's cron jobs in the user's crontab.
 *
 *   npm run ops:cron:install            show the block that would be added
 *   npm run ops:cron:install -- --yes   add it (replaces an older copy; other crontab lines are kept)
 *   npm run ops:cron:uninstall          remove it
 *   npm run ops:cron:status             is it installed, when did it last run?
 *
 * Two jobs: the Zoho sync (every 2 hours) and the deploy watcher (every 10 minutes — it starts a
 * health run after each deploy). Jobs run through `flock -n` so a slow run is never overlapped by the next one, and log to
 * reports/ops/logs/. Plain system cron — runs whether or not the dashboard or Claude is open.
 */

import { execFileSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { ROOT, OPS_DIR, LOG_DIR, SYNC_LOG, SyncLogEntry, readJson } from './store';

const BEGIN = '# >>> simerp-ops-dashboard (managed by: npm run ops:cron:install) >>>';
const END = '# <<< simerp-ops-dashboard <<<';

export const SYNC_SCHEDULE = process.env.OPS_SYNC_CRON || '0 */2 * * *';
export const WATCH_SCHEDULE = process.env.OPS_WATCH_CRON || '*/10 * * * *';

const q = (s: string) => `"${s.replace(/(["\\$`])/g, '\\$1')}"`;

function job(schedule: string, name: string, script: string, args = ''): string {
  const tsNode = require.resolve('ts-node/dist/bin.js', { paths: [ROOT] });
  const lock = path.join(OPS_DIR, `.${name}.lock`);
  const log = path.join(LOG_DIR, `${name}.log`);
  return `${schedule} cd ${q(ROOT)} && /usr/bin/flock -n -o ${q(lock)} ${q(process.execPath)} ${q(tsNode)} --transpile-only ${q(path.join(ROOT, script))} ${args} >> ${q(log)} 2>&1`;
}

export function cronBlock(): string {
  return [
    BEGIN,
    job(SYNC_SCHEDULE, 'sync', 'scripts/ops/sync-zoho.ts', '--trigger=cron'),
    job(WATCH_SCHEDULE, 'watch', 'scripts/ops/deploy-watch.ts'),
    END,
  ].join('\n');
}

function readCrontab(): string {
  try { return execFileSync('crontab', ['-l'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }); }
  catch (e) {
    const msg = String((e as { stderr?: string }).stderr ?? '');
    if (/no crontab/i.test(msg)) return '';
    throw e;
  }
}

function writeCrontab(text: string): void {
  execFileSync('crontab', ['-'], { input: text.endsWith('\n') ? text : text + '\n' });
}

function withoutBlock(text: string): string {
  const start = text.indexOf(BEGIN);
  if (start < 0) return text;
  const end = text.indexOf(END, start);
  return (text.slice(0, start) + (end < 0 ? '' : text.slice(end + END.length))).replace(/\n{3,}/g, '\n\n').replace(/^\n+/, '');
}

// Next run of an "every N hours at minute M" or "daily at H:M" schedule — enough for what we install.
function nextRun(schedule: string, from = new Date()): string | null {
  const m = /^(\d+)\s+(\*\/(\d+)|\d+|\*)\s+\*\s+\*\s+\*$/.exec(schedule.trim());
  if (!m) return null;
  const minute = Number(m[1]);
  const hours = m[3] ? Array.from({ length: 24 }, (_, h) => h).filter(h => h % Number(m[3]) === 0)
    : m[2] === '*' ? Array.from({ length: 24 }, (_, h) => h) : [Number(m[2])];
  for (let d = 0; d < 2; d++) {
    for (const h of hours) {
      const t = new Date(from); t.setDate(t.getDate() + d); t.setHours(h, minute, 0, 0);
      if (t > from) return t.toISOString();
    }
  }
  return null;
}

export function cronStatus() {
  let installed = false;
  let error: string | undefined;
  try { installed = readCrontab().includes(BEGIN); } catch (e) { error = (e as Error).message.split('\n')[0]; }
  const lastCron = readJson<SyncLogEntry[]>(SYNC_LOG, []).find(x => x.trigger === 'cron') ?? null;
  return { installed, schedule: SYNC_SCHEDULE, watchSchedule: WATCH_SCHEDULE, nextSync: installed ? nextRun(SYNC_SCHEDULE) : null, lastCronSync: lastCron, error };
}

if (require.main === module) {
  const cmd = process.argv[2] ?? 'status';
  const yes = process.argv.includes('--yes');
  if (cmd === 'install') {
    const block = cronBlock();
    console.log(`\nThis block goes into your crontab (crontab -l):\n\n${block}\n`);
    if (!yes) { console.log('Nothing changed. To add it, run:  npm run ops:cron:install -- --yes\n'); process.exit(0); }
    fs.mkdirSync(LOG_DIR, { recursive: true });
    const rest = withoutBlock(readCrontab()).trimEnd();
    writeCrontab((rest ? rest + '\n\n' : '') + block + '\n');
    console.log(`✓ Installed. Zoho sync runs on "${SYNC_SCHEDULE}" — next at ${new Date(nextRun(SYNC_SCHEDULE)!).toLocaleString()}. Deploy watch runs on "${WATCH_SCHEDULE}".`);
  } else if (cmd === 'uninstall') {
    const current = readCrontab();
    if (!current.includes(BEGIN)) { console.log('Not installed — nothing to remove.'); process.exit(0); }
    writeCrontab(withoutBlock(current));
    console.log('✓ Removed the ops dashboard jobs from your crontab. Other crontab lines were kept.');
  } else {
    const s = cronStatus();
    if (s.error) console.log(`Could not read crontab: ${s.error}`);
    console.log(s.installed ? `Installed — Zoho sync on "${s.schedule}", next at ${new Date(s.nextSync!).toLocaleString()}` : 'Not installed. Add it with: npm run ops:cron:install');
    if (s.lastCronSync) console.log(`Last cron sync: ${new Date(s.lastCronSync.at).toLocaleString()} — ${s.lastCronSync.ok ? 'ok' : `failed: ${s.lastCronSync.error}`}`);
  }
}
