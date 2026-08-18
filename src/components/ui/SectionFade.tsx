type Props = {
  /** Which edge of the section the fade sits on. */
  edge: "top" | "bottom";
  /**
   * "light" ramps between the white page and a dark section;
   * "footer" lands on the footer's navy.
   */
  tone?: "light" | "footer";
};

const CLASS: Record<string, string> = {
  "top-light": "fade-into-dark top-0",
  "bottom-light": "fade-out-of-dark bottom-0",
  "bottom-footer": "fade-into-footer bottom-0",
};

/**
 * Decorative ramp placed at the edge of a dark section so its background
 * blends into the neighbouring one instead of meeting it at a hard line.
 */
export function SectionFade({ edge, tone = "light" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-0 h-14 sm:h-20 lg:h-28 ${
        CLASS[`${edge}-${tone}`]
      }`}
    />
  );
}
