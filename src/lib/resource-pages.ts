export type ResourceGuide = {
  title: string;
  audience: string;
  businessProblem: string;
  description: string;
  outcome: string;
  sections: Array<{
    title: string;
    description: string;
    bullets: string[];
  }>;
};

export const resourceGuides: Record<string, ResourceGuide> = {
  "readiness-scorecard": {
    title: "Small and Mid-Size Company Compliance Readiness Scorecard",
    audience: "Founders, executives, and security or compliance leaders",
    businessProblem:
      "You need to know whether your current compliance effort is ready for customer, audit, or regulatory scrutiny before committing to a larger program.",
    description:
      "A practical scorecard for identifying where a lean team has confidence, where it has exposure, and what should happen next.",
    outcome:
      "A clearer starting point for a focused conversation, baseline assessment, or readiness build.",
    sections: [
      {
        title: "Scope and obligations",
        description: "Start by making the external pressure and the actual scope explicit.",
        bullets: [
          "Can you name the customer, audit, regulatory, contractual, or board requirement driving the work?",
          "Is the in-scope business, product, location, data, and technology boundary documented?",
          "Do you know which framework obligations overlap and which are unique?",
        ],
      },
      {
        title: "Ownership and risk",
        description: "Readiness depends on decisions and owners, not only on policy documents.",
        bullets: [
          "Does every material risk and control area have an accountable owner?",
          "Are risk treatment decisions documented, prioritized, and reviewed by leadership?",
          "Can owners explain what must operate in practice and how they know it is working?",
        ],
      },
      {
        title: "Controls and evidence",
        description: "Test whether the program can produce defensible proof when asked.",
        bullets: [
          "Are controls mapped to requirements and written in terms people can execute?",
          "Does each important control have evidence that shows design, existence, and operation where relevant?",
          "Can evidence be reused across frameworks without losing context or ownership?",
        ],
      },
      {
        title: "Governance and next action",
        description: "A readiness view should end with an executable decision.",
        bullets: [
          "Are evidence reviews, internal audit, management review, and corrective actions scheduled?",
          "Can leadership see the most important gaps, deadlines, and decisions in one place?",
          "Is the next step clear: clarify, baseline, build readiness, or sustain governance?",
        ],
      },
    ],
  },
  "requirement-to-evidence": {
    title: "From Requirement to Evidence A Plain English Guide",
    audience: "Compliance, security, risk, audit, and control owners",
    businessProblem:
      "Requirements, controls, evidence, and reviews are disconnected, so every audit request feels like starting over.",
    description:
      "A plain-English explanation of how to build a traceability chain that turns obligations into evidence people can review, reuse, and defend.",
    outcome:
      "A shared vocabulary for connecting requirements, controls, criteria, evidence, owners, reviews, and conclusions.",
    sections: [
      {
        title: "1. Start with the requirement",
        description: "Capture the authoritative obligation before drafting a control or requesting evidence.",
        bullets: [
          "Record whether the requirement comes from a law, regulation, contract, customer, policy, or framework.",
          "Preserve the source, scope, jurisdiction, deadline, and interested party.",
          "State what the organization must be able to demonstrate.",
        ],
      },
      {
        title: "2. Map the framework control",
        description: "Translate the obligation into the recognized control expectation that applies.",
        bullets: [
          "Identify the relevant ISO, SOC 2, NIST, PCI DSS, GDPR, DORA, CIS, or AI-governance control.",
          "Rationalize overlapping controls instead of creating separate work for every framework.",
          "Keep the mapping rationale visible so reviewers can follow the decision.",
        ],
      },
      {
        title: "3. Define local control and criteria",
        description: "Describe how the organization satisfies the expectation in its own environment.",
        bullets: [
          "Clarify applicability, ownership, operating frequency, and implementation guidance.",
          "Define what complete evidence must show, not just which document should exist.",
          "Separate control intent from the local procedure used to operate it.",
        ],
      },
      {
        title: "4. Create the evidence artifact",
        description: "Collect proof that supports the control and the criteria being reviewed.",
        bullets: [
          "Link documents, tickets, reports, screenshots, logs, approvals, and review records to the relevant control.",
          "Record the owner, period, source, review state, and assurance dimension.",
          "Reuse an artifact across frameworks only when its context and coverage remain clear.",
        ],
      },
      {
        title: "5. Review and conclude",
        description: "Turn the traceability chain into a conclusion someone else can defend.",
        bullets: [
          "Review completeness, quality, timeliness, and operating effectiveness where applicable.",
          "Document gaps, corrective actions, and residual risk rather than hiding uncertainty.",
          "Produce the register, report, evidence package, or management view the engagement requires.",
        ],
      },
    ],
  },
};
