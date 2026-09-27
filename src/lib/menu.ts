import type { IconType } from "react-icons";
import {
  HiDocument,
  HiHome,
  HiOutlineDocument,
  HiOutlineHome,
  HiSquares2X2,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import { BASE_URL } from "./constants";

type menuItem = {
  title: string;
  Icon: IconType;
  ActiveIcon: IconType;
  link: string;
};

export const menu: Array<menuItem> = [
  {
    title: "صفحه‌اصلی",
    Icon: HiOutlineHome,
    ActiveIcon: HiHome,
    link: `${BASE_URL}`,
  },
  {
    title: "رزومه",
    Icon: HiOutlineDocument,
    ActiveIcon: HiDocument,
    link: `${BASE_URL}resume`,
  },
  {
    title: "نمونه‌کارها",
    Icon: HiOutlineSquares2X2,
    ActiveIcon: HiSquares2X2,
    link: `${BASE_URL}portfolio`,
  },
];
