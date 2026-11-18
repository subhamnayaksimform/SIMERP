/**
 * Replaces ZOHO_REFRESH_TOKEN in .env with one that carries task scopes.
 *
 * The old token was minted with portals/projects/bugs scopes only, so every
 * /tasks/ call fails with 6403 "Invalid OAuth scope". Scopes are fixed at
 * grant time — the only fix is a new grant code.
 *
 * Steps:
 *   1. https://api-console.zoho.<region>/ → your Self Client → "Generate Code"
 *   2. Paste the scope string this script prints, pick 10 minutes, create.
 *   3. npm run zoho:reauth -- <grant-code>     (or run it bare and paste when asked)
 *
 * The token is written to .env only (a .env.bak copy is kept) and never printed.
 */

import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import * as dotenv from 'dotenv';

dotenv.config();

// Deliberately broad: a refresh token never expires, but its scopes are frozen at
// grant time — so grant everything the pipeline may ever touch, once.
const SCOPES = [
  'ZohoProjects.portals.ALL',
  'ZohoProjects.projects.ALL',
  'ZohoProjects.tasklists.ALL',
  'ZohoProjects.tasks.ALL',
  'ZohoProjects.bugs.ALL',
  'ZohoProjects.users.ALL',
  'ZohoProjects.milestones.ALL',
  'ZohoProjects.timesheets.ALL',
  'ZohoProjects.documents.ALL',
  'ZohoProjects.forums.ALL',
  'ZohoProjects.search.READ',
  'ZohoProjects.tags.ALL',
  'WorkDrive.files.READ', // task attachments download from WorkDrive
].join(',');

const REGION = process.env.ZOHO_REGION || 'com';
const CLIENT_ID = process.env.ZOHO_CLIENT_ID || '';
const CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET || '';
const ENV_PATH = path.resolve(__dirname, '../.env');

function ask(question: string): Promise<string> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (a) => { rl.close(); resolve(a.trim()); }));
}

async function main(): Promise<void> {
  if (!CLIENT_ID || !CLIENT_SECRET) throw new Error('ZOHO_CLIENT_ID / ZOHO_CLIENT_SECRET missing in .env');

  console.log(`Scope string for the Self Client "Generate Code" box:\n\n  ${SCOPES}\n`);
  const code = process.argv[2] || (await ask('Paste the grant code (expires in minutes): '));
  if (!code) throw new Error('No grant code given');

  const res = await axios.post(`https://accounts.zoho.${REGION}/oauth/v2/token`, null, {
    params: { grant_type: 'authorization_code', client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
    validateStatus: () => true,
  });
  const { refresh_token: refreshToken, scope, error } = res.data as { refresh_token?: string; scope?: string; error?: string };
  if (error || !refreshToken) {
    throw new Error(`Zoho refused the code: ${error ?? 'no refresh_token returned'} (codes are single-use and expire fast — generate a new one)`);
  }

  const env = fs.readFileSync(ENV_PATH, 'utf8');
  fs.writeFileSync(`${ENV_PATH}.bak`, env);
  const line = `ZOHO_REFRESH_TOKEN=${refreshToken}`;
  const next = /^ZOHO_REFRESH_TOKEN=.*$/m.test(env) ? env.replace(/^ZOHO_REFRESH_TOKEN=.*$/m, line) : `${env.trimEnd()}\n${line}\n`;
  fs.writeFileSync(ENV_PATH, next);

  console.log(`\nSaved new refresh token to .env (old file kept as .env.bak).\nGranted scopes: ${scope}`);
  if (!/ZohoProjects\.tasks\.(READ|ALL)/.test(scope ?? '')) console.warn('WARNING: task access is missing — task fetches will still fail.');
}

main().catch((e: Error) => { console.error(e.message); process.exit(1); });
