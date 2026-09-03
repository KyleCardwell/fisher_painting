import PortfolioGallery from "@/components/PortfolioGallery";
import { tower8Gallery } from "@/lib/portfolioData";
import PageBanner from "@/components/PageBanner";

export default function Tower8Page() {
  return (
    <div className="bg-light">
      <PageBanner
        title="Tower 8"
        backHref="/portfolio"
        backLabel="Back to Portfolio"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <PortfolioGallery images={tower8Gallery} title="Tower 8" />
      </section>
    </div>
  );
}
