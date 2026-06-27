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
    <section className="page-grid relative overflow-hidden bg-[radial-gradient(circle_at_78%_20%,#ece9ff_0,transparent_32%),radial-gradient(circle_at_12%_18%,#edf8ff_0,transparent_26%),linear-gradient(180deg,#fafbfe,#f5f6fa)] px-5 pb-24 pt-40 sm:px-8 sm:pb-28 sm:pt-44">
      <div className="absolute -right-24 top-16 size-72 rounded-full bg-violet/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1180px] text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mx-auto mt-6 max-w-5xl font-heading text-5xl font-semibold leading-[1.03] tracking-[-0.065em] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={primaryHref}>{primaryLabel}</Button>
          <Button href={secondaryHref} variant="secondary">{secondaryLabel}</Button>
        </div>
      </div>
    </section>
  );
}
