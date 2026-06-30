import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, Layers3, MoveRight, RefreshCw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";

const paths = [
  { number: "01", icon: Compass, title: "We need a digital strategy", text: "You know where the business should go, but need the right technology, channels, and roadmap to get there.", link: "/process", label: "Plan the next move" },
  { number: "02", icon: RefreshCw, title: "We need to grow our presence", text: "Your brand needs stronger design, sharper marketing, better visibility, or a more credible digital experience.", link: "/services", label: "Explore growth solutions" },
  { number: "03", icon: Layers3, title: "We need to build securely", text: "You need a website, application, platform, or cybersecurity solution engineered for today and ready to scale.", link: "/contact", label: "Discuss your project" },
] as const;

const principles = ["Start with the business goal", "Connect creative and technical thinking", "Build security into the foundation", "Design every solution to scale"] as const;

export function HomeOverview() {
  return (
    <>
      <section id="find-your-path" className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid gap-8 border-b border-line pb-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <Eyebrow>Choose your starting point</Eyebrow>
            <h2 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.05] tracking-[-.055em] sm:text-5xl lg:text-6xl">Different challenges. One connected partner for <span className="text-ink/35">digital progress.</span></h2>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {paths.map(({ number, icon: Icon, title, text, link, label }) => (
              <Link key={number} href={link} className="group flex min-h-[360px] flex-col rounded-[2rem] border border-line bg-canvas p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-white hover:shadow-[0_25px_70px_rgba(31,35,75,.1)] sm:p-8">
                <div className="flex items-center justify-between"><span className="font-mono text-xs text-muted">/{number}</span><span className="grid size-12 place-items-center rounded-2xl bg-white text-accent shadow-sm transition group-hover:bg-ink group-hover:text-white"><Icon className="size-5" /></span></div>
                <h3 className="mt-16 max-w-xs font-heading text-3xl font-semibold leading-tight tracking-[-.045em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
                <span className="mt-auto flex items-center justify-between border-t border-line pt-5 text-xs font-bold">{label}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#111321] py-24 text-white sm:py-32">
        <div className="mx-auto grid max-w-[1180px] gap-16 px-5 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <Eyebrow light>Our point of view</Eyebrow>
            <h2 className="mt-6 font-heading text-5xl font-semibold leading-[.98] tracking-[-.06em] sm:text-6xl">Technology works better when it works together.</h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-white/55">Development, security, design, brand, search, and marketing should reinforce one another—not operate as disconnected tasks.</p>
            <Button href="/process" variant="light" className="mt-8">See how we think</Button>
          </div>
          <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[.04] p-7 sm:p-10">
            <Sparkles className="absolute right-7 top-7 size-6 text-cyan" />
            <p className="max-w-md font-heading text-2xl font-medium leading-snug tracking-[-.035em] text-white/80">Our filter for every strategic, visual, and technical decision:</p>
            <div className="mt-8">
              {principles.map((principle, index) => <div key={principle} className="flex items-center gap-5 border-t border-white/10 py-5"><span className="font-mono text-[10px] text-indigo-300">0{index + 1}</span><strong className="text-sm font-medium">{principle}</strong><MoveRight className="ml-auto size-4 text-white/25" /></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid gap-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_80%_20%,rgba(122,88,239,.20),transparent_25%),linear-gradient(135deg,#eef1ff,#f7f7fb_58%,#eafafa)] p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:p-16">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[.2em] text-accent">The next useful conversation</span>
              <h2 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-[1.03] tracking-[-.055em] sm:text-6xl">Bring us the goal—not a perfectly polished brief.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">We’ll help identify the right combination of technology, creative thinking, and digital strategy to move your business forward.</p>
            </div>
            <Link href="/contact" className="group grid size-24 place-items-center rounded-full bg-ink text-white shadow-xl transition hover:scale-105 sm:size-28" aria-label="Start a conversation"><ArrowUpRight className="size-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
