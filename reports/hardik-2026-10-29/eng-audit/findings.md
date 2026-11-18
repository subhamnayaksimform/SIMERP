# Engineering audit remediation — Hardik Metaliya — test findings

Date: 2026-10-29 · Tested at backend `origin/development` e49bc6c2, `origin/main` v6.6.0; frontend `origin/main`.
Tasks: SI4-T1326 (backend, Sep audit — code fix), SI4-T1512 (backend, Oct audit — triage record, no code), SI4-T1513 (frontend, Oct audit — engineering half is triage only).
Security half of T1513/T1515 was already tested 28/10 (`reports/hardik-2026-10-28/security/`).

**Result: 31 checks — 29 pass, 0 fail, 2 notes. No defect in Hardik's work.**

## 1. SI4-T1326 ENG-RL-01 — Zoho retry (code)

| # | Check | Result |
|---|---|---|
| 1 | Hardik's unit specs (`retry.util`, `zoho-retry.util`, `zoho-http.service`) on current development | Pass — 3 suites, 55/55 |
| 2–12 | Real `ZohoHttpService` + real axios against a local fake Zoho server (`qa-live-retry.spec.ts`) | Pass — 11/11 |

Fake-server cases: token 503,503,200 → success on 3rd try · 5xx forever → stops at exactly 3 tries · 400 and 401 → 1 try, no retry · 429 `Retry-After: 2` → waits ~2 s then succeeds · 429 HTTP-date `Retry-After` → honoured · 404 bad view → 1 try, Zoho message in the error · 500 forever → 3 tries · Zoho unreachable (ECONNREFUSED) → 2 retries logged (499 ms, 908 ms) then fails · 5 concurrent callers → one shared token refresh · cached token reused. Retry log lines carry no secrets.

Note (not in scope of the fix): the Microsoft Graph client-credentials token call (`src/common/services/microsoft-graph.service.ts:115`) has no retry and no timeout; only the photo fetch is retried. Used only for profile photo at login, so failure is soft. Email (SES) uses the AWS SDK's own adaptive retry.

## 2. SI4-T1326 ENG-DA-02 — foreign-key index (code)

| # | Check | Result |
|---|---|---|
| 13 | Migration `20260918100000_add_employee_department_stack_index` present, creates `employees_departmentStackId_idx` | Pass |
| 14 | Applied in local SimERP DB (`_prisma_migrations` finished 2026-09-25) and index exists in `pg_indexes` | Pass |
| 15 | "14 more unindexed FKs" claim — local DB catalog query | Pass — exactly 14 |
| 16 | Same sweep on latest development schema (157 FK relations, `fk-sweep.js`) | Pass — still 14, same list; no new table since Sept added an unindexed FK |

Remaining 14 (left by decision, per-column): AllocationTicket pmoApprovedById / tmApprovedById / updatedById; AllocationTicketEditHistory previousAssignedDepartmentId / previousDepartmentStackId / previousSelectedDeveloperId / previousShadowForId; AllocationTicketProjectAssignmentSnapshot createdById / shadowDeveloperId; ProjectAssignment shadowDeveloperId (ON DELETE CASCADE — the one most worth indexing); ProjectPrReviewerSnapshot createdById; TeamsWebhookConfig createdById / updatedById; UpCycle scoringConfigId.

Dev DB is not reachable from here; the migration runs on container start (`Dockerfile:39`), and the local DB confirms it applies cleanly.

## 3. SI4-T1512 — backend October triage claims, checked against the code

| # | Claim | Result |
|---|---|---|
| 17 | ENG-SD-01: main falls back to `admin`/`admin123` (`app.config.ts:27-28`) | True on main |
| 18 | Fixed on development by T1515 7f44b6e5 (`''` fallbacks) | True |
| 19 | T1515 not on main yet | True — still not on main as of 29/10 (main = 6.6.0) |
| 20 | `deploy-prod.yml` has no lint/test gate | True — only `wait-for-service-stability` (l.241) |
| 21 | `deploy.yml` (dev) runs `lint:check` + `test` (l.113/115) | True |
| 22 | `ci.yml` runs only on PRs to `development` | True — nothing gates PRs into main |
| 23 | No rollback in either deploy workflow | True |
| 24 | `Dockerfile:39` runs `prisma migrate deploy` on start | True |
| 25 | `sonarqube.yml`: `-Dsonar.sources=.`, deprecated `sonar.login`, no quality-gate wait, no coverage step | True |
| 26 | `.env.example` still ships `SWAGGER_USERNAME=test` / `test123` | True (repo hygiene) |
| 27 | ENG-MM-02: refused dev-login is not audited | True — `auth.service.ts` throws before `auditLogin` |

Note on 17–19: risk is low today — main only mounts Swagger when not production (`main.ts:129`). It still matters for any non-prod environment built from main, and the audit finding stays open until T1515 is released.

Jaimin's Audit Trail work (f0c8b88e, 27/10) is only on `origin/pex/SIM6-3`, not development, so it does not change ENG-MM-02 yet.

## 4. SI4-T1513 — frontend October engineering triage claims

| # | Claim | Result |
|---|---|---|
| 28 | `deploy-frontend.yml` deploys only `Development`, `deploy-prod.yml` only `production` — no staging | True |
| 29 | Prod deploy does `aws s3 sync --delete` straight onto the live bucket, then invalidates CloudFront, no rollback | True (l.168-169, 187) |
| 30 | No engineering rule fixable in the frontend repo | Agreed |
| 31 | T1513 on main | Not yet — on development only |

## Open items for DevOps / release (not Hardik defects)
- Release SI4-T1515 to main to close ENG-SD-01.
- ENG-CD-01 / ENG-CD-03 / ENG-CQ-02 (staging env, prod lint/test gate, rollback, Sonar gate + coverage) — DevOps, both repos.
- Blank out Swagger creds in `.env.example`.
