# SI4-T1549 — Employee Day Start & Close (Active Hours / Work Pattern) — QA 29/10/2026

- **Task:** SI4-T1549 "Employee Day Start and Close Functionality Development" (owner raksha.p, status *To be tested*)
- **Note:** the Zoho link shared for this test (`…/task-detail/688906000094488924`) opens **SI4-T1651** (Security Audit – Backend), not this task. The requirement text pasted with it matches SI4-T1549 (Zoho id `688906000094684555`).
- **Environment:** dev — frontend `simerp-dev.simform.solutions` (build 6.5.0), API `simerp-dev-api.simform.solutions/api/v1`
- **Code:** backend PR #572 (`31e424de`, merged 29/10 15:52 IST); frontend PR #520 (`87c98d1e` + `62793d96`, merged 29/10 15:39 IST), release 6.6.0

## Verdict: BLOCKED for UI sign-off — backend RBAC passes

| Area | Result |
|---|---|
| Frontend columns on dev | **Blocked** — not deployed. Live bundle is 6.5.0 and has none of the T1549 strings ("Start → End Hours", "Work Pattern", `activityPeriod`). The feature ships in 6.6.0. |
| Data on dev | **Blocked** — `employee-activity-sync` cron has `lastRun: null`. Sorting by Active Hours (rows with data sort first) returns `status: "missing"` for every one of 3,648 employees, so the snapshot table is empty. Earliest possible run is 02:15 IST 30/10, and only if the cron feature flag is on (other dev crons also show no runs). |
| Role access (API) | **Pass** — all 8 roles behave as required (table below). |
| Period filter validation (API) | **Pass** — 30/60/90 accepted; 45, 365, `abc` → 400. |
| Sort permission (API) | **Pass** — roles without the grant that can open the list get 403 "No permission to sort by active hours or work pattern". |

## Role access — live results

Permission `employee_activity.read` as configured on dev (`GET /roles`): ADMIN `ALL`, PMO `ALL`, TM `DEPARTMENT`, EM `DEPARTMENT`; EMPLOYEE, RM, PM, CSM, DM, GOAL_MANAGER, PROGRAM_OWNER none. This matches the requirement.

| Role | Account | Employee page | List rows | `activity` in rows | Sort by activeHours/workPattern | Expected | Result |
|---|---|---|---|---|---|---|---|
| Admin | ceo@ | opens | 3,648 | yes (all `missing`) | 200 | all employees | Pass |
| PMO | bhumi.chauhan@ | opens | 3,648 | yes (all `missing`) | 200 | all employees | Pass |
| TM | sudhansu.patel@ | opens | 279 | yes (all `missing`) | 200 | own department | Pass |
| EM | kunal.jadeja@ | opens | 372 | yes (all `missing`) | 200 | own department | Pass |
| RM (+DM) | hardik.trivedi@ | opens | 92 | **absent** | 403 | no access | Pass |
| PM | gaurav.panchal@ | /unauthorized | — | — | 403 | no access | Pass |
| CSM | tarun.sharma@ | /unauthorized | — | — | 403 | no access | Pass |
| Employee | kashyap.patel@ | /unauthorized | — | — | 403 | no access | Pass |

Not covered: a TM/EM row from outside their department showing the **Restricted** lock. The list is already department-scoped for TM/EM, so no such row appeared.

Screenshots: `reports/2026-10-29-t1549/<role>-employee.png`.

## Gaps against the requirement (from the merged code — confirm in UI once deployed)

| # | Requirement | What was built | Severity |
|---|---|---|---|
| G1 | Part A §4: show a **"Data as of"** note | Not built. The API returns no as-of date for the list (`activityMeta` from the commit message is not in the code), and the frontend has no "Data as of" text for these columns. Working Location already has a `formatDataAsOf` helper that could be reused. | Medium |
| G2 | Part A §3: column named **Active Hours** | Column header is **"Start → End Hours"**. The hover card title still says "Active Hours", so the naming is inconsistent. Possibly a design change — confirm with Urmi/Jill (T1551). | Low / confirm |
| G3 | Part A §3 / §4: range shown as `10:30 AM – 7:30 PM IST`, plus an **IST label** | The cell shows `10:30 AM – 7:30 PM` with no "IST". IST appears only in the hover card, the screen-reader label and the column info tooltip. | Low / confirm |

## Checked in code — matches the requirement

- Columns only on the Active Employee tab; Past Employee tab uses a separate table without them.
- 30 / 60 / 90 day filter, single select, default 30, shared by both column headers and kept in the URL. "This Year" is deliberately not offered.
- Work Pattern thresholds: Low ≤ 40, High > 55, 40–55 shows "No flag". Density 0 is Low; above 60 is High, with an "overlapping logs — not an error" note in the tooltip.
- Coverage note present → no times and no Work Pattern flag; an orange warning badge shows the note instead (never both).
- No data → "—", never 0 or 12:00 AM. Restricted → lock icon, different from the no-data dash.
- Midnight wrap: close averages ≥ 24 shown mod 24 with a "+1" marker (26.2 → 2:12 AM +1; 25.83 → 1:50 AM +1). Start is never wrapped. Times are treated as IST and not converted by the browser's timezone.
- Sync scheduled 02:15 IST (requirement: pull at 2 AM IST or later). Join on ZUID.
- Work Pattern for 60/90 days is derived from that window's density; the source's flag is used for 30 days only (the source has one flag per row).

Note: the project's empty-data convention prefers a readable word over a bare "—"; this requirement explicitly asks for "—", so it is not raised as a defect here.

## To finish testing

1. Deploy frontend 6.6.0 to dev.
2. Turn on `feature.cron.employeeActivity.sync.enabled` on dev and let the 02:15 IST sync run (or have the dev run `scripts/sync-employee-activity.ts` once).
3. Re-test the UI: both columns per role, 30/60/90 switch, sort both ways (no-data rows last), hover card, Low/High/No flag/coverage/no-data/restricted cells, Past Employee tab, keyboard access to tooltips, and G1–G3.
