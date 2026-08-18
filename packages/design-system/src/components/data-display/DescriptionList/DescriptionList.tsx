import type { ReactNode } from "react";
import styles from "../display.module.css";

export interface DescriptionListItem {
  term: ReactNode;
  description: ReactNode;
}

export interface DescriptionListProps {
  items: DescriptionListItem[];
}

export function DescriptionList({ items }: DescriptionListProps) {
  return (
    <dl className={styles.descriptionList}>
      {items.map((item, index) => (
        <div key={index}>
          <dt className={styles.term}>{item.term}</dt>
          <dd className={styles.description}>{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}
