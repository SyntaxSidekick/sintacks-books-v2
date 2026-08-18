import type { HTMLAttributes } from "react";
import styles from "../display.module.css";
import { classNames } from "../../../utilities/classNames.js";

export type BadgeVariant = "success" | "warning" | "danger" | "info" | "neutral" | "brand";
export type BadgeSize = "small" | "medium";
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export function Badge({ variant = "neutral", size = "medium", className, ...props }: BadgeProps) {
  return (
    <span
      {...props}
      className={classNames(styles.badge, className)}
      data-variant={variant}
      data-size={size}
    />
  );
}
