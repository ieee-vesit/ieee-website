/**
 * Two small behaviours shared by every page:
 *  1. a soft highlight that follows the pointer across frosted panels
 *  2. cards that start below the fold settle in as they scroll into view
 * Both leave the page fully usable if anything here fails.
 */

// Anything that is a panel or card on the site.
const PANELS = [
  ".glass",
  ".card",
  ".provideCard",
  ".testimonial-card",
  ".translucent-box",
  ".event-card",
  ".ec-card",
  ".ec-sidebar-item",
  ".member-card",
  ".membership-card",
  ".activity-card",
  ".feature-card",
  ".resource-card",
  ".tier-card",
  ".community-stats-card",
  ".card1", ".card2", ".card3", ".card4", ".card5", ".card6",
].join(",");

// Panels that should animate in when they scroll into view.
const REVEALABLE = [
  ".card",
  ".provideCard",
  ".testimonial-card",
  ".ec-card",
  ".member-card",
  ".membership-card",
  ".activity-card",
  ".feature-card",
  ".resource-card",
  ".tier-card",
  ".community-stats-card",
].join(",");

const canHover = () => window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const reducedMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initSheen() {
  if (!canHover()) return;
  let frame = 0;
  document.addEventListener(
    "pointermove",
    (e) => {
      if (frame) return;
      const { clientX, clientY, target } = e;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = target instanceof Element ? target.closest(PANELS) : null;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${clientX - r.left}px`);
        el.style.setProperty("--my", `${clientY - r.top}px`);
      });
    },
    { passive: true }
  );
}

function initReveal(root) {
  if (reducedMotion() || !("IntersectionObserver" in window)) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  const seen = new WeakSet();
  const scan = () => {
    root.querySelectorAll(REVEALABLE).forEach((el) => {
      if (seen.has(el)) return;
      seen.add(el);
      const r = el.getBoundingClientRect();
      // Already on screen: leave it alone, so nothing flickers on load.
      if (r.top < window.innerHeight * 0.92) return;
      // Stagger siblings that arrive together.
      const index = Array.prototype.indexOf.call(el.parentElement ? el.parentElement.children : [], el);
      el.style.setProperty("--d", `${Math.min(Math.max(index, 0), 5) * 70}ms`);
      el.classList.add("reveal");
      io.observe(el);
    });
  };

  scan();
  let pending = 0;
  new MutationObserver(() => {
    if (pending) return;
    pending = requestAnimationFrame(() => {
      pending = 0;
      scan();
    });
  }).observe(root, { childList: true, subtree: true });
}

export function initEffects() {
  try {
    initSheen();
    initReveal(document.getElementById("root") || document.body);
  } catch (_) {
    /* decoration only */
  }
}

// Used by theme.css selectors that also want the highlight.
export const PANEL_SELECTOR = PANELS;
