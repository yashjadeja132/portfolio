
import { useModal } from "@/context/ModalContext";
import { awards } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";
import ModalShell from "./ModalShell";
import styles from "./Modal.module.css";

export default function AwardModal() {
  const { awardId, close } = useModal();
  if (!awardId) return null;

  const award = awards.find((a) => a.id === awardId);
  if (!award) return null;

  return (
    <ModalShell onClose={close} labelledBy="aw-title" variant="award">
      <div className={styles.header}>
        <div>
          <h3 id="aw-title" className={styles.awHeading}>
            {award.title}
          </h3>
          <p className={styles.csMeta}>{award.meta}</p>
        </div>
        <button
          type="button"
          data-modal-close
          className={styles.close}
          onClick={close}
          aria-label="Close award photo"
        >
          ✕
        </button>
      </div>

      <div className={styles.awImageWrap}>
        <img
          src={withBasePath(award.image)}
          alt={`${award.title} — award photo`}
          className={styles.awImage}
          loading="lazy"
        />
      </div>
    </ModalShell>
  );
}
