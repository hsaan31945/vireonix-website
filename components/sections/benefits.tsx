import { benefits } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Benefits() {
  return (
    <section className="border-y border-white/10 bg-[#0a1524] py-24 text-white sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="max-w-3xl"><span className="section-label">Why choose Vireonix</span><h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.06] tracking-[-.05em] sm:text-5xl lg:text-6xl">Built for business outcomes—not technical theatre.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">Professional delivery, clear communication, and thoughtful technology choices at every stage.</p></div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * .04}><article className="min-h-[220px] bg-[#0b1728] p-7 sm:p-8"><div className="flex items-center justify-between"><Icon className="size-5 text-blue-400" /><span className="font-mono text-[9px] text-slate-600">0{index + 1}</span></div><h3 className="mt-10 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}
