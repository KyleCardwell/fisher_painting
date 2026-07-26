import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { images } from "@/lib/images";
import { teamMembers } from "@/lib/constants";
import TeamCarousel from "@/components/TeamCarousel";
import PageBanner from "@/components/PageBanner";

export default function AboutPage() {
  return (
    <div className="bg-light">
      <PageBanner title="About" />

      <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:gap-14 lg:px-8">
        <div className="overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
          <PlaceholderImage
            src={images.about.project}
            alt="Fisher Painting project"
            width={900}
            height={1100}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[5/4] w-full object-cover lg:aspect-[6/5]"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Fisher Painting
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-slate-700">
            <p>
              Fisher Painting, Inc. is dedicated in providing high-quality
              painting at a fair price. Satisfaction for both our employees and
              customers provide the backbone to achieve this goal. We believe
              that honesty in all aspects of the company and its employees, is
              the most critical factor in the services we provide.
            </p>
            <p>
              We have been in business for 30+ years. Our services include
              Interior & Exterior paint, wall coverings, epoxy floor coatings,
              water repellents. We have a team of about 6 in office and 75 field
              employees.
            </p>
            <p>
              Fisher Painting, Inc. is committed to delivering exceptional
              painting services at a fair price. Our mission is built on
              ensuring satisfaction for both our customers and employees, as we
              believe this is the foundation of our success. Honesty and
              integrity, in every aspect of our business, are at the core of the
              services we provide.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">
          Meet the Team
        </h2>
        <div className="mt-8 mb-32 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-100">
          <PlaceholderImage
            src={images.employees.team}
            alt="Entire-Team-scaled.jpg"
            width={2560}
            height={1707}
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>
        <TeamCarousel members={teamMembers} />
      </section>

      {/* <section className="bg-primary py-14">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <p className="max-w-3xl text-2xl font-bold text-white sm:text-3xl">
            Ready to get started? Contact us for a free estimate.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3b7fc4]"
          >
            Contact Us
          </Link>
        </div>
      </section> */}
    </div>
  );
}
