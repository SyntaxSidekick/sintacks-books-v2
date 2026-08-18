import { Card, EmptyState, PageHeader } from "@sintacks/design-system";
import styles from "../../styles/shared/components/ModulePlaceholder.module.css";

export interface ModulePlaceholderProps {
  title: string;
  description: string;
}

export function ModulePlaceholder({ title, description }: ModulePlaceholderProps) {
  return (
    <section className={styles.root} aria-labelledby="page-title">
      <PageHeader title={<span id="page-title">{title}</span>} description={description} />
      <Card className={styles.message}>
        <span className={styles.eyebrow}>Reserved module</span>
        <EmptyState title="Feature implementation has not started">
          This route is available so navigation, layout, permissions boundaries, and deep links can
          be validated before product workflows are built.
        </EmptyState>
      </Card>
    </section>
  );
}
