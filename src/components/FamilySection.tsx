import Image from "next/image";
import { WhatsAppButton } from "./ui/WhatsAppButton";

export function FamilySection() {
  return (
    <section
      aria-labelledby="familia-title"
      className="bg-paper py-20 lg:py-28"
    >
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Portrait photograph, natural 2:3 proportion */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 hidden h-28 w-28 rounded-3xl border border-gold-300/60 lg:block"
            />
            <figure className="relative overflow-hidden rounded-4xl bg-mist shadow-frame ring-1 ring-navy-900/5">
              <Image
                src="/images/criancas-dois.jpg"
                alt="Advogada sentada no chão, abraçada por duas crianças, com outras crianças ao redor usando camisetas com o coração de quebra-cabeça da conscientização do autismo."
                width={1100}
                height={1650}
                sizes="(max-width: 1023px) 90vw, 40vw"
                className="h-auto w-full object-cover"
              />
            </figure>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow">Nosso compromisso</p>

          <h2 id="familia-title" className="mt-5 text-display-md">
            Por trás de cada direito existe uma família buscando um futuro
            melhor.
          </h2>

          <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.75] text-muted">
            Na SCD Advocacia &amp; Consultoria Jurídica, cada situação é
            analisada individualmente, buscando orientar as famílias sobre os
            caminhos jurídicos disponíveis para proteção dos direitos da pessoa
            com autismo.
          </p>

          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-navy-100 bg-navy-100 sm:grid-cols-3">
            {[
              { k: "Escuta", v: "Tempo para entender a rotina e as necessidades da família." },
              { k: "Documentos", v: "Análise dos laudos, relatórios e comprovações disponíveis." },
              { k: "Caminhos", v: "Explicação clara das medidas que podem ser adotadas." },
            ].map((item) => (
              <div key={item.k} className="bg-white p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-azure-700">
                  {item.k}
                </p>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                  {item.v}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
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
