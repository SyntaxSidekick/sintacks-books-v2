import type { ReactNode } from "react";
import styles from "./ChartContainer.module.css";

export interface ChartContainerProps {
  title: ReactNode;
  summary: string;
  children: ReactNode;
}

export function ChartContainer({ title, summary, children }: ChartContainerProps) {
  return (
    <figure className={styles.root}>
      <figcaption className={styles.header}>
        <strong>{title}</strong>
        <span className={styles.summary}>{summary}</span>
      </figcaption>
      {children}
    </figure>
  );
}
