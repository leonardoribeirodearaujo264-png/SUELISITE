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
          800: "#0B1A30",
          900: "#071222",
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
          400: "#C9A55C",
          500: "#B78F3F",
          600: "#95712C",
        },
        ink: "#0E1726",
        muted: "#54637A",
        paper: "#FFFFFF",
        mist: "#F5F9FD",
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
      boxShadow: {
        card: "0 1px 2px rgba(11,26,48,.04), 0 8px 24px -12px rgba(11,26,48,.10)",
        lift: "0 2px 4px rgba(11,26,48,.05), 0 18px 42px -18px rgba(11,26,48,.18)",
        frame: "0 24px 70px -34px rgba(11,26,48,.38)",
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
