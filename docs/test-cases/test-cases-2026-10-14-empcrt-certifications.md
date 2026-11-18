# Certifications — Test Cases

**Total test cases:** 44  
**Modules covered:** Certifications  
**Source:** `reports/test-cases/cases-2026-10-14-EMPCRT-certifications.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 20 | 45.5% |
| negative | 10 | 22.7% |
| security | 6 | 13.6% |
| smoke | 5 | 11.4% |
| accessibility | 3 | 6.8% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 22 | 50.0% |
| medium | 10 | 22.7% |
| critical | 8 | 18.2% |
| low | 4 | 9.1% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| high | 22 | 50.0% |
| medium | 10 | 22.7% |
| critical | 8 | 18.2% |
| low | 4 | 9.1% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| observed-live | 44 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| observed-live | 44 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 39 | 88.6% |
| No | 5 | 11.4% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 20 | 45.5% |
| @negative | 10 | 22.7% |
| @security | 6 | 13.6% |
| @smoke | 5 | 11.4% |
| @a11y | 3 | 6.8% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPCRT-001](#tc-empcrt-001-certifications-opens-from-employee-certifications-with-three-tabs-for-admin) | Certifications opens from Employee > Certifications with three tabs for Admin | Certifications | smoke | critical |
| [TC-EMPCRT-002](#tc-empcrt-002-employee-sees-only-their-own-list-with-no-tabs) | Employee sees only their own list with no tabs | Certifications | smoke | critical |
| [TC-EMPCRT-003](#tc-empcrt-003-organisation-level-shows-kpi-cards-and-the-certification-catalogue) | Organisation Level shows KPI cards and the certification catalogue | Certifications | smoke | critical |
| [TC-EMPCRT-004](#tc-empcrt-004-new-joiners-list-loads-for-admin) | New Joiners List loads for Admin | Certifications | smoke | high |
| [TC-EMPCRT-005](#tc-empcrt-005-add-certification-drawer-opens-with-all-required-fields) | Add Certification drawer opens with all required fields | Certifications | smoke | critical |
| [TC-EMPCRT-010](#tc-empcrt-010-my-certificate-rows-match-the-certifications-mine-api) | My Certificate rows match the /certifications/mine API | Certifications | functional | high |
| [TC-EMPCRT-011](#tc-empcrt-011-organisation-kpi-cards-match-certifications-organisation-summary) | Organisation KPI cards match /certifications/organisation/summary | Certifications | functional | high |
| [TC-EMPCRT-012](#tc-empcrt-012-total-certifications-active-expired) | Total certifications = Active + Expired | Certifications | functional | high |
| [TC-EMPCRT-013](#tc-empcrt-013-each-catalogue-row-employees-active-expired) | Each catalogue row: Employees = Active + Expired | Certifications | functional | high |
| [TC-EMPCRT-014](#tc-empcrt-014-search-filters-the-catalogue-by-title-or-partnership-and-is-kept-in-the-url) | Search filters the catalogue by title or partnership and is kept in the URL | Certifications | functional | medium |
| [TC-EMPCRT-015](#tc-empcrt-015-search-with-no-match-shows-the-empty-state) | Search with no match shows the empty state | Certifications | functional | medium |
| [TC-EMPCRT-016](#tc-empcrt-016-department-filter-re-scopes-table-and-kpis-and-survives-reload) | Department filter re-scopes table and KPIs and survives reload | Certifications | functional | high |
| [TC-EMPCRT-017](#tc-empcrt-017-partnership-filter-lists-every-partnership-from-the-api) | Partnership filter lists every partnership from the API | Certifications | functional | medium |
| [TC-EMPCRT-018](#tc-empcrt-018-status-filter-offers-active-and-expired) | Status filter offers Active and Expired | Certifications | functional | medium |
| [TC-EMPCRT-019](#tc-empcrt-019-view-employees-holding-opens-the-certificate-holders-page-with-matching-rows) | 'View employees holding' opens the Certificate Holders page with matching rows | Certifications | functional | high |
| [TC-EMPCRT-020](#tc-empcrt-020-clicking-an-expired-count-lists-the-expired-holders) | Clicking an Expired count lists the expired holders | Certifications | functional | medium |
| [TC-EMPCRT-021](#tc-empcrt-021-new-joiners-follow-up-follows-certifications-added) | New Joiners: Follow-Up follows Certifications Added | Certifications | functional | high |
| [TC-EMPCRT-022](#tc-empcrt-022-admin-can-add-on-behalf-of-another-employee) | Admin can add on behalf of another employee | Certifications | functional | high |
| [TC-EMPCRT-023](#tc-empcrt-023-never-expires-partnership-disables-expire-date) | Never-expires partnership disables Expire Date | Certifications | functional | high |
| [TC-EMPCRT-024](#tc-empcrt-024-standard-partnership-auto-fills-expire-date-from-the-partnership-validity) | Standard partnership auto-fills Expire Date from the partnership validity | Certifications | functional | high |
| [TC-EMPCRT-025](#tc-empcrt-025-save-certification-enables-only-when-every-required-field-is-filled) | Save Certification enables only when every required field is filled | Certifications | functional | high |
| [TC-EMPCRT-026](#tc-empcrt-026-uploading-a-valid-pdf-counts-as-proof) | Uploading a valid PDF counts as proof | Certifications | functional | medium |
| [TC-EMPCRT-027](#tc-empcrt-027-cancel-closes-the-drawer-without-saving) | Cancel closes the drawer without saving | Certifications | functional | medium |
| [TC-EMPCRT-028](#tc-empcrt-028-tab-deep-links-open-the-right-tab) | Tab deep links open the right tab | Certifications | functional | medium |
| [TC-EMPCRT-029](#tc-empcrt-029-employee-saves-a-certification-and-it-appears-as-active) | Employee saves a certification and it appears as Active | Certifications | functional | critical |
| [TC-EMPCRT-030](#tc-empcrt-030-proof-link-must-start-with-http-or-https) | Proof link must start with http:// or https:// | Certifications | negative | high |
| [TC-EMPCRT-031](#tc-empcrt-031-proof-file-over-5-mb-is-rejected) | Proof file over 5 MB is rejected | Certifications | negative | high |
| [TC-EMPCRT-032](#tc-empcrt-032-issue-date-cannot-be-in-the-future-ui) | Issue date cannot be in the future (UI) | Certifications | negative | high |
| [TC-EMPCRT-033](#tc-empcrt-033-title-longer-than-200-characters-shows-a-message) | Title longer than 200 characters shows a message | Certifications | negative | low |
| [TC-EMPCRT-034](#tc-empcrt-034-wrong-file-type-is-not-accepted-as-proof) | Wrong file type is not accepted as proof | Certifications | negative | low |
| [TC-EMPCRT-035](#tc-empcrt-035-api-rejects-expiry-on-or-before-issue-date) | API rejects expiry on or before issue date | Certifications | negative | high |
| [TC-EMPCRT-036](#tc-empcrt-036-api-rejects-other-invalid-saves) | API rejects other invalid saves | Certifications | negative | high |
| [TC-EMPCRT-037](#tc-empcrt-037-api-rejects-a-future-issue-date) | API rejects a future issue date | Certifications | negative | high |
| [TC-EMPCRT-038](#tc-empcrt-038-api-rejects-expiry-beyond-the-partnership-validity) | API rejects expiry beyond the partnership validity | Certifications | negative | high |
| [TC-EMPCRT-039](#tc-empcrt-039-api-rejects-non-http-s-proof-links) | API rejects non-http(s) proof links | Certifications | negative | medium |
| [TC-EMPCRT-040](#tc-empcrt-040-employee-cannot-reach-organisation-or-new-joiners-by-url) | Employee cannot reach Organisation or New Joiners by URL | Certifications | security | critical |
| [TC-EMPCRT-041](#tc-empcrt-041-pm-and-tm-see-my-certificate-organisation-level-only) | PM and TM see My Certificate + Organisation Level only | Certifications | security | high |
| [TC-EMPCRT-042](#tc-empcrt-042-employee-api-new-joiners-and-program-owners-are-forbidden-other-data-limited-to-self) | Employee API: New Joiners and Program Owners are forbidden; other data limited to self | Certifications | security | critical |
| [TC-EMPCRT-043](#tc-empcrt-043-employee-cannot-add-a-certification-for-someone-else-via-the-api) | Employee cannot add a certification for someone else via the API | Certifications | security | critical |
| [TC-EMPCRT-044](#tc-empcrt-044-only-admin-sees-add-partnership-add-program-owner-and-only-on-organisation-level) | Only Admin sees Add Partnership / Add Program Owner, and only on Organisation Level | Certifications | security | high |
| [TC-EMPCRT-045](#tc-empcrt-045-pmo-ui-and-api-agree-on-organisation-access) | PMO: UI and API agree on organisation access | Certifications | security | high |
| [TC-EMPCRT-050](#tc-empcrt-050-empty-values-use-a-readable-word-not-n-a) | Empty values use a readable word, not N/A | Certifications | accessibility | low |
| [TC-EMPCRT-051](#tc-empcrt-051-count-button-labels-read-correctly-for-1-holder) | Count button labels read correctly for 1 holder | Certifications | accessibility | low |
| [TC-EMPCRT-052](#tc-empcrt-052-add-certification-drawer-is-fully-labelled) | Add Certification drawer is fully labelled | Certifications | accessibility | medium |

---

## Certifications

44 test cases.

### Accessibility (3)

#### TC-EMPCRT-050 — Empty values use a readable word, not N/A

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | New Joiners List |
| **Notes** | Currently FAILS: Aarav Patel shows 'N/A' as designation. |

**Preconditions**

Logged in as Admin

**Steps**

1. Open New Joiners List
2. Read each employee's designation line

**Expected**

No cell shows a bare 'N/A', '-' or 'null' (project empty-data convention)

#### TC-EMPCRT-051 — Count button labels read correctly for 1 holder

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |
| **Lifecycle Reason** | 6.9.0 (SI4-T1685) removed the 'Show the N employees holding' count buttons |
| **Lifecycle Status** | superseded |
| **Notes** | Currently reads 'Show the 1 employees holding …'. |
| **Replaced By** | TC-EMPCRT-142 |

**Preconditions**

A catalogue row has 1 employee

**Steps**

1. Inspect the Employees count button's accessible name

**Expected**

'Show the 1 employee holding X' (singular)

#### TC-EMPCRT-052 — Add Certification drawer is fully labelled

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Open the drawer
2. Check accessible names

**Expected**

Every field, the switch (admin), date buttons and the upload zone have accessible names; Close button present

### Functional (20)

#### TC-EMPCRT-010 — My Certificate rows match the /certifications/mine API

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | My Certificate |

**Preconditions**

Admin has at least one certification

**Steps**

1. Open My Certificate
2. Read the row count and the 'Showing x - y of N' footer
3. Call GET /api/v1/certifications/mine?page=1&limit=100

**Expected**

UI row count and footer total equal API data.total; each row's title appears in the API items

#### TC-EMPCRT-011 — Organisation KPI cards match /certifications/organisation/summary

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Organisation Level
2. Read the 4 KPI numbers
3. Call GET /certifications/organisation/summary

**Expected**

Total, Active, Expired, Need Attention equal API total/active/expired/needAttention

#### TC-EMPCRT-012 — Total certifications = Active + Expired

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Organisation Level
2. Read KPI cards

**Expected**

Total == Active + Expired

#### TC-EMPCRT-013 — Each catalogue row: Employees = Active + Expired

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |
| **Lifecycle Reason** | 6.9.0 (SI4-T1685) removed the catalogue count columns; Organisation Level is grouped by certificate now |
| **Lifecycle Status** | superseded |
| **Notes** | Currently FAILS: when one employee holds the same title more than once, Employees counts people (1) but Active/Expired count certificates (3) — row 'QA-NEG probe - please delete' shows 1 / 3 / 0. |
| **Replaced By** | TC-EMPCRT-139 |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Organisation Level
2. For every row read Employees, Active, Expired

**Expected**

Employees equals Active + Expired on every row (blank counts read as 0)

#### TC-EMPCRT-014 — Search filters the catalogue by title or partnership and is kept in the URL

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Organisation Level
2. Type 'snow' in the search box

**Expected**

Only rows whose title or partnership contains 'snow' remain; URL gains search=snow; KPI cards re-scope

#### TC-EMPCRT-015 — Search with no match shows the empty state

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |

**Preconditions**

Logged in as Admin

**Steps**

1. Search for 'zzzqqq-no-match'

**Expected**

'No certifications found' + 'No certifications match your search or filters.'

#### TC-EMPCRT-016 — Department filter re-scopes table and KPIs and survives reload

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Organisation Level
2. Pick FRONT END in the department filter
3. Reload

**Expected**

URL gains departmentId=<id>; KPI Total equals summary API for that department; after reload FRONT END still selected and same rows

#### TC-EMPCRT-017 — Partnership filter lists every partnership from the API

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | My Certificate |

**Preconditions**

Logged in as Admin

**Steps**

1. Open My Certificate
2. Open the Partnership column filter

**Expected**

Options equal the names from GET /certifications/partnerships, sorted A–Z; Clear and Save buttons present

#### TC-EMPCRT-018 — Status filter offers Active and Expired

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | My Certificate |

**Preconditions**

Logged in as Admin

**Steps**

1. Open the Status column filter

**Expected**

Options exactly Active, Expired

#### TC-EMPCRT-019 — 'View employees holding' opens the Certificate Holders page with matching rows

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Certificate Holders |
| **Lifecycle Reason** | 6.9.0 (SI4-T1685) removed the View employees holding button; holders route kept only for old links |
| **Lifecycle Status** | superseded |
| **Replaced By** | TC-EMPCRT-140 |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Organisation Level
2. Click the eye icon on 'AWS Developer - Associate'

**Expected**

URL /employee/certifications/holders?partnershipId=…&title=…; holder rows = that row's Employees count; Active/Expired statuses match the row's counts

#### TC-EMPCRT-020 — Clicking an Expired count lists the expired holders

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |
| **Lifecycle Reason** | 6.9.0 (SI4-T1685) removed the per-certificate expired count popover |
| **Lifecycle Status** | superseded |
| **Replaced By** | TC-EMPCRT-141 |

**Preconditions**

A catalogue row has Expired > 0

**Steps**

1. Click the Expired count badge on a row

**Expected**

Popover titled Expired lists exactly that many employee names

#### TC-EMPCRT-021 — New Joiners: Follow-Up follows Certifications Added

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | New Joiners List |

**Preconditions**

Logged in as Admin

**Steps**

1. Open New Joiners List

**Expected**

Rows with Certifications Added = Yes show 'No action needed'; rows with No show a 'Send Reminder' button (or 'No action needed')

#### TC-EMPCRT-022 — Admin can add on behalf of another employee

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Admin

**Steps**

1. Open Add Certification
2. Turn on 'Adding on Behalf of another employee'

**Expected**

A 'Select Employee' searchable combobox appears above Partnership

#### TC-EMPCRT-023 — Never-expires partnership disables Expire Date

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Open Add Certification
2. Pick partnership Claude (NEVER_EXPIRES)

**Expected**

Expire Date is disabled and empty; hint 'This partnership never expires.'; asterisk removed

#### TC-EMPCRT-024 — Standard partnership auto-fills Expire Date from the partnership validity

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Pick Partnership 1 (12 months)
2. Pick today as the issue date
3. Switch to AWS (3 years)

**Expected**

Expire Date = today + 12 months for Partnership 1 and today + 3 years for AWS; field is read-only

#### TC-EMPCRT-025 — Save Certification enables only when every required field is filled

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Fill partnership, title, issue date, proof URL one by one

**Expected**

Save stays disabled until the last required field is filled, then enables

#### TC-EMPCRT-026 — Uploading a valid PDF counts as proof

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Fill the form without a link
2. Upload a small PDF

**Expected**

File name shows in the drop zone; Save enables

#### TC-EMPCRT-027 — Cancel closes the drawer without saving

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Fill some fields
2. Click Cancel

**Expected**

Drawer closes; no POST /certifications sent; list unchanged

#### TC-EMPCRT-028 — Tab deep links open the right tab

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | My Certificate |

**Preconditions**

Logged in as Admin

**Steps**

1. Open ?tab=organisation
2. Open ?tab=new-joiners

**Expected**

Matching tab is selected on load

#### TC-EMPCRT-029 — Employee saves a certification and it appears as Active

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | No |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |
| **Notes** | Manual only: there is no edit or delete (UI or API), so every automated run would leave a permanent record on dev. |

**Preconditions**

Employee has no matching cert; test data can be cleaned up

**Steps**

1. Add a cert with Partnership 1, issue date in the past, proof link
2. Save

**Expected**

Toast 'Certification added.'; row appears with Status Active and correct dates; Organisation totals go up by 1

### Negative (10)

#### TC-EMPCRT-030 — Proof link must start with http:// or https://

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Type 'notaurl', 'ftp://x.com', 'javascript:alert(1)' in Proof of Certification, blurring each time

**Expected**

Each shows 'Enter a valid URL starting with http:// or https://.'; https://example.com shows no error

#### TC-EMPCRT-031 — Proof file over 5 MB is rejected

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Upload a 6 MB PDF

**Expected**

'The file must be 5 MB or smaller.'; Save stays disabled

#### TC-EMPCRT-032 — Issue date cannot be in the future (UI)

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Open the Issue Date calendar

**Expected**

Tomorrow and later days are disabled

#### TC-EMPCRT-033 — Title longer than 200 characters shows a message

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |
| **Notes** | Currently FAILS: Save silently disables with no message (the string exists in the app but is never shown). |

**Preconditions**

Logged in as Employee

**Steps**

1. Fill a valid form
2. Enter a 201-character title

**Expected**

Save disabled AND the message 'Must be 200 characters or fewer.' is shown next to the field

#### TC-EMPCRT-034 — Wrong file type is not accepted as proof

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |
| **Notes** | Observation: no message is shown either — the user gets no feedback. |

**Preconditions**

Logged in as Employee

**Steps**

1. Upload a .txt file

**Expected**

File is not attached; Save stays disabled

#### TC-EMPCRT-035 — API rejects expiry on or before issue date

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | API |

**Preconditions**

Employee session

**Steps**

1. POST /api/v1/certifications with expiryDate = issueDate, then expiryDate < issueDate

**Expected**

400 'Expiry date must be after the issue date' both times

#### TC-EMPCRT-036 — API rejects other invalid saves

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | API |

**Preconditions**

Employee session

**Steps**

1. POST with: no proof; blank title; 201-char title; expiry for a never-expires partnership; unknown partnershipId; javascript: proof URL; dd/mm/yyyy date

**Expected**

Each returns 400/404 with a field message; nothing is created

#### TC-EMPCRT-037 — API rejects a future issue date

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | API |
| **Notes** | DEFECT: API returns 201 and the cert shows as Active with a future issue date. Manual only — automating would create a permanent record each run. |

**Preconditions**

Employee session

**Steps**

1. POST with issueDate 2027-01-01, expiryDate 2028-01-01

**Expected**

400 — matches the UI rule that future days are disabled

#### TC-EMPCRT-038 — API rejects expiry beyond the partnership validity

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | API |
| **Notes** | DEFECT: API returns 201. The UI auto-fills expiry, but any client or script can bypass it. |

**Preconditions**

Employee session

**Steps**

1. POST for Partnership 1 (12 months) with issue 2026-10-12, expiry 2030-01-01

**Expected**

400 'Expire date is beyond the partnership validity period.'

#### TC-EMPCRT-039 — API rejects non-http(s) proof links

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | API |
| **Notes** | DEFECT: API returns 201 for ftp:// (javascript: is rejected). |

**Preconditions**

Employee session

**Steps**

1. POST with proofUrl ftp://example.com/x

**Expected**

400 — the UI only allows http/https

### Security (6)

#### TC-EMPCRT-040 — Employee cannot reach Organisation or New Joiners by URL

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | My Certificate |

**Preconditions**

Logged in as Employee

**Steps**

1. Open ?tab=organisation
2. Open ?tab=new-joiners

**Expected**

No tabs, no KPI cards, no org or new-joiner data rendered

#### TC-EMPCRT-041 — PM and TM see My Certificate + Organisation Level only

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PM (hardik.trivedi), TM (sudhansu.patel) |
| **Sub Module** | My Certificate |

**Preconditions**

Logged in as PM / TM

**Steps**

1. Open the page
2. Open ?tab=new-joiners

**Expected**

Tabs exactly My Certificate, Organisation Level; new-joiners link falls back to My Certificate

#### TC-EMPCRT-042 — Employee API: New Joiners and Program Owners are forbidden; other data limited to self

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | API |

**Preconditions**

Employee session

**Steps**

1. GET /certifications/new-joiners
2. GET /certifications/program-owners
3. GET /certifications and /certifications/mine
4. GET /certifications/organisation/summary

**Expected**

403, 403; /certifications returns only the employee's own certificates; the org summary total equals the employee's own total

#### TC-EMPCRT-043 — Employee cannot add a certification for someone else via the API

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | API |

**Preconditions**

Employee session

**Steps**

1. POST /certifications with employeeId of another employee

**Expected**

403 Access forbidden; nothing created

#### TC-EMPCRT-044 — Only Admin sees Add Partnership / Add Program Owner, and only on Organisation Level

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin, PM, Employee |
| **Sub Module** | My Certificate |

**Preconditions**

Sessions for each

**Steps**

1. Open Organisation Level as Admin
2. Open the page as PM and Employee

**Expected**

Admin: both buttons on Organisation Level, not on My Certificate; PM/Employee: neither button; Employee: no 'Adding on Behalf' switch

#### TC-EMPCRT-045 — PMO: UI and API agree on organisation access

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | PMO (bhumi.chauhan) |
| **Sub Module** | My Certificate |
| **Notes** | NEEDS PRODUCT DECISION: PMO UI shows only My Certificate, yet the API returns all 154 org certs incl. every employee's name, department and proof link. |

**Preconditions**

PMO session

**Steps**

1. Open the page as PMO
2. GET /certifications/organisation and /certifications

**Expected**

Either PMO sees the Organisation tab, or the API returns no org-wide data

### Smoke (5)

#### TC-EMPCRT-001 — Certifications opens from Employee > Certifications with three tabs for Admin

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | My Certificate |

**Preconditions**

Logged in as Admin

**Steps**

1. Open the app
2. Expand Employee in the sidebar
3. Click Certifications

**Expected**

URL /employee/certifications; heading 'Certifications'; tabs My Certificate / Organisation Level / New Joiners List with My Certificate selected; 'Add Certification' button visible

**Automation Hint**

sidebar link href=/employee/certifications; getByRole('tab')

#### TC-EMPCRT-002 — Employee sees only their own list with no tabs

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | My Certificate |

**Preconditions**

Logged in as plain Employee

**Steps**

1. Open /employee/certifications

**Expected**

Page loads; no tablist; table headers Certification Title, Partnership, Status, Issue Date, Expiry Date, Actions; 'Add Certification' visible

#### TC-EMPCRT-003 — Organisation Level shows KPI cards and the certification catalogue

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | Organisation Level |

**Preconditions**

Logged in as Admin

**Steps**

1. Open /employee/certifications?tab=organisation

**Expected**

KPI cards Total certifications, Active, Expired, Need Attention; table with Certification Title, Partnership, Employees, Active, Expired, Actions; at least one row

#### TC-EMPCRT-004 — New Joiners List loads for Admin

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Admin (ceo@simformsolutions.com, primaryPage) |
| **Sub Module** | New Joiners List |

**Preconditions**

Logged in as Admin

**Steps**

1. Open /employee/certifications?tab=new-joiners

**Expected**

Table headers Employee Name, Department, Date of Joining, Certifications Added, Follow-Up; rows load

#### TC-EMPCRT-005 — Add Certification drawer opens with all required fields

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | Live exploration 2026-10-14 (SimERP 6.4.2, dev) + app UI strings in the shipped bundle — no FRD/Zoho task/release note exists yet |
| **Automatable** | Yes |
| **Priority** | critical |
| **Severity** | critical |
| **Provenance** | observed-live |
| **Confidence** | observed-live |
| **Role** | Employee (kashyap.patel, empPage) |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee

**Steps**

1. Click Add Certification

**Expected**

Drawer 'Add Certification' with Partnership*, Certification Title*, Issue Date*, Expire Date*, Proof of Certification* (link or file); Save Certification disabled
