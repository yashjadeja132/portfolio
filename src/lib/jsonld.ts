import { profile, type Project } from "@/data/portfolio";
import { SITE_URL, absoluteUrl, siteConfig } from "@/lib/site";

/**
 * Structured-data (JSON-LD) builders. Rendered into pages inside
 * <script type="application/ld+json"> tags to power rich results.
 */

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    url: SITE_URL,
    image: absoluteUrl("/opengraph-image"),
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.locality,
      addressRegion: profile.region,
      addressCountry: profile.country,
    },
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: profile.knowsAbout,
    worksFor: { "@type": "Organization", name: profile.worksFor },
    knowsLanguage: profile.knowsLanguage,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: SITE_URL,
    inLanguage: "en",
    author: { "@type": "Person", name: profile.name },
    description: siteConfig.description,
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: `${project.name} — Case Study`,
    description: project.description,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(`/projects/${project.slug}/opengraph-image`),
    dateCreated: project.timeline,
    inLanguage: "en",
    keywords: project.stack.join(", "),
    author: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.title,
      url: SITE_URL,
    },
    creator: {
      "@type": "Person",
      name: profile.name,
      url: SITE_URL,
    },
    publisher: { "@type": "Organization", name: project.company },
    about: project.roles,
  };
}

export function breadcrumbJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: absoluteUrl("/#projects"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: absoluteUrl(`/projects/${project.slug}`),
      },
    ],
  };
}
