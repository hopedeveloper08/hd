import { useEffect } from "react";

import { Outlet, useLocation } from "react-router";

import Navbar from "./components/Navbar/Navbar";

async function loadFlyonUI() {
  return import("flyonui/flyonui");
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const initFlyonUI = async () => {
      await loadFlyonUI();
    };

    initFlyonUI();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === "function"
      ) {
        window.HSStaticMethods.autoInit();
      }
    }, 100);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
