# SimERP full-suite bug report, 17 Nov 2026

**Environment:** SimERP DEV (`simerp-dev.simform.solutions`), build 6.9.0.
**Checked:** every bug below was found in the full Playwright run (13/11) and still fails in a re-run on 16/11. The two Dashboard bugs were last checked on 13/11.
**Source:** `reports/results/results-2026-11-13-full-suite.json`, QA report `reports/html/qa-report-2026-11-13_16-15.html`.
**Accounts:** all accounts share the standard dev password. "Admin" below is the `ceo` account.

## Priority key

| Priority | Meaning |
|---|---|
| **P1 – High** | Security gap, a screen people can't reach, a record that can't be saved, or wrong numbers shown with no warning. Fix first. |
| **P2 – Medium** | Wrong behaviour with a workaround, or bad data that can be saved. |
| **P3 – Low** | Display, wording or accessibility polish. |

## Summary

| ID | Priority | Module | Bug | Test |
|---|---|---|---|---|
| BUG-01 | P1 | Goals | Employee and CSM can read the Goals APIs | TC-EMPGOL-515 |
| BUG-02 | P1 | Goals | TM can edit any goal through the API | TC-EMPGOL-519 |
| BUG-03 | P1 | Dashboard | Dashboard link missing for every role; Employee blocked | TC-DASH-001/021/022 |
| BUG-04 | P1 | Employee Details | Saving Sagar Khanpara's record always fails | TC-EMPDET-003/033/043 |
| BUG-05 | P1 | Working Location | Project page shows the 90-day figure for "Last 15/30 days" | TC-EMPWLC-010 |
| BUG-06 | P1 | Working Location | Employee list shows another range for "Last 5 days" / "Last 6 months" | TC-EMPWLC-009 |
| BUG-07 | P2 | Goals | Clear doesn't reset "No Goals Assigned" | TC-EMPGOL-444 |
| BUG-08 | P2 | Goals | `%` and `_` in search match everyone | TC-EMPGOL-459 |
| BUG-09 | P2 | Goals | Duplicate goal names allowed if case or spaces differ | TC-EMPGOL-494 |
| BUG-10 | P2 | Goals | Goal name of only spaces is accepted | TC-EMPGOL-482 |
| BUG-11 | P2 | Goals | Estimated Duration accepts 9,999 | TC-EMPGOL-487 |
| BUG-12 | P2 | Goals | Description link accepts "not a url" | TC-EMPGOL-490 |
| BUG-13 | P2 | My Projects | A bad filter in the URL breaks the whole page | TC-PMPROJ-128 |
| BUG-14..21 | P3 | Several | Smaller issues, see the last section | — |

---

## P1 – High

### BUG-01 · Employee and CSM can read the Goals APIs
**Module:** Goals · **Test:** TC-EMPGOL-515

**Steps**
1. Log in as an Employee user (or a CSM user).
2. Call these with that session:
   - `GET /api/v1/employee-goals/dashboard?timeFrame=15d`
   - `GET /api/v1/employee-goals/filter-options`
   - `GET /api/v1/employee-goals/employees?page=1&limit=100`

**Expected:** 403 for all three. These roles have no Goals screen.
**Actual:** 200 for all three, for both Employee and CSM.

### BUG-02 · TM can edit any goal through the API
**Module:** Goals · **Test:** TC-EMPGOL-519

**Steps**
1. As Admin, create a goal that is not assigned to anyone.
2. Log in as a TM user.
3. Send `PATCH /api/v1/goals/<that goal id>` with `{ "description": "test" }`.

**Expected:** 403. The TM should only change goals in their own departments.
**Actual:** 200, and the goal is changed. (`POST /api/v1/goals` for another department correctly fails with 400.)
**Note:** this is the same as finding F-1 from the 13/11 re-test (goal writes by RM/TM/EM). Please confirm the rule with product, since the goal list is org-wide.

### BUG-03 · Dashboard can't be reached from the sidebar
**Module:** Dashboard · **Tests:** TC-DASH-001, TC-DASH-021, TC-DASH-022

**Steps**
1. Log in as any role and look at the sidebar.
2. Log in as an Employee user and open `/dashboard`.

**Expected:** "Dashboard" is the first sidebar item, and Employees can open it (FRD sections 3 and 10).
**Actual:**
- No role has a Dashboard link. The sidebar starts with Overview, Employee, Team and so on.
- Employees are sent to `/unauthorized`, and their sidebar only shows Employee › Certifications.

**Note:** the Employee part is already filed as DEF-DASH-001 (Zoho 688906000093525946). The missing link for all roles looks like it was removed by mistake in frontend commit `756c6c6b` ("fix-merge-conflict", 15/09). No release note mentions it.

### BUG-04 · Saving Sagar Khanpara's record always fails
**Module:** Employee Details · **Tests:** TC-EMPDET-003, 033, 043

**Steps**
1. Log in as Admin and open Employee.
2. Click Edit on Sagar Khanpara (the first row in the default sort).
3. Change any field, for example Overall Rating, and click Save.

**Expected:** the record saves and the drawer closes.
**Actual:** `PATCH /api/v1/employees/818aa719…` returns **400 "Team does not belong to the specified department"**. The drawer stays open and nothing saves, whichever field was changed.
**Note:** first seen 10/09, still happening. Probably his team and department data are out of step. This also blocks the double-click Save check (TC-EMPDET-033).

### BUG-05 · Project page shows the 90-day figure for "Last 15/30 days"
**Module:** Working Location · **Test:** TC-EMPWLC-010

**Steps**
1. Log in as a CSM user and open any project's detail page.
2. Click a member's Working Location cell. The popup shows different office % for 15, 30 and 90 days.
3. Change the time-range dropdown to "Last 15 days", then to "Last 30 days".

**Expected:** the column shows the 15-day figure, then the 30-day figure.
**Actual:** it shows the 90-day figure both times (for example 83% where the 15-day figure is 89%).
**Cause:** the project page doesn't send `timeFrame` to the API (see `docs/findings/2026-10-15-certs-wl-code-changes.md`).

### BUG-06 · Employee list shows another range for "Last 5 days" / "Last 6 months"
**Module:** Working Location · **Test:** TC-EMPWLC-009

**Steps**
1. Log in as Admin, open Employee and turn on the Working Location column.
2. Note Punit Patel's figure for "Last 15 days" and for "All time".
3. Choose "Last 5 days", then "Last 6 months".

**Expected:** the 5-day and 6-month figures, or a clear note that this range isn't available.
**Actual:** "Last 5 days" quietly shows the 15-day figure, and "Last 6 months" shows the all-time figure. The API maps `timeFrame=5d` to the `15d` window and `6m` to `overall`.

---

## P2 – Medium

### BUG-07 · Clear doesn't reset "No Goals Assigned"
**Module:** Goals › By Employee · **Test:** TC-EMPGOL-444

**Steps**
1. Log in as Admin and open Goals › By Employee. The footer shows "of 3648 results".
2. Open the Goals column filter, turn on **No Goals Assigned** and Save. The footer shows about 1,223.
3. Open the same filter and click **Clear**.

**Expected:** the footer goes back to "of 3648 results".
**Actual:** it still shows "of 1223 results". The request still sends `hasNoGoals=true`.

### BUG-08 · `%` and `_` in search match everyone
**Module:** Goals › By Employee · **Test:** TC-EMPGOL-459

**Steps**
1. Open Goals › By Employee.
2. Search for `%`, then for `_`.

**Expected:** only names that contain those characters, which is usually 0.
**Actual:** `%` returns 3,648 of 3,648 rows and `_` returns 3,647. The server treats them as wildcards.

### BUG-09 · Duplicate goal names allowed if case or spaces differ
**Module:** Goals › By Goal · **Test:** TC-EMPGOL-494

**Steps**
1. Create goal `AUTO-GOL-123-dup`.
2. Create `AUTO-GOL-123-dup` again. Blocked with 409, which is correct.
3. Create `auto-gol-123-dup` (lower case).
4. Create `AUTO-GOL-123-dup  ` (with trailing spaces).

**Expected:** steps 3 and 4 are blocked as duplicates, like step 2.
**Actual:** steps 3 and 4 both save (201).

### BUG-10 · Goal name of only spaces is accepted
**Module:** Goals › By Goal · **Test:** TC-EMPGOL-482

**Steps**
1. Open Add Goal.
2. Type only spaces in Goal Name.

**Expected:** Save stays disabled, or the field shows "required".
**Actual:** Save becomes enabled and there's no error under Goal Name.

### BUG-11 · Estimated Duration accepts 9,999
**Module:** Goals › By Goal · **Test:** TC-EMPGOL-487

**Steps**
1. Open Add Goal and enter a name.
2. Set Estimated Duration to 9999 months, 9999 weeks and 9999 days.
3. Click Save.

**Expected:** a maximum limit, or an error message.
**Actual:** the goal saves (201) with no message.

### BUG-12 · Description link accepts "not a url"
**Module:** Goals › By Goal · **Test:** TC-EMPGOL-490

**Steps**
1. Open Add Goal and type some text in Description.
2. Select the text, click the **Link** button, type `not a url`, and click Apply.

**Expected:** Apply stays disabled or shows "invalid URL".
**Actual:** the text becomes a link to "not a url".

### BUG-13 · A bad filter in the URL breaks the whole My Projects page
**Module:** My Projects · **Test:** TC-PMPROJ-128

**Steps**
1. Log in as a CSM user.
2. Open `/my-projects?adv_allocationStage=FOO`.

**Expected:** the bad value is ignored, or a readable message is shown with a way to clear it.
**Actual:** the API returns 400 and shows the toast `Filter "allocationStage" must be a non-empty array of: …`. The whole page is replaced by "Failed to load projects", which hides search and the stats cards. There's no way to clear the filter apart from editing the URL.

---

## P3 – Low

| ID | Module | Bug | How to see it | Test |
|---|---|---|---|---|
| BUG-14 | Working Location | Office % + home % add up to 101% in some popups and department rows | Open the WL dashboard by department, e.g. POST-SALES BA shows 50% + 51% | TC-EMPWLC-039 |
| BUG-15 | Working Location | No info icon next to the "Location Preference" tag (Night Shift Preference has one) | Open an employee profile, Working Location card | TC-EMPWLC-007 |
| BUG-16 | Working Location | No Working Location column on Employee › Past Employee, or on a project's Past Allocations tab (FRD 3.2 / 3.3) | Table options on those tabs only offer "Projects" | TC-EMPWLC-010, 075 |
| BUG-17 | Long-Running Allocations | LR badge text contrast is 2.45:1 (orange on light orange); 4.5:1 is needed | Any LR badge | TC-PMPROJ-177 |
| BUG-18 | Employee / Projects | Bare "—" or "-" instead of a word: Employee list (Start → End Hours, Work Pattern, Active Opportunities); Projects PR Reviewers sometimes blank | Employee list and Projects list | empty-data regression |
| BUG-19 | Goals | Bare "—" in expanded rows (start/end dates); one description shows "undefined"; one By Employee row has a blank name (manager Suresh Kapoor, first row sorted A–Z) | Goals › By Employee, expand rows | TC-EMPGOL-441, 452, 474, 544 |
| BUG-20 | Goals | Accessibility: focus lost from the view tabs; not returned after closing Add Goal or View All; charts and popovers have no accessible name | Keyboard and screen reader | TC-EMPGOL-532..537 |
| BUG-21 | Skills | In Add Skills, if you clear the pre-filled Department, "Search or Create Skill" and "Assign to Employees" stay usable | Skills › Add Skills, clear Department | TC-EMPSKL-012, 046 |

Other small Goals issues, still failing on 16/11:
- Disabled Delete has no tooltip (500).
- The delete dialog doesn't name the goal (501).
- Changing Department drops the reporting-manager filter (446).
- An expanded row re-opens after going back a page (461).
- Browser Back leaves Goals (531).
- Chart total 3,644 vs 3,648 Total Employees (419).
- Progress History is empty on a 20%-complete goal (453).
- No "0 results" footer for an empty search (456).
- Certificate Code has no required marker (480).
- An empty Goal Name shows no invalid state (481).
- Save stays enabled after an edit is undone (498).
- A legend click doesn't hide its chart series (413).

---

## Not in this report

- **Certifications:** being changed under SI4-T1685 and tested by another session. See `docs/findings/2026-11-16-certifications-t1685-cr.md`.
- **Already fixed:** SI4-I637 (TM sees "Add Skills" but gets 403) passes on 16/11.
- **Need a product decision, not filed as bugs:**
  - "Overdue", "Delayed" and "At risk" are never explained (TC-EMPGOL-543).
  - L&D Hours on employees with no goals are not explained (454).
  - Opening a second row closes the first (450).
- **Not proven:** adding an employee to a skill doesn't change its holder count (TC-EMPSKL-120). The test may be picking someone who already has the skill.
- **Obsolete tests:** 10 Skills and 4 Competencies tests check behaviour the app no longer has. Waiting for a retirement decision.
