"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Instagram, ArrowUpRight } from "lucide-react";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_POSTS,
  INSTAGRAM_TAGLINE,
  INSTAGRAM_URL,
} from "@/lib/instagram";
import { SectionHeading } from "./ui/SectionHeading";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const EMBED_SCRIPT = "https://www.instagram.com/embed.js";

/**
 * Featured Instagram posts, rendered with Instagram's official embed script.
 * The script is only fetched once the section is close to the viewport, so it
 * never costs anything on first paint.
 */
export function InstagramFeed() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  // Load the embeds only when the section is about to be seen.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || mounted) return;

    if (!("IntersectionObserver" in window)) {
      setMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [mounted]);

  // Inject Instagram's script once, then ask it to render the blockquotes.
  useEffect(() => {
    if (!mounted) return;

    const process = () => window.instgrm?.Embeds.process();

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${EMBED_SCRIPT}"]`,
    );

    if (existing) {
      process();
      return;
    }

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    script.onload = process;
    document.body.appendChild(script);
  }, [mounted]);

  return (
    <section
      ref={sectionRef}
      id="instagram"
      aria-labelledby="instagram-title"
      className="bg-paper py-20 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Instagram"
          id="instagram-title"
          title="Conteúdo sobre direitos da pessoa com autismo, toda semana."
          description={
            <>
              <span className="font-medium text-navy-700">
                “{INSTAGRAM_TAGLINE}”
              </span>{" "}
              Acompanhe o perfil do escritório para informações sobre TEA,
              BPC/LOAS e direitos das famílias.
            </>
          }
        />

        <div className="mx-auto mt-9 flex max-w-md items-center gap-4 rounded-2xl border border-navy-100 bg-white p-4 shadow-card">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white">
            <Instagram className="h-[1.35rem] w-[1.35rem]" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.95rem] font-semibold text-navy-800">
              @{INSTAGRAM_HANDLE}
            </p>
            <p className="truncate text-[0.82rem] text-muted">
              Direito dos autistas · Proteção integral da criança com TEA
            </p>
          </div>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !min-h-[2.75rem] shrink-0 !px-5 text-[0.85rem]"
          >
            Seguir
          </Link>
        </div>

        {/* Instagram sets inline min-width/margin on its blockquote — reset it
            so the embeds behave inside the grid on small screens. */}
        <div
          className="mt-10 grid gap-6 md:grid-cols-3
                     [&_.instagram-media]:!m-0 [&_.instagram-media]:!min-w-0
                     [&_.instagram-media]:!w-full [&_.instagram-media]:!max-w-full
                     [&_.instagram-media]:!rounded-2xl [&_.instagram-media]:!shadow-none"
        >
          {INSTAGRAM_POSTS.map((permalink, i) => (
            <blockquote
              key={permalink}
              className="instagram-media grid min-h-[22rem] place-items-center rounded-2xl border border-navy-100 bg-mist p-6 text-center"
              data-instgrm-permalink={permalink}
              data-instgrm-version="14"
            >
              {/* Shown until Instagram's script swaps in the live post — and it
                  stays as a working link if the script never loads. */}
              <Link
                href={permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center gap-3 text-[0.92rem] font-medium text-navy-600 hover:text-azure-700"
              >
                <Instagram className="h-7 w-7 text-azure-600" aria-hidden="true" />
                Ver publicação {i + 1} no Instagram
              </Link>
            </blockquote>
          ))}
        </div>

        {!mounted && (
          <p className="sr-only" role="status">
            Carregando as publicações do Instagram.
          </p>
        )}

        <div className="mt-9 text-center">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ver o perfil no Instagram
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
