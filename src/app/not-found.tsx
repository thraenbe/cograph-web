import Link from "next/link";
import Logo from "@/components/Logo";

// 06 · The graph motif lists the 404 as one of the places it belongs: a
// route that ends at a station that isn't there.
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Logo size={28} />
      <svg width="240" height="60" viewBox="0 0 240 60" fill="none" aria-hidden="true" className="mt-14">
        <path d="M12 44H120L150 14" stroke="#4f8cff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M150 14H228" stroke="#566273" strokeWidth="4" strokeDasharray="2 10" strokeLinecap="round" />
        <circle cx="12" cy="44" r="6" fill="#e8eef5" />
        <circle cx="120" cy="44" r="8" fill="#0b0f14" stroke="#e8eef5" strokeWidth="3" />
        <circle cx="228" cy="14" r="8" fill="#0b0f14" stroke="#566273" strokeWidth="2.5" strokeDasharray="3 3" />
      </svg>
      <span className="label mt-10 text-[11px] text-ink-dim">404 · No such station</span>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-display text-ink sm:text-4xl">
        This page isn&apos;t on the map.
      </h1>
      <p className="lead mt-4 max-w-md">The route you followed ends here. The rest of the line is back at the start.</p>
      <Link href="/" className="btn-primary mt-9">
        Back to CoGraph
      </Link>
    </main>
  );
}
