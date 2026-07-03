"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function JobAccordion({ jobs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {jobs.map((job, index) => {
        const isOpen = openIndex === index;
        const subject = encodeURIComponent(`Application: ${job.title}`);

        return (
          <article key={job.title} className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <h3 className="text-lg font-semibold text-primary">{job.title}</h3>
              <ChevronDownIcon
                className={clsx(
                  "h-5 w-5 text-slate-600 transition-transform duration-200",
                  isOpen ? "rotate-180" : "rotate-0"
                )}
              />
            </button>

            <div
              className={clsx(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-slate-100 px-5 py-4">
                  <p className="text-sm leading-6 text-slate-700">{job.description}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {job.requirements.map((requirement) => (
                      <li key={requirement}>{requirement}</li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:office@fisherpaintinc.com?subject=${subject}`}
                    className="mt-4 inline-flex rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#3b7fc4]"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
