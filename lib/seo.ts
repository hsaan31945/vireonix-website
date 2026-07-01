import type { Metadata } from "next";

export const siteUrl = "https://vireonix.dev";
export const siteName = "Vireonix";
export const defaultDescription =
  "Vireonix provides smart IT and digital solutions including web development, app development, AI/ML, cybersecurity, SEO, digital marketing, graphic design, branding, SaaS, and custom software services.";

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Vireonix — Smart IT & Digital Solutions for Modern Businesses",
};

export function createMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName,
      url: canonical,
      title,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}

