import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";
import { OG_SIZE, OgCard } from "@/lib/og";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.title}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Portfolio"
        title={profile.name}
        subtitle={profile.title}
        tags={["React.js", "Next.js", "Vue.js", "Node.js", "MongoDB", "SaaS"]}
      />
    ),
    { ...size },
  );
}
