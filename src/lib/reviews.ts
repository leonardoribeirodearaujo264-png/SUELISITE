/**
 * Reviews shown in the "Avaliações no Google" section.
 *
 * Google does not allow reviews to be read at runtime without a server-side
 * Places API key, and this project ships no backend. The entries below were
 * transcribed from the office's public Google Business Profile — never write
 * anything here that is not a real, published review.
 *
 * To add more: open the profile, copy the reviewer name, rating, date and text.
 */
export type Review = {
  /** Reviewer name exactly as published on Google. */
  author: string;
  /** Star rating, 1 to 5. */
  rating: number;
  /** Review text. Use "…" when quoting only part of a longer review. */
  text: string;
  /** Date as Google shows it, e.g. "há 4 meses". */
  date?: string;
  /** true when the quote is an excerpt rather than the full review. */
  excerpt?: boolean;
};

/** Aggregate shown next to the section title — keep in sync with the profile. */
export const GOOGLE_RATING = 5.0;
export const GOOGLE_REVIEW_COUNT = 109;

export const GOOGLE_REVIEWS: Review[] = [
  {
    author: "Wellington da Luz",
    rating: 5,
    date: "há 5 meses",
    excerpt: true,
    text: "Agradeço a Deus por ter colocado em minha vida essa grande profissional. O significado de Advogada faz jus à pessoa de Dra. Suely. Sempre esteve ao meu lado incansavelmente ao longo de todo o meu processo.",
  },
  {
    author: "Geyce Viana",
    rating: 5,
    date: "há 4 meses",
    text: "Dra Suelly, uma excelente profissional! Demonstrou muita competência, atenção e compromisso ao conduzir o caso da minha avó. Sempre clara nas explicações, transparente e dedicada. Recomendo.",
  },
  {
    author: "Conceição Rodriguez",
    rating: 5,
    date: "há 2 semanas",
    text: "Você foi a pessoa certa para me defender. Deus abençoe e recompense. Um abraço, minha amiga.",
  },
];
