#!/usr/bin/env node
/**
 * Guard: the ops dashboard must run without Claude. Fails if any file in it imports the
 * Anthropic SDK, the Claude CLI helpers, the AI pipeline, or the Zoho MCP client — and if
 * anything other than the two sanctioned files starts Claude. Claude is optional and lives in:
 *   scripts/ops/ai.ts            (the CLI wrapper)
 *   scripts/ops/activity-run.ts  (the detached runner for Claude activities)
 *   npm run ops:check-deps
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const SCAN = ['ops-dashboard', 'scripts/ops', 'scripts/lib/zoho-rest.ts', 'scripts/lib/failure-triage.ts', 'ui/indexer.ts'];
const FORBIDDEN = [
  [/@anthropic-ai\//, 'Anthropic SDK'],
  [/from\s+['"][./]*\/?pipeline(-headless)?['"]|require\(['"][./]*\/?pipeline(-headless)?['"]\)/, 'scripts/pipeline.ts (AI pipeline)'],
  [/callZohoMcp|\.mcp\.json|mcp\.json|tools\/call/, 'Zoho MCP client'],
  [/findClaudeBin|resolveAIBackend|['"`]claude['"`]\s*,\s*\[/, 'Claude CLI'],
];

const files = [];
const walk = p => {
  const abs = path.join(ROOT, p);
  if (!fs.existsSync(abs)) return;
  if (fs.statSync(abs).isDirectory()) for (const f of fs.readdirSync(abs)) walk(path.join(p, f));
  else if (/\.(ts|js)$/.test(p) && !p.endsWith('check-deps.js')) files.push(p);
};
SCAN.forEach(walk);

// Only these may start Claude (runClaude); everything else may at most ask whether it is installed.
const CLAUDE_ALLOWED = ['scripts/ops/ai.ts', 'scripts/ops/activity-run.ts'];
const hits = [];
for (const f of files) {
  fs.readFileSync(path.join(ROOT, f), 'utf8').split('\n').forEach((line, i) => {
    if (/^\s*(\*|\/\/)/.test(line)) return; // comments may mention these by name
    for (const [re, what] of FORBIDDEN) if (re.test(line)) hits.push(`${f}:${i + 1}  ${what}\n    ${line.trim()}`);
    if (!CLAUDE_ALLOWED.includes(f) && /\brunClaude\b|\bspawn\([^)]*findClaude/.test(line)) hits.push(`${f}:${i + 1}  starts Claude outside ${CLAUDE_ALLOWED.join(' / ')}\n    ${line.trim()}`);
  });
}
if (hits.length) { console.error(`✗ The ops dashboard must not depend on Claude/MCP:\n\n${hits.join('\n')}`); process.exit(1); }
console.log(`✓ ${files.length} ops files checked — no SDK / MCP / pipeline imports; Claude only starts from ${CLAUDE_ALLOWED.join(' and ')}.`);
