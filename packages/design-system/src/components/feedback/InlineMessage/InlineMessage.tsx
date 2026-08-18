import type { ReactNode } from "react";
import styles from "../feedback.module.css";
import type { AlertVariant } from "../Alert/index.js";

export interface InlineMessageProps {
  children: ReactNode;
  variant?: AlertVariant;
}

export function InlineMessage({ children, variant = "info" }: InlineMessageProps) {
  return (
    <p className={styles.message} data-variant={variant}>
      {children}
    </p>
  );
}
