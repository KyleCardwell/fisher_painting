import FilteredGallery from "@/components/FilteredGallery";
import ServicesBanner from "@/components/ServicesBanner";
import { interiorPaintingPortfolio } from "@/lib/portfolioData";

export default function InteriorPaintingPortfolioPage() {
  return (
    <div className="bg-light">
      <ServicesBanner title="Interior Painting" />

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <FilteredGallery galleries={interiorPaintingPortfolio} title="Interior Painting Portfolio" />
      </section>
    </div>
  );
}
