import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/instagram";
import {
  ADDRESS,
  EMAIL,
  GOOGLE_BUSINESS_URL,
  LAWYER_NAME,
  OAB_NUMBER,
  OFFICE_NAME,
  PHONE_DISPLAY,
  PHONE_E164,
  whatsappLink,
} from "@/lib/site";
import { WhatsAppIcon } from "./ui/icons";

const QUICK_LINKS = [
  { label: "Direitos da Pessoa Autista", href: "#direitos" },
  { label: "BPC/LOAS", href: "#bpc-loas" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas Frequentes", href: "#duvidas" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-azure-100/75">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Image
              src="/images/logo-lockup.png"
              alt={`${OFFICE_NAME} — ${LAWYER_NAME}`}
              width={720}
              height={622}
              sizes="200px"
              className="h-auto w-[9.5rem]"
            />

            <p className="mt-6 font-display text-[1.15rem] text-white">
              {OFFICE_NAME}
            </p>
            <p className="mt-1 text-[0.95rem] text-azure-200">
              {LAWYER_NAME} · {OAB_NUMBER}
            </p>

            <p className="mt-5 max-w-sm text-[0.92rem] leading-relaxed">
              Orientação jurídica às famílias de pessoas com Transtorno do
              Espectro Autista na busca pela garantia de seus direitos.
            </p>
          </div>

          <nav aria-labelledby="footer-links" className="lg:col-span-3">
            <h2
              id="footer-links"
              className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white"
            >
              Links rápidos
            </h2>
            <ul className="mt-4 space-y-1">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1.5 text-[0.95rem] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-1.5 text-[0.95rem] transition-colors hover:text-white"
                >
                  <Instagram className="h-4 w-4 text-gold-400" aria-hidden="true" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-1.5 text-[0.95rem] transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#3ED07B]" />
                  WhatsApp
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white">
              Contato
            </h2>
            <ul className="mt-4 space-y-1.5 text-[0.95rem]">
              <li>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex items-center gap-3 py-1.5 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-start gap-3 break-all py-1.5 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-3 py-1.5 transition-colors hover:text-white"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                  <span>
                    {ADDRESS.street}
                    <span className="block text-azure-200/70">
                      {ADDRESS.district}, {ADDRESS.city} - {ADDRESS.state},{" "}
                      {ADDRESS.postalCode}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-[0.85rem] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {OFFICE_NAME}. Todos os direitos reservados.</p>
          <Link
            href="/politica-de-privacidade"
            className="inline-block py-1.5 transition-colors hover:text-white"
          >
            Política de Privacidade
          </Link>
        </div>

        <p className="mt-6 max-w-3xl text-[0.78rem] leading-relaxed text-azure-200/50">
          Conteúdo de caráter meramente informativo, em conformidade com o Código
          de Ética e Disciplina da OAB. Esta página não constitui oferta de
          serviços, captação de clientela ou promessa de resultado.
        </p>
      </div>
    </footer>
  );
}
