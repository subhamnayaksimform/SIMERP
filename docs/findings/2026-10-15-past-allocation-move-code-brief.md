# SI4-T1526 — Move dormant employees to Past Allocations: code brief

**Summary**
1. Narrow rule: only employees who **logged time on the project but have NO assignment on it** (never allocated, or assignment soft-deleted) move to Past when they have **0 hours on that project in the "last 3 months" Zoho bucket**. Allocated employees are never moved by this rule, however long they are silent.
2. Computed at **read time** in the API (no DB write, no new job). Recency comes from the nightly Zoho time-log sync (`0 0 * * *` UTC = 05:30 IST). "Move back" happens on its own after the next sync that sees new hours.
3. "3 months" = **3 calendar months back from the sync date, UTC, inclusive** (`"Date" >= today-3 months`). Hours from any billable/non-billable entry count, but **only hours on this same project**.
4. Affects only `GET /api/v1/pm-projects` (list) and `GET /api/v1/pm-projects/:id` (detail) → screens `/my-projects` and `/my-projects/:projectId` (Active / Past Allocations tabs). PM and CSM only; PMO and Admin have no `pm_projects` access. `/projects` and the employee side panel are NOT changed.
5. Five suspected issues: list total hours now differ from detail total; a PR reviewer who is also a dormant logger shows in both tabs; `/projects` + employee side panel disagree with `/my-projects`; an empty or failed 3-month sync pushes every unallocated logger to Past; month-end date maths shortens the window.

Source: backend commit `e410f149` (merged in PR #542 `36b5d8a3`, 2026-10-13, Hardik Metaliya). Backend version bumped to **6.4.2**. No frontend commit (none needed — the UI already renders `pastEmployees`). Read from `origin/development` at `7602c0ba` (2026-10-15).

---

## 1. The exact rule

Code: `src/modules/pm-projects/pm-project-mapper.util.ts:93-115` (`buildDormantUnallocatedIds`).

An employee is **"dormant unallocated"** on a project when all of these are true:

| Condition | Code meaning |
|---|---|
| Has at least one time-log row for this project in the buckets the query fetched | `loggedIds` (any bucket, any hours) |
| Has **no assignment row** on the project | `!assignmentMap.has(id)`. Assignments are loaded with `deletedAt: null`, in **any status** (GREEN/…/ARCHIVED), with any start/end date |
| No bucket among `5d`, `15d`, `30d`, `3m` has hours `> 0` | `RECENT_TIME_FRAMES` + `totalHours > 0` |

Effect:
- **Detail** (`buildProjectEmployees`, lines 780-792): `isPast = deletedAt || status === ARCHIVED || dormant`. Dormant employees go into `pastEmployees` instead of `employees`.
- **List** (`buildListEmployees`, lines 370-374): dormant employees are removed from the project's `employees` array (avatars/count on the `/my-projects` card).

What "Active" vs "Past" now means on `/my-projects/:id`:
- **Past** = employee offboarded (`deletedAt`) OR assignment ARCHIVED (deallocated) OR (no assignment AND no hours in last 3 months) ← new.
- **Active** = everything else (allocated with any non-ARCHIVED status, plus unallocated people with recent hours). Future-start allocations are split off client-side into the "Upcoming" section.

### The 3-month window
- Bucket is computed by Zoho Analytics at sync time: `src/modules/zoho-analytics/constants/zoho-timeframe.constant.ts:47-52, 77-79`: `monthsAgo(3)` = today (UTC midnight) with `setUTCMonth(month-3)`; criteria `"Date" >= 'YYYY-MM-DD'`.
- So it is **calendar months, not 90 days**, **inclusive** of the start date, **relative to the day the sync ran** (not the day you open the page), and in **UTC**.
  - Example: sync on 2026-10-15 → window starts 2026-07-15. Hours dated 15 Jul count (active); hours dated 14 Jul or earlier do not.
- There is **no upper bound**, so timesheet entries dated in the future also count as "recent".
- Different from the dashboard (`dashboard-hours.util.ts:15` treats 3m as 90 days) — do not mix the two.

### Which hours count
- Only rows on **this project** (`project.employeeTimeLogs` relation). Hours on another project do not keep someone active here.
- Billable and non-billable both count (no billable filter; `isBillable` just copies the project flag).
- A 3m row with `0` hours counts as "no hours" (unit-tested).
- Zoho rows are matched to SimERP by **employee email** and **exact project name** (`employee-logged-data.service.ts:264-281`). A project name mismatch drops the hours entirely.

### Allocation end dates, shadows, PR reviewers
- Allocation end date is **ignored** by this rule. An assignment whose end date has passed but is still not ARCHIVED counts as "allocated" → stays Active, even with no hours.
- Shadow developers have their own assignment → treated as allocated → never moved by this rule.
- PR reviewers are not assignments. A PR reviewer row is always added to Active (`pm-projects.service.ts:652-656`). See bug B2.
- Deallocated (ARCHIVED) employees were already in Past before this change and **stay in Past even if they start logging again** — the "move back" only applies to people with no assignment.

## 2. Read time vs job; affected endpoints/screens

- **Read time.** Nothing is written to the DB. Both queries now also fetch the `3m` bucket:
  - list: `pm-projects.service.ts:216-217` → `timeFrame in [selected, '3m']`
  - detail: `pm-projects.service.ts:521-522` → `timeFrame in [selected, '3m', 'all']`
- Data freshness depends on the **Zoho employee-logs sync**:
  - Cron `ZOHO_SYNC_DAILY` `@Cron('0 0 * * *')` with no time zone → 00:00 UTC = **05:30 IST** daily (`src/modules/cron/jobs/zoho-sync.job.ts:29`). It runs only when the feature flag `ENABLE_ZOHO_EMPLOYEE_LOGS` is on.
  - It queues 6 jobs (5d/15d/30d/3m/6m/all). Each job **deletes and rewrites its whole bucket** (`employee-logged-data.service.ts:112`).
  - Manual triggers (Admin, needs `scheduler` read):
    - UI `/admin/job-queue-scheduler` (Run now / retry)
    - `POST /api/v1/sync-queue/cron-runs/:jobName/run`
    - `POST /api/v1/sync-queue/jobs/:publicId/retry`
    - `GET /api/v1/zoho-analytics/employee-logged-data/3m` — a GET with side effects that runs the 3m sync right away. Do not call it casually.
  - On dev, `ZOHO_ANALYTICS_USE_MOCK=true` would replace Zoho with static fixture files (`zoho-analytics.service.ts:221-225`). If this flag is on, bucket data never changes. Confirm it is off before testing "move back".
- Screens and endpoints:
  - `GET /api/v1/pm-projects?timeFrame=…` → `/my-projects` list cards (employees on each card).
  - `GET /api/v1/pm-projects/:publicId?timeFrame=…&search=…` → `/my-projects/:projectId`, **Active Allocations / Past Allocations** tabs. The tab badge counts come from `employees.length` / `pastEmployees.length` (FE `pmProjectsApi.mappers.ts:163-191`).
  - Roles: PM (SELF = projects where they are PM) and CSM (SELF also matches `csmId`) — `pm-project-scope.strategy.ts`. **PMO and Admin have no `pm_projects.read`** (revoked in migration `20260709180000`), so they can't see this screen.
  - **Not changed:** `GET /api/v1/projects`, `GET /api/v1/projects/:id` (`projects.service.ts:513-517`). These feed the Projects page and the employee profile → project side panel (`ProjectDetailPanelChrome.tsx:137`), which still use the old Past rule (deleted or ARCHIVED only).
  - `GET /pm-projects/stats` is unaffected (it counts assignments).
- Past-tab row for a dormant logger: Allocation "Not Allocated", Start/End "Not specified", Reason "Not specified", hours = the selected timeframe's hours. Row actions are hidden on the Past tab. Exit feedback is never found, because they had no deallocation ticket.

## 3. "Move back" rule

- No explicit move. Once the employee logs hours on the project (in Zoho) and the next `3m` sync runs, a `3m` row with hours > 0 exists, so they appear in Active again on the next page load.
- Delay = Zoho timesheet → Zoho Analytics refresh lag (outside SimERP) + up to ~24 h until the 05:30 IST sync, or faster if an Admin runs the sync manually.
- Hours in the 5d/15d/30d bucket also count as "recent", but the detail page only fetches the selected timeframe + 3m + all. In practice the 3m bucket decides.
- Nothing else changes:
  - no notification or email
  - no assignment, ticket or allocation record created
  - no utilization or billing change
  - project `totalHoursLogged` on the detail page is unchanged (it already summed past + active)
- The employee is still "Not Allocated" after moving back. Active only means "recently logging", not "allocated".

## 4. Edge cases (expected per code)

| Case | Expected |
|---|---|
| Unallocated, last hours exactly on (sync date − 3 calendar months) | **Active** (inclusive `>=`) |
| Unallocated, last hours one day before that | **Past** |
| Unallocated, hours logged today | Still **Past** until the next 3m sync after Zoho Analytics has the entry, then **Active** |
| Unallocated, future-dated timesheet entry | Counts as recent → **Active** (no upper bound) |
| Allocated (GREEN etc.), no hours for 6+ months | **Active** (rule only covers unallocated people) |
| Allocated with future start date, no hours | Active bucket → shown in **Upcoming** section |
| Allocation end date passed, status not ARCHIVED, no hours | **Active** |
| Employee with no hours ever and no assignment | Not shown anywhere (no row to build) |
| Employee with no hours ever but allocated | Active (assignment-only row, 0 h) |
| Deallocated (ARCHIVED), no recent hours | **Past** (unchanged behaviour) |
| Deallocated (ARCHIVED), starts logging again | **Stays Past** — no move back for deallocated people |
| Offboarded (`deletedAt`) | **Past** always |
| Unallocated, recent hours only on a **different** project | **Past** on this project |
| Unallocated, 3m bucket row exists with 0 h | **Past** |
| Unallocated dormant logger who is also a PR reviewer | Appears in **Active (PR reviewer row) AND Past (logger row)** — see B2 |
| List view, timeframe 6m / all | Dormant unallocated loggers are removed from the card and from the card's hour total (B1) |
| List view, timeframe 15d / 30d / 5d | No visible change (anyone with hours in those buckets is recent) |

## 5. Suspected bugs / risks

**B1 — List hour total now differs from detail total (Medium).** `pm-project-mapper.util.ts:372-374` drops dormant employees, and `mapToListItem` totals only the remaining employees (`:416`). The detail total still sums everyone (`:793-794`). With timeframe **6m** or **all**, a project with a dormant unallocated logger shows fewer hours on the `/my-projects` card than on its detail page. Hours-based sorting (`sortBy=hours`) also moves. ARCHIVED or offboarded people with hours in the timeframe are still kept on the card (`:384-386`), so the list treats them differently from dormant loggers.

**B2 — PR reviewer + dormant logger shows in both tabs (Medium).**
- Detail adds PR reviewer rows to `employees` after the past split (`pm-projects.service.ts:652-656`).
- The FE merge (`pmProjectsApi.roleMerge.ts:25`, called in `pmProjectsApi.ts:142-143`) runs on each bucket separately.
- So someone who reviews PRs and also logged hours as "Not Allocated" more than 3 months ago appears once in Active and once in Past.
- The Active reviewer row also loses the hours it used to absorb.

**B3 — Same project, different answers across screens (Medium / product).** `/projects/:id` (`projects.service.ts:513-517`) and the employee profile → project side panel still list dormant loggers as active employees. `GET /employees/:id` reports `active:false` for the same project but keeps it under `projects`, not `pastProjects`. PMO and Admin see the old behaviour; PM and CSM see the new one.

**B4 — An empty or partial 3m bucket pushes everyone to Past (Medium).**
- The rule treats "no 3m row" as "dormant".
- Each bucket is a separate job, and each job deletes and rewrites its bucket.
- If the 3m job never ran, ran against mock or empty data, or Zoho returned no rows, every unallocated logger on every project drops to Past while `lastSyncedAt` shown on the page (from the *selected* timeframe's sync state, `pm-projects.service.ts:301-309`) looks fresh.
- There is no guard such as "skip when the 3m sync is missing or stale". The related `allocation-inactivity.service.ts:199-202` does check the 3m sync time.

**B5 — Month-end date maths shortens the window (Low).** `monthsAgo` (`zoho-timeframe.constant.ts:47-52`) uses `setUTCMonth(m-3)`, which rolls over:
- A sync on 31 Dec gives 31 Sep → **1 Oct**, so hours on 30 Sep are dropped.
- A sync on 31 May gives 31 Feb → **3 Mar**.

Next occurrence: sync on 2026-12-31.

**B6 — "Recency" is fixed at sync time and has no upper bound (Low).** Between syncs the window does not move. A failed sync leaves it as of the last good run. Future-dated entries count as recent.

**B7 — Dormant row gives no reason (Low / UX).** In the Past tab the Reason column shows "Not specified" for these rows. Nothing tells PM/CSM that the person was moved for inactivity rather than deallocated.

**Not a bug but worth confirming with PO:** deallocated (ARCHIVED) employees who start logging again stay in Past. The task title ("can be moved back into active allocation") could be read to include them.

## 6. How to verify on dev with existing data

Hours **cannot be added in SimERP**. They come only from Zoho timesheets, via the Zoho Analytics "Employee Logged Data" view and the nightly sync. To test "move back", someone must log time in Zoho Projects/People on that project, then wait for or run the sync. SimERP has no "last logged date" anywhere — buckets only.

Finding candidates (API, cookie auth, `https://simerp-dev-api.simform.solutions/api/v1`):
1. Log in as PM `hardik.trivedi@simformsolutions.com` or CSM `tarun.sharma@simformsolutions.com`. `GET /pm-projects?limit=100` lists their projects.
2. For each project, call `GET /pm-projects/:publicId?timeFrame=3m`. In `pastEmployees`, look for rows with **no `assignmentPublicId`/allocation fields, no `deletedAt`, and `hoursLogged = 0`** — these are dormant unallocated loggers.
3. Confirm with `GET /pm-projects/:publicId?timeFrame=all` (same row, `hoursLogged > 0`) and `?timeFrame=6m` (hours > 0 means they last logged 3–6 months ago).
4. Cross-check: `GET /employees/:employeePublicId` → under `projects`, that project should have `active: false`.
5. Compare with `GET /projects/:publicId` as PMO `bhumi.chauhan@` or Admin `ceo@`: the same person appears in `employees`, not `pastEmployees` (B3).
6. Check freshness: as Admin, `GET /sync-queue/jobs/summary` → the EMPLOYEE_LOGS × LAST_3_MONTHS row should be COMPLETED today. Or use the `/admin/job-queue-scheduler` UI.
7. Confirm dev runs ≥ 6.4.2 (package version / What's New).

Positive control: rows in `employees` with no allocation (`Not Allocated`) and `hoursLogged > 0` at `timeFrame=3m` are unallocated but recent, so they should stay Active.

## 7. Draft test cases

| ID | Title | Role | Steps | Expected |
|---|---|---|---|---|
| TC-PASTAL-001 | Dormant unallocated logger appears in Past tab | PM | Open `/my-projects/:id` for a project with a known candidate (see §6); open Past Allocations | Candidate listed in Past; Allocation "Not Allocated"; not in Active |
| TC-PASTAL-002 | Dormant logger absent from Active tab and counts | PM | Same project, Active tab; compare tab badges with API `employees`/`pastEmployees` lengths | Not in Active; badges match API |
| TC-PASTAL-003 | Unallocated but recent logger stays Active | PM | Find a "Not Allocated" row with hours > 0 at 3 Months | Row stays in Active |
| TC-PASTAL-004 | Allocated employee with no recent hours stays Active | PM | Find allocated row with 0 h at 3m (API `timeFrame=3m`) | Stays Active; not in Past |
| TC-PASTAL-005 | Deallocated (ARCHIVED) employee still in Past with reason | PM | Past tab | ARCHIVED rows unchanged; exit reason shown where recorded |
| TC-PASTAL-006 | Offboarded employee still in Past | PM | Past tab | `deletedAt` rows in Past |
| TC-PASTAL-007 | Same behaviour for CSM | CSM | Repeat 001–003 as `tarun.sharma@` on a project where he is CSM | Same split as PM |
| TC-PASTAL-008 | Timeframe switch does not change membership | PM | Switch 5d/15d/30d/3m/6m/all on detail | Dormant person stays in Past under every timeframe; only hours change |
| TC-PASTAL-009 | Past-tab hours per timeframe | PM | Dormant row at 3m vs 6m vs all | 0 h at 3m/30d/15d/5d; > 0 at all (and 6m if within 6 months) |
| TC-PASTAL-010 | List card excludes dormant logger | PM | `/my-projects` list with timeframe 6m/all | Dormant person not on the project card |
| TC-PASTAL-011 | List total hours vs detail total (B1) | PM | Same project, timeframe all: compare card total vs detail total | Expected equal. Code predicts the list total is lower → defect candidate |
| TC-PASTAL-012 | PR reviewer + dormant logger (B2) | PM | Find a PR reviewer who also has unallocated old hours | Expected one row. Code predicts it appears in both tabs → defect candidate |
| TC-PASTAL-013 | Projects page / side panel consistency (B3) | PMO/Admin | Open `/projects` → same project, or employee profile → project side panel | Code predicts dormant logger still shown as active there; raise with PO |
| TC-PASTAL-014 | Move back after logging hours | PM + Zoho user | Dormant person logs time on the project in Zoho; Admin runs Zoho sync (or wait for 05:30 IST); reload detail | Moves to Active, still "Not Allocated"; no notification; no ticket/assignment created |
| TC-PASTAL-015 | Hours on a different project don't move back | PM | Dormant person logs recent hours only on another project; after sync | Still Past on this project |
| TC-PASTAL-016 | Boundary: last hours on sync date − 3 months | PM | Needs Zoho entry dated exactly on the boundary | Active (inclusive); a day earlier → Past |
| TC-PASTAL-017 | Future-dated Zoho entry | PM | Dormant person gets a future-dated entry; sync | Becomes Active (no upper bound) — confirm intended |
| TC-PASTAL-018 | ARCHIVED employee who logs again | PM | Deallocated employee logs new hours; sync | Stays Past (per code) — confirm with PO |
| TC-PASTAL-019 | Search on Past tab finds dormant logger | PM | Type name in search on Past tab | Row found; search on Active does not find it |
| TC-PASTAL-020 | Past-tab empty fields are readable | PM | Inspect dormant row cells | Placeholders are words ("Not Allocated", "Not specified"), no bare dash/null |
| TC-PASTAL-021 | API contract | PM | `GET /pm-projects/:id` | Dormant row only in `pastEmployees`, `temporaryReplacement: null`, no `allocationFeedback` |
| TC-PASTAL-022 | RBAC: PMO/Admin cannot read pm-projects | PMO, Admin | `GET /pm-projects/:id` | 403 (no `pm_projects.read`) |
| TC-PASTAL-023 | RBAC: PM cannot read another PM's project | PM | `GET /pm-projects/:otherId` | 404 |
| TC-PASTAL-024 | Stale/missing 3m sync (B4) | Admin (observe only) | Check sync summary; if 3m job FAILED while others COMPLETED, review Past tabs | Risk: unallocated loggers wrongly in Past; record observations only — do not trigger failures |
| TC-PASTAL-025 | Stats unaffected | PM | `GET /pm-projects/stats` before/after | Counts unchanged (assignment-based) |

## Related, separate feature
`src/modules/shared/allocation-inactivity.service.ts` (SI4-T1034) is a different, PMO/Admin-driven cleanup. It lists **allocated** assignments older than 3 months with < 20 h logged in the last 3 months and lets PMO archive them. Do not confuse it with T1526.
