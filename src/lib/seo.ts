import type { Metadata } from "next";
import { type Project, profile } from "@/data/portfolio";
import { SITE_URL, SITE_ORIGIN, absoluteUrl, siteConfig } from "@/lib/site";

/**
 * Root metadata applied in app/layout.tsx. Individual routes extend or
 * override this via their own `metadata` / `generateMetadata` exports.
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: siteConfig.title,
    template: `%s | ${profile.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [...siteConfig.keywords],
  category: "technology",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    url: absoluteUrl("/"),
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    creator: "@yashjadeja132",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Favicon is provided by the app/icon.svg file convention, which applies the
  // configured basePath automatically.
};

/** Per-project (dynamic) metadata for /projects/[slug]. */
export function projectMetadata(project: Project): Metadata {
  const title = `${project.name} — Case Study`;
  const description = `${project.description} Role: ${project.role} at ${project.company} (${project.timeline}). Built with ${project.stack.join(", ")}.`;
  const url = absoluteUrl(`/projects/${project.slug}`);

  return {
    title,
    description,
    keywords: [
      project.name,
      "case study",
      profile.name,
      project.role,
      project.company,
      ...project.stack,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${project.name} — Case Study`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      authors: [profile.name],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Case Study`,
      description,
    },
  };
}
