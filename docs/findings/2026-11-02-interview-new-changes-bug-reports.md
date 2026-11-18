# Bug reports — Interview new changes (No Longer Required, pills, stats), 2 Nov 2026

**Environment:** SimERP DEV, https://simerp-dev.simform.solutions (API https://simerp-dev-api.simform.solutions/api/v1). Backend build 449 (6.8.0, commit 246278fb, PR #611 + #613), frontend PR #549; the UI shows 6.7.0. Chromium. Log in at `/dev-login` with the account named in each bug (standard dev password).
**Verified:** every bug was reproduced on 2 Nov 2026, and the four from the afternoon run were re-checked that evening on the same build. They all still reproduce.
**Scope:** the new interview-module changes from SI4-T1267 (backend) and SI4-T1446 (frontend). Numbering continues the earlier interview series (last was BUG-048).
**Screenshots:** `reports/screenshots/2026-11-02/new-changes-bugs/`
**Zoho:** filed on 2 Nov 2026 as SI4-I625 … SI4-I631. Frontend bugs went to Parshva Vora and are linked to SI4-T1446; backend bugs went to Hardik Metaliya and are linked to SI4-T1267. The screenshots aren't attached (the upload failed), so they're named in each description.

## Summary

| ID | Severity | Status | Bug | Area | Suggested owner |
|---|---|---|---|---|---|
| [BUG-049](#bug-049) (SI4-I625) | **Medium** | Open | Employee list shows only "+N" (no pill) for anyone with 2 or more active opportunities | Frontend | Parshva |
| [BUG-051](#bug-051) (SI4-I626) | **Medium** | Open | Released candidates disappear from the opportunity detail page instead of showing as "Released" | Frontend | Parshva |
| [BUG-053](#bug-053) (SI4-I627) | **Medium** | Open | An opportunity whose positions are all No Longer Required can still be marked Won | Backend | Hardik |
| [BUG-050](#bug-050) (SI4-I628) | Low | Open | On a closed position, the Project Allocated card sits in the "No Longer Required" Kanban column | Frontend | Parshva |
| [BUG-054](#bug-054) (SI4-I629) | Low | Open | A PMO/TM rejection is shown as "Rejected before by <client>" in the shortlist warning | Backend + Frontend | Hardik / Parshva |
| [BUG-055](#bug-055) (SI4-I630) | Low | Open | Opportunity header reads "Filled 1 / 0 required" after closing a position that has a Won/allocated seat | Backend | Hardik |
| [BUG-052](#bug-052) (SI4-I631) | — | Needs decision | The Admin role can't Release, Close or Reopen (it has only read/view-board rights on opportunities) | Role config | Product / QA lead |

**Severity:** Medium means a main flow shows wrong information or allows a wrong business result, and a workaround exists. Low covers layout or wording problems and edge-case counts.

---

## BUG-049

**Employee list shows only "+N" (no pill) for anyone with 2 or more active opportunities**

| Field | Details |
|---|---|
| Severity / Status | Medium / Open |
| Account | PMO vihaan.chatterjee |
| Data | Hardik Desai: shortlisted on 9 open Interview tickets (6 still open now). David Lais: 3 tickets |

**Steps to reproduce**
1. Go to **Employee › Employee Details**.
2. Search **Hardik Desai**.
3. Scroll right to the **Active Opportunities** column.
4. Resize the browser to 1280 px, 1600 px and 1900 px, and open and close the employee side panel.

**Expected:** as many pills as fit, then "+N". The visible count changes with the width (requirement 1).
**Actual:** only "+9" (now "+6"), with no pill at any window size. The same happens with 2 or 3 opportunities (David Lais shows only "+3"). Employees with exactly 1 opportunity do get a pill.
**Cause:** the column is fixed at 180 px, which leaves about 155 px of usable width. One pill ("OPP-0340 20%") is about 128 px, and `useOverflowItems` keeps 36 px + 6 px gap for the "+N" badge whenever more than one item exists (128 + 6 + 36 = 170 > 155), so no pill ever qualifies. The column width doesn't change with the window, so resizing has no effect.
**Suggestion:** let pills shrink with an ellipsis (as the Projects column does), widen the column, or always show at least one pill.
**Screenshots:** `BUG-049-only-plusN.png`, `BUG-049-wide-window-still-plusN.png`

---

## BUG-051

**Released candidates disappear from the opportunity detail page instead of showing as "Released"**

| Field | Details |
|---|---|
| Severity / Status | Medium / Open |
| Account | PMO vihaan.chatterjee |
| Data | OPP-0335 "QA-AUTO NLR retest A 02-11", Java Lead (closed) — Smit Shah and Uday Hegde were released by the closure; on Java Developer, David Lais and Hardik Desai were released one by one |

**Steps to reproduce**
1. Open **OPP-0335**, expand **Java Developer**.
2. On a live candidate click **Mark … as no longer required**, enter a reason, and confirm.
3. Look at the candidate table and the "Rejected & previously considered" table.
4. Expand **Java Lead** (closed with No Longer Required).

**Expected:** the released candidate stays visible with the status **Released** (requirement 5: "the candidate shows as Released").
**Actual:** the candidate vanishes from the detail page. "Rejected & previously considered" lists only Rejected candidates, and the closed Java Lead says "No candidates shortlisted yet." The Released status appears only on the board card and in the employee's profile history.
**Screenshot:** `BUG-051-released-not-shown.png`

---

## BUG-053

**An opportunity whose positions are all No Longer Required can still be marked Won**

| Field | Details |
|---|---|
| Severity / Status | Medium / Open |
| Account | PMO vihaan.chatterjee |
| Data | OPP-0344 "QA-AUTO edge cases 02-11" (set back to Open after the test) |

**Steps to reproduce**
1. Open an Open interview opportunity that has no Won candidate (OPP-0344).
2. Mark **every position** No Longer Required, with a reason.
3. Change the opportunity status to **Won**.

**Expected:** blocked, or at least a warning that nothing was won (0 filled, all positions no longer required).
**Actual:** "Opportunity status changed successfully". The opportunity is Won with 0 filled. This counts in the board's **Won** tile and reports.
**Evidence:** API `PATCH /opportunities/{id}/status {status:"WON"}` → 200 (no screenshot).

---

## BUG-050

**On a closed position, the Project Allocated card sits in the "No Longer Required" Kanban column**

| Field | Details |
|---|---|
| Severity / Status | Low / Open |
| Account | PMO vihaan.chatterjee |
| Data | OPP-0334 "QA-AUTO TBT I603 02-11" (AnalytixHub): seat #1 Ira Chopra **Project Allocated**; position closed after a second seat was added |

**Steps to reproduce**
1. Open **Opportunity Allocation**, search **OPP-0334**.
2. Switch to **Kanban** and scroll to the right-hand columns.

**Expected:** Ira Chopra's card is in the **Project Allocated** column, with no red outline (requirement 6).
**Actual:** the card has the right label ("Project Allocated") and no red outline, but it's in the **No Longer Required** column ("No Longer Required column, 2 cards"). The **Project Allocated** column is empty (0 cards). List view is correct.
**Screenshot:** `BUG-050-project-allocated-in-nlr-column.png`

---

## BUG-054

**A PMO/TM rejection is shown as "Rejected before by <client>" in the shortlist warning**

| Field | Details |
|---|---|
| Severity / Status | Low / Open |
| Account | PMO vihaan.chatterjee |
| Data | Priya Sharma, rejected on OPP-0336 with **Rejected by = PMO**; OPP-0335 has the same client |

**Steps to reproduce**
1. On OPP-0336, reject a candidate and choose **Rejected by: PMO** (not Client).
2. Open another ticket of the **same client** (OPP-0335) › **Add/ Shortlist** and search that candidate.

**Expected:** the warning is for client rejections (requirement 4: "Have a client reject employee X"), or the wording says who actually rejected.
**Actual:** the same warning appears for a PMO (or TM) rejection: "Rejected before by QA-AUTO Rejection Client … Check the earlier rejection first." The API `clientRejection` is filled for any rejection role (`rejectedByRole: "PMO"`), so the user is told the client rejected someone when it didn't.
**Screenshot:** `BUG-054-rejection-warning-wording.png` (the client-rejection case, showing the same wording)

---

## BUG-055

**Opportunity header reads "Filled 1 / 0 required" after closing a position that has a Won/allocated seat**

| Field | Details |
|---|---|
| Severity / Status | Low / Open |
| Account | PMO vihaan.chatterjee |
| Data | OPP-0334 — one Project Allocated seat (Ira Chopra), position closed |

**Steps to reproduce**
1. On a position with a Won or Project Allocated seat plus an open seat, click **No Longer Required** and confirm.
2. Look at the opportunity header in the board List view (Shortlisted / Rejected / Filled).

**Expected:** "Filled" never exceeds "required" (for example, required drops to the seats actually filled, not to 0).
**Actual:** stats `{"filledCount":1,"requiredCount":0}`, so the header shows **Filled 1/0**. A closed position's headcount is dropped from "required" while its filled seat is still counted.
**Evidence:** API `GET /opportunities/openings?search=OPP-0334` → `opportunity.stats`.

---

## BUG-052

**The Admin role can't Release, Close or Reopen** (needs decision)

| Field | Details |
|---|---|
| Severity / Status | — / Needs decision (role configuration, not code) |
| Account | Admin ceo@simformsolutions.com |

**Steps to reproduce**
1. Log in as **ceo** (Admin).
2. On any open interview ticket try **Mark … as no longer required**, **No Longer Required** on a position, and **Reopen**.

**Expected (from the requirement list, section 14):** "PMO / Admin: every action, including Release, Close and Reopen".
**Actual:** 403 "Access forbidden" for all three, and also for shortlist, edit and create. On dev, the **ADMIN** role has only `read` and `view_board` on Opportunities; PMO has the full set.
**Question:** should ADMIN get the PMO opportunity permissions, or is view-only intended?

---

## Re-test data on dev (all QA-AUTO)
OPP-0334 … OPP-0344. OPP-0338/0339 are Direct tickets on AnalytixHub (no real allocation). Test ticket NA-0475 was created and then closed.
