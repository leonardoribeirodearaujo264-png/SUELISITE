import { BadgeCheck, Info } from "lucide-react";
import { WHATSAPP_BPC_MESSAGE } from "@/lib/site";
import { WhatsAppButton } from "./ui/WhatsAppButton";

const REQUIREMENTS = [
  "Comprovação da condição de pessoa com deficiência, com repercussão de longo prazo.",
  "Análise da renda e da composição do grupo familiar, conforme os critérios legais.",
  "Avaliação médica e social realizada pelo INSS.",
];

export function BpcSection() {
  return (
    <section
      id="bpc-loas"
      aria-labelledby="bpc-title"
      className="relative overflow-hidden bg-navy-800 py-20 text-white lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(48rem 30rem at 88% 4%, rgba(43,114,206,.34) 0%, transparent 60%), radial-gradient(38rem 24rem at 2% 96%, rgba(21,63,124,.5) 0%, transparent 62%)",
        }}
      />

      <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <p className="eyebrow eyebrow-light">Destaque · Benefício assistencial</p>

          <h2 id="bpc-title" className="mt-5 text-display-md text-white">
            Seu filho com autismo pode ter direito ao BPC/LOAS?
          </h2>

          <p className="mt-6 max-w-2xl text-[1.05rem] leading-[1.75] text-azure-100/85">
            O Benefício de Prestação Continuada pode garantir o pagamento mensal
            de um salário mínimo à pessoa com deficiência que cumpra os
            requisitos legais, inclusive critérios relacionados à condição de
            deficiência e à situação socioeconômica familiar.
          </p>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-gold-400/35 bg-white/[0.06] p-5 backdrop-blur-sm sm:items-center">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-400/15 text-gold-300">
              <BadgeCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-[1rem] font-semibold leading-snug text-white sm:text-[1.05rem]">
              Não é necessário ter contribuído para o INSS para solicitar o BPC.
            </p>
          </div>

          <div className="mt-8">
            <WhatsAppButton
              message={WHATSAPP_BPC_MESSAGE}
              className="w-full sm:w-auto"
              ariaLabel="Saber se tenho direito ao BPC/LOAS — falar pelo WhatsApp"
            >
              Quero saber se tenho direito
            </WhatsAppButton>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-sm sm:p-7">
            <h3 className="text-[1.1rem] font-semibold text-white">
              O que é analisado no pedido
            </h3>

            <ul className="mt-5 space-y-4">
              {REQUIREMENTS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                  />
                  <span className="text-[0.95rem] leading-relaxed text-azure-100/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3 border-t border-white/12 pt-5">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-azure-200" aria-hidden="true" />
              <p className="text-[0.85rem] leading-relaxed text-azure-200/80">
                O preenchimento dos requisitos não é presumido: depende da análise
                da documentação e da situação concreta de cada família.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
