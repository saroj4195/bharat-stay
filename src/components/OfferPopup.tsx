"use client";

import { useState, useEffect } from "react";

export default function OfferPopup() {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Show popup after 3 seconds, only once per session
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
    // TODO: Send to API/WhatsApp
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-text-body/50 transition-colors hover:bg-off-white hover:text-navy"
          aria-label="Close popup"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center">
            <span className="text-5xl">🎉</span>
            <h3 className="mt-4 font-heading text-2xl font-bold text-navy italic">
              You&apos;re In!
            </h3>
            <p className="mt-2 text-sm text-text-body">
              We&apos;ll send you exclusive hotel deals and offers on WhatsApp. Stay tuned!
            </p>
            <button
              onClick={handleClose}
              className="mt-6 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-dark"
            >
              Start Exploring
            </button>
          </div>
        ) : (
          <>
            <div className="text-center">
              <span className="text-5xl">🏨</span>
              <h3 className="mt-4 font-heading text-2xl font-bold text-navy italic">
                Get Exciting Offers!
              </h3>
              <p className="mt-2 text-sm text-text-body">
                Enter your number to unlock exclusive hotel deals — up to <span className="font-bold text-gold">15% cheaper</span> than other platforms.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/20">
                <span className="text-sm text-text-body/50">+91</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  maxLength={10}
                  className="min-h-[44px] flex-1 bg-transparent text-sm text-navy outline-none placeholder:text-text-body/40"
                  aria-label="Phone number"
                />
              </div>
              {error && (
                <p className="mt-1 text-xs text-red-500">{error}</p>
              )}

              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-gold py-3 text-sm font-bold text-navy transition-colors hover:bg-gold-dark"
              >
                Get My Offers →
              </button>

              <p className="mt-3 text-center text-xs text-text-body/40">
                No spam. Only the best deals, straight to your WhatsApp.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
