# Interview flow demo — runbook for 28 Oct 2026

**Where:** SimERP DEV 6.5.0, https://simerp-dev.simform.solutions (log in at `/dev-login`, password as usual for dev accounts)
**Rehearsed:** 27 Oct 2026, 3 full runs of the demo path below. Run 1 passed 22/22 steps, run 2 passed 20/21 (the one miss was a network drop on the tester's machine, not the app), and run 3 passed 22/22. No server errors. Each full run took under 3 minutes when scripted, so allow about 10–12 minutes live.
**Build:** no interview-related code is waiting to merge, so tomorrow's build should be the one we tested. Re-check at the start of the day (see *Morning check*).

## 1. Before the demo (15 minutes earlier)

1. **One browser profile per role.** Use separate Chrome profiles (or one normal window plus incognito windows). Logging into a second account in the same profile replaces the first.
   - **PMO:** bhumi.chauhan@simformsolutions.com (main presenter account)
   - **TM (QA):** sudhansu.patel@simformsolutions.com
   - **Candidate:** prakash.pillai@simformsolutions.com
   - **PM (optional):** gaurav.panchal@simformsolutions.com
2. **Log in fresh on demo morning.** Logins last 24 hours.
3. **Nobody else should use these accounts during the demo, and no automated tests should run.** If the same account logs in elsewhere, a yellow toast appears: *"Your session was taken over by another tab."* The demo keeps working, because the toast is only a warning, but it looks bad on screen. Just close it.
4. On the board, **type `Demo` in the search box** before you share your screen. The dev board holds about 180 test tickets named "QA-AUTO …". With the search, only the 7 demo tickets show.
5. The PMO bell shows *99+* unread. That's normal test noise, so don't open it on screen. Use the TM's bell instead (step 8 below).
6. **Screen size:** on a 1280- or 1366-wide projector, the list shows only about 5 columns and Kanban only 3 of its 13 columns (the rest scroll sideways). Set **browser zoom to 80%** or collapse the left sidebar before the demo. Ticket pages, dialogs and the create form fit fine at those sizes.
7. **Bell panel:** it shows only the newest 3 notifications. Click the small **↗** on a notification to open its ticket. For an older one (e.g. the OPP-0223 approval request), go to *View All Notifications*, search the candidate's name ("Prachi"), then click ↗.

## 2. Prepared tickets (one per stage — the backup if a live step fails)

All are Interview tickets on **AnalytixHub**, position *QA Automation Engineer*, 50% Fixed, and 2 rounds (Technical, Client).

| Ticket | Title | Stage now | Candidate | Good for showing |
|---|---|---|---|---|
| OPP-0222 | Demo 1 - Shortlisting | Pending to Shortlist | — | Add/ Shortlist dialog, UP score, availability |
| OPP-0223 | Demo 2 - Awaiting TM approval | Waiting for Approval | Prachi Pillai | TM approves live (as sudhansu.patel) |
| OPP-0224 | Demo 3 - Preparation | Being Prepared | Divya Rathod | Checklist, prep material, add a round date |
| OPP-0225 | Demo 4 - Interview tomorrow | Interview Scheduled (Round 1 on 28/10, 11:00) | Swati Yadav | Mark Cleared (allowed on the interview day) |
| OPP-0226 | Demo 5 - Did the interview happen | Did Interview Happen? | Kartik Reddy | The new prompt: Completed / Didn't happen |
| OPP-0227 | Demo 6 - Waiting for client feedback | Waiting for Feedback | Vikram Dave | Round results, Mark Won |
| OPP-0228 | Demo 7 - Won - ready to allocate | Won | Hardik Chaudhari | Allocate dialog → Project Allocated |

Use each prepared ticket once. A step done in the demo can't be undone; for example, after allocating OPP-0228 it stays allocated.

## 3. Live demo script (fresh ticket)

Use **Prakash Pillai** and **Smriti Iyer** as candidates. Both are 100% free and show 100% availability. Spare: Keyur Dutta.

| # | Who | Do | You should see |
|---|---|---|---|
| 1 | PMO | Opportunity Allocation → search `Demo` → switch **List / Kanban** | Columns from Pending to Shortlist to No Longer Required, including *Did Interview Happen?* |
| 2 | PMO | **New Opportunities** → *Interview Opportunity* → *Existing Client* → **Link Zoho Project** = AnalytixHub → **Client / Company Name**: pick *AnalytixHub (Existing)* | The client name is NOT filled in for you. Pick it by hand |
| 3 | PMO | Opportunity Title: type a new title (e.g. "Demo - Live QA Automation") → *Create new*. Assign PM Gaurav Panchal, CSM Tarun Sharma | |
| 4 | PMO | Position: title, **Tech Stack** (type "Playwright", then click the suggestion or *Create New*), Department QA, openings 2, priority High, seniority, Allocation % 50, Tentative Allocation Date (today or later), Number of Rounds 2 | The counter at the bottom reaches 0 and *Create Opportunity* turns active |
| 5 | PMO | If you add prep material on this form, **click "Add Link"**, then **Create Opportunity** | "Opportunity created successfully." and the ticket opens |
| 6 | PMO | **Add/ Shortlist** → tick Prakash Pillai and Smriti Iyer → *Add 2 Candidates* | Both rows: Shortlisted · Not sent |
| 7 | PMO | Prakash: **Send for approval**. Smriti: **Bypass** → type a reason → Confirm Bypass | Prakash: Awaiting TM approval. Smriti: Being Prepared |
| 8 | TM | Bell → "Approval requested for Prakash Pillai" → open the ticket → **Approve** | Being Prepared, Approved |
| 9 | PMO | Reload → eye icon on Prakash → *Preparation Checklist*: tick 2 items | "2 / 5 completed" |
| 10 | PMO | *Interview Rounds* → Round 1 date = today, Interviewer Name → close dialog | Status: Interview Scheduled |
| 11 | PMO | Round 1 **Mark Cleared** → Round 2 date = today → **Mark Cleared** | Waiting for Feedback |
| 12 | PMO | **Mark Won** | Won, plus an *Allocate* button on the row |
| 13 | PMO | **Allocate** → check % = 50, Status Green, Role on Project *Development Work* → Allocate | Project Allocated, "1 / 2 filled" |
| 14 | Candidate | Prakash logs in → bell shows "shortlisted / approved / selected" → open the ticket link | Only his own row, no feedback, read-only |

To show **"Did the interview happen?"** live: on Smriti, set Round 1 date to **yesterday**. The card moves to *Did Interview Happen?* at once. Then click **Completed** (→ Waiting for Feedback) or **Didn't happen** (→ pick a new date or skip the round). Otherwise use OPP-0226.

### If the demo also shows Direct allocation (tested 27/10, all passed)

| # | Who | Do | You should see |
|---|---|---|---|
| D1 | PMO | New Opportunities → *Direct Opportunity* → Existing Client → project AnalytixHub → client AnalytixHub → title, position, Department QA, Tech Stack, seniority → **Select employee** (pick one) → Allocation % → Tentative Allocation Date. *Allocation confirmed* is ticked by default. Then **Create Opportunity** | Ticket opens in **Open** |
| D2 | PMO | Board → **Direct** tab → search the ticket → *Change the stage* → In Review → Awaiting → **Approved** | "… approved — the employee is allocated." |
| D3 | PMO | Requests Tracking → Direct Allocation → search the **NA ticket number** | Approved NA ticket listed |
| D4 | CSM | On a Direct ticket the CSM raised: **Cancel Request** → reason → Confirm | Ticket shows **Cancelled** with name, time and reason |
| D5 | PMO | **Close Ticket** → No Longer Required → Confirm | Status No Longer Required |

Note: the Direct tab already holds a ticket titled "demo test" (OPP-0070), so searching "Demo" there also shows it.

### Also checked on copies (all work)

Every presenter action on the 7 Demo tickets was run on copies (OPP-0230 … OPP-0236, and again on OPP-0311 … OPP-0317 in the 27/10 evening retest):
- Shortlist dialog: search, Designation filter, sort by UP System.
- TM opens the approval notification with ↗ and approves.
- Checklist tick and skip, prep material, date a round.
- Mark Cleared on the interview day. It is blocked until the round's date is today.
- "Completed" on *Did the interview happen?*.
- Mark Won with a pending round (a confirmation appears).
- Allocate.
- Kanban drag (Interview Scheduled → Waiting for Feedback).
- Edit Ticket, edit a position's openings, add a position to an existing ticket (*Add Positions*) and delete it.
- Close a ticket as **Client Won**.
- Ticket Info tab, and the Employee list's *Interview Opportunities* column.

## 4. Avoid on screen (known issues — these will not work as expected)

| Don't | Why | Do instead |
|---|---|---|
| Wait for a card to move to *Did Interview Happen?* by itself | The nightly job is off on dev (set aside: answered by hand for now) | Back-date the round, or use OPP-0226 |
| Read out the "Interview scheduled" notification | It shows raw GMT; a date-only round shows the previous day (N-02) | Show the TM's "Approval requested" or the candidate's "shortlisted" message |
| Search Requests Tracking for the NA ticket after Allocate | Interview allocation tickets don't show there, and the row shows CSM/Employee as "—" (N-03) | Show the *Project Allocated* card on the board, or the PM's Requests Tracking → Interview Allocation row for the OPP ticket |
| Read candidate notifications aloud | Third-person wording ("Prakash Pillai was selected … proceed to Project Association") — BUG-023 | Just show that they arrive |
| Click *Not Cleared* to reject | It only records the outcome; the candidate moves on to the next round | Reject from the board: *Change status* → **Rejected** → Client + reason |
| Look for *No Longer Required* in *Cancel Request* | Interview tickets close Won / Lost / On Hold there | Use the board's *Change status* menu for NLR or Open |
| Read the Ticket ID from the list | It is cut off ("OPP-022…") — BUG-035 | Search by OPP number, or open the ticket |
| Allocate on a Prospect ticket | Allocate is disabled until a project is linked | Use an Existing-client ticket, or *Link Project* first |
| Click *Unlink Project* after allocating | Clickable, but fails with an error (correctly blocked) | Skip |
| Leave live notification pop-ups stacked in the top-right | When others work in the system at the same time, pop-ups stack up and can cover dialog buttons such as *Mark Won* (seen in the 27/10 retest) | Click *Clear All* on the pop-up stack |
| Re-run the API test suite before the demo | It re-creates a 200-character test client name that stretches the Kanban client dropdown (fixed in the test now, but older runs left data) | Don't run it on demo day; search "Demo" |
| Log in as the same account in two places | Pops the "session taken over" toast | One profile per account |
| Open *What's New & History* | Shows "0 releases · No release notes found" (the releases API returns nothing on dev today) | Skip it, or ask dev to publish the release notes first |
| Expect a column filter (e.g. Designation in Add/ Shortlist) to apply straight away | Nothing happens until you click **Save** in the filter | Tick the value, then **Save** |
| Search Requests Tracking by employee name | It searches ticket, PM and project only | Search by ticket number (e.g. NA-0463) |
| Mouse-drag a Kanban card far to the right on a small screen | The target column may be off-screen | Use the card's *Change status* menu, or zoom out first |

## 5. Morning check (5 minutes, tomorrow before the demo)

1. Open the board as PMO, search `Demo`, and confirm the 7 tickets sit in the stages above.
2. Confirm Prakash Pillai and Smriti Iyer still show *100% Remaining* in Add/ Shortlist on OPP-0222. Don't shortlist them yet.
3. Check *What's New & History* for a new version number. If dev was redeployed overnight, run the live script once on a throwaway ticket first.

## 6. Data created during rehearsals (left on dev)

- Tickets OPP-0220, OPP-0221, OPP-0229 (titles start with "QA-AUTO REH").
- 50% allocations on AnalytixHub for Gargi Soni, Vihaan Patil and Nandini Kapoor.
- The 7 demo tickets OPP-0222 … OPP-0228.
- Copies used for testing presenter actions: OPP-0230 … OPP-0236 (titles "QA-AUTO DCOPY …", so a "Demo" search doesn't show them).
- Direct tickets OPP-0237 (approved: Omkar Barot 30% on AnalytixHub, NA-0463) and OPP-0238 (cancelled by the CSM, then closed as No Longer Required).
- More 50% allocations on AnalytixHub: Neel Rathod (OPP-0236).
- Client name on three of my own API test tickets (OPP-0004, 0075, 0164) changed from a 200-character "cccc…" to "QA-AUTO LongName Client", because it stretched the Kanban *All Clients* dropdown across the whole screen.
