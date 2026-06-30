"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Asterisk, Code2, Megaphone, Palette, Search, ShieldCheck, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  { icon: Code2, label: "Web" },
  { icon: Smartphone, label: "Apps" },
  { icon: ShieldCheck, label: "Security" },
  { icon: Search, label: "SEO" },
  { icon: Megaphone, label: "Marketing" },
  { icon: Palette, label: "Branding" },
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="noise page-grid relative min-h-[880px] overflow-hidden bg-[#f7f8fb] pb-16 pt-32 sm:pt-40 lg:flex lg:min-h-[920px] lg:items-center lg:pb-24 lg:pt-28">
      <div className="absolute left-[8%] top-[16%] size-64 rounded-full bg-cyan/15 blur-3xl" />
      <div className="absolute right-[-8%] top-[5%] size-[34rem] rounded-full bg-violet/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-8">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-3 rounded-full border border-line bg-white/75 py-1.5 pl-2 pr-4 text-[11px] font-bold uppercase tracking-[.16em] text-ink/65 shadow-sm backdrop-blur">
              <span className="grid size-7 place-items-center rounded-full bg-ink text-white"><Asterisk className="size-3.5" /></span>
              IT & digital solutions company
            </div>
            <h1 className="mt-7 max-w-[760px] font-heading text-[clamp(3.6rem,7.4vw,6.7rem)] font-semibold leading-[.91] tracking-[-.078em] text-ink">
              Digital solutions built for your <span className="gradient-text">next move.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">Vireonix brings technology, creativity, and strategy together to help startups, brands, and organizations build securely, grow confidently, and scale intelligently.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Tell us what you’re building</Button>
              <Button href="/work" variant="secondary">See what good looks like</Button>
            </div>
            <a href="#find-your-path" className="mt-12 inline-flex items-center gap-3 text-xs font-bold text-ink/55 transition hover:text-ink">
              <span className="grid size-9 place-items-center rounded-full border border-line bg-white"><ArrowDown className="size-3.5" /></span>
              Find your starting point
            </a>
          </motion.div>

          <motion.div initial={reduceMotion ? false : { opacity: 0, scale: .96, rotate: 1 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .12, duration: .85, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto h-[510px] w-full max-w-[520px]">
            <div className="absolute inset-3 rounded-[3rem] bg-gradient-to-br from-[#dfe5ff] via-[#eee9ff] to-[#d9f5f5] shadow-[0_50px_120px_rgba(48,45,108,.18)]" />
            <div className="absolute inset-[7%] overflow-hidden rounded-[2.4rem] border border-white/70 bg-[#101222] p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-[10px] font-bold uppercase tracking-[.18em] text-white/45">Vireonix capabilities</span>
                <span className="flex items-center gap-2 text-[10px] font-bold text-emerald-300"><i className="size-1.5 rounded-full bg-emerald-300" /> Built to scale</span>
              </div>
              <div className="mt-7">
                <p className="text-[10px] uppercase tracking-[.18em] text-indigo-300">One partner. Connected expertise.</p>
                <p className="mt-3 max-w-sm font-heading text-[2.15rem] font-semibold leading-[1.04] tracking-[-.055em] text-white">Everything your digital presence needs to move forward.</p>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-2.5">
                {capabilities.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.05] px-3 py-3 text-xs font-medium text-white/75">
                    <span className="grid size-7 place-items-center rounded-lg bg-white/10 text-indigo-200"><Icon className="size-3.5" /></span>{label}
                  </div>
                ))}
              </div>
            </div>
            <motion.div animate={reduceMotion ? undefined : { x: [0, 7, 0], y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="glass absolute -right-2 top-[21%] grid size-14 place-items-center rounded-2xl text-accent sm:-right-6"><ShieldCheck className="size-5" /></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
