import type { SVGProps } from "react";

/**
 * WhatsApp glyph. Lucide dropped brand marks, so the logo lives here as
 * a single inline SVG shared by every CTA.
 */
export function WhatsAppIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.03-1.33-1.15-1.63-.12-.3-.01-.46.13-.61.14-.15.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.45s1.05 2.84 1.2 3.04c.15.2 2.07 3.16 5.02 4.32.7.3 1.25.48 1.68.61.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.31.17-1.43-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.19 6.41 2.19 11.85c0 1.74.46 3.42 1.32 4.9L2 22l5.4-1.42a9.82 9.82 0 0 0 4.64 1.18h.01c5.43 0 9.85-4.42 9.85-9.85A9.79 9.79 0 0 0 19 4.87A9.79 9.79 0 0 0 12.04 2Zm0 17.93h-.01a8.16 8.16 0 0 1-4.15-1.14l-.3-.18-3.09.81.83-3.01-.19-.31a8.13 8.13 0 0 1-1.25-4.35c0-4.51 3.67-8.18 8.18-8.18a8.13 8.13 0 0 1 5.78 2.4 8.13 8.13 0 0 1 2.39 5.79c0 4.51-3.67 8.17-8.19 8.17Z" />
    </svg>
  );
}

/**
 * Interlocking tab — a hairline nod to the awareness puzzle motif, used as a
 * section divider. Deliberately monochrome so it never competes with the
 * photography.
 */
export function TabDivider({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path
        d="M0 8h44a6 6 0 0 1 6-6 6 6 0 0 1 6 6h8a6 6 0 0 1 6 6 6 6 0 0 1 6-6h44"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
