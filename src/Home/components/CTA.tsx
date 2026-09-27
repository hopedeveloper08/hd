import { Link } from "react-router";
import { BASE_URL } from "../../lib/constants";

export default function CTA() {
  return (
    <div
      className="
        mt-2
        flex gap-8 mx-auto
        *:btn *:btn-lg *:md:btn-xl *:rounded-full
        *:hover:shadow-md *:hover:shadow-accent
        *:hover:-translate-y-1
        *:hover:scale-110 *:transition-all *:duration-700
      "  
    >
      <Link to={`${BASE_URL}resume`} className="btn-primary">
        مشاهده رزومه
      </Link>
      <Link to={`${BASE_URL}portfolio`} className="btn-secondary">
        مشاهده نمونه‌کارها
      </Link>
    </div>
  );
}
