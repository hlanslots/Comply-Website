import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero, Section } from "@/components/marketing/section";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { brandPromise } from "@/lib/site-data";
import type { ResourceGuide } from "@/lib/resource-pages";
import { cn } from "@/lib/utils";

export function ResourceGuidePage({ resource }: { resource: ResourceGuide }) {
  return (
    <>
      <PageHero
        eyebrow="Resource guide"
        title={resource.title}
        description={`${brandPromise} ${resource.description}`}
        className="py-14 sm:py-18"
      />
      <Section
        eyebrow="Why this matters"
        title="Use the guide to choose the next useful step."
        description={resource.businessProblem}
        className="pt-2 sm:pt-3 lg:pt-8"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="h-full bg-card/80">
            <CardContent className="p-6 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Intended audience
              </p>
              <p className="mt-3 text-lg font-semibold leading-7">{resource.audience}</p>
            </CardContent>
          </Card>
          <Card className="h-full bg-card/80">
            <CardContent className="p-6 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                What you will leave with
              </p>
              <p className="mt-3 text-lg font-semibold leading-7">{resource.outcome}</p>
            </CardContent>
          </Card>
        </div>
      </Section>
      <Section eyebrow="The guide" title="Work through the questions that make compliance defensible.">
        <div className="grid gap-4 md:grid-cols-2">
          {resource.sections.map((section) => (
            <Card key={section.title} className="h-full bg-card/80">
              <CardContent className="p-6 lg:p-7">
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{section.description}</p>
                <ul className="mt-5 grid gap-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Next step"
        title="Turn the questions into a practical conversation."
        description="Bring the pressure, scope, and questions you identified to a 30-minute Compliance Clarity Conversation. COMPLY will help determine whether the right next step is a baseline, readiness build, or ongoing governance support."
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
