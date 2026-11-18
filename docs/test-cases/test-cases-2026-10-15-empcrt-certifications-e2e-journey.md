# Certifications — Test Cases

**Total test cases:** 23  
**Modules covered:** Certifications  
**Source:** `reports/test-cases/cases-2026-10-15-EMPCRT-certifications-e2e-journey.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 16 | 69.6% |
| security | 5 | 21.7% |
| negative | 2 | 8.7% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| medium | 9 | 39.1% |
| high | 7 | 30.4% |
| low | 7 | 30.4% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| medium | 10 | 43.5% |
| low | 8 | 34.8% |
| high | 5 | 21.7% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| requirement-vs-live | 14 | 60.9% |
| live-ui | 9 | 39.1% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| verified-live | 23 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| No | 14 | 60.9% |
| Yes | 9 | 39.1% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 16 | 69.6% |
| @regression | 14 | 60.9% |
| @security | 5 | 21.7% |
| @negative | 2 | 8.7% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-EMPCRT-063](#tc-empcrt-063-a-partnership-added-by-admin-is-selectable-in-the-employee-add-certification-form) | A partnership added by Admin is selectable in the Employee Add Certification form | Certifications | functional | high |
| [TC-EMPCRT-064](#tc-empcrt-064-the-new-partnership-s-1-year-validity-auto-fills-expire-date) | The new partnership's 1-year validity auto-fills Expire Date | Certifications | functional | medium |
| [TC-EMPCRT-065](#tc-empcrt-065-a-self-added-certification-shows-in-the-employee-s-my-certificate-list) | A self-added certification shows in the Employee's My Certificate list | Certifications | functional | high |
| [TC-EMPCRT-066](#tc-empcrt-066-a-certification-added-on-behalf-lands-on-the-chosen-employee-not-on-the-adder) | A certification added on behalf lands on the chosen employee, not on the adder | Certifications | functional | high |
| [TC-EMPCRT-067](#tc-empcrt-067-saved-certifications-roll-up-to-the-organisation-catalogue-and-holders-page) | Saved certifications roll up to the Organisation catalogue and holders page | Certifications | functional | high |
| [TC-EMPCRT-068](#tc-empcrt-068-the-organisation-partnership-filter-lists-the-new-partnership) | The Organisation Partnership filter lists the new partnership | Certifications | functional | low |
| [TC-EMPCRT-069](#tc-empcrt-069-add-partnership-save-stays-disabled-until-name-and-expiration-are-complete) | Add Partnership: Save stays disabled until name and expiration are complete | Certifications | functional | medium |
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

---

## Certifications

23 test cases.

### Functional (16)

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

#### TC-EMPCRT-064 — The new partnership's 1-year validity auto-fills Expire Date

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Employee (kashyap.patel@simformsolutions.com) |
| **Sub Module** | Add Certification |

**Preconditions**

QA-E2E data saved once on 2026-10-15: partnership "QA-E2E Partner 2026-10-15" (Standard, 1 year) and two certifications on kashyap.patel.

**Steps**

1. Open Add Certification
2. Choose QA-E2E Partner 2026-10-15
3. Pick today as Issue Date
4. Do not save

**Expected**

Expire Date = today + 1 year and is read-only.

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

#### TC-EMPCRT-069 — Add Partnership: Save stays disabled until name and expiration are complete

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | Certificate Tracking E2E User Journey PDF (2026-10-15) · docs/findings/2026-10-15-certifications-e2e-journey.md |
| **Automatable** | Yes |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | live-ui |
| **Confidence** | verified-live |
| **Role** | Admin (ceo@simformsolutions.com) |
| **Sub Module** | Add Partnership |

**Preconditions**

Organisation Level open.

**Steps**

1. Open Add Partnership
2. Type a name
3. Choose Standard Expiration
4. Enter 2 in Expiration Time
5. Cancel

**Expected**

Save disabled when empty; enabled with name (Never Expires default); disabled again on Standard until a duration is entered. Nothing saved.

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

### Negative (2)

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

### Security (5)

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
