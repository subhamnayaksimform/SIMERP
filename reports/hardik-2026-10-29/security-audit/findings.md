# Security audit tasks SI4-T1650 / SI4-T1651 — test findings (development branch)

Date: 2026-10-29 · Owner: Hardik Metaliya · Both tasks "To be tested" in Zoho (tasklist SecurityAudit; no description or comments — the audit reports are the task attachments, the change log is the fix commit bodies).

| Task | Audit report (Security Review Agent v2.2, 12 Oct 2026) | Fix commits on `development` |
|---|---|---|
| SI4-T1650 | `security-audit-SimERP-frontend-reactjs-20261012-021607.html` — 84/100, 1 failed rule | SI4-T1513 `1d7cd5cb` + `32675e3a` (PR #511, approved Parshva) |
| SI4-T1651 | `security-audit-SimERP-backend-node-20261012-021825.html` — 59/100, 2 failed rules | SI4-T1515 `7f44b6e5` + `cd050d31` (PR #554, approved Parshva) |

Scope: **`development` branch** — backend `e49bc6c2`, frontend `4ab85041`, live on SimERP DEV. Audit-date code (report has no commit): backend `d3e39c71`, frontend `1e2bc83e`. Reports copied to `reports/security-audit-2026-10-12/`.

**Result: 26 checks — 17 pass, 4 fail, 5 notes** (D4 downgraded to Low after a byte-level bundle check on 29/10). Both failed audit rules are fixed and hold up under testing. The fails are one gap in the SEC-BE-06 fix, two items Hardik listed in his commit as "awaiting decision" (now confirmed live), one access-control hole the audit missed, and the DevOps header gap.

## Defects

### D1 — Any logged-in user can read any employee's HR note (missed by the audit) — High — **filed SI4-I616 (29/10, standalone, Hardik)**
- `src/modules/employee-notes/employee-notes.controller.ts`: POST / GET / PATCH / DELETE `/employee-notes/:noteId` have no `@CheckAbility`; the service has no owner/role check.
- Live (DEV, read-only), Employee account kashyap.patel: `GET /roles` → 403, `GET /employees/<Smriti Arora>` → **403 AUTH_004**, but `GET /employee-notes/0cb1388d-…` (Smriti Arora's note) → **200** with note text, dates, type.
- Expected 403. PATCH/DELETE not tried live (would change real data); same unguarded handlers.
- Not in the T1515 commit: the backend "passed" rules were listed as not re-checked.

### D2 — SEC-BE-06 fixed in two files only; Zoho sync jobs still log employee emails — Medium — **filed SI4-I617**
- T1515 fixed every log line in `employees-metadata.service.ts` and the CRUD lines in `employees.service.ts` (as its commit body says). Same pattern remains in runtime sync code (also present at audit time — the audit under-scoped the rule, the fix followed the audit):
  - `zoho-analytics/employee-pip-data.service.ts:153` — "Updated PIP for N employee(s): <emails>" (performance-plan status tied to named people)
  - `zoho-analytics/employee-pip-data.service.ts:159`, `:301` — unknown/failed emails + raw error text
  - `zoho-analytics/employee-leave-data.service.ts:190` — unknown employee emails
  - `zoho-analytics/project-metadata.service.ts:375` — owner + employee emails
- `src/sync-migration/*` CLI scripts also log emails (run by hand; lower risk).
- Logger redacts metadata keys only, never message text. **Confirmed 29/10 with the real LoggerService (env=development, CloudWatch JSON mode):** the line-153 message is written with both emails in `message`; the same email passed as metadata comes out `"email":"[REDACTED]"`. PIP/leave jobs run from `sync-queue/handlers/employee-{pip,leaves}-sync.handler.ts`.

### D3 — Client-side path traversal from crafted links (Hardik's INCIDENTAL, confirmed) — Medium — **filed SI4-I618**
- Route ids are spliced into API paths unencoded: 81 template-literal builders in `src/constants/endpoints.ts`, 0 `encodeURIComponent` (e.g. `EMPLOYEES.DETAIL`). Re-confirmed live 29/10.
- Live (Admin session): opening `/employee/..%2Froles` makes the browser send `GET /roles`; `/employee/..%2Fauth%2Fme` sends `GET /auth/me`; `/employee/..%2Femployees%2F<id>` sends `GET /employees/<id>`, `/visas/employees/<id>`, `/working-location/employees/<id>`. Query-string params are encoded correctly.
- Impact: any authenticated GET can be triggered by a link; backend authorization still applies. Listed by Hardik as "awaiting fix-now or follow-up decision" — still open.

### D4 — Two copies of prosemirror-view ship, one vulnerable (Hardik's INCIDENTAL) — Low (re-checked 29/10) — **filed SI4-I619**
- Installed: root `node_modules/prosemirror-view` = **1.42.1** (GHSA-c8x8-7fp4-3x9w, High, paste-handling XSS, fixed in 1.42.3); `@tiptap/pm/node_modules/prosemirror-view` = 1.42.4.
- Local `vite build` of development `4ab85041`, matched byte-for-byte via sourcemap: **both** copies are bundled in `index-*.js`.
- The editor's `EditorView` comes from `@tiptap/pm/view` → resolves to the fixed 1.42.4, so paste handling runs on the fixed code; the 1.42.1 copy is pulled in only by the add-ons (`prosemirror-gapcursor`, `-dropcursor`, `-tables`, …) for decorations. Vulnerable code ships but is very likely not reachable → Low, plus a duplicate-library smell.
- Fix: `resolutions: { "prosemirror-view": "^1.42.3" }` so only one copy ships.
- dompurify 3.4.15: `yarn audit` now also reports Critical/High advisories for all ≤ 3.4.16 (patched 3.4.17), but they need `SAFE_FOR_TEMPLATES`, `IN_PLACE` or `PARSER_MEDIA_TYPE`; `src/lib/rich-text-html.ts` uses none (default options + one hook) → not exploitable here; bump to ≥ 3.4.17 anyway.

### D5 — Frontend has no security response headers — Medium (DevOps) — **filed SI4-I620 (Aakash)**
- `https://simerp-dev.simform.solutions/`: no CSP, HSTS, X-Frame-Options, X-Content-Type-Options. Same as 28/10 (BUG-SEC-01). Listed in T1513 under "needs action outside this repo — DevOps". Not filed.

## Checks

### SI4-T1651 — backend
| # | Check | Result |
|---|---|---|
| 1 | SEC-BE-05 real at audit commit (`app.config.ts:27-28` → `admin`/`admin123`) | Pass |
| 2 | Fallbacks now `''`; `resolveSwaggerCredentials` refuses blank/one-sided values; `/docs`, `/docs-json`, `/docs-yaml` not mounted without both | Pass |
| 3 | Live DEV `/docs`, `/docs/`, `/docs-json`, `/docs-yaml` anonymous | Pass — all 401 |
| 4 | Live DEV same URLs with old default `admin`/`admin123` | Pass — all 401 |
| 5 | SEC-BE-06 real at audit commit (4 cited lines) | Pass |
| 6 | Cited lines + the other 20 in `employees-metadata.service.ts` and the 4 email lines in `employees.service.ts` gone; ids = public UUID / Zoho number; errors by name only | Pass |
| 7 | Unit tests (clean `npm ci`): swagger.util, employees-metadata, all employees suites, logger | Pass — 27 suites, 1,114 tests, 0 failed |
| 8 | New audit lines for employee create/update/delete + Zoho sync writes (commit INCIDENTAL) | Pass — covered by the passing suites; CloudWatch not reachable for a live look |
| 9 | Copilot review items on PR #554 addressed in `cd050d31` (Swagger gate tests, bootstrap logger, LOG_STATUS on sync failures, doc comment, verdict vocabulary) | Pass |
| 10 | SEC-BE-06 repo-wide sweep | **Fail — D2** |
| 11 | `.env.example` Swagger values | Note — still `test` / `test123` (acknowledged follow-up in the commit) |

### SI4-T1650 — frontend
| # | Check | Result |
|---|---|---|
| 12 | SEC-BE-02 real at audit commit (`env.ts:23/43`, unchecked WS origin) | Pass |
| 13 | `buildEnvConfig` runs `assertSecureTransport` on API and WS URLs, fails at startup | Pass |
| 14 | Hardik's `env-config.test.ts` | Pass — 22/22 |
| 15 | QA bypass sweep — 16 hostile URLs rejected (`http://localhost@evil.com`, `localhost.evil.com`, `#@localhost`, `//evil.com`, `\\evil.com`, `/\evil.com`, tab-split scheme, `0.0.0.0`, LAN IP, IPv4-mapped IPv6, …); 10 legit values allowed | Pass — 27/27 |
| 16 | Deployed DEV bundle `index-C7KeS0hz.js` contains the check; only `https://simerp-dev-api…` origins | Pass |
| 17 | Rich-text sanitizer: `style` limited to a single `text-align` | Pass (`target` still allowed without a forced `rel` — Low, listed by Hardik) |
| 18 | INCIDENTAL: unencoded route ids → path traversal | **Fail — D3** (confirmed live) |
| 19 | INCIDENTAL: prosemirror-view < 1.42.3 shipped | Note — D4: both copies ship, editor uses the fixed one (Low) |
| 20 | INCIDENTAL: dompurify 3.4.15 (2 Low advisories, fixed in 3.4.16) | Note — still 3.4.15 |
| 21 | Frontend security headers | **Fail — D5** (DevOps) |

### Audit accuracy
| # | Check | Result |
|---|---|---|
| 22 | All 3 failed-rule citations line-accurate at audit commit | Pass |
| 23 | SEC-BE-03 "seven @Public() routes" | Pass — exactly 7 |
| 24 | Anything the audit passed that it shouldn't have | **Fail — D1** |
| 25 | SEC-BE-04 rate limiting | Note — global 100 req/s passes as written; no stricter auth limit (Sep: 450 wrong dev-login attempts in 6 s) |

### Release
| # | Check | Result |
|---|---|---|
| 26 | Fixes on `main` | Note — out of scope (development). Neither T1513 nor T1515 is in main 6.8.0 (29/10); main still has `admin123` and the unchecked socket origin. |

Same pattern as the September audits: the agent checks the file it cites, not every file the rule covers (D2); both reports route 11–12 DevOps rules to an "Azure Review Agent" on an AWS stack.

## Suggested Zoho actions (not done — need approval)
- ~~File D1~~ done: SI4-I616. File D2 (Medium) — backend, Hardik.
- File D3, D4 (Medium) — frontend, Hardik (he already flagged both; needs the decision recorded).
- File D5 for DevOps (or attach to SI4-T1649 [DevOps] Security Audit).
- T1650 / T1651: comment with this summary; move to Done only once D1/D2 are decided.
