import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero, Section } from "@/components/marketing/section";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { brandDifferentiators } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "COMPLY helps organizations achieve and demonstrate security compliance through an evidence-driven, governance-focused, audit-ready approach.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About COMPLY"
        title="Evidence-driven. Governance-focused. Audit-ready."
        description="COMPLY exists to help organizations achieve and demonstrate security compliance with clarity, accountability, and defensible outcomes."
        className="py-14 sm:py-18"
      />
      <Section title="Our Mission" className="pt-2 pb-8 sm:pt-3 sm:pb-10 lg:pt-8">
        <Card className="bg-card/80">
          <CardContent className="p-5 sm:p-6 lg:p-8">
            <p className="max-w-3xl text-xl font-semibold leading-8 sm:text-2xl sm:leading-10">
              Help organizations achieve and demonstrate security compliance.
            </p>
            <p className="mt-5 max-w-4xl text-lg leading-7 text-muted-foreground">
              COMPLY is a framework-agnostic compliance architecture that turns
              compliance from documentation into verifiable operational truth through
              unified controls, UCC (Universal Control Criteria), and evidence-driven
              artifacts.
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-muted-foreground">
              For IT, security, compliance, and audit teams working across many
              frameworks, COMPLY provides a unified, defensible, auditable mechanism
              to show controls are designed, implemented, operating, and evidenced
              with end-to-end traceability from requirement to audit conclusion.
            </p>
          </CardContent>
        </Card>
      </Section>
      <Section
        eyebrow="People and perspective"
        title="Client-side experience, assessment discipline, and practical delivery."
        description="COMPLY is closely associated with AnsecGroup and is shaped by people who understand the pressure from both sides of a security compliance engagement."
        className="bg-muted/45 pt-8 sm:pt-10"
      >
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="bg-card/80">
            <CardContent className="p-6 lg:p-8">
              <h2 className="text-xl font-semibold sm:text-2xl">A practitioner-led approach</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                The team combines years of experience helping organizations operate security
                programs, prepare for assessments, evaluate controls, and explain compliance
                outcomes to leadership. That perspective keeps the work grounded in what owners
                can actually execute—not only what a framework says on paper.
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                Engagements are designed to leave clients with clearer decisions, accountable
                owners, usable evidence, and a roadmap that remains useful after the report is
                delivered.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/80">
            <CardContent className="flex h-full flex-col p-6 lg:p-8">
              <h2 className="text-xl font-semibold sm:text-2xl">Learn more about the team</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Explore the broader AnsecGroup team and its security, privacy, risk, and compliance
                experience before you start a conversation with COMPLY.
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="https://ansecgroup.com"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-md")}
                >
                  Visit AnsecGroup <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
      <Section title="Our Approach" className="bg-muted/45 pt-6 sm:pt-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Evidence-driven.",
              description:
                "COMPLY treats evidence as the operating proof of compliance, not as a last-minute audit attachment. Evidence is structured, mapped to controls and criteria, reusable across frameworks, and evaluated for whether it supports control design, existence, and operating effectiveness.",
            },
            {
              title: "Governance-focused.",
              description:
                "COMPLY connects compliance activity to ownership, accountability, review cycles, internal audit, management review, and corrective action. The goal is to make compliance a governed operating rhythm with clear responsibilities and executive visibility.",
            },
            {
              title: "Audit-ready.",
              description:
                "COMPLY builds traceability from requirements to controls, criteria, evidence artifacts, and audit conclusions. This gives auditors and leadership a defensible basis for understanding what was tested, what evidence supports it, and where gaps or improvements remain.",
            },
          ].map((item) => (
            <Card key={item.title} className="h-full bg-card/80">
              <CardContent className="p-6 lg:p-7">
                <h2 className="text-xl font-semibold sm:text-2xl">{item.title}</h2>
                <p className="mt-3 leading-6 text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      <Section title="Why COMPLY">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {brandDifferentiators.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="h-full bg-card/80">
                <CardContent className="p-6">
                  <Icon className="mb-5 h-7 w-7 text-primary" />
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>
      <Section
        title="The Story Behind C.O.M.P.L.Y.™"
        description="Explore why C.O.M.P.L.Y.™ was developed and how the model addresses the complexity of multi-framework security compliance."
        className="bg-muted/45"
      >
        <Card className="bg-card/80">
          <CardContent className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
            <p className="max-w-3xl leading-7 text-muted-foreground">
              The C.O.M.P.L.Y.™ story explains the practical compliance problems that shaped the
              methodology: overlapping requirements, duplicated control work, fragmented evidence,
              repetitive assessments, and limited visibility into compliance posture.
            </p>
            <Link
              href="/story-behind-comply"
              className={cn(buttonVariants({ size: "lg" }), "rounded-md px-4")}
            >
              Read the Story <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
