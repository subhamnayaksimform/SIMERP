# Pre-sales Opportunities (Interview & Direct allocation) — end-to-end test findings

**Feature:** Opportunity Allocation (`/pre-sales`) — backend SI4-T1267, frontend SI4-T1446
**Environment:** SimERP DEV 6.5.0 (`simerp-dev.simform.solutions`), tested 21–22 Oct 2026
**Requirement baseline:** *SimERP_Presales Opportunity flow_FRD_RoleWise_v2.0* (incl. the Interview Flow change list) and the backend contract `docs/frontend-guide-opportunities.md`
**Earlier desk review:** [2026-10-09-presales-opportunity-frd-v2-review.md](2026-10-09-presales-opportunity-frd-v2-review.md) (written before the build existed)

## Retest — 26 Oct 2026

After the developer fixes merged on 26 Oct: full regression (436 API/UI checks, no new allocations created), 23 targeted retests, and the QA lead's review (26 Oct). Only the bugs in the QA lead's list are reported as open.

| Status | Bugs |
|---|---|
| **Open** (4) | BUG-012 One employee can be approved (In Process) on two opportunities at the same time; BUG-028 Create form validation and copy issues; BUG-035 Ticket number is cut off in the board list; BUG-036 PM sees and can act on opportunities on his project that are not assigned to him |
| **Needs clarification** (3) | BUG-021 Priority rule differs from FRD; BUG-023 Notification content issues; BUG-033 PM cannot see a Direct opportunity on his project until it is approved |
| **Fixed** (11) | BUG-002 CSM cannot edit or add positions to an Interview opportunity they raised; BUG-007 PM cannot shortlist candidates; BUG-008 Prep material rights differ from FRD (PM/EM cannot add; TM can edit PMO's material); BUG-009 No reason required to bypass TM approval or remove a shortlisted candidate; BUG-010 Project can be unlinked or changed after a candidate is allocated to it; BUG-011 Assigned CSM does not receive the "assigned to you" notification; BUG-015 Create accepts contradictory data (Prospect with project; Interview with no interview); BUG-018 API accepts dates the UI forbids or that make no sense; BUG-019 Duplicate tech stacks are stored; BUG-029 No Longer Required tickets are grey, not red-bordered; BUG-030 Candidate view: no personal board; competitor count visible |
| **Not built** (6) | BUG-003 CSM cannot cancel an Interview ticket (Cancelled tag only exists for Direct); BUG-004 Preferred Candidate flag is missing; BUG-005 Interview schedule cannot be locked, and dragging a card back silently clears the interview date; BUG-020 No change log on the opportunity and no "Send Reminder"; BUG-027 Date-range presets differ from FRD; BUG-032 No Shortlisting Drawer |
| **As designed** (3) | BUG-014 CSM raising a Direct ticket sees an empty two-way allocation alert; BUG-016 Readable ticket ID is never shown; Ticket ID column is truncated; BUG-022 Admin does not see the view-only banner |
| **Pending decision** (3) | BUG-001 PM can create Existing-client Interview and Direct opportunities; BUG-006 A TM-sent approval request is approved by PMO, not by a TM; BUG-013 A Direct request can hold only one employee |
| **Not required** (1) | BUG-026 Requests Tracking Interview tab tiles mix Lost with No Longer Required and ticket statuses |
| **Won't fix** (1) | BUG-034 Positions are not returned in the order they were created |
| **Excluded** (3) | BUG-024 Backend frontend-guide is out of date with the deployed API; BUG-025 Extra candidates get their own cards beyond the opening count; BUG-031 Board labels and empty values |
| **Withdrawn** (1) | BUG-017 [WITHDRAWN — not a bug] PM list of assigned opportunities |

**Open bugs:**

- **BUG-012** (Medium) One employee can be approved (In Process) on two opportunities at the same time — Re-checked 26/10 evening (QA lead: an employee must not be approvable once allocated elsewhere). Not managed: Akash Pandya, already allocated 40% (NA-0416), approved by TM for another 50% on OPP-0153 (200); Nisha Das, fully booked (0% remaining of 100%), bypass-approved for 50% on OPP-0154 (200, no warning). Ankita Das is In Process on 6 opportunities at 50% each.
- **BUG-028** (Low) Create form validation and copy issues — QA lead 26/10: marked as a bug (TC-OPPM-029). Empty form still shows only '8 required fields left' — no message on each required field. Placeholder and date-outline parts fixed.
- **BUG-035** (Low) Ticket number is cut off in the board list — Re-checked 26/10 evening: Ticket ID column shows 'OPP-014…' — number cut off. Search by OPP number is the agreed way to find tickets (readable ID removed), so the full number must be visible.
- **BUG-036** (Medium) PM sees and can act on opportunities on his project that are not assigned to him — New 26/10 (rule from QA lead: PM sees an opportunity only if assigned to it).

**Open questions (Needs clarification):**

- **BUG-021** Priority rule differs from FRD — Awaiting QA lead / product: keep the build's allocation-date priority and update FRD rule 9, or build ticket-age priority.
- **BUG-023** Notification content issues — Rejection recipients verified 26/10: only the rejected candidate (and PMO/owners) receive it; other candidates on the same position do not ✓. Open question: should EM get 'New position' notifications for single-department positions (FRD #2 says multi-department only)? Candidate message is still third person without a reason.
- **BUG-033** PM cannot see a Direct opportunity on his project until it is approved — Still reproduces: OPP-0041 (raised by PM himself, not assigned to him) is not in his Direct Allocation tab until approved. Question: with 'PM sees only assigned tickets', should a PM see a Direct request he raised himself?

Full details per bug: [2026-10-22-presales-opportunities-bug-reports.md](2026-10-22-presales-opportunities-bug-reports.md).

---

## Result (21–22 Oct)

| | |
|---|---|
| Checks run | **436** (411 API, 25 UI) |
| Passed | **384** |
| Failed | **43** — 31 distinct findings below (F-24 withdrawn after re-check) |
| Not verifiable / superseded | 9 |
| Roles exercised | Admin, PMO (×2), TM (QA and JAVA departments), EM, RM, PM, CSM (×2), Employee, 5 candidate employees |

Test cases: [docs/test-cases/test-cases-2026-10-21-oppty-presales-e2e.md](../test-cases/test-cases-2026-10-21-oppty-presales-e2e.md) (source JSON `reports/test-cases/cases-2026-10-21-OPPTY-presales-e2e.json`, `TC-OPPTY-201…636`).

**What works well:** field validation on create is thorough (lengths, URLs, enums, location rules, 1–20 openings, 50-round cap, JD HTML is sanitised); department scoping is strict (out-of-scope ids return 404, TMs only see their department's candidates); approval send/withdraw/approve/bypass/reject rules hold; concurrent duplicate actions are rejected; Won → Allocate creates a born-approved NA ticket that shows in Requests Tracking and in the two-way alert; Direct flow (Open → In Review → Awaiting → Approved) allocates correctly and blocks over-capacity; Direct priority is derived correctly from the allocation date; candidate sees only their own row with round feedback hidden; notifications fire for most events.

## Findings

| ID | Severity | Type | Finding | Test cases |
|---|---|---|---|---|
| F-01 | 🔴 High | FRD conflict | PM can raise Existing-client Interview and Direct opportunities | TC-OPPTY-313, TC-OPPTY-321 |
| F-02 | 🔴 High | FRD gap | CSM cannot edit or add positions to an Interview opportunity they raised | TC-OPPTY-336, TC-OPPTY-337 |
| F-03 | 🔴 High | FRD gap | CSM cannot cancel an Interview ticket — the Cancelled tag exists only for Direct | TC-OPPTY-338 |
| F-04 | 🔴 High | FRD gap | Per-candidate 'Preferred Candidate' flag is not in the build | TC-OPPTY-368 |
| F-05 | 🔴 High | Defect | Interview schedule cannot be locked, and dragging a card back silently wipes the interview date | TC-OPPTY-439, TC-OPPTY-440, TC-OPPTY-423 |
| F-06 | 🟠 Medium | FRD conflict | When a TM sends a candidate for approval, PMO gives the 'TM Approval' | TC-OPPTY-393 |
| F-07 | 🟠 Medium | FRD gap | PM cannot shortlist candidates | TC-OPPTY-380 |
| F-08 | 🟠 Medium | FRD gap | Prep material rights differ from FRD (PM/EM can't add; TM can edit PMO's) | TC-OPPTY-582, TC-OPPTY-583, TC-OPPTY-584 |
| F-09 | 🟠 Medium | FRD gap | No reason required to bypass TM approval or to remove a shortlisted candidate | TC-OPPTY-406, TC-OPPTY-408 |
| F-10 | 🟠 Medium | Defect | Project can be unlinked or changed after a candidate is already allocated to it | TC-OPPTY-511, TC-OPPTY-512 |
| F-11 | 🟠 Medium | Defect | Assigned CSM gets no 'assigned to you' notification | TC-OPPTY-332 |
| F-12 | 🟠 Medium | Gap / risk | One employee can be approved (Blocked, In Process) on two opportunities at the same time | TC-OPPTY-460 |
| F-13 | 🟠 Medium | FRD conflict | A Direct request can hold only one employee | TC-OPPTY-529 |
| F-14 | 🟠 Medium | Defect | CSM raising a Direct ticket sees an empty two-way allocation alert | TC-OPPTY-546 |
| F-15 | 🟠 Medium | Defect | Create accepts contradictory data | TC-OPPTY-237, TC-OPPTY-277 |
| F-26 | 🟠 Medium | FRD gap | Readable ticket ID is not shown; Ticket ID column is truncated | TC-OPPTY-620 |
| F-16 | 🟡 Low | Defect | API accepts dates the UI forbids or that make no sense | TC-OPPTY-271, TC-OPPTY-274, TC-OPPTY-278, TC-OPPTY-279 |
| F-17 | 🟡 Low | Defect | Duplicate values stored | TC-OPPTY-243 |
| F-18 | 🟡 Low | FRD gap | No change log on the opportunity and no 'Send Reminder' | TC-OPPTY-595, TC-OPPTY-606 |
| F-19 | 🟡 Low | FRD conflict | Priority rule differs from FRD | TC-OPPTY-532 |
| F-20 | 🟡 Low | Defect | Notification content issues | — |
| F-21 | 🟡 Low | Docs | Backend frontend guide is out of date with the deployed API | TC-OPPTY-261, TC-OPPTY-287, TC-OPPTY-604, TC-OPPTY-562 |
| F-22 | 🟡 Low | FRD conflict | Extra candidates get their own cards beyond the opening count | TC-OPPTY-373, TC-OPPTY-601 |
| F-23 | 🟡 Low | Defect | Requests Tracking → Interview tab tiles mix Lost with No Longer Required / Closed | — |
| F-25 | 🟡 Low | Defect | Admin does not see the view-only banner | TC-OPPTY-617 |
| F-27 | 🟡 Low | FRD gap | Date-range presets differ from FRD | TC-OPPTY-621 |
| F-28 | 🟡 Low | FRD gap | No Longer Required is grey, not red-bordered | TC-OPPTY-622 |
| F-29 | 🟡 Low | Defect | Create form validation & copy issues | TC-OPPTY-626, TC-OPPTY-627 |
| F-30 | 🟡 Low | Gap | Candidate view: no personal board; competitor count visible | TC-OPPTY-634, TC-OPPTY-635 |
| F-31 | 🟡 Low | Defect | Board labels and empty values | TC-OPPTY-623, TC-OPPTY-636 |
| F-32 | 🟡 Low | FRD gap | No Shortlisting Drawer | TC-OPPTY-631 |
| F-33 | 🟠 Medium | Defect | PM cannot see a Direct opportunity on his project until it is approved | UI retest 22/10 |

## Details

### F-01 — PM can raise Existing-client Interview and Direct opportunities

- **Severity:** 🔴 High · **Type:** FRD conflict
- **FRD / rule:** Rule 3 raiser matrix, §7.5 (PM cannot create Opportunities / tickets)
- **What happens:** gaurav.panchal (PM) → POST /opportunities EXISTING on own project 201; DIRECT on own project 201. Only PROSPECT is refused (OPP_008). The build grants PM `opportunities.create` (PROJECT) on purpose (commit d065ae13 'let CSM and PM create opportunities').
- **Suggested fix:** Either remove PM's create grant, or update the FRD — decide which is right.
- **Test cases:** TC-OPPTY-313, TC-OPPTY-321

### F-02 — CSM cannot edit or add positions to an Interview opportunity they raised

- **Severity:** 🔴 High · **Type:** FRD gap
- **FRD / rule:** §7.6 CSM creates and edits Opportunities and Positions with rights similar to PMO
- **What happens:** CSM raises the Interview opportunity (201) but PATCH /opportunities/:id → 403 OPP_151 and POST /:id/positions → 403. Edit rights for CSM exist only on Direct tickets.
- **Suggested fix:** Give the raiser / project CSM edit rights on Interview opportunities while OPEN, or record the decision in the FRD.
- **Test cases:** TC-OPPTY-336, TC-OPPTY-337

### F-03 — CSM cannot cancel an Interview ticket — the Cancelled tag exists only for Direct

- **Severity:** 🔴 High · **Type:** FRD gap
- **FRD / rule:** Rule 22, §7.6, notification #19
- **What happens:** PATCH /openings/:id/cancel on an Interview card → 400 OPP_147 'Only an open Direct ticket … can be marked as cancelled'. A CSM has no way to tell PMO an Interview ticket is cancelled.
- **Suggested fix:** Extend the Cancelled tag to Interview openings (stage unchanged, PMO notified, PMO then moves to No Longer Required).
- **Test cases:** TC-OPPTY-338

### F-04 — Per-candidate 'Preferred Candidate' flag is not in the build

- **Severity:** 🔴 High · **Type:** FRD gap
- **FRD / rule:** Glossary 'Preferred Candidate', rule 14, §7.3, notification #7
- **What happens:** Shortlist body with isPreferred → 400 'property isPreferred should not exist'; PATCH /nominations/:id {isPreferred} route is gone. Only position-level 'preferred employees' picked at creation remain. The backend's own frontend guide still documents isPreferred.
- **Suggested fix:** Confirm with product whether the star was dropped on purpose; update FRD or restore it.
- **Test cases:** TC-OPPTY-368

### F-05 — Interview schedule cannot be locked, and dragging a card back silently wipes the interview date

- **Severity:** 🔴 High · **Type:** Defect
- **FRD / rule:** Rule 17 — finalized interview schedules lock against accidental overwrite
- **What happens:** PATCH /rounds/:id {isFinalized:true} → 400 'property isFinalized should not exist' (guide documents it); a scheduled date can be changed any time. Dragging Interview Scheduled → Being Prepared returns 200 and sets the round's scheduledAt to null with no confirmation.
- **Suggested fix:** Add the finalize/lock, and confirm before a backward move clears a scheduled date.
- **Test cases:** TC-OPPTY-439, TC-OPPTY-440, TC-OPPTY-423

### F-06 — When a TM sends a candidate for approval, PMO gives the 'TM Approval'

- **Severity:** 🟠 Medium · **Type:** FRD conflict
- **FRD / rule:** Rule 19 — TM Approval is final, owned solely by TM
- **What happens:** TM (sudhansu) sends own pick → TM approve = 403 OPP_111 (requester can't approve) → PMO (bhumi) approve = 200, approvedBy = PMO. So a TM-initiated request is approved by PMO, not a TM.
- **Suggested fix:** Decide: TM sends → another TM of the department approves, or TM's own send counts as approval. Update FRD or build.
- **Test cases:** TC-OPPTY-393

### F-07 — PM cannot shortlist candidates

- **Severity:** 🟠 Medium · **Type:** FRD gap
- **FRD / rule:** §7.5 PM can shortlist candidates (with TM/EM)
- **What happens:** PM → POST /positions/:id/nominations → 403 AUTH_004 (no nominate grant). PM also has no board (view_board).
- **Suggested fix:** Grant nominate to PM on assigned opportunities, or update FRD.
- **Test cases:** TC-OPPTY-380

### F-08 — Prep material rights differ from FRD (PM/EM can't add; TM can edit PMO's)

- **Severity:** 🟠 Medium · **Type:** FRD gap
- **FRD / rule:** Rule 5 (PM adds on top of PMO's, cannot edit PMO's), §7.4 (EM standardises question banks)
- **What happens:** PM add → 403; EM add → 403; TM edits PMO-created material → 200 (no owner check). No cap on materials (29 added) and duplicates allowed.
- **Suggested fix:** Add owner check on edit/delete; grant PM/EM add as FRD says, or update FRD.
- **Test cases:** TC-OPPTY-582, TC-OPPTY-583, TC-OPPTY-584

### F-09 — No reason required to bypass TM approval or to remove a shortlisted candidate

- **Severity:** 🟠 Medium · **Type:** FRD gap
- **FRD / rule:** Rule 16 — removing/changing shortlisted status needs a brief reason; notification #8 carries the reason
- **What happens:** POST /bypass-approval {} → 200 (reason optional). DELETE /nominations/:id → 200 with no reason; the candidate's notification says 'is no longer shortlisted' with no reason.
- **Suggested fix:** Make reason mandatory for bypass and removal; include it in the notification.
- **Test cases:** TC-OPPTY-406, TC-OPPTY-408

### F-10 — Project can be unlinked or changed after a candidate is already allocated to it

- **Severity:** 🟠 Medium · **Type:** Defect
- **FRD / rule:** §5 Project Association, data integrity
- **What happens:** OPP-0054: candidate allocated to AnalytixHub (NA-0416 approved). DELETE /opportunities/:id/project → 200, and PATCH project → ElitePay 200. The opportunity then points to a different project than its allocation.
- **Suggested fix:** Refuse unlink/relink once any opening is PROJECT_ALLOCATED (or Won with a pending allocation).
- **Test cases:** TC-OPPTY-511, TC-OPPTY-512

### F-11 — Assigned CSM gets no 'assigned to you' notification

- **Severity:** 🟠 Medium · **Type:** Defect
- **FRD / rule:** Notification #18 (assignment → PM / CSM)
- **What happens:** PMO created OPP-0042 with assignedPm=gaurav and assignedCsm=tarun. gaurav received 'You've been assigned to OPP-0042'; tarun received nothing.
- **Suggested fix:** Send the assignee_changed notification to the CSM too.
- **Test cases:** TC-OPPTY-332

### F-12 — One employee can be approved (Blocked, In Process) on two opportunities at the same time

- **Severity:** 🟠 Medium · **Type:** Gap / risk
- **FRD / rule:** Candidate status tag prevents duplication across parallel Positions; availability checks
- **What happens:** janki.naik was IN_PROCESS on OPP-0047 and approved (bypass) on OPP-0048 too — 200. The only safeguard is the 'won elsewhere' notification after one is Won. Remaining allocation does drop by each Blocked %.
- **Suggested fix:** At least warn at approval time when the employee is already Blocked elsewhere (the allocation-conflicts data is already available).
- **Test cases:** TC-OPPTY-460

### F-13 — A Direct request can hold only one employee

- **Severity:** 🟠 Medium · **Type:** FRD conflict
- **FRD / rule:** §5 Direct: New Allocation Request with one row per employee → one ticket per row
- **What happens:** Two positions on one Direct request → 400 OPP_175 'A Direct Opportunity has exactly one Position'. Allocating 5 people needs 5 separate requests (OPP_175 is not in the backend guide).
- **Suggested fix:** Confirm whether the UI splits rows into separate tickets; otherwise allow multi-row Direct requests.
- **Test cases:** TC-OPPTY-529

### F-14 — CSM raising a Direct ticket sees an empty two-way allocation alert

- **Severity:** 🟠 Medium · **Type:** Defect
- **FRD / rule:** Change list — two-way allocation alert when directly allocating an employee already in interview opportunities
- **What happens:** PMO gets interviewOpportunities [OPP-0047 50%, OPP-0048 50%] for janki.naik; the CSM (who raises Direct tickets) gets an empty list for the same employee because their employee scope hides her.
- **Suggested fix:** Show the alert to the raiser for the employee they picked, regardless of employee-list scope.
- **Test cases:** TC-OPPTY-546

### F-15 — Create accepts contradictory data

- **Severity:** 🟠 Medium · **Type:** Defect
- **FRD / rule:** §2 Client Details (Prospect vs Existing), Interview vs Direct
- **What happens:** clientType PROSPECT + projectPublicId → saved as PROSPECT with a linked project (linking later turns a prospect into Existing). INTERVIEW request with a position 'isInterviewRequired: false' → 201.
- **Suggested fix:** Reject these combinations (or auto-set Existing).
- **Test cases:** TC-OPPTY-237, TC-OPPTY-277

### F-24 — Withdrawn (not a bug)

- Originally reported as "PM has no screen listing assigned opportunities". Re-checked 22 Oct 2026: the PM sees them under **Requests Tracking → Project Allocation → Interview Allocation** (and a Direct Allocation tab), which meets FRD §7.5.

### F-26 — Readable ticket ID is not shown; Ticket ID column is truncated

- **Severity:** 🟠 Medium · **Type:** FRD gap
- **FRD / rule:** Change list — short readable ID on the list page (e.g. GLFE-112)
- **What happens:** API returns displayId (e.g. AN-QA-60) and search works on it, but the frontend never renders it; the Ticket ID column shows 'OPP-00…' cut off.
- **Suggested fix:** Render displayId and widen/wrap the ID column.
- **Test cases:** TC-OPPTY-620

### F-16 — API accepts dates the UI forbids or that make no sense

- **Severity:** 🟡 Low · **Type:** Defect
- **FRD / rule:** Form rules (UI: allocation date cannot be in the past)
- **What happens:** API accepts: tentative allocation date in the past, interview date in the past, interview date after the allocation start, allocation end date with no start date.
- **Suggested fix:** Mirror the UI rules on the server.
- **Test cases:** TC-OPPTY-271, TC-OPPTY-274, TC-OPPTY-278, TC-OPPTY-279

### F-17 — Duplicate values stored

- **Severity:** 🟡 Low · **Type:** Defect
- **FRD / rule:** Data quality
- **What happens:** techStacks ['Java','Java','java'] stored as-is.
- **Suggested fix:** De-duplicate case-insensitively.
- **Test cases:** TC-OPPTY-243

### F-18 — No change log on the opportunity and no 'Send Reminder'

- **Severity:** 🟡 Low · **Type:** FRD gap
- **FRD / rule:** §8 recent edits highlighted + full change log; rule 17 audit trail; §7.5 Send Reminder
- **What happens:** Opportunity detail has only updatedBy/updatedAt — no history. No reminder endpoint (manual or 48h auto).
- **Suggested fix:** Expose an activity log; build reminder (Milestone 2 per FRD).
- **Test cases:** TC-OPPTY-595, TC-OPPTY-606

### F-19 — Priority rule differs from FRD

- **Severity:** 🟡 Low · **Type:** FRD conflict
- **FRD / rule:** Rule 9 aging (>1 week open = High) — marked TBD
- **What happens:** Direct priority is derived from days until the allocation date (≤7 High, ≤14 Medium, else Low; past dates High). Interview priority is manual. No aging by ticket age.
- **Suggested fix:** Update FRD rule 9 to match the build (the FRD version is also inverted).
- **Test cases:** TC-OPPTY-532

### F-20 — Notification content issues

- **Severity:** 🟡 Low · **Type:** Defect
- **FRD / rule:** Notification table §11
- **What happens:** Rejected candidate is told in third person ('Akash Singh was rejected … the slot is open again') with no reason; EM gets 'New position' for every position in their departments (FRD #2: only multi-department); free-text interviewer is never notified (#9).
- **Suggested fix:** Candidate-facing copy; limit EM to multi-department positions or update FRD.
- **Test cases:** —

### F-21 — Backend frontend guide is out of date with the deployed API

- **Severity:** 🟡 Low · **Type:** Docs
- **FRD / rule:** —
- **What happens:** Guide documents isPreferred, isFinalized, manualMockAt, default prep links when omitted, OPP_026 (actual VAL_001), optional cancel reason (now mandatory), PMO may move a cancelled ticket (now OPP_164), Candidate.currentProjects (actual 'projects'); omits OPP_175.
- **Suggested fix:** Refresh docs/frontend-guide-opportunities.md.
- **Test cases:** TC-OPPTY-261, TC-OPPTY-287, TC-OPPTY-604, TC-OPPTY-562

### F-22 — Extra candidates get their own cards beyond the opening count

- **Severity:** 🟡 Low · **Type:** FRD conflict
- **FRD / rule:** Rule 13 — N openings = N cards; pending cards = openings without a candidate
- **What happens:** Position requiredCount 2 with 3 shortlisted → 3 cards (product decision A1). Lowering requiredCount to 1 keeps 4 candidate cards. Seat numbers have gaps after a position is deleted (#1, #3, #4, #5).
- **Suggested fix:** Update FRD rule 13 to the 'one card per candidate' model and define the 'Opening x of N' label.
- **Test cases:** TC-OPPTY-373, TC-OPPTY-601

### F-23 — Requests Tracking → Interview tab tiles mix Lost with No Longer Required / Closed

- **Severity:** 🟡 Low · **Type:** Defect
- **FRD / rule:** Glossary: Lost (deal lost) vs No Longer Required (cancelled) are different
- **What happens:** Same moment: board summary Lost 0, No Longer Required 1; tracking stats {all 87, open 70, won 14, lost 3, onHold 0} — 'lost' = 1 NLR opportunity + 2 CLOSED allocation tickets, 'won' includes 13 APPROVED allocation tickets. There is no NLR tile.
- **Suggested fix:** Add a No Longer Required tile and keep ticket statuses out of opportunity tiles (or label them).
- **Test cases:** —

### F-25 — Admin does not see the view-only banner

- **Severity:** 🟡 Low · **Type:** Defect
- **FRD / rule:** §7.1 Admin banner text
- **What happens:** Banner shown to TM/EM/RM/CSM, not to Admin.
- **Suggested fix:** Show the banner to Admin.
- **Test cases:** TC-OPPTY-617

### F-27 — Date-range presets differ from FRD

- **Severity:** 🟡 Low · **Type:** FRD gap
- **FRD / rule:** Rule 7 — Day 1–365 / Last 1, 3, 6 months
- **What happens:** This week / This month / This year / Last year / Previous year.
- **Suggested fix:** Align presets or update FRD.
- **Test cases:** TC-OPPTY-621

### F-28 — No Longer Required is grey, not red-bordered

- **Severity:** 🟡 Low · **Type:** FRD gap
- **FRD / rule:** Glossary — red-border highlight in archive view
- **What happens:** Muted grey badge/cards.
- **Suggested fix:** Add the red border.
- **Test cases:** TC-OPPTY-622

### F-29 — Create form validation & copy issues

- **Severity:** 🟡 Low · **Type:** Defect
- **FRD / rule:** Form usability
- **What happens:** Empty submit: only Position Title shows a message; Tentative Allocation Date outlined red with no star/message; other required fields silent. Interviewer LinkedIn placeholder is a company URL; 'PM or CSM must link a project' hint shown to PMO.
- **Suggested fix:** Show inline messages for every required field; fix copy.
- **Test cases:** TC-OPPTY-626, TC-OPPTY-627

### F-30 — Candidate view: no personal board; competitor count visible

- **Severity:** 🟡 Low · **Type:** Gap
- **FRD / rule:** Rule 4 / §7.7 employee read-mostly Kanban
- **What happens:** Employee has no board (/pre-sales unauthorized) — only Profile → Opportunities. On the detail page the candidate sees 'Shortlisted ratio: 4' and a 'Requests Tracking' breadcrumb they cannot open.
- **Suggested fix:** Hide the shortlisted count for SELF; fix breadcrumb; decide on the employee Kanban.
- **Test cases:** TC-OPPTY-634, TC-OPPTY-635

### F-31 — Board labels and empty values

- **Severity:** 🟡 Low · **Type:** Defect
- **FRD / rule:** House rule: readable placeholder for empty values
- **What happens:** Empty Candidates cells show '-'; 'All Tickets' tile counts opportunities (48) while the board shows 90 cards; no NLR tile; 'Shortlisted ratio' shows a count.
- **Suggested fix:** Use a word placeholder; rename tiles/labels.
- **Test cases:** TC-OPPTY-623, TC-OPPTY-636

### F-32 — No Shortlisting Drawer

- **Severity:** 🟡 Low · **Type:** FRD gap
- **FRD / rule:** Glossary, §7.3 (Milestone 2 for richer metrics)
- **What happens:** Only the picker table; no drawer with visa, shift, current allocations, availability date.
- **Suggested fix:** Track for Milestone 2.
- **Test cases:** TC-OPPTY-631

### F-33 — PM cannot see a Direct opportunity on his project until it is approved

- **Severity:** 🟠 Medium · **Type:** Defect
- **FRD / rule:** §7.5 (PM tracks requests), rule 23
- **What happens:** PM gaurav.panchal raised Direct opportunity OPP-0041 on EventDriven (Open). His Requests Tracking → Project Allocation → Direct Allocation tab shows "No tickets found" (it lists allocation tickets only) and /pre-sales is unauthorized for PM. It appears only after PMO approves it. The API does return it to him.
- **Suggested fix:** list Direct opportunities (with their Direct stage) in the PM's Direct Allocation tab.
- **Test cases:** TC-OPPM-009

## Decisions needed from product / BA

Several findings are the build and the FRD disagreeing on purpose or by accident. These need a decision before they can be called bugs:

1. **PM's role** (F-01, F-07, F-08): FRD says PM cannot create, can shortlist, can add prep material and has a list of assigned opportunities. Build: PM *can* create (Existing/Direct) and *cannot* shortlist or add material. (PM's list of assigned opportunities does exist — Requests Tracking → Project Allocation → Interview Allocation.)
2. **CSM on Interview tickets** (F-02, F-03): FRD gives CSM PMO-like edit rights and a Cancelled tag; build limits both to Direct tickets.
3. **Who gives TM Approval when a TM sends the request** (F-06): build lets PMO approve it.
4. **Preferred Candidate star** (F-04) — dropped from the build.
5. **One card per candidate vs one card per opening** (F-22) and **one employee per Direct request** (F-13).
6. **Priority rule** (F-19) — FRD rule 9 is marked TBD and inverted; build uses days-to-allocation.

## Not covered / not verified

- RM team-scope visibility (no reportee of the RM test account was on these tickets; the API does not expose the reporting manager).
- Deallocation of an allocation created from an opportunity (would remove real future allocations — left for a decision).
- Mobile/responsive layout and full accessibility audit.
- Notification e-mails (only in-app notifications checked).

## Test data left on DEV

- ~95 opportunities titled `QA-AUTO …` (OPP-0001 … OPP-0075 range), most still Open.
- **Three real future allocations on AnalytixHub | Advanced Analytics**, created through the module (all APPROVED):
  - NA-0416 — Akash Pandya, 40%, from 10 Nov 2026 (OPP-0054, Interview → Won → Allocate)
  - NA-0417 — Diya Garg, 30%, from 05 Nov 2026 (OPP-0056, Direct)
  - NA-0418 — Drashti Parekh, 50%, from 31 Oct 2026 (OPP-0060, Direct, allocation confirmed later)

  These lower the remaining-allocation figures for those three employees until cancelled.
- Cancelled/NLR Direct tickets on AnalytixHub and ElitePay.
