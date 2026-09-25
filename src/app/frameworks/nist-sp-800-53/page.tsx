import type { Metadata } from "next";

import { FrameworkGuidePage } from "@/components/marketing/framework-guide";
import { frameworkPages } from "@/lib/framework-pages";

export const metadata: Metadata = {
  title: "NIST SP 800-53 Readiness",
  description:
    "Practical NIST SP 800-53 control readiness support for scoped, owned, evidenced, and reviewable security and privacy programs.",
};

export default function NistSp80053Page() {
  return <FrameworkGuidePage framework={frameworkPages["nist-sp-800-53"]} />;
}
