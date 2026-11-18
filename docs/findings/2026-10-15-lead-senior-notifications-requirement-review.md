# SI4-T1527: Lead/Senior allocation notifications, requirement review

**Task reviewed:** SI4-T1527 *Allocation/deallocation notifications for Leads and Seniors between the RM and the TM* (Zoho task 688906000094517381)
**Status of feature:** built (PR #545, merged to `development` 2026-10-15) and deployed on dev
**Reviewed:** 15 Oct 2026
**Method:** the task text was checked against the code (`2026-10-15-lead-senior-notifications-code-brief.md`) and against the live dev run on the same day (`2026-10-15-notifications-shadow-live-results.md`). Every question below is something the task text leaves open **and** where the build had to pick an answer. Where dev showed what happens, that is quoted.

Severity: **🔴 Blocker**: the build and the text disagree, or the answer changes who gets notified · **🟠 High**: will be raised as a bug by someone, sooner or later · **🟡 Medium**: edge case, needs a one-line decision · **⚪ Low**: wording / tidy-up

---

## 1. Questions for the PO, in priority order

| # | Sev | Question | What the build does today | Suggested answer |
|---|---|---|---|---|
| Q1 | 🔴 | **Which "TM" ends the chain?** The task says "the chain stops at the TM" and puts EM and leadership out of scope. But it does not say whose TM: the TM of the employee's department, or the first person going up the line who holds a TM role. | The walk stops at the first person in the line who has TM access for the employee's department. In FRONT END, the real department TM (Abhishek Hingorani) is **not** in the reporting line, so the walk climbs to the CTO (TM for all departments). On dev this means **an EM (Rajesh Kumar) and an Admin (David Lais) got the RM copy**. That is the opposite of "EM out of scope". | Decide one: (a) keep it as is and accept EMs/Admins get the copy, or (b) stop the walk at anyone with EM/leadership role too. Either way, the task should name the rule. |
| Q2 | 🔴 | **What happens when the line never reaches a TM?** Examples: the employee reports into another department, a team link is missing, a team was deleted. | Nobody extra is notified (only the RM) and nothing is logged. | Probably fine, but say so. Ask dev to log it so missing data can be found and fixed. |
| Q3 | 🔴 | **AC4 "nobody gets the same notification twice for one event".** A PM who is also a Lead gets a PM copy ("Allocation Confirmed: HyperScale") and an RM copy ("Team Member Assigned: Kashyap Vyas"). These are two different messages for one action. Does AC4 mean one message per person per action? If yes, which copy wins? | Duplicates are removed only inside one message type. **Confirmed on dev:** hardik.trivedi got 2 for one direct allocation and 2 for one removal. Today this is an open defect against AC4. | One message per person per action. Keep the PM copy (it has more detail for the PM). Same rule for CSM requester, PMO and TM who are also in the line. |
| Q4 | 🟠 | **Should the person who did the action be notified about it?** For example, a PMO user who is a Lead in the employee's line clicks Bypass. | They get the RM copy about their own action. This already happens to RMs and TMs today (Sudhansu Patel got an RM-type copy for his own approval). | Don't notify the actor. |
| Q5 | 🟠 | **"Approvals, bypasses, fully approved, flow completed".** Today the RM gets **only final outcomes** (assigned, updated, deallocated), not each approval step. Does the task want middle managers to get the same (final only), or does it expect new notices for each approval step? | Final outcomes only, same as the RM. | Confirm "same as RM, final outcomes only". Remove "approvals" from the wording to avoid a wrong bug later. |
| Q6 | 🟠 | **Ticket types not in the list.** The task lists 6 flows. The RM is also told about: revert period, cancel upcoming allocation, withdraw scheduled change, PR-reviewer assign/update/remove, and `POST /assigned-projects` (API only). | Revert/cancel/withdraw and PR reviewer: middle managers included. `POST /assigned-projects`: RM only. | Add the first two to the list ("every flow where the RM is told"). Decide if the API-only route matters. |
| Q7 | 🟠 | **Replacement: what about the outgoing developer's line?** The task says Replacement is in scope, but only the new developer's line is told. The outgoing developer and their RM get nothing today. | New developer's RM + line only. Gap existed before T1527. | Decide whether the outgoing developer's RM and line should get a "deallocated" copy. |
| Q8 | 🟡 | **Which department decides the TM?** The employee's home department or the department the ticket was assigned to? | Home department. | Home department (that is the reporting line). Write it down. |
| Q9 | 🟡 | **Is "Lead" / "Senior" a role or just a position in the line?** | Anyone in the line is included, whatever their role. A TM of a **different** department in the middle is also notified. | "Anyone in the line" is fine. Confirm the other-department TM case. |
| Q10 | 🟡 | **Inactive people.** If the RM has left (soft-deleted) but the team still points to them, should the Lead/Senior still be told? People on notice or PIP? | RM deleted → **nobody** in the line is told. Deleted middle manager → skipped, the rest still told. Notice/PIP → still told. | Lead/Senior should still be told when the RM has left. That is when they need it most. |
| Q11 | 🟡 | **Wording for middle managers.** The RM template says "your team member, X". For a Senior or Lead, X is not a direct report. | Same RM text, unchanged. | Fine per "same content". Mention it so nobody files it as a bug. |
| Q12 | 🟡 | **Line changes mid-flow.** If someone moves team between ticket creation and approval, who is told? | The line at the time the notification is sent. In-app and email are worked out at slightly different times, so they could differ. | Line at the time of the final event. Email/in-app mismatch is acceptable. |
| Q13 | ⚪ | **Clicking the notification.** A Lead without ticket access may click and land on an empty or 404 ticket page. The RM already has this problem. | Unchanged. | Hide the link when the user cannot open the ticket. |
| Q14 | ⚪ | **AC3 email cannot be checked on dev.** There is no sent-mail view and the email queue on dev was empty. | n/a | Ask DevOps for a redirect inbox or mail logs on dev, or accept in-app as proof (same recipient logic). |

---

## 2. What is fine as written

- Employee → RM → TM: recipients are unchanged. Checked live on QA (Ankita Das): RM + TM only, and Amit Patel above the TM got nothing.
- RM → Senior → Lead → TM: every middle manager got exactly one RM copy with the same text. Checked live for direct allocation and direct removal.
- Nobody above the TM got anything (checked in FRONT END and QA).
- The reporting line uses the same team data SimERP already uses for RM/TM (AC5).
- MS Teams group notifications are untouched (no code changes there).

## 3. Acceptance criteria status

| AC | Status | Note |
|---|---|---|
| 1. Every middle manager gets every RM notification | 🟢 Met for tested flows | Depends on Q1 (who counts as "middle") and Q6 (which flows) |
| 2. Employee → RM → TM unchanged | 🟢 Met | Live, QA department |
| 3. In-app and email, same content | 🟡 In-app met, email not checked | Q14 |
| 4. No double notification | 🔴 **Not met** | Q3, confirmed live |
| 5. Same reporting line source | 🟢 Met | Code |
| 6. Same in all departments | 🟡 Depends on data | Q1/Q2: in departments where the TM is not in the line, EMs/Admins are notified instead |
| 7. TM and MS Teams unchanged | 🟢 Met | Code + live |

## 4. Test coverage

The existing set (TC-NOTLDR-001..025) covers the flows and most edge cases. This review adds TC-NOTLDR-026..031 for Q1, Q4, Q7, Q8, Q9 and Q12. See `docs/test-cases/test-cases-2026-10-15-notldr-lead-senior-notifications.md`.
