"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "loading" | "success";

export default function JoinWaitlist({
  className = "",
  label = "Join the waitlist",
}: {
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  // Honeypot — bots fill this; humans never see it.
  const [botcheck, setBotcheck] = useState("");

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
    // Reset shortly after so the success/error state doesn't flash on reopen.
    setTimeout(() => {
      setStatus("idle");
      setEmail("");
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

    // Web3Forms: signups are emailed to the founder inbox on file. The access
    // key is a public routing token — the destination address lives on
    // Web3Forms' servers, never in this repo. Set it in .env.local (local) or
    // your host's env (prod) as NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError("Waitlist isn’t configured yet. Please try again later.");
      return;
    }

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
          access_key: accessKey,
          email: trimmed,
          subject: "New CoGraph waitlist signup",
          from_name: "CoGraph waitlist",
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

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M2.5 8H13M9.5 4.5L13 8L9.5 11.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Join the CoGraph waitlist"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Card */}
          <div
            className="fade-in-up relative w-full max-w-md rounded-2xl border border-white/10 p-8 shadow-2xl"
            style={{
              background:
                "linear-gradient(160deg, rgba(19,19,38,0.98) 0%, rgba(8,8,16,0.98) 100%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Soft top glow */}
            <div
              className="absolute inset-x-0 top-0 h-32 pointer-events-none rounded-t-2xl"
              style={{
                background:
                  "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(59,110,248,0.18) 0%, transparent 70%)",
              }}
            />

            {/* Close */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-md flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/5 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M4 4L12 12M12 4L4 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {status === "success" ? (
              <div className="relative flex flex-col items-center text-center gap-4 py-2">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(34,197,94,0.12)",
                    border: "1px solid rgba(34,197,94,0.4)",
                  }}
                >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                    <path
                      d="M8 15.5L13 20.5L22 10"
                      stroke="#22c55e"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  You&apos;re on the list.
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  We&apos;ll email{" "}
                  <span className="text-white/85">{email.trim()}</span> the
                  moment your spot opens. Thanks for being early.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-2 px-6 py-2.5 rounded-md border border-white/12 text-white/75 text-sm font-medium hover:border-white/25 hover:text-white transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="relative flex flex-col gap-5">
                {/* Brand mark */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(59,110,248,0.12)",
                    border: "1px solid rgba(59,110,248,0.3)",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="3.5" fill="#3b6ef8" />
                    <circle cx="4" cy="7" r="2.5" fill="#f97316" />
                    <circle cx="20" cy="7" r="2.5" fill="#22c55e" />
                    <circle cx="4" cy="17" r="2.5" fill="#ec4899" />
                    <circle cx="20" cy="17" r="2.5" fill="#eab308" />
                    <line x1="6.2" y1="8.4" x2="9.5" y2="10.8" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                    <line x1="17.8" y1="8.4" x2="14.5" y2="10.8" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                    <line x1="6.2" y1="15.6" x2="9.5" y2="13.2" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                    <line x1="17.8" y1="15.6" x2="14.5" y2="13.2" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                  </svg>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-primary-light">
                    Early access
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Get access first.
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed">
                    Premium features like Graph Intelligence and natural language
                    queries roll out to waitlist members before anyone else. Drop
                    your email and skip the line.
                  </p>
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
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="you@company.com"
                    autoFocus
                    aria-label="Email address"
                    aria-invalid={!!error}
                    className="w-full px-4 py-3 rounded-md bg-white/[0.04] border border-white/12 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/60 transition-colors"
                  />
                  {error && (
                    <p className="text-xs text-[#f97316]">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-shimmer inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-white font-medium text-sm shadow-lg shadow-primary/25 disabled:opacity-70 transition-opacity"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                          <path d="M14 8A6 6 0 008 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Joining…
                      </>
                    ) : (
                      "Join the waitlist"
                    )}
                  </button>
                </form>

                <p className="text-xs text-white/30 text-center">
                  No spam. Just one email when your spot opens.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
