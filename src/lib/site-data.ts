import {
  Activity,
  BadgeCheck,
  BarChart3,
  Blocks,
  ClipboardCheck,
  FileCheck2,
  Gauge,
  GitBranch,
  Landmark,
  Layers3,
  LineChart,
  Network,
  NotebookTabs,
  RefreshCw,
  Scale,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Customer Challenges", href: "/customer-challenges" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Platform", href: "/platform" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const brandPromise = "Achieve compliance. Demonstrate it. Sustain it.";

export const whitePaperDownload = {
  href: "/downloads/COMPLY_UCF_Conceptual_Methodology_White_Paper.pdf",
  filename: "COMPLY_UCF_Conceptual_Methodology_White_Paper.pdf",
};

export const challenges = [
  {
    title: "Controls are documented but not operational.",
    description:
      "Policies, procedures, and control statements may exist on paper, but they often do not reflect how work is actually performed. This creates a gap between documented intent and operational reality that weakens compliance defensibility.",
    icon: ShieldCheck,
  },
  {
    title: "Evidence exists but does not demonstrate effectiveness.",
    description:
      "Organizations may collect screenshots, tickets, reports, and documents without proving that controls are designed correctly, implemented intentionally, and operating as expected over time.",
    icon: FileCheck2,
  },
  {
    title: "Evidence cannot be reused across frameworks.",
    description:
      "When evidence is not mapped to common controls, criteria, and assurance dimensions, teams must answer the same audit questions repeatedly across ISO, SOC 2, NIST, PCI DSS, GDPR, DORA, and other obligations.",
    icon: Layers3,
  },
  {
    title: "Audit preparation consumes excessive time and resources.",
    description:
      "Audit readiness becomes a recurring scramble when evidence requests, ownership, control mappings, and review status are not maintained continuously throughout the compliance cycle.",
    icon: Gauge,
  },
  {
    title: "Compliance activities lack traceability and governance.",
    description:
      "Without clear links between requirements, controls, owners, evidence, reviews, risks, and audit conclusions, leadership cannot easily see what is working, what is missing, and what requires action.",
    icon: GitBranch,
  },
  {
    title: "Artifacts are disconnected from control intent, design, implementation, and operation.",
    description:
      "Evidence artifacts lose audit value when they are not tied to the purpose of the control, the criteria being tested, and the expected proof of design, existence, and operating effectiveness.",
    icon: Blocks,
  },
];

export const pillars = [
  {
    title: "Achieve Compliance",
    description:
      "Build security and compliance programs aligned with leading standards and frameworks.",
    detailedDescription:
      "COMPLY helps organizations establish the foundation for compliance by defining obligations, mapping frameworks, designing controls, clarifying ownership, and aligning governance structures to operational reality. The objective is to move beyond generic policy language and create a program that reflects the organization’s risks, responsibilities, systems, and control environment.",
    icon: ShieldCheck,
  },
  {
    title: "Demonstrate Compliance",
    description:
      "Create auditable evidence and end-to-end traceability that supports defensible audit conclusions.",
    detailedDescription:
      "COMPLY turns compliance evidence into structured proof by connecting requirements, controls, UCC (Universal Control Criteria), COMPLY Artifacts, owners, reviews, and audit conclusions. This allows teams to show not only that evidence exists, but that it demonstrates control design, implementation, and operating effectiveness in a way auditors can follow.",
    icon: FileCheck2,
  },
  {
    title: "Sustain Compliance",
    description:
      "Maintain continuous compliance through governance, accountability, reviews, monitoring, and oversight.",
    detailedDescription:
      "COMPLY supports a continuous operating rhythm through recurring evidence reviews, internal audit, management review, corrective action tracking, KPI analysis, risk treatment, and governance oversight. The goal is to keep compliance current between audits, reduce recurring audit fatigue, and identify drift before it becomes a defensibility problem.",
    icon: RefreshCw,
  },
];

export const frameworks = [
  "ISO 27001",
  "ISO 27002",
  "SOC 2",
  "NIST CSF",
  "NIST SP 800",
  "PCI DSS",
  "CIS Controls",
  "GDPR",
  "DORA",
  "NIS2",
];

export const prioritySegments = [
  {
    title: "B2B SaaS and technology vendors",
    description:
      "Turn customer security questionnaires, procurement requests, and assurance commitments into a repeatable compliance program.",
    trigger: "An enterprise customer asks for evidence or a completed security questionnaire.",
    firstOffer: "Baseline and Gap Assessment",
    icon: Network,
  },
  {
    title: "Fintech, payments, and e-commerce",
    description:
      "Coordinate PCI DSS, privacy, resilience, and customer-control expectations without running separate evidence projects.",
    trigger: "PCI DSS, customer-assurance, or payment-partner pressure is creating a deadline.",
    firstOffer: "Baseline and Gap Assessment",
    icon: Scale,
  },
  {
    title: "Financial services and ICT suppliers",
    description:
      "Prepare for regulated customer expectations, DORA-related obligations, and evidence requests with clearer ownership and traceability.",
    trigger: "DORA, ICT-risk, or third-party-risk expectations need an accountable response.",
    firstOffer: "DORA and ICT risk baseline",
    icon: Landmark,
  },
  {
    title: "Data-intensive professional services",
    description:
      "Build confidence around sensitive client data, access, continuity, and the controls that protect trust-based relationships.",
    trigger: "Procurement or privacy questions threaten a client relationship or renewal.",
    firstOffer: "Baseline and Gap Assessment",
    icon: Users,
  },
  {
    title: "Organizations using AI",
    description:
      "Connect information security, privacy, and AI governance expectations as products and internal workflows evolve.",
    trigger: "An AI use case creates a need for security, privacy, or AI-governance clarity.",
    firstOffer: "AI and security governance gap assessment",
    icon: ShieldCheck,
  },
];

export const startHereOffers = [
  {
    title: "Compliance Clarity Conversation",
    bestFor: "Leaders who need a grounded starting point",
    trigger: "A customer, auditor, board, or regulator has raised the pressure.",
    deliverable: "A focused discussion of scope, obligations, current posture, and the most useful next step.",
    clientProvides: "The immediate pressure, the questions you are trying to answer, and any known deadline.",
    nextStep: "Book a clarity conversation",
    icon: Users,
  },
  {
    title: "Baseline and Gap Assessment",
    bestFor: "Teams that need to know what is missing",
    trigger: "You need a defensible view before choosing a framework, audit, or remediation plan.",
    deliverable: "A prioritized findings register, evidence view, and practical remediation roadmap.",
    clientProvides: "Your current scope, key stakeholders, existing policies, and representative evidence.",
    nextStep: "Discuss a baseline",
    icon: Target,
  },
  {
    title: "Readiness Build",
    bestFor: "Organizations preparing for an external assessment",
    trigger: "Controls, ownership, documentation, or evidence need to become audit-ready.",
    deliverable: "A scoped readiness program connecting requirements, controls, evidence, and accountable owners.",
    clientProvides: "The target framework, assessment horizon, operating context, and access to responsible owners.",
    nextStep: "Plan a readiness build",
    icon: ClipboardCheck,
  },
  {
    title: "Continuous Compliance Governance",
    bestFor: "Teams that want to stay ready between audits",
    trigger: "Evidence and control activity drift after the initial assessment.",
    deliverable: "A repeatable review, reporting, and improvement rhythm that keeps compliance current.",
    clientProvides: "Existing review routines, evidence owners, management priorities, and recurring pain points.",
    nextStep: "Discuss ongoing governance",
    icon: RefreshCw,
  },
];

export const outcomes = [
  {
    title: "Defensible Audit Conclusions",
    description:
      "Every audit conclusion is supported by traceable evidence that links requirements, controls, criteria, artifacts, owners, and review activity. This gives auditors and leadership a clear basis for understanding why a conclusion is reasonable and how it was supported.",
  },
  {
    title: "Evidence Reuse Across Frameworks",
    description:
      "Evidence is mapped to unified controls and criteria so one artifact can support multiple frameworks and standards. This reduces duplicate requests, repeated testing, and unnecessary rework across ISO, SOC 2, NIST, PCI DSS, GDPR, DORA, and related obligations.",
  },
  {
    title: "Reduced Audit Prep Effort",
    description:
      "Audit readiness becomes easier when evidence, ownership, control mappings, and review status are maintained continuously. Teams spend less time rebuilding evidence packages and more time resolving meaningful gaps before external review begins.",
  },
  {
    title: "Continuous Compliance Governance",
    description:
      "Compliance remains active between audits through defined ownership, review cycles, internal audit, management review, corrective actions, and oversight routines. The program becomes an operating rhythm rather than a point-in-time documentation exercise.",
  },
  {
    title: "Executive Visibility",
    description:
      "Leadership gains a clearer view of control status, evidence quality, risk treatment, audit readiness, and areas requiring action. This allows executives to govern compliance with useful operational context instead of disconnected status reports.",
  },
  {
    title: "Sustained Compliance Through Oversight",
    description:
      "Controls, evidence, risks, and governance activities are monitored over time so compliance outcomes remain durable. Oversight helps identify drift, confirm remediation, and keep the compliance program aligned as frameworks, risks, and business conditions change.",
  },
];

export const supportingSubheads = [
  {
    title:
      "A framework-agnostic model that unifies control intent, completeness criteria, and evidence artifacts.",
    description:
      "COMPLY separates what a control is meant to achieve, what criteria must be satisfied, and what evidence proves the control is operating. That structure allows one compliance model to work across multiple frameworks without rebuilding the program for each audit.",
  },
  {
    title: "UCC defines what auditors expect as objective evidence every time.",
    description:
      "UCC (Universal Control Criteria) creates a consistent completeness standard for evaluating controls. Instead of relying on vague documentation, teams can assess whether the evidence supports the required criteria in a repeatable and auditable way.",
  },
  {
    title:
      "COMPLY Artifacts turn evidence into structured, purpose-built objects mapped to controls and criteria.",
    description:
      "Artifacts are designed to show why evidence exists, which control it supports, which criteria it addresses, and whether it demonstrates design, existence, or operational effectiveness. This makes evidence easier to review, reuse, and defend.",
  },
  {
    title: "End-to-end traceability supports defensible audit conclusions.",
    description:
      "Traceability connects requirements to controls, criteria, evidence artifacts, and audit conclusions. This gives auditors and leadership a clear path from obligation to proof, reducing ambiguity during assessment and review.",
  },
  {
    title: "Reuse evidence across frameworks to reduce duplication and audit fatigue.",
    description:
      "When evidence is tied to unified controls and criteria, a single artifact can support multiple frameworks. That reduces repeated evidence collection, shortens audit preparation, and helps teams avoid redundant compliance work.",
  },
  {
    title:
      "Governance and oversight keep evidence current through ownership, reviews, internal audit, and management review.",
    description:
      "COMPLY treats compliance as an ongoing operating rhythm. Ownership, review cycles, internal audit, management review, and corrective actions help ensure evidence remains current between formal audits.",
  },
  {
    title:
      "Risk is the driver: Unified Controls respond, UCC enforces completeness, and artifacts prove reality.",
    description:
      "The model links risk context to control expectations and evidence requirements. Controls respond to risk, criteria define what complete implementation means, and artifacts show whether the control is working in practice.",
  },
  {
    title: "Prevent policy-only and tool-only compliance with operational evidence.",
    description:
      "Policies and tools are not enough by themselves. COMPLY focuses on operational evidence that demonstrates controls are implemented, reviewed, monitored, and producing reliable compliance outcomes.",
  },
  {
    title: "Automated gap detection highlights missing criteria and partial compliance.",
    description:
      "Criteria-based review makes it easier to see which control expectations are fully supported, partially supported, or missing evidence. This turns gaps into clear remediation work instead of vague audit findings.",
  },
  {
    title: "A single integrated compliance evidence system built to be auditable and defensible.",
    description:
      "The model brings controls, criteria, artifacts, traceability, risk, and governance into one evidence system. The result is a more durable compliance foundation that supports audit readiness and continuous oversight.",
  },
];

export const solutions = [
  {
    title: "Governance & Compliance",
    description:
      "Governance structures, policies, standards, procedures, accountability, and oversight.",
    focus:
      "Establish the decision rights, operating cadence, and policy architecture needed to make compliance repeatable.",
    includes: [
      "Governance model design",
      "Policy and standard hierarchy",
      "Control ownership and accountability",
      "Management review and oversight cadence",
    ],
    outcome:
      "Leaders gain a clear operating structure for compliance decisions, accountability, and defensible oversight.",
    icon: Landmark,
  },
  {
    title: "Audit Readiness",
    description:
      "Preparation, evidence collection, control validation, and audit support.",
    focus:
      "Prepare teams for external review by validating control operation and assembling audit-ready evidence.",
    includes: [
      "Audit scope and readiness planning",
      "Evidence request mapping",
      "Control effectiveness validation",
      "Auditor response support",
    ],
    outcome:
      "Audit teams reduce scramble, shorten preparation cycles, and support conclusions with traceable proof.",
    icon: ClipboardCheck,
  },
  {
    title: "Risk Management",
    description: "Risk identification, assessment, treatment, and monitoring.",
    focus:
      "Connect cyber risk decisions to controls, treatment plans, business ownership, and measurable residual risk.",
    includes: [
      "Risk identification and assessment",
      "Risk treatment planning",
      "Control linkage and residual risk tracking",
      "Ongoing risk monitoring and reporting",
    ],
    outcome:
      "Executives see how risk exposure, control operation, and remediation priorities are connected.",
    icon: Scale,
  },
  {
    title: "Compliance Management",
    description:
      "Framework alignment, control mapping, gap assessments, and remediation.",
    focus:
      "Unify framework obligations into a practical control model that can support ISO 27001, SOC 2, NIST, PCI DSS, GDPR, and related requirements.",
    includes: [
      "Framework and obligation mapping",
      "Unified control library design",
      "Gap assessments and remediation plans",
      "Control-to-requirement traceability",
    ],
    outcome:
      "Organizations avoid duplicated framework work and manage compliance through one coherent program.",
    icon: NotebookTabs,
  },
  {
    title: "Continuous Compliance",
    description:
      "Ongoing monitoring, reviews, internal audit, and management oversight.",
    focus:
      "Move compliance from point-in-time audit preparation to an operating rhythm of monitoring, review, and improvement.",
    includes: [
      "Control performance monitoring",
      "Recurring evidence reviews",
      "Internal audit and KPI analysis",
      "Corrective action tracking",
    ],
    outcome:
      "Compliance remains current between audits, with fewer surprises and stronger operational evidence.",
    icon: Activity,
  },
  {
    title: "Evidence Management",
    description:
      "Structured evidence collection, reuse, validation, and traceability.",
    focus:
      "Create a disciplined evidence model that proves control effectiveness and can be reused across frameworks.",
    includes: [
      "Evidence taxonomy and request design",
      "Evidence quality validation",
      "Cross-framework evidence reuse",
      "Requirement-to-control-to-evidence linkage",
    ],
    outcome:
      "Evidence becomes reusable, audit-aligned, and tied directly to defensible compliance conclusions.",
    icon: GitBranch,
  },
];

export const services = [
  {
    title: "Compliance Assessments",
    description:
      "Independent review of compliance posture across policies, controls, evidence, ownership, and operating effectiveness.",
    includes: [
      "Current-state compliance review",
      "Framework obligation analysis",
      "Control and evidence sampling",
      "Prioritized findings and remediation roadmap",
    ],
    outcome:
      "A clear view of compliance maturity, control gaps, evidence weaknesses, and near-term improvement priorities.",
    icon: ClipboardCheck,
  },
  {
    title: "ISO 27001 Readiness",
    description:
      "Readiness support for organizations preparing to implement, improve, or certify an ISO 27001 information security management system.",
    includes: [
      "ISMS scope and context review",
      "Annex A control alignment",
      "Statement of Applicability support",
      "Certification readiness roadmap",
    ],
    outcome:
      "A practical ISO 27001 path that connects governance, risk treatment, controls, and auditable evidence.",
    icon: ShieldCheck,
  },
  {
    title: "SOC 2 Readiness",
    description:
      "SOC 2 preparation focused on trust service criteria alignment, control design, control operation, and auditor-ready evidence.",
    includes: [
      "Trust service criteria mapping",
      "Control design and gap review",
      "Evidence request preparation",
      "Type 1 and Type 2 readiness support",
    ],
    outcome:
      "A stronger SOC 2 control environment with evidence that supports auditor testing and defensible conclusions.",
    icon: FileCheck2,
  },
  {
    title: "Risk Assessments",
    description:
      "Structured cyber and compliance risk assessments that connect threats, business impact, controls, and treatment decisions.",
    includes: [
      "Risk scenario identification",
      "Likelihood and impact assessment",
      "Control and treatment mapping",
      "Residual risk reporting",
    ],
    outcome:
      "Leadership can prioritize risk treatment using a defensible view of exposure, control coverage, and business impact.",
    icon: Scale,
  },
  {
    title: "Gap Assessments",
    description:
      "Targeted assessments that identify gaps between current practices and required frameworks, standards, or audit expectations.",
    includes: [
      "Requirement-by-requirement review",
      "Control and documentation comparison",
      "Evidence quality analysis",
      "Remediation plan development",
    ],
    outcome:
      "Teams know exactly what is missing, why it matters, and what remediation work should happen first.",
    icon: Target,
  },
  {
    title: "Internal Audit Services",
    description:
      "Independent internal audit support to evaluate control design, operating effectiveness, evidence quality, and management oversight.",
    includes: [
      "Internal audit planning",
      "Control testing and sampling",
      "Evidence review and validation",
      "Findings, actions, and management reporting",
    ],
    outcome:
      "Organizations strengthen governance before external audit pressure exposes preventable control issues.",
    icon: BarChart3,
  },
  {
    title: "Governance Reviews",
    description:
      "Evaluation of security governance, accountability, policy architecture, decision cadence, and executive oversight.",
    includes: [
      "Governance structure review",
      "Policy and standard assessment",
      "Role and accountability mapping",
      "Management review cadence analysis",
    ],
    outcome:
      "Compliance activity becomes tied to clear ownership, leadership visibility, and repeatable governance routines.",
    icon: Landmark,
  },
  {
    title: "Control Effectiveness Reviews",
    description:
      "Focused validation of whether controls are designed appropriately, operating as intended, and supported by sufficient evidence.",
    includes: [
      "Control design assessment",
      "Operating effectiveness review",
      "Evidence sufficiency testing",
      "Control improvement recommendations",
    ],
    outcome:
      "Control owners can prove operation, reduce audit disputes, and improve weak or undocumented processes.",
    icon: Gauge,
  },
  {
    title: "Compliance Program Development",
    description:
      "Build-out of compliance programs from the ground up, including governance, controls, documentation, evidence, and operating cadence.",
    includes: [
      "Program architecture design",
      "Unified control framework development",
      "Policy and procedure roadmap",
      "Evidence and review model setup",
    ],
    outcome:
      "Organizations get a complete compliance foundation designed to scale across frameworks and audits.",
    icon: Blocks,
  },
  {
    title: "Compliance Program Optimization",
    description:
      "Refinement of existing compliance programs to reduce duplication, improve evidence reuse, and strengthen governance oversight.",
    includes: [
      "Process and control rationalization",
      "Evidence reuse optimization",
      "Framework mapping improvement",
      "KPI, reporting, and review enhancements",
    ],
    outcome:
      "Existing programs become leaner, more auditable, and easier for executives and control owners to operate.",
    icon: LineChart,
  },
];

export const processSteps = [
  {
    title: "Assess",
    summary:
      "Establish the compliance baseline by understanding risk exposure, obligations, control coverage, and available evidence.",
    items: ["Risks", "Compliance obligations", "Existing controls", "Current evidence"],
    activities: [
      "Identify applicable frameworks, standards, regulations, and customer obligations.",
      "Review existing control inventory, policies, procedures, and ownership.",
      "Evaluate current evidence for completeness, freshness, and audit usability.",
      "Document gaps between required outcomes and current operating reality.",
    ],
    deliverables: [
      "Compliance baseline assessment",
      "Risk and obligation map",
      "Current-state evidence review",
      "Prioritized gap register",
    ],
    outcome:
      "Leadership understands the starting point, major compliance risks, and the evidence gaps that could weaken audit conclusions.",
    icon: Target,
  },
  {
    title: "Design",
    summary:
      "Translate obligations into a practical operating model with governance, control design, evidence expectations, and accountability.",
    items: ["Governance", "Policies", "Standards", "Procedures", "Controls"],
    activities: [
      "Define the governance model, decision cadence, and management review structure.",
      "Map requirements to unified controls and supporting policies or standards.",
      "Clarify control owners, performers, reviewers, and evidence expectations.",
      "Design procedures and monitoring routines that can actually operate.",
    ],
    deliverables: [
      "Unified control framework",
      "Policy and standards architecture",
      "RACI and ownership model",
      "Evidence requirements matrix",
    ],
    outcome:
      "The organization has a defensible design that links requirements to controls, owners, evidence, and review cycles.",
    icon: Blocks,
  },
  {
    title: "Implement",
    summary:
      "Put the designed controls and governance routines into operation with clear ownership and repeatable execution.",
    items: ["Controls", "Processes", "Monitoring", "Accountability"],
    activities: [
      "Launch or update control procedures, workflows, and review routines.",
      "Assign accountable owners and define expected operating frequency.",
      "Set up monitoring signals, evidence capture points, and escalation paths.",
      "Train control owners on execution, documentation, and evidence quality.",
    ],
    deliverables: [
      "Implemented control procedures",
      "Owner accountability register",
      "Monitoring and escalation model",
      "Operational evidence templates",
    ],
    outcome:
      "Controls move from documented intent to assigned, repeatable processes that can produce audit-ready evidence.",
    icon: Network,
  },
  {
    title: "Operate",
    summary:
      "Execute controls in the normal course of business and collect evidence while the work is happening.",
    items: ["Execute controls", "Collect evidence", "Monitor performance"],
    activities: [
      "Perform controls according to defined frequency and ownership.",
      "Collect evidence tied to control objectives and framework requirements.",
      "Monitor exceptions, overdue reviews, missing evidence, and control drift.",
      "Maintain records that show who did what, when, and with what result.",
    ],
    deliverables: [
      "Control execution records",
      "Validated evidence repository",
      "Exception and issue log",
      "Operational performance dashboard",
    ],
    outcome:
      "Evidence is created continuously, reducing audit scramble and improving confidence that controls are operating effectively.",
    icon: Gauge,
  },
  {
    title: "Review",
    summary:
      "Evaluate whether controls are operating effectively and whether evidence supports defensible compliance conclusions.",
    items: ["Internal audit", "Management review", "KPI analysis", "Gap identification"],
    activities: [
      "Perform internal audit, control testing, and evidence sufficiency reviews.",
      "Analyze compliance KPIs, trends, exceptions, and unresolved remediation.",
      "Conduct management review to confirm accountability and oversight.",
      "Identify emerging gaps caused by business, technology, or regulatory change.",
    ],
    deliverables: [
      "Internal audit results",
      "Management review package",
      "KPI and exception analysis",
      "Control effectiveness findings",
    ],
    outcome:
      "Management gains visibility into control effectiveness, audit readiness, and areas requiring corrective action.",
    icon: BarChart3,
  },
  {
    title: "Improve",
    summary:
      "Use findings, risk changes, and audit feedback to strengthen the program and reduce recurring compliance effort.",
    items: ["Corrective actions", "Optimization", "Continuous improvement"],
    activities: [
      "Prioritize corrective actions based on risk, audit impact, and operational value.",
      "Optimize controls, evidence requests, and framework mappings to reduce duplication.",
      "Update policies, procedures, and governance routines as the business changes.",
      "Track remediation through closure and confirm improvements are operating.",
    ],
    deliverables: [
      "Corrective action plan",
      "Optimization backlog",
      "Updated control and evidence mappings",
      "Continuous improvement report",
    ],
    outcome:
      "The compliance program becomes more efficient, better governed, and more resilient across future audits and framework changes.",
    icon: LineChart,
  },
];

export const platformSections = [
  {
    title: "COMPLY UCF Workbench",
    description:
      "Maintain framework versions, framework controls, local control definitions, categories, applicability, and mapping rationale in one structured library.",
    model: "FRA_Frameworks, FrameworkControls, ControlMapping, CON_Controls",
    includes: [
      "Framework and version management",
      "Unified Control Framework (UCF) alignment capability",
      "Control mapping and applicability",
      "Control purpose, guidance, status, and recommendations",
    ],
    outcome:
      "One UCF-aware control structure can support ISO, SOC 2, NIST, PCI DSS, GDPR, DORA, NIS2, and other obligations without duplicate program work.",
    icon: Layers3,
  },
  {
    title: "COMPLY-DOCS",
    description:
      "Use the COMPLY-DOCS Workbench to organize documents and evidence artifacts, connect them to engagements and controls, and move them through governed review and publication.",
    model: "CRI_Criteria, COM_ComplyArtifacts, CLI_ClientArtifacts",
    includes: [
      "Organization and engagement repository setup",
      "Document and evidence artifact classification",
      "Framework and control mapping",
      "Review, approval, and audit-ready publication",
    ],
    outcome:
      "Governed artifacts remain traceable from repository to control, review, and publication, producing audit-ready documentation with less duplication and rework.",
    icon: FileCheck2,
  },
  {
    title: "COMPLY Security Stack Assessment Workbench",
    description:
      "Run security stack assessments in one connected workbench for client profiles, engagements, assessment scope, frameworks, and assessment evidence.",
    model: "CLI_Clients, ENG_Engagements, ASS_Assessments, RiskAssessment",
    includes: [
      "Client and engagement management",
      "Assessment scope and framework mapping",
      "Security stack assets and control context",
      "Assessment findings, ownership, and review tracking",
    ],
    outcome:
      "Every compliance effort has a defined scope, owner context, framework basis, and assessment record.",
    icon: NotebookTabs,
  },
  {
    title: "COMPLY Risk Workbench",
    description:
      "Use the COMPLY Risk Workbench to inventory security assets, analyze vulnerabilities and threats, evaluate risk, and manage treatment decisions in one connected workspace.",
    model: "Assets, VUL_Vulnerabilities, Threats, Evaluations, RiskTreatments",
    includes: [
      "Security asset inventory and context mapping",
      "Vulnerability and threat analysis",
      "Risk scoring and evaluation",
      "Treatment planning with owner, control, and evidence linkage",
    ],
    outcome:
      "Risk treatment decisions connect directly to control operation, evidence needs, and governance review.",
    icon: Scale,
  },
  {
    title: "Legal, Regulatory & Contractual Requirements",
    description:
      "Track external obligations by requirement type, jurisdiction, interested party, deadline, owner, source, and compliance state.",
    model: "Legal_Regulatory_Contractual_Requirements, Requirement_Controls",
    includes: [
      "Regulatory and contractual obligation register",
      "Responsible party and deadline tracking",
      "Requirement-to-control linkage",
    ],
    outcome:
      "External obligations are not stranded in documents; they are mapped to controls, risks, assessments, and evidence.",
    icon: Landmark,
  },
  {
    title: "Security Stack & Tooling",
    description:
      "Model security stack layers, capabilities, tools, vendors, categories, sources, and justifications that support control operation.",
    model: "Security_Stack, Security_Stack_Layer, Layer_Capabilities, Tools",
    includes: [
      "Security stack layer inventory",
      "Capability-to-tool mapping",
      "Vendor, category, source, and justification records",
    ],
    outcome:
      "Technology coverage can be evaluated against compliance requirements, risks, and control expectations.",
    icon: Network,
  },
];

export const workbenchSummaries = [
  {
    slug: "comply-risk",
    title: "COMPLY-RISK",
    description:
      "Supports ISO-aligned risk assessments by connecting assets, vulnerabilities, threats, evaluations, risk treatment, ownership, and evidence context.",
    practitionerUse:
      "COMPLY practitioners use it to structure assessment work and turn risk decisions into a clear client roadmap.",
    clientOutput:
      "Depending on the engagement, clients may receive a risk register, treatment plan, findings summary, or selected controlled views.",
    icon: Scale,
  },
  {
    slug: "comply-ucf",
    title: "COMPLY-UCF",
    description:
      "Creates a unified control framework for the client’s defined compliance scope by mapping obligations, framework controls, applicability, and local control intent.",
    practitionerUse:
      "COMPLY practitioners use it to rationalize overlapping requirements and create one defensible control backbone.",
    clientOutput:
      "Clients receive the agreed control framework, mapping rationale, applicability decisions, and engagement-specific exports or reports.",
    icon: Layers3,
  },
  {
    slug: "comply-ssa",
    title: "COMPLY-SSA",
    description:
      "Supports security-stack assessments by connecting client context, engagement scope, frameworks, technologies, control coverage, and assessment findings.",
    practitionerUse:
      "COMPLY practitioners use it to evaluate whether the security stack supports the controls the business needs to operate.",
    clientOutput:
      "Clients may receive a security-stack assessment, coverage findings, ownership actions, and prioritized improvement recommendations.",
    icon: Network,
  },
  {
    slug: "comply-docs",
    title: "COMPLY-DOCS",
    description:
      "Provides a governed Compliance Evidence Repository for organizing documents and evidence artifacts, mapping them to controls, and managing review status.",
    practitionerUse:
      "COMPLY practitioners use it to keep engagement evidence structured, traceable, reviewable, and reusable across frameworks.",
    clientOutput:
      "Clients may receive evidence registers, audit-ready packages, selected repository views, or controlled access when the engagement calls for it.",
    icon: FileCheck2,
  },
];

export const platformMetrics = [
  { value: "44", label: "Base tables" },
  { value: "114", label: "Table occurrences" },
  { value: "85", label: "Relationship links" },
  { value: "167", label: "Operational layouts" },
  { value: "255", label: "Workflow scripts" },
  { value: "98", label: "Value lists" },
];

export const platformReports = [
  "Risk Register",
  "Asset Register",
  "Statement of Applicability",
  "Audit Criteria",
  "Engagements",
  "Framework Controls",
  "Control Mappings",
  "Comply Artifacts Register",
];

export const platformInteractionPatterns = [
  "Card-window selection for controls, assets, vulnerabilities, threats, treatments, artifacts, requirements, and audit criteria.",
  "Search, sort, navigation, record creation, review, reporting, and export workflows.",
  "Picker-driven linking between requirements, controls, evidence, assets, vulnerabilities, threats, risks, and treatments.",
  "Register-style reporting for risk, assets, applicability, criteria, engagements, framework controls, mappings, and artifacts.",
];

export const platformOperatingModel = [
  {
    title: "Unified control backbone",
    description:
      "Framework obligations flow into local controls with categories, applicability, guidance, and mapping rationale.",
    icon: RefreshCw,
  },
  {
    title: "Evidence and criteria layer",
    description:
      "Audit criteria define what evidence must prove, while artifacts show whether controls are operating effectively.",
    icon: FileCheck2,
  },
  {
    title: "Risk and treatment loop",
    description:
      "Assets, vulnerabilities, threats, evaluations, treatments, and treatment controls keep compliance tied to real risk.",
    icon: GitBranch,
  },
  {
    title: "Governance and reporting layer",
    description:
      "Reviews, exports, registers, and management reporting create oversight and audit-ready visibility.",
    icon: Users,
  },
];

export const resourceCategories = [
  "White Papers",
  "Compliance Guides",
  "Risk Management Guides",
  "Governance Resources",
  "Audit Readiness Resources",
];

export const resourceHighlights = [
  {
    title: "Readiness Scorecard",
    audience: "For founders, executives, and security leaders",
    businessProblem:
      "You need to know whether your current effort is ready for customer, audit, or regulatory scrutiny before committing to a larger program.",
    description:
      "Use a practical set of questions to identify whether your current compliance effort is ready for customer, audit, or regulatory scrutiny.",
    outcome: "See where to focus before investing in a larger readiness program.",
    href: "/resources/readiness-scorecard",
  },
  {
    title: "From Requirement to Evidence",
    audience: "For compliance, security, and control owners",
    businessProblem:
      "Requirements, controls, evidence, and reviews are disconnected, so every audit request feels like starting over.",
    description:
      "Learn how to connect obligations, controls, evidence, reviews, and conclusions so the next audit request does not restart the work.",
    outcome: "Create evidence that is easier to review, reuse, and defend.",
    href: "/resources/requirement-to-evidence",
  },
];

export const frameworkGuideCards = [
  {
    title: "ISO 27001 readiness",
    description:
      "Build an information security management system that connects scope, risk, controls, ownership, and evidence before certification review.",
    href: "/frameworks/iso-27001",
  },
  {
    title: "SOC 2 readiness",
    description:
      "Turn trust service criteria into operating controls, evidence expectations, and a practical path toward Type 1 or Type 2 readiness.",
    href: "/frameworks/soc-2",
  },
  {
    title: "Multi-framework readiness",
    description:
      "Use one evidence and control operating model when ISO, SOC 2, NIST, PCI DSS, GDPR, DORA, or AI-governance obligations overlap.",
    href: "/frameworks/multi-framework",
  },
];

export const additionalFrameworkGuideCards = [
  {
    title: "ISO 42001 and AI governance",
    description:
      "Build a practical AI management system around use cases, risk, accountability, controls, evidence, and continual improvement.",
    href: "/frameworks/iso-42001",
  },
  {
    title: "PCI DSS readiness",
    description:
      "Organize cardholder-data scope, control ownership, evidence, and remediation priorities before independent validation.",
    href: "/frameworks/pci-dss",
  },
  {
    title: "NIST SP 800-53 readiness",
    description:
      "Translate NIST SP 800-53 controls and baselines into a scoped, owned, evidenced, and reviewable program.",
    href: "/frameworks/nist-sp-800-53",
  },
  {
    title: "NIST CSF profiles",
    description:
      "Create current and target profiles, risk-based priorities, and an action plan for practical cyber risk management.",
    href: "/frameworks/nist-csf",
  },
  {
    title: "CIS Controls priorities",
    description:
      "Turn CIS Controls into a practical, risk-informed improvement roadmap for lean security and IT teams.",
    href: "/frameworks/cis-controls",
  },
  {
    title: "DORA and ICT risk",
    description:
      "Organize digital operational resilience, ICT risk, third-party, testing, and evidence expectations.",
    href: "/frameworks/dora",
  },
  {
    title: "GDPR security readiness",
    description:
      "Connect personal-data security obligations to risk, controls, evidence, ownership, and review routines.",
    href: "/frameworks/gdpr",
  },
];

export const teamProfiles = [
  {
    name: "Hans Lanslots, RI",
    role: "Information & Technology Leader | Co-Creator of C.O.M.P.L.Y.",
    summary:
      "Hans brings more than three decades of experience guiding complex, cross-functional IT organizations and designing secure technology environments across Europe and the United States.",
    clientBenefit:
      "Clients gain an executive and operational perspective that connects control design, technology decisions, and compliance objectives to how the business actually runs.",
    href: "https://www.linkedin.com/in/hans-lanslots-ri-a602b938",
  },
  {
    name: "Steffani Burd, Ph.D.",
    role: "Founder of ANSEC | Co-Creator of C.O.M.P.L.Y.",
    summary:
      "Steffani develops empirically based solutions that protect information assets, improve business outcomes, and apply security compliance in practical settings.",
    clientBenefit:
      "Clients gain a research-informed advisor who can connect security auditing, investigative thinking, communication, and business improvement.",
    href: "https://www.linkedin.com/in/steffaniburd",
  },
];

export const differentiators = [
  "Framework agnostic",
  "Evidence-driven",
  "Audit defensible",
  "Operationally focused",
  "Governance centered",
];

export const brandDifferentiators = [
  {
    title: "Unified Controls",
    description:
      "Normalized, technology-neutral controls that map back to source security frameworks and standards.",
    icon: Layers3,
  },
  {
    title: "UCC completeness standard",
    description:
      "UCC (Universal Control Criteria) defines the criteria used to assess whether a control is aligned, complete, and supportable.",
    icon: BadgeCheck,
  },
  {
    title: "COMPLY Artifacts",
    description:
      "Purpose-built evidence objects mapped to criteria and assurance dimensions: design, existence, and operational effectiveness.",
    icon: FileCheck2,
  },
  {
    title: "Evidence reuse and deduplication",
    description:
      "A single artifact can support multiple security frameworks and standards with clear traceability, reducing duplicated effort.",
    icon: GitBranch,
  },
  {
    title: "Continuous compliance governance",
    description:
      "Ownership, review cycles, internal audit, and management review are built into the operating model.",
    icon: RefreshCw,
  },
];

export const credibilityStats = [
  { value: "10+", label: "Frameworks aligned" },
  { value: "6", label: "Lifecycle phases" },
  { value: "4x", label: "Evidence reuse model" },
  { value: "24/7", label: "Continuous oversight posture" },
];

export const traceabilityNodes = [
  {
    title: "Requirement",
    description:
      "The traceability chain begins with the obligation the organization must satisfy, whether it comes from a law, regulation, contract, customer requirement, internal policy, or security framework. COMPLY captures the requirement as the authoritative source of compliance intent so every downstream control, evidence artifact, and audit conclusion can be tied back to a clear obligation.",
  },
  {
    title: "Framework Control",
    description:
      "Framework controls translate requirements into recognized compliance expectations such as ISO 27001, SOC 2, NIST, PCI DSS, GDPR, DORA, or CIS Controls. COMPLY maps these controls through the control library so overlapping obligations can be rationalized, compared, and reused instead of being managed as disconnected audit workstreams.",
  },
  {
    title: "Local Control & Criteria",
    description:
      "Local controls define how the organization actually satisfies the mapped framework expectations in its own environment. Criteria, applicability, ownership, implementation guidance, and operating expectations establish what must be true for the control to be considered designed, implemented, operating, and ready for review.",
  },
  {
    title: "Evidence Artifact",
    description:
      "Evidence artifacts provide the proof that controls are operating in practice. COMPLY links documents, screenshots, tickets, reports, logs, approvals, reviews, and other evidence directly to the relevant criteria and controls, allowing evidence quality, completeness, reuse, and audit relevance to be evaluated before the audit begins.",
  },
  {
    title: "Audit / Report",
    description:
      "Audit-ready outputs consolidate the traceability chain into defensible reporting. Risk registers, Statements of Applicability, audit criteria, control mappings, evidence packages, findings, and management reports show what was assessed, what evidence supports the conclusion, and where remediation or governance action is required.",
  },
];

export const footerColumns = [
  { title: "Solutions", links: ["Governance", "Audit Readiness", "Risk Management", "Evidence"] },
  { title: "Services", links: ["Assessments", "Readiness", "Internal Audit", "Optimization"] },
  { title: "Resources", links: ["White Papers", "Guides", "Governance", "Audit Readiness"] },
  { title: "Company", links: ["About", "Approach", "Contact", "Conversation"] },
];

export const keywordDescription =
  "Security Compliance, Compliance Management, Governance Risk and Compliance, Audit Readiness, Risk Management, Continuous Compliance, Evidence Management, ISO 27001 Compliance, SOC 2 Compliance, and Cybersecurity Governance.";

export const BadgeIcon = BadgeCheck;
