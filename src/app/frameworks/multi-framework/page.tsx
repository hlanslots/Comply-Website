import type { Metadata } from "next";

import { FrameworkGuidePage } from "@/components/marketing/framework-guide";
import { frameworkPages } from "@/lib/framework-pages";

export const metadata: Metadata = {
  title: "Multi Framework Readiness",
  description:
    "Unify overlapping ISO, SOC 2, NIST, PCI DSS, GDPR, DORA, CIS, and AI-governance obligations into one compliance operating model.",
};

export default function MultiFrameworkPage() {
  return <FrameworkGuidePage framework={frameworkPages["multi-framework"]} />;
}
