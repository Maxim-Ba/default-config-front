import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { APP_ROUTES } from "shared/config/routeConfig/routeConfig";

const router = createBrowserRouter(APP_ROUTES);

// export default router;
export default function () {
  return <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />;
}
