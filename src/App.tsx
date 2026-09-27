import { useEffect, useRef } from "react";
import { Outlet } from "react-router";

import { themeInitialization } from "./lib/theme";
import Sidebar from "./components/Navigation/Sidebar";
import Dock from "./components/Navigation/Dock";



function App() {
  const drawerRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    themeInitialization();
  }, []);

  return (
    <>
      <div className="drawer lg:drawer-open max-lg:hidden">
        <input
          ref={drawerRef}
          id="main-drawer"
          type="checkbox"
          className="drawer-toggle inline"
        />
        <div className="drawer-content">
          <Outlet />
        </div>
        <Sidebar />
      </div>
      <div className="block lg:hidden">
        <Dock />
        <main className=" h-[calc(100vh-8rem)] p-4 bg-base-100">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
