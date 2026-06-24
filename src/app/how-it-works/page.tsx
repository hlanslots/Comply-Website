import type { Metadata } from "next";
import { CheckCircle2, FileText, ShieldCheck } from "lucide-react";

import { PageHero, Section } from "@/components/marketing/section";
import { ComplianceLifecycleWheel } from "@/components/marketing/visuals";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { processSteps } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "The COMPLY lifecycle: assess, design, implement, operate, review, and improve continuous compliance.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A continuous lifecycle for evidence-driven compliance."
        description="COMPLY turns control design, operation, evidence, review, and improvement into a repeatable governance cadence."
        className="py-14 sm:py-18"
      />
      <Section title="Compliance lifecycle wheel" className="pt-3 sm:pt-4">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lg:sticky lg:top-24">
            <ComplianceLifecycleWheel />
            <Card className="mt-6 bg-card/80">
              <CardContent className="p-5">
                <div className="mb-3 flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold">Lifecycle operating principle</h2>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  Each phase produces governance decisions, control actions, and evidence that
                  feed the next phase. The result is a compliance program that can be operated,
                  reviewed, improved, and defended continuously.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={step.title} className="bg-card/80">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <Badge variant="secondary" className="mb-2 rounded-md font-mono">
                            Step {index + 1}
                          </Badge>
                          <h2 className="text-xl font-semibold">{step.title}</h2>
                        </div>
                      </div>
                    </div>
                    <p className="leading-7 text-muted-foreground">{step.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md bg-muted px-3 py-1 text-sm text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 grid gap-5 lg:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-semibold">Key activities</h3>
                        <ul className="mt-3 grid gap-2">
                          {step.activities.map((activity) => (
                            <li
                              key={activity}
                              className="flex gap-2 text-sm leading-6 text-muted-foreground"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">Outputs</h3>
                        <ul className="mt-3 grid gap-2">
                          {step.deliverables.map((deliverable) => (
                            <li
                              key={deliverable}
                              className="flex gap-2 text-sm leading-6 text-muted-foreground"
                            >
                              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-5 rounded-md border border-border bg-muted/45 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        Governance outcome
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {step.outcome}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
