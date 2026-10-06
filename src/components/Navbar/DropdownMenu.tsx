import { NavLink } from "react-router";

import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import { MenuItems } from "./menuItems";

export default function DropdownMenu() {
  return (
    <div className="md:hidden dropdown relative inline-flex [--auto-close:inside] [--offset:9]">
      <button
        id="mobile-menu-btn"
        type="button"
        className="dropdown-toggle btn btn-outline rounded-2xl p-1.5 dropdown-open:bg-base-content/10 dropdown-open:text-base-content"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
      >
        <HiOutlineBars3 className="size-6 dropdown-open:hidden" />
        <HiOutlineXMark className="size-6 hidden dropdown-open:block" />
      </button>
      <ul
        className="dropdown-menu dropdown-open:opacity-100 dropdown-open:ease-in dropdown-open:scale-100 mt-0 hidden w-50 left-0 scale-0 transition duration-300 ease-out shadow"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="mobile-menu-btn"
      >
        {MenuItems.map((item) => (
          <li key={item.title}>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "dropdown-active font-medium dropdown-item" : "dropdown-item")
              }
              to={item.path}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
