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

function Stars({ value, className = "" }: { value: number; className?: string }) {
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
          className={`h-4 w-4 ${
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
      className="border-y border-navy-100 bg-mist py-20 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Avaliações no Google"
          id="avaliacoes-title"
          title="O que os clientes escreveram sobre o escritório."
          description="Comentários publicados por clientes no perfil da SCD Advocacia & Consultoria Jurídica no Google. Qualquer pessoa pode conferir todos eles diretamente no perfil."
        />

        {/* Aggregate — the figures come straight from the Google profile */}
        <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-center gap-3 rounded-3xl border border-navy-100 bg-white px-6 py-6 shadow-card sm:flex-row sm:justify-center sm:gap-6">
          <div className="flex items-center gap-3">
            <GoogleMark className="h-7 w-7 shrink-0" />
            <span className="font-display text-[2.35rem] font-semibold leading-none text-navy-800">
              {GOOGLE_RATING.toFixed(1).replace(".", ",")}
            </span>
          </div>
          <div
            aria-hidden="true"
            className="hidden h-10 w-px bg-navy-100 sm:block"
          />
          <div className="text-center sm:text-left">
            <Stars value={GOOGLE_RATING} className="justify-center sm:justify-start" />
            <p className="mt-1.5 text-[0.88rem] text-muted">
              {GOOGLE_REVIEW_COUNT} avaliações no Google
            </p>
          </div>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
          {GOOGLE_REVIEWS.map((review, i) => (
            <li key={review.author} className="h-full">
              <Reveal delay={i * 0.07} className="h-full">
                <figure className="card flex h-full flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <Stars value={review.rating} />
                    <GoogleMark className="h-4 w-4 shrink-0 opacity-70" />
                  </div>

                  <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted">
                    {review.excerpt ? `“${review.text}…”` : `“${review.text}”`}
                  </blockquote>

                  <figcaption className="mt-5 flex items-center gap-3 border-t border-navy-100 pt-4">
                    <span
                      aria-hidden="true"
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-azure-50 font-semibold text-azure-700"
                    >
                      {review.author.charAt(0)}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[0.9rem] font-semibold text-navy-800">
                        {review.author}
                      </span>
                      {review.date && (
                        <span className="block text-[0.78rem] text-navy-400">
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

        <div className="mt-9 text-center">
          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ver o perfil e todas as avaliações no Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
