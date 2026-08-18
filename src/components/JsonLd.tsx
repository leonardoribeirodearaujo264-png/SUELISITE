import {
  ADDRESS,
  EMAIL,
  GOOGLE_BUSINESS_URL,
  LAWYER_NAME,
  OFFICE_NAME,
  PHONE_E164,
  SITE_URL,
} from "@/lib/site";
import { FAQ_ITEMS } from "@/lib/faq";
import { INSTAGRAM_URL } from "@/lib/instagram";
import {
  GOOGLE_RATING,
  GOOGLE_REVIEWS,
  GOOGLE_REVIEW_COUNT,
} from "@/lib/reviews";

/** Structured data: law office + the FAQ, so both can be indexed properly. */
export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${SITE_URL}/#escritorio`,
        name: OFFICE_NAME,
        description:
          "Escritório de advocacia com atuação em direitos da pessoa com Transtorno do Espectro Autista (TEA), incluindo BPC/LOAS.",
        url: SITE_URL,
        telephone: PHONE_E164,
        email: EMAIL,
        image: `${SITE_URL}/images/og.jpg`,
        logo: `${SITE_URL}/images/logo-mark.png`,
        sameAs: [GOOGLE_BUSINESS_URL, INSTAGRAM_URL],
        areaServed: { "@type": "Country", name: "Brasil" },
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: ADDRESS.postalCode,
          addressCountry: "BR",
        },
        knowsLanguage: "pt-BR",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: GOOGLE_RATING,
          reviewCount: GOOGLE_REVIEW_COUNT,
          bestRating: 5,
          worstRating: 1,
        },
        review: GOOGLE_REVIEWS.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.author },
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.rating,
            bestRating: 5,
          },
          reviewBody: r.text,
        })),
        employee: {
          "@type": "Attorney",
          name: LAWYER_NAME,
          jobTitle: "Advogada",
          worksFor: { "@id": `${SITE_URL}/#escritorio` },
        },
        knowsAbout: [
          "Direitos da pessoa com autismo",
          "Transtorno do Espectro Autista",
          "BPC/LOAS",
          "Benefício de Prestação Continuada",
          "Educação inclusiva",
          "Direito previdenciário",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#site`,
        url: SITE_URL,
        name: `${OFFICE_NAME} — Direitos da Pessoa com Autismo`,
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE_URL}/#escritorio` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#duvidas`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
