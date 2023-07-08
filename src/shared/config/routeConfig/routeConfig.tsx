import { RouteObject } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import App from "app/App";
import { MainPage } from "pages/MainPage";

export const ROUTES = {
  MAIN: "/",
  ABOUT: "/about",
};

export const APP_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTES.MAIN,
        element: <MainPage />,
      },
    ],
  },
];