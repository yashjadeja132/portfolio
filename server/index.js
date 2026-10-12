const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// CORS: the deployed client lives on a different origin, so allow it to call
// this API. Set CLIENT_ORIGIN to your frontend URL in production (defaults to "*").
// CLIENT_ORIGIN may hold several origins separated by commas.
const ALLOWED_ORIGINS = (process.env.CLIENT_ORIGIN || "*")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allow = ALLOWED_ORIGINS.includes("*")
    ? "*"
    : ALLOWED_ORIGINS.includes(origin)
      ? origin
      : ALLOWED_ORIGINS[0];
  res.setHeader("Access-Control-Allow-Origin", allow);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.use(express.json({ limit: "12kb" }));

/* ----------------------------------------------------------- Contact API */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_EMAIL = "yashrajsinhjadeja757@gmail.com";

const clamp = (v, max) => String(v ?? "").trim().slice(0, max);
const escapeHtml = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

// Simple stage logger: shows exactly where a contact request stops.
const log = (id, msg, extra = "") =>
  console.log(`[contact ${id}] ${new Date().toISOString()} ${msg}`, extra);

app.post("/api/contact", async (req, res) => {
  const id = Math.random().toString(36).slice(2, 8);
  const body = req.body ?? {};
  log(id, "1/6 request received", `origin=${req.headers.origin || "none"}`);

  // Honeypot: silently accept bots.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    log(id, "honeypot filled, ignored as bot");
    return res.json({ ok: true });
  }

  const name = clamp(body.name, 100);
  const email = clamp(body.email, 150);
  const subject = clamp(body.subject, 150).replace(/[\r\n]+/g, " ");
  const message = clamp(body.message, 5000);

  const problems = [];
  if (name.length < 2) problems.push("a name (at least 2 characters)");
  if (!EMAIL_RE.test(email)) problems.push("a valid email address");
  if (subject.length < 2) problems.push("a subject (at least 2 characters)");
  if (message.length < 10) problems.push("a message (at least 10 characters)");
  if (problems.length) {
    log(id, "2/6 validation FAILED", problems.join("; "));
    return res
      .status(422)
      .json({ ok: false, error: `Please provide ${problems.join(", ")}.` });
  }

  log(id, "2/6 validation ok");

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, CONTACT_TO, CONTACT_FROM } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    log(
      id,
      "3/6 SMTP config MISSING",
      `host=${!!SMTP_HOST} user=${!!SMTP_USER} pass=${!!SMTP_PASS}`,
    );
    return res.status(503).json({
      ok: false,
      error: `Email delivery isn’t configured yet. Please email me directly at ${CONTACT_EMAIL}.`,
    });
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  log(
    id,
    "3/6 SMTP config found",
    `host=${SMTP_HOST} port=${port} secure=${transporter.options.secure} user=${SMTP_USER}`,
  );

  try {
    log(id, "4/6 verifying SMTP connection and login...");
    await transporter.verify();
    log(id, "5/6 SMTP login ok, sending mail...");
    const info = await transporter.sendMail({
      from: CONTACT_FROM || `Portfolio Contact <${SMTP_USER}>`,
      to: CONTACT_TO || CONTACT_EMAIL,
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
        </div>`,
    });
    log(id, "6/6 mail SENT", `messageId=${info.messageId} response=${info.response}`);
    return res.json({ ok: true });
  } catch (err) {
    log(
      id,
      "FAILED at SMTP step",
      `code=${err.code || "-"} command=${err.command || "-"} responseCode=${err.responseCode || "-"} message=${err.message}`,
    );
    console.error("Contact form send failed:", err);
    return res.status(502).json({
      ok: false,
      error: `Could not send your message right now. Please email me directly at ${CONTACT_EMAIL}.`,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio server running on http://localhost:${PORT}`);
});
