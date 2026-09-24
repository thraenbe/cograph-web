"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { GITHUB_URL, MARKETPLACE_URL, NAV } from "@/lib/site";

// Solid ground and a hairline — no translucency, no blur. Nav items are set
// in the mono system layer, like station names on a sign.
export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge bg-ground">
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <a href="#top" aria-label="CoGraph — back to top" className="shrink-0">
          <Logo size={26} />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="label text-[11px] text-ink-muted transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label text-[11px] text-ink-muted transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={MARKETPLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !h-9 !px-4"
          >
            Install free
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="label inline-flex h-10 items-center text-[11px] text-ink-muted hover:text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-edge bg-ground lg:hidden">
          <nav aria-label="Mobile" className="container-site flex flex-col py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-edge py-4 text-base text-ink-soft"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Install free for VS Code
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                View on GitHub
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
