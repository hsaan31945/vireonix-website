import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { serviceDetails } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", ...serviceDetails.map(({ slug }) => `/services/${slug}`), "/process", "/work", "/pricing", "/testimonials", "/faq", "/contact", "/legal/terms", "/legal/privacy", "/legal/notice", "/legal/accessibility", "/legal/cookies"];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/legal/") ? "yearly" as const : "monthly" as const,
    priority: route === "" ? 1 : route.startsWith("/legal/") ? 0.3 : route.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
