# Employee — Test Cases

**Total test cases:** 22  
**Modules covered:** Employee  
**Source:** `reports/test-cases/cases-2026-10-30-EMPDET-T1549-retest.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 15 | 68.2% |
| negative | 3 | 13.6% |
| a11y | 1 | 4.5% |
| boundary | 1 | 4.5% |
| regression | 1 | 4.5% |
| smoke | 1 | 4.5% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 11 | 50.0% |
| medium | 10 | 45.5% |
| low | 1 | 4.5% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| high | 11 | 50.0% |
| medium | 10 | 45.5% |
| low | 1 | 4.5% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| observed-live | 22 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| observed-live | 22 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 22 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @T1549 | 22 | 100.0% |
| @functional | 15 | 68.2% |
| @negative | 3 | 13.6% |
| @a11y | 1 | 4.5% |
| @boundary | 1 | 4.5% |
| @regression | 1 | 4.5% |
| @smoke | 1 | 4.5% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPDET-1501](#tc-empdet-1501-start-end-hours-and-work-pattern-columns-show-on-the-active-employee-tab) | Start → End Hours and Work Pattern columns show on the Active Employee tab | Employee | smoke | high |
| [TC-EMPDET-1502](#tc-empdet-1502-columns-are-not-shown-on-the-past-employee-tab) | Columns are not shown on the Past Employee tab | Employee | functional | medium |
| [TC-EMPDET-1503](#tc-empdet-1503-role-access-admin-and-pmo-see-all-employees-with-both-columns) | Role access — Admin and PMO see all employees with both columns | Employee | functional | high |
| [TC-EMPDET-1504](#tc-empdet-1504-role-access-tm-and-em-see-only-their-department-with-both-columns) | Role access — TM and EM see only their department with both columns | Employee | functional | high |
| [TC-EMPDET-1505](#tc-empdet-1505-role-access-rm-pm-csm-and-employee-do-not-see-the-columns) | Role access — RM, PM, CSM and Employee do not see the columns | Employee | negative | high |
| [TC-EMPDET-1506](#tc-empdet-1506-cell-shows-the-average-range-as-start-end) | Cell shows the average range as start – end | Employee | functional | high |
| [TC-EMPDET-1507](#tc-empdet-1507-close-after-midnight-shows-1) | Close after midnight shows +1 | Employee | boundary | high |
| [TC-EMPDET-1508](#tc-empdet-1508-hover-card-shows-period-start-close-in-ist-and-min-logged-per-hour) | Hover card shows period, start/close in IST and min logged per hour | Employee | functional | medium |
| [TC-EMPDET-1509](#tc-empdet-1509-work-pattern-badges-high-low-no-flag-low-at-0) | Work Pattern badges: High, Low, No flag, Low at 0 | Employee | functional | high |
| [TC-EMPDET-1510](#tc-empdet-1510-work-pattern-flag-matches-thresholds-low-40-high-55) | Work Pattern flag matches thresholds (Low ≤ 40, High > 55) | Employee | regression | high |
| [TC-EMPDET-1511](#tc-empdet-1511-no-data-shows-in-both-columns) | No data shows — in both columns | Employee | functional | medium |
| [TC-EMPDET-1512](#tc-empdet-1512-coverage-note-no-times-no-flag-the-note-shown-instead) | Coverage note: no times, no flag, the note shown instead | Employee | functional | medium |
| [TC-EMPDET-1513](#tc-empdet-1513-employee-with-no-hours-never-shows-a-work-pattern-flag) | Employee with no hours never shows a Work Pattern flag | Employee | negative | medium |
| [TC-EMPDET-1514](#tc-empdet-1514-period-filter-30-60-90-single-choice-default-30) | Period filter 30/60/90: single choice, default 30 | Employee | functional | high |
| [TC-EMPDET-1515](#tc-empdet-1515-period-filter-is-shared-by-both-columns) | Period filter is shared by both columns | Employee | functional | medium |
| [TC-EMPDET-1516](#tc-empdet-1516-period-kept-in-url-and-after-reload-hover-follows-the-period) | Period kept in URL and after reload; hover follows the period | Employee | functional | medium |
| [TC-EMPDET-1517](#tc-empdet-1517-api-30-60-90-return-different-data-invalid-periods-rejected) | API: 30/60/90 return different data; invalid periods rejected | Employee | negative | medium |
| [TC-EMPDET-1518](#tc-empdet-1518-sort-start-end-hours-asc-desc-with-no-data-rows-last) | Sort Start → End Hours asc/desc with no-data rows last | Employee | functional | high |
| [TC-EMPDET-1519](#tc-empdet-1519-sort-work-pattern-asc-desc-with-no-data-rows-last) | Sort Work Pattern asc/desc with no-data rows last | Employee | functional | high |
| [TC-EMPDET-1520](#tc-empdet-1520-header-info-i-tooltips-open-on-hover-click-and-keyboard) | Header info (i) tooltips open on hover, click and keyboard | Employee | a11y | medium |
| [TC-EMPDET-1521](#tc-empdet-1521-data-as-of-note-is-shown-g1) | "Data as of" note is shown (G1) | Employee | functional | medium |
| [TC-EMPDET-1522](#tc-empdet-1522-column-named-active-hours-with-ist-in-the-cell-g2-g3) | Column named "Active Hours" with IST in the cell (G2, G3) | Employee | functional | low |

---

## Employee

22 test cases.

### A11y (1)

#### TC-EMPDET-1520 — Header info (i) tooltips open on hover, click and keyboard

| Field | Value |
| --- | --- |
| **Tags** | @a11y, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Accessibility |
| **Actual Result** | Nothing opens in any case; tooltip text exists in the app but is never shown |
| **Finding Ref** | SI4-I622 |
| **Last Result** | failed |
| **Notes** | Filed in Zoho as SI4-I622 (30 Oct 2026) |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Hover the (i) next to Start → End Hours
2. Click it
3. Tab to it and press Enter
4. Repeat for Work Pattern

**Expected**

Tooltip explains the column

**Test Data**

- `period`: Last 30 Days unless stated
- `bug`: SI4-I622

**Automation Hint**

Playwright UI + API

### Boundary (1)

#### TC-EMPDET-1507 — Close after midnight shows +1

| Field | Value |
| --- | --- |
| **Tags** | @boundary, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Cell display |
| **Actual Result** | Sneha Bose 9:30 PM – 6:45 AM +1 (API 30.75); Divya Sinha 1:30 PM – 1:50 AM +1 (API 25.83) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Sort Start → End Hours descending
2. Look at the first two rows

**Expected**

e.g. 9:30 PM – 6:45 AM +1

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

### Functional (15)

#### TC-EMPDET-1502 — Columns are not shown on the Past Employee tab

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Columns |
| **Actual Result** | Past tab shows only Name, Projects |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Open Employee > Employee Details
2. Switch to the Past Employee tab

**Expected**

Neither column is shown

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1503 — Role access — Admin and PMO see all employees with both columns

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ / PMO bhumi.chauhan@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Role access |
| **Actual Result** | Admin and PMO: 3,648 rows, columns shown |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Log in as each role
2. Open Employee > Employee Details

**Expected**

All 3,648 employees, both columns

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1504 — Role access — TM and EM see only their department with both columns

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | TM sudhansu.patel@ / EM kunal.jadeja@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Role access |
| **Actual Result** | TM 279 rows, EM 372 rows, columns shown |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Log in as TM, then EM
2. Open Employee > Employee Details

**Expected**

Own department only, both columns

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1506 — Cell shows the average range as start – end

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Cell display |
| **Actual Result** | 9:30 AM – 7:15 PM (API 9.5 → 19.25) |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Look at the Start → End Hours cell for Sagar Khanpara

**Expected**

e.g. 9:30 AM – 7:15 PM

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1508 — Hover card shows period, start/close in IST and min logged per hour

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Cell display |
| **Actual Result** | "Active Hours last 30 days, Average start 9:30 AM IST, Average close 7:15 PM IST, Logged per hour 58 min" |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Hover a Start → End Hours cell

**Expected**

Card with period, IST times, min/hr

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1509 — Work Pattern badges: High, Low, No flag, Low at 0

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Work Pattern |
| **Actual Result** | High · 58 min/hr, Low · 38 min/hr, No flag (50.5), Low · 0 min/hr |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Look at the Work Pattern column on page 1

**Expected**

High · n min/hr, Low · n min/hr, No flag

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1511 — No data shows — in both columns

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — No data |
| **Actual Result** | — / — , hover "No data for this period" |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Find Smriti Arora
2. Hover both cells

**Expected**

— and "No data for this period"

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1512 — Coverage note: no times, no flag, the note shown instead

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — No data |
| **Actual Result** | Hours —, Work Pattern shows "Fewer than 10 logged days..."; hover explains no flag is shown |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Sort Start → End Hours descending, go to page 37
2. Hover an employee with fewer than 10 logged days

**Expected**

No times or flag; the coverage note is shown

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1514 — Period filter 30/60/90: single choice, default 30

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Period filter |
| **Actual Result** | Default Last 30 Days ticked; after Save the API call uses activityPeriod=60 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Click the filter icon on Start → End Hours
2. Pick Last 60 Days, Save

**Expected**

Data reloads for 60 days

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1515 — Period filter is shared by both columns

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Period filter |
| **Actual Result** | Work Pattern filter shows Last 60 Days ticked |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Pick Last 60 Days on Start → End Hours
2. Open the Work Pattern filter

**Expected**

Work Pattern filter also shows 60

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1516 — Period kept in URL and after reload; hover follows the period

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Period filter |
| **Actual Result** | URL activityPeriod=60 kept after reload; hover "last 60 days" with different values |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Pick Last 60 Days
2. Reload the page
3. Hover a cell

**Expected**

Still 60 days; hover says last 60 days

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1518 — Sort Start → End Hours asc/desc with no-data rows last

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Sorting |
| **Actual Result** | Order correct both ways; missing/coverage-note rows last |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Click sort on Start → End Hours (asc, then desc)
2. Check all 3,648 rows via the API

**Expected**

Correct order, no-data rows at the end both ways

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1519 — Sort Work Pattern asc/desc with no-data rows last

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Sorting |
| **Actual Result** | Order correct both ways (0 … 72.5); no-data rows last |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Click sort on Work Pattern (asc, then desc)

**Expected**

Ordered by min/hr, no-data rows last

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1521 — "Data as of" note is shown (G1)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Requirement gaps |
| **Actual Result** | Not shown. API lastSyncedAt is null. "Last Updated" on the page belongs to the Log Hours time picker |
| **Last Result** | failed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Look around the table and column headers

**Expected**

"Data as of <date>" for the activity data

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1522 — Column named "Active Hours" with IST in the cell (G2, G3)

| Field | Value |
| --- | --- |
| **Tags** | @functional, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Requirement gaps |
| **Actual Result** | Header "Start → End Hours"; no IST in cell (only in hover and screen-reader label). Needs product confirmation |
| **Last Result** | skipped |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Look at the header and a cell

**Expected**

"Active Hours"; e.g. 10:30 AM – 7:30 PM IST

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

### Negative (3)

#### TC-EMPDET-1505 — Role access — RM, PM, CSM and Employee do not see the columns

| Field | Value |
| --- | --- |
| **Tags** | @negative, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | RM hardik.trivedi@ / PM gaurav.panchal@ / CSM tarun.sharma@ / Employee kashyap.patel@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Role access |
| **Actual Result** | RM: page opens, no columns, no activity in API. PM, CSM, Employee: /unauthorized |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Log in as each role
2. Open Employee > Employee Details

**Expected**

No columns, no activity data in API

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1513 — Employee with no hours never shows a Work Pattern flag

| Field | Value |
| --- | --- |
| **Tags** | @negative, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — No data |
| **Actual Result** | Hours — "No data for this period" but Work Pattern Low · 30 min/hr (Rohan Singh: No flag) |
| **Finding Ref** | SI4-I623 |
| **Last Result** | failed |
| **Notes** | Filed in Zoho as SI4-I623 (30 Oct 2026) |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Sort Start → End Hours descending, go to page 32
2. Find Omkar Chatterjee

**Expected**

Both columns show no data

**Test Data**

- `period`: Last 30 Days unless stated
- `bug`: SI4-I623

**Automation Hint**

Playwright UI + API

#### TC-EMPDET-1517 — API: 30/60/90 return different data; invalid periods rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — API |
| **Actual Result** | 246 of 298 rows differ between periods; 45, 365, abc → 400 |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. GET /api/v1/employees?activityPeriod=30, 60, 90, 45, 365, abc

**Expected**

30/60/90 OK with different values; others 400

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API

### Regression (1)

#### TC-EMPDET-1510 — Work Pattern flag matches thresholds (Low ≤ 40, High > 55)

| Field | Value |
| --- | --- |
| **Tags** | @regression, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Work Pattern |
| **Actual Result** | High · 33 min/hr; hover "33 min ... (above 55)". API density 33, workPattern HIGH. 1 of 3,119 rows; 60/90 days fine |
| **Finding Ref** | SI4-I621 |
| **Last Result** | failed |
| **Notes** | Filed in Zoho as SI4-I621 (30 Oct 2026) |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Period Last 30 Days
2. Find Ritika Rathod
3. Hover the Work Pattern badge

**Expected**

33 min/hr shows Low

**Test Data**

- `period`: Last 30 Days unless stated
- `bug`: SI4-I621

**Automation Hint**

Playwright UI + API

### Smoke (1)

#### TC-EMPDET-1501 — Start → End Hours and Work Pattern columns show on the Active Employee tab

| Field | Value |
| --- | --- |
| **Tags** | @smoke, @T1549 |
| **Requirement Ref** | SI4-T1549 Part A §3–§4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin ceo@ |
| **Task Id** | SI4-T1549 |
| **Sub Module** | Day Start & Close — Columns |
| **Actual Result** | Headers include "Start → End Hours" and "Work Pattern" |
| **Last Result** | passed |

**Preconditions**

SimERP DEV, UI 6.6.0, re-tested live 30 Oct 2026. Logged in; Employee > Employee Details > Active Employee tab. Findings: docs/findings/2026-10-30-day-start-close-t1549-retest.md

**Steps**

1. Open Employee > Employee Details
2. Look at the table headers on the Active Employee tab

**Expected**

Both columns are shown

**Test Data**

- `period`: Last 30 Days unless stated

**Automation Hint**

Playwright UI + API
