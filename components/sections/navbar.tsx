"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b text-white transition duration-300 ${scrolled || open ? "border-white/10 bg-[#07101d]/95 shadow-[0_10px_35px_rgba(0,0,0,.18)] backdrop-blur-xl" : "border-transparent bg-[#07101d]/70 backdrop-blur-md"}`}>
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Vireonix home"><Logo light /></Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`text-xs font-medium transition hover:text-white ${pathname === link.href ? "text-blue-300" : "text-slate-400"}`}>{link.label}</Link>)}
        </nav>
        <Link href="/contact" className="group hidden h-11 items-center gap-2 rounded-xl bg-blue-600 px-4 text-xs font-semibold text-white transition hover:bg-blue-500 lg:inline-flex">Free Consultation <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
        <button type="button" className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[.04] text-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
      </div>
      <AnimatePresence>
        {open && <motion.div id="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="fixed inset-x-0 top-[76px] h-[calc(100dvh-76px)] overflow-y-auto border-t border-white/10 bg-[#07101d] px-5 pb-8 pt-4 lg:hidden"><nav className="flex flex-col" aria-label="Mobile navigation">{navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined} className={`border-b border-white/10 py-4 text-lg font-medium ${pathname === link.href ? "text-blue-300" : "text-slate-200"}`}>{link.label}</Link>)}</nav><Link href="/contact" onClick={() => setOpen(false)} className="mt-6 flex h-14 items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-semibold text-white">Get a Free Consultation <ArrowUpRight className="size-4" /></Link></motion.div>}
      </AnimatePresence>
    </header>
  );
}
