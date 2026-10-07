import SocialDock from "./SocialDock";

export default function Content() {
  return (
    <div className="max-w-3xl">
      {/* Heading */}
      <h1 className="text-xl leading-[1.35] font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        سلام،
        <br />
        من{" "}
        <span className="text-error text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          رضا شهرکی
        </span>{" "}
        هستم؛
      </h1>

      {/* Role */}
      <h2 className="mt-2 leading-relaxed font-semibold text-xl sm:text-xl md:text-2xl text-primary">
        توسعه‌دهنده وب‌اپلیکیشن
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-2xl leading-8 text-base-content/70 text-base sm:text-lg text-justify">
        من یک مهندس نرم‌افزار و توسعه‌دهنده وب‌اپلیکیشن هستم که به ساخت محصولات
        کاربردی، سریع و تجربه‌های تعاملی علاقه دارم. با استفاده از
        React.js/Next.js و ابزارهای مدرن وب، تلاش می‌کنم ایده‌ها را به
        نرم‌افزارهایی تبدیل کنم که علاوه بر ظاهر حرفه‌ای، برای استفاده واقعی و
        حل مسائل کاربران طراحی شده‌اند.
      </p>

      {/* CTA */}
      <div className="flex gap-2 md:gap-4 lg:gap-6 xl:gap-8 mt-2 xl:mt-6">
        <button className="btn btn-primary btn-gradient btn-lg lg:btn-xl">
          مشاهده نمونه کارها
        </button>
        <button className="btn btn-outline btn-lg lg:btn-xl">درباره من</button>
      </div>

      {/* Social */}
      <div className="xl:mt-12 md:w-20">
        <SocialDock />
      </div>
    </div>
  );
}
