import type { Metadata } from "next";

import { FrameworkGuidePage } from "@/components/marketing/framework-guide";
import { frameworkPages } from "@/lib/framework-pages";

export const metadata: Metadata = {
  title: "NIST CSF Profiles",
  description:
    "Practical NIST CSF profile support for current and target cybersecurity posture, risk-based priorities, and action planning.",
};

export default function NistCsfPage() {
  return <FrameworkGuidePage framework={frameworkPages["nist-csf"]} />;
}
