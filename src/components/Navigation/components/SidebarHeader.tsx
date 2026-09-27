import { Link } from "react-router";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

export default function SidebarHeader() {
  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <img
          src="/logo.png"
          alt="hopedeveloper"
          className="size-12"
          loading="lazy"
        />
      </Link>
      <label
        htmlFor="main-drawer"
        aria-label="open sidebar"
        className="drawer-btn drawer-button"
      >
        <GoSidebarExpand className="size-6 is-drawer-open:hidden" />
        <GoSidebarCollapse className="size-6 is-drawer-close:hidden" />
      </label>
    </div>
  );
}
