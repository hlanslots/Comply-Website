import type { Metadata } from "next";

import { Stagger, StaggerItem } from "@/components/marketing/motion";
import { Section } from "@/components/marketing/section";
import { Card, CardContent } from "@/components/ui/card";
import { challenges } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Customer Challenges",
  description:
    "The operational gaps that make security compliance difficult to achieve, demonstrate, and sustain.",
};

export default function CustomerChallengesPage() {
  return (
    <Section
      headingLevel="h1"
      eyebrow="Customer challenges"
      title="Compliance programs fail when proof and operation drift apart."
      description="COMPLY addresses the gaps that prevent organizations from turning documented intent into audit-defensible operational reality."
      className="pt-14 sm:pt-16 lg:pt-24"
    >
      <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <StaggerItem key={challenge.title}>
            <Card className="h-full bg-card/80">
              <CardContent className="flex h-full gap-4 p-6">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"
                >
                  <challenge.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <h2 className="text-lg font-semibold leading-7">{challenge.title}</h2>
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
  );
}
