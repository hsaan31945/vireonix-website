import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { accessibilityDocument } from "@/lib/legal-content";

export const metadata: Metadata = { title: "Accessibility Statement | Vireonix", description: "The Vireonix website accessibility commitment, targets, and feedback process." };

export default function AccessibilityPage() { return <LegalPage document={accessibilityDocument} />; }
