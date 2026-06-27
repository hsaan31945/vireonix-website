"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-line/80 bg-canvas/85 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <a href="#home" aria-label="Vireonix home"><Logo /></a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href} className="text-[13px] font-semibold text-ink/65 transition hover:text-ink">{link.label}</a>)}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="#contact" className="text-[13px] font-bold text-ink/70 hover:text-ink">Get a Proposal</a>
          <a href="#contact" className="group inline-flex h-11 items-center gap-2 rounded-xl bg-ink px-4 text-[13px] font-bold text-white shadow-lg transition hover:-translate-y-0.5">Book a Call <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
        </div>
        <button type="button" className="grid size-11 place-items-center rounded-full bg-ink text-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="fixed inset-x-0 top-[76px] h-[calc(100dvh-76px)] bg-canvas/98 px-5 pb-8 pt-5 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-line py-4 font-heading text-xl font-semibold">{link.label}</a>)}
            </nav>
            <a href="#contact" onClick={() => setOpen(false)} className="mt-6 flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-violet font-bold text-white">Get a Proposal <ArrowUpRight className="size-4" /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
