import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Contact Vireonix | Request a Proposal", description: "Tell Vireonix about your website, development, SEO, branding, or digital growth project." };

export default function ContactPage() {
  return <main id="main"><PageHero eyebrow="Start a project" title={<>Your next digital chapter <span className="gradient-text">starts here.</span></>} description="Share your goals, timeline, and what success looks like. We’ll respond with clear next steps and a tailored recommendation." primaryLabel="Jump to Project Form" primaryHref="#contact" secondaryLabel="Review Packages" secondaryHref="/pricing" /><Contact /></main>;
}
