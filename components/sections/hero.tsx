"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Code2, Gauge, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import { techPills } from "@/lib/data";

const HeroScene = dynamic(() => import("@/components/three/hero-scene").then((mod) => mod.HeroScene), { ssr: false, loading: () => <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-indigo-100/40 to-violet-200/20" /> });

const trustItems = [
  { icon: Search, label: "SEO-ready" }, { icon: Gauge, label: "Fast performance" }, { icon: Check, label: "Responsive" }, { icon: Sparkles, label: "3D experiences" },
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 24 };
  return (
    <section id="home" className="noise page-grid relative min-h-[900px] overflow-hidden bg-[radial-gradient(circle_at_78%_16%,#ece9ff_0,transparent_31%),radial-gradient(circle_at_10%_22%,#ecf8ff_0,transparent_26%),linear-gradient(180deg,#fafbfe,#f5f6fa)] pb-14 pt-36 sm:pt-44 lg:pt-40">
      <div className="absolute -left-24 top-36 size-56 rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute -right-24 bottom-32 size-72 rounded-full bg-violet/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div initial={initial} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [0.22,1,0.36,1] }} className="relative z-10 text-center lg:text-left">
          <Eyebrow>Digital partner for ambitious brands</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-heading text-[clamp(3rem,5.5vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.065em]">We build premium websites that <span className="gradient-text">turn visitors into clients.</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg lg:mx-0">Vireonix helps businesses grow with modern web design, high-performance development, SEO, branding, and conversion-focused digital experiences.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"><Button href="/contact">Book a Free Consultation</Button><Button href="/services" variant="secondary">View Our Services</Button></div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 lg:justify-start">
            {trustItems.map(({ icon: Icon, label }) => <span key={label} className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink/60"><Icon className="size-3.5 text-accent" />{label}</span>)}
          </div>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3 py-2 text-[10px] font-semibold text-muted shadow-sm backdrop-blur"><Code2 className="size-3.5 text-accent" /> Built with {techPills.join(" · ")}</div>
        </motion.div>

        <motion.div initial={reduceMotion ? false : { opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .12, duration: .9 }} className="relative mx-auto h-[500px] w-full max-w-[620px] sm:h-[580px]">
          <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-white via-indigo-100/50 to-violet-200/30 shadow-[0_50px_120px_rgba(72,57,168,.18)] blur-[1px]" />
          <div className="absolute inset-0 z-10"><HeroScene /></div>
          <div className="glass absolute left-[4%] top-[20%] z-20 w-[72%] -rotate-2 rounded-[26px] p-5 sm:p-6">
            <div className="flex items-center gap-2 border-b border-line/70 pb-4 text-[10px] font-semibold text-muted"><span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-accent to-violet text-white">V</span> Growth overview <span className="ml-auto rounded-full bg-emerald-50 px-2 py-1 text-[8px] text-emerald-700">● Live</span></div>
            <div className="mt-5 flex items-end justify-between"><span className="text-[10px] text-muted">Digital impact</span><strong className="font-mono text-2xl tracking-[-.06em]">+184%</strong></div>
            <svg className="mt-2 h-32 w-full overflow-visible" viewBox="0 0 420 140" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6b5cff" stopOpacity=".42"/><stop offset="1" stopColor="#6b5cff" stopOpacity="0"/></linearGradient></defs><path d="M0 125C48 116 52 88 96 99c48 11 58-27 104-20 49 8 59-40 108-29 45 10 60-32 112-35v125H0Z" fill="url(#heroArea)"/><path d="M0 125C48 116 52 88 96 99c48 11 58-27 104-20 49 8 59-40 108-29 45 10 60-32 112-35" fill="none" stroke="#6859f0" strokeWidth="3"/></svg>
          </div>
          <motion.div animate={reduceMotion ? undefined : { y: [0,-10,0] }} transition={{ repeat: Infinity, duration: 4.5 }} className="glass absolute bottom-[12%] left-0 z-30 rounded-2xl px-4 py-3"><span className="text-[9px] text-muted">Conversion ready</span><strong className="mt-1 block font-mono text-sm">4.8% <em className="text-[8px] not-italic text-emerald-600">+32%</em></strong></motion.div>
          <motion.div animate={reduceMotion ? undefined : { y: [0,9,0] }} transition={{ repeat: Infinity, duration: 5.2, delay: .5 }} className="glass absolute right-0 top-[35%] z-30 flex items-center gap-2 rounded-2xl px-4 py-3"><span className="grid size-8 place-items-center rounded-xl bg-emerald-50 text-emerald-600"><Check className="size-4" /></span><span><strong className="block text-xs">SEO-ready</strong><small className="text-[8px] text-muted">Built for visibility</small></span></motion.div>
        </motion.div>
      </div>
      <div className="relative mx-auto mt-8 grid max-w-[1180px] grid-cols-2 gap-y-6 border-t border-line px-5 pt-8 sm:px-8 lg:grid-cols-4">
        {[['High-converting','Website strategy'],['Fast loading','Performance first'],['SEO-ready','Search foundation'],['Modern stack','Built to scale']].map(([value,label], index)=><div key={value} className={`border-line px-4 ${index % 2 ? 'border-l' : ''} lg:border-l ${index===0?'lg:border-l-0':''}`}><strong className="block font-heading text-lg tracking-[-.04em] sm:text-xl">{value}</strong><span className="mt-1 block text-[10px] uppercase tracking-[.12em] text-muted">{label}</span></div>)}
      </div>
    </section>
  );
}
