import { useState, type ChangeEvent } from "react";

import { HiMiniChevronDown } from "react-icons/hi2";

import { themeItems } from "./themeItems";

export default function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const handleThemeChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const newTheme = event.target.value;

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    event.target.checked = true;
  };

  return (
    <div className="dropdown relative inline-flex [--auto-close:inside]">
      <button
        id="navbar-theme-dropdown"
        type="button"
        className="dropdown-toggle btn btn-primary btn-gradient"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
      >
        تم
        <HiMiniChevronDown className="size-4" />
      </button>
      <ul
        className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60 max-h-120 overflow-auto"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="navbar-theme-dropdown"
      >
        {themeItems.map((item) => (
          <li key={item}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller capitalize btn btn-text w-full justify-start"
              aria-label={item}
              value={item}
              onChange={handleThemeChange}
              checked={item === theme}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
