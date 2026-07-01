import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { createMetadata, defaultDescription, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vireonix.dev"),
  ...createMetadata({ title: "Vireonix | Smart IT & Digital Solutions", description: defaultDescription, path: "/" }),
  authors: [{ name: "Vireonix" }],
  creator: "Vireonix",
  publisher: "Vireonix",
  applicationName: "Vireonix",
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "96x96" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07101d", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Vireonix",
        alternateName: "Vireonix IT & Digital Solutions",
        url: siteUrl,
        logo: `${siteUrl}/favicon-96x96.png`,
        email: "contact@vireonix.dev",
        description: "IT and digital solutions brand offering web development, app development, AI/ML, cybersecurity, SEO, digital marketing, design, branding, SaaS, custom software, software testing, cloud, automation, chatbot development, and IT consulting.",
        address: { "@type": "PostalAddress", addressLocality: "Zurich", addressCountry: "CH" },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Vireonix",
        url: siteUrl,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#professional-service`,
        name: "Vireonix",
        url: siteUrl,
        email: "contact@vireonix.dev",
        description: "Smart IT & Digital Solutions for Modern Businesses",
        areaServed: "Global",
        serviceType: "IT & Digital Solutions",
        address: { "@type": "PostalAddress", addressLocality: "Zurich", addressCountry: "CH" },
      },
    ],
  };

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <a href="#main" className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-lg bg-white px-4 py-2 text-sm font-bold shadow-xl transition focus:translate-y-0">Skip to content</a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
