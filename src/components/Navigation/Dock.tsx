import { Link, useLocation } from "react-router";
import { menu } from "../../lib/menu";
import DockTheme from "./components/DockTheme";

export default function Dock() {
  const pathname = useLocation().pathname;

  return (
    <div className="dock dock-md md:dock-xl lg:hidden bg-base-200">
      {menu.map((item) => (
        <Link
          key={item.title}
          to={item.link}
          className={item.link === pathname ? "dock-active" : ""}
        >
          <item.Icon className="size-5 sm:size-6 md:size-7" />
          <span className="dock-label text-sm sm:text-base md:text-lg">{item.title}</span>
        </Link>
      ))}
      <DockTheme />
    </div>
  );
}
