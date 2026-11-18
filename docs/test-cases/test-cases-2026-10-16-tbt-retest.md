# Test Cases

**Total test cases:** 54  
**Modules covered:** Admin — Login as User, Allocation Tickets — RM and DM visibility, Employee — Ratings & Project Feedback, Employee — Working Location, Frontend PR Review Skills, Help — User Guide & Releases, Projects — Past Allocation  
**Source:** `reports/test-cases/cases-2026-10-16-TBT-retest.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By module

| Module | Count | Share |
| --- | ---: | ---: |
| Admin — Login as User | 10 | 18.5% |
| Allocation Tickets — RM and DM visibility | 7 | 13.0% |
| Employee — Ratings & Project Feedback | 9 | 16.7% |
| Employee — Working Location | 9 | 16.7% |
| Frontend PR Review Skills | 6 | 11.1% |
| Help — User Guide & Releases | 6 | 11.1% |
| Projects — Past Allocation | 7 | 13.0% |

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 30 | 55.6% |
| security | 10 | 18.5% |
| regression | 6 | 11.1% |
| negative | 5 | 9.3% |
| boundary | 3 | 5.6% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 21 | 38.9% |
| medium | 19 | 35.2% |
| low | 10 | 18.5% |
| critical | 4 | 7.4% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| high | 21 | 38.9% |
| medium | 19 | 35.2% |
| low | 10 | 18.5% |
| critical | 4 | 7.4% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| manual-exploratory | 54 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| live+code-review | 54 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| No | 54 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @tbt-retest | 54 | 100.0% |
| @functional | 30 | 55.6% |
| @security | 10 | 18.5% |
| @regression | 6 | 11.1% |
| @negative | 5 | 9.3% |
| @boundary | 3 | 5.6% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-ADMLGA-053](#tc-admlga-053-admin-and-pmo-see-login-as-in-the-employee-side-panel-and-on-profiles) | Admin and PMO see "Login as" in the Employee side panel and on profiles | Admin — Login as User | functional | high |
| [TC-ADMLGA-054](#tc-admlga-054-pm-tm-em-employee-and-csm-never-see-login-as) | PM, TM, EM, Employee and CSM never see "Login as" | Admin — Login as User | negative | high |
| [TC-ADMLGA-055](#tc-admlga-055-login-as-api-rejects-pm-tm-em-employee-and-csm) | Login-as API rejects PM, TM, EM, Employee and CSM | Admin — Login as User | security | critical |
| [TC-ADMLGA-056](#tc-admlga-056-cannot-log-in-as-yourself) | Cannot log in as yourself | Admin — Login as User | negative | medium |
| [TC-ADMLGA-057](#tc-admlga-057-pmo-cannot-log-in-as-an-admin) | PMO cannot log in as an Admin | Admin — Login as User | security | critical |
| [TC-ADMLGA-058](#tc-admlga-058-confirm-dialog-then-banner-with-return-to-pmo-admin) | Confirm dialog, then banner with "Return to PMO/Admin" | Admin — Login as User | functional | high |
| [TC-ADMLGA-059](#tc-admlga-059-starting-session-revoked-second-exit-and-nested-login-refused) | Starting session revoked; second exit and nested login refused | Admin — Login as User | security | high |
| [TC-ADMLGA-060](#tc-admlga-060-past-employee-and-unknown-ids-cannot-be-impersonated) | Past employee and unknown ids cannot be impersonated | Admin — Login as User | negative | medium |
| [TC-ADMLGA-061](#tc-admlga-061-login-as-button-is-hidden-while-already-impersonating) | "Login as" button is hidden while already impersonating | Admin — Login as User | functional | low |
| [TC-ADMLGA-062](#tc-admlga-062-an-audit-record-is-written-for-each-login-as) | An audit record is written for each Login as | Admin — Login as User | security | medium |
| [TC-PASTAL-026](#tc-pastal-026-unallocated-logger-with-no-hours-in-last-3-months-moves-to-past) | Unallocated logger with no hours in last 3 months moves to Past | Projects — Past Allocation | functional | high |
| [TC-PASTAL-027](#tc-pastal-027-person-returns-to-active-after-logging-hours-again) | Person returns to Active after logging hours again | Projects — Past Allocation | functional | high |
| [TC-PASTAL-028](#tc-pastal-028-allocated-employees-with-no-logged-hours-for-3-months-also-move-to-past) | Allocated employees with no logged hours for 3+ months also move to Past | Projects — Past Allocation | functional | high |
| [TC-PASTAL-029](#tc-pastal-029-ended-but-not-archived-allocation-does-not-block-the-move) | Ended-but-not-archived allocation does not block the move | Projects — Past Allocation | boundary | medium |
| [TC-PASTAL-030](#tc-pastal-030-projects-list-keeps-showing-a-person-when-last-6-months-all-time-is-selected) | Projects list keeps showing a person when "Last 6 months" / "All time" is selected | Projects — Past Allocation | regression | medium |
| [TC-PASTAL-031](#tc-pastal-031-3-month-window-is-exactly-3-calendar-months-at-month-ends) | 3-month window is exactly 3 calendar months at month ends | Projects — Past Allocation | boundary | low |
| [TC-PASTAL-032](#tc-pastal-032-live-dev-data-matches-the-rule) | Live dev data matches the rule | Projects — Past Allocation | functional | medium |
| [TC-EMPWLC-097](#tc-empwlc-097-dashboard-open-to-admin-pmo-tm-em-with-correct-scope) | Dashboard open to Admin/PMO/TM/EM with correct scope | Employee — Working Location | functional | high |
| [TC-EMPWLC-098](#tc-empwlc-098-dashboard-blocked-for-pm-csm-and-employee) | Dashboard blocked for PM, CSM and Employee | Employee — Working Location | security | high |
| [TC-EMPWLC-099](#tc-empwlc-099-profile-card-shows-for-all-7-roles-own-scope-api-only) | Profile card shows for all 7 roles; own-scope API only | Employee — Working Location | security | high |
| [TC-EMPWLC-100](#tc-empwlc-100-hover-card-profile-link-hidden-for-csm-column-width-and-card-position-fixed) | Hover card "Profile" link hidden for CSM; column width and card position fixed | Employee — Working Location | regression | medium |
| [TC-EMPWLC-101](#tc-empwlc-101-working-location-column-shows-on-the-project-past-tab) | Working Location column shows on the project Past tab | Employee — Working Location | functional | medium |
| [TC-EMPWLC-102](#tc-empwlc-102-project-column-follows-the-time-range-dropdown) | Project column follows the time-range dropdown | Employee — Working Location | functional | medium |
| [TC-EMPWLC-103](#tc-empwlc-103-wfo-wfh-percentages-add-up-to-100) | WFO + WFH percentages add up to 100% | Employee — Working Location | boundary | medium |
| [TC-EMPWLC-104](#tc-empwlc-104-dashboard-filters-survive-reload-department-filter-exists-data-as-of-has-a-time) | Dashboard filters survive reload; department filter exists; "Data as of" has a time | Employee — Working Location | functional | low |
| [TC-EMPWLC-105](#tc-empwlc-105-pm-sees-no-profile-link-in-the-hover-card) | PM sees no Profile link in the hover card | Employee — Working Location | regression | low |
| [TC-HELP-039](#tc-help-039-what-s-new-and-help-pages-load-filtered-by-role) | What's New and Help pages load, filtered by role | Help — User Guide & Releases | functional | high |
| [TC-HELP-040](#tc-help-040-sidebar-new-badges-and-bell-dot-appear-and-clear) | Sidebar "new" badges and bell dot appear and clear | Help — User Guide & Releases | functional | medium |
| [TC-HELP-041](#tc-help-041-deep-links-internal-links-mobile-390px-keyboard-console) | Deep links, internal links, mobile 390px, keyboard, console | Help — User Guide & Releases | regression | medium |
| [TC-HELP-042](#tc-help-042-latest-live-release-6-4-2-is-shown-as-current) | Latest live release (6.4.2) is shown as Current | Help — User Guide & Releases | functional | high |
| [TC-HELP-043](#tc-help-043-shipped-features-have-release-notes-and-a-help-guide) | Shipped features have release notes and a help guide | Help — User Guide & Releases | functional | medium |
| [TC-HELP-044](#tc-help-044-basic-employees-get-badges-for-their-own-pages) | Basic employees get badges for their own pages | Help — User Guide & Releases | functional | low |
| [TC-EMPRTF-204](#tc-emprtf-204-standalone-ratings-table-lists-each-user-with-per-project-detail) | Standalone ratings table lists each user with per-project detail | Employee — Ratings & Project Feedback | functional | high |
| [TC-EMPRTF-205](#tc-emprtf-205-search-sort-and-filters-return-correct-rows) | Search, sort and filters return correct rows | Employee — Ratings & Project Feedback | functional | medium |
| [TC-EMPRTF-206](#tc-emprtf-206-table-matches-detail-page-and-api) | Table matches detail page and API | Employee — Ratings & Project Feedback | functional | high |
| [TC-EMPRTF-207](#tc-emprtf-207-role-visibility-of-others-feedback) | Role visibility of others' feedback | Employee — Ratings & Project Feedback | security | critical |
| [TC-EMPRTF-208](#tc-emprtf-208-only-admin-can-edit-feedback) | Only Admin can edit feedback | Employee — Ratings & Project Feedback | security | high |
| [TC-EMPRTF-209](#tc-emprtf-209-user-profile-shows-the-user-s-project-feedback) | User Profile shows the user's project feedback | Employee — Ratings & Project Feedback | functional | high |
| [TC-EMPRTF-210](#tc-emprtf-210-missing-designation-shows-a-readable-word) | Missing designation shows a readable word | Employee — Ratings & Project Feedback | regression | low |
| [TC-EMPRTF-211](#tc-emprtf-211-search-treats-and-literally) | Search treats "_" and "%" literally | Employee — Ratings & Project Feedback | negative | low |
| [TC-EMPRTF-212](#tc-emprtf-212-pagination) | Pagination | Employee — Ratings & Project Feedback | functional | low |
| [TC-ALCTKT-192](#tc-alctkt-192-reportee-ticket-role-exists-and-is-assignable) | Reportee-ticket role exists and is assignable | Allocation Tickets — RM and DM visibility | functional | medium |
| [TC-ALCTKT-193](#tc-alctkt-193-dm-sees-tickets-on-direct-reportees-projects) | DM sees tickets on direct reportees' projects | Allocation Tickets — RM and DM visibility | functional | high |
| [TC-ALCTKT-194](#tc-alctkt-194-cannot-open-other-teams-tickets-by-id) | Cannot open other teams' tickets by id | Allocation Tickets — RM and DM visibility | security | critical |
| [TC-ALCTKT-195](#tc-alctkt-195-dm-is-view-only) | DM is view-only | Allocation Tickets — RM and DM visibility | security | high |
| [TC-ALCTKT-196](#tc-alctkt-196-a-reporting-manager-rm-role-sees-reportees-tickets) | A Reporting Manager (RM role) sees reportees' tickets | Allocation Tickets — RM and DM visibility | functional | high |
| [TC-ALCTKT-197](#tc-alctkt-197-tickets-for-a-reportee-on-another-owner-s-project-are-visible) | Tickets FOR a reportee on another owner's project are visible | Allocation Tickets — RM and DM visibility | functional | medium |
| [TC-ALCTKT-198](#tc-alctkt-198-no-access-ticket-shows-a-clear-message) | No-access ticket shows a clear message | Allocation Tickets — RM and DM visibility | negative | low |
| [TC-PRSKL-013](#tc-prskl-013-skill-paths-helpers-and-config-match-the-frontend-repo) | Skill paths, helpers and config match the frontend repo | Frontend PR Review Skills | functional | medium |
| [TC-PRSKL-014](#tc-prskl-014-review-diffs-against-the-pr-target-branch) | Review diffs against the PR target branch | Frontend PR Review Skills | functional | high |
| [TC-PRSKL-015](#tc-prskl-015-hardcoded-string-greps-catch-real-violations) | Hardcoded-string greps catch real violations | Frontend PR Review Skills | functional | high |
| [TC-PRSKL-016](#tc-prskl-016-test-location-rule-matches-the-repo) | Test location rule matches the repo | Frontend PR Review Skills | functional | medium |
| [TC-PRSKL-017](#tc-prskl-017-route-list-includes-all-route-files) | Route list includes all route files | Frontend PR Review Skills | regression | low |
| [TC-PRSKL-018](#tc-prskl-018-skill-requires-test-locators-on-key-elements) | Skill requires test locators on key elements | Frontend PR Review Skills | functional | medium |

---

## Admin — Login as User

10 test cases.

### Functional (3)

#### TC-ADMLGA-053 — Admin and PMO see "Login as" in the Employee side panel and on profiles

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1525 · SI4-T1531 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | PMO / Admin / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1525 · SI4-T1531 |
| **Sub Module** | PMO/Admin Login as + Employee slider button |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Log in as PMO, open Employee list
2. Open an employee side panel
3. Open the same employee profile
4. Repeat as Admin

**Expected**

The "Login as <name>" button is visible for Admin and PMO in both places

#### TC-ADMLGA-058 — Confirm dialog, then banner with "Return to PMO/Admin"

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1525 · SI4-T1531 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | PMO / Admin / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1525 · SI4-T1531 |
| **Sub Module** | PMO/Admin Login as + Employee slider button |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As PMO click Login as on an employee
2. Confirm the dialog
3. Reload the page
4. Click Return

**Expected**

Lands on /profile with banner; banner survives reload; Return restores own account

#### TC-ADMLGA-061 — "Login as" button is hidden while already impersonating

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1525 · SI4-T1531 |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | PMO / Admin / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1525 · SI4-T1531 |
| **Sub Module** | PMO/Admin Login as + Employee slider button |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As Admin, Login as a PMO (e.g. Bhumi Chauhan)
2. Open any employee

**Expected**

No "Login as" button while impersonating

### Negative (3)

#### TC-ADMLGA-054 — PM, TM, EM, Employee and CSM never see "Login as"

| Field | Value |
| --- | --- |
| **Tags** | @negative, @tbt-retest |
| **Requirement Ref** | SI4-T1525 · SI4-T1531 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | PMO / Admin / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1525 · SI4-T1531 |
| **Sub Module** | PMO/Admin Login as + Employee slider button |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Log in as each of PM, TM, EM, Employee, CSM
2. Open an employee side panel / profile in scope

**Expected**

No "Login as" button for these roles

#### TC-ADMLGA-056 — Cannot log in as yourself

| Field | Value |
| --- | --- |
| **Tags** | @negative, @tbt-retest |
| **Requirement Ref** | SI4-T1525 · SI4-T1531 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | PMO / Admin / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1525 · SI4-T1531 |
| **Sub Module** | PMO/Admin Login as + Employee slider button |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As PMO open your own profile
2. Call the endpoint with your own id

**Expected**

No button on own profile; API refuses

#### TC-ADMLGA-060 — Past employee and unknown ids cannot be impersonated

| Field | Value |
| --- | --- |
| **Tags** | @negative, @tbt-retest |
| **Requirement Ref** | SI4-T1525 · SI4-T1531 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | PMO / Admin / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1525 · SI4-T1531 |
| **Sub Module** | PMO/Admin Login as + Employee slider button |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Open a past employee panel
2. Call the endpoint with past, unknown and malformed ids

**Expected**

No button; API 404/400

### Security (4)

#### TC-ADMLGA-055 — Login-as API rejects PM, TM, EM, Employee and CSM

| Field | Value |
| --- | --- |
| **Tags** | @security, @tbt-retest |
| **Requirement Ref** | SI4-T1525 · SI4-T1531 |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | PMO / Admin / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1525 · SI4-T1531 |
| **Sub Module** | PMO/Admin Login as + Employee slider button |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. With each non-privileged role token, call the login-as endpoint on the API origin directly

**Expected**

403 for every role; caller session unchanged

#### TC-ADMLGA-057 — PMO cannot log in as an Admin

| Field | Value |
| --- | --- |
| **Tags** | @security, @tbt-retest |
| **Requirement Ref** | SI4-T1525 · SI4-T1531 |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | PMO / Admin / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1525 · SI4-T1531 |
| **Sub Module** | PMO/Admin Login as + Employee slider button |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As PMO open the CEO profile and click Login as
2. Call the endpoint for the CTO

**Expected**

Refused with a clear message; PMO stays logged in

#### TC-ADMLGA-059 — Starting session revoked; second exit and nested login refused

| Field | Value |
| --- | --- |
| **Tags** | @security, @tbt-retest |
| **Requirement Ref** | SI4-T1525 · SI4-T1531 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | PMO / Admin / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1525 · SI4-T1531 |
| **Sub Module** | PMO/Admin Login as + Employee slider button |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Log in as a user
2. Reuse the old PMO token
3. Try Login as again while impersonating
4. Exit twice

**Expected**

Old token 401; nested attempt 403; second exit 400

#### TC-ADMLGA-062 — An audit record is written for each Login as

| Field | Value |
| --- | --- |
| **Tags** | @security, @tbt-retest |
| **Requirement Ref** | SI4-T1525 · SI4-T1531 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | PMO / Admin / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1525 · SI4-T1531 |
| **Sub Module** | PMO/Admin Login as + Employee slider button |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Perform a Login as
2. Look for the audit entry

**Expected**

Audit entry with who, whom and when

---

## Allocation Tickets — RM and DM visibility

7 test cases.

### Functional (4)

#### TC-ALCTKT-192 — Reportee-ticket role exists and is assignable

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1380 (requirement: RM role) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | DM (hardik.trivedi) / pure RM (Nayan Kotak) / Admin |
| **Task Id** | SI4-T1380 (requirement: RM role) |
| **Sub Module** | Reportees' ticket visibility |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As Admin open Assign User Roles

**Expected**

Role listed and assignable

#### TC-ALCTKT-193 — DM sees tickets on direct reportees' projects

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1380 (requirement: RM role) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | DM (hardik.trivedi) / pure RM (Nayan Kotak) / Admin |
| **Task Id** | SI4-T1380 (requirement: RM role) |
| **Sub Module** | Reportees' ticket visibility |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Log in as hardik.trivedi (DM)
2. Open Requests Tracking

**Expected**

All tickets on reportees' projects visible

#### TC-ALCTKT-196 — A Reporting Manager (RM role) sees reportees' tickets

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1380 (requirement: RM role) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | DM (hardik.trivedi) / pure RM (Nayan Kotak) / Admin |
| **Task Id** | SI4-T1380 (requirement: RM role) |
| **Sub Module** | Reportees' ticket visibility |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Log in as pure RM Nayan Kotak (9 reportees)
2. Open tickets

**Expected**

Reportees' tickets visible

#### TC-ALCTKT-197 — Tickets FOR a reportee on another owner's project are visible

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1380 (requirement: RM role) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | DM (hardik.trivedi) / pure RM (Nayan Kotak) / Admin |
| **Task Id** | SI4-T1380 (requirement: RM role) |
| **Sub Module** | Reportees' ticket visibility |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As hardik open NA-0258 / DA-0067 (for reportee Kartik Hegde, project of Darshan Rathod)

**Expected**

Visible

### Negative (1)

#### TC-ALCTKT-198 — No-access ticket shows a clear message

| Field | Value |
| --- | --- |
| **Tags** | @negative, @tbt-retest |
| **Requirement Ref** | SI4-T1380 (requirement: RM role) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | DM (hardik.trivedi) / pure RM (Nayan Kotak) / Admin |
| **Task Id** | SI4-T1380 (requirement: RM role) |
| **Sub Module** | Reportees' ticket visibility |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As DM open an out-of-scope ticket URL

**Expected**

Not found / no access message

### Security (2)

#### TC-ALCTKT-194 — Cannot open other teams' tickets by id

| Field | Value |
| --- | --- |
| **Tags** | @security, @tbt-retest |
| **Requirement Ref** | SI4-T1380 (requirement: RM role) |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | DM (hardik.trivedi) / pure RM (Nayan Kotak) / Admin |
| **Task Id** | SI4-T1380 (requirement: RM role) |
| **Sub Module** | Reportees' ticket visibility |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As DM fetch 5 out-of-scope tickets by id

**Expected**

404 for each

#### TC-ALCTKT-195 — DM is view-only

| Field | Value |
| --- | --- |
| **Tags** | @security, @tbt-retest |
| **Requirement Ref** | SI4-T1380 (requirement: RM role) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | DM (hardik.trivedi) / pure RM (Nayan Kotak) / Admin |
| **Task Id** | SI4-T1380 (requirement: RM role) |
| **Sub Module** | Reportees' ticket visibility |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As DM try approve, reject, close, edit, cancel via API
2. Check detail page

**Expected**

All refused; no action buttons

---

## Employee — Ratings & Project Feedback

9 test cases.

### Functional (5)

#### TC-EMPRTF-204 — Standalone ratings table lists each user with per-project detail

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1407 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1407 |
| **Sub Module** | Project feedback per user (table + profile) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As Admin open /employee-ratings
2. Open a row

**Expected**

One row per employee; detail shows each project with ratings and feedback

#### TC-EMPRTF-205 — Search, sort and filters return correct rows

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1407 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1407 |
| **Sub Module** | Project feedback per user (table + profile) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Search by name
2. Sort each column
3. Apply department, project, rating range, rehire filters

**Expected**

Correct rows; invalid range rejected

#### TC-EMPRTF-206 — Table matches detail page and API

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1407 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1407 |
| **Sub Module** | Project feedback per user (table + profile) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Compare Diya, Zeel, Rachna, Nimisha in list, detail and API

**Expected**

Identical values

#### TC-EMPRTF-209 — User Profile shows the user's project feedback

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1407 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1407 |
| **Sub Module** | Project feedback per user (table + profile) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As Admin open Diya Nair's profile

**Expected**

Ratings & Feedback section with per-project feedback

#### TC-EMPRTF-212 — Pagination

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1407 |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1407 |
| **Sub Module** | Project feedback per user (table + profile) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Go to page 2

**Expected**

Second page loads

### Negative (1)

#### TC-EMPRTF-211 — Search treats "_" and "%" literally

| Field | Value |
| --- | --- |
| **Tags** | @negative, @tbt-retest |
| **Requirement Ref** | SI4-T1407 |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1407 |
| **Sub Module** | Project feedback per user (table + profile) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Search "_" then "%"

**Expected**

No matches

### Regression (1)

#### TC-EMPRTF-210 — Missing designation shows a readable word

| Field | Value |
| --- | --- |
| **Tags** | @regression, @tbt-retest |
| **Requirement Ref** | SI4-T1407 |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1407 |
| **Sub Module** | Project feedback per user (table + profile) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Open /employee-ratings
2. Look at Nimisha Bose's name chip

**Expected**

A word placeholder

### Security (2)

#### TC-EMPRTF-207 — Role visibility of others' feedback

| Field | Value |
| --- | --- |
| **Tags** | @security, @tbt-retest |
| **Requirement Ref** | SI4-T1407 |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1407 |
| **Sub Module** | Project feedback per user (table + profile) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Open the table and API as each role

**Expected**

Admin/PMO all; PM/TM/EM scoped; Employee/CSM blocked; no one sees feedback about themselves

#### TC-EMPRTF-208 — Only Admin can edit feedback

| Field | Value |
| --- | --- |
| **Tags** | @security, @tbt-retest |
| **Requirement Ref** | SI4-T1407 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO / PM / TM / EM / CSM / Employee |
| **Task Id** | SI4-T1407 |
| **Sub Module** | Project feedback per user (table + profile) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Edit a note as Admin and restore it
2. Try as PMO/PM via API

**Expected**

Admin can; others 403

---

## Employee — Working Location

9 test cases.

### Boundary (1)

#### TC-EMPWLC-103 — WFO + WFH percentages add up to 100%

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @tbt-retest |
| **Requirement Ref** | SI4-T1375 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | All 7 roles |
| **Task Id** | SI4-T1375 |
| **Sub Module** | Overview dashboard + profile card (retest) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Open dashboard
2. Find Ujjwal Bose (10.5 / 89.5)

**Expected**

Shows a pair adding to 100%

### Functional (4)

#### TC-EMPWLC-097 — Dashboard open to Admin/PMO/TM/EM with correct scope

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1375 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | All 7 roles |
| **Task Id** | SI4-T1375 |
| **Sub Module** | Overview dashboard + profile card (retest) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Open /working-location as each role

**Expected**

Loads; TM/EM see only their departments

#### TC-EMPWLC-101 — Working Location column shows on the project Past tab

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1375 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | All 7 roles |
| **Task Id** | SI4-T1375 |
| **Sub Module** | Overview dashboard + profile card (retest) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Open a project detail
2. Switch to the Past tab

**Expected**

Column present

#### TC-EMPWLC-102 — Project column follows the time-range dropdown

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1375 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | All 7 roles |
| **Task Id** | SI4-T1375 |
| **Sub Module** | Overview dashboard + profile card (retest) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. On a project, switch the time range to "All time"

**Expected**

Working location values reload for the range

#### TC-EMPWLC-104 — Dashboard filters survive reload; department filter exists; "Data as of" has a time

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1375 |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | All 7 roles |
| **Task Id** | SI4-T1375 |
| **Sub Module** | Overview dashboard + profile card (retest) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Set filters and reload
2. Look for department filter
3. Read "Data as of"

**Expected**

Filters kept in URL; department filter; date + time

### Regression (2)

#### TC-EMPWLC-100 — Hover card "Profile" link hidden for CSM; column width and card position fixed

| Field | Value |
| --- | --- |
| **Tags** | @regression, @tbt-retest |
| **Requirement Ref** | SI4-T1375 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | All 7 roles |
| **Task Id** | SI4-T1375 |
| **Sub Module** | Overview dashboard + profile card (retest) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As CSM hover a project Working Location cell
2. Check column width and card edge

**Expected**

No Profile link; column 160px; card stays on screen

#### TC-EMPWLC-105 — PM sees no Profile link in the hover card

| Field | Value |
| --- | --- |
| **Tags** | @regression, @tbt-retest |
| **Requirement Ref** | SI4-T1375 |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | All 7 roles |
| **Task Id** | SI4-T1375 |
| **Sub Module** | Overview dashboard + profile card (retest) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As a true PM, hover a Working Location cell

**Expected**

No Profile link

### Security (2)

#### TC-EMPWLC-098 — Dashboard blocked for PM, CSM and Employee

| Field | Value |
| --- | --- |
| **Tags** | @security, @tbt-retest |
| **Requirement Ref** | SI4-T1375 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | All 7 roles |
| **Task Id** | SI4-T1375 |
| **Sub Module** | Overview dashboard + profile card (retest) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Open /working-location as PM, CSM, Employee
2. Call the API

**Expected**

Redirect to /unauthorized; API 403; no nav link

#### TC-EMPWLC-099 — Profile card shows for all 7 roles; own-scope API only

| Field | Value |
| --- | --- |
| **Tags** | @security, @tbt-retest |
| **Requirement Ref** | SI4-T1375 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | All 7 roles |
| **Task Id** | SI4-T1375 |
| **Sub Module** | Overview dashboard + profile card (retest) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Open own profile as each role
2. As Employee/CSM fetch another employee record

**Expected**

Card visible; other records 404

---

## Frontend PR Review Skills

6 test cases.

### Functional (5)

#### TC-PRSKL-013 — Skill paths, helpers and config match the frontend repo

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1433 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Developer / QA using Claude Code |
| **Task Id** | SI4-T1433 |
| **Sub Module** | simerp-code-review skill accuracy |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Check every file path, symbol, tsconfig, Prettier, ESLint rule and coverage threshold the skill cites

**Expected**

All exist and match

#### TC-PRSKL-014 — Review diffs against the PR target branch

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1433 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Developer / QA using Claude Code |
| **Task Id** | SI4-T1433 |
| **Sub Module** | simerp-code-review skill accuracy |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Read SKILL.md step 1 and task-review.md:21

**Expected**

Diff against origin/development

#### TC-PRSKL-015 — Hardcoded-string greps catch real violations

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1433 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Developer / QA using Claude Code |
| **Task Id** | SI4-T1433 |
| **Sub Module** | simerp-code-review skill accuracy |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Run the skill's two greps
2. Compare with a broader search

**Expected**

Known violations found

#### TC-PRSKL-016 — Test location rule matches the repo

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1433 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Developer / QA using Claude Code |
| **Task Id** | SI4-T1433 |
| **Sub Module** | simerp-code-review skill accuracy |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Count test files in __tests__ vs next to source

**Expected**

Rule matches the code

#### TC-PRSKL-018 — Skill requires test locators on key elements

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1433 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Developer / QA using Claude Code |
| **Task Id** | SI4-T1433 |
| **Sub Module** | simerp-code-review skill accuracy |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Search skill for data-testid rules
2. Count data-testid in app code

**Expected**

Rule present

### Regression (1)

#### TC-PRSKL-017 — Route list includes all route files

| Field | Value |
| --- | --- |
| **Tags** | @regression, @tbt-retest |
| **Requirement Ref** | SI4-T1433 |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Developer / QA using Claude Code |
| **Task Id** | SI4-T1433 |
| **Sub Module** | simerp-code-review skill accuracy |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Compare skill route list with src/routes

**Expected**

All listed

---

## Help — User Guide & Releases

6 test cases.

### Functional (5)

#### TC-HELP-039 — What's New and Help pages load, filtered by role

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1459 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / Employee |
| **Task Id** | SI4-T1459 |
| **Sub Module** | What's New + Help & Support (POC) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Open /whats-new and /help as Admin and as Employee

**Expected**

Both load; content limited to what the role can use

#### TC-HELP-040 — Sidebar "new" badges and bell dot appear and clear

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1459 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / Employee |
| **Task Id** | SI4-T1459 |
| **Sub Module** | What's New + Help & Support (POC) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As Admin note badges
2. Open a badged page
3. Refresh

**Expected**

Badge clears and stays cleared

#### TC-HELP-042 — Latest live release (6.4.2) is shown as Current

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1459 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / Employee |
| **Task Id** | SI4-T1459 |
| **Sub Module** | What's New + Help & Support (POC) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Open /whats-new on dev 6.4.2
2. Tick "Preview planned release"

**Expected**

v6.4.2 is Current

#### TC-HELP-043 — Shipped features have release notes and a help guide

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1459 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / Employee |
| **Task Id** | SI4-T1459 |
| **Sub Module** | What's New + Help & Support (POC) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Search What's New and Help for Working Location and Certifications

**Expected**

Both documented

#### TC-HELP-044 — Basic employees get badges for their own pages

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1459 |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / Employee |
| **Task Id** | SI4-T1459 |
| **Sub Module** | What's New + Help & Support (POC) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. As Employee look for sidebar badges

**Expected**

Badge for My Profile / Dashboard changes

### Regression (1)

#### TC-HELP-041 — Deep links, internal links, mobile 390px, keyboard, console

| Field | Value |
| --- | --- |
| **Tags** | @regression, @tbt-retest |
| **Requirement Ref** | SI4-T1459 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / Employee |
| **Task Id** | SI4-T1459 |
| **Sub Module** | What's New + Help & Support (POC) |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Open /help?module=goals and refresh
2. Follow every guide link
3. Resize to 390px
4. Tab through filters/cards

**Expected**

All work, no errors

---

## Projects — Past Allocation

7 test cases.

### Boundary (2)

#### TC-PASTAL-029 — Ended-but-not-archived allocation does not block the move

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @tbt-retest |
| **Requirement Ref** | SI4-T1526 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO |
| **Task Id** | SI4-T1526 |
| **Sub Module** | Dormant unallocated loggers → Past |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Review allocation filter

**Expected**

An allocation whose end date has passed is treated as ended

#### TC-PASTAL-031 — 3-month window is exactly 3 calendar months at month ends

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @tbt-retest |
| **Requirement Ref** | SI4-T1526 |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO |
| **Task Id** | SI4-T1526 |
| **Sub Module** | Dormant unallocated loggers → Past |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Review monthsAgo(3) (zoho-timeframe.constant.ts) on 31 May

**Expected**

Window starts 28 Feb

### Functional (4)

#### TC-PASTAL-026 — Unallocated logger with no hours in last 3 months moves to Past

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1526 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO |
| **Task Id** | SI4-T1526 |
| **Sub Module** | Dormant unallocated loggers → Past |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Code review of buildDormantUnallocatedIds (pm-project-mapper.util.ts:107-115)
2. Run pm-projects unit tests

**Expected**

Person moves from Active to Past on the project detail

#### TC-PASTAL-027 — Person returns to Active after logging hours again

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1526 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO |
| **Task Id** | SI4-T1526 |
| **Sub Module** | Dormant unallocated loggers → Past |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Code review of the Zoho sync bucket rewrite (employee-logged-data.service.ts:112-113)

**Expected**

Back in Active on next page load after sync

#### TC-PASTAL-028 — Allocated employees with no logged hours for 3+ months also move to Past

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1526 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO |
| **Task Id** | SI4-T1526 |
| **Sub Module** | Dormant unallocated loggers → Past |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Review which employees qualify

**Expected**

Any employee with no logs for 3+ months moves to Past (task title)

#### TC-PASTAL-032 — Live dev data matches the rule

| Field | Value |
| --- | --- |
| **Tags** | @functional, @tbt-retest |
| **Requirement Ref** | SI4-T1526 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO |
| **Task Id** | SI4-T1526 |
| **Sub Module** | Dormant unallocated loggers → Past |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Open project detail Active/Past tabs on dev

**Expected**

People are in the right tab

### Regression (1)

#### TC-PASTAL-030 — Projects list keeps showing a person when "Last 6 months" / "All time" is selected

| Field | Value |
| --- | --- |
| **Tags** | @regression, @tbt-retest |
| **Requirement Ref** | SI4-T1526 |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | manual-exploratory |
| **Confidence** | live+code-review |
| **Role** | Admin / PMO |
| **Task Id** | SI4-T1526 |
| **Sub Module** | Dormant unallocated loggers → Past |

**Preconditions**

Dev env https://simerp-dev.simform.solutions (6.4.2); fresh per-role logins; tested 2026-10-16

**Steps**

1. Unallocated logger with hours 3–6 months ago
2. Open projects list
3. Choose "Last 6 months"

**Expected**

Person and their hours are listed
