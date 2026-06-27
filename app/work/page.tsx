import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { Testimonials } from "@/components/sections/testimonials";
import { Work } from "@/components/sections/work";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Selected Work | Vireonix", description: "Explore selected Vireonix website design, development, branding, and SEO case studies." };

export default function WorkPage() {
  return <main id="main"><PageHero eyebrow="Selected work" title={<>Digital experiences built to <span className="gradient-text">earn attention and action.</span></>} description="A selection of strategy-led websites and brand experiences designed around clarity, credibility, and measurable growth." secondaryLabel="Explore Services" secondaryHref="/services" /><Work /><Testimonials /><Contact /></main>;
}
