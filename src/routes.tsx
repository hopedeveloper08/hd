import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./home/page";
import { BASE_URL } from "./lib/constants";
import Resume from "./resume/page";
import Portfolio from "./portfolio/page";

const router = createBrowserRouter([
  {
    path: `${BASE_URL}`,
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: `${BASE_URL}resume`,
        Component: Resume,
      },
      {
        path: `${BASE_URL}portfolio`,
        Component: Portfolio,
      },
    ],
  },
]);

export default router;
