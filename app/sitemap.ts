import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/process", "/work", "/pricing", "/testimonials", "/faq", "/contact", "/legal/terms", "/legal/privacy", "/legal/notice", "/legal/accessibility", "/legal/cookies"];
  return routes.map((route) => ({
    url: `https://vireonix.dev${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route.startsWith("/legal/") ? 0.4 : 0.8,
  }));
}
