import { HiMiniChevronDown } from "react-icons/hi2";
import { themeItems } from "./themeItems";
import { useState, type ChangeEvent } from "react";

export default function Theme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "mintlify",
  );
  
  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="dropdown relative inline-flex [--auto-close:inside]">
      <button
        id="navbar-theme-dropdown"
        type="button"
        className="dropdown-toggle btn btn-primary btn-gradient"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Theme"
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
              className="theme-controller capitalize btn btn-text w-full justify-end"
              aria-label={`${item}${
                item === "mintlify"
                  ? " (Default light)"
                  : item === "spotify"
                    ? " (Default dark)"
                    : ""
              }`}
              value={item}
              onChange={(e) => handleThemeChange(e)}
              defaultChecked={item === theme}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
