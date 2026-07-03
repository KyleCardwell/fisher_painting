import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { images } from "@/lib/images";

const serviceCards = [
  {
    title: "Interior Painting",
    image: images.home.serviceInterior,
    href: "/services/#interior-painting",
    description:
      "Clean, durable interior finishes for offices, homes, and high-traffic spaces throughout Utah.",
  },
  {
    title: "Exterior Painting",
    image: images.home.serviceExterior,
    href: "/services/#exterior-coatings",
    description:
      "Boost your curb appeal with durable exterior painting built for Utah weather.",
  },
  {
    title: "Plaster Coatings",
    image: images.home.serviceEpoxy,
    href: "/services/#plaster-coatings",
    description:
      "Discover the timeless beauty and versatility of custom plaster coating finishes.",
  },
  {
    title: "Wallcoverings",
    image: images.home.depositSmall1,
    href: "/services/#wallcoverings",
    description:
      "Transform interiors with wallpapers, commercial vinyl, graphics, murals, and felt acoustics.",
  },
];

const recentProjects = [
  images.portfolio.project1,
  images.portfolio.project2,
  images.portfolio.project3,
  images.portfolio.project4,
  images.portfolio.project5,
  images.portfolio.project6,
];

const teamMembers = [
  { name: "Brent Fisher", role: "President", image: images.employees.brent },
  {
    name: "Landon Fisher",
    role: "Project Director",
    image: images.employees.landon,
  },
  {
    name: "Dallen Fisher",
    role: "Pre Construction",
    image: images.employees.dallen,
  },
  {
    name: "Marla Fisher",
    role: "HR & Accounting",
    image: images.employees.marla,
  },
  { name: "Matt Fisher", role: "Field Manager", image: images.employees.matt },
  {
    name: "Connor Cardwell",
    role: "Pre Construction",
    image: images.employees.connor,
  },
  { name: "Jake Miller", role: "Field Manager", image: images.employees.jake },
  {
    name: "Tom Gardiner",
    role: "Project Manager",
    image: images.employees.tom,
  },
];

export default function HomePage() {
  return (
    <div className="bg-light">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden">
        <PlaceholderImage
          src={images.home.heroBanner}
          alt="Salt Lake City - Northern Utah"
          width={1920}
          height={1080}
          sizes="100vw"
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
              Fisher Painting Inc
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Now Serving All of Utah
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/90 sm:text-xl">
              And Surrounding Areas
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#3b7fc4]"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Services
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
            >
              <div className="overflow-hidden rounded-xl">
                <PlaceholderImage
                  src={card.image}
                  alt={card.title}
                  width={900}
                  height={640}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="h-56 w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-primary">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{card.description}</p>
              <Link
                href={card.href}
                className="mt-4 inline-flex text-sm font-semibold text-accent hover:text-[#3b7fc4]"
              >
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Recent Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recentProjects.map((projectImage, index) => (
            <Link
              key={`recent-project-${index + 1}`}
              href="/portfolio"
              className="group relative block overflow-hidden rounded-2xl"
            >
              <PlaceholderImage
                src={projectImage}
                alt={`Project ${index + 1}`}
                width={900}
                height={700}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/45">
                <span className="translate-y-1 text-base font-semibold text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  View Project
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#111124]"
          >
            View All
          </Link>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20">
        <PlaceholderImage
          src={images.home.careersBg}
          alt="Your Career, Just a Click Away"
          width={1920}
          height={1080}
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Your Career, Just a Click Away
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/90">
            &quot;Seamlessly apply for your dream job with just a click,
            bringing opportunities closer to you.&quot;
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-slate-100"
            >
              Contact Us
            </Link>
            <Link
              href="/careers"
              className="inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#3b7fc4]"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">
          Our Team
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
            >
              <PlaceholderImage
                src={member.image}
                alt={member.name}
                width={683}
                height={1024}
                className="h-72 w-full rounded-xl object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-accent py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to transform your space? Contact us today!
            </h2>
            <a
              href="tel:+18016769222"
              className="mt-2 inline-block text-lg font-semibold text-white/95"
            >
              (801) 676-9222
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-accent shadow-sm transition-colors hover:bg-slate-100"
          >
            Request A Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
