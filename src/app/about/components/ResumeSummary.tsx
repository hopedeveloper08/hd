export default function ResumeSummary() {
  return (
    <section
      id="about-summary"
      aria-labelledby="summary-title"
      className="scroll-mt-8"
    >
      <div className="card card-border rounded-3xl border border-base-300/70 bg-base-300/20 shadow-md shadow-base-300/60">
        <div className="card-body gap-5 p-6 sm:p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <span className="badge badge-primary badge-outline">01</span>
            <span className="text-xl font-bold tracking-tight md:text-2xl text-base-content/60">
              درباره من
            </span>
          </div>

          <div className="space-y-3">
            <p className="max-w-3xl text-sm leading-8 text-base-content/70 sm:text-base text-justify">
              من رضا شهرکی، مهندس نرم‌افزار و توسعه‌دهنده وب‌اپلیکیشن با تمرکز
              بر توسعه فرانت‌اند و ساخت رابط‌های کاربری مدرن، تعاملی و واکنش‌گرا
              هستم. در توسعه محصولات وب، با استفاده از React، Next.js و
              TypeScript بر تجربه کاربری، کیفیت کد و معماری قابل توسعه تمرکز
              می‌کنم.
            </p>

            <p className="max-w-3xl text-sm leading-8 text-base-content/70 sm:text-base text-justify">
              در کنار تخصص فرانت‌اند، در توسعه بک‌اند با Python و Django، طراحی
              API و ساخت اپلیکیشن‌های مبتنی بر هوش مصنوعی، از جمله راهکارهای
              مبتنی بر LLM و RAG، تجربه دارم. رویکرد من، توسعه راهکارهایی
              کاربردی، قابل نگهداری و متناسب با نیازهای واقعی پروژه است.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="badge badge-soft badge-primary">
              مهندس نرم افزار
            </span>
            <span className="badge badge-outline pt-1">
              TypeScript & React.js/Next.js
            </span>
            <span className="badge badge-outline pt-1">Python & Django</span>
            <span className="badge badge-outline pt-1">LLM & RAG</span>
          </div>
        </div>
      </div>
    </section>
  );
}
