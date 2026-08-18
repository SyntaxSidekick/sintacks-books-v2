import type { ReactNode } from "react";
import { classNames } from "../../utilities/classNames.js";
import styles from "./ChartContainer.module.css";

export interface ChartContainerProps {
  title: ReactNode;
  summary: string;
  children: ReactNode;
  className?: string | undefined;
}

export function ChartContainer({ title, summary, children, className }: ChartContainerProps) {
  return (
    <figure className={classNames(styles.root, className)}>
      <figcaption className={styles.header}>
        <strong>{title}</strong>
        <span className={styles.summary}>{summary}</span>
      </figcaption>
      {children}
    </figure>
  );
}
