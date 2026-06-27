import { benefits } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Benefits() {
  return (
    <Section className="noise overflow-hidden bg-ink text-white">
      <div className="absolute -bottom-52 -left-48 size-[500px] rounded-full bg-violet/25 blur-[110px]" />
      <div className="relative mx-auto grid max-w-[1180px] gap-14 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading light eyebrow="Why Vireonix" title={<>Why businesses <span className="bg-gradient-to-r from-indigo-300 to-cyan bg-clip-text text-transparent">choose us.</span></>} description="We combine visual craft, technical depth, and growth thinking in one focused senior team." />
          <Button href="#contact" variant="light" className="mt-8">Work With Vireonix</Button>
          <div className="mt-12 border-t border-white/10 pt-6"><p className="text-sm italic leading-7 text-white/65">“A rare combination of sharp strategic thinking and obsessive attention to detail.”</p><span className="mt-4 block text-[10px] font-bold uppercase tracking-[.15em] text-white/35">Founder · Growth company</span></div>
        </Reveal>
        <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[.025] sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * .03}><article className="group min-h-[210px] border-b border-white/10 p-7 transition hover:bg-white/[.04] sm:border-r sm:[&:nth-child(2n)]:border-r-0"><div className="flex items-start justify-between"><span className="font-mono text-[9px] text-white/35">0{index + 1}</span><span className="grid size-9 place-items-center rounded-xl border border-white/10 text-indigo-300"><Icon className="size-4" /></span></div><h3 className="mt-9 font-heading text-base font-semibold">{title}</h3><p className="mt-2 text-xs leading-6 text-white/50">{text}</p></article></Reveal>)}
        </div>
      </div>
    </Section>
  );
}
