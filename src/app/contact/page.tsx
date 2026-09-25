import type { Metadata } from "next";
import { CalendarCheck, Mail, Phone } from "lucide-react";

import { ContactForm } from "@/components/marketing/contact-form";
import { PageHero, Section } from "@/components/marketing/section";
import { Card, CardContent } from "@/components/ui/card";
import { brandPromise } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a conversation with COMPLY for security compliance, risk management, audit readiness, governance, and evidence management support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with a Compliance Clarity Conversation."
        description={`${brandPromise} Tell us what changed, what is due, and where your team needs confidence. We will help you frame the right next step for your scope and maturity.`}
        className="py-14 sm:py-18"
      />
      <Section
        title="Conversation request"
        description="The first step is a 30-minute Compliance Clarity Conversation. Afterward, COMPLY provides a short summary of the situation, the most useful next action, and whether a paid diagnostic is appropriate."
        className="pt-2 sm:pt-3 lg:pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
          <div className="grid gap-4">
            {[
              {
                title: "Executive conversation",
                description:
                  "Discuss your compliance objectives, audit pressure, framework obligations, governance needs, and executive reporting priorities. COMPLY helps leadership clarify where effort is duplicated, where evidence is weak, and what a defensible next step looks like.",
                icon: CalendarCheck,
              },
              {
                title: "Email response",
                description:
                  "Send a focused question about ISO 27001, ISO 42001, SOC 2, NIST, PCI DSS, GDPR, DORA, evidence reuse, control mapping, audit readiness, or governance oversight.",
                icon: Mail,
              },
              {
                title: "Compliance advisory",
                description:
                  "Request guidance on building, improving, or validating a compliance operating model. Typical topics include unified controls, evidence management, risk-to-control traceability, internal audit readiness, and continuous compliance governance.",
                icon: Phone,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="bg-card/80">
                  <CardContent className="flex gap-4 p-5">
                    <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <Card className="bg-card/80">
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </Section>
      <Section
        eyebrow="Scope and independence"
        title="Clear support, clear boundaries."
        className="bg-muted/45 pt-8 sm:pt-10"
      >
        <p className="max-w-4xl leading-7 text-muted-foreground">
          COMPLY supports readiness, governance, evidence, risk management, and internal
          assessment. COMPLY does not issue ISO certifications, replace an independent auditor or
          certification body, act as a QSA where one is required, or provide legal advice.
          Applicability depends on the client&apos;s scope, obligations, contracts, and operating
          environment.
        </p>
        <p className="mt-4 max-w-4xl leading-7 text-muted-foreground">
          We review each request for fit and use the information you provide to prepare a focused
          first conversation. A paid diagnostic is recommended only when it is the appropriate next
          step.
        </p>
      </Section>
    </>
  );
}
