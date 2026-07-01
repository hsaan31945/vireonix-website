import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center">
      <Image
        src="/images/logo.png"
        alt="Vireonix logo"
        width={1130}
        height={393}
        priority
        className={`h-11 w-auto sm:h-12 ${light ? "brightness-0 invert" : ""}`}
      />
    </span>
  );
}
