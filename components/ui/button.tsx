import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "light";
  className?: string;
}

const styles = {
  primary: "bg-gradient-to-r from-accent to-violet text-white shadow-[0_14px_34px_rgba(75,86,246,.28)] hover:shadow-[0_18px_42px_rgba(75,86,246,.38)]",
  secondary: "border border-line bg-white/80 text-ink hover:border-accent/30 hover:bg-white",
  dark: "bg-ink text-white shadow-[0_12px_30px_rgba(17,19,33,.18)]",
  light: "bg-white text-ink shadow-xl",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <a href={href} className={`group inline-flex min-h-13 items-center justify-center gap-3 rounded-[14px] px-5 text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}>
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
    </a>
  );
}
