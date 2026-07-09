import type { Metadata } from "next";
import Link from "next/link";
import { IMPRINT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum — CoGraph",
  description: "Legal notice / imprint for CoGraph.",
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-bg">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-24">
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-widest text-primary hover:text-white/75 transition-colors"
        >
          ← CoGraph
        </Link>

        <h1 className="mt-6 text-3xl lg:text-4xl font-semibold tracking-tight">
          Impressum
        </h1>

        <div className="mt-10 flex flex-col gap-8 text-sm text-white/60 leading-relaxed">
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-3">
              Angaben gemäß § 5 DDG
            </h2>
            <p>
              {IMPRINT.names.join(" & ")}
              <br />
              {IMPRINT.street}
              <br />
              {IMPRINT.city}, {IMPRINT.country}
            </p>
            <p className="mt-3 text-white/40">
              CoGraph is not yet a registered company. This website is
              operated by the individuals named above.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-3">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a
                href={`mailto:${IMPRINT.email}`}
                className="text-white/75 hover:text-white transition-colors"
              >
                {IMPRINT.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-3">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              {IMPRINT.names.join(" & ")}
              <br />
              {IMPRINT.street}
              <br />
              {IMPRINT.city}, {IMPRINT.country}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
