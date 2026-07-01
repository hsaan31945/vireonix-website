import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { accessibilityDocument } from "@/lib/legal-content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Accessibility Statement | Vireonix", description: "Read the Vireonix website accessibility commitment, current approach, known limitations, and feedback contact information.", path: "/legal/accessibility" });

export default function AccessibilityPage() { return <LegalPage document={accessibilityDocument} />; }
