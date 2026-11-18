# Employee — Test Cases

**Total test cases:** 36  
**Modules covered:** Employee  
**Source:** `reports/test-cases/cases-2026-11-17-EMPCRT-T1685-report.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 28 | 77.8% |
| negative | 3 | 8.3% |
| security | 3 | 8.3% |
| a11y | 1 | 2.8% |
| smoke | 1 | 2.8% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 27 | 75.0% |
| high | 6 | 16.7% |
| low | 3 | 8.3% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 27 | 75.0% |
| high | 6 | 16.7% |
| low | 3 | 8.3% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 28 | 77.8% |
| @negative | 3 | 8.3% |
| @security | 3 | 8.3% |
| @a11y | 1 | 2.8% |
| @smoke | 1 | 2.8% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPCRT-108](#tc-empcrt-108-employee-has-edit-and-delete-on-every-own-certificate-row) | Employee has Edit and Delete on every own certificate row | Employee | smoke | high |
| [TC-EMPCRT-109](#tc-empcrt-109-delete-dialog-needs-a-reason-and-offers-the-four-reasons-cancel-keeps-the-record) | Delete dialog needs a reason and offers the four reasons; Cancel keeps the record | Employee | negative | high |
| [TC-EMPCRT-110](#tc-empcrt-110-employee-and-tm-cannot-delete-someone-else-s-certificate) | Employee and TM cannot delete someone else's certificate | Employee | security | high |
| [TC-EMPCRT-111](#tc-empcrt-111-delete-api-rejects-a-missing-or-unknown-reason) | Delete API rejects a missing or unknown reason | Employee | negative | medium |
| [TC-EMPCRT-112](#tc-empcrt-112-admin-sees-delete-on-other-employees-certificates-on-organisation-level) | Admin sees Delete on other employees' certificates on Organisation Level | Employee | functional | medium |
| [TC-EMPCRT-113](#tc-empcrt-113-organisation-level-lists-one-row-per-certificate-with-employee-dates-and-badge-link) | Organisation Level lists one row per certificate with employee, dates and badge link | Employee | functional | high |
| [TC-EMPCRT-114](#tc-empcrt-114-group-by-offers-none-certificate-employee-and-keeps-the-choice-in-the-url) | Group by offers None / Certificate / Employee and keeps the choice in the URL | Employee | functional | medium |
| [TC-EMPCRT-115](#tc-empcrt-115-need-attention-card-filters-the-list-to-the-card-count) | Need Attention card filters the list to the card count | Employee | functional | medium |
| [TC-EMPCRT-116](#tc-empcrt-116-search-finds-certificates-by-exam-code-and-by-employee-name) | Search finds certificates by exam code and by employee name | Employee | functional | medium |
| [TC-EMPCRT-117](#tc-empcrt-117-expiry-date-range-filter-returns-only-certificates-expiring-in-the-range) | Expiry date range filter returns only certificates expiring in the range | Employee | functional | medium |
| [TC-EMPCRT-118](#tc-empcrt-118-department-filter-takes-several-departments) | Department filter takes several departments | Employee | functional | medium |
| [TC-EMPCRT-119](#tc-empcrt-119-export-on-organisation-level-downloads-every-listed-certificate-as-csv) | Export on Organisation Level downloads every listed certificate as CSV | Employee | functional | high |
| [TC-EMPCRT-120](#tc-empcrt-120-export-follows-the-active-filter) | Export follows the active filter | Employee | functional | medium |
| [TC-EMPCRT-121](#tc-empcrt-121-export-works-on-my-certificate-new-joiners-and-recently-resigned) | Export works on My Certificate, New Joiners and Recently Resigned | Employee | functional | medium |
| [TC-EMPCRT-122](#tc-empcrt-122-new-joiners-recently-resigned-export-is-admin-program-owner-only) | New Joiners / Recently Resigned export is Admin / Program Owner only | Employee | security | medium |
| [TC-EMPCRT-123](#tc-empcrt-123-add-form-expiry-date-label-drop-text-exam-email-required) | Add form: 'Expiry Date' label, drop text, Exam Email required | Employee | functional | medium |
| [TC-EMPCRT-124](#tc-empcrt-124-cr-gap-exam-email-placeholder-reads-username-outlook-com-or-username-simformsolutions-com) | CR gap — Exam Email placeholder reads 'username@outlook.com or username@simformsolutions.com' | Employee | functional | low |
| [TC-EMPCRT-125](#tc-empcrt-125-cr-gap-update-form-labels-the-proof-field-update-badge-link) | CR gap — Update form labels the proof field 'Update Badge link' | Employee | functional | low |
| [TC-EMPCRT-126](#tc-empcrt-126-cr-gap-employee-table-tm-view-has-a-certification-column) | CR gap — Employee table (TM view) has a Certification column | Employee | functional | medium |
| [TC-EMPCRT-127](#tc-empcrt-127-cr-gap-employee-short-profile-popup-shows-certifications) | CR gap — Employee short profile popup shows certifications | Employee | functional | medium |
| [TC-EMPCRT-128](#tc-empcrt-128-cr-gap-employee-profile-page-shows-certifications-along-with-skills) | CR gap — Employee profile page shows Certifications along with Skills | Employee | functional | medium |
| [TC-EMPCRT-129](#tc-empcrt-129-new-joiners-list-shows-don-t-hold-any-certificate-for-a-joiner-who-answered-no) | New Joiners list shows 'Don't hold any certificate' for a joiner who answered No | Employee | functional | medium |
| [TC-EMPCRT-130](#tc-empcrt-130-delete-own-certificate-undo-from-toast-delete-again) | Delete own certificate, Undo from toast, delete again | Employee | functional | high |
| [TC-EMPCRT-131](#tc-empcrt-131-only-the-deleter-can-undo-and-only-within-5-minutes) | Only the deleter can Undo, and only within 5 minutes | Employee | security | medium |
| [TC-EMPCRT-132](#tc-empcrt-132-admin-deletes-another-employee-s-certificate-on-behalf) | Admin deletes another employee's certificate (on behalf) | Employee | functional | medium |
| [TC-EMPCRT-133](#tc-empcrt-133-expiry-reminders-90-60-30-expired-go-to-the-certificate-holder-only) | Expiry reminders (90/60/30/expired) go to the certificate holder only | Employee | functional | medium |
| [TC-EMPCRT-134](#tc-empcrt-134-cr-gap-new-joiner-reminder-email-has-an-inbuilt-yes-no-answer) | CR gap — New-joiner reminder email has an inbuilt Yes/No answer | Employee | functional | medium |
| [TC-EMPCRT-135](#tc-empcrt-135-reminder-can-be-marked-i-don-t-have-any-certificate-new-joiner) | Reminder can be marked 'I don't have any certificate' (new joiner) | Employee | functional | medium |
| [TC-EMPCRT-136](#tc-empcrt-136-bulk-imported-data-has-no-duplicate-certificates) | Bulk-imported data has no duplicate certificates | Employee | functional | medium |
| [TC-EMPCRT-137](#tc-empcrt-137-bulk-import-matches-employees-on-simform-com-and-simformsolutions-com) | Bulk import matches employees on @simform.com and @simformsolutions.com | Employee | functional | medium |
| [TC-EMPCRT-138](#tc-empcrt-138-cr-gap-help-guide-says-expiry-date) | CR gap — Help guide says 'Expiry Date' | Employee | functional | low |
| [TC-EMPCRT-139](#tc-empcrt-139-group-by-certificate-each-certificate-s-active-expired-holders-match-the-api-counts) | Group by Certificate: each certificate's Active / Expired holders match the API counts | Employee | functional | medium |
| [TC-EMPCRT-140](#tc-empcrt-140-an-old-holders-link-still-lists-that-certificate-s-holders) | An old holders link still lists that certificate's holders | Employee | functional | medium |
| [TC-EMPCRT-141](#tc-empcrt-141-status-expired-in-group-by-certificate-shows-only-expired-holders) | Status = Expired in Group by Certificate shows only expired holders | Employee | functional | medium |
| [TC-EMPCRT-142](#tc-empcrt-142-group-by-certificate-toggles-are-named-after-their-certificate) | Group by Certificate toggles are named after their certificate | Employee | a11y | medium |
| [TC-EMPCRT-143](#tc-empcrt-143-a-stored-exam-email-cannot-be-cleared-on-edit) | A stored Exam Email cannot be cleared on Edit | Employee | negative | medium |

---

## Employee

36 test cases.

### A11y (1)

#### TC-EMPCRT-142 — Group by Certificate toggles are named after their certificate

| Field | Value |
| --- | --- |
| **Tags** | @a11y |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — suite update for 6.9.0 |
| **Automation** | accessibility.spec.ts |
| **Expected Result** | Each band toggle is 'Show or hide the holders of <title>' with aria-expanded |
| **Replaces** | TC-EMPCRT-051 |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 after SI4-T1685 (13/11). Admin=ceo, Employee=kashyap.patel. Replacement for a case whose feature changed in 6.9.0.

**Steps**

1. Organisation Level → Group by Certificate

**Expected**

Each band toggle is 'Show or hide the holders of <title>' with aria-expanded

### Functional (28)

#### TC-EMPCRT-112 — Admin sees Delete on other employees' certificates on Organisation Level

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Dialog names the certificate and 'for Kashyap Patel' |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Organisation Level, Group by None
2. Search Kashyap
3. Click Delete on his certificate
4. Cancel

**Expected**

Dialog names the certificate and 'for Kashyap Patel'

#### TC-EMPCRT-113 — Organisation Level lists one row per certificate with employee, dates and badge link

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Columns Title, Partnership, Employee Name, Exam Email, Department, Status, Issue/Expiry Date; total = summary total (317); an employee with N certs shows N rows |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Organisation Level, Group by None

**Expected**

Columns Title, Partnership, Employee Name, Exam Email, Department, Status, Issue/Expiry Date; total = summary total (317); an employee with N certs shows N rows

#### TC-EMPCRT-114 — Group by offers None / Certificate / Employee and keeps the choice in the URL

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | URL groupBy=certificate / employee; holders toggle / View profile buttons shown |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Switch Group by to Certificate then Employee

**Expected**

URL groupBy=certificate / employee; holders toggle / View profile buttons shown

#### TC-EMPCRT-115 — Need Attention card filters the list to the card count

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | URL status=NEED_ATTENTION; list = card count (30); all ACTIVE, expiring within 30 days |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Click the Need Attention card

**Expected**

URL status=NEED_ATTENTION; list = card count (30); all ACTIVE, expiring within 30 days

#### TC-EMPCRT-116 — Search finds certificates by exam code and by employee name

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Only matching titles / that employee's certificates |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Search AZ-900
2. Search Kashyap

**Expected**

Only matching titles / that employee's certificates

#### TC-EMPCRT-117 — Expiry date range filter returns only certificates expiring in the range

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Every row's expiry is inside the range; never-expiring excluded |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Filter expiry today .. +60 days

**Expected**

Every row's expiry is inside the range; never-expiring excluded

#### TC-EMPCRT-118 — Department filter takes several departments

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | A+B total = A + B |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Filter department A, then B, then A+B

**Expected**

A+B total = A + B

#### TC-EMPCRT-119 — Export on Organisation Level downloads every listed certificate as CSV

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | certifications-YYYY-MM-DD.csv, 10 columns incl. Badge Link, row count = total |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Organisation Level → Export

**Expected**

certifications-YYYY-MM-DD.csv, 10 columns incl. Badge Link, row count = total

#### TC-EMPCRT-120 — Export follows the active filter

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | CSV has only the 30 Need Attention rows |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Need Attention filter on → Export

**Expected**

CSV has only the 30 Need Attention rows

#### TC-EMPCRT-121 — Export works on My Certificate, New Joiners and Recently Resigned

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin, Employee |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | CSV per tab with that tab's columns |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Export each tab

**Expected**

CSV per tab with that tab's columns

#### TC-EMPCRT-123 — Add form: 'Expiry Date' label, drop text, Exam Email required

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Employee |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | 'Expiry Date' (not Expire), 'Or drop your certificate badge file here', Exam Email has *, Save disabled until filled |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Open Add Certification

**Expected**

'Expiry Date' (not Expire), 'Or drop your certificate badge file here', Exam Email has *, Save disabled until filled

#### TC-EMPCRT-124 — CR gap — Exam Email placeholder reads 'username@outlook.com or username@simformsolutions.com'

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | low |
| **Severity** | low |
| **Role** | Employee |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Placeholder as in CR point 8.1 — ACTUAL: 'username@simform.com' |
| **Lifecycle Reason** | Product decision on SI4-I644 (17/11): placeholder stays username@simform.com |
| **Lifecycle Status** | superseded |
| **Replaced By** | TC-EMPCRT-144 |
| **Result16 Nov** | fail |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Open Add Certification
2. Read Exam Email placeholder

**Expected**

Placeholder as in CR point 8.1 — ACTUAL: 'username@simform.com'

#### TC-EMPCRT-125 — CR gap — Update form labels the proof field 'Update Badge link'

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | low |
| **Severity** | low |
| **Role** | Employee |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Field labelled 'Update Badge link' — ACTUAL: 'Badge link' (and 'Current Proof' / 'View Proof' remain) |
| **Lifecycle Reason** | Drawer edits the whole certificate; CR met by badge wording (frontend PR #569, 18/11) |
| **Lifecycle Status** | superseded |
| **Replaced By** | TC-EMPCRT-145 |
| **Result16 Nov** | fail |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Open Edit on own certificate

**Expected**

Field labelled 'Update Badge link' — ACTUAL: 'Badge link' (and 'Current Proof' / 'View Proof' remain)

#### TC-EMPCRT-126 — CR gap — Employee table (TM view) has a Certification column

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | TM |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Certification column — ACTUAL: none (also none in Advanced filter / Admin view) |
| **Result16 Nov** | fail |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Log in as TM
2. Open Employee > Employee Details

**Expected**

Certification column — ACTUAL: none (also none in Advanced filter / Admin view)

#### TC-EMPCRT-127 — CR gap — Employee short profile popup shows certifications

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Popup lists certifications — ACTUAL: Projects / PR Reviewer / Goals only |
| **Result16 Nov** | fail |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Employee Details → click an employee name

**Expected**

Popup lists certifications — ACTUAL: Projects / PR Reviewer / Goals only

#### TC-EMPCRT-128 — CR gap — Employee profile page shows Certifications along with Skills

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Employee |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Certifications section next to Skills — ACTUAL: none |
| **Lifecycle Reason** | SI4-I643 closed 17/11 |
| **Lifecycle Status** | retired |
| **Result16 Nov** | fail |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Open Profile

**Expected**

Certifications section next to Skills — ACTUAL: none

#### TC-EMPCRT-129 — New Joiners list shows 'Don't hold any certificate' for a joiner who answered No

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin, Employee |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Follow-Up reads "Don't hold any certificate" (Drashti Vyas); non-joiner gets null / 404 |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Admin: New Joiners List
2. Employee (not a joiner): GET /new-joiners/me, POST /new-joiners/me/no-certificate

**Expected**

Follow-Up reads "Don't hold any certificate" (Drashti Vyas); non-joiner gets null / 404

#### TC-EMPCRT-130 — Delete own certificate, Undo from toast, delete again

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | manual / code review |
| **Expected Result** | Gone from list, export and summary (317→316); Undo restores (317); final delete sticks |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Delete own record with reason Wrong entry
2. Click Undo in toast
3. Delete again

**Expected**

Gone from list, export and summary (317→316); Undo restores (317); final delete sticks

#### TC-EMPCRT-132 — Admin deletes another employee's certificate (on behalf)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | manual / code review |
| **Expected Result** | Removed from that employee's list; counts drop |
| **Result16 Nov** | not run — no approved junk record left |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Organisation Level → Delete on someone else's row → reason → Yes, Delete

**Expected**

Removed from that employee's list; counts drop

#### TC-EMPCRT-133 — Expiry reminders (90/60/30/expired) go to the certificate holder only

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | System |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | manual / code review |
| **Expected Result** | Recipient = holder only, no RM / Program Owner |
| **Result16 Nov** | pass (code); live send not triggered |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Code review: certification-expiry-notification.service.ts

**Expected**

Recipient = holder only, no RM / Program Owner

#### TC-EMPCRT-134 — CR gap — New-joiner reminder email has an inbuilt Yes/No answer

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | System |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | manual / code review |
| **Expected Result** | Email offers Yes/No — ACTUAL: email unchanged; the No answer is only an in-app banner on My Certificate |
| **Result16 Nov** | fail |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Code review: certification-new-joiner-reminder.hbs

**Expected**

Email offers Yes/No — ACTUAL: email unchanged; the No answer is only an in-app banner on My Certificate

#### TC-EMPCRT-135 — Reminder can be marked 'I don't have any certificate' (new joiner)

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Employee (new joiner) |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | manual / code review |
| **Expected Result** | Banner hidden; Admin Follow-Up = Don't hold any certificate |
| **Result16 Nov** | partial — read-only: Drashti Vyas already answered; no 'Acknowledge' option for expiry reminders |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Joiner with a reminder opens My Certificate
2. Click No on the banner

**Expected**

Banner hidden; Admin Follow-Up = Don't hold any certificate

#### TC-EMPCRT-136 — Bulk-imported data has no duplicate certificates

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | manual / code review |
| **Expected Result** | No duplicates |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. List all 317 certificates; group by employee + type + issue date, and employee + title

**Expected**

No duplicates

#### TC-EMPCRT-137 — Bulk import matches employees on @simform.com and @simformsolutions.com

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | manual / code review |
| **Expected Result** | Valid emails no longer 'Employee not found' |
| **Result16 Nov** | code only — source CSV not available |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Code review: certification-import util/service
2. Re-check the 110 failed rows

**Expected**

Valid emails no longer 'Employee not found'

#### TC-EMPCRT-138 — CR gap — Help guide says 'Expiry Date'

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | low |
| **Severity** | low |
| **Role** | Any |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | manual / code review |
| **Expected Result** | 'Expiry Date' — ACTUAL: help text still says 'Expire Date' |
| **Result16 Nov** | fail |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Open Help > Certifications

**Expected**

'Expiry Date' — ACTUAL: help text still says 'Expire Date'

#### TC-EMPCRT-139 — Group by Certificate: each certificate's Active / Expired holders match the API counts

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — suite update for 6.9.0 |
| **Automation** | functional.spec.ts |
| **Expected Result** | Every certificate's Active / Expired holders equal activeCount / expiredCount; all holders = Total card |
| **Replaces** | TC-EMPCRT-013 |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 after SI4-T1685 (13/11). Admin=ceo, Employee=kashyap.patel. Replacement for a case whose feature changed in 6.9.0.

**Steps**

1. Organisation Level → Group by Certificate
2. Compare holder rows per certificate with /organisation counts

**Expected**

Every certificate's Active / Expired holders equal activeCount / expiredCount; all holders = Total card

#### TC-EMPCRT-140 — An old holders link still lists that certificate's holders

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — suite update for 6.9.0 |
| **Automation** | functional.spec.ts |
| **Expected Result** | Rows = holders; Active / Expired rows match the counts |
| **Replaces** | TC-EMPCRT-019 |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 after SI4-T1685 (13/11). Admin=ceo, Employee=kashyap.patel. Replacement for a case whose feature changed in 6.9.0.

**Steps**

1. Open /employee/certifications/holders?partnershipId=&title= for a certificate with active and expired holders

**Expected**

Rows = holders; Active / Expired rows match the counts

#### TC-EMPCRT-141 — Status = Expired in Group by Certificate shows only expired holders

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — suite update for 6.9.0 |
| **Automation** | functional.spec.ts |
| **Expected Result** | No active holder rows; expired holders total = Expired card |
| **Replaces** | TC-EMPCRT-020 |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 after SI4-T1685 (13/11). Admin=ceo, Employee=kashyap.patel. Replacement for a case whose feature changed in 6.9.0.

**Steps**

1. Organisation Level → Group by Certificate → Status = Expired

**Expected**

No active holder rows; expired holders total = Expired card

### Negative (3)

#### TC-EMPCRT-109 — Delete dialog needs a reason and offers the four reasons; Cancel keeps the record

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | 'Pick a reason.' shown; reasons Wrong entry / Duplicate entry / Added for the wrong employee / Other; record still listed |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Click Delete on own certificate
2. Click Yes, Delete without a reason
3. Open Reason
4. Cancel

**Expected**

'Pick a reason.' shown; reasons Wrong entry / Duplicate entry / Added for the wrong employee / Other; record still listed

#### TC-EMPCRT-111 — Delete API rejects a missing or unknown reason

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Employee |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | 400 'reason is required' / 'must be one of WRONG_ENTRY, DUPLICATE, WRONG_EMPLOYEE, OTHER' |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. DELETE own certificate with {}
2. DELETE with reason BECAUSE

**Expected**

400 'reason is required' / 'must be one of WRONG_ENTRY, DUPLICATE, WRONG_EMPLOYEE, OTHER'

#### TC-EMPCRT-143 — A stored Exam Email cannot be cleared on Edit

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Employee |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — suite update for 6.9.0 |
| **Automation** | edit.spec.ts |
| **Expected Result** | 400 'examEmail should not be empty'; stored email unchanged |
| **Replaces** | TC-EMPCRT-090 |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 after SI4-T1685 (13/11). Admin=ceo, Employee=kashyap.patel. Replacement for a case whose feature changed in 6.9.0.

**Steps**

1. PATCH own certificate with a blank examEmail

**Expected**

400 'examEmail should not be empty'; stored email unchanged

### Security (3)

#### TC-EMPCRT-110 — Employee and TM cannot delete someone else's certificate

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee, TM |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | 404 every time; nothing deleted |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. DELETE /certifications/:id of another employee as Employee
2. Same as TM on a team member's certificate
3. POST restore on it as Employee

**Expected**

404 every time; nothing deleted

#### TC-EMPCRT-122 — New Joiners / Recently Resigned export is Admin / Program Owner only

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Employee, TM, PMO |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | 403 for Employee/TM/PMO; TM list export = TM's own scope |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. GET export?view=new-joiners / resigned as each role
2. TM export view=list

**Expected**

403 for Employee/TM/PMO; TM list export = TM's own scope

#### TC-EMPCRT-131 — Only the deleter can Undo, and only within 5 minutes

| Field | Value |
| --- | --- |
| **Tags** | @security |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin, Employee |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | manual / code review |
| **Expected Result** | Admin 404; late restore 404 |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Employee deletes
2. Admin POST restore
3. Employee POST restore after 5m30s

**Expected**

Admin 404; late restore 404

### Smoke (1)

#### TC-EMPCRT-108 — Employee has Edit and Delete on every own certificate row

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | high |
| **Severity** | high |
| **Role** | Employee |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — Module CR (T1685) |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Every own row shows Edit <title> and Delete <title> |
| **Result16 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0 (api simerp-dev-api /api/v1), T1685 merged 13/11 (backend PR #633, frontend PR #565). Admin=ceo, Employee=kashyap.patel, TM=sudhansu.patel, PMO=bhumi.chauhan.

**Steps**

1. Log in as Employee
2. Open Employee > Certifications

**Expected**

Every own row shows Edit <title> and Delete <title>
