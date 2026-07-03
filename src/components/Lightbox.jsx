"use client";

import { useEffect, useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Lightbox({ images, isOpen, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }

      if (event.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [images.length, isOpen, onClose]);

  if (!isOpen || !images?.length) {
    return null;
  }

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          goPrev();
        }}
        className="absolute left-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Previous image"
      >
        <ChevronLeftIcon className="h-7 w-7" />
      </button>

      <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
        <PlaceholderImage
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          width={1800}
          height={1200}
          sizes="100vw"
          className="mx-auto max-h-[82vh] w-auto rounded-xl object-contain"
          priority
        />
        <p className="mt-3 text-center text-sm font-medium text-white/85">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          goNext();
        }}
        className="absolute right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Next image"
      >
        <ChevronRightIcon className="h-7 w-7" />
      </button>
    </div>
  );
}
