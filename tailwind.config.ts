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
        // Paper mode (04 · Colour — Application): used for exactly one band
        paper: {
          DEFAULT: "#f6f7f9",
          white: "#ffffff",
          rule: "#e2e5ea",
          ink: "#101418",
          muted: "#6b7280",
        },
        // Type on ground. `dim` (#566273) is 3.1:1 on ground — lines, idle
        // nodes and rules only, never text. `faint` is the quietest text tone
        // that still clears WCAG AA (5.5:1 on ground, 5.0:1 on card).
        ink: {
          DEFAULT: "#f6f7f9",
          soft: "#e8eef5",
          muted: "#9fb0c3",
          faint: "#7d8b9c",
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
    },
  },
  plugins: [],
};

export default config;
