import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { flushSync } from "react-dom";

const KEY = "ieee-theme";
const ThemeContext = createContext({ theme: "light", toggle: () => {} });

const systemTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const savedTheme = () => {
  try {
    const t = localStorage.getItem(KEY);
    return t === "dark" || t === "light" ? t : null;
  } catch (_) {
    return null;
  }
};

const paint = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#090f15" : "#edf1f4");
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || savedTheme() || systemTheme()
  );

  // Follow the device setting until the visitor picks one themselves.
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (savedTheme()) return;
      const next = mq.matches ? "dark" : "light";
      paint(next);
      setTheme(next);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(
    (origin) => {
      const next = theme === "dark" ? "light" : "dark";
      const commit = () => {
        paint(next);
        setTheme(next);
        try {
          localStorage.setItem(KEY, next);
        } catch (_) {}
      };

      const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!document.startViewTransition || reduced) {
        commit();
        return;
      }

      const x = origin && origin.x != null ? origin.x : window.innerWidth - 40;
      const y = origin && origin.y != null ? origin.y : 40;
      const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

      const transition = document.startViewTransition(() => {
        flushSync(commit);
      });
      transition.ready
        .then(() => {
          document.documentElement.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
            { duration: 650, easing: "cubic-bezier(0.22, 0.8, 0.24, 1)", pseudoElement: "::view-transition-new(root)" }
          );
        })
        .catch(() => {});
    },
    [theme]
  );

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
