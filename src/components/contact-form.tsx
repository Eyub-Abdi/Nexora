"use client";

import { ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";

const fieldClass =
  "mac-field mt-2 block w-full px-3 py-2.5 text-base text-white placeholder:text-white/65";

// Keeps the generated mailto: link within limits most email clients accept.
const MESSAGE_MAX = 1500;

/**
 * Composes an email in the visitor's mail client. No data is sent to a
 * server, so there is no backend to maintain or secure.
 */
export function ContactForm({ email }: { email: string }) {
  const [opened, setOpened] = useState(false);
  const [error, setError] = useState("");
  const configured = Boolean(email);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!configured) return;
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const organization = String(data.get("organization") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    // `required` accepts whitespace-only input, so check the trimmed values too.
    if (!name || !message) {
      setError(!name ? "Please add your name." : "Please tell us a little about your project.");
      const field = e.currentTarget.elements.namedItem(!name ? "name" : "message");
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    setError("");

    const subject = `Project enquiry${organization ? ` from ${organization}` : ""}`;
    const body = [message, "", `${name}${organization ? `, ${organization}` : ""}`].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-inset ring-white/10 sm:p-8"
      aria-describedby="contact-note"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-white/85">
          Name
          <input name="name" required maxLength={120} autoComplete="name" className={fieldClass} placeholder="Your name" aria-invalid={error.includes("name") || undefined} />
        </label>
        <label className="block text-sm font-medium text-white/85">
          Organization <span className="font-normal text-white/50">(optional)</span>
          <input name="organization" maxLength={160} autoComplete="organization" className={fieldClass} placeholder="Company or project" />
        </label>
      </div>
      <label className="mt-5 block text-sm font-medium text-white/85">
        What would you like to solve?
        <textarea
          name="message"
          required
          rows={4}
          maxLength={MESSAGE_MAX}
          aria-invalid={error.includes("project") || undefined}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us a little about the challenge or idea."
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={!configured}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[0.95rem] font-medium tracking-[-0.01em] text-ocean transition-[background-color,transform] duration-200 hover:bg-mist active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          Let&apos;s Talk About Your Project
          <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
        <p
          id="contact-note"
          className={`text-xs leading-relaxed sm:max-w-[14rem] sm:text-right ${error ? "font-medium text-error-soft" : "text-white/70"}`}
          aria-live="polite"
        >
          {!configured
            ? "Our contact inbox is being set up. Please check back shortly."
            : error
              ? error
              : opened
              ? "Your email app should now be open with your message ready to send."
              : "Opens your email app with your message ready to send."}
        </p>
      </div>
    </form>
  );
}
