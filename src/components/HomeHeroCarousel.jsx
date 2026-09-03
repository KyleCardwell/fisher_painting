"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";
import PlaceholderImage from "@/components/PlaceholderImage";
import { images } from "@/lib/images";

const newServiceCards = [
  {
    src: images.services.polishedConcrete[0],
    alt: "Polished concrete floor",
    title: "Polished Concrete",
    clipPath: "polygon(0 0, 34.5% 0, 44.5% 100%, 10% 100%)",
  },
  {
    src: images.services.stainedConcrete[0],
    alt: "Stained concrete floor",
    title: "Stained Concrete",
    clipPath: "polygon(34.25% 0, 67.25% 0, 77.25% 100%, 44.25% 100%)",
  },
  {
    src: images.services.epoxyCoatings[0],
    alt: "Epoxy-coated floor",
    title: "Epoxy Coatings",
    clipPath: "polygon(67% 0, 100% 0, 100% 100%, 77% 100%)",
  },
];

const SLIDE_INTERVAL_MS = 7000;
const slideCount = 3;

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
    if (slideCount <= 1) {
      return undefined;
    }

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
            "absolute inset-0 flex items-center justify-center bg-white px-3 py-3 transition-opacity duration-700 sm:px-6 sm:py-6",
            activeSlide === 1
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          ].join(" ")}
          aria-hidden={activeSlide !== 1}
        >
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center gap-[clamp(0.5rem,2.5vh,1.75rem)]">
            <PlaceholderImage
              src="/brand/st_logo.png"
              alt=""
              width={3198}
              height={1432}
              sizes="(max-width: 640px) 48vw, 368px"
              className="h-auto w-[clamp(10rem,25vw,23rem)] shrink-0 object-contain"
            />

            <PlaceholderImage
              src="/brand/stone_touch_logo.png"
              alt="Stone Touch"
              width={4747}
              height={265}
              sizes="(max-width: 640px) 88vw, 832px"
              className="mb-[clamp(0.5rem,2vh,1.25rem)] h-auto w-[min(88vw,52rem)] shrink-0 object-contain"
            />

            <p className="max-w-5xl text-center text-[clamp(0.85rem,1.75vw,1.5rem)] font-semibold leading-snug text-slate-800">
              Now offering: concrete sealer, concrete polish, epoxy coatings,
              resinous coatings
            </p>
          </div>
        </div>

        <div
          className={[
            "absolute inset-0 transition-opacity duration-700",
            activeSlide === 2
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          ].join(" ")}
          aria-hidden={activeSlide !== 2}
        >
          <div className="flex h-full w-full flex-col">
            <div className="grid min-h-0 w-full flex-1 grid-cols-3 gap-0">
              {newServiceCards.map((service) => (
                <div
                  key={service.title}
                  className="relative h-full min-w-0 overflow-hidden bg-slate-200"
                >
                  <PlaceholderImage
                    src={service.src}
                    alt={service.alt}
                    fill
                    sizes="33vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/55 px-2 py-[clamp(0.4rem,1.4vh,0.9rem)]">
                    <p
                      className="text-center text-[clamp(0.65rem,1.65vw,1.3rem)] font-semibold leading-tight text-white"
                      aria-label={service.title}
                    >
                      {service.title.split(" ").map((word, index, words) => (
                        <span
                          key={word}
                          aria-hidden="true"
                          className="block sm:inline"
                        >
                          {word}
                          {index < words.length - 1 && (
                            <span className="hidden sm:inline"> </span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="flex min-h-[clamp(3.5rem,8.5vh,6rem)] items-center justify-center bg-fisherRed px-3 text-center text-[clamp(1.1rem,3.2vw,2.8rem)] font-semibold leading-tight text-white">
              Now Offering New Services
            </h2>
          </div>
        </div>
      </div>

      {slideCount > 1 && (
        <>
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
        </>
      )}
    </section>
  );
}
