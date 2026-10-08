import { BASE_URL } from "../../lib/constants";

type Project = {
  title: string;
  slug: string;
  categories: string[];
  problemStatement: string;
  results: string;
  description: string;
  images: string[];
  technologies: string[];
  features: string[];
  link?: string;
  githubLink?: string;
  year: number;
}

export const projectItems: Project[] = [
  {
    title: "صرافی ارزهای دیجیتال",
    slug: "crypto-currency-exchange",

    categories: [
      "وب اپلیکیشن",
      "تحلیل داده",
      "پروژه آموزشی"
    ],

    problemStatement:
      "طراحی و پیاده‌سازی یک پلتفرم آموزشی شبیه‌سازی‌شده برای صرافی ارزهای دیجیتال با هدف تجربه عملی فرآیند کامل تولید یک محصول نرم‌افزاری؛ از تحلیل نیازمندی‌ها و طراحی سیستم تا توسعه وب، پردازش داده‌های مالی و ارائه قابلیت‌های تحلیلی.",

    results:
      "این پروژه طی دو ترم دانشگاهی در سال ۱۴۰۳ توسعه داده شد و امکان تجربه عملی مراحل مختلف چرخه تولید نرم‌افزار، از تحلیل و مدل‌سازی سیستم تا پیاده‌سازی و پردازش داده‌های مالی را فراهم کرد. علاوه بر توسعه وب با Django، در بخش داده از Python، Pandas و Pandas TA برای پردازش و تحلیل داده‌های مالی و محاسبه شاخص‌های تکنیکال استفاده شد و داده‌های بازار نیز با استفاده از yfinance دریافت و در بخش‌های مختلف سیستم مورد استفاده قرار گرفت.",

    description:
      "این پروژه یک نمونه آموزشی از پلتفرم صرافی ارزهای دیجیتال است که با هدف یادگیری اصولی فرآیند تولید یک محصول نرم‌افزاری از صفر تا ارائه توسعه داده شد. پروژه در چارچوب دو درس «تحلیل و طراحی سیستم‌ها» و «مهندسی نرم‌افزار» طی دو ترم دانشگاهی در سال ۱۴۰۳ انجام شد. در مرحله تحلیل و طراحی، نیازمندی‌های سیستم استخراج و مستندسازی شدند و Use Caseهای اصلی مورد بررسی قرار گرفتند. همچنین برای مدل‌سازی سیستم از نمودارهای استاندارد UML، کلاس دیاگرام، دیاگرام‌های پایگاه داده و WND استفاده شد. در مرحله پیاده‌سازی، Backend پروژه با استفاده از Python و فریمورک Django توسعه داده شد و برای طراحی رابط کاربری از Bootstrap استفاده گردید. یکی از بخش‌های مهم پروژه، دریافت و پردازش داده‌های بازار بود که با استفاده از yfinance انجام شد. داده‌های مالی پس از دریافت با استفاده از Pandas پردازش و آماده‌سازی شدند و کتابخانه Pandas TA برای محاسبه و تحلیل شاخص‌های تکنیکال مورد استفاده قرار گرفت. این داده‌ها در قابلیت‌هایی مانند نمایش اطلاعات ارزهای دیجیتال، نمودارهای قیمتی و ارائه سیگنال‌های معاملاتی مورد استفاده قرار گرفتند. در نهایت، سیستم مجموعه‌ای از قابلیت‌های اصلی یک صرافی ارز دیجیتال شامل مدیریت حساب کاربری، مشاهده قیمت و اطلاعات ارزها، کیف پول، واریز و برداشت و انجام معاملات خرید و فروش را در قالب یک پروژه آموزشی ارائه می‌کند.",

    images: [
      `${BASE_URL}images/portfolio/crypto-currency/home.png`,
      `${BASE_URL}images/portfolio/crypto-currency/login.png`,
      `${BASE_URL}images/portfolio/crypto-currency/market.png`,
      `${BASE_URL}images/portfolio/crypto-currency/currency_info.png`,
      `${BASE_URL}images/portfolio/crypto-currency/chart.png`,
      `${BASE_URL}images/portfolio/crypto-currency/signal.png`,
      `${BASE_URL}images/portfolio/crypto-currency/wallet.png`,
      `${BASE_URL}images/portfolio/crypto-currency/withdraw.png`,
      `${BASE_URL}images/portfolio/crypto-currency/trade.png`,
      `${BASE_URL}images/portfolio/crypto-currency/ticket.png`,
    ],

    technologies: [
      "Python",
      "Django",
      "Pandas",
      "Pandas TA",
      "yfinance",
      "Bootstrap",
      "HTML, CSS",
      "Java Script",
      "UML",
      "Database Design"
    ],

    features: [
      "ثبت‌نام و ورود کاربران",
      "احراز هویت و مدیریت حساب کاربری",
      "مشاهده قیمت‌های بازار ارزهای دیجیتال",
      "جستجو و دسترسی سریع به ارزهای دیجیتال",
      "مشاهده اطلاعات جزئی و مشخصات ارزهای دیجیتال",
      "دریافت و پردازش داده‌های بازار با استفاده از yfinance",
      "پردازش و آماده‌سازی داده‌های مالی با Pandas",
      "محاسبه و تحلیل شاخص‌های تکنیکال با Pandas TA",
      "دریافت سیگنال‌های معاملاتی بر اساس داده‌های بازار",
      "مشاهده نمودارهای قیمتی اخیر به صورت کندل‌استیک",
      "مشاهده و مدیریت کیف پول",
      "واریز و برداشت وجه",
      "ثبت و ارسال نظرات",
      "انجام معاملات خرید و فروش ارزهای دیجیتال",
      "تحلیل و طراحی Use Caseهای سیستم",
      "طراحی کلاس دیاگرام و مدل‌های سیستم",
      "طراحی ساختار پایگاه داده",
      "مستندسازی سیستم با نمودارهای استاندارد UML"
    ],

    year: 1403
  },
]