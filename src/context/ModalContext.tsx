"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface ModalContextValue {
  caseStudyId: string | null;
  awardId: string | null;
  openCaseStudy: (id: string) => void;
  openAward: (id: string) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [caseStudyId, setCaseStudyId] = useState<string | null>(null);
  const [awardId, setAwardId] = useState<string | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const isOpen = caseStudyId !== null || awardId !== null;

  const rememberFocus = useCallback(() => {
    lastFocused.current = document.activeElement as HTMLElement | null;
  }, []);

  const openCaseStudy = useCallback(
    (id: string) => {
      rememberFocus();
      setAwardId(null);
      setCaseStudyId(id);
    },
    [rememberFocus],
  );

  const openAward = useCallback(
    (id: string) => {
      rememberFocus();
      setCaseStudyId(null);
      setAwardId(id);
    },
    [rememberFocus],
  );

  const close = useCallback(() => {
    setCaseStudyId(null);
    setAwardId(null);
  }, []);

  // Lock body scroll while any modal is open; restore focus on close.
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
        const el = lastFocused.current;
        if (el && typeof el.focus === "function") {
          // defer so the trigger exists after modal unmount
          window.setTimeout(() => el.focus(), 0);
        }
      };
    }
  }, [isOpen]);

  return (
    <ModalContext.Provider
      value={{ caseStudyId, awardId, openCaseStudy, openAward, close }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return ctx;
}
