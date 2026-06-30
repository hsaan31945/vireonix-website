import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { footerServices, navLinks } from "@/lib/data";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const exploreLinks = navLinks.filter((link) => ["Home", "Services", "Process", "Work", "Contact"].includes(link.label));
  return (
    <footer className="border-t border-white/10 bg-[#050c16] pb-7 pt-16 text-white sm:pt-20">
      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 pb-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_.7fr_1fr_1fr]">
        <div><Link href="/" aria-label="Vireonix home"><Logo light /></Link><p className="mt-5 max-w-sm text-sm font-medium text-slate-300">Smart IT & Digital Solutions for Modern Businesses</p><p className="mt-3 max-w-sm text-xs leading-6 text-slate-500">Technology, security, design, and growth expertise helping businesses build stronger digital operations.</p></div>
        <FooterColumn title="Company" links={exploreLinks.map((link) => ({ label: link.label, href: link.href }))} />
        <FooterColumn title="Services" links={footerServices.map((label) => ({ label, href: "/services" }))} />
        <div><strong className="text-xs font-semibold text-slate-200">Contact</strong><div className="mt-5 flex flex-col gap-4 text-xs text-slate-400"><a href="mailto:contact@vireonix.dev" className="flex items-center gap-2 hover:text-white"><Mail className="size-3.5 text-blue-400" />contact@vireonix.dev</a><span className="flex items-start gap-2"><MapPin className="mt-0.5 size-3.5 shrink-0 text-blue-400" />Lahore, Punjab, Pakistan</span></div><Link href="/contact" className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-4 text-xs font-semibold text-white transition hover:bg-blue-500">Start a Project <ArrowUpRight className="size-3.5" /></Link></div>
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-col gap-3 border-t border-white/10 px-5 pt-6 text-[10px] text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-8"><span>© 2026 Vireonix. All rights reserved.</span><span>vireonix.dev</span><a href="#main" className="transition hover:text-slate-300">Back to top ↑</a></div>
    </footer>
  );
}

interface FooterColumnProps { title: string; links: readonly { label: string; href: string }[]; }
function FooterColumn({ title, links }: FooterColumnProps) { return <div><strong className="text-xs font-semibold text-slate-200">{title}</strong><div className="mt-5 flex flex-col gap-3">{links.map((link) => <Link key={link.label} href={link.href} className="text-xs text-slate-500 transition hover:text-white">{link.label}</Link>)}</div></div>; }
