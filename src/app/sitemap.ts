import type { MetadataRoute } from "next";

const routes = [
  "",
  "/customer-challenges",
  "/solutions",
  "/services",
  "/how-it-works",
  "/platform",
  "/resources",
  "/resources/readiness-scorecard",
  "/resources/requirement-to-evidence",
  "/frameworks/iso-27001",
  "/frameworks/soc-2",
  "/frameworks/multi-framework",
  "/frameworks/iso-42001",
  "/frameworks/pci-dss",
  "/frameworks/nist-sp-800-53",
  "/frameworks/nist-csf",
  "/frameworks/cis-controls",
  "/frameworks/dora",
  "/frameworks/gdpr",
  "/workbenches/comply-risk",
  "/workbenches/comply-ucf",
  "/workbenches/comply-ssa",
  "/workbenches/comply-docs",
  "/about",
  "/story-behind-comply",
  "/contact",
  "/subscribe",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mycomply.ai";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
