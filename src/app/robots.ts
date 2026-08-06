import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mycomply.ai/sitemap.xml",
    host: "https://mycomply.ai",
  };
}
