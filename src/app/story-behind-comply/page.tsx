import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GitBranch, Layers3, ShieldCheck } from "lucide-react";

import { PageHero, Section } from "@/components/marketing/section";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The Story Behind C.O.M.P.L.Y.",
  description:
    "Learn why C.O.M.P.L.Y. was developed to simplify security compliance across multiple standards, frameworks, regulations, and contractual requirements.",
};

const storyParagraphs = [
  "C.O.M.P.L.Y.™ was developed to address one of the most persistent challenges in security compliance: the increasing complexity of achieving and demonstrating compliance across multiple security standards, frameworks, regulations, and contractual requirements.",
  "Organizations that must comply with multiple frameworks often experience significant inefficiencies as requirements overlap, diverge, and evolve. As the number of applicable standards increases, compliance activities frequently become fragmented, resulting in duplicated effort, excessive documentation, increased costs, and reduced operational effectiveness. Teams spend valuable time interpreting requirements, mapping controls, managing evidence, and preparing reports for a diverse range of stakeholders.",
  "Recognizing these challenges, the C.O.M.P.L.Y.™ methodology and platform were designed to provide a more efficient and sustainable approach to security compliance management. The objective was to create a solution that enables organizations not only to achieve compliance, but also to demonstrate compliance clearly, consistently, and efficiently across multiple frameworks and requirements.",
  "The design of C.O.M.P.L.Y.™ is informed by extensive experience gained from both organizational and assessor perspectives. This combined perspective provided unique insight into the challenges faced by clients, consultants, auditors, and compliance professionals when managing complex compliance programs. Common challenges identified included duplicate control management, inconsistent evidence collection, repetitive assessment activities, fragmented reporting, and limited visibility into overall compliance posture.",
  "To address these challenges, C.O.M.P.L.Y.™ was built around the principles of control unification, evidence-based compliance management, traceability, and continuous improvement. The platform enables organizations to consolidate multiple compliance obligations into a unified framework, streamline evidence management, identify compliance gaps, and generate stakeholder-specific reporting with greater efficiency and accuracy.",
  "Today, C.O.M.P.L.Y.™ provides organizations with a scalable and defensible approach to managing security compliance across multiple standards, frameworks, regulations, and contractual requirements. By reducing complexity and improving visibility, the solution helps organizations achieve measurable compliance outcomes while supporting business objectives and stakeholder expectations.",
];

const storyPrinciples = [
  {
    title: "Control unification",
    description:
      "Overlapping requirements are consolidated into a unified control model, reducing duplicate work and creating a clearer operating structure for compliance teams.",
    icon: Layers3,
  },
  {
    title: "Evidence-based compliance",
    description:
      "Evidence is treated as operational proof, mapped directly to requirements, controls, criteria, and audit conclusions.",
    icon: ShieldCheck,
  },
  {
    title: "Traceability and improvement",
    description:
      "Every compliance outcome can be traced from obligation to evidence, while governance and review cycles support continuous improvement.",
    icon: GitBranch,
  },
];

export default function StoryBehindComplyPage() {
  return (
    <>
      <PageHero
        eyebrow="COMPLY story"
        title="The Story Behind C.O.M.P.L.Y.™"
        description="A methodology and platform designed to reduce complexity, unify compliance obligations, and help organizations demonstrate defensible security compliance outcomes."
        className="py-14 sm:py-18"
      />

      <Section
        title="Built for the reality of modern security compliance."
        description="C.O.M.P.L.Y.™ was created for organizations that need to manage overlapping obligations without allowing compliance work to become fragmented, duplicative, or disconnected from operational reality."
        className="pt-3 pb-8 sm:pt-4 sm:pb-10"
      >
        <Card className="bg-card/80">
          <CardContent className="max-h-[30rem] space-y-5 overflow-y-auto p-5 pr-4 sm:max-h-[34rem] sm:p-6 sm:pr-5 lg:max-h-[38rem] lg:space-y-6 lg:p-8 lg:pr-6">
            {storyParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-5xl text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-8 lg:text-2xl lg:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      </Section>

      <Section
        title="The principles behind the model."
        description="The C.O.M.P.L.Y.™ approach is grounded in practical compliance operations: consolidate the obligations, manage the evidence, preserve traceability, and improve continuously."
        className="bg-muted/45 pt-6 sm:pt-8"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {storyPrinciples.map((principle) => {
            const Icon = principle.icon;
            return (
              <Card key={principle.title} className="h-full bg-card/80">
                <CardContent className="p-6 lg:p-7">
                  <Icon className="mb-5 h-7 w-7 text-primary" />
                  <h2 className="text-xl font-semibold">{principle.title}</h2>
                  <p className="mt-3 text-lg leading-8 text-muted-foreground">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section
        title="From complexity to defensible outcomes."
        description="The result is a scalable operating model that helps executive, security, compliance, audit, and risk leaders see what is required, what is controlled, what is evidenced, and what can be defended."
      >
        <Link
          href="/contact"
          className={cn(buttonVariants({ size: "lg" }), "rounded-md")}
        >
          Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Section>
    </>
  );
}
