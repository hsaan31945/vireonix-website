import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerServices, navLinks } from "@/lib/data";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-white pb-7 pt-20">
      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 pb-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.7fr_.7fr_1fr_1fr]">
        <div><Link href="/" aria-label="Vireonix home"><Logo/></Link><p className="mt-5 max-w-xs text-xs leading-6 text-muted">Vireonix is a modern digital agency building premium websites, SEO-ready platforms, and digital experiences for growing businesses.</p><div className="mt-5 flex gap-2">{["in","ig","dr"].map(social=><a key={social} href="#" aria-label={social} className="grid size-8 place-items-center rounded-full border border-line text-[9px] font-bold transition hover:bg-ink hover:text-white">{social}</a>)}</div></div>
        <FooterColumn title="Explore" links={navLinks.filter(link=>["Home","Work","Pricing","FAQ","Contact"].includes(link.label)).map(link=>({label:link.label,href:link.href}))}/>
        <FooterColumn title="Services" links={footerServices.map(label=>({label,href:"#services"}))}/>
        <div><strong className="text-xs">Let’s talk</strong><a href="mailto:contact@vireonix.dev" className="mt-5 block text-xs font-bold text-accent">contact@vireonix.dev</a><Link href="/contact" className="mt-5 inline-flex h-11 items-center gap-2 rounded-xl bg-ink px-4 text-xs font-bold text-white">Book a Call <ArrowUpRight className="size-3.5"/></Link></div>
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3 border-t border-line px-5 pt-6 text-[9px] text-muted sm:px-8"><span>© 2026 Vireonix. All rights reserved.</span><span>Created by Vireonix</span><a href="#main">Back to top ↑</a></div>
    </footer>
  );
}

interface FooterColumnProps { title:string; links:readonly {label:string;href:string}[]; }
function FooterColumn({title,links}:FooterColumnProps){return <div><strong className="text-xs">{title}</strong><div className="mt-5 flex flex-col gap-3">{links.map(link=><Link key={link.label} href={link.href} className="text-[11px] text-muted transition hover:text-accent">{link.label}</Link>)}</div></div>}
