import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Testimonials } from "@/components/sections/testimonials";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Client References & Project Evidence | Vireonix", description: "Learn how Vireonix handles client references transparently and explore verifiable live project work without invented testimonials, ratings, or results.", path: "/testimonials" });

export default function TestimonialsPage() {
  return <main id="main"><PageHero eyebrow="Client references" title={<>Evidence over <span className="gradient-text">empty claims.</span></>} description="Vireonix does not publish invented reviews, ratings, or results. Explore verifiable live work, or contact us to discuss an appropriate reference where permission is available." secondaryLabel="See Selected Work" /><Testimonials /><About /><Contact /></main>;
}
