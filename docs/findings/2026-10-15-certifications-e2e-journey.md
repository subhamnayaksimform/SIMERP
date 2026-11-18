# Certifications: end-to-end journey test against the "Certificate Tracking" PDF (2026-10-15)

**Source:** "SimERP – Certificate Tracking – End-to-End User Journey (From Screens)", 13-page PDF shared on 2026-10-15.
**Environment:** dev 6.4.2 (`https://simerp-dev.simform.solutions`), Chromium.
**Test cases:** `docs/test-cases/test-cases-2026-10-15-empcrt-certifications-e2e-journey.md` (TC-EMPCRT-063..085).
**Automation:** `tests/e2e/employee/certifications/journey.spec.ts` (063–071, read-only).

## Summary

1. **The core journey works.** A new partnership, a certification the employee adds for themselves, and a certification an Admin adds on their behalf all save, appear in the employee's list, and roll up to the Organisation totals and holders page. No approval step, as the PDF says.
2. **The screens differ from the PDF in 9 places.** The biggest ones: there is no "Certification Saved" confirmation screen, Certification Title is free text (not a pick-list), and no notification reached the employee.
3. **4 role rules need a product decision.** EM cannot add on behalf, RM scope is by department (not direct reportees), any Admin can add a partnership (not only Chintan), and "Need Attention" has three different day counts.
4. **Existing suite:** 35 passed, 4 failed, all known product issues (013, 033, 050, 051). **New journey spec:** 9 of 9 passed.

## Test data saved on dev (cannot be deleted: no edit or delete exists)

You approved saving 1 partnership and 2 certifications. Please ask the devs to remove them, along with the earlier QA-NEG records.

| What | Name | ID |
|---|---|---|
| Partnership (Standard, 1 year) | QA-E2E Partner 2026-10-15 | `73736f3d-b812-4597-a230-ca15d4f8a2a1` |
| Certification, added by kashyap.patel for themselves | QA-E2E self-add 2026-10-15 - please delete | `00ebc2dd-2c53-4a5a-a6d7-7d2a5e321fe8` |
| Certification, added by Admin on behalf of kashyap.patel | QA-E2E on-behalf 2026-10-15 - please delete | `2a8b9781-8232-4150-91a1-c4b5ca491abc` |

Org totals went from 157 total / 128 active to 159 / 130, as expected.

## Journey results, phase by phase

### Phase 1: Employee adds a certification
| Step | Result |
|---|---|
| Form fields (Partnership, Title, Issue, Expiry, Proof link or file) | Pass. Expiry is auto-filled from the partnership and is read-only. |
| New partnership shows in the dropdown | Pass (063) |
| 1-year validity sets Expire Date | Pass: 15/10/2026 → 15/10/2027 (064) |
| Save | Pass: API 201, status Active |
| "Certification Saved" confirmation screen | **Fail:** only a "Certification added." toast. No summary card, notification note, visibility note, "View My Certifications" or "Add Another" (072). |
| Record shows in My Certificate | Pass (065) |
| Certificate Title picked from a master list | **Fail:** free text, no suggestions (074) |
| "I don't have any active certification" button (PDF suggestion) | Not built (082) |

### Phase 2: Manager adds on behalf
| Step | Result |
|---|---|
| "Adding on Behalf of another employee" switch | Shown for Admin, PM and TM. Not shown for Employee, CSM or PMO (071). |
| Admin can pick anyone | Pass |
| PM / TM limited to their own departments | Pass: PM sees only PROJECT MANAGEMENT; TM sees only ANDROID / QA / CSM (070) |
| Saved directly to the chosen employee, no approval | Pass: in Kashyap's list, not in Admin's (066) |
| **EM can add on behalf** (PDF) | **No switch for EM** (075). Open question. |
| **RM limited to direct reportees** (PDF) | PM sees all 92 people in the department, not only reportees (076). Open question. |

### Phase 3: Profile page
No Certifications card on the employee profile. The PDF already lists this as a gap, so dev matches the PDF (077).

### Phase 4: Admin manages partnerships
| Step | Result |
|---|---|
| Add Partnership modal fields | Name*, Website, Title, Category* (Cloud, Data, AI, Security, Analytics, Observability), Expiration* (Never / Standard + duration in Years or Months), Notes, 8 badge colours. |
| Save disabled until required fields are filled | Pass (069) |
| New partnership usable org-wide | Pass (063, 068) |
| **Only Chintan sees the button** (PDF) | Any Admin sees it (078). Open question. |
| Duplicate name ("AWS") | Save is enabled in the UI. Not submitted, to avoid a duplicate on dev (083). |
| Invalid website / 300-character name | No error message. Save just stays disabled for a bad URL, and a long name is accepted (084). |
| Partnership list | Databricks, dbtLabs, Lovable and Other are missing. Test entries NPTEL, Partnership 1 and Partnership 2 are present (081). |

### Org-level views
| Point | Result |
|---|---|
| KPI cards (Total, Active, Expired, Need Attention) | Present and add up |
| **"Need Attention" window** | PDF says 60 days, the confirmation copy says 90, and the dev tooltip says "expiring within 30 days" (079) |
| Days-left / days-overdue tags | Not on dev (080) |
| Tab names and table layout | Different from the PDF: dev has My Certificate / Organisation Level / New Joiners List, and the table groups records by title with counts (085) |

## Questions for product
1. Should EM be able to add on behalf? (PDF: yes; dev: no.)
2. Should RM be limited to direct reportees, or is department scope right?
3. Should Add Partnership be limited to Chintan, or open to all Admins?
4. Which day count defines "Need Attention": 30, 60 or 90?
5. Will Certification Title become a pick-list from a master list, as the PDF says?
6. Is the "Certification Saved" screen still planned, or is the toast final?

## Not covered
- Manager and HR notifications: RM Rohan Yadav and HR have no test account.
- The renewal reminder 90 days before expiry needs a record close to expiry, plus time.
- Server-side duplicate-partnership check (would create junk data).
