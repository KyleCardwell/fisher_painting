import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { images } from "../lib/images";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const serviceLinks = [
  { label: "Interior Painting", href: "/services/#interior-painting" },
  { label: "Exterior Coatings", href: "/services/#exterior-coatings" },
  { label: "Plaster Coatings", href: "/services/#plaster-coatings" },
  { label: "Stain & Transparent", href: "/services/#stain-transparent-coatings" },
  { label: "Wallcoverings", href: "/services/#wallcoverings" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/fisherpaintinginc",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fisherpaintinginc/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2m0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5M17.5 6.15a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8" />
      </svg>
    ),
  },
  {
    name: "Google",
    href: "https://g.co/kgs/5Pz2h8B",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M21.35 12.23c0-.73-.07-1.44-.2-2.11H12v3.99h5.24a4.48 4.48 0 0 1-1.95 2.95v2.45h3.15c1.84-1.69 2.91-4.19 2.91-7.28Z" />
        <path d="M12 21.7c2.63 0 4.84-.87 6.45-2.36l-3.15-2.45c-.87.58-1.98.92-3.3.92-2.54 0-4.7-1.72-5.47-4.03H3.28v2.53A9.72 9.72 0 0 0 12 21.7Z" />
        <path d="M6.53 13.78a5.84 5.84 0 0 1 0-3.56V7.69H3.28a9.71 9.71 0 0 0 0 8.62l3.25-2.53Z" />
        <path d="M12 6.18c1.43 0 2.72.49 3.74 1.46l2.8-2.8A9.35 9.35 0 0 0 12 2.3a9.72 9.72 0 0 0-8.72 5.39l3.25 2.53C7.3 7.9 9.46 6.18 12 6.18Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-200">
      <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block" aria-label="Fisher Painting Inc Home">
              <PlaceholderImage
                src={images.logo}
                alt="Fisher Painting Inc Logo"
                width={210}
                height={60}
                className="h-auto w-[180px] rounded bg-white p-1"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-slate-300">
              Professional painting and coatings for commercial and residential projects across Utah.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Contact Info</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>
                <a href="tel:+18016769222" className="hover:text-white">
                  (801) 676-9222
                </a>
              </p>
              <p>
                <a href="mailto:office@fisherpaintinc.com" className="hover:text-white">
                  office@fisherpaintinc.com
                </a>
              </p>
              <p>687 W 6960 S, Midvale, UT 84047</p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-xs text-slate-400 sm:flex sm:items-center sm:justify-between">
          <p>© 2025 Fisher Painting Inc. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">Website by Davis Designs</p>
        </div>
      </div>
    </footer>
  );
}
