import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router doesn't manage scroll position. On navigation this scrolls to a
 * hash target if present (e.g. /#projects), otherwise to the top of the page.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
