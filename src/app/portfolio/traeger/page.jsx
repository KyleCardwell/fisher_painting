import Link from "next/link";
import PortfolioGallery from "@/components/PortfolioGallery";
import { traegerGallery } from "@/lib/portfolioData";

export default function TraegerPage() {
  return (
    <div className="bg-light">
      <section className="bg-primary py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="text-sm font-semibold text-white/80 hover:text-white">
            ← Back to Portfolio
          </Link>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Traeger Grills</h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <PortfolioGallery images={traegerGallery} title="Traeger Grills" />
      </section>
    </div>
  );
}
