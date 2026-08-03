import PlaceholderImage from "@/components/PlaceholderImage";
import { images } from "@/lib/images";
import CareersApplicationForm from "@/components/CareersApplicationForm";

export default function CareersPage() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden px-5 py-[100px]">
        <PlaceholderImage
          src={images.careers.banner}
          alt="Fisher Painting Inc careers"
          width={1920}
          height={1080}
          sizes="100vw"
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl leading-[1.1] text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.2)] sm:text-5xl lg:text-6xl">
            Careers
          </h1>
        </div>
      </section>

      <section className="px-5 py-20 sm:py-[120px]">
        <div className="mx-auto w-full max-w-7xl">
          <CareersApplicationForm />
        </div>
      </section>
    </div>
  );
}
