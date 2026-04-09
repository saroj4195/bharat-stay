"use client";

import { useState } from "react";

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
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: { name?: string; email?: string } = {};

    if (!validateName(name)) {
      newErrors.name = "Name is required";
    }
    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-emerald-50 p-6 text-center">
        <p className="text-lg font-semibold text-emerald-700">
          Thank you! We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="lead-name"
          className="block text-sm font-medium text-foreground"
        >
          Name
        </label>
        <input
          id="lead-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full min-h-[44px] rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="lead-email"
          className="block text-sm font-medium text-foreground"
        >
          Email
        </label>
        <input
          id="lead-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full min-h-[44px] rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="lead-message"
          className="block text-sm font-medium text-foreground"
        >
          Message <span className="text-foreground/40">(optional)</span>
        </label>
        <textarea
          id="lead-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
}
