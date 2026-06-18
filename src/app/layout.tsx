import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

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
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans bg-bg text-white antialiased">{children}</body>
    </html>
  );
}
