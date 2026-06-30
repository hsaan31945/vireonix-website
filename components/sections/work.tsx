import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

const imagePositions = {
  blue: "origin-[8%_72%] scale-[1.24]",
  slate: "origin-[50%_68%] scale-[1.24]",
  steel: "origin-[8%_64%] scale-[1.24]",
} as const;

export function Work() {
  return (
    <section id="work" className="bg-[#07101d] py-24 text-white sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end"><div><span className="section-label">Selected work</span><h2 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-[1.06] tracking-[-.05em] sm:text-5xl lg:text-6xl">Digital products made for real businesses.</h2></div><p className="max-w-md text-sm leading-7 text-slate-400">A selection of client platforms shaped around clarity, usability, and dependable technical execution.</p></div>
        <div className="mt-10 grid auto-rows-fr gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * .06} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1728] transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 lg:min-h-[460px]">
                <div className="relative h-52 shrink-0 overflow-hidden border-b border-white/10 bg-[#0d1929] sm:h-56">
                  <Image src={project.image} alt={`${project.title} website homepage`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className={`object-cover transition duration-500 group-hover:scale-[1.025] ${imagePositions[project.theme]}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1728]/55 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-lg border border-white/15 bg-[#07101d]/75 px-2.5 py-1.5 font-mono text-[9px] text-slate-300 backdrop-blur-md">{project.url.replace("https://", "")}</span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6"><span className="text-[10px] font-semibold uppercase tracking-[.14em] text-blue-300">{project.category}</span><h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-.035em]">{project.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p><div className="mt-auto flex items-end justify-between gap-4 pt-6"><div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] text-slate-400">{tag}</span>)}</div><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`} className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-white transition group-hover:bg-blue-500"><ArrowUpRight className="size-4" /></a></div></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
