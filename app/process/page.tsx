import type { Metadata } from "next";
import { Benefits } from "@/components/sections/benefits";
import { Contact } from "@/components/sections/contact";
import { Process } from "@/components/sections/process";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Our Digital Project Process | Vireonix", description: "See how Vireonix moves from discovery and planning through design, development, testing, launch, and ongoing support.", path: "/process" });

export default function ProcessPage() {
  return <main id="main"><PageHero eyebrow="Our process" title={<>Clear thinking. Focused execution. <span className="gradient-text">Better outcomes.</span></>} description="A transparent, collaborative process that turns business goals into a polished digital experience without unnecessary complexity." /><Process /><Benefits /><Contact /></main>;
}
