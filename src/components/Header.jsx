"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import MobileNav from "./MobileNav";
import { images } from "../lib/images";

const servicesLinks = [
  { label: "Interior Painting", href: "/services/#interior-painting" },
  { label: "Exterior Coatings", href: "/services/#exterior-coatings" },
  { label: "Plaster Coatings", href: "/services/#plaster-coatings" },
  { label: "Stain & Transparent Coatings", href: "/services/#stain-transparent-coatings" },
  { label: "Wallcoverings", href: "/services/#wallcoverings" },
];

const portfolioLinks = [
  { label: "Worthington", href: "/portfolio/worthington" },
  { label: "Tower 8", href: "/portfolio/tower-8" },
  { label: "Traeger", href: "/portfolio/traeger" },
  { label: "Interior Painting", href: "/portfolio/interior-painting" },
  { label: "Exterior Coatings", href: "/portfolio/exterior-coatings" },
  { label: "Plaster Coatings", href: "/portfolio/plaster-coatings" },
  { label: "Stain & Transparent Coatings", href: "/portfolio/stain-transparent-coatings" },
  { label: "Wallcoverings", href: "/portfolio/wallcoverings" },
];

function Dropdown({ label, items }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition-colors hover:text-accent"
      >
        {label}
        <ChevronDownIcon className="h-4 w-4" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-primary"
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
        scrolled ? "shadow-md" : "shadow-none"
      )}
    >
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Fisher Painting Inc Home" className="shrink-0">
          <PlaceholderImage
            src={images.logos.logo}
            alt="Fisher Painting Inc Logo"
            width={210}
            height={60}
            className="h-auto w-[180px] sm:w-[210px]"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-accent">
            Home
          </Link>
          <Link href="/about" className="text-sm font-semibold text-slate-700 hover:text-accent">
            About
          </Link>
          <Dropdown label="Services" items={servicesLinks} />
          <Dropdown label="Portfolio" items={portfolioLinks} />
          <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-accent">
            Contact
          </Link>
          <Link href="/careers" className="text-sm font-semibold text-slate-700 hover:text-accent">
            Careers
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+18016769222"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <PhoneIcon className="h-4 w-4" />
            (801) 676-9222
          </a>
          <Link
            href="/contact"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#3b7fc4]"
          >
            Get A Quote
          </Link>
        </div>

        <MobileNav servicesLinks={servicesLinks} portfolioLinks={portfolioLinks} />
      </div>
    </header>
  );
}
