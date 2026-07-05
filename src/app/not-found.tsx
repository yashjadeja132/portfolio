import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main id="main" className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>This page could not be found.</h1>
        <p className={styles.text}>
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primary}>
            Back to home
          </Link>
          <Link href="/#projects" className={styles.secondary}>
            View projects
          </Link>
        </div>
      </div>
    </main>
  );
}
