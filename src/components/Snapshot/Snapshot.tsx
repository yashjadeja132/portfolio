import { snapshot } from "@/data/portfolio";
import styles from "./Snapshot.module.css";

export default function Snapshot() {
  return (
    <section aria-label="Professional snapshot" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {snapshot.map((stat, i) => (
          <div
            key={stat.value}
            className={styles.card}
            data-reveal
            data-reveal-delay={i}
            data-tilt
          >
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
