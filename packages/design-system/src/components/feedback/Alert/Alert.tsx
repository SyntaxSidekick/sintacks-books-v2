import type { ReactNode } from "react";
import styles from "../feedback.module.css";

export type AlertVariant = "info" | "success" | "warning" | "danger";
export interface AlertProps {
  title: ReactNode;
  children?: ReactNode;
  variant?: AlertVariant;
}

export function Alert({ title, children, variant = "info" }: AlertProps) {
  return (
    <div
      className={styles.alert}
      data-variant={variant}
      role={variant === "danger" ? "alert" : "status"}
    >
      <strong className={styles.title}>{title}</strong>
      {children ? <div>{children}</div> : null}
    </div>
  );
}
