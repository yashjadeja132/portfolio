import { archChips, archLayers, profile } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";
import styles from "./Hero.module.css";

const EASE = "cubic-bezier(.22,.61,.36,1)";
const rise = (delay: number) => ({
  animation: `yjRise .55s ${delay}s ${EASE} both`,
});

export default function Hero() {
  return (
    <section id="home" className={styles.hero} data-hero-root>
      <div className={styles.grid} data-para="0.06" aria-hidden="true" />

      <div className={`${styles.inner} container`} data-hero-grid>
        <div className={styles.content}>
          <p className={styles.availability} style={rise(0.05)}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 className={styles.heading} style={rise(0.15)}>
            {profile.heading}
          </h1>

          <p className={styles.subtitle} style={rise(0.28)}>
            {profile.title}
          </p>

          <p className={styles.intro} style={rise(0.4)}>
            {profile.intro}
          </p>

          <div className={styles.ctas} style={rise(0.55)}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Projects
            </a>
            <a
              href={withBasePath(profile.resume)}
              download={profile.resumeDownloadName}
              className={styles.secondaryBtn}
            >
              Download Resume
            </a>
          </div>

          <div className={styles.socials} style={rise(0.68)}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              GitHub ↗
            </a>
            <a href={`mailto:${profile.email}`} className={styles.social}>
              {profile.email}
            </a>
          </div>
        </div>

        {/* Decorative pseudo-3D architecture stack. Mouse-tilt added by the
            Interactions client component; motion is CSS-driven otherwise. */}
        <div className={styles.visual} data-hero-visual aria-hidden="true">
          <div className={styles.hero3d} data-hero-3d>
            <div className={styles.stack}>
              <span className={styles.spine} />
              {archLayers.map((layer) => (
                <div
                  key={layer.label}
                  className={styles.layer}
                  style={{
                    marginTop: layer.gap,
                    background: layer.bg,
                    borderColor: layer.border,
                    animation: layer.anim,
                  }}
                >
                  <span
                    className={styles.layerLabel}
                    style={{ color: layer.fg }}
                  >
                    {layer.label}
                  </span>
                  <span
                    className={styles.layerDot}
                    style={{ background: layer.dot }}
                  />
                </div>
              ))}
            </div>

            <div className={styles.chips} data-para="0.14">
              {archChips.map((chip) => (
                <span
                  key={chip.label}
                  className={styles.chip}
                  style={{
                    top: chip.top,
                    left: chip.left,
                    animation: chip.anim,
                  }}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
