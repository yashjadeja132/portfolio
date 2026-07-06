import { experience } from "@/data/portfolio";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <p className="eyebrow" data-reveal>
          03 — Professional Experience
        </p>
        <h2 className="section-title" data-reveal data-reveal-delay="1">
          Where I’ve built and led.
        </h2>

        <div className={styles.timeline}>
          {experience.map((job) => (
            <div key={job.title + job.period} className={styles.row}>
              <div className={styles.markerCol} aria-hidden="true">
                <span
                  className={`${styles.marker} ${job.current ? styles.markerCurrent : ""}`}
                  data-reveal="pop"
                />
                <span
                  className={styles.line}
                  data-reveal="scale-y"
                  data-reveal-delay="1"
                />
              </div>

              <div className={styles.content}>
                <p className={styles.meta} data-reveal>
                  {job.period} · {job.location}
                </p>
                <div data-reveal data-reveal-delay="1">
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <p className={styles.company}>{job.company}</p>
                  <ul className={styles.points}>
                    {job.points.map((pt, i) => (
                      <li key={i} className={styles.point}>
                        <span className={styles.dash} aria-hidden="true">
                          —
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
