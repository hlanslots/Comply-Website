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
    title: "ISO 27001 readiness for small and mid-size organizations",
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
  "iso-42001": {
    title: "ISO 42001 and AI governance readiness",
    description:
      "Build a practical AI management system that connects AI use cases, roles, risks, controls, evidence, and continual improvement.",
    bestFor:
      "Organizations developing, deploying, or materially relying on AI systems and needing a governed way to address customer, procurement, or regulatory expectations.",
    trigger:
      "An AI use case creates new questions about accountability, risk, transparency, security, privacy, or evidence of responsible operation.",
    scope:
      "COMPLY helps structure the AI management context, interested-party expectations, risk and impact considerations, control ownership, evidence, and governance routines that support the agreed scope.",
    practitionerWorkflow: [
      "COMPLY-UCF connects AI governance expectations to a structured control and criteria model.",
      "COMPLY-RISK captures AI-related risks, treatment decisions, ownership, and review state.",
      "COMPLY-SSA and COMPLY-DOCS support capability evidence, reviews, approvals, and traceable outputs.",
    ],
    clientOutputs: [
      "An AI governance readiness baseline and prioritized action view",
      "AI risk, control, ownership, and evidence traceability",
      "Governance and evidence outputs agreed for the engagement",
    ],
  },
  "pci-dss": {
    title: "PCI DSS readiness for payment environments",
    description:
      "Organize payment-card security obligations, scope, control ownership, evidence, and remediation priorities around the client’s cardholder data environment.",
    bestFor:
      "Fintech, payments, e-commerce, service providers, and other organizations facing PCI DSS validation or customer-assurance pressure.",
    trigger:
      "An acquirer, payment partner, customer, or assessment deadline requires a clearer view of cardholder-data scope and control evidence.",
    scope:
      "COMPLY helps structure the agreed PCI DSS scope, map requirements to local controls, identify evidence needs, coordinate ownership, and prioritize remediation before independent validation.",
    practitionerWorkflow: [
      "COMPLY-UCF rationalizes PCI DSS requirements with the client’s existing control environment.",
      "COMPLY-SSA reviews security capabilities, tooling, scope assumptions, and evidence quality.",
      "COMPLY-DOCS organizes evidence, approvals, review status, and assessment-supporting packages.",
    ],
    clientOutputs: [
      "A PCI DSS scope and readiness baseline",
      "Prioritized control and evidence gaps with accountable owners",
      "Assessment-supporting reports and evidence packages agreed for the engagement",
    ],
  },
  "nist-sp-800-53": {
    title: "NIST SP 800-53 control readiness",
    description:
      "Translate NIST SP 800-53 control expectations into a scoped, owned, evidenced, and reviewable security and privacy control program.",
    bestFor:
      "Organizations working with federal, public-sector, regulated, or contract-driven security requirements that reference NIST SP 800-53 controls or baselines.",
    trigger:
      "A contract, request for proposal, customer review, or system authorization effort requires traceable implementation evidence against a NIST control baseline.",
    scope:
      "COMPLY helps define the system and organizational scope, map the applicable control baseline, clarify implementation responsibility, connect risks to controls, and organize evidence for review.",
    practitionerWorkflow: [
      "COMPLY-UCF maps NIST SP 800-53 controls and enhancements to the client’s local control model.",
      "COMPLY-RISK connects system context, threats, vulnerabilities, treatment, and control decisions.",
      "COMPLY-DOCS organizes implementation evidence, reviews, approvals, and traceable reporting.",
    ],
    clientOutputs: [
      "A scoped NIST SP 800-53 control readiness view",
      "Implementation, ownership, and evidence observations",
      "Prioritized remediation and review outputs agreed for the engagement",
    ],
  },
  "nist-csf": {
    title: "NIST CSF profiles for practical cyber risk management",
    description:
      "Use NIST CSF outcomes to establish a current profile, target profile, risk-based gap view, and action plan that leadership and operators can use together.",
    bestFor:
      "Small and mid-size organizations that need a common language for cybersecurity risk, customer assurance, board reporting, or program improvement.",
    trigger:
      "Leadership or a customer asks for a defensible view of cybersecurity posture, priorities, and progress without starting with a large certification program.",
    scope:
      "COMPLY helps connect the agreed NIST CSF profile to risks, controls, capabilities, ownership, evidence, and prioritized improvement actions.",
    practitionerWorkflow: [
      "COMPLY-UCF maps NIST CSF outcomes to the client’s controls and operating expectations.",
      "COMPLY-RISK prioritizes the risks, scenarios, and treatment decisions behind the profile.",
      "COMPLY-SSA and COMPLY-DOCS support capability evidence, findings, and reviewable outputs.",
    ],
    clientOutputs: [
      "Current and target profile observations",
      "Risk-based gap priorities with accountable owners",
      "Leadership-ready progress and evidence outputs agreed for the engagement",
    ],
  },
  "cis-controls": {
    title: "CIS Controls implementation priorities",
    description:
      "Turn CIS Controls into a practical, risk-informed improvement roadmap for the security capabilities and operating practices that matter most.",
    bestFor:
      "Lean security and IT teams that need prioritized safeguards, clearer ownership, and an actionable path from foundational hygiene to stronger control maturity.",
    trigger:
      "The organization needs to prioritize security improvements, respond to an assurance request, or make better use of existing tools and evidence.",
    scope:
      "COMPLY helps connect the agreed CIS Controls scope to assets, capabilities, risks, ownership, evidence, and an improvement sequence appropriate to the organization.",
    practitionerWorkflow: [
      "COMPLY-SSA assesses capabilities, security tools, evidence quality, and control coverage.",
      "COMPLY-RISK connects asset and threat context to prioritized safeguard decisions.",
      "COMPLY-UCF and COMPLY-DOCS support mapping, ownership, evidence, and reviewable reporting.",
    ],
    clientOutputs: [
      "A prioritized CIS Controls implementation view",
      "Capability, evidence, and ownership gaps",
      "A practical remediation sequence agreed for the engagement",
    ],
  },
  dora: {
    title: "DORA and ICT risk readiness",
    description:
      "Organize digital operational resilience, ICT risk, third-party, incident, testing, and evidence expectations into a governed readiness path.",
    bestFor:
      "Financial entities and ICT third-party providers that need to understand and evidence the parts of DORA relevant to their scope and relationships.",
    trigger:
      "A regulated customer, management team, or third-party-risk process requires accountable evidence of ICT risk management and operational resilience.",
    scope:
      "COMPLY helps structure the agreed DORA and ICT-risk scope, map expectations to controls, connect third-party and resilience risks to owners, and organize evidence for review.",
    practitionerWorkflow: [
      "COMPLY-UCF creates a traceable control structure for DORA and overlapping security or resilience expectations.",
      "COMPLY-RISK connects ICT assets, threats, dependencies, treatment, and review decisions.",
      "COMPLY-SSA and COMPLY-DOCS support third-party, capability, evidence, and reporting workflows.",
    ],
    clientOutputs: [
      "A DORA and ICT-risk readiness baseline",
      "Third-party, resilience, control, and evidence observations",
      "Prioritized remediation and governance outputs agreed for the engagement",
    ],
  },
  gdpr: {
    title: "GDPR security and accountability readiness",
    description:
      "Connect personal-data security obligations to risk, technical and organizational controls, evidence, ownership, and review routines without treating compliance as a document exercise.",
    bestFor:
      "Organizations processing personal data that need stronger security accountability, customer assurance, privacy governance, or evidence of ongoing control operation.",
    trigger:
      "A customer, privacy review, processing change, incident concern, or procurement process requires clearer evidence that personal data is protected appropriately.",
    scope:
      "COMPLY helps structure the agreed security and accountability scope, map obligations to controls and evidence, and identify governance or remediation actions. Legal applicability remains a matter for qualified counsel.",
    practitionerWorkflow: [
      "COMPLY-UCF maps agreed GDPR security and accountability expectations to local controls.",
      "COMPLY-RISK connects processing context, threats, vulnerabilities, and treatment decisions.",
      "COMPLY-DOCS organizes evidence, reviews, approvals, and traceable outputs for the engagement.",
    ],
    clientOutputs: [
      "A GDPR security and accountability readiness view",
      "Control, evidence, ownership, and remediation observations",
      "Governance and evidence outputs agreed for the engagement",
    ],
  },
};
