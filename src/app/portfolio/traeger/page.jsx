import PortfolioGallery from "@/components/PortfolioGallery";
import { traegerGallery } from "@/lib/portfolioData";
import PageBanner from "@/components/PageBanner";

export default function TraegerPage() {
  return (
    <div className="bg-light">
      <PageBanner
        title="Traeger Grills"
        backHref="/portfolio"
        backLabel="Back to Portfolio"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <PortfolioGallery images={traegerGallery} title="Traeger Grills" />
      </section>
    </div>
  );
}
