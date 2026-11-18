# QA Sign-Off Report: Employee > Certifications (SI4-T1363)

Sources: 77 test cases (3 case files, 14 and 15 Oct), the automated run on 22 Oct 2026 (Chromium + Firefox), Zoho issues as of 22 Oct, and the findings notes of 14, 15, 21 and 22 Oct. No FRD exists. The requirement baseline is live exploration plus the "Certificate Tracking" E2E user-journey PDF (15 Oct).

## 1. Sign-Off Summary

| Field | Details |
|---|---|
| Project / Feature | SimERP · Employee > Certifications (`/employee/certifications`, code EMPCRT) |
| Zoho task | SI4-T1363 |
| Build | dev, `origin/development` as of 22 Oct 2026 (latest backend fix: PR #561) |
| Environment | dev (simerp-dev.simform.solutions) |
| Browsers | Chromium, Firefox (WebKit cannot open the app locally, see section 5) |
| Test cycle | Cycle 3: first run 14 Oct, bug re-test 21 Oct, final regression 22 Oct |
| Sign-off date | 22 Oct 2026 |
| Overall status | **⚠️ Conditionally Approved** |

## 2. Test Execution Summary

### Automated run, 22 Oct 2026 (48 tests × 2 browsers)

| Test type | Tests | Runs | Passed | Failed | Pass % |
|---|---|---|---|---|---|
| Smoke | 5 | 10 | 9 | 1 | 90% (100% on re-run) |
| Functional (incl. E2E journey) | 26 | 52 | 52 | 0 | 100% |
| Negative | 7 | 14 | 14 | 0 | 100% |
| Security / role access | 7 | 14 | 14 | 0 | 100% |
| Accessibility | 3 | 6 | 6 | 0 | 100% |
| **Total** | **48** | **96** | **95** | **1** | **99% (100% on re-run)** |

The one failure is TC-EMPCRT-001 on Firefox. The test timed out while the home dashboard was loading, before it reached Certifications. It passed when re-run on its own and passes on Chromium. This is a test timing issue, not a product defect.

### Manual and pending cases (26 cases not automated)

| Group | Cases | Result |
|---|---|---|
| API accepts data the form blocks | 037, 038, 039 | **Fail.** API saves a future issue date, an expiry past the partnership validity, and `ftp://` proof links. |
| PMO access to organisation data | 045 | **Open question.** PMO has no Organisation tab, but the API returns every org certificate to PMO. |
| Edit / delete | 029 | **Gap.** No edit or delete in the UI or API. |
| Form checks added by SI4-I572 | 053–059 | Covered in the I572 re-test (20 and 22 Oct). Not yet run as separate cases. |
| LinkedIn field, PMO "Login as" | 060–062 | Not run (Profile edit / Login-as follow-ons). |
| PDF journey points | 072–085 | 1 pass (077, matches PDF). 13 differ from the PDF or are not built (see section 5). |

## 3. Defect Summary

All defects raised for Certifications since the module went live (14 Oct):

| Severity | Raised | Fixed and verified | Closed in Zoho | Waiting to close | Open |
|---|---|---|---|---|---|
| Medium | 2 (I582, I588) | 2 | 1 | 1 (I588) | 0 |
| Minor / Low | 4 (I572, I583, I584, I585) | 4 | 3 | 1 (I572) | 0 |
| **Total** | **6** | **6** | **4** | **2** | **0** |

| Issue | Title | Verified |
|---|---|---|
| SI4-I572 | Validation form UI issue | Pass 20 and 22 Oct |
| SI4-I582 | Catalogue Employees count ≠ Active + Expired | Pass 21 Oct, closed |
| SI4-I583 | Title over 200 characters: no error message | Pass 21 Oct, closed |
| SI4-I584 | Bare "N/A" for empty designation | Pass 21 Oct, closed |
| SI4-I585 | "1 employees" screen-reader label | Pass 21 Oct, closed |
| SI4-I588 | Summary cards counted employees, labelled certifications | Pass 22 Oct (PR #561) |

No Critical or High defect is open. SI4-I572 and SI4-I588 pass but still show "To be tested" in Zoho and need to be closed.

## 4. Scope Coverage

| Area | Cases | Automated | Coverage | Notes |
|---|---|---|---|---|
| My Certificate (own list, tabs, filters) | 12 | 11 | 92% | 045 PMO question is manual |
| Organisation Level (cards, catalogue, filters) | 14 | 11 | 79% | 079, 080, 085 are PDF differences |
| New Joiners List | 3 | 3 | 100% | |
| Add Certification form | 23 | 15 | 65% | 053–058 covered by I572 re-test; 072, 074 not built |
| Certificate holders page | 1 | 1 | 100% | |
| API validation and access | 7 | 5 | 71% | 038, 039 fail on the server (manual) |
| Add Partnership | 7 | 2 | 29% | 078, 081, 083, 084 open with product |
| Add on behalf | 5 | 3 | 60% | 075 (EM), 076 (RM) open with product |
| Profile edit, Login as, Profile card | 4 | 0 | Manual | 060–062, 077 |
| Notifications | 1 | 0 | Not covered | 073: no notification is sent; no RM/HR test account |
| **Total** | **77** | **51** | **66% automated** | 48 automated tests cover 51 case IDs |

Roles covered: Admin, PM, TM, EM, CSM, PMO and Employee (role-based tabs, on-behalf switch and API access).

Not covered: manager and HR notifications (no test account), the 90-day renewal reminder (needs a record near expiry), and a server-side duplicate-partnership check (would leave junk data on dev).

## 5. Known Issues & Deferred Items

| ID | Item | Severity (QA view) | Status | Needs |
|---|---|---|---|---|
| TC-045 | API returns all org certificates (names, departments, proof links) to PMO, who has no Organisation tab | **High (data exposure) if PMO should not see it** | Open question, not filed | Product: should PMO see org data? |
| TC-037–039 | API saves a future issue date, an expiry past partnership validity and `ftp://` links; only the form blocks them | Medium | Not filed | Server-side validation |
| TC-029 | No edit or delete; the expiry banner says "Renew and update the dates", but dates can't be updated | Medium | Gap | Product decision |
| TC-073 | No notification to the employee when a cert is added on their behalf | Medium | Open question since 15 Oct | Product |
| TC-072, 074, 080, 082 | PDF items not built: "Saved" screen, title pick-list, days-left tags, "no active certification" button | Low | PDF difference | Product: still planned? |
| TC-075, 076, 078 | Role rules differ from PDF: EM can't add on behalf, RM sees whole department, any Admin (not only Chintan) can add partnerships | Medium | PDF difference | Product |
| TC-079 | "Need Attention" window: PDF 60 days, app copy 90, tooltip 30 | Low | PDF difference | Product |
| TC-081, 083, 084 | Partnership list differs from PDF; duplicate name and invalid website give no message | Low | PDF difference | Product |
| Test data | 3 "QA-NEG probe" certs, 2 "QA-E2E" certs from 21 Oct, 1 from 15 Oct, and the "QA-E2E Partner 2026-10-15" partnership remain on dev | — | Can't delete (no delete) | Devs to remove after sign-off |
| Env | WebKit can't open the app locally | — | Local only | Not a product issue |

## 6. Sign-Off Decision

| Decision | Criteria |
|---|---|
| ✅ Approved | All Critical/High defects fixed; pass rate meets threshold |
| ⚠️ **Conditionally Approved** | Small open items accepted with stakeholder acknowledgment |
| 🚫 Not Approved | Critical/High defects open; pass rate below threshold |

**Decision: ⚠️ Conditionally Approved.** Every filed defect is fixed and re-tested, and the automated suite passes on both browsers (95/96, with the one failure a timing issue that passes on re-run). Approval is conditional because some product questions and server-side gaps are still open.

**Conditions:**
1. Product confirms whether PMO may see organisation certificate data (TC-045). If not, this becomes a High defect and must be fixed before production.
2. Server-side validation for issue date, expiry vs partnership validity and proof-link scheme (037–039) is filed and planned.
3. Product answers the PDF-difference questions (EM/RM on behalf, Add Partnership owner, Need Attention window, notifications, edit/delete).
4. SI4-I572 and SI4-I588 are closed in Zoho.
5. QA test data is removed from dev before any data copy to production.

## 7. Sign-Off Acknowledgment

| Role | Name | Approval | Date |
|---|---|---|---|
| QA Lead | | ⚠️ Conditionally Approved | 22 Oct 2026 |
| Dev Lead | Bhargav Valani | | |
| Product Owner | | | |
| Project Manager | | | |

## Attachments

- Test cases: `reports/excel/test-cases-2026-10-22_17-00-EMPCRT-certifications-signoff.xlsx` (77 cases)
- Execution results: `reports/excel/results-2026-10-22_17-00-EMPCRT-certifications-signoff.xlsx` (96 runs)
- QA report (HTML): `reports/html/qa-report-2026-10-22_17-00.html`
- Findings: `docs/findings/2026-10-14-certifications-test-findings.md`, `2026-10-15-certifications-e2e-journey.md`, `2026-10-21-certifications-tbt-retest.md`, `2026-10-22-certifications-tbt-retest.md`
