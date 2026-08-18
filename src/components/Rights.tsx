import {
  Banknote,
  GraduationCap,
  HeartPulse,
  Clock4,
  Bus,
  ShieldAlert,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { TabDivider } from "./ui/icons";

type Right = {
  icon: LucideIcon;
  title: string;
  /** Short title for the two-up phone grid. */
  titleShort?: string;
  text: string;
  /** Condensed copy for phones, so two cards never fill the screen. */
  textShort: string;
  /** Legal basis, shown as a tag — the authority signal of each card. */
  basis: string;
  /** Shorter basis for phones. */
  basisShort: string;
};

const RIGHTS: Right[] = [
  {
    icon: Banknote,
    title: "BPC/LOAS",
    text: "Possibilidade de benefício assistencial quando preenchidos os requisitos legais e socioeconômicos.",
    textShort: "Benefício assistencial quando cumpridos os requisitos legais.",
    basis: "Lei nº 8.742/1993, art. 20",
    basisShort: "Lei nº 8.742/1993",
  },
  {
    icon: GraduationCap,
    title: "Educação inclusiva",
    text: "Direito à inclusão escolar e, quando comprovadamente necessário, suporte adequado no ambiente educacional.",
    textShort: "Inclusão escolar e suporte adequado quando necessário.",
    basis: "Lei nº 13.146/2015, art. 27 e 28",
    basisShort: "Lei nº 13.146/2015",
  },
  {
    icon: HeartPulse,
    title: "Saúde e tratamento",
    text: "Proteção relacionada ao acesso à saúde e aos tratamentos indicados, conforme cada situação.",
    textShort: "Acesso à saúde e aos tratamentos indicados.",
    basis: "Lei nº 12.764/2012, art. 3º",
    basisShort: "Lei nº 12.764/2012",
  },
  {
    icon: Clock4,
    title: "Atendimento prioritário",
    titleShort: "Prioridade",
    text: "Garantias legais de atendimento prioritário às pessoas com TEA.",
    textShort: "Atendimento prioritário garantido por lei.",
    basis: "Lei nº 12.764/2012 · Lei nº 10.048/2000",
    basisShort: "Lei nº 10.048/2000",
  },
  {
    icon: Bus,
    title: "Transporte e mobilidade",
    titleShort: "Transporte",
    text: "Possíveis benefícios e direitos relacionados ao transporte, conforme legislação e requisitos aplicáveis.",
    textShort: "Benefícios de transporte conforme os requisitos legais.",
    basis: "Lei nº 8.899/1994 · Lei nº 13.146/2015",
    basisShort: "Lei nº 8.899/1994",
  },
  {
    icon: ShieldAlert,
    title: "Direitos contra planos de saúde",
    titleShort: "Planos de saúde",
    text: "Orientação jurídica em situações envolvendo negativas ou limitações indevidas de cobertura.",
    textShort: "Negativas e limitações indevidas de cobertura.",
    basis: "Lei nº 9.656/1998 · CDC",
    basisShort: "Lei nº 9.656/1998",
  },
];

export function Rights() {
  return (
    <section
      id="direitos"
      aria-labelledby="direitos-title"
      className="bg-mist py-12 sm:py-16 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Você sabia?"
          id="direitos-title"
          title="A pessoa com autismo possui direitos garantidos por lei."
          description="O Transtorno do Espectro Autista é reconhecido legalmente como deficiência para fins de proteção de direitos. Dependendo da situação de cada família, podem existir benefícios e garantias específicas que ainda não estão sendo exercidos."
        />

        <TabDivider className="mx-auto mt-6 h-4 w-24 text-gold-400 sm:mt-10 sm:w-28" />

        {/* Two compact cards per row on phones, three from lg up */}
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {RIGHTS.map((right, i) => (
            <li key={right.title} className="h-full">
              <Reveal delay={i * 0.06} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-3.5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-azure-200 hover:shadow-lift sm:p-6 lg:rounded-3xl lg:p-7">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-azure-50 text-azure-700 ring-1 ring-azure-100 sm:h-12 sm:w-12 sm:rounded-2xl">
                    <right.icon
                      className="h-[1.05rem] w-[1.05rem] sm:h-[1.35rem] sm:w-[1.35rem]"
                      aria-hidden="true"
                    />
                  </span>

                  <h3 className="mt-3 text-[0.94rem] font-semibold leading-snug sm:mt-5 sm:text-[1.18rem]">
                    {right.titleShort ? (
                      <>
                        <span className="sm:hidden">{right.titleShort}</span>
                        <span className="hidden sm:inline">{right.title}</span>
                      </>
                    ) : (
                      right.title
                    )}
                  </h3>

                  <p className="mt-1.5 flex-1 text-[0.76rem] leading-[1.45] text-muted sm:mt-2.5 sm:text-[0.95rem] sm:leading-relaxed">
                    <span className="sm:hidden">{right.textShort}</span>
                    <span className="hidden sm:inline">{right.text}</span>
                  </p>

                  <p className="law-tag mt-3 self-start !text-[0.6rem] sm:mt-5 sm:!text-[0.68rem]">
                    <span className="sm:hidden">{right.basisShort}</span>
                    <span className="hidden sm:inline">{right.basis}</span>
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-7 max-w-2xl text-center text-[0.78rem] leading-relaxed text-navy-400 sm:mt-10 sm:text-[0.86rem]">
          As informações desta página têm caráter informativo. Cada situação
          depende de análise individual dos documentos e dos requisitos previstos
          na legislação.
        </p>
      </div>
    </section>
  );
}
