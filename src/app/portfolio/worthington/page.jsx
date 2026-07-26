import PortfolioGallery from "@/components/PortfolioGallery";
import { worthingtonGallery } from "@/lib/portfolioData";
import PageBanner from "@/components/PageBanner";

export default function WorthingtonPage() {
  return (
    <div className="bg-light">
      <PageBanner
        title="Worthington Residences"
        backHref="/portfolio"
        backLabel="Back to Portfolio"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <PortfolioGallery images={worthingtonGallery} title="Worthington Residences" />
      </section>
    </div>
  );
}
