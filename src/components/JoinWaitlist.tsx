"use client";

import { useEffect, useRef, useState } from "react";
import { LogoMark } from "./Logo";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/site";

type Status = "idle" | "loading" | "success";
type Variant = "waitlist" | "partner";

const COPY: Record<
  Variant,
  { eyebrow: string; title: string; body: string; submit: string; subject: string; done: string }
> = {
  waitlist: {
    eyebrow: "Team version",
    title: "Hear when the team version opens.",
    body: "The graph in your repository and in pull requests is in design. Leave an email and we'll write once when there is something you can use.",
    submit: "Join the waitlist",
    subject: "New CoGraph waitlist signup",
    done: "We'll write once, when there is something you can use.",
  },
  partner: {
    eyebrow: "Design partners",
    title: "Pilot the team version with us.",
    body: "Four weeks, one repository, no cost. Tell us where to reach you and roughly how big the team is — we'll reply personally.",
    submit: "Send",
    subject: "CoGraph design partner application",
    done: "Thanks — one of us will reply personally.",
  },
};

const TEAM_SIZES = ["1–4", "5–15", "16–50", "51+"];

export default function JoinWaitlist({
  className = "",
  label,
  variant = "waitlist",
  showArrow = true,
}: {
  className?: string;
  label?: string;
  variant?: Variant;
  showArrow?: boolean;
}) {
  const copy = COPY[variant];
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  // Honeypot — bots fill this; humans never see it.
  const [botcheck, setBotcheck] = useState("");
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Lock background scroll + close on Escape while the modal is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
    // Reset shortly after so the success/error state doesn't flash on reopen.
    setTimeout(() => {
      setStatus("idle");
      setEmail("");
      setTeamSize("");
      setNote("");
      setError("");
    }, 200);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!valid) {
      setError("Please enter a valid email address.");
      return;
    }

    // Web3Forms: submissions are emailed to the founder inbox on file. The
    // access key (from site config, env-overridable) is a public routing token —
    // the destination address lives on Web3Forms' servers, never in this repo.
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          email: trimmed,
          ...(variant === "partner" ? { team_size: teamSize || "not given", note } : {}),
          subject: copy.subject,
          from_name: variant === "partner" ? "CoGraph design partners" : "CoGraph waitlist",
          botcheck, // honeypot — real users leave this empty
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("idle");
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("idle");
      setError("Network error — please try again.");
    }
  }

  const inputClass =
    "w-full rounded-[3px] border border-edge bg-ground px-4 py-3 text-sm text-ink placeholder-ink-dim transition-colors focus:border-signal/60 focus:outline-none";

  return (
    <>
      <button ref={triggerRef} type="button" onClick={() => setOpen(true)} className={className}>
        {label ?? copy.submit}
        {showArrow && <span aria-hidden="true">→</span>}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`dialog-title-${variant}`}
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-ground/90" />

          {/* Card */}
          <div
            className="relative max-h-[calc(100vh-2rem)] w-full max-w-md overflow-y-auto border border-edge bg-ground p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="label absolute right-5 top-5 text-[10px] text-ink-dim transition-colors hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {status === "success" ? (
              <div className="relative flex flex-col items-center gap-4 py-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center border border-signal/50">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                    <path d="M8 15.5L13 20.5L22 10" stroke="#37d39b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 id={`dialog-title-${variant}`} className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
                  Received.
                </h3>
                <p className="copy text-sm text-ink-muted">{copy.done}</p>
                <button
                  type="button"
                  onClick={close}
                  className="btn-secondary mt-2"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="relative flex flex-col gap-5">
                <LogoMark size={26} />

                <div className="flex flex-col gap-2">
                  <span className="label text-[10px] text-signal">{copy.eyebrow}</span>
                  <h3 id={`dialog-title-${variant}`} className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
                    {copy.title}
                  </h3>
                  <p className="copy text-sm text-ink-muted">{copy.body}</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  {/* Honeypot — visually hidden, off from a11y/tab order */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    checked={!!botcheck}
                    onChange={(e) => setBotcheck(e.target.checked ? "1" : "")}
                    style={{ position: "absolute", left: "-9999px", opacity: 0 }}
                  />
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs text-ink-muted">Work email</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="you@company.com"
                      autoFocus
                      aria-invalid={!!error}
                      className={inputClass}
                    />
                  </label>

                  {variant === "partner" && (
                    <>
                      <fieldset className="flex flex-col gap-1.5">
                        <legend className="mb-1.5 text-xs text-ink-muted">Engineers on the team (optional)</legend>
                        <div className="grid grid-cols-4 gap-2">
                          {TEAM_SIZES.map((size) => (
                            <button
                              key={size}
                              type="button"
                              aria-pressed={teamSize === size}
                              onClick={() => setTeamSize(teamSize === size ? "" : size)}
                              className={`rounded-[3px] border px-2 py-2 font-mono text-xs transition-colors ${
                                teamSize === size
                                  ? "border-signal/60 bg-signal/10 text-ink"
                                  : "border-edge bg-ground text-ink-muted hover:border-ink-dim"
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </fieldset>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-xs text-ink-muted">Stack or context (optional)</span>
                        <textarea
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          rows={3}
                          placeholder="e.g. TypeScript monorepo on GitHub, heavy Copilot use"
                          className={`${inputClass} resize-none`}
                        />
                      </label>
                    </>
                  )}

                  {error && <p className="text-xs text-amber">{error}</p>}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary mt-1 disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <circle cx="8" cy="8" r="6" stroke="rgba(11,15,20,0.3)" strokeWidth="2" />
                          <path d="M14 8A6 6 0 008 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      copy.submit
                    )}
                  </button>
                </form>

                <p className="text-center text-xs leading-relaxed text-ink-dim">
                  We use your details only to reply about CoGraph. The form is
                  delivered to us by Web3Forms.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
