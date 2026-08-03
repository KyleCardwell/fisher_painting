import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { images } from "@/lib/images";
import { teamMembers } from "@/lib/constants";
import Button from "@/components/Button";
import TeamCarousel from "@/components/TeamCarousel";
import HomeHeroCarousel from "@/components/HomeHeroCarousel";


const serviceCards = [
  {
    title: "Painting",
    image: images.home.serviceExterior,
    href: "/services/#interior-painting",
    description:
      "Interior, Exterior & Stain ",
  },
  {
    title: "Specialty",
    image: images.home.specialty,
    href: "/services/#plaster-coatings",
    description:
      "Plaster Coatings & Wall Coverings",
  },
  {
    title: "Concrete",
    image: images.home.concrete,
    href: "/services/#polished-concrete",
    description:
      "Stained, Polished & Epoxy",
  },
];

const serviceCardsOld = [
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
  // {
  //   title: "Plaster Coatings",
  //   image: images.home.serviceEpoxy,
  //   href: "/services/#plaster-coatings",
  //   description:
  //     "Discover the timeless beauty and versatility of custom plaster coating finishes.",
  // },
  {
    title: "Wallcoverings",
    image: images.home.depositSmall1,
    href: "/services/#wallcoverings",
    description:
      "Transform interiors with wallpapers, commercial vinyl, graphics, murals, and felt acoustics.",
  },
];

const recentProjects = [
  images.projects.project1,
  images.projects.project2,
  images.projects.project3,
  images.projects.project4,
  images.projects.project5,
  images.projects.project6,
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <HomeHeroCarousel />

      <section className="mx-auto w-full max-w-[1360px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-2 hidden items-end justify-between gap-4">
          <h2 className="text-3xl font-normal text-primary sm:text-4xl">
            Services
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 rounded-[14px] bg-white md:grid-cols-2 lg:grid-cols-3 lg:p-10 xl:p-20 xl:pb-5">
          {serviceCards.map((card) => (
            <article
              key={card.title}
              className="group relative transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-[10px]">
                <PlaceholderImage
                  src={card.image}
                  alt={card.title}
                  width={900}
                  height={640}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="h-[250px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] lg:h-[360px]"
                />
              </div>
              <h3 className="mt-4 text-center text-2xl font-medium leading-tight text-[#515151]">
                <Link href={card.href} className="after:absolute after:inset-0">
                  {card.title}
                </Link>
              </h3>
              <p className="mt-2 text-center text-base leading-6 text-slate-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
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

      <section className="w-full bg-light py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex justify-center gap-4">
            <h2 className="text-3xl font-normal text-primary sm:text-4xl">
              Recent Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {recentProjects.map((projectImage, index) => (
              // <Link
              //   key={`recent-project-${index + 1}`}
              //   href="/portfolio"
              //   className="group relative block overflow-hidden rounded-[10px]"
              // >
                <PlaceholderImage
                  key={`recent-project-${index + 1}`}
                  src={projectImage}
                  alt={`Project ${index + 1}`}
                  width={900}
                  height={700}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-[360px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] lg:h-[440px] overflow-hidden rounded-[10px]"
                />
                // <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/45">
                //   <span className="translate-y-1 text-base font-semibold text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                //     View Project
                //   </span>
                // </div>
              // </Link>
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

      <section className="relative isolate flex min-h-[520px] items-center justify-center overflow-hidden px-4 py-20 sm:min-h-[680px] sm:py-[120px] lg:min-h-[800px]">
        <div className="career-banner-image absolute left-1/2 top-1/2 -z-20 h-full">
          <PlaceholderImage
            src={images.home.careersBg}
            alt="Your Career, Just a Click Away"
            fill
            sizes="100vw"
            className="object-contain object-center"
          />
        </div>
        <div className="mx-auto w-full max-w-4xl text-center sm:px-6 lg:w-[60%] lg:px-8">
          <h2 className="text-3xl font-normal leading-[1.2] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-[2.5rem]">
            Your Career, Just a Click Away
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-[1.5] text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)] sm:text-xl lg:text-2xl">
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

      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 lg:py-[120px]">
        <h2 className="text-3xl font-normal text-primary sm:text-4xl">
          Our Team
        </h2>
        <TeamCarousel members={teamMembers} />
        <div className="mt-8 text-center">
          <Button href="/about" variant="red">
            View All
          </Button>
        </div>
      </section>

      {/* <section className="bg-accent py-10">
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
      </section> */}
    </div>
  );
}
