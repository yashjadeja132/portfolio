import { ImageResponse } from "next/og";
import { getProjectBySlug, projects, profile } from "@/data/portfolio";
import { OG_SIZE, OgCard } from "@/lib/og";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = `Case study — ${profile.name}`;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return new ImageResponse(
    (
      <OgCard
        eyebrow="Case Study"
        title={project?.name ?? "Project"}
        subtitle={project?.role ?? profile.title}
        tags={project?.stack.slice(0, 6) ?? []}
      />
    ),
    { ...size },
  );
}
