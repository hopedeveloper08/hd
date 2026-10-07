import StrokeText from "../../../../components/ui/StrokeText";
import { Pointer } from "../../../../components/ui/pointer";
import TextType from "../../../../components/ui/TextType";
import { BASE_URL } from "../../../../lib/constants";
import SocialDock from "./SocialDock";
import BlurText from "../../../../components/ui/BlurText";
import ShinyText from "../../../../components/ui/ShinyText";

export default function Content() {
  return (
    <div className="max-w-3xl">
      {/* Heading */}
      <h1 className="leading-[1.35] font-bold tracking-tight text-2xl md:text-3xl lg:text-4xl">
        <BlurText text="سلام، من" />
        <StrokeText text="رضا شهرکی" />
        <Pointer>
          <img
            src={`${BASE_URL}images/pointers/waving-hand.svg`}
            alt="pointer"
            className="size-16 animate-waving-hand"
          />
        </Pointer>
      </h1>

      {/* Description */}
      <p className="max-w-2xl leading-8 text-base-content/90 text-base sm:text-lg text-justify">
        <ShinyText
          text={`
            یک مهندس نرم‌افزار و توسعه‌دهنده وب‌اپلیکیشن هستم که به ساخت محصولات
            کاربردی، قابل استفاده و تجربه‌های تعاملی علاقه دارم. با استفاده از
            React.js/Next.js و ابزارهای مدرن وب، تلاش می‌کنم ایده‌ها را به
            نرم‌افزارهایی تبدیل کنم که علاوه بر ظاهر حرفه‌ای، برای استفاده واقعی و
            حل مسائل کاربردی طراحی شده‌اند.
          `}
        />
      </p>

      {/* Role */}
      <h2 className="mt-3 leading-relaxed font-semibold text-xl sm:text-xl md:text-2xl text-info">
        <TextType
          text={[
            "مهندس نرم‌افزار",
            "توسعه‌دهنده وب‌اپلیکیشن",
            "توسعه‌دهنده فرانت‌اند",
            "توسعه‌دهنده React.js/Next.js",
          ]}
        />
      </h2>

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
