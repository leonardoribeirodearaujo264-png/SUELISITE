import Image from "next/image";
import { WhatsAppButton } from "./ui/WhatsAppButton";

const PILLARS = [
  { k: "Escuta", v: "Tempo para entender a rotina e as necessidades da família." },
  { k: "Documentos", v: "Análise dos laudos, relatórios e comprovações disponíveis." },
  { k: "Caminhos", v: "Explicação clara das medidas que podem ser adotadas." },
];

export function FamilySection() {
  return (
    <section
      aria-labelledby="familia-title"
      className="py-12 sm:py-16 lg:py-28"
    >
      <div className="shell grid items-center gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-16">
        {/* On phones the copy leads and the photograph follows at a controlled
            height; from lg up the portrait keeps its natural 2:3 proportion. */}
        <div className="order-2 lg:order-1 lg:col-span-5">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 hidden h-28 w-28 rounded-3xl border border-gold-300/60 lg:block"
            />
            <figure className="relative h-[280px] overflow-hidden rounded-2xl bg-mist shadow-frame ring-1 ring-azure-100 sm:h-[360px] lg:h-auto lg:rounded-4xl">
              <Image
                src="/images/criancas-dois.jpg"
                alt="Advogada sentada no chão, abraçada por duas crianças, com outras crianças ao redor usando camisetas com o coração de quebra-cabeça da conscientização do autismo."
                width={1100}
                height={1650}
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="h-full w-full object-cover object-[center_22%] lg:h-auto lg:object-center"
              />
            </figure>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <p className="eyebrow">Nosso compromisso</p>

          <h2 id="familia-title" className="mt-3 text-display-md sm:mt-5">
            Por trás de cada direito existe uma família buscando um futuro
            melhor.
          </h2>

          <p className="mt-4 max-w-xl text-[0.95rem] leading-[1.65] text-muted sm:mt-6 sm:text-[1.05rem] sm:leading-[1.75]">
            Na SCD Advocacia &amp; Consultoria Jurídica, cada situação é
            analisada individualmente, buscando orientar as famílias sobre os
            caminhos jurídicos disponíveis para proteção dos direitos da pessoa
            com autismo.
          </p>

          <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-navy-100 bg-navy-100 sm:mt-8 sm:grid-cols-3">
            {PILLARS.map((item) => (
              <div key={item.k} className="bg-white p-3.5 sm:p-5">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-azure-700 sm:text-[0.68rem]">
                  {item.k}
                </p>
                <p className="mt-1.5 text-[0.8rem] leading-[1.45] text-muted sm:mt-2 sm:text-[0.9rem] sm:leading-relaxed">
                  {item.v}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8">
            <WhatsAppButton
              className="w-full sm:w-auto"
              ariaLabel="Conversar com a equipe da SCD Advocacia pelo WhatsApp"
            >
              Conversar com nossa equipe
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
