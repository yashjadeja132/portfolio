import { awards } from "@/data/portfolio";
import AwardTrigger from "./AwardTrigger";
import styles from "./Awards.module.css";

export default function Awards() {
  return (
    <section id="awards" className={styles.section}>
      <div className="container">
        <p className="eyebrow" data-reveal>
          05 — Awards &amp; Recognition
        </p>
        <h2 className="section-title" data-reveal data-reveal-delay="1">
          Recognised for delivery and dedication.
        </h2>

        <div className={styles.grid}>
          {awards.map((a, i) => (
            <div
              key={a.id}
              className={styles.card}
              data-reveal
              data-reveal-delay={i % 2}
              data-award-card
            >
              <span className={styles.icon} data-award-icon aria-hidden="true">
                <span className={styles.diamond} />
              </span>
              <div>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.meta}>{a.meta}</p>
                <p className={styles.desc}>{a.desc}</p>
                <AwardTrigger id={a.id} title={a.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
