"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ArrowUpRight, GitHubIcon } from "./ui";
import { GITHUB_URL, MARKETPLACE_URL, NAV } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-edge/80 bg-ground/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <a href="#top" aria-label="CoGraph — back to top" className="shrink-0">
          <Logo size={26} />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm link-quiet">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm link-quiet"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <a
            href={MARKETPLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-4"
          >
            Install free
            <ArrowUpRight />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted hover:text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
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
                className="border-b border-edge/60 py-3.5 text-base text-ink-soft"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-5 flex flex-col gap-3">
              <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Install free for VS Code
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <GitHubIcon size={16} />
                View on GitHub
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
