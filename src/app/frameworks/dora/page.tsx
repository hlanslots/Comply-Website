import type { Metadata } from "next";

import { FrameworkGuidePage } from "@/components/marketing/framework-guide";
import { frameworkPages } from "@/lib/framework-pages";

export const metadata: Metadata = {
  title: "DORA and ICT Risk Readiness",
  description:
    "Practical DORA and ICT risk readiness support for digital operational resilience, third-party risk, governance, and evidence.",
};

export default function DoraPage() {
  return <FrameworkGuidePage framework={frameworkPages.dora} />;
}
