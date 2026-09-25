import { ImageResponse } from "next/og";
import { EXTENSION } from "@/lib/site";

// Social card. Uses the renderer's default sans — brand fonts would need font
// files bundled with the repo. Until then the card carries the mark only: the
// wordmark must never be set in another face (03 · Logo).
export const alt = "CoGraph — AI already writes your code. We make sure you still understand it.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0f14",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(55,211,155,0.16), rgba(11,15,20,0) 55%)",
          padding: "72px 80px",
          color: "#f6f7f9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="44" height="64" viewBox="0 0 16.5 24">
            <path d="M4.5 12 13.5 3" stroke="#4f8cff" strokeWidth="1.35" strokeLinecap="round" />
            <path d="M4.5 12 13.5 21" stroke="#ff6b9a" strokeWidth="1.35" strokeLinecap="round" />
            <circle cx="13.5" cy="3" r="2.97" fill="#4f8cff" />
            <circle cx="13.5" cy="21" r="2.97" fill="#ff6b9a" />
            <circle cx="4.5" cy="12" r="4.5" fill="#37d39b" />
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            AI already writes your code.
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05, color: "#9fb0c3" }}>
            We make sure you still understand it.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1e2d3d",
            paddingTop: 28,
            fontSize: 22,
            color: "#9fb0c3",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <span>cograph.co · Call graphs derived from the syntax tree</span>
          <span style={{ color: "#37d39b" }}>VS Code · v{EXTENSION.version}</span>
        </div>
      </div>
    ),
    size
  );
}
