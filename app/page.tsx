import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { HomeOverview } from "@/components/sections/home-overview";

export const metadata: Metadata = {
  title: "Vireonix | A Better Website for Your Next Stage of Growth",
  description: "Vireonix turns unclear, underperforming websites into focused digital experiences that help ambitious businesses earn trust and create demand.",
};

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <HomeOverview />
    </main>
  );
}
