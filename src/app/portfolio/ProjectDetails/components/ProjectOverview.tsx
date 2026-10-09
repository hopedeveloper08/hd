import { FaCalendarDays } from "react-icons/fa6";
import type { Project } from "../../projectItems";
import { LuLayers3, LuListChecks } from "react-icons/lu";
import { Code2 } from "lucide-react";
import AnimatedContent from "../../../../components/ui/AnimatedContent";

export default function ProjectOverview({ project }: { project: Project }) {
  const { year, categories = [], technologies = [], features = [] } = project;

  const stats = [
    {
      label: "سال توسعه",
      value: year ?? "—",
      icon: FaCalendarDays,
    },
    {
      label: "نوع پروژه",
      value: categories[0] ?? "—",
      icon: LuLayers3,
    },
    {
      label: "فناوری‌ها",
      value: technologies.length,
      suffix: "فناوری",
      icon: Code2,
    },
    {
      label: "قابلیت‌ها",
      value: features.length,
      suffix: "قابلیت",
      icon: LuListChecks,
    },
  ];

  return (
    <section
      id="project-overview"
      aria-label="خلاصه مشخصات پروژه"
      className="mb-8"
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {stats.map(({ label, value, suffix, icon: Icon }, index) => (
          <AnimatedContent
            key={label}
            direction="horizontal"
            distance={100 * index}
            delay={0.7}
            duration={3}
            ease="bounce.out"
          >
            <article className="group flex min-w-0 items-center gap-3 rounded-2xl border border-base-300/70 bg-base-300/20 shadow-md shadow-base-300/60 p-4 transition-all hover:border-primary/30 hover:shadow-primary/30 hover:shadow-lg hover:scale-105 duration-500 sm:gap-4 sm:p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-base-200/70 text-base-content/70 transition-colors group-hover:bg-primary/10 group-hover:text-primary sm:size-12">
                <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
              </div>

              <div className="min-w-0 space-y-1">
                <p className="text-xs text-base-content/60 sm:text-sm">
                  {label}
                </p>

                <p className="wrap-break-word text-base font-bold text-base-content sm:text-lg">
                  {value}
                  {suffix && (
                    <span className="ms-1 text-xs font-normal text-base-content/60 sm:text-sm">
                      {suffix}
                    </span>
                  )}
                </p>
              </div>
            </article>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}
