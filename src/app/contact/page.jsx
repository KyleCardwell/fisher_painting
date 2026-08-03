import ContactForm from "@/components/ContactForm";
import PlaceholderImage from "@/components/PlaceholderImage";
import { fisherLocation } from "@/lib/constants";
import { images } from "@/lib/images";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const contactCards = [
  {
    title: "Our Location",
    description: (
      <>
        687 W 6960 S,
        <br />
        Midvale, UT 84047
      </>
    ),
    href: fisherLocation.directionsUrl,
    icon: MapPinIcon,
  },
  {
    title: "Email Us",
    description: "office@fisherpaintinc.com",
    href: "mailto:office@fisherpaintinc.com",
    icon: EnvelopeIcon,
  },
  {
    title: "Call Us",
    description: "(801) 676-9222",
    href: "tel:+18016769222",
    icon: PhoneIcon,
  },
];

function ContactCard({ card }) {
  const Icon = card.icon;

  return (
    <a
      href={card.href}
      className="group relative block rounded-[10px] bg-white px-5 py-10 text-center shadow-[0_4px_14px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1"
      target={card.href.startsWith("http") ? "_blank" : undefined}
      rel={card.href.startsWith("http") ? "noreferrer" : undefined}
    >
      <Icon className="mx-auto h-[60px] w-[60px] text-fisherRed" />
      <h2 className="mt-5 text-2xl font-bold leading-[1.2] text-[#1C1D1E]">
        {card.title}
      </h2>
      <p className="mt-3 text-base leading-[1.5] text-[#676767]">
        {card.description}
      </p>
    </a>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden px-5 py-[100px]">
        <PlaceholderImage
          src={images.contact.banner}
          alt="Fisher Painting contact"
          width={1920}
          height={1080}
          sizes="100vw"
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl leading-[1.1] text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.2)] sm:text-5xl lg:text-6xl">
            Contact
          </h1>
        </div>
      </section>

      <section className="px-5 py-20 sm:py-[120px]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 sm:gap-[60px]">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[60px]">
            {contactCards.map((card) => (
              <ContactCard key={card.title} card={card} />
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-[60px]">
            <div className="w-full">
              <h2 className="mb-8 text-3xl font-bold leading-[1.2] text-[#1C1D1E] sm:text-4xl">
                Get In Touch
              </h2>
              <ContactForm />
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-[10px] lg:min-h-[680px]">
              <PlaceholderImage
                src={images.contact.project}
                alt="Fisher Painting project"
                width={1100}
                height={1100}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[10px]">
            <iframe
              title="Fisher Painting Inc location map"
              src={fisherLocation.embedUrl}
              width="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[360px] w-full sm:h-[450px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
