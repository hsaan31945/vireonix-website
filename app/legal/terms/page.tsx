import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { termsDocument } from "@/lib/legal-content";

export const metadata: Metadata = { title: "Terms of Service | Vireonix", description: "Terms governing the Vireonix website and IT and digital services." };

export default function TermsPage() { return <LegalPage document={termsDocument} />; }
