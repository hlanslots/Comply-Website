import type { Metadata } from "next";
import { CalendarDays, CheckCircle2, MailCheck } from "lucide-react";

import { NewsletterForm } from "@/components/marketing/newsletter-form";
import { PageHero, Section } from "@/components/marketing/section";
import { Card, CardContent } from "@/components/ui/card";
import { getNewsletterSettings } from "@/lib/newsletter-config";

export const metadata: Metadata = {
  title: "Subscribe to the Newsletter",
  description:
    "Subscribe to the COMPLY newsletter for practical security, compliance, privacy, risk, and AI governance intelligence.",
};

type SubscribePageProps = {
  searchParams?: Promise<{ status?: string | string[] }>;
};

function statusValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

const subscribeDisplayName = "C.O.M.P.L.Y. Daily Digest";
const subscribeDescription =
  "Receive a daily, practical, sourced briefing on security, compliance, privacy, risk, frameworks, vulnerabilities, and AI governance.";

export default async function SubscribePage({ searchParams }: SubscribePageProps) {
  const params = searchParams ? await searchParams : undefined;
  const newsletter = getNewsletterSettings();

  return (
    <>
      <PageHero
        eyebrow={subscribeDisplayName}
        title={newsletter.pageTitle}
        description={subscribeDescription}
        className="py-14 sm:py-18"
      />
      <Section
        eyebrow="Newsletter preferences"
        title="Subscribe or unsubscribe in one place."
        description="We ask you to confirm by email before changing your subscription. That keeps the list accurate and puts the choice in your hands."
        className="pt-2 sm:pt-3 lg:pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="grid gap-4">
            {[
              {
                title: newsletter.deliveryLabel,
                description: newsletter.deliveryDescription,
                icon: CalendarDays,
              },
              {
                title: newsletter.contextLabel,
                description: newsletter.contextDescription,
                icon: CheckCircle2,
              },
              {
                title: "Your choice",
                description: newsletter.choiceDescription,
                icon: MailCheck,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="bg-card/80">
                  <CardContent className="flex gap-4 p-5">
                    <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
            <p className="text-xs leading-5 text-muted-foreground">
              The digest is informational and does not replace professional legal, compliance, or
              security advice.
            </p>
          </div>

          <Card className="bg-card/80">
            <CardContent className="p-6 sm:p-8">
              <NewsletterForm
                initialStatus={statusValue(params?.status)}
                newsletterName={subscribeDisplayName}
                newsletterFrequency={newsletter.frequency}
              />
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
