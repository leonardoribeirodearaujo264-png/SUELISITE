import Link from "next/link";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui/icons";

/**
 * Fixed bottom CTA on phones only. The page reserves matching bottom padding
 * (see layout) so this bar never covers the footer or any content.
 */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md sm:hidden">
      <Link
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-wa w-full"
        aria-label="Falar com uma advogada pelo WhatsApp"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Falar com uma advogada
      </Link>
    </div>
  );
}
