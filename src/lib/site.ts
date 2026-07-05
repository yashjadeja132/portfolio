import { profile } from "@/data/portfolio";

/**
 * Canonical base URL for the site. Configure via NEXT_PUBLIC_SITE_URL at
 * build/deploy time. Falls back to the GitHub Pages URL. No trailing slash.
 *
 * NOTE: for a real SSR deployment (Vercel/Node) set this to the deployment
 * origin so canonical/OG/sitemap URLs are correct.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "") ||
  "http://localhost:3000"
).replace(/\/+$/, "");

/**
 * Base path the app is served under. Empty for a root-domain deploy (Vercel).
 * Must match `basePath` in next.config.mjs. next/link and next/image apply this
 * automatically; use `withBasePath` for plain <a>/manifest asset URLs.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Bare origin of the site (no path). Used as `metadataBase` so Next appends the
 * basePath exactly once when resolving relative metadata URLs (e.g. the
 * auto-generated Open Graph image route).
 */
export const SITE_ORIGIN = new URL(SITE_URL).origin;

/** Prefix a root-relative asset path with the base path. */
export function withBasePath(path: string): string {
  if (!path) return BASE_PATH || "/";
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Join the base URL with a path, preserving any base path in SITE_URL. */
export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}/${path.replace(/^\/+/, "")}`;
}

export const siteConfig = {
  name: profile.name,
  title: `${profile.name} | ${profile.title}`,
  shortTitle: profile.name,
  description:
    "Portfolio of Yashrajsinh Jadeja, a Full Stack Developer and Team Lead experienced in MERN, MEVN, SaaS platforms, REST APIs, payment integrations and production-ready applications.",
  ogDescription:
    "Full Stack Developer and Team Lead — MERN, MEVN, SaaS platforms, REST APIs, payment integrations.",
  url: SITE_URL,
  locale: "en_US",
  keywords: [
    "Yashrajsinh Jadeja",
    "Full Stack Developer",
    "Team Lead",
    "MERN Developer",
    "MEVN Developer",
    "React.js Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "Node.js Developer",
    "SaaS Developer",
    "Payment Integration",
    "REST API",
    "Bhavnagar",
    "Gujarat",
    "India",
  ],
  author: {
    name: profile.name,
    email: profile.email,
    linkedin: profile.linkedin,
    github: profile.github,
  },
} as const;
