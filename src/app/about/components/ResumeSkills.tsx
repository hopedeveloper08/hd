import AnimatedContent from "../../../components/ui/AnimatedContent";

const skillGroups = [
  {
    number: "01",
    title: "توسعه فرانت‌اند",
    description:
      "طراحی و پیاده‌سازی رابط‌های کاربری مدرن، تعاملی و واکنش‌گرا با تمرکز بر تجربه کاربری و ساختار استاندارد.",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "توسعه بک‌اند و API",
    description:
      "توسعه سرویس‌های سمت سرور، طراحی API و پیاده‌سازی ارتباط میان رابط کاربری و زیرساخت نرم‌افزار.",
    skills: ["Python", "Django", "Django REST Framework", "RESTful API"],
  },
  {
    number: "03",
    title: "هوش مصنوعی و داده",
    description:
      "آشنایی و تجربه در توسعه راهکارهای مبتنی بر مدل‌های زبانی بزرگ، بازیابی اطلاعات و تحلیل داده.",
    skills: ["LLM Applications", "RAG", "Data Science"],
  },
  {
    number: "04",
    title: "پایگاه داده",
    description:
      "کار با پایگاه‌های داده و استفاده از آن‌ها برای ذخیره‌سازی و مدیریت اطلاعات اپلیکیشن‌های وب.",
    skills: ["PostgreSQL", "MongoDB", "Data Modeling"],
  },
  {
    number: "05",
    title: "کیفیت و توسعه نرم‌افزار",
    description:
      "توجه به خوانایی کد، توسعه‌پذیری پروژه، سازمان‌دهی کامپوننت‌ها و همکاری در فرایند توسعه نرم‌افزار.",
    skills: ["Clean Code", "Component Architecture", "Agile Methodologies"],
  },
];

export default function ResumeSkills() {
  return (
    <section
      id="about-skills"
      aria-labelledby="skills-title"
      className="scroll-mt-8 space-y-6"
    >
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="badge badge-primary badge-outline">02</span>
          <span className="text-xl font-bold tracking-tight sm:text-2xl text-base-content/60">
            توانمندی‌ها و مهارت‌ها
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <AnimatedContent
            key={group.number}
            direction="vertical"
            delay={0.3 * (index + 1)}
            duration={3}
          >
            <article className="card rounded-3xl border border-base-300/70 bg-base-300/20 shadow-md shadow-base-300/60 transition-all duration-500 hover:border-primary/40 hover:shadow-primary group">
              <div className="card-body gap-4 p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold group-hover:text-primary transition-all duration-500">
                    {group.number}
                  </span>

                  <span className="text-xs tracking-wider text-base-content/40 group-hover:text-primary transition-all duration-500">
                    SKILLS
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{group.title}</h3>

                  <p className="text-sm leading-7 text-base-content/65">
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill) => (
                    <span key={skill} className="badge badge-outline pt-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}
