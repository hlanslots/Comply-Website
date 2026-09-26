import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { Section } from "@/components/marketing/section";
import { TraceabilityFlow } from "@/components/marketing/visuals";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { solutions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Governance, audit readiness, risk management, compliance management, continuous compliance, and evidence management solutions.",
};

export default function SolutionsPage() {
  return (
    <>
      <Section
        eyebrow="Dedicated solutions"
        title="Dedicated solution areas"
        className="pt-14 sm:pt-16 lg:pt-24"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <Card key={solution.title} className="h-full bg-card/80">
                <CardContent className="flex h-full flex-col p-7">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary" className="rounded-md">
                      Solution
                    </Badge>
                  </div>
                  <h2 className="text-xl font-semibold">{solution.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{solution.description}</p>
                  <p className="mt-5 text-sm leading-6 text-foreground/85">{solution.focus}</p>
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold">COMPLY helps with</h3>
                    <ul className="mt-3 grid gap-2">
                      {solution.includes.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-6 text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-6">
                    <div className="rounded-md border border-border bg-muted/45 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        Outcome
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {solution.outcome}
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
        eyebrow="Traceability"
        title="Every solution reinforces the evidence chain."
        className="bg-muted/45 pt-4 sm:pt-6"
      >
        <TraceabilityFlow />
      </Section>
    </>
  );
}
