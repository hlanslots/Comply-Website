import type { Metadata } from "next";

import { FrameworkGuidePage } from "@/components/marketing/framework-guide";
import { frameworkPages } from "@/lib/framework-pages";

export const metadata: Metadata = {
  title: "ISO 27001 Readiness",
  description:
    "Practical ISO 27001 readiness support for small and mid-size organizations building or strengthening a defensible information security management system.",
};

export default function Iso27001Page() {
  return <FrameworkGuidePage framework={frameworkPages["iso-27001"]} />;
}
