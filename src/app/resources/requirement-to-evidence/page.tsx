import type { Metadata } from "next";

import { ResourceGuidePage } from "@/components/marketing/resource-guide";
import { resourceGuides } from "@/lib/resource-pages";

export const metadata: Metadata = {
  title: "From Requirement to Evidence",
  description:
    "A plain-English guide to connecting compliance requirements, controls, evidence, reviews, and audit conclusions.",
};

export default function RequirementToEvidencePage() {
  return <ResourceGuidePage resource={resourceGuides["requirement-to-evidence"]} />;
}
