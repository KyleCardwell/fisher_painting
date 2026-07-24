"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import PlaceholderImage from "@/components/PlaceholderImage";

const SLIDE_INTERVAL_MS = 7000;
const POINTER_FOCUS_DURATION_MS = 2000;

export default function ServiceImageCarousel({ serviceName, slides }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const pointerFocusTimer = useRef(null);
  const slideCount = slides.length;

  const goToPreviousSlide = useCallback(() => {
    setActiveSlide((currentSlide) =>
      currentSlide === 0 ? slideCount - 1 : currentSlide - 1,
    );
  }, [slideCount]);

  const goToNextSlide = useCallback(() => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    if (slideCount < 2) return undefined;

    const slideTimer = window.setInterval(goToNextSlide, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(slideTimer);
  }, [goToNextSlide, slideCount]);

  useEffect(
    () => () => {
      if (pointerFocusTimer.current) {
        window.clearTimeout(pointerFocusTimer.current);
      }
    },
    [],
  );

  const selectSlide = (index, event) => {
    setActiveSlide(index);

    if (event.detail > 0) {
      if (pointerFocusTimer.current) {
        window.clearTimeout(pointerFocusTimer.current);
      }

      const selectedDot = event.currentTarget;
      pointerFocusTimer.current = window.setTimeout(() => {
        selectedDot.blur();
        pointerFocusTimer.current = null;
      }, POINTER_FOCUS_DURATION_MS);
    }
  };

  return (
    <div
      className="relative pb-7"
      aria-label={`${serviceName} project images`}
      aria-roledescription="carousel"
    >
      <div className="relative min-h-[250px] overflow-hidden rounded-[10px] bg-slate-100 sm:min-h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={`${serviceName}-slide-${index + 1}`}
            className={[
              "absolute inset-0 transition-opacity duration-700",
              activeSlide === index
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0",
            ].join(" ")}
            aria-hidden={activeSlide !== index}
          >
            <PlaceholderImage
              src={slide}
              alt={
                slide
                  ? `${serviceName} project`
                  : `${serviceName} image placeholder ${index}`
              }
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {slideCount > 1 ? (
          <>
            <button
              type="button"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/55 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={`Show previous ${serviceName} image`}
              onClick={goToPreviousSlide}
            >
              <ChevronLeftIcon className="mr-1 h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/55 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={`Show next ${serviceName} image`}
              onClick={goToNextSlide}
            >
              <ChevronRightIcon className="ml-1 h-6 w-6" aria-hidden="true" />
            </button>
          </>
        ) : null}
      </div>

      {slideCount > 1 ? (
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-6">
          {slides.map((_, index) => (
            <button
              key={`${serviceName}-indicator-${index + 1}`}
              type="button"
              className={[
                "h-2 w-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",
                activeSlide === index ? "bg-slate-700" : "bg-slate-300",
              ].join("   ")}
              aria-label={`Show ${serviceName} image ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
              onClick={(event) => selectSlide(index, event)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
