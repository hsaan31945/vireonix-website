import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-[#f0f1f6]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8"><SectionHeading align="center" eyebrow="Client stories" title={<>What clients <span className="gradient-text">say.</span></>} description="Strong work creates stronger partnerships—and results people are happy to talk about." />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">{testimonials.map((testimonial,index)=><Reveal key={testimonial.name} delay={index*.06}><article className="h-full rounded-[24px] border border-line bg-white/80 p-7"><div className="flex items-center justify-between"><Quote className="size-8 fill-accent/10 text-accent"/><span className="flex gap-0.5 text-violet">{Array.from({length:5},(_,i)=><Star key={i} className="size-3 fill-current"/>)}</span></div><blockquote className="mt-6 min-h-32 text-[15px] leading-7 text-ink/80">“{testimonial.quote}”</blockquote><div className="mt-7 flex items-center gap-3 border-t border-line pt-5"><span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-accent to-violet text-[10px] font-bold text-white">{testimonial.initials}</span><strong className="text-xs">{testimonial.name}<small className="mt-1 block font-normal text-muted">{testimonial.role}</small></strong></div></article></Reveal>)}</div>
      </div>
    </Section>
  );
}
