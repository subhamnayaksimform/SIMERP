# Certifications — Test Cases

**Total test cases:** 30  
**Modules covered:** Certifications  
**Source:** `reports/test-cases/cases-2026-10-23-EMPCRT-certifications-t1559.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 18 | 60.0% |
| negative | 6 | 20.0% |
| security | 3 | 10.0% |
| smoke | 2 | 6.7% |
| accessibility | 1 | 3.3% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 20 | 66.7% |
| medium | 8 | 26.7% |
| low | 2 | 6.7% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| high | 15 | 50.0% |
| medium | 12 | 40.0% |
| low | 3 | 10.0% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| live-ui | 30 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| verified-live | 30 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 30 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 18 | 60.0% |
| @negative | 6 | 20.0% |
| @security | 3 | 10.0% |
| @smoke | 2 | 6.7% |
| @a11y | 1 | 3.3% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPCRT-001](#tc-empcrt-001-certifications-opens-from-employee-certifications-with-four-tabs-for-admin) | Certifications opens from Employee > Certifications with four tabs for Admin | Certifications | smoke | high |
| [TC-EMPCRT-005](#tc-empcrt-005-add-certification-drawer-opens-with-all-fields) | Add Certification drawer opens with all fields | Certifications | smoke | high |
| [TC-EMPCRT-023](#tc-empcrt-023-never-expires-certificate-has-no-expire-date-to-pick) | Never-expires certificate has no Expire Date to pick | Certifications | functional | medium |
| [TC-EMPCRT-024](#tc-empcrt-024-standard-certificate-pre-fills-expire-date-from-its-validity-and-caps-the-calendar) | Standard certificate pre-fills Expire Date from its validity and caps the calendar | Certifications | functional | high |
| [TC-EMPCRT-025](#tc-empcrt-025-save-enables-only-when-every-required-field-is-filled) | Save enables only when every required field is filled | Certifications | functional | high |
| [TC-EMPCRT-033](#tc-empcrt-033-exam-email-must-be-a-valid-address) | Exam Email must be a valid address | Certifications | negative | medium |
| [TC-EMPCRT-064](#tc-empcrt-064-a-certificate-type-s-1-year-validity-pre-fills-expire-date) | A certificate type's 1-year validity pre-fills Expire Date | Certifications | functional | high |
| [TC-EMPCRT-069](#tc-empcrt-069-add-partnership-holds-only-the-vendor-name-website-and-badge-colour) | Add Partnership holds only the vendor: name, website and badge colour | Certifications | functional | medium |
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

30 test cases.

### Accessibility (1)

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

### Functional (18)

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

### Negative (6)

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

### Security (3)

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

### Smoke (2)

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
