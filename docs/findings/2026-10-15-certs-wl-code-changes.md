# Certifications and Working Location: code changes since 2026-10-13 (read on 2026-10-15)

**Summary**
1. Only one change touches these features since 2026-10-13: frontend **SI4-I572** (`b620446f` + `3c69f98d`, merged as PR #499 on 2026-10-14 at 10:50). It changed **only the Add Certification form**: the expiry date is now locked to the partnership's validity, proof links need a real host name, and the LinkedIn field got a hint. The backend has **no** certification or Working Location commit after the SI4-T1485 / SI4-T1375 merges on 2026-10-12.
2. None of our open certification defects is fixed on the server. The API still accepts a future issue date (037), an expiry date past the partnership's validity (038) and `ftp://` proof links (039). PMO still gets org-wide data from the API with no Organisation tab in the UI (045). There is still no edit or delete (029). I572 only adds checks in the browser.
3. Our suites were written on 2026-10-14 against a build that already had I572 (the findings note an Expire Date that is auto-filled and read-only). So no certification test or locator is broken by it. Tests 013, 033, 050 and 051 fail for reasons I572 does not touch.
4. Working Location code has not changed since the suite was written. The code confirms that our current WL failures are real product gaps: the project column is hidden on Past Allocations, it ignores the page's time-range dropdown, and WFO% + WFH% can add up to 99 or 101. The new **PMO "Login as User"** feature (SI4-T1525, merged 2026-10-15) means the FRD's "Login As" row can now be tested.
5. Draft new cases: **TC-EMPCRT-053..062** (8 for the I572 behaviour and 2 for the PMO Login As follow-on) and **TC-EMPWLC-088..096** (Login As, dashboard filter state, TM+RM scope, indirect effects). Section 5 lists the remaining FRD gaps for Working Location that the code shows.

Sources: `git log origin/development` in `/home/subham/SIMERP DEV/frontend` and `/home/subham/SIMERP DEV/backend` (`origin/development` was current; `git fetch --dry-run` showed no new commits on `development`). Read only: no checkout, no browser, no API calls.

---

## 1. Commits since 2026-10-13

### Certifications / Working Location (direct)

| Repo | Commit | Date | What changed |
|---|---|---|---|
| FE | `b620446f` SI4-I572 fix: certification expiry cap, proof URL validation, LinkedIn hint | 2026-10-14 09:36 | **(a) Expiry is locked.** New helpers `hasFixedValidity()` and `maxExpiryDate()` in `src/schemas/certifications/index.ts`. For a STANDARD partnership that has a validity value, Expire Date is now `disabled` (`expiryLocked`) and is **always rewritten** to issue date + validity whenever the issue date or partnership changes. Before, the app only filled it once, as a suggestion the user could change, and only if the field was empty. The date picker also blocks days after the cap. **(b) New schema rule** `EXPIRY_AFTER_VALIDITY`: "Expire date is beyond the partnership validity period." **(c) Proof URL** must be http/https **and** have a public-looking host. The new `PUBLIC_HOST` regex needs dotted labels with a letter TLD, or an IPv4 address. So `https://dddddd` and `https://localhost/x` are now rejected. This also applies to the **Add Partnership → Website** field, because both use `optionalUrl()`. **(d)** The proof URL is checked **while typing** (`form.trigger('proofUrl')` on each change), not only on blur or submit. **(e) Profile Edit drawer:** the LinkedIn Profile URL label gets an info icon with the tooltip "Example: https://www.linkedin.com/in/your-name". |
| FE | `3c69f98d` SI4-I572 fix: address PR review comments | 2026-10-14 09:42 | The URL is also re-checked when the link is **cleared**, so an old "invalid URL" error goes away. Side effect: because the shared proof-required rule sits on `proofUrl`, clearing the link probably shows "Add a verification link or upload the certificate." instead. The IPv4 part of the regex is tightened to octets 0–255 (`http://999.1.1.1` is now rejected). |
| FE | `a5c0c453` Merge PR #499 (fix/SI4-I572) | 2026-10-14 10:50 | Merge only. |
| BE | — | — | **No commits** under `src/modules/certifications`, `certification-scope.strategy.ts` or `src/modules/working-location` after 2026-10-12. The SI4-T1485 review fixes (`064170b1`, `d3e39c71`, style and refactor commits) are dated **2026-10-09** and were merged as PR #539 on **2026-10-12**, so they were already in the build we tested on 2026-10-14. |
| FE/BE | Working Location (SI4-T1375) | — | Last commits: FE `1e2bc83e` (2026-10-09, "align working location screens with the Figma design") and BE `468b9b27` (2026-10-09). Both were merged on 2026-10-12. **Nothing after that.** |

### Related changes (indirect)

| Repo | Commit | Date | Why it matters to us |
|---|---|---|---|
| BE | `65b8ad51` + `b81c96ba` SI4-T1525 allow PMO to log in as another user | 2026-10-15 | Adds `employees.impersonate` for PMO at ALL scope. Adds a new permission, `employees.impersonate_admin` (ADMIN only): a target that holds it can only be impersonated by an admin, otherwise **403 AUTH_022** (audited as denied). `/employees/metadata` now returns `impersonatorRole` (ADMIN, PMO or null). For WL and Certifications, every scope check (`getRbacEmployeeId()`, `getScopeFilter`) runs as the impersonated user. That is what WL FRD §4 "Login As follows the impersonated user's access level" requires. |
| FE | `5fe2a49b`, `735b31dc` SI4-T1525 show Login as User for PMO; `ad5cadc5` SI4-T1531 Login as button on the employee side panel | 2026-10-14/15 | The UI entry points for the above. The exit button reads "Return to Admin" or "Return to PMO". |
| BE | `e410f149` SI4-T1526 move dormant unallocated loggers to past employees | 2026-10-13 | People who logged time on a project but have no assignment and logged nothing in 3 months now move from Active to **Past** on the project detail page. This changes row counts in the CSM/PM project table that our WL project-column tests use. These rows never had WL data for a PM/CSM anyway: the SELF scope only covers `assignedProjects`. |
| FE | `300299fb` SI4-I571 accept country-subdomain LinkedIn URLs | 2026-10-13 | `in.linkedin.com/...` and `uk.linkedin.com/...` are now accepted and saved as `https://www.linkedin.com/...`. This is a profile change, released next to the I572 LinkedIn hint. |

---

## 2. Effect on known defects

| Known defect / case | Status after these commits | Evidence |
|---|---|---|
| **037** API saves a future issue date | **Still open.** The UI already blocked future days (the `disabledDates={(date) => date > new Date()}` code did not change). The backend DTO has only `@IsDateString({ strict: true })` and the service has no check against today. | BE `src/modules/certifications/dto/create-certification.req.dto.ts`; `certifications.service.ts` `assertExpiryMatchesPartnership()` |
| **038** API saves an expiry past the partnership validity | **Still open, now UI-only.** I572 blocks it in the browser. The field is read-only, and the schema rule plus `maxExpiryDate()` reject it. The backend `assertExpiryMatchesPartnership()` only checks "required" and "after issue date". It never reads `validityValue` or `validityUnit` (the partnership is loaded with `select: { id, expirationType }` only). | BE `certifications.service.ts:291-321` |
| **039** API saves `ftp://` proof links | **Still open.** The UI already rejected ftp. The backend uses `@IsUrl({ require_protocol: true })`, and class-validator's default `protocols` includes `ftp`. Fix: `protocols: ['http','https']`. | BE DTO, `proofUrl` |
| **045** PMO sees no Organisation tab, but the API returns all org certificates | **Unchanged.** BE `CertificationScopeStrategy`: ALL scope is "PMO, Admin, Program Owner" (by design in the code). FE `useCertificationAccess.ts:22`: `canViewOrganisation = isAdmin \|\| canCreatePartnership \|\| isRmOrTm(...)`, so PMO is not included. Product decision still needed. | |
| **029** No edit or delete | **Unchanged.** The controller has only `POST /`, `POST /partnerships` and GETs. There is no PATCH, PUT or DELETE. The 3 QA-NEG junk records on kashyap.patel still can't be removed through the app. | BE `certifications.controller.ts` |
| **013** Catalogue: Employees ≠ Active + Expired | Unchanged (no backend change). It also still includes the 3 QA-NEG records. | |
| **033** No message for a title over 200 characters | Unchanged. I572 did not touch the title field or when the form shows messages. | |
| **034** Wrong file type ignored silently | Unchanged. | |
| **050** bare "N/A" designation; **051** "1 employees" | Unchanged (no New Joiners or holders-label commits). | |
| "Expire Date can't be edited" (product question in the 2026-10-14 findings) | **Now on purpose.** I572 locks it by design (comment: "The field is read-only for a fixed-validity partnership, so it always follows issue date + validity"). Reword it as "by design per SI4-I572". It is no longer an open question. Renewals that end earlier than the validity still can't be recorded. | |

### Stale or likely-affected tests and docs in our repo

There are **no broken locators**. The suite was written against the post-I572 build. Items to update:

| File:line | What | Action |
|---|---|---|
| `tests/e2e/employee/certifications/negative.spec.ts:4-9` | The header says 037–039 "stay manual". That is still true, because the backend did not change. | No change. Optionally note "038 now UI-blocked by SI4-I572, API still open". |
| `tests/e2e/employee/certifications/negative.spec.ts:19-31` (TC-EMPCRT-030) | Still valid. It only covers scheme errors (`notaurl`, `ftp://`, `javascript:`). The new host rule and the check-while-typing behaviour are untested. | Extend it, or add TC-053/054. |
| `tests/e2e/employee/certifications/functional.spec.ts:166-178` (TC-EMPCRT-024) | Valid. It checks auto-fill and `toBeDisabled`. It does not check that changing the issue date **again** recalculates the expiry date (new I572 behaviour: before, the date was only filled while empty). | Add TC-056. |
| `tests/page-objects/employee/certifications.page.ts:14-15` | The comment ("auto-filled… read-only") matches I572. | No change. |
| `docs/findings/2026-10-14-certifications-test-findings.md` ("Gaps" table, last row) | Lists the locked expiry date as an open product question. | Mark it as by design per SI4-I572. |
| `tests/e2e/employee/working-location/security.spec.ts:12` | "No … Login-As account exists, so those rows are manual." Once SI4-T1525 is deployed, the PMO account (`pmoPage`) can Login As any non-admin user. | Automate TC-EMPWLC-088..091 after the deploy. |
| `tests/e2e/employee/working-location/functional.spec.ts:226` (TC-EMPWLC-010 Past Allocations tab) | Fails. The code confirms this is **product behaviour, not a test bug**: `ProjectEmployeesTable.tsx:94` `showWorkingLocation = ability.can(READ, WORKING_LOCATION) && !showExitFeedback`, and `showExitFeedback` is true on the Past tab. | Keep. It is an FRD §3.3 defect. |
| `tests/e2e/employee/working-location/functional.spec.ts:197` (project column follows the time range) | Fails. The code confirms it: `ProjectEmployeesTable.tsx:206-211` passes no `timeFrame` to `WorkingLocationProvider` and hardcodes `canViewOverall={false}`, so the column always asks for the 90-day window. | Keep. It is an FRD §3.3/§5.5 defect. |
| `tests/e2e/employee/working-location/functional.spec.ts:234` (CSM popup Profile link) | The popup always links to `ROUTES.EMPLOYEE_DETAIL` (`WorkingLocationBreakdown.tsx:44`), whatever the viewer's access to that page. | Keep. |
| `tests/e2e/employee/working-location/boundary.spec.ts:32, :52` (window rows / department splits add to 100%) | `workingLocation.utils.ts:87` rounds WFO and WFH separately (`Math.round`), so 99% or 101% totals can happen. | Keep. Real display defect. |
| `tests/e2e/employee/working-location/functional.spec.ts:186-246` and `smoke.spec.ts:32` (CSM project table) | SI4-T1526 moves dormant unallocated loggers from Active to Past. "First cell"/first-row picks may land on a different person. | Re-run. Expect data drift, not a broken locator. |

---

## 3. New behaviour with no test yet: draft cases

Highest IDs in use: **TC-EMPCRT-052** (gaps 006–009 and 046–049 are unused) and **TC-EMPWLC-087**. The numbers below continue from those.

### Certifications (SI4-I572)

| ID | Tag | Title | Steps | Expected |
|---|---|---|---|---|
| TC-EMPCRT-053 | @negative | Proof link error appears while typing, without blur | Open the drawer and type `notaurl` in Proof link. Do not tab out. | "Enter a valid URL starting with http:// or https://." is visible straight away. Typing `https://example.com/x` clears it. Save is never pressed. |
| TC-EMPCRT-054 | @negative @boundary | Proof link host must have a dot and a letter TLD, or be a valid IPv4 address | Enter each of `https://dddddd`, `https://localhost/x`, `http://999.1.1.1/x`, `https://a.b1`, then each of `https://credly.com/b/1`, `https://in.credly.com/x`, `http://10.0.0.1/x`. | The first four show the invalid-URL message and keep Save disabled. The last three are accepted. Note for product: private IPs pass in the UI. |
| TC-EMPCRT-055 | @negative | Clearing a bad proof link removes the old URL error | Type `notaurl` (error shows), then clear the field. | The invalid-URL message disappears. Record what replaces it: "Add a verification link or upload the certificate." is expected because of the shared proof-required rule. It should not stay blank with Save enabled. |
| TC-EMPCRT-056 | @functional | Expire Date follows the issue date every time (not only the first fill) | Partnership 1 (12 months). Pick an issue date of today−10, then change it to today−40. | Expire Date first shows (today−10)+12 months, then (today−40)+12 months. The field stays disabled. |
| TC-EMPCRT-057 | @functional | Switching between never-expires and standard partnerships resets Expire Date | Pick an issue date. Select AWS (3y), then Claude (never), then Partnership 1 (12m). | Shows +3y, then empty and disabled with "This partnership never expires.", then +12m. There is no leftover value from the earlier partnership. |
| TC-EMPCRT-058 | @boundary | Month-end and leap-day expiry calculation | Needs a monthly-validity partnership, or Partnership 1 with Feb 29 as the issue date. Issue dates 2026-01-31 (1-month partnership) and 2024-02-29 (12 months). | date-fns clamps to the month end: 2026-02-28 and 2025-02-28. The API accepts the same value (UI and API agree). |
| TC-EMPCRT-059 | @negative | Add Partnership website uses the same host rule | Admin → Organisation Level → Add Partnership. Website = `https://dddddd`. Do not save. | Invalid-URL message. `https://aws.amazon.com` is accepted. |
| TC-EMPCRT-060 | @functional (profile) | LinkedIn field info tooltip | Profile → Edit, then hover or focus the info icon next to "LinkedIn Profile URL". | Tooltip "Example: https://www.linkedin.com/in/your-name". The icon has an `aria-label` and is reachable with the keyboard (`tabIndex=0`). Better placed in the profile (EMPDET) suite. |
| TC-EMPCRT-061 | @functional (profile, SI4-I571) | Country-subdomain LinkedIn URL is accepted and normalised | Edit the profile with `in.linkedin.com/in/qa-test`. Do not keep the change, or restore the original value. | Accepted. It is shown or saved as `https://www.linkedin.com/in/qa-test`. Better placed in the EMPDET suite. |
| TC-EMPCRT-062 | @security | PMO "Login as" an Employee: Certifications follow the impersonated user | PMO → Login as kashyap.patel → Certifications. Call `/certifications` and `/certifications/organisation`. | Only My Certificate is shown. The API returns only kashyap's own certificates, and New Joiners and Program Owners return 403. Covers T1525 and scope together. |

Still not automatable because there is no delete (keep manual): 037, 038, 039. When the backend adds the checks, change them to "expect 400", using payloads that are rejected so no record is created.

### Working Location

| ID | Tag | Title | Steps | Expected |
|---|---|---|---|---|
| TC-EMPWLC-088 | @security | PMO Login As a plain Employee: WL becomes self-only | PMO → Login as an Employee → own profile, `/working-location`, and `GET /working-location/list?employeeIds=<other>`. | The own card shows Overall. The dashboard is denied (no `view_overview`). Another employee's id returns 404 or is omitted. |
| TC-EMPWLC-089 | @security | PMO Login As a TM: dashboard limited to the TM's departments | PMO → Login as tm account → `/working-location`. | The department rollup equals the TM's own `GET overview` (same as TC-060). It is not global. |
| TC-EMPWLC-090 | @security | PMO Login As a CSM/PM: project column has no Overall | PMO → Login as the CSM → project detail → popup. | Only 15/30/90 rows. The API `windows` has no Overall for project staff. |
| TC-EMPWLC-091 | @security | PMO cannot Login As an Admin | PMO → try Login as ceo. | 403 AUTH_022. The session does not change. (Shared with the Admin/Users suite.) |
| TC-EMPWLC-092 | @functional | Dashboard filters after reload or Back | Pick "Last 90 days", click a department, then reload. | Currently resets to the default window with no department: `useWorkingLocationOverviewFilters` keeps state in React only, not in the URL. Record this as a usability gap. Other modules (Certifications TC-016) keep filters in the URL. |
| TC-EMPWLC-093 | @functional | Department drill-down does not re-scope the KPIs or trend | Click a department row. | Only the Employees table filters (`GET /employees?departmentId`). The KPI row and trend stay company-wide, because `overview` has no `departmentId` parameter. Confirm this is the intended UX. |
| TC-EMPWLC-094 | @security | TM who is also an RM: reportees outside the TM's departments | Needs data: a TM with a direct report in a department they don't manage. | Per the code, only the broadest scope (DEPARTMENT) is applied, combined with self/PM/CSM but **not** TEAM. The out-of-department reportee is invisible. That may break FRD §4 (RM: own direct reports). |
| TC-EMPWLC-095 | @regression | Project table Active/Past split after SI4-T1526 | CSM project with a logger who has no assignment and no logs in the last 3 months. | The logger is under Past, not Active. The Active WL column count equals the Active rows that have WL data. |
| TC-EMPWLC-096 | @functional | Unassigned logger rows on the PM page show a clear WL state | CSM project where an Active row has logged time but no assignment. | The SELF scope only covers `assignedProjects`, so the cell gets no data. It should read "No record", not an error or "unavailable". |

---

## 4. What the code confirms for Certifications (unchanged, for reference)

- Backend scope (`certification-scope.strategy.ts`): SELF = own; TEAM = own + managed-team subtree; DEPARTMENT = own + `employee_dept_access`; ALL = PMO, Admin, Program Owner.
- Frontend Organisation tab (`useCertificationAccess.ts:22`): Admin, people with the create-partnership permission (Program Owners), and holders of the `rm` or `tm` role (`MANAGER_ROLE_NAMES = ['rm','tm']`). **PMO, EM and a plain PM are not included.** Our TC-EMPCRT-041 passes for "PM" only because the PM test account (hardik.trivedi) is also an RM. EM may hold API scope without the tab. Check this alongside 045.

## 5. Remaining Working Location FRD gaps visible in code

| FRD ref | Requirement | What the code does | Status |
|---|---|---|---|
| §3.3, Appendix A screen 1 | The project column appears on **Active and Past** tabs | `ProjectEmployeesTable.tsx:94` hides it on the Past tab (`!showExitFeedback`) | **Gap** (our test fails) |
| §3.3, §5.5 | The project column follows the page's "Last 15 days" dropdown | No `timeFrame` is passed, so it is fixed at 90 days (`WorkingLocationProvider` fallback, `canViewOverall={false}` hardcoded) | **Gap** (our test fails). Also: Admin/PMO viewing a project page never get Overall either. |
| §4 PM/CSM scope | Active **and** Past allocation members | The BE SELF scope covers any `assignedProjects` row (not filtered by date). That matches the FRD. But the FE never shows the column on Past, so this is reachable only through the API. | Partial |
| §4 RM / DM | Direct reports; DM = PMs reporting to them | BE RM/DM use TEAM = full management subtree (`resolveManagedTeamIds`), which is wider than "direct reports". Only the broadest scope is applied, so TM+RM or EM+RM lose TEAM members outside their departments. | Gap or ambiguity, needs data (TC-094) |
| §4 TM/EM dashboard | Prototype: TM/EM see only their departments, **shown separately with no combined rollup** | BE `overview` builds **combined** company-style KPIs over every department in scope | Deviation from the prototype. The FRD text itself is silent. |
| §3.4 / Appendix A screen 4 | Department row click opens the **Employee List** pre-filtered | It filters the dashboard's own Employees table instead (known since 2026-10-14) | Deviation (already in our notes) |
| Admin/PMO department filter | (Requested) department filter on the dashboard | There is no department dropdown. You can only drill down by clicking a row. The `overview` DTO accepts only `window` and `wfoThresholdPercentage` (0–100), so KPIs and trend can't be filtered by department. Filter state is not in the URL. | **Gap** if a department filter is a requirement |
| §2.1, §5.3 "Data as of" / refresh date and time | "Data as of `<As Of Date>`" | BE returns `asOfDate` as a **date only** (`toISOString().slice(0,10)`). The FE shows "Data as of {date}" with the info text "refreshed once a day". The column info says "refreshed daily at **5:00 AM IST**" (the sync cron is `EVERY_5AM` IST; the FRD says the source refreshes at 4:00 AM and the job runs about 5:00). The app never shows a **time** or the last sync timestamp. | **Gap** if a date and time is needed. There is no field to show it. |
| §3.1 | A 5th **tab** on the profile | A card or section inside the profile (`EmployeeSkillsAndDetailsSection.tsx:63`) | Deviation (known) |
| §3.2 | The list window dropdown is extended with **Overall** | BE `timeFrame` accepts `all`, which maps to Overall. Sorting is withheld for SELF-scoped viewers (`canSortWorkingLocation`). | Implemented |
| §6 "Login As follows the impersonated user's access" | — | Testable now through PMO Login As (SI4-T1525). Admin targets are blocked for PMO. | Test it now (TC-088..091) |
| §6 "No source row: omitted entirely" | — | The FE shows "No record" (`BLANK`) or "No Data Found", not omission. The dev snapshot has `employeesWithNoData = 0`, so it can't be checked on live data. | Unverified |
| §5 rounding (implicit: split adds up to 100%) | — | WFO and WFH are rounded separately, so totals of 99 or 101 can appear | Display defect (our boundary tests fail) |
