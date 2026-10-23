import type { Metadata } from "next";

import { FrameworkGuidePage } from "@/components/marketing/framework-guide";
import { frameworkPages } from "@/lib/framework-pages";

export const metadata: Metadata = {
  title: "SOC 2 Readiness",
  description:
    "Practical SOC 2 readiness support for technology and service organizations preparing for customer trust requirements.",
};

export default function Soc2Page() {
  return <FrameworkGuidePage framework={frameworkPages["soc-2"]} />;
}
