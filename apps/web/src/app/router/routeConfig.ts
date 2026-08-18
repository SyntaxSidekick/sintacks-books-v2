import { navigationItems } from "../config/navigation.js";

export const routeMetaByPath = new Map(
  navigationItems.filter((item) => item.path !== "*").map((item) => [item.path as string, item]),
);

export function getBreadcrumbs(pathname: string) {
  const current =
    routeMetaByPath.get(pathname) ?? routeMetaByPath.get(`/${pathname.split("/")[1]}`);
  const overview = routeMetaByPath.get("/overview");

  if (!current || current.path === "/overview" || !overview) {
    return current ? [current] : overview ? [overview] : [];
  }

  return [overview, current];
}
