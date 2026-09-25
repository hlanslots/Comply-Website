export type WorkbenchStep = {
  title: string;
  description: string;
};

export type WorkbenchPage = {
  title: string;
  description: string;
  bestFor: string;
  trigger: string;
  practitionerUse: string;
  workflow: WorkbenchStep[];
  clientOutputs: string[];
};

export const workbenchPages: Record<string, WorkbenchPage> = {
  "comply-risk": {
    title: "COMPLY-RISK for structured risk assessments",
    description:
      "A practitioner Workbench for connecting assessment context, assets, vulnerabilities, threats, controls, evidence, and treatment decisions into one reviewable risk picture.",
    bestFor:
      "Organizations that need an ISO-aligned risk assessment, a clearer treatment roadmap, or risk evidence that can support readiness and governance decisions.",
    trigger:
      "A customer, auditor, leadership team, or framework obligation requires the organization to explain its risk decisions and show what happens next.",
    practitionerUse:
      "COMPLY practitioners structure the assessment, confirm the in-scope assets, evaluate realistic risk scenarios, connect controls and evidence, and prepare decisions for review or approval.",
    workflow: [
      {
        title: "Define the assessment context",
        description:
          "Select the assessment, confirm the scope and assets, and capture the security and privacy needs that shape the evaluation.",
      },
      {
        title: "Identify risks and scenarios",
        description:
          "Map vulnerabilities, threats, and realistic risk scenarios to each selected asset and business context.",
      },
      {
        title: "Evaluate controls and residual risk",
        description:
          "Link controls, review effectiveness, score residual exposure, and decide how risk should be treated.",
      },
      {
        title: "Prepare approval evidence",
        description:
          "Capture supporting evidence, approvals, the risk register, treatment decisions, and Statement of Applicability support.",
      },
    ],
    clientOutputs: [
      "Risk register and findings summary",
      "Risk treatment plan with accountable owners",
      "Control, evidence, and applicability traceability",
      "Selected reports or controlled views agreed for the engagement",
    ],
  },
  "comply-ucf": {
    title: "COMPLY-UCF for one control backbone across frameworks",
    description:
      "A practitioner Workbench for building a unified control framework around the client’s defined compliance scope, framework obligations, applicability decisions, and local control intent.",
    bestFor:
      "Lean teams that are managing overlapping ISO, SOC 2, NIST, PCI DSS, GDPR, DORA, CIS, or AI-governance expectations and want to reduce duplicated control work.",
    trigger:
      "Different customers, auditors, or regulators ask for similar proof in different formats, and the organization needs one defensible way to rationalize the requests.",
    practitionerUse:
      "COMPLY practitioners normalize framework expectations, preserve mapping rationale, define local control intent, and create a control structure that can support reusable evidence.",
    workflow: [
      {
        title: "Define scope and framework obligations",
        description:
          "Confirm the organization’s compliance scope, relevant frameworks, versions, requirements, and interested-party expectations.",
      },
      {
        title: "Normalize obligations and controls",
        description:
          "Translate source framework controls into a structured model that makes overlap and duplication visible.",
      },
      {
        title: "Review applicability and local intent",
        description:
          "Capture mapping rationale, applicability decisions, ownership, purpose, guidance, and how each control is expected to operate locally.",
      },
      {
        title: "Establish evidence expectations",
        description:
          "Connect control expectations to criteria, evidence needs, readiness decisions, and the reports or exports agreed for the engagement.",
      },
    ],
    clientOutputs: [
      "Unified control framework for the agreed compliance scope",
      "Framework mappings and applicability decisions",
      "Local control intent, ownership, and implementation guidance",
      "Cross-framework reports or exports agreed for the engagement",
    ],
  },
  "comply-ssa": {
    title: "COMPLY-SSA for security-stack assessment",
    description:
      "A practitioner Workbench for assessing whether the organization’s security capabilities, tools, evidence, and ownership support the controls its business and compliance scope require.",
    bestFor:
      "Organizations that need to understand security capability coverage, evidence quality, tooling alignment, and the improvement priorities behind a compliance or assurance commitment.",
    trigger:
      "A readiness effort exposes uncertainty about security-stack coverage, control ownership, evidence quality, or the practical value of existing tools.",
    practitionerUse:
      "COMPLY practitioners configure the engagement, define capability scope, review control mappings and assessment questions, evaluate evidence quality, and connect findings to remediation.",
    workflow: [
      {
        title: "Set up the organization and engagement",
        description:
          "Confirm the client context, assessment mode, engagement scope, and framework basis for the review.",
      },
      {
        title: "Define capability scope",
        description:
          "Identify the security capabilities, layers, tools, applications, and services that are relevant to the assessment.",
      },
      {
        title: "Review questions and mappings",
        description:
          "Use the question library and mapping review to connect capabilities and tools to the applicable control expectations.",
      },
      {
        title: "Evaluate evidence and quality",
        description:
          "Request and review evidence, track response quality, identify evidence gaps, and record findings with context.",
      },
      {
        title: "Prioritize remediation and reporting",
        description:
          "Connect findings to actions, retest readiness, and the assessment or reporting package agreed for the engagement.",
      },
    ],
    clientOutputs: [
      "Security-stack coverage and capability findings",
      "Evidence-quality and control-support observations",
      "Prioritized remediation and ownership actions",
      "Assessment reports or controlled views agreed for the engagement",
    ],
  },
  "comply-docs": {
    title: "COMPLY-DOCS for governed compliance evidence",
    description:
      "A practitioner Workbench for organizing documents and evidence artifacts, connecting them to engagements and controls, and moving them through governed review and publication.",
    bestFor:
      "Organizations that need evidence to remain findable, reviewable, reusable, and traceable from a client engagement through audit-ready reporting.",
    trigger:
      "Evidence is spread across folders, inboxes, tools, and prior audits, making it difficult to confirm ownership, review status, or whether an artifact supports the right control.",
    practitionerUse:
      "COMPLY practitioners establish the engagement repository, classify artifacts, map evidence to controls and criteria, and manage review, approval, and publication state.",
    workflow: [
      {
        title: "Establish the repository and engagement",
        description:
          "Set the organization and engagement context so evidence has a defined owner, scope, and purpose.",
      },
      {
        title: "Classify documents and artifacts",
        description:
          "Organize documents, screenshots, tickets, reports, logs, approvals, reviews, and other evidence by type and relevance.",
      },
      {
        title: "Map evidence to controls and criteria",
        description:
          "Connect each artifact to the control, criteria, framework, or engagement question it is intended to support.",
      },
      {
        title: "Review, approve, and publish",
        description:
          "Track review status and approvals, then prepare governed evidence registers, packages, and client-ready outputs.",
      },
    ],
    clientOutputs: [
      "Evidence register and control-to-artifact traceability",
      "Evidence-readiness observations and review status",
      "Audit-ready evidence packages agreed for the engagement",
      "Selected repository views or controlled access when appropriate",
    ],
  },
};
