/**
 * Environments the ops dashboard watches. Dev comes from BASE_URL / API_BASE_URL in .env;
 * staging and local are added when their URLs are set:
 *   OPS_STAGING_URL, OPS_STAGING_API_URL      OPS_LOCAL_URL, OPS_LOCAL_API_URL
 * Only dev runs the test suites — the saved role logins (tests/fixtures/storageState*.json)
 * are dev accounts. The others are probed for availability, version and response time.
 */

import '../lib/zoho-rest'; // loads .env

export interface OpsEnv { name: string; label: string; baseUrl: string; apiUrl: string; suites: boolean }

export function opsEnvs(): OpsEnv[] {
  const e = process.env;
  const envs: OpsEnv[] = [{
    name: 'dev', label: 'Dev',
    baseUrl: (e.BASE_URL || 'https://simerp-dev.simform.solutions').replace(/\/$/, ''),
    apiUrl: (e.API_BASE_URL || 'https://simerp-dev-api.simform.solutions').replace(/\/$/, ''),
    suites: true,
  }];
  if (e.OPS_STAGING_URL && e.OPS_STAGING_API_URL) envs.push({ name: 'staging', label: 'Staging', baseUrl: e.OPS_STAGING_URL.replace(/\/$/, ''), apiUrl: e.OPS_STAGING_API_URL.replace(/\/$/, ''), suites: false });
  if (e.OPS_LOCAL_URL && e.OPS_LOCAL_API_URL) envs.push({ name: 'local', label: 'Local', baseUrl: e.OPS_LOCAL_URL.replace(/\/$/, ''), apiUrl: e.OPS_LOCAL_API_URL.replace(/\/$/, ''), suites: false });
  return envs;
}

export const envByName = (name: string) => opsEnvs().find(e => e.name === name);
