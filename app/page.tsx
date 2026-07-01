import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Benefits } from "@/components/sections/benefits";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { HomePathways } from "@/components/sections/home-pathways";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { createMetadata, defaultDescription } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Vireonix | Smart IT & Digital Solutions", description: defaultDescription, path: "/" });

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <About />
      <Benefits />
      <Work />
      <HomePathways />
      <Contact />
    </main>
  );
}
