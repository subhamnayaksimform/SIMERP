# SI4-T1549 — Employee Day Start & Close (Start → End Hours / Work Pattern) — Re-test 30/10/2026

- **Task:** SI4-T1549 (Zoho id `688906000094684555`, owner raksha.p)
- **Previous run:** `docs/findings/2026-10-29-day-start-close-t1549.md` — blocked (frontend 6.6.0 not on dev, no activity data)
- **Environment:** dev — frontend `simerp-dev.simform.solutions` (6.6.0 bundle, has the T1549 columns), API `simerp-dev-api.simform.solutions/api/v1`
- **Blockers now:** both cleared. Columns are live and 3,119 of 3,648 employees have data (353 no data, 176 with a coverage note).

## Verdict: mostly passing — 3 new issues, 3 earlier gaps still open

| # | Check | Result |
|---|---|---|
| 1 | Columns shown on the **Active Employee** tab | Pass |
| 2 | Columns **not** on the Past Employee tab (only Name, Projects) | Pass |
| 3 | Role access — 8 roles (table below) | Pass |
| 4 | Cell shows average range, e.g. `9:30 AM – 7:15 PM` | Pass |
| 5 | Close after midnight shows `+1` (`9:30 PM – 6:45 AM +1`, `1:30 PM – 1:50 AM +1`) | Pass |
| 6 | Hover card: period, average start/close in IST, min logged per hour | Pass |
| 7 | Work Pattern badges: `High · 58 min/hr`, `Low · 38 min/hr`, `No flag`, `Low · 0 min/hr` | Pass |
| 8 | Work Pattern flag matches thresholds (Low ≤ 40, High > 55) | **Fail** — N1 |
| 9 | No data → `—` in both columns, hover "No data for this period" | Pass |
| 10 | Coverage note → no times, no flag, the note is shown instead, with an explanation on hover | Pass |
| 11 | No-hours row never shows a flag | **Fail** — N3 |
| 12 | 30/60/90 filter: single choice, default 30, Save/Clear | Pass |
| 13 | Filter shared by both columns (Work Pattern filter shows 60 after picking 60 on Start → End) | Pass |
| 14 | Period kept in URL (`activityPeriod=60`) and after page reload | Pass |
| 15 | Hover card follows the period ("last 60 days", different values) | Pass |
| 16 | API: 30/60/90 return different values; 45, 365, `abc` → 400 | Pass |
| 17 | Sort Start → End asc/desc — order correct across all 3,648 rows, no-data rows last | Pass |
| 18 | Sort Work Pattern asc/desc — order correct, no-data rows last | Pass |
| 19 | Header info (ⓘ) tooltips for both columns | **Fail** — N2 |
| 20 | "Data as of" note | **Fail** — G1 (still not built) |
| 21 | Column named "Active Hours" | Open — G2 (still "Start → End Hours") |
| 22 | IST label visible in the cell | Open — G3 (only in hover card / screen-reader label) |

## New issues

Filed in Zoho on 30/10 as standalone bugs (not linked to the task), assigned to raksha.p: **N1 = SI4-I621**, **N2 = SI4-I622**, **N3 = SI4-I623**. Screenshots must be attached by hand (API upload returns 6500).

| # | Issue | Steps / evidence | Severity |
|---|---|---|---|
| N1 | **Work Pattern flag contradicts the min/hr shown.** Ritika Rathod shows `High · 33 min/hr`; the hover says "33 min logged per hour of elapsed work **(above 55)**". By the rule 33 is Low. | Admin → Employee → Active → find Ritika Rathod (30 days). API: `density: 33, workPattern: "HIGH"`. 1 of 3,119 rows on 30 days; 60/90 days have no mismatch (those windows compute the flag from density). For 30 days the source's flag is used as-is. Screenshot `14-low-density-high.png`. | Medium |
| N2 | **Header info (ⓘ) buttons do nothing.** "About Start → End Hours" and "How Work Pattern is calculated" open no tooltip on hover, click, or keyboard Enter/focus. The text is in the app (e.g. "Average start to close, shown as one range in IST…", "High: >55 min/hr") but never appears. | Admin → Employee → hover/click ⓘ next to either header. Screenshot `28-info-hover.png`. | Medium |
| N3 | **Hours say "no data" but Work Pattern shows a flag.** For rows with no start/close but a density value, the hours cell is `—` with hover "No data for this period", while Work Pattern shows a flag — e.g. Omkar Chatterjee `Low · 30 min/hr`, Rohan Singh `No flag`. | API `status: "ok", startHours: null, density: 30, workPattern: "LOW"`. 2 rows (FRONT END). Screenshot `26-okNoHours-OmkarChatterjee.png`. | Low |

## Earlier gaps — still open

| # | Requirement | Now |
|---|---|---|
| G1 | "Data as of" note | Not shown anywhere. API `lastSyncedAt` is `null`. The "Last Updated: No data available" label on the page belongs to the existing Log Hours time-range picker, not this feature. |
| G2 | Column named "Active Hours" | Header still "Start → End Hours" (truncated to "Start → End …" at normal width); hover card title says "Active Hours". |
| G3 | IST label with the range | Cell shows no IST. IST is only in the hover card and the screen-reader label. The header tooltip meant to say "in IST" does not open (N2). |

## Role access — UI, live

| Role | Account | Employee page | Rows | Columns shown | Result |
|---|---|---|---|---|---|
| Admin | ceo@ | opens | 3,648 | yes | Pass |
| PMO | bhumi.chauhan@ | opens | 3,648 | yes | Pass |
| TM | sudhansu.patel@ | opens | 279 (own dept) | yes | Pass |
| EM | kunal.jadeja@ | opens | 372 (own dept) | yes | Pass |
| RM (+DM) | hardik.trivedi@ | opens | 92 | no, no `activity` in API | Pass |
| PM | gaurav.panchal@ | /unauthorized | — | — | Pass |
| CSM | tarun.sharma@ | /unauthorized | — | — | Pass |
| Employee | kashyap.patel@ | /unauthorized | — | — | Pass |

## Notes

- `employee-activity-sync` cron still shows `lastRun: null`, so today's data was loaded some other way (likely the manual script). The nightly 02:15 IST run is still unproven.
- Opening `/employee?sortBy=activeHours&sortOrder=desc` directly resets to the default sort; sorting by clicking the header works. `activityPeriod` in the URL is honoured. Likely general page behaviour, not this task.
- Not covered: the Restricted (lock) cell for TM/EM — their list only contains their own department, so no such row appears. The "> 60 min/hr overlapping logs" note was not opened (rows with 60.2/63.9 show High correctly).

Screenshots: `reports/2026-10-30-t1549/`.
