import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems, profile } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";
import styles from "./Nav.module.css";

export default function Nav() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Highlight the nav item of the section in view (home only). Sections are
  // read on every scroll, so newly added sections are always picked up.
  useEffect(() => {
    if (!onHome) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main section[id]"),
      );
      if (!sections.length) return;

      const line = window.innerHeight * 0.4;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      let current = sections[0].id;
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      if (atBottom) current = sections[sections.length - 1].id;
      setActiveSection(current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [onHome]);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const to = (id: string) => `/#${id}`;

  return (
    <header className={styles.header} role="banner">
      <nav className={styles.nav} aria-label="Primary">
        <Link
          to="/"
          className={styles.brand}
          aria-label={`${profile.name} — home`}
        >
          <span className={styles.badge} aria-hidden="true">
            {profile.initials}
          </span>
          <span className={styles.brandName}>{profile.name}</span>
        </Link>

        <div className={styles.desktopNav}>
          {navItems.map((item) => {
            const active = onHome && activeSection === item.id;
            return (
              <Link
                key={item.id}
                to={to(item.id)}
                className={`${styles.link} ${active ? styles.active : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={withBasePath(profile.resume)}
            download={profile.resumeDownloadName}
            className={styles.resumeBtn}
          >
            Download Resume
          </a>
        </div>

        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu} id="mobile-menu">
          <div className={styles.mobileList}>
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={to(item.id)}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={withBasePath(profile.resume)}
              download={profile.resumeDownloadName}
              className={styles.mobileResume}
              onClick={() => setMenuOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
