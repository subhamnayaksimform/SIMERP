/**
 * Classifies a Playwright error message as a locator-related failure, distinguishing it
 * from unrelated failures (assertion mismatches, network errors, etc.) so
 * build-locator-failure-ledger.ts only ledgers failures actually caused by a fragile locator.
 */

export type LocatorErrorKind = 'strict-mode' | 'timeout' | 'stale' | 'not-visible';

export interface LocatorFailureSignature {
  kind: LocatorErrorKind;
  locatorSnippet: string;
}

const LOCATOR_CALL_RE = /(getBy(?:Role|TestId|Label|Placeholder|Text|Title|AltText)\([^)]*\)(?:\.(?:first|last|nth)\([^)]*\))?|locator\([^)]*\))/;

function extractLocatorSnippet(message: string): string | undefined {
  const match = message.match(LOCATOR_CALL_RE);
  return match ? match[1] : undefined;
}

/** Returns null when the error is not locator-related (e.g. a plain assertion or network failure). */
export function classifyLocatorFailure(error: string | undefined): LocatorFailureSignature | null {
  if (!error) return null;

  if (/strict mode violation/i.test(error)) {
    return { kind: 'strict-mode', locatorSnippet: extractLocatorSnippet(error) ?? '(unknown)' };
  }

  if (/element is not attached to the DOM/i.test(error)) {
    return { kind: 'stale', locatorSnippet: extractLocatorSnippet(error) ?? '(unknown)' };
  }

  if (/Timeout\s+\d+ms exceeded/i.test(error) && /waiting for/i.test(error)) {
    const snippet = extractLocatorSnippet(error);
    if (!snippet) return null; // timeout unrelated to a locator (e.g. waitForResponse)
    const kind: LocatorErrorKind = /to be visible/i.test(error) ? 'not-visible' : 'timeout';
    return { kind, locatorSnippet: snippet };
  }

  return null;
}
