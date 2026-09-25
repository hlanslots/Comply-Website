import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { PageHero, Section } from "@/components/marketing/section";
import { AuditReadinessJourney } from "@/components/marketing/visuals";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { brandPromise, services, startHereOffers } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Compliance assessments, ISO 27001 readiness, SOC 2 readiness, risk assessments, internal audit, governance reviews, and compliance optimization.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A practical starting point for audit-ready compliance."
        description={`${brandPromise} Start with the level of support that matches your pressure, scope, and maturity. COMPLY then brings the right practitioners, services, and Workbenches into the engagement.`}
        className="py-14 sm:py-18"
      />
      <Section
        id="start-here"
        eyebrow="Start here"
        title="Choose the next useful step."
        description="You do not need to arrive with a finished scope. We can help clarify the problem first, then define the right assessment or readiness path."
        className="pt-2 sm:pt-3 lg:pt-8"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {startHereOffers.map((offer) => {
            const Icon = offer.icon;
            return (
              <Card key={offer.title} className="h-full bg-card/80">
                <CardContent className="flex h-full flex-col p-6">
                  <Icon className="mb-5 h-7 w-7 text-primary" />
                  <h2 className="text-xl font-semibold leading-7">{offer.title}</h2>
                  <p className="mt-4 text-sm font-semibold text-foreground">{offer.bestFor}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{offer.trigger}</p>
                  <div className="mt-auto pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      What you receive
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {offer.deliverable}
                    </p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      What you provide
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {offer.clientProvides}
                    </p>
                    <Link
                      href="/contact"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "mt-5 w-full justify-center rounded-md",
                      )}
                    >
                      {offer.nextStep} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>
      <Section title="Service offerings" className="pt-2 sm:pt-3 lg:pt-8">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="h-full bg-card/80">
                <CardContent className="flex h-full flex-col p-7">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary" className="rounded-md">
                      Service
                    </Badge>
                  </div>
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold">COMPLY delivers</h3>
                    <ul className="mt-3 grid gap-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-6 text-muted-foreground"
                        >
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
                        {service.outcome}
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
        eyebrow="Audit readiness"
        title="A clear journey from scope to audit support."
        className="bg-muted/45"
      >
        <AuditReadinessJourney />
      </Section>
      <Section eyebrow="Scope and independence" title="What COMPLY does—and does not do.">
        <Card className="bg-card/80">
          <CardContent className="p-6 leading-7 text-muted-foreground lg:p-8">
            COMPLY supports readiness, governance, evidence, risk management, and internal
            assessment. COMPLY does not issue ISO certifications, replace an independent auditor
            or certification body, act as a QSA where one is required, or provide legal advice.
            Applicability depends on the client’s scope, obligations, contracts, and operating
            environment.
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
