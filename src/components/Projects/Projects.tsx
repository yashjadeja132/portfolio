import { projects } from "@/data/portfolio";
import CaseStudyTrigger from "./CaseStudyTrigger";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <p className="eyebrow" data-reveal>
          04 — Featured Projects
        </p>
        <h2 className={`section-title ${styles.title}`} data-reveal data-reveal-delay="1">
          Production SaaS platforms, built end to end.
        </h2>
        <p className={`section-lead ${styles.lead}`} data-reveal data-reveal-delay="2">
          Company projects are private — details describe scope and contribution
          without exposing confidential material.
        </p>

        <div className={styles.list}>
          {projects.map((p) => (
            <article key={p.id} className={styles.card} data-reveal data-tilt>
              <div className={styles.head}>
                <div>
                  <div className={styles.titleRow}>
                    <span className={styles.num} aria-hidden="true">
                      {p.num}
                    </span>
                    <h3 className={styles.name}>{p.name}</h3>
                  </div>
                  <p className={styles.metaLine}>
                    {p.company} · {p.timeline} · {p.role}
                  </p>
                </div>
                <CaseStudyTrigger id={p.id} name={p.name} />
              </div>

              <p className={styles.desc}>{p.description}</p>
              <p className={styles.desc}>
                <strong className={styles.strong}>My contribution —</strong>{" "}
                {p.contribution}
              </p>

              <div className={styles.stack}>
                {p.stack.map((tech) => (
                  <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
