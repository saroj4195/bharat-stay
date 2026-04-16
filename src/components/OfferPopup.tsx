"use client";

import { useState, useEffect } from "react";

export default function OfferPopup() {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("bharatstay_popup_shown");
    if (!alreadyShown) {
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone || phone.trim().length < 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }
    setError("");
    console.log("Lead captured:", phone);
    setSubmitted(true);
    sessionStorage.setItem("bharatstay_popup_shown", "true");
  }

  function handleClose() {
    setShow(false);
    sessionStorage.setItem("bharatstay_popup_shown", "true");
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" style={{ background: "rgba(8,6,4,0.8)", backdropFilter: "blur(8px)" }}>
      <div
        className="relative w-full max-w-md rounded-2xl p-8"
        style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-brand)" }}
      >
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
          style={{ color: "var(--text-muted)", background: "var(--bg-card)" }}
          aria-label="Close popup"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center">
            <span className="text-5xl">🎉</span>
            <h3 className="mt-4 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
              You&apos;re In!
            </h3>
            <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              We&apos;ll send you exclusive hotel deals on WhatsApp. Stay tuned!
            </p>
            <button
              onClick={handleClose}
              className="btn-cta mt-6 rounded-lg px-6 py-3 text-sm font-semibold"
            >
              Start Exploring
            </button>
          </div>
        ) : (
          <>
            <div className="text-center">
              <span className="text-5xl">🏨</span>
              <h3 className="mt-4 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                Get Exciting Offers!
              </h3>
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                Enter your number to unlock exclusive hotel deals — up to{" "}
                <span className="font-bold" style={{ color: "var(--color-brand)" }}>15% cheaper</span>{" "}
                than other platforms.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
              <div
                className="flex items-center gap-2 rounded-lg px-3 py-2"
                style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
              >
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>+91</span>
                <input
                  type="tel"
                  name="phone"
                  id="popup-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number…"
                  maxLength={10}
                  inputMode="numeric"
                  autoComplete="tel"
                  spellCheck={false}
                  className="min-h-[44px] flex-1 bg-transparent text-sm outline-none"
                  style={{ color: "var(--text-primary)" }}
                  aria-label="Phone number"
                />
              </div>
              {error && <p className="mt-1 text-xs" style={{ color: "var(--color-urgency)" }}>{error}</p>}

              <button
                type="submit"
                className="btn-cta mt-4 w-full rounded-lg py-3 text-sm font-bold"
              >
                Get My Offers →
              </button>

              <p className="mt-3 text-center text-xs" style={{ color: "var(--text-muted)" }}>
                No spam. Only the best deals, straight to your WhatsApp.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
