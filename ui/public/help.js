// SimERP QA Workspace — "How to use" page. Content lives here so it is easy to edit.
// Each section: { id, title, icon, intro?, blocks: [...] }. Block types: steps, pages, tasks, keys, terms, faq.

const HELP = [
  {
    id: 'start', title: 'Quick start', icon: '🚀',
    intro: 'First time here? These four steps get you going. The Setup page checks most of them for you.',
    blocks: [{ type: 'steps', items: [
      ['Check your computer', 'Open <b>Setup</b>. Everything should show ✓. If something is missing it tells you exactly what to do — usually filling in the <code>.env</code> file or pressing <b>Install</b> for the test browser.', 'setup'],
      ['Look at the status', '<b>Home</b> shows every module with its latest result. Red means something is failing — click the card to see which tests.', 'home'],
      ['Open a module', 'In <b>Modules</b>, pick one. The Overview has its test cases (document and Excel), the latest results and the QA report — one click opens each.', 'modules'],
      ['Run tests or add a requirement', 'Press <b>▶ Run tests</b> on a module, or go to <b>New requirement</b> to turn a spec, pasted text or a Zoho task into test cases.', 'new'],
    ] }],
  },
  {
    id: 'pages', title: 'What each page does', icon: '🧭',
    blocks: [{ type: 'pages', items: [
      ['home', 'Home', 'A results donut for everything that has been run, the numbers that matter, and a card for every module. Filter to just the failing ones, search, or switch to a table.'],
      ['modules', 'Modules', 'One module at a time. <b>Overview</b>: latest result, failing tests, key documents, attachments. <b>Test cases</b>: every case with its latest result — filter by category or result, sort any column. <b>Runs</b>: this module\'s history. <b>All files</b>: every file the pipeline made for it.'],
      ['new', 'New requirement', 'Upload a document (.pdf, .docx, .txt, .md), paste text, or give a Zoho task ID. Claude analyses it and writes test cases, an Excel file and a readable document, filed under the right module. Takes 5–15 minutes.'],
      ['runs', 'Runs', 'Every test run, requirement, report refresh and upload — with progress, results, failing tests and the full log.'],
      ['tasks', 'Zoho tasks', 'Tasks pulled from Zoho. Press <b>Write test cases</b> on one, or link it to a module so its files show up there.'],
      ['setup', 'Setup', 'Checks what this computer needs: settings file, Claude login, test browser, Zoho. Tells you how to fix anything missing.'],
      ['tools', 'Dev tools', 'For developers: run by tag (@smoke, @regression), rebuild reports, type-check, lint, knowledge-base dry run.'],
    ] }],
  },
  {
    id: 'tasks-howto', title: 'How do I…', icon: '✅',
    blocks: [{ type: 'tasks', items: [
      ['…see what is failing?', 'On <b>Home</b>, click the <b>✕ Failing</b> chip (or “Failed” in the donut legend). Open the module and expand <b>“failing tests — see which”</b> for the test names and errors.'],
      ['…read the test cases for a feature?', 'Open the module → <b>Key documents → Test cases (Readable document)</b>, or the <b>Test cases</b> tab to browse and filter them. The Excel version is right next to it.'],
      ['…run a module\'s tests?', 'Module page → <b>▶ Run tests</b>. It logs in first, runs only that module\'s tests, then builds the QA report and the results Excel. Watch progress in the box at the top left. If failures look random, use <b>Run with 1 worker</b>.'],
      ['…turn a new requirement into test cases?', 'Go to <b>New requirement</b>, upload the document (or paste the text / give the Zoho ID), optionally name the feature, and press <b>Write test cases</b>. You can leave the page — it keeps going and shows up in Runs.'],
      ['…open a report or Excel file?', 'Just click it. HTML reports and PDFs open in a new tab; Excel and Word files open right here with one tab per sheet; you can still download any file.'],
      ['…keep a spec or notes with a module?', 'Module page → drop files onto <b>Attachments</b> (or press <b>＋ Attach files</b>). Requirement documents you used in <b>New requirement</b> are attached automatically.'],
      ['…find something fast?', 'Press <kbd>Ctrl</kbd> <kbd>K</kbd> and start typing a module, page or action.'],
      ['…stop something that is running?', 'Click <b>View progress</b> in the box at the top left, then <b>Stop</b>. If you stop a test run before any test has run, your previous results are kept.'],
    ] }],
  },
  {
    id: 'keys', title: 'Keyboard shortcuts', icon: '⌨️',
    blocks: [{ type: 'keys', items: [
      [['Ctrl', 'K'], 'Quick search — jump to a module, page or action'], [['/'], 'Quick search'], [['?'], 'Open this guide'],
      [['h'], 'Home'], [['m'], 'Modules'], [['n'], 'New requirement'], [['r'], 'Runs'], [['t'], 'Zoho tasks'],
      [['Esc'], 'Close a panel or the quick search'], [['Enter'], 'Open the focused module card'],
    ] }],
  },
  {
    id: 'terms', title: 'What the words mean', icon: '📖',
    blocks: [{ type: 'terms', items: [
      ['Module', 'A part of SimERP that has its own tests — e.g. Skills, Goals, PM Projects. Each has a short code like <code>EMPSKL</code>.'],
      ['Test case', 'One thing to check, with steps and an expected result. IDs look like <code>TC-EMPSKL-012</code>.'],
      ['Test script', 'The automated (Playwright) version of test cases — what <b>Run tests</b> actually runs.'],
      ['✓ Passed', 'The test did what was expected.'],
      ['✕ Failed', 'The test found a problem — either a real bug or a test that needs updating. Check the error text.'],
      ['~ Flaky', 'Failed first, then passed on retry. Usually timing, not a bug — try <b>Run with 1 worker</b>.'],
      ['– Skipped', 'Deliberately not run (for example the feature isn\'t built yet, or the test data isn\'t available).'],
      ['Pass rate', 'Passed ÷ tests that actually ran (skipped ones don\'t count).'],
      ['Known defect', 'A test marked as expected to fail because the bug is already known. It counts as passing until the bug is fixed.'],
      ['1 worker', 'Runs tests one after another instead of in parallel. Slower, but steadier.'],
    ] }],
  },
  {
    id: 'faq', title: 'Problems & fixes', icon: '🛠️',
    blocks: [{ type: 'faq', items: [
      ['The page won\'t open', 'Open a terminal in the project folder and run <code>npm run ui</code>. It keeps running in the background after you close the terminal. If it says the port is busy: <code>UI_PORT=4322 npm run ui</code>.'],
      ['A test run seems stuck at login', 'Auto-login probably failed and a browser window is waiting for you to log in by hand — the run\'s page shows a yellow note when this happens. Log in there and press ▶ Resume, or stop the run and check the logins in <code>.env</code>.'],
      ['Every test failed straight away', 'Open the run\'s log (Runs → the run → Technical log). Usually the <code>.env</code> logins are wrong or the test browser isn\'t installed — <b>Setup</b> checks both.'],
      ['“Write test cases” failed', 'Open <b>Setup → Claude</b>. Run <code>claude</code> once in a terminal to sign in. It uses your own Claude login — no API key needed.'],
      ['A module shows no test cases', 'Pull the latest code (test-case documents are shared through git in <code>docs/test-cases/</code>), or write new ones with <b>New requirement</b>.'],
      ['I can\'t start a second run', 'One job runs at a time because test runs and test writing are heavy. Wait for the current one (top left) or stop it.'],
      ['Will closing the workspace stop my run?', 'No. Runs keep going on their own and show up again when you reopen it. <code>npm run ui:stop</code> stops only the page.'],
      ['Where are my files?', 'Results, history and attachments are on your computer in <code>reports/</code> (not shared through git). Test-case documents in <code>docs/test-cases/</code> are shared, so everyone sees the same test cases.'],
    ] }],
  },
  {
    id: 'terminal', title: 'Start & stop from a terminal', icon: '💻',
    blocks: [{ type: 'terms', items: [
      ['<code>npm run ui</code>', 'Start the workspace and open the browser. Keeps running after the terminal closes, and restarts itself if it crashes.'],
      ['<code>npm run ui:stop</code>', 'Stop the workspace. A test run in progress keeps going.'],
      ['<code>npm run ui:status</code>', 'Is it running? Is a job running?'],
      ['<code>npm run ui:restart</code>', 'Stop and start again.'],
      ['<code>npm run pipeline:headless -- --source=file --input=spec.pdf</code>', 'For devs: same as New requirement, from a terminal or CI.'],
    ] }],
  },
];

function renderHelp() {
  const q = ($('#helpSearch').value || '').trim().toLowerCase();
  const strip = h => h.replace(/<[^>]+>/g, '').toLowerCase();
  const matches = (...parts) => !q || parts.some(p => strip(Array.isArray(p) ? p.join(' ') : String(p)).includes(q));
  const mark = h => !q ? h : h.replace(/(>|^)([^<]+)/g, (m, a, t) => a + t.replace(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), x => `<mark>${x}</mark>`));
  let shown = 0;
  const html = HELP.map(sec => {
    const blocks = sec.blocks.map(b => {
      const items = b.items.filter(it => matches(...it));
      if (!items.length) return '';
      shown += items.length;
      if (b.type === 'steps') return `<ol class="h-steps">${items.map(([t, d, go], i) => `<li><span class="h-num">${i + 1}</span><div><b>${mark(t)}</b><p>${mark(d)}</p>${go ? `<button class="small-btn" data-go="${go}">Take me there →</button>` : ''}</div></li>`).join('')}</ol>`;
      if (b.type === 'pages') return `<div class="h-pages">${items.map(([go, t, d]) => `<div class="h-page"><div class="h-page-head"><b>${mark(t)}</b><button class="linklike" data-go="${go}">Open →</button></div><p>${mark(d)}</p></div>`).join('')}</div>`;
      if (b.type === 'keys') return `<div class="h-keys">${items.map(([ks, d]) => `<div class="h-key"><span>${ks.map(k => `<kbd>${k}</kbd>`).join(' ')}</span><span>${mark(d)}</span></div>`).join('')}</div>`;
      if (b.type === 'terms') return `<dl class="h-terms">${items.map(([t, d]) => `<dt>${mark(t)}</dt><dd>${mark(d)}</dd>`).join('')}</dl>`;
      return `<div class="h-faq">${items.map(([t, d]) => `<details${q ? ' open' : ''}><summary>${mark(t)}</summary><p>${mark(d)}</p></details>`).join('')}</div>`;
    }).join('');
    if (!blocks) return '';
    return `<section class="h-sec" id="help-${sec.id}"><h2><span class="h-icon" aria-hidden="true">${sec.icon}</span>${sec.title}</h2>${sec.intro && !q ? `<p class="muted">${sec.intro}</p>` : ''}${blocks}</section>`;
  }).join('');
  $('#helpBody').innerHTML = html || `<div class="card pad">Nothing in the guide matches “${esc(q)}”. Try another word, or see the full guide in <code>docs/qa-workspace-guide.md</code>.</div>`;
  $('#helpToc').innerHTML = `<div class="muted small toc-label">On this page</div>` + HELP.map(sec => `<a href="#help-${sec.id}" data-toc="${sec.id}" class="${$(`#help-${sec.id}`) ? '' : 'dim'}">${sec.icon} ${sec.title}</a>`).join('');
}
$('#helpSearch').addEventListener('input', renderHelp);
$('#helpToc').addEventListener('click', e => {
  const a = e.target.closest('[data-toc]'); if (!a) return;
  e.preventDefault();
  document.getElementById(`help-${a.dataset.toc}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
