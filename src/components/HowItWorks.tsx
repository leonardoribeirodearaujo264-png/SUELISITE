import { MessageSquareText, FileSearch, Compass } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

type Step = { n: string; icon: LucideIcon; title: string; text: string };

/** A real sequence, so the numbering carries information. */
const STEPS: Step[] = [
  {
    n: "01",
    icon: MessageSquareText,
    title: "Conte sua situação",
    text: "Entre em contato e explique brevemente o caso.",
  },
  {
    n: "02",
    icon: FileSearch,
    title: "Análise jurídica",
    text: "A equipe avaliará as informações e documentos apresentados.",
  },
  {
    n: "03",
    icon: Compass,
    title: "Orientação",
    text: "Você receberá orientação sobre os direitos e as medidas jurídicas que podem ser adotadas.",
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="como-funciona-title"
      className="bg-steps py-12 sm:py-16 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Como funciona"
          id="como-funciona-title"
          title="Três passos até entender o seu caso."
          description="Um processo simples, pensado para famílias que já lidam com muitas rotinas."
        />

        <ol className="relative mt-12 grid gap-5 lg:grid-cols-3 lg:gap-7">
          {/* connecting line, desktop only */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[3.25rem] hidden border-t border-dashed border-navy-200 lg:block"
          />

          {STEPS.map((step, i) => (
            <li key={step.n} className="relative">
              <Reveal delay={i * 0.08}>
                <article className="card h-full">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy-800 text-white">
                      <step.icon className="h-[1.3rem] w-[1.3rem]" aria-hidden="true" />
                    </span>
                    <span
                      className="font-display text-[2rem] font-semibold leading-none text-gold-500"
                      aria-hidden="true"
                    >
                      {step.n}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[1.18rem] font-semibold">
                    <span className="sr-only">Passo {step.n}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">
                    {step.text}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
