import { NavLink } from "react-router";
import { MenuItems } from "./menuItems";

export default function Navs() {
  return (
    <ul className="flex justify-center gap-8">
      {MenuItems.map((item) => (
        <li key={item.title}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "*:font-medium *:text-primary" : ""
            }
          >
            <span className="link link-animated hover:link-primary transition-colors">
              {item.title}
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
