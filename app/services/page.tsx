import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { Services } from "@/components/sections/services";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "IT & Digital Services | Vireonix", description: "Explore Vireonix services for web and app development, AI/ML, cybersecurity, SEO, branding, SaaS, custom software, cloud, automation, testing, and IT consulting.", path: "/services" });

export default function ServicesPage() {
  return <main id="main"><PageHero eyebrow="Services" title={<>Digital services designed to <span className="gradient-text">move businesses forward.</span></>} description="Strategy, design, technology, and growth expertise brought together to create digital experiences that look exceptional and perform." /><Services /><Contact /></main>;
}
