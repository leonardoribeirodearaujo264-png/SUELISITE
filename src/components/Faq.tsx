"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/faq";
import { SectionHeading } from "./ui/SectionHeading";
import { WhatsAppButton } from "./ui/WhatsAppButton";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="bg-paper py-12 sm:py-16 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          id="duvidas-title"
          title="As perguntas que as famílias mais fazem."
          description="Respostas objetivas sobre o BPC/LOAS e a documentação envolvida."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-navy-100 overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-azure-50/60 sm:px-7"
                  >
                    <span className="text-[1.02rem] font-semibold leading-snug text-navy-800">
                      {item.question}
                    </span>
                    <span
                      className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-azure-600 bg-azure-600 text-white"
                          : "border-navy-200 text-navy-500"
                      }`}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  hidden={!isOpen}
                  className="px-5 pb-6 sm:px-7"
                >
                  <p className="max-w-2xl text-[0.98rem] leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-3xl bg-mist p-7 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[1rem] font-medium leading-snug text-navy-800">
            Sua dúvida não está na lista?
            <span className="block font-normal text-muted">
              Envie sua pergunta e receba orientação sobre o seu caso.
            </span>
          </p>
          <WhatsAppButton className="w-full shrink-0 sm:w-auto">
            Enviar minha dúvida
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
