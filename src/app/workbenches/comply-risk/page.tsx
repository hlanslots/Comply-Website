import type { Metadata } from "next";

import { WorkbenchGuidePage } from "@/components/marketing/workbench-guide";
import { workbenchPages } from "@/lib/workbench-pages";

export const metadata: Metadata = {
  title: "COMPLY-RISK Workbench",
  description:
    "A practitioner-led Workbench for structured risk assessments, treatment decisions, evidence, and Statement of Applicability support.",
};

export default function ComplyRiskWorkbenchPage() {
  return <WorkbenchGuidePage workbench={workbenchPages["comply-risk"]} />;
}
