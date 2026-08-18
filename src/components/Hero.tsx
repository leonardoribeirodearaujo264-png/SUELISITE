import Image from "next/image";
import Link from "next/link";
import { Check, ArrowDown, Scale, Star } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/site";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/reviews";
import { WhatsAppButton } from "./ui/WhatsAppButton";

const TRUST = [
  "Atendimento humanizado",
  "Orientação jurídica especializada",
  "Atendimento pelo WhatsApp",
];

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="wash-top relative overflow-hidden pt-[6.75rem] lg:pt-28"
    >
      {/* hairline grid, barely there */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,26,48,.045) 1px, transparent 1px)",
          backgroundSize: "5.5rem 100%",
          maskImage: "linear-gradient(to bottom, black, transparent 72%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 72%)",
        }}
      />

      <div className="shell relative grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="eyebrow">Direitos da Pessoa com Autismo (TEA)</p>

          <h1
            id="hero-title"
            className="mt-5 text-display-lg text-navy-800"
          >
            Seu filho com autismo pode ter direitos que{" "}
            <span className="text-azure-700">você ainda não conhece.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[1.06rem] leading-[1.7] text-muted">
            Orientação jurídica para famílias de pessoas com Transtorno do
            Espectro Autista (TEA) na busca pela garantia de seus direitos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton
              className="w-full sm:w-auto"
              ariaLabel="Conhecer os direitos do meu filho — falar pelo WhatsApp"
            >
              Quero conhecer os direitos do meu filho
            </WhatsAppButton>

            <Link href="#direitos" className="btn-outline w-full sm:w-auto">
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
              Conheça os principais direitos
            </Link>
          </div>

          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-navy-100 bg-white/80 py-2.5 pl-3.5 pr-4 text-[0.85rem] text-navy-600 transition-colors hover:border-azure-300 hover:bg-white"
          >
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
              ))}
            </span>
            <span>
              <strong className="font-semibold text-navy-800">
                {GOOGLE_RATING.toFixed(1).replace(".", ",")}
              </strong>{" "}
              · {GOOGLE_REVIEW_COUNT} avaliações no Google
            </span>
          </Link>

          <ul className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {TRUST.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[0.92rem] font-medium text-navy-600"
              >
                <Check
                  className="h-4 w-4 shrink-0 text-azure-600"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Photograph at its natural 3:2 proportion — nothing is cropped away */}
        <div className="lg:col-span-6 xl:col-span-7">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[3rem] bg-azure-100/60 blur-2xl"
            />
            <figure className="overflow-hidden rounded-4xl bg-mist shadow-frame ring-1 ring-navy-900/5 sm:rounded-5xl">
              <Image
                src="/images/criancas.jpg"
                alt="Dra. Sueli Pereira Dias sentada ao lado de nove crianças sorrindo, todas com camisetas azuis estampadas com o coração de quebra-cabeça, símbolo da conscientização do autismo."
                width={1600}
                height={1066}
                priority
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="h-auto w-full object-cover"
              />
            </figure>

            {/* Legal grounding card: overlaps the frame on large screens */}
            <div className="mt-4 rounded-2xl border border-navy-100 bg-white/95 p-4 shadow-lift backdrop-blur lg:absolute lg:-bottom-9 lg:-left-10 lg:mt-0 lg:max-w-[17.5rem] lg:p-5">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-azure-50 text-azure-700">
                  <Scale className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.92rem] font-semibold leading-snug text-navy-800">
                    O TEA é legalmente equiparado à deficiência para todos os
                    efeitos legais.
                  </p>
                  <p className="law-tag mt-2">Lei nº 12.764/2012, art. 1º, §2º</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
