import { Check, ListChecks } from "lucide-react";
import type { Project } from "../../projectItems";
import AnimatedContent from "../../../../components/ui/AnimatedContent";

export default function ProjectFeatures({ project }: { project: Project }) {
  const { features = [] } = project;

  if (features.length === 0) return null;

  return (
    <section
      id="project-features"
      aria-labelledby="project-features-title"
      className="mb-8 overflow-hidden rounded-3xl border border-base-300/70 bg-base-300/20 shadow-md shadow-base-300/60"
    >
      <div className="p-5 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="mb-8 flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <ListChecks size={22} strokeWidth={1.8} aria-hidden="true" />
          </div>

          <div>
            <div className="mb-1 text-xs font-medium tracking-wide text-primary">
              Features
            </div>

            <h2
              id="project-features-title"
              className="text-xl font-bold text-base-content sm:text-2xl"
            >
              قابلیت‌های پروژه
            </h2>

            <p className="mt-2 text-sm leading-7 text-base-content/60">
              مهم‌ترین قابلیت‌ها و امکانات پیاده‌سازی‌شده در این پروژه.
            </p>
          </div>
        </div>

        {/* Features */}
        <ul className="grid gap-3 sm:grid-cols-2">
          {features.map((feature, index) => (
            <AnimatedContent
              key={`${feature}-${index}`}
              direction="vertical"
              delay={0.3 * (index + 1)}
              duration={3}
            >
              <li className="group flex items-start gap-3 rounded-2xl border border-base-300/60 bg-base-100 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-base-200/50 shadow hover:shadow-md shadow-primary/60">
                {/* Number */}
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-base-200 text-xs font-semibold tabular-nums text-base-content/50 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <span className="min-w-0 flex-1 text-sm leading-7 text-base-content/75">
                  {feature}
                </span>

                {/* Check */}
                <span
                  aria-hidden="true"
                  className="mt-1 flex size-6 shrink-0 items-center justify-center text-base-content/30 transition-colors duration-300 group-hover:text-primary"
                >
                  <Check size={16} strokeWidth={2} />
                </span>
              </li>
            </AnimatedContent>
          ))}
        </ul>
      </div>
    </section>
  );
}
