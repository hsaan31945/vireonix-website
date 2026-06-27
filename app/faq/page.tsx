import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Frequently Asked Questions | Vireonix", description: "Answers about Vireonix services, technology, SEO, 3D websites, project timelines, redesigns, and ongoing support." };

export default function FaqPage() {
  return <main id="main"><PageHero eyebrow="FAQ" title={<>Straight answers before we <span className="gradient-text">start building.</span></>} description="Everything you need to know about our services, technology, timelines, support, and what working together looks like." primaryLabel="Ask a Question" secondaryLabel="View Services" secondaryHref="/services" /><Faq /><Contact /></main>;
}
