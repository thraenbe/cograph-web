import type { Metadata } from "next";
import Logo from "@/components/Logo";

// Placeholder for plan.cograph.co (served via src/middleware.ts host rewrite).
export const metadata: Metadata = {
  title: "CoGraph — Plan",
  robots: { index: false, follow: false },
};

export default function PlanPlaceholder() {
  return (
    <main className="min-h-screen bg-dot-grid bg-dot-32 flex flex-col items-center justify-center gap-8 px-6 text-center">
      <Logo size={40} />
      <div>
        <p className="label text-trace text-xs mb-4">plan.cograph.co</p>
        <h1 className="font-display font-semibold text-4xl tracking-display text-ink">
          Planning
        </h1>
        <p className="copy text-ink-muted mt-4 max-w-md">
          Internal planning space. Nothing to see here yet.
        </p>
      </div>
    </main>
  );
}
