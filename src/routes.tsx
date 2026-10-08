import { createBrowserRouter } from "react-router";
import App from "./App";

import Main from "./app/main/page";
import Portfolio from "./app/portfolio/page";
import ProjectDetails from "./app/portfolio/ProjectDetails/page";
import { projectItems } from "./app/portfolio/projectItems";

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
        {
          path: "/portfolio/:slug",
          loader: ({ params }) =>
            projectItems.find((item) => item.slug === params.slug),
          Component: ProjectDetails,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export default router;
