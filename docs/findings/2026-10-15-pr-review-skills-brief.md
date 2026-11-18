# SI4-T1433 — "PR Review skills of Frontend": code brief

> **Summary**
> 1. This is **not an app feature**. It adds and rewrites Claude Code agent and skill files under `.claude/` in the frontend repo, used by developers to review PRs, fix review comments, fix bugs, QA a story against code, handle Sonar findings, paginate lists and split stories into issues. No screen changes for end users.
> 2. Core pieces: the `simerp-code-review` skill (4 criteria files), the `task-review` agent (runs it plus greps and CI commands), the `pr-review-fixer` agent (applies GitHub review comments), `qa-code-review` (requirements-first QA report), and `sonar-rules`. Also added: `fix-bug`, `pagination`, `grill-with-docs`, `to-issues`.
> 3. Most references check out: CI/Sonar workflows, tsconfig flags, ESLint presets and limits, helper functions, route files, coverage threshold 70%, Zod 4, React 19, Tailwind v4, Jest 30.
> 4. **Broken references:** `fetchAllPages` / `src/lib/fetch-all-pages.ts` was deleted on 2026-09-30, but `pagination` and `fix-bug` depend on it. `pr-review-fixer` runs `yarn test --testPathPattern`, which Jest 30 renamed to `--testPathPatterns`. It also needs `mcp__github`, and `task-start` (used by `qa-code-review`) needs `mcp__zoho`. Neither server is configured in a way Claude Code loads: there is no `.mcp.json`, the GitHub server has no auth, and there is no Zoho server entry. `sonar-rules` mentions "the repo's `.mcp.json`", which does not exist.
> 5. **Drift and contradictions:** the route-file list leaves out `workingLocationRoute.tsx`. The "~6 known label-import violations" claim is now 5, in different modules. The commit/PR agents that `task-review` hands off to rebase onto `main` and open PRs with `--base main`, which the repo's own `feature-release-strategy` skill says is wrong for features. Two of the five SI4-T1433 commits are really What's New badge and app code (SI4-T1459 branch, PR #484), so the ticket label hides product changes. The validation checklist is in §6.

Source: `SIMERP DEV/frontend`, `origin/development`. Commits: `9676281b` "Pr & debugging skills updated" (2026-09-28), `f26c3d14` "copilot comment fixed", `a5db58ff` (merge PR #470, `chore/SI4-T1433-skills-update`), and two later commits also labelled SI4-T1433: `01f9b2e2` (merge-conflict resolution on the T1459 branch) and `e0cfc07b` (What's New badge fixes). Read from code only: no skill was actually run.

---

## 1. What changed (files)

| File | Kind | Purpose | How it is invoked |
|---|---|---|---|
| `.claude/skills/simerp-code-review/SKILL.md` + `code-quality.md`, `data-layer.md`, `ui-a11y.md`, `ops-testing.md` | Skill (rewritten) | The review process and all review criteria for the repo | Auto-loaded when reviewing a diff or PR. Loaded by the `task-review` and `pr-review-fixer` agents |
| `.claude/agents/task-review.md` | Agent (slimmed) | Runs the review on the current branch: changed files, criteria, hardcoded-string greps, tsc/lint/prettier/test/build, then a report with severities | `@task-review` / Agent tool, "after implementing a task or before creating a PR" |
| `.claude/agents/pr-review-fixer.md` | Agent (+6 lines) | Fetches unresolved review comments from a GitHub PR and applies every fix without asking | `@pr-review-fixer <PR URL>` |
| `.claude/skills/qa-code-review/SKILL.md` | Skill (new) | QA lead flow: story → scenarios file → read code → PASS/FAILED/MANUAL with `file:line` → extra defects → QA report | `/qa-code-review <story file \| Zoho key \| text>`. Writes `docs/qa/YYYY-MM-DD_<module>.md` and `..._QA_Report.md` |
| `.claude/skills/sonar-rules/SKILL.md` | Skill (new) | How to fix or dispute SonarQube findings, project key `PR-1596-SimERP-Frontend-Reactjs` | `/sonar-rules [file \| dir \| rule \| PR]` |
| `.claude/skills/fix-bug/SKILL.md` | Skill (new) | Reproduce with a failing test, find the root cause, apply a minimal fix, verify | Bug description, Zoho issue, stack trace or failing test |
| `.claude/skills/pagination/SKILL.md` | Skill (new) | Implement or audit list pagination | `/pagination [module \| file]` |
| `.claude/skills/grill-with-docs/SKILL.md` | Skill (new, `disable-model-invocation`) | Design interview; writes `CONTEXT.md` and ADRs in `docs/adr/` | `/grill-with-docs` (manual only) |
| `.claude/skills/to-issues/SKILL.md` | Skill (new, `disable-model-invocation`) | Splits a PRD or story into vertical-slice issues as markdown | `/to-issues` (manual only) |

## 2. What the PR review checks (simerp-code-review)

- **Process:** list changed files with `git diff --name-only main...HEAD` (skipping `src/components/ui/`). Read each file in full plus the callers of any changed export.
- **Verify before reporting:** confirm each finding is reachable (grep), was introduced by this diff (otherwise it goes under "Pre-existing"), is really wrong, and cites a rule. Unsure findings become ❓ questions. The skill also checks for documentation drift.
- **Severities:** 🔴 blocking, 🟡 suggestion, 🟢 nit (max 5), ❓ question, Pre-existing. The output ends with `TypeScript ✓/✗ · ESLint ✓/✗ · Prettier ✓/✗ · Tests ✓/✗ · Build ✓/✗`.
- **Manual review areas (because lint does not cover them):** floating or misused promises, `!` and `as` casts, React Query key completeness, all accessibility (no jsx-a11y), hardcoded UI strings, and memoisation (no React Compiler).
- **Criteria by area:**
  - Architecture: 4-layer rule (constants → services → hooks → components), file placement, `ENDPOINTS`/`queryKeys`/`LABELS`/`ROUTES`, TypeScript strictness holes.
  - React Query v5 semantics, the service layer, Zod 4 removals and deprecations, react-hook-form patterns.
  - React 19 idioms, effects, Tailwind v3→v4 traps, WCAG 2.2 AA (2.4.11, 2.5.7, 2.5.8, 3.3.7, 3.3.8).
  - State, routing, OWASP front-end checks, input bounding (`SEARCH_MAX_LENGTH`, `trimStart`), dependency audits, RTL testing anti-patterns, ESLint table, commit format.
- **`task-review` extras:** three mandatory hardcoded-string greps, then `npx tsc -b …`, `yarn lint`, `yarn prettier`, `yarn test --passWithNoTests`, `yarn build`. It runs `yarn audit --level high` if dependencies changed. If there are blocking items it offers `task-implement`; otherwise it points to `git-commit-push` → `create-pr`.
- **`pr-review-fixer` extras:** checks the current branch matches the PR head. It makes one todo per comment and fixes them in place: surgical edits, fix shared components at the choke point, confirm the named symbol is reachable. It validates with `yarn build`, eslint on the changed files, and `yarn test --testPathPattern=…`. Comments that are wrong for this repo are marked **⚠️ Disputed** (for example noopener, Tailwind v3 syntax, removing `void` from invalidateQueries, `server.proxy secure:true`).

## 3. References verified (OK)

These were checked on `origin/development`:
- `.github/workflows/ci.yml` (lint, prettier, test:ci, build on main and development) and `sonarqube.yml` (push and PR to development).
- `sonar-project.properties`, `tsconfig.app.json` (strict, verbatimModuleSyntax, erasableSyntaxOnly, noUnused*, lib ES2022), `tsconfig.node.json`, `eslint.config.js`.
- ESLint: `tseslint.configs.recommended` (not the type-checked preset), `reactHooks.configs.flat.recommended`, max-lines 300, complexity/max-depth/max-params at 15/4/4, no-console, no-nested-ternary.
- No jsx-a11y, no `@tanstack/eslint-plugin-query`, no `babel-plugin-react-compiler`.
- Jest `coverageThreshold` is 70. `commitlint.config.ts` exists. `.prettierrc` exists.
- `src/constants/{endpoints,queryKeys,routes}.ts`, `STALE_TIME`, `src/services/api.ts`, `src/lib/utils.ts` (`getErrorMessage`), `src/lib/form-utils.ts` (`applyServerErrors`), `src/lib/rich-text-html.ts` (`sanitizeRichText`), `RichTextViewer`, `src/lib/env.ts` (`IS_DEV`), `useDebounce`, `useFeatureFlag`, `AppToaster`, `InfiniteCombobox`, `src/test/utils.tsx` (`renderWithProviders`, `renderWithDataRouterProviders`).
- `docs/adr/README.md` + `0001-…`. `NOSONAR` count = 0, as the skill claims.
- Versions: zod ^4.6, @hookform/resolvers ^5, React ^19.3, Tailwind ^4.2, TanStack Query ^5, Jest ^30.5.
- Hardcoded-string greps 1 and 2 return **0 rows** on development today.

## 4. Broken references and findings

| # | Severity | Finding | Evidence |
|---|---|---|---|
| R1 | **High** | **`fetchAllPages` no longer exists.** `src/lib/fetch-all-pages.ts` (and its test) were deleted in `8150dd30` (SI4-I530, 2026-09-30), two days after the skills were written. `pagination/SKILL.md` makes it the pattern for whole-set totals and charts and takes `MAX_API_PAGE_SIZE` from it. `fix-bug/SKILL.md` gives it as the fix for "list shows only first 100/300 rows". Following either skill now points the agent at a missing helper. | `git grep fetchAllPages origin/development -- src` → 0 hits |
| R2 | **High** | **`pr-review-fixer` test command is likely broken.** It runs `yarn test --testPathPattern=<module>`. The repo is on Jest 30, which renamed this flag to `--testPathPatterns`. The likely result is a CLI error, or the whole suite running. Confirm by running it once. | `package.json` `"jest": "^30.5.1"`; `pr-review-fixer.md` Step 5 |
| R3 | **High** | **The agents' MCP tools are probably not available.** `pr-review-fixer` needs `mcp__github` and `task-start` needs `mcp__zoho` (`qa-code-review` uses `task-start` for Zoho keys). The repo has no `.mcp.json`. Servers are declared under `mcpServers` in `.claude/settings.json` (github → `api.githubcopilot.com/mcp/` with **no auth header**, figma, chrome-devtools), and there is **no zoho server at all**. Claude Code reads project MCP servers from `.mcp.json`, so on a clean checkout neither tool is likely to load. Confirm with `/mcp`. | `.claude/settings.json`; `git cat-file -e origin/development:.mcp.json` → missing |
| R4 | Medium | **`sonar-rules` refers to a missing file.** It says the Sonar MCP "isn't in the repo's `.mcp.json`", but that file does not exist. | `sonar-rules/SKILL.md` step 1 |
| R5 | Medium | **Hand-off agents use the wrong base branch.** `task-review` Step 6 hands off to `git-commit-push` (rebases onto `origin/main`) and `create-pr` (`gh pr create --base main`, diffs `origin/main...HEAD`). The repo's `feature-release-strategy` skill says feature PRs target `development` (QA) or `release/*`, and "Feature → main directly is wrong". Real merges agree: #494–#501 went into development. `task-review`/`simerp-code-review` use local `main...HEAD`. The base is right (features are cut from main), but a stale local `main` gives a wrong file list. `origin/main...HEAD` would be safer. | `create-pr.md:117`, `git-commit-push.md:72`, `feature-release-strategy/SKILL.md:106-109` |
| R6 | Medium | **The skill does not match the repo's own code.** `pr-review-fixer` (and `data-layer.md`) say to always append `T00:00:00` (local time) when parsing `YYYY-MM-DD`. The What's New badge code that went through this review flow uses `T00:00:00Z` (`src/lib/help/badges.ts:7`). Similarly, `sonar-rules` says "prefer `for…of`" and "`globalThis` over `window`", but the new help code uses `.forEach` and `window.addEventListener` throughout. Either the rules are not being applied, or Sonar did not flag them. Useful as a test case (see V6). | `lib/help/badges.ts`, `seenStore.ts`, `releaseStore.ts` |
| R7 | Low | **Route list is out of date.** `ops-testing.md` and `qa-code-review` list the route files as core, work, admin and employeeRatings. `src/routes/workingLocationRoute.tsx` also exists, so a reviewer told to put a new route "in the matching area file" may miss it. | `git ls-tree origin/development src/routes/` |
| R8 | Low | **Pre-existing count is stale.** The text says "~6 known pre-existing violations in `employee`, `projects` and `dashboard`". The grep returns **5**: 3 in employee-table, 1 in `weekly-updates/WeeklyUpdateEmployeeDetailsSections.tsx` (importing `PROJECT_LABELS`), and 1 in `services/dashboard/dashboardApi.ts`. This appears in both `code-quality.md` and `task-review.md`. | Grep 3 run on development |
| R9 | Low | **Backend path is assumed.** `qa-code-review`, `grill-with-docs`, `to-issues` and `pagination` assume the backend checkout is `../SimERP-backend-node`. Locally it is `SIMERP DEV/backend`, so backend look-ups silently find nothing unless the folder is renamed. | `qa-code-review/SKILL.md:104` |
| R10 | Low | **Output folder does not exist.** `qa-code-review` writes to `docs/qa/`, which is not in the repo. It is not in `.gitignore` either, so reports may get committed by accident. Decide whether they belong in git. | `git cat-file -e origin/development:docs/qa` → missing |
| R11 | Info | **The ticket label hides product changes.** Two SI4-T1433 commits are not skill work. `e0cfc07b` changes What's New behaviour: a badge clears on route visit instead of on nav click, the bell marks seen only after loading, and malformed localStorage entries are filtered. `01f9b2e2` is a merge resolution carrying Employee advanced-filter search keywords (SI4-I562) and the Goals dashboard manager charts. QA tracking by ticket would miss these. They are covered by the SI4-T1459 brief (TC-HELP-026/027/030). | `git show --stat e0cfc07b 01f9b2e2` |
| R12 | Info | **Unverifiable claims.** Audit figures quoted as facts ("33 hardcoded strings", "~37 files use `.Provider`", "~60 components use `Readonly`", "~20 files use `satisfies`", "73 advisories") cannot be checked from the repo. They are harmless, but they will go out of date silently. | — |

## 5. Rules vs. codebase: spot checks

- **4-layer rule:** the skill says components never import services directly. Sample check: run `git grep "@/services/" -- src/components src/pages | grep -v test` and expect 0 hits. (Not run as part of this brief. Add it to the checklist.)
- **Label aggregator rule:** holds, apart from the 5 pre-existing hits above.
- **`void queryClient.invalidateQueries`** house style and the "dispute noopener" rule are consistent between `ops-testing.md`, `pr-review-fixer.md` and `sonar-rules`.
- **Sonar exclusions** (`ui/`, `demo/`, `test/`, `main.tsx`, `assets/`): check them against `sonar-project.properties` when validating (V7).

## 6. QA validation checklist (how to test the skills)

Run these on a throwaway branch cut from `origin/main` in a frontend checkout. Do not push.

| ID | Check | How | Pass when |
|---|---|---|---|
| V1 | The skills load | In Claude Code, run `/` and list skills and agents. Run `/mcp`. | `simerp-code-review`, `qa-code-review`, `sonar-rules`, `fix-bug`, `pagination` are listed; `grill-with-docs` and `to-issues` are manual-only. Note whether `github` and `zoho` MCP are connected (R3) |
| V2 | Seeded-defect review | Make a small diff with known issues: a hardcoded `aria-label="Close"`, a floating `queryClient.invalidateQueries()`, an `as` cast on `JSON.parse`, a `useState(query.data)`, `new Date('2026-10-15')` without `T00:00:00`, a `<div onClick>`, a component importing `@/services/...`, and one Zod string with no `.max()`. Run `@task-review`. | Each seeded issue is reported with the right severity and `file:line`. The hardcoded-string grep catches the `aria-label`. No lint or tsc errors are restated as findings. A clean check line is printed |
| V3 | False-positive discipline | Add the same pattern to an *unused* function, and put a defect on a line the diff does not touch | The unused one is marked unreachable or ❓, and the untouched one goes under **Pre-existing**, not 🔴 |
| V4 | Clean diff | Run `@task-review` on a docs-only or trivial correct change | "No blocking issues" with no padded findings, and at most 5 nits |
| V5 | Base branch | Run the review with a stale local `main` | Changed-file list. Compare with `git diff --name-only origin/main...HEAD`. Flag R5 if they differ |
| V6 | Consistency on real code | Run `@task-review` against the PR #484 (SI4-T1459) diff | Does it flag the `T00:00:00Z` parse and the `.forEach`/`window` uses (R6)? Either outcome is a documented result |
| V7 | `pr-review-fixer` dry run | On a test PR with 2–3 review comments (one valid, one "add rel=noopener", one about dead code), run the agent | Valid fix applied. noopener marked ⚠️ Disputed. Dead-code comment fixed and reported as "unreachable". It stops if the branch does not match the PR head. **Watch the test step for the Jest 30 flag error (R2)** |
| V8 | `qa-code-review` order | Run `/qa-code-review` with a pasted story (for example SI4-T1459) | The scenario file is written in `docs/qa/` **before** any `src/` file is read. Every scenario gets PASS/FAILED/MANUAL with `file:line`. The report has an AC table and counts, and the chat summary is 8 lines or fewer. No source edits. Then try a Zoho key and record whether `task-start` works (R3) |
| V9 | `sonar-rules` | Run `/sonar-rules <PR number>` with no `SONAR_TOKEN` and no Sonar MCP | It stops and says no source is available, without inventing findings. With a token, it groups findings by rule and never adds `NOSONAR` |
| V10 | `pagination` / `fix-bug` references | Ask `/pagination audit goals` | It should not recommend importing `fetchAllPages` from a missing file (R1). Today it is expected to fail |
| V11 | Commands exist | Run each documented command once: `npx tsc -b tsconfig.app.json tsconfig.node.json`, `yarn lint`, `yarn prettier`, `yarn test --passWithNoTests`, `yarn test --testPathPattern=help` vs `--testPathPatterns=help`, `yarn build`, `bash .claude/skills/release-notes/scripts/changes-since-release.sh` | All run. Record which test-path flag Jest 30 accepts |
| V12 | Path audit | Re-run the reference scan: extract the backticked `src/…`, `docs/…` and `.github/…` paths from every skill and agent file and run `git cat-file -e origin/development:<path>` | Only template placeholders are missing (`<module>`, `NNNN`, `docs/qa/` if that is intended) |

**Suggested fixes to raise with the dev team (not filed):**
1. Restore or replace `fetchAllPages` in the `pagination` and `fix-bug` skills.
2. Change the flag to `--testPathPatterns`.
3. Move the MCP servers into `.mcp.json` with auth, add Zoho, and fix the `.mcp.json` mention in `sonar-rules`.
4. Use `origin/main...HEAD` and fix `create-pr`/`git-commit-push` to follow `feature-release-strategy`.
5. Add `workingLocationRoute.tsx` to the route lists.
6. Update the pre-existing violation count.
7. Make the backend path configurable.

## Verified 2026-10-15 (offline, against origin/development)

- **Confirmed:** `src/lib/fetch-all-pages.ts` does not exist, and nothing under `src/` defines `fetchAllPages` or `MAX_API_PAGE_SIZE`. The `pagination` skill (lines 3, 21, 30, 144) and the `fix-bug` skill (line 97) point developers to code that is gone.
- **Confirmed:** `.claude/agents/pr-review-fixer.md:72` runs `yarn test --testPathPattern=…`. On the repo's Jest 30.5.2 this fails with: *Option "testPathPattern" was replaced by "--testPathPatterns"*. The agent's test step therefore never runs the tests.
