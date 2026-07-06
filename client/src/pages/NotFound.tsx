import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { siteConfig } from "@/lib/site";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <SEO
        title={`Page not found | ${siteConfig.shortTitle}`}
        description="The page you’re looking for doesn’t exist or may have moved."
      />
      <main id="main" className={styles.page}>
        <div className={`container ${styles.inner}`}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>This page could not be found.</h1>
          <p className={styles.text}>
            The page you’re looking for doesn’t exist or may have moved.
          </p>
          <div className={styles.actions}>
            <Link to="/" className={styles.primary}>
              Back to home
            </Link>
            <Link to="/#projects" className={styles.secondary}>
              View projects
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
