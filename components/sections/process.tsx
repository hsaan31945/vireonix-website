import { processSteps } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Process() {
  return (
    <section id="process" className="bg-[#091321] py-24 text-white sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><span className="section-label">How we work</span><h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.06] tracking-[-.05em] sm:text-5xl lg:text-6xl">A clear process from idea to ongoing support.</h2></div><p className="max-w-xl text-sm leading-7 text-slate-400 lg:justify-self-end">Structured enough to protect quality and timelines, flexible enough to adapt to your project and organization.</p></div>
        <div className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => <Reveal key={step.number} delay={index * .035} className="h-full"><article className="h-full min-h-[190px] rounded-2xl border border-white/10 bg-[#0d1929] p-5 sm:p-6"><span className="font-mono text-[11px] font-semibold text-blue-400">{step.number}</span><h3 className="mt-7 text-lg font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}
