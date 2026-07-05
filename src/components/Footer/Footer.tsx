import { profile } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.role}>{profile.title}</p>
        </div>
        <nav className={styles.links} aria-label="Footer">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className={styles.link}>
            Email
          </a>
          <a
            href={withBasePath(profile.resume)}
            download={profile.resumeDownloadName}
            className={styles.link}
          >
            Resume
          </a>
        </nav>
        <p className={styles.note}>
          Designed and developed with a focus on performance, accessibility, and
          maintainable code.
        </p>
      </div>
    </footer>
  );
}
