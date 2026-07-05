"use client";

import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { projects } from "@/data/portfolio";
import ModalShell from "./ModalShell";
import styles from "./Modal.module.css";

export default function CaseStudyModal() {
  const { caseStudyId, close } = useModal();
  if (!caseStudyId) return null;

  const project = projects.find((p) => p.id === caseStudyId);
  if (!project) return null;

  const blocks: { label: string; text: string }[] = [
    { label: "Overview", text: project.description },
    { label: "Business problem", text: project.problem },
    { label: "My contribution", text: project.contribution },
    { label: "Technical challenges", text: project.challenges },
    { label: "Architecture summary", text: project.architecture },
    { label: "Result & learning", text: project.result },
  ];

  return (
    <ModalShell onClose={close} labelledBy="cs-title" variant="case">
      <div className={styles.header}>
        <div>
          <p className={styles.csEyebrow}>Case Study</p>
          <h3 id="cs-title" className={styles.csHeading}>
            {project.name}
          </h3>
          <p className={styles.csMeta}>
            {project.company} · {project.timeline} · {project.role}
          </p>
        </div>
        <button
          type="button"
          data-modal-close
          className={styles.close}
          onClick={close}
          aria-label="Close case study"
        >
          ✕
        </button>
      </div>

      <div className={styles.body}>
        <section className={styles.block}>
          <p className={styles.blockLabel}>{blocks[0].label}</p>
          <p className={styles.blockText}>{blocks[0].text}</p>
        </section>

        <section className={styles.block}>
          <p className={styles.blockLabel}>{blocks[1].label}</p>
          <p className={styles.blockText}>{blocks[1].text}</p>
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

        <section className={styles.block}>
          <p className={styles.blockLabel}>Technology stack</p>
          <div className={styles.chips}>
            {project.stack.map((t) => (
              <span key={t} className={styles.techChip}>
                {t}
              </span>
            ))}
          </div>
        </section>

        {blocks.slice(2).map((b) => (
          <section key={b.label} className={styles.block}>
            <p className={styles.blockLabel}>{b.label}</p>
            <p className={styles.blockText}>{b.text}</p>
          </section>
        ))}

        <p className={styles.confidential}>
          Screenshots and source code are not publicly available due to
          confidentiality.
        </p>

        <Link
          href={`/projects/${project.slug}`}
          className={styles.fullPageLink}
          onClick={close}
        >
          Open full case-study page{" "}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </ModalShell>
  );
}
