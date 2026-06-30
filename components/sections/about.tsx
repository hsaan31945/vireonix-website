import { CheckCircle2, Network, ShieldCheck, Workflow } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const focusAreas = ["Startups launching new products", "Businesses modernizing operations", "Organizations strengthening security", "Brands building digital visibility"] as const;

export function About() {
  return (
    <section id="about" className="bg-[#07101d] py-24 text-white sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1728] p-6 sm:p-8">
            <div className="absolute right-0 top-0 size-56 bg-blue-500/[.07] blur-3xl" />
            <div className="relative flex items-center justify-between border-b border-white/10 pb-5"><span className="text-xs font-semibold">Integrated delivery model</span><span className="font-mono text-[9px] uppercase tracking-[.14em] text-blue-300">Vireonix / 2026</span></div>
            <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
              <CapabilityBlock icon={Workflow} title="Strategy" text="Business goals, roadmap, and delivery planning" />
              <CapabilityBlock icon={Network} title="Engineering" text="Web, apps, SaaS, cloud, and custom systems" />
              <CapabilityBlock icon={ShieldCheck} title="Security" text="Protection, testing, reliability, and governance" />
              <CapabilityBlock icon={CheckCircle2} title="Growth" text="Brand, experience, search, and marketing" />
            </div>
            <div className="relative mt-6 rounded-2xl border border-white/10 bg-white/[.03] p-5"><p className="text-sm leading-7 text-slate-300">One team connecting strategy, creative thinking, and technical execution from the first conversation through long-term support.</p></div>
          </div>
        </Reveal>
        <Reveal delay={.08}>
          <span className="section-label">About Vireonix</span>
          <h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.06] tracking-[-.05em] sm:text-5xl lg:text-6xl">A practical technology partner for ambitious organizations.</h2>
          <p className="mt-6 text-base leading-8 text-slate-400">Vireonix provides complete IT and digital solutions for startups, businesses, and organizations. We combine modern engineering, secure practices, strategic thinking, and professional design to solve real business problems.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">{focusAreas.map((item) => <span key={item} className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="size-4 shrink-0 text-blue-400" />{item}</span>)}</div>
          <Button href="/contact" className="mt-9">Talk to Our Team</Button>
        </Reveal>
      </div>
    </section>
  );
}

interface CapabilityBlockProps { icon: typeof Workflow; title: string; text: string; }
function CapabilityBlock({ icon: Icon, title, text }: CapabilityBlockProps) { return <div className="rounded-2xl border border-white/10 bg-[#0e1c2f] p-5"><Icon className="size-5 text-blue-400" /><strong className="mt-8 block text-sm">{title}</strong><p className="mt-2 text-xs leading-5 text-slate-500">{text}</p></div>; }
