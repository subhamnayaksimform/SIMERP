# Frontend PR Review Skills — Test Cases

**Total test cases:** 12  
**Modules covered:** Frontend PR Review Skills  
**Source:** `reports/test-cases/cases-2026-10-15-PRSKL-pr-review-skills.json`  
**Generated:** 2026-11-18 10:15 UTC

---

## Summary

### By category

| Category | Count | Share |
| --- | ---: | ---: |
| functional | 4 | 33.3% |
| regression | 4 | 33.3% |
| negative | 3 | 25.0% |
| smoke | 1 | 8.3% |

### By priority

| Priority | Count | Share |
| --- | ---: | ---: |
| high | 5 | 41.7% |
| medium | 5 | 41.7% |
| low | 2 | 16.7% |

### By severity

| Severity | Count | Share |
| --- | ---: | ---: |
| high | 5 | 41.7% |
| medium | 5 | 41.7% |
| low | 2 | 16.7% |

### By provenance

| Provenance | Count | Share |
| --- | ---: | ---: |
| code-review | 12 | 100.0% |

### By confidence

| Confidence | Count | Share |
| --- | ---: | ---: |
| code-review | 12 | 100.0% |

### By automatable

| Automatable | Count | Share |
| --- | ---: | ---: |
| No | 12 | 100.0% |

### By tag

| Tag | Count | Share |
| --- | ---: | ---: |
| @functional | 4 | 33.3% |
| @regression | 4 | 33.3% |
| @negative | 3 | 25.0% |
| @smoke | 1 | 8.3% |

---

## Index

| ID | Title | Module | Category | Priority |
| --- | --- | --- | --- | --- |
| [TC-PRSKL-001](#tc-prskl-001-the-skills-load) | The skills load | Frontend PR Review Skills | smoke | high |
| [TC-PRSKL-002](#tc-prskl-002-seeded-defect-review) | Seeded-defect review | Frontend PR Review Skills | functional | high |
| [TC-PRSKL-003](#tc-prskl-003-false-positive-discipline) | False-positive discipline | Frontend PR Review Skills | negative | medium |
| [TC-PRSKL-004](#tc-prskl-004-clean-diff) | Clean diff | Frontend PR Review Skills | negative | medium |
| [TC-PRSKL-005](#tc-prskl-005-base-branch) | Base branch | Frontend PR Review Skills | regression | medium |
| [TC-PRSKL-006](#tc-prskl-006-consistency-on-real-code) | Consistency on real code | Frontend PR Review Skills | regression | low |
| [TC-PRSKL-007](#tc-prskl-007-pr-review-fixer-dry-run) | pr-review-fixer dry run | Frontend PR Review Skills | functional | high |
| [TC-PRSKL-008](#tc-prskl-008-qa-code-review-order) | qa-code-review order | Frontend PR Review Skills | functional | medium |
| [TC-PRSKL-009](#tc-prskl-009-sonar-rules) | sonar-rules | Frontend PR Review Skills | negative | medium |
| [TC-PRSKL-010](#tc-prskl-010-pagination-fix-bug-references) | pagination / fix-bug references | Frontend PR Review Skills | regression | high |
| [TC-PRSKL-011](#tc-prskl-011-commands-exist) | Commands exist | Frontend PR Review Skills | functional | high |
| [TC-PRSKL-012](#tc-prskl-012-path-audit) | Path audit | Frontend PR Review Skills | regression | low |

---

## Frontend PR Review Skills

12 test cases.

### Functional (4)

#### TC-PRSKL-002 — Seeded-defect review

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1433 · docs/findings/2026-10-15-pr-review-skills-brief.md (§6 V2) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Developer / QA using Claude Code in the frontend repo |
| **Task Id** | 688906000094182398 |
| **Sub Module** | task-review / simerp-code-review |

**Preconditions**

Frontend checkout on a throwaway branch cut from origin/main (do not push); Claude Code available. 

**Steps**

1. Make a small diff with: a hardcoded aria-label="Close", a floating queryClient.invalidateQueries(), an as cast on JSON.parse, a useState(query.data), new Date('2026-10-15') without T00:00:00, a <div onClick>, a component importing @/services/..., and one Zod string with no .max()
2. Run @task-review

**Expected**

Each seeded issue is reported with the right severity and file:line. The hardcoded-string grep catches the aria-label. No lint or tsc errors are restated as findings. A clean check line is printed

#### TC-PRSKL-007 — pr-review-fixer dry run

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1433 · docs/findings/2026-10-15-pr-review-skills-brief.md (§6 V7, R2) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Developer / QA using Claude Code in the frontend repo |
| **Task Id** | 688906000094182398 |
| **Sub Module** | pr-review-fixer |

**Preconditions**

Frontend checkout on a throwaway branch cut from origin/main (do not push); Claude Code available. 

**Steps**

1. Create a test PR with 2–3 review comments (one valid, one "add rel=noopener", one about dead code)
2. Run @pr-review-fixer <PR URL>
3. Watch the test step output
4. Repeat from a branch that does not match the PR head

**Expected**

Valid fix applied. noopener marked ⚠️ Disputed. Dead-code comment fixed and reported as "unreachable". It stops if the branch does not match the PR head. Watch the test step for the Jest 30 flag error (R2)

#### TC-PRSKL-008 — qa-code-review order

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1433 · docs/findings/2026-10-15-pr-review-skills-brief.md (§6 V8, R3) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Developer / QA using Claude Code in the frontend repo |
| **Task Id** | 688906000094182398 |
| **Sub Module** | qa-code-review |

**Preconditions**

Frontend checkout on a throwaway branch cut from origin/main (do not push); Claude Code available. 

**Steps**

1. Run /qa-code-review with a pasted story (e.g. SI4-T1459)
2. Check the order of file writes vs src/ reads
3. Read the report and chat summary
4. Run it again with a Zoho key

**Expected**

The scenario file is written in docs/qa/ before any src/ file is read. Every scenario gets PASS/FAILED/MANUAL with file:line. The report has an AC table and counts, and the chat summary is 8 lines or fewer. No source edits. Record whether task-start works with a Zoho key (R3)

#### TC-PRSKL-011 — Commands exist

| Field | Value |
| --- | --- |
| **Tags** | @functional |
| **Requirement Ref** | SI4-T1433 · docs/findings/2026-10-15-pr-review-skills-brief.md (§6 V11, R2) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Developer / QA using Claude Code in the frontend repo |
| **Task Id** | 688906000094182398 |
| **Sub Module** | Documented commands |
| **Notes** | Executed offline against origin/development on 2026-10-15 (brief section "Verified 2026-10-15"). |

**Preconditions**

Frontend checkout on a throwaway branch cut from origin/main (do not push); Claude Code available. 

**Steps**

1. Run npx tsc -b tsconfig.app.json tsconfig.node.json
2. Run yarn lint and yarn prettier
3. Run yarn test --passWithNoTests
4. Run yarn test --testPathPattern=help and yarn test --testPathPatterns=help
5. Run yarn build
6. Run bash .claude/skills/release-notes/scripts/changes-since-release.sh

**Expected**

All run. Record which test-path flag Jest 30 accepts

### Negative (3)

#### TC-PRSKL-003 — False-positive discipline

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1433 · docs/findings/2026-10-15-pr-review-skills-brief.md (§6 V3) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Developer / QA using Claude Code in the frontend repo |
| **Task Id** | 688906000094182398 |
| **Sub Module** | task-review / simerp-code-review |

**Preconditions**

Frontend checkout on a throwaway branch cut from origin/main (do not push); Claude Code available. 

**Steps**

1. Add the same pattern to an unused function
2. Put a defect on a line the diff does not touch
3. Run @task-review

**Expected**

The unused one is marked unreachable or ❓, and the untouched one goes under Pre-existing, not 🔴

#### TC-PRSKL-004 — Clean diff

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1433 · docs/findings/2026-10-15-pr-review-skills-brief.md (§6 V4) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Developer / QA using Claude Code in the frontend repo |
| **Task Id** | 688906000094182398 |
| **Sub Module** | task-review / simerp-code-review |

**Preconditions**

Frontend checkout on a throwaway branch cut from origin/main (do not push); Claude Code available. 

**Steps**

1. Make a docs-only or trivial correct change
2. Run @task-review

**Expected**

"No blocking issues" with no padded findings, and at most 5 nits

#### TC-PRSKL-009 — sonar-rules

| Field | Value |
| --- | --- |
| **Tags** | @negative |
| **Requirement Ref** | SI4-T1433 · docs/findings/2026-10-15-pr-review-skills-brief.md (§6 V9) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Developer / QA using Claude Code in the frontend repo |
| **Task Id** | 688906000094182398 |
| **Sub Module** | sonar-rules |

**Preconditions**

Frontend checkout on a throwaway branch cut from origin/main (do not push); Claude Code available. 

**Steps**

1. Run /sonar-rules <PR number> with no SONAR_TOKEN and no Sonar MCP
2. Run it again with a token

**Expected**

Without a source it stops and says no source is available, without inventing findings. With a token, it groups findings by rule and never adds NOSONAR

### Regression (4)

#### TC-PRSKL-005 — Base branch

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1433 · docs/findings/2026-10-15-pr-review-skills-brief.md (§6 V5, R5) |
| **Automatable** | No |
| **Priority** | medium |
| **Severity** | medium |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Developer / QA using Claude Code in the frontend repo |
| **Task Id** | 688906000094182398 |
| **Sub Module** | task-review / simerp-code-review |

**Preconditions**

Frontend checkout on a throwaway branch cut from origin/main (do not push); Claude Code available. 

**Steps**

1. Leave local main stale
2. Run the review and note the changed-file list
3. Compare with git diff --name-only origin/main...HEAD

**Expected**

Changed-file list matches; flag R5 if they differ

#### TC-PRSKL-006 — Consistency on real code

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1433 · docs/findings/2026-10-15-pr-review-skills-brief.md (§6 V6, R6) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Developer / QA using Claude Code in the frontend repo |
| **Task Id** | 688906000094182398 |
| **Sub Module** | task-review / simerp-code-review |

**Preconditions**

Frontend checkout on a throwaway branch cut from origin/main (do not push); Claude Code available. 

**Steps**

1. Check out the PR #484 (SI4-T1459) diff
2. Run @task-review against it

**Expected**

Records whether it flags the T00:00:00Z parse and the .forEach/window uses (R6); either outcome is a documented result

#### TC-PRSKL-010 — pagination / fix-bug references

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1433 · docs/findings/2026-10-15-pr-review-skills-brief.md (§6 V10, R1) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Developer / QA using Claude Code in the frontend repo |
| **Task Id** | 688906000094182398 |
| **Sub Module** | pagination / fix-bug |
| **Notes** | Executed offline against origin/development on 2026-10-15 (brief section "Verified 2026-10-15"). |

**Preconditions**

Frontend checkout on a throwaway branch cut from origin/main (do not push); Claude Code available. 

**Steps**

1. Run /pagination audit goals
2. Check whether it recommends fetchAllPages / src/lib/fetch-all-pages.ts
3. Check that src/lib/fetch-all-pages.ts exists on origin/development

**Expected**

It should not recommend importing fetchAllPages from a missing file (R1). Today it is expected to fail

#### TC-PRSKL-012 — Path audit

| Field | Value |
| --- | --- |
| **Tags** | @regression |
| **Requirement Ref** | SI4-T1433 · docs/findings/2026-10-15-pr-review-skills-brief.md (§6 V12) |
| **Automatable** | No |
| **Priority** | low |
| **Severity** | low |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Developer / QA using Claude Code in the frontend repo |
| **Task Id** | 688906000094182398 |
| **Sub Module** | References |

**Preconditions**

Frontend checkout on a throwaway branch cut from origin/main (do not push); Claude Code available. 

**Steps**

1. Extract the backticked src/…, docs/… and .github/… paths from every skill and agent file
2. Run git cat-file -e origin/development:<path> for each

**Expected**

Only template placeholders are missing (<module>, NNNN, docs/qa/ if that is intended)

### Smoke (1)

#### TC-PRSKL-001 — The skills load

| Field | Value |
| --- | --- |
| **Tags** | @smoke |
| **Requirement Ref** | SI4-T1433 · docs/findings/2026-10-15-pr-review-skills-brief.md (§6 V1, R3) |
| **Automatable** | No |
| **Priority** | high |
| **Severity** | high |
| **Provenance** | code-review |
| **Confidence** | code-review |
| **Role** | Developer / QA using Claude Code in the frontend repo |
| **Task Id** | 688906000094182398 |
| **Sub Module** | Skill/agent loading |

**Preconditions**

Frontend checkout on a throwaway branch cut from origin/main (do not push); Claude Code available. 

**Steps**

1. In Claude Code, run / and list skills and agents
2. Run /mcp

**Expected**

simerp-code-review, qa-code-review, sonar-rules, fix-bug, pagination are listed; grill-with-docs and to-issues are manual-only. Note whether github and zoho MCP are connected (R3)
