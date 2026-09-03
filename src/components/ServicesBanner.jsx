"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import PageBanner from "@/components/PageBanner";

export default function ServicesBanner({ title }) {
  const router = useRouter();

  return (
    <>
      <PageBanner title={title} />
      <div className="bg-light px-5 pt-8">
        <div className="mx-auto w-full max-w-7xl">
          <button
            type="button"
            onClick={() => router.replace("/services")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-fisherRed"
          >
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            Back to Services
          </button>
        </div>
      </div>
    </>
  );
}
