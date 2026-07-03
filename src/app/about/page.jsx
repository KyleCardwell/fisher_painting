import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { images } from "@/lib/images";

const teamMembers = [
  { name: "Brent Fisher", role: "President", image: null },
  { name: "Landon Fisher", role: "Project Director", image: null },
  { name: "Dallen Fisher", role: "Pre Construction", image: null },
  { name: "Marla Fisher", role: "HR & Accounting", image: null },
  { name: "Matt Fisher", role: "Field Manager", image: null },
  { name: "Conner Cardwell", role: "Pre Construction", image: null },
  { name: "Jake Miller", role: "Field Manager", image: null },
  { name: "Tom Gardiner", role: "Project Manager", image: null },
];

export default function AboutPage() {
  return (
    <div className="bg-light">
      <section className="relative isolate overflow-hidden py-24 sm:py-28">
        <PlaceholderImage
          src={images.heroAbout}
          alt="Western-32.webp"
          width={1920}
          height={1080}
          sizes="100vw"
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">About</h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">Fisher Painting</h2>
        <div className="mt-6 space-y-4 text-base leading-7 text-slate-700">
          <p>
            Fisher Painting, Inc. is dedicated in providing high-quality painting at a fair price.
            Satisfaction for both our employees and customers provide the backbone to achieve this
            goal. We believe that honesty in all aspects of the company and its employees, is the
            most critical factor in the services we provide.
          </p>
          <p>
            We have been in business for 30+ years. Our services include Interior & Exterior paint,
            wall coverings, epoxy floor coatings, water repellents. We have a team of about 6 in
            office and 75 field employees.
          </p>
          <p>
            Fisher Painting, Inc. is committed to delivering exceptional painting services at a fair
            price. Our mission is built on ensuring satisfaction for both our customers and
            employees, as we believe this is the foundation of our success. Honesty and integrity,
            in every aspect of our business, are at the core of the services we provide.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">Meet the Team</h2>
        <div className="mt-8 overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
          <PlaceholderImage
            src={null}
            alt="Entire-Team-scaled.jpg"
            width={2560}
            height={1707}
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <PlaceholderImage
                src={member.image}
                alt={member.name}
                width={683}
                height={1024}
                className="h-72 w-full rounded-xl object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-primary">{member.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary py-14">
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
      </section>
    </div>
  );
}
