
import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

interface ModalShellProps {
  onClose: () => void;
  labelledBy: string;
  variant: "case" | "award";
  children: React.ReactNode;
}

/**
 * Shared modal chrome: overlay, animated panel, Escape-to-close, click-outside,
 * and a focus trap. Body scroll-lock + focus restoration live in ModalProvider.
 * Children render their own header (including a [data-modal-close] button).
 */
export default function ModalShell({
  onClose,
  labelledBy,
  variant,
  children,
}: ModalShellProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    // Focus the close button once the panel is mounted.
    const closeBtn = panel.querySelector<HTMLElement>("[data-modal-close]");
    window.setTimeout(() => closeBtn?.focus(), 60);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = panel.querySelectorAll<HTMLElement>(
        'button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={`${styles.panel} ${
          variant === "case" ? styles.panelCase : styles.panelAward
        }`}
      >
        {children}
      </div>
    </div>
  );
}
