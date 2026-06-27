import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Services() {
  return (
    <Section id="services" className="bg-canvas">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end">
          <SectionHeading eyebrow="What we do" title={<>Digital services built <span className="gradient-text">for growth.</span></>} />
          <p className="text-sm leading-7 text-muted lg:pb-1">From strategy to launch, Vireonix creates modern digital experiences that help businesses look professional, perform better, and attract more clients.</p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * .04}>
              <article className="group relative min-h-[290px] overflow-hidden rounded-[24px] border border-line bg-white/80 p-7 transition duration-300 hover:-translate-y-2 hover:border-accent/20 hover:shadow-[0_25px_70px_rgba(38,39,76,.11)]">
                <div className="grid size-14 place-items-center rounded-[17px] bg-gradient-to-br from-indigo-50 to-violet-100 shadow-[inset_0_1px_white,0_10px_22px_rgba(72,65,150,.1)]"><Icon className="size-6 text-accent" strokeWidth={1.7} /></div>
                <h3 className="mt-7 font-heading text-xl font-semibold tracking-[-.04em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
                <a href="#contact" className="absolute bottom-7 left-7 inline-flex items-center gap-2 text-xs font-bold">Learn More <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
                <span className="absolute -right-10 -top-10 size-28 rounded-full bg-violet/10 blur-2xl" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
