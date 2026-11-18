# Open bugs — Interview Flow (Pre-sales Opportunities), 28 Oct 2026

**Environment:** SimERP DEV 6.5.0, https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1). Chromium. Log in at `/dev-login` with the account named in each bug (standard dev password).
**Verified:** every bug below was re-run live on **28 Oct 2026** and still reproduces. Each screenshot was taken during that run. The steps are the exact steps used.
**Scope:** all bugs still open (after the 28 Oct QA decisions) for the Interview / Pre-sales Opportunities module (SI4-T1267 backend, SI4-T1446 frontend). BUG-037 (nightly "lapsed interview" job) is ignored by QA decision and is not listed. Items marked "not built", "as designed", "pending decision" or "won't fix" on 26 Oct are not listed either.
**Screenshots:** `reports/screenshots/2026-10-28/open-bugs/`
**Zoho:** all 12 filed on 28 Oct 2026. Backend items go to Hardik Metaliya and are linked to SI4-T1267; frontend items go to Parshva Vora and are linked to SI4-T1446 (BUG-036 → Parshva, as requested). The screenshots are not yet attached in Zoho: the API token has no documents permission.

## Severity overview

| Severity | Count | Bugs |
|---|---|---|
| Critical | 0 | — |
| High | 1 | BUG-012 |
| Medium | 4 | BUG-036 (SI4-I597), BUG-038, BUG-039, BUG-040 |
| Low | 7 | BUG-028, BUG-042, BUG-044, BUG-045, BUG-047, BUG-021, BUG-023 |
| **Total** | **12** | 8 Open · 2 Needs decision · 2 Needs clarification · **all 12 filed in Zoho** (SI4-I597 … SI4-I608) |

**How severity was set:**
- **Critical:** the flow is blocked, or there is data loss or a security breach. None found.
- **High:** a wrong business result or broken data integrity with no workaround. BUG-012 lets an employee be approved past 100% capacity with no warning.
- **Medium:** wrong behaviour, access scope or information in a main flow, where a workaround exists.
- **Low:** copy, layout or usability issues, or FRD wording questions.

**Suggested fix order:** BUG-012 → BUG-036 → BUG-038 → BUG-039 → decisions on BUG-040, BUG-047, BUG-021 → the Low list.

**Removed from the list on 28 Oct (QA decision):** BUG-033 is not a bug (a PM not seeing her Direct request before approval is expected). BUG-035 (ticket number cut off), BUG-041 (What's New empty), BUG-043 (prep link lost without Add Link), BUG-046 ("Round 1:" colon) and BUG-048 ("You've Been allocated") are ignored.

## Summary — 12 open

| ID | Severity | Status | Bug | Zoho |
|---|---|---|---|---|
| [BUG-012](#bug-012) | **High** | Open | An employee can be approved on another opportunity beyond their free capacity, with no warning | SI4-I598 (Hardik) |
| [BUG-036](#bug-036) | Medium | Open | PM sees and can act on opportunities on her project that are not assigned to her | SI4-I597 (Parshva) |
| [BUG-038](#bug-038) | Medium | Open | "Interview scheduled" notification shows the time in GMT (date-only rounds show the previous day) | SI4-I599 (Hardik) |
| [BUG-039](#bug-039) | Medium | Open | Allocation ticket created from an interview can't be found in Requests Tracking; the row shows CSM and Employee as "—" | SI4-I600 (Hardik) |
| [BUG-040](#bug-040) | Medium | Needs decision | TM can shortlist employees of other departments | SI4-I601 (Hardik) |
| [BUG-028](#bug-028) | Low | Open | Empty create form shows only "8 required fields left" and no message on each field | SI4-I602 (Parshva) |
| [BUG-042](#bug-042) | Low | Open | TM is told an interview allocation was a "Direct Allocation … bypassing the ticket workflow" | SI4-I603 (Hardik) |
| [BUG-044](#bug-044) | Low | Open | A 200-character client name stretches the Kanban client dropdown across the screen | SI4-I604 (Parshva) |
| [BUG-045](#bug-045) | Low | Open | Empty values shown as a bare "-" in the candidate dialog | SI4-I605 (Parshva) |
| [BUG-047](#bug-047) | Low | Needs decision | Rejected candidates can be shortlisted again, though the ticket page says they're greyed out | SI4-I606 (Parshva) |
| [BUG-021](#bug-021) | Low | Needs clarification | Priority rule differs from FRD rule 9 | SI4-I607 (Hardik) |
| [BUG-023](#bug-023) | Low | Needs clarification | Candidate notifications are third person with PMO instructions | SI4-I608 (Hardik) |

---

## BUG-012

**Zoho: SI4-I598 (assigned to Hardik)** — An employee can be approved on another opportunity beyond their free capacity, with no warning**

| Field | Details |
|---|---|
| Severity / Status | **High** (raised from Medium on 28 Oct) / Open (QA lead 26 Oct: an employee must not be approvable once allocated elsewhere) |
| Accounts | PMO vihaan.chatterjee |
| Data | Kriti Desai: 60% booked (50% AnalytixHub via NA-0450 + 10% HyperScale), **40% remaining** |

**Steps to reproduce**
1. As PMO, open OPP-0328 (Interview, ElitePay, QA Engineer, **Fixed 50%**). Kriti Desai is shortlisted there.
2. Note her row: Remaining Allocation **40%** of 100%.
3. Click **Bypass approval for Kriti Desai**, type a reason and click **Confirm Bypass**.

**Expected:** blocked, or at least a warning that she has only 40% free and is already allocated elsewhere.
**Actual:** "Approval bypassed." She is now Approved / Being Prepared at 50% and shows **0% remaining**. There was no warning in the bypass dialog.
**Screenshot:** `BUG-012-approved-over-capacity.png`

---

## BUG-036

**PM sees and can act on opportunities on her project that are not assigned to her** — Zoho **SI4-I597** (Parshva Vora)

| Field | Details |
|---|---|
| Severity / Status | Medium / Open (rule from QA lead 26 Oct: a PM sees an opportunity only if assigned to it) |
| Accounts | PM maitri.bose (PM of AnalytixHub) |

**Steps to reproduce**
1. OPP-0323 is an Interview opportunity on AnalytixHub with **no PM assigned**. (To recreate it: as PMO, raise one on AnalytixHub and leave "Assign to PM" empty.)
2. Log in as maitri.bose → Requests Tracking → Project Allocation → **Interview Allocation** → search OPP-0323.
3. Open OPP-0323.

**Expected:** not listed, and can't be opened by Maitri.
**Actual:** listed; it opens, and the position offers **Add/ Shortlist**. The same happens for gaurav.panchal with OPP-0150.
**Screenshots:** `BUG-036-a-pm-list.png`, `BUG-036-b-pm-opens-unassigned.png`

---

## BUG-038

**Zoho: SI4-I599 (assigned to Hardik)** — "Interview scheduled" notification shows the time in GMT; date-only rounds show the previous day**

| Field | Details |
|---|---|
| Severity / Status | Medium / Open |
| Accounts | PMO vihaan.chatterjee · candidate laxmi.khandelwal |

**Steps to reproduce**
1. As PMO, open OPP-0322 → eye icon for Laxmi Khandelwal → *Interview Rounds* → set Round 1 to **28 Oct 2026, 18:00**.
2. Log in as laxmi.khandelwal → bell → *View All Notifications* → search "Interview scheduled".

**Expected:** "…scheduled for Wed, 28 Oct 2026, 6:00 PM" (IST).
**Actual:** "…scheduled for **Wed, 28 Oct 2026 12:30:00 GMT**". For a round set to a day only (e.g. OPP-0156 on 27 Oct), the message reads "Mon, 26 Oct 2026 18:30:00 GMT", which is the previous day.
**Screenshot:** `BUG-038-candidate-gmt-time.png`

---

## BUG-039

**Zoho: SI4-I600 (assigned to Hardik)** — Allocation ticket created from an interview can't be found in Requests Tracking; the row shows CSM and Employee as "—"**

| Field | Details |
|---|---|
| Severity / Status | Medium / Open |
| Accounts | PMO vihaan.chatterjee |
| Data | OPP-0306: Chirag Bajaj Won → Allocate created **NA-0470** (APPROVED) |

**Steps to reproduce**
1. Requests Tracking → Project Allocation → **Direct Allocation** tab → search "NA-0470".
2. Switch to **Interview Allocation** → search "OPP-0306".

**Expected:** NA-0470 can be found, and the OPP-0306 row shows the CSM and the allocated employee.
**Actual:** step 1 shows "No tickets found". Step 2 shows the OPP-0306 row with **CSM "—"** and **Employee "—"**. `GET /api/v1/allocation-tickets?search=NA-0470` does return the ticket.
**Screenshots:** `BUG-039-a-direct-tab-NA0470.png`, `BUG-039-b-interview-tab-dashes.png`

---

## BUG-040

**Zoho: SI4-I601 (assigned to Hardik)** — TM can shortlist employees of other departments onto his department's position** (needs product decision)

| Field | Details |
|---|---|
| Severity / Status | Medium / Needs decision |
| Accounts | TM mehul.pandya (JAVA) |

**Steps to reproduce**
1. Log in as mehul.pandya and open OPP-0324 (a position in JAVA + QA).
2. Click **Add/ Shortlist** and search "Kavya Khandelwal" (QA department).

**Expected:** a JAVA TM picks only JAVA employees.
**Actual:** Kavya Khandelwal (QA) is listed and can be ticked. On 27 Oct, the JAVA TM also shortlisted a QA employee onto a **JAVA-only** position (OPP-0214) and it was saved (201).
**Screenshot:** `BUG-040-java-tm-picks-qa-employee.png`

---


## BUG-028

**Zoho: SI4-I602 (assigned to Parshva)** — Empty create form shows only "8 required fields left" and no message on each field**

| Field | Details |
|---|---|
| Severity / Status | Low / Open (QA lead 26 Oct, TC-OPPM-029) |
| Accounts | PMO vihaan.chatterjee |

**Steps to reproduce**
1. Opportunity Allocation → **New Opportunities** → Interview Opportunity → Prospect.
2. Click into *Position Title* and tab out without typing. Scroll to the bottom.

**Expected:** each required field shows its own message (e.g. "Title is required").
**Actual:** only the footer says "**8 required fields left**" and *Create Opportunity* is disabled. No field shows a message (0 field messages). Only Tech Stack gets a red outline.
**Screenshot:** `BUG-028-empty-form-no-field-messages.png`

---



## BUG-042

**Zoho: SI4-I603 (assigned to Hardik)** — TM is told an interview allocation was a "Direct Allocation … bypassing the ticket workflow"**

| Field | Details |
|---|---|
| Severity / Status | Low / Open |
| Accounts | TM mehul.pandya |

**Steps to reproduce**
1. On OPP-0306, Chirag Bajaj was taken Won → **Allocate** by PMO (interview flow, NA-0470).
2. Log in as mehul.pandya → *View All Notifications* → search "Chirag Bajaj".

**Expected:** "Chirag Bajaj was allocated to AnalytixHub from OPP-0306".
**Actual:** "Direct Allocation: AnalytixHub | Advanced Analytics — Bhumi Chauhan **directly allocated** Chirag Bajaj … **bypassing the ticket workflow**."
**Screenshot:** `BUG-042-tm-direct-allocation-wording.png`

---


## BUG-044

**Zoho: SI4-I604 (assigned to Parshva)** — A 200-character client name stretches the Kanban client dropdown across the screen**

| Field | Details |
|---|---|
| Severity / Status | Low / Open |
| Accounts | PMO vihaan.chatterjee |

**Steps to reproduce**
1. Create an opportunity with *Client / Company Name* of 200 characters (the allowed maximum), e.g. 200 × "c".
2. Opportunity Allocation → **Kanban** → open **All Clients**.

**Expected:** long names are cut off with "…" and the dropdown keeps a normal width.
**Actual:** the dropdown is **1,650 px wide** on a 1,600 px window and covers the board. The long name also stretches the group header row in List view.
**Note:** the test ticket's client name was shortened again after the screenshot to keep the demo board clean.
**Screenshot:** `BUG-044-client-dropdown-stretched.png`

---

## BUG-045

**Zoho: SI4-I605 (assigned to Parshva)** — Empty values shown as a bare "-"**

| Field | Details |
|---|---|
| Severity / Status | Low / Open (team rule: readable word, never a bare dash) |
| Accounts | PMO vihaan.chatterjee |

**Steps to reproduce:** open OPP-0322 → eye icon for Laxmi Khandelwal → *Opportunity Details* tab.

**Expected:** "Not provided" / "Not set".
**Actual:** "Project Description **-**", "End Date **-**". The Interview Allocation row in Requests Tracking also shows "—" (see BUG-039).
**Screenshot:** `BUG-045-bare-dashes.png`

---


## BUG-047

**Zoho: SI4-I606 (assigned to Parshva)** — Rejected candidates can be shortlisted again, though the ticket page says they're greyed out** (needs decision)

| Field | Details |
|---|---|
| Severity / Status | Low / Needs decision |
| Accounts | PMO vihaan.chatterjee |

**Steps to reproduce**
1. Open OPP-0322. The TM (mehul.pandya) rejected Gunjan Rawat. Hover the info icon next to *Rejected & previously considered*: "These candidates are greyed out in Add/ Shortlist … so they can't be shortlisted again by mistake."
2. Click **Add/ Shortlist** → search "Gunjan Rawat".

**Expected:** greyed out and can't be ticked.
**Actual:** listed and can be ticked (API `canNominate: true`).
**Decision:** block rejected candidates on that opportunity, or change the hint.
**Screenshot:** `BUG-047-rejected-candidate-selectable.png`

---


## BUG-021

**Zoho: SI4-I607 (assigned to Hardik)** — Priority rule differs from FRD rule 9** (needs clarification)

| Field | Details |
|---|---|
| Severity / Status | Low / Needs clarification |
| Accounts | PMO vihaan.chatterjee |

**Steps to reproduce:** Opportunity Allocation → **Direct** → **Kanban**. Compare each card's priority with its tentative allocation date.

**Expected (FRD rule 9):** priority from ticket age.
**Actual:** priority comes from days until the allocation date (≤ 7 days High, ≤ 14 Medium, later Low; the form says "Set from the tentative allocation date … Updated daily"). On the board today: 9 High, 26 Medium, 5 Low. Interview priority stays manual.
**Question:** keep the build's rule and update the FRD, or build ticket-age priority?
**Screenshot:** `BUG-021-direct-priority-by-date.png`

---

## BUG-023

**Zoho: SI4-I608 (assigned to Hardik)** — Candidate notifications are third person with PMO instructions** (needs clarification)

| Field | Details |
|---|---|
| Severity / Status | Low / Needs clarification |
| Accounts | candidate chirag.bajaj |

**Steps to reproduce:** log in as chirag.bajaj → *View All Notifications* → search "selected".

**Expected:** written to the candidate, e.g. "You've been selected for Java Developer on OPP-0306."
**Actual:** "**Chirag Bajaj was selected** for 'Java Developer' on OPP-0306 — **proceed to Project Association.**" Rejections read "… was rejected … — the slot is open again" with no reason.
**Screenshot:** `BUG-023-third-person-candidate-message.png`
