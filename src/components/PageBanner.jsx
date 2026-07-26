import Link from "next/link";

export default function PageBanner({ title, backHref, backLabel }) {
  return (
    <section className="border-y-[4px] sm:border-y-[8px] border-t-fisherLogoRed border-b-fisherLogoBlue bg-black px-5 py-3 sm:py-4">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {backHref && backLabel ? (
          <Link
            href={backHref}
            className="mb-4 inline-block text-sm font-semibold text-white/75 transition-colors hover:text-white"
          >
            ← {backLabel}
          </Link>
        ) : null}
        <h1 className="text-4xl font-thin leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
