import {createRoot} from "react-dom/client";
import {ThemeProvider} from "app/providers/ThemeProvider";
import {RouterProvider} from "./app/providers/RouterProvider";
import {ErrorBoundaryProvider} from "app/providers/ErrorBoundaryProvider";
const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ErrorBoundaryProvider>
    <ThemeProvider>{RouterProvider()}</ThemeProvider>
  </ErrorBoundaryProvider>
);
