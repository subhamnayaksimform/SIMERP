# SI4-T1459 — User Guide & Releases POC (What's New + Help & Support): code brief

> **Summary**
> 1. Two new pages: `/whats-new` ("What's New & History") and `/help` ("Help & Support"). Both open for every signed-in user, from the sidebar footer and from a new "What's New" tab in the bell. All content is JSON in `src/content/`.
> 2. "New" badges are worked out in the browser: releases marked `released` in the last 14 days, filtered by the user's permissions, minus what this user has already opened. "Seen" is saved in `localStorage` under `help_seen_<publicId>`, so it is per user and per browser.
> 3. **Main defect: the version is out of step.** `package.json` (and the sidebar label) say **6.4.2**, and tags v6.4.1 and v6.4.2 exist on `main`. But `releases/6.4.1` and `releases/6.4.2` are still `"status": "planned"`. So "Current" points to **6.4.0**, and the 6.4.1/6.4.2 notes are hidden behind "Preview planned release" and never badge. The SI4-I560 test change hid this instead of catching it.
> 4. **Content gaps:** Certifications (shipped with 6.4.0, commit "SI4-T1363 ci: release new feature") and Working Location (SI4-T1375) have no release note, no help guide and no help module key. The Dashboard guide describes a page that has no sidebar entry. One release note contradicts a help guide about the default Employee Details sort.
> 5. Smaller issues: the bell list is not limited to recent releases, and its header names one version while listing items from several. A failed content load shows the "filtered" empty state, not "No releases yet" (that label is unused). What's New filters are not kept in the URL. The 38 draft test cases below start at **TC-HELP-001** (there are no TC-HELP ids yet in `tests/` or `docs/test-cases/`).

Source: `SIMERP DEV/frontend`, branch `origin/development` (head `2bd658c5`, 2026-10-15). Commits: `a8832bfb` (content JSON), `bdde6eb3` (pages and badges), `178a3efe` (release-notes skill), `477c492e` (test fix), `e0cfc07b` (badge and seen-store review fixes, filed under SI4-T1433), `de8acf2b` (SI4-I560 test), `22695241` (SI4-I571 bump to 6.4.2). Read from code only: nothing was run against the app.

---

## 1. Routes and entry points

| Entry | Where | Code |
|---|---|---|
| `/whats-new` | Route with no permission gate. Breadcrumb/title "What's New". | `src/routes/coreRoutes.tsx`, `ROUTES.WHATS_NEW` |
| `/help` | Route with no permission gate. Title "Help & Support". | same, `ROUTES.HELP` |
| Sidebar footer | Two fixed links under the main nav: **What's New & History** (History icon) and **Help & Support** (CircleHelp icon). Shown to everyone, and in the collapsed icon rail too (tooltip). | `src/components/common/sidebar/AppSidebar.tsx` (`FOOTER_LINKS`) |
| Sidebar version | The header shows `__APP_VERSION__`, which is the `package.json` version (now **6.4.2**). | `AppSidebar.tsx`, `vite.config.ts:50` |
| Sidebar item badges | A capsule (New / Updated / Changed / Fixed / Removed) on nav items whose page has unseen changes. A collapsed group shows a dot (aria-label "Has changes"), which hides once the group is expanded. Badges are hidden in the icon rail. | `nav-main/NavMain.tsx`, `help/ModuleChangeBadge.tsx` |
| Bell | The header bell has two tabs: **Notifications** and **What's New**. A red dot on the bell and on the tab means unseen release notes. A numeric unread count takes priority over the dot. | `notifications/NotificationCenter.tsx`, `help/WhatsNewPanel.tsx` |
| Bell panel | Shows at most 5 newest changes, "+N more", and the link **View What's New & History**. | `WhatsNewPanel.tsx` |
| Help → What's New | The "What's new for you in v{x}" card at the top of Help has an **All releases** button. | `help/NewForYouCard.tsx` |
| What's New → Help | Each change row has "Pages:" chips that link to `/help?module=<key>` (tooltip "See help"). | `help/ChangeRow.tsx` |
| Contact support | A **Contact support** button opens `https://forms.office.com/r/dhbqsT6GnQ` in a new tab (`rel="noopener noreferrer"`). | `HelpPage.tsx`, `constants/help/labels.ts` |

**Deep link:** `/help?module=<key>` pre-filters Help to one page. If the key is unknown, or the user cannot open that page, Help quietly falls back to "All pages" (`HelpPage.tsx`, `requested`/`module`). The module filter writes to the URL (`replace: true`). Search and the How to / Terms tab are not kept in the URL. **What's New keeps no state in the URL** (module, type, search and planned are all `useState`), so a refresh resets the filters.

## 2. Badge and "seen" logic (what makes a badge appear or disappear)

The logic lives in `src/lib/help/badges.ts`, `seenStore.ts`, `hooks/help/useHelpBadges.ts` and `NavMain.tsx`.

- **Candidate releases:** a release counts only if `status === "released"`, it is not the baseline (3.0.0), and its `date` is no more than **14 days** ago (`BADGE_WINDOW_DAYS`, compared against UTC midnight of the date).
- **Candidate changes:** any change type except `Existing`. The change must be visible to the user (see §4).
- **Module badge:** shown when the user can open the page and the release version is newer than `seen[module]`. If several changes apply, the badge shows the highest-priority type (New > Changed > Improved > Fixed > Removed). The tooltip reads `"{label} in v{newest version}"`.
- **Cleared when:** the user is on a route listed in `HELP_MODULE_BY_ROUTE`, however they got there (sidebar, bookmark or link). This writes `seen[module] = latest released version`. Seen versions never go backwards.
- **Bell dot:** shown while a recent release (within 14 days) has a visible update newer than `seen.whatsNew`. It clears when the What's New tab in the bell finishes loading, or when `/whats-new` is opened.
- **Storage:** `localStorage["help_seen_<currentUser.publicId>"]`, for example `{"goals":"6.4.0","whatsNew":"6.4.0"}`. Bad entries (non-string values, non-version strings) are dropped. Other tabs sync through the `storage` event. **It is per browser:** clearing site data, using a new browser or private mode brings the badges back. A first-time user sees every page touched by a release in the last 14 days as new.
- **Pages with no badge mapping:** `dashboard`, `profile`, `general`, `notifications`, `teamsNotifications`. These can never show or clear a sidebar badge. Certifications, Working Location, Allocation Correction and Department have no help module at all.
- **Loading:** the release JSON is a lazy chunk. The sidebar loads it when the browser is idle (`requestIdleCallback`, 5 s timeout), so badges appear a moment after first paint. The pages and the bell load it immediately. If the chunk fails, it is treated as "no releases" (sent to Sentry) and not retried until the page is reloaded.
- **Testing window:** today the only released, non-baseline release in the window is **6.4.0 (2026-10-08)**. Badges for it stop after **2026-10-22**. Because 6.4.1 and 6.4.2 are `planned`, **no new badges will appear on dev after that date** until someone flips a status. To test after that, a release must be marked `released` with a recent date.

## 3. What each page shows

**What's New (`WhatsNewPage.tsx`, `ReleaseCard.tsx`, `WhatsNewFilters.tsx`)**
- There is one collapsible card per release, newest first (compared numerically, so 6.10 sorts after 6.9). The title reads `v{version} · {title}`. Badges: **Current** (newest released, non-baseline), **Planned**, **Baseline**.
- The subtitle shows the date as `D Mon YYYY`, the text "Planned release, not live yet." for planned releases, and the summary (or "No changes you will notice." when the release is empty). It also shows a count per type (`×n`) and "N changes for you" / "1 change for you" / "N in release" for the baseline.
- Only the Current card is open by default. **Expand all** and **Collapse all** are available. A card with no changes cannot be expanded (the trigger is disabled).
- Filters: Page (only pages that appear in the visible notes), Type (New / Improved / Changed / Fixed / Removed; `Existing` is not offered), search (title, description and page name; case-insensitive; `trimStart`; capped at `SEARCH_MAX_LENGTH`). There is also a **Preview planned release** checkbox, shown when *any* planned release exists. The counter reads "N releases · select a version to see its changes".
- With no filter on, every visible release is listed, including empty ones. With any filter on, releases that have no matching change are dropped.
- Empty state: "No release notes found" / "Try a different search, page or type of change."
- Loading state: `PageLoadingState` until permissions and the release chunk have both loaded (`useHelpReady`).

**Help (`HelpPage.tsx`, `HelpToolbar.tsx`, `HelpTopicRow.tsx`, `HelpTermCard.tsx`)**
- The intro card reads "Help for you" and shows two stats: **N guides for you** and **N pages covered**. It also has the Contact support hint and button.
- The "What's new for you in v{x}" card shows the newest released, non-baseline release that has updates for the user. It is shown only when the page filter is "All pages" and search is empty.
- Tabs: **How to** (numbered steps, with tips prefixed "Tip:") and **Terms & numbers** (glossary cards, each with an optional code badge).
- Page filter (in the URL) and search. In How to, search covers title, summary, steps and tips. In Terms, it covers term, code and definition.
- Only one guide is open at a time (accordion). Pages are shown in sidebar order.
- Empty states: "No help found" / "No terms found", each with "Try a different search or page."

**Bell What's New tab:** a skeleton while loading, then up to 5 updates across *all* non-baseline released versions. The header reads "What's new for you in v{version of first item}". If nothing is visible, it shows "You're up to date".

## 4. Role-specific content (who sees what)

- No role names appear in the content. Visibility comes from the user's live CASL permissions (`/employees/permissions`) and feature flags (`src/lib/help/access.ts`, `HELP_MODULE_ACCESS`).
- **A note** is shown if the user can open *any* page in its `modules` list *and* passes its own `requires`/`flagKey`. **A guide or term** is shown if the user can open its page *and* passes its `requires`/`flagKey`.
- Page access follows the sidebar rules. For example, `details` needs read on `employees` + read on `department`. `myprojects` and `tickets` accept self-only read. `skills`, `goals`, `weekly`, `competencies`, `roles`, `assign`, `scheduler` and `dashboard` also need their feature flag.
- **Admin:** on the pages and the bell list, admins see every note and guide (`adminSeesAll`). The **sidebar badges and the bell dot do not use `adminSeesAll`**. They use real permissions.
- Gated guides worth checking per role: `upSystem` (read utilization_priority), `upManual` (set_manual_priority), `editAllocation`/`addAllocation`/`directAllocation`/`prReviewers` (create_direct/update_direct allocations), `loginAs` (impersonate employees), `allocationVerification` (flag + permission), `bypass` (bypass_approval), `approve`, `shortlist`, `acknowledge`, `editTicket`, `editRoles`, `addCompetency`, `addTeam`, `addSkill`/`editSkill`, `addStack`/`projectStacks`, `assignRole`, `contractors`, `createGoal`, `assignGoal`, `addWeekly`. Terms with `requires`: the under-utilized, seniority guardrail, UP and Allocation Verification terms in `details`.
- **Expected Employee-role view:** Getting started, My Profile, Notifications, plus My Projects/Project Allocation if self-only read is granted. No Employee Details guides. Release notes limited to `general`/`profile`/etc.
- Impersonation ("Login as"): the seen key follows `useCurrentUser().publicId`, so the badges shown during Login as should be the impersonated user's (see TC-HELP-028).

## 5. Version comparison logic (SI4-I560 / SI4-I571)

- `compareVersions` (`lib/help/releases.ts`) compares dotted numbers numerically. Missing parts count as 0.
- `latestReleased` returns the first release (newest first) that is `released` and not the baseline. "Current", the Help card version, the badge `seen` value and the bell are all based on it.
- **The sidebar version comes from `package.json` instead.** Nothing links the two.
- SI4-I560 (`de8acf2b`) changed `hooks.test.tsx`. Instead of asserting that the newest note equals the newest release, it now asserts against "the newest *released* version", because "a planned release such as 6.4.1 became the newest entry". This made CI green while `package.json` and tag v6.4.1 already said 6.4.1. No test checks that `package.json`'s version has a `release.json`, or that this release is `released` on `main`.

## 6. Content-quality findings (JSON in `src/content/`)

| # | Severity | Finding | Evidence |
|---|---|---|---|
| C1 | **High** | **Version mismatch.** The deployed app is 6.4.2: `package.json` on `development` and `main`, tags `v6.4.1`/`v6.4.2`, and the sidebar label. But `releases/6.4.1/release.json` and `6.4.2/release.json` are `"planned"` on both branches. Users see "Current = v6.4.0" and "What's new for you in v6.4.0". The shadow-developer fixes, linked tickets, visa/LinkedIn fixes and Login-as changes are hidden unless the user ticks Preview planned, and they never badge. The skill and README say a release PR must flip the status; neither the hotfix (#498) nor the 6.4.1 bump did. | `git show v6.4.2:src/content/releases/6.4.2/release.json` → `planned` |
| C2 | **High** | **Certifications is missing.** It shipped in the 6.4.0 bump commit itself (`ad68d771 SI4-T1363 ci: release new feature`), with fixes in SI4-I572. It has no release note in any version, no `help/certifications.json`, and no `certifications` key in `HELP_MODULE`. So there is no badge on the Employee → Certifications nav item and no help page. | `git grep -il certific src/content` only matches goals text |
| C3 | **High** | **Working Location is missing.** SI4-T1375 merged around 2026-10-09 (Overview → Working Location, plus the profile card). It has no release note, no help module or guide, and no badge mapping for `/working-location`. | `ROUTES.WORKING_LOCATION_OVERVIEW` is absent from `HELP_MODULE_BY_ROUTE` |
| C4 | Medium | **The Dashboard guide is for a page with no nav entry.** `help/dashboard.json` ("Read the allocation dashboard") is shown to anyone with read on `dashboard` + `feature.dashboard.enabled`. But `NAV_ITEMS` has no Dashboard item, so `/dashboard` can only be reached by typing the URL. The guide never says how to open it. | `navItems.ts`; `ROUTES.DASHBOARD` is only used in `coreRoutes.tsx` |
| C5 | Medium | **The help guide and a release note disagree about the default sort.** `details.findFree` says the list "opens sorted by Availability %, highest first". That is true for the sidebar link (`withSortParams(... 'availabilityPercentage', DESC)`). Release note 6.3.0/SI4-T1324 says "the list is sorted by UP (System) by default". That is true when there is no sort param, for example after login via RootRedirect (`useEmployeeEffectiveFilters` defaults `sortBy: 'upSystem'`). Users who land after login will see a sort different from the one the guide describes. | `RootRedirect.tsx`, `useEmployeeEffectiveFilters.test.ts:33` |
| C6 | Medium | **The Login-as guide is out of date.** `details.loginAs` only describes the full profile. 6.4.2/SI4-T1531 added a **Login as** button in the employee side panel. Both notes are planned, so users have neither. | `help/details.json` vs `releases/6.4.2/changes/SI4-T1531.json` |
| C7 | Low | **"Goal status" is defined twice with different meanings.** The `goals` version has no manual override. The `profile` version adds "An RM can set it manually". One of them is wrong. | `help/goals.json`, `help/profile.json` |
| C8 | Low | **The bell header uses one version for mixed items.** The header reads "What's new for you in v{first item's version}", but the 5 items can come from several releases. "+N more" counts the whole history (it will show something like "+60 more"). "You're up to date" can only appear if the user has no visible notes at all. | `WhatsNewPanel.tsx` (no 14-day or unseen filter) |
| C9 | Low | **Wrong empty state after a load failure.** If the release chunk fails, `releases = []` and What's New shows "No release notes found · Try a different search…", even with no filter on. `NO_RELEASES_TITLE`/`NO_RELEASES_DESCRIPTION` ("No releases yet") and `WHATS_NEW_ON_PAGE` are defined but unused. | `grep NO_RELEASES_TITLE` → only in labels.ts |
| C10 | Low | **The planned toggle is shown to everyone.** "Preview planned release" appears for every user, including Employee-role, whenever any planned release exists (`hasPlanned` is computed before permission filtering). It shows notes for releases that have not shipped. Confirm with the PO that this is intended. | `WhatsNewPage.tsx` (`hasPlanned`) |
| C11 | Low | **Some note page chips can fall back.** A note visible through one page (for example `myprojects` + `tickets`) shows chips for both. For a user who can only open one of them, the other chip opens `/help?module=x`, which silently falls back to "All pages". | `ChangeRow.tsx` + `HelpPage.tsx` fallback |
| C12 | Low | **Date rule inconsistency.** `badges.ts` parses `YYYY-MM-DD` as `T00:00:00Z` (UTC). The repo rule in `pr-review-fixer.md` and `data-layer.md` is to append `T00:00:00` (local time). In IST this moves the 14-day cutoff by 5.5 h. Edge only. | `lib/help/badges.ts:7` |
| C13 | Info | **Version history gap.** 6.3.3 was bumped on the SI4-I560 branch (`c66ad65d`) but never shipped and has no release folder. The history goes 6.3.2 → 6.4.0. That looks fine, but confirm no 6.3.3 build reached any environment. | `git log -- package.json` |
| C14 | Info | **Spelling and placeholders.** No typos or placeholders (TODO/TBD/lorem) were found in the 135 change files and 21 help files. One British spelling ("utilisation", 6.0.0/SI4-T1242) and "coloured"/"labelled" appear among mostly US spellings. Ticket ids repeat across releases by design (T1007, T973, T1239). | aspell-style word scan |
| C15 | Info | **Broken routes in the content.** None found. The content does not contain URLs; it uses nav paths written as text, for example "Open Overview → Employee Ratings". All the group → item names in guides match `NAV_ITEMS` and `SIDEBAR_LABELS` (Overview, Employee, Team, Requests Tracking → Project Allocation, Projects → Tech Stack, Department → Competencies, Admin → Scheduler/Contractors, photo menu → Teams Notification). | `navItems.ts`, `constants/sidebar/labels.ts` |

Recently shipped features that are covered: linked shadow tickets (6.4.1/SI4-T1464 + `tickets.linkedTickets` + the `myprojects.deallocate` tip), shadow-only release (6.4.1/SI4-I560 + tip), Login as (4.0.0, 6.4.2/T1525, T1531 + `details.loginAs`). **All of these are in planned releases** (see C1).

## 7. Release-notes workflow (dev side, for awareness)

- The `.claude/skills/release-notes/` skill and `src/content/README.md` say: one JSON file per change, `planned` until it ships, flipped to `released` in the release PR, and help guides updated in the same PR.
- `scripts/changes-since-release.sh` needs `v*` tags (they exist: v6.3.1 to v6.4.2) and the `gh` CLI for PR text.
- The content Zod tests (`src/lib/help/__tests__/content.test.ts`) check schema, folder name = version, a single baseline and unique keys. **They do not check** version ↔ `package.json`, released status on main, or that every nav route has a help module. That is why C1–C3 passed CI.

---

## 8. Draft test cases — TC-HELP-001 … TC-HELP-038

Specs go in `tests/e2e/help-support/<category>.spec.ts` (convention: HELP has no sub-feature level). Accounts: the role fixtures (admin, PMO, PM, TM, EM, CSM, Employee). Make sure the badge window is active (see §2), or seed `localStorage` before running.

| ID | Cat | Role | Title | Steps (short) | Expected | Pri |
|---|---|---|---|---|---|---|
| TC-HELP-001 | smoke | Employee | Footer links visible | Log in and look at the sidebar footer | "What's New & History" and "Help & Support" are visible and open `/whats-new` and `/help` | P1 |
| TC-HELP-002 | smoke | Admin | What's New loads | Open `/whats-new` | Loading state, then release cards newest first. The heading/title reads "What's New". The Current card is expanded | P1 |
| TC-HELP-003 | smoke | Admin | Help loads | Open `/help` | Intro card, "N guides for you", "N pages covered", How to tab active, guides grouped by page | P1 |
| TC-HELP-004 | functional | Admin | Current badge matches deployed version | Compare the sidebar version label with the card that has the **Current** badge | They should match. **Expected to fail today (6.4.2 vs 6.4.0), see C1** | P1 |
| TC-HELP-005 | functional | Admin | Planned toggle | Tick "Preview planned release" | 6.4.1 and 6.4.2 appear with the **Planned** badge and the text "Planned release, not live yet."; untick hides them | P2 |
| TC-HELP-006 | functional | Admin | Filter by page | What's New → Page = Goals | Only releases with Goals changes remain, and each shows only its Goals changes. The count text updates | P2 |
| TC-HELP-007 | functional | Admin | Filter by type | Type = Fixed | Only Fixed changes. "In release" (Existing) is not offered as a type | P2 |
| TC-HELP-008 | functional | Admin | Search release notes | Search "linkedin" (with planned on), then "LINKEDIN" | Case-insensitive match on the 6.4.2 LinkedIn note | P2 |
| TC-HELP-009 | negative | Admin | No-match empty state | Search "zzqqxx" | "No release notes found · Try a different search, page or type of change." Count shows 0 releases | P2 |
| TC-HELP-010 | functional | Admin | Expand/Collapse all | Click Expand all, then Collapse all | All non-empty cards open, then all close | P3 |
| TC-HELP-011 | functional | Admin | Empty release card | Find "Behind-the-scenes update" (for example 6.1.0) | Summary "No changes you will notice.", no count, the card cannot be expanded | P3 |
| TC-HELP-012 | functional | Admin | Baseline card | Open v3.0.0 | **Baseline** badge, "N in release", items typed "In release" | P3 |
| TC-HELP-013 | functional | Any | Page chip deep link | Expand a change and click its page chip (for example "Goals") | Navigates to `/help?module=goals` and Help is filtered to Goals | P2 |
| TC-HELP-014 | functional | Admin | Help deep link | Open `/help?module=tickets` | The page filter shows "Project Allocation" and only those guides are listed | P2 |
| TC-HELP-015 | negative | Admin | Unknown module param | Open `/help?module=foo` | Falls back to "All pages", no error | P3 |
| TC-HELP-016 | negative | Employee | Module the user cannot open | As Employee, open `/help?module=roles` | Falls back to "All pages". No Roles & Permissions guides are shown | P1 |
| TC-HELP-017 | functional | Admin | Help search | How to tab: search "visa" | Only guides whose title, summary, steps or tips mention visa (Profile `visa`, Details filter) | P2 |
| TC-HELP-018 | functional | Admin | Terms tab search | Terms & numbers: search "NS1" | The night-shift codes card appears with its code badge | P3 |
| TC-HELP-019 | negative | Admin | Help no-match | Search "zzqqxx" on both tabs | "No help found" / "No terms found" with "Try a different search or page." | P3 |
| TC-HELP-020 | functional | Admin | One guide open at a time | Open guide A, then guide B | A collapses and B shows numbered steps and "Tip:" lines | P3 |
| TC-HELP-021 | functional | Admin | "What's new for you" card | Help with All pages and empty search | The card shows the newest released version with its updates and an **All releases** button that goes to `/whats-new`. The card hides when a page filter or search is set | P2 |
| TC-HELP-022 | functional | Any | Contact support | Click Contact support | Opens the Microsoft Forms URL in a new tab with `rel="noopener noreferrer"` | P2 |
| TC-HELP-023 | functional | Employee | Role-filtered help | Employee: compare the page list with Admin's | Employee sees only Getting started, My Profile, Notifications (+ self-scope pages). No Employee Details, Admin or Department guides. Fewer guides in the stats | P1 |
| TC-HELP-024 | functional | PM vs TM vs PMO | Permission-gated guides | Check that `bypass`, `approve`, `shortlist`, `directAllocation`, `upManual` and `loginAs` appear only for roles with the matching permission | Each guide appears only for roles holding that action/subject | P1 |
| TC-HELP-025 | functional | Employee | Role-filtered release notes | Employee: open What's New | No notes that touch only Employee Details/Goals/Tickets. A release whose changes are all hidden is dropped. "N changes for you" counts only what is visible | P1 |
| TC-HELP-026 | regression | Fresh user (cleared localStorage) | Sidebar badge appears | Clear `help_seen_*` and reload while inside the 14-day window | Within a few seconds, nav items for pages changed in the release show a badge (for example Goals "Changed"). A collapsed group shows a dot. The tooltip reads "{label} in v{version}" | P1 |
| TC-HELP-027 | regression | Fresh user | Badge clears on visit | Click the badged item (for example Goals) | Its badge is gone. `localStorage.help_seen_<id>.goals` = latest released version. It stays gone after reload | P1 |
| TC-HELP-028 | regression | Admin → Login as Employee | Badges during Login as | Log in as an employee, check the badges and the bell, then Return to Admin | Badges reflect the employee's permissions and the employee's seen key. After return, the admin's own state is unchanged | P2 |
| TC-HELP-029 | regression | Fresh user | Bell dot and tab dot | Reload with a cleared seen map | The bell shows a red dot (when there are no unread notifications) and the What's New tab shows a dot | P1 |
| TC-HELP-030 | regression | Fresh user | Bell dot clears | Open the bell → What's New tab and wait for the list | Both dots clear and stay cleared after reload. Opening `/whats-new` directly also clears them | P1 |
| TC-HELP-031 | functional | Any | Bell panel content | Open the What's New tab | At most 5 items, each with a type badge, title and description. "+N more" when there are more. **View What's New & History** goes to `/whats-new` and closes the popover | P2 |
| TC-HELP-032 | functional | Any | Bell header vs items | Compare "What's new for you in v{x}" with the items' versions | Flags C8: items from older versions appear under a single version header | P3 |
| TC-HELP-033 | regression | Any | Seen state per browser | After TC-HELP-027, log in in a new browser profile | The badges come back (state is per browser). Document this as expected behaviour | P3 |
| TC-HELP-034 | boundary | Any | Search length cap | Paste 300 characters into both search boxes; type leading spaces | Input is capped at `SEARCH_MAX_LENGTH`. Leading spaces are trimmed, inner spaces kept | P3 |
| TC-HELP-035 | negative | Any | Content chunk fails | Block the release-notes JS chunk (route abort) and open `/whats-new` | The page does not crash. Expected "No releases yet" (**today shows "No release notes found · try a different search", see C9**) | P3 |
| TC-HELP-036 | regression | Admin | Certifications / Working Location coverage | Search Help and What's New for "certification" and "working location" | Guides and release notes exist. **Expected to fail today (C2, C3)** | P2 |
| TC-HELP-037 | a11y | Any | Keyboard and ARIA | Tab through the filters and cards; check names | Filters have aria-labels ("Filter by page", "Filter by type of change", "Search release notes"/"Search help"). Guide triggers are announced as "Show steps for {title}". The group badge dot is named "Has changes". Focus is visible. axe reports no serious issues | P2 |
| TC-HELP-038 | a11y | Any | Collapsed sidebar | Collapse the sidebar to the icon rail | The footer links are still reachable with tooltips. Item badges are hidden; check whether any indicator remains (product question) | P3 |

Open questions for the PO and dev:
1. Who flips `planned` → `released`? Should 6.4.1 and 6.4.2 be `released` now (C1)?
2. Who owns the notes and guides for Certifications and Working Location?
3. Should Employee-role users see "Preview planned release"?
4. Should the bell list be limited to the badge window or to unseen items?
5. Is "seen" being per browser acceptable, or should it move server-side?
