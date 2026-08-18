import { WhatsAppButton } from "./ui/WhatsAppButton";
import { TabDivider } from "./ui/icons";

export function FinalCta() {
  return (
    <section
      aria-labelledby="cta-final-title"
      className="relative overflow-hidden bg-gradient-to-b from-[#174F8A] to-[#0D3763] py-14 text-white sm:py-20 lg:py-24"
    >
      <div className="shell relative z-10 flex flex-col items-center text-center">
        <TabDivider className="h-4 w-28 text-gold-300" />

        <h2
          id="cta-final-title"
          className="mt-6 max-w-3xl text-display-md text-white"
        >
          Não fique com dúvidas sobre os direitos do seu filho.
        </h2>

        <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-azure-100/90">
          Converse com nossa equipe e receba orientação jurídica sobre o seu caso.
        </p>

        <WhatsAppButton
          className="mt-9 w-full max-w-md !min-h-[3.5rem] !px-8 text-[1.02rem] uppercase tracking-[0.04em] sm:w-auto"
          ariaLabel="Falar pelo WhatsApp com a SCD Advocacia"
        >
          Falar pelo WhatsApp
        </WhatsAppButton>

        <p className="mt-5 text-[0.85rem] text-azure-100/90">
          Atendimento de segunda a sexta · Resposta pelo WhatsApp
        </p>
      </div>
    </section>
  );
}
