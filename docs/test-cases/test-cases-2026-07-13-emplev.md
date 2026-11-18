# Leave & Compliance Details — Test Cases

**Total test cases:** 28  
**Modules covered:** Leave & Compliance Details  
**Source:** `reports/test-cases/cases-2026-07-13-EMPLEV.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 12 | 42.9% |
| boundary | 6 | 21.4% |
| security | 3 | 10.7% |
| negative | 2 | 7.1% |
| smoke | 2 | 7.1% |
| a11y | 1 | 3.6% |
| integration | 1 | 3.6% |
| regression | 1 | 3.6% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 13 | 46.4% |
| high | 12 | 42.9% |
| critical | 2 | 7.1% |
| low | 1 | 3.6% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| major | 15 | 53.6% |
| minor | 8 | 28.6% |
| critical | 5 | 17.9% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 28 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 24 | 85.7% |
| unverified-fallback | 3 | 10.7% |
| speculative | 1 | 3.6% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 19 | 67.9% |
| No | 9 | 32.1% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 13 | 46.4% |
| @boundary | 7 | 25.0% |
| @security | 4 | 14.3% |
| @negative | 2 | 7.1% |
| @regression | 2 | 7.1% |
| @smoke | 2 | 7.1% |
| @a11y | 1 | 3.6% |
| @needs-verification | 1 | 3.6% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPLEV-001](#tc-emplev-001-full-leave-compliance-details-list-renders-all-5-status-values-with-correctly-formatted-reason-date-days) | Full Leave & Compliance Details list renders all 5 Status values with correctly formatted Reason/Date/Days | Leave & Compliance Details | smoke | critical |
| [TC-EMPLEV-002](#tc-emplev-002-notice-period-and-pip-ongoing-scoped-views-correctly-filter-the-dataset-by-status) | Notice Period and PIP/Ongoing scoped views correctly filter the dataset by Status | Leave & Compliance Details | smoke | critical |
| [TC-EMPLEV-003](#tc-emplev-003-table-displays-status-reason-date-days-columns-verbatim) | Table displays Status / Reason / Date / Days columns verbatim | Leave & Compliance Details | functional | high |
| [TC-EMPLEV-004](#tc-emplev-004-status-values-include-the-5-distinct-entries-past-ongoing-upcoming-pip-np) | Status values include the 5 distinct entries: Past, Ongoing, Upcoming, PIP, NP | Leave & Compliance Details | functional | high |
| [TC-EMPLEV-005](#tc-emplev-005-reason-values-include-planned-maternity-learning-and-blank) | Reason values include Planned, Maternity, Learning, and blank/'-' | Leave & Compliance Details | functional | medium |
| [TC-EMPLEV-006](#tc-emplev-006-pip-ongoing-scoped-view-shows-only-ongoing-and-pip-rows) | PIP/Ongoing scoped view shows only Ongoing and PIP rows | Leave & Compliance Details | functional | high |
| [TC-EMPLEV-007](#tc-emplev-007-notice-period-scoped-view-shows-only-np-rows-with-reason-rendered-as) | Notice Period scoped view shows only NP rows with Reason rendered as '-' | Leave & Compliance Details | functional | high |
| [TC-EMPLEV-008](#tc-emplev-008-leave-compliance-details-and-employee-past-leaves-render-identical-columns-for-the-same-data) | 'Leave & Compliance Details' and 'Employee Past Leaves' render identical columns for the same data | Leave & Compliance Details | functional | medium |
| [TC-EMPLEV-009](#tc-emplev-009-pip-row-days-column-shows-a-countdown-format-e-g-33-days-left) | PIP row Days column shows a countdown format (e.g. '33 Days Left') | Leave & Compliance Details | functional | medium |
| [TC-EMPLEV-010](#tc-emplev-010-np-row-days-column-shows-a-countdown-format-e-g-60-days-left) | NP row Days column shows a countdown format (e.g. '60 Days Left') | Leave & Compliance Details | functional | medium |
| [TC-EMPLEV-011](#tc-emplev-011-past-ongoing-rows-days-column-shows-a-fixed-day-count-e-g-2-days) | Past/Ongoing rows Days column shows a fixed day count (e.g. '2 Days') | Leave & Compliance Details | functional | medium |
| [TC-EMPLEV-012](#tc-emplev-012-upcoming-row-with-a-long-duration-91-days-still-shows-the-correct-fixed-day-count) | Upcoming row with a long duration (91 Days) still shows the correct fixed day count | Leave & Compliance Details | functional | medium |
| [TC-EMPLEV-013](#tc-emplev-013-a-leave-record-s-status-consistently-drives-both-its-days-format-and-its-scoped-view-inclusion) | A leave record's Status consistently drives both its Days format and its scoped-view inclusion | Leave & Compliance Details | functional | high |
| [TC-EMPLEV-014](#tc-emplev-014-scoped-view-with-zero-matching-records-shows-an-empty-state-message) | Scoped view with zero matching records shows an empty-state message | Leave & Compliance Details | negative | medium |
| [TC-EMPLEV-015](#tc-emplev-015-a-user-attempts-to-view-leave-pip-notice-period-details-for-an-employee-outside-their-permitted-scope) | A user attempts to view Leave/PIP/Notice-period details for an employee outside their permitted scope | Leave & Compliance Details | negative | high |
| [TC-EMPLEV-016](#tc-emplev-016-notice-period-countdown-boundary-at-1-day-left-and-at-after-expiry) | Notice-period countdown boundary at 1 day left and at/after expiry | Leave & Compliance Details | boundary | high |
| [TC-EMPLEV-017](#tc-emplev-017-pip-countdown-reaching-0-transitions-to-a-defined-status-label) | PIP countdown reaching 0 transitions to a defined status/label | Leave & Compliance Details | boundary | high |
| [TC-EMPLEV-018](#tc-emplev-018-a-leave-row-with-a-blank-reason-renders-rather-than-blank-null-causing-a-crash) | A leave row with a blank/'-' Reason renders '-' rather than blank/null causing a crash | Leave & Compliance Details | boundary | medium |
| [TC-EMPLEV-019](#tc-emplev-019-leave-compliance-details-and-employee-past-leaves-do-not-silently-diverge-as-independent-data-sources) | 'Leave & Compliance Details' and 'Employee Past Leaves' do not silently diverge as independent data sources | Leave & Compliance Details | boundary | medium |
| [TC-EMPLEV-020](#tc-emplev-020-a-long-duration-leave-row-91-days-sorts-correctly-relative-to-short-2-day-entries) | A long-duration leave row (91 Days) sorts correctly relative to short 2-Day entries | Leave & Compliance Details | boundary | medium |
| [TC-EMPLEV-021](#tc-emplev-021-days-countdown-decrements-daily-and-transitions-to-an-expired-zero-state-at-day-0) | Days countdown decrements daily and transitions to an expired/zero state at day 0 | Leave & Compliance Details | boundary | medium |
| [TC-EMPLEV-022](#tc-emplev-022-status-reason-date-days-table-has-accessible-column-headers-status-color-coding-has-a-non-color-alternative) | Status/Reason/Date/Days table has accessible column headers; Status color-coding has a non-color alternative | Leave & Compliance Details | a11y | medium |
| [TC-EMPLEV-023](#tc-emplev-023-reporting-manager-cannot-view-leave-pip-np-data-outside-their-own-team) | Reporting Manager cannot view leave/PIP/NP data outside their own team | Leave & Compliance Details | security | high |
| [TC-EMPLEV-024](#tc-emplev-024-employee-cannot-view-others-leave-pip-np-data) | Employee cannot view others' leave/PIP/NP data | Leave & Compliance Details | security | high |
| [TC-EMPLEV-025](#tc-emplev-025-a-user-without-appropriate-role-scope-accesses-another-employee-s-notice-period-or-pip-leave-data) | A user without appropriate role/scope accesses another employee's Notice Period or PIP leave data | Leave & Compliance Details | security | high |
| [TC-EMPLEV-026](#tc-emplev-026-integration-leave-pip-np-views-share-chrome-with-the-employee-details-ratings-tabbed-shell) | Integration — Leave/PIP/NP views share chrome with the Employee Details/Ratings tabbed shell | Leave & Compliance Details | integration | high |
| [TC-EMPLEV-027](#tc-emplev-027-regression-shared-tabbed-shell-chrome-continues-to-function-correctly-for-the-leave-compliance-details-view) | Regression — shared tabbed-shell chrome continues to function correctly for the Leave & Compliance Details view | Leave & Compliance Details | regression | medium |
| [TC-EMPLEV-028](#tc-emplev-028-whether-leave-compliance-details-needs-its-own-dedicated-test-id-sub-feature-code) | Whether Leave & Compliance Details needs its own dedicated test-ID sub-feature code | Leave & Compliance Details | functional | low |

---

## Leave & Compliance Details

28 test cases.

### A11y (1)

#### TC-EMPLEV-022 — Status/Reason/Date/Days table has accessible column headers; Status color-coding has a non-color alternative

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | nfrRequirements.accessibility |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Inspect the table's column headers via the a11y tree
2. Check whether Status is conveyed via text/icon in addition to any color coding

**Expected**

Column headers are accessible (proper header semantics); Status is not conveyed by color alone

**Automation Hint**

Use @axe-core/playwright where installed; existence of a non-color Status alternative is unconfirmed in source.

### Boundary (6)

#### TC-EMPLEV-016 — Notice-period countdown boundary at 1 day left and at/after expiry

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: Notice-period countdown boundary |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); test data has an NP record at 1-day-left and one at/after expiry

**Steps**

1. Locate an NP record at 1 day left
2. Locate an NP record at/after expiry (0/negative days)

**Expected**

MANUAL — 1-day-left record shows a singular/plural-correct countdown; expired record shows a defined expired state, not a negative/blank value; exact expired-state copy unconfirmed in source

**Automation Hint**

MANUAL — requirement unclear: countdown-to-expiry display at day 0 not shown in source.

#### TC-EMPLEV-017 — PIP countdown reaching 0 transitions to a defined status/label

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: PIP countdown reaching 0 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); test data has a PIP record at day 0

**Steps**

1. Locate a PIP record whose countdown has reached 0

**Expected**

MANUAL — expected transition label/status not shown in source; verify against the live app

**Automation Hint**

MANUAL — requirement unclear: PIP countdown reaching 0 behaviour.

#### TC-EMPLEV-018 — A leave row with a blank/'-' Reason renders '-' rather than blank/null causing a crash

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: blank/'-' Reason |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); an NP record with no Reason exists

**Steps**

1. Locate an NP row with no Reason value

**Expected**

Reason column renders '-' cleanly, with no console/JS error

#### TC-EMPLEV-019 — 'Leave & Compliance Details' and 'Employee Past Leaves' do not silently diverge as independent data sources

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: two same-shaped screens — data source parity risk |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Update a leave record's status/date
2. Check both 'Leave & Compliance Details' and 'Employee Past Leaves' for the same employee

**Expected**

MANUAL/PARTIAL — both screens reflect the same update; confirm both map to the same API/data source before asserting parity in automation

**Automation Hint**

PARTIAL — data-source parity between the two screens is unconfirmed in source.

#### TC-EMPLEV-020 — A long-duration leave row (91 Days) sorts correctly relative to short 2-Day entries

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | edgeCase: long-duration row vs short entries |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Sort the list by Days ascending
2. Sort the list by Days descending

**Expected**

The 91-Day row sorts correctly relative to the 2-Day rows in both directions

**Automation Hint**

PARTIAL — assumes a sort-by-Days control exists; not explicitly confirmed in source.

#### TC-EMPLEV-021 — Days countdown decrements daily and transitions to an expired/zero state at day 0

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | validationRule: Days countdown async decrement |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Observe a PIP/NP record's Days value across two consecutive days (or via a time-travel/mock-date harness)

**Expected**

MANUAL/PARTIAL — Days value decrements by 1 daily and transitions to a defined expired/zero state at day 0; exact expired-state copy unconfirmed

**Automation Hint**

PARTIAL — requires a mocked/travel-able clock to assert daily decrement reliably.

### Functional (12)

#### TC-EMPLEV-003 — Table displays Status / Reason / Date / Days columns verbatim

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Leave & Compliance Details table columns |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate to Leave & Compliance Details

**Expected**

Column headers read exactly 'Status', 'Reason', 'Date', 'Days'

#### TC-EMPLEV-004 — Status values include the 5 distinct entries: Past, Ongoing, Upcoming, PIP, NP

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: 5 distinct Status values |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Load the full list
2. Enumerate distinct Status values present

**Expected**

Past, Ongoing, Upcoming, PIP, and NP all appear verbatim as Status values

#### TC-EMPLEV-005 — Reason values include Planned, Maternity, Learning, and blank/'-'

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Reason values |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Load the full list
2. Enumerate distinct Reason values present

**Expected**

Planned, Maternity, Learning and '-' all appear as Reason values where applicable

#### TC-EMPLEV-006 — PIP/Ongoing scoped view shows only Ongoing and PIP rows

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: PIP/Ongoing scoped view |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the PIP/Ongoing scoped view

**Expected**

Only Status=PIP or Status=Ongoing rows shown; no Past/Upcoming/NP rows leak in

#### TC-EMPLEV-007 — Notice Period scoped view shows only NP rows with Reason rendered as '-'

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Notice period scoped view |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the Notice Period scoped view

**Expected**

Only Status=NP rows shown; Reason column renders '-' for every row

#### TC-EMPLEV-008 — 'Leave & Compliance Details' and 'Employee Past Leaves' render identical columns for the same data

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: two differently-titled screens share identical columns |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Load 'Leave & Compliance Details'
2. Load 'Employee Past Leaves' for the same employee/team

**Expected**

Both screens share identical Status/Reason/Date/Days columns

#### TC-EMPLEV-009 — PIP row Days column shows a countdown format (e.g. '33 Days Left')

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Days countdown format for PIP |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate a PIP-status row

**Expected**

Days column shows the countdown format, e.g. '33 Days Left'

**Test Data**

- `days`: 33 Days Left

#### TC-EMPLEV-010 — NP row Days column shows a countdown format (e.g. '60 Days Left')

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Days countdown format for NP |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate an NP-status row

**Expected**

Days column shows the countdown format, e.g. '60 Days Left'

**Test Data**

- `days`: 60 Days Left

#### TC-EMPLEV-011 — Past/Ongoing rows Days column shows a fixed day count (e.g. '2 Days')

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Days fixed count for Past/Ongoing |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate a Past-status row and an Ongoing-status row

**Expected**

Both show a fixed day count (e.g. '2 Days'), not a countdown

**Test Data**

- `days`: 2 Days

#### TC-EMPLEV-012 — Upcoming row with a long duration (91 Days) still shows the correct fixed day count

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | AC: Days fixed count for long-duration Upcoming |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Locate the Upcoming/Maternity row spanning '13 May – 04 Jul'

**Expected**

Days column shows '91 Days' correctly, not truncated or miscalculated

**Test Data**

- `days`: 91 Days

#### TC-EMPLEV-013 — A leave record's Status consistently drives both its Days format and its scoped-view inclusion

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | BR: Status must consistently drive Days format and scoped-view inclusion (status-transition) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | speculative |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. For each Status value, verify the Days format matches the documented rule (fixed vs countdown)
2. Verify the record appears only in the scoped view(s) matching its Status

**Expected**

No record ever shows a mismatched Days format or appears in a scoped view its Status does not belong to

#### TC-EMPLEV-028 — Whether Leave & Compliance Details needs its own dedicated test-ID sub-feature code

| Field | Value |
| --- | --- |
| **Tags** | @functional, @needs-verification |
| **Requirement Ref** | unclear: dedicated sub-feature code |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | minor |
| **Provenance** | requirement-grounded |
| **Confidence** | unverified-fallback |

**Preconditions**

N/A — process clarification, not app behavior

**Steps**

1. Confirm with the QA lead whether Leave & Compliance Details should keep the ad-hoc EMPLEV code or be formally added to the nav sub-feature table

**Expected**

MANUAL — process/documentation clarification, not an app assertion

**Automation Hint**

MANUAL — requirement unclear: dedicated sub-feature code for Leave & Compliance Details (this run uses EMPLEV per override instruction).

### Integration (1)

#### TC-EMPLEV-026 — Integration — Leave/PIP/NP views share chrome with the Employee Details/Ratings tabbed shell

| Field | Value |
| --- | --- |
| **Tags** | @regression, @functional |
| **Requirement Ref** | INT — affectedModules[0]: Employee Details (base Reporting Manager view) — shared shell |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Navigate between the Employee, Leave, and Ratings tabs within the same shell
2. Verify shared chrome (Tabs, search, column DropdownMenus, Pagination) behaves identically across all three

**Expected**

A UI regression in the shared shell would affect all three tabs identically; shared chrome renders/behaves consistently

**Automation Hint**

Multi-module flow — verify shared-shell chrome across Employee/Leave/Ratings tabs.

### Negative (2)

#### TC-EMPLEV-014 — Scoped view with zero matching records shows an empty-state message

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | negativeScenario: scoped view yields zero matching records |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); no records match the chosen scope

**Steps**

1. Open a scoped view (e.g. Notice Period) for a dataset with zero matching records

**Expected**

An empty-state message is shown rather than a blank/broken table

**Automation Hint**

Exact empty-state copy not captured in source — assert presence of a non-blank message, not exact text.

#### TC-EMPLEV-015 — A user attempts to view Leave/PIP/Notice-period details for an employee outside their permitted scope

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | negativeScenario: view Leave/PIP/NP details outside permitted scope |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as testUserPage (punit.patel@simformsolutions.com)

**Steps**

1. Attempt to view Leave & Compliance Details for an employee/team outside the user's permitted scope

**Expected**

MANUAL/PARTIAL — access should be scoped or denied; exact enforcement mechanism not confirmed in source

**Automation Hint**

PARTIAL — role/data-scope for this view is unconfirmed; verify against the live app before locking assertions.

### Regression (1)

#### TC-EMPLEV-027 — Regression — shared tabbed-shell chrome continues to function correctly for the Leave & Compliance Details view

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Regression: affectedModule — Employee Details (base Reporting Manager view) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | major |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Exercise Tabs, search, column DropdownMenus, and Pagination on the Leave & Compliance Details view after any change to the shared Employee Details shell

**Expected**

Shared chrome continues to behave exactly as before the change to the Employee Details module

### Security (3)

#### TC-EMPLEV-023 — Reporting Manager cannot view leave/PIP/NP data outside their own team

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: RM cannot — view leave data outside own team |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture) as RM

**Steps**

1. As RM, attempt to view leave/PIP/NP data for a team outside their own

**Expected**

MANUAL — access should be denied/scoped; not confirmed in source

**Automation Hint**

PARTIAL — role/data-scope not confirmed; verify against live app.

#### TC-EMPLEV-024 — Employee cannot view others' leave/PIP/NP data

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | roleMatrix: Employee cannot — view others' leave/PIP/NP data |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as testUserPage (punit.patel@simformsolutions.com) as Employee

**Steps**

1. As Employee, attempt to view another employee's leave/PIP/NP record via direct URL/ID substitution

**Expected**

MANUAL — access should be blocked; not confirmed in source

**Automation Hint**

PARTIAL — role/data-scope not confirmed; verify against live app.

#### TC-EMPLEV-025 — A user without appropriate role/scope accesses another employee's Notice Period or PIP leave data

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | securityScenario: unauthorized access to sensitive PIP/NP data |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as testUserPage (punit.patel@simformsolutions.com)

**Steps**

1. Attempt to access another employee's Notice Period/PIP data without the appropriate role/scope, via UI and direct API

**Expected**

MANUAL — access blocked or data excluded at both UI and API; PIP/NP are sensitive HR data warranting strict enforcement — not confirmed in source

**Automation Hint**

PARTIAL — enforcement mechanism unconfirmed; verify against live app/backend.

### Smoke (2)

#### TC-EMPLEV-001 — Full Leave & Compliance Details list renders all 5 Status values with correctly formatted Reason/Date/Days

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | criticalPaths[0] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture); test data includes at least one record per Status value

**Steps**

1. Navigate to Leave & Compliance Details
2. Verify Status/Reason/Date/Days columns are present
3. Verify each of the 5 Status values renders with the correct Days format

**Expected**

Status/Reason/Date/Days columns present; Past/Ongoing/Upcoming show a fixed day count; PIP/NP show a countdown ('N Days Left')

**Test Data**

- `rows`: status: Past; reason: Planned; date: 18 Apr – 19 Apr; days: 2 Days, status: Ongoing; reason: Planned; date: 20 Apr – 22 Apr; days: 2 Days, status: Upcoming; reason: Maternity; date: 13 May – 04 Jul; days: 91 Days, status: PIP; reason: Learning; date: 05 Apr – 05 May; days: 33 Days Left, status: NP; reason: -; date: 19 Apr - 18 Jun; days: 60 Days Left

#### TC-EMPLEV-002 — Notice Period and PIP/Ongoing scoped views correctly filter the dataset by Status

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | criticalPaths[1] |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded |
| **Confidence** | requirement-grounded |

**Preconditions**

Logged in as subham.nayak@simformsolutions.com (primaryPage fixture)

**Steps**

1. Open the PIP/Ongoing scoped view
2. Verify only PIP and Ongoing rows appear
3. Open the Notice Period scoped view
4. Verify only NP rows appear

**Expected**

Each scoped view shows only its own Status subset with no unrelated records leaking in
