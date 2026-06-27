import { Check } from "lucide-react";
import { pricing } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Pricing() {
  return (
    <Section id="pricing" className="bg-white">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHeading align="center" eyebrow="Simple packages" title={<>Built for growing <span className="gradient-text">brands.</span></>} description="Clear starting points that can be shaped around your exact scope, timeline, and growth goals." />
        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {pricing.map((plan, index) => <Reveal key={plan.name} delay={index * .06}><article className={`relative h-full rounded-[26px] border p-7 transition duration-300 hover:-translate-y-2 ${plan.popular ? "border-ink bg-ink text-white shadow-[0_30px_70px_rgba(28,28,57,.2)]" : "border-line bg-canvas"}`}>{plan.popular && <span className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-1 text-[8px] font-bold uppercase tracking-[.15em] text-indigo-200">Most Popular</span>}<h3 className="font-heading text-xl font-semibold">{plan.name}</h3><p className={`mt-3 min-h-12 text-xs leading-6 ${plan.popular ? "text-white/55" : "text-muted"}`}>{plan.description}</p><div className="mt-6 font-heading text-4xl font-semibold tracking-[-.06em]">{plan.price}</div><div className={`my-6 h-px ${plan.popular ? "bg-white/10" : "bg-line"}`}/><ul className="min-h-[245px] space-y-3">{plan.features.map(feature=><li key={feature} className={`flex items-start gap-2.5 text-xs ${plan.popular ? "text-white/75" : "text-ink/70"}`}><span className={`mt-px grid size-4 shrink-0 place-items-center rounded-full ${plan.popular ? "bg-white/10 text-indigo-200" : "bg-indigo-50 text-accent"}`}><Check className="size-2.5" /></span>{feature}</li>)}</ul><Button href="#contact" variant={plan.popular ? "primary" : "dark"} className="mt-3 w-full">{plan.cta}</Button></article></Reveal>)}
        </div>
        <p className="mt-7 text-center text-xs text-muted">Need something more specific? <a href="#contact" className="font-bold text-accent">Let’s shape a custom scope together →</a></p>
      </div>
    </Section>
  );
}
