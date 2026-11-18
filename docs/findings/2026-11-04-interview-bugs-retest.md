# Interview bugs re-test (SI4-I625 … I631), 4 Nov 2026

**Environment:** SimERP DEV, UI 6.8.1. Backend builds 450–452 (PR #614), frontend PR #553 (both merged 3 Nov). Chromium. PMO vihaan.chatterjee; Admin check with ceo.
**Result:** 7 of 7 pass. All 7 closed in Zoho on 4 Nov.
**Evidence:** `reports/screenshots/2026-11-04/interview-retest/` (screenshots, `scripts/`, `json/`).

| Bug | Result | What I saw |
|---|---|---|
| SI4-I625 | Pass | Hardik Desai shows the pill "OPP-0340 20%" plus "+5" at 1280, 1600 and 1900 px. The column is still a fixed 180 px, so the count does not change with window width. |
| SI4-I626 | Pass | OPP-0335: released candidates (Hardik Desai, and Smit Shah and Uday Hegde on the closed Java Lead) show with a "Released" badge under "Rejected & previously considered". |
| SI4-I627 | Pass (by design) | With every position closed, Client Won now opens "Mark Won with no seat filled?". Cancel keeps the ticket Open. The API still accepts WON without a warning; the fix is a warning, not a block. |
| SI4-I628 | Pass | OPP-0334: Ira Chopra is in the Project Allocated column (1 card). No Longer Required holds only the other seat. |
| SI4-I629 | Pass | Komal Malhotra (rejected by PMO on OPP-0335) has no client-rejection flag on OPP-0344 (same client). Client rejections (Aditi Bhatia, Gargi Das) are still flagged. |
| SI4-I630 | Pass | OPP-0334 stats are filled 1 / required 1. OPP-0344 with all positions closed shows Filled 0/0. |
| SI4-I631 | Pass | ceo (Admin) closed and reopened a position on OPP-0344 (both 200). |

**Data left behind:** OPP-0344 is back to its starting state: Open, Dev A open, Dev B closed. I closed and reopened Dev A, and set the ticket to Won and back to Open once through the API.
**Minor, not filed:** the Java Lead position still shows "No candidates shortlisted yet." above its Released rows.
