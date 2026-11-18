# Security / data-fix test findings — Hardik Metaliya tasks

Date: 2026-10-28 · Environment: SimERP DEV (https://simerp-dev.simform.solutions, API https://simerp-dev-api.simform.solutions/api/v1)
Tasks: SI4-T1515 (backend SEC-BE-05/06), SI4-T1513 (frontend SEC-BE-02), SI4-I589 (duplicate Allio Capital project fix)
Accounts used: hardik.trivedi@simformsolutions.com (Employee/RM/DM), kriti.desai@simformsolutions.com. Both non-admin.
Result: 20 cases — 15 passed, 1 failed, 4 blocked.

## Defects

### BUG-SEC-01 — Frontend served with no security response headers
- Severity: Medium
- Title: CloudFront/S3 frontend has no CSP, HSTS or X-Frame-Options (clickjacking + no transport pinning)
- Where: https://simerp-dev.simform.solutions/ (server: AmazonS3)
- Repro: GET the frontend root; inspect response headers.
- Expected: Frontend carries Content-Security-Policy, Strict-Transport-Security and X-Frame-Options / frame-ancestors.
- Actual: CSP=null, HSTS=null, X-Frame-Options=null, X-Content-Type-Options=null. Page can be framed (clickjacking), no HSTS. The API (helmet) sets all of these correctly.
- Evidence: reports/screenshots/2026-10-28/hardik/security/json/01-checks.json (frontend headers block).
- Likely cause: Not a code defect. Missing CloudFront response-headers policy; the SI4-T1513 commit body lists it under "NEEDS ACTION OUTSIDE THIS REPO — DevOps: add CloudFront response-headers policy (CSP, frame-ancestors/X-Frame-Options, HSTS); none set today." Known DevOps-owned gap.

No functional defects found in Hardik's code for T1515, T1513 or I589.

## What works (verified live)
- SEC-BE-05 Swagger: /docs, /docs/, /docs-json, /docs-yaml all return 401 WWW-Authenticate: Basic. Mounted on dev only behind basic auth; no open docs. Hardcoded fallback admin/admin123 removed in code (app.config.ts defaults to ''; main.ts/swagger.util.ts skip mounting when a credential is missing). /api/docs, /swagger, /api-json = 404.
- API helmet headers: CSP (default-src 'self'; ... frame-ancestors 'self'; object-src 'none'; upgrade-insecure-requests), HSTS (max-age=31536000; includeSubDomains), X-Frame-Options: SAMEORIGIN, X-Content-Type-Options: nosniff, COOP/CORP same-origin, Referrer-Policy: no-referrer, X-Powered-By removed.
- CORS: foreign origin evil.example.com → 403, no ACAO reflected, no credentials. Configured origins (simerp-dev..., localhost:5173) reflected specifically with Access-Control-Allow-Credentials: true — never * with credentials.
- Error responses: no stack traces/file paths/exception text; structured codes only (SYS_002, SYS_004, VAL_001).
- SEC-BE-02 frontend transport: deployed bundle references only https://simerp-dev-api.simform.solutions; no remote http:// origin ships. App boots and authenticates normally (buildEnvConfig/assertSecureTransport does not false-block a valid https config).
- Frontend secret scan: no AWS/GCP/Stripe/GitHub/Slack keys, no hardcoded JWT or PRIVATE KEY across index + 6 vendor bundles (~1.2 MB). Only public VITE_ variable-name references.
- Role-based access: /roles → 403 AUTH_004 for both non-admin accounts; kriti /projects → 403. Data-scoping intact (hardik/RM sees 139 projects).
- Regression Employee: list renders 92 employees (v6.5.0); /employees → 200 full field set; metadata-derived fields (team/department/designation/projects) populate after the employees-metadata.service refactor.
- Regression Goals: /goals?limit=100 → 200 with 100 goals; UI nav reaches /employee/goals (no 404). goals.service cast removal no regression.
- Regression I589 time logs: /projects → 200 (139 rows); Employee Details "Log Hours" column renders (88h/89h) with no error.
- I589 duplicate check (accessible scope): no Allio rows and no duplicates in hardik's visible project set; listing clean.

## Could not verify (blocked)
- SEC-BE-06 PII-in-logs redaction — logs go to CloudWatch; not black-box observable. No external surface exposes them. Confirmed by code review of 7f44b6e5 only; error responses leak nothing.
- SEC-BE-05 removed default credentials, live — testing admin/admin123 live would be auth guessing (out of scope). Confirmed removed in code; /docs requires auth.
- SI4-I589 "exactly one Allio Capital project" — migration is a documented no-op on dev/local (runs only where both Zoho ids exist = production); neither allowed account can list all projects; no Admin/PMO account was in this agent's pool. No DB access.
- SI4-I589 Allio allocations/time sanity — same reason.
- .env.example still ships SWAGGER_USERNAME=test / SWAGGER_PASSWORD=test123 (should be blank). Informational repo-hygiene follow-up; not a live defect.

## Note on I589 migration (code review)
Commits 4ebe62da then ee260252 are sound. Final migration wraps the repair in DO $$ ... END $$, returns early unless BOTH stale (688906000093443667) and live (688906000093443672) projects exist, then DELETES the stale project's employee_time_logs (rather than moving them, avoiding the (employeeId, projectId, timeFrame) unique-key collision in the first version), hard-deletes the stale row, and renames the live project. Time-log sync rebuilds hours next run. Correctly idempotent and a no-op outside production — which is why it can't be confirmed black-box on dev.

## 28/10 follow-up — Admin check for I589
Logged in as ceo@ (Admin) and scanned all 402 projects on dev: no project contains "Allio", and no two projects share a name. The search works (control search "EventDriven" returns 1). So the Allio Capital data is not on dev at all — the fix can only be confirmed on production. Evidence: `reports/screenshots/2026-10-28/hardik/security/json/allio-admin.json`.
