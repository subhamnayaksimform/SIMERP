# Certifications — Test Cases

**Total test cases:** 99  
**Modules covered:** Certifications  
**Source:** `reports/test-cases/cases-2026-10-23-EMPCRT-certifications-all.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 53 | 53.5% |
| negative | 21 | 21.2% |
| security | 15 | 15.2% |
| smoke | 5 | 5.1% |
| accessibility | 4 | 4.0% |
| boundary | 1 | 1.0% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 48 | 48.5% |
| medium | 30 | 30.3% |
| low | 15 | 15.2% |
| critical | 6 | 6.1% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| high | 41 | 41.4% |
| medium | 35 | 35.4% |
| low | 17 | 17.2% |
| critical | 6 | 6.1% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| observed-live | 38 | 38.4% |
| live-ui | 37 | 37.4% |
| requirement-vs-live | 14 | 14.1% |
| code-review | 10 | 10.1% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| verified-live | 51 | 51.5% |
| observed-live | 38 | 38.4% |
| code-review | 10 | 10.1% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 80 | 80.8% |
| No | 19 | 19.2% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 53 | 53.5% |
| @negative | 21 | 21.2% |
| @security | 15 | 15.2% |
| @regression | 14 | 14.1% |
| @smoke | 5 | 5.1% |
| @a11y | 4 | 4.0% |
| @boundary | 2 | 2.0% |
| @profile | 2 | 2.0% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPCRT-001](#tc-empcrt-001-certifications-opens-from-employee-certifications-with-four-tabs-for-admin) | Certifications opens from Employee > Certifications with four tabs for Admin | Certifications | smoke | high |
| [TC-EMPCRT-002](#tc-empcrt-002-employee-sees-only-their-own-list-with-no-tabs) | Employee sees only their own list with no tabs | Certifications | smoke | critical |
| [TC-EMPCRT-003](#tc-empcrt-003-organisation-level-shows-kpi-cards-and-the-certification-catalogue) | Organisation Level shows KPI cards and the certification catalogue | Certifications | smoke | critical |
| [TC-EMPCRT-004](#tc-empcrt-004-new-joiners-list-loads-for-admin) | New Joiners List loads for Admin | Certifications | smoke | high |
| [TC-EMPCRT-005](#tc-empcrt-005-add-certification-drawer-opens-with-all-fields) | Add Certification drawer opens with all fields | Certifications | smoke | high |
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
| [TC-EMPCRT-023](#tc-empcrt-023-never-expires-certificate-has-no-expire-date-to-pick) | Never-expires certificate has no Expire Date to pick | Certifications | functional | medium |
| [TC-EMPCRT-024](#tc-empcrt-024-standard-certificate-pre-fills-expire-date-from-its-validity-and-caps-the-calendar) | Standard certificate pre-fills Expire Date from its validity and caps the calendar | Certifications | functional | high |
| [TC-EMPCRT-025](#tc-empcrt-025-save-enables-only-when-every-required-field-is-filled) | Save enables only when every required field is filled | Certifications | functional | high |
| [TC-EMPCRT-026](#tc-empcrt-026-uploading-a-valid-pdf-counts-as-proof) | Uploading a valid PDF counts as proof | Certifications | functional | medium |
| [TC-EMPCRT-027](#tc-empcrt-027-cancel-closes-the-drawer-without-saving) | Cancel closes the drawer without saving | Certifications | functional | medium |
| [TC-EMPCRT-028](#tc-empcrt-028-tab-deep-links-open-the-right-tab) | Tab deep links open the right tab | Certifications | functional | medium |
| [TC-EMPCRT-029](#tc-empcrt-029-employee-saves-a-certification-and-it-appears-as-active) | Employee saves a certification and it appears as Active | Certifications | functional | critical |
| [TC-EMPCRT-030](#tc-empcrt-030-proof-link-must-start-with-http-or-https) | Proof link must start with http:// or https:// | Certifications | negative | high |
| [TC-EMPCRT-031](#tc-empcrt-031-proof-file-over-5-mb-is-rejected) | Proof file over 5 MB is rejected | Certifications | negative | high |
| [TC-EMPCRT-032](#tc-empcrt-032-issue-date-cannot-be-in-the-future-ui) | Issue date cannot be in the future (UI) | Certifications | negative | high |
| [TC-EMPCRT-033](#tc-empcrt-033-exam-email-must-be-a-valid-address) | Exam Email must be a valid address | Certifications | negative | medium |
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
| [TC-EMPCRT-053](#tc-empcrt-053-proof-link-error-appears-while-typing-without-blur) | Proof link error appears while typing, without blur | Certifications | negative | medium |
| [TC-EMPCRT-054](#tc-empcrt-054-proof-link-host-must-have-a-dot-and-a-letter-tld-or-be-a-valid-ipv4-address) | Proof link host must have a dot and a letter TLD, or be a valid IPv4 address | Certifications | negative | medium |
| [TC-EMPCRT-055](#tc-empcrt-055-clearing-a-bad-proof-link-removes-the-old-url-error) | Clearing a bad proof link removes the old URL error | Certifications | negative | low |
| [TC-EMPCRT-056](#tc-empcrt-056-expire-date-follows-the-issue-date-every-time-not-only-the-first-fill) | Expire Date follows the issue date every time (not only the first fill) | Certifications | functional | high |
| [TC-EMPCRT-057](#tc-empcrt-057-switching-between-never-expires-and-standard-partnerships-resets-expire-date) | Switching between never-expires and standard partnerships resets Expire Date | Certifications | functional | medium |
| [TC-EMPCRT-058](#tc-empcrt-058-month-end-and-leap-day-expiry-calculation) | Month-end and leap-day expiry calculation | Certifications | boundary | medium |
| [TC-EMPCRT-059](#tc-empcrt-059-add-partnership-website-uses-the-same-host-rule) | Add Partnership website uses the same host rule | Certifications | negative | medium |
| [TC-EMPCRT-060](#tc-empcrt-060-linkedin-field-info-tooltip) | LinkedIn field info tooltip | Certifications | functional | low |
| [TC-EMPCRT-061](#tc-empcrt-061-country-subdomain-linkedin-url-is-accepted-and-normalised) | Country-subdomain LinkedIn URL is accepted and normalised | Certifications | functional | low |
| [TC-EMPCRT-062](#tc-empcrt-062-pmo-login-as-an-employee-certifications-follow-the-impersonated-user) | PMO "Login as" an Employee: Certifications follow the impersonated user | Certifications | security | high |
| [TC-EMPCRT-063](#tc-empcrt-063-a-partnership-added-by-admin-is-selectable-in-the-employee-add-certification-form) | A partnership added by Admin is selectable in the Employee Add Certification form | Certifications | functional | high |
| [TC-EMPCRT-064](#tc-empcrt-064-a-certificate-type-s-1-year-validity-pre-fills-expire-date) | A certificate type's 1-year validity pre-fills Expire Date | Certifications | functional | high |
| [TC-EMPCRT-065](#tc-empcrt-065-a-self-added-certification-shows-in-the-employee-s-my-certificate-list) | A self-added certification shows in the Employee's My Certificate list | Certifications | functional | high |
| [TC-EMPCRT-066](#tc-empcrt-066-a-certification-added-on-behalf-lands-on-the-chosen-employee-not-on-the-adder) | A certification added on behalf lands on the chosen employee, not on the adder | Certifications | functional | high |
| [TC-EMPCRT-067](#tc-empcrt-067-saved-certifications-roll-up-to-the-organisation-catalogue-and-holders-page) | Saved certifications roll up to the Organisation catalogue and holders page | Certifications | functional | high |
| [TC-EMPCRT-068](#tc-empcrt-068-the-organisation-partnership-filter-lists-the-new-partnership) | The Organisation Partnership filter lists the new partnership | Certifications | functional | low |
| [TC-EMPCRT-069](#tc-empcrt-069-add-partnership-holds-only-the-vendor-name-website-and-badge-colour) | Add Partnership holds only the vendor: name, website and badge colour | Certifications | functional | medium |
| [TC-EMPCRT-070](#tc-empcrt-070-on-behalf-employee-picker-is-scoped-to-the-manager-s-own-departments) | On-behalf employee picker is scoped to the manager's own departments | Certifications | security | high |
| [TC-EMPCRT-071](#tc-empcrt-071-employee-csm-and-pmo-get-no-on-behalf-switch) | Employee, CSM and PMO get no on-behalf switch | Certifications | security | high |
| [TC-EMPCRT-072](#tc-empcrt-072-after-saving-a-certification-saved-confirmation-screen-is-shown) | After saving, a "Certification Saved" confirmation screen is shown | Certifications | functional | medium |
| [TC-EMPCRT-073](#tc-empcrt-073-manager-hr-and-the-employee-are-notified-when-a-certification-is-saved) | Manager, HR and the employee are notified when a certification is saved | Certifications | functional | medium |
| [TC-EMPCRT-074](#tc-empcrt-074-certificate-title-is-picked-from-a-master-list-with-fuzzy-search) | Certificate Title is picked from a master list with fuzzy search | Certifications | functional | high |
| [TC-EMPCRT-075](#tc-empcrt-075-em-can-add-a-certification-on-behalf-of-their-department) | EM can add a certification on behalf of their department | Certifications | security | medium |
| [TC-EMPCRT-076](#tc-empcrt-076-rm-can-add-only-for-direct-reportees) | RM can add only for direct reportees | Certifications | security | medium |
| [TC-EMPCRT-077](#tc-empcrt-077-employee-profile-shows-a-read-only-certifications-card-with-an-add-certification-button) | Employee profile shows a read-only Certifications card with an Add Certification button | Certifications | functional | low |
| [TC-EMPCRT-078](#tc-empcrt-078-add-partnership-is-visible-only-to-chintan) | Add Partnership is visible only to Chintan | Certifications | security | medium |
| [TC-EMPCRT-079](#tc-empcrt-079-need-attention-uses-one-agreed-reminder-window) | "Need Attention" uses one agreed reminder window | Certifications | functional | medium |
| [TC-EMPCRT-080](#tc-empcrt-080-records-show-days-left-days-overdue-expiry-tags) | Records show days-left / days-overdue expiry tags | Certifications | functional | low |
| [TC-EMPCRT-081](#tc-empcrt-081-partnership-list-matches-the-agreed-list) | Partnership list matches the agreed list | Certifications | functional | low |
| [TC-EMPCRT-082](#tc-empcrt-082-employee-can-confirm-i-don-t-have-any-active-certification-for-now) | Employee can confirm "I don't have any active certification for now" | Certifications | functional | low |
| [TC-EMPCRT-083](#tc-empcrt-083-add-partnership-rejects-a-duplicate-partnership-name) | Add Partnership rejects a duplicate partnership name | Certifications | negative | medium |
| [TC-EMPCRT-084](#tc-empcrt-084-add-partnership-shows-messages-for-an-invalid-website-and-an-over-long-name) | Add Partnership shows messages for an invalid website and an over-long name | Certifications | negative | low |
| [TC-EMPCRT-085](#tc-empcrt-085-org-wide-table-and-tab-names-match-the-journey) | Org Wide table and tab names match the journey | Certifications | functional | low |
| [TC-EMPCRT-086](#tc-empcrt-086-edit-opens-pre-filled-with-partnership-and-certificate-locked) | Edit opens pre-filled with Partnership and Certificate locked | Certifications | functional | high |
| [TC-EMPCRT-087](#tc-empcrt-087-saving-an-edit-sends-only-the-changed-field-and-keeps-the-record) | Saving an edit sends only the changed field and keeps the record | Certifications | functional | high |
| [TC-EMPCRT-088](#tc-empcrt-088-edit-calendar-does-not-offer-expiry-dates-past-the-certificate-validity) | Edit calendar does not offer expiry dates past the certificate validity | Certifications | negative | medium |
| [TC-EMPCRT-089](#tc-empcrt-089-edit-calendar-blocks-a-future-issue-date) | Edit calendar blocks a future issue date | Certifications | negative | medium |
| [TC-EMPCRT-090](#tc-empcrt-090-a-stored-exam-email-can-be-cleared-from-the-edit-drawer) | A stored Exam Email can be cleared from the Edit drawer | Certifications | functional | low |
| [TC-EMPCRT-091](#tc-empcrt-091-only-the-owner-admin-or-program-owner-can-edit-a-certificate) | Only the owner, Admin or Program Owner can edit a certificate | Certifications | security | high |
| [TC-EMPCRT-092](#tc-empcrt-092-edit-api-rejects-invalid-values-and-leaves-the-record-unchanged) | Edit API rejects invalid values and leaves the record unchanged | Certifications | negative | high |
| [TC-EMPCRT-093](#tc-empcrt-093-edit-api-rejects-a-future-issue-date-an-expiry-past-validity-and-an-ftp-link) | Edit API rejects a future issue date, an expiry past validity and an ftp:// link | Certifications | negative | high |
| [TC-EMPCRT-094](#tc-empcrt-094-only-admin-can-add-certificate-types) | Only Admin can add certificate types | Certifications | security | high |
| [TC-EMPCRT-095](#tc-empcrt-095-add-certificate-type-fields-options-and-when-save-enables) | Add Certificate Type: fields, options and when Save enables | Certifications | functional | medium |
| [TC-EMPCRT-096](#tc-empcrt-096-certificate-type-api-rejects-invalid-and-duplicate-types) | Certificate type API rejects invalid and duplicate types | Certifications | negative | high |
| [TC-EMPCRT-097](#tc-empcrt-097-certificate-list-shows-only-the-chosen-partnership-s-types) | Certificate list shows only the chosen partnership's types | Certifications | functional | high |
| [TC-EMPCRT-098](#tc-empcrt-098-a-new-certificate-type-is-offered-to-employees-with-its-validity-and-level) | A new certificate type is offered to employees with its validity and level | Certifications | functional | high |
| [TC-EMPCRT-099](#tc-empcrt-099-recently-resigned-is-visible-to-admin-only) | Recently Resigned is visible to Admin only | Certifications | security | high |
| [TC-EMPCRT-100](#tc-empcrt-100-only-people-who-joined-in-the-last-6-months-and-resigned-are-listed-with-the-right-status) | Only people who joined in the last 6 months and resigned are listed, with the right status | Certifications | functional | high |
| [TC-EMPCRT-101](#tc-empcrt-101-employment-filter-and-search-narrow-the-list) | Employment filter and search narrow the list | Certifications | functional | medium |
| [TC-EMPCRT-102](#tc-empcrt-102-recently-resigned-shows-a-readable-word-for-missing-values) | Recently Resigned shows a readable word for missing values | Certifications | accessibility | low |
| [TC-EMPCRT-103](#tc-empcrt-103-a-certificate-of-a-new-type-lands-in-my-certificate-and-the-organisation-catalogue) | A certificate of a new type lands in My Certificate and the Organisation catalogue | Certifications | functional | high |
| [TC-EMPCRT-104](#tc-empcrt-104-an-on-behalf-certificate-new-form-reaches-the-employee-holders-page-and-recently-resigned-not-other-scopes) | An on-behalf certificate (new form) reaches the employee, holders page and Recently Resigned, not other scopes | Certifications | functional | high |
| [TC-EMPCRT-105](#tc-empcrt-105-moving-the-expiry-into-the-past-makes-the-certificate-expired-everywhere) | Moving the expiry into the past makes the certificate Expired everywhere | Certifications | functional | high |
| [TC-EMPCRT-106](#tc-empcrt-106-an-expiry-within-30-days-shows-the-banner-and-counts-as-need-attention) | An expiry within 30 days shows the banner and counts as Need Attention | Certifications | functional | high |
| [TC-EMPCRT-107](#tc-empcrt-107-replacing-the-proof-with-a-file-through-edit-stores-and-serves-the-new-file) | Replacing the proof with a file through Edit stores and serves the new file | Certifications | functional | medium |

---

## Certifications

99 test cases.

### Accessibility (4)

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

#### TC-EMPCRT-102 — Recently Resigned shows a readable word for missing values

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Recently Resigned |

**Preconditions**

Dev has resigned joiners.

**Steps**

1. Open Recently Resigned
2. Read every cell

**Expected**

No bare N/A, -, — or null; missing values use a word (e.g. "Not known yet").

**Automation Hint**

tests/e2e/employee/certifications/recently-resigned.spec.ts

### Boundary (1)

#### TC-EMPCRT-058 — Month-end and leap-day expiry calculation

| Field | Value |
| --- | --- |
| **Tags** | @boundary |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in; Employee → Certifications → Add Certification drawer open. Needs a monthly-validity partnership, or Partnership 1 with Feb 29 as the issue date. 

**Steps**

1. With a 1-month partnership, pick issue date 2026-01-31 and read Expire Date
2. With Partnership 1 (12 months), pick issue date 2024-02-29 and read Expire Date
3. Compare with what the API stores/accepts for the same values

**Expected**

date-fns clamps to the month end: 2026-02-28 and 2025-02-28. The API accepts the same value (UI and API agree).

**Test Data**

- `issueDates`: 2026-01-31, 2024-02-29

### Functional (53)

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

#### TC-EMPCRT-023 — Never-expires certificate has no Expire Date to pick

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Add Certification |

**Preconditions**

Certificate type Claude / Claude Prompt Engineering Essentials (never expires) exists.

**Steps**

1. Open Add Certification
2. Pick Partnership Claude
3. Pick Certificate Claude Prompt Engineering Essentials

**Expected**

The Expire Date picker is replaced by "This certificate never expires."

**Automation Hint**

tests/e2e/employee/certifications/functional.spec.ts

#### TC-EMPCRT-024 — Standard certificate pre-fills Expire Date from its validity and caps the calendar

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Add Certification |
| **Notes** | Updated 2026-10-23: expiry was read-only (SI4-I572); T1559 makes it an editable suggestion capped by the calendar. |

**Preconditions**

Types AWS / AWS Certified Cloud Practitioner (3 years) and Microsoft / Azure Fundamentals (AZ-900) (2 years) exist.

**Steps**

1. Pick AWS → AWS Certified Cloud Practitioner
2. Pick today as Issue Date
3. Open the Expire Date calendar
4. Switch to Microsoft → Azure Fundamentals (AZ-900)

**Expected**

Expire Date pre-fills to today + 3 years and stays editable; days after the cap are disabled; after switching, it re-fills to today + 2 years.

**Automation Hint**

tests/e2e/employee/certifications/functional.spec.ts

#### TC-EMPCRT-025 — Save enables only when every required field is filled

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in as Employee.

**Steps**

1. Pick Partnership AWS
2. Pick Certificate
3. Pick Issue Date
4. Enter a proof link

**Expected**

Save Certification stays disabled until the proof link is entered, then enables. Exam Email is not required.

**Automation Hint**

tests/e2e/employee/certifications/functional.spec.ts

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

#### TC-EMPCRT-056 — Expire Date follows the issue date every time (not only the first fill)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in; Employee → Certifications → Add Certification drawer open. 

**Steps**

1. Select Partnership 1 (12 months)
2. Pick an issue date of today−10 and read Expire Date
3. Change the issue date to today−40 and read Expire Date
4. Check whether Expire Date is editable

**Expected**

Expire Date first shows (today−10)+12 months, then (today−40)+12 months. The field stays disabled.

**Test Data**

- `partnership`: Partnership 1 (12 months)
- `issueDates`: today-10, today-40

#### TC-EMPCRT-057 — Switching between never-expires and standard partnerships resets Expire Date

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in; Employee → Certifications → Add Certification drawer open. 

**Steps**

1. Pick an issue date
2. Select AWS (3y) and read Expire Date
3. Select Claude (never expires) and read Expire Date
4. Select Partnership 1 (12m) and read Expire Date

**Expected**

Shows +3y, then empty and disabled with "This partnership never expires.", then +12m. There is no leftover value from the earlier partnership.

**Test Data**

- `partnerships`: AWS (3y), Claude (never), Partnership 1 (12m)

#### TC-EMPCRT-060 — LinkedIn field info tooltip

| Field | Value |
| --- | --- |
| **Tags** | @functional, @profile |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Profile edit (EMPDET) |

**Preconditions**

Logged in. 

**Steps**

1. Open Profile → Edit
2. Hover the info icon next to "LinkedIn Profile URL"
3. Tab to the icon with the keyboard

**Expected**

Tooltip "Example: https://www.linkedin.com/in/your-name". The icon has an aria-label and is reachable with the keyboard (tabIndex=0). Better placed in the profile (EMPDET) suite.

#### TC-EMPCRT-061 — Country-subdomain LinkedIn URL is accepted and normalised

| Field | Value |
| --- | --- |
| **Tags** | @functional, @profile |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I571) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Profile edit (EMPDET) |

**Preconditions**

Logged in. Record the original LinkedIn value to restore it. 

**Steps**

1. Open Profile → Edit
2. Enter in.linkedin.com/in/qa-test in LinkedIn Profile URL
3. Save and read the stored/shown value
4. Restore the original value

**Expected**

Accepted. It is shown or saved as https://www.linkedin.com/in/qa-test. Better placed in the EMPDET suite.

**Test Data**

- `linkedin`: in.linkedin.com/in/qa-test

#### TC-EMPCRT-063 — A partnership added by Admin is selectable in the Employee Add Certification form

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Sub Module** | Add Partnership |

**Preconditions**

QA-E2E data saved once on 2026-10-15: partnership "QA-E2E Partner 2026-10-15" (Standard, 1 year) and two certifications on kashyap.patel.

**Steps**

1. Open Employee → Certifications
2. Click Add Certification
3. Open the Partnership dropdown

**Expected**

"QA-E2E Partner 2026-10-15" is listed.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-064 — A certificate type's 1-year validity pre-fills Expire Date

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Add Certification |

**Preconditions**

Type QA-E2E Partner 2026-10-15 / QA-E2E sample certificate (1 year, migrated from the partnership).

**Steps**

1. Pick QA-E2E Partner 2026-10-15 → QA-E2E sample certificate
2. Pick today as Issue Date

**Expected**

Expire Date shows today + 1 year.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-065 — A self-added certification shows in the Employee's My Certificate list

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Sub Module** | My Certificate |

**Preconditions**

QA-E2E data saved once on 2026-10-15: partnership "QA-E2E Partner 2026-10-15" (Standard, 1 year) and two certifications on kashyap.patel.

**Steps**

1. Open Employee → Certifications

**Expected**

Row "QA-E2E self-add 2026-10-15 - please delete" shows QA-E2E Partner 2026-10-15, Active, 15/10/2026, 15/10/2027.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-066 — A certification added on behalf lands on the chosen employee, not on the adder

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) + Admin (ceo@simformsolutions.com) |
| **Sub Module** | Add on Behalf |

**Preconditions**

QA-E2E data saved once on 2026-10-15: partnership "QA-E2E Partner 2026-10-15" (Standard, 1 year) and two certifications on kashyap.patel.

**Steps**

1. As Employee, open My Certificate
2. As Admin, open My Certificate

**Expected**

The on-behalf record is in the Employee's list and not in Admin's own list. Saved directly, no approval step.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-067 — Saved certifications roll up to the Organisation catalogue and holders page

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Organisation Level |

**Preconditions**

QA-E2E data saved once on 2026-10-15: partnership "QA-E2E Partner 2026-10-15" (Standard, 1 year) and two certifications on kashyap.patel.

**Steps**

1. Open Organisation Level, search QA-E2E
2. Check both rows
3. Open the holders view for the self-add row

**Expected**

Each row: Employees 1, Active 1, Expired 0. Holders page lists Kashyap Patel, DATA ENGINEERING.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-068 — The Organisation Partnership filter lists the new partnership

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Organisation Level |

**Preconditions**

QA-E2E data saved once on 2026-10-15: partnership "QA-E2E Partner 2026-10-15" (Standard, 1 year) and two certifications on kashyap.patel.

**Steps**

1. Open Organisation Level
2. Open Filter by Partnership

**Expected**

QA-E2E Partner 2026-10-15 is an option.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-069 — Add Partnership holds only the vendor: name, website and badge colour

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Add Partnership |

**Preconditions**

Logged in as Admin.

**Steps**

1. Organisation Level → Add Partnership
2. Check the fields
3. Enter a name
4. Enter "not a url" as website

**Expected**

Only Partnership Name, Partner Website and 8 badge colours; no expiry or category. Save enables with a name; an invalid website shows "Enter a valid URL starting with http:// or https://." and disables Save.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-072 — After saving, a "Certification Saved" confirmation screen is shown

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Sub Module** | Add Certification |

**Preconditions**

Valid Add Certification form.

**Steps**

1. Save a certification

**Expected**

PDF: confirmation screen with partnership + status badges, title, issued/expires dates, "Notification sent" note, visibility note and View My Certifications / Add Another. DEV 2026-10-15: drawer closes with a "Certification added." toast only — FAILS against the PDF.

#### TC-EMPCRT-073 — Manager, HR and the employee are notified when a certification is saved

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) + Admin (ceo@simformsolutions.com) |
| **Sub Module** | Notifications |

**Preconditions**

A certification saved for kashyap.patel (self and on behalf).

**Steps**

1. Check the notification bell / GET /notifications for the employee and for their RM

**Expected**

PDF: manager + HR notified; renewal reminder 90 days before expiry. DEV 2026-10-15: employee received no notification after the on-behalf save; RM (Rohan Yadav) and HR have no test account, so they could not be checked.

#### TC-EMPCRT-074 — Certificate Title is picked from a master list with fuzzy search

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Sub Module** | Add Certification |

**Preconditions**

Add Certification drawer open, Microsoft chosen.

**Steps**

1. Type "Azure" in Certification Title

**Expected**

PDF: searchable select, selection-only from the master list. DEV: free-text box ("Certification name"), no suggestions — any text is saved (e.g. the existing "1454" record). FAILS against the PDF.

#### TC-EMPCRT-077 — Employee profile shows a read-only Certifications card with an Add Certification button

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Employee Profile |

**Preconditions**

Open Employee → Kashyap Patel.

**Steps**

1. Look for a Certifications card next to Ratings / Location / Visa

**Expected**

PDF marks this as a GAP (not built). DEV: no card — matches the PDF. Re-test when built.

#### TC-EMPCRT-079 — "Need Attention" uses one agreed reminder window

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | low |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Organisation Level |

**Preconditions**

Organisation Level open.

**Steps**

1. Hover the Need Attention info icon

**Expected**

PDF says 60 days ("past the 60-day reminder stage") and the confirmation copy says 90 days; DEV tooltip says "Active certifications expiring within 30 days". Three different numbers — product must pick one.

#### TC-EMPCRT-080 — Records show days-left / days-overdue expiry tags

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Organisation Level |

**Preconditions**

Holders page open.

**Steps**

1. Look at a record's expiry

**Expected**

PDF: CONFIRMED expiry indicator tags. DEV: only Active/Expired status, no day counts. FAILS against the PDF.

#### TC-EMPCRT-081 — Partnership list matches the agreed list

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Sub Module** | Add Partnership |

**Preconditions**

Add Certification drawer open.

**Steps**

1. Open the Partnership dropdown

**Expected**

PDF list: Microsoft, AWS, Databricks, DataDog, dbtLabs, Claude, Snowflake, GCP, IBM, Lovable, Other. DEV: Databricks, dbtLabs, Lovable and Other are missing; test entries NPTEL, Partnership 1, Partnership 2 (and now QA-E2E) are present.

#### TC-EMPCRT-082 — Employee can confirm "I don't have any active certification for now"

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Sub Module** | My Certificate |

**Preconditions**

Employee with no certifications.

**Steps**

1. Look for the button

**Expected**

PDF lists it as a suggestion only. DEV: not present. Track if product accepts it.

#### TC-EMPCRT-085 — Org Wide table and tab names match the journey

| Field | Value |
| --- | --- |
| **Tags** | @functional, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Organisation Level |

**Preconditions**

Certifications open.

**Steps**

1. Compare tabs and Organisation table columns

**Expected**

PDF: tabs My Certifications / Department Level / Org Wide / New Joiners List; table per record (Title, Partnership, Employee, Dept, Status, Link). DEV: My Certificate / Organisation Level / New Joiners List; table is a catalogue grouped by title with Employees/Active/Expired counts and a holders drill-down. Wording/layout deviation — confirm with product.

#### TC-EMPCRT-086 — Edit opens pre-filled with Partnership and Certificate locked

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Edit Certification |

**Preconditions**

QA-E2E record "QA-E2E self-add 2026-10-21 - please delete" on kashyap.patel (1-year type, 21/10/2026 → 21/10/2027). Restore its values after any save.

**Steps**

1. Open My Certificate
2. Click Edit on the QA record

**Expected**

Every own row has Edit. Drawer "Edit Certification" shows the stored partnership, certificate (both disabled), dates and current proof link; no on-behalf switch; Save Changes is disabled until something changes.

**Automation Hint**

tests/e2e/employee/certifications/edit.spec.ts

#### TC-EMPCRT-087 — Saving an edit sends only the changed field and keeps the record

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Edit Certification |

**Preconditions**

QA-E2E record "QA-E2E self-add 2026-10-21 - please delete" on kashyap.patel (1-year type, 21/10/2026 → 21/10/2027). Restore its values after any save.

**Steps**

1. Edit the QA record
2. Enter Exam Email qa.edit@example.com
3. Save Changes
4. Re-open Edit

**Expected**

PATCH sends only examEmail; toast "Certification updated successfully"; drawer closes; dates and proof unchanged; re-opened form shows the email.

**Automation Hint**

tests/e2e/employee/certifications/edit.spec.ts

#### TC-EMPCRT-090 — A stored Exam Email can be cleared from the Edit drawer

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Edit Certification |
| **Lifecycle Reason** | 6.9.0 (SI4-T1685) made Exam Email mandatory; the API refuses a blank one, so clearing is no longer intended |
| **Lifecycle Status** | superseded |
| **Notes** | FAILS 2026-10-23: Save stays disabled; the frontend never sends an empty email (bug). |
| **Replaced By** | TC-EMPCRT-143 |

**Preconditions**

QA-E2E record "QA-E2E self-add 2026-10-21 - please delete" on kashyap.patel (1-year type, 21/10/2026 → 21/10/2027). Restore its values after any save. Set an Exam Email first.

**Steps**

1. Edit the QA record
2. Clear the Exam Email field

**Expected**

Save Changes enables and saving removes the email (the API supports clearing).

**Automation Hint**

tests/e2e/employee/certifications/edit.spec.ts

#### TC-EMPCRT-095 — Add Certificate Type: fields, options and when Save enables

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Certificate Types |
| **Notes** | FAILS 2026-10-23 on the Level label only: shows "Advance" (should be "Advanced"). |

**Preconditions**

Logged in as Admin.

**Steps**

1. Organisation Level → Add Certificate Type
2. Open Category and Level
3. Pick a partnership and enter a title
4. Choose Standard Expiration
5. Enter a validity

**Expected**

Category: Cloud, Data, AI, Security, Analytics, Observability. Level: Fundamental, Applied Skill, Intermediate, Advanced, Expert. Save enables with partnership + title (Never Expires default), disables on Standard until a validity is entered.

**Automation Hint**

tests/e2e/employee/certifications/certificate-types.spec.ts

#### TC-EMPCRT-097 — Certificate list shows only the chosen partnership's types

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Certificate Types |

**Preconditions**

Logged in as Employee.

**Steps**

1. Open Add Certification
2. Pick AWS and open Certificate
3. Pick Claude and open Certificate

**Expected**

Each list matches GET /types for that partnership exactly.

**Automation Hint**

tests/e2e/employee/certifications/certificate-types.spec.ts

#### TC-EMPCRT-098 — A new certificate type is offered to employees with its validity and level

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Certificate Types |

**Preconditions**

Type "QA-E2E type 2026-10-23 - please delete" (6 months, Fundamental) created by Admin on 2026-10-23.

**Steps**

1. Open Add Certification
2. Pick QA-E2E Partner 2026-10-15
3. Pick the new type
4. Pick today

**Expected**

Option reads "<title> · Fundamental"; Expire Date pre-fills to today + 6 months.

**Automation Hint**

tests/e2e/employee/certifications/certificate-types.spec.ts

#### TC-EMPCRT-100 — Only people who joined in the last 6 months and resigned are listed, with the right status

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Recently Resigned |

**Preconditions**

Dev has resigned joiners (seed data).

**Steps**

1. Open Recently Resigned
2. Compare rows with GET /resigned-joiners

**Expected**

Every row joined within the last 6 months and has a resignation date; past the last working day means "Left"; footer total matches the API; all 9 columns shown.

**Automation Hint**

tests/e2e/employee/certifications/recently-resigned.spec.ts

#### TC-EMPCRT-101 — Employment filter and search narrow the list

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Recently Resigned |

**Preconditions**

Dev has resigned joiners.

**Steps**

1. Filter by Left and by On notice (API)
2. Search by an employee first name

**Expected**

Left + On notice = total; search shows only that person's rows.

**Automation Hint**

tests/e2e/employee/certifications/recently-resigned.spec.ts

#### TC-EMPCRT-103 — A certificate of a new type lands in My Certificate and the Organisation catalogue

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee + Admin |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Edit Certification |

**Preconditions**

kashyap.patel saved "QA-E2E type 2026-10-23 - please delete" on 2026-10-23 with Exam Email kashyap.qa@example.com (approved).

**Steps**

1. Open My Certificate as Employee
2. Open Organisation Level as Admin and search the title

**Expected**

Row shows partnership and expiry 23/04/2027, status Active, email stored; catalogue row has 1 employee, 1 active, 0 expired.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-104 — An on-behalf certificate (new form) reaches the employee, holders page and Recently Resigned, not other scopes

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 full-flow test 2026-10-23 · docs/findings/2026-10-23-certifications-t1559-test-results.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin, Employee, PM |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Add on Behalf |

**Preconditions**

Admin added "QA-E2E sample certificate" on behalf of kashyap.patel on 2026-10-23 (approved).

**Steps**

1. Admin: Add Certification → on-behalf switch → pick Kashyap Patel → QA-E2E Partner → QA-E2E sample certificate → today → proof link → Exam Email → Save
2. Check kashyap My Certificate, Admin own list, holders page, Recently Resigned
3. PM opens the certificate by id

**Expected**

Saved 201 on Kashyap (not Admin), expiry today + 1 year, Active; owner can edit it; holders page lists Kashyap Patel; it appears under Recently Resigned (Kashyap is "Left" in seed data); PM (other department) gets 404.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-105 — Moving the expiry into the past makes the certificate Expired everywhere

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 full-flow test 2026-10-23 · docs/findings/2026-10-23-certifications-t1559-test-results.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee, Admin |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Edit Certification |

**Preconditions**

Per-browser QA record (restored after).

**Steps**

1. Edit dates to 01/07/2024 → 01/01/2025
2. Check status, My Certificate row, Expired filter, Organisation catalogue row

**Expected**

Status Expired in API and UI; listed by the Expired filter; catalogue row active −1, expired +1. Restored afterwards.

**Automation Hint**

tests/e2e/employee/certifications/edit.spec.ts

#### TC-EMPCRT-106 — An expiry within 30 days shows the banner and counts as Need Attention

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 full-flow test 2026-10-23 · docs/findings/2026-10-23-certifications-t1559-test-results.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee, Admin |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Edit Certification |

**Preconditions**

Per-browser QA record (restored after).

**Steps**

1. Edit expiry to ~18 days from today
2. Open My Certificate
3. Check Organisation Need Attention

**Expected**

Banner "1 certification expiring within 30 days. Renew and update the dates here — your manager has been reminded too."; expiringSoonCount and Need Attention go up by 1. Restored afterwards.

**Automation Hint**

tests/e2e/employee/certifications/edit.spec.ts

#### TC-EMPCRT-107 — Replacing the proof with a file through Edit stores and serves the new file

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1559 full-flow test 2026-10-23 · docs/findings/2026-10-23-certifications-t1559-test-results.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Edit Certification |

**Preconditions**

Per-browser QA record (restored after).

**Steps**

1. Edit → upload a PDF as proof → Save Changes
2. Open the new proof link

**Expected**

PATCH 200; proof moves to a new CloudFront PDF URL that downloads as application/pdf; View proof points at it. Restored afterwards.

**Automation Hint**

tests/e2e/employee/certifications/edit.spec.ts

### Negative (21)

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

#### TC-EMPCRT-033 — Exam Email must be a valid address

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | low |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Add Certification |
| **Notes** | Replaces the retired free-text title length case (titles are now picked from a list). |

**Preconditions**

Logged in as Employee.

**Steps**

1. Fill a valid form (never-expires type, today, proof link)
2. Type "not-an-email" in Exam Email and leave the field
3. Type "name@example.com"

**Expected**

An invalid email shows "…valid email address." and disables Save; a valid one re-enables it.

**Automation Hint**

tests/e2e/employee/certifications/negative.spec.ts

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

#### TC-EMPCRT-053 — Proof link error appears while typing, without blur

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in; Employee → Certifications → Add Certification drawer open. 

**Steps**

1. Type notaurl in Proof link
2. Do not tab out; read the field error
3. Replace the value with https://example.com/x
4. Do not press Save

**Expected**

"Enter a valid URL starting with http:// or https://." is visible straight away. Typing https://example.com/x clears it. Save is never pressed.

**Test Data**

- `invalid`: notaurl
- `valid`: https://example.com/x

#### TC-EMPCRT-054 — Proof link host must have a dot and a letter TLD, or be a valid IPv4 address

| Field | Value |
| --- | --- |
| **Tags** | @negative, @boundary |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in; Employee → Certifications → Add Certification drawer open. 

**Steps**

1. Enter each of https://dddddd, https://localhost/x, http://999.1.1.1/x, https://a.b1 in Proof link and check the error and Save
2. Enter each of https://credly.com/b/1, https://in.credly.com/x, http://10.0.0.1/x and check the error and Save

**Expected**

The first four show the invalid-URL message and keep Save disabled. The last three are accepted. Note for product: private IPs pass in the UI.

**Test Data**

- `rejected`: https://dddddd, https://localhost/x, http://999.1.1.1/x, https://a.b1
- `accepted`: https://credly.com/b/1, https://in.credly.com/x, http://10.0.0.1/x

#### TC-EMPCRT-055 — Clearing a bad proof link removes the old URL error

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Add Certification |

**Preconditions**

Logged in; Employee → Certifications → Add Certification drawer open. 

**Steps**

1. Type notaurl in Proof link (error shows)
2. Clear the field
3. Read the field message and Save state

**Expected**

The invalid-URL message disappears. Record what replaces it: "Add a verification link or upload the certificate." is expected because of the shared proof-required rule. It should not stay blank with Save enabled.

#### TC-EMPCRT-059 — Add Partnership website uses the same host rule

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1363 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-I572) |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Task Id** | 688906000093283028 |
| **Sub Module** | Add Partnership |

**Preconditions**

Logged in as Admin. 

**Steps**

1. Open Certifications → Organisation Level → Add Partnership
2. Enter Website = https://dddddd and do not save
3. Replace with https://aws.amazon.com

**Expected**

Invalid-URL message for https://dddddd. https://aws.amazon.com is accepted.

#### TC-EMPCRT-083 — Add Partnership rejects a duplicate partnership name

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Add Partnership |

**Preconditions**

Add Partnership open.

**Steps**

1. Type "AWS" as the name
2. Observe Save (do not submit unless a throwaway env)

**Expected**

Expected: duplicate blocked with a message. DEV UI: Save is enabled for "AWS"; server response not tested to avoid creating a duplicate on dev.

#### TC-EMPCRT-084 — Add Partnership shows messages for an invalid website and an over-long name

| Field | Value |
| --- | --- |
| **Tags** | @negative, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Add Partnership |

**Preconditions**

Add Partnership open.

**Steps**

1. Enter "not a url" as website
2. Enter a 300-character name

**Expected**

Expected: inline messages. DEV: invalid website just disables Save with no message; 300-character name accepted with no message or limit.

#### TC-EMPCRT-088 — Edit calendar does not offer expiry dates past the certificate validity

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Edit Certification |
| **Notes** | FAILS 2026-10-23: all later days are enabled and an expiry of 29/10/2027 saved (bug). |

**Preconditions**

QA-E2E record "QA-E2E self-add 2026-10-21 - please delete" on kashyap.patel (1-year type, 21/10/2026 → 21/10/2027). Restore its values after any save.

**Steps**

1. Edit the QA record
2. Open the Expire Date calendar

**Expected**

Days after 21/10/2027 (issue date + 1 year) are disabled, as in Add.

**Automation Hint**

tests/e2e/employee/certifications/edit.spec.ts

#### TC-EMPCRT-089 — Edit calendar blocks a future issue date

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Edit Certification |

**Preconditions**

QA-E2E record "QA-E2E self-add 2026-10-21 - please delete" on kashyap.patel (1-year type, 21/10/2026 → 21/10/2027). Restore its values after any save.

**Steps**

1. Edit the QA record
2. Open the Issue Date calendar

**Expected**

Days after today are disabled.

**Automation Hint**

tests/e2e/employee/certifications/edit.spec.ts

#### TC-EMPCRT-092 — Edit API rejects invalid values and leaves the record unchanged

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Edit Certification |

**Preconditions**

QA-E2E record "QA-E2E self-add 2026-10-21 - please delete" on kashyap.patel (1-year type, 21/10/2026 → 21/10/2027). Restore its values after any save.

**Steps**

1. PATCH with an invalid email, expiry before issue, a javascript: link, an employeeId, and a link plus a file

**Expected**

Each returns 400 with a field message; the record is unchanged.

**Automation Hint**

tests/e2e/employee/certifications/edit.spec.ts

#### TC-EMPCRT-093 — Edit API rejects a future issue date, an expiry past validity and an ftp:// link

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Edit Certification |
| **Notes** | FAILS 2026-10-23: all three save with 200 (same server gap as create cases 037–039). The test restores the record. |

**Preconditions**

QA-E2E record "QA-E2E self-add 2026-10-21 - please delete" on kashyap.patel (1-year type, 21/10/2026 → 21/10/2027). Restore its values after any save.

**Steps**

1. PATCH issueDate 2027-01-01
2. PATCH expiryDate 2030-01-01
3. PATCH proofUrl ftp://…

**Expected**

Each returns 400, as the form rules require.

**Automation Hint**

tests/e2e/employee/certifications/edit.spec.ts

#### TC-EMPCRT-096 — Certificate type API rejects invalid and duplicate types

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Certificate Types |

**Preconditions**

Logged in as Admin.

**Steps**

1. POST /types with: empty title, 201-char title, standard without validity, never-expires with validity, validity 0, unknown category, duplicate title (same and different case), unknown partnership

**Expected**

400 for invalid input, 409 for duplicates (case-insensitive), 404 for an unknown partnership.

**Automation Hint**

tests/e2e/employee/certifications/certificate-types.spec.ts

### Security (15)

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

#### TC-EMPCRT-062 — PMO "Login as" an Employee: Certifications follow the impersonated user

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1485 · docs/findings/2026-10-15-certs-wl-code-changes.md (SI4-T1525 follow-on) |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | PMO (bhumi.chauhan@simformsolutions.com) |
| **Task Id** | 688906000094355907 |
| **Sub Module** | Scope |

**Preconditions**

Fresh PMO login (not the shared storageState). SI4-T1525 deployed. 

**Steps**

1. PMO → Login as kashyap.patel
2. Open Employee → Certifications
3. Call GET /certifications and /certifications/organisation
4. Call the New Joiners and Program Owners endpoints
5. Return to PMO

**Expected**

Only My Certificate is shown. The API returns only kashyap's own certificates, and New Joiners and Program Owners return 403. Covers T1525 and scope together.

#### TC-EMPCRT-070 — On-behalf employee picker is scoped to the manager's own departments

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | PM (hardik.trivedi) + TM (sudhansu.patel) |
| **Sub Module** | Add on Behalf |

**Preconditions**

Add Certification drawer open, on-behalf switch on.

**Steps**

1. Open Select Employee
2. Read every option's department

**Expected**

PM sees only PROJECT MANAGEMENT; TM sees only ANDROID / QA / CSM.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-071 — Employee, CSM and PMO get no on-behalf switch

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee, CSM, PMO |
| **Sub Module** | Add on Behalf |

**Preconditions**

Add Certification drawer open.

**Steps**

1. Look for "Adding on Behalf of another employee"

**Expected**

The switch is not shown.

**Automation Hint**

tests/e2e/employee/certifications/journey.spec.ts

#### TC-EMPCRT-075 — EM can add a certification on behalf of their department

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | EM (kunal.jadeja) |
| **Sub Module** | Add on Behalf |

**Preconditions**

Add Certification drawer open.

**Steps**

1. Look for the on-behalf switch

**Expected**

PDF: TM/EM can add on behalf for their department. DEV: no switch for EM. Open question for product.

#### TC-EMPCRT-076 — RM can add only for direct reportees

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | PM/RM (hardik.trivedi) |
| **Sub Module** | Add on Behalf |

**Preconditions**

On-behalf picker open.

**Steps**

1. Compare picker list to the account's direct reportees

**Expected**

PDF: RM → direct reportees only. DEV: PM sees all 92 PROJECT MANAGEMENT employees (department scope, not reportee scope). Open question.

#### TC-EMPCRT-078 — Add Partnership is visible only to Chintan

| Field | Value |
| --- | --- |
| **Tags** | @security, @regression |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | requirement-vs-live |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Add Partnership |

**Preconditions**

Organisation Level open.

**Steps**

1. Look for Add Partnership as the CEO Admin account

**Expected**

PDF: only Chintan sees the button. DEV: any Admin (ceo@) sees and can use it. Open question.

#### TC-EMPCRT-091 — Only the owner, Admin or Program Owner can edit a certificate

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | PM, PMO, TM, EM, CSM, Admin |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Edit Certification |

**Preconditions**

QA-E2E record "QA-E2E self-add 2026-10-21 - please delete" on kashyap.patel (1-year type, 21/10/2026 → 21/10/2027). Restore its values after any save.

**Steps**

1. PATCH the QA record as PM, PMO, TM, EM and CSM
2. PATCH it as Admin

**Expected**

PM/PMO/TM/EM/CSM get 404 (existence not leaked); Admin gets 200 and the change is stored.

**Automation Hint**

tests/e2e/employee/certifications/edit.spec.ts

#### TC-EMPCRT-094 — Only Admin can add certificate types

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin, PM, PMO, TM, EM, Employee |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Certificate Types |

**Preconditions**

Logged in per role.

**Steps**

1. Open Organisation Level per role
2. POST /certifications/types per role

**Expected**

Only Admin sees Add Certificate Type; other roles get 403 from the API.

**Automation Hint**

tests/e2e/employee/certifications/certificate-types.spec.ts

#### TC-EMPCRT-099 — Recently Resigned is visible to Admin only

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin, PM, PMO, TM, EM, CSM, Employee |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Recently Resigned |

**Preconditions**

Logged in per role.

**Steps**

1. Open ?tab=recently-resigned per role
2. GET /resigned-joiners per role

**Expected**

Admin sees the tab and gets 200; all other roles have no tab and get 403.

**Automation Hint**

tests/e2e/employee/certifications/recently-resigned.spec.ts

### Smoke (5)

#### TC-EMPCRT-001 — Certifications opens from Employee > Certifications with four tabs for Admin

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | My Certificate |
| **Notes** | Updated 2026-10-23: 4th tab added by SI4-T1559. |

**Preconditions**

Logged in as Admin.

**Steps**

1. Open the home page
2. Expand Employee in the sidebar and click Certifications

**Expected**

URL is /employee/certifications; tabs are My Certificate, Organisation Level, New Joiners List, Recently Resigned; My Certificate is selected; Add Certification is shown.

**Automation Hint**

tests/e2e/employee/certifications/smoke.spec.ts

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

#### TC-EMPCRT-005 — Add Certification drawer opens with all fields

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1559 (backend PR #564, frontend PR #513, merged 2026-10-22) · docs/findings/2026-10-23-certifications-t1559-changes.md |
| **Automatable** | Yes |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Task Id** | SI4-T1559 |
| **Sub Module** | Add Certification |
| **Notes** | Updated 2026-10-23: Certificate pick-list replaces the free-text title; Exam Email added. |

**Preconditions**

Logged in as Employee.

**Steps**

1. Open Certifications
2. Click Add Certification

**Expected**

Drawer shows Partnership, Certificate (disabled, "Select a partnership first"), Issue Date, Expire Date, Proof of Certification (link or file), Exam Email (Optional); Save Certification is disabled.

**Automation Hint**

tests/e2e/employee/certifications/smoke.spec.ts
