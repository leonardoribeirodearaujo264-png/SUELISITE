/**
 * Central configuration for the SCD Advocacia landing page.
 * Change the WhatsApp number, e-mail or Pixel id here and every CTA follows.
 */

/** Office WhatsApp in international format: country + area code + number. */
export const WHATSAPP_NUMBER = "5598985347895";

/** Human-readable phone, used in the footer and in tel: links. */
export const PHONE_DISPLAY = "(98) 98534-7895";
export const PHONE_E164 = "+5598985347895";

export const EMAIL = "advadvocacia82@gmail.com";

/** Meta (Facebook) Pixel. Leave empty to disable the script entirely. */
export const META_PIXEL_ID = "2203782360394368";

/** Google Business Profile — used for the reviews section. */
export const GOOGLE_BUSINESS_URL = "https://share.google/2NriVZn05q7HEJYan";
export const GOOGLE_REVIEWS_URL = GOOGLE_BUSINESS_URL;

export const SITE_URL = "https://scdadvocacia.vercel.app";

export const OFFICE_NAME = "SCD Advocacia & Consultoria Jurídica";
export const LAWYER_NAME = "Dra. Sueli Pereira Dias";

/** Registration number published on the office's own official profiles. */
export const OAB_NUMBER = "OAB/MA 6.834";

/** Office address, as published on the Google Business Profile. */
export const ADDRESS = {
  street: "R. Dep. Manoel Ribeiro, 1112",
  district: "Bairro Santa Luzia",
  city: "Carutapera",
  state: "MA",
  postalCode: "65295-000",
} as const;

export const ADDRESS_LINE = `${ADDRESS.street} — ${ADDRESS.district}, ${ADDRESS.city} - ${ADDRESS.state}, ${ADDRESS.postalCode}`;

/** Default message used by every CTA that has no specific context. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site sobre Direitos da Pessoa com Autismo da SCD Advocacia e gostaria de receber orientação jurídica.";

/** Message for the BPC/LOAS section. */
export const WHATSAPP_BPC_MESSAGE =
  "Olá! Vim pelo site da SCD Advocacia e gostaria de receber orientação sobre os direitos da pessoa com autismo e o BPC/LOAS.";

/**
 * Builds a wa.me link with a pre-filled message.
 * @param message text the family sends when the chat opens
 */
export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Direitos", href: "#direitos" },
  { label: "BPC/LOAS", href: "#bpc-loas" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;
