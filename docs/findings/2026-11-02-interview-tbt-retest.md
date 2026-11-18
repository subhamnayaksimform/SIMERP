# Re-test of Interview-module bugs in "To be tested", 2 Nov 2026

**Environment:** SimERP DEV, https://simerp-dev.simform.solutions. UI 6.7.0, API 6.8.0. Chromium and the API (`/api/v1`).
**Scope:** the 12 Interview / Pre-sales Opportunities bugs that were moved to ToBeTested on 2 Nov 2026 (SI4-I597 … SI4-I608). The fixes came from PR #593 (backend) and PR #534 (frontend), merged 28 Oct 2026. Today's merges (#611 / #549) are **not** on dev yet: the new `positions/:id/close` route returns 404.
**Test data:** a new opportunity, **OPP-0333** "QA-AUTO TBT retest 02-11" (Prospect, so no real allocation can be made). Candidates:
- Fenil Gajjar: bypassed, 3 rounds, then selected
- Hetvi Kotak: rejected
- Ankita Dave: 40% free on a 50% position. Her approval request was withdrawn afterwards.

Its client name was set to 200 characters for a moment and then set back.
**Screenshots:** `reports/screenshots/2026-11-02/tbt-interview/`

## Result: 11 pass, 1 not a bug (I607)

| Zoho | Bug | Result | What was checked |
|---|---|---|---|
| SI4-I597 | PM sees unassigned opportunities on his project | **Pass** | maitri.bose: OPP-0323 (no PM assigned) is not in Requests Tracking → Interview Allocation, and opening it shows "Opportunity not found" (API 404 OPP_001). Same for gaurav.panchal with OPP-0150. A PM still sees tickets they are assigned to or raised themselves. |
| SI4-I598 | Approved beyond free capacity, no warning | **Pass** | Ankita Dave (40% free) on a 50% position. PMO **Bypass** dialog shows "Not enough free allocation … only 40% … needs 50%. Approving will over-book them." TM **Approve** asks "Approve anyway?" with the same text. |
| SI4-I599 | Interview time in GMT, day-only shows previous day | **Pass** | Candidate notification: "…round 1 … scheduled for Thu, 5 Nov 2026, 6:00 PM" (picked as 18:00 IST). Day-only round: "…scheduled for Sat, 7 Nov 2026" (no time, correct day). |
| SI4-I600 | Interview hand-off ticket not findable; CSM/Employee "—" | **Pass** | Requests Tracking → Interview Allocation → search "NA-0470" finds OPP-0306, and the row shows CSM **Tarun Sharma** and Employee **Chirag Bajaj**. (The Direct tab still doesn't list NA-0470. By design, the fix makes the search work from the Interview tab.) |
| SI4-I601 | TM can shortlist other-department employees | **Pass** | JAVA TM mehul.pandya: the picker on OPP-0324 lists only JAVA employees, and Kavya Khandelwal (QA) isn't offered. Shortlisting her through the API returns **403 OPP_184** "You can only shortlist Employees of your own department". |
| SI4-I602 | Empty create form: no message on each field | **Pass (minor note)** | Clicking Create Opportunity on an empty form shows a message on all 8 required fields (client name, title, position title, tech stack, department, priority, seniority, allocation %). **Note:** if focus is in Tech Stack (for example after tabbing out of Position Title), the first Create click shows only 2 messages, and a second click shows all 8. This happened every time (3 runs). |
| SI4-I603 | TM told an interview allocation was a "Direct Allocation … bypassing the workflow" | **Pass** | New interview ticket OPP-0334 on AnalytixHub: Ira Chopra (JAVA) bypassed → selected → **Allocate** (real allocation, 50% from 09 Nov 2026, approved by user). JAVA TM mehul.pandya gets "Interview Allocation: AnalytixHub \| Advanced Analytics — Ira Chopra was allocated to AnalytixHub \| Advanced Analytics from interview ticket OPP-0334." There's no "directly allocated" or "bypassing" wording now. |
| SI4-I604 | 200-char client name stretches the Kanban client dropdown | **Pass** | The All Clients dropdown stays 306 px wide, the long name is cut with "…" and the full name shows on hover. In List view the group header is capped at 552 px, with no horizontal scroll. |
| SI4-I605 | Bare "-" in the candidate dialog | **Pass** | The candidate dialog shows "Not provided" / "Not set" (Opportunity Details) and "Not assigned" (Interview Rounds). There are no bare dashes. |
| SI4-I606 | Rejected candidate can be shortlisted again | **Pass** | Hetvi Kotak (rejected on OPP-0333) is greyed out, with "Rejected for this position earlier, so they can't be shortlisted for it again." The checkbox is disabled. The API returns **409 OPP_183** for both PMO and TM (also checked with Gunjan Rawat on OPP-0322). |
| SI4-I607 | Priority rule differs from FRD rule 9 | **Not a bug** | No code change: Direct priority still comes from days until the allocation date. The user confirmed on 2 Nov 2026 that this is not an issue, so it is closed as designed. |
| SI4-I608 | Candidate notifications in third person with PMO instructions | **Pass** | The candidate now gets: "You've been selected for 'Java Developer' on OPP-0333. You'll be told once your project allocation is confirmed." For a rejection: "You won't be moving forward … You can still be considered for other positions." (no reason). PMO keeps the "… proceed to Project Association" wording. |

## Data left on dev
- OPP-0334 (QA-AUTO, AnalytixHub): **real allocation** of Ira Chopra 50% from 09 Nov 2026 (Project Allocated).
- OPP-0333 (QA-AUTO, Prospect): Fenil Gajjar Selected/Won (no allocation), Hetvi Kotak Rejected, Ankita Dave Shortlisted.

**Zoho:** 02/11 status changed — 11 Closed, I607 set to "Not a Bug" (status id 688906000011982580). No comments posted.
