# Employee — Test Cases

**Total test cases:** 5  
**Modules covered:** Employee  
**Source:** `reports/test-cases/cases-2026-11-16-EMPCRT-suite-update-6.9.0.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 3 | 60.0% |
| a11y | 1 | 20.0% |
| negative | 1 | 20.0% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 5 | 100.0% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 5 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 3 | 60.0% |
| @a11y | 1 | 20.0% |
| @negative | 1 | 20.0% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPCRT-139](#tc-empcrt-139-group-by-certificate-each-certificate-s-active-expired-holders-match-the-api-counts) | Group by Certificate: each certificate's Active / Expired holders match the API counts | Employee | functional | medium |
| [TC-EMPCRT-140](#tc-empcrt-140-an-old-holders-link-still-lists-that-certificate-s-holders) | An old holders link still lists that certificate's holders | Employee | functional | medium |
| [TC-EMPCRT-141](#tc-empcrt-141-status-expired-in-group-by-certificate-shows-only-expired-holders) | Status = Expired in Group by Certificate shows only expired holders | Employee | functional | medium |
| [TC-EMPCRT-142](#tc-empcrt-142-group-by-certificate-toggles-are-named-after-their-certificate) | Group by Certificate toggles are named after their certificate | Employee | a11y | medium |
| [TC-EMPCRT-143](#tc-empcrt-143-a-stored-exam-email-cannot-be-cleared-on-edit) | A stored Exam Email cannot be cleared on Edit | Employee | negative | medium |

---

## Employee

5 test cases.

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

### Functional (3)

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

### Negative (1)

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
