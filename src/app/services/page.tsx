import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { PageHero, Section } from "@/components/marketing/section";
import { AuditReadinessJourney } from "@/components/marketing/visuals";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/site-data";

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
        title="Expert services for audit-ready compliance programs."
        description="From readiness and assessments to governance reviews and program optimization, COMPLY helps teams build defensible compliance outcomes."
        className="py-14 sm:py-18"
      />
      <Section title="Service offerings" className="pt-3 sm:pt-4">
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
    </>
  );
}
