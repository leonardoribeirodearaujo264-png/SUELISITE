import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/site";
import {
  GOOGLE_RATING,
  GOOGLE_REVIEWS,
  GOOGLE_REVIEW_COUNT,
} from "@/lib/reviews";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

function Stars({
  value,
  className = "",
  size = "sm",
}: {
  value: number;
  className?: string;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "h-3 w-3 sm:h-3.5 sm:w-3.5" : "h-4 w-4";
  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${value} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`${dim} ${
            i < Math.round(value)
              ? "fill-gold-400 text-gold-400"
              : "text-navy-200"
          }`}
        />
      ))}
    </div>
  );
}

/** Google "G" mark, so the source of the ratings is unmistakable. */
function GoogleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.5 5.5 0 0 1-2.39 3.61v3h3.86c2.26-2.08 3.58-5.15 3.58-8.8Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.95-2.91l-3.87-3a7.2 7.2 0 0 1-10.72-3.78H1.36v3.09A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.36 14.3a7.14 7.14 0 0 1 0-4.6V6.62H1.36a12 12 0 0 0 0 10.77l4-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.96 1.19 15.24 0 12 0A12 12 0 0 0 1.36 6.62l4 3.09A7.16 7.16 0 0 1 12 4.75Z"
      />
    </svg>
  );
}

export function Reviews() {
  return (
    <section
      aria-labelledby="avaliacoes-title"
      className="band-soft py-12 sm:py-16 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Avaliações no Google"
          id="avaliacoes-title"
          title="O que os clientes escreveram sobre o escritório."
          description="Comentários publicados no perfil da SCD Advocacia no Google. Qualquer pessoa pode conferir todos eles diretamente no perfil."
        />

        {/* Aggregate — compact single row; figures come from the Google profile */}
        <div className="mx-auto mt-7 flex w-full max-w-sm items-center justify-center gap-3 rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-card sm:max-w-md sm:gap-5 sm:px-6 sm:py-5">
          <GoogleMark className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
          <span className="font-display text-[1.75rem] font-semibold leading-none text-navy-800 sm:text-[2.25rem]">
            {GOOGLE_RATING.toFixed(1).replace(".", ",")}
          </span>
          <div
            aria-hidden="true"
            className="h-8 w-px shrink-0 bg-navy-100 sm:h-10"
          />
          <div className="min-w-0">
            <Stars value={GOOGLE_RATING} size="md" />
            <p className="mt-1 text-[0.8rem] text-muted sm:text-[0.88rem]">
              {GOOGLE_REVIEW_COUNT} avaliações no Google
            </p>
          </div>
        </div>

        {/* Two compact cards per row on phones, three from md up */}
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:mt-10 lg:gap-6">
          {GOOGLE_REVIEWS.map((review, i) => (
            <li
              key={review.author}
              className={`h-full ${
                // a lone third card would sit half-width on phones
                i === 2 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <Reveal delay={i * 0.07} className="h-full">
                <figure className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-3.5 shadow-card transition-all duration-300 hover:border-azure-200 hover:shadow-lift sm:p-5 lg:rounded-3xl lg:p-7">
                  <div className="flex items-center justify-between gap-2">
                    <Stars value={review.rating} />
                    <GoogleMark className="h-3.5 w-3.5 shrink-0 opacity-70 sm:h-4 sm:w-4" />
                  </div>

                  <blockquote className="mt-3 flex-1 text-[0.82rem] leading-relaxed text-muted [-webkit-box-orient:vertical] [-webkit-line-clamp:5] [display:-webkit-box] overflow-hidden sm:text-[0.9rem] lg:text-[0.95rem] lg:[-webkit-line-clamp:none] lg:[display:block]">
                    {review.excerpt ? `“${review.text}…”` : `“${review.text}”`}
                  </blockquote>

                  <figcaption className="mt-3.5 flex items-center gap-2.5 border-t border-navy-100 pt-3 sm:mt-5 sm:gap-3 sm:pt-4">
                    <span
                      aria-hidden="true"
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-azure-50 text-[0.8rem] font-semibold text-azure-700 sm:h-9 sm:w-9 sm:text-[0.9rem]"
                    >
                      {review.author.charAt(0)}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[0.8rem] font-semibold text-navy-800 sm:text-[0.9rem]">
                        {review.author}
                      </span>
                      {review.date && (
                        <span className="block text-[0.72rem] text-navy-400 sm:text-[0.78rem]">
                          {review.date}
                        </span>
                      )}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto"
          >
            <span className="sm:hidden">Ver todas no Google</span>
            <span className="hidden sm:inline">
              Ver o perfil e todas as avaliações no Google
            </span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
