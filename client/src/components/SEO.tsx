import { useEffect } from "react";

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: JsonLd;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

/**
 * Client-side document-head manager (no external dependency). Sets title, meta,
 * canonical, and route-scoped JSON-LD on mount / when props change. This drives
 * SEO for JS-rendering crawlers (e.g. Google); static defaults for non-JS
 * scrapers live in index.html.
 */
export default function SEO({
  title,
  description,
  canonical,
  image,
  type = "website",
  jsonLd,
}: SEOProps) {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    if (canonical) {
      upsertMeta("property", "og:url", canonical);
      upsertLink("canonical", canonical);
    }
    if (image) {
      upsertMeta("property", "og:image", image);
      upsertMeta("name", "twitter:image", image);
    }

    if (jsonLdString) {
      let script = document.getElementById(
        "route-jsonld",
      ) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "route-jsonld";
        document.head.appendChild(script);
      }
      script.textContent = jsonLdString;
    }

    return () => {
      document.getElementById("route-jsonld")?.remove();
    };
  }, [title, description, canonical, image, type, jsonLdString]);

  return null;
}
