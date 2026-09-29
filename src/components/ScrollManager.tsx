import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router keeps the previous scroll position between pages. This starts each page
// at the top, or at the section named in the hash (e.g. "/#contact" from a case study).
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target section has rendered after a route change
      const timer = window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      }, 0);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
