import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "light" | "outlineDark";
  className?: string;
}

const styles = {
  primary: "bg-blue-600 text-white shadow-[0_12px_28px_rgba(37,99,235,.24)] hover:bg-blue-500 hover:shadow-[0_16px_36px_rgba(37,99,235,.3)]",
  secondary: "border border-line bg-white/80 text-ink hover:border-accent/30 hover:bg-white",
  dark: "bg-ink text-white shadow-[0_12px_30px_rgba(17,19,33,.18)]",
  light: "bg-white text-ink shadow-xl",
  outlineDark: "border border-white/15 bg-white/[.04] text-white hover:border-blue-400/40 hover:bg-white/[.07]",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <a href={href} className={`group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl px-5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}>
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
    </a>
  );
}
