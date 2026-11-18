# QA Workspace — guide for PMs and devs

The QA Workspace is a web page that runs on your own computer. Use it to see how each part of SimERP is tested, open the latest test cases and reports, run tests, and turn a new requirement into test cases. Anything that uses AI runs on **your own Claude login**.

## First-time setup (about 10 minutes)

You need [Node.js 18 or newer](https://nodejs.org) and a copy of this repository.

1. Open a terminal in the project folder and install the dependencies:
   ```bash
   npm install
   ```
2. Create your settings file, then fill in the values (ask the QA lead for them):
   ```bash
   cp .env.example .env
   ```
   At minimum: `BASE_URL`, `SIMERP_USERNAME`, `SIMERP_PASSWORD`. The `ZOHO_*` values are optional.
3. For writing test cases: install [Claude Code](https://claude.com/claude-code) (the VS Code extension, or `npm i -g @anthropic-ai/claude-code`) and sign in once by running `claude` in a terminal. No API key is needed.
4. Start the workspace:
   ```bash
   npm run ui
   ```
   Your browser opens **http://localhost:4321**. Open the **Setup** page: it checks your computer and shows anything still missing. If the test browser isn't installed yet, press **Install** there.

## Everyday use

The workspace has its own **How to use** page in the sidebar, with the same guide plus keyboard shortcuts and fixes. Press `?` anywhere to open it.

| You want to… | Do this |
|---|---|
| See what's tested and what's failing | **Home**: one row per module, with its latest result |
| Read a module's test cases or reports | **Modules** → pick one → **Key documents** (one click opens it) |
| Run a module's tests | Module page → **Run tests**. It logs in first, then builds the QA report and the results Excel |
| Turn a requirement into test cases | **New requirement**: upload a document, paste the text, or enter a Zoho task ID. Takes 5–15 minutes |
| Start from a Zoho task | **Zoho tasks** → **Write test cases** |
| Keep a spec or notes with a module | Module page → drop the file on **Attachments** |
| See what happened earlier | **Runs**: every run, requirement and upload, with its log and results |

Start, stop or check the workspace from a terminal in the project folder:

```bash
npm run ui          # start (keeps running after you close the terminal) and open the browser
npm run ui:stop     # stop it. A test run in progress keeps going and finishes on its own
npm run ui:status   # is it running? is a job running?
```

## Good to know

- **One job at a time.** Test runs and test-case writing are heavy, so a second one waits until the first finishes. The box at the top left shows what's running.
- **Restarting the workspace never stops a running job.** If you stop a test run before any test has run, your previous results are kept.
- **A run that seems stuck at login** usually means auto-login failed and a browser window is waiting for you to log in by hand. The run's page says so.
- **Your files stay on your computer.** Results, history and attachments live in `reports/`, which isn't shared through git. Test-case documents in `docs/test-cases/` are shared through git, so everyone sees the same test cases.
- **Use "Run with 1 worker"** if failures look random or timing-related. It's slower but steadier.

## For devs

- **Generate Playwright scripts:** module → **Test cases** tab → *For devs: generate Playwright scripts*, or tick the box on **New requirement**. It writes under `tests/`, then runs `tsc` and the convention linter.
- **Dev tools page:** run by tag (`@smoke`, `@regression`), refresh reports, type-check, lint, and a knowledge-base dry run.
- **Same steps from a terminal or CI**, no UI needed:
  ```bash
  npm run pipeline:headless -- --source=file --input=path/to/spec.pdf
  npm run pipeline:headless -- --source=zoho --input=SI4-T501
  npm run pipeline:headless -- --check      # which Claude login / Zoho config will be used
  ```
- **Working on the UI itself:** `npm run ui:dev` runs it in the foreground. Code is in `ui/`: `server.ts` (HTTP), `indexer.ts` (which file belongs to which module), `jobs.ts` + `job-runner.js` (background jobs), `launch.js` (start/stop), `public/` (the page). The server log is `reports/ui-history/server.log`.

## Troubleshooting

| Problem | Fix |
|---|---|
| Page won't open | Run `npm run ui` in the project folder. If it says the port is busy: `UI_PORT=4322 npm run ui` |
| "Workspace did not start" | The last lines of `reports/ui-history/server.log` are printed with it. Often `npm install` wasn't run |
| Tests fail straight away | Open the run's log. Usually `.env` logins are wrong, or the test browser isn't installed (see **Setup**) |
| Writing test cases fails | **Setup** → Claude. Run `claude` once in a terminal to sign in |
| A module shows no test cases | Pull the latest `docs/test-cases/` from git, or write new ones with **New requirement** |
