import type { LucideIcon } from "lucide-react";

export type AppRouteGroup = "Overview" | "Business" | "Finances" | "Workspace" | "System";

export interface AppRouteMeta {
  id: string;
  label: string;
  path: string;
  group: AppRouteGroup;
  icon: LucideIcon;
  description: string;
  permission?: string;
  portal?: boolean;
}
