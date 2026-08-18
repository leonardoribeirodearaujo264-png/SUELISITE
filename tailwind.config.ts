import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /* Institutional navy — authority, dark surfaces */
        navy: {
          50: "#EEF3FA",
          100: "#D5E2F2",
          200: "#A9C1E2",
          300: "#7196C9",
          400: "#3F6BA8",
          500: "#22497F",
          600: "#173663",
          700: "#11284A",
          800: "#0D2A4A",
          900: "#081D33",
        },
        /* Awareness azure — the page's dominant accent */
        azure: {
          50: "#F2F7FE",
          100: "#E3EEFC",
          200: "#C6DBF8",
          300: "#96BEEF",
          400: "#5B96E0",
          500: "#2B72CE",
          600: "#1C5FBF",
          700: "#164E9E",
          800: "#153F7C",
          900: "#143560",
        },
        /* Discreet gold from the office identity — hairlines and small marks only */
        gold: {
          200: "#EBDCB8",
          300: "#DCC58C",
          400: "#C8A451",
          500: "#B08C36",
          600: "#8F7029",
        },
        ink: "#0E1726",
        muted: "#54637A",

        /* Flat section surfaces. Sections alternate between these instead of
           blending through gradients, so nothing reads as a shadow. */
        paper: "#FFFFFF",
        wash: "#F4F8FD",   /* hero */
        mist: "#EEF5FC",   /* Você sabia / Direitos */
        steps: "#F2F7FC",  /* Como funciona */
        social: "#F5F8FC", /* Google e Instagram */
        deep: "#0D2A4A",   /* BPC/LOAS */
        graphite: "#081D33", /* rodapé */
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["clamp(1.75rem,4.4vw,2.4rem)", { lineHeight: "1.12", letterSpacing: "-0.018em" }],
        "display-md": ["clamp(1.95rem,4.6vw,2.85rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.15rem,5.6vw,3.4rem)", { lineHeight: "1.05", letterSpacing: "-0.022em" }],
      },
      /* Light, blue-tinted shadows — depth without a grey cast */
      boxShadow: {
        card: "0 1px 2px rgba(13,42,74,.04), 0 6px 18px -14px rgba(13,42,74,.10)",
        lift: "0 2px 4px rgba(13,42,74,.04), 0 14px 30px -20px rgba(13,42,74,.14)",
        frame: "0 16px 44px -32px rgba(13,42,74,.22)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      maxWidth: {
        shell: "76rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        "fade-up": "fade-up .6s cubic-bezier(.22,.61,.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
