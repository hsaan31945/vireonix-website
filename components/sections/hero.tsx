import { ArrowDown, CheckCircle2 } from "lucide-react";
import { Hero3DBackground } from "@/components/three/hero-3d-background";
import { Button } from "@/components/ui/button";

const capabilities = ["Web & mobile", "AI & automation", "Cybersecurity", "Cloud & software"] as const;

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[860px] items-center overflow-hidden bg-[#07101d] pb-20 pt-32 text-white sm:pt-40 lg:pb-24 lg:pt-36">
      <Hero3DBackground />
      <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      <div className="relative z-20 mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-[690px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/15 bg-blue-400/[.06] px-3 py-2 text-[11px] font-semibold uppercase tracking-[.16em] text-blue-200 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-blue-400" />
            IT & digital solutions brand
          </div>
          <h1 className="mt-7 max-w-3xl font-heading text-[clamp(3.25rem,6.3vw,5.75rem)] font-semibold leading-[.96] tracking-[-.065em]">
            Smart IT & Digital Solutions for <span className="text-blue-400">Modern Businesses</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Vireonix helps businesses build, secure, and grow their digital presence through web development, apps, AI/ML, cybersecurity, SEO, marketing, design, and custom software solutions.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Get a Free Consultation</Button>
            <Button href="#services" variant="outlineDark">View Services</Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6">
            {capabilities.map((item) => <span key={item} className="inline-flex items-center gap-2 text-xs font-medium text-slate-400"><CheckCircle2 className="size-3.5 text-blue-400" />{item}</span>)}
          </div>
          <a href="#services" className="mt-10 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white"><ArrowDown className="size-4" /> Explore our capabilities</a>
        </div>
      </div>
    </section>
  );
}
