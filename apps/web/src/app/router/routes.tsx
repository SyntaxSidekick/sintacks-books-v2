import { lazy } from "react";
import { Navigate, type RouteObject } from "react-router";
import { AppShell } from "../../layouts/app-shell/index.js";
import { ClientPortalBoundary } from "../../layouts/client-portal/index.js";
import { RouteError } from "../../shared/components/RouteError.js";

const OverviewPage = lazy(() =>
  import("../../pages/overview/index.js").then((module) => ({ default: module.OverviewPage })),
);
const SalesPage = lazy(() =>
  import("../../pages/sales/index.js").then((module) => ({ default: module.SalesPage })),
);
const ClientsPage = lazy(() =>
  import("../../pages/clients/index.js").then((module) => ({ default: module.ClientsPage })),
);
const ProjectsPage = lazy(() =>
  import("../../pages/projects/index.js").then((module) => ({ default: module.ProjectsPage })),
);
const DocumentsPage = lazy(() =>
  import("../../pages/documents/index.js").then((module) => ({ default: module.DocumentsPage })),
);
const FinancesPage = lazy(() =>
  import("../../pages/finances/index.js").then((module) => ({ default: module.FinancesPage })),
);
const ReportsPage = lazy(() =>
  import("../../pages/reports/index.js").then((module) => ({ default: module.ReportsPage })),
);
const TeamPage = lazy(() =>
  import("../../pages/team/index.js").then((module) => ({ default: module.TeamPage })),
);
const SettingsPage = lazy(() =>
  import("../../pages/settings/index.js").then((module) => ({ default: module.SettingsPage })),
);
const NotificationsPage = lazy(() =>
  import("../../pages/notifications/index.js").then((module) => ({
    default: module.NotificationsPage,
  })),
);
const AccessDeniedPage = lazy(() =>
  import("../../pages/access-denied/index.js").then((module) => ({
    default: module.AccessDeniedPage,
  })),
);
const NotFoundPage = lazy(() =>
  import("../../pages/not-found/index.js").then((module) => ({ default: module.NotFoundPage })),
);

export const appRoutes = [
  {
    path: "/",
    element: <AppShell />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Navigate replace to="/overview" /> },
      { path: "overview", element: <OverviewPage /> },
      { path: "sales", element: <SalesPage /> },
      { path: "clients", element: <ClientsPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "documents", element: <DocumentsPage /> },
      { path: "finances", element: <FinancesPage /> },
      { path: "reports", element: <ReportsPage /> },
      { path: "team", element: <TeamPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "notifications", element: <NotificationsPage /> },
      { path: "access-denied", element: <AccessDeniedPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/portal/*",
    element: <ClientPortalBoundary />,
  },
] satisfies RouteObject[];
