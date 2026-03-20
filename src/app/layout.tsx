import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cograph — Real-Time Call Graph Visualization for VS Code",
  description:
    "As AI agents change your code, Cograph reflects it instantly. Real-time, graph-based call graph visualization for Python, TypeScript, and JavaScript. Free VS Code extension.",
  keywords: [
    "VS Code extension",
    "call graph",
    "code visualization",
    "AI coding",
    "Python",
    "TypeScript",
    "JavaScript",
    "developer tools",
  ],
  openGraph: {
    title: "Cograph — Real-Time Intelligence for AI-Driven Development",
    description:
      "Making the invisible visible — as AI agents change your code, Cograph reflects it instantly.",
    type: "website",
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
