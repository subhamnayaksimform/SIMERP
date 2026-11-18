# Requirement Plan — Merge Utilization Priority into the Employee module

| | |
|---|---|
| **Requirement ID** | REQ-EMPDET-UTLMERGE-001 |
| **Feature** | Utilization Priority inside Employee Details |
| **Module / code** | Employee ▸ Employee Details (`EMPDET`), absorbing Utilization Priority (`UTLPRI`) |
| **Route** | `/employee` (Current Employee tab) |
| **Retires** | `/utilization-priority` |
| **Date** | 2026-09-14 |
| **Status** | Draft — for product review |
| **Sources** | FRD "Utilization Priority" v0.4; `reports/knowledge-base/modules/utilization-priority/utilization-priority.json`; `reports/knowledge-base/modules/employee/employee-details.json`; live DOM captures `dom-snapshots/UTLPRI.json` (2026-09-04, PMO session, SimERP 5.1.0) and `dom-snapshots/EMPDET.json` (2026-08-18, Admin session); `tests/fixtures/utilization-scoring.ts` |

---

## 1. Context and goal

Utilization Priority is today a standalone top-level screen at `/utilization-priority`. It ranks every **current** employee by how urgently they should be (re)utilized, combining a system-computed tier (`UP (System)`: P1·Red / P2·Amber / P3·Green, driven by a 0–100 Value Score) with a manager-set `UP (Manual)` override.

It runs over exactly the same population as the Employee Details grid — 3,654 current employees — and over the same department, skills and allocation data. Its own scoring input, **Overall Rating**, already lives in the Employee module's advanced filter. Maintaining two grids over one population means two filter models, two sort models, two pagination models, and steady drift between them.

**Goal:** fold Utilization Priority into the Employee Details grid so there is a single employee list, and disable the standalone screen.

### Decisions already taken

| Decision | Choice |
|---|---|
| What is added to the grid | Exactly **two** new columns — `Utilization Priority` and `Value Score`. Nothing else. |
| How the score is explained | An **info button** on the `Value Score` column opens a popover showing the full calculation. |
| Default visibility | Both columns **hidden by default**, surfaced through a saved **"Utilization Priority" view**. No new tab. |
| Standalone screen | `/utilization-priority` disabled, sidebar entry removed. |
| Access control | Unchanged from UP today — **TM, EM, PMO, Admin** only. |

### Why this shape works

The Employee grid already ships the exact mechanism required. `Table options` opens a Column Visibility dialog with one `role="switch"` per column plus a drag-to-reorder handle, and **`Cohort` and `Employee Origin` already ship hidden by default** through it. The two new columns slot into that existing pattern — no new component is needed.

The Employee grid is already ten columns wide. Adding two is absorbable; adding the standalone screen's full eight would not be. Everything the score is built from is reachable through the info popover instead of costing a column.

---

## 2. Scope

### In scope

- Two new columns on the Current Employee grid, hidden by default.
- A calculation popover behind an info button on `Value Score`.
- A saved **"Utilization Priority"** view that switches both columns on together with the KPI tiles and the correct default sort.
- The four UP KPI tiles as one-click filters.
- Relocation of the `UP (Manual)` override into the calculation popover.
- A new **Utilization Priority** section in the Advanced filter panel, plus per-column quick filters.
- URL parameter merge.
- Role gating of the entire UP surface.
- Decommissioning `/utilization-priority` and its sidebar entry.

### Out of scope

- **The scoring algorithm itself.** Weights, rating scale, seniority banding, tier cut-offs and the weekly recompute job are unchanged. This is a relocation, not a re-specification.
- Past Employee, Skills and Goals tabs.
- The six known FRD gaps listed in §9.3 — they are carried forward unchanged, not closed by this work.

---

## 3. Column mapping — the merge adds 2 columns

UP's eight columns reduce to two genuinely new ones. Four already exist on the Employee grid under different names, and two become inputs inside the calculation popover rather than columns of their own.

| UP column | Becomes | Note |
|---|---|---|
| Employee Name | `Name` | **Reuse.** Already packs avatar + name link + designation + experience + department chip, and already carries the `NP` notice-period badge overlay. |
| Department | `Department` | **Reuse.** Identical values (e.g. `FRONT END`). |
| Skills / Tech | `Skills` | **Reuse.** Both render skill badges with a `+N` overflow control. |
| Allocation | `Projects` | **Reuse.** Employee's is richer — it adds the PR-reviewer count and the `Project actions` kebab. |
| UP (System) | **`Utilization Priority`** | **New column.** Renamed to the feature's own name now that it no longer sits beside a "manual" sibling column. |
| Value Score | **`Value Score`** | **New column**, carrying the info button. |
| Availability | — | **Not a column.** Becomes the first line of the calculation popover, labelled `Effective Availability`. |
| UP (Manual) | — | **Not a column.** The override control moves into the calculation popover — see FR-4 and OI-5. |

### 3.1 Why Effective Availability is not a column

The Employee grid already has an `Availability %` column, and it is **scoped by the page's `Select time range` control** (default `Last 15 days`). UP's `Availability` is a **fixed pre-calculated Effective Availability** that FR-4 / BR-5 require to stay untouched when that selector changes.

Two columns both called "Availability", behaving differently, would be a defect on day one. Keeping the fixed figure inside the calculation popover — where it is labelled `Effective Availability` and sits next to the note that it does not track the time range — removes the collision entirely rather than managing it with naming alone.

---

## 4. Functional requirements

### FR-1 — Two new columns registered in Table options

Both columns are added to the Column Visibility list in `Table options`, each with its own `role="switch"`, each **off by default**, each drag-reorderable, exactly as `Cohort` and `Employee Origin` behave today.

| Column | Header | Header controls | Cell content |
|---|---|---|---|
| Utilization Priority | `Utilization Priority` | sort, `Filter by Utilization Priority` | `P1 · Red` / `P2 · Amber` / `P3 · Green` badge, plus an override marker when FR-4 applies |
| Value Score | `Value Score` | info icon, `Filter by Value Score` — **no sort control** (see OI-2) | number to 2 dp, e.g. `91.40`, followed by the per-row info button (FR-3) |

Default position when the view switches them on: immediately after `Department`.

### FR-2 — The "Utilization Priority" saved view

A **View** selector is added to the grid toolbar, next to `Filter` and `Table options`, with two entries: `Default` and `Utilization Priority`.

Selecting `Utilization Priority` applies, in one action:
1. Both new columns become visible, positioned after `Department`, in the order `Utilization Priority`, `Value Score`.
2. The four KPI tiles (FR-5) appear above the grid.
3. Sort is set to `Value Score` ascending (see OI-2).
4. The view is available on the **Current Employee tab only**.

Selecting `Default` reverses all four. The chosen view is reflected in the URL as `view=utilization-priority` and is part of the per-tab state (FR-9).

A user may still toggle either column individually through `Table options` without selecting the view; doing so does not bring in the KPI tiles, and does not change the sort.

### FR-3 — The calculation popover

Each `Value Score` cell carries an info button, accessible name `How this score is calculated for {Name}`. The column header carries the same button with the general explanation.

Activating it opens a popover — `role="dialog"`, dismissible by `Esc`, by clicking outside, and by its own close control — containing:

**a. The inputs, each with its own value**

| Input | Shown as | Source |
|---|---|---|
| Effective Availability | `92.40%` | Fixed pre-calculated field. Carries a note that it does **not** change with the page's time-range selector. |
| Overall Rating | `8.4 / 10` | Employee ▸ Overall Rating. Renders `Not rated` when absent. |
| Designation → Seniority | `LE → 100` | Banded per BR-3. Renders `No designation → 0` when absent. |

**b. The weighted breakdown**, one line per term, showing weight, input and contribution:

```
0.50 × 92.40  (Effective Availability)  = 46.20
0.30 × 84.00  (Rating, normalised)      = 25.20
0.20 × 100    (Seniority)               = 20.00
                                  Total = 91.40
```

**c. The tier decision** — the threshold that was applied, stated plainly: `91.40 ≥ 70 → P1 · Red`.

**d. A missing-input notice** where either input is absent: *"This score was calculated without a rating. A missing rating counts as 0, it is not substituted with an average."* This closes long-standing gap **TC-UTLPRI-041** (see §9.3).

**e. The manual override control** — see FR-4.

**f. Provenance** — the date the score was last recomputed, e.g. `Last recomputed: Sat 12 Sep 2026, 00:00 IST`.

The popover is read-only apart from the override control. Its values must equal the grid's to the same precision — no independent recomputation on the client.

### FR-4 — Manual override, relocated

The `UP (Manual)` override survives the merge but is no longer a column. It lives in the calculation popover as a labelled control, **Manual priority**, with exactly four options in order: `Not set`, `P1 · Red`, `P2 · Amber`, `P3 · Green`.

- On change the value persists immediately, a `Manual priority updated.` toast confirms, and it survives reload.
- When an override is set, the `Utilization Priority` cell shows the **overridden** tier with a visible marker distinguishing it from a system tier, and its tooltip names both (`Manual: P1 · Red — system: P2 · Amber`).
- The override never alters `Value Score` or the system tier (BR-7). The popover continues to show the system calculation unchanged beneath it.
- Writable only by the roles in §5.

⚠️ Relocating a shipped control is a behaviour change for PMO users who set priorities in bulk today — see **OI-5**.

### FR-5 — KPI tiles

Four tiles render above the grid when the UP view is active, each a one-click filter, each showing a live count:

| Tile | Filters to | Tooltip |
|---|---|---|
| `UP (System) P1` | `Utilization Priority = P1 · Red` | — |
| `UP (System) P2` | `Utilization Priority = P2 · Amber` | — |
| `UP (System) P3` | `Utilization Priority = P3 · Green` | — |
| `Under-Utilized` | `Effective Availability ≥ 30%` | `Counts everyone with 30% or more of their capacity unclaimed. Measured on availability alone, not on the P1/P2/P3 tier.` |

Counts reflect the **current result set**, not the whole population — so they recompute as search, quick filters and advanced filters are applied, and all drop to `0` on an empty grid. This matches the live behaviour today.

### FR-6 — Advanced filter section

A new **Utilization Priority** accordion section is added to the Advanced filter panel, after the existing 20 sections, containing:

- `Utilization Priority` — checkbox list: P1 · Red, P2 · Amber, P3 · Green
- `Manual priority` — checkbox list: Not set, P1 · Red, P2 · Amber, P3 · Green
- `Effective Availability` — min/max range slider, 0–100
- `Value Score` — min/max range slider, 0–100
- `Under-utilized only` — single checkbox

Effective Availability and manual priority remain filterable even though neither is a column — the advanced panel already filters on non-column fields such as Designation, Experience and Stacks.

The section obeys the existing panel contract: the live `Showing N results` preview updates as criteria change, `Save` applies, `Cancel` reverts to the last-applied state.

### FR-7 — Per-column quick filters

Each new column's `Filter by {Column}` popover reuses the shared component already used by Department, RM and Projects: `role="dialog"` titled after the column, `Close`, a flat `role="checkbox"` list (Utilization Priority) or a range slider (Value Score), and a `Clear` / `Save` footer. Selections apply only on the popover's own `Save`.

Applied filters surface as chips with a `Clear filter` control, consistent with today.

### FR-8 — URL parameters

UP's parameters merge into the Employee grid's existing query string:

```
/employee
  ?view=utilization-priority
  &upSystemTiers=P1_RED,P2_AMBER
  &upManualTiers=NOT_SET
  &onlyUnderUtilized=true
  &effAvailMin=30&effAvailMax=100
  &valueScoreMin=40&valueScoreMax=100
  &sortBy=valueScore&sortOrder=asc
  &search=...
```

### FR-9 — State scoping

Employee BR-2 requires search, filter, sort and pagination state to be **independent per tab**. UP state follows the same rule: switching to Past Employee, Skills or Goals and back must not carry UP filters across, and the UP view is not offered on those tabs.

### FR-10 — Decommissioning the standalone screen

- The `Utilization Priority` sidebar entry is removed for all roles.
- `/utilization-priority` no longer renders the screen. It serves a permanent redirect to `/employee?view=utilization-priority`, translating any UP query parameters it was given, for **one release** so existing bookmarks and shared deep links do not dead-end. It is then removed entirely.
- See OI-4 if a hard disable with no redirect is preferred.

---

## 5. Access control

### 5.1 Role matrix

| Role | Employee module | UP view / columns / tiles | Read UP values | Set manual priority |
|---|---|---|---|---|
| Admin | Full | Yes | Yes | Yes |
| PMO | Full | Yes | Yes | Yes |
| TM | Full | Yes | Yes | Yes |
| EM | Full | Yes | Yes | Yes |
| PM | Unchanged | **No** | No | No |
| CSM | Unchanged | **No** | No | No |
| Employee | Unchanged | **No** | No | No |
| Anonymous | Redirect to login | — | — | — |

### 5.2 How "same RBAC as Utilization Priority" is enforced here

⚠️ **Explicit assumption, needs product sign-off.** The standalone screen redirects unauthorized roles to `/unauthorized`. That cannot apply after the merge — PM, CSM and Employee legitimately use the Employee module, and redirecting the whole page would break it for them.

The equivalent enforcement is **per-surface, not per-route**:

1. For roles without UP access, the View selector's `Utilization Priority` entry, both columns, their `Table options` switches, the KPI tiles, the calculation popover and the manual priority control are **absent from the DOM** — not merely hidden or disabled.
2. The employee-list API **omits the UP fields entirely** from the payload for those roles.
3. A `PATCH`/`PUT` of the manual priority from an unauthorized role returns **403**.
4. A deep link carrying UP query parameters has those parameters **stripped and ignored** for unauthorized roles; the page loads normally as the Employee grid. It must not redirect to `/unauthorized`, and must not surface UP values through the URL.
5. UP filter parameters must not act as an oracle — an unauthorized role must not be able to infer tier membership by observing result counts change.

---

## 6. Business rules

Carried from the live-verified record in `reports/knowledge-base/modules/utilization-priority/utilization-priority.json` and `tests/fixtures/utilization-scoring.ts`. **None of these change** — they are restated so the merged implementation is held to the same contract, and because FR-3 now puts the formula in front of users.

**BR-1 — Value Score formula**
```
Value Score = 0.50 × Availability + 0.30 × NormalisedRating + 0.20 × Seniority
```
Verified against 785 distinct live employees on 2026-09-04: 781 fit exactly.

**BR-2 — Rating scale.** Rating is **1–10**, not the 1–5 the FRD assumes, sourced from Employee ▸ Advanced filter ▸ Overall Rating (slider `aria-valuemin=1`, `aria-valuemax=10`, step 0.1). `NormalisedRating = rating × 10`, so the rating term collapses to `3 × rating`.

**BR-3 — Seniority banding.**

| Band | Designations | Value |
|---|---|---|
| None | no designation (`N/A`) | 0 |
| Base | SE, DE, DOE, MLE, QAE, SA, CSA, AISE, IoTE, UIXD | 33 |
| Senior / manager | any `Sr. X`, plus PM, CSM, DOL | 67 |
| Lead | LE | 100 |

This generalises FRD BR-9, which scopes seniority to only three designations.

**BR-4 — Tier thresholds.** `score ≥ 70 → P1 · Red`; `40 ≤ score < 70 → P2 · Amber`; `score < 40 → P3 · Green`. Both cut-offs inclusive — the live P1 floor is exactly 70.00 and the P2 floor exactly 40.00.

**BR-5 — Under-utilized flag** is raised at exactly `Effective Availability ≥ 30%`.

**BR-6 — Tier partition.** `P1 + P2 + P3 == total result count`, at every filter state.

**BR-7 — Manual never affects System.** Setting the manual priority must never alter the system tier or the `Value Score`, and the calculation popover must keep showing the unchanged system calculation.

**BR-8 — Missing inputs contribute zero.** A null rating and a null designation each contribute **0** — neither is substituted with a neutral midpoint. A person with neither scores exactly `0.50 × Effective Availability`. 193 of 3,654 employees have no rating at all.

**BR-9 — NEW, introduced by this merge.** Changing the page's `Select time range` control must move `Log Hours` and `Availability %`, and must leave `Value Score`, `Utilization Priority` and the popover's `Effective Availability` **completely unchanged**.

**BR-10 — NEW, introduced by this merge.** The UP columns and view apply to **current employees only**. They must never appear on the Past Employee tab, and archived employees must never appear in a UP-filtered result set.

**BR-11 — NEW, introduced by this merge.** The calculation popover must render the values the server returned, not recompute them client-side. Every line in the breakdown must tie out to the `Value Score` in the same row, to 2 dp.

**BR-12 — Recompute cadence unchanged.** `Utilization Priority` is recomputed weekly, Saturday 00:00 IST. The merge must not alter the job, its schedule, or its inputs.

---

## 7. Data and API

- The UP fields (`utilizationPriority`, `valueScore`, `manualPriority`, `effectiveAvailability`, plus the popover's `ratingUsed`, `seniorityUsed` and `lastRecomputedAt`) are folded into the **existing employee-list response** rather than fetched from a second endpoint. One request, one pagination cursor, one total count.
- The breakdown inputs ship with the row, so opening the popover costs no extra request. If payload size makes that unattractive, a per-employee breakdown endpoint is acceptable — but BR-11 still applies: the client never recomputes.
- Fields are **omitted** — not nulled — for roles without UP access (§5.2).
- Server-side filtering and sorting must support the new fields so they compose correctly with existing Employee filters and with pagination. Employee BR-8 applies: grid row count, result-count badge and API total must always match.
- All UP fields are read-only except `manualPriority`.
- No change to the weekly recompute job.
- Employee `performanceTargets` continue to apply with the UP columns on: list load < 2s, search < 1s, filter < 2s, sort < 2s, pagination < 2s, open filter panel < 1s. The calculation popover should open in < 300ms.

---

## 8. Acceptance criteria

Written Given/When/Then so they can be consumed directly by `@test-case-generator`.

**AC-1 — Columns hidden by default.** Given a PMO user opens `/employee` with no saved view, when the Current Employee grid renders, then neither `Utilization Priority` nor `Value Score` is displayed, and both appear as off switches in `Table options`.

**AC-2 — View applies everything at once.** Given a PMO user on the Current Employee tab, when they select the `Utilization Priority` view, then both columns appear after `Department`, the four KPI tiles appear, the sort becomes Value Score ascending, and the URL gains `view=utilization-priority`.

**AC-3 — Exactly two columns are added.** Given the UP view is active, when the column headers are read, then the grid contains exactly two headers that were not present in the Default view, and neither `UP (Manual)` nor `Effective Availability` is among them.

**AC-4 — Tier badges match the formula.** Given the UP view is active, when any row is read, then its `Value Score` equals `0.5 × EffectiveAvailability + 3 × Rating + 0.2 × Seniority` to 2 dp, and its `Utilization Priority` badge matches BR-4 applied to that score.

**AC-5 — The popover ties out.** Given a PMO user opens the calculation popover on any row, then the three contribution lines sum to the `Value Score` shown in that row to 2 dp, and the stated threshold decision matches the badge in that row.

**AC-6 — Missing rating is explained.** Given an employee with no rating and no designation, when their calculation popover is opened, then `Overall Rating` reads `Not rated`, `Designation → Seniority` reads `No designation → 0`, the missing-input notice is shown, and the total equals `0.50 × Effective Availability` exactly.

**AC-7 — Tiles partition the result set.** Given any combination of search and filters, when the counts are read, then `P1 + P2 + P3` equals the value in `Showing 1 - N of M results`.

**AC-8 — Tiles track filters.** Given a search matching nobody, when the grid empties, then all four tiles read `0` and the empty state is shown — no stale counts.

**AC-9 — Time range does not move the score.** Given the UP view is active, when `Select time range` is changed from `Last 15 days` to `All time`, then `Log Hours` and `Availability %` change, and `Value Score`, `Utilization Priority` and the popover's `Effective Availability` are byte-identical for every row.

**AC-10 — Override is isolated.** Given a TM sets the manual priority on a row to `P1 · Red`, when the toast `Manual priority updated.` appears, then that row's `Value Score` is unchanged, the popover still shows the original system calculation and system tier, the `Utilization Priority` cell shows the override with its marker, and the value survives a page reload.

**AC-11 — Under-utilized boundary.** Given an employee whose `Effective Availability` is exactly `30.00%`, when the `Under-Utilized` tile is clicked, then that employee is included.

**AC-12 — Tier boundary.** Given employees scoring exactly `70.00` and exactly `40.00`, when tiers are read, then they are `P1 · Red` and `P2 · Amber` respectively.

**AC-13 — State is per tab.** Given a PMO user has the UP view active with tier filters applied, when they switch to Past Employee and back to Current Employee, then no UP filter has leaked to the Past tab and the Current tab's own state is intact.

**AC-14 — UP view unavailable on other tabs.** Given a PMO user is on the Past Employee, Skills or Goals tab, when the View selector is opened, then `Utilization Priority` is not offered.

**AC-15 — Unauthorized role sees no UP surface.** Given a PM, CSM or Employee user opens `/employee`, then the View selector offers no `Utilization Priority` entry, `Table options` lists neither new column, no KPI tiles render, no calculation popover is reachable, and the API response contains no UP fields. The rest of the Employee grid is unchanged.

**AC-16 — Unauthorized deep link.** Given an Employee-role user opens `/employee?view=utilization-priority&upSystemTiers=P1_RED`, then the page loads as the normal Employee grid with those parameters stripped, no UP data is exposed, and the user is **not** redirected to `/unauthorized`.

**AC-17 — Unauthorized write blocked.** Given a PM user issues a direct `PATCH` setting `manualPriority` on any employee, then the API returns **403** and no value is persisted.

**AC-18 — Old route redirects.** Given any authorized user opens `/utilization-priority?upSystemTiers=P1_RED`, then they are permanently redirected to `/employee?view=utilization-priority&upSystemTiers=P1_RED` with the filter applied.

**AC-19 — Sidebar entry gone.** Given any role, when the sidebar renders, then no `Utilization Priority` nav item is present in the DOM.

**AC-20 — Popover is keyboard operable.** Given a keyboard-only user has focused the info button, when they activate it, then focus moves into the popover, `Esc` closes it and returns focus to the button, and every value is exposed to assistive technology.

---

## 9. Open items and risks

### 9.1 Needs a ruling — carried forward from the standalone screen

**OI-1 — Filter persistence conflicts with deep linking.** UP's filter state is currently session-sticky and **stored state wins over a deep link**, so a shared link into an already-filtered session is silently ignored. The Employee grid has no such behaviour.
*Recommendation:* invert it — the URL is the source of truth; sticky state applies only when the URL carries no UP parameters. This makes AC-18 meaningful and makes shared links work. Needs product confirmation, as it is a deliberate change from today.

**OI-2 — Value Score sort.** The Value Score column is intentionally **not sortable**, and the list opens on the P3 cohort ordered by ascending Value Score. **Both were reviewed and accepted as intended by the product owner on 2026-09-04, overriding FR-14 / BR-12 / §12.B. Do not re-raise either as a defect.**
*Recommendation:* keep the column non-sortable, and have the view carry `sortBy=valueScore&sortOrder=asc` as its default so the landing order is preserved. Confirm this still reads correctly inside a grid where most neighbouring columns *are* sortable.

**OI-3 — TM / EM data scope.** UP grants TM and EM access to the screen, but whether they see the **whole population** or only their own team is unconfirmed. The Employee grid, by contrast, scopes RM data to the user's own department and reporting chain. These two rules conflict once the grids are one. A ruling is required before implementation.

### 9.2 Decision points introduced by this requirement

**OI-4 — Hard disable vs. redirect.** FR-10 specifies a one-release redirect so bookmarks survive. If a hard disable is preferred, `/utilization-priority` should serve the in-app 404 from day one — but every saved link and every reference in existing documentation then dead-ends with no signpost. The redirect is recommended.

**OI-5 — Cost of relocating the manual override.** Today a PMO user can set priorities straight from the grid, one dropdown per row. After the merge that becomes open popover → set → close, per person. For anyone triaging a long list this is materially slower.
*Options:* (a) accept it — the override is set rarely, and the popover gives the reviewer the calculation in front of them at the moment they overrule it; (b) add a compact override affordance to the `Utilization Priority` cell itself without making it a separate column; (c) add bulk-set via row selection in a later release. **Needs product input — (a) is assumed in this draft.**

### 9.3 Known FRD gaps

| ID | Gap | Status after this merge |
|---|---|---|
| TC-UTLPRI-041 | A row scored without a rating must say so. | **Closed by FR-3(d)** — the popover states it explicitly. Re-test to confirm. |
| TC-UTLPRI-090 | §12.F show/hide columns control. | **Closed by FR-1** — the Employee grid's `Table options` supplies it. Re-verify rather than assume. |
| TC-UTLPRI-091 | §12.D saved filter presets (High Priority Free, Under-Utilized Only, Completely Free, Not Manually Reviewed, + up to 5 custom). | **Partially addressed** — FR-2's View selector is the foundation, but only one preset ships. |
| TC-UTLPRI-092 | §12.E.2 row-click detail side drawer. | **Partially addressed** — the Employee grid already opens a detail drawer on the name link, but it lacks the UP-specific content (`Raise Allocation Ticket`). |
| TC-UTLPRI-093 | FR-17 / OI-10 audit trail on the manual override — who set it and when. | **Still open.** FR-3(f) adds recompute provenance for the *system* score, not override attribution. |
| TC-UTLPRI-094 | §12.E.4 page size default 50 with a 25/50/100 selector. | **Still open.** Both grids are fixed at 100 with no selector. |

Two further items remain manual-verification only: **TC-UTLPRI-095** (weekly Saturday 00:00 IST recompute) and **TC-UTLPRI-096** (Effective Availability inputs — two-week recent-allocation window, logs-utilization add-back, maternity-leave and notice-period adjustments).

### 9.4 Risks

| Risk | Impact | Mitigation |
|---|---|---|
| **Popover becomes the only path to key data** | Effective Availability and the override are now one click deeper for every user. | OI-5 puts the trade-off in front of product before build. Advanced-filter access to both (FR-6) means bulk questions never need the popover. |
| **Breakdown drifts from the score** | A client-side recomputation that rounds differently would show a breakdown that does not sum to the displayed score — worse than showing nothing. | BR-11 forbids client recomputation; AC-5 tests the tie-out. |
| **Server-side filter composition** | UP filters combined with Employee filters plus pagination is where Employee's historical count-mismatch bugs live — 4 of the 6 recorded historical bugs. | AC-7 and Employee BR-8 must be tested at every filter combination, not just in isolation. |
| **Silent RBAC leak** | UP values reaching PM/CSM/Employee through the API even when the UI hides them. | §5.2 requires field omission at the API, not UI hiding. AC-15 and AC-17 test it directly. |
| **Losing the accepted-as-intended rulings** | A new team re-raises the P3-ascending default or the non-sortable Value Score as bugs. | OI-2 states both explicitly. |

---

## 10. QA impact

- **Test IDs are preserved.** All 76 existing `TC-UTLPRI-*` cases keep their IDs — the feature identity survives the relocation. Navigation preconditions change (from "open `/utilization-priority`" to "open `/employee`, select the Utilization Priority view"), and the cases that read `Availability` or write `UP (Manual)` from the grid now read and write them through the popover.
- **Re-homing.** `tests/e2e/utilization-priority/` → `tests/e2e/employee/utilization-priority/`; `tests/page-objects/utilization-priority/utilization-priority.page.ts` → `tests/page-objects/employee/utilization-priority.page.ts`.
- **Page object composition.** `UtilizationPriorityPage` should compose `EmployeeDetailsPage` rather than duplicate grid plumbing — search, pagination, `Table options`, the advanced filter panel and the shared quick-filter dialog are all already modelled there. It gains one new abstraction: `openCalculation(rowIndex)` returning the breakdown as a structured object, which the calculation specs assert against instead of reading grid cells.
- **Conventions.** The `UTLPRI` row in `.claude/instructions/qa-conventions.md` moves from a top-level module to an Employee sub-feature.
- **Existing automation hazards still apply** and should carry into the merged page object: per-column sort/filter icons render at `opacity: 0` until the header is hovered; filter popovers are Radix poppers portalled to `<body>` with `role="dialog"`, applying only on their own `Save`; the `Manual priority updated.` toast auto-dismisses fast, so the wait must start before the write; there are no `data-testid` attributes on this surface, so every locator is role/label-based.
- **New coverage required** for AC-3 (exactly two columns), AC-5/AC-6/AC-20 (the popover), AC-9 (time-range isolation), AC-13/AC-14 (per-tab scoping), AC-15/AC-16/AC-17 (per-surface RBAC) and AC-18/AC-19 (decommissioning). None of these scenarios exist today — they only become possible once the grids are merged.
- **`tests/fixtures/utilization-scoring.ts` gains a second consumer.** Its `computeScoreFromRawRating`, `normaliseRating`, `seniorityFor` and `classifyTier` exports are exactly the breakdown the popover renders, so the popover specs assert against the same model the calculation specs already use — no second source of truth.
