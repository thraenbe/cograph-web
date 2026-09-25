import Link from "next/link";
import Logo from "./Logo";
import {
  CHANGELOG_URL,
  CONTACT_URL,
  DEMO_URL,
  GITHUB_URL,
  MARKETPLACE_URL,
} from "@/lib/site";

// A small piece of the graph motif — footers are one of the places the
// grammar is meant to appear (06 · Where it goes). 45°/90° only, filled
// leaves, hollow interchanges, one hue per route.
function FooterMotif() {
  return (
    <svg width="100" height="30" viewBox="0 0 100 30" fill="none" aria-hidden="true" className="opacity-70">
      <path d="M6 24H34" stroke="#37d39b" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M34 24H76" stroke="#ffb454" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M34 24 52 6" stroke="#4f8cff" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M76 24 94 6" stroke="#ff6b9a" strokeWidth="2.3" strokeLinecap="round" />
      <circle cx="6" cy="24" r="3.5" fill="#e8eef5" />
      <circle cx="52" cy="6" r="3.5" fill="#e8eef5" />
      <circle cx="94" cy="6" r="3.5" fill="#e8eef5" />
      <circle cx="34" cy="24" r="4.5" fill="#0b0f14" stroke="#e8eef5" strokeWidth="2.3" />
      <circle cx="76" cy="24" r="4.5" fill="#0b0f14" stroke="#e8eef5" strokeWidth="2.3" />
    </svg>
  );
}

type FooterLink = { label: string; href: string; external?: boolean };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "VS Code Marketplace", href: MARKETPLACE_URL, external: true },
      { label: "Source on GitHub", href: GITHUB_URL, external: true },
      { label: "Changelog", href: CHANGELOG_URL, external: true },
      { label: "Review demo", href: DEMO_URL, external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How it works", href: "/#how" },
      { label: "Roadmap", href: "/#roadmap" },
      { label: "Design partners", href: "/#partners" },
      { label: "Team", href: "/#team" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "LinkedIn", href: CONTACT_URL, external: true },
      { label: "GitHub issues", href: `${GITHUB_URL}/issues`, external: true },
      { label: "Impressum", href: "/impressum" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-edge pb-10 pt-16">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-4">
            <Logo size={26} />
            <p className="copy max-w-xs text-sm text-ink-muted">
              Read your codebase like a metro map.
            </p>
            <FooterMotif />
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <span className="label text-[10px] text-ink-dim">{col.title}</span>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm link-quiet"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="text-sm link-quiet">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-edge pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-ink-dim">
            © {new Date().getFullYear()} CoGraph · Tübingen, Germany
          </p>
          <p className="font-mono text-xs text-ink-dim">Extension released under the MIT License</p>
        </div>
      </div>
    </footer>
  );
}
