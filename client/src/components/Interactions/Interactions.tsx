
import { useEffect } from "react";

const EASE = "cubic-bezier(.22,.61,.36,1)";

function hiddenTransform(variant: string): string {
  switch (variant) {
    case "left":
      return "translateX(-24px)";
    case "right":
      return "translateX(24px)";
    case "scale-y":
      return "scaleY(0)";
    case "pop":
      return "scale(.5)";
    default:
      return "translateY(20px)";
  }
}

/**
 * Progressive-enhancement layer. Runs after hydration and drives:
 *  - staggered scroll reveals for [data-reveal]
 *  - subtle mouse-tilt on [data-tilt] cards (fine pointers only)
 *  - hero 3D mouse rotation + scroll parallax on [data-para]
 *  - animation pause while the tab is hidden
 * All effects are skipped when the user prefers reduced motion.
 * Renders nothing.
 */
export default function Interactions() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    // Pause CSS animations when the tab is not visible.
    const onVis = () => {
      if (document.hidden) document.body.setAttribute("data-hidden", "");
      else document.body.removeAttribute("data-hidden");
    };
    document.addEventListener("visibilitychange", onVis);
    cleanups.push(() =>
      document.removeEventListener("visibilitychange", onVis),
    );

    if (reduced) {
      return () => cleanups.forEach((fn) => fn());
    }

    // --- Scroll reveals -----------------------------------------------------
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "none";
          revealIo.unobserve(el);
          // Hand control back to CSS once the reveal settles (snappier hover/tilt).
          window.setTimeout(() => {
            el.style.transition = "";
          }, 650);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Never hide content already visible on load.
      if (rect.top < window.innerHeight * 0.9) return;
      const variant = el.getAttribute("data-reveal") || "";
      const delay =
        (parseInt(el.getAttribute("data-reveal-delay") || "0", 10) || 0) * 80;
      el.style.opacity = "0";
      el.style.transform = hiddenTransform(variant);
      if (variant === "scale-y") el.style.transformOrigin = "top";
      el.style.transition = `opacity .55s ${EASE} ${delay}ms, transform .55s ${EASE} ${delay}ms`;
      revealIo.observe(el);
    });
    cleanups.push(() => revealIo.disconnect());

    if (!finePointer) {
      return () => cleanups.forEach((fn) => fn());
    }

    // --- Card mouse-tilt ----------------------------------------------------
    const tiltMove = (e: Event) => {
      const me = e as MouseEvent;
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const x = (me.clientX - r.left) / r.width - 0.5;
      const y = (me.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-y * 2).toFixed(
        2,
      )}deg) rotateY(${(x * 3).toFixed(2)}deg) scale(1.01)`;
    };
    const tiltLeave = (e: Event) => {
      (e.currentTarget as HTMLElement).style.transform = "";
    };
    const tiltEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tilt]"),
    );
    tiltEls.forEach((el) => {
      el.addEventListener("mousemove", tiltMove);
      el.addEventListener("mouseleave", tiltLeave);
    });
    cleanups.push(() =>
      tiltEls.forEach((el) => {
        el.removeEventListener("mousemove", tiltMove);
        el.removeEventListener("mouseleave", tiltLeave);
      }),
    );

    // --- Hero 3D rotation ---------------------------------------------------
    const hero = document.querySelector<HTMLElement>("[data-hero-root]");
    const hero3d = document.querySelector<HTMLElement>("[data-hero-3d]");
    if (hero && hero3d) {
      const heroMove = (e: MouseEvent) => {
        const r = hero.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        hero3d.style.transform = `rotateY(${(x * 3).toFixed(
          2,
        )}deg) rotateX(${(-y * 2.5).toFixed(2)}deg)`;
      };
      const heroLeave = () => {
        hero3d.style.transform = "";
      };
      hero.addEventListener("mousemove", heroMove);
      hero.addEventListener("mouseleave", heroLeave);
      cleanups.push(() => {
        hero.removeEventListener("mousemove", heroMove);
        hero.removeEventListener("mouseleave", heroLeave);
      });
    }

    // --- Parallax on decorative layers -------------------------------------
    const paraEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-para]"),
    ).map((el) => ({
      el,
      f: parseFloat(el.getAttribute("data-para") || "0.08") || 0.08,
    }));
    if (paraEls.length) {
      let ticking = false;
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const sy = window.scrollY;
          if (sy < window.innerHeight * 1.2) {
            paraEls.forEach(({ el, f }) => {
              el.style.transform = `translateY(${(sy * f).toFixed(1)}px)`;
            });
          }
          ticking = false;
        });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
