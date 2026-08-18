import type { Metadata, Viewport } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { OFFICE_NAME, SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { MetaPixel } from "@/components/MetaPixel";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal"],
  variable: "--font-display",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Direitos da Pessoa com Autismo | SCD Advocacia",
    template: `%s | ${OFFICE_NAME}`,
  },
  description:
    "Orientação jurídica para famílias de pessoas com Transtorno do Espectro Autista (TEA), incluindo BPC/LOAS e outros direitos. SCD Advocacia & Consultoria Jurídica.",
  applicationName: OFFICE_NAME,
  authors: [{ name: OFFICE_NAME }],
  keywords: [
    "direitos da pessoa com autismo",
    "advogada autismo",
    "TEA direitos",
    "BPC LOAS autismo",
    "benefício de prestação continuada",
    "educação inclusiva",
    "plano de saúde autismo",
    "SCD Advocacia",
    "Dra. Sueli Pereira Dias",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: OFFICE_NAME,
    title: "Direitos da Pessoa com Autismo | SCD Advocacia",
    description:
      "Orientação jurídica para famílias de pessoas com Transtorno do Espectro Autista (TEA), incluindo BPC/LOAS e outros direitos.",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "SCD Advocacia & Consultoria Jurídica — direitos da pessoa com autismo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Direitos da Pessoa com Autismo | SCD Advocacia",
    description:
      "Orientação jurídica para famílias de pessoas com Transtorno do Espectro Autista (TEA), incluindo BPC/LOAS e outros direitos.",
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1A30",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy-800 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Ir para o conteúdo principal
        </a>
        {children}
        <JsonLd />
        <MetaPixel />
      </body>
    </html>
  );
}
