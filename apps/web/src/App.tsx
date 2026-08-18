import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Diagnostics } from "./routes/Diagnostics.js";

const queryClient = new QueryClient();
const router = createBrowserRouter([{ path: "/", element: <Diagnostics /> }]);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
