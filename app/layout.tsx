import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vireonix.com"),
  title: "Vireonix | Web Design, Development & SEO Agency",
  description: "Vireonix builds premium websites, SEO-ready platforms, landing pages, and digital experiences that help businesses attract clients and grow online.",
  keywords: ["web design agency", "Next.js development", "SEO agency", "3D website", "landing page design", "brand identity"],
  authors: [{ name: "Vireonix" }],
  creator: "Vireonix",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Vireonix",
    title: "Vireonix | Premium Websites Built for Growth",
    description: "Modern web design, development, SEO, branding, and high-converting digital experiences.",
  },
  twitter: { card: "summary_large_image", title: "Vireonix | Premium Websites Built for Growth", description: "Modern web design, development, SEO, branding, and digital growth solutions." },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f8fb", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <a href="#main" className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-lg bg-white px-4 py-2 text-sm font-bold shadow-xl transition focus:translate-y-0">Skip to content</a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
