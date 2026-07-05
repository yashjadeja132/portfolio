import { education, languages } from "@/data/portfolio";
import styles from "./EducationLanguages.module.css";

export default function EducationLanguages() {
  return (
    <section aria-label="Education and languages" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.card} data-reveal>
          <p className={styles.label}>Education</p>
          <div className={styles.eduList}>
            {education.map((e) => (
              <div key={e.title} className={styles.eduRow}>
                <div>
                  <p className={styles.eduTitle}>{e.title}</p>
                  <p className={styles.eduDetail}>{e.detail}</p>
                </div>
                <p className={styles.eduPeriod}>{e.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card} data-reveal data-reveal-delay="1">
          <p className={styles.label}>Languages</p>
          <div className={styles.langList}>
            {languages.map((lang) => (
              <p key={lang} className={styles.lang}>
                <span className={styles.langDot} aria-hidden="true" />
                {lang}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
