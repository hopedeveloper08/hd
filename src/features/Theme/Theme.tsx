import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { themeChange } from "../../lib/theme";
import { useEffect, useRef } from "react";

export default function Theme() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current)
      inputRef.current.checked = localStorage.theme === "dark";
  }, []);

  return (
    <label
      className="
      swap swap-rotate
      btn btn-ghost btn-circle
      p-6
      "
    >
      <input
        ref={inputRef}
        type="checkbox"
        className="theme-controller"
        onChange={themeChange}
      />
      <HiOutlineMoon className="swap-off size-10" />
      <HiOutlineSun className="swap-on size-10" />
    </label>
  );
}
