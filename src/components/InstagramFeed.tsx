"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Instagram, ArrowUpRight, Play } from "lucide-react";
import {
  EMBEDDED_POSTS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_POSTS,
  INSTAGRAM_TAGLINE,
  INSTAGRAM_URL,
  postUrl,
} from "@/lib/instagram";
import { SectionHeading } from "./ui/SectionHeading";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const EMBED_SCRIPT = "https://www.instagram.com/embed.js";
/** Below this width the gallery is shown instead of the embeds. */
const EMBED_MIN_WIDTH = 768;

export function InstagramFeed() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showEmbeds, setShowEmbeds] = useState(false);

  // Embeds are desktop-only, and only once the section is close to the
  // viewport — phones never pay for Instagram's script.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    if (!window.matchMedia(`(min-width: ${EMBED_MIN_WIDTH}px)`).matches) return;

    if (!("IntersectionObserver" in window)) {
      setShowEmbeds(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShowEmbeds(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!showEmbeds) return;

    const process = () => window.instgrm?.Embeds.process();

    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) {
      process();
      return;
    }

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    script.onload = process;
    document.body.appendChild(script);
  }, [showEmbeds]);

  return (
    <section
      ref={sectionRef}
      id="instagram"
      aria-labelledby="instagram-title"
      className="bg-paper py-16 lg:py-28"
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

        <div className="mx-auto mt-7 flex max-w-md items-center gap-3 rounded-2xl border border-navy-100 bg-white p-3 shadow-card sm:gap-4 sm:p-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white sm:h-12 sm:w-12">
            <Instagram className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.88rem] font-semibold text-navy-800 sm:text-[0.95rem]">
              @{INSTAGRAM_HANDLE}
            </p>
            <p className="truncate text-[0.76rem] text-muted sm:text-[0.82rem]">
              Direito dos autistas · Proteção da criança com TEA
            </p>
          </div>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !min-h-[2.5rem] shrink-0 !px-4 text-[0.82rem] sm:!min-h-[2.75rem] sm:!px-5 sm:text-[0.85rem]"
          >
            Seguir
          </Link>
        </div>

        {/* Mobile: compact square gallery, like the Instagram grid */}
        <ul className="mt-6 grid grid-cols-3 gap-1.5 sm:gap-2 md:hidden">
          {INSTAGRAM_POSTS.map((post) => (
            <li key={post.code}>
              <Link
                href={postUrl(post)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-lg bg-mist"
              >
                <Image
                  src={post.thumb}
                  alt={post.alt}
                  width={640}
                  height={640}
                  sizes="33vw"
                  className="h-full w-full object-cover"
                />
                {post.kind === "reel" && (
                  <span
                    aria-hidden="true"
                    className="absolute right-1.5 top-1.5 grid h-5 w-5 place-items-center rounded-full bg-black/45 text-white"
                  >
                    <Play className="h-2.5 w-2.5 fill-current" />
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop: the live embeds, with the gallery card as the fallback */}
        <div
          className="mt-10 hidden gap-6 md:grid md:grid-cols-3
                     [&_.instagram-media]:!m-0 [&_.instagram-media]:!min-w-0
                     [&_.instagram-media]:!w-full [&_.instagram-media]:!max-w-full
                     [&_.instagram-media]:!rounded-2xl [&_.instagram-media]:!shadow-none"
        >
          {EMBEDDED_POSTS.map((post) => (
            <blockquote
              key={post.code}
              className="instagram-media overflow-hidden rounded-2xl border border-navy-100 bg-mist"
              data-instgrm-permalink={postUrl(post)}
              data-instgrm-version="14"
            >
              {/* Replaced by the live post once Instagram's script runs, and a
                  working link if it never does. */}
              <Link
                href={postUrl(post)}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={post.thumb}
                  alt={post.alt}
                  width={640}
                  height={640}
                  sizes="(max-width: 1023px) 33vw, 25vw"
                  className="aspect-square w-full object-cover"
                />
                <span className="flex items-center justify-center gap-2 p-4 text-[0.9rem] font-medium text-navy-700">
                  <Instagram className="h-4 w-4 text-azure-600" aria-hidden="true" />
                  Ver publicação no Instagram
                </span>
              </Link>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 text-center">
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
