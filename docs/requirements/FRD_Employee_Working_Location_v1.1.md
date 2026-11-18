# SimERP — Employee Working Location (WFO/WFH Visibility) — Functional Requirements Document

| Attribute | Detail |
|---|---|
| Document Title | Employee Working Location — Functional Requirements Document |
| Version | 1.1 — Draft |
| Status | Draft — Pending Stakeholder Review |
| Prepared By | PM (pmgpt@simformsolutions.com) |
| Date | September 15, 2026 |
| Data Owner | Laxit Lakkad — owns the source table; route schema changes/data-freshness issues through him |
| Source Reference | *Employee Working Location — Data Handover Guide* (table: "Employee Working Location Summary with ZUID - SimERP - Shared With Abhishek") |
| Related Prototype | `WorkingLocation_DesignSuggestions_Prototype.html` — annotated mockups of all four placements in Section 3 (key design notes summarised in Appendix A) |

---

## 1. Introduction / Purpose

SimERP will surface each employee's day-by-day Work-From-Office (WFO) / Work-From-Home (WFH) pattern, sourced from a Zoho Analytics table Laxit Lakkad's team already maintains. The feature has two layers:

- **Per-employee detail**: a 7-day day-by-day breakdown, plus WFO%/WFH% aggregates over 15-day, 30-day, 90-day, and all-time ("Overall") windows.
- **Rollup visibility for management**: a department/company-wide dashboard so Admin, PMO, TM and EM can see location trends without opening employees one at a time.

Visibility into both layers is role-scoped — see Section 4.

## 2. Data Source

### 2.1 Source Table

One row per employee. Refreshes once daily at **4:00 AM IST** — a once-a-day snapshot, not a real-time feed. Any scheduled job pulling from it should run a little after 4:00 AM IST (e.g., 5:00 AM IST).

| Column | Type | Description |
|---|---|---|
| ZUID | Number | Zoho User ID — the join key into SimERP's employee records |
| Email | Text | Employee's Simform email (readability/debugging only) |
| As Of Date | Date | The date this row's numbers were calculated as of |
| Day 0 (Today) … Day -6 | Text | WFH / WFO / blank, for `As Of Date` and each of the preceding 6 days |
| WFO % / WFH % — Last 15 Days | Decimal | % of logged days in the last 15 days |
| WFO % / WFH % — Last 30 Days | Decimal | Same, 30-day window |
| WFO % / WFH % — Last 3 Months | Decimal | Same, 90-day window |
| WFO % / WFH % — Overall | Decimal | % across the employee's entire logged history |

Only two location values exist: **WFH** and **WFO**. No third category (no "Leave," "Holiday," etc.) — a blank Day column means no record was logged for that date, not a status. Date for "Day -N" = `As Of Date` − N days; the same logic applies to the percentage windows (e.g., "Last 15 Days" = the 15 days ending on `As Of Date`, not a fixed calendar range).

### 2.2 Data Handling Rules

| Rule | Handling |
|---|---|
| Blank ZUID (contractors, people no longer in the system) | Filtered out — never surfaced in SimERP |
| Employee has no source-table row at all (e.g., brand-new joiner) | Omitted entirely from the Working Location UI (list and detail) — not shown with a placeholder row |
| A specific window (15/30/90) has partial logged data | Show the % anyway, plus a small "N of X days logged" note (e.g., "42 of 90 days logged") |
| Blank Day value in the 7-day strip | Rendered as a neutral, greyed placeholder ("—") visually distinct from WFO and WFH — never a third "status" |
| Blank percentage column | Treated as "no data," never as 0% |

## 3. Feature Scope & Placement

### 3.1 Employee Profile — new "Working Location" tab

Added as a 5th tab on the existing Employee Profile page, after Projects / PR Reviewer / Goals / Activity Timeline. Shows:
- The 7-day strip, rendered with **actual calendar dates** (not "Day -1"/"Day -2" labels).
- Four window cards: Last 15 Days, Last 30 Days, Last 90 Days, Overall — each a WFO%/WFH% split. The Overall card is present only when the viewer is entitled to it (Section 4); otherwise it does not render at all (not greyed — absent).
- A "Data as of `<As Of Date>`" label near the tab content.

**Naming-collision mitigation (confirmed):** the Employee Profile header already shows a self-declared **"Location Preference"** / **"Work Arrangement"** tag (WFO/WFH/Hybrid, employee-editable — from the Visa & Location Preference FRD). That field captures *declared intent*, not logged behavior, and is a separate data source. Confirmed resolution: add a small info icon to that existing header tag clarifying: "Declared preference — see the Working Location tab for actual attendance history." No other layout change to that field.

### 3.2 Employee List (TM/EM/RM view) — new column

Added to the existing Employee List (Current Employee / Past Employee tabs) as a new entry in the existing column-visibility toggle menu, alongside Reporting Manager, Projects, Other Allocation, Logged Hours, Skills, Night Shift. **Default: off** — the viewer opts in.

When enabled, shows a compact WFO%/WFH% split (mini bar + numbers), synced to the same window-selector dropdown already present at the top of the page (extended to include **Overall**, since RM/TM/EM are entitled to it). Sortable, matching the existing header sort convention.

### 3.3 Project Details View (PM-scoped) — new column

Added to the employee table on the PM's Project Details page. Shown as a standard column (not toggleable), reusing the page's existing "Last 15 days" window dropdown as the shared control. **No Overall option** — capped at 15/30/90-day per PM's scope. Appears identically on the Active and Past Employees tabs (PM sees Active + Past allocation).

### 3.4 Working Location Overview — new management dashboard

A new rollup view for Admin, PMO, TM, and EM, modeled on the existing Bandwidth Tracker tab (Department module). Contents:

- KPI row: Company WFO%, Company WFH%, count of departments below a configurable WFO% threshold, count of employees excluded for having no source data.
- A trend line of company-wide WFO% over the selected window.
- A department-by-department rollup (WFO%/WFH% split bar per department, sorted lowest-WFO-first), each row clicking through into the Employee List (3.2), pre-filtered to that department.

## 4. Role-Based Access Control (confirmed)

| Role | Employee scope (whose data is visible) | Windows visible | Notes |
|---|---|---|---|
| **Employee** | Self only | 7-day + 15/30/90-day + **Overall** | Full access to own history |
| **PM** | Employees on their project(s), Active **and** Past allocation | 7-day + 15/30/90-day (no Overall) | Matches the Active/Past scope on PM's Project Detail page |
| **CSM** | Employees on their project(s), Active and Past allocation | 7-day + 15/30/90-day (no Overall) | Same rule basis as PM |
| **RM** | Own employees (direct reports) | 7-day + 15/30/90-day + Overall | Full access |
| **TM / EM** | Own department | 7-day + 15/30/90-day + Overall | Full access |
| **PMO** | All employees (global) | 7-day + 15/30/90-day + Overall | Same global scope as Admin for this feature |
| **Admin** | All employees (global) | 7-day + 15/30/90-day + Overall | No restriction |
| **Admin ("Login As")** | Follows the impersonated user's access level | — | Admin does *not* retain Admin-level access while impersonating |
| **Delivery Manager** | Treated as an RM whose "own employees" are the PMs who report to them — sees each of those PMs' data, plus their own | 7-day + 15/30/90-day + Overall | Same tier as RM, scoped to the PMs under them rather than project staff |

## 5. UI & Interaction Details

1. **7-day strip**: actual computed calendar dates (`As Of Date` − N), not "Day -N" labels. Blank days render as a neutral grey placeholder, distinct from WFO and WFH colors.
2. **Sparse-data display**: a window with partial data still shows a %, with a sample-size note (e.g., "42 of 90 days logged").
3. **Freshness label**: "Data as of `<As Of Date>`" shown near the Working Location tab/section/column header everywhere it appears.
4. **Hover popup (list views)**: hovering a populated Working Location cell (Employee List, Project Details table) opens a popup with that employee's 7-day breakdown plus 15/30/90-day (and Overall, where entitled) numbers. The column header carries a static info-icon tooltip explaining the column. Rows with no source data show a plain "No record" tooltip instead of a popup.
5. **List-view default window & control**: Last 15 Days is the default sortable window; a dropdown switches it. Reuse an existing date-window dropdown on the page (Project Details, Employee List) rather than adding a second control.
6. **Column visibility default**: off by default on the TM/EM/RM Employee List; standard non-toggleable column on PM Project Details; dedicated tab on Employee Profile.

## 6. Business Rules & Edge Cases

| Scenario | Resolution |
|---|---|
| Employee has no row in the source table | Omitted entirely from the Working Location UI — no placeholder row |
| Employee has a row but zero logs in a specific window | Show that window's % as blank/"no data" — never 0% |
| Blank ZUID in the source table | Row filtered out before it reaches SimERP |
| Viewer is PM/CSM and opens an employee not on any of their projects | Working Location section/column is not shown for that employee at all |
| Admin uses "Login As" to impersonate another user | Working Location follows the impersonated user's role/scope |
| RM/TM/EM/PMO/Admin/Delivery Manager views their own row | Full access including Overall — no self-view cap |
| A department in the dashboard has employees excluded for missing data | Counted separately in the "Employees With No Data" KPI, not silently dropped |

## 7. Dependencies & Technical Notes

- **ZUID as join key**: engineering will map ZUID on SimERP's Employee entity if not already present.
- **Scoping join is SimERP's responsibility**: the source table has only ZUID, email, and location data. All scoping requires SimERP to cross-reference against its own org-structure and allocation data.
- **Refresh cadence**: once daily at 4:00 AM IST — consuming jobs scheduled after (e.g., 5:00 AM IST). Differs from Bandwidth Tracker's "recomputed on every page load"; the 3.4 dashboard carries the same daily lag.
- **RM/TM/EM scope basis**: follows Section 4. Pre-existing cross-FRD inconsistency in RM/TM scope (Visa & Location Preference FRD vs Roles & Permissions default matrix vs Allocation Verification RBAC) is acknowledged, not resolved here.
- **PM/CSM platform access vs feature scoping**: Roles & Permissions gives PM/CSM "Full (View)" on the Employees module (they can open any profile). This feature's PM/CSM scoping is a feature-specific permission check layered on top of — and stricter than — that module-level access.

## 8. Decisions Confirmed in v1.1

1. Delivery Manager scope — RM of PMs only; sees those PMs' data plus own, incl. Overall.
2. PMO scope — global, identical to Admin.
3. ZUID dependency — standard engineering build task.
4. Scope list — PM/CSM → employees working with them, RM → own employees, TM/EM → own department, PMO → global, Admin → global, Employee → own data, Delivery Manager → PMs reporting to them + own data.
5. Naming collision — info icon on the existing Location Preference tag.

## 9. Out of Scope

- Real-time/intra-day updates.
- Any employee without a ZUID-matched row in the source table.
- Editing or correcting WFO/WFH values within SimERP — read-only; corrections route through Laxit Lakkad's team.

## 10. Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
| 1.0 | September 15, 2026 | PM | Initial draft |
| 1.1 | September 15, 2026 | PM | Resolved all five v1.0 open items |

---

## Appendix A — Design notes from `WorkingLocation_DesignSuggestions_Prototype.html`

Colors: WFO = blue (#2563eb), WFH = green (#16a34a), blank/no record = grey (#d1d5db). Sample "Data as of 06 Sep 2026".

**Screen 1 — PM Project Details ("Auction Mobility - TM - Product")**: existing columns Employee Name ↕, Department, Allocation %, Start Date, End Date, Logged Hours, Action; new "Working Location" column inserted before Action with an "i" info icon (tooltip: "Actual logged WFO/WFH attendance. Hover a row for the day-by-day breakdown."). Cell = mini split bar + "73%/27%" (WFO/WFH). Hover popup: title "<Name> · Last 7 Days", 7 day chips with dates (e.g. Sep06…Aug31, newest first), rows 15-Day / 30-Day / 90-Day, and "Data as of 06 Sep 2026". The prototype shows an "Overall 🔒 not shown in PM view" row in the PM popup. Employee with no source row shows "No record" (tooltip "No source-table row for this employee yet."). 100%/0% example shown (Neha Kapoor). Header has existing "Last Updated" label + "Last 15 days ▾" dropdown + "+ New Allocation". Same column carries over to the Past Employees tab.

**Screen 2 — Employee Details list (TM/EM/RM)**: Current Employee / Past Employee tabs, "Last 15 days ▾" dropdown. Column toggle menu (COLUMNS): Reporting Manager, Projects, Other allocation, Logged Hours, Working Location (new), Skills, Night Shift. Working Location column sits between Projects and Other Allocation; popup includes an Overall row with values. Row scope inherits the table's existing row filter (RM → direct reports, TM/EM → department). Sort arrow matches existing header style.

**Screen 3 — Employee Profile**: header stats include "Location Preference" tag (e.g. "USA · On-site") with a new info dot (tooltip: "Declared preference — for actual day-by-day attendance history, see the Working Location tab below."). Tabs: Projects, PR Reviewer, Goals, Activity Timeline, Working Location (new, 5th). Tab content: "Last 7 days" label left, "Data as of 06 Sep 2026" right; 7-chip strip with dates "Sep 06"…"Aug 31", blank days as "—"; four donut cards (Last 15 Days, Last 30 Days, Last 90 Days, Overall) each with "NN% WFO / NN% WFH"; partial window shows "42 of 90 days logged". For PM/CSM viewing someone else, the Overall card is hidden.

**Screen 4 — Working Location Overview dashboard**: title "Working Location Overview", subtitle "Company-wide WFO/WFH pattern across all departments", "Data as of" label, "Last 30 days ▾" dropdown. KPI cards: Company WFO % (with "▲ N pts vs prior 30 days"), Company WFH %, "Departments Below 50% WFO" ("of 14 active departments"), "Employees With No Data" ("excluded from % above"). Trend sparkline "Company WFO % — last 30 days". "By Department — sorted lowest WFO % first" rows with split bar, %s and a "Below 50%" badge; clicking a row drills into the Employee List pre-filtered to that department. Prototype scope note: Admin/PMO → all departments; TM/EM → only departments they manage, shown separately, no combined rollup; PM/CSM → not shown. The prototype still lists Delivery Manager dashboard access as an open item (the FRD resolves DM scope for the feature but does not list DM among dashboard roles).

### Known FRD ↔ prototype differences (flag in analysis)
1. PM popup: prototype shows a locked "Overall 🔒 not shown in PM view" row; FRD 3.1 says Overall is absent, not greyed (FRD wording is for the profile card — popup behavior is ambiguous).
2. Dashboard roles: FRD 3.4 = Admin, PMO, TM, EM; prototype Screen 4 header says Admin / PMO / Delivery Manager; DM dashboard access undefined.
3. "No record": FRD 2.2/6 say employees with no source row are omitted entirely from the Working Location UI, but FRD 5.4 and the prototype show a "No record" cell/tooltip in list views.
4. Dashboard threshold: FRD says "configurable WFO% threshold"; prototype hardcodes 50% — who configures it and where is not specified.
5. Overall in Employee List dropdown: FRD extends the shared window dropdown with Overall — impact on other columns driven by the same dropdown (e.g. Logged Hours) is unspecified.
