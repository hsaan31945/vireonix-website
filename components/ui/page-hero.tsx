import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = "Request a Proposal",
  primaryHref = "/contact",
  secondaryLabel = "View Our Work",
  secondaryHref = "/work",
}: PageHeroProps) {
  return (
    <section className="tech-grid relative overflow-hidden bg-[#07101d] px-5 pb-24 pt-40 text-white sm:px-8 sm:pb-28 sm:pt-44">
      <div className="absolute -right-24 top-16 size-72 rounded-full bg-blue-500/[.07] blur-3xl" />
      <div className="relative mx-auto max-w-[1180px] text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mx-auto mt-6 max-w-5xl font-heading text-5xl font-semibold leading-[1.03] tracking-[-0.065em] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={primaryHref}>{primaryLabel}</Button>
          <Button href={secondaryHref} variant="outlineDark">{secondaryLabel}</Button>
        </div>
      </div>
    </section>
  );
}
