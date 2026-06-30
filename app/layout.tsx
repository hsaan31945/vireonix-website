import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vireonix.dev"),
  title: "Vireonix | Smart IT & Digital Solutions",
  description: "Vireonix helps businesses build, secure, and grow with web, mobile, AI/ML, cybersecurity, custom software, SaaS, cloud, marketing, and IT consulting solutions.",
  keywords: ["IT company Lahore", "web development", "app development", "AI ML solutions", "cybersecurity", "custom software", "SaaS development", "IT consulting"],
  authors: [{ name: "Vireonix" }],
  creator: "Vireonix",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Vireonix",
    title: "Vireonix | Smart IT & Digital Solutions",
    description: "Professional technology, cybersecurity, software, design, and digital growth solutions for modern businesses.",
  },
  twitter: { card: "summary_large_image", title: "Vireonix | Smart IT & Digital Solutions", description: "Professional technology and digital growth solutions for modern businesses." },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07101d", colorScheme: "dark" };

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
