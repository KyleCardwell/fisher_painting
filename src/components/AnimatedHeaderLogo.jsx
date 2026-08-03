"use client";

import clsx from "clsx";

const fullLogo = "/brand/fisher-painting-full.svg";
const compactLogo = "/brand/fp-black.svg";

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
