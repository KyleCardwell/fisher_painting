"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

function NavSection({ title, links, onClose }) {
  return (
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">{title}</p>
      <div className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function MobileNav({ servicesLinks, portfolioLinks }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
        aria-label="Open menu"
      >
        <Bars3Icon className="h-7 w-7" />
      </button>

      <div
        className={clsx(
          "fixed inset-0 z-40 bg-slate-900/40 transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />

      <aside
        className={clsx(
          "fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm bg-white p-6 shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Menu</p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6 overflow-y-auto pb-12">
          <NavSection
            title="Pages"
            onClose={() => setOpen(false)}
            links={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact", href: "/contact" },
              { label: "Careers", href: "/careers" },
            ]}
          />

          <NavSection title="Services" links={servicesLinks} onClose={() => setOpen(false)} />
          <NavSection title="Portfolio" links={portfolioLinks} onClose={() => setOpen(false)} />

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Get A Quote
          </Link>

          <a href="tel:+18016769222" className="block text-center text-sm font-semibold text-primary">
            (801) 676-9222
          </a>
        </div>
      </aside>
    </div>
  );
}
