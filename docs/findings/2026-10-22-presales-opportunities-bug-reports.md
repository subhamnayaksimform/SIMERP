# Pre-sales Opportunities — Bug Reports

**Environment:** SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026  
**Total:** 36 reported · retest 26 Oct: Open 4 · Needs clarification 3 · Fixed 11 · Not built 6 · As designed 3 · Pending decision 3 · Not required 1 · Won't fix 1 · Excluded 3 · Withdrawn 1 · still to fix (Open + Partially fixed): High 0, Medium 2, Low 2. Not yet filed in Zoho.  
**Retest 26 Oct 2026:** full regression (436 API/UI checks) + targeted bug retests on dev after the developer fixes merged 26 Oct (backend 89e87d20/dca84369, frontend 6e3d47f7/b97da54e). Statuses for Not built / As designed / Pending decision come from the developer's response of 26 Oct.  
**Type legend:** *Defect* = build does something wrong · *FRD gap* = FRD requirement not built · *FRD conflict* = build and FRD disagree, needs a product decision · *Docs* = documentation mismatch.  
Test cases: [manual-test-cases-2026-10-22-oppty-presales.md](../test-cases/manual-test-cases-2026-10-22-oppty-presales.md)

## Summary

| ID | Title | Type | Severity | Priority | Module | Status (26 Oct) |
|---|---|---|---|---|---|---|
| [BUG-001](#bug-001) | PM can create Existing-client Interview and Direct opportunities | FRD conflict | High | P2 | Create Opportunity / RBAC | Pending decision |
| [BUG-002](#bug-002) | CSM cannot edit or add positions to an Interview opportunity they raised | FRD gap | High | P2 | Opportunity edit / RBAC | Fixed |
| [BUG-003](#bug-003) | CSM cannot cancel an Interview ticket (Cancelled tag only exists for Direct) | FRD gap | High | P2 | Cancellation | Not built |
| [BUG-004](#bug-004) | Preferred Candidate flag is missing | FRD gap | High | P2 | Shortlisting | Not built |
| [BUG-005](#bug-005) | Interview schedule cannot be locked, and dragging a card back silently clears the interview date | Defect | High | P2 | Interview rounds / Kanban | Not built |
| [BUG-006](#bug-006) | A TM-sent approval request is approved by PMO, not by a TM | FRD conflict | Medium | P2 | TM approval | Pending decision |
| [BUG-007](#bug-007) | PM cannot shortlist candidates | FRD gap | Medium | P3 | Shortlisting / RBAC | Fixed |
| [BUG-008](#bug-008) | Prep material rights differ from FRD (PM/EM cannot add; TM can edit PMO's material) | FRD gap | Medium | P3 | Preparation material | Fixed |
| [BUG-009](#bug-009) | No reason required to bypass TM approval or remove a shortlisted candidate | FRD gap | Medium | P3 | Shortlisting / approval | Fixed |
| [BUG-010](#bug-010) | Project can be unlinked or changed after a candidate is allocated to it | Defect | Medium | P2 | Project association | Fixed |
| [BUG-011](#bug-011) | Assigned CSM does not receive the "assigned to you" notification | Defect | Medium | P3 | Notifications | Fixed |
| [BUG-012](#bug-012) | One employee can be approved (In Process) on two opportunities at the same time | Gap / risk | Medium | P3 | Approval / availability | Open |
| [BUG-013](#bug-013) | A Direct request can hold only one employee | FRD conflict | Medium | P3 | Direct create | Pending decision |
| [BUG-014](#bug-014) | CSM raising a Direct ticket sees an empty two-way allocation alert | Defect | Medium | P3 | Two-way allocation alert | As designed |
| [BUG-015](#bug-015) | Create accepts contradictory data (Prospect with project; Interview with no interview) | Defect | Medium | P3 | Create validation | Fixed |
| [BUG-016](#bug-016) | Readable ticket ID is never shown; Ticket ID column is truncated | FRD gap | Medium | P3 | Board list | As designed |
| [BUG-017](#bug-017) | [WITHDRAWN — not a bug] PM list of assigned opportunities | Withdrawn | Low | P4 | Navigation | Withdrawn |
| [BUG-018](#bug-018) | API accepts dates the UI forbids or that make no sense | Defect | Low | P3 | Create validation | Fixed |
| [BUG-019](#bug-019) | Duplicate tech stacks are stored | Defect | Low | P4 | Create validation | Fixed |
| [BUG-020](#bug-020) | No change log on the opportunity and no "Send Reminder" | FRD gap | Low | P4 | Audit / reminders | Not built |
| [BUG-021](#bug-021) | Priority rule differs from FRD | FRD conflict | Low | P4 | Priority | Needs clarification |
| [BUG-022](#bug-022) | Admin does not see the view-only banner | Defect | Low | P4 | Board | As designed |
| [BUG-023](#bug-023) | Notification content issues | Defect | Low | P4 | Notifications | Needs clarification |
| [BUG-024](#bug-024) | Backend frontend-guide is out of date with the deployed API | Docs | Low | P4 | Documentation | Excluded |
| [BUG-025](#bug-025) | Extra candidates get their own cards beyond the opening count | FRD conflict | Low | P4 | Kanban | Excluded |
| [BUG-026](#bug-026) | Requests Tracking Interview tab tiles mix Lost with No Longer Required and ticket statuses | Defect | Low | P4 | Requests Tracking | Not required |
| [BUG-027](#bug-027) | Date-range presets differ from FRD | FRD gap | Low | P4 | Board filters | Not built |
| [BUG-028](#bug-028) | Create form validation and copy issues | Defect | Low | P4 | Create form | Open |
| [BUG-029](#bug-029) | No Longer Required tickets are grey, not red-bordered | FRD gap | Low | P4 | Board | Fixed |
| [BUG-030](#bug-030) | Candidate view: no personal board; competitor count visible | Gap | Low | P4 | Employee self-service | Fixed |
| [BUG-031](#bug-031) | Board labels and empty values | Defect | Low | P4 | Board | Excluded |
| [BUG-032](#bug-032) | No Shortlisting Drawer | FRD gap | Low | P4 | Shortlisting | Not built |
| [BUG-033](#bug-033) | PM cannot see a Direct opportunity on his project until it is approved | Defect | Medium | P3 | Requests Tracking / Direct | Needs clarification |
| [BUG-034](#bug-034) | Positions are not returned in the order they were created | Defect | Low | P4 | Opportunity detail | Won't fix |
| [BUG-035](#bug-035) | Ticket number is cut off in the board list | Defect | Low | P3 | Board list | Open |
| [BUG-036](#bug-036) | PM sees and can act on opportunities on his project that are not assigned to him | Defect | Medium | P2 | RBAC / PM scope | Open |

## BUG-001

**PM can create Existing-client Interview and Direct opportunities**

| Field | Details |
|---|---|
| Bug ID | BUG-001 (finding F-01) |
| Type | FRD conflict |
| Severity | High |
| Priority | P2 |
| Module | Create Opportunity / RBAC |
| FRD reference | Rule 3 raiser matrix; §7.5 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Pending decision |
| Retest note | Dev 26/10: PM raising Existing-Client and Direct tickets follows Figma; product confirming FRD vs Figma. Still reproduces (RBAC-007/015 → 201). |
| Linked test cases | TC-OPPM-007, TC-OPPM-028, TC-OPPM-048, TC-OPPTY-313, TC-OPPTY-321, TC-OPPTY-614 |

**Description:** The FRD raiser matrix says a PM cannot raise any opportunity or ticket. The build gives PM the create permission for their own projects, and the Create form is reachable by URL even though PM has no nav entry.

**Preconditions:** PM account gaurav.panchal@simformsolutions.com (roles EMPLOYEE, PM; manages "EventDriven | CQRS Framework").

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as gaurav.panchal@simformsolutions.com.
2. Note that the sidebar has no "Opportunity Allocation" entry.
3. Type https://simerp-dev.simform.solutions/pre-sales/new in the address bar.
4. Choose "Interview Opportunity", Client Type "Existing Client", Link Zoho Project = EventDriven | CQRS Framework.
5. Fill the Opportunity Title and one position (title, tech stack, department QA, priority High, seniority Mid, Fixed 50%).
6. Click "Create Opportunity".
7. Repeat with "Direct Opportunity" and an employee picked.

**Expected result:** Create page is blocked for PM (redirect to /unauthorized) and the API refuses the request (403).

**Actual result:** The form opens and both opportunities are created (API: POST /api/v1/opportunities → 201 OPP_002). Only Prospect is refused (403 OPP_008).

**Attachments:** `r-pm-new.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-002

**CSM cannot edit or add positions to an Interview opportunity they raised**

| Field | Details |
|---|---|
| Bug ID | BUG-002 (finding F-02) |
| Type | FRD gap |
| Severity | High |
| Priority | P2 |
| Module | Opportunity edit / RBAC |
| FRD reference | §7.6 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Fixed |
| Retest note | Retest 26/10: owning CSM edits the Interview opportunity (200) and adds positions (201). |
| Linked test cases | TC-OPPM-064, TC-OPPTY-336, TC-OPPTY-337 |

**Description:** FRD §7.6 gives CSM create/edit rights similar to PMO. A CSM can raise an Interview opportunity but cannot change it afterwards.

**Preconditions:** CSM tarun.sharma@simformsolutions.com; project AnalytixHub | Advanced Analytics.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as tarun.sharma@simformsolutions.com.
2. Requests Tracking → Opportunity Allocation → New Opportunities.
3. Create an Interview / Existing Client opportunity linked to AnalytixHub.
4. Open the new ticket.
5. Look for "Edit Ticket" and the position Edit / New position actions; try to change Special Instructions.
6. (API) PATCH /api/v1/opportunities/<id> {"specialInstructions":"edited by CSM"} and POST /api/v1/opportunities/<id>/positions with a valid position.

**Expected result:** The raising CSM can edit the opportunity and add/edit positions while it is Open.

**Actual result:** No edit possible: viewerCanEdit=false; PATCH → 403 OPP_151 "You are not allowed to edit this Opportunity"; add position → 403 AUTH_004.

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-003

**CSM cannot cancel an Interview ticket (Cancelled tag only exists for Direct)**

| Field | Details |
|---|---|
| Bug ID | BUG-003 (finding F-03) |
| Type | FRD gap |
| Severity | High |
| Priority | P2 |
| Module | Cancellation |
| FRD reference | Rule 22; §7.6; notification #19 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Not built |
| Retest note | Dev 26/10: cancel exists only for Direct tickets today. |
| Linked test cases | TC-OPPM-123, TC-OPPTY-338 |

**Description:** FRD rule 22: a CSM cancels a ticket by adding a Cancelled tag; the ticket stays in its stage and PMO is notified. In the build the tag works only on Direct tickets.

**Preconditions:** Interview opportunity raised by CSM tarun.sharma (e.g. "QA-AUTO CSM-raised INTERVIEW").

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as tarun.sharma@simformsolutions.com.
2. Open the Interview ticket raised by this CSM.
3. Look for a Cancel action.
4. (API) PATCH /api/v1/opportunities/openings/<openingId>/cancel {"reason":"client paused"}.

**Expected result:** CSM can cancel; Cancelled tag added; stage unchanged; PMO notified (notification #19).

**Actual result:** No cancel action for Interview tickets; API → 400 OPP_147 "Only an open Direct ticket that is not yet Approved or Rejected can be marked as cancelled".

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-004

**Preferred Candidate flag is missing**

| Field | Details |
|---|---|
| Bug ID | BUG-004 (finding F-04) |
| Type | FRD gap |
| Severity | High |
| Priority | P2 |
| Module | Shortlisting |
| FRD reference | Glossary; rule 14; §7.3; notification #7 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Not built |
| Retest note | Dev 26/10: Preferred Candidate not built yet. |
| Linked test cases | TC-OPPM-075, TC-OPPTY-368 |

**Description:** FRD rule 14 / glossary: RM/TM can flag a Preferred Candidate on the shortlist, auto-highlighted for TM. The build removed the per-candidate star; only "Preferred Employee" picked at creation remains. The backend's own guide still documents isPreferred.

**Preconditions:** Interview opportunity with a QA position; TM sudhansu.patel.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as sudhansu.patel@simformsolutions.com.
2. Open the ticket → QA position → Add/ Shortlist; add two candidates.
3. Look for a way to mark one candidate as Preferred (star / checkbox) in the dialog or on the candidate row.
4. (API) POST /api/v1/opportunities/positions/<id>/nominations {"candidates":[{"employeePublicId":"<id>","isPreferred":true}]}.

**Expected result:** A Preferred star can be set per candidate (one per position) and is highlighted for the TM.

**Actual result:** No Preferred control in the UI; API → 400 VAL_001 "property isPreferred should not exist".

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-005

**Interview schedule cannot be locked, and dragging a card back silently clears the interview date**

| Field | Details |
|---|---|
| Bug ID | BUG-005 (finding F-05) |
| Type | Defect |
| Severity | High |
| Priority | P2 |
| Module | Interview rounds / Kanban |
| FRD reference | Rule 17 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Not built |
| Retest note | Dev 26/10: finalize/lock not built yet. Back-drag now asks for confirmation in the UI before clearing the date (frontend 6e3d47f7); API still clears it after the move — confirmation not re-verified on screen. |
| Linked test cases | TC-OPPM-088, TC-OPPM-090, TC-OPPTY-439, TC-OPPTY-440, TC-OPPTY-423 |

**Description:** FRD rule 17: finalized interview schedules lock against accidental overwrite. There is no way to finalize, and a backward drag wipes the scheduled date without warning.

**Preconditions:** Candidate In Process on an Interview opportunity; logged in as PMO bhumi.chauhan.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as bhumi.chauhan@simformsolutions.com.
2. Open the candidate → Interview Rounds; set round 1 date to 3 days from now. Card moves to Interview Scheduled.
3. Look for a Finalize / Lock option on the round. (API: PATCH /api/v1/opportunities/rounds/<id> {"isFinalized":true}.)
4. Change the round date again.
5. On the Kanban, drag the card from Interview Scheduled back to Being Prepared.
6. Re-open Interview Rounds.

**Expected result:** A scheduled round can be finalized and then cannot be changed; a backward move asks for confirmation before clearing the schedule (or is blocked).

**Actual result:** No finalize option (API 400 "property isFinalized should not exist"); date can be changed any time; the drag succeeds without a prompt and the round's date is set to empty.

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-006

**A TM-sent approval request is approved by PMO, not by a TM**

| Field | Details |
|---|---|
| Bug ID | BUG-006 (finding F-06) |
| Type | FRD conflict |
| Severity | Medium |
| Priority | P2 |
| Module | TM approval |
| FRD reference | Rule 19; §7.3 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Pending decision |
| Retest note | Dev 26/10: PMO can approve any pick today; product decision pending. |
| Linked test cases | TC-OPPM-079, TC-OPPTY-392, TC-OPPTY-393 |

**Description:** FRD rule 19: TM Approval is final and owned only by the TM. In the build "the other side decides": when a TM sends a candidate, the TM cannot approve it and PMO approves it instead.

**Preconditions:** Interview opportunity, QA position; TM sudhansu.patel shortlisted Janki Naik.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as sudhansu.patel@simformsolutions.com.
2. Open the ticket and send Janki for approval. Card → Waiting for Approval.
3. As the same TM click Approve.
4. Log in at https://simerp-dev.simform.solutions/dev-login as bhumi.chauhan@simformsolutions.com (PMO) and approve Janki.

**Expected result:** The TM's approval is the final gate (either the TM's own send counts as approval, or another TM of the department approves).

**Actual result:** TM approve → 403 OPP_111 "You cannot approve or reject a request you sent"; PMO approve → 200, approvedBy = Bhumi Chauhan.

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-007

**PM cannot shortlist candidates**

| Field | Details |
|---|---|
| Bug ID | BUG-007 (finding F-07) |
| Type | FRD gap |
| Severity | Medium |
| Priority | P3 |
| Module | Shortlisting / RBAC |
| FRD reference | §7.5; rule 24 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Fixed |
| Retest note | Retest 26/10: PM shortlists on assigned OPP-0042 and own-project OPP-0039 (201); out-of-scope still 404. |
| Linked test cases | TC-OPPM-074, TC-OPPTY-380 |

**Description:** FRD §7.5 says PM shortlists with TM/EM. PM has no nominate permission and no board.

**Preconditions:** Opportunity assigned to PM gaurav.panchal.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as gaurav.panchal@simformsolutions.com.
2. Open the assigned opportunity from the assignment notification.
3. Look for Add/ Shortlist.
4. (API) POST /api/v1/opportunities/positions/<id>/nominations with a candidate.

**Expected result:** PM can shortlist on opportunities assigned to them.

**Actual result:** No shortlist action; API → 403 AUTH_004.

**Attachments:** `ev-bug007-pm-shortlist-button.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-008

**Prep material rights differ from FRD (PM/EM cannot add; TM can edit PMO's material)**

| Field | Details |
|---|---|
| Bug ID | BUG-008 (finding F-08) |
| Type | FRD gap |
| Severity | Medium |
| Priority | P3 |
| Module | Preparation material |
| FRD reference | Rule 5; §7.4; §7.5 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Fixed |
| Retest note | Retest 26/10: EM and PM add material (201); TM editing PMO material → 403 OPP_182. |
| Linked test cases | TC-OPPM-098, TC-OPPTY-582, TC-OPPTY-583, TC-OPPTY-584, TC-OPPTY-588, TC-OPPTY-589 |

**Description:** FRD: PM adds material on top of PMO's but cannot edit PMO's; EM standardises question banks. Build: PM and EM cannot add; TM can edit and delete any material including PMO's.

**Preconditions:** Interview opportunity with PMO material "PMO bank"; assigned PM gaurav.panchal.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as kunal.jadeja@simformsolutions.com (EM); open Preparation Material; try to add a link.
2. Log in at https://simerp-dev.simform.solutions/dev-login as gaurav.panchal@simformsolutions.com (PM); try the same.
3. Log in at https://simerp-dev.simform.solutions/dev-login as sudhansu.patel@simformsolutions.com (TM); edit the title of "PMO bank" and save.

**Expected result:** EM and PM can add material; only the owner (PMO) can edit/delete PMO's material.

**Actual result:** EM add → 403; PM add → 403; TM edit of PMO material → 200 (saved). Also no limit (29 links added) and duplicates allowed.

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-009

**No reason required to bypass TM approval or remove a shortlisted candidate**

| Field | Details |
|---|---|
| Bug ID | BUG-009 (finding F-09) |
| Type | FRD gap |
| Severity | Medium |
| Priority | P3 |
| Module | Shortlisting / approval |
| FRD reference | Rule 16; notification #8 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Fixed |
| Retest note | Retest 26/10: bypass without reason → 400; remove without reason → 400 (reason stored, sent to owners). |
| Linked test cases | TC-OPPM-076, TC-OPPM-082, TC-OPPTY-406, TC-OPPTY-408 |

**Description:** FRD rule 16: removing or changing a shortlisted status needs a brief reason; notification #8 carries it.

**Preconditions:** Two candidates in Shortlisted; logged in as PMO.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as bhumi.chauhan@simformsolutions.com.
2. Click Bypass approval on candidate 1 and leave the reason empty; confirm.
3. Click the delete (bin) action on candidate 2 and confirm.
4. Log in as candidate 2 and open the bell notifications.

**Expected result:** Both actions require a reason; the candidate's notification shows it.

**Actual result:** Bypass succeeds with no reason (200); removal succeeds with no reason asked; candidate gets "… is no longer shortlisted" with no reason.

**Attachments:** `ev-bug009-remove-reason-dialog.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-010

**Project can be unlinked or changed after a candidate is allocated to it**

| Field | Details |
|---|---|
| Bug ID | BUG-010 (finding F-10) |
| Type | Defect |
| Severity | Medium |
| Priority | P2 |
| Module | Project association |
| FRD reference | §5 Project Association |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Fixed |
| Retest note | Retest 26/10 on OPP-0054: change/unlink → 400 OPP_176; still editable when nothing is allocated. |
| Linked test cases | TC-OPPM-067, TC-OPPTY-511, TC-OPPTY-512 |

**Description:** After Allocate created an allocation on project A, the opportunity can be re-linked to project B or unlinked, so the opportunity no longer matches its allocation.

**Preconditions:** OPP-0054 "QA-AUTO E2E Allocate-1": Akash Pandya in Project Allocated on AnalytixHub (NA-0416 approved).

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as bhumi.chauhan@simformsolutions.com.
2. Open OPP-0054 → Link Project.
3. Change the project to "ElitePay | Payroll System" and save.
4. Unlink the project.

**Expected result:** Both refused while any opening is Project Allocated (or Won with an allocation pending).

**Actual result:** PATCH /opportunities/<id>/project → 200 "Project associated"; DELETE → 200 "Project unlinked". NA-0416 stays on AnalytixHub.

**Attachments:** `ev-bug010-link-project.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-011

**Assigned CSM does not receive the "assigned to you" notification**

| Field | Details |
|---|---|
| Bug ID | BUG-011 (finding F-11) |
| Type | Defect |
| Severity | Medium |
| Priority | P3 |
| Module | Notifications |
| FRD reference | Notification #18 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Fixed |
| Retest note | Retest 26/10: OPP-0126 — both PM and CSM got 'You've been assigned to OPP-0126'. |
| Linked test cases | TC-OPPM-127, TC-OPPTY-332 |

**Description:** When PMO assigns both a PM and a CSM, only the PM is notified.

**Preconditions:** PMO bhumi.chauhan; PM gaurav.panchal; CSM tarun.sharma.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as bhumi.chauhan@simformsolutions.com.
2. New Opportunities → fill a Prospect opportunity; Assign to PM = Gaurav Panchal; Assign to CSM = Tarun Sharma; create (e.g. OPP-0042).
3. Log in as gaurav.panchal and open the bell.
4. Log in as tarun.sharma and open the bell.

**Expected result:** Both receive "You've been assigned to OPP-nnnn".

**Actual result:** PM receives it; CSM receives nothing.

**Attachments:** `ev-bug011-csm-notifications.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-012

**One employee can be approved (In Process) on two opportunities at the same time**

| Field | Details |
|---|---|
| Bug ID | BUG-012 (finding F-12) |
| Type | Gap / risk |
| Severity | Medium |
| Priority | P3 |
| Module | Approval / availability |
| FRD reference | Candidate status tag; two-way alert |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Open |
| Retest note | Re-checked 26/10 evening (QA lead: an employee must not be approvable once allocated elsewhere). Not managed: Akash Pandya, already allocated 40% (NA-0416), approved by TM for another 50% on OPP-0153 (200); Nisha Das, fully booked (0% remaining of 100%), bypass-approved for 50% on OPP-0154 (200, no warning). Ankita Das is In Process on 6 opportunities at 50% each. |
| Linked test cases | TC-OPPM-083, TC-OPPM-140, TC-OPPTY-460 |

**Description:** There is no check or warning when an employee already Blocked on one opportunity is approved on another; the only signal is the "won elsewhere" notification after one is Won.

**Preconditions:** Janki Naik In Process on OPP-0047 and shortlisted on OPP-0048.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as bhumi.chauhan@simformsolutions.com.
2. Open OPP-0048 → Janki → Bypass approval with a reason.

**Expected result:** Warning (or block) that the employee is already In Process / Blocked on OPP-0047.

**Actual result:** Bypass succeeds silently (200); Janki is Blocked on both.

**Attachments:** `ev-bug012-fully-booked-approved.png`, `ev-bug012-profile-opportunities.png`, `ev-bug012-fully-booked-allocations.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-013

**A Direct request can hold only one employee**

| Field | Details |
|---|---|
| Bug ID | BUG-013 (finding F-13) |
| Type | FRD conflict |
| Severity | Medium |
| Priority | P3 |
| Module | Direct create |
| FRD reference | §5 Direct flow |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Pending decision |
| Retest note | Dev 26/10: a Direct request has exactly one position and one employee; product decision pending. |
| Linked test cases | TC-OPPM-046, TC-OPPTY-529 |

**Description:** FRD: a New Allocation Request has one row per employee and produces one ticket per row. Build: a Direct opportunity has exactly one position/employee.

**Preconditions:** CSM tarun.sharma; project AnalytixHub; two free employees.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as tarun.sharma@simformsolutions.com.
2. New Opportunities → Direct Opportunity → Existing Client → AnalytixHub.
3. Try to add a second position/row with a second employee.
4. (API) POST /api/v1/opportunities with requestType DIRECT and two positions.

**Expected result:** Multiple employee rows accepted; one ticket created per row.

**Actual result:** API → 400 OPP_175 "A Direct Opportunity has exactly one Position" (code not in the backend guide).

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-014

**CSM raising a Direct ticket sees an empty two-way allocation alert**

| Field | Details |
|---|---|
| Bug ID | BUG-014 (finding F-14) |
| Type | Defect |
| Severity | Medium |
| Priority | P3 |
| Module | Two-way allocation alert |
| FRD reference | Change list — two-way allocation alert |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | As designed |
| Retest note | Dev 26/10: Direct opportunities left out of the two-way alert by decision (15 Oct). |
| Linked test cases | TC-OPPM-107, TC-OPPTY-545, TC-OPPTY-546 |

**Description:** The alert relies on the caller's employee scope, so a CSM does not see an employee's interview opportunities even though they are allocating that employee.

**Preconditions:** Janki Naik is on two open Interview opportunities (OPP-0047, OPP-0048).

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as tarun.sharma@simformsolutions.com.
2. New Opportunities → Direct → pick Janki Naik as the employee.
3. Watch for the allocation alert.
4. (API) GET /api/v1/opportunities/allocation-conflicts?employeePublicIds=<Janki> as CSM, then as PMO.

**Expected result:** Alert lists OPP-0047 (50%) and OPP-0048 (50%) for the CSM as it does for PMO.

**Actual result:** CSM gets an empty list; PMO gets both opportunities.

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-015

**Create accepts contradictory data (Prospect with project; Interview with no interview)**

| Field | Details |
|---|---|
| Bug ID | BUG-015 (finding F-15) |
| Type | Defect |
| Severity | Medium |
| Priority | P3 |
| Module | Create validation |
| FRD reference | §2 Client Details; Interview vs Direct |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Fixed |
| Retest note | Retest 26/10: Prospect sent with a project is saved as Existing Client. 'Interview Required' field removed by decision (23 Oct) — that part retired. |
| Linked test cases | TC-OPPM-020, TC-OPPM-037, TC-OPPTY-237, TC-OPPTY-277 |

**Description:** The API accepts combinations the form normally prevents.

**Preconditions:** PMO account; API access (browser dev tools or curl with session cookie).

**Steps to reproduce**

1. (API) POST /api/v1/opportunities with clientType "PROSPECT" and a projectPublicId.
2. (API) POST an INTERVIEW opportunity whose position has "isInterviewRequired": false.
3. Open both tickets.

**Expected result:** Both refused (400), or the first saved as Existing Client.

**Actual result:** Both created (201): a Prospect with a linked project, and an Interview ticket that needs no interview.

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-016

**Readable ticket ID is never shown; Ticket ID column is truncated**

| Field | Details |
|---|---|
| Bug ID | BUG-016 (finding F-26) |
| Type | FRD gap |
| Severity | Medium |
| Priority | P3 |
| Module | Board list |
| FRD reference | Change list — readable ticket ID |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | As designed |
| Retest note | Dev 26/10: readable ID removed from UI by decision (19 Oct); search by OPP number. Note: the Ticket ID column still truncates the OPP number — tracked in BUG-031. |
| Linked test cases | TC-OPPM-051, TC-OPPTY-620, TC-OPPTY-488 |

**Description:** The API generates a readable position ID (e.g. AN-QA-60) and search works on it, but the UI never displays it; the Ticket ID column shows "OPP-00…".

**Preconditions:** PMO; several opportunities.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as bhumi.chauhan@simformsolutions.com.
2. Opportunity Allocation → List view.
3. Read the Ticket ID column.
4. Search "AN-QA-60".

**Expected result:** Short readable ID visible on every row; full ticket number readable.

**Actual result:** Ticket IDs cut to "OPP-00…"; readable ID not shown anywhere (search still finds it).

**Attachments:** `rt2-list.png`, `01-pmo-presales.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-017

**[WITHDRAWN — not a bug] PM list of assigned opportunities**

| Field | Details |
|---|---|
| Bug ID | BUG-017 (finding F-24) |
| Type | Withdrawn |
| Severity | Low |
| Priority | P4 |
| Module | Navigation |
| FRD reference | §7.5; rule 23 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Withdrawn |
| Retest note | Not a bug (22/10): PM list is under Requests Tracking → Project Allocation → Interview Allocation. |
| Linked test cases | TC-OPPTY-613, TC-OPPTY-329 |

**Description:** Originally reported as "PM has no screen listing assigned opportunities". Re-checked 22 Oct 2026: the PM sees them under Requests Tracking → Project Allocation → "Interview Allocation" tab (and "Direct Allocation" tab), which meets FRD §7.5 including the Interview/Direct flag. The original check only looked at Opportunity Allocation (/pre-sales), which is intentionally not shown to PM.

**Preconditions:** PM gaurav.panchal with assigned opportunity OPP-0042.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as gaurav.panchal@simformsolutions.com.
2. Requests Tracking → Project Allocation → Interview Allocation tab.

**Expected result:** Assigned opportunities listed.

**Actual result:** Listed as expected (OPP-0066, OPP-0042, OPP-0039). No defect.

**Attachments:** `pm-my-tickets-interview.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-018

**API accepts dates the UI forbids or that make no sense**

| Field | Details |
|---|---|
| Bug ID | BUG-018 (finding F-16) |
| Type | Defect |
| Severity | Low |
| Priority | P3 |
| Module | Create validation |
| FRD reference | Form rules |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Fixed |
| Retest note | Retest 26/10: past allocation/interview date, end without start, interview after allocation → all 400 (OPP_177–180). |
| Linked test cases | TC-OPPM-036, TC-OPPTY-271, TC-OPPTY-274, TC-OPPTY-278, TC-OPPTY-279 |

**Description:** Server-side validation does not match the form.

**Preconditions:** PMO; API access.

**Steps to reproduce**

1. (API) Create a position with tentativeAllocationDate = 30 days ago.
2. (API) Create with tentativeInterviewDate = 5 days ago.
3. (API) Create with tentativeInterviewDate after tentativeAllocationDate.
4. (API) Create with tentativeAllocationEndDate but no start date.

**Expected result:** Each refused (400), matching the UI date picker rules.

**Actual result:** All four created (201).

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-019

**Duplicate tech stacks are stored**

| Field | Details |
|---|---|
| Bug ID | BUG-019 (finding F-17) |
| Type | Defect |
| Severity | Low |
| Priority | P4 |
| Module | Create validation |
| FRD reference | Data quality |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Fixed |
| Retest note | Retest 26/10: ['Java','Java','java'] stored once. |
| Linked test cases | TC-OPPM-031, TC-OPPTY-243 |

**Description:** Tech stack values are not de-duplicated.

**Preconditions:** PMO; API access.

**Steps to reproduce**

1. (API) Create a position with techStacks ["Java","Java","java"].
2. Open the ticket.

**Expected result:** Stored once ("Java").

**Actual result:** Stored as ["Java","Java","java"].

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-020

**No change log on the opportunity and no "Send Reminder"**

| Field | Details |
|---|---|
| Bug ID | BUG-020 (finding F-18) |
| Type | FRD gap |
| Severity | Low |
| Priority | P4 |
| Module | Audit / reminders |
| FRD reference | §8; rule 17; §7.5 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Not built |
| Retest note | Dev 26/10: no edit history and no Send Reminder yet. |
| Linked test cases | TC-OPPM-065, TC-OPPM-100, TC-OPPTY-595, TC-OPPTY-606 |

**Description:** FRD §8 asks for a full change log with recent edits highlighted; §7.5 asks for a Send Reminder button.

**Preconditions:** PMO; any opportunity.

**Steps to reproduce**

1. Edit the opportunity title and a position.
2. Look for a history / activity log.
3. Look for "Send Reminder" for a candidate with pending checklist items.

**Expected result:** Change log visible; reminder can be sent.

**Actual result:** Only Updated By / Updated On shown; no reminder action (API route does not exist).

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-021

**Priority rule differs from FRD**

| Field | Details |
|---|---|
| Bug ID | BUG-021 (finding F-19) |
| Type | FRD conflict |
| Severity | Low |
| Priority | P4 |
| Module | Priority |
| FRD reference | Rule 9 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Needs clarification |
| Retest note | Awaiting QA lead / product: keep the build's allocation-date priority and update FRD rule 9, or build ticket-age priority. |
| Linked test cases | TC-OPPTY-531, TC-OPPTY-532 |

**Description:** FRD rule 9 (marked TBD) uses ticket age; the build derives Direct priority from days until the allocation date and leaves Interview priority manual.

**Preconditions:** PMO.

**Steps to reproduce**

1. Create Direct tickets with allocation dates +3, +10, +30 days.
2. Leave an Interview ticket open for over a week.

**Expected result:** Priority follows FRD rule 9 (once the rule is fixed — it is also inverted).

**Actual result:** +3 High, +10 Medium, +30 Low; no change with ticket age.

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-022

**Admin does not see the view-only banner**

| Field | Details |
|---|---|
| Bug ID | BUG-022 (finding F-25) |
| Type | Defect |
| Severity | Low |
| Priority | P4 |
| Module | Board |
| FRD reference | §7.1 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | As designed |
| Retest note | Dev 26/10: banner hidden for Admin on purpose — its 'department / view-scoped' text isn't true for Admin. |
| Linked test cases | TC-OPPM-014, TC-OPPTY-617 |

**Description:** FRD §7.1 defines the banner for Admin; it is shown to TM/EM/RM/CSM but not Admin.

**Preconditions:** Admin ceo@simformsolutions.com.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as ceo@simformsolutions.com.
2. Opportunity Allocation → Kanban.

**Expected result:** Banner "You have department / view-scoped access. Kanban card dragging is exclusively managed by IS-PMO." shown.

**Actual result:** No banner for Admin.

**Attachments:** `kr-admin.png`, `kr-tmqa.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-023

**Notification content issues**

| Field | Details |
|---|---|
| Bug ID | BUG-023 (finding F-20) |
| Type | Defect |
| Severity | Low |
| Priority | P4 |
| Module | Notifications |
| FRD reference | §11 notifications #2, #9, #10 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Needs clarification |
| Retest note | Rejection recipients verified 26/10: only the rejected candidate (and PMO/owners) receive it; other candidates on the same position do not ✓. Open question: should EM get 'New position' notifications for single-department positions (FRD #2 says multi-department only)? Candidate message is still third person without a reason. |
| Linked test cases | TC-OPPM-126 |

**Description:** Candidate-facing rejection text is third person without a reason; EM gets "new position" for every position; free-text interviewer never notified.

**Preconditions:** Candidate Akash Singh rejected by TM with reason "Failed R1 coding".

**Steps to reproduce**

1. Log in as akash.singh and open the bell.
2. Log in as kunal.jadeja (EM) and count "New position" notifications.

**Expected result:** Candidate: "You were not selected for … Reason: …". EM notified only for multi-department positions (notification #2).

**Actual result:** Candidate sees "Akash Singh was rejected for … — the slot is open again." with no reason; EM received 49 "New position" notifications.

**Attachments:** `ev-bug023-candidate-notification.png`, `ev-bug023-em-notification.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-024

**Backend frontend-guide is out of date with the deployed API**

| Field | Details |
|---|---|
| Bug ID | BUG-024 (finding F-21) |
| Type | Docs |
| Severity | Low |
| Priority | P4 |
| Module | Documentation |
| FRD reference | — |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Excluded |
| Retest note | Not in the QA lead's bug list (26 Oct); not reported (documentation only). |
| Linked test cases | TC-OPPM-039, TC-OPPTY-261, TC-OPPTY-287, TC-OPPTY-604, TC-OPPTY-562 |

**Description:** docs/frontend-guide-opportunities.md (backend repo) documents fields and codes that no longer exist and misses new ones.

**Preconditions:** —

**Steps to reproduce**

1. Compare the guide with the API: isPreferred, isFinalized, manualMockAt, default prep links, OPP_026, cancel reason, moving a cancelled ticket, Candidate.currentProjects, OPP_175.

**Expected result:** Guide matches the API.

**Actual result:** isPreferred / isFinalized / manualMockAt rejected; no default prep links; VAL_001 instead of OPP_026; cancel reason now mandatory; PMO cannot move a cancelled ticket (OPP_164); field is "projects"; OPP_175 undocumented.

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-025

**Extra candidates get their own cards beyond the opening count**

| Field | Details |
|---|---|
| Bug ID | BUG-025 (finding F-22) |
| Type | FRD conflict |
| Severity | Low |
| Priority | P4 |
| Module | Kanban |
| FRD reference | Rule 13 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Excluded |
| Retest note | Not in the QA lead's bug list (26 Oct); not reported. Build follows the 'one card per candidate' decision. |
| Linked test cases | TC-OPPM-069, TC-OPPTY-373, TC-OPPTY-455, TC-OPPTY-601 |

**Description:** FRD rule 13: N openings = N cards. Build creates one card per candidate, and seat numbers keep gaps after a position is deleted.

**Preconditions:** Position with 2 openings.

**Steps to reproduce**

1. Shortlist 3 candidates.
2. Lower openings to 1.
3. Delete another position and add openings.

**Expected result:** Behaviour defined in FRD ("Opening x of N").

**Actual result:** 3 cards for 2 openings; 4 candidate cards kept at 1 opening; seats #1, #3, #4, #5.

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-026

**Requests Tracking Interview tab tiles mix Lost with No Longer Required and ticket statuses**

| Field | Details |
|---|---|
| Bug ID | BUG-026 (finding F-23) |
| Type | Defect |
| Severity | Low |
| Priority | P4 |
| Module | Requests Tracking |
| FRD reference | Glossary Lost vs NLR |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Not required |
| Retest note | QA lead 26/10: keeping Lost and No Longer Required apart on the Requests Tracking tiles is not required. |
| Linked test cases | TC-OPPM-110 |

**Description:** Tiles combine opportunities and allocation tickets.

**Preconditions:** PMO; at least one NLR opportunity and closed allocation tickets.

**Steps to reproduce**

1. Requests Tracking → Project Allocation → Interview tab; read the tiles.
2. Compare with the Opportunity Allocation board tiles.

**Expected result:** Lost and No Longer Required counted separately; ticket statuses not mixed in.

**Actual result:** Board: Lost 0, NLR 1. Tracking: Lost 3 (1 NLR + 2 CLOSED tickets), Won 14 (1 opportunity + 13 APPROVED tickets); no NLR tile.

**Attachments:** `ev-bug026-tracking-tiles.png`, `ev-bug026-board-tiles.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-027

**Date-range presets differ from FRD**

| Field | Details |
|---|---|
| Bug ID | BUG-027 (finding F-27) |
| Type | FRD gap |
| Severity | Low |
| Priority | P4 |
| Module | Board filters |
| FRD reference | Rule 7 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Not built |
| Retest note | Dev 26/10: only a custom date range exists today. |
| Linked test cases | TC-OPPM-054, TC-OPPTY-621 |

**Description:** FRD rule 7 presets are Day 1–365 / Last 1, 3, 6 months.

**Preconditions:** PMO.

**Steps to reproduce**

1. Open the created-date range control on the board.

**Expected result:** FRD presets.

**Actual result:** This week / This month / This year / Last year / Previous year.

**Attachments:** API response captured in the run log (`reports/results/results-2026-10-21-oppty-e2e.json`).

## BUG-028

**Create form validation and copy issues**

| Field | Details |
|---|---|
| Bug ID | BUG-028 (finding F-29) |
| Type | Defect |
| Severity | Low |
| Priority | P4 |
| Module | Create form |
| FRD reference | Form usability |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Open |
| Retest note | QA lead 26/10: marked as a bug (TC-OPPM-029). Empty form still shows only '8 required fields left' — no message on each required field. Placeholder and date-outline parts fixed. |
| Linked test cases | TC-OPPM-023, TC-OPPM-029, TC-OPPTY-626, TC-OPPTY-627 |

**Description:** Inline errors are incomplete and some copy is wrong.

**Preconditions:** PMO on /pre-sales/new.

**Steps to reproduce**

1. Choose Interview + Prospect; leave Position #1 empty; click into and out of each field.
2. Look at Tentative Allocation Date.
3. Look at Interviewer LinkedIn placeholder and the project hint.

**Expected result:** Each required field shows its message; non-required fields are not marked red; placeholder is a person URL; PM/CSM hint only for PM/CSM.

**Actual result:** Only Position Title shows a message; Tentative Allocation Date outlined red with no star/message; placeholder "https://linkedin.com/company/.."; hint shown to PMO.

**Attachments:** `rt2-form.png`, `f2-pmo-empty-submit.png`, `f-pmo-interview.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-029

**No Longer Required tickets are grey, not red-bordered**

| Field | Details |
|---|---|
| Bug ID | BUG-029 (finding F-28) |
| Type | FRD gap |
| Severity | Low |
| Priority | P4 |
| Module | Board |
| FRD reference | Glossary |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Fixed |
| Retest note | Retest 26/10: No Longer Required rows have a red border. |
| Linked test cases | TC-OPPM-053, TC-OPPTY-622 |

**Description:** Glossary asks for a red-border highlight in the archive view.

**Preconditions:** An NLR opportunity.

**Steps to reproduce**

1. Open the No Longer Required column / status filter.

**Expected result:** Red-border highlight.

**Actual result:** Grey (muted) styling.

**Attachments:** `rt-nlr.png`, `k-pmo-status.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-030

**Candidate view: no personal board; competitor count visible**

| Field | Details |
|---|---|
| Bug ID | BUG-030 (finding F-30) |
| Type | Gap |
| Severity | Low |
| Priority | P4 |
| Module | Employee self-service |
| FRD reference | Rule 4; §7.7 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Fixed |
| Retest note | Candidate no longer sees the shortlisted count ✓. 'Requests Tracking' breadcrumb is expected (QA lead 26/10). Personal employee Kanban not built (dev). |
| Linked test cases | TC-OPPM-092, TC-OPPM-138, TC-OPPTY-634, TC-OPPTY-635 |

**Description:** Employee has no read-mostly board; on the ticket the candidate sees how many others are shortlisted and a breadcrumb to a page they cannot open.

**Preconditions:** Candidate janki.naik on OPP-0047.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as janki.naik@simformsolutions.com.
2. Open /pre-sales.
3. Profile → Opportunities → open OPP-0047.

**Expected result:** Employee board (FRD rule 4) or a decision to drop it; no competitor count; correct breadcrumb.

**Actual result:** /pre-sales → /unauthorized; detail shows "Shortlisted ratio: 4" and breadcrumb "Requests Tracking".

**Attachments:** `rt-candidate.png`, `c-janki-detail.png`, `c-janki-board.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-031

**Board labels and empty values**

| Field | Details |
|---|---|
| Bug ID | BUG-031 (finding F-31) |
| Type | Defect |
| Severity | Low |
| Priority | P4 |
| Module | Board |
| FRD reference | House rule: readable placeholders |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Excluded |
| Retest note | Not in the QA lead's bug list (26 Oct); not reported. Board tiles, NLR tile, 'No candidate' and shortfall text were fixed; ticket-number truncation is reported separately as BUG-035. |
| Linked test cases | TC-OPPM-010, TC-OPPM-050, TC-OPPM-057, TC-OPPM-070, TC-OPPTY-623, TC-OPPTY-636 |

**Description:** Tile/label wording and empty cells.

**Preconditions:** PMO.

**Steps to reproduce**

1. Read tiles and compare with card count.
2. Find a list row with no candidate.
3. Read the "Shortlisted ratio" label.

**Expected result:** Clear labels; a word placeholder for empty values.

**Actual result:** "All Tickets 48" counts opportunities while 90 cards show; no NLR tile; "-" in empty cells; "ratio" shows a count; shortfall text "Needs 1 candidates … shortlist 1 more" (wrong plural, and shown to PM who cannot shortlist).

**Attachments:** `ev-bug031-ratio-label.png`, `b-pmo-kanban.png`, `pmre-detail-0042.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-032

**No Shortlisting Drawer**

| Field | Details |
|---|---|
| Bug ID | BUG-032 (finding F-32) |
| Type | FRD gap |
| Severity | Low |
| Priority | P4 |
| Module | Shortlisting |
| FRD reference | Glossary; §7.3 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Not built |
| Retest note | Dev 26/10: drawer not built; name links to the profile. |
| Linked test cases | TC-OPPTY-631 |

**Description:** Glossary/§7.3 drawer (availability date, utilization priority, skills, shift, current allocations, visa, profile link) is not built (Milestone 2).

**Preconditions:** PMO.

**Steps to reproduce**

1. Open Add/ Shortlist and click a candidate name.

**Expected result:** Drawer opens with the listed fields.

**Actual result:** No drawer; only the picker table.

**Attachments:** `d2-pmo-0047-shortlist.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-033

**PM cannot see a Direct opportunity on his project until it is approved**

| Field | Details |
|---|---|
| Bug ID | BUG-033 (finding F-33) |
| Type | Defect |
| Severity | Medium |
| Priority | P3 |
| Module | Requests Tracking / Direct |
| FRD reference | §7.5 PM tracks requests; rule 23 |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Needs clarification |
| Retest note | Still reproduces: OPP-0041 (raised by PM himself, not assigned to him) is not in his Direct Allocation tab until approved. Question: with 'PM sees only assigned tickets', should a PM see a Direct request he raised himself? |
| Linked test cases | TC-OPPM-009 |

**Description:** The PM's "Direct Allocation" tab lists allocation tickets only. A Direct opportunity raised by the PM (or on the PM's project) is invisible to him while Open / In Review / Awaiting, because the Pre-sales Direct board (/pre-sales) is not available to PM. The API does return it to him (GET /opportunities/openings?requestType=DIRECT).

**Preconditions:** PM gaurav.panchal raised Direct opportunity OPP-0041 on EventDriven | CQRS Framework (status Open).

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as gaurav.panchal@simformsolutions.com.
2. Requests Tracking → Project Allocation → "Direct Allocation" tab.
3. Search OPP-0041.
4. Open /pre-sales.

**Expected result:** OPP-0041 is listed with its Direct stage so the PM can track the request he raised.

**Actual result:** Direct Allocation tab shows "No tickets found" (all tiles 00); /pre-sales → /unauthorized. The ticket only becomes visible once PMO approves it and an NA ticket is created.

**Attachments:** `ev-bug033-pm-direct-tab.png`, `pmre-direct-tab.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-034

**Positions are not returned in the order they were created**

| Field | Details |
|---|---|
| Bug ID | BUG-034 (finding F-34) |
| Type | Defect |
| Severity | Low |
| Priority | P4 |
| Module | Opportunity detail |
| FRD reference | Backend contract: positions in created order |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Won't fix |
| Retest note | Ignored by QA lead 26/10. |
| Linked test cases | TC-OPPM-134, TC-OPPTY-650, TC-OPPTY-365 |

**Description:** The API contract says positions come back in created order. Across 5 new opportunities with positions A, B, C the order was BCA, ABC, ACB, BAC, BAC — stable per opportunity but random between them, so the detail page and Ticket Info list positions in a different order from the form.

**Preconditions:** PMO bhumi.chauhan.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as bhumi.chauhan@simformsolutions.com.
2. Create an opportunity with three positions titled A-first, B-second, C-third.
3. Open the ticket → Position Details.
4. Repeat 4 more times.

**Expected result:** Positions always listed A, B, C (created order).

**Actual result:** Detail page order varies between opportunities: OPP-0148 shows C, B, A; OPP-0145 shows B, A, C. Board list order is correct.

**Attachments:** `ev-bug034-detail-order.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-035

**Ticket number is cut off in the board list**

| Field | Details |
|---|---|
| Bug ID | BUG-035 (finding F-35) |
| Type | Defect |
| Severity | Low |
| Priority | P3 |
| Module | Board list |
| FRD reference | Developer decision 19 Oct: search by OPP number |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Open |
| Retest note | Re-checked 26/10 evening: Ticket ID column shows 'OPP-014…' — number cut off. Search by OPP number is the agreed way to find tickets (readable ID removed), so the full number must be visible. |
| Linked test cases | TC-OPPM-137 |

**Description:** The Ticket ID column on Opportunity Allocation → List truncates the ticket number (e.g. "OPP-014…"). Since the readable ID was removed and search by OPP number is the agreed way to find a ticket, the number must be fully readable.

**Preconditions:** PMO bhumi.chauhan; board has opportunities OPP-0100 and above.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as bhumi.chauhan@simformsolutions.com.
2. Requests Tracking → Opportunity Allocation → List view.
3. Read the Ticket ID column.

**Expected result:** Full ticket number visible (e.g. OPP-0148).

**Actual result:** Number cut off: "OPP-014…".

**Attachments:** `rt2-list.png` (in `reports/screenshots/2026-10-22/oppty/`)

## BUG-036

**PM sees and can act on opportunities on his project that are not assigned to him**

| Field | Details |
|---|---|
| Bug ID | BUG-036 (finding F-36) |
| Type | Defect |
| Severity | Medium |
| Priority | P2 |
| Module | RBAC / PM scope |
| FRD reference | Rule 23; QA lead 26 Oct |
| Environment | SimERP DEV 6.5.0 — https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1); Chromium (Playwright) on Linux; tested 21–22 Oct 2026 |
| Status (retest 26 Oct) | Open |
| Retest note | New 26/10 (rule from QA lead: PM sees an opportunity only if assigned to it). Re-tested 27/10: still reproduces (TC-OPPTY-2079). |
| Zoho | **SI4-I597** — filed 27 Oct 2026, assigned to Parshva Vora, linked to SI4-T1267 |
| Linked test cases | TC-OPPM-139, TC-OPPTY-656 |

**Description:** Rule confirmed by QA lead (26 Oct): a PM sees an opportunity only if it is assigned to him. Today the PM also sees every opportunity linked to a project he manages, and is offered Add/ Shortlist on it.

**Preconditions:** PM gaurav.panchal manages "EventDriven | CQRS Framework". PMO raises OPP-0150 on EventDriven with no Assign to PM.

**Steps to reproduce**

1. Log in at https://simerp-dev.simform.solutions/dev-login as bhumi.chauhan@simformsolutions.com (PMO) and create an Interview opportunity, Existing Client, project EventDriven | CQRS Framework, leave "Assign to PM" empty (OPP-0150).
2. Log in at https://simerp-dev.simform.solutions/dev-login as gaurav.panchal@simformsolutions.com (PM).
3. Requests Tracking → Project Allocation → Interview Allocation; search OPP-0150.
4. Open OPP-0150.

**Expected result:** OPP-0150 is not listed and cannot be opened by the PM (only opportunities assigned to him).

**Actual result:** OPP-0150 is listed and opens (API 200); the position shows "Add/ Shortlist" for the PM. For comparison: assigned OPP-0151 visible ✓, unrelated OPP-0152 hidden ✓.

**Attachments:** `ev-bug036-pm-sees-unassigned-detail.png`, `ev-bug036-pm-sees-unassigned-list.png` (in `reports/screenshots/2026-10-22/oppty/`)