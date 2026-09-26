import { useEffect } from "react";
import { themeInitialization } from "./lib/theme";

function App() {
  useEffect(() => {
    themeInitialization()
  }, []);
  
  return (
    <>
    </>
  );
}

export default App;
