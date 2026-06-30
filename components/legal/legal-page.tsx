import Link from "next/link";
import { ArrowUpRight, CalendarDays, Globe2, Mail, MapPin } from "lucide-react";
import type { LegalDocument } from "@/lib/legal-content";

interface LegalPageProps {
  document: LegalDocument;
}

function sectionId(title: string) {
  return title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function LegalPage({ document }: LegalPageProps) {
  return (
    <main id="main" className="min-h-screen bg-[#07101d] text-white">
      <header className="tech-grid border-b border-white/10 px-5 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-44">
        <div className="mx-auto max-w-[1180px]">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 transition hover:text-blue-200">Vireonix <span aria-hidden="true">/</span> Legal</Link>
          <h1 className="mt-6 max-w-4xl font-heading text-5xl font-semibold leading-[1.02] tracking-[-.06em] sm:text-6xl lg:text-7xl">{document.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{document.description}</p>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-3 py-2 text-xs text-slate-400"><CalendarDays className="size-3.5 text-blue-400" />Last updated: June 30, 2026</div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 lg:py-24">
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <OperatorSummary />
          <nav aria-label={`${document.title} table of contents`} className="rounded-2xl border border-white/10 bg-[#0b1728] p-5">
            <strong className="text-xs font-semibold text-slate-200">On this page</strong>
            <ol className="mt-4 space-y-2.5">
              {document.sections.map((section, index) => <li key={section.title}><a href={`#${sectionId(section.title)}`} className="group flex gap-3 text-xs leading-5 text-slate-500 transition hover:text-blue-300"><span className="font-mono text-[9px] text-slate-700 group-hover:text-blue-400">{String(index + 1).padStart(2, "0")}</span>{section.title}</a></li>)}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 rounded-2xl border border-white/10 bg-[#0b1728] px-6 py-3 sm:px-9 lg:px-12">
          {document.sections.map((section, index) => (
            <section key={section.title} id={sectionId(section.title)} className="scroll-mt-28 border-b border-white/10 py-9 last:border-b-0 sm:py-11">
              <div className="flex items-start gap-4"><span className="mt-1 font-mono text-[10px] font-semibold text-blue-400">{String(index + 1).padStart(2, "0")}</span><div className="min-w-0"><h2 className="font-heading text-2xl font-semibold tracking-[-.035em] text-white sm:text-3xl">{section.title}</h2><div className="mt-5 space-y-4">{section.paragraphs?.map((paragraph) => <p key={paragraph} className="text-sm leading-7 text-slate-400 sm:text-[15px] sm:leading-8">{paragraph}</p>)}</div>{section.bullets && <ul className="mt-5 grid gap-3 sm:grid-cols-2">{section.bullets.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-500" />{item}</li>)}</ul>}</div></div>
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}

function OperatorSummary() {
  return (
    <section aria-labelledby="operator-heading" className="rounded-2xl border border-blue-400/20 bg-blue-500/[.06] p-5">
      <span className="text-[9px] font-semibold uppercase tracking-[.16em] text-blue-300">Operator</span>
      <h2 id="operator-heading" className="mt-2 text-lg font-semibold">Vireonix</h2>
      <div className="mt-5 space-y-3 text-xs text-slate-400">
        <span className="flex items-center gap-2"><MapPin className="size-3.5 shrink-0 text-blue-400" />Zurich, Switzerland</span>
        <a href="https://vireonix.dev" className="flex items-center gap-2 transition hover:text-white"><Globe2 className="size-3.5 shrink-0 text-blue-400" />vireonix.dev<ArrowUpRight className="ml-auto size-3" /></a>
        <a href="mailto:contact@vireonix.dev" className="flex items-center gap-2 break-all transition hover:text-white"><Mail className="size-3.5 shrink-0 text-blue-400" />contact@vireonix.dev</a>
      </div>
    </section>
  );
}
