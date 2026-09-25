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
      className={`inline-flex h-11 max-w-full items-center gap-3 border border-edge pl-4 font-mono text-[13px] ${className}`}
    >
      <span className="select-none text-ink-dim" aria-hidden="true">
        $
      </span>
      <code className="min-w-0 flex-1 truncate text-ink-soft">{command}</code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy install command"}
        className={`label h-full shrink-0 border-l border-edge px-4 text-[10px] transition-colors hover:bg-card hover:text-ink ${
          copied ? "text-signal" : "text-ink-dim"
        }`}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
