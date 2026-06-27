import { processSteps } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Process() {
  return (
    <Section id="process">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHeading align="center" eyebrow="How it works" title={<>Our process, from idea <span className="gradient-text">to impact.</span></>} description="A clear, collaborative system that keeps momentum high and surprises low." />
        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 before:absolute before:left-[10%] before:right-[10%] before:top-10 before:hidden before:border-t before:border-dashed before:border-line lg:before:block">
          {processSteps.map((step, index) => <Reveal key={step.number} delay={index * .06}><article className="group relative z-10 text-center"><div className="mx-auto grid size-20 place-items-center rounded-full border border-line bg-white font-mono text-xs font-bold shadow-[0_12px_30px_rgba(40,41,76,.08)] transition duration-300 group-hover:-translate-y-1 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-violet group-hover:text-white group-hover:shadow-[0_16px_35px_rgba(86,76,217,.28)]">{step.number}</div><h3 className="mt-6 font-heading text-lg font-semibold tracking-[-.04em]">{step.title}</h3><p className="mx-auto mt-3 max-w-64 text-sm leading-6 text-muted">{step.text}</p></article></Reveal>)}
        </div>
      </div>
    </Section>
  );
}
