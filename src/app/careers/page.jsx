import CareersApplicationForm from "@/components/CareersApplicationForm";
import PageBanner from "@/components/PageBanner";

export default function CareersPage() {
  return (
    <div className="bg-white">
      <PageBanner title="Careers" />

      <section className="px-5 py-20 sm:py-[120px]">
        <div className="mx-auto w-full max-w-7xl">
          <CareersApplicationForm />
        </div>
      </section>
    </div>
  );
}
