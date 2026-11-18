# SI4-T1564: Frontend SonarQube clean-up — regression results on DEV

- **Task:** SI4-T1564 "Resolve SonarQube findings" (frontend), owned by Hardik Metaliya. Merged to `development` through PR #517 on 23/10.
- **Commits reviewed:** 26d9f277 (main change, 225 files), 1b1d0e66, 397282fe, 6f8b5ca4, dc4ed458. Merge 5291b4b7 had conflicts, and its resolution was checked. 67fa891f, 17c79f1f and b622d272 only touch tooling and docs.
- **Tested:** 28/10/2026, with the remaining checks run on 29/10/2026. Environment: DEV (https://simerp-dev.simform.solutions, frontend 6.5.0). Testing was through the UI, plus an API check of permissions.
- **Accounts:** smit.shah (Admin), vihaan.chatterjee (PMO), vivaan.bajaj (CSM), vishal.desai (Employee), zalak.das (TM), suresh.reddy (TM), vidhi.shah (RM). Everything was read-only. Dialogs were opened and then cancelled, and nothing was saved.
- **Result:** 73 cases. **69 passed, 0 failed, 4 blocked.** **SI4-T1564 introduced no defects.**
- **Evidence:** scripts and raw JSON are in `reports/screenshots/2026-10-28/hardik/sonar-fe/scripts/` and `…/json/`. Screenshots are in the same folder: `a*`, `c*`, `e*`, `p*`, `q*`, `t*`, `w*` from 28/10 and `g*` from 29/10.

## Blocked (4)

| Case | Why |
|---|---|
| TC-SONFE-007 Add New Role dialog | The button is hidden on purpose. The Admin role has only `read:roles` and no `update:roles` (checked with `GET /employees/permissions`). No dev account with `update:roles` was available. |
| TC-SONFE-008 Duplicate role dialog | Same reason: the role-column menu needs `update:roles`. |
| TC-SONFE-011 Delete role assignment | The Admin role has no `delete:assign_roles`, so no delete control is shown. |
| TC-SONFE-013 Cron-run cell alignment | Job Scheduler shows "No Jobs Found" on DEV, so there are no rows to check the span→button tooltip triggers. |

## Behaviour changes found in code review (no visible impact)

1. **Ticket edit history** (`ticketsApi.editHistoryFields.ts:49`): an object value now shows as JSON, not "[object Object]". This is an improvement. The page itself looked fine (TC-SONFE-054).
2. **`role="status"` removed** from the KPI rows on My Projects and Tickets and from the weekly-update settings skeleton (`aria-live` is kept). Nothing changes on screen. Screen readers announce the regions slightly differently.
3. **Goal duration field** (`IsoDurationField.tsx:47`): `div role=group aria-invalid` became `<fieldset>`, and the group no longer carries `aria-invalid`. The inputs still do. The unit test that covered this was deleted. Not tested live: MANAGEMENT/2026 has no free goals left to open the create form with.

## Risky changes — how they were covered

| Change | Risk | Result |
|---|---|---|
| span → `<button>` for the UP pill, guardrail flag and project badges (`UpSystemCell`, `UtilizationFlags:71`, `ProjectAllocationBadge:108,120`) | Focus, alignment, Enter/Space | Pass. The buttons are named, have tooltips on focus, line up with the name, and Enter opens the badge. TC-027–030 |
| span → `<button>` in side panels and the project "+N" popover (`ProjectsPopoverRow`, `employeesTableParts`, `SidePanelItem`) | Visual, nested buttons | Pass. TC-031–034, 039. The 28/10 popover failure was a script problem (it clicked a button cut off at the table edge). On re-run, the popover opens with both click and Enter. |
| Donut `Cell` removed; `activeShape` → `shape` (`AllocationTypeDonutChart`, `GoalsDashboardDonut`) | Colours and hover | Pass. Theme colours show, the hovered slice pops out, and the tooltip is correct. TC-041–043 |
| New `lib/search-params.ts` used by the Employee, Project, PM-project and Ticket filter hooks | URL sync | Pass. Sort, search, page reset, advanced filters and timeframe all hold through a reload, and default values stay out of the URL. TC-020–025, 037, 056, 063 |
| `usePermissionDiff` split | Wrong save payload | Logic equivalent. Saving not tested, because Admin can't edit roles (see Blocked). |
| `HighlightedText` keys and empty segments | Duplicate keys, regex characters | Pass. 0 duplicate keys, and regex characters are safe. TC-052 |
| `LogHoursCell` / `TimeRangeSelector` rewrites | NaN or blank values | Pass. TC-025, 026 |
| Weekly-update tables (6f8b5ca4) | Removed code | Pass. TC-070–072 |
| Team Copy removed (397282fe) | Live references | Pass. No copy controls, and `git grep` finds no references. TC-040, 073 |
| `<p role=status>` → `<output>`, `role=separator` → `<hr>`, `role=group` → `<fieldset>` | Locators, a11y | Pass. TC-017, 045, 050, 061 |
| ~120 `Readonly<>` props, `window` → `globalThis`, `forEach` → `for…of`, `Number.isNaN`, `replaceAll`, zod 4 formats | Mechanical | Equivalent (each `return` → `continue` was checked) |

## Observations (not caused by T1564)

- **Skills page shows a bare "-"** when no skills are selected. This goes against the readable-placeholder convention. It dates from a91e5111b (bhargav, 15/05), so it is not from this task.
- Console noise on several screens comes from seed data with placeholder logo URLs (`example.com/logo.png`, `cdn.example.com/icon.svg`, a 404 from `cdn.simpleicons.org/openai`). This is a data problem, not a code problem.

## Impact on our automation suite

Removing the explicit `role="complementary"` and changing `span role=button` to `<button>` breaks these locators in our own page objects:

- `tests/page-objects/employee/employee-details.page.ts:1410`, `:1447` — `aside[role="complementary"]`
- `tests/page-objects/employee/employee-details.page.ts:2472` — `[role="button"][aria-label=…]`
- `tests/page-objects/department/competencies.page.ts:115` and `tests/page-objects/employee/skills.page.ts:207` (only in `.or()` fallbacks)

Fix: use `getByRole('complementary', …)` and `getByRole('button', { name })`. Not changed yet.

Nothing was filed in Zoho or posted anywhere.
