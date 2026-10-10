import AnimatedContent from "../../../components/ui/AnimatedContent";

const education = [
  {
    degree: "کارشناسی ارشد مهندسی نرم‌افزار",
    institution: "دانشگاه شیراز",
    period: "آبان 1405",
    description:
      "ادامه تحصیل در حوزه مهندسی نرم‌افزار با تمرکز بر دانش تخصصی و توسعه مهارت‌های فنی.",
    status: "در حال تحصیل",
  },
  {
    degree: "کارشناسی مهندسی کامپیوتر",
    institution: "دانشگاه ولی‌عصر (عج) رفسنجان",
    period: "مهر 1400 — شهریور 1404",
    description:
      "دارای تجربه انجام پروژه های واقعی و کاربردی در فناوری اطلاعات دانشگاه، شرکت در المپیاد علمی و راهیابی به مرحله نهایی سی ام دوره المپیاد علمی دانشجویی، تجربه تدریس و کمک استادی در درس های ساختمان های داده و طراحی الگوریتم ها.",
    status: "پایان‌یافته",
  },
];

export default function ResumeEducation() {
  return (
    <section
      id="about-education"
      aria-labelledby="education-title"
      className="scroll-mt-8 space-y-6"
    >
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="badge badge-primary badge-outline">04</span>

          <span className="text-xl font-bold tracking-tight sm:text-2xl text-base-content/60">
            تحصیلات
          </span>
        </div>
      </div>

      <div className="relative space-y-4">
        {education.map((item, index) => (
          <AnimatedContent
            key={item.degree}
            direction="horizontal"
            delay={0.6 * (index + 1)}
            duration={3}
          >
            <article className="card rounded-3xl border border-base-300/70 bg-base-300/20 shadow-md shadow-base-300/60 group hover:shadow-primary hover:border-primary transition-all duration-500">
              <div className="card-body gap-4 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:text-primary transition-all duration-500">
                    <span className="text-sm font-bold">0{index + 1}</span>
                  </div>

                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`badge ${
                          item.status === "در حال تحصیل"
                            ? "badge-primary badge-soft"
                            : "badge-ghost"
                        }`}
                      >
                        {item.status}
                      </span>

                      <span className="text-xs text-base-content/50">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-base font-bold leading-7 sm:text-lg">
                      {item.degree}
                    </h3>

                    <p className="text-sm font-medium text-base-content/75">
                      {item.institution}
                    </p>

                    <p className="text-sm leading-7 text-base-content/60">
                      {item.description}
                    </p>

                    {item.degree.startsWith("کارشناسی ") &&
                      item.status === "پایان‌یافته" && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="badge badge-outline">معدل ۱۷٫۸</span>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </article>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}
