import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods?.autoInit();
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;