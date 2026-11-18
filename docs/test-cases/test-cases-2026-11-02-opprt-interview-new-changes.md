# Pre-sales Opportunities — Test Cases

**Total test cases:** 61  
**Modules covered:** Pre-sales Opportunities  
**Source:** `reports/test-cases/cases-2026-11-02-OPPRT-interview-new-changes.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 36 | 59.0% |
| negative | 13 | 21.3% |
| regression | 7 | 11.5% |
| boundary | 4 | 6.6% |
| smoke | 1 | 1.6% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 53 | 86.9% |
| high | 8 | 13.1% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 53 | 86.9% |
| high | 8 | 13.1% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @interview-retest | 61 | 100.0% |
| @functional | 36 | 59.0% |
| @negative | 13 | 21.3% |
| @regression | 7 | 11.5% |
| @boundary | 4 | 6.6% |
| @smoke | 1 | 1.6% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-OPPRT-001](#tc-opprt-001-interview-candidate-shows-a-violet-pill) | Interview candidate shows a violet pill | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-002](#tc-opprt-002-open-direct-ticket-shows-a-blue-pill) | Open Direct ticket shows a blue pill | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-003](#tc-opprt-003-approved-direct-with-unconfirmed-allocation-shows-a-pill) | Approved Direct with unconfirmed allocation shows a pill | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-004](#tc-opprt-004-no-opportunities-shows-a-dash) | No opportunities shows a dash | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-005](#tc-opprt-005-many-pills-the-ones-that-fit-then-n) | Many pills: the ones that fit, then +N | Pre-sales Opportunities | functional | high |
| [TC-OPPRT-006](#tc-opprt-006-n-lists-every-opportunity) | +N lists every opportunity | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-007](#tc-opprt-007-resizing-window-side-panel-changes-how-many-pills-fit) | Resizing window/side panel changes how many pills fit | Pre-sales Opportunities | functional | high |
| [TC-OPPRT-008](#tc-opprt-008-bug-fix-pills-appear-after-refresh-not-only-n) | Bug fix: pills appear after refresh, not only +N | Pre-sales Opportunities | regression | medium |
| [TC-OPPRT-009](#tc-opprt-009-pill-opens-its-opportunity) | Pill opens its opportunity | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-010](#tc-opprt-010-won-on-hold-lost-no-longer-required-show-no-pill) | Won / On Hold / Lost / No Longer Required show no pill | Pre-sales Opportunities | negative | medium |
| [TC-OPPRT-011](#tc-opprt-011-unconfirmed-direct-on-won-on-hold-shows-no-pill) | Unconfirmed Direct on Won / On Hold shows no pill | Pre-sales Opportunities | negative | medium |
| [TC-OPPRT-012](#tc-opprt-012-header-shows-opportunities-and-unconfirmed-rows) | Header shows Opportunities and Unconfirmed rows | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-013](#tc-opprt-013-unconfirmed-direct-only-in-unconfirmed-row) | Unconfirmed Direct only in Unconfirmed row | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-014](#tc-opprt-014-rows-follow-the-viewer-scope) | Rows follow the viewer scope | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-015](#tc-opprt-015-project-side-panel-filter-all-active-upcoming-inactive) | Project side panel filter All / Active / Upcoming / Inactive | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-016](#tc-opprt-016-same-client-rejection-warns-on-shortlist) | Same-client rejection warns on shortlist | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-017](#tc-opprt-017-different-client-shows-no-warning) | Different client shows no warning | Pre-sales Opportunities | negative | medium |
| [TC-OPPRT-018](#tc-opprt-018-rejected-more-than-once-only-latest-shown) | Rejected more than once: only latest shown | Pre-sales Opportunities | boundary | medium |
| [TC-OPPRT-019](#tc-opprt-019-release-requires-a-reason) | Release requires a reason | Pre-sales Opportunities | negative | medium |
| [TC-OPPRT-020](#tc-opprt-020-after-release-seat-pending-to-shortlist-free-seat-1-new-candidate-shortlistable) | After release: seat Pending to Shortlist, free seat +1, new candidate shortlistable | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-021](#tc-opprt-021-released-candidate-shows-as-released) | Released candidate shows as Released | Pre-sales Opportunities | functional | high |
| [TC-OPPRT-022](#tc-opprt-022-profile-history-moves-to-past-pills-and-alerts-stop) | Profile history moves to Past; pills and alerts stop | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-023](#tc-opprt-023-won-project-allocated-cannot-be-released) | Won / Project Allocated cannot be released | Pre-sales Opportunities | negative | medium |
| [TC-OPPRT-024](#tc-opprt-024-rounds-tab-of-released-candidate-shows-ended-state) | Rounds tab of released candidate shows ended state | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-025](#tc-opprt-025-release-on-a-not-open-opportunity-is-refused) | Release on a not-Open opportunity is refused | Pre-sales Opportunities | negative | medium |
| [TC-OPPRT-026](#tc-opprt-026-close-a-position-with-a-reason) | Close a position with a reason | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-027](#tc-opprt-027-partial-close-keeps-won-project-allocated) | Partial close keeps Won / Project Allocated | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-028](#tc-opprt-028-closed-openings-nlr-status-with-red-outline-list-kanban) | Closed openings: NLR status with red outline (list + Kanban) | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-029](#tc-opprt-029-project-allocated-opening-on-a-closed-position) | Project Allocated opening on a closed position | Pre-sales Opportunities | functional | high |
| [TC-OPPRT-030](#tc-opprt-030-reopen-position) | Reopen position | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-031](#tc-opprt-031-concurrency-tab-a-won-on-hold-tab-b-close-reopen-release) | Concurrency: tab A Won/On Hold, tab B Close/Reopen/Release | Pre-sales Opportunities | regression | medium |
| [TC-OPPRT-032](#tc-opprt-032-header-stats-for-the-whole-opportunity-updating) | Header stats for the whole opportunity, updating | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-033](#tc-opprt-033-direct-position-requires-confirmed-or-unconfirmed) | Direct position requires Confirmed or Unconfirmed | Pre-sales Opportunities | negative | medium |
| [TC-OPPRT-034](#tc-opprt-034-pills-reflect-the-chosen-status) | Pills reflect the chosen status | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-035](#tc-opprt-035-over-allocation-warning-names-the-projects) | Over-allocation warning names the projects | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-036](#tc-opprt-036-no-rounds-explains-and-lists-planned-rounds) | No rounds: explains and lists planned rounds | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-037](#tc-opprt-037-checklist-has-obs-system-check-no-resume-incl-old-opportunities) | Checklist has OBS & System check, no Resume (incl. old opportunities) | Pre-sales Opportunities | regression | medium |
| [TC-OPPRT-038](#tc-opprt-038-breadcrumb-shows-the-ticket-number) | Breadcrumb shows the ticket number | Pre-sales Opportunities | smoke | medium |
| [TC-OPPRT-039](#tc-opprt-039-what-s-new-6-6-0-certifications-and-6-7-0-released) | What's New: 6.6.0 Certifications and 6.7.0 released | Pre-sales Opportunities | regression | medium |
| [TC-OPPRT-040](#tc-opprt-040-opportunity-actions-no-404s) | Opportunity actions: no 404s | Pre-sales Opportunities | regression | medium |
| [TC-OPPRT-041](#tc-opprt-041-pmo-every-action-incl-release-close-reopen) | PMO: every action incl. Release, Close, Reopen | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-042](#tc-opprt-042-admin-every-action-incl-release-close-reopen) | Admin: every action incl. Release, Close, Reopen | Pre-sales Opportunities | functional | high |
| [TC-OPPRT-043](#tc-opprt-043-tm-em-rm-release-and-close-follow-their-permissions) | TM / EM / RM: Release and Close follow their permissions | Pre-sales Opportunities | negative | medium |
| [TC-OPPRT-044](#tc-opprt-044-pm-csm-no-pre-sales-board-actions-employee-no-pills-for-others) | PM / CSM: no Pre-sales board actions; Employee: no pills for others | Pre-sales Opportunities | negative | medium |
| [TC-OPPRT-045](#tc-opprt-045-release-a-candidate-while-waiting-for-tm-approval-then-tm-approves) | Release a candidate while Waiting for TM Approval, then TM approves | Pre-sales Opportunities | regression | medium |
| [TC-OPPRT-046](#tc-opprt-046-re-shortlist-a-released-employee-on-the-same-position) | Re-shortlist a released employee on the same position | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-047](#tc-opprt-047-double-click-release-two-requests-at-once) | Double-click Release (two requests at once) | Pre-sales Opportunities | boundary | medium |
| [TC-OPPRT-048](#tc-opprt-048-release-reason-of-exactly-500-characters) | Release reason of exactly 500 characters | Pre-sales Opportunities | boundary | medium |
| [TC-OPPRT-049](#tc-opprt-049-close-reason-containing-html-script-and-emoji) | Close reason containing HTML / script and emoji | Pre-sales Opportunities | negative | medium |
| [TC-OPPRT-050](#tc-opprt-050-edit-headcount-of-a-closed-position) | Edit headcount of a closed position | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-051](#tc-opprt-051-re-initiate-a-closed-position) | Re-initiate a closed position | Pre-sales Opportunities | negative | medium |
| [TC-OPPRT-052](#tc-opprt-052-after-reopen-shortlist-an-employee-the-closure-released) | After Reopen, shortlist an employee the closure released | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-053](#tc-opprt-053-tm-approves-after-the-position-was-closed) | TM approves after the position was closed | Pre-sales Opportunities | negative | medium |
| [TC-OPPRT-054](#tc-opprt-054-close-and-release-the-same-seat-at-the-same-moment-two-pmos) | Close and Release the same seat at the same moment (two PMOs) | Pre-sales Opportunities | regression | medium |
| [TC-OPPRT-055](#tc-opprt-055-every-position-closed-mark-the-opportunity-won) | Every position closed — mark the opportunity Won | Pre-sales Opportunities | functional | high |
| [TC-OPPRT-056](#tc-opprt-056-delete-a-closed-position-that-has-released-candidates) | Delete a closed position that has released candidates | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-057](#tc-opprt-057-release-close-on-a-direct-ticket) | Release / close on a Direct ticket | Pre-sales Opportunities | negative | medium |
| [TC-OPPRT-058](#tc-opprt-058-rejection-warning-after-the-rejecting-ticket-is-closed-no-longer-required) | Rejection warning after the rejecting ticket is closed No Longer Required | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-059](#tc-opprt-059-a-pmo-tm-rejection-shown-as-a-client-rejection) | A PMO/TM rejection shown as a client rejection | Pre-sales Opportunities | functional | high |
| [TC-OPPRT-060](#tc-opprt-060-rename-a-ticket-s-client-to-a-client-who-rejected-someone) | Rename a ticket's client to a client who rejected someone | Pre-sales Opportunities | functional | medium |
| [TC-OPPRT-061](#tc-opprt-061-header-after-closing-a-position-that-has-a-won-allocated-seat) | Header after closing a position that has a Won/Allocated seat | Pre-sales Opportunities | boundary | high |

---

## Pre-sales Opportunities

61 test cases.

### Boundary (4)

#### TC-OPPRT-018 — Rejected more than once: only latest shown

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §4 shortlist |
| **Expected Result** | Latest rejection |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Reject Aditi Bhatia as Client on OPP-0336, then later again on OPP-0335 › Java Lead
3. Open Requests Tracking › Opportunity Allocation and open OPP-0335 › Java Developer
4. Click Add/ Shortlist and search "Aditi Bhatia"
5. Check the warning shows only the latest rejection (#2)

#### TC-OPPRT-047 — Double-click Release (two requests at once)

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | One succeeds, one refused, seat freed once |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open OPP-0344 "QA-AUTO edge cases 02-11"
3. Open the Release dialog, enter a reason
4. Click Mark No Longer Required twice quickly
5. Check one success message, no duplicate, one seat freed

#### TC-OPPRT-048 — Release reason of exactly 500 characters

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Accepted |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open OPP-0344 "QA-AUTO edge cases 02-11"
3. Release a candidate with a reason of exactly 500 characters
4. Check it saves

#### TC-OPPRT-061 — Header after closing a position that has a Won/Allocated seat

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @interview-retest |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Never shows filled more than required |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open the board List view, search OPP-0334 (closed position, Ira Chopra allocated)
3. Read the header counts
4. Check "Filled" is not more than "required"

### Functional (36)

#### TC-OPPRT-001 — Interview candidate shows a violet pill

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §1 pills |
| **Expected Result** | Violet Interview pill for OPP-0335 |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Shortlist David Lais on OPP-0335 › Java Developer (Interview ticket)
3. Go to Employee › Employee Details
4. Search "David Lais"
5. Scroll right to the Active Opportunities column
6. Check the pill colour and text

#### TC-OPPRT-002 — Open Direct ticket shows a blue pill

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §1 pills |
| **Expected Result** | Blue Direct pill |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Create a Direct ticket on AnalytixHub for Nandini Desai with Allocation status = Confirmed (OPP-0338), leave it Open
3. Go to Employee › Employee Details
4. Search "Nandini Desai"
5. Scroll right to the Active Opportunities column
6. Check the pill colour and text

#### TC-OPPRT-003 — Approved Direct with unconfirmed allocation shows a pill

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §1 pills |
| **Expected Result** | Amber dashed unconfirmed pill |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Create a Direct ticket on AnalytixHub for Vivaan Barot with Allocation status = Unconfirmed (OPP-0339)
3. Move the Direct ticket Open → In Review → Awaiting → Approved
4. Go to Employee › Employee Details
5. Search "Vivaan Barot"
6. Scroll right to the Active Opportunities column
7. Check the pill colour, border and text

#### TC-OPPRT-004 — No opportunities shows a dash

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §1 pills |
| **Expected Result** | "–" in the cell |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Go to Employee › Employee Details
3. Search an employee with no active opportunity (Payal Modi)
4. Scroll right to the Active Opportunities column
5. Check what the cell shows

#### TC-OPPRT-005 — Many pills: the ones that fit, then +N

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §1 pills |
| **Expected Result** | At least one pill plus +N for an employee with several opportunities |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Shortlist Hardik Desai on 9 open Interview tickets (OPP-0323 … OPP-0340)
3. Go to Employee › Employee Details
4. Search "Hardik Desai"
5. Scroll right to the Active Opportunities column
6. Check how many pills are visible before the "+N" badge
7. Repeat with David Lais (3 opportunities)

#### TC-OPPRT-006 — +N lists every opportunity

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §1 pills |
| **Expected Result** | Popover lists all |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Go to Employee › Employee Details
3. Search "David Lais" (3 active opportunities)
4. Scroll right to the Active Opportunities column
5. Click the "+N" badge
6. Check that the list shows every opportunity with type, %, client and status

#### TC-OPPRT-007 — Resizing window/side panel changes how many pills fit

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §1 pills |
| **Expected Result** | Visible count changes with width |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Go to Employee › Employee Details
3. Search "Hardik Desai"
4. Scroll right to the Active Opportunities column
5. Resize the browser to 1280, 1600 and 1900 px wide
6. Open and close the employee side panel by clicking the name
7. Check whether the number of visible pills changes

#### TC-OPPRT-009 — Pill opens its opportunity

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §1 pills |
| **Expected Result** | Click navigates to the ticket |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Go to Employee › Employee Details
3. Search an employee with one pill (Payal Modi)
4. Hover the pill and check it names the opportunity
5. Click the pill
6. Check the opportunity detail page of that ticket opens

#### TC-OPPRT-012 — Header shows Opportunities and Unconfirmed rows

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §2 header |
| **Expected Result** | "Active opportunities" + amber "Unconfirmed allocations" (dashed icon) |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Go to Employee › Employee Details
3. Open the profile page of Nandini Desai (open Direct ticket)
4. Check the header shows the "Active opportunities" row with the Direct pill
5. Open the profile page of Vivaan Barot (unconfirmed Direct)
6. Check the header shows the amber "Unconfirmed allocations" row with a dashed icon

#### TC-OPPRT-013 — Unconfirmed Direct only in Unconfirmed row

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §2 header |
| **Expected Result** | Never in both |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open the profile page of Vivaan Barot
3. Check OPP-0339 appears in the "Unconfirmed allocations" row
4. Check there is no "Active opportunities" row showing OPP-0339

#### TC-OPPRT-014 — Rows follow the viewer scope

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §2 header |
| **Expected Result** | TM/EM see own dept, others none |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as TM JAVA (mehul.pandya) and open the profile of Chirag Bajaj (JAVA candidate)
2. Check the Active opportunities row shows his pill
3. Log in as EM (kunal.jadeja) and open the profile of Nandini Desai; check her Direct pill
4. Log in as RM (deepak.rao) and try to open Nandini Desai's profile
5. Check the RM cannot see the profile or its pills

#### TC-OPPRT-015 — Project side panel filter All / Active / Upcoming / Inactive

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §3 project-panel |
| **Expected Result** | Counts match real allocation dates; server decides active |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Go to Projects and search "AnalytixHub"
3. Click the project to open the side panel
4. Click each filter: All, Active, Upcoming, Inactive
5. Note the count and employees for each filter
6. Compare with each employee's allocation start date and hours logged (Upcoming = start date in the future)

#### TC-OPPRT-016 — Same-client rejection warns on shortlist

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §4 shortlist |
| **Expected Result** | Warning with earlier rejection |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Shortlist Gargi Das (JAVA) on OPP-0336 (client "qa-auto rejection client")
3. Reject her with Rejected by = Client and a reason
4. Open Requests Tracking › Opportunity Allocation and open OPP-0335 (same client, different case)
5. On Java Developer click Add/ Shortlist and search "Gargi Das"
6. Select her and check the warning text

#### TC-OPPRT-020 — After release: seat Pending to Shortlist, free seat +1, new candidate shortlistable

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §5 release |
| **Expected Result** | All three |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open Requests Tracking › Opportunity Allocation and open OPP-0335
3. Note the number of Pending to Shortlist seats on Java Developer
4. Release David Lais with a reason
5. Check his seat goes back to Pending to Shortlist and free seats go up by one
6. Click Add/ Shortlist and shortlist a new candidate (Nilesh Chopra) into the seat

#### TC-OPPRT-021 — Released candidate shows as Released

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §5 release |
| **Expected Result** | Shown as Released |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open Requests Tracking › Opportunity Allocation and open OPP-0335
3. Release Hardik Desai with a reason
4. Check the candidate is shown as Released on the detail page
5. Check the board (List and Kanban) and the employee's profile history

#### TC-OPPRT-022 — Profile history moves to Past; pills and alerts stop

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §5 release |
| **Expected Result** | Past tab; no pill; no conflict |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Release David Lais from OPP-0335
3. Open David Lais's profile › opportunity history
4. Check OPP-0335 moved from Active to Past
5. Go to Employee › Employee Details, search "David Lais" and check the OPP-0335 pill is gone
6. Check his allocation alerts no longer list OPP-0335

#### TC-OPPRT-024 — Rounds tab of released candidate shows ended state

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §5 release |
| **Expected Result** | "ended" empty state |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Go to the board (Kanban), search OPP-0335
3. Click Smit Shah's card in the No Longer Required column (released)
4. Open the Interview Rounds tab
5. Check the "ended" empty state text

#### TC-OPPRT-026 — Close a position with a reason

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §6 close |
| **Expected Result** | Live candidates released, closed state shown |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open Requests Tracking › Opportunity Allocation and open OPP-0335
3. On Java Lead click No Longer Required
4. Enter a reason and confirm
5. Check its live candidates (Smit Shah, Uday Hegde) are released
6. Check the red banner shows date, who marked it and the reason, and Add/ Shortlist is disabled

#### TC-OPPRT-027 — Partial close keeps Won / Project Allocated

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §6 close |
| **Expected Result** | Only open seats released |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open Requests Tracking › Opportunity Allocation and open OPP-0335 (Dhrumil Rathod Won on Java Developer, 2 other live seats)
3. Click No Longer Required on Java Developer, enter a reason, confirm
4. Check Dhrumil stays Won and only the open seats are released
5. Repeat on OPP-0334 (Ira Chopra Project Allocated + 1 open seat) and check Ira is kept

#### TC-OPPRT-028 — Closed openings: NLR status with red outline (list + Kanban)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §6 close |
| **Expected Result** | Red outline both views |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Go to the board, search OPP-0335
3. In List view check the closed position's openings show "No Longer Required" with a red outline
4. Switch to Kanban and check the same cards
5. Check they sit in the No Longer Required column

#### TC-OPPRT-029 — Project Allocated opening on a closed position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §6 close |
| **Expected Result** | Still Project Allocated, no red outline |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Go to the board, search OPP-0334 (closed position with Ira Chopra Project Allocated)
3. In List view check Ira's opening shows Project Allocated without a red outline
4. Switch to Kanban
5. Check Ira's card is in the Project Allocated column without a red outline

#### TC-OPPRT-030 — Reopen position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §6 close |
| **Expected Result** | Back to normal, shortlist works |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open Requests Tracking › Opportunity Allocation and open OPP-0335 (Java Developer closed)
3. Click Reopen on Java Developer and confirm
4. Check the red banner is gone and open seats are Pending to Shortlist
5. Click Add/ Shortlist and shortlist a candidate
6. Check the shortlist succeeds

#### TC-OPPRT-032 — Header stats for the whole opportunity, updating

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §7 stats |
| **Expected Result** | Shortlisted / rejected / filled / required |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Go to the board List view and search OPP-0335
3. Read the group header: Shortlisted, Rejected, Filled x/y
4. Shortlist, reject, release and close one candidate/position
5. Check the header counts update after each action and are the same on every card

#### TC-OPPRT-034 — Pills reflect the chosen status

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §8 direct |
| **Expected Result** | Confirmed → Direct pill, Unconfirmed → amber |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Create one Direct ticket with Confirmed (OPP-0338) and one with Unconfirmed, then approve it (OPP-0339)
3. Go to Employee › Employee Details
4. Check Nandini Desai shows a blue Direct pill
5. Check Vivaan Barot shows an amber unconfirmed pill

#### TC-OPPRT-035 — Over-allocation warning names the projects

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §9 overalloc |
| **Expected Result** | Project names in warning |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open an Open new-allocation ticket for AnalytixHub at 50% (test ticket NA-0475)
3. Department = JAVA; in Employee shortlist add Ankita Dave (60% already allocated)
4. Hover her name in Employee Details
5. Check the warning gives the total (110%) and names the project (JourneyX)
6. Close the test ticket afterwards

#### TC-OPPRT-036 — No rounds: explains and lists planned rounds

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §10 rounds |
| **Expected Result** | Explanation + planned rounds |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Create an Interview ticket with 2 planned rounds (Technical, Client) — OPP-0343
3. Shortlist Swati Pillai and bypass approval
4. Delete the two auto-created rounds
5. Open "View interview details" › Interview Rounds
6. Check it explains there are no rounds and lists the 2 planned rounds

#### TC-OPPRT-041 — PMO: every action incl. Release, Close, Reopen

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §14 permissions |
| **Expected Result** | Allowed |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (bhumi.chauhan)
2. Release a candidate on OPP-0340
3. Mark a position No Longer Required, then Reopen it
4. Check all three succeed

#### TC-OPPRT-042 — Admin: every action incl. Release, Close, Reopen

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §14 permissions |
| **Expected Result** | Allowed |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as Admin (ceo@simformsolutions.com)
2. Try to release a candidate on OPP-0340
3. Try to mark a position No Longer Required and to Reopen it
4. Check whether each action is allowed

#### TC-OPPRT-046 — Re-shortlist a released employee on the same position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Allowed |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open OPP-0344 "QA-AUTO edge cases 02-11"
3. Release a candidate on Dev A
4. Click Add/ Shortlist and pick the same employee
5. Check they are shortlisted again

#### TC-OPPRT-050 — Edit headcount of a closed position

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Blocked, or the position stays closed |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open OPP-0344 "QA-AUTO edge cases 02-11"
3. Close Dev B
4. Click Edit on Dev B and change Number of Openings to 5
5. Save and check the position is still closed

#### TC-OPPRT-052 — After Reopen, shortlist an employee the closure released

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Allowed |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open OPP-0344 "QA-AUTO edge cases 02-11"
3. Close Dev B (its candidate is released)
4. Reopen Dev B
5. Shortlist the same employee again
6. Check it works

#### TC-OPPRT-055 — Every position closed — mark the opportunity Won

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Refused or warned: nothing was won |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open OPP-0344 "QA-AUTO edge cases 02-11"
3. Close every position (No Longer Required)
4. Change the opportunity status to Won
5. Check whether it is blocked or warns

#### TC-OPPRT-056 — Delete a closed position that has released candidates

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Clear rule; employee history kept |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open OPP-0344 "QA-AUTO edge cases 02-11"
3. Close Dev C (candidate released)
4. Delete Dev C
5. Open the released employee's profile history and check the entry

#### TC-OPPRT-058 — Rejection warning after the rejecting ticket is closed No Longer Required

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Still warns |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Close OPP-0336 (where Gargi Das was client-rejected) as No Longer Required
3. Shortlist Gargi Das on another ticket of the same client
4. Check the warning still shows

#### TC-OPPRT-059 — A PMO/TM rejection shown as a client rejection

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | high |
| **Severity** | high |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Only real client rejections, or wording that names who rejected |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Reject Priya Sharma on OPP-0336 with Rejected by = PMO
3. Shortlist her on a same-client ticket
4. Check the warning wording claims the client rejected her

#### TC-OPPRT-060 — Rename a ticket's client to a client who rejected someone

| Field | Value |
| --- | --- |
| **Tags** | @functional, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Warning appears |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open OPP-0344 "QA-AUTO edge cases 02-11"
3. Edit Ticket: change client to "QA-AUTO Rejection Client"
4. Add/ Shortlist and search Gargi Das
5. Check the rejection warning shows

### Negative (13)

#### TC-OPPRT-010 — Won / On Hold / Lost / No Longer Required show no pill

| Field | Value |
| --- | --- |
| **Tags** | @negative, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §1 pills |
| **Expected Result** | No pill |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Create tickets with one candidate each and mark them Lost (OPP-0341) and No Longer Required (OPP-0342); put OPP-0337 On Hold, then Won
3. Go to Employee › Employee Details
4. Search each candidate
5. Scroll right to the Active Opportunities column
6. Check no pill is shown for that ticket

#### TC-OPPRT-011 — Unconfirmed Direct on Won / On Hold shows no pill

| Field | Value |
| --- | --- |
| **Tags** | @negative, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §1 pills |
| **Expected Result** | No pill |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Put the unconfirmed Direct ticket OPP-0339 On Hold
3. Go to Employee › Employee Details
4. Search "Vivaan Barot" and check the pill
5. Mark OPP-0339 Won and check again
6. Set OPP-0339 back to Open and check the pill returns

#### TC-OPPRT-017 — Different client shows no warning

| Field | Value |
| --- | --- |
| **Tags** | @negative, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §4 shortlist |
| **Expected Result** | No warning |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open Requests Tracking › Opportunity Allocation and open OPP-0337 (client "QA-AUTO Other Client")
3. Click Add/ Shortlist on Java Developer
4. Search "Gargi Das" and select her
5. Check no rejection warning is shown

#### TC-OPPRT-019 — Release requires a reason

| Field | Value |
| --- | --- |
| **Tags** | @negative, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §5 release |
| **Expected Result** | Save blocked while empty |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open Requests Tracking › Opportunity Allocation and open OPP-0335
3. Expand Java Developer
4. On a live candidate (Uday Hegde) click "Mark … as no longer required"
5. Leave Reason empty and click Mark No Longer Required
6. Enter only spaces and click again
7. Check the dialog stays open with "Reason is required." and nothing is saved

#### TC-OPPRT-023 — Won / Project Allocated cannot be released

| Field | Value |
| --- | --- |
| **Tags** | @negative, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §5 release |
| **Expected Result** | Refused |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open Requests Tracking › Opportunity Allocation and open OPP-0335
3. Find Dhrumil Rathod (Won) on Java Developer
4. Check there is no "Mark … as no longer required" action on his row
5. Try the release API on his nomination
6. Check it is refused

#### TC-OPPRT-025 — Release on a not-Open opportunity is refused

| Field | Value |
| --- | --- |
| **Tags** | @negative, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §5 release |
| **Expected Result** | Refused |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open OPP-0337 in one tab
3. Put OPP-0337 On Hold (other tab / board status menu)
4. In the first tab click "Mark … as no longer required" on a candidate, enter a reason, confirm
5. Check the action is refused with a clear message

#### TC-OPPRT-033 — Direct position requires Confirmed or Unconfirmed

| Field | Value |
| --- | --- |
| **Tags** | @negative, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §8 direct |
| **Expected Result** | Cannot save without one |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Click New Opportunities and choose Direct Opportunity, Existing Client, project AnalytixHub
3. Fill the position (title, JAVA, employee Ankita Dave, 50%, date) but leave Allocation status empty
4. Check neither Confirmed nor Unconfirmed is preselected
5. Click Create Opportunity
6. Check it is blocked with "Select whether the allocation is confirmed."

#### TC-OPPRT-043 — TM / EM / RM: Release and Close follow their permissions

| Field | Value |
| --- | --- |
| **Tags** | @negative, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §14 permissions |
| **Expected Result** | No update permission → refused |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as TM QA (sudhansu.patel), TM JAVA (mehul.pandya), EM (kunal.jadeja), RM (deepak.rao) in turn
2. Try Release, No Longer Required and Reopen on OPP-0340
3. Check each is refused (403) since these roles have no opportunities update permission

#### TC-OPPRT-044 — PM / CSM: no Pre-sales board actions; Employee: no pills for others

| Field | Value |
| --- | --- |
| **Tags** | @negative, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §14 permissions |
| **Expected Result** | Refused / hidden |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PM (gaurav.panchal, maitri.bose) and CSM (tarun.sharma)
2. Try Release / No Longer Required on OPP-0340 and open the employee list
3. Log in as Employee (kashyap.patel) and open the employee list
4. Check all are refused and no pills of other people are shown

#### TC-OPPRT-049 — Close reason containing HTML / script and emoji

| Field | Value |
| --- | --- |
| **Tags** | @negative, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Saved and shown as plain text |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open OPP-0344 "QA-AUTO edge cases 02-11"
3. Click No Longer Required on Dev B
4. Enter <img src=x onerror=alert(1)> Client said: "not needed" 🙏
5. Confirm and check the banner shows it as text and no script runs

#### TC-OPPRT-051 — Re-initiate a closed position

| Field | Value |
| --- | --- |
| **Tags** | @negative, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Refused (button disabled) |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open OPP-0344 "QA-AUTO edge cases 02-11"
3. Close Dev B
4. Try Re-initiate on Dev B
5. Check it is not possible

#### TC-OPPRT-053 — TM approves after the position was closed

| Field | Value |
| --- | --- |
| **Tags** | @negative, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Refused |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open OPP-0344 "QA-AUTO edge cases 02-11"
3. Send a Dev C candidate for approval
4. Close Dev C
5. Log in as TM JAVA and try to approve
6. Check it is refused

#### TC-OPPRT-057 — Release / close on a Direct ticket

| Field | Value |
| --- | --- |
| **Tags** | @negative, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Not offered / refused |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open Direct ticket OPP-0338
3. Check there is no No Longer Required on the position or candidate
4. Try via API and check it is refused

### Regression (7)

#### TC-OPPRT-008 — Bug fix: pills appear after refresh, not only +N

| Field | Value |
| --- | --- |
| **Tags** | @regression, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §1 pills |
| **Expected Result** | After list refetch the new pill shows |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Go to Employee › Employee Details
3. Search "Rachna Dodia" (no opportunities, cell shows "-")
4. Keep the list open; in another tab shortlist Rachna Dodia on OPP-0337
5. Refresh the list data (change the Last 15 days filter)
6. Check the cell shows the new pill, not only "+1"

#### TC-OPPRT-031 — Concurrency: tab A Won/On Hold, tab B Close/Reopen/Release

| Field | Value |
| --- | --- |
| **Tags** | @regression, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §6 close |
| **Expected Result** | Clear refusal, no crash |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open OPP-0337 in tab A and tab B
3. In tab A mark the opportunity On Hold
4. In tab B try Release on a candidate, then No Longer Required on the position
5. Close the position, mark the opportunity Won in tab A, then try Reopen in tab B
6. Check every action in tab B is refused with a clear message and the page does not break

#### TC-OPPRT-037 — Checklist has OBS & System check, no Resume (incl. old opportunities)

| Field | Value |
| --- | --- |
| **Tags** | @regression, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §11 checklist |
| **Expected Result** | OBS present, Resume gone |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open a new ticket's candidate (OPP-0343 Swati Pillai) › View interview details › Preparation Checklist
3. Check "OBS & System check" is listed and "Resume" is not
4. Open an older ticket's candidate (OPP-0333 Fenil Gajjar) and check the same
5. Check every open Interview ticket (API sweep) has OBS & System check

#### TC-OPPRT-039 — What's New: 6.6.0 Certifications and 6.7.0 released

| Field | Value |
| --- | --- |
| **Tags** | @regression, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §13 regression |
| **Expected Result** | Listed as released |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open What's New & History
3. Check 6.6.0 "Certifications" and 6.7.0 are listed as released

#### TC-OPPRT-040 — Opportunity actions: no 404s

| Field | Value |
| --- | --- |
| **Tags** | @regression, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §13 regression |
| **Expected Result** | No 404 on any action |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Run every opportunity action in this re-test (shortlist, release, close, reopen, status, rounds) with the browser network log open
3. Check no request returns 404 or 5xx

#### TC-OPPRT-045 — Release a candidate while Waiting for TM Approval, then TM approves

| Field | Value |
| --- | --- |
| **Tags** | @regression, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | TM approve refused; nothing left pending |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open OPP-0344 "QA-AUTO edge cases 02-11"
3. Send a candidate on Dev A for approval
4. Mark them No Longer Required with a reason
5. Log in as TM JAVA (mehul.pandya) and approve the old request
6. Check it is refused and the TM has no pending item

#### TC-OPPRT-054 — Close and Release the same seat at the same moment (two PMOs)

| Field | Value |
| --- | --- |
| **Tags** | @regression, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §E edge |
| **Expected Result** | Consistent end state, no error page |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in as PMO (vihaan.chatterjee)
2. Open OPP-0344 as two PMOs (vihaan.chatterjee and bhumi.chauhan)
3. PMO 1 clicks No Longer Required on Dev C while PMO 2 releases its candidate
4. Check no error page and the candidate is released only once

### Smoke (1)

#### TC-OPPRT-038 — Breadcrumb shows the ticket number

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @interview-retest |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | PMO |
| **Task Id** | SI4-T1267/SI4-T1446 |
| **Sub Module** | §12 ui |
| **Expected Result** | Ticket number in breadcrumb |

**Preconditions**

SimERP DEV, backend build 449 (6.8.0), UI 6.7.0; re-tested 2 Nov 2026 as PMO vihaan.chatterjee unless stated. Findings: docs/findings/2026-11-02-interview-new-changes-retest.md

**Steps**

1. Log in to SimERP DEV as PMO (vihaan.chatterjee@simformsolutions.com)
2. Open Requests Tracking › Opportunity Allocation and open OPP-0335
3. Check the breadcrumb at the top of the page
4. Confirm it shows "Opportunity Allocation › OPP-0335"
