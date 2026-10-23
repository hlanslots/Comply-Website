import type { Metadata } from "next";

import { WorkbenchGuidePage } from "@/components/marketing/workbench-guide";
import { workbenchPages } from "@/lib/workbench-pages";

export const metadata: Metadata = {
  title: "COMPLY-SSA Workbench",
  description:
    "A practitioner-led Workbench for security-stack assessment, capability scope, evidence quality, findings, and remediation priorities.",
};

export default function ComplySsaWorkbenchPage() {
  return <WorkbenchGuidePage workbench={workbenchPages["comply-ssa"]} />;
}
