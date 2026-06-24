import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/marketing/motion";
import { heroHeadlineClass, Section } from "@/components/marketing/section";
import {
  FrameworkMatrix,
  GovernanceModel,
  TraceabilityFlow,
} from "@/components/marketing/visuals";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  challenges,
  outcomes,
  pillars,
  supportingSubheads,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,oklch(0.11_0.03_245),oklch(0.21_0.035_245)_45%,transparent_80%),radial-gradient(circle_at_82%_22%,oklch(0.66_0.16_178_/_0.26),transparent_33%)]" />
        <div className="site-shell grid min-h-[calc(100svh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1.28fr_0.72fr] lg:items-start lg:pt-40">
          <FadeIn>
            <h1 className={cn(heroHeadlineClass, "text-white")}>
              Security compliance solutions built for operational reality.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-7 text-white/72 sm:text-xl">
              <span className="block">
                COMPLY brings governance, controls, risk, evidence, and audit readiness into a
                cohesive operating model, by transforming compliance from documentation exercises
                into verifiable operational reality through governance, evidence management,
                traceability, and continuous compliance oversight.
              </span>
              <span className="mt-16 block whitespace-nowrap text-[clamp(0.7rem,1.18vw,1rem)] font-semibold leading-6 text-white/90">
                <span className="text-primary">C</span>onsolidate requirements.{" "}
                <span className="text-primary">O</span>ptimize controls.{" "}
                <span className="text-primary">M</span>anage risk.{" "}
                <span className="text-primary">P</span>rove compliance.{" "}
                <span className="text-primary">L</span>ead with confidence.{" "}
                <span className="text-primary">Y</span>ield lasting results.
              </span>
            </p>
            <div className="mt-24 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "rounded-md px-4")}
              >
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="flex flex-col items-center justify-center lg:items-end lg:justify-end">
              <Image
                src="/logo-transparent.png"
                alt="COMPLY logo"
                width={1024}
                height={1024}
                priority
                className="h-auto w-full max-w-xs object-contain drop-shadow-2xl sm:max-w-sm lg:max-w-md"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Section
        eyebrow="Customer challenges"
        title="Compliance programs fail when proof and operation drift apart."
        description="COMPLY addresses the gaps that prevent organizations from turning documented intent into audit-defensible operational reality."
      >
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => (
            <StaggerItem key={challenge.title}>
              <Card className="h-full bg-card/80">
                <CardContent className="flex h-full gap-4 p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-sm font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-7">{challenge.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {challenge.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section
        eyebrow="COMPLY solution"
        title="One operating model for achieving, demonstrating, and sustaining compliance."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} className="h-full bg-card/80">
                <CardContent className="flex h-full gap-4 p-6">
                  <Icon className="mt-1 h-8 w-8 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">{pillar.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{pillar.description}</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {pillar.detailedDescription}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Model foundations"
        title="The compliance model behind defensible evidence."
        description="These principles connect Unified Controls, UCC (Universal Control Criteria), evidence artifacts, traceability, risk, and governance into one auditable operating model."
        className="bg-muted/45"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {supportingSubheads.map((subhead, index) => (
            <Card key={subhead.title} className="h-full bg-card/80">
              <CardContent className="flex h-full gap-4 p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-xs font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold leading-7">{subhead.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {subhead.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Compliance coverage"
        title="One Compliance Program. Multiple Frameworks."
        description="A unified control structure creates reusable evidence across security, privacy, resilience, and governance obligations."
      >
        <FrameworkMatrix />
      </Section>

      <Section
        eyebrow="Evidence traceability"
        title="Requirement -> Control -> Evidence -> Audit Conclusion"
        description="Every conclusion is tied to governance ownership, control operation, and validated evidence."
      >
        <TraceabilityFlow />
      </Section>

      <Section eyebrow="Key outcomes" title="Defensible outcomes for executives and auditors.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <Card key={outcome.title} className="h-full bg-card/80">
              <CardContent className="flex h-full items-start gap-4 p-6">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">{outcome.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {outcome.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Governance visibility"
        title="Executive oversight without losing operational detail."
        description="COMPLY connects accountability, reviews, control status, and evidence quality into a governance model leaders can act on."
        className="bg-muted/45"
      >
        <GovernanceModel />
      </Section>
    </>
  );
}
