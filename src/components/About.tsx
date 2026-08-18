import Image from "next/image";
import { Mail, Phone, MessageCircleHeart, Users } from "lucide-react";
import { EMAIL, OAB_NUMBER, PHONE_DISPLAY, PHONE_E164 } from "@/lib/site";
import { WhatsAppButton } from "./ui/WhatsAppButton";

const VALUES = [
  {
    icon: MessageCircleHeart,
    title: "Atendimento humanizado",
    text: "Linguagem simples e acessível, com atenção ao contexto de cada família.",
  },
  {
    icon: Users,
    title: "Análise individual",
    text: "Cada caso é avaliado a partir dos documentos e da realidade apresentada.",
  },
];

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-paper py-20 lg:py-28">
      <div className="shell grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <figure className="overflow-hidden rounded-4xl bg-mist shadow-frame ring-1 ring-navy-900/5">
              <Image
                src="/images/sueli.jpg"
                alt="Dra. Sueli Pereira Dias, advogada, em pé, sorrindo, usando blazer vermelho sobre vestido preto."
                width={1100}
                height={1650}
                sizes="(max-width: 1023px) 80vw, 40vw"
                className="h-auto w-full object-cover"
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

          <h2 id="sobre-title" className="mt-5 text-display-md">
            Dra. Sueli Pereira Dias
          </h2>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="font-display text-[1.1rem] text-azure-700">
              SCD Advocacia &amp; Consultoria Jurídica
            </p>
            <span className="law-tag">{OAB_NUMBER}</span>
          </div>

          <div className="mt-6 space-y-4 text-[1.02rem] leading-[1.75] text-muted">
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

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {VALUES.map((v) => (
              <li
                key={v.title}
                className="rounded-2xl border border-navy-100 bg-mist/70 p-5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-azure-700 ring-1 ring-azure-100">
                  <v.icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                </span>
                <p className="mt-3.5 text-[0.98rem] font-semibold text-navy-800">
                  {v.title}
                </p>
                <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted">
                  {v.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton
              className="w-full sm:w-auto"
              ariaLabel="Falar com a Dra. Sueli pelo WhatsApp"
            >
              Falar com a Dra. Sueli
            </WhatsAppButton>

            <div className="flex flex-col text-[0.9rem] text-muted">
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
