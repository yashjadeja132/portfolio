const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

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

app.post("/api/contact", async (req, res) => {
  const body = req.body ?? {};

  // Honeypot: silently accept bots.
  if (typeof body.company === "string" && body.company.trim() !== "") {
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
    return res
      .status(422)
      .json({ ok: false, error: `Please provide ${problems.join(", ")}.` });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, CONTACT_TO, CONTACT_FROM } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
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

  try {
    await transporter.sendMail({
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
    return res.json({ ok: true });
  } catch (err) {
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
