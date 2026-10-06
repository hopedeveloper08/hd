import { createRoot } from "react-dom/client";

import "flyonui/flyonui";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./routes.tsx";

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
