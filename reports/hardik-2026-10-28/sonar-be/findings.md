# SI4-T1563 — Sonar clean-up (backend) regression on DEV — findings

- **Task:** SI4-T1563 "Resolve SonarQube findings" (Hardik Metaliya). 10 commits from 22/10, merged to `development` through PR #565 and #566 on 23/10.
- **Commits reviewed:** d2c01198, 3dd6e6e4 (tooling only), 1fa5ba15, fbcf2da0, 021aecba, 8dd24c40, 562bfefc, 7165cfd4, 1b8429d6, 87492acc. Conflict resolutions in merge commits 2108fd20, 7387fa78 and d674a780 also checked (`git show --cc`).
- **Tested:** 28/10/2026 on DEV (https://simerp-dev-api.simform.solutions/api/v1, frontend 6.5.0). Mostly API checks, with UI screenshots to confirm.
- **Accounts used:** nandini.langalia (PMO), tarun.sharma (CSM), punit.patel (Employee), riddhi.patel (RM), maulik.joshi (TM), nikhil.rathod (RM/CSM/DM), omkar.nair (TM, one weekly-update read only). One session per user. All checks read-only, except DELETE calls on a random UUID that matched nothing.
- **Result:** 55 cases. **47 passed, 5 failed, 3 blocked.** All 5 failures come from 2 defects that existed **before** this task. **No defect was introduced by SI4-T1563.**
- **Evidence:** scripts and raw JSON in `reports/screenshots/2026-10-28/hardik/sonar-be/scripts/` and `…/json/`; screenshots `reports/screenshots/2026-10-28/hardik/sonar-be/ui-0*.png`.

## Defects

### BUG-SONBE-01 — Search treats `%` and `_` as wildcards on most list screens (pre-existing)

- **Severity:** Medium · **Label:** pre-existing, not caused by T1563.
- **Repro (PMO):**
  1. Open Employee → Employee Details. Type `%` in "Name, email, or project".
  2. Do the same on Projects → Project Details and on Requests Tracking → Project Allocation.
  3. API equivalents: `GET /employees?search=%25`, `/projects?search=%25`, `/allocation-tickets?search=%25`, `/notifications?search=%25`, `/utilization-priority?search=%25`, `/employee-roles?search=%25`, `/dashboard/activity?search=%25`.
- **Expected:** `%` and `_` are searched as plain characters. No names contain them, so the result should be 0 rows (Opportunity screens already behave this way).
- **Actual:** every row comes back.

  | Endpoint | Rows with no search | `search=%` | `search=_` | `search=a%b` |
  |---|---|---|---|---|
  | `/employees` | 3648 | 3648 | 3648 | 1210 |
  | `/projects` | 402 | 402 | 402 | 122 |
  | `/allocation-tickets` | 770 | 770 | 770 | 393 |
  | `/notifications` | 1198 | 1198 | 1198 | 946 |
  | `/utilization-priority` | 3649 | 3649 | 3649 | 682 |
  | `/employee-roles` | 3632 | 3632 | 3632 | 348 |
  | `/dashboard/activity` | 257 | 257 | 257 | 82 |

  In the UI: Employees shows "Showing 1 - 100 of 3648 results" and Project Allocation shows 726 of 726.
- **Evidence:** `ui-01-employees-search-percent.png`, `ui-05-tickets-search-percent.png`, `ui-06-projects-search-percent.png`, `json/results-pmo.json` (keys `raw:*`).
- **Origin:** user text goes straight into Prisma `contains`, with no escaping:
  - `src/core/prisma-query-builder/QueryBuilder.ts:430` (c4189d6c4, 26/06/2026) — used by employees, projects, allocation tickets, UP and employee roles.
  - `src/modules/notifications/notifications.service.ts:48-49` (9a8ccd8a9, 22/07).
  - `src/modules/dashboard/dashboard.service.ts:548-550` (4b8058453, 27/08).

  `escapeLikePattern` was only ever applied to the opportunity and interview searches (1013f20a, SI4-T1267, 06/10). T1563 commit 87492acc only changed `replace` to `replaceAll` inside the helper, and those endpoints still escape correctly.
- **Suggested fix:** call `escapeLikePattern()` on the search term in `QueryBuilder` and in the two manual `contains` blocks.

### BUG-SONBE-02 — Raw enum "IN_REVIEW" in the ticket-rejected notification (pre-existing)

- **Severity:** Low · **Label:** pre-existing, not caused by T1563.
- **Repro:** as PMO, open the notification for a ticket that was rejected back to review (e.g. NA-0433 on HyperScale).
- **Expected:** readable status, e.g. "In Review", like other notifications that go through `humanizeEnumValue`.
- **Actual:** "NA-0433 for project HyperScale | Scalability Engine was rejected and moved back to IN_REVIEW."
- **Evidence:** `json/results-final-pmo.json` (key `notif:humanizedText`). 1 of 497 PMO notifications created after the deploy.
- **Origin:** hard-coded text at `src/modules/notifications/dispatch/notification-content.service.ts:1093` (blame eb9a13e5e, 20/07; first added in 6680a2fc, SI4-T725, 06/07). It never went through `humanizeEnumValue`.

## Risky changes reviewed

"Equivalent" = old and new code read side by side and they behave the same.

| # | Change (commit, file:function) | Why risky | How tested | Result |
|---|---|---|---|---|
| 1 | 87492acc `common.util.ts:escapeLikePattern` — `replace` → `replaceAll` | String escaping | `%`, `_`, `\`, `%%`, `a%b`, `%_%`, quotes on openings, interview requests, candidates, assignees, lookup, opportunity history; normal terms; UI search on Opportunity Allocation | Pass. TC-001…010 |
| 2 | 1b8429d6 `working-location-sync.service.ts:ZOHO_NUMBER_SUFFIX` regex + `trimEnd()` | Regex | No sync has run on DEV since the change (asOfDate 13/10, `lastSyncedAt` null). Code review: same output for "80null", "55 %", "null", "". All 3649 stored percentages valid | Blocked live; code equivalent. TC-037/038 |
| 3 | 7165cfd4 / 8dd24c40 `team-lookup.util.ts`, `employees-metadata.service.ts` | Code moved; merge folded `continue` lines | `--cc` merge diff read; 405 teams, 0 duplicate RM+department, 0 employees in two teams | Pass (data). Sync blocked. TC-044/045 |
| 4 | 562bfefc `team-hierarchy.util.ts:expandToManagementSubtree` — `for…of` on a growing array | Loop semantics | RM subtree 10/10, DM 13/13, TM = own dept only; DM tickets all own/reportees' | Pass. TC-019, 040, 046–048 |
| 5 | 562bfefc `BROAD_SCOPES` / `DEPARTMENT_FILTER_SCOPES` → Set | Access checks | CSM overall window hidden on 93/93 other rows; dashboard dept filter PMO 41, TM 1, others 0 | Pass. TC-031, 039 |
| 6 | 562bfefc `working-location-overview.builder.ts` | reduce / Math.max rewrite | Recounted 7-day trend from 3649 rows; matched to 0.1 point | Pass. TC-036 |
| 7 | 562bfefc / 8dd24c40 `toStringArray` — `String(v)` → `JSON.stringify` | Query-param parsing | Comma vs repeated params equal; nested → 400 not 500 | Pass. TC-032, 049 |
| 8 | 1fa5ba15 `toListParam`/`toEnumArray` (4 endpoints) | Validation | Comma/repeated/spaced/trailing/nested/invalid enum/bad UUID | Pass. TC-022, 025–027 |
| 9 | 562bfefc `dashboard-export.service.ts` CSV escaping | CSV escaping | 2609 quoted cells, 0 unguarded formula cells; xlsx valid | Pass. TC-033/034 |
| 10 | 562bfefc `buildRangeClause` ternaries flipped | Flipped conditions | 5 range combinations | Pass. TC-050 |
| 11 | 8dd24c40 `parseActiveVisaFilters` ternaries flipped | Flipped conditions | 6 combinations + empty/bogus (400) | Pass. TC-042 |
| 12 | 8dd24c40 `toReadableRating` | Rating output | 0–10 kept, 0 stays 0, PMO omitted per field grant | Pass. TC-043 |
| 13 | 021aecba notifications isRead ternary flipped | Flipped condition | true/false/omitted × 4 roles | Pass. TC-028 |
| 14 | `void` removed before ~40 `emitAsync().catch()` chains | Promise handling | All chains still `.catch`; ticket-created notification coverage unchanged before/after | Pass. TC-029 |
| 15 | 021aecba `allocation-timeline.util.ts` | Early return removed, condition inverted | 5584 assignments / 5620 segments, 0 violations | Pass. TC-021 |
| 16 | 021aecba `OVERRIDE_CHANGE_TYPES` → Set | Eligibility | 404/400/403 paths; override branch needs a real APPLIED change (not touched) | Partial pass. TC-020 |
| 17 | 021aecba `projects.filter-registry.ts` | Moved code | CSM, PM, employee, accountGrade, combined, unknown key | Pass. TC-051 |
| 18 | prReviewFrequency spread / Teams `!== null` flips | Flipped conditions | Equivalent; writes/webhooks not run | Not run live |
| 19 | fbcf2da0 `buildAssetUrl`, `humanizeEnumValue` | Regex → loop / replaceAll | Icon URLs well formed; no raw enums apart from BUG-SONBE-02 | Pass. TC-035, 030 |
| 20 | fbcf2da0 `prisma.service.ts` listeners removed | Removed code | Only commented-out logging; API fine all session | Pass (indirect) |
| 21 | fbcf2da0 `buildWeightProfileKey` sort | Comparator | Upper-case ASCII keys → same order | Equivalent |
| 22 | 8dd24c40 `selectCreatableMissingNoteUpdates` | throw → some() | Equivalent; no weekly updates on DEV | Blocked live. TC-054/055 |
| 23 | 1fa5ba15 opportunity pipeline Sets | Pipeline rules | Equivalent; not run (demo freeze) | Not run |
| 24 | competencies / tech-stack / employee-roles / goals small rewrites | Write paths | Equivalent; writes not exercised | Not run |
| 25 | `abstract-cron-job.ts` / `zoho-http.service.ts` shared defaults | Mutation risk | Not mutated | Equivalent |

## Other notes

- Access matrices (20 GET endpoints × 6 roles) all match each role's grants in `/roles` (TC-052/053). Employee now gets 200 on `/dashboard/*` with own data only — the old DEF-DASH-001 was fixed before this task.
- Two first-run failures were script mistakes (fixed and re-run), not defects.
- Nothing filed in Zoho or posted anywhere.
