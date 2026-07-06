import { aboutParagraphs, capabilities } from "@/data/portfolio";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <p className="eyebrow" data-reveal>
          01 — About
        </p>
        <h2 className={`section-title ${styles.title}`} data-reveal data-reveal-delay="1">
          Engineering scalable products from frontend to production.
        </h2>

        <div className={styles.body} data-reveal data-reveal-delay="2">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className={styles.cards}>
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className={styles.card}
              data-reveal
              data-reveal-delay={i}
              data-cap-card
            >
              <span className={styles.icon} data-cap-icon aria-hidden="true">
                {cap.mark}
              </span>
              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <p className={styles.cardDesc}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
