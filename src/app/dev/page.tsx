import type { Metadata } from "next";
import Logo from "@/components/Logo";

// Placeholder for dev.cograph.co (served via src/middleware.ts host rewrite).
// Will later sit behind Google sign-in restricted to the two founders.
export const metadata: Metadata = {
  title: "CoGraph — Dev",
  robots: { index: false, follow: false },
};

export default function DevPlaceholder() {
  return (
    <main className="min-h-screen bg-dot-grid bg-dot-32 flex flex-col items-center justify-center gap-8 px-6 text-center">
      <Logo size={40} />
      <div>
        <p className="label text-signal text-xs mb-4">dev.cograph.co</p>
        <h1 className="font-display font-semibold text-4xl tracking-display text-ink">
          Development
        </h1>
        <p className="copy text-ink-muted mt-4 max-w-md">
          Internal development environment. Nothing to see here yet.
        </p>
      </div>
    </main>
  );
}
