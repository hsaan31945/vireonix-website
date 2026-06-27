import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Testimonials } from "@/components/sections/testimonials";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Client Testimonials | Vireonix", description: "Read what founders and business leaders say about working with Vireonix." };

export default function TestimonialsPage() {
  return <main id="main"><PageHero eyebrow="Client stories" title={<>Trusted partnerships. <span className="gradient-text">Work that delivers.</span></>} description="We measure great work by the confidence it creates, the results it supports, and the relationships it leaves behind." secondaryLabel="See Selected Work" /><Testimonials /><About /><Contact /></main>;
}
