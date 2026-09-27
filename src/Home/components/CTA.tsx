import { Link } from "react-router";

export default function CTA() {
  return (
    <div
      className="
        mt-2
        flex gap-8 mx-auto
        *:btn *:btn-md *:md:btn-lg *:lg:btn-xl *:rounded-full
        *:hover:shadow-md *:hover:shadow-accent
        *:hover:-translate-y-1
        *:hover:scale-110 *:transition-all *:duration-700
      "  
    >
      <Link to="resume" className="btn-primary">
        مشاهده رزومه
      </Link>
      <Link to="portfolio" className="btn-secondary">
        مشاهده نمونه‌کارها
      </Link>
    </div>
  );
}
