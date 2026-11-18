import { test, expect } from '../../../fixtures/auth';
import { CertificationsPage } from '../../../page-objects/employee/certifications.page';

/**
 * Employee Certifications — negative. UI checks never press Save on a valid form; API checks only
 * send payloads the server must reject. The three payloads the server wrongly ACCEPTS on create
 * (future issue date, expiry past the type's validity, ftp:// proof — TC-EMPCRT-037..039) stay
 * manual: there is no delete. The same gaps on Edit are automated in edit.spec.ts (it restores).
 * Since SI4-T1559 a certificate is a type picked from a list, so POST takes `certificationTypeId`
 * instead of `partnershipId` + `title` (TC-EMPCRT-033, free-text title length, is retired).
 */
const STANDARD: [string, string] = ['AWS', 'AWS Certified Cloud Practitioner'];
const NEVER: [string, string] = ['Claude', 'Claude Prompt Engineering Essentials'];
const INVALID_URL = 'Enter a valid URL starting with http:// or https://.';

function isoDaysFromToday(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

test.describe('Employee — Certifications — Negative', () => {
  test('TC-EMPCRT-030 @negative Proof link must start with http:// or https://', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    await c.openDrawer();
    for (const bad of ['notaurl', 'ftp://x.com', 'javascript:alert(1)']) {
      await c.proofUrl.fill(bad);
      await c.proofUrl.blur();
      await expect(c.fieldError(INVALID_URL), bad).toBeVisible();
    }
    await c.proofUrl.fill('https://example.com/cert.pdf');
    await c.proofUrl.blur();
    await expect(c.fieldError(INVALID_URL)).toBeHidden();
  });

  test('TC-EMPCRT-031 @negative Proof file over 5 MB is rejected', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    await c.openDrawer();
    await c.choose(...NEVER);
    await c.pickDate(c.issueDate, /^Today/);
    await c.proofFile.setInputFiles({ name: 'too-big.pdf', mimeType: 'application/pdf', buffer: Buffer.alloc(6 * 1024 * 1024, 1) });
    await expect(c.fieldError('The file must be 5 MB or smaller.')).toBeVisible();
    await expect(c.save).toBeDisabled();
  });

  test('TC-EMPCRT-032 @negative Issue date cannot be in the future', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    await c.openDrawer();
    await c.openCalendar(c.issueDate);
    await empPage.getByRole('button', { name: 'Go to the Next Month' }).click();
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const toDate = (ddmmyyyy: string) => { const [d, m, y] = ddmmyyyy.split('/').map(Number); return new Date(y, m - 1, d); };
    const future = (await c.calendarDays()).filter(x => toDate(x.day) > today);
    expect(future.length).toBeGreaterThan(0);
    expect(future.filter(x => !x.disabled), 'future days that are still clickable').toEqual([]);
  });

  test('TC-EMPCRT-033 @negative Exam Email must be a valid address', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    await c.openDrawer();
    await c.choose(...NEVER);
    await c.pickDate(c.issueDate, /^Today/);
    await c.proofUrl.fill('https://example.com/proof');
    await expect(c.save).toBeDisabled(); // Exam Email is required since 6.9.0 (SI4-T1685)
    await c.examEmail.fill('not-an-email');
    await c.examEmail.blur();
    await expect(c.fieldError(/valid email address/)).toBeVisible();
    await expect(c.save).toBeDisabled();
    await c.examEmail.fill('name@example.com');
    await expect(c.save).toBeEnabled();
  });

  test('TC-EMPCRT-034 @negative Wrong file type is not accepted as proof', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    await c.openDrawer();
    await c.choose(...NEVER);
    await c.pickDate(c.issueDate, /^Today/);
    await c.proofFile.setInputFiles({ name: 'notes.txt', mimeType: 'text/plain', buffer: Buffer.from('hello') });
    await expect(c.drawer).not.toContainText('notes.txt');
    await expect(c.save).toBeDisabled();
  });

  test('TC-EMPCRT-035 @negative API rejects expiry on or before issue date', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    const base = { certificationTypeId: await c.certificateTypeId(...STANDARD), issueDate: isoDaysFromToday(-2), proofUrl: 'https://example.com/qa-neg', examEmail: 'qa.neg@example.com' };
    for (const expiryDate of [base.issueDate, isoDaysFromToday(-10)]) {
      const r = await c.apiCreate({ ...base, expiryDate });
      expect(r.status(), `expiry ${expiryDate}`).toBe(400);
      expect(JSON.stringify(await r.json())).toMatch(/Expiry date must be after the issue date/);
    }
  });

  test('TC-EMPCRT-036 @negative API rejects other invalid saves', async ({ empPage }) => {
    const c = new CertificationsPage(empPage);
    await c.open();
    const standard = await c.certificateTypeId(...STANDARD);
    const never = await c.certificateTypeId(...NEVER);
    const ok = { certificationTypeId: standard, issueDate: isoDaysFromToday(-2), expiryDate: isoDaysFromToday(300), proofUrl: 'https://example.com/qa-neg', examEmail: 'qa.neg@example.com' };
    const omit = (k: keyof typeof ok) => { const { [k]: _drop, ...rest } = ok; return rest; };
    const cases: [string, Record<string, string>, number, RegExp][] = [
      ['no proof', omit('proofUrl'), 400, /Proof is required/],
      ['no certificate type', omit('certificationTypeId'), 400, /certificationTypeId is required/],
      ['old shape: partnershipId + title', { ...omit('certificationTypeId'), partnershipId: '00000000-0000-4000-8000-000000000000', title: 'QA-NEG' }, 400, /property partnershipId should not exist/],
      ['expiry for a never-expires type', { ...ok, certificationTypeId: never }, 400, /not allowed for a certificate type that never expires/],
      ['no expiry for a standard type', omit('expiryDate'), 400, /Expiry date is required for this certificate type/],
      ['unknown certificate type', { ...ok, certificationTypeId: '00000000-0000-4000-8000-000000000000' }, 404, /Certificate type not found/],
      ['javascript: proof URL', { ...ok, proofUrl: 'javascript:alert(1)' }, 400, /proofUrl must be a URL/],
      ['invalid exam email', { ...ok, examEmail: 'not-an-email' }, 400, /examEmail must be an email/],
      ['no exam email (required since 6.9.0)', omit('examEmail'), 400, /examEmail should not be empty/],
      ['dd/mm/yyyy date', { ...ok, issueDate: '12/10/2026' }, 400, /ISO 8601/],
    ];
    for (const [name, body, status, msg] of cases) {
      const r = await c.apiCreate(body);
      expect.soft(r.status(), name).toBe(status);
      expect.soft(JSON.stringify(await r.json()), name).toMatch(msg);
    }
  });
});
