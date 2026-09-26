import type { Metadata } from "next";

import { FrameworkGuidePage } from "@/components/marketing/framework-guide";
import { frameworkPages } from "@/lib/framework-pages";

export const metadata: Metadata = {
  title: "GDPR Security and Accountability Readiness",
  description:
    "Practical GDPR security and accountability readiness support for risk, controls, evidence, ownership, and review routines.",
};

export default function GdprPage() {
  return <FrameworkGuidePage framework={frameworkPages.gdpr} />;
}
