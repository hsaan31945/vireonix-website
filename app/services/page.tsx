import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { Services } from "@/components/sections/services";
import { TechnicalExcellence } from "@/components/sections/technical-excellence";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Digital Services | Vireonix", description: "Explore Vireonix website design, Next.js development, SEO, landing page, branding, and maintenance services." };

export default function ServicesPage() {
  return <main id="main"><PageHero eyebrow="Services" title={<>Digital services designed to <span className="gradient-text">move businesses forward.</span></>} description="Strategy, design, technology, and growth expertise brought together to create digital experiences that look exceptional and perform." /><Services /><TechnicalExcellence /><Contact /></main>;
}
