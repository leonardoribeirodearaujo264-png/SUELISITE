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
  text: string;
  /** Legal basis, shown as a tag — the authority signal of each card. */
  basis: string;
};

const RIGHTS: Right[] = [
  {
    icon: Banknote,
    title: "BPC/LOAS",
    text: "Possibilidade de benefício assistencial quando preenchidos os requisitos legais e socioeconômicos.",
    basis: "Lei nº 8.742/1993, art. 20",
  },
  {
    icon: GraduationCap,
    title: "Educação inclusiva",
    text: "Direito à inclusão escolar e, quando comprovadamente necessário, suporte adequado no ambiente educacional.",
    basis: "Lei nº 13.146/2015, art. 27 e 28",
  },
  {
    icon: HeartPulse,
    title: "Saúde e tratamento",
    text: "Proteção relacionada ao acesso à saúde e aos tratamentos indicados, conforme cada situação.",
    basis: "Lei nº 12.764/2012, art. 3º",
  },
  {
    icon: Clock4,
    title: "Atendimento prioritário",
    text: "Garantias legais de atendimento prioritário às pessoas com TEA.",
    basis: "Lei nº 12.764/2012 · Lei nº 10.048/2000",
  },
  {
    icon: Bus,
    title: "Transporte e mobilidade",
    text: "Possíveis benefícios e direitos relacionados ao transporte, conforme legislação e requisitos aplicáveis.",
    basis: "Lei nº 8.899/1994 · Lei nº 13.146/2015",
  },
  {
    icon: ShieldAlert,
    title: "Direitos contra planos de saúde",
    text: "Orientação jurídica em situações envolvendo negativas ou limitações indevidas de cobertura.",
    basis: "Lei nº 9.656/1998 · CDC",
  },
];

export function Rights() {
  return (
    <section
      id="direitos"
      aria-labelledby="direitos-title"
      className="border-y border-navy-100 bg-mist py-20 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Você sabia?"
          id="direitos-title"
          title="A pessoa com autismo possui direitos garantidos por lei."
          description="O Transtorno do Espectro Autista é reconhecido legalmente como deficiência para fins de proteção de direitos. Dependendo da situação de cada família, podem existir benefícios e garantias específicas que ainda não estão sendo exercidos."
        />

        <TabDivider
          className="mx-auto mt-10 h-4 w-28 text-gold-400"
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {RIGHTS.map((right, i) => (
            <li key={right.title} className="h-full">
              <Reveal delay={i * 0.06} className="h-full">
                <article className="card flex h-full flex-col">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-azure-50 text-azure-700 ring-1 ring-azure-100">
                    <right.icon className="h-[1.35rem] w-[1.35rem]" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-[1.18rem] font-semibold leading-snug">
                    {right.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-muted">
                    {right.text}
                  </p>
                  <p className="law-tag mt-5 self-start">{right.basis}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[0.86rem] leading-relaxed text-navy-400">
          As informações desta página têm caráter informativo. Cada situação
          depende de análise individual dos documentos e dos requisitos previstos
          na legislação.
        </p>
      </div>
    </section>
  );
}
