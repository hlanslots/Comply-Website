import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero, Section } from "@/components/marketing/section";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { brandPromise } from "@/lib/site-data";
import type { WorkbenchPage } from "@/lib/workbench-pages";
import { cn } from "@/lib/utils";

export function WorkbenchGuidePage({ workbench }: { workbench: WorkbenchPage }) {
  return (
    <>
      <PageHero
        eyebrow="Practitioner Workbench"
        title={workbench.title}
        description={`${brandPromise} ${workbench.description}`}
        className="py-14 sm:py-18"
      />
      <Section eyebrow="Start with the engagement pressure" title="A Workbench behind a practical client outcome.">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ["Best for", workbench.bestFor],
            ["Typical trigger", workbench.trigger],
            ["Practitioner use", workbench.practitionerUse],
          ].map(([label, text]) => (
            <Card key={label} className="h-full bg-card/80">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{label}</p>
                <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Representative practitioner workflow"
        title="How COMPLY practitioners use it during an engagement."
        description="The Workbench supports the practitioner’s delivery workflow. The client-facing report, export, representative screenshot, selected view, or controlled access is defined by the engagement need – not assumed to be unrestricted portal access."
        className="bg-muted/45"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {workbench.workflow.map((step, index) => (
            <Card key={step.title} className="h-full bg-card/80">
              <CardContent className="flex h-full gap-4 p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-xs font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-semibold leading-7">{step.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="Agreed client-facing outcome" title="What the engagement can leave behind.">
        <div className="grid gap-4 md:grid-cols-2">
          {workbench.clientOutputs.map((item) => (
            <Card key={item} className="h-full bg-card/80">
              <CardContent className="flex h-full gap-3 p-6">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="leading-7 text-muted-foreground">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Next step"
        title="Clarify whether this Workbench belongs in the engagement."
        description="COMPLY supports readiness, governance, evidence, risk management, and internal assessment. It does not issue certifications, replace an independent auditor or certification body, act as a QSA where one is required, or provide legal advice."
        className="bg-muted/45"
      >
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "rounded-md")}>
            Book a Compliance Clarity Conversation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/platform#workbenches"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-md")}
          >
            See all Workbench screenshots <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
