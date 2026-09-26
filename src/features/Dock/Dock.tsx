import { Link, useLocation } from "react-router";
import { menu } from "../../lib/menu";

export default function Dock() {
  const pathname = useLocation().pathname;

  return (
    <div className="dock dock-md md:dock-xl lg:hidden">
      {menu.map((item) => (
        <Link
          to={item.link}
          className={item.link === pathname ? "dock-active" : ""}
        >
          <item.Icon className="size-5 sm:size-6 md:size-7" />
          <span className="dock-label text-sm sm:text-base md:text-lg">{item.title}</span>
        </Link>
      ))}
    </div>
  );
}
