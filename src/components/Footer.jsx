import Link from "next/link";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
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

const contactLinks = [
  {
    label: "687 W 6960 S,\nMidvale, UT 84047",
    href: "https://maps.app.goo.gl/hrVTEGF2J41vcLub6",
    icon: MapPinIcon,
    external: true,
  },
  {
    label: "office@fisherpaintinc.com",
    href: "mailto:office@fisherpaintinc.com",
    icon: EnvelopeIcon,
  },
  {
    label: "(801) 676-9222",
    href: "tel:+18016769222",
    icon: PhoneIcon,
  },
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
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1D1E] text-[#BEBEBE]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[62fr_1fr_34fr] lg:gap-[60px] lg:px-8 lg:py-40">
        <div className="space-y-10">
          <h2 className="text-3xl font-normal leading-tight text-white">
            Quick Links
          </h2>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3 text-base leading-6 md:flex-row lg:flex-wrap lg:gap-x-10 lg:gap-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/" className="inline-flex" aria-label="Fisher Painting Inc Home">
            <PlaceholderImage
              src={images.logos.logoWhite}
              alt="Fisher Painting Inc"
              width={200}
              height={200}
              className="h-auto w-[160px] sm:w-[200px]"
            />
          </Link>

          <div className="space-y-1 text-base leading-6">
            <p>© {year} Fisher Paint Inc. All Rights Reserved.</p>
            <p className="text-xl leading-7">
              Created by{" "}
              <a
                href="https://daviscreate.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Davis Designs
              </a>
            </p>
          </div>
        </div>

        <div className="hidden justify-center lg:flex" aria-hidden="true">
          <div className="h-full w-px bg-[#BEBEBE]/35" />
        </div>

        <div className="space-y-10">
          <h2 className="text-3xl font-normal leading-tight text-white">
            Contact Us
          </h2>

          <ul className="space-y-5 text-xl leading-[1.5]">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="flex items-start gap-3 hover:text-white"
                  >
                    <Icon className="mt-1 h-6 w-6 shrink-0 text-fisherRed" aria-hidden="true" />
                    <span className="whitespace-pre-line">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-fisherRed bg-fisherRed text-white transition-colors hover:bg-white hover:text-fisherRed"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
