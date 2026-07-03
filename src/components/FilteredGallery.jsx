"use client";

import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import PortfolioGallery from "./PortfolioGallery";

export default function FilteredGallery({ galleries = {}, title }) {
  const categories = useMemo(() => Object.keys(galleries), [galleries]);
  const [activeCategory, setActiveCategory] = useState(categories[0] || "");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!categories.length) {
      setActiveCategory("");
      return;
    }

    if (!categories.includes(activeCategory)) {
      setActiveCategory(categories[0]);
    }
  }, [activeCategory, categories]);

  useEffect(() => {
    setVisible(false);
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [activeCategory]);

  const activeImages = activeCategory ? galleries[activeCategory] || [] : [];

  return (
    <div>
      {title ? <h2 className="text-2xl font-bold text-primary sm:text-3xl">{title}</h2> : null}

      {categories.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={clsx(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                activeCategory === category
                  ? "border-accent bg-accent text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <div
        className={clsx(
          "mt-2 transform transition-all duration-300",
          visible ? "scale-100 opacity-100" : "scale-[0.98] opacity-0"
        )}
      >
        <PortfolioGallery images={activeImages} title={activeCategory || "Gallery"} />
      </div>
    </div>
  );
}
