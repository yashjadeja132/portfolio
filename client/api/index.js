import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// api/ lives inside the client project, so the client root is one level up.
const CLIENT_ROOT = path.resolve(__dirname, "..");

// Load env from client/.env (local dev). On a host, real env vars already
// exist in process.env and are not overwritten.
dotenv.config({ path: path.join(CLIENT_ROOT, ".env") });

const app = express();
const PORT = process.env.PORT || 4000;
const CLIENT_DIST = path.join(CLIENT_ROOT, "dist");
const SITE_URL = (
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  `http://localhost:${PORT}`
).replace(/\/+$/, "");

app.disable("x-powered-by");
app.use(express.json({ limit: "12kb" }));

// Baseline security headers.
app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()",
  );
  next();
});

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

/* --------------------------------------------------------- SEO endpoints */

// Mirrors the project slugs in client/src/data/portfolio.ts.
const PROJECT_SLUGS = [
  "gym-management-system",
  "employee-management-system",
  "rental-management-system",
  "bed-configurator",
  "complaint-management-system",
];

app.get("/sitemap.xml", (_req, res) => {
  const urls = ["/", ...PROJECT_SLUGS.map((s) => `/projects/${s}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${SITE_URL}${u === "/" ? "" : u}</loc><changefreq>${
        u === "/" ? "monthly" : "yearly"
      }</changefreq><priority>${u === "/" ? "1.0" : "0.8"}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
  res.type("application/xml").send(xml);
});

app.get("/robots.txt", (_req, res) => {
  res
    .type("text/plain")
    .send(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
});

/* ------------------------------------------- Serve the built SPA (prod) */

if (fs.existsSync(CLIENT_DIST)) {
  app.use(express.static(CLIENT_DIST));
  // SPA fallback: every non-API route returns index.html.
  app.get("*", (_req, res) => {
    res.sendFile(path.join(CLIENT_DIST, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Portfolio server running on http://localhost:${PORT}`);
  if (!fs.existsSync(CLIENT_DIST)) {
    console.log("(dev mode: run the Vite client separately on :5173)");
  }
});
