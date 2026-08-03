import FilteredGallery from "@/components/FilteredGallery";
import ServicesBanner from "@/components/ServicesBanner";
import { wallcoveringsPortfolio } from "@/lib/portfolioData";

export default function WallcoveringsPortfolioPage() {
  return (
    <div className="bg-light">
      <ServicesBanner title="Wallcoverings" />

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <FilteredGallery galleries={wallcoveringsPortfolio} title="Wallcoverings Portfolio" />
      </section>
    </div>
  );
}
