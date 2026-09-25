import type { Metadata } from "next";

import { ResourceGuidePage } from "@/components/marketing/resource-guide";
import { resourceGuides } from "@/lib/resource-pages";

export const metadata: Metadata = {
  title: "Readiness Scorecard",
  description:
    "A practical compliance readiness scorecard for small and mid-size companies facing customer, audit, or regulatory pressure.",
};

export default function ReadinessScorecardPage() {
  return <ResourceGuidePage resource={resourceGuides["readiness-scorecard"]} />;
}
