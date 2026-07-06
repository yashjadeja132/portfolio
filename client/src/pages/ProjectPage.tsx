import { useParams, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import NotFound from "./NotFound";
import { getProjectBySlug } from "@/data/portfolio";
import { projectJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { siteConfig, absoluteUrl } from "@/lib/site";
import styles from "./ProjectPage.module.css";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <NotFound />;

  const narrative: { label: string; text: string }[] = [
    { label: "Overview", text: project.description },
    { label: "Business problem", text: project.problem },
    { label: "My contribution", text: project.contribution },
    { label: "Technical challenges", text: project.challenges },
    { label: "Architecture summary", text: project.architecture },
    { label: "Result & learning", text: project.result },
  ];

  const title = `${project.name} — Case Study | ${siteConfig.shortTitle}`;
  const description = `${project.description} Role: ${project.role} at ${project.company} (${project.timeline}). Built with ${project.stack.join(", ")}.`;

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={absoluteUrl(`/projects/${project.slug}`)}
        image={absoluteUrl(siteConfig.ogImage)}
        type="article"
        jsonLd={[projectJsonLd(project), breadcrumbJsonLd(project)]}
      />

      <main id="main" className={styles.page}>
        <article className="container">
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link to="/" className={styles.crumbLink}>
              Home
            </Link>
            <span aria-hidden="true" className={styles.crumbSep}>
              /
            </span>
            <Link to="/#projects" className={styles.crumbLink}>
              Projects
            </Link>
            <span aria-hidden="true" className={styles.crumbSep}>
              /
            </span>
            <span className={styles.crumbCurrent}>{project.name}</span>
          </nav>

          <header className={styles.header}>
            <p className={styles.eyebrow}>Case Study · {project.num}</p>
            <h1 className={styles.title}>{project.name}</h1>
            <p className={styles.meta}>
              {project.company} · {project.timeline} · {project.role}
            </p>
            <div className={styles.stack}>
              {project.stack.map((t) => (
                <span key={t} className={styles.techChip}>
                  {t}
                </span>
              ))}
            </div>
          </header>

          <div className={styles.content}>
            <section className={styles.block}>
              <p className={styles.blockLabel}>{narrative[0].label}</p>
              <p className={styles.blockText}>{narrative[0].text}</p>
            </section>

            <section className={styles.block}>
              <p className={styles.blockLabel}>{narrative[1].label}</p>
              <p className={styles.blockText}>{narrative[1].text}</p>
            </section>

            <section className={styles.block}>
              <p className={styles.blockLabel}>User roles</p>
              <div className={styles.chips}>
                {project.roles.map((r) => (
                  <span key={r} className={styles.roleChip}>
                    {r}
                  </span>
                ))}
              </div>
            </section>

            <section className={styles.block}>
              <p className={styles.blockLabel}>Major modules</p>
              <ul className={styles.modules}>
                {project.modules.map((m) => (
                  <li key={m} className={styles.moduleItem}>
                    <span aria-hidden="true" className={styles.bullet}>
                      ·
                    </span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </section>

            {narrative.slice(2).map((b) => (
              <section key={b.label} className={styles.block}>
                <p className={styles.blockLabel}>{b.label}</p>
                <p className={styles.blockText}>{b.text}</p>
              </section>
            ))}

            <p className={styles.confidential}>
              Screenshots and source code are not publicly available due to
              confidentiality.
            </p>
          </div>

          <footer className={styles.cta}>
            <Link to="/#projects" className={styles.backBtn}>
              <span aria-hidden="true">←</span> All projects
            </Link>
            <Link to="/#contact" className={styles.contactBtn}>
              Get in touch
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
}
