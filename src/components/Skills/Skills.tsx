import { skillGroups } from "@/data/portfolio";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <p className="eyebrow" data-reveal>
          02 — Technical Skills
        </p>
        <h2 className="section-title" data-reveal data-reveal-delay="1">
          A production-focused stack.
        </h2>

        <div className={styles.grid}>
          {skillGroups.map((group, i) => (
            <div
              key={group.name}
              className={styles.card}
              data-reveal
              data-reveal-delay={i % 3}
              data-skill-card
            >
              <p className={styles.groupName}>{group.name}</p>
              <div className={styles.chips}>
                {group.items.map((skill) => (
                  <span key={skill} className={styles.chip} data-chip>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
