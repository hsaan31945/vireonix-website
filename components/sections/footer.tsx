import Link from "next/link";
import { Globe2, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const companyLinks = [
  { label: "About Vireonix", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "IT Services Zurich", href: "/it-services-zurich" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

const serviceLinks = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "AI/ML Solutions", href: "/services/ai-ml-solutions" },
  { label: "Cybersecurity", href: "/services/cybersecurity" },
  { label: "SEO & Digital Marketing", href: "/services/seo-digital-marketing" },
  { label: "Graphic Design & Branding", href: "/services/graphic-design-branding" },
] as const;
const solutionLinks = [
  { label: "Custom Software", href: "/services/custom-software-development" },
  { label: "SaaS Development", href: "/services/saas-development" },
  { label: "Software Testing", href: "/services/software-testing" },
  { label: "Cloud Solutions", href: "/services/cloud-solutions" },
  { label: "Business Automation", href: "/services/business-automation" },
  { label: "Chatbot Development", href: "/services/chatbot-development" },
  { label: "IT Consulting", href: "/services/it-consulting" },
] as const;
const legalLinks = [
  { label: "Terms", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Legal Notice", href: "/legal/notice" },
  { label: "Accessibility", href: "/legal/accessibility" },
  { label: "Cookie Notice", href: "/legal/cookies" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050c16] pb-7 pt-16 text-white sm:pt-20">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 pb-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.3fr_.7fr_1fr_1fr_1fr] lg:gap-8">
        <div><Link href="/" aria-label="Vireonix home"><Logo light /></Link><p className="mt-5 max-w-xs text-sm font-medium text-slate-300">Smart IT & Digital Solutions for Modern Businesses</p><p className="mt-3 max-w-xs text-xs leading-6 text-slate-500">Technology, security, design, and growth expertise helping businesses build stronger digital operations.</p></div>
        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Services" links={serviceLinks} />
        <FooterColumn title="Solutions" links={solutionLinks} />
        <div><strong className="text-xs font-semibold text-slate-200">Contact</strong><div className="mt-5 flex flex-col gap-4 text-xs text-slate-500"><span className="flex items-start gap-2"><MapPin className="mt-0.5 size-3.5 shrink-0 text-blue-400" />Zurich, Switzerland</span><a href="mailto:contact@vireonix.dev" className="flex items-center gap-2 transition hover:text-white"><Mail className="size-3.5 shrink-0 text-blue-400" />contact@vireonix.dev</a><a href="https://vireonix.dev" className="flex items-center gap-2 transition hover:text-white"><Globe2 className="size-3.5 shrink-0 text-blue-400" />vireonix.dev</a></div></div>
      </div>
      <div className="mx-auto flex max-w-[1240px] flex-col gap-5 border-t border-white/10 px-5 pt-6 text-[10px] text-slate-600 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <span>© 2026 Vireonix — Made in Zurich</span>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-4 gap-y-2">{legalLinks.map((link) => <Link key={link.href} href={link.href} className="transition hover:text-slate-300">{link.label}</Link>)}</nav>
      </div>
    </footer>
  );
}

interface FooterColumnProps { title: string; links: readonly { label: string; href: string }[]; }
function FooterColumn({ title, links }: FooterColumnProps) { return <div><strong className="text-xs font-semibold text-slate-200">{title}</strong><div className="mt-5 flex flex-col gap-3">{links.map((link) => <Link key={link.label} href={link.href} className="text-xs leading-5 text-slate-500 transition hover:text-white">{link.label}</Link>)}</div></div>; }
