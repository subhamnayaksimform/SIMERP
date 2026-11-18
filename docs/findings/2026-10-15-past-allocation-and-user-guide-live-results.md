# Live QA results: Past Allocation move (SI4-T1526) and User Guide & Releases (SI4-T1459)

Date: 2026-10-15 · Environment: dev (https://simerp-dev.simform.solutions, app 6.4.2) · Accounts used: PM `hardik.trivedi@`, CSM `tarun.sharma@`, TM `sudhansu.patel@` (saved sessions only) · Read-only: GET requests and page views only. Screenshots: `reports/screenshots/2026-10-15/`.

## Summary

1. **T1526 cannot be proven on dev.** None of the CSM's 4 projects has a "dormant unallocated" person (no assignment, 0 h in 3 months, hours in "all"). Dev hours look seeded: `lastSyncedAt` is `null` everywhere, the UI says "Last Updated: No data available", and 87 of 88 rows have exactly 6m = 2 × 3m and all = 4 × 3m.
2. **The PM account cannot open My Projects at all.** `hardik.trivedi@` has no `pm_projects` permission (403 on `/pm-projects`, `/unauthorized` in the UI), even though he is PM on 2 projects. Only the CSM could run the T1526 cases. Confirm with PO whether My Projects is now CSM-only (the brief says PM and CSM).
3. **What did work for T1526:** unallocated people with recent hours stay Active. Allocated people with 0 h stay Active, even after their end date. Deallocated and offboarded people stay in Past. List and detail hour totals match. No one shows in both tabs. Suspected bugs B1, B2, B3 and B7 could not be triggered, because the data they need does not exist.
4. **T1459: 7 defects confirmed live for PM, CSM and TM.**
   - Current release is v6.4.0 while the app is 6.4.2.
   - Certifications and Working Location have no notes or guides.
   - The Dashboard guide points to a page with no menu link.
   - The default sort for Employee Details differs between the guide and the release note.
   - The bell header shows one version for items from several releases.
   - A failed content load shows the wrong empty state.
   - Page chips link to Help pages the user cannot open.

   An eighth issue (the Login as guide is out of date) is confirmed in the deployed code, but none of these roles can see that guide.
5. **What works:** badges, the seen store, filters, search, deep links, Contact support, role filtering and the planned toggle. 35 of 38 TC-HELP cases were run: 30 Pass, 4 Fail, 1 partly checked. 3 are Blocked: they need the Employee or Admin account, or they hit unread notification counts on all three accounts.

---

## Task A — SI4-T1526 Past Allocations move

### Data found (CSM `tarun.sharma@`, 4 projects)

| Project (id) | 3m Active / Past (API = UI badges) | Dormant candidates | Detail total vs list total (3m / 6m / all) | lastSyncedAt |
|---|---|---|---|---|
| AnalytixHub `a8869918-6732-4886-9153-8dfa5b06c79a` | 31 / 6 (UI: 31 / 6) | 0 | 5807.83 = 5807.83 / 11615.62 = 11615.62 / 23231.20 = 23231.20 | null |
| ElitePay `cc091428-4a4b-410e-9f32-f282b374d8e6` | 11 / 6 | 0 | 1418.24 = 1418.24 / 2836.48 = 2836.48 / 5672.97 = 5672.97 | null |
| ViewForge `fd79a71e-c3c3-4c75-8a06-38509a14c7a3` | 19 / 2 | 0 | 2241.37 = 2241.37 / 4634.48 = 4634.48 / 9268.95 = 9268.95 | null |
| XCrypt `c20430eb-7e7e-44e6-b769-3c7756e6a9e2` | 12 / 1 | 0 | 1581.69 = 1581.69 / 3163.39 = 3163.39 / 6326.78 = 6326.78 | null |

- Positive control (unallocated, recent, Active): Tirth Kamath (AnalytixHub, 3m 71.06 h, all 284.23 h) and Gargi Ghosh (AnalytixHub 95.26 h; XCrypt 48.63 h). Both show "Not Allocated" in the Active tab.
- Allocated with 0 h in 3m, still Active: AnalytixHub Chintan Jadeja (RED, end 25/09/2026 already passed), Jay Kapoor, Sai Garg, Payal Mishra; ElitePay Kashyap Bhatt (end 2026-08-06 passed), Jay Modi, Neel Chopra; ViewForge 7 people; XCrypt 4 people.
- Past rows are only deallocated (ARCHIVED) or offboarded (`deletedAt`) people. No Past row lacks both an assignment and a `deletedAt`.
- PR reviewers: no one is in both `employees` and `pastEmployees` on any project.
- **Freshness (step 4):** `lastSyncedAt` is `null` on every project and timeframe. The list and detail pages show "Last Updated: No data available". The 3m data is not fresh Zoho data. It looks seeded (see Summary 1). The sync summary (`/sync-queue/jobs/summary`) returns 403 for CSM, so the sync state could not be checked.
- Extra observation: `GET /projects/:id` (as TM) returns the same hours for `timeFrame` 5d/15d/30d/3m/6m/all (always the 15d figure, e.g. Sneha Bhatia 24.72 h). TM's view of AnalytixHub is scoped to 3 employees. So a cross-screen check (B3) is not possible with these accounts.

### Results per draft TC

| ID | Title | Result | Evidence |
|---|---|---|---|
| TC-PASTAL-001 | Dormant unallocated logger appears in Past tab | Blocked | No candidate exists in the CSM's 4 projects. PM gets 403. `pastal-csm-analytixhub-past-3m.png` |
| TC-PASTAL-002 | Dormant logger absent from Active and counts | Pass (counts only) / Blocked (dormant part) | Tab badges match the API: AnalytixHub Active 31 / Past 6. `pastal-csm-analytixhub-active.png` |
| TC-PASTAL-003 | Unallocated but recent logger stays Active | Pass | Tirth Kamath 11.84 h (15d) and Gargi Ghosh 15.88 h, "Not Allocated", in the Active tab. `pastal-csm-analytixhub-active.png` |
| TC-PASTAL-004 | Allocated employee with no recent hours stays Active | Pass | Chintan Jadeja, Jay Kapoor, Sai Garg, Payal Mishra: 0.00 h in Active. This includes end-date-passed rows (Chintan, Kashyap Bhatt). `pastal-csm-analytixhub-active-all.png` |
| TC-PASTAL-005 | Deallocated (ARCHIVED) still in Past with reason | Pass (reason part not testable) | Meera Goyal and Neel Solanki (ARCHIVED) are in Past. `allocationFeedback` is null for all Past rows, so the reason shows "Not specified". `pastal-csm-analytixhub-past-15d.png` |
| TC-PASTAL-006 | Offboarded employee still in Past | Pass | Suresh Kapoor (deletedAt 2026-09-12), Ankita Contractor, Rohan Kulkarni, Payal Barot are in Past |
| TC-PASTAL-007 | Same behaviour for CSM | Pass (CSM) / Blocked (PM) | CSM ran every case. PM `hardik.trivedi@` gets 403 on `/pm-projects` and lands on `/unauthorized`. `pastal-pm-my-projects-unauthorized.png` |
| TC-PASTAL-008 | Timeframe switch does not change membership | Pass (existing rows) | AnalytixHub stays at 31 / 6 for 15d, 3m and all. `pastal-csm-analytixhub-past-all.png` |
| TC-PASTAL-009 | Past-tab hours per timeframe | Blocked | No dormant row. Existing Past rows: Suresh Kapoor 37.06 h (15d), 222.38 h (3m), 889.52 h (all) |
| TC-PASTAL-010 | List card excludes dormant logger | Blocked | No dormant row. `pastal-csm-list-6m.png`, `pastal-csm-list-all.png` |
| TC-PASTAL-011 | List total vs detail total (B1) | Blocked (not reproducible) | Totals are equal on all 4 projects at 3m, 6m and all (table above). B1 needs a dormant logger to show |
| TC-PASTAL-012 | PR reviewer + dormant logger in both tabs (B2) | Blocked | 0 overlap between Active and Past on all 4 projects |
| TC-PASTAL-013 | Projects page / side panel consistency (B3) | Blocked | PMO/Admin are reserved by another tester. CSM gets 403 on `/projects/:id` and `/employees/:id`. TM sees only 3 employees and the API ignores timeFrame |
| TC-PASTAL-014 | Move back after logging hours | Blocked | Needs Zoho time logging and a sync, which are not read-only |
| TC-PASTAL-015 | Hours on a different project don't move back | Blocked | Same as 014 |
| TC-PASTAL-016 | Boundary: sync date − 3 months | Blocked | Same as 014 |
| TC-PASTAL-017 | Future-dated Zoho entry | Blocked | Same as 014 |
| TC-PASTAL-018 | ARCHIVED employee who logs again | Blocked | Same as 014 |
| TC-PASTAL-019 | Search on Past tab | Pass (non-dormant row) | A search for "Meera" in the Past tab finds Meera Goyal. The tab badges still read 31 / 6 while 1 row is shown. `pastal-csm-past-search.png` |
| TC-PASTAL-020 | Past-tab empty fields readable | Pass (Past tab) | Past rows use "Not specified". Active tab: see defect A-D1 ("N/A" designation) |
| TC-PASTAL-021 | API contract | Partly checked | Past rows carry `allocationFeedback` (null) and `temporaryReplacement: null`, while Active rows have no `allocationFeedback`. The dormant-row part is Blocked |
| TC-PASTAL-022 | RBAC: PMO/Admin cannot read pm-projects | Blocked | Accounts reserved. Seen instead: PM also gets 403 on `/pm-projects`, `/pm-projects/:id` and `/pm-projects/stats` |
| TC-PASTAL-023 | RBAC: cannot read another project | Pass | CSM `GET /pm-projects/5eda6081-ca13-4829-9ff6-1550df11c6f8` (AbsoluteUI, not his) → 404 "Project not found" |
| TC-PASTAL-024 | Stale/missing 3m sync (B4) | Blocked | Sync summary needs Admin. Seen instead: `lastSyncedAt` is null on all projects, and the UI says "Last Updated: No data available" |
| TC-PASTAL-025 | Stats unaffected | Pass (observed once) | CSM `/pm-projects/stats` 200: 4 projects, 76 allocated, 64 fixed, 12 dynamic, 21 long-running, matching the cards on `/my-projects` |

---

## Task B — SI4-T1459 User Guide & Releases

### What each role sees

| | CSM | PM | TM |
|---|---|---|---|
| Sidebar version | 6.4.2 | 6.4.2 | 6.4.2 |
| What's New "Current" | v6.4.0 | v6.4.0 | v6.4.0 |
| Releases listed (planned off / on) | 34 / 36 | 35 / 37 | 35 / 37 |
| Help: guides / pages covered | 21 / 6 | 36 / 13 | 45 / 15 |
| Sidebar badges for a fresh user (seen store cleared) | none (6.4.0 changes only touch General and My Profile, which have no badge) | Employee Details "Fixed", Goals "Changed", dot on the Employee group | Employee Details "Fixed", Goals "Changed", dot on the Employee group |
| Bell "+N more" | +67 | +90 | +93 |
| Gated guides | Request people, Change allocation, Release, Replacement | none of upManual / approve / shortlist | Set a manual priority, Read the system priority, Shortlist, Approve or reject |
| "Login as" guide | not shown | not shown | not shown (no role has `impersonate`) |
| Dashboard guide shown / sidebar link | yes / no | yes / no | yes / no (`/dashboard` opens by URL with data) |

### Results per draft TC

| ID | Title | Result | Evidence |
|---|---|---|---|
| TC-HELP-001 | Footer links visible | Pass (PM/CSM/TM) | "What's New & History" and "Help & Support" open `/whats-new` and `/help`. `help-csm-sidebar-initial.png` |
| TC-HELP-002 | What's New loads | Pass | Cards are newest first. The Current card (v6.4.0) is open by default. `help-tm-whatsnew.png` |
| TC-HELP-003 | Help loads | Pass | Intro card, "N guides for you", "N pages covered", How to tab. `help-csm-help.png` |
| TC-HELP-004 | Current badge matches deployed version | **Fail** | Sidebar shows 6.4.2, but Current is v6.4.0. See B-D1. `help-tm-whatsnew-planned.png` |
| TC-HELP-005 | Planned toggle | Pass | v6.4.2 "Visa and LinkedIn profile fixes" (13 Oct) and v6.4.1 "Shadow developer fixes" (9 Oct) appear with the Planned badge and "Planned release, not live yet." `help-csm-whatsnew-planned.png` |
| TC-HELP-006 | Filter by page | Pass | TM, Page = Goals → 5 releases (6.4.0, 6.3.1, 6.3.0, 6.0.0, 3.0.0) |
| TC-HELP-007 | Filter by type | Pass | Type options are New / Improved / Changed / Fixed / Removed, with no "In release". Goals + Fixed → 4 releases |
| TC-HELP-008 | Search release notes | Pass | "linkedin" finds v5.0.0 with planned off, and v6.4.2 + v5.0.0 with planned on. The search ignores case |
| TC-HELP-009 | No-match empty state | Pass | "zzqqxx" → "0 releases", "No release notes found · Try a different search, page or type of change." |
| TC-HELP-010 | Expand/Collapse all | Pass | 35 cards open, then 0 |
| TC-HELP-011 | Empty release card | Pass | v6.1.0, v6.0.1, v3.2–3.4: "No changes you will notice.", trigger disabled |
| TC-HELP-012 | Baseline card | Pass | v3.0.0 shows the Baseline badge and "5 in release" (CSM) |
| TC-HELP-013 | Page chip deep link | Pass | Chip "General" → `/help?module=general`, filter "Getting started" |
| TC-HELP-014 | Help deep link | Pass | `/help?module=tickets` → "Project Allocation" (CSM 2, PM 2, TM 4 guides) |
| TC-HELP-015 | Unknown module param | Pass | `/help?module=foo` → "All pages", no error. `help-tm-deeplink-foo.png` |
| TC-HELP-016 | Module the user cannot open | Pass (with CSM/PM/TM instead of Employee) | CSM `?module=roles` and `?module=details` → All pages. PM/TM `?module=myprojects` → All pages |
| TC-HELP-017 | Help search | Pass | TM "visa" → Add or update a visa, Find an older notification, Use the Filter panel |
| TC-HELP-018 | Terms tab search | Pass | "NS1" → Night shift codes card (NS1 · NS2 · WS · ODS). `help-tm-terms.png` |
| TC-HELP-019 | Help no-match | Pass | "No help found" / "No terms found" + "Try a different search or page." |
| TC-HELP-020 | One guide open at a time | Pass | After opening "Use the Filter panel", "Find who is free" closes. `help-tm-guide-open.png` |
| TC-HELP-021 | "What's new for you" card | Pass | Shown on plain `/help`. Hidden when searching or when `?module=details` is set. "All releases" links to `/whats-new` |
| TC-HELP-022 | Contact support | Pass | `<a href="https://forms.office.com/r/dhbqsT6GnQ" target="_blank" rel="noopener noreferrer">` |
| TC-HELP-023 | Role-filtered help (Employee) | Blocked | Employee account reserved. CSM / PM / TM compared instead (table above) |
| TC-HELP-024 | Permission-gated guides | Pass | Only TM (has `utilization_priority`, ticket approve) sees Set a manual priority, Shortlist, Approve or reject. No role sees Login as |
| TC-HELP-025 | Role-filtered release notes | Pass | CSM 34 releases and 8 page options. TM 35 releases and 16 page options |
| TC-HELP-026 | Sidebar badge appears | Pass (PM, TM) | Fresh seen store → Employee Details "Fixed" (tooltip "Fixed in v6.4.0"), Goals "Changed", dot on the Employee group. `help-tm-fresh-sidebar-expanded.png` |
| TC-HELP-027 | Badge clears on visit | Pass | After visiting Employee Details, `help_seen_<id>` = `{"details":"6.4.0"}` and the badge stays gone after reload. `help-tm-badge-cleared.png` |
| TC-HELP-028 | Badges during Login as | Blocked | Needs Admin/PMO account |
| TC-HELP-029 | Bell dot and tab dot | Blocked | All three accounts have unread notifications (CSM 1, PM 40, TM 99+), so the number shows instead of the dot |
| TC-HELP-030 | Bell dot clears | Pass (storage) | Opening the bell's What's New tab writes `whatsNew: "6.4.0"` to `help_seen_<id>` |
| TC-HELP-031 | Bell panel content | Pass | 5 items, "+N more", and "View What's New & History" goes to `/whats-new` and closes the popover. `help-csm-bell-whatsnew.png` |
| TC-HELP-032 | Bell header vs items | **Fail** | See B-D5 |
| TC-HELP-033 | Seen state per browser | Pass | Clearing `help_seen_*` brings the badges back |
| TC-HELP-034 | Search length cap | Pass | Both search boxes have `maxlength=99`. Leading spaces are trimmed and inner spaces are kept ("  find  who" → "find  who") |
| TC-HELP-035 | Content chunk fails | **Fail** | See B-D6. `help-csm-release-chunk-blocked.png` |
| TC-HELP-036 | Certifications / Working Location coverage | **Fail** | See B-D2 |
| TC-HELP-037 | Keyboard and ARIA | Partly checked | Labels are present: "Filter by page", "Filter by type of change", "Search release notes", "Search help", "Show steps for {title}", "Has changes". axe was not run (not installed) |
| TC-HELP-038 | Collapsed sidebar | Pass (links) | Footer links stay visible in the icon rail. The tooltip text was not captured. `help-tm-collapsed-sidebar.png` |

Requested content checks:
- Certifications / Working Location notes or guides: **none** (confirmed, B-D2).
- Login-as guide mentions the side panel: **no** (B-D7). Confirmed in the deployed bundle; the guide is not visible to PM/CSM/TM.
- Employee Details sort contradiction: **confirmed** (B-D4).
- Dashboard guide with no nav link: **confirmed** for all three roles (B-D3).

---

## Confirmed defects

### B-D1 — What's New "Current" is v6.4.0 while the app runs 6.4.2
- **Severity:** High
- **Steps:** Log in as PM, CSM or TM. Look at the version under "SimERP" in the sidebar. Open What's New & History.
- **Expected:** The card marked Current is v6.4.2, and the 6.4.1 and 6.4.2 notes are visible and badge as new.
- **Actual:** The sidebar says 6.4.2, but Current is "v6.4.0 · Goals, reworked". v6.4.1 (9 Oct) and v6.4.2 (13 Oct) only appear when "Preview planned release" is ticked, and they say "Planned release, not live yet." Help shows "What's new for you in v6.4.0", and the bell says the same.
- **Evidence:** `help-tm-whatsnew-planned.png`, `help-csm-whatsnew.png`, `help-pm-whatsnew.png`

### B-D2 — Certifications and Working Location have no release notes and no help guides
- **Severity:** Medium
- **Steps:** As TM (who has both pages in the sidebar: Employee → Certifications, Overview → Working Location), search What's New for "certification" and "working location" with planned on and off. Search Help for the same words.
- **Expected:** Each shipped page has at least one release note and one guide.
- **Actual:** "0 releases · No release notes found" and "No help found" for all roles. The Help page filter has no Certifications or Working Location option, and these sidebar items never get a badge.
- **Evidence:** `help-tm-fresh-sidebar-expanded.png` (items shown, no badges). Search results are in the run logs (PM/CSM/TM all 0).

### B-D3 — Dashboard guide is shown, but Dashboard has no menu link
- **Severity:** Medium
- **Steps:** As PM, CSM or TM, open Help → page filter → Dashboard (or `/help?module=dashboard`). Then look for Dashboard in the sidebar.
- **Expected:** The guide tells the user how to open the page, or the page has a sidebar entry.
- **Actual:** The guide "Read the allocation dashboard" is listed for all three roles. No sidebar link points to `/dashboard`. As TM, `/dashboard` opens with data when the URL is typed.
- **Evidence:** `help-tm-deeplink-dashboard.png`, `help-tm-dashboard-direct.png`

### B-D4 — Help guide and release note give different default sorts for Employee Details
- **Severity:** Medium
- **Steps:** As TM, open Help → "Find who is free". Then open What's New and search "UP (System)". Then open `/` (or `/employee`) and compare with the sidebar link.
- **Expected:** One documented default sort that matches what users see.
- **Actual:** The guide says "The list opens sorted by Availability %, highest first." Release note v6.3.0 says "the list is sorted by UP (System) by default." The app does both, depending on entry point:
  - Landing after `/` → `/employee?tab=current` calls `sortBy=upSystem&sortOrder=asc`.
  - Plain `/employee` does the same.
  - The sidebar link calls `sortBy=availabilityPercentage&sortOrder=desc`.
- **Evidence:** `help-tm-find-who-is-free-guide.png`, `help-tm-whatsnew-default-sort-note.png`, `help-tm-employee-default-sort.png`

### B-D5 — Bell "What's New" header names one version for items from several releases
- **Severity:** Low
- **Steps:** As CSM, open the bell → What's New tab.
- **Expected:** The header matches the items, or the list is limited to that release or to unseen items.
- **Actual:** The header reads "What's new for you in v6.4.0", but the list includes "Long-running allocations" (a v6.3.0 note). "+67 more" (CSM), "+90 more" (PM) and "+93 more" (TM) count the whole history.
- **Evidence:** `help-csm-bell-whatsnew.png`, `help-pm-bell-whatsnew.png`

### B-D6 — A failed content load shows "No release notes found · try a different search"
- **Severity:** Low
- **Steps:** As CSM, block the `loadReleaseFiles-*.js` chunk in your own browser (route abort), then open `/whats-new` with no filters.
- **Expected:** A message saying no releases could be loaded (for example, "No releases yet").
- **Actual:** "0 releases · No release notes found · Try a different search, page or type of change." This happens even though no filter or search is set.
- **Evidence:** `help-csm-release-chunk-blocked.png`

### B-D7 — Login as guide does not mention the side-panel button
- **Severity:** Medium (confirmed in the deployed bundle only)
- **Steps:** Read the `loginAs` guide served to users with the `impersonate` permission (deployed `HelpPage-CUBzJ4Ew.js`). Compare it with the v6.4.2 note SI4-T1531.
- **Expected:** The guide covers both ways to start Login as.
- **Actual:**
  - The guide steps say only "Open the employee's full profile. Click Login as <name>…".
  - Note SI4-T1531 "Login as from the employee side panel" exists but is in the planned 6.4.2 release, so users see neither.
  - PM, CSM and TM cannot see the guide. A UI check needs Admin or PMO.
- **Evidence:** deployed JS text (quoted above). The UI check is Blocked.

### B-D8 — Page chips link to Help pages the user cannot open
- **Severity:** Low
- **Steps:** As TM or PM, open What's New, expand all, and click the "My Projects" chip (`/help?module=myprojects`).
- **Expected:** Show chips only for pages the user can open, or explain the fallback.
- **Actual:** The Help filter silently falls back to "All pages" (TM: 45 guides, PM: 36). Neither role can open My Projects.
- **Evidence:** run log (`deeplink myprojects` → All pages for PM and TM)

### A-D1 — "N/A" shown as designation in My Projects Active table (outside T1526 scope)
- **Severity:** Low
- **Steps:** As CSM, open `/my-projects/a8869918-6732-4886-9153-8dfa5b06c79a` (Active Allocations).
- **Expected:** Empty values use a word placeholder ("Not specified"), per the empty-data convention.
- **Actual:** Khushi Mistry and the external reviewers Tom Bradshaw (Client) and David Kowalski (Client) show "N/A" as their designation.
- **Evidence:** `pastal-csm-analytixhub-active.png`

## Notes for PO / dev (not filed as defects)
- **PM has no My Projects access on dev.** `hardik.trivedi@` gets 403 on all `/pm-projects` endpoints, but is PM on HyperScale and KubeDash. The T1526 brief assumes PM and CSM both use this screen. Confirm which roles should have it.
- **Dev has no real Zoho hours.** `lastSyncedAt` is null and the hours are proportional, so T1526 can only be proven with seeded dormant rows, or after a real 3m sync. B4 (an empty 3m bucket pushes everyone to Past) is a live risk if the sync ever runs empty.
- **`GET /projects/:id` ignores `timeFrame`.** It always returns the 15d hours.
- **Past tab badges do not follow the search.** The tabs still show 31 / 6 while a search shows 1 row.
- **Seed data oddity:** Neel Solanki (AnalytixHub Past) has start 25/06/2026 and end 12/03/2026.
- **Planned toggle for everyone.** "Preview planned release" is shown to CSM too. This is the C10 product question.
- **What's New filters reset on refresh.** They are not kept in the URL.
