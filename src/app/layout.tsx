import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 05 · Typography — three families, three jobs, no overlap.
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CoGraph — Read your codebase like a metro map",
  description:
    "CoGraph turns your codebase into a living knowledge graph — so you can read it like a metro map, even as AI rewrites it underneath you. Start free with our VS Code extension: real-time call-graph visualization for Python, TypeScript, JavaScript, Java, and C++.",
  keywords: [
    "code understanding",
    "knowledge graph",
    "call graph",
    "code visualization",
    "AI coding",
    "AI agents",
    "VS Code extension",
    "Python",
    "TypeScript",
    "JavaScript",
    "Java",
    "C++",
    "developer tools",
  ],
  openGraph: {
    title: "CoGraph — Read your codebase like a metro map",
    description:
      "A living knowledge graph of your codebase, even as AI rewrites it. The free VS Code extension is your way in.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoGraph — Read your codebase like a metro map",
    description:
      "A living knowledge graph of your codebase, even as AI rewrites it. Start free with the VS Code extension.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans bg-ground text-ink-soft antialiased">
        {children}
      </body>
    </html>
  );
}
