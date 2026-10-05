import Brand from "./Brand";
import DropdownMenu from "./DropdownMenu";
import Theme from "./Theme";

export default function Navbar() {
  return (
    <header className="navbar container py-5 px-6">
      <div className="navbar-start">
        <Brand />
      </div>
      <div className="navbar-center grow text-center">
        <Theme />
      </div>
      <div className="navbar-end w-fit">
        <DropdownMenu />
      </div>
    </header>
  );
}
