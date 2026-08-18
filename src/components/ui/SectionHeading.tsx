import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Light copy for use on the navy sections. */
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  /** Heading level, so the document outline stays correct. */
  as?: "h2" | "h3";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "center",
  className = "",
  as: Tag = "h2",
  id,
}: Props) {
  const isLight = tone === "light";

  return (
    <div
      className={[
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      ].join(" ")}
    >
      {eyebrow && (
        <p className={`eyebrow ${isLight ? "eyebrow-light" : ""}`}>{eyebrow}</p>
      )}
      <Tag
        id={id}
        className={`mt-3 text-display-sm sm:mt-4 ${isLight ? "text-white" : "text-navy-800"}`}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={`mt-3 text-[0.95rem] leading-relaxed sm:mt-4 sm:text-[1.02rem] ${
            isLight ? "text-azure-100/85" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
