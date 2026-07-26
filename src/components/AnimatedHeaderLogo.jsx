"use client";

import clsx from "clsx";

const fullLogo = "/images/logos/Fisher Painting - Full.svg";
const compactLogo = "/images/logos/FP - Black.svg";

export default function AnimatedHeaderLogo({ compact = false }) {
  return (
    <span
      className={clsx("animated-header-logo", compact && "is-compact")}
      aria-hidden="true"
    >
      <img
        src={compactLogo}
        alt=""
        className="animated-header-logo__mobile"
      />
      <img src={fullLogo} alt="" className="animated-header-logo__full" />
      <img
        src={compactLogo}
        alt=""
        className="animated-header-logo__compact"
      />
    </span>
  );
}
