import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { HomeOverview } from "@/components/sections/home-overview";

export const metadata: Metadata = {
  title: "Vireonix | IT & Digital Solutions for Modern Businesses",
  description: "Vireonix provides web and app development, cybersecurity, SEO, digital marketing, graphic design, branding, and scalable technology solutions.",
};

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <HomeOverview />
    </main>
  );
}
