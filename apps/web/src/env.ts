import { parsePublicEnv } from "@sintacks/config";

const viteEnv = import.meta.env;

export const env = parsePublicEnv({
  APP_NAME: typeof viteEnv.VITE_APP_NAME === "string" ? viteEnv.VITE_APP_NAME : "Sintacks Books",
  APP_ENV: viteEnv.MODE === "production" ? "production" : "development",
  APP_VERSION: typeof viteEnv.VITE_APP_VERSION === "string" ? viteEnv.VITE_APP_VERSION : "0.1.0",
  WEB_PUBLIC_API_BASE_URL:
    typeof viteEnv.VITE_WEB_PUBLIC_API_BASE_URL === "string"
      ? viteEnv.VITE_WEB_PUBLIC_API_BASE_URL
      : typeof viteEnv.VITE_API_BASE_URL === "string"
        ? viteEnv.VITE_API_BASE_URL
        : "http://localhost:3010",
});
