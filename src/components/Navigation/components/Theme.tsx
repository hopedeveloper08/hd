import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { themeChange } from "../../../lib/theme";
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
        swap swap-flip
        drawer-btn is-drawer-open:btn-block 
        is-drawer-close:tooltip is-drawer-close:tooltip-primary is-drawer-close:tooltip-left           
      "
      data-tip="تغییر تم"
    >
      <input
        ref={inputRef}
        type="checkbox"
        className="theme-controller"
        onChange={themeChange}
      />
      <div className="swap-off flex items-center gap-2">
        <HiOutlineMoon className="size-8" />
        <span className="is-drawer-close:hidden font-normal">تم تاریک</span>
      </div>
      <div className="swap-on flex items-center gap-2">
        <HiOutlineSun className="size-8" />
        <span className="is-drawer-close:hidden font-normal">تم روشن</span>
      </div>
    </label>
  );
}
