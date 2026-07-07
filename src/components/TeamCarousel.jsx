"use client";

import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function TeamCarousel({ members = [] }) {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    const card = track?.querySelector("[data-team-card]");

    if (!track || !card) return;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const distance = card.getBoundingClientRect().width + gap;

    track.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-12 w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 hidden items-center justify-between lg:flex">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          className="pointer-events-auto -translate-x-16 inline-flex h-16 w-16 items-center justify-center bg-transparent text-primary drop-shadow-sm transition-colors hover:text-accent"
          aria-label="Previous team member"
        >
          <ChevronLeftIcon className="h-10 w-10" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          className="pointer-events-auto translate-x-16 inline-flex h-16 w-16 items-center justify-center bg-transparent text-primary drop-shadow-sm transition-colors hover:text-accent"
          aria-label="Next team member"
        >
          <ChevronRightIcon className="h-10 w-10" aria-hidden="true" />
        </button>
      </div>

      <div
        ref={trackRef}
        className="team-scroll flex snap-x snap-mandatory gap-8 overflow-x-auto touch-pan-x"
      >
        {members.map((member) => (
          <article
            key={member.name}
            data-team-card
            className="min-w-full snap-start snap-always scroll-ml-0 text-center sm:min-w-[calc((100%_-_2rem)/2)] lg:min-w-[calc((100%_-_6rem)/4)]"
          >
            {(() => {
              const objectPosition =
                member.imagePosition || `${member.imageX || "center"} ${member.imageY || "10%"}`;
              const transformParts = [];

              if (typeof member.imageScale !== "undefined") {
                transformParts.push(`scale(${member.imageScale})`);
              }

              if (member.imageShiftX) {
                transformParts.push(`translateX(${member.imageShiftX})`);
              }

              const transform = transformParts.length ? transformParts.join(" ") : undefined;

              return (
            <div className="relative aspect-square overflow-hidden rounded-full">
              <PlaceholderImage
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                style={{
                  objectPosition,
                  transform,
                }}
              />
            </div>
              );
            })()}
            <h3 className="mt-6 text-2xl font-medium leading-tight text-primary">
              {member.name}
            </h3>
            <p className="mt-2 text-xl leading-tight text-fisherRed">
              {member.role}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
