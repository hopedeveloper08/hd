import { FileText } from "lucide-react";
import type { Project } from "../../projectItems";

export default function ProjectDescription({ project }: { project: Project }) {
  const { description } = project;

  if (!description) return null;

  return (
    <section
      id="project-description"
      aria-labelledby="project-description-title"
      className="mb-8 overflow-hidden rounded-3xl border border-base-300/70 bg-base-300/20 shadow-md shadow-base-300/60"
    >
      <div className="p-5 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="mb-8 flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <FileText size={22} strokeWidth={1.8} aria-hidden="true" />
          </div>

          <div>
            <div className="mb-1 text-xs font-medium tracking-wide text-primary">
              درباره پروژه
            </div>

            <h2
              id="project-description-title"
              className="text-xl font-bold text-base-content sm:text-2xl"
            >
              معرفی و شرح پروژه
            </h2>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-sm leading-8 text-base-content/75 sm:text-base sm:leading-9 text-justify">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
