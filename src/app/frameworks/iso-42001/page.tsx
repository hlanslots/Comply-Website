import type { Metadata } from "next";

import { FrameworkGuidePage } from "@/components/marketing/framework-guide";
import { frameworkPages } from "@/lib/framework-pages";

export const metadata: Metadata = {
  title: "ISO 42001 and AI Governance Readiness",
  description:
    "Practical ISO 42001 and AI governance readiness support for organizations building a governed AI management system.",
};

export default function Iso42001Page() {
  return <FrameworkGuidePage framework={frameworkPages["iso-42001"]} />;
}
