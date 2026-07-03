import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { images } from "@/lib/images";

const megaplexCards = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: "Megaplex Daybreak",
  date: "Summer 2024",
  href: "/portfolio",
  image: null,
}));

export default function PortfolioPage() {
  return (
    <div className="bg-light">
      <section className="relative isolate overflow-hidden py-24 sm:py-28">
        <PlaceholderImage
          src={images.home.heroWide}
          alt="Fisher Painting Inc portfolio"
          width={1920}
          height={1080}
          sizes="100vw"
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Portfolio</h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {megaplexCards.map((card) => (
            <Link key={card.id} href={card.href} className="group block">
              <article className="relative overflow-hidden rounded-2xl">
                <PlaceholderImage
                  src={card.image}
                  alt={card.title}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h2 className="text-2xl font-bold text-white">{card.title}</h2>
                  <p className="mt-1 text-sm font-medium text-white/90">{card.date}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
