import Link from "next/link";
import { ArrowRight, CircleHelp, Coins, MessageSquareText, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const processPreview = ["Discovery", "Planning", "Design & build", "Testing & launch"] as const;
const pricingPreview = [
  { name: "Landing Page", price: "From $299" },
  { name: "Growth Website", price: "From $1.5k" },
  { name: "SEO & Digital Growth", price: "From $250/mo" },
] as const;

export function HomePathways() {
  return (
    <>
      <section className="bg-[#091321] py-24 text-white sm:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <span className="section-label">Process overview</span>
            <h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.06] tracking-[-.05em] sm:text-5xl">A clear route from idea to launch.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">The homepage gives you the shape of our process. The complete process page explains each stage, decision point, and handover in detail.</p>
            <Button href="/process" variant="outlineDark" className="mt-7">Explore Our Process</Button>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {processPreview.map((step, index) => <li key={step} className="flex min-h-24 items-end justify-between rounded-2xl border border-white/10 bg-[#0d1929] p-5"><strong className="text-sm">{step}</strong><span className="font-mono text-[10px] text-blue-400">0{index + 1}</span></li>)}
          </ol>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div className="order-2 grid gap-3 sm:grid-cols-3 lg:order-1 lg:grid-cols-1">
            {pricingPreview.map((item) => <Link key={item.name} href="/pricing" className="group flex items-center justify-between rounded-2xl border border-line bg-canvas p-5 transition hover:border-accent/25 hover:bg-white"><span className="text-sm font-semibold">{item.name}</span><span className="text-sm font-bold text-accent">{item.price}</span></Link>)}
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.18em] text-accent"><Coins className="size-4" />Pricing preview</span>
            <h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.06] tracking-[-.05em] sm:text-5xl">Flexible pricing without hiding the starting point.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted">See all eight website, SEO, branding, and software packages—with inclusions, starting prices, and the factors that affect final scope.</p>
            <Button href="/pricing" variant="dark" className="mt-7">View All Pricing</Button>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f1f6] py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-5 px-5 sm:px-8 lg:grid-cols-2">
          <PreviewCard icon={MessageSquareText} eyebrow="Client references" title="Verify the work, not invented praise." text="Review live projects and learn how Vireonix handles references without fabricated testimonials, ratings, or outcomes." href="/testimonials" label="View references and evidence" />
          <PreviewCard icon={CircleHelp} eyebrow="Common questions" title="Get the important answers first." text="Read clear answers about services, location, project quotes, AI/ML, cybersecurity, SEO, websites, and mobile apps." href="/faq" label="Read all FAQs" />
        </div>
      </section>
    </>
  );
}

function PreviewCard({ icon: Icon, eyebrow, title, text, href, label }: { icon: typeof Workflow; eyebrow: string; title: string; text: string; href: string; label: string }) {
  return (
    <article className="flex min-h-80 flex-col rounded-[28px] border border-line bg-white p-7 sm:p-9">
      <span className="grid size-11 place-items-center rounded-xl bg-indigo-50 text-accent"><Icon className="size-5" /></span>
      <span className="mt-8 text-[10px] font-bold uppercase tracking-[.17em] text-accent">{eyebrow}</span>
      <h2 className="mt-3 max-w-md font-heading text-3xl font-semibold leading-tight tracking-[-.04em]">{title}</h2>
      <p className="mt-4 max-w-lg text-sm leading-7 text-muted">{text}</p>
      <Link href={href} className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-bold text-accent">{label}<ArrowRight className="size-4" /></Link>
    </article>
  );
}
