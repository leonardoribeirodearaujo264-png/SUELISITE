"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./ui/WhatsAppButton";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the sheet.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-100/80 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
        <Link
          href="#inicio"
          className="rounded-xl"
          aria-label="SCD Advocacia & Consultoria Jurídica — ir para o início"
        >
          <Logo />
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[0.92rem] font-medium text-navy-600 transition-colors hover:bg-azure-50 hover:text-azure-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppButton
            className="hidden sm:inline-flex"
            ariaLabel="Falar com uma advogada pelo WhatsApp"
          >
            Falar com uma advogada
          </WhatsAppButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-11 w-11 place-items-center rounded-xl border border-navy-100 bg-white text-navy-700 transition-colors hover:border-azure-300 hover:text-azure-700 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-navy-100 bg-white lg:hidden"
      >
        <nav aria-label="Navegação principal (celular)" className="shell py-4">
          <ul className="flex flex-col divide-y divide-navy-100/80">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[3.25rem] items-center text-[1.05rem] font-medium text-navy-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <WhatsAppButton
            className="mt-5 w-full"
            ariaLabel="Falar com uma advogada pelo WhatsApp"
          >
            Falar com uma advogada
          </WhatsAppButton>
        </nav>
      </div>
    </header>
  );
}
