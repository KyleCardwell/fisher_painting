import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { images } from "@/lib/images";

const serviceSections = [
  {
    id: "interior-painting",
    title: "Interior Painting",
    description:
      "Transform your space with Fisher Painting Services' expert interior painting solutions.",
    bullets: ["Tenant Improvements", "Repaints", "New Commercial", "Residential", "Multi-Family"],
    image: images.home.serviceInterior,
    buttonText: "View Interior Portfolio",
    buttonHref: "/portfolio/interior-painting",
  },
  {
    id: "exterior-coatings",
    title: "Exterior Coatings",
    description:
      "Boost your property's curb appeal and protect it from the elements with our specialized exterior painting services.",
    bullets: [
      "High Performance coatings",
      "Water Repellents",
      "Anti-graffiti coatings",
      "Repaints",
      "New Tilt-ups",
      "Siding",
      "Residential",
    ],
    image: images.home.serviceExterior,
    buttonText: "View Exterior Portfolio",
    buttonHref: "/portfolio/exterior-coatings",
  },
  {
    id: "plaster-coatings",
    title: "Plaster Coatings",
    description:
      "Discover the timeless beauty and versatility of plaster coatings with Fisher Painting Services.",
    bullets: ["Gypsum based", "Lime-based", "Micro-cement"],
    image: images.home.serviceEpoxy,
    buttonText: "View Plaster Portfolio",
    buttonHref: "/portfolio/plaster-coatings",
  },
  {
    id: "stain-transparent-coatings",
    title: "Stain & Transparent Coatings",
    description:
      "Enhance the natural beauty of your wood and other surfaces with our premium stain and transparent coating services.",
    bullets: ["Siding", "Case base doors", "CLT structure"],
    image: images.home.heroAbout,
    buttonText: "View Stain Portfolio",
    buttonHref: "/portfolio/stain-transparent-coatings",
  },
  {
    id: "wallcoverings",
    title: "Wallcoverings",
    description:
      "Transform your interiors with the sophisticated and dynamic wallcovering solutions from Fisher Painting Services.",
    bullets: ["Wallpapers", "Standard commercial vinyl", "Graphics & murals", "Felt & acoustics"],
    image: images.home.depositSmall1,
    buttonText: "View Wallcoverings Portfolio",
    buttonHref: "/portfolio/wallcoverings",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-light">
      <section className="relative isolate overflow-hidden py-24 sm:py-28">
        <PlaceholderImage
          src={images.home.heroWide}
          alt="Fisher Painting Inc services background"
          width={1920}
          height={1080}
          sizes="100vw"
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Services</h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="max-w-4xl text-lg leading-8 text-slate-700">
          Fisher Painting Inc provides comprehensive painting and coating services tailored to commercial,
          residential, and specialty projects across Utah.
        </p>
      </section>

      <div className="pb-16">
        {serviceSections.map((service, index) => {
          const reverse = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-20 border-t border-slate-200 py-14 first:border-t-0"
            >
              <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div className={reverse ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
                  <h2 className="text-3xl font-bold text-primary sm:text-4xl">{service.title}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-700">{service.description}</p>
                  <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-slate-700">
                    {service.bullets.map((bullet) => (
                      <li key={`${service.id}-${bullet}`}>{bullet}</li>
                    ))}
                  </ul>
                  {service.buttonText ? (
                    <Link
                      href={service.buttonHref}
                      className="mt-7 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#111124]"
                    >
                      {service.buttonText}
                    </Link>
                  ) : null}
                </div>

                <div className={reverse ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <PlaceholderImage
                      src={service.image}
                      alt={service.title}
                      width={1200}
                      height={900}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="h-[320px] w-full object-cover sm:h-[380px]"
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
