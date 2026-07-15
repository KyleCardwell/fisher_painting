import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { images } from "@/lib/images";

export default function ServicesBanner({ title }) {
  return (
    <section className="relative isolate flex min-h-[320px] items-center justify-center overflow-hidden px-5 py-[100px] text-left">
      <PlaceholderImage
        src={images.services.banner}
        alt="Fisher Painting Inc services background"
        width={1920}
        height={1080}
        sizes="100vw"
        priority
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/40" />
      <div className="mx-auto w-full max-w-7xl">
        <Link
          href="/portfolio"
          className="text-sm font-semibold text-white/80 hover:text-white"
        >
          Back to Portfolio
        </Link>
        <h1 className="mt-4 text-4xl font-normal leading-[1.2] text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.2)] sm:text-5xl lg:text-[3.75rem]">
          {title}
        </h1>
      </div>
    </section>
  );
}
