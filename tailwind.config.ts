import type { Config } from "tailwindcss";

// Tokens come straight from the brand guidelines (04 · Colour — Palette).
// Ground and neutrals carry ~90% of every surface, one line colour carries ~8%,
// signal green carries the remaining ~2%.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ground mode surfaces
        ground: "#0b0f14",
        card: "#131b24",
        edge: "#1e2d3d",
        // Primary accent
        signal: "#37d39b",
        // The four line colours — one hue per route, never mixed for mood
        trace: "#4f8cff",
        amber: "#ffb454",
        magenta: "#ff6b9a",
        docblue: "#2a6fdb",
        // Type on ground
        ink: {
          DEFAULT: "#f6f7f9",
          soft: "#e8eef5",
          muted: "#9fb0c3",
          dim: "#566273",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        // Display tracking, -0.03 to -0.06em above 32px
        display: "-0.04em",
        "display-tight": "-0.05em",
        // The mono system layer is always set at 0.16em
        label: "0.16em",
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(159,176,195,0.10) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-32": "32px 32px",
      },
    },
  },
  plugins: [],
};

export default config;
