import React from "react";

/**
 * The rotating IEEE VESIT logo.
 * variant="fill"   covers the whole screen (used while a page's images load)
 * variant="inline" sits inside the page
 * The look comes from the .bl-* styles in index.html, shared with the first-load screen.
 */
export default function LogoLoader({ variant = "fill" }) {
  return (
    <div className={variant === "fill" ? "bl-fill" : "bl-inline"} role="status" aria-label="Loading">
      <div className="bl-stage">
        <span className="bl-disc" />
        <span className="bl-arc" />
        <img className="bl-logo bl-logo--light" src="/loader-logo.webp" alt="" width="78" height="78" />
        <img className="bl-logo bl-logo--dark" src="/loader-logo-white.webp" alt="" width="78" height="78" />
      </div>
    </div>
  );
}
