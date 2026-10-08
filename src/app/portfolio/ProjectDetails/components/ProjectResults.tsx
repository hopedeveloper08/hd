import { Sparkles } from "lucide-react";
import type { Project } from "../../projectItems";

export default function ProjectResults({ project }: { project: Project }) {
  const { results, year } = project;

  if (!results) return null;

  return (
    <section
      id="project-results"
      aria-labelledby="project-results-title"
      className="mb-8 overflow-hidden rounded-3xl border border-primary/20 bg-primary/0.04 bg-base-300/20 shadow-md shadow-base-300/60"
    >
      <div className="relative p-5 sm:p-8 lg:p-10">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-e-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="relative">
          {/* Header */}
          <div className="mb-8 flex items-start justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sparkles size={22} strokeWidth={1.8} aria-hidden="true" />
              </div>

              <div>
                <div className="mb-1 text-xs font-medium tracking-wide text-primary">
                  نتیجه و دستاورد
                </div>

                <h2
                  id="project-results-title"
                  className="text-xl font-bold text-base-content sm:text-2xl"
                >
                  دستاوردهای پروژه
                </h2>
              </div>
            </div>

            {year && (
              <span className="hidden shrink-0 badge badge-accent pt-1 sm:inline-flex">
                {year}
              </span>
            )}
          </div>

          {/* Result content */}
          <div>
            <p className="text-sm leading-8 text-base-content/80 sm:text-base sm:leading-9  text-justify">
              {results}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
