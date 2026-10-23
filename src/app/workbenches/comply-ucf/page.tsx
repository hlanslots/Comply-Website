import type { Metadata } from "next";

import { WorkbenchGuidePage } from "@/components/marketing/workbench-guide";
import { workbenchPages } from "@/lib/workbench-pages";

export const metadata: Metadata = {
  title: "COMPLY-UCF Workbench",
  description:
    "A practitioner-led Workbench for unified control frameworks, framework mapping, applicability, local control intent, and evidence expectations.",
};

export default function ComplyUcfWorkbenchPage() {
  return <WorkbenchGuidePage workbench={workbenchPages["comply-ucf"]} />;
}
