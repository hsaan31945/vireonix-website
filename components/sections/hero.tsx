import { Activity, ArrowDown, CheckCircle2, Code2, Database, LockKeyhole, ServerCog } from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = ["Web & mobile", "AI & automation", "Cybersecurity", "Cloud & software"] as const;

export function Hero() {
  return (
    <section id="home" className="tech-grid relative overflow-hidden bg-[#07101d] pb-20 pt-32 text-white sm:pt-40 lg:min-h-[860px] lg:pb-24 lg:pt-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      <div className="absolute -right-48 top-16 size-[520px] rounded-full bg-blue-600/[.08] blur-[100px]" />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.04fr_.96fr] lg:gap-14">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/15 bg-blue-400/[.06] px-3 py-2 text-[11px] font-semibold uppercase tracking-[.16em] text-blue-200">
            <span className="size-1.5 rounded-full bg-blue-400" />
            IT & digital solutions company
          </div>
          <h1 className="mt-7 max-w-3xl font-heading text-[clamp(3.25rem,6.3vw,5.75rem)] font-semibold leading-[.96] tracking-[-.065em]">
            Smart IT & Digital Solutions for <span className="text-blue-400">Modern Businesses</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Vireonix helps businesses build, secure, and grow their digital presence through web development, apps, AI/ML, cybersecurity, SEO, marketing, design, and custom software solutions.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Get a Free Consultation</Button>
            <Button href="#services" variant="outlineDark">View Services</Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6">
            {capabilities.map((item) => <span key={item} className="inline-flex items-center gap-2 text-xs font-medium text-slate-400"><CheckCircle2 className="size-3.5 text-blue-400" />{item}</span>)}
          </div>
          <a href="#services" className="mt-10 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white"><ArrowDown className="size-4" /> Explore our capabilities</a>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -inset-8 rounded-full bg-blue-500/[.06] blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1728] shadow-[0_30px_80px_rgba(0,0,0,.35)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-slate-600" /><span className="size-2 rounded-full bg-slate-600" /><span className="size-2 rounded-full bg-blue-500" /></div>
              <span className="font-mono text-[9px] uppercase tracking-[.16em] text-slate-500">Digital operations overview</span>
            </div>
            <div className="grid gap-4 p-5 sm:p-7">
              <div className="rounded-2xl border border-white/10 bg-[#0e1c2f] p-5">
                <div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-300">Technology foundation</span><span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-400"><i className="size-1.5 rounded-full bg-emerald-400" /> Operational</span></div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <SystemMetric icon={ServerCog} label="Systems" value="Scalable" />
                  <SystemMetric icon={LockKeyhole} label="Security" value="Protected" />
                  <SystemMetric icon={Activity} label="Performance" value="Optimized" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#0e1c2f] p-5"><Code2 className="size-5 text-blue-400" /><strong className="mt-8 block text-sm">Product engineering</strong><p className="mt-2 text-xs leading-5 text-slate-500">Web, mobile, SaaS, and custom software built around your operations.</p></div>
                <div className="rounded-2xl border border-white/10 bg-[#0e1c2f] p-5"><Database className="size-5 text-blue-400" /><strong className="mt-8 block text-sm">Digital growth</strong><p className="mt-2 text-xs leading-5 text-slate-500">Strategy, search, marketing, and design working as one system.</p></div>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-blue-400/20 bg-blue-500/[.08] px-5 py-4"><div><span className="block text-xs font-semibold">One accountable technology partner</span><small className="mt-1 block text-[10px] text-slate-400">From planning through ongoing support</small></div><span className="grid size-9 place-items-center rounded-xl bg-blue-500 text-white"><CheckCircle2 className="size-4" /></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SystemMetricProps {
  icon: typeof Activity;
  label: string;
  value: string;
}

function SystemMetric({ icon: Icon, label, value }: SystemMetricProps) {
  return <div><Icon className="size-4 text-blue-400" /><span className="mt-4 block text-[9px] uppercase tracking-[.12em] text-slate-500">{label}</span><strong className="mt-1 block text-[11px] font-medium text-slate-200">{value}</strong></div>;
}
