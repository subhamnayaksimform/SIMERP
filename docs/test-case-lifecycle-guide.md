# Test-case lifecycle guide

Why: screens get renamed and moved, cases get old, and case IDs were once reused for different cases (154 IDs). This keeps every case accounted for. **Nothing here deletes or edits a case.**

## The three things it keeps (all committed, in `reports/knowledge-base/case-lifecycle/`)
| File | What it holds |
|---|---|
| `modules.json` | Module list: code, current name, route, **old names** (`aliases`), and the app code folders used to spot changes. |
| `lifecycle.json` | Ledger: which cases are retired / replaced / need review / were verified (when, on which version, by whom, why). |
| `case-ids.snapshot.json` | Every case ever seen (ID + a fingerprint of its title). This is what catches a lost case or a reused ID. |

A case is identified by **ID + title fingerprint**, not the ID alone.

## Day to day
1. **After every test run:** `npm run cases:from-results -- <results.json>`. Passed cases become "verified today on version X".
2. **Writing new cases:** get IDs with `npm run cases:next-id -- <CODE> --count=<n>`. Never pick a number by hand.
3. **Weekly / before a release:** `npm run cases:stale`, then open `reports/test-cases-lifecycle/stale-<date>.md`.
   - **A. Likely outdated** — its own task changed (a real code change), it uses an old module name, another case claims to replace it, or someone marked it. Review first (★ = important case).
   - **B. Weaker signal** — its module's code changed, or its task only had test/chore commits.
   - **C. No recent pass on record** — never run, or older than 45 days. Running the suite and step 1 clears it.
4. **Decide per case:**
   - still valid → `cases:mark -- <ID> --status=verified`
   - needs rework → `cases:mark -- <ID> --status=needs-review --reason="…"`
   - no longer applies → `cases:retire -- <ID> --reason="…" --replaced-by=<new ID>` (or `--feature-removed="…"` if nothing replaces it)
5. **A module was renamed:** add the old name to `aliases` in `modules.json`. `cases:stale` then lists every case still using it.

## Safety rules (so nothing important is missed)
- Retiring needs a reason. **Important cases (high / critical priority, smoke, regression, security) also need a replacement or a stated feature removal.**
- A retired case stays in the case files, the snapshot and the Markdown library (marked), and keeps its history.
- `npm run cases:check` **fails** if a case in the snapshot disappeared, an ID now holds a different case, or an ID appears twice in one file. It runs automatically after case generation in the pipeline (advisory) and records new cases when it passes.
- `cases:snapshot` only adds; it refuses to accept a reused ID unless you pass `--accept-reused-ids`.
- `npm run cases:selftest` proves these rules on throwaway data (14 checks).

## Known limits
- The case JSON files (`reports/test-cases/`) are **not in git**; only the Markdown library and the snapshot are. The snapshot lists every case title, so a lost case can always be identified, but the full steps are only in the Markdown docs. Consider committing the JSON files.
- "Code changed" needs the app repos at `SIMERP_APP_DIR` (default `/home/subham/SIMERP DEV`); without them only age, naming and marking are used.
- `appPaths` and routes in `modules.json` were seeded automatically (`needsReview: true`). Confirm them once.
