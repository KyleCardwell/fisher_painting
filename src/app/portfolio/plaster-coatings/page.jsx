import FilteredGallery from "@/components/FilteredGallery";
import ServicesBanner from "@/components/ServicesBanner";
import { plasterCoatingsPortfolio } from "@/lib/portfolioData";

export default function PlasterCoatingsPortfolioPage() {
  return (
    <div className="bg-light">
      <ServicesBanner title="Plaster Coatings" />

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <FilteredGallery galleries={plasterCoatingsPortfolio} title="Plaster Coatings Portfolio" />
      </section>
    </div>
  );
}
