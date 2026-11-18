# Interview Flow (Pre-sales Opportunities) — Bug Reports, 27 Oct 2026

**Environment:** SimERP DEV 6.5.0, https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1). Chromium (Playwright) on Linux. Build = `development` at 26/10 14:53 (backend PR #578, frontend PR #526) plus later merges for shadow tickets (SI4-I593) and the stale Keka ID cleanup (SI4-I587).
**Retest (27 Oct, evening, same build):** all bugs below still reproduce. Three more were found: BUG-046, BUG-047 and BUG-048.
**Scope:** an end-to-end test of the Interview flow on 27 Oct 2026, with 85 UI steps across 8 roles and 411 API regression checks, plus a demo-readiness run of 89 cases.
**Numbering:** continues the earlier list (BUG-001 … BUG-036 in [2026-10-22-presales-opportunities-bug-reports.md](2026-10-22-presales-opportunities-bug-reports.md)). The earlier open bugs BUG-023, BUG-035 and BUG-036 still reproduce and are not repeated here.
**Evidence:** `reports/screenshots/2026-10-27/bug-evidence/`
**Login for repro:** https://simerp-dev.simform.solutions/dev-login with the accounts named in each bug (standard dev password).

## Summary

**Ignored (27 Oct, QA decision):** cards not moving to *Did Interview Happen?* on their own (the nightly job is not running on dev). This step will be answered by hand, so it is not reported. Its number, BUG-037, is kept free so the other numbers don't change.

| ID | Title | Type | Severity | Priority | Area |
|---|---|---|---|---|---|
| [BUG-038](#bug-038) | "Interview scheduled" notification shows raw GMT; whole-day dates show as the previous day | Defect | Medium | P2 | Notifications |
| [BUG-039](#bug-039) | Allocation ticket created from an interview can't be found in Requests Tracking; the row shows CSM and Employee as "—" | Defect | Medium | P2 | Requests Tracking |
| [BUG-040](#bug-040) | TM can shortlist employees of other departments onto their own department's position | Needs decision | Medium | P3 | Shortlisting / RBAC |
| [BUG-041](#bug-041) | What's New & History is empty: the releases API returns no notes for any role | Defect / data | Low (demo risk) | P2 | Release notes |
| [BUG-042](#bug-042) | TM is told an interview allocation was a "Direct Allocation … bypassing the ticket workflow" | Defect | Low | P3 | Notifications |
| [BUG-043](#bug-043) | Prep material typed on the create form is silently dropped unless "Add Link" is clicked | UX defect | Low | P3 | Create form |
| [BUG-044](#bug-044) | A 200-character client name stretches the Kanban "All Clients" dropdown across the whole screen | UI defect | Low | P4 | Board filters |
| [BUG-045](#bug-045) | Empty values show as bare dashes in the candidate dialog and Requests Tracking | UI defect | Low | P4 | Candidate dialog / Requests Tracking |
| [BUG-046](#bug-046) | Untitled interview rounds show as "Round 1:" with a dangling colon | UI defect | Low | P4 | Interview rounds |
| [BUG-047](#bug-047) | Rejected candidates can be shortlisted again, although the ticket page says they are greyed out | Defect / copy | Low | P3 | Shortlisting |
| [BUG-048](#bug-048) | Interview allocation notice to the candidate: "You've Been allocated", raw date, sent as a direct-allocation event | Defect | Low | P4 | Notifications |

---

## BUG-038

**"Interview scheduled" notification shows raw GMT; whole-day dates show as the previous day**

| Field | Details |
|---|---|
| Severity / Priority | Medium / P2 |
| Area | Notification `notification.opportunity.interview_scheduled` (body text) |
| Accounts | PMO bhumi.chauhan · candidate kriti.desai / uday.dave |
| Test case | TC-OPPTY-783 |

**Steps to reproduce**
1. As PMO, open OPP-0156 → *View interview details* of a candidate → *Interview Rounds*.
2. Set Round 1's Interview Date to 27/10/2026 (day only), or to a date with a time of 11:00.
3. Log in as the candidate and open *All Notifications*, then search "Interview scheduled".

**Expected:** "…scheduled for Tue, 27 Oct 2026" (day only), or "Tue, 27 Oct 2026, 11:00 AM" in IST or the viewer's time zone.
**Actual:**
- Day only: "…scheduled for **Mon, 26 Oct 2026 18:30:00 GMT**" (the wrong day).
- 11:00 IST: "…scheduled for **Tue, 27 Oct 2026 05:30:00 GMT**".

The body uses `Date.toUTCString()`-style output of `scheduledAt`.

**Suggested fix:** format `context.scheduledAt` in IST (Asia/Kolkata) when building the body, and leave the time out when the round has no time.
**Evidence:** `N02-candidate-notification-gmt.png`

---

## BUG-039

**Allocation ticket created from an interview can't be found in Requests Tracking; the row shows CSM and Employee as "—"**

| Field | Details |
|---|---|
| Severity / Priority | Medium / P2 |
| Area | Requests Tracking (`/my-tickets`) · `GET /allocation-tickets` (allocationMode) · `GET /allocation-tickets/interview-requests` |
| Accounts | PMO bhumi.chauhan |
| Test cases | TC-OPPTY-729, TC-OPPTY-730 |

**Steps to reproduce**
1. On OPP-0156, mark a candidate (Kriti Desai) Won and click **Allocate**. This creates **NA-0450** (NEW_ALLOCATION, APPROVED, `isInterviewRequired: true`).
2. Go to Requests Tracking → *Direct Allocation* and search "NA-0450".
3. Switch to *Interview Allocation* and search "NA-0450", then "OPP-0156".

**Expected:** NA-0450 can be found in Requests Tracking, at least on the Interview tab or through the OPP row. The OPP-0156 row shows its CSM (Tarun Sharma) and allocated employee (Kriti Desai).
**Actual:**
- *Direct Allocation* finds nothing: the tab sends `allocationMode=DIRECT`, which leaves out `isInterviewRequired=true`.
- *Interview Allocation* finds nothing for NA-0450, because `buildInterviewTicketWhere` filters `nomination: null`. Only the OPP-0156 row is shown, with **CSM "—"** and **Employee "—"**. The `interview-requests` item has no CSM or employee fields.
- `GET /allocation-tickets?search=NA-0450` does return the ticket.

**Suggested fix:**
- Let the Interview tab search match the NA number of tickets linked to a nomination, or link it from the OPP row.
- Add the CSM and allocated employees to the `interview-requests` item.

**Evidence:** `N03-direct-tab-NA0450-not-found.png`, `N03-interview-tab-OPP0156-dashes.png`

---

## BUG-040

**TM can shortlist employees of other departments onto their own department's position (needs product decision)**

| Field | Details |
|---|---|
| Severity / Priority | Medium / P3 |
| Area | `GET /opportunities/candidates` · `POST /opportunities/positions/:id/nominations` (scope `nominate: DEPARTMENT`) |
| Accounts | TM (JAVA) mehul.pandya · TM (QA) sudhansu.patel |
| Test cases | TC-OPPTY-763, TC-OPPTY-781 |

**Steps to reproduce**
1. As PMO, create an Interview opportunity with one position whose department is **JAVA** only (OPP-0214).
2. Log in as mehul.pandya (JAVA TM) and open OPP-0214 → **Add/ Shortlist**.
3. Search "Vandana Mishra" (QA department) and shortlist her.

**Expected:** a JAVA TM can only pick JAVA employees for a JAVA position, as for the QA TM on a JAVA position.
**Actual:**
- The shortlist succeeds (201 OPP_074), and Vandana Mishra (QA) is now on the JAVA position.
- The TM's candidate list returns all 3,649 employees in every department.
- The reverse is blocked: QA TM shortlisting on the JAVA-only position → 404 OPP_020.

**Question:** should TM / EM shortlisting be limited to employees of their own department(s)? If yes, filter the candidates list and refuse the nomination for out-of-scope employees.
**Evidence:** `N04-java-position-qa-employee.png`

---

## BUG-041

**What's New & History is empty: the releases API returns no notes for any role**

| Field | Details |
|---|---|
| Severity / Priority | Low (demo risk) / P2 |
| Area | `GET /releases?includePlanned=true` · What's New & History page |
| Accounts | PMO bhumi.chauhan, Admin ceo, Employee kashyap.patel |
| Test case | demo-readiness D5-04 |

**Steps to reproduce:** log in as any role and click *What's New & History* in the sidebar.

**Expected:** release notes, including the Opportunity Allocation / Interview module note (frontend commit 6e3d47f7 says "Release note and help guide updated").
**Actual:** "0 releases · select a version to see its changes … No release notes found". The API returns `{"code":"REL_001","data":[]}` for every role tried.

**Note:** release-notification changes merged on 26/10 (SI4-T1548, 4835808f and 23f97c1f). Please check whether release data was reset or is no longer seeded on dev.
**Evidence:** `N09-whats-new-empty.png`

---

## BUG-042

**TM is told an interview allocation was a "Direct Allocation … bypassing the ticket workflow"**

| Field | Details |
|---|---|
| Severity / Priority | Low / P3 |
| Area | Allocation notification sent on `POST /opportunities/nominations/:id/allocate` |
| Accounts | PMO bhumi.chauhan · TM (QA) sudhansu.patel |
| Test case | TC-OPPTY-784 |

**Steps to reproduce**
1. As PMO, allocate a Won interview candidate (OPP-0156, Kriti Desai → NA-0450).
2. Log in as the department TM and open All Notifications, then search "Kriti Desai".

**Expected:** a message that the candidate was allocated from OPP-0156 (interview flow).
**Actual:** "Direct Allocation: AnalytixHub | Advanced Analytics — Bhumi Chauhan **directly allocated** Kriti Desai to AnalytixHub | Advanced Analytics, **bypassing the ticket workflow**."

**Suggested fix:** use an interview-specific event and text when the allocation comes from a nomination.
**Evidence:** `N05-tm-direct-allocation-wording.png`

---

## BUG-043

**Prep material typed on the create form is silently dropped unless "Add Link" is clicked**

| Field | Details |
|---|---|
| Severity / Priority | Low / P3 |
| Area | Create Opportunity → Position → Preparation Material (`PrepMaterialFields.tsx`) |
| Accounts | PMO bhumi.chauhan |
| Test case | TC-OPPTY-704 |

**Steps to reproduce**
1. New Opportunities → Interview Opportunity → fill all required fields.
2. Under *Preparation Material*, type Title "Playwright basics" and URL "https://playwright.dev/docs/intro". **Don't** click *Add Link*.
3. Click **Create Opportunity**.

**Expected:** the material is saved, or submit is blocked with "Click Add Link to keep this material".
**Actual:** the ticket is created with `prepMaterials: []`, and the typed link is lost without any warning. The row is local draft state by design, but users won't know that.
**Evidence:** `N06-prep-draft-not-added.png`

---

## BUG-044

**A 200-character client name stretches the Kanban "All Clients" dropdown across the whole screen**

| Field | Details |
|---|---|
| Severity / Priority | Low / P4 |
| Area | Board → Kanban → *Filter by client* dropdown |
| Accounts | PMO bhumi.chauhan |
| Test case | demo-readiness D2-07 |

**Steps to reproduce**
1. Create an opportunity with Client Name = 200 × "c" (the allowed maximum is 200).
2. Board → Kanban → open the **All Clients** dropdown.

**Expected:** long names are cut off with an ellipsis (full name on hover), and the dropdown keeps a sensible width.
**Actual:** the dropdown grows to the full screen width and covers the board.

**Note:** I renamed the test tickets (OPP-0004, 0075, 0164, 0239) afterwards to "QA-AUTO LongName Client" so the demo board stays usable. Repeat step 1 to reproduce.
**Evidence:** `N08-long-client-dropdown.png`

---

## BUG-045

**Empty values show as bare dashes in the candidate dialog and Requests Tracking**

| Field | Details |
|---|---|
| Severity / Priority | Low / P4 |
| Area | Candidate interview dialog · Requests Tracking → Interview Allocation |
| Accounts | PMO bhumi.chauhan |
| Test case | TC-OPPTY-717 |

**Steps to reproduce:** open OPP-0156 → *View interview details* → *Opportunity Details* tab, then the *Interview Rounds* tab as the candidate. Then open Requests Tracking → Interview Allocation.

**Expected:** a readable placeholder ("Not provided", "Not assigned"), per the team's empty-value convention.
**Actual:**
- *Opportunity Details*: "Project Description **-**", "End Date **-**".
- Read-only rounds: "Interviewer Name **-**".
- Requests Tracking: CSM "**—**", Employee "**—**".

**Evidence:** `N07-candidate-dialog-dashes.png`, `N03-interview-tab-row.png`

---

## BUG-046

**Untitled interview rounds show as "Round 1:" with a dangling colon**

| Field | Details |
|---|---|
| Severity / Priority | Low / P4 |
| Area | Candidate interview dialog → Interview Rounds (`formatRoundTitle` in `candidateInterviewUtils.ts`) |
| Accounts | PMO bhumi.chauhan |
| Test case | Retest RT-BUG-046 |

**Steps to reproduce**
1. New Opportunities → Interview Opportunity. Set *Number of Rounds* to 2 and leave the round titles empty. Create the ticket.
2. Shortlist a candidate and open their interview details → *Interview Rounds*.

**Expected:** "Round 1", "Round 2".
**Actual:** "Round 1:", "Round 2:". The form saves a blank title as "R1:", which counts as a title. The prefix is then stripped to an empty string and shown after "Round 1:".
**Suggested fix:** in `formatRoundTitle`, use the "unnamed" label when `stripRoundPrefix(title)` is empty.
**Evidence:** `N10-round-title-colon.png`

---

## BUG-047

**Rejected candidates can be shortlisted again, although the ticket page says they are greyed out**

| Field | Details |
|---|---|
| Severity / Priority | Low / P3 |
| Area | Ticket page → "Rejected & previously considered" info icon · Add/ Shortlist picker · `GET /opportunities/candidates?positionPublicId=` |
| Accounts | PMO bhumi.chauhan |
| Test case | NEW-14 |

**Steps to reproduce**
1. On OPP-0269, the TM has rejected Gargi Das. Hover the info icon next to *Rejected & previously considered*. It says: "These candidates are greyed out in Add/ Shortlist for this opportunity, so they can't be shortlisted again by mistake."
2. Click **Add/ Shortlist** and search "Gargi Das".

**Expected:** Gargi Das is greyed out and can't be ticked, as the hint says.
**Actual:** she is listed and can be ticked. The API returns `canNominate: true`, and the backend contract says "Rejected or Released Candidates stay in, with canNominate true".
**Decision needed:** either grey out rejected candidates on that opportunity, or change the hint text.
**Evidence:** `N11-rejected-candidate-selectable.png`

---

## BUG-048

**Interview allocation notice to the candidate: "You've Been allocated", raw date, sent as a direct-allocation event**

| Field | Details |
|---|---|
| Severity / Priority | Low / P4 |
| Area | Notification `notification.allocation.direct_employee_assigned` sent on interview Allocate |
| Accounts | PMO bhumi.chauhan · candidate chirag.bajaj |
| Test case | Retest RT-BUG-048 |

**Steps to reproduce**
1. As PMO, mark an interview candidate Won and click **Allocate** (OPP-0306, Chirag Bajaj).
2. Log in as the candidate → *All Notifications* → search "allocated".

**Expected:** "You've been allocated to AnalytixHub | Advanced Analytics from 3 Nov 2026" (normal capitalisation, readable date), as an interview-allocation event.
**Actual:**
- Title: "You've **Been** allocated to AnalytixHub | Advanced Analytics".
- Body: "…starting **2026-11-03**." (a raw ISO date).
- Event type: `direct_employee_assigned`, the same root cause as BUG-042.

**Evidence:** `N12-allocation-title-been.png`
