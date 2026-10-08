import { createBrowserRouter } from "react-router";
import App from "./App";

import Main from "./app/main/page";
import Portfolio from "./app/portfolio/page";

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: App,
      children: [
        {
          index: true,
          Component: Main,
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