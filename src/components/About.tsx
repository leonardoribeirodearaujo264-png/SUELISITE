import Image from "next/image";
import { Mail, Phone, MessageCircleHeart, Users } from "lucide-react";
import { EMAIL, OAB_NUMBER, PHONE_DISPLAY, PHONE_E164 } from "@/lib/site";
import { WhatsAppButton } from "./ui/WhatsAppButton";

const VALUES = [
  {
    icon: MessageCircleHeart,
    title: "Atendimento humanizado",
    text: "Linguagem simples e acessível, com atenção ao contexto de cada família.",
    textShort: "Linguagem simples, atenta ao contexto de cada família.",
  },
  {
    icon: Users,
    title: "Análise individual",
    text: "Cada caso é avaliado a partir dos documentos e da realidade apresentada.",
    textShort: "Cada caso avaliado a partir dos documentos apresentados.",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="bg-paper py-12 sm:py-16 lg:py-28"
    >
      <div className="shell grid items-start gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative">
            {/* Fixed height on phones: the portrait is 2:3, so at full width it
                would otherwise fill a whole screen. object-top keeps the face. */}
            <figure className="h-[300px] overflow-hidden rounded-2xl bg-mist shadow-frame ring-1 ring-navy-900/5 sm:h-[380px] lg:h-auto lg:rounded-4xl">
              <Image
                src="/images/sueli.jpg"
                alt="Dra. Sueli Pereira Dias, advogada, em pé, sorrindo, usando blazer vermelho sobre vestido preto."
                width={1100}
                height={1650}
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="h-full w-full object-cover object-[center_18%] lg:h-auto lg:object-center"
              />
            </figure>
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-3xl border border-gold-300/60 lg:block"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow">Sobre a advogada</p>

          <h2 id="sobre-title" className="mt-3 text-display-md sm:mt-5">
            Dra. Sueli Pereira Dias
          </h2>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-3">
            <p className="font-display text-[1rem] text-azure-700 sm:text-[1.1rem]">
              SCD Advocacia &amp; Consultoria Jurídica
            </p>
            <span className="law-tag">{OAB_NUMBER}</span>
          </div>

          <div className="mt-4 space-y-3 text-[0.92rem] leading-[1.65] text-muted sm:mt-6 sm:space-y-4 sm:text-[1.02rem] sm:leading-[1.75]">
            <p>
              A atuação da Dra. Sueli Pereira Dias é voltada à defesa dos
              direitos dos seus clientes, com atendimento humanizado e atenção
              especial às necessidades das famílias que procuram o escritório.
            </p>
            <p>
              No tema dos direitos da pessoa com Transtorno do Espectro Autista,
              o trabalho começa pela escuta: entender a rotina da família, os
              atendimentos já realizados e a documentação disponível. A partir
              disso, a orientação é apresentada de forma clara, sem promessas de
              resultado, explicando o que a legislação prevê e quais medidas
              jurídicas podem ser adotadas em cada situação.
            </p>
          </div>

          <ul className="mt-5 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
            {VALUES.map((v) => (
              <li
                key={v.title}
                className="rounded-xl border border-navy-100 bg-mist/70 p-3.5 sm:rounded-2xl sm:p-5"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-azure-700 ring-1 ring-azure-100 sm:h-10 sm:w-10 sm:rounded-xl">
                  <v.icon
                    className="h-4 w-4 sm:h-[1.15rem] sm:w-[1.15rem]"
                    aria-hidden="true"
                  />
                </span>
                <p className="mt-2.5 text-[0.85rem] font-semibold leading-snug text-navy-800 sm:mt-3.5 sm:text-[0.98rem]">
                  {v.title}
                </p>
                <p className="mt-1 text-[0.76rem] leading-[1.45] text-muted sm:mt-1.5 sm:text-[0.9rem] sm:leading-relaxed">
                  <span className="sm:hidden">{v.textShort}</span>
                  <span className="hidden sm:inline">{v.text}</span>
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <WhatsAppButton
              className="w-full sm:w-auto"
              ariaLabel="Falar com a Dra. Sueli pelo WhatsApp"
            >
              Falar com a Dra. Sueli
            </WhatsAppButton>

            <div className="flex flex-col text-[0.88rem] text-muted sm:text-[0.9rem]">
              <a
                href={`tel:${PHONE_E164}`}
                className="inline-flex items-center gap-2 py-1.5 hover:text-azure-700"
              >
                <Phone className="h-4 w-4 text-azure-600" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 break-all py-1.5 hover:text-azure-700"
              >
                <Mail className="h-4 w-4 text-azure-600" aria-hidden="true" />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
