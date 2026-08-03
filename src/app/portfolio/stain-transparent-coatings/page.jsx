import FilteredGallery from "@/components/FilteredGallery";
import ServicesBanner from "@/components/ServicesBanner";
import { stainCoatingsPortfolio } from "@/lib/portfolioData";

export default function StainTransparentCoatingsPortfolioPage() {
  return (
    <div className="bg-light">
      <ServicesBanner title="Stain & Transparent Coatings" />

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <FilteredGallery
          galleries={stainCoatingsPortfolio}
          title="Stain & Transparent Coatings Portfolio"
        />
      </section>
    </div>
  );
}
