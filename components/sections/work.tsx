import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

function ProjectMockup({ theme, title }: { theme: string; title: string }) {
  return (
    <div className={`project-${theme} relative h-[300px] overflow-hidden rounded-t-[24px] sm:h-[350px]`} role="img" aria-label={`${title} responsive website interface mockup`}>
      <div className="mock-browser absolute inset-x-[9%] top-[14%] h-[92%] rounded-t-2xl border-[5px] border-white/80 bg-white">
        <div className="flex h-9 items-center gap-1.5 border-b border-line px-3"><i className="size-1.5 rounded-full bg-line"/><i className="size-1.5 rounded-full bg-line"/><i className="size-1.5 rounded-full bg-line"/><span className="mx-auto h-2 w-24 rounded-full bg-line/60" /></div>
        <div className="relative p-[9%]"><div className="h-2 w-24 rounded-full bg-accent/75"/><div className="mt-4 h-12 w-3/4 rounded-md bg-ink"/><div className="mt-4 h-8 w-1/2 bg-[repeating-linear-gradient(to_bottom,#c9cad3_0_3px,transparent_3px_10px)]"/><div className="mt-4 h-6 w-24 rounded-md bg-accent"/><div className="absolute -right-5 top-28 size-36 rounded-full bg-[radial-gradient(circle_at_30%_25%,white,#70d6da_28%,#5649c7_68%)] shadow-2xl"/></div>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <Section id="work" className="bg-[#f0f1f6]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><SectionHeading eyebrow="Portfolio preview" title={<>Selected <span className="gradient-text">work.</span></>} description="Believable digital systems designed around clear business outcomes." /><a href="#contact" className="inline-flex w-fit items-center gap-2 border-b border-ink/25 pb-1 text-sm font-bold">Start your project <ArrowUpRight className="size-4" /></a></div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => <Reveal key={project.title} delay={index * .06}><article className="group overflow-hidden rounded-[24px] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_65px_rgba(39,40,77,.13)]"><ProjectMockup theme={project.theme} title={project.title}/><div className="p-6"><div className="flex items-center justify-between gap-3"><span className="text-[9px] font-bold uppercase tracking-[.15em] text-muted">{project.category}</span><span className="rounded-full bg-indigo-50 px-2.5 py-1 font-mono text-[8px] text-accent">{project.result}</span></div><h3 className="mt-4 font-heading text-2xl font-semibold tracking-[-.05em]">{project.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{project.description}</p><div className="mt-5 flex items-center justify-between"><div className="flex gap-2">{project.tags.map(tag=><span key={tag} className="rounded-full border border-line px-2.5 py-1 text-[8px] text-muted">{tag}</span>)}</div><a href="#contact" aria-label={`View ${project.title} project`} className="grid size-9 place-items-center rounded-full bg-ink text-white transition group-hover:bg-accent"><ArrowUpRight className="size-4" /></a></div></div></article></Reveal>)}
        </div>
      </div>
    </Section>
  );
}
