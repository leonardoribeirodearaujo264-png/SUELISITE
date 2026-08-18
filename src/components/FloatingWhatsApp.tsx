import Link from "next/link";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui/icons";

/**
 * Floating WhatsApp button. Sits above the mobile CTA bar on small screens so
 * neither element covers page content.
 */
export function FloatingWhatsApp() {
  return (
    <Link
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a SCD Advocacia pelo WhatsApp"
      className="fixed bottom-[5.75rem] right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#128C4B] text-white shadow-[0_12px_30px_-8px_rgba(18,140,75,.7)] transition-transform duration-200 hover:scale-105 active:scale-100 sm:bottom-6 sm:right-6 sm:h-[3.75rem] sm:w-[3.75rem]"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute inset-0 -z-10 rounded-full bg-[#128C4B]/30 blur-md" aria-hidden="true" />
    </Link>
  );
}
