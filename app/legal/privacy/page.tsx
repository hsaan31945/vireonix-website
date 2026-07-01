import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { privacyDocument } from "@/lib/legal-content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Privacy Policy | Vireonix", description: "How Vireonix handles personal information submitted through vireonix.dev and communications with the brand.", path: "/legal/privacy" });

export default function PrivacyPage() { return <LegalPage document={privacyDocument} />; }
