import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Frequently Asked Questions | Vireonix", description: "Answers about Vireonix web and app development, AI/ML, cybersecurity, SEO and digital marketing, location, services, and project quotes.", path: "/faq" });

export default function FaqPage() {
  return <main id="main"><PageHero eyebrow="FAQ" title={<>Straight answers before we <span className="gradient-text">start building.</span></>} description="Answers about our services, location, technology expertise, and how to request a quote." primaryLabel="Ask a Question" secondaryLabel="View Services" secondaryHref="/services" /><Faq /><Contact /></main>;
}
