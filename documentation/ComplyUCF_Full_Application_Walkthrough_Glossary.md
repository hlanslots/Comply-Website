# ComplyUCF Full Application Walkthrough Glossary

Source document: `/Users/hanslanslots/Documents/ComplyUCF/docs/ComplyUCF_Full_Application_Walkthrough.pdf`

Prepared for: COMPLY / ComplyUCF documentation

Purpose: This glossary defines the subject matter vocabulary used in the ComplyUCF full application walkthrough. It focuses on security compliance, unified control framework governance, evidence management, review workflows, approval controls, exports, and operational integrity concepts.

## Glossary

### Active Project
The currently opened ComplyUCF workspace containing project metadata, imported frameworks, generated records, reviewer decisions, saved outputs, mappings, evidence, and export-ready data. The active project is the operational boundary for all edits, approvals, workflow status, audit history, and generated outputs.

### Additional Framework
A security, compliance, regulatory, or contractual framework added after the baseline UCF has already been generated. It is compared against the existing UCF so its obligations can be mapped to existing controls, used to extend controls, used to create new controls, or rejected when not applicable.

### Additional Framework Processing
The workflow stage that extracts atomic obligations from an added framework, normalizes them, compares them to the baseline UCF, and creates the coverage review queue. This step must not overwrite the baseline; its purpose is to measure and resolve coverage against the existing unified model.

### Advanced Workflow Details
A diagnostic screen exposing detailed workflow step status, saved outputs, blockers, cloud save or restore state, rerun controls, and technical artifacts. It is intended for troubleshooting, audit support, recovery, and deeper inspection, while normal operators should use the primary UCF Workflow screen.

### AI-Assisted Full Set
An AI-supported process documentation generation option that enriches process descriptions, SOPs, representative examples, evidence expectations, exception handling, segregation-of-duties considerations, and continuous-improvement language. It should preserve deterministic traceability while improving the usefulness of the generated documentation.

### AI-Assisted Review
A reviewer-support function that analyzes records and provides advisory recommendations. In the walkthrough, AI can support canonical obligation review, source review, coverage decisions, and documentation enrichment. AI output is not authoritative until a human reviewer accepts, edits, saves, approves, rejects, splits, or merges the recommendation.

### AI Recommendation
The advisory result produced by an AI review action. It may include recommendation type, rationale, confidence, suggested name, suggested statement, provider, model, review ID, timestamp, and raw rationale. It is metadata until a reviewer acts on it.

### AI Review All COs
A batch review action that runs AI-assisted review across active canonical obligations. It helps identify candidates for approval, rename, merge, split, or rejection, but every result still requires reviewer judgment.

### AI Review Selected Obligation
A single-record AI review action for one selected canonical obligation. It is used when a reviewer wants targeted advice on wording, coherence, traceability, merge potential, split need, or rejection rationale.

### AI Source Review
An AI-supported source-control or source-obligation review surface. The document distinguishes this from canonical obligation review because source review affects AO creation or updates, while canonical review affects the canonical obligation layer.

### AO
See Atomic Obligation.

### AO Register
An export or reporting output listing atomic obligations, their source references, verbs, objects, conditions, mappings, review status, and traceability. AO registers support auditability by showing how source framework language was decomposed.

### AO Representation
The requirement that every mapped atomic obligation be visibly represented in the wording or scope of the derived control. If mapped AOs are not represented, the final approval checklist can create a blocker.

### Application Command Center
The home or starting screen for ComplyUCF. It provides entry points to create a new UCF baseline, open a demo project, add or manage projects, and review available framework families.

### Applicability
The determination of whether a criterion, evidence requirement, UCC decision, framework control, or obligation applies to a specific control, project, framework scope, or compliance context. Applicability decisions should be justified and traceable.

### Apply AI Wording
A reviewer action that loads AI-suggested wording into a draft field for inspection. It does not finalize or approve the record by itself; the reviewer must still save, approve, reject, or otherwise act on the draft.

### Approval Cockpit
See Final Approval Cockpit.

### Approval With Exception
A final approval decision where a known issue is accepted with documented rationale. The record can proceed despite a blocker or warning only because the reviewer explicitly accepted the risk or limitation.

### Approved Documentation
Process documentation that has passed reviewer approval. Once approved, later regeneration should create a new revision rather than overwriting the approved version.

### Approved Final UCF Register
The final authoritative register of approved UCF controls. Only controls that pass final approval, or are approved with an exception where appropriate, should feed this register and related export packages.

### Artifact
A structured record or document created by the system or reviewer that supports compliance, evidence, process operation, review, or export. In the walkthrough, artifacts include evidence artifacts, process evidence artifacts, saved workflow outputs, documentation records, and generated export packages.

### Atomic Obligation
A source-derived obligation containing one discrete compliance requirement. An atomic obligation should include an action verb, object, condition where applicable, confidence information, and traceability back to the preserved source control text.

### Audit Event
A recorded event showing that a meaningful reviewer or system action occurred. Audit events should capture who acted, what changed, when it changed, and the decision rationale when relevant.

### Audit History
The accumulated record of saved edits, review decisions, approvals, rejections, merges, splits, duplicate handling, remediation decisions, and other significant actions. Audit history supports defensibility, troubleshooting, and governance oversight.

### Audit Trail
The traceable sequence of records and actions showing how a final compliance output was produced. In ComplyUCF, the audit trail should preserve source text, AO extraction, normalization, canonicalization, mappings, evidence, review decisions, approval status, and export history.

### Authoritative Record
The record treated as the official source for downstream workflows or exports. In the walkthrough, AI output is not authoritative; saved reviewer decisions, approved canonical obligations, approved controls, and production records become authoritative.

### Baseline Framework
The first framework imported into a project. It establishes the initial source of truth from which the baseline UCF is generated. Additional frameworks are compared against this baseline.

### Baseline Intake
The workflow stage that imports, maps, and validates the baseline source controls. It preserves original source control text so all downstream records can reference the authoritative input.

### Baseline Metadata
Information describing the baseline framework and project context, such as framework name, version, publisher, publication date, project name, and related framework attributes. Correct metadata keeps workflow, library, and export screens aligned with import data.

### Baseline UCF Generation
The workflow stage that creates the baseline production data set: atomic obligations, normalized obligations, canonical obligations, unified controls, UCC applicability, evidence requirements, artifacts, and traceability mappings.

### Blocker
A failed checklist item, missing requirement, unresolved quality issue, incomplete UCC decision, missing evidence requirement, broken traceability, unresolved duplicate, or other issue that should prevent final approval until resolved, remediated, or explicitly approved with exception.

### Business Process
An operational process generated from reviewed canonical obligations and linked UCF controls. It should describe how the control expectation is performed in business operations, including owner, trigger, frequency, steps, RACI, evidence, and lineage.

### Business Process Generation
The stage that creates process drafts from reviewed canonical obligations and canonical UCF controls. Approved business processes can then feed process evidence generation and formal process documentation.

### Canonical Layer
The controlled layer between normalized obligations and final UCF controls. It consolidates semantically similar obligations into governed canonical obligations before controls are finalized.

### Canonical Obligation
A reviewed, coherent compliance obligation representing one canonical compliance intent. It is created from clustered normalized obligations and remains linked to normalized obligations, AOs, source controls, and derived UCF controls.

### Canonical Obligation Review
The review workflow where canonical obligations are inspected, edited, merged, split, approved, or rejected before their derived controls are treated as authoritative. This review protects against obligations that are too broad, too narrow, duplicated, invalid, or missing traceability.

### Canonical UCF Control
A UCF control derived from an approved or reviewable canonical obligation. It is reviewed for wording, mapped AO representation, source references, quality status, approval state, and framework scope before final approval.

### Canonical UCF Control Draft
The editable draft version of a canonical UCF control before final approval. Manual edits or AI wording may update the draft, but the control must still pass review and final approval gates.

### Classification
The process of assigning type, category, or operating meaning to canonical obligations before business processes are generated. Classification helps the system generate more accurate process records and documentation.

### Cloud Restore / Save State
The saved or recoverable state of workflow outputs and project data. Advanced Workflow Details exposes this information for recovery, troubleshooting, and diagnostics.

### CO
An abbreviation for Canonical Obligation. The walkthrough uses CO in AI review actions such as AI Review All COs and AI Review Selected Obligation.

### Compatibility-Only Legacy Arrays
Older or backward-compatible data structures that may exist for compatibility but should not drive authoritative exports when production records are available. Exports should use production records when they exist.

### Confidence
A value or qualitative indicator expressing how certain the system or AI is about an extraction, mapping, recommendation, or review result. Confidence supports reviewer prioritization but does not replace review judgment.

### Consolidate Controls
A library governance action that combines duplicate or overlapping controls while preserving lineage, mappings, evidence, UCC records, and audit history. Consolidation is different from deleting a record.

### Control Draft Actions
Reviewer actions available for a control draft, such as edit, save changes, cancel, apply AI wording, approve, or reject. These actions govern the control before final approval.

### Control ID
A unique identifier assigned to a control. It helps connect the control to AOs, source references, quality assessment, framework scope, evidence, UCC decisions, approval status, and exports.

### Control Quality Assessment
The assessment of whether a control statement is clear, complete, properly scoped, and representative of its mapped AOs. It can produce statuses such as Quality Clear, Pending Review, Blocked, or Approved.

### Control Statement
The formal wording of a UCF control. It should clearly express the control expectation, represent mapped AOs, preserve source traceability, and be suitable for governance, evidence, and audit review.

### Coverage Decision
The reviewer decision made for an additional-framework obligation: map to an existing control, extend an existing control, create a new unified control, or reject the recommendation.

### Coverage Proof
An export or evidence surface showing how framework obligations are covered by UCF controls. It helps demonstrate that additional framework requirements were mapped, extended, created, or otherwise resolved.

### Coverage Queue
The review queue created during additional framework processing. It contains partially covered, not covered, or requires-review items and presents recommended actions for resolving each coverage gap.

### Crosswalk
An export or mapping output that connects one framework or record type to another, such as source controls to AOs, AOs to normalized obligations, obligations to UCF controls, or framework controls to the unified control model.

### Dashboard
The application screen that summarizes active workspace status, generated production records, workflow state, project metrics, framework metrics, control counts, obligation counts, and remaining work.

### Data Integrity
The preservation of correct relationships, source text, mappings, review decisions, evidence, lineage, status, and audit history throughout the workflow. Data integrity prevents overwriting baseline records, losing traceability, or treating advisory outputs as authoritative.

### Decision Rationale
The explanation recorded by a reviewer when accepting, editing, approving, rejecting, merging, splitting, remediating, or approving with exception. Rationale supports auditability and future review.

### Deterministic Documentation Set
A generated documentation set produced by defined system logic rather than AI enrichment. It provides predictable process descriptions, SOPs, and representative examples based on the underlying process and control records.

### Documentation Record
A stored process document, process description, SOP, or representative example generated from approved process and control records. Documentation records remain reviewable until approved.

### Duplicate Candidate
A control or obligation that may represent the same intent as another record. Duplicate candidates should be reviewed through library governance or merge workflows rather than manually deleted.

### Duplicate Handling
The process of reviewing duplicate candidates, marking pairs as not duplicates, retiring one duplicate, merging canonical obligations, or consolidating controls while preserving mappings, lineage, evidence, UCC records, and audit history.

### Edit / Save Changes
A reviewer workflow for making manual corrections to obligation names, statements, control titles, control statements, process drafts, or documentation. Saved edits become part of the active project and should create audit history.

### Evidence
Information, records, documents, screenshots, reports, workflow outputs, or artifacts that demonstrate a control or process exists, is designed, is implemented, and can be assessed. Evidence must be linked to controls, requirements, UCC decisions, and traceability where applicable.

### Evidence Artifact
A generated or collected evidence object tied to a process step, evidence requirement, UCF control, source control, or canonical obligation. Evidence artifacts help turn control expectations into auditable proof.

### Evidence Inheritance
The ability for evidence linked to one control, process, obligation, or framework mapping to support related records through the unified control model. Evidence inheritance reduces duplication while preserving traceability.

### Evidence Requirement
A defined expectation for evidence that should exist for a selected control or process. Missing evidence requirements can create final approval blockers.

### Evidence Tab
The final approval supporting tab showing evidence requirements and artifacts tied to the selected control. It helps reviewers confirm that evidence support exists before final approval.

### Export Package
The collection of output files or registers generated from the approved production records. It may include the final UCF register, canonical obligations, business process register, process documentation register, AO registers, crosswalks, coverage proof, evidence inheritance, and project JSON.

### Final Approval
The last formal reviewer gate before controls enter the final UCF register and export package. It should occur after canonical obligation review and UCF control draft review.

### Final Approval Cockpit
The authoritative screen for final UCF control decisions. It consolidates readiness score, quality score, blocker count, warning count, reviewer checklist, issue-resolution shortcuts, approval actions, and version-impact context.

### Final Approval Supporting Tabs
Tabs in the final approval cockpit that expose UCC applicability, evidence, and lineage context. They reduce screen crowding while keeping approval-critical data visible.

### Final Control
A canonical UCF control that has reached final approval status or is being evaluated for final approval. Only final-approved controls should appear in the approved final UCF register.

### Final Register
The official output register containing approved UCF controls. It is the formal, exportable representation of the unified control set.

### Framework Coverage
The relationship between source framework controls or obligations and UCF controls. Framework coverage shows whether framework requirements are covered, partially covered, not covered, or requiring review.

### Framework Family
A grouping of related compliance frameworks or standards available from the application command center. Framework families help users select the correct baseline or additional framework path.

### Framework Intake
The import, mapping, and validation of a framework file into ComplyUCF. Intake can occur for the baseline framework or for an additional framework.

### Framework Metadata
Descriptive data about a framework, including name, version, publisher, publication date, and project association. Accurate metadata supports traceability and export correctness.

### Generated Production Model
The set of generated production records in an active project. Resetting it is a deliberate maintenance action because it affects generated records and downstream workflow state.

### Guided Demo Project
A sample project containing baseline and additional framework records, workflow outputs, canonical obligations, canonical UCF controls, process records, evidence records, and documentation records. It allows operators to inspect the end-to-end workflow without importing their own files.

### Import
The action of bringing a framework file into the application. Import must preserve original source control text and create the foundation for mapping, validation, extraction, and generation.

### Inheriting Framework Controls
Framework controls that inherit coverage from a UCF control through mappings and evidence relationships. This helps one unified control support multiple framework requirements.

### Integrity Implication
The governance consequence of a workflow area or action. The walkthrough uses this concept to explain how each stage protects source text, prevents overwrites, preserves traceability, or governs approval.

### Issue-Resolution Button
A shortcut in the final approval cockpit that opens the relevant area for resolving a blocker or warning, such as edit statement, mapped AO, duplicate review, evidence, UCC, or AI review.

### JSON Export
A machine-readable project or register export used for downstream processing, integration, backup, or technical review.

### Library Governance
The review and maintenance of UCF library records, including duplicate handling, lineage inspection, source coverage review, quality inspection, consolidation, and duplicate retirement. It is distinct from final approval.

### Lineage
The chain of relationships connecting source controls, AOs, normalized obligations, canonical obligations, UCF controls, evidence, UCC decisions, process records, documentation records, UCF versions, and exports.

### Lineage / Traceability Tab
A final approval supporting tab or context area confirming that mapped source controls, AOs, normalized obligations, canonical obligations, and UCF version linkage remain intact.

### Manual Correction
A reviewer edit made directly to a name, statement, title, mapping, documentation record, or process. Manual corrections become authoritative only when saved and recorded in audit history.

### Map to Existing Control
A coverage review decision where an additional-framework obligation is satisfied by an existing UCF control. This preserves the unified model and avoids unnecessary duplicate controls.

### Mapped AO
An atomic obligation linked to a canonical obligation or UCF control. Mapped AOs provide source-level traceability and help verify that control wording represents all relevant obligations.

### Mapping
The relationship between two records, such as source control to AO, AO to normalized obligation, normalized obligation to canonical obligation, canonical obligation to UCF control, framework control to UCF control, or evidence to control.

### Merge
A reviewer action used when two canonical obligations represent the same intent. The survivor inherits normalized obligations, AOs, source controls, and mappings; the duplicate is marked merged and preserved for traceability.

### Mirrored UCF Control Record
The UCF control record updated in parallel when a canonical obligation or control draft changes. Mirroring keeps linked control data synchronized with reviewer edits.

### Normalized Obligation
An obligation transformed from source-specific wording into a consistent structure for comparison, clustering, and canonicalization. Normalization supports cross-framework alignment without deleting the original source obligation.

### Obligation
A requirement, duty, expectation, or compliance statement extracted from a framework or source control. Obligations progress through atomic, normalized, and canonical layers before feeding UCF controls.

### OpenAI-Assisted Review
A review function using OpenAI model output to advise the user. The walkthrough emphasizes that OpenAI-assisted output requires valid configuration and remains advisory until reviewer action.

### Operator
The user responsible for running workflow steps, reviewing stage outputs, resolving queues, and navigating the application. Operators may also be reviewers or governance owners depending on role.

### Partially Covered
A coverage status indicating that an additional-framework obligation is only partly addressed by existing UCF controls. It requires review to map, extend, create, or reject the recommendation.

### Pending Review
A status indicating that a record is new, edited, AI-updated, merged, or otherwise awaiting reviewer action. Pending review records should not be treated as final.

### Persisted Output
Saved workflow artifacts and outputs retained in the active project. Persisted outputs support auditability and troubleshooting without forcing the workflow to be rerun.

### Persistence
The saving of reviewer decisions, edits, mappings, statuses, documentation records, generated records, and audit history into the active project. Persistence ensures that reopening the project restores the same governed state.

### Process Description
A formal document explaining why a process exists, its scope, owner, trigger, inputs, outputs, evidence, and traceability. It operationalizes a canonical obligation and linked UCF control.

### Process Documentation Generation
The stage that creates process descriptions, SOPs, and representative examples after business processes are approved. Documentation remains editable and reviewable until approved.

### Process Evidence Artifact
An evidence artifact generated from process steps after process drafts are approved. It shows what evidence should be produced by process operation.

### Process Layer
The operational layer where canonical obligations and UCF controls become business processes. This layer connects compliance expectations to actual work.

### Process Owner
The accountable role or party responsible for operating, reviewing, or maintaining a generated business process.

### Process Review
The review of business process drafts and generated documentation. Decisions include approve process, return to review, reject process, and approve documentation.

### Production Record
A governed record generated or approved through the production workflow. Production records should be used as authoritative export sources when they exist.

### Project JSON
A JSON export of project data used for downstream processing, integration, portability, or technical inspection.

### Project Settings
The screen controlling project identity, baseline framework metadata, additional frameworks, version, publisher, publication dates, and persisted workspace context.

### Quality Clear
A control draft status indicating that quality assessment found no wording or AO-representation issue. It can proceed toward approval if traceability and review checks are complete.

### Quality Issue
A wording, mapping, traceability, duplicate, evidence, UCC, or integrity concern that affects control quality or approval readiness. Critical quality issues should block approval.

### Quality Score
A metric in the final approval cockpit derived from the control quality assessment. It helps reviewers judge whether wording and representation are sufficiently strong.

### RACI
A responsibility model identifying who is Responsible, Accountable, Consulted, and Informed for a process. In ComplyUCF, RACI supports process governance and ownership clarity.

### Readiness Score
The percentage of final approval checklist items that pass for a selected control. A low readiness score indicates unresolved blockers or warnings.

### Recommendation Type
The category assigned to an AI recommendation, such as approve, rename, merge, split, or reject. It guides reviewer response but does not determine the authoritative outcome.

### Rejected Record
A record that should not remain active or feed downstream outputs. Rejected records are preserved for traceability and audit rather than deleted.

### Remediation Item
A recorded instruction or task created when a fix is needed but should be tracked separately from immediate approval. It allows issues to be governed without losing the approval context.

### Representative Example
A concrete sample of a completed process or evidence package. It helps operators and auditors understand expected output and practical execution.

### Rerun Control
A control in Advanced Workflow Details that allows advanced workflow activities to be rerun. It should be used carefully because reruns can affect generated outputs.

### Reset Generated Production Model
A system settings action used as a deliberate maintenance step to clear or reset generated production model outputs. It should not be used casually because of downstream impact.

### Retire Duplicate
A library governance action that removes a duplicate control from active use while preserving lineage, mappings, evidence, UCC records, and audit history.

### Return To Review
A reviewer decision that sends a record back to review status because more work is required. It may apply to controls, final approval, business processes, or documentation.

### Review Badge
A visual status indicator used in lists, queues, or filters to show review state, coverage status, quality status, or approval status.

### Review Queue
A list of records requiring reviewer action. Examples include canonical obligation review queues, coverage queues, process review items, and control draft review lists.

### Review Status
The current lifecycle state of a record, such as pending review, approved, rejected, returned to review, blocked, merged, retired, or approved with exception.

### Reviewer
The person responsible for inspecting records, evaluating AI recommendations, making decisions, documenting rationale, and creating authoritative outcomes.

### Reviewer Checklist
The final approval checklist confirming control statement clarity, mapped AO representation, source traceability, UCC decision completeness, evidence presence, duplicate resolution, and absence of blocking quality issues.

### Reviewer Rationale
The explanation entered by a reviewer to justify a decision. It is especially important for merge, split, reject, approve with exception, return to review, and remediation actions.

### Saved Output
A persisted workflow artifact or generated output stored for later review. Saved outputs support diagnostics and auditability.

### Segregation of Duties
A process governance consideration ensuring that responsibilities are separated where needed to prevent conflicts of interest or improper control operation. AI-assisted documentation may include segregation-of-duties language.

### SOP
Standard Operating Procedure. A detailed step-by-step operating document describing how a process is performed, including owner, trigger, inputs, action, output, evidence, quality check, exception handling, and escalation.

### Source Control
The original control statement imported from a framework. Source controls must remain preserved verbatim and should not be overwritten during intake or generation.

### Source Reference
A traceability pointer to the original source framework control or source record. Source references help prove where an AO, obligation, or UCF control came from.

### Source Traceability
The ability to trace a record back to its original source control text and framework reference. Missing source traceability should block final approval.

### Split
A reviewer action used when one canonical obligation contains multiple distinct obligation groups. Splitting creates separate canonical obligations while preserving source lineage.

### Stage
A defined step in the Standard UCF Workflow, such as project setup, baseline intake, baseline UCF generation, additional framework processing, coverage review, business process generation, process documentation generation, final UCF approval, and reports and exports.

### Stage Output
The metrics, tabs, records, decisions, or generated artifacts displayed for the selected workflow stage.

### Standard UCF Workflow
The main workflow list used by operators to move through project setup, intake, generation, review, approval, and exports. It is the normal operating path for the application.

### System Settings
The screen containing operational configuration such as AI connectivity, advanced workflow tools, test controls, and reset controls.

### Traceability
The end-to-end relationship from source framework control to AO, normalized obligation, canonical obligation, UCF control, evidence, UCC decisions, process records, documentation, approval, version, and export.

### Traceability Mapping
A stored link connecting records in the compliance chain. Traceability mappings are essential for auditability, coverage proof, evidence inheritance, and final approval.

### UCC
Universal Control Criteria. In the walkthrough, UCC decisions run from UCC-01 through UCC-25 and are used to evaluate whether control criteria are applicable, complete, justified, and supported by evidence.

### UCC Applicability
The decision set that determines whether each Universal Control Criterion applies to the selected control. Missing or incomplete UCC applicability decisions create final approval blockers.

### UCC Decision
A record showing the decision type, justification, and linked evidence for a specific UCC item. UCC decisions support control completeness and final approval.

### UCC-01 Through UCC-25
The full set of 25 Universal Control Criteria decisions expected for a selected control during final approval. The walkthrough treats completeness of this set as approval-critical.

### UCF
Unified Control Framework. In ComplyUCF, the UCF is the consolidated control model built from source frameworks, obligations, canonical obligations, unified controls, UCC decisions, evidence, processes, and exportable registers.

### UCF Baseline
The initial unified control framework generated from the baseline framework. It must exist before additional frameworks are processed.

### UCF Control
A unified control record used to represent one consolidated control expectation across one or more frameworks. UCF controls are derived from canonical obligations and must pass review and final approval before becoming final export records.

### UCF Control Draft Review
The review of derived canonical UCF controls before final approval. Reviewers inspect wording, mapped AO representation, quality status, approval state, and framework scope.

### UCF Exports
The generated output files representing approved or reportable UCF data, such as final UCF register, crosswalks, AO registers, business process register, process documentation register, evidence inheritance, coverage proof, and project JSON.

### UCF Library
The library governance screen used for duplicate handling, lineage inspection, mapped AO visibility, source coverage review, quality inspection, consolidation, evidence review, and UCC inspection. It is not the final approval cockpit.

### UCF Register
A register of unified controls. The approved final UCF register should include only controls that have passed final approval or approved exception handling.

### UCF Version
A versioned snapshot or version context for UCF records and exports. Final-approved controls can become eligible for the next UCF version snapshot.

### Unified Control
A consolidated control that can satisfy multiple source framework obligations. It reduces duplicate controls by representing common compliance intent once while preserving mappings and traceability.

### Version Impact Preview
A final approval cockpit feature showing how the selected approval decision may affect the next UCF version or snapshot.

### Warning
A non-blocking review item that deserves attention but may not prevent approval. Warnings should still be considered by the reviewer before final approval.

### Workflow Blocker
A condition preventing a workflow step or approval from proceeding. It may relate to missing evidence, incomplete UCC decisions, broken lineage, unresolved duplicates, quality failures, or incomplete review decisions.

### Workflow Diagnostics
The investigation of workflow state, blockers, saved outputs, rerun options, and technical artifacts through Advanced Workflow Details.

### Workflow Metrics
Counts and indicators showing project, framework, control, obligation, status, blocker, warning, approval, and production-record state across the application.

### Workflow Stage List
The left-side or primary list of workflow stages in the UCF Workflow screen. Selecting a stage changes the displayed output while keeping the operator in workflow context.

### XLSX Export
A spreadsheet export format used for downstream review, analysis, reporting, and operational processing.

## Relationship Map

The core ComplyUCF record chain is:

`Source Framework Control -> Atomic Obligation -> Normalized Obligation -> Canonical Obligation -> Canonical UCF Control -> UCC Decisions / Evidence Requirements / Evidence Artifacts -> Final Approval -> Approved UCF Register -> Exports`

The core additional framework decision chain is:

`Additional Framework Obligation -> Coverage Queue -> Map Existing / Extend Existing / Create New Unified Control / Reject -> Updated Mappings and Audit History`

The core process documentation chain is:

`Approved or Reviewable Canonical Obligation -> Business Process Draft -> Approved Business Process -> Process Evidence Artifact -> Process Description / SOP / Representative Example -> Approved Documentation`

## Integrity Principles Captured By The Glossary

1. Original source control text must be preserved.
2. AI output is advisory until saved reviewer action makes it authoritative.
3. Each AO should represent one obligation and keep source traceability.
4. Canonical obligations bridge normalized obligations and UCF controls.
5. Business process and documentation records should remain traceable to canonical obligations, UCF controls, source controls, evidence requirements, and UCF versions.
6. Rejected, merged, split, or retired records should be preserved for audit.
7. Final exports should use production records when production records exist.
8. Every significant reviewer action should create an audit event and preserve decision rationale.
