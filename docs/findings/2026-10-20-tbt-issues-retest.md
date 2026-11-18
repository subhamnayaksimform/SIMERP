# Re-test of "To be tested" issues, 2026-10-20

Dev (SimERP 6.4.2), Chromium. 7 SimERP issues were in "To be tested" in Zoho. Fix commits were found with `git log origin/development --grep=SI4-Ixxx` in both app repos. Nothing was changed in Zoho.

| Issue | Title | Fix commit | Result |
|---|---|---|---|
| SI4-I580 | PM in the reporting line gets 2 notifications | BE `c3adc107`, `c1af1826` (PR #551, 20/10) | **Pass**: close |
| SI4-I572 | Certifications validation form UI | FE `b620446f`, `3c69f98d` (PR #499) | **Pass**: close |
| SI4-I563 | PROD: Designation design issue on Employee page | FE `4d97dba5`, `e306351c` (PR #482) | **Pass on the Employee page; side effect on Team Details**: reopen or new bug |
| SI4-I457 | Status of notice period is not being shown | none (I507 / T1383 are related) | **Looks still open**: NP row's Status cell is blank by design |
| SI4-I458 | Status of PIP is not being updated | none | **Looks still open**: 20 people show "In PIP" after their PIP end date |
| SI4-I510 | [Prod] Prem Patel / Intree allocation error | none (dev comment: data, 0% assignment) | **Not testable on dev**: reporter to confirm on prod |
| SI4-I567 | Prod: Sagar Khanpara cannot log in | none (dev comment: VPN/network, IT ticket) | **Not testable on dev**: reporter to confirm |

## SI4-I580: Pass
The same scenarios as 19/10 were used. The PM now gets 1 notification per action.

| Action | Person | 19/10 | 20/10 |
|---|---|---|---|
| **Direct allocation** (PMO bhumi, Gaurav Dutta → HyperScale) | Hardik Trivedi (project PM + Lead) | 2 | **1** (`direct_pm_notified`) |
| **Direct update** UA-0134 (10→20%) | Hardik | 2 | **1** (`pm_updated`) |
| **Direct remove** DA-0109 | Hardik | not run | **1** (`pm_deallocated`) |
| **NA-0373** raised by PM Jignesh (Iti's RM), PMO bypass | Jignesh Raval | 2 | **1** (`pm_allocated`) |
| DA-0110 Jignesh cancel upcoming, PMO acknowledge | Jignesh | 1 | 1 |

The RM (Kartik), the other middle manager (Amit Patel) and the TM (CTO) still got their single copy each time, so the T1527 behaviour is intact.
Evidence: `reports/screenshots/2026-10-20/notifications/json/` (`diff-H1/H2/H3-after`, `diff-J2-after`, `diff-J3-after`).

**Data:** 1 direct allocation (no ticket number in the response) plus 4 tickets: UA-0134, DA-0109, NA-0373, DA-0110. Gaurav keeps a one-day HyperScale row (20/10). Iti's ConfigHub allocation was cancelled whole.

## SI4-I572: Pass
Checked live as gaurav.dutta, nothing saved (`reports/screenshots/2026-10-20/i572/`).
- 053: the URL error shows while typing, with no blur; a valid URL clears it.
- 054: `https://dddddd`, `https://localhost/x`, `http://999.1.1.1/x` and `https://a.b1` are rejected. `https://credly.com/b/1`, `https://in.credly.com/x` and `http://10.0.0.1/x` are accepted (private IPs still pass, as noted before).
- 055: clearing the field shows "Add a verification link or upload the certificate." and Save stays disabled.
- 056: Partnership 1 issue 10/10/2026 gives expiry 10/10/2027, and re-picking 10/09/2026 gives 10/09/2027. The field is disabled.
- 057: AWS gives +3y; Claude gives empty, disabled, with "This partnership never expires."; switching back gives +12m with no leftover value.
- Regression: the Certifications suite has 44 passing and the same 4 known failures (013, 033, 050, 051 = SI4-I582..I585).

## SI4-I563: Employee page fixed, side effect on Team Details
- **Employee Details list:** stacks that have no icon fall back to text: Project Planning, Agile Delivery, Salesforce, CRM Tools. That text now stays on one line at 1440, 1280 and 1024 px (Hardik Trivedi, Jignesh Raval, Vihaan Dodia, Rajan Kale).
- **Team Details (Show All Details on, PROJECT MANAGEMENT):** the stack name now truncates. But `e306351c` caps the badge group at `max-w-[60%]`, and the role and experience badges have no `whitespace-nowrap`/`shrink-0`. So "Sr. PM", "DelvL" and "12y 7m" are squeezed onto **two lines inside their pills** at both 1440 and 1280 px. See `reports/screenshots/2026-10-20/i563/team-details-1440-PM.png`. The fix itself caused this.

## SI4-I457 / SI4-I458: probably still open (need the reporter's intent; the Zoho descriptions are empty)
- **I457:** on the Employee list hover card ("Leave & Compliance Details"), the NP row has an **empty Status cell** (Rohan Singh, Swati Iyer). The PIP row shows a status chip. The FE code leaves the NP status `null` on purpose (`LeaveAvatarIndicator.tsx`). The NP badge and day count are correct, and they hide after the last working day (I507).
- **I458:** `pipStatus` comes from the HR sync, and nothing in the backend moves it when the end date passes. Of 34 employees with a PIP, **20 still show "In PIP" after their end date** (for example Smriti Arora, 03 Sep–02 Oct; Riya Doshi, ended 27 Sep). Data: `reports/screenshots/2026-10-20/np-pip-data.json`. If HR is expected to update the status by hand, this is a data issue; if the app should, it is still a bug.

## SI4-I581: Pass, closed in Zoho (re-tested 20/10, 16:57 IST)
Fix: BE `ad5c1662` (PR #553, merged 20/10 14:23). The acting employee is now excluded from their own RM-copy notifications.

| Action (actor PMO Palak Saxena, middle manager in Falgun Solanki's line) | Palak on 19/10 | Palak on 20/10 | Others (Falgun, RM Bhumi, Neha, CTO) |
|---|---|---|---|
| Direct allocation of Falgun → XCrypt (upcoming 22/10) | 1 (`direct_employee_rm_assigned`) | **0** | 1 each, unchanged |
| Direct cancel of the upcoming allocation (DA-0111) | 1 (`allocation_cancelled`) | **0** | 1 each, unchanged |

Evidence: `reports/screenshots/2026-10-20/notifications/json/diff-P1-after.json`, `diff-P2-after.json`. Data: Falgun's XCrypt allocation was cancelled whole; nothing is left open.

## Re-check, 20/10 evening
Zoho still has 6 SimERP issues in "To be tested": I457, I458, I510, I563, I567 and I572. None of them changed since the morning, and there are no new `SI4-I457/458/510/563/567/572` commits on `origin/development` in either repo (latest FE `9b0d7182`, BE `ddaa6583`).
- **SI4-I563:** the Team Details side effect is still there. As admin on PROJECT MANAGEMENT with Show All Details on, **94 of 184 badges** wrap onto two lines at 1440, 1280 and 1024 px ("Sr. PM", "12y 7m", "10y 1m", …). `TeamMemberRow.tsx:45` still has `max-w-[60%]`, and the pills still have no `whitespace-nowrap`. A department with short names (MANAGEMENT) shows no wrapping. Evidence: `reports/screenshots/2026-10-20/i563-recheck/`.
- **SI4-I572:** no code change since this morning's pass, so the result stands (pass, close).
- **I457, I458, I510, I567:** no change, same as above.
