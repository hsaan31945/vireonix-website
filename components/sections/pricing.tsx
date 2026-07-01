import { Check } from "lucide-react";
import { pricing } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Pricing() {
  return (
    <Section id="pricing" className="overflow-hidden bg-[#07101d] text-white">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute -right-40 top-20 size-[440px] rounded-full bg-blue-500/[.07] blur-3xl" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading align="center" light eyebrow="Flexible packages" title={<>Professional solutions for every <span className="text-blue-400">stage of growth.</span></>} description="Affordable starting points with the same careful design, modern engineering, and professional delivery standards across every package." />
        <div className="mt-14 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pricing.map((plan, index) => (
            <Reveal key={plan.name} delay={Math.min(index * .035, .18)} className="h-full">
              <article className={`relative flex h-full flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${plan.popular ? "border-blue-400/60 bg-gradient-to-b from-blue-600/[.18] to-[#0d1929] shadow-[0_24px_60px_rgba(37,99,235,.16)]" : "border-white/10 bg-[#0b1728] hover:border-blue-400/25"}`}>
                <div className="flex min-h-7 items-start justify-between gap-3">
                  <h3 className="font-heading text-lg font-semibold tracking-[-.025em] text-white">{plan.name}</h3>
                  {plan.popular && <span className="shrink-0 rounded-full border border-blue-300/20 bg-blue-400/15 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[.14em] text-blue-200">Most Popular</span>}
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-400">{plan.description}</p>
                <div className="mt-6 font-heading text-3xl font-semibold tracking-[-.05em] text-white">{plan.price}</div>
                <div className="my-5 h-px bg-white/10" />
                <ul className="flex-1 space-y-2.5">
                  {plan.features.map((feature) => <li key={feature} className="flex items-start gap-2.5 text-xs leading-5 text-slate-300"><span className={`mt-0.5 grid size-4 shrink-0 place-items-center rounded-full ${plan.popular ? "bg-blue-400/15 text-blue-200" : "bg-white/[.06] text-blue-300"}`}><Check className="size-2.5" /></span>{feature}</li>)}
                </ul>
                <Button href="/contact" variant={plan.popular ? "primary" : "outlineDark"} className="mt-6 w-full">{plan.cta}</Button>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-9 max-w-4xl text-center text-xs leading-6 text-slate-400">Every project is different. Final pricing depends on scope, features, content, integrations, timeline, revisions, and support requirements.</p>
      </div>
    </Section>
  );
}
