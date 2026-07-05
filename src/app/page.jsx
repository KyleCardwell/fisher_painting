import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { images } from "@/lib/images";
import Button from "@/components/Button";

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

const careersBgOffsetX = -200;

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
    <div className="bg-white">
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <div className="home-split-img-left absolute inset-y-0 left-0 w-2/3">
            <PlaceholderImage
              src={images.home.heroWide}
              alt="Salt Lake City and Wasatch Mountains"
              fill
              sizes="(max-width: 768px) 80vw, 66vw"
              priority
              className="object-cover"
            />
          </div>
          <div className="home-split-img-right absolute inset-y-0 right-0 w-2/3">
            <PlaceholderImage
              src={images.home.heroSouth}
              alt="Southern Utah red rocks"
              fill
              sizes="(max-width: 768px) 80vw, 66vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
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
            <Button href="/contact" className="mt-8" variant="red">
              Request Quote
            </Button>
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

      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
          <PlaceholderImage
            src={images.home.team}
            alt="Fisher Painting team"
            width={2048}
            height={1365}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Welcome To
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Fisher Painting
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-slate-700">
            <p>
              Fisher Painting, Inc. is committed to delivering exceptional
              painting services at a fair price. Our mission is built on
              ensuring satisfaction for both our customers and employees, as we
              believe this is the foundation of our success. Honesty and
              integrity, in every aspect of our business, are at the core of the
              services we provide.
            </p>
            <p>
              With over 30 years of experience, we specialize in a wide range of
              services, including interior and exterior painting, wall
              coverings, epoxy floor coatings, and water repellents. Our
              dedicated team consists of approximately 6 office staff and 75
              skilled field employees, all working together to exceed your
              expectations.
            </p>
          </div>
          <Button
            href="/about"
            className="mt-7"
            variant="red"
          >
            Read More
          </Button>
        </div>
      </section>

      <section className="bg-light w-full py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <Button
              href="/portfolio"
              variant="red"
            >
              View All
            </Button>
          </div>
        </div>
      </section>

      <section className="relative isolate flex h-[800px] items-center overflow-hidden py-5">
        <PlaceholderImage
          src={images.home.careersBg}
          alt="Your Career, Just a Click Away"
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-left"
          style={{ objectPosition: `${careersBgOffsetX}px 50%` }}
        />
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-4xl">
            Your Career, Just a Click Away
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base lg:text-2xl leading-7 text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            &quot;Seamlessly apply for your dream job with just a click,
            bringing opportunities closer to you.&quot;
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="white">
              Contact Us
            </Button>
            <Button href="/careers" variant="black">
              Join Now
            </Button>
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
