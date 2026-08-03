"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import MobileNav from "./MobileNav";
import Button from "./Button";
import AnimatedHeaderLogo from "./AnimatedHeaderLogo";

const servicesLinks = [
  {
    label: "Painting",
    items: [
      { label: "Interior", href: "/services/#interior-painting" },
      { label: "Exterior", href: "/services/#exterior-coatings" },
      {
        label: "Stain & Transparent Coatings",
        href: "/services/#stain-transparent-coatings",
      },
    ],
  },
  {
    label: "Concrete",
    items: [
      { label: "Stained Concrete" },
      { label: "Polished Concrete" },
      { label: "Epoxy Coatings" },
    ],
  },
  {
    label: "Specialty",
    items: [
      { label: "Plaster Coatings", href: "/services/#plaster-coatings" },
      { label: "Wall Coverings", href: "/services/#wallcoverings" },
    ],
  },
];

const portfolioLinks = [
  { label: "Worthington", href: "/portfolio/worthington" },
  { label: "Tower 8", href: "/portfolio/tower-8" },
  { label: "Traeger", href: "/portfolio/traeger" },
];

const desktopNavLinkClasses =
  "border-b-2 pb-1 text-base font-medium leading-[1.2] text-[#676767] transition-colors hover:text-fisherRed";

const COMPACT_LOGO_SCROLL_Y = 64;

function isNavItemActive(pathname, href) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopNavLink({ href, children, pathname }) {
  const active = isNavItemActive(pathname, href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={clsx(
        desktopNavLinkClasses,
        active ? "border-fisherLogoBlue" : "border-transparent",
      )}
    >
      {children}
    </Link>
  );
}

function Dropdown({ label, items, href, pathname }) {
  const active = href && isNavItemActive(pathname, href);

  return (
    <div className="group relative">
      {href ? (
        <Link
          href={href}
          aria-current={active ? "page" : undefined}
          className={clsx(
            "inline-flex items-center gap-1",
            desktopNavLinkClasses,
            active ? "border-fisherLogoBlue" : "border-transparent",
          )}
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
          <div key={item.label} className="group/category relative">
            <button
              type="button"
              className="relative z-10 flex w-full items-center justify-between bg-white px-4 py-[15px] text-left text-base font-medium leading-[1.2] text-[#676767] transition-colors hover:bg-fisherRed hover:text-white group-hover/category:bg-fisherRed group-hover/category:text-white group-focus-within/category:bg-fisherRed group-focus-within/category:text-white"
              aria-haspopup="menu"
            >
              {item.label}
              <ChevronRightIcon className="h-4 w-4 shrink-0" />
            </button>
            <div className="invisible absolute left-full top-0 w-72 overflow-hidden p-2 opacity-0 transition-opacity duration-200 group-hover/category:visible group-hover/category:opacity-100 group-focus-within/category:visible group-focus-within/category:opacity-100">
              {item.items.map((service) =>
                service.href ? (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block -translate-x-full bg-white px-4 py-[15px] text-base font-medium leading-[1.2] text-[#676767] shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out hover:bg-fisherRed hover:text-white group-hover/category:translate-x-0 group-focus-within/category:translate-x-0"
                  >
                    {service.label}
                  </Link>
                ) : (
                  <span
                    key={service.label}
                    className="block -translate-x-full cursor-default bg-white px-4 py-[15px] text-base font-medium leading-[1.2] text-[#929292] shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out group-hover/category:translate-x-0 group-focus-within/category:translate-x-0"
                    aria-disabled="true"
                  >
                    {service.label}
                  </span>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [logoCompact, setLogoCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 8);
      setLogoCompact(scrollY > COMPACT_LOGO_SCROLL_Y);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-200",
          scrolled ? "shadow-md" : "shadow-none",
        )}
      >
        <div
          className={clsx(
            "relative mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 transition-[min-height,padding] duration-500 sm:px-6 lg:gap-8 lg:px-8",
            logoCompact
              ? "lg:min-h-[100px] lg:py-5"
              : "lg:min-h-[150px] lg:py-[30px]",
          )}
        >
          <div className="z-10 lg:hidden">
            <Button
              href="tel:+18016769222"
              className="h-11 w-11 min-w-11 items-center justify-center p-0 text-white hover:text-white [&_svg]:block"
              variant="red"
              aria-label="Call Fisher Painting"
            >
              <PhoneIcon
                className="h-5 w-5 shrink-0 fill-current text-white"
                aria-hidden="true"
              />
            </Button>
          </div>

          <Link
            href="/"
            aria-label="Fisher Painting Inc Home"
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:shrink-0 lg:translate-x-0"
          >
            <AnimatedHeaderLogo compact={logoCompact} />
          </Link>

          <nav className="hidden items-center gap-[35px] lg:flex">
            <DesktopNavLink href="/" pathname={pathname}>
              Home
            </DesktopNavLink>
            <DesktopNavLink href="/about" pathname={pathname}>
              About
            </DesktopNavLink>
            <Dropdown
              label="Services"
              items={servicesLinks}
              href="/services"
              pathname={pathname}
            />
            <DesktopNavLink href="/portfolio" pathname={pathname}>
              Portfolio
            </DesktopNavLink>
            <DesktopNavLink href="/careers" pathname={pathname}>
              Careers
            </DesktopNavLink>
            <DesktopNavLink href="/contact" pathname={pathname}>
              Contact
            </DesktopNavLink>
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
      <div aria-hidden="true" className="h-20 lg:h-[150px]" />
    </>
  );
}
