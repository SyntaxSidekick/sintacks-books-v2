import type { ReactNode } from "react";
import { QueryProvider } from "./QueryProvider.js";
import { ThemeProvider } from "./ThemeProvider.js";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  );
}
