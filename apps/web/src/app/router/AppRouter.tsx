import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { RoutePending } from "../../shared/components/RoutePending.js";
import { appRoutes } from "./routes.js";

const router = createBrowserRouter(appRoutes);

export function AppRouter() {
  return (
    <Suspense fallback={<RoutePending />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
