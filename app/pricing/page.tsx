import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Pricing } from "@/components/sections/pricing";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Website Packages & Pricing | Vireonix", description: "Compare flexible Vireonix website packages for startups, growing brands, and established companies." };

export default function PricingPage() {
  return <main id="main"><PageHero eyebrow="Packages" title={<>A focused investment in your <span className="gradient-text">digital growth.</span></>} description="Clear starting points with flexible scope, so you know what to expect while keeping room for your business’s exact needs." primaryLabel="Discuss Your Project" /><Pricing /><Faq /><Contact /></main>;
}
