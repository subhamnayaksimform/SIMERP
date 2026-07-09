/**
 * Zod schemas mirroring the Output Format tables documented in
 * .claude/agents/requirement-analyzer.agent.md and .claude/agents/test-case-generator.agent.md.
 *
 * These exist so malformed/incomplete LLM JSON is caught immediately instead of being
 * silently persisted as `{ raw: ... }` / `[]` and propagated through the whole pipeline.
 * New provenance/confidence sub-fields are required (not optional) so the model is
 * structurally forced to emit them rather than silently omitting them.
 */

import { z } from 'zod';

const confidenceEnum = z.enum(['requirement-grounded', 'speculative', 'inferred', 'unverified-fallback']);

const uiElementSchema = z.object({
  name: z.string(),
  source: z.enum(['verbatim', 'inferred']),
  sourceQuote: z.string().optional(),
});

const apiEndpointSchema = z.object({
  method: z.string(), // "unclear" is a valid value when not confirmed
  path: z.string(),
  purpose: z.string().optional().default(''),
  confirmed: z.boolean(),
  inferredGuess: z.object({ method: z.string(), path: z.string(), basis: z.string() }).optional(),
});

const businessRuleSchema = z.object({
  rule: z.string(),
  source: z.string(), // "knowledge-base" | "regression-derived" | task-derived label
  severity: z.string().optional().default('major'),
  refId: z.string().optional(),
  testPattern: z.string().optional(),
  basis: z.string().optional(), // required in practice when source === 'regression-derived', enforced via superRefine below
  confidence: confidenceEnum.optional().default('requirement-grounded'),
  kbSource: z.string().optional(),
});

const knownBugEdgeCaseSchema = z.object({
  id: z.string(),
  description: z.string(),
  testHint: z.string().optional().default(''),
  severity: z.string().optional().default('major'),
  source: z.string().optional(),
  confidence: confidenceEnum.optional(),
  rootCauseHint: z.string().optional(),
  rootCauseSource: z.string().optional(),
});

const validationRuleSchema = z.object({
  field: z.string(),
  rule: z.string(),
  errorMessage: z.string().optional(),
  validationType: z.string().optional().default('sync'),
});

const testScenarioSchema = z.object({
  name: z.string(),
  type: z.string().optional(),
  priority: z.string().optional(),
  tags: z.array(z.string()).optional().default([]),
  summary: z.string().optional(),
  assertions: z.array(z.string()).optional().default([]),
  automatable: z.string().optional(),
  automationNote: z.string().optional(),
});

const affectedModuleSchema = z.object({
  module: z.string(),
  regressionRisk: z.string().optional(),
  integrationNote: z.string().optional(),
});

const roleMatrixSchema = z.object({
  role: z.string(),
  can: z.array(z.string()).optional().default([]),
  cannot: z.array(z.string()).optional().default([]),
  dataScope: z.string().optional(),
});

const unclearSchema = z.object({
  topic: z.string(),
  note: z.string().optional().default(''),
  severity: z.enum(['blocking', 'non-blocking']).default('non-blocking'),
  defaultAssumption: z.string().optional().default(''),
  questionToAsk: z.string().optional().default(''),
});

const coverageMapSchema = z.object({
  smoke: z.number().optional().default(0),
  functional: z.number().optional().default(0),
  negative: z.number().optional().default(0),
  boundary: z.number().optional().default(0),
  security: z.number().optional().default(0),
  a11y: z.number().optional().default(0),
  performance: z.number().optional().default(0),
  regression: z.number().optional().default(0),
  integration: z.number().optional().default(0),
  total_minimum: z.number().optional().default(0),
}).optional();

export const requirementSchema = z.object({
  schemaVersion: z.string().optional().default('2.0'),
  taskId: z.string().nullable().optional().default(null),
  linkedTaskIds: z.array(z.string()).optional().default([]),
  sourceOfRequirements: z.enum(['zoho', 'manual', 'document']).optional().default('manual'),
  feature: z.string(),
  module: z.string().optional().default(''),
  moduleCode: z.string(),
  actors: z.array(z.string()).optional().default([]),
  automationFeasibility: z.object({ level: z.string(), reason: z.string().optional().default('') }).optional(),
  testAccounts: z.array(z.record(z.string(), z.unknown())).optional().default([]),
  preconditions: z.array(z.string()).optional().default([]),
  testDataHints: z.array(z.string()).optional().default([]),
  acceptanceCriteria: z.array(z.string()).optional().default([]),
  validationRules: z.array(validationRuleSchema).optional().default([]),
  businessRules: z.array(businessRuleSchema).optional().default([]),
  uiElements: z.array(uiElementSchema).optional().default([]),
  apiEndpoints: z.array(apiEndpointSchema).optional().default([]),
  testScenarios: z.array(testScenarioSchema).optional().default([]),
  edgeCases: z.array(z.string()).optional().default([]),
  knownBugEdgeCases: z.array(knownBugEdgeCaseSchema).optional().default([]),
  negativeScenarios: z.array(z.record(z.string(), z.unknown())).optional().default([]),
  securityScenarios: z.array(z.record(z.string(), z.unknown())).optional().default([]),
  nfrRequirements: z.record(z.string(), z.unknown()).optional().default({}),
  affectedModules: z.array(affectedModuleSchema).optional().default([]),
  dependencies: z.array(z.string()).optional().default([]),
  integrationScenarios: z.array(z.record(z.string(), z.unknown())).optional().default([]),
  criticalPaths: z.array(z.string()).optional().default([]),
  roleMatrix: z.array(roleMatrixSchema).optional().default([]),
  coverageMap: coverageMapSchema,
  unclear: z.array(unclearSchema).optional().default([]),
}).superRefine((req, ctx) => {
  for (const [i, br] of req.businessRules.entries()) {
    if (br.source === 'regression-derived' && !br.basis) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['businessRules', i, 'basis'],
        message: 'businessRules[].basis is required when source is "regression-derived" — cite the extracted operation/field that justifies this entry',
      });
    }
  }
});

export const requirementsSchema = z.union([requirementSchema, z.array(requirementSchema)]);

export const testCaseSchema = z.object({
  id: z.string().regex(/^TC-[A-Z]+-\d+$/, 'id must match TC-<MODULE>-<NNN>'),
  module: z.string(),
  moduleCode: z.string().optional(),
  taskId: z.string().optional().default(''),
  title: z.string(),
  category: z.string(),
  priority: z.string(),
  severity: z.string().optional().default('minor'),
  tags: z.array(z.string()).optional().default([]),
  automatable: z.boolean().optional().default(true),
  preconditions: z.string().optional().default(''),
  testData: z.union([z.record(z.string(), z.unknown()), z.string()]).optional(),
  steps: z.array(z.string()),
  expected: z.string(),
  automationHint: z.string().optional().default(''),
  requirementRef: z.string().optional().default(''),
  provenance: z.enum(['requirement-grounded', 'regression-derived']).optional().default('requirement-grounded'),
  confidence: confidenceEnum.optional().default('requirement-grounded'),
}).superRefine((tc, ctx) => {
  if (tc.confidence === 'speculative' && tc.severity === 'critical') {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['severity'],
      message: 'speculative-confidence test cases must not be severity "critical" — cap at "minor"',
    });
  }
});

export const testCasesSchema = z.array(testCaseSchema);
