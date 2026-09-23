"use client";

import { useState } from "react";

// A shell command a developer can copy straight into a terminal.
export default function CopyCommand({
  command,
  className = "",
}: {
  command: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be blocked (insecure context, permissions) — the command
      // stays selectable, so there is nothing else to do.
    }
  }

  return (
    <div
      className={`group inline-flex max-w-full items-center gap-3 rounded-md border border-edge bg-card/60 py-1.5 pl-4 pr-1.5 font-mono text-[13px] ${className}`}
    >
      <span className="select-none text-ink-dim" aria-hidden="true">
        $
      </span>
      <code className="min-w-0 truncate text-ink-soft">{command}</code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy install command"}
        className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded px-2.5 text-xs text-ink-dim transition-colors hover:bg-edge/60 hover:text-ink"
      >
        {copied ? (
          <>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="#37d39b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-signal">Copied</span>
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M10.5 3.5V3A1.5 1.5 0 009 1.5H4A1.5 1.5 0 002.5 3v5A1.5 1.5 0 004 9.5h.5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            Copy
          </>
        )}
      </button>
    </div>
  );
}
