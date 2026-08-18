import { AppProviders } from "./providers/index.js";
import { AppRouter } from "./router/index.js";

export function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}
