import { Code2, Palette, Search } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

const team = [{icon:Code2,role:"Founder / Web Developer"},{icon:Palette,role:"UI/UX Designer"},{icon:Search,role:"SEO Strategist"}] as const;

export function About() {
  return (
    <Section id="about">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal><div className="page-grid relative h-[470px] overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,#fff,#ddddef_55%,#cbd0e4)]"><div className="absolute left-1/2 top-1/2 size-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_25%,#fff,#9ca1f4_25%,#6556d4_62%,#352976)] shadow-[inset_-25px_-25px_45px_rgba(20,12,69,.3),0_45px_70px_rgba(54,44,138,.32)]"/><div className="absolute left-1/2 top-1/2 h-40 w-[85%] -translate-x-1/2 -translate-y-1/2 -rotate-[24deg] rounded-[50%] border-2 border-white/70"/><div className="glass absolute left-1/2 top-1/2 w-52 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 text-center"><Logo/><strong className="mt-5 block font-heading text-lg leading-6">Ideas become<br/>momentum here.</strong><small className="mt-3 block text-[8px] uppercase tracking-[.15em] text-muted">Vireonix studio</small></div>{team.map(({role},i)=><span key={role} className={`glass absolute rounded-full px-3 py-2 text-[9px] font-bold ${i===0?'left-[7%] top-[18%]':i===1?'right-[8%] top-[25%]':'bottom-[12%] left-[12%]'}`}>{role}</span>)}</div></Reveal>
        <Reveal delay={.1}><SectionHeading eyebrow="About Vireonix" title={<>Built to help brands <span className="gradient-text">stand out online.</span></>} description="Vireonix combines creative design, modern development, SEO strategy, and technical execution to help businesses build a stronger digital presence."/><p className="mt-5 text-sm leading-7 text-muted">Our goal is simple: create websites that look premium, perform fast, and help convert visitors into real clients. We stay close to the work, communicate clearly, and build partnerships designed to last.</p><div className="mt-8 grid gap-3 sm:grid-cols-3">{team.map(({icon:Icon,role})=><div key={role} className="rounded-2xl border border-line bg-white p-4"><Icon className="size-4 text-accent"/><span className="mt-4 block text-[10px] font-bold leading-4">{role}</span></div>)}</div></Reveal>
      </div>
    </Section>
  );
}
