import { profile } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

const details = [
  {
    label: "EMAIL",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/yashjadeja132",
    href: profile.linkedin,
    external: true,
  },
  {
    label: "GITHUB",
    value: "github.com/yashjadeja132",
    href: profile.github,
    external: true,
  },
  { label: "LOCATION", value: profile.location },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div data-reveal="left">
          <p className={styles.eyebrow}>06 — Contact</p>
          <h2 className={styles.title}>Let’s build something meaningful.</h2>
          <p className={styles.lead}>
            I am open to Full Stack Developer, Software Engineer, MERN, React.js,
            Vue.js, and Node.js opportunities.
          </p>

          <div className={styles.details}>
            {details.map((d) => (
              <p key={d.label} className={styles.detailRow}>
                <span className={styles.detailLabel}>{d.label}</span>
                {d.href ? (
                  <a
                    href={d.href}
                    className={styles.detailLink}
                    {...(d.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {d.value}
                  </a>
                ) : (
                  <span className={styles.detailValue}>{d.value}</span>
                )}
              </p>
            ))}
          </div>

          <a
            href={withBasePath(profile.resume)}
            download={profile.resumeDownloadName}
            className={styles.resumeBtn}
          >
            Download Resume
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
