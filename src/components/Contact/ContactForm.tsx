"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: a filled hidden field means a bot. Pretend success silently.
    if (data.get("company")) {
      form.reset();
      setError(null);
      setStatus("success");
      return;
    }

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<
        HTMLInputElement | HTMLTextAreaElement
      >("input:invalid, textarea:invalid");
      firstInvalid?.reportValidity();
      firstInvalid?.focus();
      setError(
        firstInvalid?.validationMessage ||
          "Please fill in all fields with valid information.",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError(null);

    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || ""),
      company: "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (res.ok && json.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
        setError(
          json.error ||
            "Something went wrong sending your message. Please try again or email me directly.",
        );
      }
    } catch {
      setStatus("error");
      setError(
        `Network error. Please try again or email me directly at ${profile.email}.`,
      );
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      aria-label="Contact form"
      data-reveal="right"
      noValidate
    >
      <div className={styles.field}>
        <label htmlFor="cf-name" className={styles.label}>
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          minLength={2}
          autoComplete="name"
          placeholder="Your name"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-email" className={styles.label}>
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-subject" className={styles.label}>
          Subject
        </label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          required
          minLength={2}
          placeholder="Opportunity, project, or question"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-message" className={styles.label}>
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Tell me about the role or project… (at least 10 characters)"
          className={styles.textarea}
        />
      </div>

      {/* Honeypot — hidden from users, catches bots */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="cf-company">Leave this field empty</label>
        <input
          id="cf-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && error && (
        <p role="alert" className={styles.error}>
          {error}
        </p>
      )}

      {status === "success" && (
        <p role="status" className={styles.success}>
          <span className={styles.check} aria-hidden="true">
            ✓
          </span>
          Thank you for reaching out. I’ll get back to you as soon as possible.
        </p>
      )}

      <button
        type="submit"
        className={styles.submit}
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
