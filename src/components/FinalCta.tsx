import { WhatsAppButton } from "./ui/WhatsAppButton";
import { TabDivider } from "./ui/icons";

export function FinalCta() {
  return (
    <section
      aria-labelledby="cta-final-title"
      className="relative overflow-hidden bg-azure-700 py-20 text-white lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46rem 28rem at 50% -10%, rgba(255,255,255,.18) 0%, transparent 62%), radial-gradient(40rem 26rem at 88% 108%, rgba(11,26,48,.45) 0%, transparent 60%)",
        }}
      />

      <div className="shell relative flex flex-col items-center text-center">
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

        <p className="mt-5 text-[0.85rem] text-azure-200/80">
          Atendimento de segunda a sexta · Resposta pelo WhatsApp
        </p>
      </div>
    </section>
  );
}
