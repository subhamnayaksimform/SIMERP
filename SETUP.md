# Setup Guide

Everything needed to get this repo running from a clean machine. Follow the steps in order — later steps depend on earlier ones.

## 1. Prerequisites (install before cloning)

| Tool | Version | Check with |
|---|---|---|
| Node.js | v20.x (repo tested on v20.20.2) | `node -v` |
| npm | v10.x | `npm -v` |
| Git | any recent | `git --version` |

No other language runtimes or databases are required — this is a Node/TypeScript-only repo.

## 2. Clone & install dependencies

```bash
git clone <repo-url>
cd "SIMERP new project"
npm install
```

## 3. Install Playwright browsers

Playwright needs its own browser binaries (and OS-level libs on Linux) — `npm install` alone does **not** fetch these.

```bash
npx playwright install --with-deps
```

If `--with-deps` fails without `sudo` (common on locked-down Linux boxes), run:
```bash
npx playwright install        # browsers only
sudo npx playwright install-deps   # OS libraries, needs root
```

## 4. Configure environment variables

```bash
cp .env.example .env
```

Then fill in `.env` with real values. **Never commit this file** (already gitignored).

| Variable | Required for | Notes |
|---|---|---|
| `BASE_URL` | All Playwright tests | SIM ERP staging/dev URL, e.g. `https://simerp-dev.simform.solutions` |
| `SIMERP_USERNAME` / `SIMERP_PASSWORD` | Test login (primary/admin account) | Used by `tests/global-setup.ts` to create `storageState.json` |
| `SIMERP_TEST_USERNAME` / `SIMERP_TEST_PASSWORD` | Test login (secondary/TM account) | Used to create `storageState-punit.json` |
| `ANTHROPIC_API_KEY` | `npm run pipeline` (automated full-pipeline option) | Only needed if driving the agent pipeline via `scripts/pipeline.ts` rather than VS Code/Claude Code chat |
| `ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`, `ZOHO_REFRESH_TOKEN`, `ZOHO_PORTAL_ID`, `ZOHO_PROJECT_ID`, `ZOHO_REGION` | `npm run fetch:tasks`, `npm run kb:update`, bug reporting | Zoho Projects OAuth2 app credentials; only needed for the Zoho-integrated parts of the pipeline, not for just running/writing Playwright tests |

If you only need to run/write Playwright tests, you can skip the `ANTHROPIC_API_KEY` and `ZOHO_*` variables — leave them as placeholders.

## 5. First test run (creates authenticated sessions automatically)

```bash
npm test
```

On first run, Playwright's `globalSetup` (`tests/global-setup.ts`) logs in with the credentials from `.env` and saves two session files under `tests/fixtures/`:
- `storageState.json` (primary account)
- `storageState-punit.json` (test/secondary account)

These are reused for 72 hours (validity is also checked live, not just by file age) and are gitignored — never commit them.

**If login is SSO/MFA-protected:** a visible browser window opens and the script waits up to 90s for you to approve the sign-in (e.g. via Microsoft Authenticator). If auto-login can't complete, it pauses in the Playwright Inspector — log in manually in the opened window, then click **▶ Resume**.

Do not bypass `global-setup` — tests assume an authenticated `storageState` and will fail or behave incorrectly without it (see project convention: always let global-setup run before automation).

## 6. Optional: Zoho MCP server (for agent-driven pipeline via Claude Code / VS Code)

The `.mcp.json` (Claude Code CLI) and `.vscode/mcp.json` (VS Code) files already point at the hosted Zoho Projects MCP endpoint — no local server to run. To use it:
- In Claude Code: authorize the `zoho-projects` MCP server when prompted (or via `claude mcp` / `/mcp`).
- If the MCP server is unreachable, skills fall back to the npm scripts below, which use the `ZOHO_*` env vars directly.

## 7. Common commands (once setup is done)

```bash
npm test                          # headless, chromium only
npm run test:headed               # chromium, visible browser
npm run test:cross-browser        # chromium + firefox + webkit
npx playwright test --grep @smoke # filter by tag
npm run test:report               # open last HTML report

npx tsc --noEmit                  # type-check (run after generating/editing automation)

npm run fetch:tasks               # pull tasks from Zoho (needs ZOHO_* vars)
npm run report:excel              # generate Excel report from JSON
npm run kb:update                 # sync QA knowledge base from Zoho bugs
```

## 8. Troubleshooting checklist

- **`npx playwright test` fails immediately with a missing browser error** → re-run `npx playwright install --with-deps`.
- **Login/global-setup hangs or fails repeatedly** → delete `tests/fixtures/storageState*.json` and re-run `npm test`; verify `SIMERP_USERNAME`/`SIMERP_PASSWORD` are correct and the account isn't locked.
- **`tsc --noEmit` errors on files under `.claude/skills/**`** → run `npm install` again; those scripts share the root `tsconfig.json`.
- **Zoho-related npm scripts fail with auth errors** → double check `ZOHO_CLIENT_ID/SECRET/REFRESH_TOKEN/PORTAL_ID/PROJECT_ID/REGION` in `.env`; refresh tokens can expire and need regenerating via Zoho's OAuth2 flow.
- **`npm run pipeline` fails with a missing API key error** → set `ANTHROPIC_API_KEY` in `.env`.
