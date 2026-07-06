import { profile } from "@/data/portfolio";

/**
 * Canonical base URL for SEO. Configure via VITE_SITE_URL at build time;
 * falls back to localhost for dev. No trailing slash.
 */
export const SITE_URL = (
  (import.meta.env.VITE_SITE_URL as string | undefined) ||
  "http://localhost:5173"
).replace(/\/+$/, "");

/**
 * Prefix a root-relative asset path with Vite's configured base path
 * (`import.meta.env.BASE_URL`, "/" by default). Use for plain <a>/img URLs.
 */
export function withBasePath(path: string): string {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Join the canonical base URL with a path. */
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
  ogImage: "/og.png",
  author: {
    name: profile.name,
    email: profile.email,
    linkedin: profile.linkedin,
    github: profile.github,
  },
} as const;
