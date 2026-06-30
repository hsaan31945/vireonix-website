import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Services() {
  return (
    <section id="services" className="relative bg-[#091321] py-24 text-white sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_.65fr] lg:items-end">
          <div><span className="section-label">Our services</span><h2 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-[1.06] tracking-[-.05em] sm:text-5xl lg:text-6xl">Complete technology and digital expertise, under one roof.</h2></div>
          <p className="max-w-xl text-sm leading-7 text-slate-400 lg:justify-self-end">From a focused website to complex business software, we bring the right technical and creative capabilities together around your objectives.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={Math.min(index * .03, .18)}>
              <article className="group flex min-h-[285px] flex-col rounded-2xl border border-white/10 bg-[#0d1929] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#0f1d30] sm:p-7">
                <div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[.08] text-blue-400"><Icon className="size-5" strokeWidth={1.8} /></span><span className="font-mono text-[10px] text-slate-600">{String(index + 1).padStart(2, "0")}</span></div>
                <h3 className="mt-8 font-heading text-xl font-semibold tracking-[-.025em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
                <Link href="/contact" className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-semibold text-blue-300">Discuss this service <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
