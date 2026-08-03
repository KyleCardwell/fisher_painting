import PlaceholderImage from "@/components/PlaceholderImage";
import Button from "@/components/Button";
import ServiceImageCarousel from "@/components/ServiceImageCarousel";
import { images } from "@/lib/images";
import PageBanner from "@/components/PageBanner";

const serviceSections = [
  {
    id: "interior-painting",
    title: "Interior Painting",
    description:
      "Transform your space with Fisher Painting Services' expert interior painting solutions.",
    bullets: [
      "Tenant Improvements",
      "Repaints",
      "New Commercial",
      "Residential",
      "Multi-Family",
    ],
    slides: images.services.interior,
    buttonText: "View More",
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
    slides: images.services.exterior,
    buttonText: "View More",
    buttonHref: "/portfolio/exterior-coatings",
  },
  {
    id: "plaster-coatings",
    title: "Plaster Coatings",
    description:
      "Discover the timeless beauty and versatility of plaster coatings with Fisher Painting Services.",
    bullets: ["Gypsum based", "Lime-based", "Micro-cement"],
    slides: images.services.plaster,
    buttonText: "View More",
    buttonHref: "/portfolio/plaster-coatings",
  },
  {
    id: "stain-transparent-coatings",
    title: "Stain & Transparent Coatings",
    description:
      "Enhance the natural beauty of your wood and other surfaces with our premium stain and transparent coating services.",
    bullets: ["Siding", "Case, base, doors", "CLT structure"],
    slides: images.services.transparent,
    buttonText: "View More",
    buttonHref: "/portfolio/stain-transparent-coatings",
  },
  {
    id: "wallcoverings",
    title: "Wallcoverings",
    description:
      "Transform your interiors with the sophisticated and dynamic wallcovering solutions from Fisher Painting Services.",
    bullets: [
      "Wallpapers",
      "Standard commercial vinyl",
      "Graphics & murals",
      "Felt & acoustics",
    ],
    slides: images.services.wallcoverings,
    buttonText: "View More",
    buttonHref: "/portfolio/wallcoverings",
  },
  {
    id: "epoxy-coatings",
    title: "Epoxy Coatings",
    description:
      "Protect and enhance concrete floors with durable epoxy coating systems built for demanding commercial, industrial, and residential spaces.",
    bullets: [
      "Commercial & industrial floors",
      "Decorative flake systems",
      "Metallic finishes",
      "High-performance topcoats",
      "Surface preparation & repairs",
    ],
    slides: images.services.epoxyCoatings,
  },
  {
    id: "polished-concrete",
    title: "Polished Concrete",
    description:
      "Create a clean, modern, and low-maintenance surface with professionally polished concrete tailored to your space.",
    bullets: [
      "Commercial & retail floors",
      "Industrial facilities",
      "Custom sheen levels",
      "Concrete densifying",
      "Existing floor restoration",
    ],
    slides: images.services.polishedConcrete,
  },
  {
    id: "stained-concrete",
    title: "Stained Concrete",
    description:
      "Bring rich color and distinctive character to concrete surfaces with custom staining and protective finishing systems.",
    bullets: [
      "Interior concrete floors",
      "Patios & walkways",
      "Custom colors & effects",
      "Acid & water-based stains",
      "Protective clear finishes",
    ],
    slides: images.services.stainedConcrete,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <PageBanner title="Services" />

      <div>
        {serviceSections.map((service, index) => {
          const reverse = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`scroll-mt-28 px-5 py-20 lg:py-[120px] ${
                reverse ? "bg-[#fbfbfb]" : "bg-white"
              }`}
            >
              <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[60px]">
                <div
                  className={`py-0 lg:py-10 ${
                    reverse ? "order-2 lg:order-1" : "order-2 lg:order-2"
                  }`}
                >
                  <h2 className="max-w-[12ch] text-[2.5rem] font-normal leading-[1.2] text-slate-900 sm:max-w-none lg:text-5xl">
                    {service.title}
                  </h2>
                  <div className="mt-5 text-xl font-normal leading-[1.5] text-slate-900">
                    <p>{service.description}</p>
                  </div>
                  <ul className="mt-5 list-inside list-disc space-y-1 text-xl font-normal leading-[1.5] text-slate-900">
                    {service.bullets.map((bullet) => (
                      <li key={`${service.id}-${bullet}`}>{bullet}</li>
                    ))}
                  </ul>
                  <Button href="/contact" className="mt-7" variant="red">
                    Request Quote
                  </Button>
                </div>

                <div className={reverse ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
                  <ServiceImageCarousel
                    serviceName={service.title}
                    slides={service.slides}
                  />
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
