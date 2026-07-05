import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { profile } from "@/data/portfolio";

// Nodemailer needs Node APIs (net/tls) — force the Node.js runtime.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clamp(value: unknown, max: number): string {
  return String(value ?? "").trim().slice(0, max);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: silently accept (don't reveal the trap to bots).
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = clamp(payload.name, 100);
  const email = clamp(payload.email, 150);
  // Strip CR/LF from subject to prevent header injection.
  const subject = clamp(payload.subject, 150).replace(/[\r\n]+/g, " ");
  const message = clamp(payload.message, 5000);

  const problems: string[] = [];
  if (name.length < 2) problems.push("a name (at least 2 characters)");
  if (!EMAIL_RE.test(email)) problems.push("a valid email address");
  if (subject.length < 2) problems.push("a subject (at least 2 characters)");
  if (message.length < 10) problems.push("a message (at least 10 characters)");
  if (problems.length) {
    return NextResponse.json(
      { ok: false, error: `Please provide ${problems.join(", ")}.` },
      { status: 422 },
    );
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
    CONTACT_TO,
    CONTACT_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      {
        ok: false,
        error: `Email delivery isn’t configured yet. Please email me directly at ${profile.email}.`,
      },
      { status: 503 },
    );
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: CONTACT_FROM || `Portfolio Contact <${SMTP_USER}>`,
      to: CONTACT_TO || profile.email,
      replyTo: `${name} <${email}>`,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #16233a;">
          <h2 style="margin:0 0 12px;">New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p style="white-space: pre-wrap; margin-top:16px; padding-top:16px; border-top:1px solid #e3e8f0;">${escapeHtml(
            message,
          )}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      {
        ok: false,
        error: `Could not send your message right now. Please email me directly at ${profile.email}.`,
      },
      { status: 502 },
    );
  }
}
