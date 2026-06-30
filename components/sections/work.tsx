import { ArrowUpRight, Globe2 } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

const projectStyles = {
  blue: "from-blue-500/20 to-slate-950",
  slate: "from-slate-400/15 to-slate-950",
  steel: "from-cyan-500/10 to-slate-950",
} as const;

export function Work() {
  return (
    <section id="work" className="bg-[#07101d] py-24 text-white sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end"><div><span className="section-label">Selected work</span><h2 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-[1.06] tracking-[-.05em] sm:text-5xl lg:text-6xl">Digital products made for real businesses.</h2></div><p className="max-w-md text-sm leading-7 text-slate-400">A selection of client platforms shaped around clarity, usability, and dependable technical execution.</p></div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * .06}>
              <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1728] transition duration-300 hover:-translate-y-1 hover:border-blue-400/25">
                <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${projectStyles[project.theme]}`}>
                  <div className="absolute inset-x-7 top-8 overflow-hidden rounded-xl border border-white/10 bg-[#0d1929] shadow-2xl">
                    <div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-3"><i className="size-1.5 rounded-full bg-slate-600" /><i className="size-1.5 rounded-full bg-slate-600" /><i className="size-1.5 rounded-full bg-blue-500" /><span className="ml-3 font-mono text-[7px] text-slate-500">{project.url.replace("https://", "")}</span></div>
                    <div className="p-5"><div className="h-2 w-16 rounded bg-blue-500/60" /><div className="mt-4 h-7 w-3/4 rounded bg-slate-300/80" /><div className="mt-3 h-2 w-full rounded bg-slate-700" /><div className="mt-2 h-2 w-2/3 rounded bg-slate-700" /><div className="mt-5 grid grid-cols-3 gap-2"><span className="h-12 rounded bg-slate-800" /><span className="h-12 rounded bg-slate-800" /><span className="h-12 rounded bg-slate-800" /></div></div>
                  </div>
                </div>
                <div className="p-6"><span className="text-[10px] font-semibold uppercase tracking-[.14em] text-blue-300">{project.category}</span><h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-.035em]">{project.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p><div className="mt-6 flex items-end justify-between gap-4"><div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] text-slate-400">{tag}</span>)}</div><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`} className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-white transition group-hover:bg-blue-500"><ArrowUpRight className="size-4" /></a></div></div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-3 text-xs text-slate-500"><Globe2 className="size-4" /> More client work and detailed case studies are being prepared.</div>
      </div>
    </section>
  );
}
