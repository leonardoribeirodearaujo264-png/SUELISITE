import Link from "next/link";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui/icons";

/**
 * The only fixed call to action on the page. Sits clear of the bottom edge and
 * respects the iOS home indicator via env(safe-area-inset-bottom).
 */
export function FloatingWhatsApp() {
  return (
    <Link
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a SCD Advocacia pelo WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full bg-[#128C4B] text-white shadow-[0_12px_30px_-8px_rgba(18,140,75,.7)] ring-4 ring-white/70 transition-transform duration-200 hover:scale-105 active:scale-100 sm:bottom-6 sm:right-6 sm:h-[3.75rem] sm:w-[3.75rem] sm:ring-0"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      <span className="absolute inset-0 -z-10 rounded-full bg-[#128C4B]/30 blur-md" aria-hidden="true" />
    </Link>
  );
}
