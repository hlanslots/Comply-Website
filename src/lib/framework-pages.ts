export type FrameworkPage = {
  title: string;
  description: string;
  bestFor: string;
  trigger: string;
  scope: string;
  practitionerWorkflow: string[];
  clientOutputs: string[];
};

export const frameworkPages: Record<string, FrameworkPage> = {
  "iso-27001": {
    title: "ISO 27001 readiness for growing companies",
    description:
      "Build a practical information security management system that connects scope, risk, controls, ownership, and evidence before an independent certification review.",
    bestFor:
      "Organizations responding to customer assurance pressure or preparing to establish, improve, or certify an ISO 27001 ISMS.",
    trigger:
      "A customer, board, regulator, or market opportunity requires a more defensible information security program.",
    scope:
      "COMPLY helps define scope and context, support risk assessment, align Annex A expectations, structure the Statement of Applicability, and prepare evidence and governance routines.",
    practitionerWorkflow: [
      "COMPLY-RISK structures the risk assessment, treatment decisions, ownership, and review state.",
      "COMPLY-UCF creates a traceable control backbone and maps overlapping framework expectations.",
      "COMPLY-DOCS organizes evidence, approvals, reviews, and audit-ready outputs.",
    ],
    clientOutputs: [
      "A scoped readiness view and prioritized remediation roadmap",
      "Risk, control, applicability, and evidence traceability",
      "Readiness reporting and evidence packages agreed for the engagement",
    ],
  },
  "soc-2": {
    title: "SOC 2 readiness for teams that need customer trust",
    description:
      "Translate Trust Services Criteria into operating controls, evidence expectations, ownership, and a practical path toward Type 1 or Type 2 readiness.",
    bestFor:
      "B2B SaaS, technology, and service organizations responding to enterprise questionnaires or preparing for a SOC 2 examination.",
    trigger:
      "A prospect, customer, investor, or renewal process requires credible evidence of security and control operation.",
    scope:
      "COMPLY helps connect Trust Services Criteria to local controls, policies, operating procedures, evidence collection, review cadence, and management visibility.",
    practitionerWorkflow: [
      "COMPLY-UCF rationalizes Trust Services Criteria with the client’s existing control environment.",
      "COMPLY-SSA assesses security capabilities, tooling, ownership, and evidence quality.",
      "COMPLY-DOCS keeps artifacts, reviews, approvals, and control relationships traceable.",
    ],
    clientOutputs: [
      "A SOC 2 readiness baseline and prioritized gap view",
      "Control and evidence expectations that owners can execute",
      "Audit-supporting reports and evidence packages agreed for the engagement",
    ],
  },
  "multi-framework": {
    title: "One compliance program across overlapping frameworks",
    description:
      "Create a unified operating model when ISO, SOC 2, NIST, PCI DSS, GDPR, DORA, CIS, or AI-governance obligations overlap.",
    bestFor:
      "Lean teams that are answering repeated evidence requests or managing several framework obligations at once.",
    trigger:
      "Different customers, regulators, or auditors ask for similar proof in different formats and the work is becoming duplicative.",
    scope:
      "COMPLY helps separate requirement intent, framework controls, local control criteria, evidence artifacts, risk treatment, and governance so one program can support multiple obligations.",
    practitionerWorkflow: [
      "COMPLY-UCF creates the unified control structure and preserves mapping rationale.",
      "COMPLY-RISK keeps risk, treatment, and control decisions connected.",
      "COMPLY-DOCS supports evidence reuse, review status, and audit traceability across frameworks.",
    ],
    clientOutputs: [
      "A cross-framework scope and duplication view",
      "Reusable control and evidence mappings with clear ownership",
      "A prioritized roadmap for reducing repeated compliance effort",
    ],
  },
};
