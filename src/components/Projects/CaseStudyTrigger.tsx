"use client";

import { useModal } from "@/context/ModalContext";
import styles from "./Projects.module.css";

export default function CaseStudyTrigger({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const { openCaseStudy } = useModal();
  return (
    <button
      type="button"
      className={styles.csBtn}
      onClick={() => openCaseStudy(id)}
      aria-label={`View case study for ${name}`}
    >
      View Case Study{" "}
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </button>
  );
}
