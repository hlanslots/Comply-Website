import type { Metadata } from "next";
import { CheckCircle2, Database, FileText } from "lucide-react";

import { PageHero, Section } from "@/components/marketing/section";
import {
  GovernanceModel,
  RiskEvidenceWorkflow,
  TraceabilityFlow,
} from "@/components/marketing/visuals";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  platformInteractionPatterns,
  platformMetrics,
  platformOperatingModel,
  platformReports,
  workbenchSummaries,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "COMPLY is a compliance operating model for unified controls, evidence management, traceability, governance, and continuous compliance.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Purpose-built Workbenches that help COMPLY practitioners deliver defensible outcomes."
        description="COMPLY connects requirements, controls, evidence, governance, and audit conclusions in one reusable model. The Workbenches primarily support COMPLY practitioners during client engagements; client-facing access is defined by the engagement need."
        className="py-14 sm:py-18"
      />
      <Section
        id="workbenches"
        eyebrow="Representative practitioner views"
        title="The Workbenches behind the engagement."
        description="These are not self-service product promises. COMPLY practitioners use the Workbenches to structure assessment and readiness work, then provide the client-facing reports, exports, representative screenshots, selected views, or controlled access agreed for the engagement."
        className="pt-2 sm:pt-3 lg:pt-8"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {workbenchSummaries.map((section) => {
            const Icon = section.icon;
            return (
              <Card key={section.title} className="h-full bg-card/80">
                <CardContent className="flex h-full flex-col p-6 lg:p-7">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary" className="rounded-md">
                      Practitioner Workbench
                    </Badge>
                  </div>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {section.description}
                  </p>
                  <div className="mt-6 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        Practitioner use
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {section.practitionerUse}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        Client-facing output
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {section.clientOutput}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>
      <Section
        eyebrow="Architecture"
        title="An operational database for compliance, audit, risk, and control management."
        description="The COMPLY platform model brings frameworks, controls, audit criteria, evidence, client assessments, assets, vulnerabilities, threats, risk treatment, obligations, and security tooling into one connected system of record."
        className="bg-muted/45"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {platformMetrics.map((metric) => (
            <Card key={metric.label} className="bg-card/80">
              <CardContent className="p-5">
                <Database className="mb-4 h-5 w-5 text-primary" />
                <p className="font-mono text-3xl font-semibold">{metric.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {platformOperatingModel.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="bg-card/80">
                <CardContent className="p-6">
                  <Icon className="mb-5 h-6 w-6 text-primary" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>
      <Section
        eyebrow="Traceability"
        title="Requirement -> Framework Control -> Local Control -> Evidence -> Report"
      >
        <TraceabilityFlow />
      </Section>
      <Section
        eyebrow="Governance"
        title="Ownership, accountability, review cycles, and oversight."
        className="bg-muted/45"
      >
        <GovernanceModel />
      </Section>
      <Section
        eyebrow="Workflow"
        title="Risk-to-control-to-evidence workflow."
      >
        <RiskEvidenceWorkflow />
      </Section>
      <Section
        eyebrow="Reporting"
        title="Audit-ready registers, reports, and workflow outputs."
        description="COMPLY supports practical operating workflows: selection cards, linked records, review states, evidence packaging, reporting, and exports."
        className="bg-muted/45"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Card className="bg-card/80">
            <CardContent className="p-7">
              <FileText className="mb-5 h-7 w-7 text-primary" />
              <h3 className="text-xl font-semibold">Available reporting outputs</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {platformReports.map((report) => (
                  <Badge key={report} variant="secondary" className="h-7 rounded-md px-3">
                    {report}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/80">
            <CardContent className="p-7">
              <h3 className="text-xl font-semibold">Operational workflows</h3>
              <ul className="mt-5 grid gap-3">
                {platformInteractionPatterns.map((pattern) => (
                  <li key={pattern} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{pattern}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
