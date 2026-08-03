"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import MobileNav from "./MobileNav";
import { images } from "../lib/images";
import Button from "./Button";

const servicesLinks = [
  { label: "Interior Painting", href: "/services/#interior-painting" },
  { label: "Exterior Coatings", href: "/services/#exterior-coatings" },
  { label: "Plaster Coatings", href: "/services/#plaster-coatings" },
  {
    label: "Stain & Transparent Coatings",
    href: "/services/#stain-transparent-coatings",
  },
  { label: "Wallcoverings", href: "/services/#wallcoverings" },
];

const portfolioLinks = [
  { label: "Worthington", href: "/portfolio/worthington" },
  { label: "Tower 8", href: "/portfolio/tower-8" },
  { label: "Traeger", href: "/portfolio/traeger" },
  { label: "Interior Painting", href: "/portfolio/interior-painting" },
  { label: "Exterior Coatings", href: "/portfolio/exterior-coatings" },
  { label: "Plaster Coatings", href: "/portfolio/plaster-coatings" },
  {
    label: "Stain & Transparent Coatings",
    href: "/portfolio/stain-transparent-coatings",
  },
  { label: "Wallcoverings", href: "/portfolio/wallcoverings" },
];

function Dropdown({ label, items, href }) {
  return (
    <div className="group relative">
      {href ? (
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-base font-medium leading-[1.2] text-[#676767] transition-colors hover:text-fisherRed"
        >
          {label}
          <ChevronDownIcon className="h-4 w-4" />
        </Link>
      ) : (
        <button
          type="button"
          className="inline-flex items-center gap-1 text-base font-medium leading-[1.2] text-[#676767] transition-colors hover:text-fisherRed"
        >
          {label}
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      )}
      <div className="invisible absolute left-0 top-full z-50 mt-4 w-72 bg-white p-2 opacity-0 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-[15px] text-base font-medium leading-[1.2] text-[#676767] hover:bg-fisherRed hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-200",
        scrolled ? "shadow-md" : "shadow-none",
      )}
    >
      <div className="relative mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:min-h-[120px] lg:gap-8 lg:px-8 lg:py-[30px]">
        <div className="z-10 lg:hidden">
          <Button
            href="tel:+18016769222"
            className="h-11 w-11 min-w-11 items-center justify-center p-0 text-white hover:text-white sm:hidden [&_svg]:block"
            variant="red"
            aria-label="Call Fisher Painting"
          >
            <PhoneIcon
              className="h-5 w-5 shrink-0 fill-current text-white"
              aria-hidden="true"
            />
          </Button>
          <Button
            href="tel:+18016769222"
            className="hidden h-11 shrink-0 items-center gap-2 whitespace-nowrap px-4 py-0 text-sm leading-none text-white hover:text-white sm:inline-flex lg:hidden"
            variant="red"
          >
            <PhoneIcon className="h-4 w-4 text-white" />
            (801) 676-9222
          </Button>
        </div>

        <Link
          href="/"
          aria-label="Fisher Painting Inc Home"
          className="absolute left-1/2 -translate-x-1/2 lg:static lg:shrink-0 lg:translate-x-0"
        >
          <PlaceholderImage
            src={images.logos.logo}
            alt="Fisher Painting Inc Logo"
            width={210}
            height={60}
            className="h-auto w-[190px] max-w-full sm:w-[210px] lg:w-[270px]"
            style={{ height: "auto" }}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-[35px] lg:flex">
          <Link
            href="/"
            className="text-base font-medium leading-[1.2] text-[#676767] hover:text-fisherRed"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-base font-medium leading-[1.2] text-[#676767] hover:text-fisherRed"
          >
            About
          </Link>
          <Dropdown label="Services" items={servicesLinks} href="/services" />
          <Link
            href="/portfolio"
            className="text-base font-medium leading-[1.2] text-[#676767] hover:text-fisherRed"
          >
            Portfolio
          </Link>
          <Link
            href="/careers"
            className="text-base font-medium leading-[1.2] text-[#676767] hover:text-fisherRed"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="text-base font-medium leading-[1.2] text-[#676767] hover:text-fisherRed"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button
            href="tel:+18016769222"
            className="items-center gap-2"
            variant="red"
          >
            <PhoneIcon className="h-4 w-4" />
            (801) 676-9222
          </Button>
        </div>

        <MobileNav servicesLinks={servicesLinks} />
      </div>
    </header>
  );
}
