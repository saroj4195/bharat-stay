"use client";

import { useState, type FormEvent } from "react";

export function validateName(name: string): boolean {
  return name.trim().length > 0;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default function LeadCaptureForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; phone?: string } = {};
    if (!validateName(name)) newErrors.name = "Name is required";
    if (!validateEmail(email)) newErrors.email = "Please enter a valid email address";
    if (!phone || phone.trim().length < 10) newErrors.phone = "Phone number is required";
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setErrors({});
    setSubmitted(true);
    setName(""); setEmail(""); setPhone(""); setMessage("");
  }

  const inputStyle = {
    background: "var(--bg-surface)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    borderRadius: "8px",
    padding: "10px 14px",
    width: "100%",
    minHeight: "44px",
    fontSize: "14px",
    outline: "none",
  };

  if (submitted) {
    return (
      <div className="rounded-xl p-6 text-center" style={{ background: "var(--tint-cta)", border: "1px solid rgba(0,191,165,0.3)" }}>
        <p className="text-lg font-semibold" style={{ color: "var(--color-success)" }}>Thank you! We&apos;ll be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div>
        <label htmlFor="lead-name" className="block text-sm font-medium mb-1" style={{ color: "var(--text-secondary)" }}>Name</label>
        <input id="lead-name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name…" autoComplete="name" style={inputStyle} />
        {errors.name && <p className="mt-1 text-xs" style={{ color: "var(--color-urgency)" }}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="lead-email" className="block text-sm font-medium mb-1" style={{ color: "var(--text-secondary)" }}>Email</label>
        <input id="lead-email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com…" autoComplete="email" spellCheck={false} style={inputStyle} />
        {errors.email && <p className="mt-1 text-xs" style={{ color: "var(--color-urgency)" }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="lead-phone" className="block text-sm font-medium mb-1" style={{ color: "var(--text-secondary)" }}>Phone</label>
        <input id="lead-phone" type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 XXXXX XXXXX…" autoComplete="tel" inputMode="numeric" spellCheck={false} style={inputStyle} />
        {errors.phone && <p className="mt-1 text-xs" style={{ color: "var(--color-urgency)" }}>{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="lead-message" className="block text-sm font-medium mb-1" style={{ color: "var(--text-secondary)" }}>
          Message <span style={{ color: "var(--text-muted)" }}>(optional)</span>
        </label>
        <textarea id="lead-message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} placeholder="How can we help?…" style={{ ...inputStyle, minHeight: "auto", resize: "vertical" }} />
      </div>

      <button type="submit" className="btn-cta w-full rounded-lg py-3 text-sm font-bold min-h-[44px]">
        Send Message
      </button>
    </form>
  );
}
