import type { LucideIcon } from "lucide-react";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface IconProps {
  icon: LucideIcon;
  size?: IconSize;
  label?: string;
  decorative?: boolean;
  className?: string;
}
