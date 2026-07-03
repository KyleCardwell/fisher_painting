"use client";

import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import Lightbox from "./Lightbox";

export default function PortfolioGallery({ images = [], title }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      {title ? <h2 className="text-2xl font-bold text-primary sm:text-3xl">{title}</h2> : null}

      {!images.length ? (
        <p className="mt-4 text-sm text-slate-600">No gallery images available yet.</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {images.map((imagePath, index) => (
            <button
              key={`${imagePath}-${index}`}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative aspect-[3/2] overflow-hidden rounded-lg"
              aria-label={`Open image ${index + 1}`}
            >
              <PlaceholderImage
                src={imagePath}
                alt={`Portfolio image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      )}

      <Lightbox
        images={images}
        isOpen={lightboxOpen}
        initialIndex={selectedIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
