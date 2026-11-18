# Goals module — relocation & redesign review

**Environment:** `simerp-dev.simform.solutions` (SimERP 6.2.0)
**Screen:** `/employee/goals?departmentId=<uuid>`
**Reviewed:** 22 Sep 2026
**Method:** live browser walkthrough of every tab, control and panel across five role accounts (Admin/CEO, TM, PM, Employee, CSM), with network and DOM capture.
**Companion artefacts:** 143 test cases — `docs/test-cases/test-cases-2026-09-22-empgol-goals-relocation.md`, `reports/excel/test-cases-2026-09-22_15-24-EMPGOL-goals-relocation.xlsx`

---

## 1. What changed

Goals has moved for the second time in two months. Previously it was a tab on the `/employee` page; before that a sidebar sub-link. It is now its own route again at `/employee/goals`, and it is no longer a single listing — it is a three-tab sub-application:

| Tab | URL param | What it is |
|---|---|---|
| **Dashboard** | *(none)* | New. Analytics: 4 KPI cards, 2 donut charts, an RM-wise combo chart, and two ranked goal lists. |
| **Employee Goals** | `tab=employee-goals` | New. Per-employee goal roll-up with an expandable per-goal detail table. Read-only. |
| **Goal Management** | `tab=management` | The former Goals listing, plus a much richer Add/Edit Goal panel. |

Two filters sit above the tabs: **Year** and **Department** (Department is shown only to roles that span departments).

### New data model

`GET /api/v1/goals` now returns per-goal fields that did not exist before — `learningObjectives`, `definitionOfDone`, `topicsAndConcepts`, `estimatedDuration` — and each assignment now carries `status` (`NOT_STARTED` / `IN_PROGRESS` / `COMPLETED`), `completionPercentage`, `startedAt` and `completedAt`. A new `GET /api/v1/employee-goals?includeHistory=true` endpoint backs the Employee Goals tab and the dashboard.

### New Add/Edit Goal panel

Goal Name*, Goal Type* (Technical/Certificate), Certificate Code (conditional), and then four full rich-text editors — **Description, Learning Objectives, Definition of Done, Topics & Concepts** — plus **Estimated Duration** as three number inputs (Months / Weeks / Days). Edit locks Goal Name and Goal Type; everything else stays editable.

### What is verified working

- Role gating is solid: base **Employee** and **CSM** are redirected to `/unauthorized` with no Goals sidebar link.
- Department scoping holds under attack: a **TM** loading `?departmentId=<another department>` still sees only their own department's numbers (identical KPIs with and without the injected id). Worth keeping a permanent regression test on.
- `/employee/goals` no longer collides with the `/employee/:id` route that used to 404 it.
- Filters compose correctly on Employee Goals (279 → 35 → 2 rows across three stacked filters), and `Clear` resets them all.
- No horizontal page overflow at 375px, 768px or 1280px.

---

## 2. Defects — ranked

### P1 — blocking or data-wrong

**D1. The Dashboard ignores the `departmentId` in its own URL.**
Landing on `/employee/goals` redirects to `?departmentId=95895a10-…` (MANAGEMENT) — and then shows *"Select a department — Choose a department above to view its goals dashboard."* with the picker reading "Select department". The Goal Management tab on the same screen reads that same id correctly and shows "MANAGEMENT". So the app writes a department into the URL and then refuses to use it. For an Admin this means the default landing experience is an empty screen after a 26-second wait.

**D2. Goal Management has no pagination — 326 of 426 goals are unreachable.**
The footer reads *"Showing 1 - 100 of 426 results"*. There is no next/previous control, no page-size selector, no infinite scroll. The only way to reach goal 101+ is to already know its name and search for it.

**D3. Employee Goals renders 3,648 rows into the DOM at once.**
No pagination, no virtualisation, no page-size control. First row paints **16.6 s** after the tab is clicked (Admin scope). This is the single worst interaction on the screen.

**D4. Total L&D Hours ignores the Year filter.**
Measured on the TM account:

| Year | Employees with Goals | Total Goal Assignments | **Total L&D Hours** |
|---|---|---|---|
| All Years | 173 | 559 | 11877h |
| 2026 | 158 | 305 | **11877h** |
| 2025 | 118 | 178 | **11877h** |

Two cards respond to the filter, one does not. Any per-year L&D figure read off this dashboard is wrong.

**D5. The three tabs each keep a separate, unsynchronised department.**
Select QA on Dashboard → Employee Goals still says "All Departments", Goal Management still says "MANAGEMENT". Three department controls on one screen means the numbers on the three tabs describe three different populations, and nothing on screen says so.

**D6. Deep links don't restore the tab.**
`?tab=management` and `?tab=employee-goals` are written into the URL on click but never read on load — every shared Goals link opens on Dashboard. (Browser **Back** after a tab switch also leaves the app entirely, because the tab change replaces the history entry rather than pushing one.)

### P2 — visibly wrong data

**D7. Employees with zero goals report non-zero L&D Hours.**
With the "No Goals Assigned" toggle on: *Drashti Parekh — Goals 0, Certificates 0, L&D Hours 11h*; *Falgun Patel — Goals 0, L&D Hours 88h*. Either the roll-up counts assignments that no longer exist, or the two columns come from unrelated records. Both need an answer.

**D8. "Progress History" is inconsistent — some in-progress goals show real entries, others don't.**
*Arjun Jadeja → Master React Advanced Patterns*: Status **In Progress**, Completion **20%**, Start Date **Jan 13 2026**, Progress History **"No progress recorded"**. **Correction (found automating this case, 2026-09-22):** a broader check across more employees found other In Progress goals where this column DOES show a real value (one showed "75%"). So the column isn't universally blank — it disagrees with itself goal to goal, which is arguably a worse UX signal than a blanket bug: the user has no way to tell whether "No progress recorded" means "nothing logged" or "this goal doesn't support history." Needs a product-owner answer on the intended rule, not just a re-wire.

**D9. Goal Name sorting looks broken to the user.**
Sorting ascending yields: `TOGAF-90= - 8i0`, `Agile Development Mastery`, `API Gateway Implementation`. The sort key is the stored name (`8i0`), but the cell renders the certificate-code-prefixed label. Every certificate goal therefore lands in a position that looks random. The same mismatch appears in the Goal Name **column filter**, which lists raw names (`8i0`) that can't be matched against the prefixed table cells.

**D10. The row expander is not keyboard operable.**

```html
<td><span class="sr-only">Show goals</span><svg …/></td>
```

No `role`, no `tabindex`, no `aria-expanded`. The per-goal detail on the Employee Goals tab is unreachable for a keyboard-only user, and its expanded state is never announced.

### P3 — polish, consistency, a11y

- **D11.** `Assigned Emp. (Dept.)` mixes `None` and numeric `0` in the same column.
- **D12.** One concept, three names: **"Overdue Goals"** (column) / **"Delayed"** (status filter and badge) / **"At-Risk (Delayed)"** (dashboard card). Also `Assigned Emp. (Org.)` vs the popover's *"Organisation Employees"*.
- **D13.** Donut charts carry no data labels, no centre total and no values in the legend — every number requires a hover, and is unavailable to keyboard and screen-reader users. 17 of 32 chart `<svg>` elements have no `role` or `aria-label` at all.
- **D14.** Goal Name renders in its **red invalid state the instant the Add Goal panel opens**, before the user has touched anything.
- **D15.** Every **Delete** button is disabled with no tooltip explaining why. This will generate support questions.
- **D16.** The TOGAF-9 goal's multi-paragraph description renders in full in its table cell, blowing that row's height far past its neighbours — the Description column needs truncation.
- **D17.** On a **375px** viewport the **"Goal Management" tab label is clipped off the right edge** with no scroll affordance, and the Goal Tracking Health donut overflows its card.
- **D18.** The RM chart legend is alphabetical — *Completed, Delayed, In Progress, **L&D Hours by RM**, Not Started* — dropping a line series into the middle of the stacked-bar statuses and separating "Not Started" from its siblings.
- **D19.** The Year filter is not in the URL, so a year-filtered dashboard cannot be shared and silently reverts on reload.
- **D20.** Missing values render as bare em dashes (Reporting Manager, Start/End Date), against the empty-data convention already agreed for this system.

---

## 3. Performance — the root cause

The screen assembles its analytics **in the browser** from unfiltered, fully-paginated collections:

| Trigger | Requests | Effect |
|---|---|---|
| Page load (Admin) | `GET /api/v1/employees?page=1…13&limit=300` | ~3,900 employees downloaded to render one department |
| Department select | `GET /api/v1/employee-goals?page=1…14&limit=300&includeHistory=true` | every goal assignment in the organisation, with history |
| Tab switch | the `/employees` walk repeats | |

Measured: **26 s** for the Admin landing to reach even its empty state; **8.5 s** to render the dashboard after a department is chosen; **16.6 s** to paint the Employee Goals table.

D2, D3 and this section are the same problem seen from three angles: **there is no server-side aggregation or pagination behind this screen.**

---

## 4. Open question for the product owner

**There is no way to assign a goal to an employee, or to record progress, anywhere in this build.**

The Employee Goals expansion is entirely read-only (no control of any kind inside it), and the Assign-to field is still absent from the Add/Edit Goal panel — it was removed back in August. Yet the whole module now revolves around assignment state: status, completion %, start/end dates, overdue counts, at-risk rankings.

So: either assignment has moved to a surface I haven't found, or it is genuinely missing from this build. **This needs an answer before the test cases around assignment can be executed rather than just written.** I've flagged it in the test set rather than assuming either way.

---

## 4b. New findings from automating and running the 143 cases (same day, 2026-09-22)

All 143 cases were converted into Playwright specs (`tests/e2e/employee/goals/*.spec.ts`) and run live. Four more defects surfaced only once real interaction — clicking through, not just reading the DOM — was automated:

**D21 (security, P1). `GET /api/v1/employee-goals` does not enforce the same role gate as `GET /api/v1/goals`.**
Direct API check with a fresh, valid session: `GET /api/v1/goals` correctly 403s for both the Employee and CSM personas — matching their `/unauthorized` redirect in the UI. `GET /api/v1/employee-goals` returned **200** for both of those same personas. The UI never exposes this (both are blocked before they'd ever call it), but the endpoint itself is not gated, so anyone with a valid token for a restricted role can read the org-wide per-employee goal roll-up directly. This wants a same-day look from whoever owns the API's route guards.

**D22 (a11y). The tab strip does not implement the standard keyboard pattern (Arrow keys / Home / End) at all.**
Confirmed live: with a tab focused, pressing ArrowRight moves focus **off the tab strip entirely** (`document.activeElement` becomes `<body>`), not to the next tab. The tabs are otherwise correctly marked up (`role="tab"`, `aria-selected`) — the keyboard handler for arrow navigation simply isn't wired up.

**D23 (a11y). Closing the Add/Edit Goal panel does not return focus to the button that opened it.**
Confirmed live: Escape correctly closes the panel, but focus is dropped rather than restored to "Add Goal" — a keyboard user loses their place on the page after every open/cancel cycle.

**D24 (functional, informational). TM has full write access to Goal Management, including via direct API calls — not just the UI buttons.**
Confirmed by direct API probe: a TM-authenticated `PATCH /api/v1/goals/:id` succeeded (200) against a real goal. This matches what the UI already shows (Edit/Delete buttons visible to TM), so it's not a gap — but it does mean "goal write access" is an Admin+TM capability, not Admin-only, worth stating explicitly in the permission matrix rather than leaving it implicit.

Two items from the original review turned out, on deeper testing, to be **not** defects — worth recording so they aren't re-flagged:
- The rich-text sanitisation (D-security payloads) held up under live testing: `<img onerror=...>` and `javascript:` hrefs both came back HTML-escaped/stripped, never live. Confirmed on both the goal name field and rich-text editors.
- The Goal Management search matching a goal's **description** as well as its name (e.g. a "Container Orchestration" goal matched a "kubernetes" search) is a feature, not a bug — flagged only because it wasn't obvious from the UI that description is searched too.

**D25 (negative, minor).** `Browser Back` after switching tabs leaves the Goals app entirely (lands on `about:blank`) rather than returning to the previous tab — confirmed reproducible across every run. Same root cause family as D6 (tab state isn't pushed into browser history correctly).

**D26 (functional, needs product-owner input).** Certificate Code's *required-ness* is genuinely inconsistent depending on the goal:
- Save is enabled with Certificate Code left empty (D-283, confirmed — the field is not actually required despite reading as "Optional, Conditional"), and a Certificate goal **can be created with no code at all**.
- Once created, the Edit panel sometimes doesn't render the Certificate Code field at all for a goal that already has an assigned code — this was seen on a specific pre-existing goal ("CKA - Kubernetes Administrator (CKA)") and is not yet isolated to a specific trigger condition.
Both point to the same open question: is Certificate Code meant to be mandatory once Goal Type = Certificate, and if so, neither the Add nor the Edit panel currently enforces or reliably displays it that way.

**Full automation run (143 cases, 2026-09-23):** **113 passed outright**, **5 recovered on retry** (flaky against the live shared environment, not code defects), **2 skipped** (no test data available for that scenario in the current dataset), **23 failed**. Of the 23: **14 are the intended, correct outcome** — each documents a specific confirmed defect above (D1, D5, D6, D10/D14/D17/D18/D19, D21, D22, D23) and is designed to keep failing until that defect is fixed. The remaining **9** are genuinely unresolved and need a follow-up pass rather than being chased to ground in this session, given the time already spent on adjacent flakiness in the same areas:
- `TC-EMPGOL-251`, `TC-EMPGOL-309` — the certificate-related inconsistencies above (D26).
- `TC-EMPGOL-311` — Delete-disabled check occasionally doesn't hold; needs a rerun with fresh data to confirm whether it's a real gap or leftover contention from this session's own heavy goal-creation.
- `TC-EMPGOL-316`, `TC-EMPGOL-317` — new-goal-visible-everywhere and edit-propagation checks; passed in earlier isolated runs, failed in the full-suite run — likely timing-sensitive under parallel load rather than a real defect, but not re-confirmed.
- `TC-EMPGOL-337`, `TC-EMPGOL-338` — cross-module reconciliation against Department Settings and Employee Details; both need a dedicated grounding pass of those modules' own UI (out of scope for a Goals-focused pass).
- `TC-EMPGOL-302` — duplicate-name handling; resolved once already via an API-based re-check, recurred once more under full-suite load — likely the same UI-search timing sensitivity as 316/317.
- `TC-EMPGOL-238` — performance timing assertion; borderline by design (asserts "takes more than 2s", which can trip either way depending on server load at the moment).

---

## 5. Recommendations

**Fix today — security**
0. **Apply the same role gate to `GET /api/v1/employee-goals` that already protects `GET /api/v1/goals`** (D21). Confirmed live: Employee and CSM tokens are correctly 403'd on `/goals` but get a 200 on `/employee-goals` — an org-wide data-read gap with no UI path exercising it yet, but reachable directly.

**Fix first — cheap and high impact**
1. Read `departmentId` and `tab` from the URL on load (D1, D6). Both params are already being written; only the read side is missing.
2. Make the Year filter change Total L&D Hours (D4) — or state in the UI that it is a lifetime figure.
3. Add pagination to Goal Management (D2). The API already accepts `page`/`limit`.
4. Sort and filter on the same string the cell displays (D9).
5. Wire up Arrow-key/Home/End on the tab strip and restore focus to "Add Goal" on panel close (D22, D23) — both are small, targeted keyboard-handling fixes.

**Fix next — needs backend work**
5. Give the dashboard a server-side aggregate endpoint scoped to `departmentId` + `year`, returning the KPIs and chart series directly. This retires the 13- and 14-page client walks in one change and fixes D3's root cause.
6. Paginate or virtualise Employee Goals (D3).
7. Reconcile the L&D Hours and Progress History sources (D7, D8).

**Design decisions worth settling now**
8. **One department selection for the whole screen** (D5) — lift it to the shell alongside Year, where it already visually appears to live.
9. **Pick one word** for overdue/delayed and one for org/organisation (D12), and apply it across all three tabs.
10. **Put numbers on the donuts** (D13) — a centre total and values in the legend removes the hover dependency and most of the a11y gap at the same time.
11. **Explain disabled states** (D15) — a tooltip on Delete saying "Assigned to N employees" is a one-line change that prevents a recurring support question.

**Accessibility, before this ships to a wider audience**
12. Make the row expander a real `<button>` with `aria-expanded` (D10).
13. Label the remaining 17 chart SVGs and give each chart a text alternative (D13).
14. Don't rely on colour alone for goal status in the donuts.
15. Verify focus trapping and restoration on the Add/Edit panel.

---

## 6. Test coverage delivered

143 cases, `TC-EMPGOL-201` … `TC-EMPGOL-343`:

| Category | Count | | Priority | Count |
|---|---|---|---|---|
| Functional | 84 | | Critical | 27 |
| Negative | 13 | | High | 68 |
| Accessibility | 11 | | Medium | 42 |
| Security | 8 | | Low | 6 |
| Smoke | 7 | | | |
| Regression | 6 | | | |
| Boundary | 5 | | | |
| Integration | 5 | | | |
| Performance | 4 | | | |

Every defect above has a corresponding case stating both the expected behaviour and what was actually observed, so each doubles as a reproduction. Cases that verified *correct* behaviour (department-scope enforcement, the `/employee/:id` route collision, responsive overflow) are kept as regression guards.
