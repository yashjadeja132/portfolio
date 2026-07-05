import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

// Dynamically generated from the project data — new case studies appear
// automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((p) => ({
      url: absoluteUrl(`/projects/${p.slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
