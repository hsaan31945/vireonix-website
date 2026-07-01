import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { noticeDocument } from "@/lib/legal-content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Legal Notice | Vireonix", description: "Operator and contact information for Vireonix, an IT and digital solutions brand operating from Zurich, Switzerland.", path: "/legal/notice" });

export default function NoticePage() { return <LegalPage document={noticeDocument} />; }
