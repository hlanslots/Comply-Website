import type { MetadataRoute } from "next";

const routes = [
  "",
  "/customer-challenges",
  "/solutions",
  "/services",
  "/how-it-works",
  "/platform",
  "/resources",
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
