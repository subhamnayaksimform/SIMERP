# Certifications module: first test pass (2026-10-14)

Page: Employee → Certifications (`/employee/certifications`), live on dev **6.4.2**. There is no FRD, Zoho task, release note or Help guide for this module yet. Expected behaviour comes from the live UI and the messages built into the app (for example "Expire date is beyond the partnership validity period.").

Suite: `tests/e2e/employee/certifications/` (39 automated tests, TC-EMPCRT-001..052). Cases are in `reports/test-cases/cases-2026-10-14-EMPCRT-certifications.json` (44 cases, 5 manual).
Run: chromium, dev. Result: **35 passed, 4 failed**. All 4 failures are product issues. Each of those tests checks for the correct behaviour.

## What the module does

| Tab | Who sees it | Content |
|---|---|---|
| My Certificate | Everyone | Own certificates: title, partnership, Active/Expired, issue and expiry date, link to proof |
| Organisation Level | Admin, PM, TM (TM/PM limited to their scope) | KPI cards (Total / Active / Expired / Need Attention = expiring in 30 days), catalogue by title, holders page, department filter |
| New Joiners List | Admin (and Program Owners) | Recent joiners, whether they added a certificate, "Send Reminder" |

Add Certification fields: partnership, title, issue date, and proof (a link or a PDF/PNG/JPG up to 5 MB). Expire date is filled in automatically from the partnership's validity (for example 12 months or 3 years). It is empty for partnerships that never expire. Admins can add a certificate for another employee. Admins also manage partnerships and Program Owners.

## Confirmed issues (by impact)

**Server accepts data the UI blocks** (manual cases 037–039, reproduced with the API on 2026-10-14)
| Case | Issue |
|---|---|
| 037 | An issue date in the future (2027-01-01) is saved (201). The record then shows as **Active** with a future issue date. The UI disables future days, but the API does not check. |
| 038 | An expiry date beyond the partnership's validity is saved: Partnership 1 (12 months) with expiry 2030-01-01 (201). The app already has the message for this, but the API doesn't enforce it. |
| 039 | An `ftp://` proof link is saved (201). The UI only allows http/https. (`javascript:` is correctly rejected.) |

**Gaps in the feature**
| Case | Issue |
|---|---|
| 029 | There is **no edit or delete**, in the UI or the API. A certificate saved by mistake can't be fixed or removed. |
| 029 | The expiry banner tells users to "Renew and update the dates here", but there is no way to update dates. |
| — | Expire Date can't be edited. It is always issue date + partnership validity, so a certificate whose real expiry differs can't be recorded correctly. Needs a product decision. |

**Data**
| Test | Issue |
|---|---|
| 013 | In the Organisation catalogue, **Employees** counts people but **Active / Expired** count certificates. If one person holds the same title twice (for example after a renewal), the row shows Employees 1 and Active 3. |

**Access** (needs product confirmation)
| Case | Issue |
|---|---|
| 045 | The PMO account sees only My Certificate in the UI. But the API returns all organisation certificates to PMO (154 records, with every employee's name, department and proof link). Either PMO should get the Organisation tab, or the API should not return this data. |

Correctly enforced: an Employee gets 403 on New Joiners and Program Owners. An Employee can only see their own certificates. An Employee can't add a certificate for someone else (403).

**Form / wording**
| Test | Issue |
|---|---|
| 033 | A title over 200 characters silently disables Save. The app has the message "Must be 200 characters or fewer." but never shows it. |
| 034 | Uploading a wrong file type (.txt) is ignored with no message. |
| 050 | New Joiners shows a bare "N/A" as Aarav Patel's designation. This breaks the project's empty-value convention. |
| 051 | Screen-reader label reads "Show the 1 employees holding …". |
| — | The form says "Expire Date" while the table says "Expiry Date". In on-behalf mode, the drawer still says "…to your profile". |

## Test data left on dev

Checking cases 037–039 created 3 records that **can't be deleted** (there is no delete endpoint). They are on **Kashyap Patel** (the Employee test account), all titled **"QA-NEG probe - please delete"**, under Partnership 1:
- `d50ecb87-17d4-4af1-abf3-004c90379fa0` (issue 2027-01-01)
- `b15cd059-c4af-43d9-9483-290b1fe3d774` (expiry 2030-01-01)
- `bbff2ac5-5284-46dc-abab-625c03873856` (ftp:// proof)

A developer needs to remove them from the database. Until then they add 3 to the organisation totals, and they are what makes test 013 fail.

## Not tested

- Saving a valid certificate through the UI (029): it would leave a permanent record each time. Test it manually, or once delete exists.
- "Send Reminder" on New Joiners: it sends a real reminder to a real employee.
- Saving a partnership or Program Owner: it creates permanent org-level data. Only the dialogs were opened.
- The renewal reminders and the 30-day expiry banner on My Certificate: no test account has a certificate expiring soon.
