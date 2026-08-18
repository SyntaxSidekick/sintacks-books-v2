import {
  Bell,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  FileText,
  FolderKanban,
  LayoutDashboard,
  Lock,
  ReceiptText,
  ScrollText,
  Settings,
  ShieldQuestion,
  Users,
} from "lucide-react";
import type { AppRouteMeta } from "../router/route.types.js";

export const navigationItems = [
  {
    id: "overview",
    label: "Overview",
    path: "/overview",
    group: "Overview",
    icon: LayoutDashboard,
    description: "Shell checkpoint and application orientation.",
  },
  {
    id: "sales",
    label: "Sales",
    path: "/sales",
    group: "Business",
    icon: ChartNoAxesCombined,
    description: "Sales workspace route reserved for future implementation.",
  },
  {
    id: "clients",
    label: "Clients",
    path: "/clients",
    group: "Business",
    icon: BriefcaseBusiness,
    description: "Client management route reserved for future implementation.",
  },
  {
    id: "projects",
    label: "Projects",
    path: "/projects",
    group: "Business",
    icon: FolderKanban,
    description: "Project workspace route reserved for future implementation.",
  },
  {
    id: "documents",
    label: "Documents",
    path: "/documents",
    group: "Business",
    icon: FileText,
    description: "Document workspace route reserved for future implementation.",
  },
  {
    id: "finances",
    label: "Invoices & Payments",
    path: "/finances",
    group: "Finances",
    icon: ReceiptText,
    description: "Financial operations route reserved for future implementation.",
  },
  {
    id: "reports",
    label: "Reports",
    path: "/reports",
    group: "Finances",
    icon: ScrollText,
    description: "Reporting route reserved for future implementation.",
  },
  {
    id: "team",
    label: "Team",
    path: "/team",
    group: "Workspace",
    icon: Users,
    description: "Team workspace route reserved for future implementation.",
  },
  {
    id: "settings",
    label: "Settings",
    path: "/settings",
    group: "Workspace",
    icon: Settings,
    description: "Settings route reserved for future implementation.",
  },
  {
    id: "notifications",
    label: "Notifications",
    path: "/notifications",
    group: "System",
    icon: Bell,
    description: "Notification center route reserved for future implementation.",
  },
  {
    id: "access-denied",
    label: "Access denied",
    path: "/access-denied",
    group: "System",
    icon: Lock,
    description: "Permission boundary demonstration.",
  },
  {
    id: "not-found",
    label: "Not found",
    path: "*",
    group: "System",
    icon: ShieldQuestion,
    description: "Fallback route for unknown paths.",
  },
] as const satisfies AppRouteMeta[];

export const primaryNavigationGroups = ["Overview", "Business", "Finances", "Workspace"] as const;

export const searchableNavigationItems = navigationItems.filter((item) => item.path !== "*");

export function getRouteMeta(pathname: string) {
  return navigationItems.find((item) => item.path !== "*" && pathname.startsWith(item.path));
}
