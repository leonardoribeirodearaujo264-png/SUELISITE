import Link from "next/link";
import type { ReactNode } from "react";
import { WHATSAPP_DEFAULT_MESSAGE, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

type Variant = "whatsapp" | "primary" | "outline" | "outline-light";

const VARIANT_CLASS: Record<Variant, string> = {
  whatsapp: "btn-wa",
  primary: "btn-primary",
  outline: "btn-outline",
  "outline-light": "btn-outline-light",
};

type Props = {
  children: ReactNode;
  /** Pre-filled WhatsApp message; defaults to the site-wide message. */
  message?: string;
  variant?: Variant;
  className?: string;
  /** Accessible name when the label alone is not descriptive enough. */
  ariaLabel?: string;
  showIcon?: boolean;
};

/** Every WhatsApp CTA on the page renders through this component. */
export function WhatsAppButton({
  children,
  message = WHATSAPP_DEFAULT_MESSAGE,
  variant = "whatsapp",
  className = "",
  ariaLabel,
  showIcon = true,
}: Props) {
  return (
    <Link
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${VARIANT_CLASS[variant]} ${className}`}
    >
      {showIcon && <WhatsAppIcon className="h-5 w-5 shrink-0" />}
      <span>{children}</span>
    </Link>
  );
}
