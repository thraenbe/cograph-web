import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080810",
        "bg-2": "#0d0d1a",
        "bg-3": "#111122",
        primary: "#3b6ef8",
        "primary-dark": "#2a5de7",
        "primary-light": "#6b91ff",
        "primary-glow": "rgba(59,110,248,0.25)",
        node: {
          blue: "#3b6ef8",
          orange: "#f97316",
          green: "#22c55e",
          pink: "#ec4899",
          yellow: "#eab308",
          indigo: "#6366f1",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(59,110,248,0.12) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-30": "30px 30px",
      },
    },
  },
  plugins: [],
};

export default config;
