# TBT issues re-test — 18/11/2026

Environment: SimERP DEV (frontend shows 6.9.0; backend `development` head 6ed62563, 17/11), Chromium.
Scope: every Zoho bug in "To be tested" on 18/11 (6).

| Bug | Title | Result | Evidence |
|---|---|---|---|
| SI4-I595 | Edit Permanent Replacement forces feedback when PM skipped it | ✅ Pass | `tests/e2e/retests/si4-i595.spec.ts` 3/3 (RA-0017, allocation 55→50→55 restored) |
| SI4-I637 | Skills "Add Skills" shown to TM/EM but create returns 403 | ✅ Pass | TC-EMPSKL-175 passes (fix under SI4-T1672, 12/11) |
| SI4-I641 | Employee table has no Certification column (TM view) | ✅ Pass | TC-EMPCRT-126 passes. "Certifications" column for Admin and TM (e.g. Punit Patel → "Azure Developer Associate"), and Certification in the Filter panel. TM's first rows show "Not specified" because those employees hold none. |
| SI4-I642 | Short profile popup has no certifications | ✅ Pass | TC-EMPCRT-127 passes. Popup has a "Certifications (n)" section (Punit Patel = 1, Sagar Khanpara = 0). |
| SI4-I645 | Proof field not renamed to "Update Badge link" | ❌ Still fails | Update Certification drawer: "Current Proof" became "Current Badge", but the field is still labelled **"Badge link"**, not "Update Badge link". `formLabels.ts` `UPDATE_PROOF: 'Badge link'`; side panel `labels.ts` still `PROOF: 'Proof'`, `VIEW_PROOF: 'View Proof'`. No commit under SI4-I645. TC-EMPCRT-125 fails. |
| SI4-I659 | [PROD] Developers cannot update certification date | ⛔ Blocked on dev | Fix (BE 406a9095, FE 39723dea — "allow changing the expiry of a certificate whose type was deleted") is a hotfix on `main` (prod 6.9.4) only, not merged into `development`. Can only be checked on prod. |

Notes
- TC-EMPCRT-125 also expects "Current Proof", which is now "Current Badge" by design — update the test when I645 is fixed.
- TC-EMPCRT-128 (profile page Certifications section) still fails; that is SI4-I643, already closed, so not part of this re-test.
- Nothing was updated in Zoho.
