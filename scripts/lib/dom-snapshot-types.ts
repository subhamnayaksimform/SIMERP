/** Shared shape for reports/knowledge-base/dom-snapshots/<MODULE_CODE>.json, written by
 * scripts/capture-dom-snapshot.ts and read by scripts/build-locator-failure-ledger.ts. */

export interface InteractiveElementRecord {
  tag: string;
  role: string | null;
  accessibleName: string | null;
  dataSlot: string | null;
  dataTestId: string | null;
  ariaLabel: string | null;
  ariaSelected: string | null;
  text: string | null;
  disabled: boolean | null;
  suggestedLocator: string;
}

export interface DomSnapshotState {
  label: string;
  url: string;
  isNotFoundPage: boolean;
  accessibilityTree: string | null;
  interactiveElements: InteractiveElementRecord[];
  screenshot: string;
}

export interface DomSnapshot {
  module: string;
  capturedAt: string;
  baseUrl: string;
  routes: string[];
  session: 'primary' | 'punit' | 'pm' | 'pmo' | 'tm' | 'emp' | 'em' | 'csm';
  states: DomSnapshotState[];
}
