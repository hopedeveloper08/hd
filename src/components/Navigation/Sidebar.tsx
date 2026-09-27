import { Link, useLocation } from "react-router";
import { menu } from "../../lib/menu";
import SidebarHeader from "./components/SidebarHeader";
import Theme from "./components/Theme";

export default function Sidebar() {
  const pathname = useLocation().pathname;

  return (
    <aside className="drawer-side is-drawer-close:overflow-visible">
      <label
        htmlFor="main-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div
        className="
          flex flex-col justify-between is-drawer-close:items-center
          min-h-full   
          bg-linear-to-r from-base-200 to-base-300
          is-drawer-close:w-18 is-drawer-open:w-64
          py-2 px-4
        "
      >
        <div className="flex flex-col">
          <SidebarHeader />
          <div className="divider h-0 m-0 py-1"></div>
          {menu.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="
                mt-2
                py-4
                drawer-btn 
                is-drawer-open:btn is-drawer-open:btn-ghost 
                is-drawer-open:hover:bg-primary/10 is-drawer-open:hover:border-primary/50
                is-drawer-open:justify-start
                is-drawer-close:flex
                is-drawer-close:tooltip is-drawer-close:tooltip-primary is-drawer-close:tooltip-left           
              "
              data-tip={item.title}
            >
              {item.link === pathname ? (
                <item.ActiveIcon className="size-7" />
              ) : (
                <item.Icon className="size-7" />
              )}
              <span className="font-normal text-lg is-drawer-close:hidden">{item.title}</span>
            </Link>
          ))}
        </div>
        <Theme />
      </div>
    </aside>
  );
}
