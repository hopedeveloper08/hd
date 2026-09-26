import { useEffect } from "react";
import { themeInitialization } from "./lib/theme";
import { Outlet } from "react-router";
import Dock from "./features/Dock/Dock";

function App() {
  useEffect(() => {
    themeInitialization()
  }, []);
  
  return (
    <>
      <Dock />
      <Outlet />
    </>
  );
}

export default App;
