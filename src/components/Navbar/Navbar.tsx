import Brand from "./Brand";
import DropdownMenu from "./DropdownMenu";
import Navs from "./Navs";
import Theme from "./Theme";

export default function Navbar() {
  return (
    <header className="sticky">
      <div className="navbar lg:container py-6 px-4 sm:px-6 lg:px-8">
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
