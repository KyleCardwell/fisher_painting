import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import {
  CurrencyDollarIcon,
  HeartIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { images } from "@/lib/images";
import JobAccordion from "@/components/JobAccordion";

const benefits = [
  {
    title: "Competitive Pay",
    description: "Earn strong compensation based on experience, skill, and consistent performance.",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Health Benefits",
    description: "Comprehensive health benefits designed to support you and your family.",
    icon: HeartIcon,
  },
  {
    title: "Growth Opportunities",
    description: "Advance your career with training, mentorship, and leadership opportunities.",
    icon: AcademicCapIcon,
  },
  {
    title: "Team Environment",
    description: "Join a supportive team culture built on respect, communication, and craftsmanship.",
    icon: UserGroupIcon,
  },
];

const jobs = [
  {
    title: "Painter",
    description: "Experienced commercial painter needed to support interior and exterior coating projects across Utah.",
    requirements: [
      "2+ years of professional painting experience",
      "Reliable transportation and punctual attendance",
      "Ability to lift 50 lbs and work on ladders/lifts",
    ],
  },
  {
    title: "Lead Painter",
    description: "Lead a crew of painters on commercial projects while maintaining high standards of quality and safety.",
    requirements: [
      "5+ years of painting experience with crew leadership",
      "Strong communication and jobsite coordination skills",
      "Understanding of coatings, prep standards, and safety protocols",
    ],
  },
  {
    title: "Project Manager",
    description: "Oversee multiple painting projects, coordinating schedules, crews, and client communication from start to finish.",
    requirements: [
      "Experience managing construction or painting projects",
      "Excellent organization, documentation, and communication",
      "Ability to manage timelines, budgets, and team performance",
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="bg-light">
      <section className="relative isolate overflow-hidden py-24 sm:py-28">
        <PlaceholderImage
          src={images.home.careersBg}
          alt="Fisher Painting Inc careers"
          width={1920}
          height={1080}
          sizes="100vw"
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Join Our Team</h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">Why Work at Fisher Painting Inc?</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article key={benefit.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-primary">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">Current Openings</h2>
        <div className="mt-6">
          <JobAccordion jobs={jobs} />
        </div>
      </section>

      <section className="bg-primary py-14">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <p className="max-w-3xl text-2xl font-bold text-white sm:text-3xl">
            Don&apos;t see your position? We&apos;re always looking for talented people.
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
