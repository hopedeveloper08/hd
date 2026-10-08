import { Code2 } from "lucide-react";
import { BASE_URL } from "../../../../lib/constants";

export default function ProjectTechStack({ project }: { project: Project }) {
  const { technologies = [] } = project;

  if (technologies.length === 0) return null;

  return (
    <section
      id="project-technologies"
      aria-labelledby="project-technologies-title"
      className="mb-8 overflow-hidden rounded-3xl border border-base-300/70 bg-base-300/20 shadow-md shadow-base-300/60"
    >
      <div className="p-5 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="mb-8 flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Code2 size={22} strokeWidth={1.8} aria-hidden="true" />
          </div>

          <div>
            <div className="mb-1 text-xs font-medium tracking-wide text-primary">
              Tech Stack
            </div>

            <h2
              id="project-technologies-title"
              className="text-xl font-bold text-base-content sm:text-2xl"
            >
              فناوری‌های استفاده‌شده
            </h2>

            <p className="mt-2 text-sm leading-7 text-base-content/60">
              ابزارها و فناوری‌هایی که در توسعه این پروژه مورد استفاده قرار
              گرفته‌اند.
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((technology, index) => (
            <div
              key={`${technology}-${index}`}
              className="group flex min-h-16 items-center gap-3 rounded-2xl border border-base-300/70 bg-base-100 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-base-200/40 shadow hover:shadow-md shadow-primary/60"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-base-200 text-base-content/60 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                <img
                  src={`${BASE_URL}images/technology/${technology.toLowerCase()}.svg`}
                  alt=""
                  loading="lazy"
                  className="size-5 object-contain"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.nextElementSibling.style.display =
                      "block";
                  }}
                />

                <Code2
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="hidden"
                />
              </div>

              <span className="min-w-0 break-words text-sm font-medium leading-6 text-base-content/80">
                {technology}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
