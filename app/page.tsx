import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Benefits } from "@/components/sections/benefits";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";

export const metadata: Metadata = {
  title: "Vireonix | IT & Digital Solutions for Modern Businesses",
  description: "Vireonix provides web and app development, AI/ML, cybersecurity, SEO, digital marketing, branding, SaaS, custom software, cloud, automation, and IT consulting solutions.",
};

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <About />
      <Benefits />
      <Work />
      <Process />
      <Contact />
    </main>
  );
}
