import FilteredGallery from "@/components/FilteredGallery";
import ServicesBanner from "@/components/ServicesBanner";
import { exteriorCoatingsPortfolio } from "@/lib/portfolioData";

export default function ExteriorCoatingsPortfolioPage() {
  return (
    <div className="bg-light">
      <ServicesBanner title="Exterior Coatings" />

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <FilteredGallery galleries={exteriorCoatingsPortfolio} title="Exterior Coatings Portfolio" />
      </section>
    </div>
  );
}
