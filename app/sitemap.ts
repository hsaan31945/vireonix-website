import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/process", "/work", "/pricing", "/testimonials", "/faq", "/contact"];
  return routes.map((route) => ({
    url: `https://vireonix.com${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
