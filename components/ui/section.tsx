import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return <section id={id} className={`relative py-24 sm:py-28 lg:py-32 ${className}`}>{children}</section>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] ${light ? "text-indigo-200" : "text-accent"}`}><i className="size-1.5 rounded-full bg-current shadow-[0_0_0_4px_rgba(79,91,246,.12)]" />{children}</span>;
}

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, description, align = "left", light = false }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`mt-5 font-heading text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {description && <p className={`mt-5 text-base leading-8 ${centered ? "mx-auto max-w-2xl" : "max-w-xl"} ${light ? "text-white/60" : "text-muted"}`}>{description}</p>}
    </div>
  );
}
