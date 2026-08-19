import type { Metadata } from "next";
import { CalendarCheck, Mail, Phone } from "lucide-react";

import { ContactForm } from "@/components/marketing/contact-form";
import { PageHero, Section } from "@/components/marketing/section";
import { Card, CardContent } from "@/components/ui/card";

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
        title="Schedule a conversation with COMPLY."
        description="Discuss your compliance obligations, audit readiness priorities, governance model, evidence strategy, and risk management needs."
        className="py-14 sm:py-18"
      />
      <Section title="Conversation request" className="pt-2 sm:pt-3 lg:pt-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
          <div className="grid gap-4">
            {[
              {
                title: "Executive conversation",
                description:
                  "Discuss your compliance objectives, audit pressure, framework obligations, governance needs, and executive reporting priorities. COMPLY helps leadership clarify where compliance effort is being duplicated, where evidence is weak, and how to move toward defensible audit outcomes.",
                icon: CalendarCheck,
              },
              {
                title: "Email response",
                description:
                  "Send a focused question about ISO 27001, SOC 2, NIST, PCI DSS, GDPR, DORA, NIS2, evidence reuse, control mapping, audit readiness, or governance oversight. COMPLY will respond with practical next steps and the right conversation path for your situation.",
                icon: Mail,
              },
              {
                title: "Compliance advisory",
                description:
                  "Request guidance on building, improving, or validating a compliance operating model. Typical advisory topics include unified controls, UCC (Universal Control Criteria), evidence management, risk-to-control traceability, internal audit readiness, and continuous compliance governance.",
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
    </>
  );
}
