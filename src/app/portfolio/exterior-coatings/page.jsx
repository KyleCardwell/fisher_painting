import Link from "next/link";
import FilteredGallery from "@/components/FilteredGallery";
import { exteriorCoatingsPortfolio } from "@/lib/portfolioData";

export default function ExteriorCoatingsPortfolioPage() {
  return (
    <div className="bg-light">
      <section className="bg-primary py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="text-sm font-semibold text-white/80 hover:text-white">
            ← Back to Portfolio
          </Link>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Exterior Coatings</h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <FilteredGallery galleries={exteriorCoatingsPortfolio} title="Exterior Coatings Portfolio" />
      </section>
    </div>
  );
}
