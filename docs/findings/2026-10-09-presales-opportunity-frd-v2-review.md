# Pre-sales Opportunity → Allocation & Deallocation — FRD v2.0 review

**Document reviewed:** *SimERP — Allocation & Deallocation Module, Functional Requirement Document (Role-wise)*, v2.0, 25-Sep-2026
**Status of feature:** planned, not yet developed
**Reviewed:** 09 Oct 2026
**Method:** desk review of the FRD, cross-checked against what is already specified or live in SimERP:
- *PM & PMO Requirements v2.3* (`reports/knowledge-base/modules/allocationDeallocation/`) — the allocation ticketing flow (NA / UA / Replacement tickets, two-party approval, PMO Direct Allocation)
- Allocation Requests knowledge base (`reports/knowledge-base/modules/pm-pmo/allocation-requests.json`)
- Deallocation flow verified end-to-end on dev, 24 Sep 2026 (CSM submit → confirm → PMO *Acknowledge & Deallocate*)
- Utilization Priority merge plan (`docs/requirements/EMPDET-utilization-priority-merge.md`)

Severity: **🔴 Blocker** — must be answered before build starts · **🟠 High** — will cause rework or a defect if left · **🟡 Medium** — clarity / UX · **⚪ Low** — wording / tidy-up

---

## 1. Top 10 things to fix before development

| # | Sev | Issue | Section |
|---|---|---|---|
| 1 | 🔴 | **The FRD does not say how it relates to the allocation ticketing already specified in v2.3.** Both define "Direct Allocation", tickets, approvals and deallocation — but with different rules. Built as-is, SimERP would have two parallel allocation systems that can both write to the same employee's allocation. | §2 |
| 2 | 🔴 | **What a "ticket" / Kanban card is, is never defined.** A ticket ID is shared across Positions, stages are per candidate, Lost is per Opportunity. Without a fixed data model, the Kanban, counts, notifications and permissions cannot be built consistently. | §3.1 |
| 3 | 🔴 | **The Direct (no-interview) path has no approval step.** A CSM can create a Direct request and the flow goes straight to Project Association — the department (TM/EM) never consents and nobody checks availability. In v2.3 every new allocation needs PMO + TM/EM approval. | §4 L1 |
| 4 | 🔴 | **Approval owner contradicts v2.3.** FRD: "TM Approval is final, owned solely by TM". v2.3: PMO **and** TM/EM must both approve, PMO can bypass, EM approves for all their departments. EM's approval role disappears in this FRD. | §2 C2 |
| 5 | 🔴 | **"Only PMO changes status" (rule 21) contradicts half the notification table.** TM/PM/EM are listed as moving candidates to Shortlisted (#6), changing shortlist status (#8), scheduling interviews (#9), rejecting (#10) and skipping rounds (#11). The FRD needs to separate *board stage* (PMO-only) from *candidate status* (managers). | §3.2 |
| 6 | 🟠 | **Nothing stops one employee being Selected on two Opportunities at once.** The candidate tag only blocks duplication "across two parallel Positions"; there is no availability / 100% cap check at selection or approval. | §4 L3 |
| 7 | 🟠 | **Deallocation is in scope but undefined.** Only "status: Open" is documented. A 3-step deallocation flow with mandatory ratings already exists on dev (CSM → confirm → PMO acknowledge). The FRD gives "Deallocation tracking" to PM, who doesn't take part in that flow today. | §2 C3 |
| 8 | 🟠 | **CSM cancellation freezes nothing.** A ticket tagged *Cancelled* stays in its stage until PMO acts — interviews stay scheduled, candidates keep preparing, reminders keep going out. There's no SLA or auto-escalation if PMO doesn't act. | §4 L2 |
| 9 | 🟠 | **Reverting a status is allowed everywhere (rule 17), but side effects aren't defined.** Reverting *Project Allocated* → *Won* after the allocation was created would leave an orphaned allocation (or a half-undone one). | §4 L6 |
| 10 | 🟠 | **Priority aging rule is back to front.** ">1 week open = High, >2 weeks = Medium/Low" makes older tickets *less* urgent. Marked TBD, but it's listed as a core rule. | §3.2 I5 |

---

## 2. Conflicts with what is already specified / live

| ID | Sev | Topic | This FRD says | Already specified / live | What to decide |
|---|---|---|---|---|---|
| C1 | 🔴 | Who raises requests | PM **cannot** raise any ticket. Only PMO / CSM. | v2.3: PM is *the* requester — raises NA, UA and Replacement tickets. Tickets belong to the project. | Does this FRD **replace** PM ticket-raising (NA/UA/Replacement retired) or only apply to pre-sales Opportunities? If retired, who raises a UA (increase/decrease) on a running project? |
| C2 | 🔴 | Approval | TM Approval is final; no other approver. | v2.3: two-party — PMO + TM/EM of the assigned department; PMO Bypass; PR Reviewer tickets can't be bypassed; TM/EM rejection sends ticket back to In Review. | Pick one approval model for all allocations. Recommendation: keep v2.3's model; the Interview pipeline ends by producing an approved NA ticket. |
| C3 | 🟠 | Deallocation | PM owns deallocation tracking; status "Open"; initiation flow is an open question. | Dev (verified 24 Sep): CSM raises from *My Projects* with reason + date + 4 ratings + feedback → confirm dialog → DA ticket *Awaiting* → PMO *Acknowledge & Deallocate*. v2.3: deallocations can't be refused. Ratings only visible to RM/TM/EM… | Reference the existing flow instead of redefining it. Confirm PM's real role (view only?). |
| C4 | 🟠 | "Direct Allocation" — name clash | Allocation **without interview** — still creates tickets, one per employee row. | v2.3: "Direct Allocation" = PMO-only *Add Allocation*, **no ticket, no approval**, with a fixed 4-recipient notification. | Rename one of them (e.g. "No-interview request"). Otherwise UI labels, reports, permissions and tests will mix them up. |
| C5 | 🟠 | Who owns a ticket | PMO **assigns** an Opportunity to a PM/CSM; PM sees only assigned ones. | v2.3: tickets are project-owned; when Zoho sync changes the project's PM, the new PM inherits all tickets and the old one loses access. | Once an Opportunity is linked to a project, does Zoho PM change override the manual assignment? Which one wins? |
| C6 | 🟠 | Utilization Priority | "Manual score set by RM", combined with seniority/experience to sort candidates. | System-computed tier P1/P2/P3 from a 0–100 Value Score, plus a manual override (Not set / P1 / P2 / P3). Being merged into Employee Details. | Use the existing field and say exactly how sort works (tier → Value Score → skill match?). "Seniority/experience weighting" is not defined anywhere. |
| C7 | 🟡 | Allocation Mode / % | Mandatory; allowed values unknown; example `Fixed - 100%`. | v2.3: Fixed (%) or Dynamic (1–2 h/day, can't be converted via UA); 100% cap; PR Reviewer doesn't count toward the cap. | Reuse those values and rules. |
| C8 | 🟡 | Status vocabulary | Pipeline stages + side statuses + candidate tags + Admin's "Pending, Approved, Final, Shortlisted/Finalized, Shortlist (backup)". | v2.3: Open / In Review / Awaiting Confirmation / Approved / Closed. | Publish one mapping table. Requests-tracking KPI tiles must add up — this is a known regression risk already in the KB. |
| C9 | 🟡 | Shortlisted on two tickets | Candidate tag "prevents" duplication across parallel Positions. | v2.3: non-blocking **warning** when a developer is already shortlisted on another active ticket. | Block or warn? Within the same Opportunity only, or across all Opportunities? |

---

## 3. Gaps and contradictions inside the FRD

### 3.1 Data model (🔴)

The FRD uses *Opportunity*, *Position*, *ticket*, *slot/opening*, *candidate* and *card* without fixing how they map to each other.

- Rule 13 says "the **ticket** stays active" while a Position has openings — so a ticket looks Position-level.
- Open question: "several rows under one Opportunity share one Ticket ID" — so a ticket looks Opportunity-level.
- The pipeline (`Shortlisted → Being Prepared → Interview Scheduled …`) is clearly per **candidate**, but the board shows cards.
- *Lost* is per Opportunity; *Rejected* per candidate; *No Longer Required* per ticket.

**Ask the BA for:** one diagram showing Opportunity (ID) → Position (ID, N openings) → Opening → Candidate application (ID, stage, tag), stating **which of these is a Kanban card** and which level each status lives on. Suggested IDs: `OPP-n`, `OPP-n/P-m`, application id per candidate.

### 3.2 Contradictions

| ID | Sev | Contradiction |
|---|---|---|
| I1 | 🔴 | Rule 21 (PMO only changes status) vs notifications #6, #8, #9, #10, #11 (TM/PM/EM change candidate status). Also §7.2 says PMO handles round-skip, rule 20 says "a manager", notification #11 says TM/PMO/EM. |
| I2 | 🟠 | Rule 18 + notification #3: PM edits Position details — but PM is view-only (§7.5). Already an open question; it should be a blocker, not a footnote. |
| I3 | 🟠 | **Preferred Candidate** is set by: "PMO/TM" (glossary), "RM/TM" (rule 14, notification #7), "TM sets/approves" (§7.3). **RM is not in the Roles table at all.** Notification #7 notifies the TM about a flag the TM set themselves. |
| I4 | 🟠 | **Round-skip goes "straight to Won"**, but the flow then needs TM Approval. Does skipping also skip TM approval? If a TM/EM triggers the skip, is that the approval? |
| I5 | 🟠 | Aging priority is inverted (see §1 #10). Also: High/Medium/Low from aging and a manual Priority Tag are "independent" — which one is shown on the card, and which one drives sort? |
| I6 | 🟠 | Notifications #11 and #16 are **confirmation dialogs**, not notifications. As a result, nobody is told when a ticket moves to No Longer Required — not the raiser, the candidates, nor the TM. #16's text "cannot be undone easily" contradicts rule 17 (all status changes revertible). |
| I7 | 🟠 | Flow diagram: *Lost → Archived: No Longer Required*. Glossary: Lost and No Longer Required are separate statuses (deal lost vs. cancelled). Which is it? What happens to in-flight candidates when an Opportunity is Lost — do all their applications close automatically? |
| I8 | 🟡 | Where does **TM Approval** sit in the stage list? The pipeline goes `Waiting for Feedback → Won → Project Allocated` with no approval stage. What happens if the TM rejects at approval after Won? |
| I9 | 🟡 | §7.1 Admin is "department-scoped" and also "not tied to a single department". It points to "Open Question 13.6", which doesn't exist (the document has 11 sections). |
| I10 | 🟡 | Flow step *"Candidate becomes active Employee"* and §7.7 *"Once joined…"* suggest **new hires**. Everywhere else, candidates are existing employees. If external candidates are in scope, a whole onboarding / employee-creation flow is missing. |
| I11 | 🟡 | Employee may update the prep checklist **only** in *Shortlisted* / *Being Prepared*. Most prep happens after *Interview Scheduled* — should that stage be included? What does "read-mostly" Kanban allow the employee to write? |
| I12 | 🟡 | Project linking "automatic trigger (e.g. **on project close**)" — linking an Opportunity to a project when the project *closes* doesn't make sense. Probably "on Won" or "on project creation in Zoho". |
| I13 | ⚪ | Typos / tidy-up: "TM,RM, TM" in scope; rules 8 and 15 missing from the numbering; "an PMO/TM"; *Staff Aug* appears once in §7.2 and is never defined. |

### 3.3 Missing definitions

| Sev | What is missing |
|---|---|
| 🟠 | **Full permission matrix** (role × action × scope). Today it's spread across §3, §4, §7 and §11 and they disagree. A single table is needed: create / edit / assign / nominate / shortlist / schedule / reject / skip / approve / cancel / move stage / close / link project / deallocate — for Admin, PMO, TM, EM, PM, CSM, RM, Employee. |
| 🟠 | **State-transition table**: from → to, who may do it, mandatory fields (reason, recording, date), side effects (allocation created, slot reopened, notification), and whether it can be reverted. |
| 🟠 | **CSM's project scope** for Existing-Client requests — any project, or only projects they're CSM on? |
| 🟠 | **Data visibility for candidates**: can an Employee see the prospect's name, the deal value, the JD, other candidates? Prospect names are usually confidential pre-sales data. |
| 🟡 | **Field validations**: required fields per request category, max lengths, openings limit (1–?), date-range rules, attachment types/sizes, URL validation for prep material and LinkedIn. |
| 🟡 | **On Hold** — who sets it, what it freezes, how it is released, whether it appears in the default Kanban filter. |
| 🟡 | **Interviewer** — internal user or external client contact? Who is notified? "TM assigns interviewer" has no notification row. |
| 🟡 | **Interview recording** — where it's stored, who can view it, retention period, consent. |
| 🟡 | **Shortlisting Drawer data sources** — Key Skills (Skills module?), Current Allocations (project assignments?), Visa Status / Shift Preference (Employee profile — do these fields exist yet?). |
| 🟡 | **Match % chip** — formula (already an open question; needed before any sort or test can be written). |
| 🟡 | **Audit log** — what is logged (field, old value, new value, actor, timestamp), who can view it, retention. |
| ⚪ | **Date-range filter** "Day 1–365 / Last 1 / 3 / 6 months" — based on created date, last updated, or interview date? |

---

## 4. Loopholes (permission / process gaps someone could exploit or fall into)

| ID | Sev | Loophole | Suggested fix |
|---|---|---|---|
| L1 | 🔴 | **Direct path skips approval and availability check** — a CSM can effectively allocate any employee to a client. | Route Direct requests through the same approval as v2.3 NA tickets (PMO + TM/EM), or at least TM/EM consent and a 100% cap check. |
| L2 | 🟠 | **Cancelled tag doesn't pause anything** and has no deadline. Stale "cancelled but still active" tickets will pile up; candidates keep preparing for a cancelled deal. | On tag: freeze stage changes, cancel or pause reminders, notify scheduled interviewers and candidates. Escalate to PMO lead if not moved to No Longer Required within N working days. Require a cancellation reason. |
| L3 | 🟠 | **Double selection / over-allocation**: the same employee can be Selected on two Opportunities, or on an Opportunity while also on an NA ticket. | Check availability (Effective Availability vs requested %) at nomination (warning) **and** at approval (block, or explicit override with reason). Optional "soft hold" while Selected. |
| L4 | 🟠 | **Re-assignment leaks access** — undefined whether the old PM/CSM keeps seeing the Opportunity (open question). | Default: previous assignee loses access immediately; history keeps their actions. Same rule as v2.3 project-owned tickets. |
| L5 | 🟠 | **Round-skip with no reason and no second check** — easy shortcut around interviews. | Mandatory reason; record who skipped; TM approval still required. |
| L6 | 🟠 | **Unlimited reverts** (rule 17) can undo stages that already had side effects (allocation created, slot reopened, notification sent). | Mark stages after *Won* as non-revertible, or define compensating actions (e.g. reverting *Project Allocated* requires a deallocation). |
| L7 | 🟠 | **UI-only enforcement risk** — Admin "view-only" via a banner and a missing drag handle. | Enforce every rule in the API (403), not just by hiding controls. Applies to all roles. Already a regression theme in the KB for allocation tickets. |
| L8 | 🟡 | **Rejected candidates keep access** to the client's JD, question bank and prep material. | Remove access to Position material when the candidate's application closes (Rejected / Lost / NLR). |
| L9 | 🟡 | **"Mandatory brief reason"** has no minimum — "." or "na" will pass. | Pick from a reason list (+ free text for "Other"), minimum length. |
| L10 | 🟡 | **Sensitive personal data** — Visa Status, interviewer LinkedIn, interview recordings shown to PM/TM/EM/CSM without any field-level rule. | Define who sees which fields; mask for roles that don't need them. |
| L11 | 🟡 | **Prep-material URLs** are free text — broken, internal-only or malicious links. | URL validation, allowed domains, link-check on save. |
| L12 | 🟡 | **Concurrent edits** — two managers shortlisting / rejecting the same candidate at once; PMO dragging while CSM cancels. | Optimistic locking with a "this record changed, reload" message. |

---

## 5. Edge cases

### 5.1 Opportunity & Position
1. Opportunity with zero Positions — can it be saved? Shown on Kanban?
2. Position with openings = 0, negative, decimal, very large (e.g. 999).
3. Reducing openings below the number already filled (3 openings, 2 filled → set to 1).
4. Increasing openings after the Position is fully filled — does the ticket reopen? Who is notified?
5. Deleting a Position that has candidates in *Interview Scheduled*.
6. Changing Client Type from Prospect → Existing (prospect converts to client) mid-pipeline — what happens to auto-pulled fields and existing Positions?
7. Changing Interview Required Yes → No (or No → Yes) after candidates are added — does the request move between Kanban and List view?
8. Existing Client whose linked project is closed / archived / its PM changed in Zoho.
9. Duplicate Opportunity for the same prospect / project created by PMO and CSM separately.
10. Position title / JD with special characters, emoji, very long text, pasted rich text.
11. Multi-department Position (React + Node) — which department's TM approves? Both?

### 5.2 Candidates & shortlisting
12. Same employee nominated twice to the same Position.
13. Employee nominated to Position A and B in the same Opportunity at the same time (the tag should stop this — test both block and warning variants).
14. Candidate Rejected for A, nominated for B, then A's slot is reopened — can they be re-nominated to A?
15. Candidate who is on leave, serving notice, or resigned/inactive during the pipeline.
16. Candidate who is the raiser / interviewer / TM themselves.
17. Candidate already at 100% allocation; candidate on a Dynamic allocation; PR Reviewer (doesn't count toward cap).
18. Preferred Candidate flag on someone later Rejected — does the flag clear?
19. All candidates on a Position Rejected — slot back to *Pending to Shortlist* repeatedly; any limit or escalation?
20. Two managers changing the same candidate's status at the same moment.

### 5.3 Interviews
21. Scheduling an interview in the past, on a holiday, or outside the candidate's shift preference.
22. Rescheduling a "locked" (finalized) interview — who can unlock it?
23. Interview with no feedback for weeks — stuck in *Waiting for Feedback*; aging / reminder?
24. Round-skip on a Position with N openings — fills one opening only?
25. Candidate cleared all rounds but TM rejects at approval.
26. Interview recording upload fails / file too big / wrong format.

### 5.4 Status, cancellation & archive
27. CSM cancels a ticket that is already *Won* or *Project Allocated*.
28. CSM cancels, then the client comes back — can the tag be removed? By whom?
29. PMO moves to *No Longer Required* without a Cancelled tag (PMO-initiated cancel).
30. Opportunity marked Lost while one Position has a candidate already Won.
31. *On Hold* ticket ages — does the aging priority keep counting?
32. Revert from *No Longer Required* / *Lost* back to active — allowed? Do candidates get re-notified?
33. Kanban date filter boundary: ticket created exactly 30 / 90 / 180 / 365 days ago.

### 5.5 Assignment & access
34. Opportunity assigned to two PMs / a PM and a CSM (open question).
35. PMO re-assigns while the old PM has the shortlisting drawer open.
36. Assigned PM is deactivated / leaves the company.
37. Dual-role users (PM + TM, PM + EM — allowed in v2.3): do they get both the PM list and the TM approval queue? Can a PM+TM approve their own Opportunity?
38. Admin opening a ticket outside their department via a direct URL → must be 403.

### 5.6 Notifications
39. User holds several roles that get the same notification (e.g. PM + TM) — one notification or duplicates?
40. Bulk actions (e.g. Lost on an Opportunity with 10 candidates) — 10 separate notifications or one digest?
41. Notification links to a ticket the recipient can no longer access (re-assigned / archived).

---

## 6. Integrated (cross-module) scenarios

| # | Modules | Scenario to cover |
|---|---|---|
| X1 | Opportunity → **Allocation Requests (v2.3)** | Won candidate → Project Allocated: does it create a ProjectAssignment directly, or raise an NA ticket that follows the PMO + TM/EM approval? The allocation must then appear on PM Projects, Requests tracking and in the employee's allocations, with the same %. |
| X2 | Opportunity ↔ **Allocation Requests** | Employee is shortlisted on an NA ticket **and** nominated on an Opportunity. Check warnings on both sides and the 100% cap when both are approved. |
| X3 | **Utilization Priority / Employee Details** | Default candidate sort uses Utilization Priority. Change the manual override in Employee Details → drawer and sort update. After allocation, the employee's tier / Value Score / Effective Availability recalculate. |
| X4 | **Deallocation + Ratings** | Employee allocated through an Opportunity is later deallocated through the existing 3-step flow. Ratings appear on Employee Ratings only after PMO acknowledges. The Opportunity / Position history shows the deallocation. |
| X5 | **Zoho project sync** | Prospect converts → project created in Zoho → Opportunity auto-links. The project's PM changes in Zoho → who owns the Opportunity's tickets now? |
| X6 | **Leave / notice period** | Candidate goes on leave during *Interview Scheduled*; candidate submits resignation after *Won* — drawer must show it; approval should warn. |
| X7 | **Skills module** | Drawer *Key Skills* and the match % read from the Skills module. Add / remove a skill → match % and sort change. |
| X8 | **Department / EM** | Multi-department Position; EM's department-wise question bank is inherited; TM of department A cannot approve a candidate from department B. |
| X9 | **Dashboard** | Pipeline counts, aging flags and Lost / NLR counts on the dashboard match the Kanban and list totals. |
| X10 | **Admin ▸ Roles** | New permissions (create Opportunity, assign, cancel, move stage, skip round, approve) are configurable in the role screen and enforced in the API for every role. |
| X11 | **Employee Profile / Dashboard** | Employee sees their Opportunities, prep checklist and "Next Steps". After allocation, *Projects* tab and *Allocations & Interviews* section update. Rejected / Lost Opportunities don't leak client data. |
| X12 | **Notifications / email** | Each of the 19 notifications fires once, to the right roles only, with working links — including for dual-role users. |
| X13 | **Allocation Correction** | An allocation created from an Opportunity is corrected later — the Opportunity history stays consistent. |

---

## 7. Suggestions — how to manage this better

1. **Build one allocation system, not two.** Treat the Opportunity pipeline as the *front half* (demand, interviews, shortlisting). When a candidate is approved, raise an NA ticket into the existing v2.3 engine (approval, 100% cap, auto-apply, deallocation). One source of truth for allocations, one approval model, one Requests tracking screen.
2. **Replace scattered rules with three tables** in the FRD: (a) data model with IDs, (b) state-transition table with actor / side effects / revertible, (c) role × action permission matrix. Most contradictions in §3 disappear once these exist, and they become the test oracle.
3. **Rename the no-interview path** so "Direct Allocation" keeps its v2.3 meaning (PMO *Add Allocation*).
4. **Split "board stage" from "candidate status"** — PMO owns the board; TM/PM/EM own candidate status. That resolves rule 21 vs the notification table.
5. **Add SLAs and escalation**: Cancelled tag not actioned in N days; *Waiting for Feedback* > N days; *Pending to Shortlist* > N days. These replace the inverted aging rule with something measurable.
6. **Fix the notification table**: remove the two confirmation dialogs (#11, #16) and add the missing ones — moved to No Longer Required, interviewer assigned, On Hold / resumed, re-assigned (old assignee), prep material added by PM, Won → candidate's RM, Lost → candidates in progress.
7. **Define field-level visibility** for pre-sales data (prospect name, deal value, Visa Status, recordings) before Figma for Employee and CSM screens is finalised.
8. **Order the open questions** — the §9 list mixes blockers with cosmetic items. Suggested blockers: data model, approval model / v2.3 relationship, PM write scope, deallocation flow, project-link trigger. Everything else can follow.
9. **Move the deallocation decision into Milestone 1** — it's in scope and it touches live data; leaving it to M2 risks a second, different deallocation path.
10. **Plan for testability**: stable `data-testid`s on Kanban columns / cards / drawer fields, and an API to seed Opportunities. Without this, automating a drag-and-drop pipeline will be slow and flaky.

---

## 8. Suggested answers to the FRD's open questions (for the BA to confirm)

| Open question | Suggested answer |
|---|---|
| CSM screens: reuse PMO frames? | Reuse, with stage-change controls hidden and a *Cancel* action added. Fewer screens to build and test. |
| PM editing Positions (rule 18 / #3) | Re-assign to PMO / CSM. Keep the "re-review shortlist" notification to TM. |
| PM adding candidates / scheduling | Shortlist only. Nomination and scheduling by PMO / TM. |
| PM editing own prep material | Yes — own material only. |
| Multiple assignees / re-assign | One PM + one CSM per Opportunity; PMO can re-assign; old assignee loses access. |
| Remove Cancelled tag / reason | Reason mandatory. CSM or PMO can remove the tag until PMO moves it to NLR. |
| Deallocation flow | Reuse the existing CSM → confirm → PMO acknowledge flow. |
| Project-link trigger | Manual link is authoritative; an automatic link is only a suggestion PMO confirms. |
| Ticket ID across Positions | Opportunity ID + Position sub-ID (e.g. `OPP-12/P-2`). |
| Allocation Mode values | Fixed (%) / Dynamic, same as v2.3. |
| Reminder cadence | M1 manual only; M2 automatic after 48 h in *Being Prepared*. |

---

## 9. Next steps for QA

1. Send §1 and §8 to the BA; get the 🔴 items answered before sprint planning.
2. When the revised FRD arrives, run it through the pipeline (Requirement Analyzer → Test Case Generator) under a new module code (suggested `OPPTY`). §5 and §6 above become KB edge cases and integration cases for that module.
3. Make §6 X1–X4 the first regression pack, since they touch live allocation data.

---

## 10. Flow diagram review — "SimERP Opportunity Flow" (Interview flow)

Reviewed from a screenshot of the flow page, 09 Oct 2026. The diagram is already better than FRD v2.0 in three ways: **TM Approval now sits before preparation**, **PMO can Bypass** (matches v2.3), and it adds **Approved · Backup**, a **Rejected column** and whole-ticket states (Client Won, On Hold, Lost, No Longer Required, Reopen). The points below are what still needs fixing.

| ID | Sev | Area | Issue | Suggestion |
|---|---|---|---|---|
| D1 | 🔴 | Roles | *Create Opportunity* lists **PMO · PM · CSM**; FRD v2.0 says PM cannot create. | Remove PM from the box, or update the FRD raiser matrix. |
| D2 | 🟠 | Roles | Whole-ticket *Cancel Request* is **PMO** only; the FRD's CSM **Cancelled tag** (stage kept, PMO moves to NLR) is missing. | Add the CSM tag path, or drop it from the FRD. |
| D3 | 🟠 | Roles | *Interview Scheduled* and *Waiting for Feedback* are both **PMO**; FRD notifications have TM/PM/EM scheduling and rejecting. | State who records round results (interviewer, TM, or PMO on client feedback). |
| D4 | 🟠 | Missing path | No **round-skip** path (FRD rule 20). | Dashed arrow *Waiting for Feedback → Won*: "Skip rounds (confirm + reason)". |
| D5 | 🟠 | Missing path | No exit after **Project Allocated**. | Arrow to the existing 3-step deallocation flow (CSM raises → confirm → PMO acknowledges). |
| D6 | 🟠 | Missing path | **Direct (no-interview)** flow not drawn, though a *List* tab exists. | Draw it, with its own approval gate (otherwise it bypasses TM/EM). |
| D7 | 🟠 | Seats | No multi-seat view. | Show "2 of 3 filled" on the seat; say what happens to extra in-process candidates once all seats fill. |
| D8 | 🟠 | Reject | Red line (seat back to *Pending to Shortlist*) and *Rejected* column (candidate tagged) look like two separate paths. | Draw one Reject event with two effects; reason mandatory; record who rejected (PMO / Client / TM). |
| D9 | 🟠 | Reject | Reject from **Won** (after the client accepted). | Separate reason ("client withdrew" / "candidate unavailable"); block reject after Project Allocated. |
| D10 | 🟠 | Backup | *Approved · Backup* rules missing. | Max backups per seat; how long a backup stays valid; re-check availability on *Fill Seat / Swap*; release + notify backups when seats fill or the ticket closes; re-approval if the Position changed. |
| D11 | 🟠 | Capacity | *Being Prepared — "Seat blocked"*. | Say whether the block counts toward the 100% cap, whether one person can be blocked on two Opportunities, and whether On Hold releases it. |
| D12 | 🟡 | Approval | *Bypass* has no conditions. | Reason required, TM notified, not allowed for PR Reviewer requests (v2.3). |
| D13 | 🟠 | Ticket states | *Client Won* moves "In Process cards to Won". | Rule for when in-process cards outnumber seats. |
| D14 | 🟡 | Ticket states | *On Hold* freezes cards. | Are scheduled interviews cancelled? Time limit? |
| D15 | 🟡 | Ticket states | *Lost / No Longer Required* release candidates. | Notify candidates and interviewers; cancel interviews. |
| D16 | 🟡 | Ticket states | *Open (reopen)* clears released candidates. | Who can reopen, from which states, and whether past approvals need redoing. |
| D17 | 🟡 | Prospect | *Needs a linked project* is a side note. | Make it a decision diamond on *Won → Project Allocated*; remind if a Won prospect waits too long. |
| D18 | 🟡 | Rounds | *next round* loop has no counter. | Show "Round 2 of 3"; set a maximum number of rounds. |
| D19 | ⚪ | Readability | Long red "reject bus" under the boxes is hard to follow. | Small reject icon per box + one legend line. |
| D20 | ⚪ | Readability | Colour legend only; small grey role labels. | Add icons/text to the legend; use swimlanes or a role row for who acts at each step. |
