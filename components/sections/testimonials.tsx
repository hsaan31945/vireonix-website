import Link from "next/link";
import { ArrowUpRight, ExternalLink, MessageSquareText, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const evidenceOptions = [
  { icon: ExternalLink, title: "Review live project work", text: "Visit the published websites in our work section and assess the experience directly.", href: "/work", label: "View selected work" },
  { icon: MessageSquareText, title: "Ask a specific question", text: "Tell us what you need to validate about approach, delivery, or technical capability.", href: "/contact", label: "Contact Vireonix" },
  { icon: ShieldCheck, title: "References with permission", text: "Where an appropriate client has explicitly agreed, a relevant reference can be discussed privately.", href: "/contact", label: "Request a reference" },
] as const;

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-[#f0f1f6]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHeading align="center" eyebrow="Client references" title={<>Transparent proof, <span className="gradient-text">not invented praise.</span></>} description="Vireonix does not publish fabricated testimonials, star ratings, or client results. We prefer verifiable work and references shared only with permission." />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {evidenceOptions.map(({ icon: Icon, title, text, href, label }) => (
            <article key={title} className="flex h-full flex-col rounded-[24px] border border-line bg-white/80 p-7">
              <Icon className="size-7 text-accent" />
              <h3 className="mt-7 font-heading text-xl font-semibold tracking-[-.03em]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
              <Link href={href} className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-semibold text-accent">{label}<ArrowUpRight className="size-3.5" /></Link>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
