import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { cookiesDocument } from "@/lib/legal-content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Cookie Notice | Vireonix", description: "Information about cookies, local storage, analytics, and similar technologies that may be used on the Vireonix website.", path: "/legal/cookies" });

export default function CookiesPage() { return <LegalPage document={cookiesDocument} />; }
