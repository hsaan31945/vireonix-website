import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { noticeDocument } from "@/lib/legal-content";

export const metadata: Metadata = { title: "Legal Notice | Vireonix", description: "Operator information and legal notices for the Vireonix website." };

export default function NoticePage() { return <LegalPage document={noticeDocument} />; }
