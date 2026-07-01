import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { Work } from "@/components/sections/work";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Selected Web Development Work | Vireonix", description: "Explore selected Vireonix web projects for AJL Tour, AJL Transfer, and Everhide Global, with clear project descriptions and links to each live website.", path: "/work" });

export default function WorkPage() {
  return <main id="main"><PageHero eyebrow="Selected work" title={<>Digital experiences built to <span className="gradient-text">earn attention and action.</span></>} description="A selection of strategy-led websites and brand experiences designed around clarity, credibility, and useful business outcomes." secondaryLabel="Explore Services" secondaryHref="/services" /><Work /><Contact /></main>;
}
