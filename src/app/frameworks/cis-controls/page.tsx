import type { Metadata } from "next";

import { FrameworkGuidePage } from "@/components/marketing/framework-guide";
import { frameworkPages } from "@/lib/framework-pages";

export const metadata: Metadata = {
  title: "CIS Controls Implementation Priorities",
  description:
    "Practical CIS Controls implementation support for prioritized safeguards, ownership, evidence, and improvement planning.",
};

export default function CisControlsPage() {
  return <FrameworkGuidePage framework={frameworkPages["cis-controls"]} />;
}
