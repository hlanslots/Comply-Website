import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero, Section } from "@/components/marketing/section";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { brandPromise } from "@/lib/site-data";
import type { FrameworkPage } from "@/lib/framework-pages";
import { cn } from "@/lib/utils";

export function FrameworkGuidePage({ framework }: { framework: FrameworkPage }) {
  return (
    <>
      <PageHero
        eyebrow="Framework guide"
        title={framework.title}
        description={`${brandPromise} ${framework.description}`}
        className="py-14 sm:py-18"
      />
      <Section eyebrow="Is this the pressure you are facing?" title="Start with the business trigger.">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ["Best for", framework.bestFor],
            ["Typical trigger", framework.trigger],
            ["What COMPLY supports", framework.scope],
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
        eyebrow="Practitioner delivery"
        title="How the Workbenches support your engagement."
        description="COMPLY practitioners use purpose-built Workbenches to structure assessments, evidence, and decisions. Depending on the engagement, clients may receive representative screenshots, selected views, reports, exports, or controlled access."
        className="bg-muted/45"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {framework.practitionerWorkflow.map((item) => (
            <Card key={item} className="h-full bg-card/80">
              <CardContent className="flex h-full gap-3 p-6">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="leading-7 text-muted-foreground">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="Agreed client-facing outcome" title="What the engagement can leave behind.">
        <div className="grid gap-4 md:grid-cols-3">
          {framework.clientOutputs.map((item) => (
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
        title="Clarify the scope before you build the plan."
        description="COMPLY supports readiness, governance, evidence, risk management, and internal assessment. It does not issue certifications, replace an independent auditor or certification body, act as a QSA where one is required, or provide legal advice."
        className="bg-muted/45"
      >
        <Link
          href="/contact"
          className={cn(buttonVariants({ size: "lg" }), "rounded-md")}
        >
          Book a Compliance Clarity Conversation <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Section>
    </>
  );
}
