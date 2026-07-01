import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Benefits } from "@/components/sections/benefits";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Faq } from "@/components/sections/faq";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
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
      <Process />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
