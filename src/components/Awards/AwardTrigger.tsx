"use client";

import { useModal } from "@/context/ModalContext";
import styles from "./Awards.module.css";

export default function AwardTrigger({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const { openAward } = useModal();
  return (
    <button
      type="button"
      className={styles.viewBtn}
      onClick={() => openAward(id)}
      aria-label={`View award photo for ${title}`}
    >
      View award photo
    </button>
  );
}
