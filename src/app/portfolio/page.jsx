import PlaceholderImage from "@/components/PlaceholderImage";
import { images, portfolioCards } from "@/lib/images";

export default function PortfolioPage() {
  return (
    <div className="bg-light">
      <section className="relative isolate overflow-hidden py-24 sm:py-28">
        <PlaceholderImage
          src={images.portfolio.banner}
          alt="Fisher Painting Inc portfolio"
          width={1920}
          height={1080}
          sizes="100vw"
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-white sm:text-5xl">Portfolio</h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioCards.map((card) => (
            <div
              key={`${card.title}-${card.image}`}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-[10px]"
            >
              <PlaceholderImage
                key={card.image}
                src={card.image}
                alt={card.title}
                width={1200}
                height={900}
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 p-[30px] text-center opacity-0 transition-opacity duration-[400ms] ease-in-out group-hover:opacity-100">
                <h2 className="-translate-y-5 text-2xl font-bold leading-[1.2] text-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  {card.title}
                </h2>
                <p className="mt-[15px] translate-y-5 text-[1.1rem] font-medium leading-[1.2] text-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  {card.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
