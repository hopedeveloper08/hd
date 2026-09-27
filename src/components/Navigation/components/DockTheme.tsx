import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { themeChange } from "../../../lib/theme";

export default function DockTheme() {
  return (
    <div onClick={themeChange}>
      <HiOutlineMoon className="size-5 sm:size-6 md:size-7 dark:hidden" />
      <HiOutlineSun className="size-5 sm:size-6 md:size-7 hidden dark:inline" />
      <span className="dock-label text-sm sm:text-base md:text-lg">
        <span className="hidden dark:inline">تم روشن</span>
        <span className="dark:hidden">تم تاریک</span>
      </span>
    </div>
  );
}
