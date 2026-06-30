import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { cookiesDocument } from "@/lib/legal-content";

export const metadata: Metadata = { title: "Cookie Notice | Vireonix", description: "Information about cookies and similar technologies on the Vireonix website." };

export default function CookiesPage() { return <LegalPage document={cookiesDocument} />; }
