# Certifications: SI4-T1559 changes by Bhargav (22 Oct evening)

Merged into `development` on 22 Oct at 19:12 (backend PR #564, frontend PR #513). **Live on dev** as of 23 Oct.

## What changed

| # | Change | Details |
|---|---|---|
| 1 | **Certificate Types (new)** | A partnership is now only the vendor (name, website, badge colour). Certificates move into a new "Certificate Type" with title, category, level (new), expiry rule, validity and notes. New **Add Certificate Type** drawer. Admin and Program Owner only (same permission as Add Partnership). Existing data was migrated: one type per old partnership + title. |
| 2 | **Add Certification form** | You now pick Partnership, then Certificate from that partnership's list. **The title is no longer free text.** Expiry is hidden for never-expiring types. For standard types it is pre-filled from the validity. |
| 3 | **Edit Certification (new)** | New Edit action that reuses the same drawer. Only changed fields are sent. Partnership and Certificate are locked in the form. Shows the current proof, which you can replace. Changing the expiry date resets the reminder emails, so they go out again. API: `PATCH /certifications/:id`. |
| 4 | **Who can edit** | Everyone can edit **their own** certificates (all roles: Employee, PM, CSM, RM, DM, TM, EM, PMO). Admin and Program Owner can edit **anyone's**, including resigned employees'. |
| 5 | **Exam Email (new, optional)** | Email the exam was taken under. It can be cleared when editing. |
| 6 | **Recently Resigned tab (new)** | 4th tab, Admin and Program Owner only. Shows certificates of employees who **joined in the last 6 months and have resigned**. Status is "On notice" or "Left", with resignation date and last working day. Has an Employment filter and search. No partnership filter (it was removed because the API doesn't support it). |
| 7 | **Layout** | Add Certification button moved onto the tab row. |
| 8 | Side changes | Goals page: duplicate padding removed. Employee table "Projects" cell refactored (no behaviour change intended). |

Still **no delete**.

## Effect on our open items

| Item | Before | Now |
|---|---|---|
| Draft bug 3: banner says "update the dates" but no edit exists | Bug | **Fixed.** Edit exists, so the banner is now correct. Drop this draft. |
| TC-074: title should be a pick-list from a master list (journey doc) | Not built | **Built.** Matches the journey doc. |
| Draft bug 2: API saves bad data | Open | **Still open, and edit adds a second way in.** The server still does not check: a future issue date, an expiry past the type's validity, or `ftp://` links (the URL check allows http, https and ftp). |
| SI4-I572: expiry locked to partnership validity | Fixed 14 Oct | **Behaviour changed.** Expiry is no longer read-only. It is now a suggestion you can change. The date picker still blocks dates past the validity, but the form's own "beyond validity" rule was removed. Needs re-testing. |
| Draft bug 1: PMO gets company-wide data from the API, no Organisation tab | Open | **Unchanged.** PMO also gets edit rights for its own certificates now. |
| TC-078: only Chintan should add partnerships | Open question | Same question now also applies to **Add Certificate Type** (any Admin or Program Owner). |

## New questions for product

1. **PM/TM add on behalf but can't edit what they added.** Edit is "own, or Admin/Program Owner". A PM who saves a wrong certificate for a team member can't fix it. Intended?
2. **Recently Resigned tab** isn't in the journey doc. Who asked for it, and is the 6-month window right?
3. Certificate count on dev went from 160 (21 Oct) to **312** total. Check whether the new seed script added data on dev.

## Effect on the automated suite (Chromium, 23 Oct): 31 / 48 pass

All 17 failures come from the new form and API shape, not from product bugs:

| Cause | Tests |
|---|---|
| New 4th tab "Recently Resigned" | 001 |
| Add Certification form now Partnership → Certificate, expiry editable | 005, 023, 024, 025, 026, 027, 031, 033, 034, 052, 064 |
| Add Partnership has no expiry fields any more | 069 |
| API now takes `certificationTypeId` instead of `partnershipId` + `title` | 035, 036, 043 |
| Timing only (passes on re-run) | 016 |

The page object, these specs and the case files need updating. New cases are needed for Edit, Certificate Types, Exam Email and Recently Resigned.
