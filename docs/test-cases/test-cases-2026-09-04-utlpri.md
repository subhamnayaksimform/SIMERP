# Utilization Priority — Test Cases

**Total test cases:** 76  
**Modules covered:** Utilization Priority  
**Source:** `reports/test-cases/cases-2026-09-04-UTLPRI.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 28 | 36.8% |
| regression | 11 | 14.5% |
| boundary | 8 | 10.5% |
| security | 8 | 10.5% |
| smoke | 8 | 10.5% |
| negative | 7 | 9.2% |
| integration | 6 | 7.9% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 41 | 53.9% |
| high | 19 | 25.0% |
| critical | 16 | 21.1% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 41 | 53.9% |
| high | 19 | 25.0% |
| critical | 16 | 21.1% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) | 76 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| requirement-grounded | 76 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 74 | 97.4% |
| No | 2 | 2.6% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 21 | 27.6% |
| @regression | 21 | 27.6% |
| @boundary | 13 | 17.1% |
| @security | 9 | 11.8% |
| @smoke | 8 | 10.5% |
| @negative | 7 | 9.2% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-UTLPRI-001](#tc-utlpri-001-screen-loads-at-utilization-priority-with-its-heading-and-pmo-description) | Screen loads at /utilization-priority with its heading and PMO description | Utilization Priority | smoke | critical |
| [TC-UTLPRI-002](#tc-utlpri-002-table-exposes-the-eight-documented-columns-in-frd-order) | Table exposes the eight documented columns in FRD order | Utilization Priority | smoke | critical |
| [TC-UTLPRI-003](#tc-utlpri-003-all-four-kpi-tiles-render-with-a-numeric-count) | All four KPI tiles render with a numeric count | Utilization Priority | smoke | critical |
| [TC-UTLPRI-004](#tc-utlpri-004-p1-p2-p3-tile-counts-reconcile-with-the-total-result-count) | P1 + P2 + P3 tile counts reconcile with the total result count | Utilization Priority | smoke | critical |
| [TC-UTLPRI-005](#tc-utlpri-005-fr-9-every-visible-row-is-classified-into-exactly-one-of-p1-p2-p3) | FR-9 — every visible row is classified into exactly one of P1/P2/P3 | Utilization Priority | smoke | critical |
| [TC-UTLPRI-006](#tc-utlpri-006-fr-12-every-row-exposes-a-up-manual-dropdown) | FR-12 — every row exposes a UP (Manual) dropdown | Utilization Priority | smoke | critical |
| [TC-UTLPRI-007](#tc-utlpri-007-results-summary-and-pagination-controls-render) | Results summary and pagination controls render | Utilization Priority | smoke | critical |
| [TC-UTLPRI-008](#tc-utlpri-008-sidebar-nav-exposes-utilization-priority-pointing-at-its-own-route) | Sidebar nav exposes Utilization Priority pointing at its own route | Utilization Priority | smoke | critical |
| [TC-UTLPRI-010](#tc-utlpri-010-search-by-employee-name-narrows-the-list-to-matching-people) | Search by employee name narrows the list to matching people | Utilization Priority | functional | medium |
| [TC-UTLPRI-011](#tc-utlpri-011-a-search-always-returns-a-subset-of-the-unfiltered-population) | A search always returns a subset of the unfiltered population | Utilization Priority | functional | medium |
| [TC-UTLPRI-012](#tc-utlpri-012-up-system-column-filter-restricts-the-grid-to-the-selected-tier) | UP (System) column filter restricts the grid to the selected tier | Utilization Priority | functional | medium |
| [TC-UTLPRI-013](#tc-utlpri-013-up-manual-filter-offers-exactly-the-four-documented-values) | UP (Manual) filter offers exactly the four documented values | Utilization Priority | functional | medium |
| [TC-UTLPRI-014](#tc-utlpri-014-br-13-filtering-up-manual-to-not-set-returns-only-unassigned-rows) | BR-13 — filtering UP (Manual) to "Not set" returns only unassigned rows | Utilization Priority | functional | medium |
| [TC-UTLPRI-015](#tc-utlpri-015-department-filter-restricts-the-grid-to-the-selected-department) | Department filter restricts the grid to the selected department | Utilization Priority | functional | medium |
| [TC-UTLPRI-016](#tc-utlpri-016-fr-15-up-system-and-up-manual-filters-combine-rather-than-replace-each-other) | FR-15 — UP (System) and UP (Manual) filters combine rather than replace each other | Utilization Priority | functional | medium |
| [TC-UTLPRI-017](#tc-utlpri-017-kpi-tile-acts-as-a-one-click-up-system-filter-matching-its-own-count) | KPI tile acts as a one-click UP (System) filter matching its own count | Utilization Priority | functional | medium |
| [TC-UTLPRI-018](#tc-utlpri-018-fr-10-the-under-utilized-tile-filters-to-people-at-or-above-the-30-threshold) | FR-10 — the Under-Utilized tile filters to people at or above the 30% threshold | Utilization Priority | functional | medium |
| [TC-UTLPRI-019](#tc-utlpri-019-sorting-by-availability-orders-the-column-and-toggles-direction-on-a-second-click) | Sorting by Availability orders the column and toggles direction on a second click | Utilization Priority | functional | medium |
| [TC-UTLPRI-020](#tc-utlpri-020-sorting-by-up-system-descending-brings-the-p1-cohort-to-the-top) | Sorting by UP (System) descending brings the P1 cohort to the top | Utilization Priority | functional | medium |
| [TC-UTLPRI-022](#tc-utlpri-022-br-10-the-up-manual-dropdown-offers-exactly-not-set-p1-p2-p3) | BR-10 — the UP (Manual) dropdown offers exactly Not set / P1 / P2 / P3 | Utilization Priority | functional | medium |
| [TC-UTLPRI-023](#tc-utlpri-023-fr-12-setting-up-manual-confirms-with-a-toast-and-survives-a-reload) | FR-12 — setting UP (Manual) confirms with a toast and survives a reload | Utilization Priority | functional | medium |
| [TC-UTLPRI-024](#tc-utlpri-024-up-manual-can-be-cleared-back-to-not-set-by-an-authorized-role) | UP (Manual) can be cleared back to "Not set" by an authorized role | Utilization Priority | functional | medium |
| [TC-UTLPRI-025](#tc-utlpri-025-pagination-advances-to-a-distinct-page-of-people-and-updates-the-summary) | Pagination advances to a distinct page of people and updates the summary | Utilization Priority | functional | medium |
| [TC-UTLPRI-026](#tc-utlpri-026-an-applied-filter-renders-a-chip-whose-clear-control-restores-the-full-list) | An applied filter renders a chip whose Clear control restores the full list | Utilization Priority | functional | medium |
| [TC-UTLPRI-030](#tc-utlpri-030-fr-8-5-2-value-score-0-50-availability-0-30-rating-0-20-seniority-for-every-ranked-row) | FR-8/§5.2 — Value Score = 0.50×Availability + 0.30×Rating + 0.20×Seniority for every ranked row | Utilization Priority | functional | medium |
| [TC-UTLPRI-031](#tc-utlpri-031-5-3-every-p1-red-row-scores-at-or-above-70) | §5.3 — every P1 · Red row scores at or above 70 | Utilization Priority | functional | medium |
| [TC-UTLPRI-032](#tc-utlpri-032-5-3-every-p2-amber-row-scores-in-40-70) | §5.3 — every P2 · Amber row scores in [40, 70) | Utilization Priority | functional | medium |
| [TC-UTLPRI-033](#tc-utlpri-033-5-3-every-p3-green-row-scores-below-40) | §5.3 — every P3 · Green row scores below 40 | Utilization Priority | functional | medium |
| [TC-UTLPRI-034](#tc-utlpri-034-fr-9-the-rendered-tier-always-matches-the-tier-its-own-value-score-implies) | FR-9 — the rendered tier always matches the tier its own Value Score implies | Utilization Priority | functional | medium |
| [TC-UTLPRI-035](#tc-utlpri-035-5-1-br-9-seniority-bands-are-33-67-100-and-no-other-value-fits-the-data) | §5.1/BR-9 — seniority bands are 33/67/100 and no other value fits the data | Utilization Priority | functional | medium |
| [TC-UTLPRI-036](#tc-utlpri-036-5-4-oi-3-the-under-utilized-flag-is-raised-at-exactly-30-availability-and-not-below) | §5.4/OI-3 — the under-utilized flag is raised at exactly 30% availability and not below | Utilization Priority | functional | medium |
| [TC-UTLPRI-037](#tc-utlpri-037-5-5-the-frd-worked-example-reproduces-exactly-and-a-live-lead-engineer-row-obeys-the-same-model) | §5.5 — the FRD worked example reproduces exactly, and a live Lead Engineer row obeys the same model | Utilization Priority | functional | medium |
| [TC-UTLPRI-038](#tc-utlpri-038-value-score-stays-inside-the-0-100-band-its-own-weights-allow) | Value Score stays inside the 0–100 band its own weights allow | Utilization Priority | functional | medium |
| [TC-UTLPRI-039](#tc-utlpri-039-rating-enters-the-score-only-in-0-1-scale-steps-equal-availability-peers-differ-by-whole-rating-steps) | Rating enters the score only in 0.1-scale steps — equal-availability peers differ by whole rating steps | Utilization Priority | functional | medium |
| [TC-UTLPRI-040](#tc-utlpri-040-a-missing-rating-and-a-missing-designation-each-contribute-0-to-the-score) | A missing rating and a missing designation each contribute 0 to the score | Utilization Priority | functional | high |
| [TC-UTLPRI-041](#tc-utlpri-041-fallback-a-rating-null-row-must-carry-an-information-icon-saying-the-rating-is-missing) | Fallback — a rating-null row must carry an information icon saying the rating is missing | Utilization Priority | functional | high |
| [TC-UTLPRI-045](#tc-utlpri-045-ratings-taken-from-the-employee-module-reproduce-the-value-score-on-utilization-priority) | Ratings taken from the Employee module reproduce the Value Score on Utilization Priority | Utilization Priority | integration | high |
| [TC-UTLPRI-046](#tc-utlpri-046-the-same-reconciliation-holds-at-the-bottom-of-the-rating-scale) | The same reconciliation holds at the bottom of the rating scale | Utilization Priority | integration | high |
| [TC-UTLPRI-047](#tc-utlpri-047-availability-and-designation-match-the-employee-module-for-the-same-person) | Availability and designation match the Employee module for the same person | Utilization Priority | integration | high |
| [TC-UTLPRI-048](#tc-utlpri-048-fr-4-br-5-effective-availability-is-fixed-and-ignores-the-employee-timesheet-duration-filter) | FR-4/BR-5 — Effective Availability is fixed and ignores the Employee timesheet-duration filter | Utilization Priority | integration | high |
| [TC-UTLPRI-049](#tc-utlpri-049-every-ranked-person-also-exists-in-the-employee-module) | Every ranked person also exists in the Employee module | Utilization Priority | integration | high |
| [TC-UTLPRI-050](#tc-utlpri-050-the-ranked-population-reconciles-with-the-employee-module-headcount) | The ranked population reconciles with the Employee module headcount | Utilization Priority | integration | high |
| [TC-UTLPRI-055](#tc-utlpri-055-br-11-a-pmo-user-can-view-the-ranking-and-edit-up) | BR-11 — a PMO user can view the ranking and edit UP | Utilization Priority | security | critical |
| [TC-UTLPRI-056](#tc-utlpri-056-br-11-a-team-manager-can-view-the-ranking-and-edit-up) | BR-11 — a Team Manager can view the ranking and edit UP | Utilization Priority | security | critical |
| [TC-UTLPRI-057](#tc-utlpri-057-br-11-an-engineering-manager-can-view-the-ranking-and-edit-up) | BR-11 — an Engineering Manager can view the ranking and edit UP | Utilization Priority | security | critical |
| [TC-UTLPRI-058](#tc-utlpri-058-br-11-a-base-employee-is-refused-the-utilization-priority-screen) | BR-11 — a base Employee is refused the Utilization Priority screen | Utilization Priority | security | critical |
| [TC-UTLPRI-059](#tc-utlpri-059-br-11-a-project-manager-is-refused-the-utilization-priority-screen) | BR-11 — a Project Manager is refused the Utilization Priority screen | Utilization Priority | security | critical |
| [TC-UTLPRI-060](#tc-utlpri-060-br-11-a-csm-is-refused-the-utilization-priority-screen) | BR-11 — a CSM is refused the Utilization Priority screen | Utilization Priority | security | critical |
| [TC-UTLPRI-061](#tc-utlpri-061-an-unauthorized-role-is-not-shown-the-utilization-priority-nav-entry-at-all) | An unauthorized role is not shown the Utilization Priority nav entry at all | Utilization Priority | security | critical |
| [TC-UTLPRI-062](#tc-utlpri-062-the-screen-is-not-reachable-without-an-authenticated-session) | The screen is not reachable without an authenticated session | Utilization Priority | security | critical |
| [TC-UTLPRI-065](#tc-utlpri-065-availability-is-always-rendered-within-0-100-inclusive) | Availability is always rendered within 0–100% inclusive | Utilization Priority | boundary | medium |
| [TC-UTLPRI-066](#tc-utlpri-066-value-score-is-always-rendered-within-0-100-inclusive) | Value Score is always rendered within 0–100 inclusive | Utilization Priority | boundary | medium |
| [TC-UTLPRI-067](#tc-utlpri-067-5-3-the-lowest-scoring-p1-sits-at-exactly-70-the-boundary-value) | §5.3 — the lowest-scoring P1 sits at exactly 70, the boundary value | Utilization Priority | boundary | medium |
| [TC-UTLPRI-068](#tc-utlpri-068-5-3-the-p2-cohort-spans-exactly-40-70-at-both-of-its-edges) | §5.3 — the P2 cohort spans exactly [40, 70) at both of its edges | Utilization Priority | boundary | medium |
| [TC-UTLPRI-069](#tc-utlpri-069-5-4-an-employee-at-exactly-the-30-threshold-is-included-in-the-under-utilized-cohort) | §5.4 — an employee at exactly the 30% threshold is included in the under-utilized cohort | Utilization Priority | boundary | medium |
| [TC-UTLPRI-070](#tc-utlpri-070-the-availability-filter-spans-the-full-0-100-range) | The Availability filter spans the full 0–100 range | Utilization Priority | boundary | medium |
| [TC-UTLPRI-071](#tc-utlpri-071-the-value-score-filter-spans-the-documented-0-100-composite-range) | The Value Score filter spans the documented 0–100 composite range | Utilization Priority | boundary | medium |
| [TC-UTLPRI-072](#tc-utlpri-072-pagination-disables-previous-on-the-first-page-and-next-on-the-last) | Pagination disables Previous on the first page and Next on the last | Utilization Priority | boundary | medium |
| [TC-UTLPRI-075](#tc-utlpri-075-searching-for-a-name-that-does-not-exist-shows-the-documented-empty-state) | Searching for a name that does not exist shows the documented empty state | Utilization Priority | negative | medium |
| [TC-UTLPRI-076](#tc-utlpri-076-an-empty-result-set-drives-every-kpi-tile-to-zero-rather-than-leaving-stale-counts) | An empty result set drives every KPI tile to zero rather than leaving stale counts | Utilization Priority | negative | medium |
| [TC-UTLPRI-077](#tc-utlpri-077-a-filter-combination-that-matches-nobody-shows-the-no-employees-match-message) | A filter combination that matches nobody shows the "no employees match" message | Utilization Priority | negative | medium |
| [TC-UTLPRI-078](#tc-utlpri-078-script-like-search-input-is-treated-as-literal-text-and-never-executed) | Script-like search input is treated as literal text and never executed | Utilization Priority | negative | medium |
| [TC-UTLPRI-079](#tc-utlpri-079-clearing-the-search-restores-the-full-unfiltered-population) | Clearing the search restores the full unfiltered population | Utilization Priority | negative | medium |
| [TC-UTLPRI-080](#tc-utlpri-080-a-deep-link-carrying-an-unknown-tier-value-degrades-gracefully) | A deep link carrying an unknown tier value degrades gracefully | Utilization Priority | negative | medium |
| [TC-UTLPRI-081](#tc-utlpri-081-a-whitespace-only-search-does-not-wipe-the-grid) | A whitespace-only search does not wipe the grid | Utilization Priority | negative | medium |
| [TC-UTLPRI-086](#tc-utlpri-086-fr-13-br-14-setting-up-manual-leaves-up-system-and-value-score-untouched) | FR-13/BR-14 — setting UP (Manual) leaves UP (System) and Value Score untouched | Utilization Priority | regression | high |
| [TC-UTLPRI-087](#tc-utlpri-087-12-a-applied-filters-persist-when-the-user-leaves-the-tab-and-comes-back) | §12.A — applied filters persist when the user leaves the tab and comes back | Utilization Priority | regression | high |
| [TC-UTLPRI-088](#tc-utlpri-088-fr-16-br-8-both-priorities-render-with-the-same-p1-p2-p3-tier-vocabulary-and-colour) | FR-16/BR-8 — both priorities render with the same P1/P2/P3 tier vocabulary and colour | Utilization Priority | regression | high |
| [TC-UTLPRI-089](#tc-utlpri-089-11-the-p1-p2-p3-cohorts-partition-the-population-with-no-one-left-unranked) | §11 — the P1/P2/P3 cohorts partition the population with no one left unranked | Utilization Priority | regression | high |
| [TC-UTLPRI-090](#tc-utlpri-090-12-f-a-columns-control-must-let-the-pmo-show-hide-department-and-experience-years) | §12.F — a Columns control must let the PMO show/hide Department and Experience Years | Utilization Priority | regression | high |
| [TC-UTLPRI-091](#tc-utlpri-091-12-d-the-four-default-saved-filter-presets-must-be-available) | §12.D — the four default saved filter presets must be available | Utilization Priority | regression | high |
| [TC-UTLPRI-092](#tc-utlpri-092-12-e-2-clicking-an-employee-row-must-open-the-detail-side-drawer) | §12.E.2 — clicking an employee row must open the detail side drawer | Utilization Priority | regression | high |
| [TC-UTLPRI-093](#tc-utlpri-093-fr-17-oi-10-up-manual-must-record-who-set-it-and-when) | FR-17/OI-10 — UP (Manual) must record who set it and when | Utilization Priority | regression | high |
| [TC-UTLPRI-094](#tc-utlpri-094-12-e-4-page-size-must-default-to-50-with-a-25-50-100-show-selector) | §12.E.4 — page size must default to 50 with a 25/50/100 Show selector | Utilization Priority | regression | high |
| [TC-UTLPRI-095](#tc-utlpri-095-fr-1-fr-3-br-1-weekly-recomputation-every-saturday-00-00-ist) | FR-1/FR-3/BR-1 weekly recomputation every Saturday 00:00 IST | Utilization Priority | regression | high |
| [TC-UTLPRI-096](#tc-utlpri-096-fr-5-fr-6-fr-7-br-3-br-4-effective-availability-inputs-the-two-week-recent-allocation-window-the-case-1-add-back-of-logs-utilization-and-the-maternity-leave-on-notice-adjustments-are-all-upstream-of-anything-the-screen-renders-verify-against-the-calculation-job-with-the-frd-4-3-worked-example) | FR-5/FR-6/FR-7/BR-3/BR-4 Effective Availability inputs — the two-week recent-allocation window, the Case 1 add-back of logs-utilization, and the Maternity Leave / On Notice adjustments are all upstream of anything the screen renders; verify against the calculation job with the FRD §4.3 worked example | Utilization Priority | regression | high |

---

## Utilization Priority

76 test cases.

### Boundary (8)

#### TC-UTLPRI-065 — Availability is always rendered within 0–100% inclusive

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | §4.2, §5.1 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Value ranges |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/boundary.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Sort Availability ascending and read the column
4. Sort Availability descending and read it again

**Expected**

Every availability value parses as a number within 0–100 inclusive at both extremes.

**Automation Hint**

Automated in boundary.spec.ts

#### TC-UTLPRI-066 — Value Score is always rendered within 0–100 inclusive

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | §5.2 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Value ranges |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/boundary.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Filter to P3 (the lowest scores) and read the Value Score column
4. Clear, filter to P1 and jump to the last page (the highest scores)
5. Read the Value Score column again

**Expected**

Every score across the global floor and ceiling parses as a number within 0–100 inclusive.

**Automation Hint**

Automated in boundary.spec.ts

#### TC-UTLPRI-067 — §5.3 — the lowest-scoring P1 sits at exactly 70, the boundary value

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | §5.3 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Tier boundary |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/boundary.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Click the P1 tile
4. Read page 1, which is the cohort floor (the grid orders by ascending score)
5. Take the minimum score

**Expected**

The lowest P1 score is exactly 70.00, proving the P1 cut-off is inclusive.

**Test Data**

- `boundary`: 70

**Automation Hint**

Automated in boundary.spec.ts

#### TC-UTLPRI-068 — §5.3 — the P2 cohort spans exactly [40, 70) at both of its edges

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | §5.3 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Tier boundary |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/boundary.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Click the P2 tile
4. Read the minimum score on page 1
5. Jump to the last page and read the maximum score

**Expected**

The P2 cohort starts at exactly 40.00 and never reaches 70 — the band is [40, 70).

**Test Data**

- `boundary`: 40 and 70

**Automation Hint**

Automated in boundary.spec.ts

#### TC-UTLPRI-069 — §5.4 — an employee at exactly the 30% threshold is included in the under-utilized cohort

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | §5.4, OI-3 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Under-utilized boundary |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/boundary.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Click the Under-Utilized tile
4. Sort Availability ascending
5. Read the minimum

**Expected**

Somebody sits at exactly 30% and is included, proving the threshold is inclusive.

**Test Data**

- `boundary`: 30%

**Automation Hint**

Automated in boundary.spec.ts

#### TC-UTLPRI-070 — The Availability filter spans the full 0–100 range

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | FRD §12.A |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Filter ranges |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/boundary.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Open the Availability column filter
4. Read the range extents and the slider attributes

**Expected**

The availability filter spans the full 0–100 range.

**Automation Hint**

Automated in boundary.spec.ts

#### TC-UTLPRI-071 — The Value Score filter spans the documented 0–100 composite range

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | §5.2, §12.A |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Filter ranges |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/boundary.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Open the Value Score column filter
4. Read the range extents
5. Read the Value Score column information icon

**Expected**

The filter spans 0–100 and the icon documents the score as "Composite 0-100 score behind the system tier".

**Automation Hint**

Automated in boundary.spec.ts

#### TC-UTLPRI-072 — Pagination disables Previous on the first page and Next on the last

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | FRD §12.E.4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Pagination |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/boundary.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Check the Previous control on page 1
4. Jump to the last page
5. Check the Next and Previous controls

**Expected**

Previous is disabled on the first page, Next is disabled on the last, and the last page ends on the total.

**Automation Hint**

Automated in boundary.spec.ts

### Functional (28)

#### TC-UTLPRI-010 — Search by employee name narrows the list to matching people

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD §12.C |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Search |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Clear all filters
4. Note the first employee name
5. Type that name into the Search box
6. Read the resulting rows

**Expected**

The searched employee appears in the results and every returned row matches the search term.

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-011 — A search always returns a subset of the unfiltered population

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD §12.C |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Search |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Clear all filters and note the total
4. Search for the single letter "a"
5. Read the new total

**Expected**

The search returns at least one person and never more than the unfiltered population.

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-012 — UP (System) column filter restricts the grid to the selected tier

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FR-15, BR-13 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Filters |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Hover the UP (System) column header
4. Click "Filter by UP (System)"
5. Tick "P2 · Amber"
6. Click Save

**Expected**

Only P2 · Amber rows remain in the grid.

**Test Data**

- `tier`: P2 · Amber

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-013 — UP (Manual) filter offers exactly the four documented values

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FR-12, BR-10 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Filters |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Hover the UP (Manual) column header
4. Click "Filter by UP (Manual)"
5. Read the popover contents

**Expected**

The popover offers P1 · Red, P2 · Amber, P3 · Green and Not set, plus Clear and Save buttons.

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-014 — BR-13 — filtering UP (Manual) to "Not set" returns only unassigned rows

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FR-15, BR-13, §6.2 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Filters |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Open the UP (Manual) filter
4. Tick "Not set"
5. Click Save
6. Read the UP (Manual) cell of every row

**Expected**

Every returned row shows "Not set" — nobody with an assigned manual priority survives the filter.

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-015 — Department filter restricts the grid to the selected department

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD §12.A |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Filters |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Open the Department filter
4. Tick "QA"
5. Click Save

**Expected**

Every returned row has Department = QA.

**Test Data**

- `department`: QA

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-016 — FR-15 — UP (System) and UP (Manual) filters combine rather than replace each other

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FR-15, BR-13 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Filters |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Filter UP (System) to P1 · Red and note the total
4. Additionally filter UP (Manual) to "Not set"
5. Read the new total and the rows

**Expected**

The second filter narrows rather than replaces: the combined total is not larger, and every row satisfies BOTH criteria.

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-017 — KPI tile acts as a one-click UP (System) filter matching its own count

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FR-15, §12.A |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | KPI tiles |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Note the UP (System) P1 tile count
4. Click the P1 tile
5. Read the results total and the tier column

**Expected**

The grid filters to P1 only and the result total equals the tile count exactly.

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-018 — FR-10 — the Under-Utilized tile filters to people at or above the 30% threshold

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FR-10, §5.4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Under-utilized |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Note the Under-Utilized tile count
4. Click the Under-Utilized tile
5. Read the Availability column

**Expected**

Result total equals the tile count and every flagged person has availability of 30% or more.

**Test Data**

- `threshold`: 30%

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-019 — Sorting by Availability orders the column and toggles direction on a second click

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD §12.B |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Sorting |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Hover the Availability header and click its sort control
4. Read the column
5. Click the sort control again
6. Read the column again

**Expected**

First click sorts availability ascending, second click sorts it descending — both fully ordered.

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-020 — Sorting by UP (System) descending brings the P1 cohort to the top

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FR-14, §12.B |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Sorting |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Click the UP (System) sort control twice to reach descending

**Expected**

The P1 cohort is at the top and tiers never go back up the order (P1 then P2 then P3).

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-022 — BR-10 — the UP (Manual) dropdown offers exactly Not set / P1 / P2 / P3

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | BR-10, §6.2 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | UP (Manual) |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Open the UP (Manual) dropdown on the first row
4. Read the options

**Expected**

Exactly four options in order: Not set, P1 · Red, P2 · Amber, P3 · Green.

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-023 — FR-12 — setting UP (Manual) confirms with a toast and survives a reload

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FR-12, FR-13 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | UP (Manual) |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Open row 1's UP (Manual) dropdown
4. Select "P2 · Amber"
5. Observe the confirmation toast
6. Reload the page and search for the same person

**Expected**

A "Manual priority updated." toast appears and the value still reads P2 · Amber after the reload.

**Test Data**

- `row`: 1
- `value`: P2 · Amber

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-024 — UP (Manual) can be cleared back to "Not set" by an authorized role

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FR-12, §6.2 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | UP (Manual) |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Set row 2's UP (Manual) to "P3 · Green"
4. Reopen the dropdown
5. Select "Not set"

**Expected**

The manual priority can be cleared back to "Not set" at any time by an authorized role.

**Test Data**

- `row`: 2

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-025 — Pagination advances to a distinct page of people and updates the summary

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD §12.E.4 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Pagination |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Note the page 1 summary and the names shown
4. Click "Page 2"
5. Read the new summary and names

**Expected**

Page 2 starts where page 1 ended, the total is unchanged, and no person appears on both pages.

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-026 — An applied filter renders a chip whose Clear control restores the full list

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FRD §12.A |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Filters |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/functional.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Note the unfiltered total
4. Apply the UP (System) = P1 filter
5. Observe the filter chip
6. Click the chip's Clear control

**Expected**

The applied filter renders a chip, narrows the grid, and clearing it restores the original population exactly.

**Automation Hint**

Automated in functional.spec.ts

#### TC-UTLPRI-030 — FR-8/§5.2 — Value Score = 0.50×Availability + 0.30×Rating + 0.20×Seniority for every ranked row

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | FR-8, §5.2 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | Yes |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Scoring model |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/calculation.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Clear all filters
4. For every row read Availability, Value Score and the designation in the name cell
5. Map the designation to its seniority band (0 / 33 / 67 / 100)
6. Solve Value Score back to the rating the app must have used

**Expected**

Every row resolves to a rating on the real 1–10 scale in 0.1 steps, confirming Value Score = 0.50 × Availability + 0.30 × (Rating × 10) + 0.20 × Seniority.

**Test Data**

- `weights`: 0.50 / 0.30 / 0.20
- `ratingScale`: 1–10 step 0.1

**Automation Hint**

Automated in calculation.spec.ts

#### TC-UTLPRI-031 — §5.3 — every P1 · Red row scores at or above 70

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | §5.3 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Tier thresholds |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/calculation.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Click the UP (System) P1 tile
4. Read the Value Score of every row

**Expected**

Every P1 · Red row scores 70 or higher.

**Test Data**

- `threshold`: 70

**Automation Hint**

Automated in calculation.spec.ts

#### TC-UTLPRI-032 — §5.3 — every P2 · Amber row scores in [40, 70)

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | §5.3 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Tier thresholds |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/calculation.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Click the UP (System) P2 tile
4. Read the Value Score of every row

**Expected**

Every P2 · Amber row scores at least 40 and strictly below 70.

**Test Data**

- `range`: [40, 70)

**Automation Hint**

Automated in calculation.spec.ts

#### TC-UTLPRI-033 — §5.3 — every P3 · Green row scores below 40

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | §5.3 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Tier thresholds |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/calculation.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Click the UP (System) P3 tile
4. Read the Value Score of every row

**Expected**

Every P3 · Green row scores strictly below 40.

**Test Data**

- `threshold`: 40

**Automation Hint**

Automated in calculation.spec.ts

#### TC-UTLPRI-034 — FR-9 — the rendered tier always matches the tier its own Value Score implies

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | FR-9, §5.3 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Tier thresholds |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/calculation.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. For every row, classify its Value Score using the §5.3 cut-offs
4. Compare that against the tier the row actually displays

**Expected**

The displayed tier matches the tier the row's own score implies, for every row.

**Automation Hint**

Automated in calculation.spec.ts

#### TC-UTLPRI-035 — §5.1/BR-9 — seniority bands are 33/67/100 and no other value fits the data

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | §5.1, BR-9, OI-2 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Seniority |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/calculation.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Group the visible rows by designation
4. For each group, test seniority candidates 0, 33, 50, 67 and 100
5. Keep only candidates that leave every row on a valid 1–10 rating

**Expected**

Only the documented band fits each designation: no designation → 0, base → 33, "Sr." → 67, LE → 100.

**Test Data**

- `bands`: 0 / 33 / 67 / 100

**Automation Hint**

Automated in calculation.spec.ts

#### TC-UTLPRI-036 — §5.4/OI-3 — the under-utilized flag is raised at exactly 30% availability and not below

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | FR-10, §5.4, OI-3 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Under-utilized |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/calculation.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Confirm the unfiltered page contains people below 30% availability
4. Click the Under-Utilized tile
5. Read the minimum availability in the flagged set
6. Read the tile's information-icon tooltip

**Expected**

The flagged cohort bottoms out at exactly 30% and the tooltip states the 30% threshold in words.

**Automation Hint**

Automated in calculation.spec.ts

#### TC-UTLPRI-037 — §5.5 — the FRD worked example reproduces exactly, and a live Lead Engineer row obeys the same model

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | §5.5 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Scoring model |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/calculation.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Compute the FRD §5.5 worked example: Lead Engineer (seniority 100), rating 8.0 of 10 (normalised 80), 60% availability
2. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
3. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
4. Sort by UP (System) descending
5. Find a live Lead Engineer row and solve its score back to a rating

**Expected**

The worked example returns 74 → P1, and every live Lead Engineer row reproduces its own Value Score from the same model.

**Test Data**

- `workedExample`: 0.50(60) + 0.30(80) + 0.20(100) = 74 → P1

**Automation Hint**

Automated in calculation.spec.ts

#### TC-UTLPRI-038 — Value Score stays inside the 0–100 band its own weights allow

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | §5.1, §5.2 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Scoring model |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/calculation.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Read every Value Score
4. Compute each row's theoretical ceiling for full availability and a perfect rating

**Expected**

Every score sits within 0–100 and never exceeds the ceiling its own seniority band allows.

**Automation Hint**

Automated in calculation.spec.ts

#### TC-UTLPRI-039 — Rating enters the score only in 0.1-scale steps — equal-availability peers differ by whole rating steps

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | §5.1, OI-2 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Scoring model |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/calculation.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Group rows that share both a designation and an availability value
4. Compare the Value Scores inside each group

**Expected**

Scores inside a group differ only by whole rating steps of 0.3 points (0.30 weight × 10 points per 0.1 rating).

**Automation Hint**

Automated in calculation.spec.ts

#### TC-UTLPRI-040 — A missing rating and a missing designation each contribute 0 to the score

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Missing-input rule (clarified 2026-09-04) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Missing inputs |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/calculation.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Identify rows whose score solves back to a rating of 0 — i.e. Value Score minus 0.50 × Availability minus 0.20 × Seniority is zero
4. Confirm in the Employee module that those people fall outside the Overall Rating scale (excluded by both the 1.1–10 and the 1.0–1.1 bands)
5. Read their Availability, designation and Value Score

**Expected**

A null rating contributes 0 and a null designation contributes 0 — neither is substituted with a midpoint — so the score equals 0.50 × Availability plus 0.20 × Seniority for whatever designation the person does have.

**Test Data**

- `rule`: null input contributes 0
- `example`: Dimple Dodia — no designation, no rating, 10.23% availability -> 0.50 x 10.23 = 5.12
- `ratingNullOrgWide`: 193 of 3,654 employees

**Automation Hint**

Automated in calculation.spec.ts

#### TC-UTLPRI-041 — Fallback — a rating-null row must carry an information icon saying the rating is missing

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | Fallback requirement (2026-09-04) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Rating fallback |
| **Expected Outcome** | FAILS — confirmed FRD deviation |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/calculation.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Locate a rating-null row
4. Look for an information icon on that row
5. Hover it

**Expected**

The row carries an information icon stating that the rating is missing and neutral defaults were applied.

**Automation Hint**

FRD GAP — no icon, tooltip or indication of any kind exists on those rows.

### Integration (6)

#### TC-UTLPRI-045 — Ratings taken from the Employee module reproduce the Value Score on Utilization Priority

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | FR-8, §5.1 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | Yes |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Cross-module |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/integration.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Open Employee ▸ Advanced filter ▸ Overall Rating
2. Drag the range to 9.9–10.0 and Save
3. Note the resulting employee names
4. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
5. Search each of those people and read their Availability, designation and Value Score
6. Solve each score back to a rating

**Expected**

Every recovered rating falls inside the 9.9–10.0 band the Employee module reported.

**Test Data**

- `band`: 9.9 – 10.0

**Automation Hint**

Automated in integration.spec.ts

#### TC-UTLPRI-046 — The same reconciliation holds at the bottom of the rating scale

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | FR-8, §5.1 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | Yes |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Cross-module |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/integration.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Open Employee ▸ Advanced filter ▸ Overall Rating
2. Drag the range to 1.0–1.1 and Save
3. Note the resulting employee names
4. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
5. Search each person and solve their score back to a rating

**Expected**

Every recovered rating falls inside the 1.0–1.1 band, confirming the model holds at the bottom of the scale too.

**Test Data**

- `band`: 1.0 – 1.1

**Automation Hint**

Automated in integration.spec.ts

#### TC-UTLPRI-047 — Availability and designation match the Employee module for the same person

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | §9 assumptions |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Cross-module |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/integration.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Open the Employee module and note the name, designation and Availability % of the first few people
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Search for each of those people
4. Compare Availability and designation across the two screens

**Expected**

Availability and designation agree exactly between the Employee module and Utilization Priority.

**Automation Hint**

Automated in integration.spec.ts

#### TC-UTLPRI-048 — FR-4/BR-5 — Effective Availability is fixed and ignores the Employee timesheet-duration filter

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | FR-4, BR-5 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Cross-module |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/integration.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Sort by Availability ascending and pick someone between 0% and 100%
4. Note their Availability and Value Score
5. Open the Employee module
6. Change the timesheet-duration selector from "Last 15 days" to "All time"
7. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
8. Search for the same person again

**Expected**

Their Availability and Value Score are unchanged — Effective Availability is a fixed pre-calculated field, unaffected by any UI duration filter.

**Automation Hint**

Automated in integration.spec.ts

#### TC-UTLPRI-049 — Every ranked person also exists in the Employee module

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | §1.2 scope |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Cross-module |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/integration.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Note the first five ranked people
4. Open the Employee module
5. Search for each of them

**Expected**

Every person ranked on Utilization Priority also exists in the Employee module.

**Automation Hint**

Automated in integration.spec.ts

#### TC-UTLPRI-050 — The ranked population reconciles with the Employee module headcount

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | §1.2 scope |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Cross-module |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/integration.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Open the Employee module and read its total headcount
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Clear all filters and read the ranked total

**Expected**

The ranked population matches the Employee headcount to within 2% — the same current-employee set is ranked.

**Automation Hint**

Automated in integration.spec.ts

### Negative (7)

#### TC-UTLPRI-075 — Searching for a name that does not exist shows the documented empty state

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD §12.C |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Empty states |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/negative.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Search for "Zzqx Nonexistent Person 99"

**Expected**

No rows remain and the documented empty state ("No one to rank yet" / "No employees match the current filters") is shown.

**Automation Hint**

Automated in negative.spec.ts

#### TC-UTLPRI-076 — An empty result set drives every KPI tile to zero rather than leaving stale counts

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FR-9 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Empty states |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/negative.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Search for a name that matches nobody
4. Read the four KPI tile counts

**Expected**

Every tile drops to 0 rather than keeping a stale count from the previous result set.

**Automation Hint**

Automated in negative.spec.ts

#### TC-UTLPRI-077 — A filter combination that matches nobody shows the "no employees match" message

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FR-15 |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Empty states |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/negative.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Filter UP (System) to P1 · Red
4. Also filter UP (Manual) to P1 · Red

**Expected**

Either the "No employees match the current filters" message appears, or every returned row satisfies both criteria.

**Automation Hint**

Automated in negative.spec.ts

#### TC-UTLPRI-078 — Script-like search input is treated as literal text and never executed

| Field | Value |
| --- | --- |
| **Tags** | @negative, @security |
| **Requirement Ref** | Security (non-FRD) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Input handling |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/negative.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Type <script>alert(1)</script> into the Search box
4. Watch for any dialog
5. Inspect the rendered DOM

**Expected**

No dialog fires, the payload stays literal text in the input, it is never injected as live markup, and the page keeps rendering.

**Test Data**

- `payload`: <script>alert(1)</script>

**Automation Hint**

Automated in negative.spec.ts

#### TC-UTLPRI-079 — Clearing the search restores the full unfiltered population

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD §12.C |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Search |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/negative.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Note the unfiltered total
4. Search for a name that matches nobody
5. Clear the search box

**Expected**

The full population returns exactly as it was before the search.

**Automation Hint**

Automated in negative.spec.ts

#### TC-UTLPRI-080 — A deep link carrying an unknown tier value degrades gracefully

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD §12.A |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Deep links |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/negative.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Navigate to /utilization-priority?upSystemTiers=NOT_A_TIER

**Expected**

The page still renders its heading and either a grid or the empty state — no crash and no error screen.

**Automation Hint**

Automated in negative.spec.ts

#### TC-UTLPRI-081 — A whitespace-only search does not wipe the grid

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | FRD §12.C |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Search |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/negative.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Note the unfiltered total
4. Type three spaces into the Search box

**Expected**

A whitespace-only search is not treated as a real term — the population is unchanged.

**Automation Hint**

Automated in negative.spec.ts

### Regression (11)

#### TC-UTLPRI-086 — FR-13/BR-14 — setting UP (Manual) leaves UP (System) and Value Score untouched

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | FR-13, BR-14 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | UP (Manual) independence |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/regression.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Note row 3's tier, Value Score and Availability
4. Set its UP (Manual) to "P1 · Red"
5. Search for the same person and re-read those three values

**Expected**

Tier, Value Score and Availability are all unchanged; only UP (Manual) moved.

**Test Data**

- `row`: 3

**Automation Hint**

Automated in regression.spec.ts

#### TC-UTLPRI-087 — §12.A — applied filters persist when the user leaves the tab and comes back

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | FRD §12.A |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Filter persistence |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/regression.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Apply the UP (System) = P1 filter and note the total
4. Navigate away to the Employee module
5. Return to Utilization Priority

**Expected**

The filter chip is still applied, the filtered total is identical, and every row is still P1.

**Automation Hint**

Automated in regression.spec.ts

#### TC-UTLPRI-088 — FR-16/BR-8 — both priorities render with the same P1/P2/P3 tier vocabulary and colour

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | FR-16, BR-8 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Tier display |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/regression.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Read the UP (System) and UP (Manual) cells of every row

**Expected**

Both priorities use the same vocabulary and colour names — P1 · Red, P2 · Amber, P3 · Green (or "Not set" for an unassigned manual value).

**Automation Hint**

Automated in regression.spec.ts

#### TC-UTLPRI-089 — §11 — the P1/P2/P3 cohorts partition the population with no one left unranked

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | FR-9, §11 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Coverage |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/regression.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Clear all filters
4. Read the total and the three tier tile counts

**Expected**

The three tiers partition the population exactly and none of them is empty.

**Automation Hint**

Automated in regression.spec.ts

#### TC-UTLPRI-090 — §12.F — a Columns control must let the PMO show/hide Department and Experience Years

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | FRD §12.F |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Screen spec |
| **Expected Outcome** | FAILS — confirmed FRD deviation |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/regression.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Look for a "Columns" control at the top-right of the table

**Expected**

A Columns control lets the PMO toggle Department and Experience Years on, saved per session.

**Automation Hint**

FRD GAP — fixed eight-column table, no column-visibility control.

#### TC-UTLPRI-091 — §12.D — the four default saved filter presets must be available

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | FRD §12.D |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Screen spec |
| **Expected Outcome** | FAILS — confirmed FRD deviation |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/regression.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Look above the filter bar for saved filter presets

**Expected**

The four built-in presets are offered: High Priority Free, Under-Utilized Only, Completely Free, Not Manually Reviewed.

**Automation Hint**

FRD GAP — no preset machinery exists.

#### TC-UTLPRI-092 — §12.E.2 — clicking an employee row must open the detail side drawer

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | FRD §12.E.2 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Screen spec |
| **Expected Outcome** | FAILS — confirmed FRD deviation |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/regression.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Click an employee row

**Expected**

A right-side drawer opens with the person's tier, availability, value score, skills, current allocations, a Raise Allocation Ticket button and a View Full Profile link.

**Automation Hint**

FRD GAP — clicking a row does nothing.

#### TC-UTLPRI-093 — FR-17/OI-10 — UP (Manual) must record who set it and when

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | FR-17, OI-10, §12.E.1 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Audit trail |
| **Expected Outcome** | FAILS — confirmed FRD deviation |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/regression.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Set row 4's UP (Manual) to "P2 · Amber"
4. Hover the UP (Manual) tag

**Expected**

A tooltip shows who set the manual priority and when.

**Test Data**

- `row`: 4

**Automation Hint**

FRD GAP — the value persists but no attribution is stored or surfaced.

#### TC-UTLPRI-094 — §12.E.4 — page size must default to 50 with a 25/50/100 Show selector

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | FRD §12.E.4 |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Screen spec |
| **Expected Outcome** | FAILS — confirmed FRD deviation |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/regression.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Confirm the population is 100 or more
4. Look for a "Show" page-size dropdown
5. Read the page size in the results summary

**Expected**

A Show dropdown offers 25 / 50 / 100 and the default page size is 50.

**Automation Hint**

FRD GAP — fixed at 100 rows per page with no size control.

#### TC-UTLPRI-095 — FR-1/FR-3/BR-1 weekly recomputation every Saturday 00:00 IST

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FR-1, FR-3, BR-1 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Scheduled job |
| **Expected Outcome** | Manual verification required |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/regression.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Open the calculation job scheduler
2. Confirm the UP (System) job is scheduled weekly for Saturday 00:00 IST
3. Capture Value Score snapshots before and after a Saturday run
4. Compare them

**Expected**

UP (System) is recomputed automatically every Saturday at 00:00 IST and scores move only across that boundary.

**Automation Hint**

MANUAL — a scheduled backend job produces no signal inside a UI test run.

#### TC-UTLPRI-096 — FR-5/FR-6/FR-7/BR-3/BR-4 Effective Availability inputs — the two-week recent-allocation window, the Case 1 add-back of logs-utilization, and the Maternity Leave / On Notice adjustments are all upstream of anything the screen renders; verify against the calculation job with the FRD §4.3 worked example

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | FR-5, FR-6, FR-7, BR-3, BR-4, §4.2 |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Effective Availability |
| **Expected Outcome** | Manual verification required |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/regression.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Take the FRD §4.3 worked example: 100% available on 6 July, 50% allocated on 7 July, 30% logged in that project by 12 July
2. Run the calculation job against that data
3. Confirm Case 1 applies (a new on-paper allocation inside the trailing two weeks)
4. Verify the two-week window, the logs-utilization add-back, and the Maternity Leave / On Notice adjustments

**Expected**

Effective Availability = 70 + 30 − 50 = 50%, only allocation changes inside the trailing two weeks count, and only Maternity Leave and On Notice affect the figure.

**Automation Hint**

MANUAL — every input is upstream of anything the screen renders.

### Security (8)

#### TC-UTLPRI-055 — BR-11 — a PMO user can view the ranking and edit UP

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | BR-11, §6.3 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Role enforcement |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/security.spec.ts |

**Preconditions**

PMO session via tests/global-setup.ts; feature deployed at /utilization-priority

**Steps**

1. Log in with the PMO session (storageState-pmo.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Check the grid, the sidebar link and a UP (Manual) dropdown

**Expected**

PMO sees the ranking, is not redirected, and the UP (Manual) control is present and enabled.

**Automation Hint**

Automated in security.spec.ts

#### TC-UTLPRI-056 — BR-11 — a Team Manager can view the ranking and edit UP

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | BR-11, §6.3 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | Team Manager |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Role enforcement |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/security.spec.ts |

**Preconditions**

Team Manager session via tests/global-setup.ts; feature deployed at /utilization-priority

**Steps**

1. Log in with the TM session (storageState-tm.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Check the grid, the sidebar link and a UP (Manual) dropdown

**Expected**

TM sees the ranking and can edit UP (Manual).

**Automation Hint**

Automated in security.spec.ts

#### TC-UTLPRI-057 — BR-11 — an Engineering Manager can view the ranking and edit UP

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | BR-11, §6.3 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | Engineering Manager |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Role enforcement |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/security.spec.ts |

**Preconditions**

Engineering Manager session via tests/global-setup.ts; feature deployed at /utilization-priority

**Steps**

1. Log in with the EM session (storageState-em.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Check the grid, the sidebar link and a UP (Manual) dropdown

**Expected**

EM sees the ranking and can edit UP (Manual).

**Automation Hint**

Automated in security.spec.ts

#### TC-UTLPRI-058 — BR-11 — a base Employee is refused the Utilization Priority screen

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | BR-11, §6.3 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | Employee |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Role enforcement |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/security.spec.ts |

**Preconditions**

Employee session via tests/global-setup.ts; feature deployed at /utilization-priority

**Steps**

1. Log in with the Employee session (storageState-emp.json)
2. Navigate directly to /utilization-priority

**Expected**

Redirected to /unauthorized with "Access Denied"; no grid and no UP (Manual) controls are served.

**Automation Hint**

Automated in security.spec.ts

#### TC-UTLPRI-059 — BR-11 — a Project Manager is refused the Utilization Priority screen

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | BR-11, §6.3 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | Project Manager |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Role enforcement |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/security.spec.ts |

**Preconditions**

Project Manager session via tests/global-setup.ts; feature deployed at /utilization-priority

**Steps**

1. Log in with the PM session (storageState-pm.json)
2. Navigate directly to /utilization-priority

**Expected**

Redirected to /unauthorized with "Access Denied".

**Automation Hint**

Automated in security.spec.ts

#### TC-UTLPRI-060 — BR-11 — a CSM is refused the Utilization Priority screen

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | BR-11, §6.3 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | CSM |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Role enforcement |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/security.spec.ts |

**Preconditions**

CSM session via tests/global-setup.ts; feature deployed at /utilization-priority

**Steps**

1. Log in with the CSM session (storageState-csm.json)
2. Navigate directly to /utilization-priority

**Expected**

Redirected to /unauthorized with "Access Denied".

**Automation Hint**

Automated in security.spec.ts

#### TC-UTLPRI-061 — An unauthorized role is not shown the Utilization Priority nav entry at all

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | BR-11, §6.3 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | Employee |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Role enforcement |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/security.spec.ts |

**Preconditions**

Employee session via tests/global-setup.ts; feature deployed at /utilization-priority

**Steps**

1. Log in with the Employee session
2. Open the app root and inspect the sidebar

**Expected**

No "Utilization Priority" link is offered to a role that cannot open the screen.

**Automation Hint**

Automated in security.spec.ts

#### TC-UTLPRI-062 — The screen is not reachable without an authenticated session

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | BR-11 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | Anonymous |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Role enforcement |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/security.spec.ts |

**Preconditions**

Anonymous session via tests/global-setup.ts; feature deployed at /utilization-priority

**Steps**

1. Open a browser context with no session cookies
2. Navigate directly to /utilization-priority

**Expected**

The ranking is never rendered to an unauthenticated visitor.

**Automation Hint**

Automated in security.spec.ts

### Smoke (8)

#### TC-UTLPRI-001 — Screen loads at /utilization-priority with its heading and PMO description

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD §1.2, §12 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Page shell |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/smoke.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Observe the page heading, description and grid

**Expected**

The H1 reads "Utilization Priority", the PMO description paragraph is shown, and the ranking table renders.

**Automation Hint**

Automated in smoke.spec.ts

#### TC-UTLPRI-002 — Table exposes the eight documented columns in FRD order

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD §12.B, §12.F |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Page shell |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/smoke.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Read every column header left to right

**Expected**

Exactly 8 columns in order: Employee Name, Department, UP (System), UP (Manual), Availability, Value Score, Skills / Tech, Allocation.

**Automation Hint**

Automated in smoke.spec.ts

#### TC-UTLPRI-003 — All four KPI tiles render with a numeric count

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD §2, §5.4 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | KPI tiles |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/smoke.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Observe the four summary tiles above the grid

**Expected**

UP (System) P1, P2 and P3 tiles plus an Under-Utilized tile each render with a numeric count of 0 or more.

**Automation Hint**

Automated in smoke.spec.ts

#### TC-UTLPRI-004 — P1 + P2 + P3 tile counts reconcile with the total result count

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FR-9 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | KPI tiles |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/smoke.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Clear any applied filters
4. Read the P1, P2 and P3 tile counts
5. Read the "Showing X - Y of Z results" total

**Expected**

P1 + P2 + P3 equals the total result count — every ranked person falls in exactly one tier.

**Test Data**

- `observed`: P1 1347 + P2 1054 + P3 1254 = 3655

**Automation Hint**

Automated in smoke.spec.ts

#### TC-UTLPRI-005 — FR-9 — every visible row is classified into exactly one of P1/P2/P3

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FR-9, §11 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Tier display |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/smoke.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Read the UP (System) cell of every visible row

**Expected**

Every row shows one of "P1 · Red", "P2 · Amber" or "P3 · Green" — no row is blank or unranked.

**Automation Hint**

Automated in smoke.spec.ts

#### TC-UTLPRI-006 — FR-12 — every row exposes a UP (Manual) dropdown

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FR-12 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | UP (Manual) |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/smoke.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Count the rows in the grid
4. Count the UP (Manual) dropdowns

**Expected**

Every ranked row exposes its own "Set manual priority for <name>" dropdown — counts match exactly.

**Automation Hint**

Automated in smoke.spec.ts

#### TC-UTLPRI-007 — Results summary and pagination controls render

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD §12.E.4 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Pagination |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/smoke.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Read the results summary line
4. Observe the pagination control below the grid

**Expected**

Summary reads "Showing 1 - N of T results", pagination is present, and N minus 1 plus 1 equals the rendered row count.

**Automation Hint**

Automated in smoke.spec.ts

#### TC-UTLPRI-008 — Sidebar nav exposes Utilization Priority pointing at its own route

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | FRD §1.2 |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | requirement-grounded + live-DOM-verified (reports/knowledge-base/dom-snapshots/UTLPRI.json) |
| **Confidence** | requirement-grounded |
| **Role** | PMO / Admin |
| **Api Validation** | No |
| **Task Id** | FRD-UTLPRI-V04 |
| **Sub Module** | Navigation |
| **Expected Outcome** | PASSES |
| **Lifecycle Reason** | Standalone /utilization-priority page removed (404 for all roles on dev 6.8.1); UP (System/Manual) now only a column in Employee Details, covered by EMPDET cases |
| **Lifecycle Status** | retired |
| **Spec File** | tests/e2e/utilization-priority/smoke.spec.ts |

**Preconditions**

Primary admin session (SIMERP_USERNAME, storageState.json); feature deployed at /utilization-priority

**Steps**

1. Log in as the primary admin session (SIMERP_USERNAME, primaryPage fixture / storageState.json)
2. Open the sidebar and click "Utilization Priority" (or go to /utilization-priority)
3. Inspect the sidebar "Utilization Priority" entry

**Expected**

The sidebar link is visible and its href is exactly /utilization-priority.

**Automation Hint**

Automated in smoke.spec.ts
