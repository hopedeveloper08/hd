import type { IconType } from "react-icons";
import { HiOutlineHome } from "react-icons/hi2";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { RiChatSmile3Line } from "react-icons/ri";

type menuItem = {
  title: string;
  Icon: IconType;
  link: string;
};

export const menu: Array<menuItem> = [
  {
    title: "صفحه‌اصلی",
    Icon: HiOutlineHome,
    link: "/",
  },
  {
    title: "رزومه",
    Icon: CgFileDocument,
    link: "/resume",
  },
  {
    title: "نمونه‌کارها",
    Icon: HiOutlineSquares2X2,
    link: "/projects",
  },
];
