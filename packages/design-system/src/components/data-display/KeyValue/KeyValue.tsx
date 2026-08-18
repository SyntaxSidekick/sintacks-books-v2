import type { ReactNode } from "react";
import styles from "../display.module.css";

export interface KeyValueProps {
  label: ReactNode;
  value: ReactNode;
}

export function KeyValue({ label, value }: KeyValueProps) {
  return (
    <div className={styles.keyValue}>
      <span className={styles.key}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}
