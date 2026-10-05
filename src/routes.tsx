import { createBrowserRouter } from "react-router";
import App from "./App";

import { BASE_URL } from "./lib/constants";

import Main from "./app/main/page";

const router = createBrowserRouter(
  [
    {
      path: BASE_URL,
      Component: App,
      children: [
        {
          index: true,
          Component: Main,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export default router;