# Certifications — Test Cases

**Total test cases:** 10  
**Modules covered:** Certifications  
**Source:** `reports/test-cases/cases-2026-10-15-EMPCRT-certifications-additions.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 4 | 40.0% |
| negative | 4 | 40.0% |
| boundary | 1 | 10.0% |
| security | 1 | 10.0% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 5 | 50.0% |
| low | 3 | 30.0% |
| high | 2 | 20.0% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 5 | 50.0% |
| low | 3 | 30.0% |
| high | 2 | 20.0% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| code-review | 10 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| code-review | 10 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| Yes | 10 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 4 | 40.0% |
| @negative | 4 | 40.0% |
| @boundary | 2 | 20.0% |
| @profile | 2 | 20.0% |
| @security | 1 | 10.0% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
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

---

## Certifications

10 test cases.

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

### Functional (4)

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

### Negative (4)

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

### Security (1)

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
