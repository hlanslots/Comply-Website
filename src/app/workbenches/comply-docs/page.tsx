import type { Metadata } from "next";

import { WorkbenchGuidePage } from "@/components/marketing/workbench-guide";
import { workbenchPages } from "@/lib/workbench-pages";

export const metadata: Metadata = {
  title: "COMPLY-DOCS Workbench",
  description:
    "A practitioner-led Workbench for governed compliance evidence, document review, control mapping, approvals, and audit-ready publication.",
};

export default function ComplyDocsWorkbenchPage() {
  return <WorkbenchGuidePage workbench={workbenchPages["comply-docs"]} />;
}
