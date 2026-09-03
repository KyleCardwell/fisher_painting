"use client";

import clsx from "clsx";

const fpLogo = "/brand/fp-black.svg";
const stoneTouchLogo = "/brand/st_logo.png";

export default function AnimatedHeaderLogo({ compact = false }) {
  return (
    <span
      className={clsx("animated-header-logo", compact && "is-compact")}
      aria-hidden="true"
    >
      <img
        src={fpLogo}
        alt=""
        width="864"
        height="648"
        className="animated-header-logo__fp"
      />
      <span className="animated-header-logo__divider" />
      <img
        src={stoneTouchLogo}
        alt=""
        width="3198"
        height="1432"
        className="animated-header-logo__st"
      />
    </span>
  );
}
