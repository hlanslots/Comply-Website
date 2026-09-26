import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, FileText } from "lucide-react";

import { PageHero, Section } from "@/components/marketing/section";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  resourceCategories,
  resourceHighlights,
  whitePaperDownload,
  brandPromise,
  frameworkGuideCards,
  additionalFrameworkGuideCards,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

const riskManagementVideo = {
  enabled: true,
  poster: "/videos/risk-management-poster.png",
  src: "/videos/risk-management-video.mp4",
};

const complyUcfPlainEnglishVideo = {
  enabled: true,
  poster: "/videos/comply-ucf-plain-english-iso-style-video-poster.png",
  src: "/videos/comply-ucf-plain-english-iso-style-video-with-intro.mp4",
};

export const metadata: Metadata = {
  title: "Resources",
  description:
    "White papers, compliance guides, risk management guides, governance resources, and audit readiness resources from COMPLY.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Compliance intelligence for governance and audit readiness leaders."
        description={`${brandPromise} Explore practical resources for security compliance, GRC, risk management, evidence management, and audit readiness.`}
        className="py-14 sm:py-18"
      />
      <Section title="Featured resources" className="pt-2 pb-8 sm:pt-3 sm:pb-10 lg:pt-8">
        <Card className="overflow-hidden bg-card/80">
          <CardContent className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_0.55fr] lg:gap-8 lg:p-8">
            <div>
              <FileText className="mb-6 h-10 w-10 text-primary" />
              <h2 className="text-2xl font-semibold sm:text-3xl">The COMPLY Model White Paper</h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                Learn how evidence-driven governance, reusable controls, and traceable audit
                conclusions reduce compliance effort while improving defensibility.
              </p>
            </div>
            <div className="flex items-center lg:justify-end">
              <a
                href={whitePaperDownload.href}
                download={whitePaperDownload.filename}
                className={cn(buttonVariants({ size: "lg" }), "rounded-md px-4")}
              >
                Download Now <Download className="ml-2 h-4 w-4" />
              </a>
            </div>
          </CardContent>
        </Card>
        {complyUcfPlainEnglishVideo.enabled ? (
          <Card className="mt-6 overflow-hidden bg-card/80">
            <CardContent className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8 lg:p-8">
              <div>
                <FileText className="mb-6 h-10 w-10 text-primary" />
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  COMPLY UCF Overview
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                  Watch a plain-English explanation of how COMPLY UCF turns framework specific
                  control requirements into atomic obligations, canonical controls, evidence,
                  and traceable compliance outputs.
                </p>
              </div>
              <div className="overflow-hidden rounded-md border border-border bg-black shadow-2xl shadow-primary/10">
                <video
                  controls
                  preload="metadata"
                  poster={complyUcfPlainEnglishVideo.poster}
                  className="aspect-video w-full"
                >
                  <source src={complyUcfPlainEnglishVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </CardContent>
          </Card>
        ) : null}
        {riskManagementVideo.enabled ? (
          <Card className="mt-6 overflow-hidden bg-card/80">
            <CardContent className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8 lg:p-8">
              <div>
                <FileText className="mb-6 h-10 w-10 text-primary" />
                <h2 className="text-2xl font-semibold sm:text-3xl">Risk Management Video</h2>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                  Watch how COMPLY connects risk registers, control mapping, treatment planning,
                  evidence, and governance oversight into one practical operating model.
                </p>
              </div>
              <div className="overflow-hidden rounded-md border border-border bg-black shadow-2xl shadow-primary/10">
                <video
                  controls
                  preload="metadata"
                  poster={riskManagementVideo.poster}
                  className="aspect-video w-full"
                >
                  <source src={riskManagementVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </CardContent>
          </Card>
        ) : null}
      </Section>
      <Section
        eyebrow="Start with a useful question"
        title="Practical guidance for the next decision."
        description="The resource library focuses on the questions small and mid-size teams face as they build, strengthen, or extend a compliance program."
        className="bg-muted/45 pt-8 sm:pt-10"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {resourceHighlights.map((resource) => (
            <Card key={resource.title} className="h-full bg-card/80">
              <CardContent className="p-6 lg:p-8">
                <FileText className="mb-5 h-7 w-7 text-primary" />
                <h2 className="text-xl font-semibold sm:text-2xl">{resource.title}</h2>
                <p className="mt-3 text-sm font-semibold text-foreground">{resource.audience}</p>
                <p className="mt-3 leading-7 text-muted-foreground">{resource.description}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  <span className="font-semibold text-foreground">Business problem: </span>
                  {resource.businessProblem}
                </p>
                <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-muted-foreground">
                  <span className="font-semibold text-foreground">You will leave with: </span>
                  {resource.outcome}
                </p>
                <Link
                  href={resource.href}
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "mt-5 w-full justify-center rounded-md",
                  )}
                >
                  Read the guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "mt-3 w-full justify-center rounded-md",
                  )}
                >
                  Discuss your situation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Priority framework guides"
        title="Start with the framework pressure in front of you."
        description="Use these plain-English paths to understand where COMPLY can help, what the engagement would cover, and what useful outputs you can expect."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {frameworkGuideCards.map((guide) => (
            <Card key={guide.title} className="h-full bg-card/80">
              <CardContent className="flex h-full flex-col p-6 lg:p-7">
                <FileText className="mb-5 h-7 w-7 text-primary" />
                <h2 className="text-xl font-semibold leading-7">{guide.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{guide.description}</p>
                <Link
                  href={guide.href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "mt-auto mt-6 w-full justify-center rounded-md",
                  )}
                >
                  Explore the guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Additional framework paths"
        title="Go deeper on the requirement driving the conversation."
        description="These focused paths extend the framework coverage while keeping the same practitioner-led delivery model and engagement guardrails."
        className="bg-muted/45"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {additionalFrameworkGuideCards.map((guide) => (
            <Card key={guide.title} className="h-full bg-card/80">
              <CardContent className="flex h-full flex-col p-6 lg:p-7">
                <FileText className="mb-5 h-7 w-7 text-primary" />
                <h2 className="text-xl font-semibold leading-7">{guide.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{guide.description}</p>
                <Link
                  href={guide.href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "mt-auto mt-6 w-full justify-center rounded-md",
                  )}
                >
                  Explore the guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      <Section title="Resource center" className="bg-muted/45 pt-6 sm:pt-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {resourceCategories.map((category) => (
            <Card key={category} size="sm" className="bg-card/80">
              <CardContent className="px-4 py-2">
                <FileText className="mb-2 h-5 w-5 text-primary" />
                <h2 className="text-sm font-semibold leading-5">{category}</h2>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
