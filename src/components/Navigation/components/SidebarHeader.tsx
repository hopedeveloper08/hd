import { Link } from "react-router";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { BASE_URL } from "../../../lib/constants";

export default function SidebarHeader() {
  return (
    <div className="flex justify-between items-center">
      <Link to={BASE_URL}>
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
