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
