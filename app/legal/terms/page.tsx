import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { termsDocument } from "@/lib/legal-content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Terms of Service | Vireonix", description: "Terms governing use of the Vireonix website and the delivery of IT and digital services from Zurich, Switzerland.", path: "/legal/terms" });

export default function TermsPage() { return <LegalPage document={termsDocument} />; }
