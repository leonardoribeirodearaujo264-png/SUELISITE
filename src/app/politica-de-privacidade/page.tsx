import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EMAIL, OFFICE_NAME } from "@/lib/site";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da SCD Advocacia & Consultoria Jurídica: como os dados enviados por meio do site são tratados.",
  robots: { index: true, follow: true },
};

/**
 * Placeholder structure, ready for the office's own text. Every section is
 * marked so the wording can be replaced without touching the layout.
 */
const SECTIONS = [
  {
    title: "1. Quais dados são tratados",
    body: "Este site não possui formulários e não armazena dados em servidores próprios. O contato acontece por WhatsApp, telefone ou e-mail. Nessas conversas, o escritório recebe os dados que você escolhe enviar — como nome, telefone e a descrição da sua situação.",
  },
  {
    title: "2. Finalidade do tratamento",
    body: "Os dados recebidos são utilizados exclusivamente para responder ao contato, avaliar a viabilidade de orientação jurídica e, se houver contratação, para a prestação dos serviços advocatícios.",
  },
  {
    title: "3. Dados sensíveis",
    body: "Informações sobre saúde, laudos e diagnósticos são dados pessoais sensíveis. Quando enviados pela própria família, são tratados sob sigilo profissional e utilizados apenas para a análise do caso.",
  },
  {
    title: "4. Compartilhamento",
    body: "Os dados não são vendidos nem cedidos a terceiros para fins comerciais. Podem ser apresentados a órgãos públicos, ao INSS ou ao Poder Judiciário quando isso for necessário à defesa dos seus interesses.",
  },
  {
    title: "5. Cookies e medição de audiência",
    body: "O site utiliza o Meta Pixel para medir o desempenho de anúncios e o alcance das publicações. Essa ferramenta pode registrar dados de navegação de forma agregada. Você pode bloquear cookies nas configurações do seu navegador.",
  },
  {
    title: "6. Seus direitos",
    body: "Conforme a Lei nº 13.709/2018 (LGPD), você pode solicitar confirmação do tratamento, acesso, correção, anonimização ou eliminação dos seus dados, além de revogar o consentimento.",
  },
  {
    title: "7. Contato",
    body: `Para exercer seus direitos ou esclarecer dúvidas sobre esta política, escreva para ${EMAIL}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <main className="wash-top min-h-screen pb-20 pt-16">
        <div className="shell max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[0.9rem] font-medium text-azure-700 hover:text-azure-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar para a página inicial
          </Link>

          <h1 className="mt-8 text-display-md">Política de Privacidade</h1>
          <p className="mt-4 text-[1rem] leading-relaxed text-muted">
            {OFFICE_NAME}. Esta página descreve como os dados enviados por meio
            deste site e dos canais de contato são tratados.
          </p>

          <div className="mt-10 space-y-8">
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className="text-[1.15rem] font-semibold">{section.title}</h2>
                <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
