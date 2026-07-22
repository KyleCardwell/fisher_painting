"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

const getPathFromHref = (href) => href.split("#")[0];

const isActivePath = (pathname, href) => {
  const hrefPath = getPathFromHref(href);

  if (hrefPath === "/") {
    return pathname === "/";
  }

  return pathname === hrefPath || pathname.startsWith(`${hrefPath}/`);
};

function NavLink({ href, children, onClose, inset = false, active = false }) {
  return (
    <Link
      href={href}
      onClick={onClose}
      aria-current={active ? "page" : undefined}
      className={clsx(
        "block border-b border-[#efefef] py-[15px] text-base font-medium leading-[1.2] hover:bg-fisherRed hover:text-white",
        active ? "bg-fisherRed text-white" : "text-[#676767]",
        inset ? "pl-14 pr-5" : "px-5",
      )}
    >
      {children}
    </Link>
  );
}

function ServiceGroup({ group, onClose, expanded, onToggle }) {
  return (
    <div className="border-b border-[#efefef] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className={clsx(
          "flex w-full items-center justify-between py-[15px] pl-10 pr-5 text-left text-base font-medium leading-[1.2] transition-colors",
          expanded ? "bg-fisherRed text-white" : "text-[#676767]",
        )}
        aria-expanded={expanded}
      >
        {group.label}
        <ChevronRightIcon
          className={clsx(
            "h-4 w-4 transition-transform",
            expanded && "rotate-90",
          )}
        />
      </button>
      <div
        className={clsx(
          "grid bg-[#fafafa] transition-[grid-template-rows] duration-200",
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          {group.items.map((link) =>
            link.href ? (
              <NavLink
                key={link.label}
                href={link.href}
                onClose={onClose}
                inset
              >
                {link.label}
              </NavLink>
            ) : (
              <span
                key={link.label}
                className="block border-b border-[#efefef] py-[15px] pl-14 pr-5 text-base font-medium leading-[1.2] text-[#929292] last:border-b-0"
                aria-disabled="true"
              >
                {link.label}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function NavSection({ title, links, onClose, active = false }) {
  const [expanded, setExpanded] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState(null);

  return (
    <div className="border-b border-[#efefef]">
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className={clsx(
          "flex w-full items-center justify-between px-5 py-[15px] text-left text-base font-medium leading-[1.2] hover:bg-fisherRed hover:text-white",
          expanded || active ? "bg-fisherRed text-white" : "text-[#676767]",
        )}
        aria-expanded={expanded}
        aria-current={active ? "page" : undefined}
      >
        {title}
        <ChevronDownIcon
          className={clsx(
            "h-4 w-4 transition-transform",
            expanded && "rotate-180",
          )}
        />
      </button>
      {expanded && (
        <div className="bg-white">
          {links.map((group) => (
            <ServiceGroup
              key={group.label}
              group={group}
              onClose={onClose}
              expanded={expandedGroup === group.label}
              onToggle={() =>
                setExpandedGroup((current) =>
                  current === group.label ? null : group.label,
                )
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MobileNav({ servicesLinks }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="z-10 lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-[46px] w-[46px] items-center justify-center bg-fisherRed text-white transition-colors hover:bg-[#1C1D1E]"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? (
          <XMarkIcon className="h-[30px] w-[30px]" />
        ) : (
          <Bars3Icon className="h-[30px] w-[30px]" />
        )}
      </button>

      <nav
        className={clsx(
          "absolute inset-x-0 top-full z-40 grid overflow-hidden bg-white shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-[grid-template-rows,transform] duration-300 ease-out",
          open
            ? "pointer-events-auto grid-rows-[1fr] translate-y-0"
            : "pointer-events-none grid-rows-[0fr] -translate-y-1",
        )}
        aria-label="Mobile navigation"
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mx-auto max-h-[calc(100vh-5rem)] w-full max-w-7xl overflow-y-auto sm:max-h-[calc(100vh-6rem)]">
            <NavLink
              href="/"
              onClose={() => setOpen(false)}
              active={isActivePath(pathname, "/")}
            >
              Home
            </NavLink>
            <NavLink
              href="/about"
              onClose={() => setOpen(false)}
              active={isActivePath(pathname, "/about")}
            >
              About
            </NavLink>
            <NavSection
              title="Services"
              links={servicesLinks}
              onClose={() => setOpen(false)}
              active={isActivePath(pathname, "/services")}
            />
            <NavLink
              href="/portfolio"
              onClose={() => setOpen(false)}
              active={isActivePath(pathname, "/portfolio")}
            >
              Portfolio
            </NavLink>
            <NavLink
              href="/contact"
              onClose={() => setOpen(false)}
              active={isActivePath(pathname, "/contact")}
            >
              Contact
            </NavLink>
            <NavLink
              href="/careers"
              onClose={() => setOpen(false)}
              active={isActivePath(pathname, "/careers")}
            >
              Careers
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
