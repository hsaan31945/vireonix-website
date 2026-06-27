export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-heading text-xl font-bold tracking-[-0.04em] ${light ? "text-white" : "text-ink"}`}>
      <span className="grid h-7 w-7 -skew-x-12 grid-cols-3 items-end gap-0.5" aria-hidden="true">
        <i className="h-3 rounded-sm bg-gradient-to-t from-accent to-violet" />
        <i className="h-5 rounded-sm bg-gradient-to-t from-accent to-violet" />
        <i className="h-7 rounded-sm bg-gradient-to-t from-accent to-violet" />
      </span>
      Vireonix
    </span>
  );
}
