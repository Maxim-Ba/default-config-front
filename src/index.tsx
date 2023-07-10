import { createRoot } from "react-dom/client";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ErrorBoundaryProvider } from "app/providers/ErrorBoundaryProvider";
import { RouterProvider } from "./app/providers/RouterProvider";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ErrorBoundaryProvider>
    <ThemeProvider>{RouterProvider()}</ThemeProvider>
  </ErrorBoundaryProvider>,
);
