"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";
import PlaceholderImage from "@/components/PlaceholderImage";
import { images } from "@/lib/images";

const SLIDE_INTERVAL_MS = 7000;
const slideCount = 2;

export default function HomeHeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToPreviousSlide = useCallback(() => {
    setActiveSlide((currentSlide) =>
      currentSlide === 0 ? slideCount - 1 : currentSlide - 1,
    );
  }, []);

  const goToNextSlide = useCallback(() => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % slideCount);
  }, []);

  useEffect(() => {
    const slideTimer = window.setInterval(goToNextSlide, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(slideTimer);
  }, [goToNextSlide]);

  return (
    <section
      className="relative isolate min-h-[40vh] overflow-hidden sm:min-h-[60vh] md:min-h-[80vh]"
      aria-label="Featured announcements"
    >
      <div className="absolute inset-0">
        <div
          className={[
            "absolute inset-0 flex items-center justify-center transition-opacity duration-700",
            activeSlide === 0
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          ].join(" ")}
          aria-hidden={activeSlide !== 0}
        >
          <div className="absolute inset-0 -z-20 overflow-hidden">
            <div className="home-split-img-left absolute inset-y-0 left-0 w-[70%] sm:w-2/3">
              <PlaceholderImage
                src={images.home.heroWide}
                alt="Salt Lake City and Wasatch Mountains"
                fill
                sizes="(max-width: 768px) 80vw, 66vw"
                priority
                className="object-cover object-center"
              />
            </div>
            <div className="home-split-img-right absolute inset-y-0 right-0 w-[70%] sm:w-2/3">
              <PlaceholderImage
                src={images.home.heroSouth}
                alt="Southern Utah red rocks"
                fill
                sizes="(max-width: 768px) 80vw, 66vw"
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-black/30" />
          <div className="mx-auto w-full max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <p className="mb-4 text-xl font-semibold uppercase tracking-[0.16em] text-white/80">
                Fisher Painting Inc
              </p>
              <h1 className="text-4xl font-semibold leading-[1.2] text-white sm:text-5xl lg:text-[3.75rem]">
                Now Serving All of Utah
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-xl font-semibold leading-[1.2] text-white/90 sm:text-3xl lg:text-[2.5rem]">
                And Surrounding Regions
              </p>
              <Button href="/contact" className="mt-8" variant="red">
                Request Quote
              </Button>
            </div>
          </div>
        </div>

        <div
          className={[
            "absolute inset-0 flex items-center justify-center bg-[#f7f4ef] px-4 py-12 transition-opacity duration-700 sm:px-6 sm:py-20 lg:px-8",
            activeSlide === 1
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          ].join(" ")}
          aria-hidden={activeSlide !== 1}
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.78)_45%,rgba(196,32,38,0.12)_100%)]" />
          <div className="mx-auto grid w-full max-w-5xl items-center gap-8 text-center md:grid-cols-[1fr_auto_1fr] md:gap-10">
            <div className="flex min-h-[160px] items-center justify-center rounded-lg bg-white/80 p-6 shadow-sm ring-1 ring-black/5">
              <PlaceholderImage
                src={images.logos.logoFull}
                alt="Fisher Painting logo"
                width={360}
                height={180}
                sizes="(max-width: 768px) 55vw, 280px"
                className="h-auto max-h-32 w-auto object-contain"
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fisherRed">
                Now Partnering With
              </p>
              <h2 className="text-4xl font-semibold leading-[1.1] text-primary sm:text-5xl lg:text-[3.5rem]">
                Stone Touch
              </h2>
            </div>

            <div className="flex min-h-[160px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white/65 p-6 text-center shadow-sm">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Stone Touch
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-700">
                  Logo Placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/45 focus:outline-none focus:ring-2 focus:ring-white/90 sm:left-6 sm:h-12 sm:w-12"
        aria-label="Show previous banner slide"
        onClick={goToPreviousSlide}
      >
        <ChevronLeftIcon className="h-7 w-7" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/45 focus:outline-none focus:ring-2 focus:ring-white/90 sm:right-6 sm:h-12 sm:w-12"
        aria-label="Show next banner slide"
        onClick={goToNextSlide}
      >
        <ChevronRightIcon className="h-7 w-7" aria-hidden="true" />
      </button>
    </section>
  );
}
