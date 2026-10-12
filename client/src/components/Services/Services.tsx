import { profile, services, workSteps, workFacts } from "@/data/portfolio";
import styles from "./Services.module.css";

const emailHref = `mailto:${profile.email}?subject=${encodeURIComponent(
  "Project inquiry from your portfolio",
)}`;

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <p className="eyebrow" data-reveal>
          05 — Services
        </p>
        <h2
          className={`section-title ${styles.title}`}
          data-reveal
          data-reveal-delay="1"
        >
          How I can help, and how I work.
        </h2>
        <p
          className={`section-lead ${styles.lead}`}
          data-reveal
          data-reveal-delay="2"
        >
          I work remotely with teams and founders who need a reliable full
          stack developer for a new product or a feature that must ship.
        </p>

        <div className={styles.cards}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className={styles.card}
              data-reveal
              data-reveal-delay={i}
            >
              <span className={styles.icon} aria-hidden="true">
                {s.mark}
              </span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        <h3 className={styles.subTitle} data-reveal>
          My process
        </h3>
        <ol className={styles.steps}>
          {workSteps.map((step, i) => (
            <li key={step.title} className={styles.step} data-reveal data-reveal-delay={i}>
              <span className={styles.stepNum} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDesc}>{step.desc}</p>
            </li>
          ))}
        </ol>

        <dl className={styles.facts} data-reveal>
          {workFacts.map((f) => (
            <div key={f.label} className={styles.fact}>
              <dt className={styles.factLabel}>{f.label}</dt>
              <dd className={styles.factValue}>{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.cta} data-reveal>
          <a href={emailHref} className={styles.primaryBtn}>
            Email me about a project
          </a>
          <a
            href={profile.linkedin}
            className={styles.secondaryBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message me on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
