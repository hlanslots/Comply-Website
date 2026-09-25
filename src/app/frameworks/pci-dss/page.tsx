import type { Metadata } from "next";

import { FrameworkGuidePage } from "@/components/marketing/framework-guide";
import { frameworkPages } from "@/lib/framework-pages";

export const metadata: Metadata = {
  title: "PCI DSS Readiness",
  description:
    "Practical PCI DSS readiness support for payment environments, cardholder-data scope, control ownership, and evidence.",
};

export default function PciDssPage() {
  return <FrameworkGuidePage framework={frameworkPages["pci-dss"]} />;
}
