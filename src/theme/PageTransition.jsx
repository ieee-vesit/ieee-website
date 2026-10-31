import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Fades each new page in. The very first page is skipped on purpose:
 * the logo screen is already the entrance, and a second animation would double up.
 */
export default function PageTransition({ children }) {
  const { pathname } = useLocation();
  const first = useRef(true);
  const animate = !first.current;
  first.current = false;

  return (
    <div key={pathname} className={animate ? "page-enter" : undefined}>
      {children}
    </div>
  );
}
