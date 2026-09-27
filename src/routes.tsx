import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./home/page";
import Resume from "./resume/page";
import Portfolio from "./portfolio/page";

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: App,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "resume",
          Component: Resume,
        },
        {
          path: "portfolio",
          Component: Portfolio,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export default router;