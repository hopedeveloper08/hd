import { useEffect, useState } from "react";

import Brand from "./Brand";
import DropdownMenu from "./DropdownMenu";
import Navs from "./Navs";
import Theme from "./Theme";

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
          fixed top-0 
          w-full
          z-50
          transition-all duration-300 ease-in-out
          ${isScrolling ? "bg-base-200 shadow-md shadow-base-300/20 backdrop-blur-sm" : "bg-transparent shadow-none"}
      `}
    >
      <div className="navbar lg:container lg:max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="navbar-start w-fit">
          <Brand />
        </div>
        <div className="navbar-center grow text-end md:text-center mx-4">
          <div className="md:hidden">
            <Theme />
          </div>
          <div className="max-md:hidden pt-2">
            <Navs />
          </div>
        </div>
        <div className="navbar-end w-fit">
          <div className="md:hidden">
            <DropdownMenu />
          </div>
          <div className="max-md:hidden">
            <Theme />
          </div>
        </div>
      </div>
    </header>
  );
}
