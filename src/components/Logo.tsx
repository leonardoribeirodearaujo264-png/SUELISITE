import Image from "next/image";
import { LAWYER_NAME, OFFICE_NAME } from "@/lib/site";

type Props = {
  /** "dark" places the mark on a navy plate for light headers. */
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Header lockup: the office mark on a navy plate, next to the office name set
 * in the site's own typography. The raster logo carries only "Sueli Dias
 * Advogada", so the full office name is typeset here.
 */
export function Logo({ tone = "dark", className = "" }: Props) {
  const isLight = tone === "light";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-800 ring-1 sm:h-12 sm:w-12 ${
          isLight ? "ring-white/15" : "ring-navy-900/10"
        }`}
      >
        <Image
          src="/images/logo-mark.png"
          alt=""
          width={512}
          height={512}
          priority
          className="h-8 w-8 sm:h-9 sm:w-9"
        />
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`font-display text-[1.02rem] font-semibold tracking-[-0.01em] sm:text-[1.1rem] ${
            isLight ? "text-white" : "text-navy-800"
          }`}
        >
          SCD Advocacia
        </span>
        <span
          className={`truncate text-[0.66rem] font-medium uppercase tracking-[0.14em] ${
            isLight ? "text-azure-200" : "text-azure-700"
          }`}
        >
          Consultoria Jurídica
        </span>
      </span>
      <span className="sr-only">
        {OFFICE_NAME} — {LAWYER_NAME}
      </span>
    </span>
  );
}
