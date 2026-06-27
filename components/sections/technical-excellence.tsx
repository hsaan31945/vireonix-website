import { Check, Code2 } from "lucide-react";
import { stack } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function TechnicalExcellence() {
  return (
    <Section className="overflow-hidden bg-white">
      <div className="absolute right-0 top-0 size-96 bg-[radial-gradient(circle,#ddd9ff_0,transparent_67%)] opacity-50" />
      <div className="relative mx-auto grid max-w-[1180px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading eyebrow="Technical excellence" title={<>Built with a modern <span className="gradient-text">technical foundation.</span></>} description="We do not just create good-looking websites. We build scalable, maintainable, and performance-focused digital systems using a professional modern stack." />
          <div className="mt-8 space-y-3">
            {["Strict TypeScript and component contracts", "Server-rendered content for stronger SEO", "Lazily loaded 3D and interaction layers", "Accessible, responsive design system"].map((item) => <p key={item} className="flex items-center gap-3 text-sm text-ink/70"><span className="grid size-5 place-items-center rounded-full bg-indigo-50 text-accent"><Check className="size-3" /></span>{item}</p>)}
          </div>
        </Reveal>
        <Reveal delay={.12}>
          <div className="relative rounded-[30px] border border-line bg-canvas p-5 shadow-[0_30px_80px_rgba(39,39,80,.1)] sm:p-8">
            <div className="mb-5 flex items-center gap-2 border-b border-line pb-5 text-xs font-bold"><span className="grid size-8 place-items-center rounded-lg bg-ink text-white"><Code2 className="size-4" /></span> Vireonix production stack <span className="ml-auto font-mono text-[9px] text-emerald-600">● SYSTEM READY</span></div>
            <div className="grid grid-cols-2 gap-3">
              {stack.map(({ icon: Icon, name, detail }) => <div key={name} className="rounded-2xl border border-line bg-white p-4 transition hover:-translate-y-1 hover:border-accent/20 hover:shadow-lg"><Icon className="size-5 text-accent" strokeWidth={1.7} /><strong className="mt-5 block text-sm tracking-[-.02em]">{name}</strong><span className="mt-1 block font-mono text-[9px] text-muted">{detail}</span></div>)}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
