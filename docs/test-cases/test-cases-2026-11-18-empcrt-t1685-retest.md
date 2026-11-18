# Employee — Test Cases

**Total test cases:** 5  
**Modules covered:** Employee  
**Source:** `reports/test-cases/cases-2026-11-18-EMPCRT-T1685-retest.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 5 | 100.0% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| low | 4 | 80.0% |
| medium | 1 | 20.0% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| low | 4 | 80.0% |
| medium | 1 | 20.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 5 | 100.0% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPCRT-144](#tc-empcrt-144-exam-email-placeholder-is-the-agreed-username-simform-com) | Exam Email placeholder is the agreed "username@simform.com" | Employee | functional | low |
| [TC-EMPCRT-145](#tc-empcrt-145-update-certification-drawer-calls-the-proof-a-badge-never-proof) | Update Certification drawer calls the proof a badge, never "proof" | Employee | functional | low |
| [TC-EMPCRT-146](#tc-empcrt-146-si4-i645-leftover-certification-details-panel-calls-the-proof-a-badge-not-proof) | SI4-I645 leftover — Certification details panel calls the proof a badge, not "Proof" | Employee | functional | low |
| [TC-EMPCRT-147](#tc-empcrt-147-a-cut-off-certificate-title-or-employee-name-shows-the-full-text-on-hover-a-short-one-shows-none) | A cut-off certificate title or employee name shows the full text on hover; a short one shows none | Employee | functional | low |
| [TC-EMPCRT-148](#tc-empcrt-148-certification-detail-api-returns-the-certificate-type-with-its-expiry-rule) | Certification detail API returns the certificate type with its expiry rule | Employee | functional | medium |

---

## Employee

5 test cases.

### Functional (5)

#### TC-EMPCRT-144 — Exam Email placeholder is the agreed "username@simform.com"

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | low |
| **Severity** | low |
| **Role** | Employee |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — T1685 re-test 18/11 |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Placeholder reads "username@simform.com" (decision on SI4-I644, 17/11) |
| **Result18 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0, frontend PR #569 deployed 18/11 10:12 IST, backend PR #640 (17/11). Admin=ceo, Employee=kashyap.patel.

**Steps**

1. Open Add Certification
2. Look at the Exam Email field placeholder

**Expected**

Placeholder reads "username@simform.com" (decision on SI4-I644, 17/11)

#### TC-EMPCRT-145 — Update Certification drawer calls the proof a badge, never "proof"

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | low |
| **Severity** | low |
| **Role** | Employee |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — T1685 re-test 18/11 |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Drawer shows "Current Badge", "View current badge", field "Badge link"; no "proof" wording anywhere |
| **Result18 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0, frontend PR #569 deployed 18/11 10:12 IST, backend PR #640 (17/11). Admin=ceo, Employee=kashyap.patel.

**Steps**

1. Open Edit on own certificate

**Expected**

Drawer shows "Current Badge", "View current badge", field "Badge link"; no "proof" wording anywhere

#### TC-EMPCRT-146 — SI4-I645 leftover — Certification details panel calls the proof a badge, not "Proof"

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | low |
| **Severity** | low |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — T1685 re-test 18/11 |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Panel uses badge wording — ACTUAL: row "Proof" with link "View Proof" |
| **Result18 Nov** | fail |

**Preconditions**

SimERP DEV 6.9.0, frontend PR #569 deployed 18/11 10:12 IST, backend PR #640 (17/11). Admin=ceo, Employee=kashyap.patel.

**Steps**

1. Organisation Level tab
2. Click the employee name on a certificate row
3. Read the Certification Details panel

**Expected**

Panel uses badge wording — ACTUAL: row "Proof" with link "View Proof"

#### TC-EMPCRT-147 — A cut-off certificate title or employee name shows the full text on hover; a short one shows none

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | low |
| **Severity** | low |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — T1685 re-test 18/11 |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | Full text shown in a tooltip for cut-off text only |
| **Result18 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0, frontend PR #569 deployed 18/11 10:12 IST, backend PR #640 (17/11). Admin=ceo, Employee=kashyap.patel.

**Steps**

1. Organisation Level tab
2. Hover a cut-off title/name
3. Hover a short title

**Expected**

Full text shown in a tooltip for cut-off text only

#### TC-EMPCRT-148 — Certification detail API returns the certificate type with its expiry rule

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1685 |
| **Priority** | medium |
| **Severity** | medium |
| **Role** | Admin |
| **Task Id** | SI4-T1685 |
| **Sub Module** | Certifications — T1685 re-test 18/11 |
| **Automation** | tests/e2e/employee/certifications/t1685-cr.spec.ts |
| **Expected Result** | certificationType carries expirationType / validityValue / validityUnit, same as the type list |
| **Result18 Nov** | pass |

**Preconditions**

SimERP DEV 6.9.0, frontend PR #569 deployed 18/11 10:12 IST, backend PR #640 (17/11). Admin=ceo, Employee=kashyap.patel.

**Steps**

1. GET /certifications/:publicId for 5 certificates

**Expected**

certificationType carries expirationType / validityValue / validityUnit, same as the type list
