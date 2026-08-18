import type { ButtonHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import type { ButtonSize } from "../Button/index.js";

export type IconButtonVariant = "primary" | "secondary" | "ghost" | "danger";

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: LucideIcon;
  label: string;
  variant?: IconButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  selected?: boolean;
}
