import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { FadeIn } from "@/components/marketing/motion";
import { heroHeadlineClass, Section } from "@/components/marketing/section";
import {
  FrameworkGraph,
  GovernanceModel,
  TraceabilityFlow,
} from "@/components/marketing/visuals";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  outcomes,
  pillars,
  prioritySegments,
  supportingSubheads,
  brandPromise,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,oklch(0.11_0.03_245),oklch(0.21_0.035_245)_45%,transparent_80%),radial-gradient(circle_at_82%_22%,oklch(0.66_0.16_178_/_0.26),transparent_33%)]" />
        <div className="site-shell grid min-h-0 items-center gap-10 py-12 sm:py-14 lg:grid-cols-[1fr_18rem] lg:items-center lg:py-16 lg:pt-40 lg:pb-8">
          <FadeIn>
            <h1 className={cn(heroHeadlineClass, "text-white")}>
              Expert-led security compliance for growing companies under customer, audit, or regulatory pressure.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-7 text-white/72 sm:text-xl">
              <span className="block">
                COMPLY helps lean teams assess risk, unify controls, organize evidence, and prepare
                for ISO 27001, ISO 42001, SOC 2, PCI DSS, NIST, DORA, GDPR, and related requirements.
                Our practitioners use purpose-built Workbenches behind the scenes. You receive clear
                findings, a prioritized roadmap, and evidence your customers, auditors, and leadership
                can follow.
              </span>
              <span className="mt-10 block text-sm font-semibold leading-6 text-white/90 sm:mt-12 sm:text-base lg:mt-16 lg:whitespace-nowrap lg:text-[clamp(0.7rem,1.18vw,1rem)]">
                <span className="text-primary">C</span>onsolidate requirements.{" "}
                <span className="text-primary">O</span>ptimize controls.{" "}
                <span className="text-primary">M</span>anage risk.{" "}
                <span className="text-primary">P</span>rove compliance.{" "}
                <span className="text-primary">L</span>ead with confidence.{" "}
                <span className="text-primary">Y</span>ield lasting results.
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="flex flex-col items-center justify-center lg:items-end lg:justify-end">
              <Link href="/" aria-label="C.O.M.P.L.Y. home">
                <Image
                  src="/comply-logo.png"
                  alt="COMPLY logo"
                  width={1024}
                  height={1024}
                  priority
                  className="h-auto w-full max-w-[9.8rem] object-contain drop-shadow-2xl sm:max-w-[11.76rem] lg:h-56 lg:w-56 lg:max-w-none"
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="site-shell flex flex-col items-stretch gap-3 py-5 sm:py-6 lg:flex-row lg:items-center">
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-auto min-h-9 w-full justify-center rounded-md px-4 py-2 text-center whitespace-normal lg:w-auto",
          )}
        >
          Book a Compliance Clarity Conversation <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href="/platform#workbenches"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-auto min-h-9 w-full justify-center rounded-md border-white/25 bg-white/8 px-4 py-2 text-center whitespace-normal text-white hover:bg-white/15 hover:text-white lg:w-auto",
          )}
        >
          See representative COMPLY Workbench screenshots <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <Section
        eyebrow="Who COMPLY helps"
        title="Practical compliance support for teams that are growing faster than their control environment."
        description="COMPLY is built for small and mid-size organizations that need credible progress without building a large in-house compliance function."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {prioritySegments.map((segment) => {
            const Icon = segment.icon;
            return (
              <Card key={segment.title} className="h-full bg-card/80">
                <CardContent className="h-full p-5">
                  <Icon className="mb-5 h-7 w-7 text-primary" />
                  <h3 className="font-semibold leading-6">{segment.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {segment.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="COMPLY solution"
        title={brandPromise}
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
        <div className="max-w-3xl">
          <FrameworkGraph />
        </div>
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
