import { profile } from "@/data/portfolio";

/**
 * Shared visual template for dynamically generated Open Graph images
 * (next/og). Satori supports a flexbox subset of CSS — every element with
 * more than one child must set display:flex.
 */
export const OG_SIZE = { width: 1200, height: 630 };

export function OgCard({
  eyebrow,
  title,
  subtitle,
  tags,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  tags: string[];
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: "#0a1220",
        backgroundImage:
          "radial-gradient(1000px 500px at 85% -10%, rgba(46,99,231,0.28), transparent 60%), radial-gradient(700px 500px at 5% 110%, rgba(34,153,207,0.16), transparent 60%)",
        color: "#f5f8fc",
        fontFamily: "sans-serif",
      }}
    >
      {/* Top: brand */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "16px",
            backgroundImage: "linear-gradient(135deg, #2e63e7, #1e3f91)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          {profile.initials}
        </div>
        <div
          style={{
            fontSize: "22px",
            letterSpacing: "6px",
            color: "#7fa5f5",
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </div>
      </div>

      {/* Middle: title + subtitle */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            fontSize: "68px",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: "32px", fontWeight: 600, color: "#7fa5f5" }}>
          {subtitle}
        </div>
      </div>

      {/* Bottom: tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {tags.map((t) => (
          <div
            key={t}
            style={{
              display: "flex",
              fontSize: "22px",
              color: "#c4cede",
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "999px",
              padding: "8px 20px",
            }}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
