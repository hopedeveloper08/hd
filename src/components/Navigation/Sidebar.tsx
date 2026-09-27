import SidebarHeader from "./components/SidebarHeader";
import Theme from "./components/Theme";

export default function Sidebar() {
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
        </div>
        <Theme />
      </div>
    </aside>
  );
}
