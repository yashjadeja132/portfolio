import type { MetadataRoute } from "next";
import { profile } from "@/data/portfolio";
import { siteConfig, withBasePath, BASE_PATH } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: profile.name,
    description: siteConfig.description,
    start_url: `${BASE_PATH}/`,
    display: "standalone",
    background_color: "#0a1220",
    theme_color: "#0a1220",
    icons: [
      {
        src: withBasePath("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
